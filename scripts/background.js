//"https://www.humblebundle.com/home/library"
const targetUrlMatcher = { hostEquals: 'www.humblebundle.com', pathContains: "home/library", schemes: ['https'] }




chrome.runtime.onInstalled.addListener(() => {
    console.log("TODO: Initiate application state.")


    /*
    // Enable action only on humblebundle
    chrome.action.disable();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        let humbleBundleRule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: targetUrlMatcher,
                })
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
        };

        // Finally, apply our new array of rules
        let rules = [humbleBundleRule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
*/
});


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(targetUrl)) {
        renderDownloaderPage(tab)
    }
});


function renderDownloaderPage(tab) {
    console.log("This is the proper page: ", tab.id);
}