from django.urls import path
from . import views
from rest_framework.generics import CreateAPIView

from .views import VideoUploadCreateAPIView


urlpatterns = [
    path('',views.mainOverview,name="api-overview"),
    path('list/',views.mainList,name="api-list"),
    #path('create/',views.mainCreate,name="api-create"),
    path('create/',VideoUploadCreateAPIView.as_view(),name="create"),


]