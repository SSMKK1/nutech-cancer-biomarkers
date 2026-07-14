import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div
        className="container"
        style={{
          textAlign: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <span className="eyebrow">
          ERROR 404
        </span>

        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px"
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            maxWidth: "600px",
            marginBottom: "30px"
          }}
        >
          The page you are looking for may have been moved,
          deleted or is temporarily unavailable.
        </p>

        <div className="hero-buttons">

          <Link href="/">
            <button className="primary-btn">
              Return Home
            </button>
          </Link>

          <Link href="/contact">
            <button className="secondary-btn">
              Contact Support
            </button>
          </Link>

        </div>

      </div>
    </main>
  );
}