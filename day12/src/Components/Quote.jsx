import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null); 

  const quoteGetter = async () => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
          "X-Api-Key": "QLwBa0zLZ2fkfYrO4iNfOQ==4ddtAEBJN7sRWrb1",
        },
      });
      console.log('hello');

      if (!response.ok) {
        throw new Error(`HTTP Status error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      setQuote(data[0]);
    } catch (error) {
      console.error("FAILED TO FETCH:", error);
    }
  };

  useEffect(() => {
    quoteGetter();
  }, []);
  console.log('hello');
  return (
    <div>
      {quote ? (
        <div className="quote">
          <p>{quote.quote}</p>
        </div>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default Quote;