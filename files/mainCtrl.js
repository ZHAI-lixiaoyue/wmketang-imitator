angular.controllers.controller("mainCtrl",["$interval","$ionicHistory","$state","$timeout","$scope","request","mySocket","user","localStorage","$rootScope",function(e,n,i,r,t,o,a,c,s,u){t.appConfig=appConf,t.isIOS=ionic.Platform.isIOS(),t.isWeiXin=ionic.Platform.isWeiXin(),t.homeMessage={messageTotal:0},t.$goBackMain=function(){n.backView()?n.goBack():i.go("main.home")},u.handleStr=function(e,n,i){if(e){if(u.isShowInfo)return e;var r,t;0==n&&(r=3,t=3),1==n&&(r=0,t=e.indexOf("@")+1),2!=n&&3!=n||(r=1,t=1);for(var o=e.length-r-t,a="",c=i||"*",s=0;s<o;s++)a+=c;return e.substring(0,r)+a+e.substring(e.length-t)}},u.user=c.user,t.returnLT100=function(e){return e?e<100?e:100:0};var f,l=s.getObject("redirect");if(l.type){t.formWeixin=!0;var m=l.param;c.user.info.children.forEach((function(e,n){e&&e.ktinfo&&e.ktinfo.uid==m.chID&&(c.user.childS=e,c.user.info.childIndex=n,c.saveUser())})),f=e((function(){if(c.user.childS&&c.user.childS.ktinfo&&c.user.childS.ktinfo.ssk){var n,r;switch(e.cancel(f),l.type){case 2:n="main.homeworkDetail",r={uid:m.chID,assignmentId:m.assignmentId};break;case 3:n="main.examInfo",r={uid:m.chID,examinationID:m.examinationID};break;case 4:n="main.weekPerform",r={uid:m.chID}}i.go(n,r),s.remove("redirect")}}),200),r((function(){e.cancel(f)}),3e4)}t.returnCNN=function(e){return e.toLocaleString("zh-Hans-CN-u-nu-hanidec")},t.returnInt=function(e){return parseInt(e)}}]);