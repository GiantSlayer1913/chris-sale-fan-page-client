#!/bin/sh

curl "https://chris-sale-fan-page-api.herokuapp.com/comments/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
