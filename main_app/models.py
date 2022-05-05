from django.db import models

from utilities.models import BaseModel


class Enterprise(BaseModel):
    name = models.CharField(max_length=255, verbose_name="Nombre")
    address = models.CharField(max_length=255, verbose_name="Dirección")
    nit = models.CharField(max_length=255, verbose_name="NIT")
    telephone = models.CharField(max_length=255, verbose_name="Teléfono")

    class Meta:
        verbose_name = 'Empresa'
        verbose_name_plural= 'Empresas'

    def __str__(self) -> str:
        return '[{}] {}'.format(self.id, self.name)
