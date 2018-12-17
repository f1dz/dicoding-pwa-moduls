if (!("serviceWorker" in navigator)) {
  console.error("ServiceWorker: Browser tidak mendukung");
} else {
  navigator.serviceWorker
    .register("/sw.js")
    .then(registration => {
      console.log("ServiceWorker: Pendaftaran berhasil. Scope: " + registration.scope);
    })
    .catch(error => {
      console.error("ServiceWorker: Pendaftaran gagal. Error: " + error);
    })
}