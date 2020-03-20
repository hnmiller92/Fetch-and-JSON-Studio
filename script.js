window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const astronauts = document.getElementById("container");
            for (let index = 0; index < json.length; index++){
                astronauts.innerHTML += `
                <div class="astronaut">
                <div>
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>
                        <li class="text">Active: ${json[index].active}</li>
                        <li>Skills: ${json[index].skills.join(", ")}</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${json[index].picture}>
                </div>
                `;
                index = (index + 1) % json.length;
                }
            })
        })
    })
