package com.hbomax.models;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="view")
public class View {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="view_id")
    private Integer viewId;

    @ManyToOne
    @JoinColumn(name = "user_view", referencedColumnName = "user_id")
    private ApplicationUser userView;

    @ManyToOne
    @JoinColumn(name = "title", referencedColumnName = "title_id")
    private Title title;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime viewDate;

    @Version
    private Long version;

    public View() {
        super();
    }

    public View(Integer viewId, ApplicationUser userView, Title title, LocalDateTime viewDate) {
        this.viewId = viewId;
        this.userView = userView;
        this.title = title;
        this.viewDate = viewDate;
    }

    public Integer getViewId() {
        return viewId;
    }

    public void setViewId(Integer viewId) {
        this.viewId = viewId;
    }

    public ApplicationUser getUserView() {
        return userView;
    }

    public void setUserView(ApplicationUser userView) {
        this.userView = userView;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public LocalDateTime getViewDate() {
        return viewDate;
    }

    public void setViewDate(LocalDateTime viewDate) {
        this.viewDate = viewDate;
    }
}
