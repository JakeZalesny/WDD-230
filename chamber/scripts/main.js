var messageDate = new Date(); 
if(messageDate.getDay()==1 || messageDate.getDay()==2){
    document.querySelector("#meet-greet").classList.toggle("active");
}