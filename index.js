function myAccount(){
    window.location="http://127.0.0.1:5500/loginpage.html"
}

function  getvalue(){

    var email=document.getElementById("email").value
     console.log("exampleInputEmail",email)
     var password=document.getElementById("password").value
     console.log("exampleInputPassword1",password)
     
 // data=object
     data={
     email:email,
     password:password

     
 }
 
 console.log(data)
 
 var orgemail="ajayh@gmail.com";
 var orgpassword=12345;

 if ( orgemail==email &  orgpassword==password){
   
    alert("Login Sucessfully")
     
    console.log(window.location= "http://127.0.0.1:5500/index.html")
     
     
     // console.log(window.location = "http://www.yoururl.com")

 }
 else{
     alert("log in failed")
 }
}
 
function register(){
    alert("Register SucessFully")
}

function addCards(){
    alert("Add To Carts")
    window.location="http://127.0.0.1:5500/cartpage.html"
}

function customerReview(){
    window.location="https://www.instagram.com/reel/C0YZj2OvUPY/?igsh=M2ttcWxneXp5Ym8="
}

function discount(){
    alert("10% Discount Offer")
}

function buyNow(){
    alert ("Buy It Now")
}