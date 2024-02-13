function ParallelogramArea(){
     const base=getInputValueById('Parallelogram-base');
     const height=getInputValueById('parallelogram-height')
     const result=base *height;
    //  console.log(result);
    const area=parallelogramResultShow('para-value',result)

    
  
}
  function getInputValueById(inputId){
    const inputValue =document.getElementById(inputId);
    const value=parseFloat(inputValue.value)
    return value;
  }
  function parallelogramResultShow(showId ,area){
    const element=document.getElementById(showId);
    element.innerText=area;
    return element;

  }