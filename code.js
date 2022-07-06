let skills = [
  { skill : 'HTML' , rating : 5 },
  { skill : 'CSS' , rating : 5 },
  { skill : 'Javascript' , rating : 5 },
  { skill : 'React' , rating : 4 },
  { skill : 'React Native' , rating : 4 },
  { skill : 'GIT' , rating : 3 },
];

let skillsContainer = document.getElementById('skillsContainer');

let skillsTemplate = ``;

for(let i=0;i<skills.length;i++) {
  console.log(skills[i].skill);
  skillsTemplate += `
  <li class="skillsItem">
    <div class="skillsContainer">
      <div class="skillsTitle">${skills[i].skill}</div>
      <div class="skillsPercent">`

  for(let j=1;j<=5;j++) {
    if( skills[i].rating > j ) {
      skillsTemplate += `<span class="fill"></span>`;
    } else {
      skillsTemplate += `<span></span>`;
    }
  }
        
  skillsTemplate +=    
      `</div>
    </div>
  </li>
  `;
}

skillsContainer.innerHTML = skillsTemplate;



let contacts = [
  { id : 'sjabd.ir' , icon : 'fa fa-globe' , href : 'https://www.sjabd.ir' },
  { id : 'mynameissajjad@gmail.com' , icon : 'fa fa-envelope' , href : 'mailto:mynameissajjad@gmail.com' } ,
  //{ id : 'sajjad.abd__' , icon : 'fa fa-instagram' , href : 'https://www.instagram.com/sajjad.abd__' },
  { id : 'sajjad-abdollahi' , icon : 'fa fa-linkedin' , href : 'https://www.linkedin.com/in/sajjad-abdollahi/' },
  { id : '+98 938 130 8994' , icon : 'fa fa-whatsapp' , href : 'https://wa.me/+989381308994' },
  //{ id : '+98 938 130 8994' , icon : 'fa fa-phone' , href : 'tel:+989381308994' },
  { id : 'sjabd' , icon : 'fa fa-telegram' , href : 'https://t.me/+989381308994' },
  
  { id : 'sajjadabd' , icon : 'fa fa-github' , href : 'https://www.github.com/sajjadabd' },
];

let contactList = document.getElementById('contactList');


let contactTemplate = ``;

for(let i=0;i<contacts.length;i++) {
  contactTemplate += `
    <li>
      <span class="icon">
        <i class="${contacts[i].icon}"></i>
      </span>
      <span class="contactInfo">
        <a href="${contacts[i].href}">
          ${contacts[i].id}
        </a>
      </span>
    </li>
  `;
}


contactList.innerHTML = contactTemplate;



let educations = [
  { 
    from : '2010' , 
    to : '2013' , 
    header : 'Software Engineering' , 
    content : 'University Of Mazandaran' 
  } ,
  { 
    from : '2017' , 
    to : '2020' , 
    header : 'Software Engineering' , 
    content : 'Azad University of Neka' ,
    projectDetails : `
    My main project was about
    <span class="colorText">watchman route problem</span>
    that
    is about the smallest routing
    path a watchman should go
    to see all the space on the
    room –
    available on my github
    github.com/sajjadabd
    `
  } ,
  //{ from : '' , to : '' , header : '' , content : '' } ,
  //{ from : '' , to : '' , header : '' , content : '' } ,
];

let educationContainer = document.getElementById('educationContainer');

let educationTemplate = ``;

for(let i=0;i<educations.length;i++) {
  educationTemplate += `
  <div class="wrapper educations">
    <div class="years">
      <span>${educations[i].from}</span>
      <span> - </span>
      <span>${educations[i].to}</span>
    </div>
    <div class="educationContent">
      <h4>${educations[i].header}</h4>
      <p>${educations[i].content}</p>
      <p>${
        educations[i].projectDetails != undefined 
        ?
        educations[i].projectDetails
        :
        ''
      }</p>
    </div>
  </div>
  `;
}


educationContainer.innerHTML = educationTemplate;




