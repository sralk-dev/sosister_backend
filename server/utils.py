from pytils.translit import slugify
from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination


class ResultsSetPagination(PageNumberPagination):
    page_size = 40
    page_size_query_param = 'page_size'
    max_page_size = 1000


class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        exclude = kwargs.pop('exclude', None)

        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        if fields:
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

        if exclude:
            disallowed = set(exclude)
            existing = set(self.fields)
            for field_name in disallowed:
                if field_name in existing:
                    self.fields.pop(field_name)


def get_unique_slug(model_instance, slugable_field_name, slug_field_name):
    slug = slugify(getattr(model_instance, slugable_field_name))
    unique_slug = slug
    extension = 1
    ModelClass = model_instance.__class__

    while ModelClass._default_manager.filter(
        **{slug_field_name: unique_slug}
    ).exists():
        unique_slug = '{}-{}'.format(slug, extension)
        extension += 1

    return unique_slug
