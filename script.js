/* 
This is a baseball team/quote generator! Every time it is used, it will generate a random quote!
*/
const teams = ['Mets', 'Braves', 'Nationals', 'Marlins', 'Phillies'];
const hits = ['single', 'double', 'triple', 'homerun', 'groundrule double'];
const positions = ['pitcher', 'catcher', 'first baseman', 'second baseman', 'third baseman', 
'shortstop', 'left fielder', 'right fielder', 'center fielder'];
const outs = ['flyout', 'strikeout', 'double play'];

// Returns a random index from array
const getRandIndex = array => Math.floor(Math.random() * array.length);

let teamIndex = getRandIndex(teams);
let positionIndex = getRandIndex(positions);
let hitIndex = getRandIndex(hits);
let outIndex = getRandIndex(outs)

// Return three random quotes to the user
console.log(`Your team is the ${teams[teamIndex]}\n 
The ${positions[positionIndex]} will hit a ${hits[hitIndex]}\n 
Don't get a ${outs[outIndex]}!`);

