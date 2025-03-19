// code your solution herefunction superbowlWin(record){
const record = [
  { year: "2015", result: "w" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(record) {
  const result = record.find((entry) => entry.result === "W");

  if (result) {
    return result.year;
  } else {
    return undefined;
  }
}
