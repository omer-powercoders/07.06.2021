from json import loads
from django.http import JsonResponse
from django.http import HttpResponseNotAllowed
from django.http import HttpResponseNotFound

def view_article(request, id):
    if request.method == 'GET':
          return JsonResponse({
        'id': id,
        'name': 'Something',
         
    })

    elif request.method == 'POST':
        data = loads(request.body)
        return JsonResponse ({
            'name' : data['name'],
            'id' : data['id']
    })

        # DELETE
    elif request.method == 'DELETE':
        return JsonResponse({
            'name' : 'Delete',
            'id' : id
    })

        # PATCH
    
    elif request.method == 'PATCH':
        data = loads(request.body)
        return JsonResponse({
            'name' : data['name'],
            'id' : data['id']
    })

    return HttpResponseNotAllowed ([('GET', 'POST', 'DELETE', 'PATCH')])
    
