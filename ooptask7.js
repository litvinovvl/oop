class List {
    constructor(element, options) {
        this.whereToAdd = element;
        this.options = options;
        this.blurCtrl = (event) => {
            if (event.target) {
                if (!event.target.style.backgroundColor && event.target.tagName.toLowerCase() == this.options.itemElement) {
                    event.target.style.backgroundColor = 'yellow';
                } else {
                    event.target.style.backgroundColor = '';
                }
            }
        };
        this.blurClick = (event) => {
            if (!event.target.style.backgroundColor && event.target.tagName.toLowerCase() == this.options.itemElement) {
                let tmp = document.getElementsByTagName(this.options.itemElement);
                for (let i = 0; i < tmp.length; i++) {
                    tmp[i].style.backgroundColor = '';
                }
                event.target.style.backgroundColor = 'yellow';
            } else {
                event.target.style.backgroundColor = '';
            }
        };
    }
    createList() {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.style.margin = '2px';
        this.whereToAdd.appendChild(input);

        let addButton = document.createElement('button');
        addButton.innerText = '+';
        addButton.style.margin = '2px';

        let rmButton = document.createElement('button');
        rmButton.innerText = '-';
        rmButton.style.margin = '2px';

        this.whereToAdd.appendChild(addButton);
        this.whereToAdd.appendChild(rmButton);

        let list = document.createElement(this.options.parentElement);
        list.style.margin = '2px';
        list.classList.add('main-list');
        this.whereToAdd.appendChild(list);

        for (let i = 0; i < this.options.arrOfItems.length; i++) {
            let li = document.createElement(this.options.itemElement);
            li.innerText = this.options.arrOfItems[i];
            li.style.cssText = 'width: 100%; cursor: pointer;';
            list.appendChild(li);
        }

        document.addEventListener('click', (event) => {
            if(event.target.tagName == 'BUTTON' && event.target.innerText == '+') {
                this.addItem();
            } else if (event.target.tagName == 'BUTTON' && event.target.innerText == '-') {
                this.rmItem();
            }
        });

        document.addEventListener('click', this.blurClick);

        if (this.options.ctrl) {
            document.addEventListener('keydown', (event) => {
                if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
                    this.addBlurCtrl();
                }
            });
            document.addEventListener('keyup', (event) => {
                if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
                    this.rmBlurCtrl();
                }
            });
        }

    }
    addItem() {
        let input = document.getElementsByTagName('input')[0];
        let list = document.querySelector('.main-list');

        if (input.value) {
            let li = document.createElement(this.options.itemElement);
            li.innerText = input.value;
            li.style.cssText = 'width: 100%; cursor: pointer;';
            list.appendChild(li);
            if (this.options.onCreate) {
                this.options.onCreate();
            }
            input.value = '';
        }
    }
    addBlurCtrl() {
        document.addEventListener('click', this.blurCtrl);
        document.removeEventListener('click', this.blurClick);
    }
    rmBlurCtrl(){
        document.removeEventListener('click', this.blurCtrl);
        document.addEventListener('click', this.blurClick);
    }
    rmItem() {
        let apply = confirm('Are you really want to remove these items?');
        if (apply) {
            let tmp = document.getElementsByTagName(this.options.itemElement);
            for (let i = 0; i < tmp.length; i++) {
                if (tmp[i].style.backgroundColor == 'yellow') {
                    tmp[i].remove();
                    i--;
                }
            }
            if (this.options.onDelete) {
                this.options.onDelete();
            }
        } else {
            let tmp = document.getElementsByTagName(this.options.itemElement);
            for (let i = 0; i < tmp.length; i++) {
                tmp[i].style.backgroundColor = '';
            }
        }
    }
    get getListLength() {
        let tmp = document.querySelector('.main-list').childNodes.length;
        return (tmp);
    }
}

function showCreateAlert() {
    let input = document.getElementsByTagName('input')[0];
    alert('\'' + input.value + '\'' + 'was added into the list');
}

function showDeleteAlert() {
    alert('All checked values were removed from the list');
}

window.addEventListener('load', () => {
    let newList = new List(document.body, {
        ctrl: true,
        parentElement: 'ul',
        itemElement: 'li',
        arrOfItems: ['1', '2', '3', '4', '5'],
        onCreate: showCreateAlert,
        onDelete: showDeleteAlert,
    });
    newList.createList();
});

