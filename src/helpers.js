const formatDate = (date) => {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  let year = d.getFullYear()

  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }
  return [year, month, day].join('-');
}

const formatDateToReadable = (userDOB) => {
  const dob = new Date(userDOB);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}

const format24To12Time = (time24) => {
  let ts = time24;
  const H = +ts.substr(0, 2);
  let h = (H % 12) || 12;
  h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  const ampm = H < 12 ? " am" : " pm";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

export { formatDate, formatDateToReadable, format24To12Time }

