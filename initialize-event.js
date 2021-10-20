function showEvents(data) {
    const eventcontainer = document.getElementById('event-scroll')
    for (var i = 0; i < data.length; i++){
        const para = document.createElement("p");
        para.className = "event-details";
        para.innerHTML =   `Event Title: ${data[i].event_title} <br/> 
                            Location: ${data[i].location} <br/>
                            Time: ${data[i].event_time}`
        eventcontainer.appendChild(para)
    }
}

async function fetchEvent()
{
    const response = await fetch('https://gist.githubusercontent.com/anthonyn5600/42f598c9b99ba68207cce175605b5578/raw/baad300a038afb34a91f657421217cda59b02a6b/event.json')
    .then(response => response.json())
    .then(data => showEvents(data.events));
}

fetchEvent()

