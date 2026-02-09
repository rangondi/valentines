function moveButton() {
    const noBtn = document.getElementById('noButton');
    
    // Calculate random position within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    // You can redirect to a new page or change the content
    document.querySelector('.container').innerHTML = `
        <h1>Heheee!I love you so much dear , MWAAAAH!!!</h1>
        <img src="https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif" alt="Happy GIF" style="width:250px; border-radius:15px;">
    
    `;
}

document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '🌸'; // You can also use '💖' or '🌸'
    heart.className = 'heart';
    
    // ... inside the mousemove function ...
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    // ... rest of the code ...

    // Position the heart at the mouse location
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    
    // Randomize the size slightly for a natural look
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';
    
    document.body.appendChild(heart);
    
    // Remove the heart after the animation ends to keep the page fast
    setTimeout(() => {
        heart.remove();
    }, 1500);
});