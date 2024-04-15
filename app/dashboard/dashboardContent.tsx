"use client";

import { usePathname } from "next/navigation";
import { OrgDetails, SessionDetails, StripeDetails, UserDetails } from "./details";
import Chat from "../chat/page";

export function DashboardContent() {
  const pathname = usePathname();

  return (
    <>
      {/* Render the appropriate view based on the current route */}
      {pathname === "/dashboard" ? (
        <div className="grid gap-4 mt-8 lg:grid-cols-3">
          <UserDetails />
          <SessionDetails />
          <OrgDetails />
          <StripeDetails />
        </div>
      ) : pathname === "/chat" ? (
        <div className="mt-8">
          <Chat /> {/* Render the Chat component */}
        </div>
      ) : null}
    </>
  );
}