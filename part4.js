
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