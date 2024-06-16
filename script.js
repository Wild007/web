const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).map(() => 1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission
        // In a real scenario, you would submit the form to your server and handle the response
        // For demonstration purposes, we'll just show a popup
        showSubmissionPopup();
    });

    function showSubmissionPopup() {
        // Create a popup or modal to show submission message
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="popup-content">
                <p>Server is Down!</p>
                <button id="closePopup">Close</button>
            </div>
        `;
        
        // Append popup to body
        document.body.appendChild(popup);

        // Close popup when close button is clicked
        const closeBtn = popup.querySelector('#closePopup');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(popup); // Remove popup from DOM
        });
    }
});
