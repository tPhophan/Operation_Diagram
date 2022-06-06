const dragItems = document.querySelectorAll('.drag-item');
const dragLists = document.querySelectorAll('.drag-item-list');

let selectItem;

dragItems.forEach((item)=>{
    item.addEventListener('dragstart', ft_dragStart);
});

dragLists.forEach((list)=>{
    list.addEventListener('dragover',ft_dragOver);
    list.addEventListener('dragenter', ft_dragEnter);
    list.addEventListener('drop', ft_drop);
});

function ft_dragStart(){
    selectItem = this;
}

function ft_dragEnter(e){
    e.preventDefault();
}

function ft_dragOver(e){
    e.preventDefault();
}

function ft_drop(){
    this.append(selectItem);
    selectItem = null;
}

