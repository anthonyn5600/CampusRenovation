var event_location = [] //used for event-function.js.
//Serve the purpose of using a GET Request toward the Github Gist website and store it into an variable
async function fetchEvent() {
    const response = await fetch('https://gist.githubusercontent.com/anthonyn5600/42f598c9b99ba68207cce175605b5578/raw/d38c88bac82c4b5d7b0ae7e0ec7d2bea8d622562/event.json')
        .then(response => response.json())
        .then(data => showEvents(data.events));
}

//Initialize the events based off the data that store the information from the GET Request
function showEvents(data) {
    const eventcontainer = document.getElementById('event-scroll')
    for (var i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.addEventListener('click', eventClick) // click function is in event-function.js
        div.className = `event-details`;
        div.innerHTML = `Event Title: ${data[i].event_title} <br/> 
                            Location: ${data[i].location} <br/>
                            Day: ${data[i].event_month} ${data[i].event_day} <br/>
                            Time: ${data[i].event_time}<br/>
                            <a href="${data[i].link}" target="popup" onclick="window.open(${data[i].link},'popup','width=600,height=600'); return false;">More Info</a><br/>
                            <button onclick="routeTo('${data[i].location}')">Get Direction</button>`
            
        if (!event_location.includes(data[i].location)) {
            event_location.push(data[i].location)
        }

        eventcontainer.appendChild(div)
    }
    // console.log(event_location)
}


fetchEvent()

