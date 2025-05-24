import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateLandingPage(businessIdea) {
  const systemPrompt = `
    You are an expert copywriter specializing in conversion-optimized landing pages.
    Your task is to generate compelling content for a landing page based on a business idea.
    
    The response must be structured in valid JSON format with the following fields:
    {
      "headline": "A short, attention-grabbing headline (max 10 words)",
      "subheadline": "A compelling subheadline that explains the value proposition (max 20 words)",
      "features": [
        {
          "title": "Feature 1 title (3-5 words)",
          "description": "Feature 1 description (25-40 words)"
        },
        {
          "title": "Feature 2 title (3-5 words)",
          "description": "Feature 2 description (25-40 words)"
        },
        {
          "title": "Feature 3 title (3-5 words)",
          "description": "Feature 3 description (25-40 words)"
        }
      ],
      "cta": "A clear call-to-action button text (3-6 words)"
    }
    
    Guidelines:
    - Use persuasive, benefit-focused language
    - Ensure content is concise, impactful, and professional
    - Avoid hyperbole or exaggerated claims
    - Focus on solving customer problems
    - Use active voice and direct address
    - The JSON must be correctly formatted and parseable
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: businessIdea }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // If we can't reach OpenAI, return a fallback response
    if (error.message.includes('network') || error.code === 'ECONNREFUSED') {
      throw new Error('Unable to connect to AI service. Please try again later.');
    }
    
    // For JSON parsing errors
    if (error instanceof SyntaxError) {
      throw new Error('Failed to parse AI response. Please try again with a different prompt.');
    }
    
    throw error;
  }
}

// Comment for future Stripe integration
/*
export async function createCheckoutSession(priceId) {
  // Initialize Stripe
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.DOMAIN}/canceled`,
  });

  return session;
}
*/