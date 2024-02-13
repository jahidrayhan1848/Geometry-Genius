function triangleArea(){
    // triangle base value 
    const triangleBase=document.getElementById('triangle-base')
    const triangleValue=parseFloat(triangleBase.value)
    console.log(triangleValue);
    // triangle height value ///
    const triangleHeight=document.getElementById('triangle-heigth');
    const triangleHeightValue=parseFloat(triangleHeight.value);
    console.log(triangleHeightValue);

    // calculate area value 
    const area= 0.5 * triangleValue * triangleHeightValue;
    console.log('area value :', area);
    // display area value 
    const value =document.getElementById('tri-value');
    value.innerText=area;
    
}