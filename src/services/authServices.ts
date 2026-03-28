import { apiFetch } from "@/api/client";
import type { Token, UserCreate, UserResponse } from "../types/Types";



export async function register(data: UserCreate): Promise<UserResponse>{
  return apiFetch<UserResponse>("/users/", {
    method: "POST",
    body:JSON.stringify(data),
  })
}

export async function login(username:string, password:string):Promise<Token> {
  const token = await apiFetch<Token>("/auth/login", {
    method: "POST",
    body:JSON.stringify({username,password}),
  })

  localStorage.setItem("token", token.access_token);
  return token;
}

export function logout() {
  localStorage.removeItem("token");
}