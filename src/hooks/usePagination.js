import { useMemo, useState } from "react";

const usePagination = ({ total, pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(total / pageSize);

    const pages = useMemo(() => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const result = [1];

        if (currentPage >= 4) result.push("dots");

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) result.push(i);

        if (currentPage < totalPages - 2) result.push("dots");

        result.push(totalPages);
        return result;
    }, [currentPage, totalPages]);

    return { currentPage, setCurrentPage, pages, totalPages };
};

export default usePagination;