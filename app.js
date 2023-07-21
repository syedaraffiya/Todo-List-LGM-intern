var a = document.getElementById("main")
var input = document.getElementById("input")



function clickBtn(){
    var newElement = document.createElement("P");
    var text = input.value;
    text =document.createTextNode(text)
    newElement.appendChild(text)
    a.appendChild(newElement)


    var editBtn = document.createElement("Button")
    var editBtnText = document.createTextNode("edit + . ")
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute("onclick","editTodo(this)")
     newElement.appendChild(editBtn)

     var deleteBtn = document.createElement("Button")
    var deleteBtnText = document.createTextNode("del -- .")
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute("onclick","deleteTodo(this)")
     newElement.appendChild(deleteBtn)

}

function editTodo(e){
    e.parentNode.firstChild.nodeValue = prompt()
}


function deleteTodo(e){
    e.parentNode.remove()
}

function clearAllBtn(){
    a.innerHTML = " ";
    input.value = " ";
}