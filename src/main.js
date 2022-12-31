// ******************
// Import Main Styles
// ******************
import './style.scss';

// Wait  HTML document to be completely parsed
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // const main = document.getElementById('main');

  const routes = {
    './calculator': async () => {
      // load about page
      let response = await fetch('/features/calculator/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/calculator/main');
      await import('./features/calculator/style.scss');
    },

    './password-generator': async () => {
      // load the contact page
      let response = await fetch('/features/password-generator/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/password-generator/main');
      await import('./features/password-generator/style.scss');
    },
    './currency-converter': async () => {
      // load the contact page
      let response = await fetch('/features/currency-converter/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/currency-converter/main');
      await import('./features/currency-converter/style.scss');
    },
    './unit-converter': async () => {
      // load the contact page
      let response = await fetch('/features/unit-converter/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/unit-converter/main');
      await import('./features/unit-converter/style.scss');
    },
  };

  window.onpopstate = () => {
    // get the current URL
    const currentUrl = window.location.pathname;
    // invoke the route handler for the current URL
    routes[currentUrl]();
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    // get the clicked link's URL
    const clickedUrl = event.target.getAttribute('href');

    // push the clicked URL to the browser history
    window.history.pushState({}, '', clickedUrl);
    // // invoke the route handler for the clicked URL
    // routes[clickedUrl]()
    // check if the routes object has a property with the key equal to the clickedUrl value
    if (routes.hasOwnProperty(clickedUrl)) {
      // invoke the route handler for the clicked URL
      routes[clickedUrl]();
    } else {
      // handle the case where there is no matching route
      console.error(`No route found for ${clickedUrl}`);
    }
  };

  // add event listeners to all links in the app
  document.querySelectorAll('.btn').forEach((link) => {
    link.addEventListener('click', handleLinkClick);
  });
});
