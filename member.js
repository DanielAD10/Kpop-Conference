import {members} from './data.js';

const generateMemberInfo = (data) => { 
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');
  
    const memberImage = document.createElement('img');
    memberImage.classList.add('member-img');
    memberImage.src = data.img;
    memberImage.alt = data.name;

    const memberDetails = document.createElement('div');
    memberDetails.classList.add('member-details');
  
    const memberName = document.createElement('h4');
    memberName.classList.add('member-name');
    memberName.innerHTML = data.name;

    const memberRole = document.createElement('span');
    memberRole.classList.add('member-role');
    memberRole.innerHTML = data.role;

    const divider = document.createElement('hr');
    divider.classList.add('divider');

    const memberAbout = document.createElement('p');
    memberAbout.classList.add('member-about');
    memberAbout.innerHTML = data.about;

    memberDetails.appendChild(memberName);
    memberDetails.appendChild(memberRole);
    memberDetails.appendChild(divider);
    memberDetails.appendChild(memberAbout);

    memberCard.appendChild(memberImage);
    memberCard.appendChild(memberDetails);

    return memberCard;
};
  
const displayMemberInfo = () => {
    const memberContainer = document.querySelector('.member-container');
  
    members.forEach((data) => {
      const memberInfo = generateMemberInfo(data);
      memberContainer.appendChild(memberInfo);
    });
};
displayMemberInfo();
