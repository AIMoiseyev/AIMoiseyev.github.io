let navigations = document.querySelectorAll('.naviganion');

for (let navigation of navigations) {

  function handleNavigation(elem) {
    elem.preventDefault()

    const idName = elem.target.getAttribute('href').substr(1);

    document.getElementById(idName).scrollIntoView({block: "start", behavior: "smooth"});
  }

  navigation.addEventListener('click', handleNavigation);
}

