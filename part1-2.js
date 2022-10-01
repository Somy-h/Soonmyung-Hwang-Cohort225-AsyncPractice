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