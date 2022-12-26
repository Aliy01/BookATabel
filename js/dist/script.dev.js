"use strict";

var enterName = document.querySelector("#name"),
    enterAge = document.querySelector("#age"),
    enterJob = document.querySelector("#job"),
    addList = document.querySelector("#add-list"),
    btn = document.querySelector(".add"),
    search = document.querySelector("#search"),
    searchBtn = document.querySelector('.search-btn'); // btn.addEventListener("click", (e) => {
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

var arr = [{
  id: 1,
  name: "Aliy",
  age: 18,
  job: "Junior Dev"
}, {
  name: "Nafisa",
  age: 15,
  job: "MEVN Stack"
}, {
  id: 3,
  name: "Samandar",
  age: 20,
  job: "FullStack Dev"
}, {
  name: "Mansur",
  age: 19,
  job: "Web Design"
}, {
  id: 1,
  name: "Mahmud",
  age: 18,
  job: "Manager"
}, {
  name: "Oisha",
  age: 20,
  job: "MEVN Stack"
}, {
  name: "Umar",
  age: 19,
  job: "Frontend Dev"
}, {
  id: 3,
  name: "Abu Bakr",
  age: 20,
  job: "Policeman"
}, {
  id: 1,
  name: "Bilol",
  age: 18,
  job: "Teacher"
}, {
  name: "Fotima",
  age: 20,
  job: "MEVN Stack"
}, {
  name: "Aliy",
  age: 19,
  job: "Driver"
}, {
  id: 3,
  name: "Samandar",
  age: 20,
  job: "Teacher"
}, {
  id: 1,
  name: "Muhammad",
  age: 18,
  job: "Mern Stack"
}, {
  name: "Fotima",
  age: 20,
  job: "MEVN Stack"
}, {
  name: "Zayid",
  age: 19,
  job: "Developer"
}, {
  id: 3,
  name: "Muhammad",
  age: 20,
  job: "FullStack Dev"
}, {
  id: 1,
  name: "Abdulloh",
  age: 18,
  job: "Frontend Dev"
}, {
  name: "Omina",
  age: 20,
  job: "House Whife"
}, {
  name: "Turabek",
  age: 19,
  job: "designer"
}, {
  id: 3,
  name: "Samandar",
  age: 20,
  job: "Developer"
}, {
  id: 1,
  name: "Akbar",
  age: 18,
  job: "Policeman"
}, {
  name: "Ismoil",
  age: 20,
  job: "Waiter"
}, {
  name: "Ibrohim",
  age: 19,
  job: "Frontend Dev"
}, {
  id: 3,
  name: "MuhammadAmin",
  age: 20,
  job: "FullStack Dev"
}, {
  id: 1,
  name: "Mahmud",
  age: 18,
  job: "Hakker"
}, {
  name: "Axmad",
  age: 20,
  job: "Student"
}, {
  name: "Abdulloh",
  age: 19,
  job: "Frontend Dev"
}, {
  id: 3,
  name: "Zayit",
  age: 20,
  job: "Pointer"
}, {
  id: 1,
  name: "Bilol",
  age: 18,
  job: "Singer"
}, {
  name: "Bobur",
  age: 20,
  job: "Policeman"
}, {
  name: "Umar",
  age: 19,
  job: "Teacher"
}, {
  id: 3,
  name: "Abu Bakr",
  age: 20,
  job: "Web Designer"
}];
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  arr.forEach(function (arrItem) {
    var obj = {
      name: arrItem.name,
      age: arrItem.age,
      job: arrItem.job
    };
    var searchText = search.value;

    if (searchText == obj.name || searchText == obj.age || searchText == obj.job) {
      var newTr = document.createElement("tr");
      var newName = document.createElement('th');
      newName.innerHTML = obj.name;
      newTr.appendChild(newName);
      var newAge = document.createElement('th');
      newAge.innerHTML = obj.age;
      newTr.appendChild(newAge);
      var newJob = document.createElement('th');
      newJob.innerHTML = obj.job;
      newTr.appendChild(newJob);
      addList.appendChild(newTr);
    } // console.log(obj);

  });
  search.value = ""; // console.log(searchText);
}); // arr.forEach(item => {
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