/** Problem 04 - (Delete / Store) */
var fileName = "Data.jpg";
//write your code here

var splitted = fileName.split(".");
if (
  splitted[splitted.length - 1] === "pdf" ||
  splitted[splitted.length - 1] === "docs" ||
  fileName[0] === "#"
) {
  console.log("Store");
} else {
  console.log("Delete");
}
