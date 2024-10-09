interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'El Idrissi',
  lastName: 'Mustapha',
  age: 26,
  location: 'Nador',
};
const secondStudent: Student = {
  firstName: 'Cakir',
  lastName: 'Hatice',
  age: 21,
  location: 'Koln',
};

const studentsList: Array<Student> = [firstStudent, secondStudent];

const table: HTMLTableElement = document.createElement('table');
studentsList.map((item) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();
  cell1.innerText = item.firstName;
  cell2.innerText = item.location;
});
document.body.appendChild(table);
