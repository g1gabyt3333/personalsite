
// alert("Not ready yet")
var discord = document.getElementById("discord")

// document.getElementsByClassName("head")[0].innerHTML = "Hello" 


var theme = document.getElementById("theme-toggle")
var isDark = false;

theme.addEventListener("click", toggleTheme)
discord.addEventListener("click", myFunc)

function myFunc(){

alert("Discord: G1gabyt3#0049")



}


function toggleTheme(){

    var navbar = document.getElementsByTagName("nav");


    console.log("Success")

    if(isDark == false){

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
        isDark = true;
        console.log("switch to black")



    }

    else if (isDark == true){

        console.log("switch to white")
        document.body.style.backgroundColor = "#FFFFFF";
        // document.getElementsById("contain").innerText.style.color = "#FFFFFF";
        document.body.style.color = "black"
      
        isDark = false;



    }



}



