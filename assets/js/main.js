const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and"; 

firstResult = text1.slice(0, 16).concat(text1.slice(22,28)  + ' and to the movie theater');
secondResult = text1.slice(0, 15).concat(' movie theater');
thridResult = text2.concat(' ' + text4 + ' ' + text1.slice(0,3) + ' are going to gym and to the movie theater');
fourthResult = text2.concat(' ' + text4 + ' ' + text1.slice(0, 3) + ' are going to gym and to the movie theater');
fifthResult = text2.concat(' ' + text1.slice(4, 15) + ' ' +  text1.slice(22, 28) + ' and to the movie theater');

document.write(firstResult + "<br>" + secondResult + "<br>" + thridResult + "<br>" + fourthResult + "<br>" + fifthResult);