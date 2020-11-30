from flask import jsonify, Blueprint, request
from controller.HTTPCode import *
from model.userTypes import usertypesall, admindeleteusertype, adminmodifyusertype, adminnewusertype

usertypeBp = Blueprint("userTypes", __name__)


@usertypeBp.route('/usertypes', methods=["GET"])
def usertypes():
    return jsonify(usertypesall())


@usertypeBp.route('/usertypes/<user_types_id>', methods=["DELETE"])
def delete_user_types(user_types_id):
    admindeleteusertype(user_types_id)
    return e200()


@usertypeBp.route('/usertypes', methods=["POST"])
def new_user_types():
    role = request.form['role']
    adminnewusertype(role)
    return e200()


@usertypeBp.route('/usertypes/<int:user_types_id>', methods=["PATCH"])
def modify_user_types(user_types_id):
    role = request.form['role']
    adminmodifyusertype(role, user_types_id)
    return e200()