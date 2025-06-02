// // Toggle Dark Mode
// const darkToggle = document.querySelector('.toggle-dark');
// if (darkToggle) {
//     darkToggle.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode');
//     });
// }

document.querySelectorAll('.ver-mais').forEach(btn => {
    btn.addEventListener('click', function() {
        const extra = this.parentElement.querySelector('.descricao-extra');
        if (extra) {
            if (extra.style.display === 'none' || extra.style.display === '') {
                extra.style.display = 'block';
                this.textContent = 'Ver Menos';
            } else {
                extra.style.display = 'none';
                this.textContent = 'Ver Mais';
            }
        }
    });
});

// subir pro topo
document.getElementById('btn-topo').addEventListener('click', function() {
            const scrollStep = () => {
                const currentScroll = window.scrollY;
                if (currentScroll > 0) {
                    window.scrollBy(0, -Math.max(10, currentScroll / 15));
                    requestAnimationFrame(scrollStep);
                }
            };
            scrollStep();
        });
        
// Toggle Dark Mode
const darkToggle = document.getElementById('toggle-dark');
if (darkToggle) {
    darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Salva a preferência do usuário
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            darkToggle.textContent = '🌙';
        }
    });

    // Aplica o tema salvo ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkToggle.textContent = '☀️';
    } else {
        darkToggle.textContent = '🌙';
    }
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Image Banner Carousel

const bannerImages = [
    './img/tenis-banner.jpg',
    './img/tenis-banner2.jpg',
    './img/tenis-banner3.jpg',
];
let currentBanner = 0;
const bannerElement = document.querySelector('.banner-img');

function changeBanner() {
    if (!bannerElement) return;
    bannerElement.classList.add('fade-out');
    setTimeout(() => {
        currentBanner = (currentBanner + 1) % bannerImages.length;
        bannerElement.src = bannerImages[currentBanner];
        bannerElement.classList.remove('fade-out');
        bannerElement.classList.add('fade-in');
        setTimeout(() => {
            bannerElement.classList.remove('fade-in');
        }, 500);
    }, 500);
}

setInterval(changeBanner, 4000);

// Product Image Zoom
const productImages = document.querySelectorAll('.produto-img');
productImages.forEach(productImage => {
    productImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });
    productImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
});
if (productImages.length === 0) {
    console.warn('Elemento(s) da imagem do produto não encontrado(s). Verifique se a classe está correta no HTML.');
}
if (productImage) {
    productImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });
    productImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
} else {
    console.warn('Elemento da imagem do produto não encontrado. Verifique se a classe está correta no HTML.');
}







