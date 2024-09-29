function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
  }
  

  console.log(distanceFromHqInBlocks(50));
 
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Convert blocks to feet
  }
  
  console.log(distanceFromHqInFeet(38)); 


  function distanceTravelledInFeet(start, destination) {
    const startBlocks = distanceFromHqInBlocks(start);
    const destinationBlocks = distanceFromHqInBlocks(destination);
    const distanceInBlocks = Math.abs(destinationBlocks - startBlocks);
    return distanceInBlocks * 264; // Convert blocks to feet
  }
  console.log(distanceTravelledInFeet(38, 50));

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const chargeableDistance = distanceInFeet - 400; // Exclude first 400 feet
      return chargeableDistance * 0.02; // 2 cents per foot
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }