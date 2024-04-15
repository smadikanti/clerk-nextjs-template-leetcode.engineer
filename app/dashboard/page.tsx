import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { DashboardContent } from "./dashboardContent";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div className="flex">
      {/* Left Menu */}
      <div className="w-64 bg-gray-100 min-h-screen">
        <nav className="p-4">
          <ul>
            <li>
              <Link href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Home
              </Link>
            </li>
            {/* <li>
            <Link href="/chat" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Engineer
            </Link>
          </li> */}
          <li>
  <Link href="/chat" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
    Engineer
  </Link>
</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-12 sm:py-16 md:px-20">
        {user && (
          <>
            <h1 className="text-3xl font-semibold text-black">
              👋 Hi, {user.firstName || `Stranger`}
            </h1>
            <DashboardContent />
          </>
        )}
      </div>
    </div>
  );
}