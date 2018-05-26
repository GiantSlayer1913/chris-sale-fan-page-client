# sh curl-scripts/json/sign-up.sh

curl "https://chris-sale-fan-page-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASS}"'",
      "password_confirmation": "'"${PASSC}"'"
    }
  }'

echo
