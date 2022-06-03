const list = document.querySelector('ul');
const addBtn = document.getElementById('add');

console.log(list);


const addFormList = document.getElementById('add-book')
console.log(addFormList)

const hideBox = document.getElementById('hide');
console.log(hideBox);

const searchBox = document.forms['search-books'].querySelector('input');
console.log(searchBox);


// Creating New Elements
function createNewElement() {
    const value = addFormList.querySelector('input[type="text"]').value;  //To grab what the user types in the 'addform'
    addFormList.querySelector('input[type="text"]').value = ''; //to clear the addform input



    var li = document.createElement('li');
    list.appendChild(li)



    var name = document.createElement('span')
    name.classList.add('name');
    name.textContent = value;
    li.appendChild(name);
    



    var deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'delete';
    li.appendChild(deleteBtn);


    // const value = addFormList.querySelector('input[type="text"]').value;  //To grab what the user types in the 'addform'
    // addFormList.querySelector('input[type="text"]').value = ''; //to clear the addform input



}

function addList(event) {
    event.preventDefault();
    createNewElement();

}



function deleteBook(element) {
    if (element.target.className === 'delete') {
        element.target.parentElement.remove()

    }
}

function checkbox() {
    if (hideBox.checked)//to check if the check box has been checked
    {
        list.style.display = "none"; //To change the display hiding the ul
        console.log(checkbox)
    }
    else {
        list.style.display = "initial";//To show the list
    }

}

// Search Filter
function search(el) {
    el.preventDefault();

    const searchBox = document.forms['search-books'].querySelector('input'); //To get reference to the "searchbox"
    const term= el.target.value.toLowerCase(); //targeting the values on the search box

    console.log(term)

    const books=list.getElementsByTagName('li');  //For the list items...In order to circle round them
    console.log(books)
 //Changing the HTMLCollection to ann Array
    Array.from(books).forEach(function(book){
        // console.log(book)

        const title=book.firstElementChild.textContent;
        console.log(title)
    

        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display='';

         }else{
             book.style.display='none';
         }
     })

     searchBox.forEach(function(book){

         console.log(book)
     })

  
}


list.addEventListener('click', deleteBook);
addFormList.addEventListener('submit', addList)
hideBox.addEventListener('change', checkbox)
searchBox.addEventListener('input',search)
