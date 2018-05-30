#!/bin/bash

curl "https://chris-sale-fan-page-api.herokuapp.com/comments/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "comment": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
