let input = document.querySelector("input");
let button1 = document.querySelector("#add");
let ul = document.querySelector("ul");
let check = "unchecked";

button1.addEventListener("click", () => {
    if(input.value === ""){
        alert("Please write something in the input box to add.");
    } else{
        let list = document.createElement("li");
        let img = document.createElement("img");
        img.src = "../images/image.png";
        img.className = "img";
        list.appendChild(img);
        let span1 = document.createElement("span");
        span1.innerText = input.value;
        span1.className = "list";
        list.appendChild(span1);
        let span2 = document.createElement("span");
        span2.className = "remove";
        span2.innerText = "\u00d7";
        list.appendChild(span2);
        ul.append(list);
    }
    input.value = "";
    saveData();
})

ul.addEventListener("click", (e) => {
    if(e.target.className === "remove")
    {
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "IMG"){
        check = (check === "unchecked") ? "checked" : "unchecked";
        if(check === "unchecked")
        {
            e.target.parentElement.className = "unchecked";
            e.target.src = "../images/image.png";
            e.target.className = "img";
        }
        else{
            e.target.parentElement.className = "checked";
            e.target.className = "img1";
            e.target.src = "../images/image1.png";
        }
    }
    else if(e.target.className === "list")
    {
        if(input.value === "")
        {
            e.target.parentElement.remove();
        }
        input.value = e.target.innerText;
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function getData(){
    ul.innerHTML = localStorage.getItem("data");
}
getData();