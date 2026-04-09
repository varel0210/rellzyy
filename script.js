
// Inisialisasi Lucide Icons
lucide.createIcons();

// Fungsi Merender Katalog
function renderKatalog() {
    const grid = document.getElementById('gameGrid');
    if (!grid) return;

    grid.innerHTML = games.map(game => `
        <div class="glass-card p-6 hover:scale-[1.02] transition-all cursor-pointer group" onclick="openDetail(${game.id})">
            <div class="h-48 bg-white/5 rounded-2xl mb-6 flex items-center justify-center text-5xl group-hover:bg-amber-400/10 transition-colors">
                ${game.emoji}
            </div>
            <div class="text-[10px] uppercase font-black text-amber-400 tracking-widest mb-2">${game.category}</div>
            <h3 class="text-2xl font-syne font-bold text-white mb-4 leading-tight">${game.title}</h3>
            <div class="flex justify-between items-center border-t border-white/5 pt-4">
                <span class="text-white/80 font-bold">${game.price}</span>
                <div class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Fungsi Membuka Detail & Hubungi Admin
function openDetail(id) {
    const game = games.find(g => g.id === id);
    if (!game) return;

    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalCategory').textContent = game.category;
    document.getElementById('modalPrice').textContent = game.price;
    document.getElementById('modalBanner').innerHTML = `<span class="drop-shadow-2xl">${game.emoji}</span>`;
    
    const list = document.getElementById('modalIncludes');
    list.innerHTML = game.includes.map(item => `
        <li class="flex items-center gap-3 text-white/60 text-sm">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400"></i> ${item}
        </li>
    `).join('');

    // Konfigurasi WhatsApp
    const adminWA = "62895331114471"; // GANTI DENGAN NOMOR ADMIN ANDA
    const textPesan = `Halo Admin RELLZYY STORE,\n\nSaya tertarik dengan akun berikut:\n🔥 *${game.title}*\n💰 Harga: *${game.price}*\n\nMohon informasi ketersediaannya. Terima kasih!`;
    document.getElementById('btnHubungi').href = `https://wa.me/${adminWA}?text=${encodeURIComponent(textPesan)}`;

    document.getElementById('modalOverlay').classList.add('open');
    lucide.createIcons();
}

// Fungsi Tutup Modal
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

// Fungsi Navigasi Halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Jalankan saat dokumen siap
document.addEventListener('DOMContentLoaded', renderKatalog);
