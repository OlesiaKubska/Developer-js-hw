// task 2 (Day.js, date-fns, temporal)


function getDay() {
    let daysNamesInPolish = ["niedziela", "pon", "wt", "sr", "cz", "pt", "sob"];
    let today = new Date();

    let currentDayIndex = today.getDay();

    return daysNamesInPolish[currentDayIndex];
    
}

console.log(getDay());