// Hackerrank
// https://www.hackerrank.com/challenges/js10-date/problem
const getDayName = (dateString) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(dateString).getDay()];
