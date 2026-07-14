import Link from "next/link";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/dashboard/LogoutButton";

export default async function Topbar() {

  const session = await auth();

  const userName =
    session?.user?.name || "User";

  const userRole =
    session?.user?.role || "Account";

  const avatarLetter =
    userName.charAt(0).toUpperCase();

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

        <LogoutButton />

        <div className="dashboard-user">

          <div className="user-avatar">
            {avatarLetter}
          </div>

          <div>

            <strong>
              {userName}
            </strong>

            <p>
              {userRole} Account
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}