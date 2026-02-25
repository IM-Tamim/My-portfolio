document.getElementById('download-cv-btn').addEventListener('click', ()=>{
    showMessage("Tamim Doesn't have CV at this moment");
});

document.getElementById('contact-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email-input').value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
        return showMessage('Valid email required','error');
    showMessage('Thank you for your message!','success');
    e.target.reset();
});

function showMessage(text, type='info'){
    let old = document.querySelector('.msg');
    if(old) old.remove();
    let msg = document.createElement('div');
    msg.className = 'msg';
    msg.textContent = text;
    msg.style.cssText = `position:fixed;top:20px;right:20px;padding:15px 25px;
        background:${type=='error'?'#f44336':type=='success'?'#4CAF50':'#fd6e0a'};
        color:white;border-radius:5px;z-index:9999;transition:0.5s;
        opacity:0;transform:translateX(50px)`;
    document.body.appendChild(msg);
    setTimeout(()=>{msg.style.opacity='1';msg.style.transform='translateX(0)'},10);
    setTimeout(()=>{msg.style.opacity='0';msg.style.transform='translateX(50px)';
        setTimeout(()=>msg.remove(),500)},3000);
}