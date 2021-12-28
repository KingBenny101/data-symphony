from .models import VideoUpload
from rest_framework import serializers


class VideoUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoUpload
        fields = '__all__'