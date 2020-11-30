from model.common import send_request, request_commit


def jobsall():
    return send_request('SELECT * from jobs;')


# A FAIRE EN DYNAMIQUE
def adminnewjob(job_type):
    return request_commit('INSERT INTO jobs (job_type) VALUES (%s);', job_type)


# A FAIRE EN DYNAMIQUE
def adminmodifyjob(job_type, job_id):
    return request_commit('UPDATE jobs SET job_type = %s WHERE id = %s;', (job_type, job_id))


# A FAIRE EN DYNAMIQUE
def admindeletejob(job_id):
    return request_commit('DELETE FROM jobs WHERE id = %s;', job_id)
