# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-07-23 10:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0006_homepartimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homeimage',
            name='docfile',
            field=models.FileField(upload_to='static/img/show/home/turns'),
        ),
        migrations.AlterField(
            model_name='homepartimage',
            name='part2_img',
            field=models.FileField(upload_to='static/img/show/home/second'),
        ),
        migrations.AlterField(
            model_name='homepartimage',
            name='part3_img',
            field=models.FileField(upload_to='static/imh/show/home/third'),
        ),
    ]