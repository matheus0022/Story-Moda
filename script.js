// Menu Mobile
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Fechar sidebar ao clicar em qualquer link
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
  });
});

// Header ao rolar
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});

// Modais
const loginModal = document.getElementById('loginModal');
const cadastroModal = document.getElementById('cadastroModal');

document.getElementById('openLogin').addEventListener('click', (e) => { e.preventDefault(); loginModal.style.display = 'flex'; });
document.getElementById('openCadastro').addEventListener('click', (e) => { e.preventDefault(); cadastroModal.style.display = 'flex'; });
document.getElementById('mobileLogin').addEventListener('click', (e) => { e.preventDefault(); loginModal.style.display = 'flex'; document.getElementById('sidebar').classList.remove('active'); });
document.getElementById('mobileCadastro').addEventListener('click', (e) => { e.preventDefault(); cadastroModal.style.display = 'flex'; document.getElementById('sidebar').classList.remove('active'); });
document.getElementById('trocarCadastro').addEventListener('click', (e) => { e.preventDefault(); loginModal.style.display = 'none'; cadastroModal.style.display = 'flex'; });

// Fechar modais
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.style.display = cadastroModal.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal || e.target === cadastroModal) {
    loginModal.style.display = cadastroModal.style.display = 'none';
  }
});

// Login e Cadastro (simulado)
function fazerLogin() {
  alert("Login realizado com sucesso! Bem-vinda(o) à ModaStylle ✨");
  loginModal.style.display = "none";
  document.getElementById('openLogin').style.display = "none";
  document.getElementById('openCadastro').style.display = "none";
  document.getElementById('perfilBtn').style.display = "inline";
  document.getElementById('sairBtn').style.display = "inline";
  document.getElementById('mobilePerfil').style.display = "block";
  document.getElementById('mobileSair').style.display = "block";
}

function fazerCadastro() {
  alert("Conta criada com sucesso! Agora faça login");
  cadastroModal.style.display = "none";
  loginModal.style.display = "flex";
}

// Logout
document.querySelectorAll('.logout').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  });
});