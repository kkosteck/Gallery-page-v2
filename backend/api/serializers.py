from rest_framework import serializers
from api.models import Image

class ImageSerializer(serializers.ModelSerializer):
    """Serilizer for :model:`api.Image`

    Args:
        serializers (ModelSerializer): model serilizer

    Returns:
        string: values of all fields of :model:`api.Image` in json format
    """
    class Meta:
        model = Image
        fields = '__all__'

    def get_image_url(self, image: Image) -> str:
        """create absolute media path to image file

        Args:
            image (Image): instance of currently serialized object

        Returns:
            string: absolute path for serilized image
        """
        request = self.context.get('request')
        image_url = image.image.url
        return request.build_absolute_uri(image_url)
