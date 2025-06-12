// --- Wait for the DOM to be fully loaded ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Menu Toggle ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Footer: Automatically update copyright year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});


// --- WhatsApp Custom Order Form Function ---
// This function is called directly by the onclick attribute on the button,
// so it doesn't need to be inside the DOMContentLoaded event listener.
function sendOrderToWhatsApp() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('whatsappPhone').value.trim();
    const email = document.getElementById('email').value.trim();
    const productType = document.getElementById('productType').value;
    const details = document.getElementById('customDetails').value.trim();
    const pickupDate = document.getElementById('pickupDate').value;
    
    // Validate required fields
    if (!name || !phone || !details) {
        alert('Por favor, completa todos los campos requeridos: Nombre, WhatsApp y Detalles de la personalización.');
        return;
    }

    // --- IMPORTANT: Replace with the actual business WhatsApp number ---
    // Use the international format without '+' or spaces. E.g., for Chile: 56912345678
    const businessWhatsAppNumber = "56961961556"; 

    // Construct the message
    let message = `¡Hola Cookies and Cakes! 👋 Quisiera solicitar un pedido personalizado:\n\n`;
    message += `👤 *Nombre:* ${name}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    if (email) {
        message += `✉️ *Email:* ${email}\n`;
    }
    message += `🍰 *Tipo de Producto:* ${productType}\n`;
    message += `✨ *Detalles:* ${details}\n`;
    if (pickupDate) {
        // Format date for better readability if provided
        const date = new Date(pickupDate + 'T00:00:00'); // Ensure it's not affected by timezone offset
        const formattedDate = date.toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' });
        message += `🗓️ *Fecha de Retiro Deseada:* ${formattedDate}\n`;
    }
    message += `\n¡Muchas gracias!`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank').focus();
}
