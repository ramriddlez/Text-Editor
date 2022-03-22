const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     butInstall.style.visibility = 'visible';

//     butInstall.addEventListener('click', async () => {
//         event.prompt();
//         butInstall.setAttribute('disabled', true);
        
//     });
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {

//     console.log('👍', 'appinstalled', event)
// });
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event
    butInstall.classList.toggle('hidden', false) 
});
    butInstall.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt
        if (!promptEvent) {
            return
        } 
        promptEvent.prompt();
        butInstall.classList.toggle('hidden', true) 
        
    });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
    console.log('👍', 'appinstalled', event)
});