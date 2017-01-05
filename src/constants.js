export const label1 = 'all';
export const label2 = 'active';
export const label3 = 'completed';
let rows = [];
for (let i of Array(52).keys()) {
  rows.push(i);
}
export const weeksInYear = rows;
rows = [];
for (let i of Array(80).keys()) {
  rows.push(i);
}
export const lifeExpectancy = 80;

export const MonthsArray = [{
  name: 'January',
  month: 1,
}, {
  name: 'February',
  month: 2,
}, {
  name: 'March',
  month: 3,
}, {
  name: 'April',
  month: 4,
}, {
  name: 'May',
  month: 5,
}, {
  name: 'June',
  month: 6,
}, {
  name: 'July',
  month: 7,
}, {
  name: 'August',
  month: 8,
}, {
  name: 'September',
  month: 9,
}, {
  name: 'October',
  month: 10,
}, {
  name: 'November',
  month: 11,
}, {
  name: 'December',
  month: 12,
}];

export const currentYear = new Date().getFullYear();
export const startYear = currentYear - 120;
let i = currentYear;
rows = [];

while (i >= startYear) {
  //console.log(i);
  rows.push(i);
  i = i - 1;
}
export const YearsArray = rows;

rows = [];
i = 1;
while (i <= 31) {
  rows.push(i);
  i++;
}
export const DaysArray = rows;
