export const convertUnixTimestampToDate = (timestamp: number) => {
  try {
    const dateObj = new Date(timestamp * 1000);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  } catch (error) {
    return "Invalid timestamp";
  }
};
