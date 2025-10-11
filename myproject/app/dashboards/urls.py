from django.urls import path
from . import views
from django_distill import distill_path


urlpatterns = [
    path('', views.index, name='index'),  # homepage
    path('ui-buttons/', views.uibutton, name='ui-buttons'),
    path('ui-card/', views.uicard, name='ui-card'),
    path('ui-alerts/', views.uialerts, name='ui-alerts'),
    path('icon-tabler/', views.icontabler, name='icon-tabler'),
    path('ui-forms/', views.uiforms, name='ui-forms'),
    path('ui-typography', views.uitypography, name='ui-typography'),
    path('sample-page', views.samplepage, name="sample-page")
]