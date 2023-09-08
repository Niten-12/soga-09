from flask_restful import Resource
from root.auth.utils import auth_required
from flask_jwt_extended import jwt_required, get_jwt_identity
from root.db import get_mongo_db
from bson import ObjectId


class CurrentUser(Resource):
    @auth_required(isOptional=True)
    def get(self, suid):
        current_user_id = get_jwt_identity()
        print(current_user_id)

        current_user_id = ObjectId(current_user_id)
        user_data = get_user_data_from_database(current_user_id)

        if user_data:
            name = user_data.get("name")
            email = user_data.get("email")
        else:
            name = ""
            email = ""

        return {
            "status": 1,
            "class": "success",
            "payload": {
                "name": name,
                "email": email,
            },
        }


def get_user_data_from_database(user_id):
    mdb = get_mongo_db()
    users_collection = mdb.users
    user = users_collection.find_one({"_id": user_id})

    if user:
        return {"name": user.get("name"), "email": user.get("email")}
    return None
