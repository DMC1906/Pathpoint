document.getElementById('timeBtn').addEventListener('click', function() { 
    const now = new Date(); 
    const timeString = now.toLocaleTimeString('en-IE'); 
    document.getElementById('timeDisplay').textContent = 'The time in Ireland is: ' + timeString; 
}); 
