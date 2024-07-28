document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

window.onload = function() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

    document.getElementById("userName").innerHTML = localStorage.getItem("name");

    displayItems();
};

const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#inputbox");
    createItem(item);
    item.value = "";
});

function createItem(item) {
    const itemObject = {
        class: "item",
        text: item.value
    };

    itemsArray.push(itemObject);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems();
}

function displayItems() {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        const classNames = itemsArray[i].class === "done" ? "done" : "item";

        items += `<div class="${classNames}">
                        <div class="input-controller">
                            <textarea disabled>${itemsArray[i].text}</textarea>
                            <div class="edit-controller">
                                <i class="fa-solid fa-check doneBtn"></i>
                                <i class="fa-solid fa-pen-to-square editBtn"></i>
                                <i class="fa-solid fa-circle-xmark deleteBtn"></i>
                            </div>
                        </div>
                        <div class="update-controller">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                 </div>`;
    }
    document.querySelector(".task-lists").innerHTML = items;
    activateDoneListeners();
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) });
    });
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    displayItems();
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    editBtn.forEach((eB, i) => {
        eB.addEventListener("click", () => {
            updateController[i].style.display = "flex";
            inputs[i].disabled = false;
        });
    });
}

function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveBtn.forEach((sB, i) => {
        sB.addEventListener("click", () => {
            updateItem(inputs[i].value, i);
        });
    });
}

function updateItem(text, i) {
    itemsArray[i].text = text;
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cB, i) => {
        cB.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
            inputs[i].style.border = "none";
        });
    });
}

function activateDoneListeners() {
    const doneBtn = document.querySelectorAll(".doneBtn");
    doneBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            markAsDone(i);
        });
    });
}

function markAsDone(index) {
    const item = document.querySelectorAll(".item")[index];
    item.classList.toggle("done");

    let itemsArray = JSON.parse(localStorage.getItem('items')) || [];
    itemsArray[index].class = item.classList.contains("done") ? "done" : "item";

    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        window.location.replace('index.html');
    });
});
document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

window.onload = function() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

    document.getElementById("userName").innerHTML = localStorage.getItem("name");

    displayItems();
};

const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#inputbox");
    createItem(item);
    item.value = "";
});

function createItem(item) {
    const itemObject = {
        class: "item",
        text: item.value
    };

    itemsArray.push(itemObject);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems();
}

function displayItems() {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        const classNames = itemsArray[i].class === "done" ? "done" : "item";

        items += `<div class="${classNames}">
                        <div class="input-controller">
                            <textarea disabled>${itemsArray[i].text}</textarea>
                            <div class="edit-controller">
                                <i class="fa-solid fa-check doneBtn"></i>
                                <i class="fa-solid fa-pen-to-square editBtn"></i>
                                <i class="fa-solid fa-circle-xmark deleteBtn"></i>
                            </div>
                        </div>
                        <div class="update-controller">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                 </div>`;
    }
    document.querySelector(".task-lists").innerHTML = items;
    activateDoneListeners();
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) });
    });
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    displayItems();
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    editBtn.forEach((eB, i) => {
        eB.addEventListener("click", () => {
            updateController[i].style.display = "flex";
            inputs[i].disabled = false;
        });
    });
}

function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveBtn.forEach((sB, i) => {
        sB.addEventListener("click", () => {
            updateItem(inputs[i].value, i);
        });
    });
}

function updateItem(text, i) {
    itemsArray[i].text = text;
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cB, i) => {
        cB.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
            inputs[i].style.border = "none";
        });
    });
}

function activateDoneListeners() {
    const doneBtn = document.querySelectorAll(".doneBtn");
    doneBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            markAsDone(i);
        });
    });
}

function markAsDone(index) {
    const item = document.querySelectorAll(".item")[index];
    item.classList.toggle("done");

    let itemsArray = JSON.parse(localStorage.getItem('items')) || [];
    itemsArray[index].class = item.classList.contains("done") ? "done" : "item";

    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        window.location.replace('index.html');
    });
});
