from django.db import models
from pytils.translit import slugify


class Ingridient(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    poster = models.ImageField(
        upload_to='ingridients/static/img/posters', blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True, max_length=255)
    prots = models.PositiveSmallIntegerField(blank=True, null=True)
    fats = models.PositiveSmallIntegerField(blank=True, null=True)
    carbs = models.PositiveSmallIntegerField(blank=True, null=True)
    calories = models.PositiveIntegerField(blank=True, null=True)
    base_weight = models.PositiveIntegerField(null=True, blank=True)
    base_unit = models.TextField(max_length=20, blank=True, null=True)
    dtcreate = models.DateTimeField(auto_now_add=True)
    dtupdate = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Ingridient, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
