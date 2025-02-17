export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    const response = await fetch(decodeURIComponent(url), {
      headers: {
        Accept: "text/plain",
        "User-Agent": "Vercel Serverless Function",
      },
      timeout: 5000,
    });

    if (!response.ok) {
      throw new Error(`Citation service returned ${response.status}`);
    }

    const data = await response.text();
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).send(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: error.message });
  }
}
