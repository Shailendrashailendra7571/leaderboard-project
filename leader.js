const addDetailsButton = document.getElementById("addDetailsButton")
//console.log(addDetailsButton);

const scoreMainContainer = document.getElementById("scoreMainContainer")

addDetailsButton.addEventListener("click", ()=>{
    const fName = document.getElementById("fName")
    const lName = document.getElementById("lName")
    const country = document.getElementById("country")
    const score = document.getElementById("score")

    const scoreBoard = document.createElement("div")
    scoreBoard.classList.add("scoreBoard")
    //this is how to give a class to created element
   // if we want to remove the class name then we use scoreBoard.classList.remove("scoreBoard")
   scoreBoard.innerHTML = `
   <p class="playerName">${fName.value} ${lName.value}</p>
   <p class="country">${country.value}</p>
   <p class="score">${score.value}</p>
   <p class="deleteIcon">&#x1f5d1;</p>
   `;
   scoreMainContainer.appendChild(scoreBoard)
   fName.value =""
   lName.value =""
   country.value =""
   score.value =""
sortBoard()
deleteElement()
})

function sortBoard() {
    const ScoreBoard = document.querySelectorAll(".scoreBoard")
    const arr=[]
    ScoreBoard.forEach((ele)=>arr.push(ele))
    const sortedArray = arr.map((ele) => {
        return ele;
    })
    .sort((a,b) => {
        console.log(a);
        console.log(b);
        let runOfManOne = parseInt(a.children[2].textContent)
        let runOfManTwo = parseInt(b.children[2].textContent)
        if(runOfManOne > runOfManTwo ){ return -1}
        if(runOfManOne < runOfManTwo ){ return 1}
    })
    console.log(sortedArray);
    sortedArray.forEach((ele) =>{
        scoreMainContainer.append(ele)
    })
}

function deleteElement() {
    const deleteIcon = document.querySelectorAll(".deleteIcon")
    deleteIcon.forEach((ele) => {
        ele.addEventListener("click", (e) =>{

            return e.target.parentElement.remove() 
        })
    })
    
}