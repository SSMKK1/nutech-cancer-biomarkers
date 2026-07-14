"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="section">
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            ERROR
          </span>

          <h1>
            Something Went Wrong
          </h1>

          <p>
            An unexpected error occurred while processing
            your request.
          </p>

          <button
            className="primary-btn"
            onClick={() => reset()}
          >
            Try Again
          </button>

        </div>

      </div>
    </main>
  );
}
