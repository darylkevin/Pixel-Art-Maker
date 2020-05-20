const color = document.querySelector('#colorPicker');
color.addEventListener('change', function(){
    console.log(color.value);
})

const height = document.querySelector('#inputHeight');
height.addEventListener('change', function(){
    console.log(height.value);
})

const width = document.querySelector('#inputWidth');
width.addEventListener('change', function(){
    console.log(width.value);
})

function makeGrid() {
    document.getElementById('pixelCanvas').innerHTML = "";
    let body = document.getElementById('pixelCanvas');
    let gridBody = document.createElement('tbody');

    for ( let y = 0; y < height.value; y++){
        let column = document.createElement('tr');
        for (let x = 0; x < width.value; x++){
            let row = document.createElement('td');
            column.appendChild(row);
        }

        gridBody.appendChild(column);
    }

    gridBody.addEventListener('click',function (){
        let td = event.target.closest('td');
        td.style.backgroundColor = color.value;
        console.log('Box filled with ' + color.value);
    });

    body.appendChild(gridBody);
}
