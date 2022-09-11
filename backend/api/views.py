from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from api.custom_permissions import IsVerified
from api.models import Image
from api.serializers import ImageSerializer
from django.http import JsonResponse

class ImagesView(APIView):
    permission_classes = [IsAuthenticated, IsVerified]

    def get(self, request, *args, **kwargs):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True, context={"request": request})

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        return JsonResponse({"test": "test"})
