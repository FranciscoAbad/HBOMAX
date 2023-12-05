package com.hbomax.models;


import jakarta.persistence.*;

@Entity
@Table(name="genre")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="genre_id")
    private int id;
    @Column(name="genre")
    private String genre;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="genre_picture", referencedColumnName="image_id")
    private Image genrePicture;

    public Genre() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Image getGenrePicture() {
        return genrePicture;
    }

    public void setGenrePicture(Image genrePicture) {
        this.genrePicture = genrePicture;
    }
}
