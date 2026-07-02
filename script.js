console.log("Portfolio loaded successfully!");
const scrollBtn = document.getElementById("scrollBtn");

function updateButton(){

    if(window.scrollY < 100){

        scrollBtn.innerHTML = "↓";

    }else{

        scrollBtn.innerHTML = "↑";

    }

}

updateButton();

window.addEventListener("scroll", updateButton);

scrollBtn.addEventListener("click", function(){

    if(window.scrollY < 100){

        window.scrollTo({

            top: document.body.scrollHeight,

            behavior: "smooth"

        });

    }else{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});