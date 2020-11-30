
from model.common import send_request, request_commit


def citiesall():
    return send_request('SELECT * from cities;')


# A FAIRE EN DYNAMIQUE
def adminnewcity(city_list, zipcode):
    request_commit("INSERT INTO cities (city, zipcode) VALUES ((%s), (%s));", (city_list, zipcode))
    return 'ok'

# A FAIRE EN DYNAMIQUE
def admindeletecity(city_id):
    return request_commit('DELETE FROM cities WHERE cities.id = (%s);', city_id)


# A FAIRE EN DYNAMIQUE
def adminmodifycity(city, zipcode, city_id):
    return request_commit('UPDATE cities SET city = (%s), zipcode = (%s) WHERE cities.id = (%s);', (city, zipcode, city_id))
