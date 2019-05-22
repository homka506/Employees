;
(function () {
    "use strict";
    const div = document.querySelector('#employeeList');

    const xhr = new XMLHttpRequest();


    xhr.open('GET', './data/employees.json');
    xhr.send();
    xhr.onload = function () {
       let employeesStatus = JSON.parse(this.responseText);
        let ul = document.createElement('ul');
        ul.classList.add('bulleted');
       
        employeesStatus.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.name;
            if (e.inoffice === true)
                li.classList.add('in');
            else if (e.inoffice === false)
                li.classList.add('out');
            ul.appendChild(li);
        });

        div.appendChild(ul);
     
    }
})();