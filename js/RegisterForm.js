
document.getElementById('formdata').addEventListener('submit',async function (event) {
    event.preventDefault(); 
    let name = document.getElementById('name').value
    let salary = document.getElementById('salary').value
    let age = document.getElementById('age').value

    fetch('https://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            salary: salary,
            age: age,
        })
    })
        .then(res => {
            return res.json()
        })
        .then(result => {
            const {name,salary,age} = result.data
            console.log(name,salary,age)
            alert("Data Inserted Successfully\nName: "+name +"\nSalary: " +salary +"\nAge: "+age)
        });
        

})



