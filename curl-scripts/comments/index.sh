#!/bin/sh

curl "https://chris-sale-fan-page-api.herokuapp.com/comments/" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
