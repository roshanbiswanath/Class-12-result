let marksX1 = 0
let marksX2 = 0
let marksX3 = 0
let avgMarX = 0
let Xcontrib
let subjectsAddedList = []
let subjectParam = {
    "Accountancy" : 80,
    "Biotechnology" : 70,
    "Biology" : 70,
    "Business Studies" : 80,
    "Chemistry" : 70,
    "Computer Science" : 70,
    "Economics" : 80,
    "English" : 80,
    "Geography" : 70,
    "Hindi" : 80,
    "History" : 80,
    "Informaiton Practices" : 70,
    "Applied Mathematics" : 80,
    "Math" : 80,
    "Physical Education" : 70,
    "Physics" : 70,
    "Political Science" : 80,
    "Psychology" : 70,
    "Sociology" : 80
}
let wholeTable 

function table12(){
    wholeTable = document.getElementById("data12")
    wholeTable.style.display = "none"
}

function toggleTable(){
    if (subjectsAddedList.length == 0){
        wholeTable.style.display = "none"
    }
    else{
        wholeTable.style.display = "block"
    }
}

function updatePage() {
    toggleTable()
    marksX1 = document.getElementById("marksX1").value
    if (marksX1 == "") {
        marksX1 = 0
    }
    marksX2 = document.getElementById("marksX2").value
    if (marksX2 == "") {
        marksX2 = 0
    }
    marksX3 = document.getElementById("marksX3").value
    if (marksX3 == "") {
        marksX3 = 0
    }
    avgMarX = (parseFloat(marksX1) + parseFloat(marksX2) + parseFloat(marksX3)) / 3
    avgXmark = document.getElementById("avgXmark")
    avgXmark.defaultValue = avgMarX
    let table = document.getElementById("table").rows
    let totalMark = 0
    //console.log(table[0].querySelector(".contribX"))
    for (let i = 0; i<table.length;i++){
        //console.log(table[i].id)
        subject_name = table[i].id
        table[i].querySelector(".avgX").defaultValue = avgMarX
        let contribX = (avgMarX)*subjectParam[subject_name]*3/800
        table[i].querySelector(".contribX").getElementsByTagName("span")[0].innerHTML = "("+avgMarX+"/"+80+")"+"*"+subjectParam[subject_name]*0.3+" = "
        table[i].querySelector(".contribX").getElementsByTagName("input")[0].defaultValue = contribX
        //console.log(table[i].querySelector(".contribX").getElementsByTagName("span"))
        let theoryXI = table[i].querySelector(".theoryXI").value
        if (theoryXI == ""){
            theoryXI = 0
        }
        theoryXI = parseFloat(theoryXI)
        let contribXI = (theoryXI*3)/10
        table[i].querySelector(".contribXI").getElementsByTagName("span")[0].innerHTML = "("+theoryXI+"/"+subjectParam[subject_name]+")"+"*"+subjectParam[subject_name]*0.3+" = "
        table[i].querySelector(".contribXI").getElementsByTagName("input")[0].defaultValue = contribXI
        table[i].querySelector(".theoryXI").defaultValue = theoryXI

        let TheoryXII = table[i].querySelector(".theoryXII").value
        if (TheoryXII == ""){
            TheoryXII = 0
        }
        TheoryXII = parseFloat(TheoryXII)
        let contribTheoryXII = (TheoryXII*4)/10
        table[i].querySelector(".contribTheoryXII").getElementsByTagName("span")[0].innerHTML = "("+TheoryXII+"/"+subjectParam[subject_name]+")"+"*"+subjectParam[subject_name]*0.4+" = "
        table[i].querySelector(".contribTheoryXII").getElementsByTagName("input")[0].defaultValue = contribTheoryXII
        table[i].querySelector(".theoryXII").defaultValue = TheoryXII

        let practicalXII = table[i].querySelector(".practicalXII").value
        if (practicalXII == ""){
            practicalXII = 0
        }
        practicalXII = parseFloat(practicalXII)
        table[i].querySelector(".practicalXII").defaultValue = practicalXII

        let finalXII = parseFloat(contribX + contribXI + contribTheoryXII + practicalXII)
        table[i].querySelector(".finalXII").getElementsByTagName("span")[0].innerHTML = contribX + "+" + contribXI + "+" + contribTheoryXII + "+" + practicalXII + "="
        table[i].querySelector(".finalXII").getElementsByTagName("input")[0].defaultValue = finalXII
        totalMark += finalXII
    }
    totalPercent = totalMark/subjectsAddedList.length
    if(isNaN(totalPercent)){
        totalPercent = 0
    }
    
    document.getElementById("totalPercent").innerHTML = "Total Percentage = " + totalMark+"/"+ subjectsAddedList.length+" = " + totalPercent + " in " + subjectsAddedList.length +" subjects."
}

