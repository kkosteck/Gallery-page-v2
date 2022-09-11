from django.urls import path
from api.views import ImagesView

urlpatterns = [
    path('images', ImagesView.as_view(), name="images_list"),
]
