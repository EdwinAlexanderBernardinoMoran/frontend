interface NotFountProps {
    title: string;
    description: string;
}

export const NotFound = ({title, description}: NotFountProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}