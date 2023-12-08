var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates,color,count){
  if(count<=0) return 'Number cannot be zero/negative'

  for(let i=0; i<count; i++){
    chocolates.unshift(color)
  }
  return chocolates
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates,number){
  
  if(number<=0) return'Number cannot be zero/negative'
  if(number>chocolates.length) return 'Insufficient chocolates in the dispenser'

  let result =[]

  for(let i=0; i<number; i++){
    result.push(chocolates.shift())
  }
    return result
  }


//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates,number){
  if(number<=0) return 'Number cannot be zero/negative'
  if(number>chocolates.length) return 'Insufficient chocolates in the dispenser'
  let result = []
  for(let i=0; i<number; i++){
    result.push(chocolates.pop())
  }
  return result
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates,number,color){
  if(number<=0) return 'Number cannot be zero/negative'
  if(number>chocolates.length) return 'Insufficient chocolates in the dispenser'
  let result =[]
  for(let i=0; i<number; i++){
  result.push(chocolates.pop())
}
return result
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
  let obj ={}

  for(let i=0; i<chocolates.length; i++){
    if(obj[chocolates[i]]==undefined){
      obj[chocolates[i]]=1
    }
    else{
      obj[chocolates[i]]++
    }
  }
  return Object.values(obj)
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
  let obj={}

  for(let i=0;i<chocolates.length;i++){
    if(obj[chocolates[i]]==undefined){
      obj[chocolates[i]]=1
    }else{
      obj[chocolates[i]]++
    }
  }
  const allColors = [];

  for(const color in obj){
    const count = obj[color];
    for(let i=0; i<count; i++){
      allColors.push(color);
    }
  }
  allColors.sort((a,b)=>{
    if(obj[b]===obj[a]){
      return a.localeCompare(b);
    }

    return obj[b] - obj[a];
  })

  return allColors
}



//Progression 7: Change z chocolates of x color to y color

const helperToChangeChocolateColor=function(chocolates,color1,color2){
  for(let i=0; i<chocolates.length; i++){
    if(chocolates[i]==color1){
      chocolates[i]=color2
    }
  }
  return chocolates
}


function changeChocolateColor(chocolates,number,color1,color2){
  if(number<=0) return 'Number cannot be zero/negative'
  if(color1==color2) return `Can't replace the same chocolates`
  return helperToChangeChocolateColor(chocolates,color1,color2)
}


//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color1,color2){
  if(color1==color2) return `Can't replace the same chocolates`
  let changedColor = helperToChangeChocolateColor(chocolates,color1,color2)
  let counter=0
  changedColor.forEach((chocolates)=>{
    if(chocolates==color2){
      counter++
    }
  })
  return [counter,changedColor]
}

//Challenge 1: Remove one chocolate of x color from the top
const removeChocolateOfColor = (chocolates,color) =>{
  let index= 0
  for (let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      index = i
      break
    }
  }
  chocolates.splice(index,1)
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const numberOfRainbowChocolates = (chocolates) =>{
  const store = {}
  
  chocolates.forEach((chocolate)=>{
    if(chocolate in store){store[chocolate]+=1}
    else{store[chocolate]=1}
  })

  let count = []
  for(color in store){count.push(store[color])}

  let rainbowChocolates = 0
  count.forEach((countedChocolate)=>{
    if(countedChocolate%3==0){rainbowChocolates+= countedChocolate/3}
  })
  return rainbowChocolates
}

const dispenseRainbowChocolates = (chocolates) => {return numberOfRainbowChocolates(chocolates)}



