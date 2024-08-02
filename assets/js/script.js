import {handleScreenResize} from "./responsive-navbar.js";
import {updateContent, fetchLanguageData, handleLanguages, addClickListener} from "./language.js";


//Change selection navbar-menu
window.addEventListener('resize', handleScreenResize);

window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'es';
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
  handleScreenResize();
  document.body.classList.add("flex");
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar-menu li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

window.lang_options = lang_options;

export function lang_options(checkbox) {
    var overlay = document.getElementById('overlay_lang_options');
    if (checkbox.checked) {
      overlay.style.display = 'flex';
    } else {
      overlay.style.display = 'none';
    }

    console.log("done");

  }


addClickListener(document.getElementById("btnES"), ()=>handleLanguages("ES"));
addClickListener(document.getElementById("btnEN"), ()=>handleLanguages("EN"));