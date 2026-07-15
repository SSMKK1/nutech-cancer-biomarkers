import { auth } from "@/lib/auth";

export default async function Topbar() {

  const session = await auth();

  const userName =
    session?.user?.name || "User";

  const userRole =
    (session?.user as any)?.role || "Account";

  const avatarLetter =
    userName.charAt(0).toUpperCase();

  return (

    <header className="dashboard-topbar">

      <div>

        <h3>
          Welcome, {userName}
        </h3>

        <p>
          {userRole}
        </p>

      </div>

      <div className="dashboard-user">

        <div className="dashboard-avatar">
          {avatarLetter}
        </div>

      </div>

    </header>

  );

}