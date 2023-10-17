let employee = [
    {
        image : 'assets/images/profile1.avif',
        name : 'Surya',
        Email : 'surya@gmail.com',
        Mobile : 9900464179,
        address : "4th block jp nagar, Bengaluru"
    },
    {
        image : 'assets/images/profile2.avif',
        name : 'Abhi',
        Email : 'abhi@gmail.com',
        Mobile : 9900445349,
        address : "1th block rr nagar, Bengaluru"
    },
    {
        image : 'assets/images/profile3.avif',
        name : 'Prajwal',
        Email : 'prajwala@gmail.com',
        Mobile : 93800445349,
        address : "navi mumbai 8th main road"
    },
    {
        image : 'assets/images/profile5.webp',
        name : 'Prithviraj',
        Email : 'prithviraj@gmail.com',
        Mobile : 93800445349,
        address : "269 3rd road dehli"
    },
    {
        image : 'assets/images/profile6.jpeg',
        name : 'Harris',
        Email : 'harris@gmail.com',
        Mobile : 93800445349,
        address : "10 down street London"
    },
    {
        image : 'assets/images/profile1.avif',
        name : 'Harish',
        Email : 'harish@gmail.com',
        Mobile : 93800445349,
        address : "10 down street London"
    },
    {
        image : 'assets/images/profile3.avif',
        name : 'Sumit',
        Email : 'sumit@gmail.com',
        Mobile : 9900464179,
        address : "4th block jp nagar, Bengaluru"
    },
    {
        image : 'assets/images/profile5.webp',
        name : 'Ajay',
        Email : 'ajay@gmail.com',
        Mobile : 9900445349,
        address : "1th block rr nagar, Bengaluru"
    },
    {
        image : 'assets/images/profile6.jpeg',
        name : 'Prateek',
        Email : 'prateek@gmail.com',
        Mobile : 93800445349,
        address : "navi mumbai 8th main road"
    },
    {
        image : 'assets/images/profile1.avif',
        name : 'Pratap',
        Email : 'pratap@gmail.com',
        Mobile : 93800445349,
        address : "navi mumbai 8th main road"
    }
];

function employeeCardDisplay()
{
    const container = document.querySelector('.container');
    container.innerHTML = '';
    employee.forEach(emp =>{
        const employeecard = document.createElement('div');
        container.appendChild(employeecard);
        employeecard.innerHTML = `
            <img src="${emp.image}">
            <center>
            <h2>${emp.name}</h2>
            </center>
            <div class="det">
            <h3>Email : ${emp.Email}</h3>
            <h3>Mobile : ${emp.Mobile}</h3>
            <details>
            <summary>Address</summary>
            <p>${emp.address}</p>
            </details>
            </div>
            <div class="btn">
            <button><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        employeecard.classList.add('employeecard');
    })
    
}
function validateForm() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;
    const address = document.querySelector('#address').value;
    const image = document.querySelector('#image').files[0];

    // Check if any field is empty
    if (!name || !email || !mobile || !address || !image) {
        alert('Please fill in all fields.');
        return false;
    }
    if (name.length < 4 || name.split(' ').length > 2) {
        alert('Name should have at least 4 characters and no more than one space.');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    // Check if mobile is a valid number
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }
    if (address.length < 5) {
        alert('Addres should have at least 4 characters');
        return false;
    }

    // Add any additional validations you need

    return true;
}

function addEmployee(){
    if(validateForm()){

    const photo = document.querySelector('#image').files[0];
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;
    const address = document.querySelector('#address').value;
    
    var newemployee = {
        name: name,
        Email: email,
        Mobile: mobile,
        address: address,
        image: URL.createObjectURL(photo) // Store the image URL
    }
    employee.push(newemployee);
    displayemployee();
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#mobile').value = '';
    document.querySelector('#address').value = '';
    document.querySelector('#image').value = '';
}
}

function displayemployee() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the container first

    employee.forEach((emp, index) => { // Added `index` parameter here
        const employeecard = document.createElement('div');
        container.appendChild(employeecard);

        employeecard.innerHTML = `
        <img src="${emp.image}">
        <center>
        <h2>${emp.name}</h2>
        </center>
        <div class="det">
        <h3>Email : ${emp.Email}</h3>
        <h3>Mobile : ${emp.Mobile}</h3>
        <details>
        <summary>Address</summary>
        <p>${emp.address}</p>
        </details>
        </div>
        <div class="btn">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete" ><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        employeecard.classList.add('employeecard');
        employeecard.querySelector('.delete').addEventListener('click', () => deleteEmployee(index));
        employeecard.querySelector('.edit').addEventListener('click',() => editEmployee(index));
    });

}
function editEmployee(index) {
    const emp = employee[index];
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const mobileInput = document.querySelector('#mobile');
    const addressInput = document.querySelector('#address');

    nameInput.value = emp.name;
    emailInput.value = emp.Email;
    mobileInput.value = emp.Mobile;
    addressInput.value = emp.address;

    const submitButton = document.querySelector('#submit');
    submitButton.textContent = 'Save Changes';
    submitButton.removeEventListener('click', addEmployee);
    submitButton.addEventListener('click', () => saveChanges(index));
}

function saveChanges(index) {
    const photo = document.querySelector('#image').files[0];
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;
    const address = document.querySelector('#address').value;

    var updatedEmployee = {
        name: name,
        Email: email,
        Mobile: mobile,
        address: address,
        image: URL.createObjectURL(photo)
    }

    employee[index] = updatedEmployee;
    displayemployee();
    resetForm();
}

function resetForm() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#mobile').value = '';
    document.querySelector('#address').value = '';
    document.querySelector('#submit').textContent = 'Add Employee';
    document.querySelector('#submit').removeEventListener('click', saveChanges);
    document.querySelector('#submit').addEventListener('click', addEmployee);
}
function deleteEmployee(index) {
    employee.splice(index, 1);
    displayemployee();
}


const submit = document.querySelector('#submit');
submit.addEventListener('click',addEmployee);
employeeCardDisplay();