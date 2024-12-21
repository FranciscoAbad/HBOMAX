package com.hbomax.services;


import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.hbomax.exceptions.UnableToResolvePhotoException;
import com.hbomax.exceptions.UnabledToSavePhotoException;
import com.hbomax.models.Image;
import com.hbomax.repositories.ImageRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;
import java.util.Set;


@Service
@Transactional
public class ImageService {

    @Value("${cloudinary.api.secret}")
    private String apiSecret;
    @Value("${cloudinary.api.key}")
    private String apiKey;
    @Value("${cloudinary.cloud.name}")
    private String cloudName;

    private final ImageRepository imageRepository;
    private final Cloudinary cloudinary;
   // private static final File DIRECTORY = new File("/home/francisco-abad/Projects/HBOMAX/hbomax-backend/img");
    //private static final String URL="http://localhost:8888/images/";

    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name",cloudName,
                "api_key",apiKey,
                "api_secret",apiSecret
        ));
    }



    public Image uploadImage(MultipartFile file, String prefix) throws UnabledToSavePhotoException {
        try{

            Map uploadResult=cloudinary.uploader().upload(file.getBytes(),ObjectUtils.asMap("public_id",prefix + "_" + System.currentTimeMillis()));
            String imageUrl = uploadResult.get("url").toString();
            String finalPrefix=prefix + System.currentTimeMillis();
            Image image = new Image(finalPrefix , file.getContentType(), null, imageUrl, prefix);
            return imageRepository.save(image);
            /*
            String extension="." + file.getContentType().split("/")[1];
            File img=File.createTempFile(prefix,extension,DIRECTORY);

            file.transferTo(img);

            String imageURL=URL+img.getName();

            Image i=new Image(img.getName(),file.getContentType(),img.getPath(),imageURL,prefix);

            Image saved=imageRepository.save(i);

            return saved;*/


        }catch(IOException e){
            throw new UnabledToSavePhotoException();
        }
    }

    public byte[] downloadImage(String filename) throws UnableToResolvePhotoException {
        try{
            Image image=imageRepository.findImageByImageName(filename).get();

            String filePath=image.getImagePath();

            byte[] imageBytes= Files.readAllBytes(new File(filePath).toPath());

            return imageBytes;
        }catch(IOException e){
            throw new UnableToResolvePhotoException();
        }
    }

    public String getImageType(String fileName){
        Image image=imageRepository.findImageByImageName(fileName).get();

        return image.getImageType();
    }

    public Set<Image> getAllImagesByPrefix(String prefix){
       return imageRepository.getAllImagesByPrefix(prefix);
    }


}