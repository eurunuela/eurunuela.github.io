#!/bin/bash
curl -L -X POST 'https://api.github.com/graphql' \
-H 'Authorization: bearer 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' \
--data-raw '{"query":"{\n  user(login: \"eurunuela\") {\n pinnedItems(first: 6) {\n totalCount\n edges {\n node {\n ... on Repository {\n name\n id\n url\n stargazers {\n totalCount\n }\n description\n }\n }\n }\n }\n }\n }"' \
-o github_data.json
# {\n  user(login: \"eurunuela\") {\n pinnedItems(first: 6) {\n totalCount\n edges {\n node {\n ... on Repository {\n name\n id\n url\n stargazers {\n totalCount\n }\n description\n }\n }\n }\n }\n }\n }
