const markRead = document.getElementById("markRead");
const notifications = document.querySelectorAll(".notification.active");
const counter = document.getElementById("counter");
counter.innerHTML = notifications.length;
markRead.addEventListener("click",()=>{
    notifications.forEach((item)=>{
        item.classList.remove("active");
    })
    counter.style.display = "none";
})
notifications.forEach((item)=>{
    item.addEventListener("click",function(){
        if(item.classList.contains("active")){
            item.classList.remove("active");
            counter.innerHTML -= 1;
        }
    })
})

