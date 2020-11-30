from flask import Flask, jsonify
from controller.users import usersBp
from controller.advertisement import advertisementsBp
from controller.companies import companiesBP
from controller.userTypes import usertypeBp
from controller.mailSent import mailSentBp
from controller.jobs import jobsBp
from controller.jobApplication import jobApplicationBp
from controller.contractTypes import contractTypeBp
from controller.cities import citiesBp
from flask_cors import CORS


app = Flask(__name__)
app.register_blueprint(usersBp)
app.register_blueprint(advertisementsBp)
app.register_blueprint(companiesBP)
app.register_blueprint(usertypeBp)
app.register_blueprint(mailSentBp)
app.register_blueprint(jobsBp)
app.register_blueprint(jobApplicationBp)
app.register_blueprint(contractTypeBp)
app.register_blueprint(citiesBp)

cors = CORS(app)



if __name__ == '__main__':
    app.run(debug=True)
