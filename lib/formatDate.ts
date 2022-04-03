export const formatDate = (dateToFormat: string): object | null => {
    const [year, month, day] = dateToFormat.split("-").map((datePart: string) => Number.parseInt(datePart));

    if (year < 1900 || year > 2100) {
        return null;
    }

    if (month < 1 || month > 12) {
        return null;
    }

    if (day < 1 || day > 31) {
        return null;
    }

    if (day <= 31 && day > 28) {
        const date = new Date(year, month - 1, day);

        if (date.getDate() !== day) {
            throw new Error("you are using the wrong day");
        }
    }

    const result = { year, month, day };

    return result;
};
