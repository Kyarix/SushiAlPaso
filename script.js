// --- CONFIGURACIÓN ---
const WSP_NUMBER = "5493413514606";

// --- BASE DE DATOS DE PRODUCTOS ---
// Para cambiar una imagen por una tuya, poné: imagen: "fotos/nombre.jpg"
const productos = [
    { 
        id: 1, 
        cat: "Entradas", 
        nombre: "Onigiri Veggie", 
        precio: 6000, 
        ingredientes: "Relleno de zanahoria, pepino y queso. Envuelto en sésamo (2 unidades).", 
        imagen: "imagenes/OnigiriVeggie.jpeg", 
        piezas: "2 Unid." 
    },
    { 
        id: 2, 
        cat: "Entradas", 
        nombre: "Onigiri Atún", 
        precio: 6000, 
        ingredientes: "Relleno de lomo de Atún con mayonesa y ciboutelle. Envuelto en sésamo (2 unidades).", 
        imagen: "imagenes/Onigiri.jfif", 
        piezas: "2 Unid."
    },
    { 
        id: 3, 
        cat: "Combos", 
        nombre: "Barquito Clásico 40", 
        precio: 50000, 
        ingredientes: "Surtido de Rolls fríos. Contiene 8 piezas de Red Pasion, 8 piezas de Ebi Furai, 8 piezas de Karaage Roll, 8 piezas de Tuna Deluxe y 8 piezas de Sweet Kani.", 
        imagen: "imagenes/Combo1.jpg", 
        piezas: "40 Piezas"
    },
    { 
        id: 4, 
        cat: "Frios", 
        nombre: "Ebi Furai Roll", 
        precio: 11000, 
        ingredientes: "Langostino rebozado, palta y queso. Envuelto en sésamo.", 
        imagen: "imagenes/EviFurai.jfif", 
        piezas: "8 Piezas" 
    },
    { 
        id: 5, 
        cat: "Frios", 
        nombre: "Sweet Kani Roll", 
        precio: 10000, 
        ingredientes: "Kanikama, frutilla y queso. Envuelto en sésamo.", 
        imagen: "imagenes/SweetKani.jpeg", 
        piezas: "8 Piezas" 
    },
    { 
        id: 6, 
        cat: "Hot", 
        nombre: "Hot Roll Pasion Deluxe", 
        precio: 13000, 
        ingredientes: "Roll de salmón, palta y queso, rebozado en panko y frito.", 
        imagen: "imagenes/HotRoll.jfif", 
        piezas: "8 Piezas"
    },
    { 
        id: 7, 
        cat: "Veggie", 
        nombre: "Veggie Roll", 
        precio: 8500, 
        ingredientes: "Pepino, zanahoria y queso. Envuelto en sésamo.", 
        imagen: "imagenes/SushiVeggie.jpeg", 
        piezas: "8 Piezas" 
    }
];

let categoriaActual = "Todos";
let busquedaActual = "";

// --- FUNCIONES ---

function ampliarImagen(src, nombre) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('img-ampliada');
    const caption = document.getElementById('lightbox-caption');
    img.src = src;
    caption.innerText = nombre;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarImagen() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

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

function abrirWsp(msg) {
    const url = `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent(msg)}`;
    if (!window.open(url, '_blank')) {
        document.getElementById('wsp-modal').style.display = 'flex';
    }
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
                <img src="${item.imagen}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[9px] text-white px-2 py-1 rounded-md uppercase font-bold tracking-widest border border-white/10">
                    ${item.piezas}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-base font-bold text-white leading-tight">${item.nombre}</h4>
                    <span class="text-orange-500 font-bold text-sm">$${item.precio.toLocaleString('es-AR')}</span>
                </div>
                <p class="text-gray-400 text-xs leading-relaxed mb-6 flex-grow italic">${item.ingredientes}</p>
                <button onclick="abrirWsp('Hola! Quisiera pedir: ${item.nombre} (${item.piezas})')" 
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95">
                    Añadir al Pedido
                </button>
            </div>
        </div>
    `).join('');
}

window.onload = render;