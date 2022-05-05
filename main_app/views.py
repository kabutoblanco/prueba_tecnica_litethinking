from rest_framework import viewsets, permissions

from .models import Enterprise
from .serializers import EnterpriseSerializer


# Create your views here.
class EnterpriseViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = EnterpriseSerializer

    def get_queryset(self):
        search = self.request.GET.get('search', '')
        return Enterprise.objects.filter(name__icontains=search)