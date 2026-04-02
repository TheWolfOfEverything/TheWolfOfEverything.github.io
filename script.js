// Reusable delay function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function delayedLoop() {
  console.log("Waiting 3 seconds...");
  
  // 1. Initial delay before loop starts
  await sleep(3000); 

  for (let i = 0; i < 500000000000000000000000000000000000000000000000000000000000000000000000000000; i++) {
    alert("hewwwooo kittennnn. Welcome To My PlayGround");
    
    // Optional: Add a delay *between* iterations here if needed
    // await sleep(1000); 
  }
}

delayedLoop();
