from django.db import models

class BaseModel(models.Model):
    """Parent class for all models"""
    
    created = models.DateTimeField(auto_now_add=True, help_text="element creation timestamp")
    updated = models.DateTimeField(auto_now=True, help_text="last modification timestamp")

    class Meta:
        abstract = True

class Image(BaseModel):
    """model which contains all uploaded images"""
    
    title = models.CharField(max_length=256)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.title
