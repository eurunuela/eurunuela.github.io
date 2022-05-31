import json

from scholarly import scholarly

author_ID = "KLIjERgAAAAJ"

# Retrieve the author's data, fill-in, and print
# Get an iterator for the author results
print("Searching for author ID: " + author_ID)
search_query = scholarly.search_author_id(author_ID)

# Retrieve all the details for the author
print("Retrieving author details...")
author = scholarly.fill(search_query)
scholarly.pprint(author)

# Save the author's data to a json file
print("Saving author data to file...")
with open("scholar_data.json", "w") as f:
    f.write(json.dumps(author, indent=4))

print("Done!")
