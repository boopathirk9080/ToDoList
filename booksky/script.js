var addbtn = document.querySelector('.add-btn');
var popupoverlay = document.querySelector('.popup-overlay');
var popupoverlaycontent = document.querySelector('.popup-overlay-content');

addbtn.addEventListener('click', function () {
    popupoverlay.style.display = 'block';
    popupoverlaycontent.style.display = 'block';
});
console.log(addbtn);

//selecting cancel button
var cancelbtn = document.querySelector('.canceloverlaybtn');
function defultclose(event) {
    event.preventDefault();

    popupoverlay.style.display = 'none';
    popupoverlaycontent.style.display = 'none';
}




// add button . container,student-name-input,
//student-degree-input,description,
var container = document.querySelector('.container');

var studentNameInput = document.getElementById('student-name-input');
var studentDegreeInput = document.getElementById('student-degree-input');
var descriptionInput = document.getElementById('description');

var addstudentdata = document.getElementById('add-student-data');
function createnewdata(event) {
    event.preventDefault();

    var div = document.createElement('div');

    div.setAttribute('class', 'page-conatiner');

    var h2 = document.createElement('h2');
    div.setAttribute('class', 'page-conatiner');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');

    div.innerHTML = `<h2>${studentNameInput.value}</h2>
    <h4>${studentDegreeInput.value}</h4>
    <p>${descriptionInput.value}</p> 
    <delete onclick="deletestudent(this)" class="delbtn" >Delete</delete>`

    container.append(div);
    popupoverlay.style.display = 'none';
    popupoverlaycontent.style.display = 'none';

    studentNameInput.value = '';
    studentDegreeInput.value = '';
    descriptionInput.value = '';

}
function deletestudent(element){
    element.parentElement.remove()
}
