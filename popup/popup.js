const getTitle = () => {
  console.log("getTitle() = " + document.title);
  return document.title;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Execute Script");
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getTitle
  }, (result) => {
    console.log("Recv result = " + result[0].result);
    document.getElementById("title").innerText = result[0].result;
  });
});