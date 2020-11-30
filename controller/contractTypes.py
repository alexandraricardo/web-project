from flask import jsonify, Blueprint, request
from model.contractTypes import contracts, admindeletecontract, adminmodifycontract, adminnewcontract
from controller.HTTPCode import *

contractTypeBp = Blueprint("contractTypes", __name__)


@contractTypeBp.route('/contracts', methods=["GET"])
def contractsall():
    return jsonify(contracts())


@contractTypeBp.route('/contracts/<contract_id>', methods=["DELETE"])
def delete_contract(contract_id):
    try:
        admindeletecontract(contract_id)
        return e200()
    except Exception as e:
        print (e)


@contractTypeBp.route('/contracts', methods=["POST"])
def new_contract():
    type_contract = request.form['contract']
    print (type_contract)
    adminnewcontract(type_contract)
    return e200()


@contractTypeBp.route('/contracts/<contract_id>', methods=["PATCH"])
def modify_contract(contract_id):
    type_contract = request.form['contract']
    adminmodifycontract(type_contract, contract_id)
    return e200()