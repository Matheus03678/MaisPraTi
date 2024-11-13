const listItems = document.querySelector(".wrap-list-items")
const input     = document.querySelector('#input');
const addBtn    = document.querySelector('#add-btn');

const indexData = '1'

window.onload = function handleLoadWindow(){
    let data = handleGetItemLocalStorage(indexData);
    // console.log(data)
    if (!data) {
        handleSetItemLocalStorage(indexData, JSON.stringify(data));
    } else {
        // data = JSON.parse(data);
        handleLoadData()
    }

}

const handleGetItemLocalStorage = (index) => {
    return JSON.parse(localStorage.getItem(index)) || [];
}

const handleSetItemLocalStorage = ( position, value) => {
    localStorage.setItem(position, value)
}

const handleRemoveItem = (event) => {
    // REMOVE SOMENTE NO HTML
    // const div = event.parentElement;
    // listItems.removeChild(div.parentElement)
    const div   = event.parentElement;
    const li    = div.parentElement;
    const data  = handleGetItemLocalStorage(indexData)

    if(confirm("Deseja realmente excluir este item?")){
        const index   = li.getAttribute('data-key');
        const newData = data.filter(ele => {
            return ele.id !== Number(index)
        })
        
        console.log(newData)
        handleSetItemLocalStorage(indexData, JSON.stringify(newData))
    }
    handleLoadData();
    return
    
}

const handleEditItem = (event)=> {
    const div   = event.parentElement;
    const li    = div.parentElement;
    const p     = div.previousElementSibling; 
    const newDescriptio = prompt("Informe um novo valor", p.innerText)
    // p.innerText = newDescriptio;

    const data = handleGetItemLocalStorage(indexData);
    const index    = li.getAttribute('data-key');
    const newData = data.map(ele => {
        if(ele.id === Number(index)){
            ele.value = newDescriptio
        }
        return ele
    })

    handleSetItemLocalStorage(indexData, JSON.stringify(newData))
    handleLoadData();

}

const handleLoadData = () => {
        listItems.innerHTML = ""

        const data = handleGetItemLocalStorage(indexData);
        data.forEach(ele => {
        
            html = 
            `
            <li data-key=${ele.id} class="wrap-item">
                <input type="checkbox" ${ele.checked ? "checked" : ""}>
                <p class="item" value="${ele.value}">${ele.value}</p>
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
        })
        return
}
    
const handleClickBtn = () => {

    const data = handleGetItemLocalStorage(indexData);

    if(input.value !== ''){
        const obj = { 
            'id': data.length,
            'value':input.value,
            'checked':false
         }

         data.push(obj)
        
         handleSetItemLocalStorage(indexData, JSON.stringify(data))
         handleLoadData(data)


    
         return
    }
    
    return alert("Campo vazio, informa alguma coisa para ser adicionado.")

}

addBtn.addEventListener('click', handleClickBtn);