let groupsDiv = document.querySelector("#groupsFlex");
let randomBtn = document.querySelector("#randomGroups");

const spicyStudents = [
  "Durmus Akkus",
  "Meron Ambelu",
  "Raquia Amin",
  "Amana Ammishaddai",
  "Oluwaseun Arogundade",
  "Renan Auricchio",
  "Juan Batista",
  "Esayas Belachew",
  "Yawukal Belay",
  "Antonina Berezovskia",
  "Ephrem Binchebo",
  "Ariel Bowen",
  "Carlos Cuenca Canal",
  "Aki Carusillo",
  "Pinal Champaneri",
  "Jeremy Chan",
  "Cody Clarke",
  "Filmon Emehatsion",
  "Haileyesus Endeshaw",
  "Gio Ferreira",
  "Moshelle Garbla",
  "Bililign Gebru",
  "Selamawit Gurmu",
  "Mahlet Hailu",
  "Azeb Haile",
  "Josh Holliday",
  "Jonathan Hollifield",
  "Ericka Howard",
  "Omer Iqbal",
  "Maliha Iqbal",
  "Anuja Jegadeesan",
  "Maximino Juarez",
  "Nardos Kelecha",
  "Zachary Kelley",
  "Messeret Ketema",
  "Anuradha Kumar",
  "Miki Legesse",
  "Tsion Lemma",
  "Charles Ludwig",
  "Jose Machado",
  "Ekaterina Machnneva",
  "Christopher Magyar",
  "Wisdom Maliki",
  "Abbery Milhouse-Cunningham",
  "Ali Mohamed",
  "Ruksar Jaha Mohammad",
  "Ishaya Napper",
  "Peter Nguyen",
  "Larry Parker",
  "Vishva Patel"


];


//function that takes a randomized array and returns it shuffled
function shuffleArray(arr) {
  let arrCopy = arr.slice();
  let shuffled = [];
  while (arrCopy.length > 0) {
    let randomStudent = arrCopy.splice(
      Math.floor(Math.random() * arrCopy.length),
      1
    )[0];
    // console.log(randomStudent);
    shuffled.push(randomStudent);
  }
  return shuffled;
}

//function that takes in array of names and group size, returns groups maxed at that size.
//TODO: rewrite groupMaker to append to one array at a time, ensure more even size dist for uneven numbers
function groupMaker(arr, size) {
  if(arr.length===size+1){
    return [arr]
  }
  let groups = [];
  // set up group buckets based on number of students
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    groups.push([]);
  }

  arr.forEach((student, idx) => {
    console.log((idx + 1) % groups.length);
    groups[(idx + 1) % groups.length].push(student);

  });
  //hack for uneven final group
  // if(currentGroup.length > 0) {
  //     groups.push(currentGroup);
  // }
  return groups;
}

//function to update view with groups
function updateView(twoDimensionalArray) {
  let groupCount = 1;
  twoDimensionalArray.forEach(array => {
    let thisGroup = document.createElement("div");
    thisGroup.classList.add("groupDiv");
    groupsDiv.appendChild(thisGroup);
    thisGroup.innerHTML = `<h2> Group ${groupCount}</h2><ol></ol>`;
    groupCount++;
    array.forEach(student => {
      thisGroup.querySelector("ol").innerHTML += `<li>${student}</li>`;
    });
  });
}

//handle random button click
randomBtn.addEventListener("click", e => {
  let randomSpicyGroups = groupMaker(shuffleArray(spicyStudents), 4);
  e.target.classList.add("hidden");
  updateView(randomSpicyGroups, "spicy");
});

//TODO: float list of students, allow selectable absentees

//TODO: ask user for group size, adujust accordingly

document.addEventListener("click", ({ target }) => {
  console.log(target);
});
