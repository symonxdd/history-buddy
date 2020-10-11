setInterval(() => {
    removeHistory();
}, 3000);

chrome.browserAction.onClicked.addListener(() => {
    removeHistory();
});

function setIcon(type) {
    const successImage = chrome.runtime.getURL("src/img/success.png");
    const errorImage = chrome.runtime.getURL("src/img/error.png");
    const defaultImage = chrome.runtime.getURL("src/img/default.png");

    switch (type) {
        case "success":
            chrome.browserAction.setIcon({ path: successImage });
            break;
        case "error":
            chrome.browserAction.setIcon({ path: errorImage });
            break;
    }

    setTimeout(() => {
        chrome.browserAction.setIcon({ path: defaultImage });
    }, 750);
}

function removeHistory() {
    try {
        chrome.browsingData.removeHistory({});
        setIcon("success");
    } catch (error) {
        console.error(error);
        setIcon("error");
    }
}