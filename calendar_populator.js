const eventlist = {
    "2026-02-04": [{name: "FredagsStandup: Februar", logo: "flogo.svg"}],
    "2026-03-04": [{name: "FredagsStandup: Marts", logo: "flogo.svg"}],
    "2026-04-01": [{name: "FredagsStandup: April", logo: "flogo.svg"}],
    "2026-05-06": [{name: "FredagsStandup: Maj", logo: "flogo.svg"}],
    "2026-06-03": [{name: "FredagsStandup: Juni", logo: "flogo.svg"}],
    
    "2026-02-06": [{name: "Bærbar: Semesterstart", logo: "flogo.svg"}],
    "2026-03-06": [{name: "Bærbar", logo: "flogo.svg"}],

    "2026-02-05": [{name: "Opstart og filmafstemning", logo: "fkult.webp"}],    
    "2026-02-12": [{name: "Filmaften 1", logo: "fkult.webp"}],
    "2026-02-26": [{name: "Filmaften 2", logo: "fkult.webp"}],
    "2026-03-12": [{name: "Filmaften 3", logo: "fkult.webp"}],
    "2026-03-26": [{name: "Filmaften 4", logo: "fkult.webp"}],
    "2026-04-09": [{name: "Filmaften 5", logo: "fkult.webp"}],
    "2026-04-23": [{name: "Filmaften 6", logo: "fkult.webp"}],
    "2026-05-07": [{name: "Filmaften 7", logo: "fkult.webp"}],
    "2026-05-21": [{name: "Filmaften 8", logo: "fkult.webp"}],
    
    "2026-02-13": [{name: "Val(g)entines Bar m. SoFiA", logo: "adsl.png"}],

    "2026-02-20": [{name: "F-astelavn", logo: "initiv.svg"}],
    "2026-03-20": [{name: "F-dag", logo: "initiv.svg"}],
    "2026-04-10": [{name: "Feaster", logo: "initiv.svg"}],

    "2026-04-02": [{name: "Facking v8", logo: "fit.svg"}],
    "2026-04-03": [{name: "FLAN 46368.0", logo: "flan.webp"}],
    "2026-04-04": [{name: "FLAN 46368.0", logo: "flan.webp"}],
    "2026-04-05": [{name: "FLAN 46368.0", logo: "flan.webp"}],
    
    "2026-05-02": [{name: "F-Klubbens 50-års Jubilæum", logo: "flogo.svg"}],
    "2026-05-14": [{name: "F-Sportsdag", logo: "initiv.svg"}],

    "2026-02-18": [{name: "Linux Install Party", logo: "asck.png"}],
    "2026-03-04": [{name: "Git Gut with Git and Shell", logo: "asck.png"}],
    "2026-03-18": [{name: "SBCC - Running & Benchmarking Clusters", logo: "asck.png"}],
    "2026-04-08": [{name: "Code Golfing 101 - Elegance in Conciseness", logo: "asck.png"}],
    "2026-04-22": [{name: "Kubernetes 101 - Distributed Computing", logo: "asck.png"}],
    "2026-05-06": [{name: "NixOS & Declarative Configuration", logo: "asck.png"}],

    //"2025-09-19": [{name: "Generalforsamling 2025", logo: "flogo.svg"}],
    //"2025-09-24": [{name: "Brætspilsaften m. Prosa", logo: "adsl.png"}],
    //"2024-12-20": [{name: "=Projektafleverings deadline="}],
};
const year = 2026;
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
