// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, driverName){
  const matchingDrivers = drivers.filter(d => d.toLowerCase() === driverName.toLowerCase() );
  return matchingDrivers;
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, q){
  const matchingDrivers = drivers.filter(startSame(q));
  return matchingDrivers;
}

function startSame(q){
  return function(driverName){
    const qLength = q.length;
    const nameFragment = driverName.slice(0,qLength);
    return nameFragment === q;
  }
}
// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, q){
  const matchingDrivers = drivers.filter(nameMatch(q));
  return matchingDrivers;
}

function nameMatch(q){
  return function(driver){
    return q === driver.name;
  }
}