interface Props{
  title: string;
}

export const CustomHeader = ({title}: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
    </>
  )
}