var nameStudentA = "Nguyễn Văn A",
  nameStudentB = "Nguyễn Văn B",
  nameStudentC = "Nguyễn Văn C";
var nameStudentFunthest;
var xA = parseInt(prompt("Nhập tọa độ x của sinh viên A: ")),
  yA = parseInt(prompt("Nhập tọa độ y của sinh viên A: ")),
  xB = parseInt(prompt("Nhập tọa độ x của sinh viên B: ")),
  yB = parseInt(prompt("Nhập tọa độ y của sinh viên B: ")),
  xC = parseInt(prompt("Nhập tọa độ x của sinh viên C: ")),
  yC = parseInt(prompt("Nhập tọa độ y của sinh viên C: "));
var xSchool = parseInt(xSchool, 10);
var ySchool = parseInt(ySchool, 10);

var studentAToSchool = Math.sqrt(
  Math.pow(xA - xSchool, 2) + Math.pow(yA - ySchool, 2)
);
var studentBToSchool = Math.sqrt(
  Math.pow(xB - xSchool, 2) + Math.pow(yB - ySchool, 2)
);
var studentCToSchool = Math.sqrt(
  Math.pow(xC - xSchool, 2) + Math.pow(yC - ySchool, 2)
);

var maxDistance = studentAToSchool;

if (studentBToSchool > maxDistance) {
  maxDistance = studentBToSchool;
} else if (studentCToSchool > maxDistance) {
  maxDistance = studentCToSchool;
} else {
  maxDistance;
}

if (maxDistance === studentAToSchool) {
  nameStudentFunthest = nameStudentA;
} else if (maxDistance === studentBToSchool) {
  nameStudentFunthest = nameStudentB;
} else {
    nameStudentFunthest = nameStudentC;
}
alert(`Sinh viên có khoảng cách xa tường nhất là ${nameStudentFunthest}`);