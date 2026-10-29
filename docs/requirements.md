1. Many patients on long-term medication forget or delay refills.
2. Clinics and pharmacies often track refills on paper or by memory.
3. Patients are willing to receive SMS reminders.
4. SMS is the best channel because most people have a basic phone.
5. A staff list of overdue patients would save time.

User stories
Product rule - The tool only tracks and reminds what the users enters. It gives no medical advice.
People: Staff are the clinic or pharmacy workers who use the dashboard.
        A patient is someone who receives the SMS

Must Have
US-01: As staff, I want to add a patient with their two names, phone number and refill date, so that the system knows who to remind and when.
US-O2: As staff, I want to record that the patient agreed to receive SMS, so that we only message people who said yes.
US-03: As patient, I want an SMS a few days before my refill is due, so that I remember to collect my medicine.
US-04: As staff, I want to see a list of overdue patients, so that i know who to contact.
US-05: As staff, I want to mark refill as collected and set the next date, so that the patient isn't reminded after collecting and the next cycle starts.
US-06: As staff, I want to log in securely, so that only authorized people can see patient details.
US-07: As patient, I want to reply STOP to stop messages, so that I stay in control of what I receive.
US-08: As staff, I want to edit, delete a patient record, so that mistakes can be fixed and data removed when needed.

Should Have
US-09: As staff, I want to see whether each reminder was sent or failed, so that i know who didn't get a message.
US-10: As staff, I want to search for a patient by name or phone number, so that i can find them quickly
US-11: As a patient, I want to reply HELP and have a person notified, so that someone follows up with me.
US-12: As staff, I want to pick from approved message templates, so that the wording is clear and safe.

Could have (nice if time allows)
US-13: As staff, I want a simple monthly summary of how many refills were on time, so that we can see whether the tool helps.
US-14: As staff, I want to choose English or Swahili for each patient, so that they understand the message.
US-15: As staff, I want AI to suggest a tag for patient replies (like “needs refill” or “question”), which I can confirm or change, so that I sort replies faster.

Non-functional requirements
Privacy: Use fake data while building. Store only what is needed (first name, phone, refill date). SMS texts never include medicine names or conditions.
Security: Staff must log in. Each clinic sees only its own patients. Connections use HTTPS.
Reliability: A patient never gets the same reminder twice. Failed sends are retried or flagged.
Ease of use: Staff can add a patient in about a minute. The dashboard works in a phone browser.
Performance: The overdue list loads in about 2 seconds with around 1,000 patients (a target to test).
Accountability: The system records when consent was given and who changed a record.
Quality: The key rules (reminder timing, opt-out, no duplicates) have automated tests.
Deployment: The app runs in Docker and deploys through your CI/CD pipeline.

Out of scope (we are not building these)
Medical advice, dosing, drug interactions, diagnosis or checking prescriptions. The tool only tracks and reminds what staff enter, and does not check or correct it.
Connections to hospital records or e-prescription systems.
Patient accounts, a patient app or patient login.
Ordering, delivering or stocking medicine.
Payments or billing.
WhatsApp or voice calls (SMS only for now).
AI that chats with patients or replies on its own.
Many-clinic chains or complex admin roles.
