#!/bin/bash

curl "https://chris-sale-fan-page-api.herokuapp.com/comments/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
