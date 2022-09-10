from django.contrib import admin
from api.models import Image

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass