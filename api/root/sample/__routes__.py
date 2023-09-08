from root.sample.sampleGet import SampleGetRoute
from . import sample_api

sample_api.add_resource(SampleGetRoute, "/sample/get")
