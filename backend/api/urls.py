from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ActivityViewSet, SubtaskViewSet, UserConfigViewSet

router = DefaultRouter()
router.register(r'activities', ActivityViewSet)
router.register(r'subtasks', SubtaskViewSet)
router.register(r'config', UserConfigViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
