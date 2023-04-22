import {getApp,getApps,initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database'

// fire web store configuration
const firebaseConfig={    
  apiKey:process.env.NEXT_PUBLIC_apiKey,
  authDomain:process.env.NEXT_PUBLIC_authDomain,
  databaseURL:process.env.NEXT_PUBLIC_databaseURL,
  projectId:process.env.NEXT_PUBLIC_projectId,
  storageBucket:process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId:process.env.NEXT_PUBLIC_messagingSenderId,
  appId:process.env.NEXT_PUBLIC_appId,
}

const app=getApps().length?getApp():initializeApp(firebaseConfig);
const db= getDatabase(app);
export {db};