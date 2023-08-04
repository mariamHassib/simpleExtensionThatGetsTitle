// Listen msg from content--initial version

chrome.runtime.onInstalled.addListener(() => {
  console.log("Hello World!");
});

var value1,value2,value3;

chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    console.log("inside the message listener");
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});
//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //    if (request.product) {
    //    console.log('Product Name: ' + request.product);
      //  chrome.runtime.sendMessage({product: request.product });
      //}
      
//});

//chrome.tabs.getSelected(null, function(tab) { //<-- "tab" has all the information
  //console.log(tab.url);       //returns the url
  //console.log(tab.title);     //returns the title
//});
//function doStuffWithDOM(infoHtmlText) {
  //alert("I received the following DOM content:\n" + infoHtmlText);
  //chrome.extension.getBackgroundPage().info = infoHtmlText;
//}


//chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
  //    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
    //      chrome.tabs.sendMessage(tab.id, { status: "ok" },function(response){
      //      infoHtmlText = $("#domElement").text();
        //     doStuffWithDOM(infoHtmlText);
          //});
        //}
//})

//use long connect
//let port;
//chrome.runtime.onConnect.addListener(function (newPort) {
  //  port = newPort;
   // console.log("Connected to Popup.");
 // }
//);

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //if (request.product) {
    //console.log('Product Name: ' + request.product);
    //if (port) {
     // port.postMessage({product_forpopup: request.product });
    //}
  //}
//}
//);


  