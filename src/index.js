const contacts = [
  {
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "online",
  },
  {
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "online",
  },
  {
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "online",
  },
  {
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "online",
  },
  {
    name: "Taka",
    email: "taka@myspace.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "busy",
  },
  {
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "away",
  },
  {
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "online",
  },
  {
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Culver City CA 90234",
    availability: "away",
  },
];

// Generates the list using document.createElement's to dynamically create the widget
function contactGen(contactList) {
  let mainContainer = document.getElementById("dataHolder");
  let i = 0;
  contactList.forEach((contact) => {
    let contactHolder = document.createElement("div");
    contactHolder.className = "contactHolder";
    contactHolder.id = i;
    // EventListener to call function to show extra info
    contactHolder.addEventListener("click", function () {
      toggleInfo(contactHolder.id);
    });

    let nameHolder = document.createElement("div");
    nameHolder.className = "nameHolder";
    nameHolder.id = i;

    // availability
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.id = contact.availability;
    // name
    let nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerHTML = contact.name;
    nameHolder.appendChild(dot);
    nameHolder.appendChild(nameDiv);

    // email
    let infoHolder = document.createElement("div");
    infoHolder.className = "infoHolder";
    let emailDiv = document.createElement("div");
    emailDiv.className = "email";
    emailDiv.innerHTML = contact.email;
    // phone
    let phoneDiv = document.createElement("div");
    phoneDiv.className = "phone";
    phoneDiv.innerHTML = contact.phone;

    // toggle content
    let toggleDiv = document.createElement("div");
    toggleDiv.className = "toggleContent";
    let toggleEmail = document.createElement("div");
    toggleEmail.className = "toggleEmail";
    toggleEmail.innerHTML = contact.email;
    toggleDiv.append(toggleEmail);
    let togglePhone = document.createElement("div");
    togglePhone.className = "togglePhone";
    togglePhone.innerHTML = contact.phone;
    toggleDiv.append(togglePhone);
    let toggleAddress = document.createElement("div");
    toggleAddress.className = "toggleAddress";
    toggleAddress.innerHTML = contact.address;
    toggleDiv.append(toggleAddress);

    infoHolder.append(emailDiv);
    infoHolder.append(phoneDiv);
    infoHolder.append(toggleDiv);

    // Used to create alternating background colors
    contactHolder.className += i % 2 == 0 ? " even" : " odd";
    i++;

    contactHolder.appendChild(nameHolder);
    contactHolder.appendChild(infoHolder);

    mainContainer.appendChild(contactHolder);
  });
  selectView();
}

// Function to toggle between Emails and Phone numbers
// And to reset the view
function selectView() {
  let selected = document.getElementById("viewSelect").value;
  let nonSelected = selected == "phone" ? "email" : "phone";
  let getSelected = document.getElementsByClassName(selected);
  let getNonSelected = document.getElementsByClassName(nonSelected);
  let toggleContent = document.getElementsByClassName("toggleContent");
  let nameHolder = document.getElementsByClassName("nameHolder");

  for (let i = 0; i < getSelected.length; i++) {
    getSelected[i].style.display = "flex";
    toggleContent[i].style.display = "none";
    getNonSelected[i].style.display = "none";
    nameHolder[i].removeAttribute("style");
  }
}

// Function that is called when the user clicks a contact
function toggleInfo(index) {
  let toggleContent = document.getElementsByClassName("toggleContent");
  let nameHolder = document.getElementsByClassName("nameHolder");
  // if the user clicks a contact or another contact close the current
  // one and open the one they clicked
  if (toggleContent[index].style.display === "none") {
    selectView();

    let selected = document.getElementById("viewSelect").value;
    let getSelected = document.getElementsByClassName(selected);

    getSelected[index].style.display = "none";

    toggleContent[index].style.display = "inline";
    nameHolder[index].style.backgroundColor = "#484848";
    nameHolder[index].style.borderRightStyle = "none";
    // if the user clicks the same contact we want it to close
  } else {
    selectView();
  }
}

// Start the generate function
contactGen(contacts);
