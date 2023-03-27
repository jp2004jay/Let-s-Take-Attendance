var classA = document.querySelector('#class-A');
var classB = document.querySelector('#class-B');
var classC = document.querySelector('#class-C');
var classD = document.querySelector('#class-D');
var classH = document.querySelector('#class-H');

var rollNo = document.getElementById('Roll-No-Here');
var presentBtn = document.getElementById('p-btn');
var absentBtn = document.getElementById('a-btn');

var classHead = document.querySelector('.sub-headding-class');
var classSelection = document.getElementById('class_selection');
var takeAttendance = document.getElementById('take-attendence-window');
var absentTextView = document.getElementById('absents-numbers');

var classOfText = ['A','B','C','D','H'];
var content = 'Start attendance of Class-'; 

let absentNumbers = [];
let rollNoAnke;

classA.addEventListener('click', dispalyFunction1);
classB.addEventListener('click', dispalyFunction2);
classC.addEventListener('click', dispalyFunction3);
classD.addEventListener('click', dispalyFunction4);
classH.addEventListener('click', dispalyFunction5);

presentBtn.addEventListener('click', present);
absentBtn.addEventListener('click', absent);

function dispalyFunction1(){
    classHead.textContent = content+classOfText[0];
    startAttendance(101);
}
function dispalyFunction2(){
    classHead.textContent = content+classOfText[1];
    startAttendance(201);
}
function dispalyFunction3(){
    classHead.textContent = content+classOfText[2];
    startAttendance(301);
}
function dispalyFunction4(){
    classHead.textContent = content+classOfText[3];
    startAttendance(401);
}
function dispalyFunction5(){
    classHead.textContent = content+classOfText[4];
    startAttendance(501);
}

function startAttendance(r){
    classSelection.style.display = 'none';
    takeAttendance.style.display = 'flex';
    rollNoAnke = r;
    rollNo.textContent = rollNoAnke;
}

function present(){
    rollNoAnke++;
    rollNo.textContent = rollNoAnke;
}

function absent(){
    absentNumbers.push(" "+rollNoAnke);
    rollNoAnke++;
    rollNo.textContent = rollNoAnke;
    absentTextView.textContent = absentNumbers;
}