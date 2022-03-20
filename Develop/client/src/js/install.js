const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    window.prompt('Installed!');
});



window.addEventListener('appinstalled', (event) => {
    window.prompt('Successfully installed!');
    console.log('👍', 'appinstalled', event);
});
