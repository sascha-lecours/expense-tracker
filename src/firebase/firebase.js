import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECt_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // update on child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // update on child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // update on child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.on('value', (snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val(),
// 			});
// 		});

// 		console.log(expenses);
// 	});

// database.ref('expenses').push({
// 	description: 'Cat food',
// 	note: 'For chunky monkeys',
// 	amount: 12350,
// 	createdAt: 0,
// });

// database.ref('expenses').push({
// 	description: 'Soul Calibur',
// 	note: 'A tale of souls and swords',
// 	amount: 8000,
// 	createdAt: 2,
// });

// database.ref('expenses').push({
// 	description: 'Siobhan gifts',
// 	note: 'For my baby',
// 	amount: 80000,
// 	createdAt: -2,
// });


// database.ref('notes/-LQ1VRuiZzCFDp8bLESo').remove();
// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching.', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().set({
// 	name: 'Andrew Mead',
// 	age: 26,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Google',
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States',
// 	}

// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'location/city': 'Seattle',
// 	'job/company': 'Amazon',
// });

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
// 	height: '187',
// 	weight: '236'
// }).then(() => {
// 	console.log('Attributes changed');
// }).catch((e) => {
// 	console.log('Attributes failed to be set.', e);
// });

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('isSingle field deleted');
// 	}).catch((e) => {
// 		console.log('Error: could not delete isSingle field.', e);
// 	});
