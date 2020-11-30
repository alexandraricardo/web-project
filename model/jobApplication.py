from model.common import send_request, request_commit


def adminjobapplicationsall():
    return send_request('SELECT job_applications.id, job_applications.date, id_advertisements, id_users, job_applications.name, job_applications.firstname, job_applications.email, job_applications.phone, message FROM job_applications INNER JOIN advertisement ON advertisement.id = job_applications.id_advertisements INNER JOIN users ON users.id = job_applications.id_users;')


def onejobapplicationid(job_applications_id):
    return send_request('SELECT job_applications.id, job_applications.date, id_advertisements, id_users, job_applications.name, job_applications.firstname, job_applications.email, job_applications.phone, message FROM job_applications INNER JOIN advertisement ON advertisement.id = job_applications.id_advertisements INNER JOIN users ON users.id = job_applications.id_users  WHERE job_applications.id = %s;', job_applications_id)


def onejobapplicationbyadvertisement(advertisement_id):
    return send_request('SELECT job_applications.id, job_applications.date, id_advertisements, id_users FROM job_applications INNER JOIN advertisement ON advertisement.id = job_applications.id_advertisements INNER JOIN users ON users.id = job_applications.id_users  WHERE advertisement.id = %s;', advertisement_id)


def deletejobapplication(job_application_id):
    return request_commit('DELETE FROM job_applications WHERE id = %s;', job_application_id)


def newjobapplication(advertisement_id, id_user, name, firstname, email, phone, message):
    return request_commit('INSERT INTO job_applications (date, id_advertisements, id_users, name, firstname, email, phone, message) VALUES (CURRENT_DATE, %s, %s, %s, %s, %s, %s, %s);', (advertisement_id, id_user, name, firstname, email, phone, message))


def modifyjobapplication (advertisement_id, id_user, name, firstname, email, phone, message, job_applications_id):
    return request_commit('UPDATE job_applications SET advertisement_id = %s, id_user=%s, name = %s, firstname = %s, email=%s, phone= %s, message=%s WHERE job_applications.id =%s', (advertisement_id, id_user, name, firstname, email, phone, message, job_applications_id))

