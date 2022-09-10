from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from api.custom_permissions import IsVerified
from api.models import Image
from api.serializers import ImageSerializer

class ImagesView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, IsVerified]
    queryset = Image.objects.all()

    def get(self, request, *args, **kwargs):
        serializer = ImageSerializer(self.get_queryset(), many=True, context={"request": request})

        return Response(serializer.data)
