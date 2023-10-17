import { nextOpts } from "@/app/api/auth/[...nextauth]/options";
import { BookOpenCheck } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SearchInput from "./SearchInput";


const NavBar = async () => {
  const session = await getServerSession(nextOpts);
  return (
    <div className="flex gap-4 justify-between items-center">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            <BookOpenCheck />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <SearchInput  />
          {session ? (
            <div className="flex gap-8">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={session?.user?.image!} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href={"/profile"} className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/settings"}>Settings</Link>
                  </li>
                  <li>
                    <Link href={"/api/auth/signout"}>Logout</Link>
                  </li>
                </ul>
              </div>
              <Link href={"/create"} className="btn btn-neutral">
                Create
              </Link>
            </div>
          ) : (
            <Link href={"/api/auth/signin"} className="btn btn-neutral">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
