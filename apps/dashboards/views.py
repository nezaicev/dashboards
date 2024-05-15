from django.shortcuts import render
from rest_framework.views import APIView
from apps.dashboards.models import Dashboard
from rest_framework.response import Response
from django.db.models import Count


# Create your views here.


class DashboardsView(APIView):
    def get(self, request):
        result = []
        if request.query_params['month'] == str(0):
            values = Dashboard.objects.values('phase').annotate(
                total=Count('id'))
        else:
            values = Dashboard.objects.filter(set_date__month=request.query_params['month']).values('phase').annotate(
                total=Count('id'))

        for index, item in enumerate(values):
            result.append({'id': index, 'value': item['total'], 'label': item['phase']})
        return Response(result)
