const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navWrapper = document.querySelector('.navWrapper');

navWrapper.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');
});

