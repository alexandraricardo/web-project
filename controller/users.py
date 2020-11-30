from flask import jsonify, Blueprint, request, flash, redirect, url_for
from model.users import usersall, oneuser, modifyuser, deleteuser, newuser, registeruser
from controller.HTTPCode import *


usersBp = Blueprint("users", __name__)


@usersBp.route('/users', methods=["GET"])
def users():
    return jsonify(usersall())


@usersBp.route('/users/<user_id>', methods=["GET"])
def user(user_id):
    try:

        return jsonify(oneuser(user_id))
    except:
        pass


@usersBp.route('/users', methods=["POST"])
def new_user():
    name = request.form['name'],
    firstname = request.form['fname'],
    address = request.form['address'],
    birthday = request.form['birthday'],
    email = request.form['email'],
    password = 'mypassword1234',
    phone = request.form['phone'],
    id_user_types = request.form['type']
    newuser(name, firstname, address, birthday, email, id_user_types, password, phone)
    return e200()


@usersBp.route('/users/<user_id>', methods=["PATCH"])
def modify_user(user_id):
    name = request.form['name'],
    print(name)
    firstname = request.form['fname'],
    print (firstname)
    address = request.form['address'],
    birthday = request.form['birthday'],
    email = request.form['email'],
    password = request.form['password'],
    phone = request.form['phone'],
    id_user_types = request.form['type']
    modifyuser(name, firstname, address, birthday, email, password, phone, id_user_types, user_id)
    return e200()


@usersBp.route('/users/<user_id>', methods=["DELETE"])
def delete_user(user_id):
    return jsonify(deleteuser(user_id))


@usersBp.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        error = None

        if not email:
            error = 'Email is required.'
        elif not password:
            error = 'Password is required.'
        elif registeruser(email) is not None:
            error = 'Email {} is already registered.'.format(email)

        if error is None:
            new_user()
            db.commit()
            return redirect(url_for('login'))

        flash(error)

    return render_template('auth/register.html')

