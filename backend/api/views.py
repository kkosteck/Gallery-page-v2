from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from api.custom_permissions import IsVerified
from api.models import Image
from api.serializers import ImageSerializer
from django.http import JsonResponse
from rest_framework import status

class ImagesView(APIView):
    permission_classes = [IsAuthenticated, IsVerified]
    serializer_class = ImageSerializer

    def get(self, request, *args, **kwargs):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True, context={"request": request})

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            image = Image.objects.create(
                title = serializer.data.get("title") or "",
                description = serializer.data.get("description") or "",
                file = request.FILES["file"],
            )
            return Response(data = ImageSerializer(image).data)
        return Response(
            data = serializer.errors,
            status = status.HTTP_400_BAD_REQUEST
        )
