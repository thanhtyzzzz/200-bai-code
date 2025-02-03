
function addNode() {
    const content = document.getElementById('nodeContent').value;
    const position = parseInt(document.getElementById('nodePosition').value);
    const nodeList = document.getElementById('nodeList');

    if (!content) {
        alert('Vui lòng nhập nội dung!');
        return;
    }

    const newNode = document.createElement('li');
    newNode.textContent = content;

    if (!isNaN(position) && position >= 0 && position <= nodeList.children.length) {
        nodeList.insertBefore(newNode, nodeList.children[position]);
    } else {
        nodeList.appendChild(newNode);
    }

    document.getElementById('nodeContent').value = '';
    document.getElementById('nodePosition').value = '';
}

function removeNode() {
    const position = parseInt(document.getElementById('removePosition').value);
    const nodeList = document.getElementById('nodeList');

    if (!isNaN(position) && position >= 0 && position < nodeList.children.length) {
        nodeList.removeChild(nodeList.children[position]);
    } else {
        alert('Vị trí không hợp lệ!');
    }

    document.getElementById('removePosition').value = '';
}

function editNode() {
    const content = document.getElementById('editContent').value;
    const position = parseInt(document.getElementById('editPosition').value);
    const nodeList = document.getElementById('nodeList');

    if (!content) {
        alert('Vui lòng nhập nội dung!');
        return;
    }

    if (!isNaN(position) && position >= 0 && position < nodeList.children.length) {
        nodeList.children[position].textContent = content;
    } else {
        alert('Vị trí không hợp lệ!');
    }

    document.getElementById('editContent').value = '';
    document.getElementById('editPosition').value = '';
}
