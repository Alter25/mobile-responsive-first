import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldSet,
  FieldGroup,
  FieldLabel,
  FieldDescription
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { verifyPassword } from "@/lib/utils";


export default function Login() {
  const [password, setPassword] = useState<string>("");

  const handlePassword = (s: React.ChangeEvent<HTMLInputElement>) => {
    const p = s.target.value;
    setPassword(p);
  }
  const handleDisableButton = () => {
    if (password !== "" && verifyPassword(password)) {
      return false;
    }
    return true;
  }


  return <section className="w-full p-4 flex justify-center items-center mt-4 sm:mt-12">
    <FieldSet className="bg-indigo-400 rounded-md w-80 h-100">
      <FieldGroup className="my-8">
        <Field className="px-12">
          <FieldLabel htmlFor="username">
            Username
          </FieldLabel>
          <Input id="username" type="text" />
        </Field>
        <Field className="px-12">
          <FieldLabel htmlFor="password">
            Password
          </FieldLabel>
          <Input id="password" type="text" value={password} onChange={handlePassword} />
          <FieldDescription className="text-purple-700">8 Cararacteres y 2 digitos como minimo!</FieldDescription>
          <div className="flex gap-2 items-center mt-8">
            <Checkbox id="keepsigned" />
            <FieldLabel htmlFor="keepsigned" className="text-black">Mantener iniciada la sesion</FieldLabel>
          </div>
          <Button className="mt-4" disabled={handleDisableButton()}>Ingresar</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </section>
}