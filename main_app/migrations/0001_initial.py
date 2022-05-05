# Generated by Django 3.2 on 2022-05-05 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Enterprise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_record', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de registro')),
                ('date_update', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')),
                ('is_active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=255, verbose_name='Nombre')),
                ('address', models.CharField(max_length=255, verbose_name='Dirección')),
                ('nit', models.CharField(max_length=255, verbose_name='NIT')),
                ('telephone', models.CharField(max_length=255, verbose_name='Teléfono')),
            ],
            options={
                'verbose_name': 'Empresa',
                'verbose_name_plural': 'Empresas',
            },
        ),
    ]