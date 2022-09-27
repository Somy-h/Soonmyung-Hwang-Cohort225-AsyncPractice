//-------------------------------
// Part 5 - Sequencing animations
//  Web Animations API : let us construct animations and control their playback with JavaScript
//  Animation interface : a single animation player and provides playback controls & timeline
//   - inherited from EventTarget interface
//   - Animation.finished : returns a Promise
// 	Element.animate() : returns Animation object
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

//-------------------------------
// Part 5 - Sequencing animations
// 1.Using callbacks
//-------------------------------

// function aliceAnimation(element, callback) {
// 		element.animate(aliceTumbling, aliceTiming).finished
// 		.then(callback);
// }

// const sequenceAnimateCallbacks = () => {
// 	try {
// 		aliceAnimation(alice1, () => {
// 			aliceAnimation(alice2, () => {
// 				aliceAnimation(alice3, () => {
// 					console.log('success');
// 				})
// 			})
// 		});
// 	} catch (error) {
// 		console.error(`Error animating Alices: ${error}`);
// 	}
// }

// sequenceAnimateCallbacks();

//-------------------------------
// Part 5 - Sequencing animations
// 2.Using promise chain
//-------------------------------

// const sequenceAnimatePromise = () => {
// 	alice1.animate(aliceTumbling, aliceTiming).finished
// 		.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
// 		.then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
// 		.catch(error => console.error(`Error animating Alices: ${error}`));
// }
// sequenceAnimatePromise();

//-------------------------------
// Part 5 - Sequencing animations
// 3.Using async and await
//-------------------------------

const sequenceAnimateAsyncAwait = async () => {
	try {
		await alice1.animate(aliceTumbling, aliceTiming).finished;
		await alice2.animate(aliceTumbling, aliceTiming).finished;
		await alice3.animate(aliceTumbling, aliceTiming).finished
	}
	catch (error) {
		console.error(`Error animating Alices: ${error}`);
	}
}
sequenceAnimateAsyncAwait();