const WSP_NUMBER = "5493413514606";

const productos = [
    { id: 1, cat: "Entradas", nombre: "Gyoza de Cerdo", precio: 4500, ingredientes: "Empanaditas japonesas al vapor y selladas (5 unidades).", imagen: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800", piezas: "5 Unid." },
    { id: 2, cat: "Entradas", nombre: "Harumaki", precio: 3800, ingredientes: "Arrolladitos primavera de carne y verdura (3 unidades).", imagen: "https://images.unsplash.com/photo-1606331107386-302381274381?auto=format&fit=crop&q=80&w=800", piezas: "3 Unid." },
    { id: 3, cat: "Combos", nombre: "Combo Clásico 15", precio: 12500, ingredientes: "Surtido de Rolls fríos y Niguiris de salmón fresco.", imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800", piezas: "15 Piezas", popular: true },
    { id: 4, cat: "Frios", nombre: "Ebi Furai Roll", precio: 8500, ingredientes: "Langostino rebozado, palta y Philadelphia. Envuelto en sésamo.", imagen: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=800", piezas: "8 Piezas" },
    { id: 5, cat: "Frios", nombre: "Kanipink Roll", precio: 7900, ingredientes: "Kanikama, palta y queso. Cubierto de salmón rosado.", imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800", piezas: "8 Piezas" },
    { id: 6, cat: "Hot", nombre: "Hot Salmón Panko", precio: 8900, ingredientes: "Roll de salmón y queso, rebozado en panko y frito. Calentito y crujiente.", imagen: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=800", piezas: "8 Piezas", popular: true },
    { id: 7, cat: "Veggie", nombre: "Veggie Zen", precio: 6500, ingredientes: "Pepino, zanahoria, palta y queso. Cubierto de ciboulette.", imagen: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&q=80&w=800", piezas: "8 Piezas" }
];

let categoriaActual = "Todos";
let busquedaActual = "";

// FUNCIÓN AMPLIAR IMAGEN
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

// BUSCADOR
document.getElementById('buscador').addEventListener('input', (e) => {
    busquedaActual = e.target.value.toLowerCase();
    render();
});

// FILTRO DE CATEGORÍAS
function filtrar(cat) {
    categoriaActual = cat;
    const botones = document.querySelectorAll('.category-btn');
    botones.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.innerText.toLowerCase();
        const catLower = cat.toLowerCase();
        
        // Mapeo simple de nombres de botones a categorías internas
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
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="bg-black/40 backdrop-blur-md p-3 rounded-full text-white text-xl">🔍</span>
                </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-base font-bold text-white leading-tight">${item.nombre}</h4>
                    <span class="text-orange-500 font-bold text-sm">$${item.precio.toLocaleString('es-AR')}</span>
                </div>
                <p class="text-gray-400 text-xs leading-relaxed mb-6 flex-grow italic">${item.ingredientes}</p>
                <button onclick="abrirWsp('Hola! 👋 Quisiera pedir: ${item.nombre} (${item.piezas})')" 
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95">
                    Añadir al Pedido
                </button>
            </div>
        </div>
    `).join('');
}

window.onload = render;