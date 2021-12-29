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
        'Report' : '/report/<str:pk>',


    }
    return Response(urls_list)


@api_view(['GET'])
def mainList(request):

    lists = VideoUpload.objects.all()
    serializer = VideoUploadSerializer(lists, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def mainView(request,pk):
    entry = VideoUpload.objects.get(id = pk)
    serializer = VideoUploadSerializer(entry,many=False)

    return Response(serializer.data)

@api_view(['POST'])
def mainUpdate(request,pk):
    prev_data = VideoUpload.objects.get(id=pk)
    serializer = VideoUploadSerializer(instance=prev_data,data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


@api_view(['DELETE'])
def mainDelete(request,pk):
    entry = VideoUpload.objects.get(id=pk)
    entry.delete()
    return Response(f'Item {pk} Successfully Deleted!!!')


@api_view(['GET'])
def mainReport(request,pk):

    try:
        entry = VideoUpload.objects.get(id = pk)
        serializer = VideoUploadSerializer(entry,many=False)
        #parseData(serializer.data)
        return Response(serializer.data)

    except VideoUpload.DoesNotExist:
        return Response(f'Entry {pk} not found')


class mainCreate(CreateAPIView):
    queryset = VideoUpload.objects.all()
    serializer_class = VideoUploadSerializer




