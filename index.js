// function takeANumber (currentLine, newPerson){
// currentLine.push(newPerson)
// return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
// }

var num=1
function takeANumber (currentLine){
return num
return num++
}

takeANumber(line) -> 1 
takeANumber(line) -> 2 
nowServing(line) -> 1 
nowServing(line) -> 2 
takeANumber(line) -> 3




function nowServing(katzDeliLine){
if (katzDeliLine.length===0){
  return "There is nobody waiting to be served!"}
  else {
    var newPerson=katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + newPerson + ".";
  }
}

function currentLine(line){
  var array=[];
  var string= "The line is currently: ";
  if (line.length===0){
    return "The line is currently empty."}
    else{
    for(var i = 0; i < line.length; i++){
              string += (i + 1) + ". " + line[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return string.slice (0,-2)
    }
}