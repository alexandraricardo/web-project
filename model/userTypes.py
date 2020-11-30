
from model.common import send_request, request_commit


def usertypesall():
    return send_request('SELECT * from user_types;')


# A FAIRE EN DYNAMIQUE
def adminnewusertype(role):
    request_commit("INSERT INTO user_types (role) VALUES (%s);", role)


# A FAIRE EN DYNAMIQUE
def admindeleteusertype(user_types_id):
    return request_commit('DELETE FROM user_types WHERE user_types.id = (%s);', user_types_id)


# A FAIRE EN DYNAMIQUE
def adminmodifyusertype(role, user_types_id):
    return request_commit('UPDATE user_types SET role = (%s) WHERE user_types.id = (%s);', (role, user_types_id))
