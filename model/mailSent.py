from model.common import send_request, request_commit
from connectBdd import ConnectBdd


def mailsentall(job_applications_id):
    return send_request('SELECT mail_sent.id, mail_content, date_sent, mail_sent.id_job_application FROM mail_sent INNER JOIN job_applications ON job_applications.id = mail_sent.id_job_application WHERE job_applications.id = %s;', job_applications_id)


def newmailsent(mail_content, id_job_application):
    return request_commit("INSERT INTO mail_sent (mail_content, date_sent, id_job_application) VALUES (%s, %s, CURRENT_DATE, %s);", (mail_content, id_job_application))


#A FAIRE EN DYNAMIQUE
def admindeletemail(mail_sent_id):
    return request_commit('DELETE FROM mail_sent WHERE mail_sent.id = %s;', mail_sent_id)


def adminmodifymail(mail_content, id_job_application, mail_sent_id):
    return request_commit('UPDATE mail_sent SET mail_sent = %s, id_job_application = %s WHERE id = %s;', (mail_content, id_job_application, mail_sent_id))
