const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let total = 0;
let totalBatteries = batteryBatches.reduce(function(accumulator, number){
  return total += number
},0)