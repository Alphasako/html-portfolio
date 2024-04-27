
function redirectToUrl(pageIdentifier) {
  let url;
  switch (pageIdentifier) {

    case 'foodWeb':
      url = 'https://foodallergycard-app.com/';
      break;
    case 'foodIos':
      url = 'https://apps.apple.com/ch/app/food-allergy-card/id6448350429';
      break;
    case 'foodAndroid':
      url = 'https://play.google.com/store/apps/details?id=sakomm.com.AllergyPass';
      break;

    case 'speakWeb':
      url = 'https://speak-control.com/';
      break;
    case 'speakIos':
      url = 'https://apps.apple.com/ch/app/speak-control/id1617813042';
      break;
    case 'speakAndroid':
       url = 'https://play.google.com/store/apps/details?id=com.speak.control';
       break;


    case 'bustedWeb':
      url = 'https://busted-app-mobile.com/';
      break;
    case 'bustedIos':
      url = 'https://apps.apple.com/ch/app/busted/id1531492554';
      break;
    case 'bustedAndroid':
      url = 'https://play.google.com/store/apps/details?id=com.bustedmobile.app';
      break;

      case 'linkedin':
        url = 'https://www.linkedin.com/in/alphadjo-sako-b0232a80/';
        break;


    case 'localocaGit':
      url = 'https://github.com/Alphasako/LocaLoca';
      break;

      case 'ventyGit':
        url = 'https://github.com/Alphasako/eventsApp';
        break;


    // Add more cases as needed
    default:
      url = 'index.html'; // Default case if none of the identifiers match
      break;
  }
  window.location.href = url;
}
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("techSkills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}



function showTechSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="skills-content">
      <img class="skills-image" src=${skill.icon}>
      <span class="skills-title">${skill.name}</span>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
  showTechSkills(data);
});


let myScrollButton = document.getElementById("scroll")

window.addEventListener('scroll', function () { 
  if (document.body.scrollTop > 20 
      || document.documentElement.scrollTop > 20) { 
        myScrollButton.style.display = 'block'; 
  } else { 
    myScrollButton.style.display = 'none'; 
  } 
}); 

function hover(element) {
  element.setAttribute('src', '../assets/images/dopha-smile.png');
}

function unhover(element) {
  element.setAttribute('src', '../assets/images/dopha.png');
}