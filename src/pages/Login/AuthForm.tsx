import React, { useState } from "react";
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
import { verifyEmail, verifyPassword } from "@/lib/utils";
import { register, login } from "@/services/authServices";
import { useStore } from "@/lib/store/useStore";
import type { UserCreate } from "@/types/Types";


export default function AuthForm() {
  const [logged, setLogged] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLogged = useStore(s => s.isLogged);
  const shiftLogged = useStore(s => s.shiftLogged);

  const switchLogged = () => {
    setLogged(p => !p);
  }
  const handleUserName = (s: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(s.target.value);
  }

  const handleEmail = (s: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(s.target.value);
  }
  const handlePassword = (s: React.ChangeEvent<HTMLInputElement>) => {
    const p = s.target.value;
    setPassword(p);
  }

  const handleDisableButton = () => {
    if (password !== "" && verifyPassword(password) && email !== "" && verifyEmail(email)) {
      return false;
    }
    return true;
  }
  const handlePostAction = async () => {
    if (logged) {
      try {
        await login(email, password);
        shiftLogged();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const user: UserCreate = {
          username: email,
          email,
          password,
        }
        await register(user);
        shiftLogged();
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (<div>
    <FieldSet className="bg-indigo-400 shadow-2xl rounded-md w-80 h-fit pb-4">
      <FieldGroup className="mt-8">
        {logged === true ? <Field className="px-12">
          <FieldLabel htmlFor="email">
            Email:
          </FieldLabel>
          <Input id="email" value={email} onChange={handleEmail} type="text" />
        </Field> :
          <div>
            <Field className="px-12">
              <FieldLabel htmlFor="username">
                Username:
              </FieldLabel>
              <Input id="username" value={username} onChange={handleUserName} type="text" />
            </Field>
            <Field className="px-12 mt-4">
              <FieldLabel htmlFor="email">
                Email:
              </FieldLabel>
              <Input id="email" value={email} onChange={handleEmail} type="text" />
            </Field>
          </div>
        }
        <Field className="px-12">
          <div className="min-h-60 flex flex-col">
            <div className="flex-1">
              <FieldLabel htmlFor="password">Password:</FieldLabel>
              <Input id="password" className="mb-4" type="text" value={password} onChange={handlePassword} />
              {handleDisableButton() && <FieldDescription className="text-purple-700">8 Cararacteres y <br />2 digitos como minimo!</FieldDescription>}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center mt-8">
                <Checkbox id="keepsigned" />
                <FieldLabel htmlFor="keepsigned" className="text-black">Mantener iniciada la sesion</FieldLabel>
              </div>
              <Button className="mt-4" disabled={handleDisableButton()} onClick={handlePostAction}>Ingresar</Button>
            </div>
            <div>
              {
                logged === true ?
                  <div className="mt-2 py-4">
                    <span className="mb-2 mr-4">No tienes cuenta?</span>
                    <button className="hover:scale-[110%] hover:cursor-pointer border-b border-indigo-700 shadow-4xl shadow-blue-900" onClick={switchLogged}>Registrate!</button>
                  </div> :
                  <div className="mt-2 py-4">
                    <span className="mb-2 mr-4">Tienes cuenta?</span>
                    <button className="hover:scale-[110%] hover:cursor-pointer border-b border-indigo-700 shadow-4xl shadow-blue-900" onClick={switchLogged}>Ingresa!</button>
                  </div>
              }
            </div>
          </div>
        </Field>
      </FieldGroup>
    </FieldSet >
  </div >
  )
}