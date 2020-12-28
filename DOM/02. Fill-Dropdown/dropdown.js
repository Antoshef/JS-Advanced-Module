function addItem() {
    
    let name = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let result = document.createElement('option');
    result.textContent = name;
    result.value = value;
    document.getElementById('menu').appendChild(result);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}