import Link from "next/link";

export default function Topbar() {
  return (
    <div className="dashboard-topbar">

      <div>

        <span
          style={{
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            opacity: 0.7
          }}
        >
          SeroMark-1 Platform
        </span>

        <h3
          style={{
            marginTop: "6px"
          }}
        >
          Clinical Screening Management System
        </h3>

      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}
      >

        <Link href="/">
          <button className="secondary-btn">
            Website
          </button>
        </Link>

        <Link href="/contact">
          <button className="secondary-btn">
            Support
          </button>
        </Link>

        <div className="dashboard-user">

          <div className="user-avatar">
            N
          </div>

          <div>
            <strong>Demo User</strong>
            <p>Secure Session Active</p>
          </div>

        </div>

      </div>

    </div>
  );
}
