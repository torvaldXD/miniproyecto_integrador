from rest_framework import viewsets
from .models import Activity, Subtask, UserConfig
from .serializers import ActivitySerializer, SubtaskSerializer, UserConfigSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class SubtaskViewSet(viewsets.ModelViewSet):
    queryset = Subtask.objects.all()
    serializer_class = SubtaskSerializer

class UserConfigViewSet(viewsets.ModelViewSet):
    queryset = UserConfig.objects.all()
    serializer_class = UserConfigSerializer
