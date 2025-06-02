// Alternância de tema (dark mode)
const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

if (toggleBtn) {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '🌙';
        }
    });
}

// Mostrar/ocultar senha
const senhaInput = document.getElementById('password');
const toggleSenhaBtn = document.getElementById('toggle-password');

if (toggleSenhaBtn && senhaInput) {
    toggleSenhaBtn.addEventListener('click', function() {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            toggleSenhaBtn.textContent = "🙈";
        } else {
            senhaInput.type = "password";
            toggleSenhaBtn.textContent = "👁️";
        }
    });
}

// Barra de força da senha
const barraForca = document.getElementById('senha-barra');
const msgForca = document.getElementById('senha-msg');

if (senhaInput && barraForca && msgForca) {
    senhaInput.addEventListener('input', function() {
        const val = senhaInput.value;
        let forca = 0;
        if (val.length >= 6) forca++;
        if (/[A-Z]/.test(val)) forca++;
        if (/[0-9]/.test(val)) forca++;
        if (/[^A-Za-z0-9]/.test(val)) forca++;

        // Atualiza barra e mensagem
        let cores = ['#ff3333', '#ff9900', '#ffcc00', '#33cc33'];
        let textos = ['Muito fraca', 'Fraca', 'Boa', 'Forte'];
        barraForca.style.width = (forca * 25) + 25 + '%';
        barraForca.style.background = cores[forca-1] || '#ff3333';
        msgForca.textContent = val.length === 0 ? '' : 'Força da senha: ' + (textos[forca-1] || 'Muito fraca');
        msgForca.style.color = cores[forca-1] || '#ff3333';
    });
}

// Validação do formulário e redirecionamento
document.getElementById('form-login').addEventListener('submit', function(e) {
    let valido = true;

    // Usuário
    const usuario = document.getElementById('username');
    const erroUsuario = usuario.nextElementSibling;
    if (usuario.value.trim().length < 3) {
        erroUsuario.textContent = 'Usuário deve ter pelo menos 3 caracteres!';
        valido = false;
    } else {
        erroUsuario.textContent = '';
    }

    // Senha
    const erroSenha = senhaInput.parentElement.nextElementSibling;
    if (senhaInput.value.trim().length < 6) {
        erroSenha.textContent = 'Senha deve ter pelo menos 6 caracteres!';
        valido = false;
    } else {
        erroSenha.textContent = '';
    }

    if (!valido) {
        e.preventDefault();
    } else {
        e.preventDefault(); 
        window.location.href = "index.html";
    }
});

// Limpa erro ao digitar
document.querySelectorAll('#form-login input').forEach(input => {
    input.addEventListener('input', function() {
        const erro = this.nextElementSibling || this.parentElement.nextElementSibling;
        if (erro && erro.classList.contains('erro')) erro.textContent = '';
    });
});