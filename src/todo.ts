window.onload = () =>{
    const byid = (id:string) =>{return document.getElementById(id)}
    const listBox:HTMLElement = byid("list");
    const addButton:HTMLElement = byid("add");
    const saveButton:HTMLElement = byid("saveButton");
    const closeButton:HTMLElement = <HTMLButtonElement> byid("close");

    interface TodoItem {
        div:HTMLDivElement,
        input:HTMLInputElement,
        label:HTMLLabelElement,
        text:string
    }

    const addTodo = () => {
        const textElement = <HTMLInputElement> byid("ControlInput1");
        const text:string = textElement.value;

        let todoItem:TodoItem = {
            div:document.createElement('div') as HTMLDivElement , 
            input:document.createElement('input') as HTMLInputElement,
            label:document.createElement('label') as HTMLLabelElement, 
            text: "클릭해서 내용을 바꿔주세요!"  
        };
        
        let itemId = "item"+document.getElementById("list").children.length;

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

    }


    
    saveButton.addEventListener("click",addTodo);
    addButton.addEventListener("click", ()=>{
        setTimeout(()=>{
            byid("ControlInput1").focus();
        },500);
    })
}