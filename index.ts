let customerInfo: any[];

function fetchCustomerList(): void{

    const table = document.querySelector('table');

    fetch('http://localhost:5001/customers')
        .then((response) => response.json())
        .then((data) => {
            customerInfo = data;
            console.log(data);

            for (let i = 0; i < customerInfo.length; i++) {
                if (table) {

                    let newRows = 
                    `<tr>
                        <td>${customerInfo[i].customerNumber}</td>
                        <td>${customerInfo[i].customerName}</td>
                        <td>${customerInfo[i].contactLastName}</td>
                        <td>${customerInfo[i].contactFirstName}</td>
                        <td>${customerInfo[i].phone}</td>
                        <td>${customerInfo[i].addressLine1}</td>
                        <td>${customerInfo[i].addressLine2}</td>
                        <td>${customerInfo[i].city}</td>
                        <td>${customerInfo[i].state}</td>
                        <td>${customerInfo[i].postalCode}</td>
                        <td>${customerInfo[i].country}</td>
                        <td>${customerInfo[i].salesRepEmployeeNumber}</td>
                        <td>${customerInfo[i].creditLimit}</td>
                    </tr>`;
                    
                    table.insertRow().innerHTML = newRows;
                }
            }
        })
        .catch(err => console.log(err));   
}

fetchCustomerList();