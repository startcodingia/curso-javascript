const colors = [
  "red",
  "black",
  "white",
  "yellow",
  "green",
  "brown",
  "purple",
  "peru",
];

const rows = 13;
const cols = 13;

const pixelContainer = document.querySelector("#colors-container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

colors.forEach((color) => {
  const colorSquare = document.createElement("div");
  colorSquare.classList.add("color", color);
  colorSquare.setAttribute("id", color);
  pixelContainer.appendChild(colorSquare);
});

const drawTableCell = (r_i, c_i, container) => {
  const tdElement = document.createElement("td");
  tdElement.className = "painterBlock";
  tdElement.setAttribute("id", `square-${r_i}-${c_i}`);

  return container.appendChild(tdElement);
};

const drawTableRows = (row, r_i, container) => {
  const trElement = document.createElement("tr");

  row.forEach((col, c_i) => {
    return drawTableCell(r_i, c_i, trElement);
  });

  return container.appendChild(trElement);
};

const drawGrid = (grid) => {
  const tableContainer = document.querySelector("table");
  const tableBody = document.createElement("tbody");

  grid.forEach((row, r_1) => drawTableRows(row, r_1, tableBody));

  return tableContainer.appendChild(tableBody);
};

const initGrid = [];
for (let i = 0; i < rows; i++) {
  initGrid[i] = [];
  for (let j = 0; j < cols; j++) {
    initGrid[i][j] = colors[0];
  }
}

drawGrid(initGrid);
