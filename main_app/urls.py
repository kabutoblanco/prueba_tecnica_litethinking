from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import EnterpriseViewSet

router = DefaultRouter()
router.register('enterprise', EnterpriseViewSet, basename='enterprise-base')

urlpatterns = [
    path('api/', include(router.urls)),
]
