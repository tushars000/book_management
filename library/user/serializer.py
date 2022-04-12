from rest_framework import serializers
from .models import AdminUser

class AdminUserserilizer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = ['first_name','last_name','email','password']
        extra_kwargs = {'first_name': {'required': True, 'allow_blank': False}}
        extra_kwargs = {'last_name': {'required': True,'allow_blank': False}}

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True,allow_blank=False)
    email = serializers.CharField(required=True,allow_blank=False,max_length=255)