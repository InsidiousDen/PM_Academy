const fileSystem = {
  wrapper: document.querySelector(".wrapper"),
  contextMenu: document.querySelector(".context-menu"),
  files: document.querySelector(".files"),
};

const generateFiles = () => {
  fileSystem.files.innerHTML = "";

  fileSystem.files.insertAdjacentHTML(
    "beforeend",
    files
        .map(
        ({ id, name }) => `
          <li class="item draggable" data-id=${id}>${name}</li>
        `
      )
      .join("")
  );    
};

const controllerLeftClick = () => {
  fileSystem.contextMenu.classList.remove("visible");
};

const controllerRightClick = (e) => {
  e.preventDefault();

  const { clientX, clientY } = e;
  currentFile = Number(e.target.dataset.id);

  fileSystem.contextMenu.style.left = `${clientX}px`;
  fileSystem.contextMenu.style.top = `${clientY}px`;
  fileSystem.contextMenu.classList.add("visible");
  fileSystem.contextMenu.innerHTML = "";

  if (e.target.classList.contains("item")) {
    fileSystem.contextMenu.insertAdjacentHTML(
      "beforeend",
      `
      <li data-action="rename">Rename</li>
      <li data-action="delete">Delete</li>
      `
    );
  } else {
    fileSystem.contextMenu.insertAdjacentHTML(
      "beforeend",
      `
      <li data-action="create">Create</li>
      `
    );
  }
};


const createFile = () => {
  const fileName = prompt("Enter new file name");

  if (fileName === null || fileName === "") return;

  files.push({
    id: Math.random(),
    name: fileName,
    draggable: true,
  });

  generateFiles();
};

const renameFile = (id) => {
  const fileName = prompt("Enter new file name", name);

  if (fileName === null || fileName === "") return;

  files = files.map((file) =>
    file.id === id
      ? {
          id,
          name: fileName,
        }
      : file
  );

  generateFiles();
};

const removeFile = (id) => {
  files = files.filter((file) => file.id !== id);

  generateFiles();
};

const controllerContextClick = (e) => {
  switch (e.target.dataset.action) {
    case "create":
      createFile();
      break;
    case "rename":
      renameFile(currentFile);
      break;
    case "delete":
      removeFile(currentFile);
      break;
    default:
      return;
  }
};

let files = [
  {
    id: 1,
    name: "photo-001.jpg",
  },
  {
    id: 2,
    name: "photo-002.jpg",
  },
  {
    id: 3,
    name: "funny-video.mkv",
  },
  {
    id: 4,
    name: "crazy frog.mp3",
  },
  {
    id: 5,
    name: "test.json",
  },
  {
    id: 6,
    name: "index.html",
  },
  {
    id: 7,
    name: "hello-world.js",
  },
];

fileSystem.contextMenu.addEventListener("click", controllerContextClick);
fileSystem.wrapper.addEventListener("click", controllerLeftClick);
fileSystem.wrapper.addEventListener("contextmenu", controllerRightClick);

generateFiles();
