import React from "react";
import type { SelectGroup } from "@/types/Types";


interface Props {
  groups: SelectGroup[]
  value: string
  onChange: (value: string) => void
  id?: string
  label?: string
}

export default function OptionGroup({ groups, value, onChange, id, label }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return (<div>
    {label && <label htmlFor={id}>{label}</label>}
    
  </div>)
}