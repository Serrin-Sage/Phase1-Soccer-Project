console.log("JS is Running")

const headerTitle = document.getElementById("title")
const logoImage = document.getElementsByClassName("logo")
const teamList = document.getElementById("soccer-list")
const flagDiv = document.getElementById("flag-container")
const flagImage = document.getElementById("flag-image")
const scoreDiv = document.getElementById("score-container")


const fetchDB = () => {
    fetch("http://localhost:3000/teams")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item,index) => renderSoccerTeam(item, index))
    })
}

const renderSoccerTeam = (team) => {
    const listItem = document.createElement("li")
    listItem.textContent = team.name;
    listItem.setAttribute("class", "soccer-team")
    teamList.append(listItem)

    listItem.addEventListener("click", () => {
        flagImage.src = team.flag
        logoImage.src = team.icon;
        headerTitle.textContent = team.name
    })
}

fetchDB()