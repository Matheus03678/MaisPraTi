const listItems = document.querySelector(".wrap-list-items")
const input     = document.querySelector('#input');
const addBtn    = document.querySelector('#add-btn');

const handleRemoveItem = (event) => {
    const div = event.parentElement;
    listItems.removeChild(div.parentElement)
}

const handleEditItem = (event)=> {
    const div = event.parentElement;
    const p = div.previousElementSibling; 
    const newValueDescriptioItem = prompt("Informe um novo valor", p.innerText)
    p.innerText = newValueDescriptioItem;
}
    
const handleClickBtn = () => {

    if(input.value !== ''){
        const html = 
        `
        <li class="wrap-item">
            <input type="checkbox">
            <p class="item" value="${input.value}">${input.value}</p>
            <div>
                <button onclick="handleRemoveItem(this)"id="remove-btn">
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button onclick="handleEditItem(this)"id="edit-btn">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
        </li>
        `
        
        listItems.innerHTML += html;
        
        input.value = "";
        return
    }
    
    return alert("Campo vazio, informa alguma coisa para ser adicionado.")

}

addBtn.addEventListener('click', handleClickBtn);