from typing import DefaultDict
from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User
import uuid
from datetime import datetime   

# Create your models here.


defaultGraph = {
    "00:00:00" : False,
    "00:02:00" : True 
}


defaultTimestamps = {
    "00:00:00" : False,
    "00:02:00" : True 
}



class VideoUpload(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    video = models.FileField(upload_to='videos_uploaded', null=True,
                             validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])
    date_uploaded = models.DateTimeField(default=datetime.now,editable=False)
    proccessed = models.BooleanField(default=False,editable=False)
    timestamps = models.JSONField(null = True ,editable=False)
    graph = models.JSONField(null = True , editable = False)