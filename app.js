window.addEventListener("DOMContentLoaded",()=>{
    const baza = {
        email:"bilmaymanuzikimsan@gmail.com",
        password:"bilmayman"
    };
    const em = document.querySelector(".em"),
    pas = document.querySelector(".pas"),
    h4 = document.querySelector("h4")
    send = document.querySelector(".red");
    h4.addEventListener("click",()=>{
        if(pas.type === "password"){
            pas.type = "text";
        }else{
            pas.type = "password";
        }
    })
    
    
    send.addEventListener("click",()=>{
        if(em.value === baza.email){
           if(pas.value === baza.password){
            alert("Malumot Tug'ri");
           }else{
            alert("Malumot Xato")
           }
        }else{
            alert("Malumot Xato")
        }
    })
    
})
