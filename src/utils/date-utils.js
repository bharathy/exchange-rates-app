
const dateToYMD = (date) => {
    let actualDate= new Date(date);
    let d = actualDate.getDate();
    let m = actualDate.getMonth() + 1; 
    let y = actualDate.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

export default dateToYMD;