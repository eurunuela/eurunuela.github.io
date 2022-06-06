import json

from scholarly import ProxyGenerator, scholarly

# Set up a ProxyGenerator object to use free proxies
# This needs to be done only once per session
print("Setting up proxy generator...")
pg = ProxyGenerator()
pg.FreeProxies()
scholarly.use_proxy(pg)

author_ID = "KLIjERgAAAAJ"
scholar_sections = ["basics", "indices", "counts", "coauthors", "publications", "public_access"]

# Retrieve the author's data, fill-in, and print
# Get an iterator for the author results
print("Searching for author ID: " + author_ID)
search_query = scholarly.search_author_id(author_ID)

# Retrieve all the details for the author
print("Retrieving author details...")
author = scholarly.fill(search_query, sections=scholar_sections, sortby="year")

# Retrieve journal of each publication and fill
print("Retrieving journal details...")
for pub in author["publications"]:
    scholarly.fill(pub)

# Save the author's data to a json file
print("Saving author data to file...")
with open("scholar_data.json", "w") as f:
    f.write(json.dumps(author, indent=4))

print("Done!")
