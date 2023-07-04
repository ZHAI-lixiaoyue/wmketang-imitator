angular.controllers.controller("stuHomeworkTestResultCtrl",["requestTF","$timeout","$scope","historyFactory","$selectTeacher","$state","$request","$stateParams","$ionicPlatform","$ionicHistory","stuCorrect","$prompt","$openResourceWeike",function(e,t,a,i,o,n,s,c,r,d,u,l,p){if(c.view&&"answer"==c.view&&1!=appConf.appType){var g=d.backView();!g||"tab.stuHomeworkAnswer.do"!=g.stateName&&"main.stuHomeworkAnswer.do"!=g.stateName?i.clearBack(1):i.clearBack(2)}a.$stateParams=c,a.hideAnswer=c.hideAnswer;var h=a.user,f=h.info.utype;a.type=c.type;var m={};a.title="测试结果";var I,w=null;a.$on("$ionicView.beforeEnter",(function(){w=r.registerBackButtonAction((function(e){a.back()}),501),a.isLoaded=!1,m={title:c.title,index:0,subjectId:"",exerciseIds:[],aqids:[],aeid:c.aeid},a.getData()})),a.$on("$ionicView.beforeLeave",(function(){w()})),a.getData=function(){u.getExamDetailTopic(c.aeid,(function(e){if(e.data){e.data.publicUserTypeObject&&e.data.publicUserTypeObject.forEach((function(e){3==e.userTypeID&&(c.openStatus=e.status)})),a.isLoaded=!0,a.detail=e.data,m.subjectId=e.data.detail.subjectId,m.examID=e.data.eid;var t=0;a.title=" ",angular.forEach(a.detail.topic,(function(e,i){a.detail.topic[i].total=t,t+=e.exercises.length,angular.forEach(e.exercises,(function(e){m.exerciseIds.push(e.id),m.aqids.push(e.aqid||null),e.item.forEach((function(t){t.aexid||(e.unanswer=!0,t.unanswer=!0)}))}))}))}else a.dataNone=!0}),(function(e){a.dataError=!0,l.showTip(e.msg)}),null,c.sceneID)},a.toDetail=function(e,t,i){m.index=e,m.itemIndex=t,m.hideAnswer=c.hideAnswer,m.assignmentItemID=c.assignmentItemID,m.classID=c.classID,m.isOpenEachLook=c.isOpenEachLook,m.sceneID=c.sceneID;var o=[];a.detail.topic.forEach((function(e){e&&e.exercises&&e.exercises.forEach((function(e,t){o.push(e.title_bak)}))})),u.titleList=o,u.exerTotal=a.detail.exerTotal,console.log(o),n.go(3===f?"main.testDetail":"tab.stuTestDetail",m)},a.sendTeacher=function(){a.detail.hadSend||o({scope:a,aeid:c.aeid})},a.toExamSituation=function(t){l.loading.show(),e.jsonp("user/getServiceStatus",{serviceID:35},(function(e){l.loading.hide(),1==e.data.status?n.go("main.examRecordDetail",{examinationRecordID:c.examinationRecordID,aeid:c.aeid,subjectID:a.detail.subjectId,subject:a.detail.title}):n.go("main.buyIntroduce365")}),(function(e){l.loading.hide(),l.showTip(e.msg)}))},a.toKnowledgeDiagnosis=function(){var e,t;3===f?(e=function(e){e?n.go((3===f?"main":"tab")+".knowledgeDiagnosis",{uid:1,from:a.title,id:c.aeid,sceneID:c.sceneID}):n.go("main.buyIntroduce365")},t=function(){l.loading.hide(),l.showTip("打开失败,请重试")},s.jsonp("user/getUserCourseStat",{ssk:h.childS.ssk,_host:appConf.XT_HOST},(function(t){e&&e(t.data.buyStat.mingshiCourse)}),(function(e){t&&t(e)}))):n.go((3===f?"main":"tab")+".knowledgeDiagnosis",{uid:1,from:a.title,id:c.aeid,sceneID:c.sceneID})},a.back=function(){c.view&&"homework"!=a.type&&1==appConf.appType?n.go("cpTab.record",{utype:1}):d.goBack()},a.recommendList=[],a.openRecommend=function(e){var t;1===e.openType?(t=e.id,l.loading.show(),s.jsonp("user/getUserCourseStat",{ssk:h.childS.ssk,_host:appConf.XT_HOST},(function(e){if(l.loading.hide(),e.data.buyStat.mingshiCourse){var a=angular.services.injector.get("appState"),i={ssk:h.childS.ssk};i.id=t,a.goTbj("tab.video",i)}else n.go("main.buyIntroduce365")}),(function(e){l.loading.hide(),console.log(e),l.showTip("打开失败,请重试")}))):2===e.openType?function(e){var t={tagID:e,_host:appConf.host_xt,ssk:h.childS.ssk};l.loading.show(),s.jsonp("r=teachCourse/default/GetTeachCourseAddStatus",t,(function(e){var t=angular.services.injector.get("appState"),a={ssk:h.childS.ssk};1==e.data.addStatus?(l.loading.hide(),a.id=e.data.teachCourseID,t.goXwkongjian("main.courseIndex",a)):s.jsonp("user/getUserCourseStat",{ssk:h.childS.ssk,_host:appConf.XT_HOST},(function(e){l.loading.hide(),e.data.joinStat.syncCourse?t.goXwkongjian("main.courseIndex",a):n.go("main.buyIntroduce",{type:2})}),(function(e){l.loading.hide(),console.log(e),l.showTip("打开失败,请重试")}))}),(function(e){l.loading.hide(),l.showTip(e.msg)}))}(e.id):3===e.openType&&(e.type=85,p({courseId:e.courseID,weiKeId:e.id,scope:a,animation:"slide-in-right"},e))},3===f&&(I=[],s.jsonp("exam/getRecommendCourse",{aeid:c.aeid},(function(e){var t=e.data.weike,i=e.data.teachCourse,o=e.data.topTeacherCourse;angular.forEach(o,(function(e){e.openType=3,e.text="[名校名师课]",e.stuNum=e.playnum,I.push(e)})),angular.forEach(t,(function(e){e.text="[微课同步讲]",e.openType=1,e.stuNum=e.playnum,I.push(e)})),angular.forEach(i,(function(e){e.openType=2,e.text="[数学同步课程]",e.stuNum=e.humanCnt||"5k+";var t=e.tag;if(t&&t[0]&&t[0].names){var a=t[0].names;e.title=a[a.length-1],I.push(e)}})),a.recommendList=I})))}]);