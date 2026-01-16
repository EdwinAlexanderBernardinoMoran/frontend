import { Loader2 } from "lucide-react"

interface LoadingProps {
    text: string;
}

export const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}