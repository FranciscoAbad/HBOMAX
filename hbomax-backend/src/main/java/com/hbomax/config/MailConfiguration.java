package com.hbomax.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class MailConfiguration {
/*
    private static final String APPLICATION_NAME="Hbomax";
    private static final JsonFactory JSON_FACTORY= GsonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH="tokens";
    private static final List<String> SCOPES= Collections.singletonList(GmailScopes.GMAIL_SEND);
    private static final String CREDENTIALS_FILE_PATH="/credentials.json";
    private Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {

        InputStream in= MailConfiguration.class.getResourceAsStream(CREDENTIALS_FILE_PATH);

        if(in==null){
            throw new FileNotFoundException("Credentials file not found");
        }
        GoogleClientSecrets clientSecrets=GoogleClientSecrets.load(JSON_FACTORY,new InputStreamReader(in));

        GoogleAuthorizationCodeFlow flow=new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT,JSON_FACTORY,clientSecrets,SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")
                .build();

        LocalServerReceiver receiver=new LocalServerReceiver.Builder().setPort(8888).build();

        Credential credential =new AuthorizationCodeInstalledApp(flow,receiver).authorize("user");

        return credential;
    }

    @Bean
    public Gmail getService(){
        NetHttpTransport HTTP_TRANSPORT;

        try{
            HTTP_TRANSPORT= GoogleNetHttpTransport.newTrustedTransport();

            return new Gmail.Builder(HTTP_TRANSPORT,JSON_FACTORY,getCredentials(HTTP_TRANSPORT))
                    .setApplicationName(APPLICATION_NAME)
                    .build();
        } catch(GeneralSecurityException | IOException e){
            e.printStackTrace();
            return null;
        }
    }

 */
}
