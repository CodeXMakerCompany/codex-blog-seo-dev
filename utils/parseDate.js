import moment from "moment";

const date = (date) => {
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return formattedDate;
}

export default date;