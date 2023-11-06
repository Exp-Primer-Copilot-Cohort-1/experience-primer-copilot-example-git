function skillsMember() {
    var member = document.getElementById("member");
    var memberSkill = document.getElementById("memberSkill");
    if (member.checked == true) {
        memberSkill.style.display = "block";
    }
    else {
        memberSkill.style.display = "none";
    }
}