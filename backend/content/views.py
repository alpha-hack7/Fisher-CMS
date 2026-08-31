from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Category, Video, Status, Post
from .serializers import CategorySerializer, PostSerializer, VideoSerializer
from cloudinary.uploader import upload

@api_view(["GET", "POST"])
def category(request):
    """Function for creating and viewing categories"""
    if request.method == "GET":
        categories = Category.objects.all()
        print(categories)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return None


@api_view(["DELETE", "PATCH"])
def update_category(request, pk):
    """Function for updating categories"""
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist:
        return Response(
            {"detail": "Category not found"}, status=status.HTTP_404_NOT_FOUND
        )

    if request.method == "PATCH":
        new_category = request.data.get("category")
        category.name = new_category
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return None

@api_view(["POST"])
def upload_video(request):
    """Function for uploading videos to cloudinary and
    storing the video_url and video_public_id
    in the video relational table"""
    result = upload(
        request.FILES["video"],
        resource_type="video",
        folder="cms/videos"
    )
    thumbnail_result = upload(
        request.FILES["thumbnail"],
        resource_type="image",
        folder="cms/thumbnails"
    )
    category_1 = Category.objects.get(id=request.data["category"])
    video = Video.objects.create(
        category=category_1,
        title=request.data["title"],
        short_text_description=request.data["short_text"],
        video_url=result["secure_url"],
        video_public_id=result["public_id"],
        thumbnail_url=thumbnail_result["secure_url"],
        thumbnail_public_id=thumbnail_result["public_id"],
        status=Status.READY
    )
    serializer = VideoSerializer(video)

    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["GET"])
def videos(request):
    all_videos = Video.objects.all()
    serializer = VideoSerializer(all_videos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
def update_video(request, pk):
    pass

@api_view(["GET"])
def posts(request):
    all_posts = Post.objects.all().order_by("-created_at")
    serializer = PostSerializer(all_posts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
@api_view(["POST"])
def upload_post(request):
    """Upload Post to the Database in the Post Table"""
    serializer = PostSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["PATCH"])
def update_post(request, pk):
    """Update Post details"""
    post = get_object_or_404(Post, pk=pk)
    serializer = PostSerializer(post,data=request.data,partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data,status=status.HTTP_200_OK)