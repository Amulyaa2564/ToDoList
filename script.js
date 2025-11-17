let addBtn=document.getElementById('addButton');
let inputText=document.getElementById('inputText');
let resultContainer=document.getElementById('result-container');
let resultText=document.getElementById('resultText');
let taskList=document.getElementById('tasklist');
addBtn.onclick=function(){
    let innerDiv=document.createElement('div');
    let textValue=document.createElement('p');
    let circle=document.createElement('p');
    textValue.textContent=inputText.value;
    circle.classList.add('check')
    innerDiv.classList.add("inner_div")
    innerDiv.appendChild(circle);
    innerDiv.appendChild(textValue);
    resultContainer.appendChild(innerDiv);

    inputText.value="";
}