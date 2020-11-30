from werkzeug.security import generate_password_hash, check_password_hash
from model.common import send_request, request_commit


def usersall():
    return send_request('SELECT users.id, name, firstname, birthday, role, users.phone as user_phone, users.email as users_email, users.address as users_address, password, id_user_types FROM users LEFT JOIN user_types ON user_types.id = users.id_user_types;')


def newuser(name, firstname, address, birthday, email, id_user_types, password, phone):
    return request_commit('INSERT INTO users (address, birthday, email, firstname, id_user_types, name, password, phone) VALUES (%s, %d, %s, %s, %s, %s, %s, %s, %s, %s);', (address, birthday, email, firstname, id_user_types, name, password, phone))


def oneuser(user_id):
    return send_request('SELECT users.id, name, firstname, birthday, users.phone as user_phone, users.email as users_email, users.address as users_address, password FROM users WHERE users.id = %s;', user_id)


def modifyuser(name, firstname, address, birthday, email, password, phone, user_id):
    return request_commit('UPDATE users SET name = %s, firstname = %s, address = %s, birthday = %d, email = %s, password = %s, phone = %s WHERE users.id = %s;', (name, firstname, address, birthday, email, password, phone, user_id))


def deleteuser(user_id):
    return request_commit('DELETE FROM users WHERE users.id = %s;', user_id)


def registeruser(email):
    return send_request('SELECT id FROM users WHERE email = %s;', email)

