from root.dashboard.dashboard import Dashboard, BookSaver
from . import dashboard_api

dashboard_api.add_resource(Dashboard, "/dashboard", endpoint="Dashboard")
dashboard_api.add_resource(BookSaver, "/save/book", endpoint="BookSaver")
