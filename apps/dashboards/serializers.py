from rest_framework import serializers
from apps.dashboards.models import Dashboard


class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = '__all__'