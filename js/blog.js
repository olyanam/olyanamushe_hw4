function showTextArea(){
    document.getElementById('textArea').style.visibility="visible"; 
    document.getElementById('submit').style.visibility="visible"; 
 }

function _(id){
    return document.getElementById(id)
}

function commentText(){
    document.getElementById("textArea").style.visibility="hidden";
    let inputText=_('inputText').value
    _('output').innerHTML += `<div>${inputText}</div>`
}

function textTyped(){
    var inputText = document.getElementById("inputText").value;
    var submitBtn = document.getElementById("secondSubmit");  
    if(inputText.length == 0) {
        submitBtn.disabled = true;
    }else {
        submitBtn.disabled = false;
    }
}

function replyText(){
    document.getElementById('textArea2').style.visibility="visible"; 
 }

function commentText2(){
    document.getElementById("textArea2").style.visibility="hidden";
    let inputText2=_('inputText2').value
    _('output2').innerHTML += `<div>${inputText2}</div>`
}









 