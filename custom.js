// registration start
function shows(first, last, full, email, address, phone, male, date, pass, cpass, mass) {
    console.log('Fist name: ' + first);
    console.log('Last name: ' + last);
    console.log('Full name: ' + full + first + last);
    console.log('Email: ' + email);
    console.log('address: ' + address);
    console.log('Phone no: ' + phone);
    console.log('Gender: ' + male);
    console.log('Birth Date: ' + date);
    console.log('Pasword: ' + pass);
    console.log('confirm pass: ' + cpass);
    console.log('Your Messege: ' + mass);

    // document.getElementById("myList").innerHTML = '';

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Fist name: ' + first);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Last name: ' + last);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Full name: ' + full + first + last);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Email: ' + email);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('address: ' + address);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Phone no: ' + phone);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


    var node = document.createElement("LI");
    var textnode = document.createTextNode('Gender: ' + male);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Birth Date: ' + date);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Pasword: ' + pass);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('confirm pass: ' + cpass);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode('Your Messege: ' + mass);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


}
// registration end
//  let name = 'ahsan';
//  let roll ='11';
//  let address = 'Meherpru'

//  function show(name,roll,address){
//      console.log('My name is'+ name);
//      console.log('My roll is' + roll);
//      console.log('My address is' + address);
//  }
//   show(name,roll,address)





// show(' My name is ahsan')
// Calculator
function calculates(num1, num2) {
    console.log(`sum =${num1 + num2}`);

document.getElementById("myListe").innerHTML = '';

    var node = document.createElement("LI");
    var textnode = document.createTextNode(`sum =${num1 + num2}`);
    node.appendChild(textnode);
    document.getElementById("myListe").appendChild(node);

}

function calculatsub(num1, num2) {
    console.log(`sub =${num1 - num2}`);

     document.getElementById("myListe").innerHTML = '';
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`sub =${num1 - num2}`);
    node.appendChild(textnode);
    document.getElementById("myListe").appendChild(node);
}

function calculatmul(num1, num2) {
    console.log(`mul =${num1 * num2}`);

    document.getElementById("myListe").innerHTML = '';
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`mul =${num1 * num2}`);
    node.appendChild(textnode);
    document.getElementById("myListe").appendChild(node);
}

function calculatdiv(num1, num2) {
    console.log(`div =${num1 / num2}`);
    document.getElementById("myListe").innerHTML = '';
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`div =${num1 / num2}`);
    node.appendChild(textnode);
    document.getElementById("myListe").appendChild(node);
}
// calculator end