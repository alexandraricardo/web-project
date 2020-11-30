from model.common import send_request, request_commit


def contracts():
    return send_request('SELECT * FROM contract_types;')


# A FAIRE EN DYNAMIQUE
def admindeletecontract(contract_types_id):
    return request_commit('DELETE FROM contract_types WHERE id = %s;', contract_types_id)


# A FAIRE EN DYNAMIQUE
def adminnewcontract(type_contract):
    return request_commit('INSERT INTO contract_types (type_contract) VALUES (%s);', type_contract)


# A FAIRE EN DYNAMIQUE
def adminmodifycontract(type_contract, contract_types_id):
    return request_commit('UPDATE contract_types SET type_contract = %s WHERE id = %s;', (type_contract, contract_types_id))

