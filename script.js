const markRead = document.getElementById("markRead");
markRead.addEventListener("click",()=>{
    const notifications = document.querySelectorAll(".notification.active");
    notifications.forEach((item)=>{
        item.classList.remove("active");
    })
})