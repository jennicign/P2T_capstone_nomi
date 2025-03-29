import expresss from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = expresss.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'payment',
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Sample Product',
                },
                unit_amount: 1999, // price in cents
              },
              quantity: 1,
            },
          ],
          success_url: 'http://localhost:5173/success',
          cancel_url: 'http://localhost:5173/cancel',
        });
    
        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;