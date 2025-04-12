const URL = "http://localhost:9000/employees";

let tableContainer = document.getElementById("tableContainer");
async function fetchData() {
  let response = await fetch(URL);
  let data = await response.json();

  let table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-striped");
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  let tbody = table.querySelector("tbody");
  data.forEach((employee) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.email}</td>
      <td>${employee.password}</td>
      <td>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  tableContainer.appendChild(table);
}

fetchData();
