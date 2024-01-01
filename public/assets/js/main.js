document.getElementById('whats-chat').addEventListener("mouseover", showchatbox);
document.getElementById('whats-chat').addEventListener("click", chatlink);
document.getElementById('chat-top-right').addEventListener("click", closechatbox);
document.getElementById('send-btn').addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);

function showchatbox() {
    document.getElementById('chat-box').style.right = '8%'
}

function closechatbox() {
    document.getElementById('chat-box').style.right = '-500px'
}

function showchatboxtime() {
    setTimeout(launchbox, 5000)
}

function launchbox() {
    document.getElementById('chat-box').style.right = '8%'
}

function chatlink() {
    window.open('https://api.whatsapp.com/send?phone=628112292430&text=');
}