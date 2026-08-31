from rest_framework import serializers

from .models import Category, Post, Video


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            "id",
            "name",
            "created_at",
        )


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "id",
            "category",
            "title",
            "short_text",
            "description",
            "status",
            "created_at",
        )


class VideoSerializer(serializers.ModelSerializer):
    video = serializers.FileField(write_only=True, required=False)

    class Meta:
        model = Video
        fields = (
            "id",
            "category",
            "title",
            "short_text_description",
            "status",
            "video",
            "video_url",
            "video_public_id",
            "thumbnail_public_id",
            "thumbnail_url",
            "created_at",
            "updated_at",
        )
        read_only_fields = (
            "video_url",
            "video_public_id",
        )
