
// Navbar Function Start
function toggle(){
    let x = document.getElementById("navbar");
    
    if(x.style.display == "block"){
       x.style.display = "none";
    }
    else{
        x.style.display = "block";
        x.style.transition = "0.5s all"
    }
     }

    // Navbar Function End