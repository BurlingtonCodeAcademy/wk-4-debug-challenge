let btn = document.querySelector(".btn")

async function getData() {
    let res = await fetch("https://api.spacexdata.com/v3/capsules")
    let data = res.json()
    
}

function renderData(data) {
    let rockets = document.querySelector(".rockets")
    
    data.forEach(r => {
        let p = document.createElement("p")
        p.innerHTML = `Serial: ${r.capsule_serial} Status: ${r.status} Launched: ${r.original_launch}`
        p.className = "ind-rocket"
        let p2 = document.createElement("p")
        p2.textContent = r.details

        rockets.appendChild(p)
        rockets.appendChild(p2)
    })
}

btn.addEventListener("on click", e => {
    getData()
    renderData()
})
