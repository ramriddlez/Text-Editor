const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // butInstall.classList.toggle('hidden', false)
    butInstall.style.visibility = 'visible';
});
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('disabled', true);

});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    console.log('👍', 'appinstalled', event)
});