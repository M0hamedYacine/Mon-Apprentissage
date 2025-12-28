const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");

const listContainer = document.getElementById("List-container");

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

inputBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("Vous devriez entrer une tache");
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.classList.add ( 
            'relative', 'py-3', 'pl-12', 'pr-2', 'cursor-pointer',
            'before:content-[""]', 'before:absolute', 'before:left-2', 'before:top-1/2', 'before:-translate-y-1/2',
            'before:w-7', 'before:h-7', 'before:rounded-full',
            'before:bg-[url("/2_toDoListeApp/images/unchecked.png")]', 
            'before:bg-cover', 'before:bg-center'
        )

        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.classList.add(
            'absolute', 
            'right-2',       
            'top-1/2',        
            '-translate-y-1/2', 
            'w-[40px]',       
            'h-[40px]', 
            'flex',         
            'items-center',  
            'justify-center', 
            'hover:bg-gray-200', 
            'rounded-full',   
            'transition-colors'
        );

        li.appendChild(span);
        inputBox.value = '';
        saveData ();
    }
});

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('line-through')) {
            e.target.classList.remove('line-through', 'before:bg-[url("/2_toDoListeApp/images/checked.png")]');
            e.target.classList.add('before:bg-[url("/2_toDoListeApp/images/unchecked.png")]');
        } else{
            e.target.classList.add('line-through', 'before:bg-[url("/2_toDoListeApp/images/checked.png")]');
            e.target.classList.remove('before:bg-[url("/2_toDoListeApp/images/unchecked.png")]');
        }
        saveData ();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData ();
    }
}, false);



function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showTask ();
