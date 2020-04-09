// Data for the "HTML Lists" Page

var fruits = ["Apples", "Oranges", "Pears", "Grapes", "Pineapples", "Mangos"];

var directory = [
    { type: "file", name: "file1.txt" },
    { type: "file", name: "file2.txt" },
    { type: "directory", name: "HTML Files", files: [{ type: "file", name: "file1.html" }, { type: "file", name: "file2.html" }] },
    { type: "file", name: "file3.txt" },
    { type: "directory", name: "JavaScript Files", files: [{ type: "file", name: "file1.js" }, { type: "file", name: "file2.js" }, { type: "file", name: "file3.js" }] }
];

window.onload = function () {
    var container = document.querySelector("#fruitsContainer");
    var orderlist = "<ol>"
    for (var i = 0; i < fruits.length; i++) {
        orderlist += "<li>" + fruits[i] + "</li>";
    }
    container.innerHTML += orderlist + "</ol>";
    var newContainer = document.querySelector("#fileContainer");
    var unorderedList = "<ul>";
    for (var i = 0; i < directory.length; i++) {
        unorderedList += "<li>" + directory[i].name;
        if (directory[i].type == "directory") {
            unorderedList += "<ul>";
            for (var x = 0; x < directory[i].files.length; x++) { unorderedList += "<li>" + directory[i].files[x].name + "</li>"; }
            unorderedList += "</ul>";
        }
        unorderedList += "</li>";
    }
    newContainer.innerHTML += unorderedList + "</ul>";
};
