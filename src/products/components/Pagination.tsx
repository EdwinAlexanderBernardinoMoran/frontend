import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const PaginationData = ({ page, totalPages, setPage }: PaginationProps) => {

  console.log('Page', page);
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => page > 1 && setPage(page - 1)}
          />
        </PaginationItem>

        <PaginationItem>
          <span>{page} / {totalPages}</span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext 
            onClick={() => page < totalPages && setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}