// alert("Js file");

function addNewWEField(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");


    let weOb = document.getElementById("we");
    let weAddButonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButonOb);

}

function addNewAQField(){

    let n = document.createElement("textarea");
    n.classList.add("form-control");
    n.classList.add("aqField");

    n.setAttribute("row",3);
    n.setAttribute("placeholder","Enter Here");

    let aqob = document.getElementById("aq");
    let aqAddButonOb = document.getElementById("aqAddButton");

    aqob.insertBefore(n,aqAddButonOb);

}

// function mycol(){
//     document.body.style.backgroundColor = document.getElementById("col").value;
// }


// Generate CV

function generateCV(){

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    // document.getElementById("imageT").src = document.getElementById("image").src;

    // console.log(document.getElementById("image").src);

    // var image = document.getElementById("imageT");
    // image.src = "image1.jpg";

    // var g = document.getElementById("image").src;
    // document.getElementById("imageT").innerHTML = g;

    document.getElementById("nameT2").innerHTML = document.getElementById("nameField").value;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value

    document.getElementById("addressT").innerHTML = document.getElementById("textField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkT").innerHTML = document.getElementById("linkField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // WE 

    let we = document.getElementsByClassName("weField");

    let str = '';

    for(let e of we){
        str = str +`<li>${e.value}</li>`
    }

    document.getElementById("weT").innerHTML = str;


    // aq

    let q = document.getElementsByClassName("aqField");

    let s = '';
    for(let e of q){
        s = s + `<li>${e.value}</li>`
    }

    document.getElementById("aqT").innerHTML = s;

    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display='block';
}

function printCV(){
    window.print();
}