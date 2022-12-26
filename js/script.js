const enterName = document.querySelector("#name"),
    enterAge = document.querySelector("#age"),
    enterJob = document.querySelector("#job"),
    addList = document.querySelector("#add-list"),
    btn = document.querySelector(".add"),
    search = document.querySelector("#search"),
    searchBtn = document.querySelector('.search-btn');


// btn.addEventListener("click", (e) => {
//     e.preventDefault()

//     if (enterName.value == "" && enterAge.value == "" && enterJob.value == "") {
//         alert("Ma'lumotlarni  To'ldiring!")
//     } else {
//         var newTr = document.createElement("tr")
//         var newName = document.createElement('th')
//         newName.innerHTML = enterName.value
//         newTr.appendChild(newName)

//         var newAge = document.createElement('th')
//         newAge.innerHTML = enterAge.value
//         newTr.appendChild(newAge)

//         var newJob = document.createElement('th')
//         newJob.innerHTML = enterJob.value
//         newTr.appendChild(newJob)

//         addList.appendChild(newTr)



//         enterName.value = ""
//         enterAge.value = ""
//         enterJob.value = ""
//     }

// })

let arr = [
    { id: 1, name: "Aliy", age: 18, job: "Frontend Dev" },
    { name: "Nafisa", age: 20, job: "FullStack Dev" },
    { name: "Aliy", age: 19, job: "Frontend Dev" },
    { id: 3, name: "Samandar", age: 20, job: "FullStack Dev" }
]


searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    arr.forEach(arrItem => {
            let obj = {
                name: arrItem.name,
                age: arrItem.age,
                job: arrItem.job
            }
            let newTr = document.createElement("tr")
            let newName = document.createElement('th')
            newTr.appendChild(newName)

            let newAge = document.createElement('th')
            newTr.appendChild(newAge)

            let newJob = document.createElement('th')
            newTr.appendChild(newJob)

            addList.appendChild(newTr)

            let searchText = search.value
            if (searchText == obj.name) {

                newName.innerHTML = obj.name
                newAge.innerHTML = obj.age
                newJob.innerHTML = obj.job
            }
            // console.log(obj);
        })
        // console.log(searchText);
})












// arr.forEach(item => {
//     let newTr = document.createElement("tr")
//     let newName = document.createElement('th')
//         // newName.innerHTML = item.name
//     newTr.appendChild(newName)

//     let newAge = document.createElement('th')

//     newTr.appendChild(newAge)

//     let newJob = document.createElement('th')

//     newTr.appendChild(newJob)


//     addList.appendChild(newTr)
//     searchBtn.addEventListener("click", (e) => {
//         e.preventDefault()
//         if (search.value == item.name) {
//             newName.innerHTML = item.name;
//         }
//         search.value = ""
//     })

// })