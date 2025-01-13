const eventlist = {
    "2025-02-03": [{name: "=Semesterstart="}],
    
    "2025-02-06": [{name: "Filmafstemning", logo: "fkult.webp"}],
    "2025-02-13": [{name: "F-Kult: Filmaften 1", logo: "fkult.webp"}],
    "2025-02-27": [{name: "F-Kult: Filmaften 2", logo: "fkult.webp"}],
    "2025-03-13": [{name: "F-Kult: Filmaften 3", logo: "fkult.webp"}],
    "2025-03-27": [{name: "F-Kult: Filmaften 4", logo: "fkult.webp"}],
    "2025-04-10": [{name: "F-Kult: Filmaften 5", logo: "fkult.webp"}],
    "2025-04-24": [{name: "F-Kult: Filmaften 6", logo: "fkult.webp"}],
    "2025-05-08": [{name: "F-Kult: Filmaften 7", logo: "fkult.webp"}],

    "2025-02-20": [{name: "Facking v7.0", logo: "fit.svg"}],
    "2025-04-03": [{name: "Facking v7.5", logo: "fit.svg"}],

    "2025-04-04": [{name: "FLAN 17711.0", logo: "flan.webp"}],
    "2025-04-05": [{name: "FLAN 17711.0", logo: "flan.webp"}],
    "2025-04-06": [{name: "FLAN 17711.0", logo: "flan.webp"}],

    "2025-02-28": [{name: "Fastelavn", logo: "initiv.svg"}],
    "2025-03-21": [{name: "F-Dag", logo: "initiv.svg"}],
    "2025-04-11": [{name: "Feaster", logo: "initiv.svg"}],
    "2025-05-09": [{name: "F-Sportsdag", logo: "initiv.svg"}],

    //"2024-12-20": [{name: "=Projektafleverings deadline="}],
};
const year = 2025;
const months = [2,3,4,5,6];
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

const main = document.getElementsByTagName('main')[0];
for (month of months) {
    const monthElem = document.createElement('article');
    monthElem.classList.add('month');
    const day = new Date(year, month-1, 1);
    const lastdate = new Date(year, month, 0);
    const heading = document.createElement('h3');
    heading.innerText = day.toLocaleDateString('da-DK', { month: 'long' });
    monthElem.append(heading);

    while (day <= lastdate) {
        const weekday = document.createElement('p');
        weekday.innerText = day.toLocaleDateString('da-DK', { weekday: 'long' }).charAt(0);

        const date = document.createElement('p');
        date.innerText = day.getDate();

        const events = document.createElement('section');
        events.innerText = ` `;

        if (isWeekend(day)) {
            weekday.classList.add('weekend');
            date.classList.add('weekend');
            events.classList.add('weekend');
        }
        populate(day, events);
        monthElem.append(weekday, date, events);
        day.setDate(day.getDate() + 1);
    }
    main.appendChild(monthElem);
}

function isWeekend(day) {
    if ([0, 6].includes(day.getDay())) {
        return true;
    }
    return false;
}

function populate(day, elem) {
    const dayKey = day.toLocaleDateString('en-CA', options);
    if (eventlist[dayKey]) {
        eventlist[dayKey].forEach(activity => {
            console.log(activity.name);
            const activityItem = document.createElement('p');
            activityItem.innerText = activity.name;
            if (activity.logo) {
                const logo = document.createElement('img');
                logo.src = `assets/${activity.logo}`;
                elem.appendChild(logo);
            }
            elem.appendChild(activityItem);
        });
    }
}   