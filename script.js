const WSP_NUMBER = "5493413514606";

const productos = [
    // --- ENTRADAS ---
    { id: 1, cat: "Entradas", nombre: "Onigiri Veggie", precio: 5000, ingredientes: "Relleno de zanahoria, pepino y queso. Envuelto en sésamo (2 unidades).", imagen: "imagenes/OnigiriVeggie.jpeg", piezas: "2 Unid." },
    { id: 2, cat: "Entradas", nombre: "Tuna Mayo", precio: 5000, ingredientes: "Relleno de lomo de Atún con mayonesa y ciboutelle. Envuelto en sésamo (2 unidades).", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid." },
    { id: 10, cat: "Entradas", nombre: "Tori Katsu", precio: 6000, ingredientes: "Relleno de bastoncitos de pollo rebozados en panko, con mayo spice. Envuelto en sésamo (2 unidades).", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid." },
    { id: 11, cat: "Entradas", nombre: "Ebi Crunch", precio: 6000, ingredientes: "Relleno de langostinos crocantes rebozados en panko, con mayo spice. Envuelto en sésamo (2 unidades).", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid." },

    // --- COMBOS ---
    { id: 3, cat: "Combos", nombre: "Barquito Premium 40", precio: 50000, ingredientes: "Surtido de Rolls fríos. Contiene 8 Red Pasion, 8 Ebi Furai, 8 Karaage Roll, 8 Tuna Deluxe y 8 Sweet Kani. Incluye 5 juegos de palillos y 4 salsas de soja.", imagen: "imagenes/Combo1.jpg", piezas: "40 Piezas", popular: true },
    { id: 18, cat: "Combos", nombre: "Barquito Clásico 16", precio: 24000, ingredientes: "Surtido de Rolls fríos. Contiene 4 Red Pasion, 4 Ebi Furai, 4 Karaage Roll y 4 Tuna Deluxe. Incluye 2 juegos de palillos, 2 salsas de soja y 1 salsa de maracuyá.", imagen: "imagenes/Combo16Piezas.jpg", piezas: "16 Piezas" },
    { id: 19, cat: "Combos", nombre: "Barquito Deluxe 16", precio: 24000, ingredientes: "Full Salmón rosado, palta y queso. Incluye 2 juegos de palillos, 2 salsas de soja y 1 salsa de maracuyá.", imagen: "imagenes/ComboSalmon.jfif", piezas: "16 Piezas", popular: true },

    // --- ROLLS FRIOS ---
    { id: 4, cat: "Frios", nombre: "Ebi Furai Roll", precio: 11000, ingredientes: "Langostino rebozado, palta y queso. Envuelto en sésamo.", imagen: "imagenes/EviFurai.jfif", piezas: "8 Piezas" },
    { id: 5, cat: "Frios", nombre: "Sweet Kani Roll", precio: 10000, ingredientes: "Kanikama, frutilla y queso. Envuelto en sésamo.", imagen: "imagenes/SweetKani.jpeg", piezas: "8 Piezas" },
    { id: 12, cat: "Frios", nombre: "Red Pasion Roll", precio: 11500, ingredientes: "Salmón, palta y Philadelphia. Envuelto en sésamo y topping rojo.", imagen: "imagenes/RedPasion.jpg", piezas: "8 Piezas" },
    { id: 13, cat: "Frios", nombre: "Kani Pink Roll", precio: 10500, ingredientes: "Kanikama, palta y queso con un toque rosado especial de la casa.", imagen: "imagenes/KaniPink.jpg", piezas: "8 Piezas" },
    { id: 14, cat: "Frios", nombre: "Tuna Deluxe Roll", precio: 11200, ingredientes: "Atún premium, palta y queso Philadelphia con verdeo.", imagen: "imagenes/TunaDeluxe.jpg", piezas: "8 Piezas" },
    { id: 15, cat: "Frios", nombre: "Karaage Roll", precio: 10800, ingredientes: "Pollo frito japonés, palta y queso, con lluvia de ciboulette.", imagen: "imagenes/Karaage.jpg", piezas: "8 Piezas" },

    // --- ROLLS HOT ---
    { id: 6, cat: "Hot", nombre: "Hot Roll Pasion Deluxe", precio: 13000, ingredientes: "Roll de salmón, palta y queso, rebozado en panko y frito.", imagen: "imagenes/HotRoll.jfif", piezas: "8 Piezas", popular: true },
    { id: 16, cat: "Hot", nombre: "Hot Roll Langostino", precio: 12500, ingredientes: "Langostino, palta y queso rebozado en panko, frito por fuera y caliente por dentro.", imagen: "imagenes/LangostinoHot.jfif", piezas: "8 Piezas" },
    { id: 17, cat: "Hot", nombre: "Hot Roll Pollo", precio: 11000, ingredientes: "Pollo crocante y Philadelphia, frito en tempura panko.", imagen: "imagenes/PolloHot.jfif", piezas: "8 Piezas" },
    { id: 20, cat: "Hot", nombre: "Hot Roll Kanikama", precio: 10500, ingredientes: "Kanikama, palta y queso, rebozado en panko y frito.", imagen: "imagenes/KanikamaHot.jfif", piezas: "8 Piezas" },

    // --- VEGGIE ---
    { id: 7, cat: "Veggie", nombre: "Veggie Roll", precio: 8500, ingredientes: "Pepino, zanahoria y queso. Envuelto en sésamo.", imagen: "imagenes/SushiVeggie.jpeg", piezas: "8 Piezas" }
];

let carrito = [];
let categoriaActual = "Todos";
let busquedaActual = "";

// Lógica de Carrito
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('show');
}

function agregarAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    const enCarrito = carrito.find(item => item.id === id);
    if (enCarrito) {
        enCarrito.cantidad++;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }
    actualizarUI();
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(p => p.id === id);
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }
    actualizarUI();
}

function actualizarUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center italic mt-10">Tu carrito está vacío...</p>';
    } else {
        cartItems.innerHTML = carrito.map(item => {
            total += item.precio * item.cantidad;
            cantidadTotal += item.cantidad;
            return `
                <div class="flex items-center gap-3 bg-white/5 p-3 rounded-2xl animate-fade">
                    <img src="${item.imagen}" class="w-14 h-14 object-cover rounded-xl" onerror="this.src='https://via.placeholder.com/100?text=Sushi'">
                    <div class="flex-grow">
                        <h4 class="text-xs font-bold">${item.nombre}</h4>
                        <p class="text-orange-500 text-[11px]">$${item.precio.toLocaleString('es-AR')}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="cambiarCantidad(${item.id}, -1)" class="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">-</button>
                        <span class="font-mono">${item.cantidad}</span>
                        <button onclick="cambiarCantidad(${item.id}, 1)" class="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">+</button>
                    </div>
                </div>
            `;
        }).join('');
    }
    cartCount.innerText = cantidadTotal;
    cartTotal.innerText = `$${total.toLocaleString('es-AR')}`;
}

function enviarPedido() {
    if (carrito.length === 0) return;
    let msg = "🍣 *SUSHI AL PASO - PEDIDO* 🍣\n\n";
    let total = 0;
    carrito.forEach(item => {
        msg += `• *${item.cantidad}x* ${item.nombre} (${item.piezas})\n`;
        total += item.precio * item.cantidad;
    });
    msg += `\n💰 *Total:* $${total.toLocaleString('es-AR')}\n\nGracias!`;
    abrirWsp(msg);
}

// Funciones Generales
function ampliarImagen(src, nombre) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('img-ampliada');
    const caption = document.getElementById('lightbox-caption');
    img.src = src;
    caption.innerText = nombre;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarImagen() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function abrirWsp(msg) {
    const url = `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent(msg)}`;
    if (!window.open(url, '_blank')) {
        document.getElementById('wsp-modal').style.display = 'flex';
    }
}

// Buscador y Filtros
document.getElementById('buscador').addEventListener('input', (e) => {
    busquedaActual = e.target.value.toLowerCase();
    render();
});

function filtrar(cat) {
            categoriaActual = cat;
            const botones = document.querySelectorAll('.category-btn');
            botones.forEach(btn => {
                btn.classList.remove('active');
                const btnText = btn.innerText.toLowerCase();
                const catLower = cat.toLowerCase();
                
                if (catLower === 'todos' && btnText === 'todos') btn.classList.add('active');
                if (catLower === 'combos' && btnText === 'combos') btn.classList.add('active');
                if (catLower === 'entradas' && btnText === 'entradas') btn.classList.add('active');
                if (catLower === 'hot' && btnText === 'rolls calientes') btn.classList.add('active');
                if (catLower === 'frios' && btnText === 'rolls fríos') btn.classList.add('active');
                if (catLower === 'veggie' && btnText === 'veggie') btn.classList.add('active');
            });
            render();
        }

function render() {
    const grid = document.getElementById('grid-sushi');
    const filtrados = productos.filter(p => {
        const matchCat = (categoriaActual === "Todos" || p.cat === categoriaActual);
        const matchSearch = (p.nombre.toLowerCase().includes(busquedaActual) || p.ingredientes.toLowerCase().includes(busquedaActual));
        return matchCat && matchSearch;
    });

    document.getElementById('sin-resultados').style.display = filtrados.length === 0 ? 'block' : 'none';
    grid.innerHTML = filtrados.map(item => `
        <div class="sushi-card glass rounded-3xl overflow-hidden flex flex-col h-full animate-fade">
            <div class="relative h-52 overflow-hidden cursor-pointer group" onclick="ampliarImagen('${item.imagen}', '${item.nombre}')">
                <img src="${item.imagen}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/400x300?text=${item.nombre}'">
                <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[9px] text-white px-2 py-1 rounded-md uppercase font-bold tracking-widest border border-white/10">${item.piezas}</div>
                ${item.popular ? '<div class="absolute top-3 right-3 bg-orange-600 text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-lg">TOP</div>' : ''}
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-base font-bold text-white leading-tight">${item.nombre}</h4>
                    <span class="text-orange-500 font-bold text-sm">$${item.precio.toLocaleString('es-AR')}</span>
                </div>
                <p class="text-gray-400 text-xs leading-relaxed mb-6 flex-grow italic">${item.ingredientes}</p>
                <button onclick="agregarAlCarrito(${item.id})" class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all active:scale-95">Agregar al Carrito</button>
            </div>
        </div>
    `).join('');
}

window.onload = render;