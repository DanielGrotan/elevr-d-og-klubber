export default function clubMembers(clubMembersList) {
  // Selectors
  const membersContainer = document.querySelector(".members__content");

  // State
  let currentPageIndex = 0;
  const lastPageIndex = clubMembersList.length - 1;

  // On mount
  for (let i = 0; i < clubMembersList.length; i++) {
    const { name, className, email } = clubMembersList[i];

    const memberRow = document.createElement("tr");
    memberRow.className = "members__member-row";

    const nameCell = document.createElement("td");
    nameCell.className = "members__member-name";
    nameCell.innerHTML = name;

    const classNameCell = document.createElement("td");
    classNameCell.className = "members__member-class-name";
    classNameCell.innerHTML = className;

    const emailCell = document.createElement("td");
    emailCell.className = "members__member-email";
    emailCell.innerHTML = email;

    memberRow.appendChild(nameCell);
    memberRow.appendChild(classNameCell);
    memberRow.appendChild(emailCell);

    membersContainer.appendChild(memberRow);
  }

  // Handlers

  // Events
}
