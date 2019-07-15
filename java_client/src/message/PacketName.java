package message;

import java.util.HashMap;
import java.util.Map;

public class PacketName {
    @SuppressWarnings("rawtypes")
	private static Map<Integer, String> m_PacketCreateMap=new HashMap<Integer, String>();
    private static void initPacket(){
       	
        int s=getCrc(PacketName.G_W_CLoginRequest);
        int d=getCrc(PacketName.A_C_LoginRequest);
        int l=getCrc(PacketName.W_C_SelectPlayerResponse);
        System.out.println(l);
        
        m_PacketCreateMap.put(l,"W_C_SelectPlayerResponse");
        m_PacketCreateMap.put(s,"G_W_CLoginRequest");
        m_PacketCreateMap.put(d,"A_C_LoginRequest");
   }
public static String C_A_LoginRequest="C_A_LoginRequest";
public static String C_W_ChatMessage="C_W_ChatMessage";
public static String W_C_ChatMessage="W_C_ChatMessage";
public static String G_W_CLoginRequest="G_W_CLoginRequest";
public static String A_C_LoginRequest="A_C_LoginRequest";
public static String W_C_SelectPlayerResponse="W_C_SelectPlayerResponse";
}
