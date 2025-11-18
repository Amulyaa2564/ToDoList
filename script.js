let addBtn = document.getElementById('addButton');
let inputText = document.getElementById('inputText');
let resultContainer = document.getElementById('result-container');
let errorMsg = document.getElementById('errorMsg');

function addTask() {
    if (inputText.value.trim() === "") {
        errorMsg.textContent = "*Enter a Task";
        return;
    }

    errorMsg.textContent = "";

    let innerDiv = document.createElement('div');
    let textValue = document.createElement('p');
    let circle = document.createElement('span');
    let trash = document.createElement('span');

    circle.innerHTML = `<i class="fa-regular fa-circle"></i>`;
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    textValue.textContent = inputText.value;

    trash.classList.add('trash');
    circle.classList.add('check');
    innerDiv.classList.add("inner_div");

    let leftGroup = document.createElement("div");
    leftGroup.style.display = "flex";
    leftGroup.style.alignItems = "center";

    leftGroup.appendChild(circle);
    leftGroup.appendChild(textValue);

    // TOGGLE CHECK + LINE THROUGH
    leftGroup.addEventListener("click", function () {
        textValue.classList.toggle("completed");

        if (textValue.classList.contains("completed")) {
            circle.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        } else {
            circle.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        }
        saveData();
    });

    // DELETE BUTTON
    trash.addEventListener("click", function () {
        innerDiv.remove();
        saveData();
    });

    innerDiv.appendChild(leftGroup);
    innerDiv.appendChild(trash);

    resultContainer.appendChild(innerDiv);
    inputText.value = "";
    saveData();
}

addBtn.onclick = addTask;

inputText.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// SAVE TO LOCAL STORAGE
function saveData() {
    localStorage.setItem("task", resultContainer.innerHTML);
}

// SHOW TASKS ON LOAD + REATTACH EVENTS
function showTask() {
    resultContainer.innerHTML = localStorage.getItem("task") || "";

    // Reattach event listeners after loading saved data
    let allTasks = resultContainer.querySelectorAll(".inner_div");

    allTasks.forEach(innerDiv => {
        let leftGroup = innerDiv.children[0];
        let textValue = leftGroup.children[1];
        let circle = leftGroup.children[0];
        let trash = innerDiv.children[1];

        // Reattach toggle listener
        leftGroup.addEventListener("click", function () {
            textValue.classList.toggle("completed");

            if (textValue.classList.contains("completed")) {
                circle.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            } else {
                circle.innerHTML = `<i class="fa-regular fa-circle"></i>`;
            }
            saveData();
        });

        // Reattach delete handler
        trash.addEventListener("click", function () {
            innerDiv.remove();
            saveData();
        });
    });
}

showTask();
