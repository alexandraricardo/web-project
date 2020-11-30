from flask import jsonify, Blueprint, request
from model.jobs import jobsall, adminnewjob, admindeletejob, adminmodifyjob
from controller.HTTPCode import *

jobsBp = Blueprint("jobs", __name__)


@jobsBp.route('/jobs', methods=["GET"])
def jobs():
    return jsonify(jobsall())


@jobsBp.route('/jobs/<job_id>', methods=["DELETE"])
def delete_job(job_id):
    admindeletejob(job_id)
    return e200()


@jobsBp.route('/jobs', methods=["POST"])
def new_job():
    job_type = request.form['job_type']
    adminnewjob(job_type)
    return e200()


@jobsBp.route('/jobs/<int:job_id>', methods=["PATCH"])
def modify_job(job_id):
    job_type = request.form['job_type']
    adminmodifyjob(job_type, job_id)
    return e200()