from django.urls import path
from apps.dashboards.views import DashboardsView

urlpatterns = [
    path('api/1', DashboardsView.as_view()),

]
