# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-07-22 15:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0004_auto_20160722_1547'),
    ]

    operations = [
        migrations.DeleteModel(
            name='HomePart2Image',
        ),
        migrations.DeleteModel(
            name='HomePart3Image',
        ),
    ]