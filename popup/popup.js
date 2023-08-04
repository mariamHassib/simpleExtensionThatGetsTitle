const getTitle = () => {
  console.log("in get title");
  console.log("getTitle() = " + document.title);
 // console.log("getTitle() = " + document.getElementById("productTitle").value);
  return document.title;
}

const getProductName = () => {
  console.log("in get productname");
  console.log("getProductName() = " + document.getElementsByTagName("productTitle").value);
 // console.log("getTitle() = " + document.getElementById("productTitle").value);
  return document.getElementById("productTitle").innerHTML;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Execute Script 1");
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getTitle
  }, (result) => {
    console.log("Webpage Title = " + result[0].result);
    document.getElementById("title").innerText ="Webpage Name:"+ result[0].result;
   //document.getElementById("Title").innerText = result[0].result;
  //  console.log(document.getElementsByName("productTitle").innerText);
  });

  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getProductName
  }, (result) => {
    console.log("Product Title = " + result[0].result);
    document.getElementById("productname").innerText ="Product Name:"+ result[0].result;
  //  console.log(document.getElementsByName("productTitle").innerText);
  });

});