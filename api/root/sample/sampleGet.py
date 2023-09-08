from flask_restful import Resource
from root.auth.utils import auth_required


class SampleGetRoute(Resource):
    def get(self):
        payload = {
            "title": "Welcome to the Dashboard",
            "description": "We're excited to have you here. This is the place where you'll find all the information you need about our products and services.",
            "subContent": "Whether you're looking for answers, want to learn more about us, or just exploring, we've got you covered",
        }
        #This is a  sample comment for conflict 
        #This is a  sample comment for commit sample for conflict

        return {
            "status": 1,
            "class": "success",
            "message": "Success",
            "payload": payload,
        }