function addSubject() {
    wholeTable.style.display = "block"
    let subject_name = document.getElementById("subSelect").value
    let table = document.getElementById("table")
    if (subjectsAddedList.includes(subject_name)) {
        console.log("Already IN Table")
    }
    else {
        Xcontrib = (avgMarX)*subjectParam[subject_name]*0.3/80
        console.log(Xcontrib)
        console.log(table.innerHTML)
        table.innerHTML += `<tr id="` + subject_name + `">
    <th scope="subject">`+ subject_name + `</th>
    <td>
    <div class="cell">
        <input class="avgX form-control" type="number" min="0" max="80" class="form-control" value="`+avgMarX+`" disabled>
        </div>
    </td>

    <td>
        <div class="input-group contribX">
        <div class="cell">
            <span class="input-group-text" id="basic-addon1">`+"("+avgMarX+"/"+80+")"+"*"+subjectParam[subject_name]*0.3+" = "+`</span>
            <input type="number" min="0" max="80" value="`+Xcontrib+`" class="form-control" disabled >
        </div>
        </div>
    </td>
    <td>
    <div class="cell">
        <input class = "theoryXI form-control" type="number" min="0" max="80" value="`+0+`"onkeyup="updatePage()" class="form-control">
        </div></td>
    <td>
        <div class="input-group contribXI">
        <div class="cell">
            <span class="input-group-text" id="basic-addon1">`+"("+0+"/"+subjectParam[subject_name]+")"+"*"+subjectParam[subject_name]*0.3+" = "+`</span>
            <input type="number" min="0" max="80" value="`+0+`" class="form-control" disabled >
        </div></div>
    </td>
    <td>
    <div class="cell">
        <input class = "theoryXII form-control" type="number" min="0" max="80" value="`+0+`" onkeyup="updatePage()" class="form-control">
        </div></td>
    <td>
        <div class="input-group contribTheoryXII">
        <div class="cell">
            <span class="input-group-text" id="basic-addon1">`+"("+0+"/"+subjectParam[subject_name]+")"+"*"+subjectParam[subject_name]*0.4+" = "+`</span>
            <input type="number" min="0" max="80" value="`+0+`" class="form-control" disabled >
            </div></div>
    </td>
    <td>
    <div class="cell">
        <input class = "practicalXII form-control" type="number" value="`+0+`" min="0" max="80" onkeyup="updatePage()" class="form-control">
        </div>
    </td>
    <td>
        <div class="input-group finalXII">
        <div class="cell">
            <span class="input-group-text" id="basic-addon1">`+Xcontrib+"+"+0+"+"+0+"+"+0+"="+`</span>
            <input type="number" min="0" max="80" value="`+Xcontrib+`" class="form-control" disabled >
        </div>
    </td>
    <td>
    <div class="cell">
        <button type="button" onclick="deleteSubject(\``+subject_name+`\`)" class="btn btn-danger">Del</button>
        </div>
    </td>
    </tr>`
        subjectsAddedList.push(subject_name)
    }
}

function deleteSubject(subject_name) {
    document.getElementById(subject_name).remove()
    index = subjectsAddedList.indexOf(subject_name)
    subjectsAddedList.splice(index,1)
    toggleTable()
}
