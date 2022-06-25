const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');

function Deleted(id) {
    const item = list.findIndex(t => t.id === id)
    list.splice(item, 1)
    render(item)
}

function Change(id) {
    const item = list.findIndex(t => t.id === id)
    const text = prompt('Измененный текст: ')
    list[item].text = text
    render()
}

function render() {
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock')
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";

        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);

        deleteButton.onclick = () => {
            Deleted(list[i].id).remove()
        }

        changeButton.onclick = () => {
            Change(list[i].id)
        }
    }

    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    form.append(mainDiv)
}

addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    if (input.value === '') {
        return false
    } else {
        input.value = ''
        list.push(obj)
        render();
    }
};