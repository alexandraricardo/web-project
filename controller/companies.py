from flask import jsonify, Blueprint, request
from model.companies import companiesall, onecompany, newcompany, deletecompany, modifycompany
from controller.HTTPCode import *


companiesBP = Blueprint("companies", __name__)


@companiesBP.route('/companies', methods=["GET"])
def companies():
    return jsonify(companiesall())


@companiesBP.route('/companies', methods=["POST"])
def new_company():
    name = request.form['name']
    description_company = request.form['description']
    address = request.form['address']
    phone = request.form['phone']
    email = request.form['email']
    website = request.form['website']
    activity = request.form['activity']
    city = request.form['city']
    newcompany(name, description_company, address, phone, email, website, activity, city)
    return e200()


@companiesBP.route('/companies/<company_id>', methods=["GET"])
def one_company(company_id):
    return jsonify(one_company(company_id))


@companiesBP.route('/companies/<company_id>', methods=["DELETE"])
def delete_company(company_id):
    deletecompany(company_id)
    return e200()


@companiesBP.route('/companies/<company_id>', methods=["PATCH"])
def modify_company(company_id):
    name = request.form['name']
    description_company = request.form['description']
    address = request.form['address']
    phone = request.form['phone']
    email = request.form['email']
    website = request.form['website']
    activity = request.form['activity']
    city = request.form['city']
    modifycompany(name, description_company, address, phone, email, website, activity, city, company_id)
    return e200()

