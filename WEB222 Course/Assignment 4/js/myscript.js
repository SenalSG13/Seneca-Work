// All you JavaScript code for assignment 4 should be in this file

window.onload = function () {
    getTable("list");
    document.getElementById("menu_21").onclick = function () { getTable("population1"); };
    document.getElementById("menu_22").onclick = function () { getTable("population2"); };
    document.getElementById("menu_31").onclick = function () { getTable("area&Con"); };
    document.getElementById("menu_32").onclick = function () { getTable("Asia"); };
    document.getElementById("menu_41").onclick = function () { getTable("Eng"); };
    document.getElementById("menu_42").onclick = function () { getTable("Arb"); };
    document.getElementById("menu_43").onclick = function () { getTable("Chn"); };
    document.getElementById("menu_44").onclick = function () { getTable("Frn"); };
    document.getElementById("menu_45").onclick = function () { getTable("Hnd"); };
    document.getElementById("menu_46").onclick = function () { getTable("Kr"); };
    document.getElementById("menu_47").onclick = function () { getTable("Jpn"); };
    document.getElementById("menu_48").onclick = function () { getTable("Rsa"); };


}

function getTable(option) {

    var countryTable = document.getElementById("outputTable");

    var title = document.getElementById("subtitle");
    var tblExistingBody = countryTable.querySelector("tbody");
    if (tblExistingBody)
        countryTable.removeChild(tblExistingBody);
    
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < countries.length; i++) {

        switch (option) {

            case "list":
                title.innerHTML = "List of Countries and Dependencies";
                tblBody.appendChild(getRow("English", i));                
                break;

            case "population1":
                title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
                if (countries[i].Population > 100000000)
                    tblBody.appendChild(getRow("English", i));
                break;

            case "population2":
                title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
                if (countries[i].Population > 1000000 && countries[i].Population < 2000000)
                    tblBody.appendChild(getRow("English", i));
                break;

            case "area&Con":
                title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
                if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas")
                    tblBody.appendChild(getRow("English", i));
                break;

            case "Asia":
                title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
                if (countries[i].Continent == "Asia")
                    tblBody.appendChild(getRow("English", i));
                break;

            case "Eng":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in English (English)";
                tblBody.appendChild(getRow("English", i));
                break;

            case "Arb":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Arabic (عربى)";
                tblBody.appendChild(getRow("Arabic", i));
                break;

            case "Chn":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
                tblBody.appendChild(getRow("Chinese", i));
                break;

            case "Frn":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in French (français)";
                tblBody.appendChild(getRow("Franch", i));
                break;

            case "Hnd":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Hindi (हिंदी)";
                tblBody.appendChild(getRow("Hindi", i));
                break;

            case "Kr":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Korean (한국어)";
                tblBody.appendChild(getRow("Korean", i));
                break;

            case "Jpn":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Japanese (日本語)";
                tblBody.appendChild(getRow("Japanese", i));
                break;

            case "Rsa":
                title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Russian (русский)";
                tblBody.appendChild(getRow("Russian", i));
                break; 
        }

    }
    countryTable.appendChild(tblBody);
}



function getImg(code) {

    var flag = document.createElement("td");
    var flagImg = document.createElement("img");
    var source = "flags/" + code + ".png";
    flagImg.src = source;
    flag.appendChild(flagImg);
    return flag;
}


function getTd(info) {

    var newData = document.createElement("td");
    var newInfo = document.createTextNode(info);
    newData.appendChild(newInfo);
    return newData;
}

function getRow(lang, i) {
    
    var tableRows = document.createElement("tr");
    tableRows.appendChild(getImg(countries[i].Code));
    tableRows.appendChild(getTd(countries[i].Code));
    tableRows.appendChild(getTd(countries[i].Name[lang]));
    tableRows.appendChild(getTd(countries[i].Continent));
    tableRows.appendChild(getTd(countries[i].AreaInKm2));
    tableRows.appendChild(getTd(countries[i].Population));
    tableRows.appendChild(getTd(countries[i].Capital));
    return  tableRows;
}
