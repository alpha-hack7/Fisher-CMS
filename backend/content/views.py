from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category
from .serializers import CategorySerializer


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
