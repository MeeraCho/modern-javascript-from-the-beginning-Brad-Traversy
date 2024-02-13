// loop through an object's values with key and value 
const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'orange',
    color4 : 'green',
};

for (const key in colorObj){
    console.log(key, colorObj[key]);
}
// color1 red
// color2 blue
// color3 orange
// color4 green


// loop over array 
const colorArr = ['red', 'green', 'blue', 'yellow'];
for(const key in colorArr){
    console.log(colorArr[key]);
}
// red
// green
// blue
// yellow
