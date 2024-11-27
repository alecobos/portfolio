const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

document.getElementById('whatsapp-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://api.whatsapp.com/send?phone=5493875375650'; 
    link.target = '_blank';
    link.click();
});

document.getElementById('git-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/alecobos'; 
    link.target = '_blank';
    link.click();
});

document.getElementById('linkedin-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/alejandro-cobos-09056526b/'; 
    link.target = '_blank';
    link.click();
});

document.getElementById('download-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './assets/Resume-Cobos.pdf'; 
    link.target = '_blank';
    link.click();
});