let workExperiences = [
  { 
    from : '2020' , 
    to : 'NOW' , 
    header : 'Question Selling App' , 
    subject : 'Creating and Developement',
    content : `Question Selling App is written in React Native 
    with Page Navigation for Profile and Bookmarks with 
    lots of theming , Main purpose of the app is for 
    selling questions of seasons and branches`,
    contentItems : [
      'Creation of Mobile app with React Native',
      'Platform for users to Buy and Read Questions',
    ],
    beforeTechMargin : 140 ,
    technologies : [
      'React Navigation for Transfer between pages',
      'Style components for theming',
      'Redux for theming and storing global variables',
      'Axios for sending AJAX requests',
      'Clean Code written',
    ],
    afterTechMargin : 0 ,
    achievements : [
      'In App Billing for Buying Questions',
      'Theming the Software for beautiful Colors',
      'Ability to save questions and branches',
      'SMS sending for user authentication',
    ],
  } ,
  { 
    from : '2019' , 
    to : '2021' , 
    header : 'NekaBeauty Online Shop' , 
    subject : 'Creating and Developement',
    content : `nekabeauty is an online cosmetics retail shop 
    written in PHP with self made framework with MySQL 
    in back-end , works perfectly with AJAX requests and JSON`,
    contentItems : [
      'Creation of online shop for buying cosmetics',
      'Maintenance of existing infrastructure',
    ],
    technologies : [
      'self made PHP framework (backend is a REST interface)',
      'jQuery with AJAX and JSON for the easy frontend interaction',
      'HTML5/CSS3 for the frontend',
    ],
    achievements : [
      'ability for users to sign up with their phone number',
      'Custom Made CMS for Managing The Shop',
      'load products on scroll',
      'ability to save products',
    ],
  } ,
  // { 
  //   from : '' , 
  //   to : '' , 
  //   header : '' , 
  //   subject : '',
  //   content : ``,
  //   contentItems : [
  //     '',
  //     '',
  //   ],
  //   technologies : [
  //     '',
  //     '',
  //     '',
  //   ],
  //   achievements : [
  //     '',
  //     '',
  //     '',
  //     '',
  //   ],
  // } ,
];

let workExperienceContainer = document.getElementById('workExperienceContainer');

let workExperienceTemplate = ``;

for(let i=0;i<workExperiences.length;i++) {
  workExperienceTemplate += `
  <div class="wrapper works">
    <div class="years">
      <span>${workExperiences[i].from}</span>
      <span> - </span>
      <span>${workExperiences[i].to}</span>
    </div>
    <div class="worksContent">
      <h4>${workExperiences[i].header}</h4>
      <h5>${workExperiences[i].subject}</h5>
      <p>${workExperiences[i].content}</p>
    </div>
  </div>
    
    <div class="contentItems">
      <ul class="contentItems">`;

    for(let j=0;j<workExperiences[i].contentItems.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].contentItems[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;


    workExperienceTemplate += `${
      workExperiences[i].beforeTechMargin != undefined
      ?
      `<p style="height:${workExperiences[i].beforeTechMargin}px"></p>`
      :
      ``
    }`;

    workExperienceTemplate +=  `
    <div class="contectItemsHeader">
    ${ 
    workExperiences[i].technologies.length == 0 
    ?
    ``
    :
    `Technologies include:`
    }
    </div>
    `

    workExperienceTemplate += `
    <div class="contentItems">
      <ul class="contentItems">
    `;

    for(let j=0;j<workExperiences[i].technologies.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].technologies[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;


    workExperienceTemplate += `${
      workExperiences[i].afterTechMargin != undefined
      ?
      `<p style="height:${workExperiences[i].afterTechMargin}px"></p>`
      :
      ``
    }`;



    workExperienceTemplate +=  `
    <div class="contectItemsHeader">
    ${ 
    workExperiences[i].achievements.length == 0 
    ?
    ``
    :
    `Achievements include:`
    }
    </div>
    `


    workExperienceTemplate += `
    <div class="contentItems">
      <ul class="contentItems">
    `;

    for(let j=0;j<workExperiences[i].achievements.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].achievements[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;



    workExperienceTemplate += `
    </div>`;

    workExperienceTemplate += `<p class="articleSeperator"></p>`;
  ;
}

workExperienceContainer.innerHTML = workExperienceTemplate;