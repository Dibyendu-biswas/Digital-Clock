const hour=document.querySelector(".hour")
const minute=document.querySelector(".minute")
const seconds=document.querySelector(".secound")
const amorpm=document.querySelector(".am-pm")



function digital (){
    let date=new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    if(h >12){
        h=h-12
        amorpm.innerHTML="Am"
    }else{
        amorpm.innerHTML="Pm"
    }

    hour.innerHTML=h
    minute.innerHTML=m
    seconds.innerHTML=s

}
setInterval(digital,1000)



