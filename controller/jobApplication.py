from flask import jsonify, Blueprint, request
from model.jobApplication import adminjobapplicationsall, onejobapplicationbyadvertisement, deletejobapplication, onejobapplicationid, newjobapplication, modifyjobapplication
from controller.HTTPCode import *


jobApplicationBp = Blueprint("jobApplication", __name__)


@jobApplicationBp.route('/job-applications', methods=["GET"])
def jobapplicationsall():
    return jsonify(adminjobapplicationsall())


@jobApplicationBp.route('/job-applications/<job_applications_id>', methods =["PATCH"])
def modify_jobapplication(job_applications_id):
    advertisement_id = request.form['advertisement']
    name = request.form['name']
    firstname = request.form['fname']
    email = request.form['email']
    phone = request.form['phone']
    message = request.form['message']
    id_user = request.form['id_user']
    modifyjobapplication(advertisement_id, id_user, name, firstname, email, phone, message, job_applications_id)
    return e200()


@jobApplicationBp.route('/job-applications/<job_applications_id>', methods=["GET"])
def one_jobapplication(job_applications_id):
    return jsonify(onejobapplicationid(job_applications_id))


@jobApplicationBp.route('/job-applications/<advertisement_id>', methods=["GET"])
def one_jobapplicationbyadvertisement(advertisement_id):
    return jsonify(onejobapplicationbyadvertisement(advertisement_id))


@jobApplicationBp.route('/job-applications/<job_application_id>', methods=["DELETE"])
def admindeletejobapplication(job_application_id):
    deletejobapplication(job_application_id)
    return e200()


@jobApplicationBp.route('/job-applications', methods=["POST"])
def new_jobapplication():
    advertisement_id = request.form["id_advertisement"]
    name = request.form["name"]
    firstname = request.form["firstname"]
    email = request.form["email"]
    phone = request.form["phone"]
    message = request.form['message']
    newjobapplication(advertisement_id, name, firstname, email, phone, message)
    return e200()
