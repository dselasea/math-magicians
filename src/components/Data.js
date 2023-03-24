import { useEffect, useState } from 'react';

const Data = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'EhL2F3KlXGZe2HF8Zy+j8Q==UAJsJ1pJRqnCBQb9',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuotes();
  }, [setQuotes]);
  if (error) return <div className="error-container"><h1>Something went wrong!</h1></div>;
  if (loading) return <div className="loading-container"><div> </div></div>;
  return (
    <>
      {
        quotes.map((quote) => (
          <div className="quote-container" key={quote.category}>
            <h1 className="quote-author">{quote.author}</h1>
            <p className="quote">
              {quote.quote}
              {' '}
              <span>
                ~
                {quote.category}
              </span>
            </p>
          </div>
        ))
      }
    </>
  );
};

export default Data;
