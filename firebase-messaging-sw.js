// Turno notifications: shows messages that arrive while Turno is closed.
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDWwNvpSYH6KSOSnDmc8FIH9ZrGN1tcIX4",
  authDomain: "turno-b4815.firebaseapp.com",
  projectId: "turno-b4815",
  storageBucket: "turno-b4815.firebasestorage.app",
  messagingSenderId: "191611115730",
  appId: "1:191611115730:web:c37492bc8d42dc8fef750b"
});
firebase.messaging();

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.FCM_MSG && event.notification.data.FCM_MSG.notification && event.notification.data.FCM_MSG.notification.click_action) || "/";
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
    for (const c of list) { if ("focus" in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
