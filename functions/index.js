const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore")
const firebaseConfig = {
        apiKey: "AIzaSyB-rwxK-0S-GG0bVLffPa01caPfRv6VQnk",
        authDomain: "dbdtracker.firebaseapp.com",
        projectId: "dbdtracker",
        storageBucket: "dbdtracker.appspot.com",
        messagingSenderId: "167066146805",
        appId: "1:167066146805:web:1dbc2d32e58165859bb2bc",
        measurementId: "G-TR7R7E24R8"
};

const app = admin.initializeApp(firebaseConfig);

exports.getUser = functions.https.onRequest(async (req, res) => {
        await getAuth(app).getUserByEmail(req.body.email).then((user) => {
                res.json({ uid: user.uid, displayName: user.displayName });
        });
})
exports.getKillerMatches = functions.https.onRequest(async (req, res) => {
        let data = [];
        const snapshot = await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("KillerMatches").orderBy("createdAt", "desc").get();
        snapshot.forEach(doc => {
                data.push(doc.data())
        })
        res.json(data)
})

exports.getSurvivorMatches = functions.https.onRequest(async (req, res) => {
        let data = [];
        const snapshot = await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("SurvivorMatches").orderBy("createdAt", "desc").get();
        snapshot.forEach(doc => {
                data.push(doc.data())
        })
        res.json(data)
})

exports.uploadSurvivorMatches = functions.https.onRequest(async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin)
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")
        try {
                await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("SurvivorMatches").add({
                        map: req.body.map,
                        killer: req.body.killer,
                        survivor: req.body.survivor,
                        matchResult: req.body.matchResult,
                        createdAt: new Date().getTime(),
                        id: null
                }).then(async (snapshot) => {
                        await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("SurvivorMatches").doc(snapshot.id).update({ id: snapshot.id });
                })
        } catch (error) {
                console.log(error)
        }
        res.status(200).send("Done")
})

exports.uploadKillerMatches = functions.https.onRequest(async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin)
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")
        try {
                let matchResult;
                switch (req.body.numberOfKills) {
                        case "0":
                                matchResult = "The Entity Hungers..."
                                break;
                        case "1":
                                matchResult = "Brutal Killer"
                                break;
                        case "2":
                                matchResult = "Brutal Killer"
                                break;
                        case "3":
                                matchResult = "Ruthless Killer"
                                break;
                        case "4":
                                matchResult = "Merciless Killer"
                                break;
                }
                await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("KillerMatches").add({
                        map: req.body.map,
                        killer: req.body.killer,
                        matchResult: matchResult,
                        numberOfKills: req.body.numberOfKills,
                        createdAt: new Date().getTime(),
                        id: null
                }).then(async (snapshot) => {
                        await getFirestore(app).collection("UserMatches").doc(req.body.user).collection("KillerMatches").doc(snapshot.id).update({ id: snapshot.id });
                })
        } catch (error) {
                console.log(error);
        }
        res.status(200).send("Done")
})

