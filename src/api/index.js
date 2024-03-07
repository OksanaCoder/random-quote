// api/index.js
const url = "https://api.api-ninjas.com/v1/quotes?category=love";

export const generateQuotes = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": `${process.env.REACT_APP_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    return {
      quote: randomQuote?.quote || "No quote available",
      author: randomQuote?.author || "Unknown author",
    };
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
