function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time as HH:MM:SS
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Display the time
    document.getElementById('clock').textContent = timeString;
}

// Call updateClock function every second to keep the clock updated
setInterval(updateClock, 1000);