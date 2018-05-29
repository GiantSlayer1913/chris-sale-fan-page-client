# ID=2 sh curl-scripts/sign-out.sh

curl "https://chris-sale-fan-page-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
