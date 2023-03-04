var messageDate = new Date(); 
if(messageDate.getDay()==5 || messageDate.getDay()==2){
    document.querySelector("#meet-greet").classList.toggle("active");
}