console.log("Hello");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let activeTab = tabs[0];
    let activeTabId = activeTab.id;
    
    // Use the activeTabId to execute a script in the active tab context
    chrome.scripting.executeScript({
      target: {tabId: activeTabId},
      func: getPageDOM
    }, function(results) {
      // Handle the DOM content returned from the active page
      console.log(results[0].result);
    });
  });
  
  function getPageDOM() {
    // This function will execute in the context of the active page
    return document.documentElement.outerHTML;
  }