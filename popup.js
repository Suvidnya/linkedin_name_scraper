var sta;
var dne;
document.getElementById("go").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");
    chrome.tabs.executeScript(
        {file: "execute.js"} 
    );
});
