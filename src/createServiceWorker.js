export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          // eslint-disable-next-line no-param-reassign
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // A questo punto, il vecchio contenuto sarà stato eliminato e
                  // il nuovo contenuto sarà stato aggiunto alla cache.
                  // È il momento perfetto per visualizzare un "Nuovo contenuto è
                  // a disposizione; per favore aggiorna." messaggio nella tua app web.
                  console.log('New content is available; please refresh.'); // eslint-disable-line no-console
                } else {
                  // A questo punto, tutto è stato memorizzato nella cache.
                  // È il momento perfetto per mostrare a
                  // "Il contenuto è memorizzato nella cache per l'utilizzo offline." Messaggio.
                  console.log('Content is cached for offline use.'); // eslint-disable-line no-console
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
