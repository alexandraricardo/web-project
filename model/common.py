from connectBdd import ConnectBdd


def send_request(request):
    cnx = ConnectBdd()
    cursor = cnx.connect()
    cursor.execute(request)
    res = cursor.fetchall()
    cnx.disconnect()
    return res


def request_commit(request, param):
    cnx = ConnectBdd()
    cursor = cnx.connect()
    cursor.execute(request, param)
    cnx.commit()
    cnx.disconnect()
