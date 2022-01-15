export const isToday = (date) => {
    let today = new Date().getDate();
    let dueDate = date.split('-')[2];
    return today == dueDate;
}

export const isThisMonth = (date) => {
    let thisMonth = new Date().getMonth();
    let dueDateMonth = parseInt(date.split('-')[1]-1);
    return thisMonth == dueDateMonth;
}

const isThisWeek = (date) => {

    return;
}