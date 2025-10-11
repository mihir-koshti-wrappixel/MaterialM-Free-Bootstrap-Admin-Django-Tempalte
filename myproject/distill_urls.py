from django_distill import distill_path
from app.dashboards import views as dash_views
from app.authentication import views as auth_views

def no_params():
    return None

urlpatterns = [
    # Dashboards
    distill_path('', dash_views.index, name='index', distill_func=no_params),
    distill_path('ui-buttons/', dash_views.uibutton, name='ui-buttons', distill_func=no_params),
    distill_path('ui-card/', dash_views.uicard, name='ui-card', distill_func=no_params),
    distill_path('ui-alerts/', dash_views.uialerts, name='ui-alerts', distill_func=no_params),
    distill_path('icon-tabler/', dash_views.icontabler, name='icon-tabler', distill_func=no_params),
    distill_path('ui-forms/', dash_views.uiforms, name='ui-forms', distill_func=no_params),
    distill_path('ui-typography', dash_views.uitypography, name='ui-typography', distill_func=no_params),
    distill_path('sample-page', dash_views.samplepage, name="sample-page", distill_func=no_params),

    # Authentication
    distill_path('login/', auth_views.login, name='login', distill_func=no_params),
    distill_path('register/', auth_views.register, name='register', distill_func=no_params),
]
