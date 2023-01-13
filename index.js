var customerList;
function getCustomerList() {
    var table = document.querySelector('table');
    fetch('http://localhost:5001/customers')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        customerList = data;
        console.log(data);
        for (var i = 0; i < customerList.length; i++) {
            if (table) {
                var newRows = "<tr>\n                        <td>".concat(customerList[i].customerNumber, "</td>\n                        <td>").concat(customerList[i].customerName, "</td>\n                        <td>").concat(customerList[i].contactLastName, "</td>\n                        <td>").concat(customerList[i].contactFirstName, "</td>\n                        <td>").concat(customerList[i].phone, "</td>\n                        <td>").concat(customerList[i].addressLine1, "</td>\n                        <td>").concat(customerList[i].addressLine2, "</td>\n                        <td>").concat(customerList[i].city, "</td>\n                        <td>").concat(customerList[i].state, "</td>\n                        <td>").concat(customerList[i].postalCode, "</td>\n                        <td>").concat(customerList[i].country, "</td>\n                        <td>").concat(customerList[i].salesRepEmployeeNumber, "</td>\n                        <td>").concat(customerList[i].creditLimit, "</td>\n                    </tr>");
                table.insertRow().innerHTML = newRows;
            }
        }
    })["catch"](function (err) { return console.log(err); });
}
getCustomerList();
