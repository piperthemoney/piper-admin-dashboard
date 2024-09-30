const ConvertToMMT = ({ utc }) => {
  const date = new Date(utc);
  // console.log("utc", utc, "date", date);
  // MMT is UTC +6:30
  // const mmtOffset = 6.5 * 60 * 60 * 1000; // Offset in milliseconds
  const mmtDate = new Date(date.getTime());

  const options = { year: "numeric", month: "long", day: "numeric" };
  return mmtDate.toLocaleString("en-US", options); // Adjust this format as needed
};

export default ConvertToMMT;
