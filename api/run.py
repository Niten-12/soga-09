from root import create_app, request, jsonify

app = create_app()
def store_data():
    data = request.json
    return jsonify({"message": "Data stored successfully"})
if __name__ == "__main__":
    app.run(debug=True)
