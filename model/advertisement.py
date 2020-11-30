from model.common import send_request, request_commit


def advertisementall():
    return send_request('SELECT title, advertisement.id, date, description, salary, city, name, type_contract, experience, job_type, worktime FROM advertisement LEFT JOIN cities ON cities.id = advertisement.id_cities LEFT JOIN companies ON companies.id = advertisement.id_companies LEFT JOIN contract_types ON contract_types.id = advertisement.id_contract_types LEFT JOIN jobs ON jobs.id = advertisement.id_jobs')


def oneadvertisement(ad_id):
    return send_request('SELECT title, advertisement.id, date, description, salary, city, name, type_contract, experience, job_type, worktime FROM advertisement LEFT JOIN cities ON cities.id = advertisement.id_cities LEFT JOIN companies ON companies.id = advertisement.id_companies LEFT JOIN contract_types ON contract_types.id = advertisement.id_contract_types LEFT JOIN jobs ON jobs.id = advertisement.id_jobs WHERE advertisement.id = (%s);', ad_id)


def newadvertisement(title, description, salary, company, contract_types, city, experience, worktime, job):
    return request_commit("INSERT INTO advertisement (title, description, date, salary, id_companies, id_contract_types, id_cities, experience, worktime, id_jobs) VALUES (%s, %s, CURRENT_DATE, %s,%s, %s, %s, %s, %s, %s);", (title, description, salary, company, contract_types, city, experience, worktime, job))


def deleteadvertisement(ad_id):
    return request_commit('DELETE FROM advertisement WHERE id = (%s);', ad_id)


# A FAIRE EN DYNAMIQUE
def modifyadvertisement(title, description, salary, id_company, id_contract_type, id_city, experience, worktime, id_job, ad_id):
    return request_commit('UPDATE advertisement SET title = %s, description = %s, salary = %s, id_companies = %s, id_contract_types = %s, id_cities = %s, experience = %s, worktime = %s, id_jobs = %s WHERE advertisement.id = (%s);', (title, description, salary, id_company, id_contract_type, id_city, experience, worktime, id_job, ad_id))
