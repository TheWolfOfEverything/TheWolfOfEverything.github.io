// 1. Create a helper function that returns a Promise
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function delayedLoop() {
  for (let i = 0; i < 509000000000000000000000; i++) {
    alert("hello kitten");
    
    // 2. Pause the loop for 1 second (1000ms)
    await sleep(5000); 
  }
  console.log("Loop finished");
}

delayedLoop();
