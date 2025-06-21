
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3zPSfUwwLnsyBOZQFccv0bwJdSgKSaj0",
  authDomain: "kfs-juniors.firebaseapp.com",
  projectId: "kfs-juniors",
  storageBucket: "kfs-juniors.appspot.com",
  messagingSenderId: "637280159347",
  appId: "1:637280159347:web:14d8259854b946fb538c06",
  measurementId: "G-K9QPQQ7VQC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
