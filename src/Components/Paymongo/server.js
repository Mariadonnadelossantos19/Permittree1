// server.js (or your backend file)

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

const PAYMONGO_SECRET_KEY = 'sk_test_BASvyuvJJPJmGTrhZmyEDccu';

app.post('/create-payment-method', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.paymongo.com/v1/payment_methods',
      {
        data: {
          attributes: {
            type: 'card',
            details: {
              card_number: '4343434343434345',
              exp_month: 12,
              exp_year: 25,
              cvc: '123',
            },
            billing: {
              email: 'mariadelossantos207@gmail.com',
              name: 'Test Payment',
              phone: '09664863891',
            },
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating payment method');
  }
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.paymongo.com/v1/payment_intents',
      {
        data: {
          attributes: {
            amount: 5000,
            currency: 'PHP',
            payment_method_allowed: ['card'],
            capture_type: 'automatic',
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating payment intent');
  }
});

app.post('/attach-payment-method', async (req, res) => {
  const { paymentMethodId, paymentIntentId } = req.body;

  try {
    const response = await axios.post(
      `https://api.paymongo.com/v1/payment_intents/${paymentIntentId}/attach`,
      {
        data: {
          attributes: {
            payment_method: paymentMethodId,
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error attaching payment method');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});