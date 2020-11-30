from flask import jsonify, Blueprint, request
from model.cities import citiesall, admindeletecity, adminmodifycity, adminnewcity
from controller.HTTPCode import *


citiesBp = Blueprint("cities", __name__)


@citiesBp.route('/cities', methods=["GET"])
def cities():
    return jsonify(citiesall())


@citiesBp.route('/cities/<city_id>', methods=["DELETE"])
def delete_city(city_id):
    admindeletecity(city_id)
    return jsonify(admindeletecity(city_id))


@citiesBp.route('/cities', methods=["POST"])
def new_city():
    city = request.form['city']
    zipcode = request.form['zipcode']
    adminnewcity(city, zipcode)
    return e200()


@citiesBp.route('/cities/<int:city_id>', methods=["PATCH"])
def modify_city(city_id):
    city = request.form['city']
    zipcode = request.form['zipcode']
    adminmodifycity(city, zipcode, city_id)
    return jsonify(adminmodifycity(city, zipcode, city_id))
