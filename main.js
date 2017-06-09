var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


// var keys = Object.keys(formData[0]);
// console.log(keys);
// var values = Object.values(formData[0]);
// console.log(values);

var formNode = document.getElementById('wrapper');
var divFormNode =document.getElementById('form');
// var i;
for(var i=0; i < formData.length; i++){
  // var keys = Object.keys(formData[i]);
  // console.log(keys);
  // var yo = Object.values(formData[i]);
  // console.log(values);
  var boxOne = document.createElement('input');
  var input = formData[i];
  if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
  var boxOne = document.createElement('input');
  divFormNode.appendChild(boxOne);
} else if (input.type === 'select') {
  var boxOne = document.createElement('select');
  divFormNode.appendChild(boxOne);
} else if (input.type === 'textarea') {
  var boxOne = document.createElement('textarea');
  divFormNode.appendChild(boxOne);
}
    boxOne.setAttribute("type", formData[i].index);
    boxOne.setAttribute("placeholder", formData[i].label);
    boxOne.setAttribute("id", formData[i].id);
    boxOne.setAttribute("icon", formData[i].icon);
    boxOne.setAttribute("options", formData[i].option);
    divFormNode.appendChild(boxOne);
}


for (var i = 0; i < formData[4].options.length; i++) {
  var inputOptions = formData[4].options[i];
  var selectOptions = document.createElement('option');
  selectOptions.setAttribute('value', inputOptions.value);
  selectOptions.textContent = inputOptions.label;
  document.getElementById('user-language').appendChild(selectOptions);
}

// for(var i=0; i < formData.length; i++){
//   var htmlData = formData[i];
//   console.log(htmlData);
// }

// var boxOne = document.createElement('input');
// boxOne.setAttribute("type", formData[0].type);
// boxOne.setAttribute("label", formData[0].label);
// boxOne.setAttribute("id", formData[0].id);
// boxOne.setAttribute("icon", formData[0].icon);
// boxOne.setAttribute("options", formData[0].options);
// divFormNode.appendChild(boxOne);

// var boxOneLabel = document.createElement("value");
// boxOneLabel.setAttribute("value", "first name");
// divFormNode.appendChild(boxOne);
// console.log(boxOneLabel);
