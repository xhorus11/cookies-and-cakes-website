// --- BASE DE DATOS DE PRODUCTOS ---
// Para añadir un nuevo producto, copia uno de los bloques (desde { hasta }),
// pégalo al final (antes del ]) y cambia la información.
// ¡Asegúrate de que el 'id' sea único para cada producto!
const productsData = [
    // --- TORTAS ---
    {
        id: 'torta-chocolate',
        name: 'Torta de Chocolate',
        price: '$25.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Chocolate',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Chocolate',
        description: 'Delicioso bizcocho de chocolate húmedo, relleno con manjar y frambuesas frescas, cubierto con un suave ganache de chocolate. Ideal para los amantes del cacao intenso y los sabores frutales.',
        materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate semi-amargo' ]
    },
    {
        id: 'torta-red-velvet',
        name: 'Torta Red Velvet',
        price: '$28.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Red+Velvet',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Red+Velvet',
        description: 'Un clásico inolvidable. Bizcocho de terciopelo rojo, suave y ligeramente achocolatado, con un irresistible frosting de queso crema que equilibra perfectamente su dulzor.',
        materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ]
    },
    {
        id: 'torta-zanahoria',
        name: 'Torta de Zanahoria',
        price: '$26.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Zanahoria',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Zanahoria',
        description: 'Bizcocho especiado y húmedo con zanahoria rallada y nueces trozadas, cubierto con un delicioso frosting de queso crema. Un sabor casero y reconfortante.',
        materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ]
    },
    {
        id: 'cheesecake-frutos-rojos',
        name: 'Cheesecake Frutos Rojos',
        price: '$24.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cheesecake',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cheesecake',
        description: 'Cremoso cheesecake horneado sobre una base de galleta, coronado con una generosa salsa casera de frutos rojos como frutillas, arándanos y frambuesas.',
        materials: [ 'Queso crema', 'Crema de leche', 'Galletas de vainilla', 'Mantequilla', 'Frutos rojos', 'Azúcar' ]
    },
     {
        id: 'torta-tres-leches',
        name: 'Torta Tres Leches',
        price: '$22.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Tres+Leches',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Tres+Leches',
        description: 'Bizcocho esponjoso bañado en una mezcla de tres leches (evaporada, condensada y crema), cubierto con merengue italiano y un toque de canela.',
        materials: [ 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Huevos', 'Harina', 'Canela' ]
    },
    {
        id: 'torta-limon-amapolas',
        name: 'Torta Limón y Amapolas',
        price: '$23.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Limon',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Limon',
        description: 'Fresco y aromático bizcocho de limón con semillas de amapola, relleno con curd de limón y cubierto con un glaseado suave. Una combinación perfecta de ácido y dulce.',
        materials: [ 'Limón', 'Semillas de amapola', 'Harina', 'Azúcar', 'Yogurt natural', 'Mantequilla' ]
    },
    {
        id: 'torta-panqueque-naranja',
        name: 'Torta Panqueque Naranja',
        price: '$27.000',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Panqueque+Naranja',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Panqueque+Naranja',
        description: 'Finas capas de panqueques intercaladas con una delicada crema de naranja y manjar, cubierta con chocolate. Una torta clásica y elegante.',
        materials: [ 'Naranja', 'Manjar', 'Harina', 'Huevos', 'Chocolate', 'Leche' ]
    },
    
    // --- GALLETAS Y OTROS ---
    {
        id: 'galletas-vainilla',
        name: 'Galletas de Vainilla',
        price: '$1.500 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Vainilla',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Vainilla',
        description: 'Tiernas galletas de mantequilla con un toque de vainilla, decoradas a mano con glaseado real. Perfectas para regalos, eventos o un dulce capricho. La decoración es personalizable.',
        materials: [ 'Harina', 'Mantequilla', 'Azúcar', 'Huevo', 'Esencia de Vainilla', 'Azúcar glas' ]
    },
    {
        id: 'galletas-craqueladas',
        name: 'Galletas Craqueladas',
        price: '$1.800 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Craqueladas',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Craqueladas',
        description: 'Intensas galletas de chocolate con una textura similar a un brownie, cubiertas de azúcar glas que se craquela al hornear, creando un efecto visual espectacular.',
        materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ]
    },
    {
        id: 'alfajores-maicena',
        name: 'Alfajores de Maicena',
        price: '$1.600 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Alfajores',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Alfajores',
        description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado. Un clásico que nunca falla.',
        materials: [ 'Maicena (fécula de maíz)', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ]
    },
    {
        id: 'cookies-chocolate-chip',
        name: 'Cookies Chocolate Chip',
        price: '$1.700 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cookies',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cookies',
        description: 'La clásica galleta americana: crujiente por fuera, blanda por dentro y repleta de chips de chocolate semi-amargo. Un verdadero placer.',
        materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ]
    },
    {
        id: 'macarons-surtidos',
        name: 'Macarons Surtidos',
        price: '$2.000 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Macarons',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Macarons',
        description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, pistacho y maracuyá.',
        materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados (ganache, buttercream)' ]
    },
    {
        id: 'galletas-avena-pasas',
        name: 'Galletas de Avena y Pasas',
        price: '$1.600 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Avena',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Avena',
        description: 'Una galleta contundente y sabrosa, con la textura de la avena y el dulzor de las pasas. Ligeramente especiada con canela para un sabor más profundo.',
        materials: [ 'Avena', 'Pasas', 'Harina', 'Canela', 'Mantequilla', 'Azúcar rubia' ]
    },
    {
        id: 'cupcakes-personalizados',
        name: 'Cupcakes Personalizados',
        price: 'Desde $2.000 c/u',
        image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cupcakes',
        image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cupcakes',
        description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho (vainilla, chocolate, limón, etc.) y el frosting a tu gusto. Ideales para mesas dulces y celebraciones.',
        materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ]
    }
];

