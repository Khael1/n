// Function to update the live time and emoji
function updateLiveTime() {
    // Create a new Date object
    const now = new Date();
  
    // Convert to GMT+8 (Philippines Time)
    const options = {
      timeZone: 'Asia/Manila', // Time zone for the Philippines
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use 12-hour format
    };
  
    // Format the time using Intl.DateTimeFormat
    const philippinesTime = new Intl.DateTimeFormat('en-US', options).format(now);
  
    // Get current hour in Philippines time
    const hour = now.getHours();
  
    // Determine if it's day or night
    const isDayTime = (hour >= 6 && hour < 18); // Daytime is from 6 AM to 6 PM
  
    // Set the emoji based on time
    const timeEmoji = isDayTime ? "🌞" : "🌛";
  
    // Format the time with the emoji outside the parentheses
    const formattedTime = `(${philippinesTime} UTC+8) ${timeEmoji}`;
  
    // Update the time in the DOM
    document.getElementById('live-time').textContent = formattedTime;
  }
  
  // Update the time every minute
  setInterval(updateLiveTime, 60000);
  
  // Call the function once to initialize the time immediately
  updateLiveTime();
  