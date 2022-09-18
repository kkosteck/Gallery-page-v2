from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from api.custom_permissions import IsVerified
from api.models import Image
from api.serializers import ImageSerializer
from api.scripts.handling_files import get_file_type
from rest_framework import status

class ImagesView(APIView):
    permission_classes = [IsAuthenticated, IsVerified]
    serializer_class = ImageSerializer

    def get(self, request, *args, **kwargs):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True, context={"request": request})

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        file_type = get_file_type(request.FILES["file"].name)
        if file_type not in ["image", "video"]:
            return Response(
                data = {"message": "Uploaded file has to be image or video format!"},
                status = status.HTTP_400_BAD_REQUEST
            )
        request.data["media_type"] = file_type
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            image = Image.objects.create(
                title = serializer.data.get("title") or "",
                description = serializer.data.get("description") or "",
                file = request.FILES["file"],
                media_type = file_type
            )
            return Response(data = ImageSerializer(image).data)
        return Response(
            data = serializer.errors,
            status = status.HTTP_400_BAD_REQUEST
        )
