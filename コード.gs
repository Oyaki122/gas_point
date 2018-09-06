var id='1xPdKhkGuSQSFMghA9e-3cHN_xdXCxzrooRa5ioaHnWs';
var sheet=SpreadsheetApp.openById(id).getSheetByName("シート1");

function doGet(e) {
  return HtmlService.createTemplateFromFile('シート').evaluate();
}

function getData(alg) {
  var rowdata=[];
  
 rowdata[0]=sheet.getRange(47,2).getValues();

 rowdata[1]=sheet.getRange(48,2).getValues();

 rowdata[2]=sheet.getRange(47,3).getValues();

 rowdata[3]=sheet.getRange(48,3).getValues();

 rowdata[4]=sheet.getRange(47,4).getValues();
  
 rowdata[5]=sheet.getRange(48,4).getValues();

 rowdata[6]=sheet.getRange(47,5).getValues();

 rowdata[7]=sheet.getRange(48,5).getValues();
  return rowdata;

}