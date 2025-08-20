'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="m-12 bg-gray-700 p-12 text-white">
      <h2 className="text-3xl">Something went wrong!</h2>
      <p className="p-2">
        You need to configure your environment variables, check the Readme:
      </p>
      <p className="p-2">
        process.env.FOURSQUARE_API_KEY,
        process.env.AIRTABLE_TOKEN,
        process.env.AIRTABLE_BASE_KEY,
        process.env.UNSPLASH_ACCESS_KEY. 
        Create these environment variables with values inside .env file.
    </p>

    <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
