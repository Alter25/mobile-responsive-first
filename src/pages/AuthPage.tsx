import { useState } from "react"
import AuthForm from "./Login/AuthForm"

export default function AuthPage() {
  return <section className="w-full p-4 flex justify-center items-center mt-4 sm:mt-12">
    <AuthForm />
  </section>
}