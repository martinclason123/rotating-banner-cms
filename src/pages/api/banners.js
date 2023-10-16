// src/pages/api/banners.js

const contentful = require("contentful");

export default async function handler(req, res) {
  // Ensure it's a GET request
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  // Initialize contentful client
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const entry = await client.getEntry("2TUh5sMIFVG7OD2XkCGQaX");
    res.status(200).json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed fetching data from Contentful" });
  }
}
