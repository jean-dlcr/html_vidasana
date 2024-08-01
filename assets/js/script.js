function lang_options(checkbox) {
  var overlay = document.getElementById('overlay_lang_options');
  if (checkbox.checked) {
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
  }
}

//Change selection navbar-menu

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar-menu li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});



 // Function to fetch language data
 async function fetchLanguageData(lang) {
    const response = await fetch(`assets/languages/${lang}.json`);
    const jsonResponse = await response.json(); // Aquí se convierte la respuesta en JSON
    console.log(jsonResponse); // Imprimir el JSON completo
    return jsonResponse;
  }
  

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = (key.split('.')).reduce((obj, k) => obj && obj[k], langData);
      element.textContent = value;
    });
  }


// Resolution


var nav_end = document.querySelector('.navbar-end');
var lang_btn = document.querySelector('.languages');
  

function handleScreenResize() {
    const nav_end = document.querySelector('.navbar-end');
    const lang_btn = document.querySelector('.languages');
    
    if (window.innerWidth <= 760) {
        document.querySelector('header').appendChild(lang_btn);
        document.querySelector('.menu-items').appendChild(nav_end);
    } else {
        nav_end.insertBefore(lang_btn, nav_end.firstChild);
        document.querySelector('.navbar').appendChild(nav_end);
    }
}

//Change parent of lang-btn
window.addEventListener('resize', handleScreenResize);


//On load

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'es';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    handleScreenResize();
    document.body.classList.add("flex");
  });





