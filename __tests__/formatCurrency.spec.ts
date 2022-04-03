import { formatCurrency } from "./../lib/formatCurrency";

describe("formatCurrency", () => {
    test("returns $2.34 for input 234", () => {
        expect(formatCurrency(234)).toBe("$2.34");
    });

    test("returns   £0.01 for input 1", () => {
        expect(formatCurrency(1, "£")).toBe("£0.01");
    });
});
