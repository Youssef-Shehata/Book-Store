  document.getElementById("Full Name").innerHTML = localStorage.getItem("textvalue");
       document.getElementById("Mobile Number").innerHTML = localStorage.getItem("telvalue");
       document.getElementById("Email").innerHTML = localStorage.getItem("emailvalue");
       document.getElementById("city").innerHTML = localStorage.getItem("cityvalue");
       document.getElementById("adress").innerHTML = localStorage.getItem("adressvalue");
       document.getElementById("Visa").innerHTML = localStorage.getItem("Visavalue");
       document.getElementById("pplacc").innerHTML = localStorage.getItem("pplaccvalue");
       document.getElementById("rando").innerHTML = Math.floor(Math.random( ) *999999999)+1000000000;
       var x =localStorage.getItem("Visavalue");
       if(x=='Visa')
       {
              document.getElementById("hide").innerHTML=null;
       }
      
       document.getElementById('total').innerHTML = localStorage.getItem("totalvalues");
