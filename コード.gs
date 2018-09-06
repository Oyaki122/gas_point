var id='1xPdKhkGuSQSFMghA9e-3cHN_xdXCxzrooRa5ioaHnWs';
var sheet=SpreadsheetApp.openById(id).getSheetByName("シート1");

function doGet(e) {
  return HtmlService.createTemplateFromFile('シート').evaluate();
}

function getData(alg) {
if(alg=="total1") {
return sheet.getRange(47,2).getValues();
}
else if(alg=="total2") {
return sheet.getRange(48,2).getValues();
}
else if(alg=="male1") {
return sheet.getRange(47,3).getValues();
}
else if(alg=="male2") {
return sheet.getRange(48,3).getValues();
}
else if(alg=="female1") {
return sheet.getRange(47,4).getValues();
}
else if(alg=="female2") {
return sheet.getRange(48,4).getValues();
}
else if(alg=="other1") {
return sheet.getRange(47,5).getValues();
}
else if(alg=="other2") {
return sheet.getRange(48,5).getValues();
}
}