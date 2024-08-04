// Function to update content based on selected language
export function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = (key.split('.')).reduce((obj, k) => obj && obj[k], langData);
      element.innerHTML = value;
    });
  }

// Function to fetch language data
 export async function fetchLanguageData(lang) {
    const response = await fetch(`assets/languages/${lang}.json`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  
//Function to add click listener
export function addClickListener(element=null, fn=null){
    if (element && typeof fn === 'function') {
        element.addEventListener('click', fn);
    } else {
        console.error('Error adding click listener languages');
    }
}

//Function to handle selected languages
export function handleLanguages(type=""){
    type = type.toLowerCase();
    if(type==="es" || type === "en"){
        localStorage.setItem('language', type);
  window.location.reload();
    }
}