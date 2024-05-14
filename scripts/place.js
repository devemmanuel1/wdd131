const displayList = (data, block) => {
    for (var i = 0; i<data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${data[i][0]}:</strong> <span>${data[i][1]}</span>`;    
        if(li) {
            block.appendChild(li);
        }
    }
}

const calculateWindChill = () => {
    return '';
}