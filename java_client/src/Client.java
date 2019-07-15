import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

import org.apache.log4j.Logger;

import message.Message.Ipacket.Builder;

/**
 * 客户端
 */
public class Client{
	private static Logger logger = Logger.getLogger(Client.class);
    private static String serverInetAddress = "127.0.0.1";
    private static int serverPort = 31700;
    private static Socket client = null;
    private static OutputStream os = null;
    private static InputStream is = null;
    private static boolean alive = true;
    private static  int  Default_Ipacket_Stx = 39;
    private static  int  Default_Ipacket_Ckx = 114;
    private static String BUILD_NO = "1,5,1,1";
    /**
     * 客户端连接服务器
     */
    public void init() {
    	System.out.println("启动");
        try {
            //建立连接
            client = new Socket(serverInetAddress, serverPort);
            //数据流发送数据
            os = client.getOutputStream();
            //数据流接收数据
            is = client.getInputStream();
            byte[] b = new byte[1024];
            int length = 0;
            while (alive) {
                //接收从服务器发送回来的消息
                length = is.read(b);
                if (length != -1) {
                    onMsg(b);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                //关流
                os.close();
                client.close();
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 关闭客户端
     */
    public  void close() {
        sendMsg("{\"type\":\"CLOSE\"}");
        alive = false;
    }
	public  Builder getPacket(long id, int destservertype){
		Builder  packet= message.Message.Ipacket.newBuilder();
		packet.setStx(Default_Ipacket_Stx);
		packet.setDestServerType(destservertype);
		packet.setCkx(Default_Ipacket_Ckx);
		packet.setId(id);
	return packet;
	}
	/*
	 * 启程程序账号登陆
	 */
   public  void AccountLogin(){
	   message.Client.C_A_LoginRequest.Builder personBuilder =message.Client.C_A_LoginRequest.newBuilder();
       personBuilder.setPacketHead(getPacket(0,message.Message.SERVICE.ACCOUNTSERVER_VALUE));
       personBuilder.setAccountName("admin");
       personBuilder.setSocketId(0);
       personBuilder.setBuildNo(BUILD_NO);
       message.Client.C_A_LoginRequest person = personBuilder.build();
       byte[] buff = person.toByteArray();
       System.out.println("登陆");
       sendMsg("C_A_LoginRequest",buff);
   }
    /**
     * 发送消息
     */
    public  void sendMsg(String msg) {
        try {
            //调用发送
            os.write(msg.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public  void sendMsg(String packedHead,byte[] buff) {
        try {
            //调用发送
        	System.out.println("发包");
        	byte[] data=GetData(packedHead,buff);
        	System.out.println(new String(data));
            os.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	public  byte[] GetData(String packedHead,byte[] buff){
		 byte[] end="♡♡♡".getBytes();
		 java.util.zip.CRC32 crc=new java.util.zip.CRC32();
        crc.update(packedHead.toLowerCase().getBytes());
        int crcint=new Long(crc.getValue()).intValue();
        byte[] idStr =toLH(crcint);
        byte[] data=byteMerger(idStr,buff,end);
        return data;
	}
	 public  byte[] byteMerger(byte[] bt1, byte[] bt2,byte[] bt3){  
	        byte[] bt4 = new byte[bt1.length+bt2.length];  
	        System.arraycopy(bt1, 0, bt4, 0, bt1.length);  
	        System.arraycopy(bt2, 0, bt4, bt1.length, bt2.length); 
	        byte[] bt5 = new byte[bt4.length+bt3.length]; 
	        System.arraycopy(bt4, 0, bt5, 0, bt4.length);  
	        System.arraycopy(bt3, 0, bt5, bt4.length, bt3.length);
	        return bt5;  
	    } 
	public  byte[] toLH(int n) {
	    byte[] b = new byte[4];
	    b[0] = (byte) (n & 0xff);
	    b[1] = (byte) (n >> 8 & 0xff);
	    b[2] = (byte) (n >> 16 & 0xff);
	    b[3] = (byte) (n >> 24 & 0xff);
	    return b;
	}
    /**
     * 收到消息的回调
     */
    private  void onMsg(byte[] buff) {
    	logger.debug(new String(buff));  
    }
}