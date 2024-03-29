/// <reference types="vite/client" />

interface ImportMetaEnv {
  MODE: string;
  VITE_SERVICE_NAME: string;
  VITE_FIREBASE_APIKEY: string;
  VITE_FIREBASE_AUTHDOMAIN: string;
  VITE_FIREBASE_PROJECTID: string;
  VITE_FIREBASE_STORAGEBUCKET: string;
  VITE_FIREBASE_MESSAGINGSENDERID: string;
  VITE_FIREBASE_APPID: string;
  VITE_USE_FIREBASE_EMULATOR: string;
  VITE_API_ORIGIN: string;
  VITE_DATABASE_URL: string;
}
