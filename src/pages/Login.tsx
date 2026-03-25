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


export default function Login() {
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
          <Input id="password" type="password" />
          <FieldDescription className="text-purple-700">8 Cararacteres como minimo!</FieldDescription>
          <div className="flex gap-2 items-center mt-8">
            <Checkbox id="keepsigned" />
            <FieldLabel htmlFor="keepsigned" className="text-black">Mantener iniciada la sesion</FieldLabel>
          </div>
          <Button className="mt-4">Ingresar</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </section>
}