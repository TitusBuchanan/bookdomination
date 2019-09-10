const list = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = target.parentELement;
        list.removeChild(li);
    }
})

//add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
epreventDefault();
const value = addForm.querySelector('input[type="text"]').value;
console.log(value);

//create elements 
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});