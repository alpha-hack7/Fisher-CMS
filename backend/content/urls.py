from django.urls import path

from . import views

urlpatterns = [
    # category
    path("category/", views.category),
    path("category/<int:id>/", views.update_category),
    # post
    path("post/", views.upload_post),
    path("post/<int:id>/", views.update_post)
]
