document
  .getElementById("application")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("mail").value;
    var phone_no = document.getElementById("ph_no").value;

    if (fname == "" || lname == "" || email == "" || phone_no == "") {
      alert("Please fill all fields under Personal Information");
      return false;
    }

    var coverLetter = document.getElementById("coverLetter").value;
    if (coverLetter == "") {
      alert("Please enter a cover letter");
      return false;
    }

    var education_level = document.getElementById("level").value;
    var school_name = document.getElementById("school").value;
    var major = document.getElementById("major").value;
    var graduation_year = document.getElementById("gradyear").value;

    if (
      school_name == "" ||
      education_level == "" ||
      major == "" ||
      graduation_year == ""
    ) {
      alert("Please fill all fields under Education");
      return false;
    }

    var agree = document.getElementById("agree").checked;
    var privacy = document.getElementById("privacy").checked;

    if (!agree || !privacy) {
      alert("Please agree to the terms & conditions and privacy policy");
      return false;
    }

    alert("Form submitted successfully");

    var table = document.getElementById("app-table");

    var row = table.insertRow();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var name = fname + " " + lname;
    var email = document.getElementById("mail").value;
    var phone_no = document.getElementById("ph_no").value;
    var cover_letter = document.getElementById("coverLetter").value;
    var education_level = document.getElementById("level").value;
    var file_name = document.getElementById("resume").files[0].name;

    row.innerHTML =
      "<td>" +
      name +
      "</td><td>" +
      email +
      "</td><td>" +
      phone_no +
      "</td><td>" +
      file_name +
      "</td><td>" +
      cover_letter +
      "</td><td>" +
      education_level +
      "</td>";

    table.appendChild(row);
    document.getElementById("application").reset();
  });

function viewApplications() {
  var table = document.getElementById("app-table");
  if (table.style.display === "") {
    table.style.display = "table";
  } else {
    table.style.display = "";
  }
}
