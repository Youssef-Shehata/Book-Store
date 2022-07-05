function fun1()
{
                    document.getElementById('VisaCard').hidden = false; 
                    document.getElementById('paypalAcc').hidden = true;
                    document.getElementById('date').hidden = false;
                    document.getElementById('CCV').hidden = false;
                    document.getElementById('month').required =true;
                    document.getElementById('year').required =true;
                    document.getElementById('Cnum').required =true;
                    document.getElementById('Vnum').required =true;
                    document.getElementById('pplacc').required = false;
                    document.getElementById('pplacc').value = null;
                    document.getElementById('but1').hidden = false; 
                    document.getElementById('but2').hidden = true; 
                    document.getElementById('two').hidden= true;
                    document.getElementById('one').hidden= false;
                    
}
function fun2()
{
    document.getElementById('VisaCard').hidden = true;
    document.getElementById('paypalAcc').hidden = false;
    document.getElementById('date').hidden = true;
    document.getElementById('CCV').hidden = true;
    document.getElementById('pplacc').required =true;
    document.getElementById('year').required =false;
    document.getElementById('Cnum').required =false;
    document.getElementById('Vnum').required =false;
    document.getElementById('month').required =true;
    document.getElementById('year').value =0;
    document.getElementById('Cnum').value ="";
    document.getElementById('Vnum').value =null;
    document.getElementById('month').value =0;
    document.getElementById('but1').hidden = true; 
    document.getElementById('but2').hidden = false; 
    document.getElementById('two').hidden= false;
    document.getElementById('one').hidden= true;

}
function pass()
{
    
    var fullname=document.getElementById("Full Name").value;
    localStorage.setItem("textvalue",fullname);
    var mobilenumber = document.getElementById("Mobile Number").value;
    localStorage.setItem("telvalue",mobilenumber);
    var Email = document.getElementById("Email").value;
    localStorage.setItem("emailvalue",Email);
    var CITYLOC=document.getElementById("city").value;
    localStorage.setItem("cityvalue",CITYLOC);
    var adress=document.getElementById("adress").value;
    localStorage.setItem("adressvalue",adress);
    var Visa=document.getElementById("Visa").value;
    localStorage.setItem("Visavalue",Visa);
    document.getElementById('pplacc').value = null; 
    var pplacc=document.getElementById("pplacc").value;
    localStorage.setItem("pplaccvalue",pplacc);
    return false;
}
function pass2()
{
    var fullname=document.getElementById("Full Name").value;
    localStorage.setItem("textvalue",fullname);
    var mobilenumber = document.getElementById("Mobile Number").value;
    localStorage.setItem("telvalue",mobilenumber);
    var Email = document.getElementById("Email").value;
    localStorage.setItem("emailvalue",Email);
    var CITYLOC=document.getElementById("city").value;
    localStorage.setItem("cityvalue",CITYLOC);
    var adress=document.getElementById("adress").value;
    localStorage.setItem("adressvalue",adress);
    var Visa=document.getElementById("Paypal").value;
    localStorage.setItem("Visavalue",Visa);
    var pplacc=document.getElementById("pplacc").value;
    localStorage.setItem("pplaccvalue",pplacc);


}
for(let i =0;i<2;i++)
    {
     document.getElementsByClassName('total')[i].innerHTML = localStorage.getItem("totalvalues");
    }