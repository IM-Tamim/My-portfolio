document.getElementById('download-cv-btn').addEventListener('click', function() {
    showMessage("Tamim Doesn't have CV at this moment");
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showMessage('Thank you for your message! I will get back to you soon.');
    this.reset();
});

function showMessage(text) {
    const existingMsg = document.querySelector('.notification-message');
    if (existingMsg) existingMsg.remove();

    const msg = document.createElement('div');
    msg.className = 'notification-message';
    msg.textContent = text;
    msg.style.position = 'fixed';
    msg.style.top = '20px';
    msg.style.right = '20px';
    msg.style.padding = '15px 25px';
    msg.style.background = '#fd6e0a';
    msg.style.color = 'white';
    msg.style.borderRadius = '5px';
    msg.style.zIndex = '9999';
    msg.style.transition = 'all 0.5s ease';
    msg.style.opacity = '0';
    msg.style.transform = 'translateX(50px)';
    
    document.body.appendChild(msg);
    setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translateX(0)';
    }, 10);
    setTimeout(() => {
        msg.style.opacity = '0';
        msg.style.transform = 'translateX(50px)';
        setTimeout(() => msg.remove(), 500);
    }, 3000);
}