// --- CÓDIGO DEL SITIO WEB ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Funciones generales del sitio ---
    handleMobileMenu();
    updateCopyrightYear();

    // --- Lógica específica para cada página ---
    const page = window.location.pathname.split("/").pop();

    if (page === 'index.html' || page === '') {
        loadProductGrid();
    }

    if (page === 'detalles.html') {
        loadProductDetails();
    }
});

function handleMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

function updateCopyrightYear() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// --- Lógica para la PÁGINA DE INICIO (index.html) ---
function loadProductGrid() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = ''; // Limpiar la cuadrícula
    productsData.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image_card}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <a href="detalles.html?id=${product.id}" class="btn btn-secondary">Ver Detalles</a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// --- Lógica para la PÁGINA DE DETALLES (detalles.html) ---
function loadProductDetails() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = productsData.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} - Cookies and Cakes`; // Actualizar título de la pestaña

        // Crear la lista de materiales
        const materialsList = product.materials.map(material => 
            `<li><i class="fas fa-cookie-bite"></i> ${material}</li>`
        ).join('');

        container.innerHTML = `
            <div class="product-detail-layout">
                <div class="product-detail-image">
                    <img src="${product.image_detail}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-extra">
                        <h3>Ingredientes Principales</h3>
                        <ul>${materialsList}</ul>
                    </div>
                    <a href="personalization.html" class="btn btn-primary">Encargar o Personalizar</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '<p>Producto no encontrado. Por favor, vuelve al <a href="index.html">inicio</a>.</p>';
    }
}


// --- Lógica para el FORMULARIO DE PERSONALIZACIÓN ---
function sendOrderToWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('whatsappPhone').value.trim();
    const email = document.getElementById('email').value.trim();
    const productType = document.getElementById('productType').value;
    const details = document.getElementById('customDetails').value.trim();
    const pickupDate = document.getElementById('pickupDate').value;
    
    if (!name || !phone || !details) {
        alert('Por favor, completa todos los campos requeridos: Nombre, WhatsApp y Detalles de la personalización.');
        return;
    }
    
    const businessWhatsAppNumber = "56961961556"; 

    let message = `¡Hola Cookies and Cakes! 👋 Quisiera solicitar un pedido personalizado:\n\n`;
    message += `👤 *Nombre:* ${name}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    if (email) {
        message += `✉️ *Email:* ${email}\n`;
    }
    message += `🍰 *Tipo de Producto:* ${productType}\n`;
    message += `✨ *Detalles:* ${details}\n`;
    if (pickupDate) {
        const date = new Date(pickupDate + 'T00:00:00');
        const formattedDate = date.toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' });
        message += `🗓️ *Fecha de Retiro Deseada:* ${formattedDate}\n`;
    }
    message += `\n¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank').focus();
}
