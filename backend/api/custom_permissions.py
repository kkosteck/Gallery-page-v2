from rest_framework.permissions import BasePermission

class IsVerified(BasePermission):
    message = 'Viewing images is not allowed.'

    def has_permission(self, request, view):
        return request.user.verified