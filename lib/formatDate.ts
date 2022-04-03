export const formatDate = (dateToFormat: string): object | null => {
    const [y, m, d] = dateToFormat.split("-");

    const n = (num: string): number => Number.parseInt(num);

    const year = n(y);
    const month = n(m);
    const day = n(d);

    if (year < 1900 || year > 2100) {
        return null;
    }

    if (month < 1 || month > 12) {
        return null;
    }

    if (day < 1 || day > 31) {
        return null;
    }

    const result = { year, month, day };

    return result;
};
