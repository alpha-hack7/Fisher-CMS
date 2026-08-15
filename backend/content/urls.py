from django.urls import path

from . import views

urlpatterns = [
    # category
    path("category/", views.category),
    path("category/<int:id>/", views.update_category),
    # post
]
