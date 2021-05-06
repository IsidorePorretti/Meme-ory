// front-end/src/app/utils/utils.js
export function parseUrl() {
    debugger; // <---
    const url = window.location.href;

    return (window.location.href
        .split('?')[1] || ''
        )
        .split('&')
        .map(element => element.split('='))
        .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
        }, {});
   
  }
  

  // TODO Step 6 implement getTemplate() {}
