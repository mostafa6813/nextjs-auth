"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { setTimeout } from "timers/promises";

export const logout = () => {
  cookies().delete("token");
  redirect("/");
};
