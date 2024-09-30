const rowsNumber = parseInt(prompt("Enter the number of rows:"));
const columnsNumber = parseInt(prompt("Enter the number of columns:"));

const generateTable = (nrRows, nrColumns) => {
  const table = document.createElement("table");

  for (let i = 0; i < nrRows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < nrColumns; j++) {
      let cell;
      if (i === 0) {
        cell = document.createElement("th");
        cell.textContent = `Header ${j + 1}`;
      } else {
        cell = document.createElement("td");
        cell.textContent = `Row ${i}, Col ${j + 1}`;
      }

      tr.appendChild(cell);
    }

    table.appendChild(tr);
  }

  const headingParagraph = document.createElement("p");
  headingParagraph.textContent = "Dynamic Table Generator";
  const body = document.getElementsByTagName("body")[0];

  body.appendChild(headingParagraph);
  body.appendChild(table);
};

generateTable(rowsNumber, columnsNumber);
