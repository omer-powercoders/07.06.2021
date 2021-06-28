from django.db.models import Model, CharField, TextField, DecimalField, URLField

class Product(Model):
    title = CharField(max_length=50)
    description = TextField(default="")
    price= DecimalField(max_digits=10, decimal_places=2, default="0.0")
    category = CharField(max_length=50, default="electronics")
    image = URLField(default="")




