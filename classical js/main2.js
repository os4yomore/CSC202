var x = 'Let us search this text for pius. If Pius is found, ...';
var y = x.slice(-1); //Extract from the last position.
console.log(y); // Should return the string '.'
var y = x.slice(-16, -12); //Extract from the 16th position from the rear to the 12th position from the rear 
console.log(y); //Should output the string 'Pius'
var y = x.slice(-16);// Extract the letters from position 16 from the rear 
console.log(y);//This should return 'Pius is found, ...'