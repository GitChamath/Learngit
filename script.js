document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    const bounceHeight = 20; // Pixels to bounce up
    const bounceDuration = 800; // Milliseconds for one full bounce cycle (up and down)

    paragraphs.forEach(p => {
        // Set initial position and make element positionable
        p.style.position = 'relative';
        p.style.top = '0px';

        let startTime = null;

        function animateBounce(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = (elapsed % bounceDuration) / bounceDuration; // Normalize to 0-1

            // Use a sine wave for smooth up and down movement
            const offsetY = -Math.abs(Math.sin(progress * Math.PI)) * bounceHeight;

            p.style.top = `${offsetY}px`;

            requestAnimationFrame(animateBounce);
        }

        requestAnimationFrame(animateBounce);
    });
});