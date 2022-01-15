export const isToday = (date) => {
  let today = new Date().getDate();
  let dueDate = new Date(date).getDate();
  return today == dueDate;
};

export const isThisMonth = (date) => {
  let thisMonth = new Date().getMonth();
  let dueDateMonth = new Date(date).getMonth();
  return thisMonth == dueDateMonth;
};

export const isThisWeek = (date) => {
  return currentWeek() == dateWeek(date);
};

const currentWeek = () => {
  const today = new Date();
  const year = today.getFullYear();
  const oneJan = new Date(year, 0, 1);
  const timeDifSecs = (today - oneJan) / 1000;
  const numberOfDays = Math.round(timeDifSecs / (60 * 60 * 24));
  const numberOfWeeks = Math.floor(numberOfDays / 7);
  return numberOfWeeks;
};

const dateWeek = (date) => {
  const dueDate = new Date(date);
  const year = new Date().getFullYear();
  const oneJan = new Date(year, 0, 1);
  const timeDifSecs = (dueDate - oneJan) / 1000;
  const numberOfDays = Math.round(timeDifSecs / (60 * 60 * 24));
  const numberOfWeeks = Math.floor(numberOfDays / 7);
  return numberOfWeeks;
};
