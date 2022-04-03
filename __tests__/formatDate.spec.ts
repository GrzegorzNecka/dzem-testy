import { formatDate } from "./../lib/formatDate";

describe("formatCurrency", () => {
    // it("returns date object for 2021-05-10 ", () => {
    //     expect(formatDate("2021-05-10")).toMatchObject(new Date(2021, 5, 10));
    // });
    it("returns date object for 2021-05-10 ", () => {
        expect(formatDate("2021-05-10")).toMatchObject({ year: 2021, month: 5, day: 10 });
    });

    // it("returns date object for 2021-13-10 ", () => {
    //     expect(formatDate("2021-13-10")).toBe(null);
    // });
});
