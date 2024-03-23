
function getgrade(studentMarks){//function name is getgrade
if (studentMarks>79){//if the mark is above 79 its an A
   return("A");
}else if(studentMarks>=60){//if its above 60 or equals 60 its a B
    return("B");
}else if(studentMarks>=49 ){//if its 49 or above its c 
    return("C");
}else if(studentMarks>=40){//if its 40 or above we give a D
    return("D");
}else{
    return("E");//if it is below the 40 its E
}
}
console.log(getgrade(80))//output
console.log(getgrade(49))