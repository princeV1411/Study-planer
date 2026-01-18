let login =document.querySelector("#sig")
    login.addEventListener("click",function(){
        window.location.href = "other-page/login-page/login.html";
    }
);


let sem1pdf = document.querySelector(".sem1");
    sem1pdf.addEventListener("click",function(){
        window.location.href = "src/sem1.pdf";
    }
);

let result = document.querySelector(".box5")
    result.addEventListener("click",function(){
        alert("Site On Construction, Function Call Succesfully");
    }
);

let update = document.querySelector(".box6")
    update.addEventListener("click",function(){
        alert("Site On Construction. No Updates Now");
    }
);

document.querySelector(".box1").addEventListener("click", function(){
    document.querySelector("#links").scrollIntoView({
        behavior:"smooth"
    });
});