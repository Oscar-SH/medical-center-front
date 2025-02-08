export const calculatePages = (total_rows: number | null, page_size: number) => {
    if (total_rows) {
        const aux_total = total_rows % page_size === 0
            ? total_rows / page_size
            : parseInt((total_rows / page_size).toString()) + 1;
        return aux_total;
    }
    return 0;
};

export const calculateRangeRows = (page: number, page_size: number, size_table: number) => {
    const firstNumber = size_table > 0 ? ((page - 1) * page_size) + 1 : 0;
    const secoundNumber = ((page - 1) * page_size) + size_table;

    return `${firstNumber.toLocaleString()}-${secoundNumber.toLocaleString()}`;
};