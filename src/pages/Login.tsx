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
  return <section className="w-full p-4 flex justify-center items-center">
    <FieldSet className="bg-indigo-400 rounded-md w-80 h-90">
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
          <FieldDescription>8 Cararacteres como minimo!</FieldDescription>
          <div className="flex gap-2 items-center">
            <Checkbox id="keepsigned" />
            <FieldLabel>Mantener iniciada la sesion</FieldLabel>
          </div>

          <Button className="my-8">Ingresar</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </section>
}