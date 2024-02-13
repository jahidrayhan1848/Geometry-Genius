function rectangle (){
   const rectangleArea=document.getElementById('rectangle-width');
   const width=parseFloat(rectangleArea.value);
//    console.log(width);
  const rectangleLength=document.getElementById('rectangle-length');
  const length=parseFloat(rectangleLength.value);
  
  const area= width * length;
  const result=document.getElementById('rec-value');
  result.innerText=area
}