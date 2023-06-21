function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    var skillsMemberValueLengthMax = 100;
    var skillsMemberValueLengthMin = 10;
    var skillsMemberValueLengthMinMessage = "Skills must be at least 10 characters";
    var skillsMemberValueLengthMaxMessage = "Skills must be at most 100 characters";
    var skillsMemberValueLengthMessage = "Skills must be between 10 and 100 characters";
    var skillsMemberValueLengthMessageColor = "red";
    var skillsMemberValueLengthMessageColorDefault = "black";
}