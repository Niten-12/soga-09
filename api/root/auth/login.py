import random
import string
from flask import jsonify, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token

from root.db import get_mongo_db

mdb = get_mongo_db()


class Login(Resource):
    def post(self):
        input = request.get_json(force=True)
        email = input.get("email")
        password = input.get("password")

        selection = {
            "email": email,
            "password": password,
        }

        user = mdb.users.find_one(selection)
        if not (user and "_id" in user):
            return {
                "status": 0,
                "class": "error",
                "message": "Invalid Credentials",
            }

        uid = str(user.get("_id"))
        access_token = create_access_token(identity=uid)

        return {
            "status": 1,
            "class": "success",
            "message": "Login Success",
            "payload": {
                "token": access_token,
                "redirectUrl": "/dashboard",
            },
        }


def generateRandomAlphanumeric(length):
    characters = string.ascii_letters + string.digits
    return "".join(random.choice(characters) for _ in range(length))


class SaveUser(Resource):
    def post(self):
        input = request.get_json(force=True)
        _id = input.get("_id")
        email = input.get("email")
        name = input.get("name")
        mobile = input.get("mobile")
        password = input.get("password")

        isNew = True if _id == "new" else False

        data = {
            "email": email,
            "name": name,
            "mobile": mobile,
            "password": password,
        }

        if isNew:
            data["_id"] = generateRandomAlphanumeric(6)
            mdb.users.insert_one(data)

        else:
            mdb.users.update_one({"_id": _id}, {"$set": data})

        return {
            "status": 1,
            "class": "success",
            "message": "Login Success",
            "payload": {},
        }
