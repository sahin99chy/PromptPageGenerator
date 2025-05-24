import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateLandingPage } from './openai.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Routes
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const landingPageData = await generateLandingPage(prompt);
    res.json(landingPageData);
  } catch (error) {
    console.error('Error generating landing page:', error);
    res.status(500).json({ 
      error: 'Failed to generate landing page', 
      message: error.message 
    });
  }
});

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});