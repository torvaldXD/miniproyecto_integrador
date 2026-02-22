from django.db import models
from django.contrib.auth.models import User

class Activity(models.Model):
    TYPES = [
        ('examen', 'Examen'),
        ('quiz', 'Quiz'),
        ('taller', 'Taller'),
        ('proyecto', 'Proyecto'),
        ('otro', 'Otro'),
    ]
    title = models.CharField(max_length=200)
    activity_type = models.CharField(max_length=20, choices=TYPES)
    course = models.CharField(max_length=200)
    event_date = models.DateTimeField(null=True, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities', null=True, blank=True)

    def __str__(self):
        return self.title

class Subtask(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pendiente'),
        ('done', 'Hecha'),
        ('postponed', 'Pospuesta'),
    ]
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, related_name='subtasks')
    name = models.CharField(max_length=200)
    target_date = models.DateField()
    estimated_hours = models.DecimalField(max_digits=4, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    note = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.activity.title})"

class UserConfig(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='config')
    daily_capacity = models.DecimalField(max_digits=4, decimal_places=2, default=6.0)

    def __str__(self):
        return f"Config for {self.user.username}"
