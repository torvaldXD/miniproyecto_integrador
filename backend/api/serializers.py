from rest_framework import serializers
from .models import Activity, Subtask, UserConfig

class SubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    subtasks = SubtaskSerializer(many=True, read_only=True)
    
    class Meta:
        model = Activity
        fields = ['id', 'title', 'activity_type', 'course', 'event_date', 'deadline', 'subtasks', 'owner']

class UserConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserConfig
        fields = '__all__'
