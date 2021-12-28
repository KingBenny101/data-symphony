from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User
import uuid
from datetime import datetime   

# Create your models here.


class VideoUpload(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    video = models.FileField(upload_to='videos_uploaded', null=True,
                             validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])
    date_uploaded = models.DateTimeField(default=datetime.now,editable=False)
    #user = models.ForeignKey(User, on_delete=models.CASCADE,editable=False)
