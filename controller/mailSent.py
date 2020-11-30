from flask import jsonify, Blueprint
from model.mailSent import mailsentall, newmailsent, admindeletemail, adminmodifymail

mailSentBp = Blueprint("mailSent", __name__)