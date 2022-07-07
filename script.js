const buttons = document.querySelectorAll(".buttons")
const countVote = document.querySelectorAll(".count")


buttons.forEach(button =>{
    let count = 0
    button.addEventListener('click', ()=>{
        count++
        if(button.classList.contains("manchester-btn")){
            countVote[2].innerText = "Vote Count: "+count
        }else if(button.classList.contains("juventus-btn")){
            countVote[1].innerText = "Vote Count: "+count
        }else{
            countVote[0].innerText = "Vote Count: "+count
        }
    }) 
})



