from django.db import models


class Status(models.TextChoices):
    READY = "ready", "Ready"
    DRAFT = "draft", "Draft"


class Category(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Video(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="videos",
    )
    title = models.CharField(max_length=255, null=False, blank=False)
    short_text_description = models.CharField(max_length=255)
    status = models.CharField(
        max_length=10, choices=Status.choices, default=Status.DRAFT
    )
    video_url = models.URLField(null=True, blank=True)
    video_public_id = models.CharField(max_length=255, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="posts",
    )
    title = models.CharField(max_length=255, null=False, blank=False)
    created_at = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=10, choices=Status.choices, default=Status.DRAFT
    )

    def __str__(self):
        return self.title
