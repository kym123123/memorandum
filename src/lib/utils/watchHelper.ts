const dayNameArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;

const monthNameArr = [
  'Junary',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

type DayNameType = typeof dayNameArr[number];

type MonthNameType = typeof monthNameArr[number];

export const getDayName = (dayNum: number): DayNameType =>
  dayNameArr[dayNum] as DayNameType;

export const addZeroToTimeunit = (target: number): string =>
  target > 9 ? target.toString() : '0' + target;

export const getMonthName = (monthNum: number): MonthNameType =>
  monthNameArr[monthNum];
