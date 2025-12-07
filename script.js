// --- 1. TERMINAL TYPING EFFECT SCRIPT ---
const textToType = "DevOps Engineer | Infrastructure Automation | CI/CD Specialist";
const terminalElement = document.getElementById('terminal-text');
const cursorElement = document.getElementById('cursor');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        terminalElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        // Set typing speed (60ms per character)
        setTimeout(typeText, 60); 
    } else {
        // Stop the cursor from blinking once typing is complete
        cursorElement.classList.remove('blink');
        // Hide cursor after 1 second
        setTimeout(() => cursorElement.style.display = 'none', 1000); 
    }
}

// --- 2. DYNAMIC SKILL PROGRESS BAR ANIMATION ---
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    
    bars.forEach(bar => {
        // Get the final width from the CSS variable set in HTML
        const finalWidth = bar.style.getPropertyValue('--skill-level');
        
        // 1. Temporarily set width to 0 for the animation start
        bar.style.width = '0%'; 
        
        // 2. Force a reflow/repaint (critical for the animation to start from 0)
        void bar.offsetWidth; 
        
        // 3. Set the final width to trigger the CSS transition
        bar.style.width = finalWidth;
    });
}

// --- 3. COLLAPSIBLE EXPERIENCE TIMELINE SCRIPT ---
function setupTimelineToggle() {
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Get the details div (the sibling immediately after the header)
            const details = this.closest('.job-title-header').nextElementSibling;
            
            if (details.classList.contains('collapsed')) {
                // OPEN
                details.classList.remove('collapsed');
                this.textContent = '–'; // Change button text to minus/dash
                this.setAttribute('aria-expanded', 'true');
            } else {
                // CLOSE
                details.classList.add('collapsed');
                this.textContent = '+'; // Change button text back to plus
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });
}


// Initialize all interactive elements on page load
window.onload = function() {
    typeText();
    animateProgressBars();
    setupTimelineToggle();
};
