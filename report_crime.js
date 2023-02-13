fetch('http://localhost:3000/report_crime', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'burglary',
    location: '123 Main Street',
    details: 'Suspect seen breaking into the building'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
