from djoser.serializers import UserSerializer


class ExtendedUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = [
            "email",
            "id",
            "username",
            "verified",
        ]
