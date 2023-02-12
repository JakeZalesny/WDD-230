var messageDate = new Date(); 
if(messageDate.getDay()==6 || messageDate.getDay()==7){
    document.querySelector("#meet-greet").classList.add('active');
}