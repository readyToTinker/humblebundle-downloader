const targetUrl = "https://www.humblebundle.com/home/library"


chrome.runtime.onInstalled.addListener(() => {
    console.log("TODO: Initiate application state.")
});


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(targetUrl)) {
        renderDownloaderPage(tab)
    } 
});


function renderDownloaderPage(tab){
    console.log("This is the proper page: ", tab.id);
}