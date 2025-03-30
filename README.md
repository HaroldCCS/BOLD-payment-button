# Environment variables
https://github.com/HaroldCCS/secret-environment-variables/tree/master/HaroldCCS/BOLD-payment-button

# File
.env

# Variables
VITE_BOLD_API_KEY=string
VITE_BOLD_API_SECRET=string


# Remember create one webhook to bold responses
´´´javascript

app.post('/api/v1/bold/webhook', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send('ok');
});

´´´
