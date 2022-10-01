
//-------------------------------
// Part 3 - Implementing a Promise Based API
//-------------------------------
// const output = document.querySelector('#output');
// const button = document.querySelector('#set-alarm');

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = 'Wake up!';
//   }, 1000);
// }

// button.addEventListener('click', setAlarm);


//-------------------------------
// Part 3
// promise-based alarm API, called alarm()
// alarm() : return a Promise using Promise() constructor
// Promise(executor) constructor:
//    - executor: takes two arguments(resolve, reject)
//    - succeeds, call the resolve
//    - fails, call the reject
//    - throws an error, reject is called automatically
// alarm().then().catch()
//-------------------------------
// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');


// function alarm(person, delay) {
// 	return new Promise((resolve, reject) => {
// 		if (delay < 0) {
// 			throw new Error('Alarm delay must not be negative');
// 		}

// 		setTimeout(() => {
// 			resolve(`Wake up, ${person}`);
// 		}, delay);
// 	});
// }



// button.addEventListener('click', () => {
// 	alarm(name.value, delay.value)
// 		.then((message) => output.textContent = message)
// 		.catch((error) => output.textContent = `Couldn't set alarm: ${error}`);
// });


//-------------------------------
// Part 3
// Using async and await with the alarm() API
// Don't forget to use async function
//-------------------------------
// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');


// function alarm(person, delay) {
// 	return new Promise((resolve, reject) => {
// 		if (delay < 0) {
// 			throw new Error('Alarm delay must not be negative');
// 		}

// 		setTimeout(() => {
// 			resolve(`Wake up, ${person}`);
// 		}, delay);
// 	});
// }


// button.addEventListener('click', async () => {
// 	// alarm(name.value, delay.value)
// 	// 	.then((message) => output.textContent = message)
// 	// 	.catch((error) => output.textContent = `Couldn't set alarm: ${error}`);

// 	try {
// 		const message = await alarm(name.value, delay.value);
// 		output.textContent = message;
// 	}
// 	catch (error) {
// 		output.textContent = `Couldn't set alarm: ${error}`;
// 	}

// });

