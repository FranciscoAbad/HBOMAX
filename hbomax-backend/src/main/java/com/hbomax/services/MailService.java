package com.hbomax.services;

import org.springframework.stereotype.Service;

@Service
public class MailService {
    /*
    private final Gmail gmail;

    @Autowired
    public MailService(Gmail gmail){
        this.gmail=gmail;
    }

    public void sendEmail(String toAdress,String subject, String content) throws Exception{
        Properties props=new Properties();

        Session session= Session.getInstance(props,null);

        MimeMessage email= new MimeMessage(session);

        try{
            email.setFrom(new InternetAddress("unlafranciscoabad@gmail.com"));
            email.addRecipient(javax.mail.Message.RecipientType.TO,new InternetAddress(toAdress));
            email.setText(content);

            ByteArrayOutputStream buffer=new ByteArrayOutputStream();
            email.writeTo(buffer);

            byte[] rawMessageBytes= buffer.toByteArray();

            String encodedEmail= Base64.encodeBase64String(rawMessageBytes);

            Message message=new Message();
            message.setRaw(encodedEmail);

            message=gmail.users().messages().send("me",message).execute();

        }catch(Exception e){
            e.printStackTrace();
            throw new EmailFailedToSendException();
        }
    }*/
}
