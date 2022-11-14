let alertForm = document.querySelector('#alertForm');

let alertInput = document.querySelector('#alertInput');


alertForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = "";
})



// Part 2

let sandwichForm = document. querySelector('#sandwichForm');
let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

for(let item of ingredients){
    console.log(item.id);
}

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();

    let newStr = "";
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `;
        }
    }
    console.log(newStr);

    alert(`Your sandwich contains: ${newStr}`);

})

let hairAppointment = document.querySelector('#hairAppointment');
let date = document.querySelector('#date');
let hairStylist = document.querySelector('#hairStylist');

//Hair Length Query Selectors 
//let hairLength = document.querySelector('#hairLength');
let longRadio = document.querySelector('#long');
let shortRadio = document.querySelector('#short');

hairAppointment.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(`Haircut date is: ${date}`);

    console.log(`Your hair stylist will be: ${hairStylist}. `);

    //console.log("long hair: " + longRadio.checked);
    //console.log("short hair: " + shortRadio.checked);

    let hairLength = "";
    if(longRadio.checked === true){
        hairLength = "long hair";
    } else if(shortRadio.checked === true){
        hairLength = "short hair";
    }
    

    alert(`Haircut scheduled for ${date.value} with ${hairStylist.value} for ${hairLength} hair.`);
});

let createAccount = document.querySelectorAll('#createAccount');
let username = document.querySelector("#username");
let email = document.querySelector('#email');
let password = document.querySelector("#password");

createAccount.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(username);
    console.log(email);
    console.log(password);

    alert(`Username: ${username} n\ Email: ${password} n\ Password: ******`);

});
