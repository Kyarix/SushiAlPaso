// --- CONFIGURACIÓN ---
const WSP_NUMBER = "5493413514606";

// --- BASE DE DATOS COMPLETA Y CORREGIDA ---
const productos = [
    // ENTRADAS
    { id: 1, cat: "Entradas", nombre: "Onigiri Veggie (Pack x2)", precio: 7000, ingredientes: "Relleno de zanahoria, pepino y queso. Envuelto en sésamo.", imagen: "imagenes/OnigiriVeggie.jpeg", piezas: "2 Unid." },
    { id: 2, cat: "Entradas", nombre: "Tuna Mayo (Pack x2)", precio: 7000, ingredientes: "Relleno de lomo de Atún con mayonesa y ciboutelle. Envuelto en sésamo.", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid." },
    { id: 10, cat: "Entradas", nombre: "Tori Katsu (Pack x2)", precio: 7000, ingredientes: "Relleno de bastoncitos de pollo rebozados en panko, con mayo spice. Envuelto en sésamo.", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid." },
    { id: 11, cat: "Entradas", nombre: "Ebi Crunch (Pack x2)", precio: 8000, ingredientes: "Relleno de langostinos crocantes rebozados en panko, con mayo spice. Envuelto en sésamo.", imagen: "imagenes/Onigiri.jfif", piezas: "2 Unid.", popular: true },
    
    // ONI BURGERS
    { id: 21, cat: "Entradas", nombre: "Oni Burger Pollo (Pack x2)", precio: 10000, ingredientes: "Rebozado en panko y frito. Relleno de bastoncitos de pollo rebozados en panko, con mayo spice.", imagen: "imagenes/OniBurger.jfif", piezas: "2 Unid.", popular: true },
    { id: 22, cat: "Entradas", nombre: "Oni Burger Atún (Pack x2)", precio: 10000, ingredientes: "Rebozado en panko y frito. Relleno de lomo de Atún con mayonesa.", imagen: "imagenes/OniBurger.jfif", piezas: "2 Unid.", popular: true },
    { id: 23, cat: "Entradas", nombre: "Oni Burger Kanikama (Pack x2)", precio: 10000, ingredientes: "Rebozado en panko y frito. Relleno de Kanikama y mayonesa.", imagen: "imagenes/OniBurger.jfif", piezas: "2 Unid." },

    // COMBOS
    { id: 3, cat: "Combos", nombre: "Barquito Premium 40 (SIN STOCK)", precio: 55000, ingredientes: "Surtido de Rolls fríos. Contiene 8 Red Pasion, 8 Ebi Furai, 8 Karaage Roll, 8 Tuna Deluxe y 8 Sweet Kani. Incluye 4 juegos de palillos y 4 salsas de soja y 2 de maracuyá. (SIN STOCK)", imagen: "imagenes/Combo1.jpg", piezas: "40 Piezas", popular: true },
    { id: 18, cat: "Combos", nombre: "Barquito Clásico 16", precio: 27000, ingredientes: "Surtido de Rolls fríos. Contiene 8 Red Pasion y 8 Ebi Furai. Incluye 2 juegos de palillos, 2 salsas de soja y 1 salsa de maracuyá.", imagen: "imagenes/Combo16Piezas.jpg", piezas: "16 Piezas" },
    { id: 19, cat: "Combos", nombre: "Barquito Deluxe 16", precio: 28000, ingredientes: "Full Salmón rosado, palta y queso. Incluye 2 juegos de palillos, 2 salsas de soja y 1 salsa de maracuyá.", imagen: "imagenes/ComboSalmon.jfif", piezas: "16 Piezas", popular: true },

    // ROLLS ESPECIALES 
    { id: 30, cat: "Especiales", nombre: "Salmón Avocado Deluxe", precio: 14500, ingredientes: "Roll relleno de salmón fresco, pepino y queso crema. Con cobertura de finas fetas de palta con un toque de mayo spicy.", imagen: "imagenes/SalmonAvocado.jpg", piezas: "8 Piezas", popular: true },
    { id: 31, cat: "Especiales", nombre: "Kani Fresh", precio: 13500, ingredientes: "Roll relleno de kanikama, pepino y queso crema. Con cobertura de finas fetas de palta y semillas de sésamo.", imagen: "imagenes/KaniFresh.jpg", piezas: "8 Piezas" },
    { id: 32, cat: "Especiales", nombre: "Avocado Pink Fusion", precio: 14500, ingredientes: "Roll relleno de kanikama, palta y queso crema. Con cobertura de finas fetas de salmón rosado fresco.", imagen: "imagenes/PinkFusion.jpg", piezas: "8 Piezas", popular: true },
    { id: 33, cat: "Especiales", nombre: "Black Pasion", precio: 14000, ingredientes: "Roll relleno de salmón rosado fresco, queso crema con cebollita de verdeo y palta. Con cobertura de sésamo negro.", imagen: "imagenes/BlackPasion.jpg", piezas: "8 Piezas" },
    { id: 34, cat: "Especiales", nombre: "Ebi Red Pasion", precio: 14500, ingredientes: "Roll relleno de langostinos rebozados en panko, queso crema y palta. Cubierto con finas fetas de salmón rosado fresco.", imagen: "imagenes/EbiRed.jpg", piezas: "8 Piezas", popular: true },
    { id: 35, cat: "Especiales", nombre: "Palmito Fresh", precio: 11000, ingredientes: "Roll relleno de palmitos, queso crema y palta.", imagen: "imagenes/PalmitoFresh.jpg", piezas: "8 Piezas" },
    { id: 36, cat: "Especiales", nombre: "California Roll", precio: 11000, ingredientes: "Roll relleno de kanikama, palta y bastoncitos de pepino.", imagen: "imagenes/California.jpg", piezas: "8 Piezas", popular: true },
    { id: 37, cat: "Especiales", nombre: "Sweet Red (SIN STOCK)", precio: 14500, ingredientes: "Roll relleno de salmón rosado fresco, queso crema y frutilla. Con cobertura de sésamo negro. (Según disponibilidad de fruta de estación). (SIN STOCK)", imagen: "imagenes/SweetRed.jpg", piezas: "8 Piezas", popular: true },
    //{ id: 38, cat: "Especiales", nombre: "Tropical Roll", precio: 14500, ingredientes: "Roll relleno de salmón rosado fresco, queso crema y mango. Con cobertura de sésamo negro. (Según disponibilidad de fruta de estación)", imagen: "imagenes/Philly.jpg", piezas: "8 Piezas", popular: true },

    // ROLLS FRIOS 
    { id: 4, cat: "Frios", nombre: "Ebi Furai Roll", precio: 12000, ingredientes: "Langostino rebozado, palta y queso. Envuelto en sésamo. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/EviFurai.jfif", piezas: "8 Piezas", popular: true },
    { id: 5, cat: "Frios", nombre: "Sweet Kani Roll (SIN STOCK)", precio: 12000, ingredientes: "Kanikama, frutilla y queso. Envuelto en sésamo. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá. (SIN STOCK)", imagen: "imagenes/SweetKani.jpeg", piezas: "8 Piezas" },
    { id: 12, cat: "Frios", nombre: "Red Pasion Roll", precio: 13000, ingredientes: "Salmón, palta y queso. Envuelto por fuera con alga nori. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/RedPasion.jfif", piezas: "8 Piezas", popular: true },
    { id: 13, cat: "Frios", nombre: "Kani Pink Roll", precio: 11000, ingredientes: "Kanikama, palta y queso. Envuelto por fuera con alga nori. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/Kanikama.jfif", piezas: "8 Piezas" },
    { id: 14, cat: "Frios", nombre: "Tuna Deluxe Roll", precio: 11000, ingredientes: "Atún saborizado con mayonesa, palta y queso. Envuelto en sésamo. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/TunaDeluxe.jfif", piezas: "8 Piezas" },
    { id: 15, cat: "Frios", nombre: "Karaage Roll", precio: 11000, ingredientes: "Pollo rebozado, palta y queso. Envuelto en sésamo. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/Karaage.jfif", piezas: "8 Piezas" },

    // ROLLS HOT 
    { id: 6, cat: "Hot", nombre: "Hot Roll Pasion Deluxe", precio: 14500, ingredientes: "Roll de salmón, palta y queso, rebozado en panko y frito. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/HotRoll.jfif", piezas: "8 Piezas", popular: true },
    { id: 16, cat: "Hot", nombre: "Hot Roll Ebi Deluxe", precio: 14500, ingredientes: "Langostino, palta y queso rebozado en panko, frito por fuera y caliente por dentro. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/LangostinoHot.jfif", piezas: "8 Piezas", popular: true },
    { id: 17, cat: "Hot", nombre: "Hot Roll Karaage", precio: 14000, ingredientes: "Pollo crocante, palta y queso, frito en tempura panko. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/PolloHot.jfif", piezas: "8 Piezas" },
    { id: 20, cat: "Hot", nombre: "Hot Roll Kani Pink", precio: 14500, ingredientes: "Kanikama, palta y queso, rebozado en panko y frito. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/KanikamaHot.jfif", piezas: "8 Piezas" },

    // VEGGIE
    { id: 7, cat: "Veggie", nombre: "Veggie Roll", precio: 9500, ingredientes: "Pepino, zanahoria y queso. Envuelto en sésamo. Incluye 1 juego de palillos, 1 salsa de soja y 1 salsa de maracuyá.", imagen: "imagenes/SushiVeggie.jpeg", piezas: "8 Piezas" }
];

// --- LÓGICA GENERAL ---
let carrito = [];
let categoriaActual = "Todos";
let busquedaActual = "";

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('show');
    actualizarUI();
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
    const btnCount = document.getElementById('cart-count');
    btnCount.parentElement.classList.add('scale-110');
    setTimeout(() => btnCount.parentElement.classList.remove('scale-110'), 200);
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(p => p.id === id);
    if (!item) return;
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
    let totalAcumulado = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center italic mt-10">Tu carrito está vacío...</p>';
    } else {
        cartItems.innerHTML = carrito.map(item => {
            const subtotal = Number(item.precio) * Number(item.cantidad);
            totalAcumulado += subtotal;
            cantidadTotal += item.cantidad;
            return `
                <div class="flex items-center gap-3 bg-white/5 p-3 rounded-2xl animate-fade">
                    <img src="${item.imagen}" class="w-14 h-14 object-cover rounded-xl" onerror="this.src='https://via.placeholder.com/100?text=Sushi'">
                    <div class="flex-grow">
                        <h4 class="text-xs font-bold text-white">${item.nombre}</h4>
                        <p class="text-orange-500 text-[11px] font-bold">$${item.precio.toLocaleString('es-AR')}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="cambiarCantidad(${item.id}, -1)" class="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">-</button>
                        <span class="font-mono text-sm">${item.cantidad}</span>
                        <button onclick="cambiarCantidad(${item.id}, 1)" class="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">+</button>
                    </div>
                </div>`;
        }).join('');
    }
    cartCount.innerText = cantidadTotal;
    cartTotal.innerText = `$${totalAcumulado.toLocaleString('es-AR')}`;
}

