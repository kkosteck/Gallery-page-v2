from django.db import models

class BaseModel(models.Model):
    """Parent class for all models"""
    
    created = models.DateTimeField(auto_now_add=True, help_text="element creation timestamp")
    updated = models.DateTimeField(auto_now=True, help_text="last modification timestamp")

    class Meta:
        abstract = True

class Image(BaseModel):
    """model which contains all uploaded images"""
    MEDIA_TYPES = [
        ("image", "Image"),
        ("video", "Video")
    ]
    
    title = models.CharField(max_length=256, blank=True)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='uploads/')
    media_type = models.CharField(choices=MEDIA_TYPES, max_length = 5)

    def __str__(self):
        return f"{self.id} - {self.title}"
