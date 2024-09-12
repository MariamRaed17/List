const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const listIem = document.getElementById("list-item");

function addTask (){
    if(inputBox.value === ''){
        alert("you must write somthing")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li);
        let remove = document.createElement("delete");
        remove.innerHTML =`
                    <a href="" class="btn btn-danger btn-sm remove" style="margin-left: 310px;" >delete</a>
                    `;
        li.appendChild(remove);
    }
    inputBox.value="";
    savaData();
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData(); 
    }
    else if (e.target.tagName === "DELETE"){
             e.parentElement.remove("list-item");
             savaData();
    }
},false);
// delete
document.querySelector("#list-item").addEventListener("click", (e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        document.getElementById("list-item").remove();
        target.parenrElement.parenrElement.remove();
    }
})


function savaData(){
    localStorage.setItem('data', listContainer.innerHTML);
};

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem('data');
// }
// showTask();