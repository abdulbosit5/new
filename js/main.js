// function getMax(a, b) {
//     return (a > b) ? a : b;
// }
//
// document.write(getMax(5, 26));
//
//
// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return 'FizzBuzz';
//     } else if (number % 3 === 0) {
//         return 'Fizz';
//     } else if (number % 5 === 0) {
//         return 'Buzz';
//     } else {
//         return number;
//     }
// }
//
// console.log(fizzBuzz(31));
//
//
// function speddLimit(x) {
//     let point;
//     if (x <= 70) {
//         return 'ok';
//     }
//     if (x > 70) {
//         point = Math.floor((x - 70) / 5);
//         if (point <= 12) {
//             return point;
//         } else {
//             return 'jarima';
//         }
//     }
// }
//
// console.log(speddLimit(78));
//
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);
//
// let j = 0;
// let count = 0;
// while (j <= 10) {
//     if (j % 3 === 0 || j % 5 === 0) {
//         count += j;
//     }
//     j++
// }
// console.log(count);
//
//
// let k = 15;
// let sum2 = 0;
// do {
//     if (k % 3 === 0 || k % 5 === 0) {
//         sum2 += k;
//     }
//     k++
// } while (k <= 10);
// console.log(sum2);
//
// var car = {
//     name: 'Tico',
//     brand: 'Daewoo',
//     price: 1000,
//     color: 'green'
// };
//
// var colors = ['red', 'white', 'yellow', 'green'];
//
// for (let key in car) {
//     console.log(key, car[key]);
// }
//
// for (let index in colors) {
//     console.log(index, colors[index]);
// }
//
// for (let color of colors) {
//     console.log(color);
// }

// global variables
var currentIndex = -1;
var groups = [
    {name: "Abror", lastname: "Yusupov", age: 21, groupName: "g67"},
];

// function
function drawTable(group) {
    document.getElementById("gruxnomi").innerHTML = "";
    for (var l = 0; l < group.length; l++) {
        document.getElementById("gruxnomi").innerHTML +=
            "<tr>" +
            "<td>" +
            (l + 1) +
            "</td>" +
            "<td>" +
            group[l].name +
            "</td>" +
            "<td>" +
            group[l].lastname +
            "</td>" +
            "<td>" +
            group[l].age +
            "</td>" +
            "<td>" +
            group[l].groupName +
            "</td>" +
            '<td><button class="m-1" onclick="editGroup(' +
            l +
            ')">edit</button>' +
            '<button class="m-1" onclick="deleteGroup(' +
            l +
            ')">delete</button></td>' +
            "</tr>";
    }
}

// get function
drawTable(groups);

// add new group from form
function addGroup() {
    var newGroup = {
        name: "",
        lastname: "",
        age: "",
        groupName: "",
    };
    // get values from form
    const myForm = document.forms["myform"];
    if (
        myForm["fname"].value &&
        myForm["fname"].value &&
        myForm["age"].value &&
        myForm["group"].value
    ) {
        newGroup = {
            name: myForm["fname"].value,
            lastname: myForm["lname"]?.value,
            age: myForm["age"].value,
            groupName: myForm["group"].value,
        };

        if (currentIndex === -1) {
            // if this item is new then item pushes to group the last,
            groups.push(newGroup);
        } else {
            // else this item is not new and item joines its place
            // splice (startedIndex, deletedItemsCount, newItem)
            groups.splice(currentIndex, 1, newGroup);
        }
        // redrawing table
        drawTable(groups);
    } else {
        alert("Formani to'ldiring!");
    }
    // to make it first form and currentIndex
    myForm["fname"].value = "";
    myForm["lname"].value = "";
    myForm["age"].value = "";
    myForm["group"].value = "";
    currentIndex = -1;
}

function editGroup(index) {
    currentIndex = index;
    var currentGroup = groups[index];

    const myForm = document.forms["myform"];

    myForm["fname"].value = currentGroup.name;
    myForm["lname"].value = currentGroup.lastname;
    myForm["age"].value = currentGroup.age;
    myForm["group"].value = currentGroup.groupName;
}

function deleteGroup(index) {
    currentIndex = index;
    confirm("Are you sure? delete to this information " + (index + 1)) &&
    groups.splice(index, 1);
    drawTable(groups);
}


