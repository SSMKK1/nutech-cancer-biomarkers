"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {

  return (

    <button
      className="secondary-btn"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Logout
    </button>

  );

}