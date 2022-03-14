let insert=document.querySelector('input');
let Button=document.querySelector('button');
let content=document.querySelector('.todos');
let count=-1
Button.addEventListener('click',function(){
    count+=1;
    let paragraph=document.createElement('p');
    paragraph.innerHTML=insert.value
    paragraph.setAttribute("key",count);
    content.appendChild(paragraph);
    paragraph.addEventListener('click',function(){
        content.removeChild(paragraph);
    })
})