// Validate HEX color input
function isValidHex(value) {
    return /^[0-9A-Fa-f]{2}$/.test(value); // Check if value is a valid 2-character HEX string
}

// Apply colors based on user input
function applyColors() {
    // Get background color inputs
    const bgRed = document.getElementById('background-r').value || "00";
    const bgGreen = document.getElementById('background-g').value || "00";
    const bgBlue = document.getElementById('background-b').value || "00";

    // Get text color inputs
    const textRed = document.getElementById('text-r').value || "00";
    const textGreen = document.getElementById('text-g').value || "00";
    const textBlue = document.getElementById('text-b').value || "00";

    // Validate inputs
    if (
        !isValidHex(bgRed) || !isValidHex(bgGreen) || !isValidHex(bgBlue) ||
        !isValidHex(textRed) || !isValidHex(textGreen) || !isValidHex(textBlue)
    ) {
        alert("Please enter valid HEX values (00 to FF).");
        return;
    }

    // Create HEX color codes
    const backgroundColor = `#${bgRed}${bgGreen}${bgBlue}`;
    const textColor = `#${textRed}${textGreen}${textBlue}`;

    // Apply colors to the preview text
    const previewText = document.getElementById('preview-text');
    previewText.style.backgroundColor = backgroundColor;
    previewText.style.color = textColor;
}

// Reset colors to default values
function resetColors() {
    // Reset input values
    document.getElementById('background-r').value = "FF";
    document.getElementById('background-g').value = "FF";
    document.getElementById('background-b').value = "FF";

    document.getElementById('text-r').value = "00";
    document.getElementById('text-g').value = "00";
    document.getElementById('text-b').value = "00";

    // Reset preview colors
    const previewText = document.getElementById('preview-text');
    previewText.style.backgroundColor = "#FFFFFF"; // Default white background
    previewText.style.color = "#000000"; // Default black text
}
