from django.db import models


# Create your models here.


class Dashboard(models.Model):
    phase = models.CharField(max_length=50)
    diag_group = models.CharField(max_length=50)
    arrive_name = models.CharField(max_length=50)
    set_date = models.DateField()
    type = models.CharField(max_length=100)
