from rest_framework.response import Response
from rest_framework import generics
from api.models import Image
from api.serializers import ImageSerializer

class ImagesView(generics.RetrieveAPIView):
    queryset = Image.objects.all()

    def get(self, request, *args, **kwargs):
        serializer = ImageSerializer(self.get_queryset(), many=True, context={"request": request})

        return Response(serializer.data)
