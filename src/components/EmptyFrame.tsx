
interface Props {
  texto?: string;
}
export const EmptyFrame = ({ texto = "" }: Props) => {
  return <div className="w-24 h-30 border rounded-2xl bg-purple-400 text-3xl font-bold flex justify-center items-center"><div className="rotate-45">
    {texto}
  </div></div>
}

