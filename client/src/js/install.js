const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     if (window.deferredPrompt) {
//         // Show the install prompt
//         window.deferredPrompt.prompt();
//         // Wait for the user to respond to the prompt
//         const userChoice = await window.deferredPrompt.userChoice;
        
//         // Check if the user accepted the prompt
//         if (userChoice.outcome === 'accepted') {
//             console.log('User accepted the installation');
//         } else {
//             console.log('User dismissed the installation');
//         }
        
//         // Reset the deferredPrompt variable
//         window.deferredPrompt = null;
        
//         // Hide the button
//         butInstall.classList.toggle('hidden', true);
//     }
// });

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
    window.deferredPrompt = null;
});
