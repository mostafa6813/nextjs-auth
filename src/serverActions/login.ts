"use server";

import { cookies } from "next/headers";

export const login = async (formData: FormData) => {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });
  if (res.ok) {
    cookies().set({
      name: "token",
      value: "token-value",
      maxAge: 60 * 60 * 24,
    });
    return { message: res.text(), status: res.status };
  } else {
    return { message: res.text(), status: res.status };
  }
};
