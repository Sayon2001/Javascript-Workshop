document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const homeButton = document.getElementById("home-button");

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = 'index.html';
        });
    }

    if (noButton && yesButton) {
        const noTexts = ["Are you sure?", "Really sure??", "Pookie please...", "Just think about it...", "Really???"]
        let noTextIndex = 0;
        let clickCount = 0;

        function adjustButtonFontSize() {
            const buttonWidth = yesButton.offsetWidth;
            const buttonHeight = yesButton.offsetHeight;

            const newFontSize = Math.min(buttonWidth, buttonHeight) * 0.2;

            yesButton.style.fontSize = `${newFontSize}px`;
        }

        noButton.addEventListener("click", function () {

            noButton.innerHTML = noTexts[noTextIndex];
            noTextIndex = (noTextIndex + 1);
            clickCount++;

            if (clickCount >= 6) {
                noButton.style.display = "none";
                return;
            }

            const maxWidth = window.innerWidth * 0.8;
            const maxHeight = window.innerHeight * 0.4;

            const randomX = Math.max(0, Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth)));
            const randomY = Math.max(0, Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight)));

            noButton.style.position = "absolute";
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";

            let currentWidth = yesButton.offsetWidth;
            let currentHeight = yesButton.offsetHeight;

            let newWidth = Math.min(currentWidth + 150, maxWidth);
            let newHeight = Math.min(currentHeight + 75, maxHeight);

            if (newWidth >= maxWidth) {
                newWidth = maxWidth;
            }

            if (newHeight >= maxHeight) {
                newHeight = maxHeight;
            }

            yesButton.style.width = newWidth + "px";
            yesButton.style.height = newHeight + "px";

            adjustButtonFontSize();
        });

        yesButton.addEventListener("click", function () {
            window.location.href = 'next.html';
        });
    }

});