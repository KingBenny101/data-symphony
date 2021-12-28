from django.urls import path
from . import views
from rest_framework.generics import CreateAPIView

from .views import VideoUploadCreateAPIView


urlpatterns = [
    path('',views.mainOverview,name="api-overview"),
    path('list/',views.mainList,name="api-list"),
    path('view/<str:pk>',views.mainView,name="api-view"),
    path('create/',VideoUploadCreateAPIView.as_view(),name="api-create"),
    path('update/<str:pk>',views.mainUpdate,name='api-update'),
    path('delete/<str:pk>',views.mainDelete,name='api=delete'),

]