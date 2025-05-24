# PromptPage Generator

A full-stack, production-grade web application that generates conversion-optimized landing pages from business concepts using AI.

## Features

- AI-powered landing page content generation via OpenAI API
- Full responsive design optimized for all device sizes
- Light/dark mode with smooth theme transitions
- Export functionality for generated content (JSON/HTML)
- Clean separation between frontend and backend components

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Vite
- **Backend**: Node.js, Express
- **API**: OpenAI GPT
- **Styling**: TailwindCSS with custom configuration
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/promptpage-generator.git
   cd promptpage-generator
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (use `.env.example` as a template)
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to the `.env` file
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### Running the application

```bash
# Run the full stack application (frontend + backend)
npm start

# Run only the frontend
npm run dev

# Run only the backend
npm run server
```

## Usage

1. Enter a business idea or concept in the input field
2. Click "Generate Landing Page" button
3. Wait for the AI to generate your landing page content
4. View the generated landing page preview
5. Export as JSON or HTML using the export button

## Project Structure

```
/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── types.ts            # TypeScript type definitions
│   ├── App.tsx             # Main React component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── server/                 # Backend Express server
│   ├── index.js            # Server entry point
│   └── openai.js           # OpenAI API integration
├── public/                 # Static assets
├── .env.example            # Environment variables example
└── README.md               # Project documentation
```

## Future Enhancements

- Add user authentication
- Implement Stripe payment integration for premium features
- Add more customization options for the generated landing pages
- Create a gallery of saved/favorite landing pages
- Add support for custom templates and themes

## License

This project is licensed under the MIT License.

## Acknowledgements

- OpenAI for providing the GPT API
- React and TailwindCSS communities for excellent documentation