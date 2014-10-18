// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var uTitle="UhBaUnTaUh Facebook Notification";
while (true) {

  chrome.tabs.query({url:'*.facebook.com/*', active: true}, function(tabs) {
    var tab1 = tabs[0];
    var title=tab1.title.trim();
    		

    if (title!=uTitle && title[0]=="(") {
		alert(title)
		var fbNewMsgCounter=title.split("(")[1].split(")")[0];
		alert(fbNewMsgCounter)
		var notTitle="Facebook New "+fbNewMsgCounter+" Message(s)";
		var notBody=uTitle+": Click to read more information";
		var notify=new Notification(notTitle, {
			icon: 'icon.png',
			body: notBody
		});
		//setTimeout(function() {}, 3000);
		//chrome.notifications.clear(notify,function(){});
	}
    tab1.title=uTitle;
  });
  setTimeout(function() {}, 10000);
}

