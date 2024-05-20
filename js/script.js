//Evento do All Action
document.addEventListener('DOMContentLoaded', function() {
    const callToActionBtns = document.querySelectorAll('.btn-primary'); // Seleciona todos os botões com a classe 'btn-primary'
    const modal = document.querySelector('.modal-call-action');
    const overlay = document.querySelector('.overlay');
    const closeModalBtn = document.querySelector('.close');

    callToActionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modal.classList.remove('hidden'); // Remover a classe 'hidden' ao exibir o modal
            modal.classList.add('show');
            document.body.classList.add('disable-scroll'); // Adiciona a classe para desabilitar o scroll
        });
    });

    overlay.addEventListener('click', function() {
        modal.classList.add('hidden'); // Adicionar a classe 'hidden' ao fechar o modal
        modal.classList.remove('show');
        document.body.classList.remove('disable-scroll'); // Remove a classe para habilitar o scroll
    });

    closeModalBtn.addEventListener('click', function() {
        modal.classList.add('hidden'); // Adicionar a classe 'hidden' ao fechar o modal
        modal.classList.remove('show');
        document.body.classList.remove('disable-scroll'); // Remove a classe para habilitar o scroll
    });
});
// Obs: importante prestar atenção, colocar ponto quando for trabalhhar com classe
// Evento do Menu
document.addEventListener('DOMContentLoaded', function() {
    const btnMob = document.querySelector('.btn-mobile');
    const menu = document.querySelector('.menu-mob');
    const overlayD = document.querySelector('.overlay-2');
    const closeMob = document.querySelector('.close-menu');

    btnMob.addEventListener('click', function() {
        menu.classList.remove('hidden-2');
        menu.classList.add('show');
    });

    overlayD.addEventListener('click', function() {
        menu.classList.add('hidden-2');
        menu.classList.remove('show');
    });

    closeMob.addEventListener('click', function() {
        menu.classList.add('hidden-2');
        menu.classList.remove('show');
    });
});
