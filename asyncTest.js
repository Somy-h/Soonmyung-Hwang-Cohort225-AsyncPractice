//-------------------------------
// Asynchronous code 
// 1. callback
//    - cause callback hell(pyramid of doom)
// 	  - hard to handle errors
//    - modern asynchronous APIs don't use callbacks
// 2. Promise
//    - foundation of asynchronous programming in modern JavaScript.
//    - is an object returned by an asynchronous function
//    - provides methods to handle the success or failure of the operation
//    - promise chain
// 3. async/await **
//    - simpler way to work with asynchronous promise-based code
//-------------------------------

//-------------------------------
// Asynchronous JavaScript
// MDN :https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
//-------------------------------

//-------------------------------
// fetch() API
// : the modern, promise-based replacement for XMLHttpRequest
//-------------------------------

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");


//-------------------------------
// Chaining promises
// fetch() & json() : asynchronous function, returns a promise
// then() : Promise object provides then() method to handle success
//-------------------------------

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

//-------------------------------
// Promise using simple arrow function
//-------------------------------
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name)
//   });

//-------------------------------
// Promise chain with error
// Before trying to read it, check the status code in the response
//-------------------------------
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data[0].name)
//   });

//-------------------------------
// Catching errors
// catch() : Promise object provides catch() method to handle failure
//-------------------------------
// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data[0].name)
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

//-------------------------------
// Promise terminology
// * pending: the promise has been created
// * fulfilled / rejected
//    - fulfilled: the asynchronous function has succeeded.
//                 then() handler is called
//    - rejected: the asynchronous function has failed.
//                 catch() handler is called
// * settled: fulfilled or rejected
// * resolved: either settled or following another promise 
//              that will determine what happens to this promise
// * unresolved: not resolved
//-------------------------------

//-------------------------------
// Combining multiple promises 
// Promise.all() : takes an array of promises and returns a single promise
//-------------------------------
// all promises are fulfilled

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.log("error");
//     console.error(`Failed to fetch: ${error}`)
//   });


//-------------------------------
// any of them fail, catch() handler runs
//-------------------------------
// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });


//-------------------------------
// Promise.any() :
// any of them fulfilled, then() handler runs
//-------------------------------
// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });


//-------------------------------
// Async and await
// : simpler way to work with asynchronous promise-based code.
// async : async function returns a promise
// await(): makes code wait at that point until the promise is settled
//        : only use it inside an async function, unless your code is in a module
//-------------------------------

// async function fetchProducts() {
//   try {
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data[0].name);
//   }
//   catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();


//-------------------------------
// Async and await
// async function returns a promise
//-------------------------------

// async function fetchProducts() {
//   try {
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   }
//   catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts()
// .then((data) => console.log(data[0].name));




//-------------------------------
// Web API
//-------------------------------
// const getCountriesInfo = async () => {
	// 	const api_url = "https://api.first.org/data/v1/countries";

		
	// 		const response = await fetch(api_url);
	// 		var data = await response.json();
	// 		console.log(data);
	// }

	// const getCitiesInfo = async (country) => {
	// 	const api_url = "https://api.first.org/data/v1/countries";


	// 	const response = await fetch(api_url);
	// 	var data = await response.json();
	// 	console.log(data);
	// }
	
	//getCountriesInfo();

//-------------------------------
// Udemy: Error handling with fetch()
//-------------------------------

// function handleErrors(res) {
//   if (!res.ok) throw new Error("HTTP ERROR: " + res.error);
//   return res;
// }

// fetch('https://sdevcamper.io/api/v1/bootcamps/34343')
// .then(res => res.json())
// .then(handleErrors)
// .then(res => console.log(res.data))
// .catch(err => console.log("ERROR: " + err.message));


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


//-------------------------------
// Part 4 - Introducing workers
// Workers: give you the ability to run some tasks in a different thread
//   - Workers and the main code run in completely separate worlds
//     so, both threads cannot access to the same variables
//     only interact by sending each other messages
// *** workers can't access the DOM ***
// 3 kinds of workers
//   - dedicated workers
//   - shared workers
//      : can be shared by several different scripts running in different windows
//   - service workers
//      : caching resources so that web applications can work when the user is offline.
//-------------------------------


//-------------------------------
// Part 4 - Implementing dedicated worker (gnerate Primes)
// - communicate with messages
//   work.postMessage() ***
//   work.addEventListener('message', {...message.data...}) ***
//-------------------------------
// Create a new worker, giving it the code in "generate.js"
// const worker = new Worker('./generate.js');

// document.querySelector('#generate').addEventListener('click', () => {
//   const quota = document.querySelector('#quota').value;
//   worker.postMessage({
//     command: 'generate',
//     quota,
//   });
// });

// worker.addEventListener('message', (message) => {
//   document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
// });

// document.querySelector('#reload').addEventListener('click', () => {
//   document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
//   document.location.reload();
// });


//-------------------------------
// Part 5 - Sequencing animations
// - Web Animations API : let us construct animations and control their playback with JavaScript
// - element.animate()
//-------------------------------
const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch(error => console.error(`Error animating Alices: ${error}`));


