document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.filled').forEach(element => {
        const fillColor = element.getAttribute('data-fillColor');
        const textColor = element.getAttribute('data-textColor');
        const borderColor = element.getAttribute('data-borderColor');
        const borderWeight = element.getAttribute('data-borderWeight');

        if (borderColor) {
            element.style.setProperty('--borderColor', borderColor);
        }
        if (borderWeight) {
            element.style.setProperty('--borderWeight', borderWeight);
        }
        if (textColor) {
            element.style.setProperty('--textColor', textColor);
        }
        if (fillColor) {
            element.style.setProperty('--fillColor', fillColor);
        }
    });
})