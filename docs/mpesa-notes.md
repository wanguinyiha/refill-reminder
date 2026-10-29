MPESA EXPRESS
The merchant sets the requires API parameters and sends an API request.
The API receives the request, validates it internally, and sends an acknowledgement request.
A network-initiated push request is sent to the MPESA registered phone number of the customer making the payment.
The customer receives a pop=up dialog on their phone pre-filled with business name, shortcode and amount.
The customer enters their MPESA pin to complete the transaction immediately to confirm the payment.
The response is sent back to MPESA and processes as follows:
    MPESA Validate sthe customer's PIN
    MPESA Debits the customer's mobile wallet
    MPESA credits the Merchant account
The request is processed, the results are sent back to the API Management system.
Which then forwards them to the merchant via the callback URL specified in the request. The callback URL - delivers customer payment success or failure details.
The customer receives an SMS confirmation message for the payment.

How to get started with textbee's free tier
Create an account at textbee.dev. No credit card required.
Install the Android app from the download page on any Android 7+ phone.
Link the device by scanning the QR code in your dashboard.
Send your first SMS from the dashboard or via the REST API:
Shell
Copy
curl -X POST "https://api.textbee.dev/api/v1/gateway/send-sms" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"recipients": ["+15550100123"], "message": "Hello from textbee free tier!"}'
The full setup takes about 5 minutes (step-by-step quickstart here). There is no waiting period, no approval queue, and no sandbox restrictions. The message goes out from your real SIM to any real phone number.