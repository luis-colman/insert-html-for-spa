// Function that will capture the Page ID associated with this extension change
function onActionApplied(event) {
  window['page_'+extension.$instance] = event.data.pageId;
}

// Event listener to fire function to capture Page ID (defined above)
window.optimizely.push({
  'type': 'addListener',
  'filter': {
    'type': 'action',
    'name': 'applied'
  },
  'handler': onActionApplied
});

var vars = {};
vars['selectorField_'+extension.$instance] = extension.reference_element;
vars['htmlContent_'+extension.$instance] = extension.html_content;

// Apply actions only if extension fields are not empty
if (vars['selectorField_'+extension.$instance] !== '' && vars['htmlContent_'+extension.$instance] !== '') {
  
  // Function that will insert new HTML content
  function insertHtml() {
    var newHtml = document.createElement('span');
    newHtml.innerHTML = extension.html_content;
    newHtml.setAttribute('optly-change-'+extension.$instance,'');
    document.querySelector(extension.reference_element).insertAdjacentElement(extension.insert_position, newHtml);
  }
  
  // 1) Retrieve the utils library
  var utils = window['optimizely'].get('utils');

  // 2) Wait for reference element to exist in the DOM
  utils.waitForElement(extension.reference_element).then(function() {

    // 3) Apply change before activating the MutationObserver
    document.querySelector(extension.reference_element).parentNode.setAttribute('optly-'+extension.$instance,'');
    if (!document.querySelector('[optly-change-'+extension.$instance+']')) {
      insertHtml();
    } else {
    	document.querySelector('[optly-change-'+extension.$instance+']').innerHTML = extension.html_content;
    }

    // 4) Define element to observe
    vars['target_'+extension.$instance] = document.querySelector('[optly-'+extension.$instance+']');

    // 5) MutationObserver Config Options
    vars['config_'+extension.$instance] = {
      //attributes: true,  // uncomment line if ever needed
      //characterData: true, // uncomment line if ever needed
      //subtree: true, // uncomment line if ever needed
      childList: true
    };

    // 6) Mutation Subscriber Function
    vars['subscriber_'+extension.$instance] = function(mutations) {
      mutations.forEach(function(mutation) {
        
        // 7) Check if the Page where this change lives is active
        if (optimizely.get('state').getPageStates()[window['page_'+extension.$instance]].isActive) {

          // 8) If the Page where this change lives is active, check if previously inserted HTML is still there and if not, re-apply change
          if (!document.querySelector('[optly-change-'+extension.$instance+']')) {
            insertHtml();    
          }
        }

        // 9) If the Page where this change lives is not active, disconnect MutationObserver (for later on)
        else {
          vars['observer_'+extension.$instance].disconnect();
        }
      });
    };

    // 10) Activate Mutation Observer
    vars['observer_'+extension.$instance] = new MutationObserver(vars['subscriber_'+extension.$instance]);
    vars['observer_'+extension.$instance].observe(vars['target_'+extension.$instance], vars['config_'+extension.$instance]);
  });
}
