import pymongo

# Configure these values according to your setup
MONGO_URI = 'mongodb://localhost:27017'
DATABASE_NAME = 'soa'

# Create a connection pool
client = pymongo.MongoClient(MONGO_URI)
mdb = client[DATABASE_NAME]

def get_mongo_db():
    return mdb
