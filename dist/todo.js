window.onload = function () {
    var byid = function (id) { return document.getElementById(id); };
    var listBox = byid("list");
    var addButton = byid("add");
    var saveButton = byid("saveButton");
    var closeButton = byid("close");
    var addTodo = function () {
        var textElement = byid("ControlInput1");
        var text = textElement.value;
        var todoItem = {
            div: document.createElement('div'),
            input: document.createElement('input'),
            label: document.createElement('label'),
            text: "클릭해서 내용을 바꿔주세요!"
        };
        var itemId = "item" + document.getElementById("list").children.length;
        todoItem.input.className = "form-check-input";
        todoItem.input.type = "checkbox";
        todoItem.input.id = itemId;
        todoItem.label.className = "form-check-label";
        todoItem.label.htmlFor = itemId;
        todoItem.label.innerText = text;
        todoItem.div.className = "form-check";
        todoItem.div.append(todoItem.input);
        todoItem.div.append(todoItem.label);
        listBox.append(todoItem.div);
        closeButton.click();
    };
    saveButton.addEventListener("click", addTodo);
    addButton.addEventListener("click", function () {
        setTimeout(function () {
            byid("ControlInput1").focus();
        }, 500);
    });
};
