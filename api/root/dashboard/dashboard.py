from flask import request
from flask_restful import Resource
from root.auth.login import generateRandomAlphanumeric
from root.auth.utils import auth_required
from root.db import get_mongo_db

mdb = get_mongo_db()


class Dashboard(Resource):
    @auth_required()
    def get(self, suid):
        books = []
        #This is for listing the books in the page
        for item in mdb.books.find({}):
            books.append(item)

        return {
            "status": 1,
            "class": "success",
            "message": "Success",
            "payload": {
                "books": books,
            },
        }


class BookSaver(Resource):
    def post(self):
        input = request.get_json(force=True)
        _id = input.get("_id")
        title = input.get("title")
        authorName = input.get("authorName")
        genre = input.get("genre")
        publicationYear = input.get("publicationYear")

        isNew = True if _id == "new" else False

        data = {
            "title": title,
            "authorName": authorName,
            "genre": genre,
            "publicationYear": publicationYear,
        }

        if isNew:
            data["_id"] = generateRandomAlphanumeric(6)
            mdb.books.insert_one(data)

        else:
            mdb.books.update_one({"_id": _id}, {"$set": data})

        return {
            "status": 1,
            "class": "success",
            "message": "Login Success",
            "payload": {},
        }
