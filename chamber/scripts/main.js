var messageDate = new Date(); 
if(messageDate.getDay()==2 || messageDate.getDay()==4){
    document.querySelector("#meet-greet").classList.add('active');
}