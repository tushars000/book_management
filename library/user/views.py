from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from django.http import HttpResponse
from .models import AdminUser
from .serializer import AdminUserserilizer, LoginSerializer
import json
from rest_framework.decorators import action
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
# Create your views here.


class AdminView(ViewSet):
    @action(methods=['POST'], detail=False, url_path='sign_up')
    def sign_up(self,request):
        data = json.loads(request.body)
        serializer = AdminUserserilizer(data=data)
        if not serializer.is_valid():
            return HttpResponse(json.dumps({
                "message": '{} : {}'.format(list(serializer.errors.keys())[0],list(serializer.errors.values())[0][0].title() )
            }),status=400,content_type="application/json")

            

        AdminUser().create_admin(data)

        return HttpResponse(json.dumps({
                "message":'User Created'
        }),status=201,content_type="application/json")

    @action(methods=['POST'], detail=False, url_path='login')
    def login(self,request):
        data = json.loads(request.body)
        serializer = LoginSerializer(data=data)
        if not serializer.is_valid():
            return HttpResponse(json.dumps(
                {
                     "message": '{} : {}'.format(list(serializer.errors.keys())[0],list(serializer.errors.values())[0][0].title() )
                }
            ),status=400,content_type="application/json")
        user = authenticate(email=data.get('email'), password=data.get('password'))
        if not user:
            return HttpResponse(json.dumps({
                "message":"email or password invalid"
        }),status=401,content_type="application/json")
        try:
            token = Token.objects.get(user_id=user.id)
        except Token.DoesNotExist:
            token = Token.objects.create(user=user)

        return HttpResponse(json.dumps({
                "token":token.key
        }),status=201,content_type="application/json")

        

    