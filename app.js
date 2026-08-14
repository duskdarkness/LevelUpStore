// --- CONFIGURACIÓN DE ENLACES ---
const WHATSAPP_NUMBER = "593900000000";
const PRODS_URL = "https://docs.google.com/spreadsheets/d/1FcKvXhbHrASVvqBFU_EYtpiMtlMo4QnfV33aeRM-rRM/gviz/tq?tqx=out:csv";
const CATS_URL = "https://docs.google.com/spreadsheets/d/1u2Ut3bovjOh7BWljQ-ZTaWp5KM7upkzsvxZqeydZIMA/gviz/tq?tqx=out:csv";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx85fE0vWUXR7yD_x-9loITu_hDyCvVmfgE6SqxeWyly2wjv2ie7R2DhKPdHXVviwgDyg/exec"; // Para el registro de pedidos

let db_products = [];
let db_categories = {}; // Guardará { "Nombre": "URL_Imagen" }
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --- INICIALIZACIÓN ---
async function init() {
    try {
        const [resProds, resCats] = await Promise.all([fetch(PRODS_URL), fetch(CATS_URL)]);
        
        // 1. Procesar Imágenes de Categorías
        const catsText = await resCats.text();
        catsText.split('\n').slice(1).forEach(row => {
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.replace(/"/g, '').trim());
            if(cols[0]) db_categories[cols[0]] = cols[1];
        });

        // 2. Procesar Productos
        const prodsText = await resProds.text();
        db_products = prodsText.split('\n').slice(1).map((row, i) => {
            const c = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.replace(/"/g, '').trim());
            if(c.length >= 4) {
                return { id: i, cat: c[0], sub: c[1], name: c[2], price: parseFloat(c[3].replace(',','.')) || 0 };
            }
            return null;
        }).filter(p => p && p.cat);

        renderHome();
        updateCart();
    } catch (e) {
        document.getElementById('app').innerHTML = `<p style="text-align:center; padding:50px;">Error al cargar datos. Verifica la conexión.</p>`;
    }
}

// --- NAVEGACIÓN Y RENDERIZADO ---
function renderHome() {
    const app = document.getElementById('app');
    const offers = db_products.filter(p => p.cat.toUpperCase() === 'OFERTAS');
    const bestSellers = db_products.filter(p => p.cat.toUpperCase() === 'MAS VENDIDOS');
    const categories = [...new Set(db_products.map(p => p.cat))].filter(c => !['OFERTAS', 'MAS VENDIDOS'].includes(c.toUpperCase()));

    let html = '';

    // Seccion Ofertas
    if(offers.length > 0) {
        html += `<div class="special-section"><h2 class="section-title"><i class="fa-solid fa-fire"></i> OFERTAS</h2><div class="horizontal-scroll">${offers.map(p => renderMiniCard(p)).join('')}</div></div>`;
    }

    // Seccion Más Vendidos
    if(bestSellers.length > 0) {
        html += `<div class="special-section"><h2 class="section-title"><i class="fa-solid fa-star"></i> MÁS VENDIDOS</h2><div class="horizontal-scroll">${bestSellers.map(p => renderMiniCard(p)).join('')}</div></div>`;
    }

    // Grid de Categorías
    html += `<h2 class="section-title">CATEGORÍAS</h2><div class="category-grid">`;
    categories.forEach(cat => {
        const img = db_categories[cat] || 'https://via.placeholder.com/300x150?text=LevelUp';
        html += `
            <div class="category-card" onclick="renderCategory('${cat}')">
                <img src="${img}" loading="lazy">
                <h2>${cat}</h2>
            </div>`;
    });
    html += `</div>`;
    app.innerHTML = html;
}

function renderCategory(catName) {
    const filtered = db_products.filter(p => p.cat === catName);
    let html = `
        <div style="margin-bottom:20px; display:flex; gap:15px; align-items:center;">
            <button onclick="renderHome()" style="background:#1a2233; color:white; border:none; padding:10px 20px; border-radius:10px; cursor:pointer;"><i class="fa-solid fa-arrow-left"></i> VOLVER</button>
            <h2 class="section-title" style="margin:0">${catName}</h2>
        </div>
        <div class="products-grid">${filtered.map(p => renderMiniCard(p)).join('')}</div>`;
    document.getElementById('app').innerHTML = html;
}

function renderMiniCard(p) {
    return `
        <div class="product-card" style="min-width: 220px;">
            <div style="font-size:11px; color:var(--accent-cyan); font-weight:bold; text-transform:uppercase;">${p.sub}</div>
            <div style="font-size:15px; margin: 10px 0; height: 35px; overflow:hidden; font-weight:bold;">${p.name}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:20px; font-weight:bold; color:white;">$${p.price.toFixed(2)}</span>
                <button onclick="addToCart(${p.id})" style="background:var(--accent-cyan); border:none; padding:8px 12px; border-radius:8px; font-weight:bold; cursor:pointer;">+ AGREGAR</button>
            </div>
        </div>`;
}

// --- LÓGICA DEL CARRITO (LO QUE PEDISTE) ---

function addToCart(id) {
    const p = db_products.find(prod => prod.id === id);
    const exist = cart.find(i => i.id === id);
    if(exist) exist.qty++; else cart.push({...p, qty: 1});
    
    showToast(`¡${p.name} añadido!`);
    updateCart();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeItem(id);
        else updateCart();
    }
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
}

function clearCart() {
    if(confirm("¿Vaciar todo el carrito?")) {
        cart = [];
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const list = document.getElementById('cartItems');
    let total = 0;
    
    if(cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:gray; padding:20px;">Vacío</p>`;
    } else {
        list.innerHTML = cart.map(i => {
            total += i.price * i.qty;
            return `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #1e293b; padding-bottom:8px;">
                    <div style="flex:1">
                        <div style="font-size:13px; font-weight:bold; color:white;">${i.name}</div>
                        <div style="font-size:11px; color:var(--accent-cyan);">$${(i.price * i.qty).toFixed(2)}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button onclick="changeQty(${i.id}, -1)" style="width:24px; height:24px; background:#1a2233; border:1px solid #2d3b54; color:white; border-radius:5px; cursor:pointer;">-</button>
                        <span style="font-weight:bold; min-width:15px; text-align:center;">${i.qty}</span>
                        <button onclick="changeQty(${i.id}, 1)" style="width:24px; height:24px; background:#1a2233; border:1px solid #2d3b54; color:white; border-radius:5px; cursor:pointer;">+</button>
                        <button onclick="removeItem(${i.id})" style="background:transparent; border:none; color:#ff4b4b; cursor:pointer; margin-left:5px;"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`;
        }).join('');
    }
    document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
    // Badge opcional
    const badge = document.getElementById('cartBadge');
    if(badge) badge.innerText = cart.reduce((s,i) => s + i.qty, 0);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('active');
    setTimeout(() => t.classList.remove('active'), 2000);
}

// --- FUNCIÓN DE ENVÍO (MANTIENE TU BOTÓN) ---
async function sendOrder() {
    if(cart.length === 0) return;
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0).toFixed(2);
    const pedidoString = cart.map(i => `${i.qty}x ${i.name}`).join(', ');
    const fecha = new Date().toLocaleString();

    // Registro en Google Sheets (Apps Script)
    try {
        fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ fecha, pedido: pedidoString, total })
        });
    } catch(e) {}

    let msg = `🚀 *PEDIDO - LevelUpStore*\n\n`;
    cart.forEach(i => msg += `• ${i.qty}x ${i.name} ($${(i.price*i.qty).toFixed(2)})\n`);
    msg += `\n💰 *TOTAL: $${total} USD*`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

init();
