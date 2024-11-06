import { convertDate, sortBillsFromEarliestToLatest } from "../../views/BillsUI.js";

test('Test date is converted in a better format', () => {
    expect(convertDate('3 Fév. 2021')).toStrictEqual(new Date('2021-02-03'));
    expect(convertDate('2 Aoû. 2024')).toStrictEqual(new Date('2024-08-02'));
    expect(convertDate('14 Jui. 2000')).toStrictEqual(new Date('2000-07-14'));
    expect(convertDate('2021-02-03')).toStrictEqual(new Date('2021-02-03'));
    expect(convertDate('2024-08-02')).toStrictEqual(new Date('2024-08-02'));
    expect(convertDate('2000-07-14')).toStrictEqual(new Date('2000-07-14'));
    expect(convertDate('14 Jui. 1998')).toStrictEqual(new Date('1998-07-14'));
});

test('Test bills sorting function', () => {
    const bills = [
        { date: '2022-02-19' },
        { date: '2024-11-05' },
        { date: '2000-06-12' },
        { date: '3 Fév. 2021' },
    ]

    expect(sortBillsFromEarliestToLatest(bills)).toStrictEqual([
        { date: '2024-11-05' },
        { date: '2022-02-19' },
        { date: '3 Fév. 2021' },
        { date: '2000-06-12' },
    ]);
});
