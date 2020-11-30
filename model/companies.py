from model.common import send_request, request_commit

def companiesall():
    return send_request('SELECT companies.id, address, description_company, email, name, phone, website, activity, city FROM companies LEFT JOIN cities ON cities.id = companies.id_cities;')


# A FAIRE EN DYNAMIQUE
def onecompany(company_id):
    return send_request('SELECT companies.id, address, description_company, email, name, phone, website, activity, city FROM companies LEFT JOIN cities ON cities.id = companies.id_cities WHERE companies.id = %%s;', company_id)


# A FAIRE EN DYNAMIQUE
def newcompany(name, description_company, address, phone, email, website, activity, city):
    return request_commit('INSERT INTO companies (name, description_company, address, phone, email, website, activity, id_cities ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);', (name, description_company, address, phone, email, website, activity, city))


# A FAIRE EN DYNAMIQUE
def deletecompany(company_id):
    return request_commit('DELETE FROM companies WHERE companies.id = %s;', company_id)


# A FAIRE EN DYANMIQUE
def modifycompany(name, description_company, address, phone, email, website, activity, city, company_id):
    return request_commit('UPDATE companies SET name = %s, description_company = %s, address = %s, phone = %s, email = %s, website = %s, activity = %s, id_cities = %s WHERE companies.id = %s;', (name, description_company, address, phone, email, website, activity, city, company_id))
