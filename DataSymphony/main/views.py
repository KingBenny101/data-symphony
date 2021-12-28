from django.db.models.query import QuerySet
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import VideoUpload

from .serializers import VideoUploadSerializer


from rest_framework.generics import ListAPIView, CreateAPIView
# Create your views here.


@api_view(['GET'])
def mainOverview(request):
    urls_list = {
        'List': '/list/',
        'View': '/view/<str:pk>/',
        'Create': '/create/',
        'Update': '/update/<str:pk>/',
        'Delete': '/delete/<str:pk>/',


    }
    return Response(urls_list)


@api_view(['GET'])
def mainList(request):

    lists = VideoUpload.objects.all()
    serializer = VideoUploadSerializer(lists, many=True)
    return Response(serializer.data)


# @api_view(['POST'])
# def mainCreate(request):
#     serializer = VideoUploadSerializer(data = request.data)


#     if serializer.is_valid():
#         print("Valid!!!")
#         serializer.save()

#     return Response(serializer.data)


class VideoUploadCreateAPIView(CreateAPIView):
    queryset = VideoUpload.objects.all()
    serializer_class = VideoUploadSerializer
