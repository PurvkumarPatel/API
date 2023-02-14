curl -X POST \
  http://localhost:3000/report_crime \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "burglary",
    "location": "123 Main Street",
    "details": "Suspect seen breaking into the building"
  }'
