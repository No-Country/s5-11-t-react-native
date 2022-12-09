const {initializeApp} = require('firebase/app')
const {getStorage} = require('firebase/storage')
const dotenv = require("dotenv");
dotenv.config( {path:"./config.env"})


const firebaseConfig= {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messaginSenderID: process.env.FIREBASE_MESSAGIN,
    appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app, process.env.FIREBASE_API_BUCKET_URL)

module.exports = { storage }