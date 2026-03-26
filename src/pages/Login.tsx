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
import { verifyEmail, verifyPassword } from "@/lib/utils";
import { register, login } from "@/services/authServices";
import { useStore } from "@/lib/store/useStore";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const logged = useStore(s => s.logged);
  const shiftLogged = useStore(s => s.shiftLogged);

  const handlePassword = (s: React.ChangeEvent<HTMLInputElement>) => {
    const p = s.target.value;
    setPassword(p);
  }
  const handleEmail = (s: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(s.target.value);
  }
  const handleDisableButton = () => {
    if (password !== "" && verifyPassword(password) && email !== "" && verifyEmail(email)) {
      return false;
    }
    return true;
  }
  const handleLogin = async () => {
    try {
      await login(email, password);
      shiftLogged();
    } catch (error) {
      console.error(error);
    }
  }


  return <section className="w-full p-4 flex justify-center items-center mt-4 sm:mt-12">
    <FieldSet className="bg-indigo-400 rounded-md w-80 h-100">
      <FieldGroup className="my-8">
        <Field className="px-12">
          <FieldLabel htmlFor="email">
            Email:
          </FieldLabel>
          <Input id="email" value={email} onChange={handleEmail} type="text" />
        </Field>
        <Field className="px-12">
          <div className="min-h-60 flex flex-col">
            <div className="flex-1">
              <FieldLabel htmlFor="password">Password:</FieldLabel>
              <Input id="password" type="text" value={password} onChange={handlePassword} />
              {handleDisableButton() && <FieldDescription className="text-purple-700">8 Cararacteres y <br />2 digitos como minimo!</FieldDescription>}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center mt-8">
                <Checkbox id="keepsigned" />
                <FieldLabel htmlFor="keepsigned" className="text-black">Mantener iniciada la sesion</FieldLabel>
              </div>
              <Button className="mt-4" disabled={handleDisableButton()} onClick={handleLogin}>Ingresar</Button>
            </div>
          </div>
        </Field>
      </FieldGroup>
    </FieldSet>
  </section>
}