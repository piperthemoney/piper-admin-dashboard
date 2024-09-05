const ConvertToMMT = ({ utc }) => {
  const date = new Date(utc);
  // MMT is UTC +6:30
  const mmtOffset = 6.5 * 60 * 60 * 1000; // Offset in milliseconds
  const mmtDate = new Date(date.getTime() + mmtOffset);
  return mmtDate.toLocaleString(); // Adjust this format as needed
};

export default ConvertToMMT;
