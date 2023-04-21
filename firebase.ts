import {getApp,getApps,initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import {Firestore, getFirestore} from 'firebase/firestore'

// fire web store configuration
const firebaseConfig={    
  apiKey:process.env.apiKey,
  authDomain:process.env.authDomain,
  projectId:process.env.projectId,
  storageBucket:process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId:process.env.appId,
}

const app=getApps().length?getApp():initializeApp(firebaseConfig);
const auth=getAuth(app)
const db= getDatabase(app);
// export default app;
// const db=getFirestore(app);
export {db,auth};