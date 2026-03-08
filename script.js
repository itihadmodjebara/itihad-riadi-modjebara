// بيانات اللاعبين (12 لاعب)
const playersData = [
    { name: " 1حوة البشير", pos: "gk", img: "p1.jpg", role: "حارس مرمى" },
    { name: " أيوب بن سعدة3 ", pos: "df", img: "p2.jpg", role: "دفاع" },
    { name: "  بوعبدلي محمد يحيى4", pos: "df", img: "p3.jpg", role: "دفاع" },
    { name: " عمر الفاروق بريغيث2 ", pos: "df", img: "p4.jpg", role: "دفاع" },
    { name: " نصر الدين دحمان5   ", pos: "df", img: "p5.jpg", role: "دفاع" },
    { name: "سمير بوزيد8 ", pos: "mid", img: "p6.jpg", role: "وسط" },
    { name: "أكرم بوزيد 6", pos: "mid", img: "p7.jpg", role: "وسط" },
    { name: "أحمد فيجل10", pos: "mid", img: "p8.jpg", role: "وسط" },
    { name: " إلياس نزار قبايلي12 ", pos: "mid", img: "p9.jpg", role: "وسط" },
    { name: " 7خليل نزار قبايلي", pos: "fw", img: "p10.jpg", role: "هجوم" },
    { name: "9باديس بن سعدة ", pos: "fw", img: "p11.jpg", role: "هجوم" },
    { name: " سماعيل محمد يعقوب11", pos: "fw", img: "p12.jpg", role: "هجوم" },
];

// دالة تبديل الأقسام
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(sectionId)) btn.classList.add('active');
    });
}

// دالة فلترة اللاعبين
function filterPlayers(position) {
    const list = document.getElementById('players-list');
    list.innerHTML = '';
    
    const filtered = position === 'all' ? playersData : playersData.filter(p => p.pos === position);
    
    filtered.forEach(p => {
        list.innerHTML += `
            <div class="player-card">
                <img src="${p.img}" alt="${p.name}">
                <div class="player-info">
                    <h4>${p.name}</h4>
                    <p>${p.role}</p>
                </div>
            </div>
        `;
    });
}

// دالة تكبير الصور
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    lb.style.display = 'flex';
    img.src = src;
}

// تشغيل الفلتر عند التحميل
window.onload = () => filterPlayers('all');