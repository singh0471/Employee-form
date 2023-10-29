var jpdbBaseURL="http://api.login2explore.com:5577";
 var connToken = '90931303|-31949328275640657|90961142';
var jpdbIRL = "/api/irl";
 var jpdbIML = "/api/iml"; 
var empDBName = "EMP-DB";
var empRelationName = "EmpData";
setBaseUrl(jpdbBaseURL);
function disableCtrl (ctrl) {
$('#new).prop('disabled', ctrl);
$('#save').prop("disabled", ctrl);
$('#edit').prop("disabled", ctrl);
$('#change').prop("disabled", ctrl);
$("#reset").prop("disabled", ctrl);


function disableNav (ctrl) {
$('#first").prop("disabled', ctrl);
$('#prev').prop("disabled", ctrl);
$('#next').prop("disabled", ctrl);
$('#last').prop("disabled", ctrl);
}
function disableForm (bvalue) {

$('#empid").prop("disabled", bvalue); 
$('#empname").prop("disabled", bvalue); 
$('#empsal').prop("disabled", bvalue); 
$('#hra').prop("disabled", bvalue); 
$('#da").prop("disabled", bvalue);
 $('#deduct').prop("disabled", bvalue);
}

function initEmpForm() {
localStorage.removeItem("firstIrec_no"); 
localStorage.removeItem("last_rec_no"); 
localStorage.removeItem("rec_no*);
console.log("initEmpForm() done"); 
// alert('initEmpForm() done");
}


function setCurrRecNo2LS(jsonObj){
var data = JSON.parse(jsonObj.data);
localStorage.getItem('rec_no', data.rec_no);
}

function getCurrRecNo2LS(){
return localStorage.getItem('rec_no');
}


function setFirstRecNo2LS(jsoncbj) { 
alert.setFirstRecN2LS/json"); 
var data = JSON.parse(jsoncbj.data);
 if (data.rec_no === undefined) {
localstorage.setItem("first_rec_no", "");
} else {
localstorage.setItem("first_rec_no", data.rec_no);
}
}


function getFirstRecNoFromLS() {
return localStorage.getItem("First_rec_no );}

function setLastRecNo2LS(jsonObj) { 
var data = JSON.parse(jsonObj.data); 
if (data.rec_no= undefined) {
localStorage.setItem("last_rec_n", "");
} 
else {
localStorage.setItem("last_rec_no", data.rec_no);
}
}

function getLastRecNoFromLS() {
return localstorage.getItem("last_rec_no");}


function getEmpFromEmpID(){
var empid = $("empid") val();

var jsonStr = {
id: empid};

var getRequest = createGET_BY_KEYRequest (conn Token, empCBName, empRelationName, JSON.stringify(jsonStr));
 jQuery.ajaxSetup({async: false});
var jsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
if (jsonObj.status === 400) {
$("#save").prop("disabled", false);
 $("#reset').prop("disabled", false); $("#empname").focus();
} else if (jsonObj.status === 200) {
}
showData(jsonObj);
jQuery.ajaxSetup({async: true});
function newForm() {
}
makeDataFormEmpty();
disableForm(false);
$('#empid").focus(); disableNav (true); disableCtrl (true);
$('#save').prop("disabled", false); $("#reset").prop("disabled', false);
}

function makeDataFormEmpty() {
$('#empid").val("");
$('#empname").val("");
$('#empsal').val("");
$('#hra").val("");
$('#da").val("");
$("#deduct').val("*);
}

function resetForm() { 
disableCtrl true);
disableNav (false);
var getourRequest = createGET_BY_RECORDRequest(connToken, empDBName, empRelationName, getCurrRecNoFromLS());
 jQuery.ajaxSetup ((async: false});
var result = executeCommand(getCurRequest, irlParturl);
showData (result);
jQuery.ajaxSetup({async: true});
if (isonlyOneRecordPresent() || isNoRecordPresentLS()) {
}
disableNav(true);
$('#new').prop('disabled', false);
if (isNoRecordPresentLS()) {
makeDataFormEmpty();
$("#edit").prop("disabled', true);
} else {
$("#edit").prop("disabled", false);}
disableForm(true);
}





function showData(jsonObj) {
if (jsonObj.status === 400) {
return;
}
I
var data = (JSON.parse(jsonObj.data)).record;
setCurrRecNo2LS(jsonObj);
$('#empid").val(data.id);
$('#empname").val(data.name);
 $('#empsal').val(data.salary);
 $('#bra').val(data.hra);
$('#da").val(data.da);
$('#deduct').val(data.deduction);
disableNav (false);
disableForm(true);
$('#save').prop("disabled", true);
$('#change').prop("disabled", true);
$('#reset").prop("disabled", true);
$('#new").prop("disabled', false);
$('#edit').prop("disabled", false);
if (getQurrRecNoFromLS()
getLastRecNoFromLS()) {
$("#next").prop("disabled', true);
$("#last").prop("disabled", true);
}

if (getCurrRecNoFromLS() === getFirstRecNoFromLS()) {
$("#prev").prop("disabled", true); $("#first').prop("disabled", true);
return;
}
}

function validateData() {
var empid, empname, empsal, hra, da, deduct; empid = $('#empid").val();
empname = $("#empname").val();
 empsal = $('#empsal').val(); 
hra = $('#hra').val();
 da = $('#da").val();
deduct = $("#deduct").val();
if (empid === "") {
}
alert('Employee ID missing"); $("#empid').focus();
return "";
if (empname === "") {
alert('Employee Name missing");
$("#empid').focus(); 
return "";
if (empname === "") {
}
alert('Employee Name missing");
 $("#empname").focus(); 
return *";
if (empsal === '') {
}
I
alert('Employee salary missing');
 $("#empsal").focus();
return "";
if (hra === "") {
}
alert('HRA missing"); 
$("#hra").focus(); 
return "";
if (da === "") {
alert('DA missing");
$("#da").focus(); 
return "";
if (deduct === '') {
alert('Deduction missing");
 $("#deduct").focus();
return "";
}

var jsonStrobj = { id: empid,
name: empname, salary: empsal,
hra: hra,
da: da,
deduction: deduct
I
};
return JSON.stringify(jsonStrobj);
}
function getFirst() {
var getFirstRequest = createFIRST_RECORDRequest (conn Token, empDEName, empRelationName);
 jQuery.ajaxSetup({async: false});
var result = executeCommand(getFirstRequest, irlParturl);
showData (result);
setFirstRecNoZLS(result);
 jQuery.ajaxSetup({async: true});
$('#empid.prop("disabled", true);
$('#first").prop("disabled', true);
$('#prev').prop("disabled", true);
$('#next').prop("disabled", false);
}
$('#save').prop("disabled", true);

function getPrev() {
var r= getCurrRecNoFromLS(); if (r === 1)
{
$("#prev").prop("disabled", true);
$("#first').prop('disabled", true);
}
var getPrevRequest = createPREV_RECORDRequest (conn Token, empDeName, empRelationName, r); 
jQuery.ajaxSetup({async: false});
var result = executeCommand(getPrevRequest, irlPartUrl);
showData (result);
jQuery.ajaxSetup({async: true});
var r= getCur RecNoFromLS();
if (r === 1) {
}
$("#first').prop("disabled", true);
 $("#prev").prop("disabled", true);
$('#save').prop("disabled", true);
function getNext() {
var r= getCurrRecNoFrom S();
var getPrevRequest = createNEXT_RECORDRequest (conn Token, empDBName, empRelationName, r);
jQuery.ajaxSetup({async: false});
var result = executeCommand(getPrevRequest, irlParturl); showData (result);
jQuery.ajaxSetup ((async: true});
$('#save').prop("disabled", true);

function getLast() {
var getLastRequest = createLAST_RECORDRequest(conn Token, empD6Name, empRelationName);
jQuery.ajaxSetup({async: false});
var result = executeCommand(getLastRequest, irlPartUrl);
setLastRecNo2LS(result);
showData(result);
jQuery.ajaxSetup({async: true});
$('#first").propt disabled', false);
$('#prev').prop("disabled", false);
$('#last').prop("disabled", true);
$("#next').prop("disabled", true);
}
$(#save').prop("disabled", true);
function saveData() {
var jsonStrObj = validateData(); if (jsonStrobj
"") {
return "";
}

var putRequest = createPUTRequest(connToken, jsonStrobj, empDEName, empRelationName);
 jQuery.ajaxSetup({async: false});
var jsonObj = executeCommand(putRequest, imi Parturl);
jQuery.ajaxSetup({async: true}); 
if(isNoRecordPresentLS()) {
}
setFirstRecNo2LS(jsonObj);
setLastRecNo2LS(jsonObj);
setCurrRecNoZLS(jsonObj);
}
resetForm();
function editData() {
disableForm(false);
$('#empid").prop("disabled", true);
$("Wempname").focus();
disableNav(true);
disableCtrl (true);
$('#change').prop("disabled", false);
$("#reset").prop("disabled', false);
}

function changeData() {
jsonChg validateData();
var updateRequest = createLPDATERecordRequest(conn Token, jsonChg, empDBName, empRelationName, getCurrRecNoFromLS()) 
jQuery.ajaxSetup({async: false});
var jsonObj = executeCommandAtGivenBaseUrl (updateRequest, jpdbBaseURL, jpdb IML);
jQuery.ajaxSetup({async: true});
console.log(jsonObj);
resetForm();
}
$('#empid").focus();
$('#edit').focus();

}

function isNoRecordPresentLS() {
if (getFirstRecNoFrom S() === "0" && getLastRecNoFrom S()
return true;
}

return false;}

function is only OneRecordPresent() {
if (isNoRecordPresentLS()) {
return false;
}
if (getFirstRecNoFrom S() === getLastRecNoFromLS()) {
}
return true;
return false;
function checkForNoOrOneRecord() {
if (isNoRecordPresentLS()) {
}
disableForm(true);
 disableNav (true); 
disableCtrl(true);
$("#new").prop("disabled", false);
return;
if (isOnlyOneRecordPresent()) {
disableForm(true);
disableNav (true);
disableCtrl(true);
$("#new").prop("disabled", false);
 $("#edit").prop("disabled", false);
return;
}
initEmpForm();
 getFirst(); 
getLast();
checkForNoOrOneRecord();

