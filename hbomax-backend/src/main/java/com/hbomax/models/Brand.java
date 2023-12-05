package com.hbomax.models;

import jakarta.persistence.*;

@Entity
@Table
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "brand_id")
    private Integer brandId;

    @Column(name = "brand_name")
    private String brandName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="brand_logo", referencedColumnName="image_id")
    private Image brandLogo;

    public Brand(Integer brandId, String brandName, Image brandLogo) {
        this.brandId = brandId;
        this.brandName = brandName;
        this.brandLogo = brandLogo;
    }

    public Brand() {
    }

    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public Image getBrandLogo() {
        return brandLogo;
    }

    public void setBrandLogo(Image brandLogo) {
        this.brandLogo = brandLogo;
    }
}
