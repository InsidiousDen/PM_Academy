class FileSystem {
    constructor(files = []) {
        this.newElement = document.querySelector('.files');
        this.init(files);
    }
    init(files) {
        files.forEach((fileName) => this.createFile(fileName));

        this.newElement.addEventListener('click', () => {
            if (document.querySelector('.context-menu')) {
                document.querySelector('.context-menu').remove();
            }
        });

        this.newElement.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            const options = event.target === this.newElement ? ['Create'] : ['Rename', 'Delete'];

            this.createContextMenu(options, event);
        });

        this.newElement.addEventListener('dragstart', (event) => {
            event.target.classList.add('selected');
        });

        this.newElement.addEventListener('dragend', (event) => {
            event.target.classList.remove('selected');
        });

        this.newElement.addEventListener('dragover', (event) => {
            event.preventDefault();

            const activeElement = this.newElement.querySelector('.selected');
            const targetElement = event.target;

            const isMoveable =
                activeElement !== targetElement && targetElement.classList.contains('item');

            if (!isMoveable) {
                return;
            }

            const nextElement = this.getNextFile(event.clientX, targetElement);

            if (
                (nextElement && activeElement === nextElement.previousElementSibling) ||
                activeElement === nextElement
            ) {
                return;
            }

            this.newElement.insertBefore(activeElement, nextElement);
        });
    }
    createFile(fileName) {
        const file = this.createElement(
            'li',
            {
                className: 'item',
                draggable: true
            },
            fileName
        );
        this.newElement.append(file);
    }

    removeFile() {
        while (this.selectedElement.length > 0) {
            this.selectedElement.pop().remove();
        }
    }
    getNextFile = (cursorPos, targetElement) => {
        const targetElementPos = targetElement.getBoundingClientRect();
        const targetElementFocus = targetElementPos.x + targetElementPos.width / 2;

        const nextElement =
            cursorPos < targetElementFocus
                ? targetElement
                : targetElement.nextElementSibling;

        return nextElement;
    };
    createContextMenu(options, event) {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }

        const { clientX, clientY, target } = event;

        const optionHandlers = {
            Create: () => {
                const fileName = prompt('Enter new file name');
                if (fileName === '') {
                    alert('Please, enter correct file name');
                } else if (!fileName) {
                    alert('Adding canceled');
                } else {
                    this.createFile(fileName);
                }
            },
            Rename: () => {
                const fileName = prompt('Enter new file name', target.innerText);
                if (fileName === '') {
                    alert('Please, enter correct file name');
                } else if (!fileName) {
                    alert('Adding canceled');
                } else {
                    target.innerText = fileName;
                    target.className = 'item';
                }
            },
            Delete: () => {
                this.selectedElement.push(target);
                this.removeFile();
            }
        };

        const menu = this.createElement('ul', {
            className: 'context-menu',
            children: options.map((optionName) =>
                this.createElement('li', { onclick: optionHandlers[optionName] }, optionName)
            )
        });

        menu.style.left = `${clientX}px`;
        menu.style.top = `${clientY}px`;

        this.newElement.append(menu);
    }
    createElement(tagName, props = {}, innerText) {
        const $el = document.createElement(tagName);

        for (const propName in props) {
            if (propName === 'children' && props.children) {
                $el.append(...props.children);
            } else if (typeof props[propName] !== 'undefined') {
                $el[propName] = props[propName];
            }
        }

        if (innerText) {
            $el.innerText = innerText;
        }

        return $el;
    }
}

const filesArr = [
    'photo-001.jpg',
    'photo-002.jpg',
    'funny-video.mkv',
    'crazy frog.mp3',
    'test.json',
    'index.html',
    'hello-world.js'
];
const fileSystem = new FileSystem(filesArr);


