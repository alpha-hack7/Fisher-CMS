from django.urls import path

from . import views

urlpatterns = [
    path("dashboard-cards/", views.dashboard_cards),
    # category
    path("category/", views.category),
    path("category/<int:pk>/", views.update_category),
    # post
    path("posts/", views.posts),
    path("posts/draft/", views.draft_posts),
    path("post/", views.upload_post),
    path("post/<int:pk>/", views.update_post),
    # Video
    path("videos/", views.videos),
    path("videos/draft/", views.draft_videos),
    path("video/", views.upload_video),
    path("video/<int:pk>/", views.update_video),
]
