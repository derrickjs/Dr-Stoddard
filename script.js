unction removeForm(){
    var form = document.querySelector("form");

    form.style.display = "none";
}

document.querySelector("#submitForm").addEventListener("click", removeForm);

function addText(){
    var show = document.querySelector(".show");

    show.style.display = "block";
}

document.querySelector("#submitForm").addEventListener("click", addText);








function addPicture(){
    var rightSide = document.querySelector(".rightside");

    rightSide.style.backgroundImage = "url('https://res.cloudinary.com/derrickstahlman/image/upload/v1666186868/smile_teeth_jjrzvs.jpg')";

    rightSide.style.backgroundSize = "cover";

}

document.querySelector("#submitForm").addEventListener("click", addPicture);


function hoverButton(){
    document.querySelector("#submitForm").innerHTML = "Get Ready to Smile";

    
}

function offHoverButton(){
    document.querySelector("#submitForm").innerHTML = "Click to Submit";

    
}

let d = document.querySelector("#todays-day");

var highlight = () =>{
    d.style.backgroundColor = "yellow";
    document.querySelector(".date").style.backgroundColor = "yellow";

}

d.addEventListener("focus" , highlight);




var nohighlight = () =>{
    d.style.backgroundColor = "transparent";
    document.querySelector(".date").style.backgroundColor = "transparent";
}

d.addEventListener("blur" , nohighlight);

document.querySelector("#submitForm").addEventListener("mouseover", hoverButton);
document.querySelector("#submitForm").addEventListener("mouseleave", offHoverButton);