function enviarPedido() {
    if (carrito.length === 0) return;
    let totalFinal = 0;
    let msg = "🍣 *SUSHI AL PASO - PEDIDO* 🍣\n\n";
    carrito.forEach(item => {
        const sub = Number(item.precio) * Number(item.cantidad);
        msg += `• *${item.cantidad}x* ${item.nombre} ($${sub.toLocaleString('es-AR')})\n`;
        totalFinal += sub;
    });
    msg += `\n💰 *TOTAL:* $${totalFinal.toLocaleString('es-AR')}\n\nGracias!`;
    const url = `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

function ampliarImagen(src, nombre) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('img-ampliada');
    document.getElementById('lightbox-caption').innerText = nombre;
    img.src = src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarImagen() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function filtrar(cat) {
    categoriaActual = cat;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.innerText.toLowerCase();
        const catLower = cat.toLowerCase();
        if (catLower === 'todos' && btnText === 'todos') btn.classList.add('active');
        if (catLower === 'combos' && btnText === 'combos') btn.classList.add('active');
        if (catLower === 'entradas' && btnText === 'entradas') btn.classList.add('active');
        if (catLower === 'especiales' && btnText === 'rolls especiales') btn.classList.add('active');
        if (catLower === 'hot' && btnText === 'rolls calientes') btn.classList.add('active');
        if (catLower === 'frios' && btnText === 'rolls fríos') btn.classList.add('active');
        if (catLower === 'veggie' && btnText === 'veggie') btn.classList.add('active');
    });
    render();
}

document.getElementById('buscador').addEventListener('input', (e) => {
    busquedaActual = e.target.value.toLowerCase();
    render();
});

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
                <button onclick="agregarAlCarrito(${item.id})" class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95 shadow-orange-900/10">
                    Añadir al Carrito
                </button>
            </div>
        </div>`).join('');
}

window.onload = render;