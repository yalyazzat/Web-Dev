# Generated by Django 4.2 on 2023-04-12 07:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Company",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("description", models.TextField(max_length=200)),
                ("city", models.CharField(max_length=200)),
                ("address", models.TextField(max_length=200)),
            ],
            options={"verbose_name": "Company", "verbose_name_plural": "Companies",},
        ),
        migrations.CreateModel(
            name="Vacancy",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("description", models.TextField(max_length=200)),
                ("salary", models.FloatField()),
                (
                    "company",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.company"
                    ),
                ),
            ],
            options={"verbose_name": "Vacancy", "verbose_name_plural": "Vacancies",},
        ),
    ]
