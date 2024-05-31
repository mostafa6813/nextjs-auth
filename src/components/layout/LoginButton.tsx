"use client";

import { logout } from "@/serverActions/logout";
import { useRouter } from "next/navigation";

export const LoginButton = ({ token }: { token?: string }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={token ? () => logout() : () => push("/auth")}
      className="bg-slate-900 px-4 py-[6px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
    >
      {token ? "Logout" : " Login"}
    </button>
  );
};
