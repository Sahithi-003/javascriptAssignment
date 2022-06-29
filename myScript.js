function clickLocalButtonFunction() {

    console.log('run');
   
    if (localStorage.getItem("clickCounter") === null) {
      localStorage.setItem("clickCounter", "0");
    }
 
    var value = parseInt(localStorage.getItem("clickCounter"));
    
    var newValue = value + 1
 
    localStorage.setItem("clickCounter", newValue);
    
    document.getElementById("clickCounter").innerHTML = newValue
    
    }
    
    function clickReset() {
    
    localStorage.setItem("clickCounter", "0");
    document.getElementById("clickCounter").innerHTML = '0'
    }

    function clickSessionButtonFunction(){
        console.log('run');
   
        if (sessionStorage.getItem("clickCounter1") === null) {
            sessionStorage.setItem("clickCounter1", "0");
        }
     
        var val = parseInt(sessionStorage.getItem("clickCounter1"));
        
        var newVal = val + 1
     
        sessionStorage.setItem("clickCounter1", newVal);
        
        document.getElementById("clickCounter1").innerHTML = newVal
        
    }