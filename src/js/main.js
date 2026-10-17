/* =================================================================
   MAIN JAVASCRIPT - SHOWCASE APP
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    console.log("💥 Comic Showcase Loaded Successfully!");

    // Contoh interaksi sederhana: Animasi klik pada kartu project
    const cards = document.querySelectorAll(".comic-card");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            // Mencegah konflik jika user klik tombol langsung
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            
            // Efek bergetar/efek komik saat kartu diklik
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "none";
            }, 100);
        });
    });
});

/* =================================================================
   COPY TO CLIPBOARD FUNCTIONS
   ================================================================ */

function copyCode(button) {
    const codeBox = button.previousElementSibling.querySelector('.code-text');
    const textToCopy = codeBox ? codeBox.innerText : button.parentElement.querySelector('code').innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = "COPIED!";
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1500);
    });
}

function copyText(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = "COPIED!";
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1500);
    });
}

/* =================================================================
   MAIN JAVASCRIPT - SHOWCASE APP
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    console.log("💥 Comic Showcase Loaded Successfully!");

    // 1. Fitur Klik Card (Efek Getar Sederhana)
    const cards = document.querySelectorAll(".comic-card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "none";
            }, 100);
        });
    });

    // 2. Fitur Image Preview Modal (Fullscreen) yang Aman dari Error
    const previewImg = document.querySelector(".screenshot-section .card-image-box img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    if (previewImg && modal && modalImg) {
        previewImg.style.cursor = "pointer";
        
        previewImg.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = previewImg.src;
        });
    }
});

// Fungsi Global untuk Menutup Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}