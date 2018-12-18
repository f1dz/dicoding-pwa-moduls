self.addEventListener('notificationclick', event => {
  console.log('Notif action');
  if(!event.action) {
    console.log('Notification click.');
    return;
  }

  switch (event.action) {
    case 'yes-action':
      console.log('Pengguna memilih Yes');
      clients.openWindow('https://google.com')
      break;
    case 'no-action':
      console.log('Pengguna memilih No');
      break;
    default:
      console.log(`Action yang dipilih tidak dikenal: ${event.action}`);
      break;
  }
})