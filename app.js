function addElement(){
    let inputElement = document.getElementById('userInput');
    let userInput = inputElement.value;
    if(userInput != ''){
        let listItem = document.createElement('li');

//add remove button

        let remButton = document.createElement('button');
        remButton.innerHTML = 'remove';
        remButton.style.float = 'right';

//style the remove button with class

        remButton.setAttribute('class','remButton');
//add functionality to button and style

        remButton.addEventListener('click',function(){
            let removeWrapper = document.getElementById('removedElements');
            removeWrapper.append(listItem);
            listItem.style.color='white';
            listItem.style.margin='20px';
            
//hide buttons when clicked

            remButton.style.display='none';
            doneButton.style.display='none';

//add an option to return (create and add class) 

            let returnUp = document.createElement('button');
            returnUp.innerHTML = 'return';
            returnUp.style.float = 'right';
            listItem.append(returnUp);
            returnUp.setAttribute('class','returnButton');

//add functionality to returnButton and style

            returnUp.addEventListener('click',function(){
                let mainWrapper = document.getElementById('unorderedList');
                mainWrapper.append(listItem);
                remButton.style.display='inline';
                doneButton.style.display='inline';
                listItem.style.color = 'black';
                returnUp.remove();
            })
        })

//add done Button and style it 

        let doneButton = document.createElement('button');
        doneButton.innerHTML = 'done';
        doneButton.style.float = 'right';
        doneButton.setAttribute('class','doneButton');
//add functionality to button

        doneButton.addEventListener('click',function(){
            let doneWrapper = document.getElementById('doneTasks');
            listItem.style.textDecoration = 'line-through';
            doneWrapper.append(listItem);
            listItem.style.color='white';
            listItem.style.margin='20px';
//hide buttons when clicked

            remButton.style.display='none';
            doneButton.style.display='none';
//add an option to return

            let returnUp = document.createElement('button');
            returnUp.innerHTML = 'return';
            returnUp.style.float = 'right';
            listItem.append(returnUp);
            returnUp.setAttribute('class','returnButton');
//add functionality to returnButton

            returnUp.addEventListener('click',function(){
                let mainWrapper = document.getElementById('unorderedList');
                mainWrapper.append(listItem);
                remButton.style.display='inline';
                doneButton.style.display='inline';
                listItem.style.color = 'black';
                returnUp.remove();
                listItem.style.textDecoration = 'none';
            })
        })
//manually insert input text in the listItem property

        listItem.textContent = userInput;
//append the remove button

        listItem.append(remButton);       
//append the done Button

        listItem.append(doneButton);
//append the whole list

        let list = document.getElementById('unorderedList');
        list.append(listItem);
//input value restart (deletes the input value after clicked)

        inputElement.value = '';
    }
}
/*removes all list items in the list 
(without the ones in removed and done)*/

function clearElements(){
    let list = document.getElementById('unorderedList');
    let listItemsCount = list.childElementCount;
    for (let index = listItemsCount - 1; index >= 0; index--) {
        let listItem = list.children[index];
        list.removeChild(listItem);
    }
 }

