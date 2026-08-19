from cloudinary.templatetags import cloudinary
from django.db.models import Model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category, Video, Status
from .serializers import CategorySerializer, PostSerializer
from cloudinary.uploader import upload

# Create your views here.
# category
@api_view(["GET", "POST"])
def category(request):
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
def update_category(request, id):
    try:
        category = Category.objects.get(id=id)
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

def upload_video(request):
    result = upload(
        request.FILES["video"],
        resource_type="video",
        folder="cms/videos"
    )
    video = Video.objects.create(
        title=request.data["title"],
        short_text_description=request.data["short_text_description"],
        video_url=result["secure_url"],
        video_public_id=result["public_id"],
        status=Status.READY
    )

@api_view(["POST"])
def upload_post(request):
    serializer = PostSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["PATCH"])
def update_post(request):
    pass