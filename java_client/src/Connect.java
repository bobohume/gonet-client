import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import org.apache.log4j.Logger;

import message.PacketName;
import message.Message.Ipacket.Builder;

public class Connect {
    private static final ThreadLocal<Socket> threadConnect = new ThreadLocal<Socket>(); 
    private static Logger logger = Logger.getLogger(Connect.class);
    private static final String HOST = "192.168.1.119";

    private static final int PORT = 31700;
    
    private static Socket client;
    
    private static OutputStream outStr = null;
    private static InputStream inStr = null;
    private static byte[] m_pInBuffer=new byte[1024*4];
    private static Thread tRecv = new Thread(new RecvThread());
    private static Thread tKeep = new Thread(new KeepThread());
    private static  int  Default_Ipacket_Stx = 39;
    private static  int  Default_Ipacket_Ckx = 114;
    private static String BUILD_NO = "1,5,1,1";
    private static byte[] endByte="♡♡♡".getBytes();
    public static void connect() throws UnknownHostException, IOException  {
        client = threadConnect.get();
        if(client == null){
            client = new Socket(HOST, PORT);
            threadConnect.set(client);
            //tKeep.start();
        }
        outStr = client.getOutputStream();
        inStr = client.getInputStream();
    }
    private static int getCrc(String packetStr){
    	 java.util.zip.CRC32 crc=new java.util.zip.CRC32();
        crc.update(packetStr.toLowerCase().getBytes());
        int crcint=new Long(crc.getValue()).intValue();
        System.out.println(crcint);
        //byte[] dd=toLH(crcint);
        //int ss=Bytes2Int_LE(dd);
        return crcint;
    }
    public static void sendMsg(String packedHead,byte[] buff) {
        try {
            //调用发送
        	byte[] data=GetData(packedHead,buff);
        	outStr.write(data);
//        	outStr.flush();
//        	client.shutdownOutput();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void disconnect() {
        try {
            outStr.close();
            inStr.close();
            client.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
	public static Builder getPacket(long id, int destservertype){
		Builder  packet= message.Message.Ipacket.newBuilder();
		packet.setStx(Default_Ipacket_Stx);
		packet.setDestServerType(destservertype);
		packet.setCkx(Default_Ipacket_Ckx);
		packet.setId(id);
	return packet;
	}
    public static void AccountLogin(){
 	   message.Client.C_A_LoginRequest.Builder personBuilder =message.Client.C_A_LoginRequest.newBuilder();
        personBuilder.setPacketHead(getPacket(0,message.Message.SERVICE.ACCOUNTSERVER_VALUE));
        personBuilder.setAccountName("admin");
        personBuilder.setSocketId(0);
        personBuilder.setBuildNo(BUILD_NO);
        message.Client.C_A_LoginRequest person = personBuilder.build();
        byte[] buff = person.toByteArray();
        sendMsg("C_A_LoginRequest",buff);
    }
	public static byte[] GetData(String packedHead,byte[] buff){
		 java.util.zip.CRC32 crc=new java.util.zip.CRC32();
       crc.update(packedHead.toLowerCase().getBytes());
       int crcint=new Long(crc.getValue()).intValue();
       System.out.println(crcint);
       byte[] idStr =toLH(crcint);
       byte[] data=byteMerger(idStr,buff,endByte);
       return data;
	}
	 public static byte[] byteMerger(byte[] bt1, byte[] bt2,byte[] bt3){  
	        byte[] bt4 = new byte[bt1.length+bt2.length];  
	        System.arraycopy(bt1, 0, bt4, 0, bt1.length);  
	        System.arraycopy(bt2, 0, bt4, bt1.length, bt2.length); 
	        byte[] bt5 = new byte[bt4.length+bt3.length]; 
	        System.arraycopy(bt4, 0, bt5, 0, bt4.length);  
	        System.arraycopy(bt3, 0, bt5, bt4.length, bt3.length);
	        return bt5;  
	    } 
	public static byte[] toLH(int n) {
	    byte[] b = new byte[4];
	    b[0] = (byte) (n & 0xff);
	    b[1] = (byte) (n >> 8 & 0xff);
	    b[2] = (byte) (n >> 16 & 0xff);
	    b[3] = (byte) (n >> 24 & 0xff);
	    return b;
	}
    private static class KeepThread implements Runnable {
        public void run() {
            try {
                System.out.println("=====================开始发送心跳包==============");
                while (true) {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                    System.out.println("发送心跳数据包");
                    outStr.write("send heart beat data package !".getBytes());
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }
    private static class RecvThread implements Runnable {
        @SuppressWarnings("unused")
		public void run() {
            try {
                System.out.println("开始接收数据");
                int nPacketSize=0;
                while (true) {
                	 byte[] b = new byte[1024];
                    int r = inStr.read(b);
                    if(r>-1){
                    	int endIndex=seekToTcpEnd(0,b);
                    	if(endIndex<=0){//没收到全包，暂存数据
                    		System.arraycopy(b,0, m_pInBuffer,nPacketSize, b.length);
                    		nPacketSize+=b.length;
                    	}
                    	if(endIndex>0){//找到数据包结束符号
                    		System.arraycopy(b,0,m_pInBuffer,nPacketSize,endIndex+endByte.length);//组合完整数据包
                    		int nCurSize = 0;//数据包结束位置
                    		byte[] crc=new byte[4];//包头byte
                    		System.arraycopy(m_pInBuffer,0,crc,0,crc.length);//取出包头
                    		nCurSize=seekToTcpEnd(0,m_pInBuffer);//获取尾部标识在byte[]位置
                    		byte[] packet=new byte[nCurSize-crc.length];//初始化protobuf数据大小
                    		System.arraycopy(m_pInBuffer,crc.length, packet,0,nCurSize-crc.length);//截取protobuf流
                    		String packetStr="";
                    		int packetID=Bytes2Int_LE(crc);
                    		System.out.println(packetID);
//                    		if(m_PacketCreateMap.containsKey(packetID)){//获取包头ID
//                    			packetStr=m_PacketCreateMap.get(packetID).toString();
//                    		}
                    		switch (packetStr) {//判断包头，解析数据
							case "W_C_SelectPlayerResponse":
								message.Message.W_C_SelectPlayerResponse m=message.Message.W_C_SelectPlayerResponse.parseFrom(packet);
								List<message.Message.PlayerData> list=m.getPlayerDataList();
								logger.debug(list.get(0).getPlayerName());
								break;

							default:
								break;
							}
                    			
                    	}
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }
    public static int seekToTcpEnd(int id,byte[] buff){
    	int i=ByteIndexOf(buff,endByte);
    	return i;
    }
    public static int ByteIndexOf(byte[] srcBytes, byte[] searchBytes)
    {
        if (srcBytes == null) { return -1; }
        if (searchBytes == null) { return -1; }
        if (srcBytes.length == 0) { return -1; }
        if (searchBytes.length == 0) { return -1; }
        if (srcBytes.length < searchBytes.length) { return -1; }
        for (int i = 0; i < srcBytes.length - searchBytes.length; i++)
        {
            if (srcBytes[i] == searchBytes[0])
            {
                if (searchBytes.length == 1) { return i; }
                boolean flag = true;
                for (int j = 1; j < searchBytes.length; j++)
                {
                    if (srcBytes[i + j] != searchBytes[j])
                    {
                        flag = false;
                        break;
                    }
                }
                if (flag) { return i; }
            }
        }
        return -1;
    }  
    /**
     * 转换byte数组为int（小端）
     * @return
     * @note 数组长度至少为4，按小端方式转换,即传入的bytes是小端的，按这个规律组织成int
     */
    public static int Bytes2Int_LE(byte[] bytes){
        if(bytes.length < 4)
            return -1;
        int iRst = (bytes[0] & 0xFF);
        iRst |= (bytes[1] & 0xFF) << 8;
        iRst |= (bytes[2] & 0xFF) << 16;
        iRst |= (bytes[3] & 0xFF)<< 24;
 
        return iRst;
    }
 
 
 
    /**
     * 转换byte数组为int（大端）
     * @return
     * @note 数组长度至少为4，按小端方式转换，即传入的bytes是大端的，按这个规律组织成int
     */
    public static int Bytes2Int_BE(byte[] bytes){
        if(bytes.length < 4)
            return -1;
        int iRst = (bytes[0] << 24) & 0xFF;
        iRst |= (bytes[1] << 16) & 0xFF;
        iRst |= (bytes[2] << 8) & 0xFF;
        iRst |= bytes[3] & 0xFF;
 
        return iRst;
    }
    public static void main(String[] args) throws InterruptedException {
        try {
            Connect.connect();
            tRecv.start();
            Connect.AccountLogin();
//            Timer timer = new Timer();
//                timer.schedule(new TimerTask() {
//                 public void run() {
//                	 System.out.println();
//               }
//              }, 1000, 5000);
           
        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}