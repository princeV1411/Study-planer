var a = document.getElementById("bts");
var flag = 0;
function checks(){
        if(flag == 0){
        a.style.transform = "scale(95%)";
        // a.style.backgroundColor="blue";
        flag = 1;
    }
    else{
        //     a.style.backgroundColor="darkblue";      
            a.style.transform = "scale(100%)";
            flag = 0;
       
    }
}