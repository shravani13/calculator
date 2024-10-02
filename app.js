let button=document.getElementById('output');
function insert(num){
    // console.log(num, typeof num)    
    button.innerHTML+=num;
}
function remove(){
    let text=button.innerHTML;
    // console.log(typeof text)
    // console.log(text.length)
    // for (let char of text){
    //     console.log(char);
    // }
    //console.log(text.substring(0,text.length-1))
    button.innerHTML=text.substring(0,text.length-1)
}
function clean(){
    console.log("button clicked")
    button.innerHTML='';
}
function result(){
    let val=button.innerHTML;
    val=val.replaceAll("x","*");
    val=val.replaceAll("^","**")
    let output =eval(val);
    button.innerHTML=output;
}