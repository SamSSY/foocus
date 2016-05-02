chrome.tabs.query({/* active: true, lastFocusedWindow: true*/}, (arrayOfTabs) => {
  // since only one tab should be active and in the current window at once
  // the return variable should only have one entry
  var activeTab = arrayOfTabs[0];
  var activeTabId = activeTab.id; 
  console.log(arrayOfTabs);
  chrome.tabs.remove(arrayOfTabs[0].id, () => {
    console.log("close tab[0]!");
  });
});