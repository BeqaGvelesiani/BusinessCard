const personalInfoBtn = document.getElementById("personal-info-btn");
const companylInfoBtn = document.getElementById("company-info-btn");
const socialInfoBtn = document.getElementById("social-info-btn");

const personalInfo = document.getElementById("personal-info");
const companylInfo = document.getElementById("company-info");
const sociallInfo = document.getElementById("social-info");

const bulb = document.getElementById("bulb");
const root = document.querySelector(":root");

personalInfoBtn.addEventListener("click", () => {
  personalInfo.style.display = "flex";
  companylInfo.style.display = "none";
  sociallInfo.style.display = "none";
  personalInfoBtn.className = "current-button personal-info";
  companylInfoBtn.className = "company-info";
  socialInfoBtn.className = "social-info";
});

companylInfoBtn.addEventListener("click", () => {
  personalInfo.style.display = "none";
  companylInfo.style.display = "flex";
  sociallInfo.style.display = "none";
  personalInfoBtn.className = "personal-info";
  companylInfoBtn.className = "current-button company-info";
  socialInfoBtn.className = "social-info";
});

socialInfoBtn.addEventListener("click", () => {
  personalInfo.style.display = "none";
  companylInfo.style.display = "none";
  sociallInfo.style.display = "flex";
  personalInfoBtn.className = "personal-info";
  companylInfoBtn.className = "company-info";
  socialInfoBtn.className = "current-button social-info";
});

bulb.addEventListener("change", () => {
  if (bulb.checked) {
    root.style.setProperty("--color1", "#e9e9e9");
    root.style.setProperty("--color4", "whitesmoke");
    root.style.setProperty("--text-color", "#252525");
    root.style.setProperty("--active-color", "#f2f2f2");
  } else if (bulb.checked == false) {
    root.style.setProperty("--color1", "#23252a");
    root.style.setProperty("--color4", "#1b1b1b");
    root.style.setProperty("--text-color", "whitesmoke");
    root.style.setProperty("--active-color", "#2c2e35");
  }
});

var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Beqa Gvelesiani",
    phone: "+995591015544",
    email: "beqagvelesiani1990@gmail.com",
  };
  // create a vcard file
  var vcard =
    "BEGIN:VCARD\nVERSION:4.0\nFN:" +
    contact.name +
    "\nTEL;TYPE=work,voice:" +
    contact.phone +
    "\nEMAIL:" +
    contact.email +
    "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);

  const newLink = document.createElement("a");
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;

  newLink.click();
});
