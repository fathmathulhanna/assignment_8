# Dynamic Portfolio Website

Portfolio website built with Node.js, Express, EJS and MongoDB.

## Requirements
- Node.js and npm
- MongoDB Community Server running locally, or a MongoDB Atlas connection

## Setup

1. Open this project folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to a new file named `.env`.
4. Set `MONGO_URI` in `.env` to your MongoDB connection string.
5. Insert the initial portfolio data:

   ```bash
   npm run seed
   ```

6. Start the server:

   ```bash
   npm run dev
   ```

7. Open http://localhost:3000

## Pages
- `/` - Home
- `/about` - About, education and skills
- `/contact` - Contact details

## Database
- Database: `portfolioDB`
- Collection: `portfolios`

The `seed.js` script inserts or updates the single portfolio document. Edit the data in that file and run `npm run seed` again to update the website content.

## Notes
- Do not share your `.env` file or upload it to GitHub.
- The CSS file is a starter stylesheet. You can replace it with your original `style.css` if you already have one.
