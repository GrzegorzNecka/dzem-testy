export const formatCurrency = (cents: number, currency: string = "$"): string => {
    const amount = cents / 100;
    return `${currency}${amount.toFixed(2)}`;
};
