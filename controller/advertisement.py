from flask import jsonify, Blueprint, request
from model.advertisement import advertisementall, oneadvertisement, newadvertisement, deleteadvertisement, modifyadvertisement
from controller.HTTPCode import *

advertisementsBp = Blueprint("advertisements", __name__)


@advertisementsBp.route('/advertisements', methods=["GET"])
def advertisements():
    return jsonify(advertisementall())


@advertisementsBp.route('/advertisements/<ad_id>', methods=["GET"])
def one_advertisement(ad_id):
    return jsonify(oneadvertisement(ad_id))


@advertisementsBp.route('/advertisements', methods=["POST"])
def new_advertisement():
    title = request.form["title"]
    description = request.form["description"]
    salary = request.form["salary"]
    company = request.form["company"]
    contract_types = request.form["contract_types"]
    city = request.form["city"]
    experience = request.form["experience"]
    worktime = request.form["worktime"]
    job = request.form["job"]
    newadvertisement(title, description, salary, company, contract_types, city, experience, worktime, job)
    return e200()


@advertisementsBp.route('/advertisements/<ad_id>', methods=["PATCH"])
def modify_advertisement(ad_id):
    title = request.form["title"]
    description = request.form["description"]
    salary = request.form["salary"]
    id_company = request.form["company"]
    id_contract_type = request.form["contract_types"]
    id_city = request.form["cities"]
    experience = request.form["experiences"]
    worktime = request.form["worktime"]
    id_job = request.form["job"]
    modifyadvertisement(title, description, salary, id_company, id_contract_type, id_city, experience, worktime, id_job, ad_id)
    return e200()


@advertisementsBp.route('/advertisements/<ad_id>', methods=["DELETE"])
def delete_advertisement(ad_id):
    deleteadvertisement(ad_id)
    return e200()

