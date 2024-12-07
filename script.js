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

function replaceBodyContent() {
  const bodySection = document.querySelector('.body'); // Select the current body section

  // Create a new empty section
  const newSection = document.createElement('div');
  newSection.classList.add('body'); // Keep the same class for styling
  newSection.innerHTML = `
    <div class="section">
      <h2>
        <span class="icon-heart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFCA89" stroke="#000" stroke-width="1">
            <path d="M12 21.35l-1.45-1.32C5.3 15.2 2 12.3 2 8.97 2 5.68 4.71 3 8 3c1.73 0 3.41.89 4.35 2.3C13.59 3.89 15.27 3 17 3c3.29 0 6 2.68 6 5.97 0 3.33-3.3 6.23-8.55 11.08L12 21.35z"/>
          </svg>
        </span>
        New Section
      </h2>
      <ul>
        <li><strong>Welcome:</strong> This is your new section!</li>
      </ul>
    </div>
  `;

  // Replace the old body section with the new one
  bodySection.replaceWith(newSection);
}

// Add event listener to the heart button
const heartButton = document.getElementById('heart-button');
heartButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  replaceBodyContent();
});

let originalBodyContent = null;

// Function to save the original body content (only once)
function saveOriginalBodyContent() {
  if (!originalBodyContent) {
    const bodySection = document.querySelector('.body');
    originalBodyContent = bodySection.cloneNode(true); // Clone deeply
  }
}

// Function to replace the body content with a new section
function replaceBodyContent() {
  // Save the original content before replacing
  saveOriginalBodyContent();

  const bodySection = document.querySelector('.body'); // Select the current body section

  // Create the new section with a similar design to the image
  const newSection = document.createElement('div');
  newSection.classList.add('body'); // Keep the same class for styling
  newSection.innerHTML = `
    <div class="social-accounts">
      <h2>My Social Accounts</h2>
      <div class="icon-grid">
        <a href="https://x.com/http_khael" target="_blank" class="icon-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="white"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
  <span>Twitter</span>
</a>

<a href="https://github.com/Khael1" target="_blank" class="icon-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
  <span>Github</span>
</a>

<a href="https://steamcommunity.com/profiles/76561199215488949/" target="_blank" class="icon-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"></path><path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"></path></svg>
  <span>Steam</span>
</a>
        <a href="https://www.twitch.tv/itskhael" target="_blank" class="icon-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"></path><path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"></path></svg>
  <span>Twitch</span>
</a>
        <a href="mailto:me@cadiaojames123" class="icon-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="white"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path></svg>
  <span>Email</span>
</a>
        <a href="https://discord.com/users/896013929141125161" target="_blank" class="icon-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0a8.258 8.258 0 0 0-.412-.833a.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059a.051.051 0 0 0-.018-.011a8.875 8.875 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066a.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085a8.254 8.254 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.235 13.235 0 0 0 4.001-2.02a.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612Z"></path></svg>
  <span>Discord</span>
</a>
        <a href="https://open.spotify.com/user/31lmnuc5cbhvawlj5he7fxoxcqe4?si=--tU5XL2RK2S23PgAi3ySQ" target="_blank" class="icon-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path></svg>
  <span>Spotify</span>
</a>
        <a href="https://t.me/https_khael" target="_blank" class="icon-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="white"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01c-.378.15-.577.298-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294c.26.006.549-.1.868-.32c2.179-1.471 3.304-2.214 3.374-2.23c.05-.012.12-.026.166.016c.047.041.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336c-.188.186-.188.186-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629c.093.06.183.125.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751c-.013-.315-.013-.315-.013-.315a.337.337 0 0 0-.114-.217a.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path></svg>
  <span>Telegram</span>
</a>
        <a href="https://www.tiktok.com/@itsskhael_" target="_blank" class="icon-item">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 5.56C10.44 5.56 9.2 6.8 9.2 8.36C9.2 9.92 10.44 11.16 12 11.16C13.56 11.16 14.8 9.92 14.8 8.36C14.8 6.8 13.56 5.56 12 5.56ZM14.8 13.56C13.64 13.56 12.8 14.4 12.8 15.56C12.8 16.72 13.64 17.56 14.8 17.56C15.96 17.56 16.8 16.72 16.8 15.56C16.8 14.4 15.96 13.56 14.8 13.56Z"/>
  </svg>
  <span>TikTok</span>
</a>
        <a href="https://www.facebook.com/http.khael" target="_blank" class="icon-item">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294h-3.13v-3.62h3.13v-2.66c0-4.377 2.578-6.748 6.571-6.748 1.906 0 3.713.141 4.192.205v3.85h-2.933c-2.299 0-2.741 1.092-2.741 2.711v2.851h5.482l-.717 3.62h-4.765V24h7.248c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
  </svg>
  <span>Facebook</span>
</a>
      </div>
      <div class="social-info">
        <p>🌿 <strong>Alias:</strong> KhaeL, ItssKhaeL, JkhaeL, ToFuchi, NotToFu, NotKhaeL</p>
        <p>⚠️ I have only one main Discord account, which is on the home page </p>
        <p>If you see any other accounts with my name, it's not me.</p>
      </div>
    </div>
  `;

  // Replace the current body section with the new one
  bodySection.replaceWith(newSection);
}

// Function to restore the original body content
function restoreOriginalBodyContent() {
  if (originalBodyContent) {
    const bodySection = document.querySelector('.body'); // Select the current body section
    bodySection.replaceWith(originalBodyContent); // Replace with the saved original content
    originalBodyContent = null; // Clear the saved content after restoration
  }
}

// Wait until the DOM content is loaded to initialize the button listeners
document.addEventListener('DOMContentLoaded', () => {
  // Declare buttons only once when DOM is fully loaded
  const heartButton = document.getElementById('heart-button');
  const homeButton = document.getElementById('home-button');

  // Ensure the heart button exists before attaching event listener
  if (heartButton) {
    heartButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior if it's a link
      replaceBodyContent(); // Replace the body content
    });
  }

  // Ensure the home button exists before attaching event listener
  if (homeButton) {
    homeButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior if it's a link
      restoreOriginalBodyContent(); // Restore the original body content
    });
  }
});
