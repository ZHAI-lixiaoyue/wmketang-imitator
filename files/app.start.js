var appConf=function(){var t={domain:"http://ktapp.wmketang.com",domain_xt:"https://api.jiazhangyun.cn",appKey:"phone.parents",packageName:"com.wmzz.parents.cloud",dataDirectory:"parentsCloud",dataDBName:"parentsCloud",serverType:0,openRemote:0,remoteUrl:"http://parentsapp.wm3dao.com",terminalType:2,isTest:0,commonMin:1,alipayID:"2021001199656227",configHost:function(){t.host=t.domain+"/index.php?",t.host_xt=t.domain_xt+"/index.php?",t.XT_HOST=t.host_xt+"r=xuetang/",t.XTDA_HOST=t.host_xt+"r=dsapi/",t.DS2_HOST=t.host+"r=dsapi2/",t.RA_HOST=t.host_xt+"r=rvsapi/",t.XTP_HOST=t.host_xt+"r=parents/",t.P_HOST=t.host+"r=parents/",t.KT_HOST=t.host+"r=dsapi/",t.KT3_HOST=t.host+"r=teachingV3/",t.TRACE3_HOST=t.host+"r=traceV3/",t.IAS_HOST=t.host+"r=esapi/",t.XTIAS_HOST=t.host_xt+"r=esapi/",t.CB_HOST=t.host+"r=teachingV3/",t.CP_HOST=t.host+"r=evaluation/",t.SCAN_HOST=t.host+"r=mapi/",t.T_HOST=t.host_xt+"r=tsapi/",t.TMS_HOST=t.host+"r=tms/",t.E_HOST=t.host+"r=evaluation/",t.OSS_URL=t.XT_HOST+"system/getStsAuthorize",t.RRT_HOST=t.domain+"?r=renrentong/",t.xtHost=[t.XTP_HOST,t.T_HOST,t.XT_HOST,t.SCAN_HOST,t.RA_HOST,t.XTDA_HOST,t.XTIAS_HOST],t.ktHost=[t.DS2_HOST,t.TMS_HOST,t.CP_HOST,t.KT_HOST,t.KT3_HOST,t.TRACE3_HOST,t.IAS_HOST,t.CB_HOST,t.E_HOST]}};return t.configHost(),t.resetAppHost=function(a,e){a&&(t.domain=a,a.lastIndexOf("/")==a.length-1&&(t.domain=a.substring(0,a.lastIndexOf("/")))),e&&(t.domain_xt=e,e.lastIndexOf("/")==e.length-1&&(t.domain_xt=e.substring(0,e.lastIndexOf("/")))),t.configHost(),t.UPLOAD_HOST=t.domain+"/index.php?r=file/upload"},t.SD_HOST="http://sdwmzz.kuanzheng.net/homecloud/",t.APPSTORE_URL="itms-apps://itunes.apple.com/cn/app/id1241132029",t.pptViewHost="http://oapps.wm3dao.com",t.UPLOAD_HOST="http://upimage.cnweike.cn",t.socket="https://sock.wm3dao.com:9866",t.appVersion={version:"2.2.1.1124124",no:2211124124,sno:2211124124,feature:""},t.rsa_publicKey="-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzoBzFF3cQu6MDrMHD7zx17LW/+f5MWBxIqI6nOJ8C87txu2Uiua1VzAcsA1vV/kKKvQlFUqQZJuTYOQBD1uZKK4oQCFe0iyIbUWaZzwECWk0PnZTX9nel7ez8sj+9gkVQKucr8j0E1bG7KiVyrWAChZyy3foUx/lXeb41sBtlYQIDAQAB-----END PUBLIC KEY-----",t}(),appConfigs=function(){var t={parentsCloud0:{key:"parentsCloud0",appKey:"phone.parents",domain:"http://ktapp.wmketang.com",domain_xt:"https://api.jiazhangyun.cn",serverType:0,appTitle:"家长云正式服"},parentsCloud1:{key:"parentsCloud1",appKey:"phone.parents",domain:"http://kttest.wm3dao.com",domain_xt:"http://tparent.wmxuetang.com",serverType:1,appTitle:"家长云测试服"}};return t}();
!function(){var e=["ionic"];1==appConf.commonMin&&appConf.terminalType>0&&(e=["ionic","angular-md5","lokijs"]),angular.controllers=angular.module("starter.controllers",e).config(["$controllerProvider",function(e){angular.controllers.controller=e.register}]),angular.services=angular.module("starter.services",e).config(["$provide",function(e){angular.services.factory=e.factory,angular.services.service=e.service}]),angular.filters=angular.module("starter.filters",e).config(["$filterProvider",function(e){angular.filters.filter=e.register}]),angular.directives=angular.module("starter.directives",e).config(["$compileProvider",function(e){angular.directives.directive=e.directive}]),angular.constants=angular.module("starter.constants",["ionic"]).config(["$provide",function(e){angular.constants.constant=e.constant}]);var o=appConf.appVersion,n={appversion:appConf.isTest?o.version.substring(0,o.version.lastIndexOf(".")):o.version,releasestage:appConf.isTest?"development":"production",silentConsole:!0,silentWebsocket:!0,httpTimeout:1e4,filters:[{name:/^resourceError$/,message:/cordova.js/},{target:{tagName:/^IMG$/,status:"inexistence"}},{req:{method:/^POST$/,url:"https://web.fundebug.net/event"}},{target:{src:/dasai.cnweike.cn/}}]};fundebug.init(n),angular.module("exceptionOverwrite",[]).factory("$exceptionHandler",(function(){return function(e){fundebug.notifyError(e)}})),ionic.app={XMLHttpRequest:window.XMLHttpRequest};var t=document.head,i=document.createElement("script");if(0!==appConf.terminalType)return!0;if(ionic.Platform.isAndroid())i.src="file:///android_asset/www/cordova.js",t.appendChild(i);else if(ionic.Platform.isIOS()){var r=window.location.search;i.src=window.location.search?r.split("=")[1]:"cordova.js",t.appendChild(i)}var a=function(){var e=localStorage.getItem("appUpdateData");if((e=e||"{}")&&0===e.indexOf("{"))return JSON.parse(e);return{}}().hotUpdate;var c=document.createElement("script"),s=document.createElement("script"),l=document.createElement("link"),u="js/app.js",d="js/jsConfig.js",f="css/all.min.css",p=0,v=!1;function m(e,o,n){!function(e,o,n){window.resolveLocalFileSystemURL(cordova.file.cacheDirectory,(function(t){t.getDirectory(e,{create:!0,exclusive:!1},(function(e){console.log(e.nativeURL),o&&o(e)}),n)}),n)}(e,(function(t){!function(e,o,n){window.resolveLocalFileSystemURL(cordova.file.tempDirectory,(function(e){e.getDirectory("/",{create:!0,exclusive:!1},(function(e){console.log(e.nativeURL),o&&o(e)}),n)}),n)}(0,(function(i){console.log("copyTo to-------"),t.copyTo(i,e,o,n)}),n)}),n)}function g(){p=3;var e,o,n,t=cordova.file.tempDirectory+"/"+a.no+"_"+a.sno+"/www";e=a.no+"_"+a.sno,o=function(e){e.removeRecursively((function(){m(a.no+"_"+a.sno,(function(){a.path=t,p=4,w()}),(function(e){12===e.code?(p=5,a.path=t,w()):h(),console.log(e)}))}),(function(){h()}))},n=function(e){h(),console.log(e)},window.resolveLocalFileSystemURL(cordova.file.tempDirectory,(function(t){t.getDirectory(e,{create:!0,exclusive:!1},(function(e){console.log(e.nativeURL),o&&o(e)}),n)}),n)}function w(){ionic.Platform.update=a,o.sno=a.sno,o.version=a.version,u=a.path+"/"+u,d=a.path+"/"+d,f=a.path+"/"+f,h()}function h(){s.src=d+"?"+o.sno,s.addEventListener("load",(function(){l.rel="stylesheet",l.href=f+"?"+o.sno,t.appendChild(l),c.src=u+"?"+o.sno,t.appendChild(c)}),!1),s.addEventListener("error",(function(){ionic.Platform.isIOS()&&ionic.Platform.update&&(u="js/app.js",d="js/jsConfig.js",f="css/all.min.css",t.removeChild(s),s=document.createElement("script"),ionic.Platform.update=void 0,v?h():(v=!0,g()),window.cordova&&cordova.plugins.BaiduMobStatistics&&cordova.plugins.BaiduMobStatistics.onEventWithAttributes("hot","load error",{code:p}))}),!1),t.appendChild(s)}1===appConf.openRemote?(a&&a.no==o.no&&(o.sno=a.sno,o.version=a.version),u=appConf.remoteUrl+"/"+u,d=appConf.remoteUrl+"/"+d,f=appConf.remoteUrl+"/"+f,h()):a&&a.no==o.no?ionic.Platform.isAndroid()?w():ionic.Platform.isIOS()&&document.addEventListener("deviceready",(function(){var e=cordova.file.tempDirectory+"/"+a.no+"_"+a.sno+"/www";m(a.no+"_"+a.sno,(function(){a.path=e,p=1,w()}),(function(o){12===o.code?(p=2,a.path=e,w()):h(),console.log(o)}))})):h()}();
angular.constants.constant("JS_CONFIG",{scripts:{welcomePageCtrl:"js/ctrl/welcomePageCtrl.js",mainCtrl:"js/ctrl/mainCtrl.js",initCtrl:"js/ctrl/initCtrl.js",singleCtrl:"js/ctrl/singleCtrl.js",loginCtrl:"js/ctrl/loginCtrl.js",selectLoginCtrl:"js/ctrl/selectLoginCtrl.js",wxLoginCtrl:"js/ctrl/wxLoginCtrl.js",otherLoginCtrl:"js/ctrl/otherLoginCtrl.js",regCtrl:"js/ctrl/regCtrl.js",forgetPwdCtrl:"js/ctrl/forgetPwdCtrl.js",resetPwdCtrl:"js/ctrl/resetPwdCtrl.js",homeCtrl:"js/ctrl/homeCtrl.js",lookMateAnswer:"page/lookMateAnswer/lookMateAnswer.js",messageCtrl:"js/ctrl/message/messageCtrl.js",systemMessageCtrl:"js/ctrl/message/systemMessageCtrl.js",systemLookCtrl:"js/ctrl/message/systemLookCtrl.js",weekPerformCtrl:"js/ctrl/message/weekPerformCtrl.js",weekPerformSendCtrl:"js/ctrl/message/weekPerformSendCtrl.js",noticeCtrl:"js/ctrl/message/noticeCtrl.js",noticeDetailCtrl:"js/ctrl/message/noticeDetailCtrl.js",contactDetailCtrl:"js/ctrl/message/contactDetailCtrl.js",sendMsgCtrl:"js/ctrl/message/sendMsgCtrl.js",childrenCtrl:"js/ctrl/children/childrenCtrl.js",zztLoginCtrl:"js/ctrl/zztLoginCtrl.js",zztHomeCtrl:"js/ctrl/zztHomeCtrl.js",resetChildrenPwdCtrl:"js/ctrl/resetChildrenPwdCtrl.js",phoneLogin:"page/mine/account/phoneLogin.js",activateCloud:"page/activateCloud/activateCloud.js",examinationCtrl:"js/ctrl/children/mathClearance/examinationCtrl.js",exerTypeCtrl:"js/ctrl/children/mathClearance/exerTypeCtrl.js",mockExamCtrl:"js/ctrl/children/mathClearance/mockExamCtrl.js",syncCourseCtrl:"js/ctrl/children/mathClearance/syncCourseCtrl.js",xuetangCtrl:"js/ctrl/children/xuetangCtrl.js",famousTeacherCtrl:"js/ctrl/children/teacher/famousTeacherCtrl.js",msTeacherSearchCtrl:"js/ctrl/children/teacher/msTeacherSearchCtrl.js",baseCtrl:"js/ctrl/children/school/baseCtrl.js",courseBaseCtrl:"js/ctrl/children/school/courseBaseCtrl.js",consolidationExerciseCtrl:"js/ctrl/children/school/consolidationExerciseCtrl.js",thematicUnitCtrl:"js/ctrl/children/school/thematicUnitCtrl.js",thematicDetailsCtrl:"js/ctrl/children/school/thematicDetailsCtrl.js",studySituationCtrl:"js/ctrl/children/school/studySituationCtrl.js",sectionReportCtrl:"js/ctrl/children/school/sectionReportCtrl.js",synthesisReportCtrl:"js/ctrl/children/school/synthesisReportCtrl.js",assessmentReportCtrl:"js/ctrl/children/school/assessmentReportCtrl.js",courseHistoryCtrl:"js/ctrl/children/school/courseHistoryCtrl.js",reviewDetailCtrl:"js/ctrl/children/school/reviewDetailCtrl.js",summaryCtrl:"js/ctrl/children/school/summaryCtrl.js",evaluationCtrl:"js/ctrl/children/school/evaluation/evaluationCtrl.js",studentReportCtrl:"js/ctrl/children/school/evaluation/studentReportCtrl.js",stuTestResultsCtrl:"js/ctrl/children/school/evaluation/stuTestResultsCtrl.js",stuTestDetailCtrl:"js/ctrl/children/school/evaluation/stuTestDetailCtrl.js",moreKnowLedgeCtrl:"js/ctrl/children/school/evaluation/moreKnowLedgeCtrl.js",knowledgeWeikeCtrl:"js/ctrl/children/school/evaluation/knowledgeWeikeCtrl.js",weakTagCtrl:"js/ctrl/children/school/evaluation/weakTagCtrl.js",tagReportCtrl:"js/ctrl/children/school/evaluation/tagReportCtrl.js",wrongExerCtrl:"js/ctrl/children/studyServices/wrongExerCtrl.js",tutorCtrl:"js/ctrl/children/studyServices/tutorCtrl.js",sprintChapterCtrl:"js/ctrl/children/school/sprintChapter/sprintChapterCtrl.js",topicListCtrl:"js/ctrl/children/school/sprintChapter/topicListCtrl.js",liveCtrl:"page/live/liveCtrl.js",liveTask:"page/live/taskCtrl.js",liveTea:"page/live/teacherCtrl.js",liveComment:"page/live/commentCtrl.js",liveCalendar:"page/live/calendar/liveCalendar.js",teacherDetailCtrl:"page/live/teacherDetailCtrl.js",editCommentCtrl:"page/live/editCommentCtrl.js",buyIntroduce365:"js/ctrl/buy/buyIntroduce365.js",buyIntroduce:"js/ctrl/buy/buyIntroduce.js",buyAdd:"js/ctrl/buy/buyAdd.js",buyAdd365:"js/ctrl/buy/buyAdd365.js",buyAddAddress:"js/ctrl/buy/buyAddAddress.js",StuCorrectRecordCtrl:"js/ctrl/children/correctRecord/StuCorrectRecordCtrl.js",StuHomeworkCtrl:"js/ctrl/children/homework/StuHomeworkCtrl.js",homeworkAllCtrl:"js/ctrl/children/homework/homeworkAllCtrl.js",StuHomeworkDetailCtrl:"js/ctrl/children/homework/StuHomeworkDetailCtrl.js",StuHomeworkTaskDoCtrl:"js/ctrl/children/homework/StuHomeworkTaskDoCtrl.js",stuHomeworkTestResultCtrl:"js/ctrl/children/stuHomeworkTestResultCtrl.js",testDetailCtrl:"js/ctrl/children/testDetailCtrl.js",homeworkTalkCtrl:"js/ctrl/children/homework/homeworkTalkCtrl.js",StuHomeWorkAnswerCtrl:"js/ctrl/children/homework/StuHomeWorkAnswerCtrl.js",StuHomeworkCameraCtrl:"js/ctrl/children/homework/StuHomeworkCameraCtrl.js",LookCardCtrl:"js/ctrl/ias/LookCardCtrl.js",StuStudyTrackCtrl:"js/ctrl/children/studyTrack/StuStudyTrackCtrl.js",classReviewCtrl:"js/ctrl/children/classReview/classReviewCtrl.js",classReviewDetailCtrl:"js/ctrl/children/classReview/classReviewDetailCtrl.js",wrongQuestionCtrl:"js/ctrl/children/wrongQuestion/wrongQuestionCtrl.js",wQListCtrl:"js/ctrl/children/wrongQuestion/wQListCtrl.js",wQAnalysisCtrl:"js/ctrl/children/wrongQuestion/wQAnalysisCtrl.js",wQReviewDetailCtrl:"js/ctrl/children/wrongQuestion/wQReviewDetailCtrl.js",wQDetailCtrl:"js/ctrl/children/wrongQuestion/wQDetailCtrl.js",StuWQDoCtrl:"page/wrongQuestion/StuWQDoCtrl.js",examListCtrl:"js/ctrl/children/examSystem/examListCtrl.js",examInfoCtrl:"js/ctrl/children/examSystem/examInfoCtrl.js",StuExamResultCtrl:"js/ctrl/children/examSystem/StuExamResultCtrl.js",examDetailCtrl:"js/ctrl/children/examSystem/examDetailCtrl.js",personCtrl:"js/ctrl/person/personCtrl.js",personInfoCtrl:"js/ctrl/person/personInfoCtrl.js",setEmailOrPhoneCtrl:"page/mine/account/setEmailOrPhoneCtrl.js",setNameCtrl:"js/ctrl/person/setNameCtrl.js",setPwdCtrl:"js/ctrl/person/setPwdCtrl.js",setChildCtrl:"js/ctrl/person/setChildCtrl.js",addChildCtrl:"js/ctrl/person/addChildCtrl.js",feedbackCtrl:"js/ctrl/person/feedbackCtrl.js",setTextbookCtrl:"js/ctrl/person/setTextbookCtrl.js",checkUpdateCtrl:"js/ctrl/person/checkUpdateCtrl.js",ResourceCtrl:"js/ctrl/master/ResourceCtrl.js",ResourceSearchCtrl:"js/ctrl/master/ResourceSearchCtrl.js",VideoCtrl:"js/ctrl/master/VideoCtrl.js",ChapterCtrl:"js/ctrl/master/ChapterCtrl.js",TextbookCtrl:"js/ctrl/master/TextbookCtrl.js",SpaceCtrl:"js/ctrl/master/SpaceCtrl.js",account:"page/mine/account/account.js",withdraw:"page/mine/account/withdraw.js",withdrawMethod:"page/mine/account/withdrawMethod.js",withdrawRecord:"page/mine/account/withdrawRecord.js",accountRecord:"page/mine/account/accountRecord.js",accountDetail:"page/mine/account/accountDetail.js",accountDetailCon:"page/mine/account/accountDetailCon.js",addWithdrawMethod:"page/mine/account/addWithdrawMethod.js",hasChild:"page/regChild/hasChild.js",regChildStep1:"page/regChild/regChildStep1.js",regChildStep2:"page/regChild/regChildStep2.js",perfectChildStep1:"page/perfectChild/perfectChildStep1.js",perfectChildStep2:"page/perfectChild/perfectChildStep2.js",BrowsingHistoryCtrl:"js/ctrl/person/BrowsingHistoryCtrl.js",notifSettingCtrl:"js/ctrl/person/notifSettingCtrl.js",MyFavorCtrl:"js/ctrl/person/MyFavorCtrl.js",childInfo:"page/mine/childInfo.js",invite:"page/invite/invite.js",inviteIntro:"page/invite/inviteIntro.js",inviteNum:"page/invite/inviteNum.js",tutorSendMsg:"page/chat/tutorSendMsg.js",tutor:"page/mine/tutor.js",mineOrder:"page/mine/mineOrder.js",confirmPhone:"page/account/confirmPhone.js",order:"page/mine/order.js",learningRecord:"page/365/learningRecord.js",learningRecordDetail:"page/365/learningRecordDetail.js",examRecordDetail:"page/365/examRecordDetail.js",dvCode:"page/dvCode/dvCode.js",maintenanceCtrl:"js/ctrl/parent/maintenanceCtrl.js",parentCtrl:"js/ctrl/parent/parentCtrl.js",articleCtrl:"js/ctrl/parent/article/articleDetail.js",liveListCtrl:"js/ctrl/parent/live/liveListCtrl.js",liveDetailCtrl:"js/ctrl/parent/live/liveDetailCtrl.js",expertCtrl:"js/ctrl/parent/expert/expertCtrl.js",expertDetailCtrl:"js/ctrl/parent/expert/expertDetailCtrl.js",courseCtrl:"js/ctrl/parent/course/courseCtrl.js",courseDetailCtrl:"js/ctrl/parent/course/courseDetailCtrl.js",storyListCtrl:"js/ctrl/parent/story/storyListCtrl.js",storyDetailCtrl:"js/ctrl/parent/story/storyDetailCtrl.js",bookListCtrl:"js/ctrl/parent/book/bookListCtrl.js",bookDetailCtrl:"js/ctrl/parent/book/bookDetailCtrl.js",bookChapterCtrl:"js/ctrl/parent/book/bookChapterCtrl.js",bookChapterDetailCtrl:"js/ctrl/parent/book/bookChapterDetailCtrl.js",tfCenterCtrl:"js/ctrl/tfcenter/tfCenterCtrl.js",commonIframe:"page/application/commonIframe.js",videogular:"vendor/videogular.min.js",videoJS:"vendor/video.min.js",videoHls:"vendor/videojs-contrib-hls.js",lokiService:"js/services/db/lokiService.js",systemFactory:"js/services/module/systemFactory.js",prompt:"js/services/module/prompt.js",disclaimers:"js/services/module/disclaimers.js",cacheMsgs:"js/services/cacheMsgs.js",routeHistory:"js/services/module/routeHistory.js",exerUtils:"js/services/module/exerUtils.js",albumData:"js/services/albumData.js",request:"js/services/module/request.js",requestSD:"js/services/module/requestSD.js",requestTF:"js/services/module/requestTF.js",$request:"js/services/module/$request.js",$selectTeacher:"js/services/$selectTeacher.js",scanGuide:"js/services/module/scanGuide.js",scanIas:"js/services/module/scanIas.js",iasCorrectError:"js/services/module/iasCorrectError.js",camera:"js/services/module/camera.js",$androidPermission:"js/services/module/$androidPermission.js",$cameraGuide:"js/services/$cameraGuide.js",$fileTransfer:"js/services/module/$fileTransfer.js",$homeworkAnswer:"js/services/$homeworkAnswer.js",stuHomeWork:"js/services/student/stuHomeWork.js",stuCorrect:"js/services/student/stuCorrect.js",stuExamSystem:"js/services/student/stuExamSystem.js",$topDrawingBoard:"js/services/module/$topDrawingBoard.js",$signDrawingBoard:"js/services/module/$signDrawingBoard.js",openResource:"js/services/openResource.js",openResourceExam:"js/services/openResourceExam.js",openResourceExercise:"js/services/openResourceExercise.js",$openResourceWeike:"js/services/$openResource-weike.js",localStorage:"js/services/module/localStorage.js",serviceManager:"js/services/serviceManager.js",Pinyin:"js/services/pinyin.js",phoneUtils:"js/services/phoneUtils.js",appState:"js/services/module/appState.js",$verify:"js/services/$verify.js",mySocket:"js/services/socket.js",historyFactory:"js/services/historyFactory.js",calendar:"js/services/module/calendar.js",user:"js/services/user.js",class:"js/services/class.js",message:"js/services/message.js",correct:"js/services/correct.js",homework:"js/services/homework.js",examSystem:"js/services/examSystem.js",$textbook:"js/services/textbook.js",$data:"js/services/data.js",mediaFactory:"js/services/module/mediaFactory.js",tabsCache:"js/services/module/tabsCache.js",activateAccount:"js/services/module/activateAccount.js",scrollSelect:"js/services/scrollSelect.js",examService:"js/services/examService.js",KnowledgeDiagnosisCtrl:"page/knowledgeDiagnosis/KnowledgeDiagnosisCtrl.js",studyTrack:"page/children/studyTrack/studyTrack.js",messageList:"page/message/messageList.js",filters:"js/filter/filters.js",time:"js/filter/time.js",basisContent:"js/directive/basisContent.js",recordVoice:"js/directive/recordVoice.js",img:"js/directive/img.js",codeInput:"js/directive/codeInput.js",autoTextarea:"js/directive/autoTextarea.js","angular-preload-image":"js/directive/angular-preload-image.js",basisTip:"js/directive/basisTip.js",dragBox:"js/directive/dragBox.js",header:"js/directive/header.js",headerBar:"js/directive/headerBar.js",setFocus:"js/directive/setFocus.js",photoSwipe:"js/directive/photoSwipe.js","collapsible-list":"js/directive/collapsible-list.js","default-image":"js/directive/default-image.js",fileReader:"js/directive/fileReader.js","video-js":"js/directive/videoJs.js",courseFilter:"js/directive/courseFilter.js",videoPlay:"js/directive/videoPlay.js",articleScroll:"js/directive/articleScroll.js",shareFactory:"js/services/module/shareFactory.js",pdf:"vendor/pdf.js",pdfWorker:"vendor/pdf.worker.js",$calculate:"js/services/calculate/$calculate.js",myStars:"js/directive/myStars.js",tabSlideBox:"js/directive/tabSlideBox.js",audioPlay:"js/directive/audioPlay.js",resourceItem:"js/directive/resourceItem.js",inputArea:"js/services/module/inputArea.js",myQrCode:"page/myQrCode/myQrCode.js",qrCodeRelate:"page/myQrCode/qrCodeRelate.js","angular-md5":"vendor/angular-md5.min.js","angular-chart":"vendor/angular-chart/angular-chart.min.js",Chart:"vendor/angular-chart/Chart.min.js",loki:"vendor/loki.min.js","socket.io":"vendor/socket.io.js","dom-to-image":"vendor/dom-to-image.min.js",qrcode:"vendor/qrcode.min.js",sm:"vendor/sm2.js",html2canvas:"vendor/html2canvas.min.js",rsa:"vendor/rsa.min.js","app.common":"js/app.common.js",cropImage:"js/services/module/cropImage.js",echart:"vendor/echarts-all.js","photoswipe-min":"vendor/photoswipe.js","photoswipe-default":"vendor/photoswipe-ui-default.min.js",classAlbumTab:"page/classAlbum/classAlbumTab.js",albumListCtrl:"page/classAlbum/albumListCtrl.js",timeAlbumListCtrl:"page/classAlbum/timeAlbumListCtrl.js",classPhotoListCtrl:"page/classAlbum/classPhotoListCtrl.js"},dependents:{"angular-chart":["Chart"],mySocket:["socket.io"],myQrCode:["qrcode"],Pinyin:["mootools"],sendMsgCtrl:["mediaFactory"],openResourceExam:["openResourceExercise"],$topDrawingBoard:["ng-pinch-zoom"],$signDrawingBoard:["ng-pinch-zoom"],scrollSelect:["sm"],wQListCtrl:["shareFactory","pdf"],pdf:["pdfWorker"],dvCode:["shareFactory"],regChildStep1:["scrollSelect"],perfectChildStep1:["scrollSelect"],invite:["qrcode","shareFactory","html2canvas"],homeCtrl:["stuCorrect","collapsible-list","messageCtrl","childrenCtrl","personCtrl","studyTrack","tfCenterCtrl","maintenanceCtrl","activateAccount"],childrenCtrl:["appState","activateAccount"],parentCtrl:["requestSD","articleScroll","recordVoice","audioPlay"],articleCtrl:["requestSD","fileReader"],liveListCtrl:["requestSD"],liveDetailCtrl:["requestSD","videoPlay"],expertCtrl:["requestSD"],expertDetailCtrl:["requestSD"],courseCtrl:["requestSD","courseFilter"],courseDetailCtrl:["requestSD","videoPlay"],storyListCtrl:["requestSD","articleScroll","audioPlay"],storyDetailCtrl:["requestSD","articleScroll","recordVoice","audioPlay"],bookListCtrl:["requestSD","articleScroll"],bookDetailCtrl:["requestSD"],bookChapterCtrl:["requestSD"],bookChapterDetailCtrl:["requestSD","fileReader"],homeworkAllCtrl:["homework"],courseBaseCtrl:["openResource"],baseCtrl:["liveCtrl","courseBaseCtrl","evaluationCtrl"],tutorCtrl:["cacheMsgs"],studentReportCtrl:["angular-chart","openResource"],stuTestResultsCtrl:["historyFactory","stuCorrect"],consolidationExerciseCtrl:["historyFactory"],assessmentReportCtrl:["angular-chart","openResource"],moreKnowLedgeCtrl:["angular-chart","openResource"],knowledgeWeikeCtrl:["openResource"],tagReportCtrl:["angular-chart","openResource"],liveCtrl:["liveTask","liveTea","liveComment","collapsible-list","openResource"],teacherDetailCtrl:["myStars"],editCommentCtrl:["myStars"],reviewDetailCtrl:["historyFactory"],summaryCtrl:["openResource"],xuetangCtrl:["appState"],famousTeacherCtrl:["openResource","openResourceExam","openResourceExercise","$openResourceWeike"],buyIntroduce:["appState"],buyIntroduce365:["appState"],noticeDetailCtrl:["$signDrawingBoard"],studyTrack:["angular-chart"],StuHomeworkAllCtrl:["stuHomeWork"],StuHomeWorkAnswerCtrl:["inputArea","recordVoice","$topDrawingBoard","recordVoice","$fileTransfer","stuCorrect","$homeworkAnswer","dragBox","photoSwipe","autoTextarea","setFocus"],StuHomeworkCameraCtrl:["historyFactory"],LookCardCtrl:["iasCorrectError","historyFactory"],messageList:["message","collapsible-list"],calendar:["correct"],StuCorrectRecordCtrl:["calendar","stuCorrect"],homeworkTalkCtrl:["setFocus"],StuHomeworkDetailCtrl:["openResource","scanGuide","$cameraGuide","scanIas","$signDrawingBoard"],stuHomeworkTestResultCtrl:["$selectTeacher","historyFactory","$state","$request","stuCorrect","prompt","$openResourceWeike"],testDetailCtrl:["$calculate","stuCorrect","correct","dragBox","openResource","photoSwipe"],examListCtrl:["examSystem"],examInfoCtrl:["examSystem"],StuExamResultCtrl:["stuExamSystem"],examDetailCtrl:["stuExamSystem","openResource","dragBox","photoSwipe"],classReviewDetailCtrl:["openResource","openResourceExam","openResourceExercise"],wQReviewDetailCtrl:["historyFactory","openResource","dragBox","photoSwipe"],wQAnalysisCtrl:["angular-chart"],wQDetailCtrl:["openResource","dragBox","photoSwipe"],StuStudyTrackCtrl:["angular-chart"],ResourceCtrl:["$textbook","time"],VideoCtrl:["videogular"],MyFavorCtrl:["$textbook","time"],BrowsingHistoryCtrl:["$textbook","time"],systemMessageCtrl:["stuCorrect"],openResource:["videoPlay","photoswipe-min","photoswipe-default"],$openResourceWeike:["videoPlay"],childInfo:["activateAccount"],learningRecordDetail:["angular-chart"],examRecordDetail:["angular-chart","echart","pdf","shareFactory"],classAlbumTab:["timeAlbumListCtrl","albumListCtrl"],timeAlbumListCtrl:["albumData"],albumListCtrl:["albumData"]},common:["$androidPermission","codeInput","correct","$calculate","$topDrawingBoard","mediaFactory","photoSwipe","videogular","scrollSelect","tabSlideBox","headerBar","filters","recordVoice","angular-md5","loki","lokiService","serviceManager","localStorage","phoneUtils","tabsCache","openResource","resourceItem","$fileTransfer","routeHistory","prompt","request","$request","requestTF","examService","systemFactory","camera","$verify","autoTextarea","$data","header","basisContent","img","angular-preload-image","basisTip","appState","user","class","mySocket","default-image","exerUtils","historyFactory","rsa","initCtrl","loginCtrl","singleCtrl","wxLoginCtrl"]});
function beautySub(e,t){var r=/[\u4e00-\u9fa5]/g,l=e.substring(0,t),i=~~(l.match(r)&&l.match(r).length),a=2*l.length-i;return a<e.length?e.substr(0,a-3)+"...":e}function htmlEncode(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML}function returnRsa(e){var t=RSA.getPublicKey(appConf.rsa_publicKey);return RSA.encrypt(e,t)}ionic.Platform.isWeiXin=function(){return/MicroMessenger/.test(navigator.userAgent)},ionic.Platform.isCrosswalk=function(){return/Crosswalk/.test(navigator.userAgent)},angular.element(document).ready((function(){angular.bootstrap(document,["starter"]),angular.services.injector=angular.element(document).injector()})),angular.module("starter",["ionic","starter.controllers","starter.services","starter.filters","starter.constants","starter.directives","oc.lazyLoad","exceptionOverwrite"]).config(["$ionicConfigProvider","$stateProvider","$urlRouterProvider","$httpProvider","$ocLazyLoadProvider","JS_CONFIG",function(e,t,r,l,i,a){function o(e){return{deps:["$ocLazyLoad","$q","$ionicLoading","$timeout",function(t,r,l,i){var o=r.when(1),s=[],n=[],c=!1,m=!1;return a.commonLoaded||(angular.forEach(a.common,(function(e){d(e)})),a.commonPaths=[].concat(s),appConf.commonMin&&0==appConf.terminalType&&(s=[a.scripts["app.common"]]),a.commonLoaded=!0),(appConf.openRemote||ionic.Platform.isWeiXin())&&i((function(){m||(console.log("加载慢,显示loading"),c=!0,l.show({template:'<ion-spinner class="spinner-light" icon="spiral"></ion-spinner><div>正在加载</div>',noBackdrop:!1}))}),100),d(e),o.then((function(){var e=r.defer();function i(){var r=s.shift();r?function(e){t.load(e).then((function(){i()}))}(r):(m=!0,c&&l.hide(),e.resolve())}return i(),e.promise}));function d(e){if(n.indexOf(e)<0){n.push(e);var t=a.dependents[e];if(t)for(var r=0;r<t.length;r++){d(t[r])}var l=a.scripts[e];l&&(a.commonLoaded?a.commonPaths.indexOf(l)<0&&s.push(l):s.push(l))}}}]}}e.scrolling.jsScrolling(!0),e.tabs.position("bottom"),e.tabs.style("standard"),e.views.transition("ios"),e.templates.maxPrefetch(0),e.spinner.icon("ios"),e.backButton.previousTitleText(!1),e.backButton.text(""),e.views.swipeBackEnabled(!1),l.defaults.timeout=1e4,angular.services.factory("monitorInterceptor",["$timeout","$location","$q",function(e,t,r){var l={};function i(e){var r=e.config,i=r.url,a=(new Date).getTime();if(i.indexOf("r=")>0||i.indexOf("&app=")>0){var o;o=i.indexOf("r=")>0?function(e,t){for(var r=t.substr(t.indexOf("?")+1).split("&"),l=0;l<r.length;l++){var i=r[l].split("=");if(i[0]==e)return i[1]}}("r",i):i.substr(0,i.indexOf("?"));var s=t.path()+"\n",n=a-r.requestTime;if(200===e.status)if(n>=1e4&&n<2e4)s+="time 10s+";else{if(!(n>=2e4))return;s+="time 20s+"}else a-r.requestTime>=r.timeout?s+="timeout "+r.timeout:500===e.status?(s+="status:"+e.status,e.data&&(s+="\n",s+=JSON.stringify(e.data))):s+="status:"+e.status;var c=l[o];if(c)if(a-c.lastTime>6e5)c.lastTime=a,c.count=1;else{if(c.count>4)return;c.lastTime=a,c.count++}else l[o]={lastTime:a,count:1},n>=1e4&&"POST"!=r.method&&(s+="\n",s+=i);window.cordova&&cordova.plugins.BaiduMobStatistics&&cordova.plugins.BaiduMobStatistics.recordException(o,s)}}return{request:function(e){return e.requestTime=(new Date).getTime(),e},response:function(t){return e((function(){i(t)})),r.resolve(t)},responseError:function(t){return e((function(){i(t)})),r.reject(t)}}}]),l.interceptors.push("monitorInterceptor"),t.state("wxLogin",{url:"/wxLogin?ssk&redirect",cache:!1,templateUrl:"js/ctrl/wxLogin.html",controller:"wxLoginCtrl",resolve:o("wxLoginCtrl")}).state("init",{url:"/init",controller:"initCtrl",resolve:o("initCtrl")}).state("zztLogin",{url:"/zztLogin?ssk&cuid&type",cache:!1,templateUrl:"js/ctrl/wxLogin.html",controller:"zztLoginCtrl",resolve:o("zztLoginCtrl")}).state("selectLogin",{url:"/selectLogin",cache:!1,templateUrl:"js/ctrl/selectLogin.html",controller:"selectLoginCtrl",resolve:o("selectLoginCtrl")}).state("single",{url:"/single",templateUrl:"js/ctrl/single.html",controller:"singleCtrl",resolve:o("singleCtrl")}).state("single.welcomePage",{url:"/welcomePage",views:{"single-view":{templateUrl:"js/ctrl/welcomePage.html",controller:"welcomePageCtrl",resolve:o("welcomePageCtrl")}}}).state("single.phoneLogin",{url:"/phoneLogin?type&wxInfo&phone",cache:!1,views:{"single-view":{templateUrl:"page/mine/account/phoneLogin.html",controller:"phoneLogin",resolve:o("phoneLogin")}}}).state("single.login",{url:"/login?reLogin&ssk&phone",cache:!1,views:{"single-view":{templateUrl:"js/ctrl/login.html",controller:"loginCtrl",resolve:o("loginCtrl")}}}).state("single.otherLogin",{url:"/otherLogin?outsideHost&title",views:{"single-view":{templateUrl:"js/ctrl/otherLogin.html",controller:"otherLoginCtrl",resolve:o("otherLoginCtrl")}}}).state("single.reg",{url:"/reg",views:{"single-view":{templateUrl:"js/ctrl/register.html",controller:"regCtrl",resolve:o("regCtrl")}}}).state("single.forgetPwd",{url:"/forgetPwd",views:{"single-view":{templateUrl:"js/ctrl/forgetPwd.html",controller:"forgetPwdCtrl",resolve:o("forgetPwdCtrl")}}}).state("single.resetPwd",{url:"/resetPwd?account&code",views:{"single-view":{templateUrl:"js/ctrl/resetPwd.html",controller:"resetPwdCtrl",resolve:o("resetPwdCtrl")}}}).state("main",{url:"/main",templateUrl:"js/ctrl/main.html",controller:"mainCtrl",cache:!1,resolve:o("mainCtrl")}).state("main.resetChildrenPwd",{url:"/resetChildrenPwd?index",views:{"main-view":{templateUrl:"js/ctrl/resetChildrenPwd.html",controller:"resetChildrenPwdCtrl",resolve:o("resetChildrenPwdCtrl")}}}).state("main.home",{url:"/home",views:{"main-view":{templateUrl:"js/ctrl/home.html",controller:"homeCtrl",resolve:o("homeCtrl")}}}).state("main.zztHome",{url:"/zztHome",views:{"main-view":{templateUrl:"js/ctrl/zztHome.html",controller:"zztHomeCtrl",resolve:o("zztHomeCtrl")}}}).state("main.messageList",{url:"/messageList",cache:!1,views:{"main-view":{templateUrl:"page/message/messageList.html",controller:"messageList",resolve:o("messageList")}}}).state("main.myQrCode",{url:"/myQrCode",views:{"main-view":{templateUrl:"page/myQrCode/myQrCode.html",controller:"myQrCode",resolve:o("myQrCode")}}}).state("main.qrCodeRelate",{url:"/qrCodeRelate?code",views:{"main-view":{templateUrl:"page/myQrCode/qrCodeRelate.html",controller:"qrCodeRelate",resolve:o("qrCodeRelate")}}}).state("main.systemMessage",{url:"/systemMessage",views:{"main-view":{templateUrl:"js/ctrl/message/systemMessage.html",controller:"systemMessageCtrl",resolve:o("systemMessageCtrl")}}}).state("main.systemLook",{url:"/systemLook/:id",views:{"main-view":{templateUrl:"js/ctrl/message/systemLook.html",controller:"systemLookCtrl",resolve:o("systemLookCtrl")}}}).state("main.weekPerform",{url:"/weekPerform?uid",views:{"main-view":{templateUrl:"js/ctrl/message/weekPerform.html",controller:"weekPerformCtrl",resolve:o("weekPerformCtrl")}}}).state("main.weekPerformSend",{url:"/weekPerformSend?uid",views:{"main-view":{templateUrl:"js/ctrl/message/weekPerformSend.html",controller:"weekPerformSendCtrl",resolve:o("weekPerformSendCtrl")}}}).state("main.notice",{url:"/notice",views:{"main-view":{templateUrl:"js/ctrl/message/notice.html",controller:"noticeCtrl",resolve:o("noticeCtrl")}}}).state("main.noticeDetail",{url:"/noticeDetail/:_id?isParent",views:{"main-view":{templateUrl:"js/ctrl/message/noticeDetail.html",controller:"noticeDetailCtrl",resolve:o("noticeDetailCtrl")}}}).state("main.contactDetail",{url:"/contactDetail/:uid",views:{"main-view":{templateUrl:"js/ctrl/message/contactDetail.html",controller:"contactDetailCtrl",resolve:o("contactDetailCtrl")}}}).state("main.sendMsg",{url:"/sendMsg?classId&uid&name&host&type&dialogueID",views:{"main-view":{templateUrl:"js/ctrl/message/sendMsg.html",controller:"sendMsgCtrl",resolve:o("sendMsgCtrl")}}}).state("main.correctRecord",{url:"/correctRecord?uid",views:{"main-view":{templateUrl:"js/ctrl/children/correctRecord/correctRecord.html",controller:"StuCorrectRecordCtrl",resolve:o("StuCorrectRecordCtrl")}}}).state("main.homework",{url:"/homework?uid&schoolTypeID",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/homework/homework.html",controller:"StuHomeworkCtrl",resolve:o("StuHomeworkCtrl")}}}).state("main.homeworkAll",{url:"/homeworkAll?uid&schoolTypeID&type",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/homework/homeworkAll.html",controller:"homeworkAllCtrl",resolve:o("homeworkAllCtrl")}}}).state("main.homeworkDetail",{url:"/homeworkDetail?assignmentId&name&uid",views:{"main-view":{templateUrl:"js/ctrl/children/homework/homeworkDetail.html",controller:"StuHomeworkDetailCtrl",resolve:o("StuHomeworkDetailCtrl")}}}).state("main.stuHomeworkTaskDo",{url:"/stuHomeworkTaskDo?itemID&description&answer",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/homework/stuHomeworkTaskDo.html",controller:"StuHomeworkTaskDoCtrl",resolve:o("StuHomeworkTaskDoCtrl")}}}).state("main.stuHomeworkAnswer",{url:"/stuHomeworkAnswer?classID&assignmentItemID&isOpenEachLook&itemid&examID&aeid&type&method&examinationRecordID&id&openTest&scanExamID",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/homework/homeworkAnswer.html",controller:"StuHomeWorkAnswerCtrl",resolve:o("StuHomeWorkAnswerCtrl")}}}).state("main.confirmPhone",{url:"/confirmPhone?next&reset&classID&index&type",views:{"main-view":{templateUrl:"page/account/confirmPhone.html",controller:"confirmPhone",resolve:o("confirmPhone")}}}).state("main.stuHomeworkAnswer.exam",{url:"/exam",views:{answerView:{templateUrl:"js/ctrl/children/homework/homeworkAnswerExam.html"}}}).state("main.stuHomeworkAnswer.do",{url:"/do",views:{answerView:{templateUrl:"js/ctrl/children/homework/homeworkAnswerDo.html"}}}).state("main.testResults",{url:"/testResults?classID&assignmentItemID&uid&aeid&view&type&sceneID&examinationRecordID&isOpenEachLook&openStatus",views:{"main-view":{templateUrl:"js/ctrl/children/stuHomeworkTestResult.html",controller:"stuHomeworkTestResultCtrl",resolve:o("stuHomeworkTestResultCtrl")}}}).state("main.testDetail",{url:"/testDetail?classID&assignmentItemID&uid&aeid&index&subjectId&exerciseIds&sceneID&aqids&title&view&isOpenEachLook",views:{"main-view":{templateUrl:"js/ctrl/children/testDetail.html",controller:"testDetailCtrl",resolve:o("testDetailCtrl")}}}).state("main.lookMateAnswer",{url:"/lookMateAnswer?classID&teachingID&assignmentItemID&examID&itemID&isIAS&itemType",views:{"main-view":{templateUrl:"page/lookMateAnswer/lookMateAnswer.html",controller:"lookMateAnswer",resolve:o("lookMateAnswer")}}}).state("main.homeworkTalk",{url:"/homeworkTalk?assignmentID&classID&type",views:{"main-view":{templateUrl:"js/ctrl/children/homework/homeworkTalk.html",controller:"homeworkTalkCtrl",resolve:o("homeworkTalkCtrl")}}}).state("main.lookCard",{url:"/lookCard",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/ias/lookCard.html",controller:"LookCardCtrl",resolve:o("LookCardCtrl")}}}).state("main.stuStudyTrack",{url:"/stuStudyTrack?uid&schoolTypeID&name",views:{"main-view":{templateUrl:"js/ctrl/children/studyTrack/studyTrack.html",controller:"StuStudyTrackCtrl",resolve:o("StuStudyTrackCtrl")}}}).state("main.classReview",{url:"/classReview?uid&schoolTypeID",views:{"main-view":{templateUrl:"js/ctrl/children/classReview/classReview.html",controller:"classReviewCtrl",resolve:o("classReviewCtrl")}}}).state("main.classReviewDetail",{url:"/classReviewDetail/:uid/:teachingID/:title/:prepareID/:prepareType",views:{"main-view":{templateUrl:"js/ctrl/children/classReview/classReviewDetail.html",controller:"classReviewDetailCtrl",resolve:o("classReviewDetailCtrl")}}}).state("main.wrongQuestion",{url:"/wrongQuestion?uid",views:{"main-view":{templateUrl:"js/ctrl/children/wrongQuestion/wrongQuestion.html",controller:"wrongQuestionCtrl",resolve:o("wrongQuestionCtrl")}}}).state("main.wQList",{url:"/wQList?uid&subject&subjectID",views:{"main-view":{templateUrl:"js/ctrl/children/wrongQuestion/wQList.html",controller:"wQListCtrl",resolve:o("wQListCtrl")}}}).state("main.wQAnalysis",{url:"/wQAnalysis?uid&subject&subjectID",views:{"main-view":{templateUrl:"js/ctrl/children/wrongQuestion/wQAnalysis.html",controller:"wQAnalysisCtrl",resolve:o("wQAnalysisCtrl")}}}).state("main.wQReviewDetail",{url:"/wQReviewDetail?wrongID&isDelete&reviewed",views:{"main-view":{templateUrl:"js/ctrl/children/wrongQuestion/wQReviewDetail.html",controller:"wQReviewDetailCtrl",resolve:o("wQReviewDetailCtrl")}}}).state("main.wQDetail",{url:"/wQDetail?wrongID&reviewed",views:{"main-view":{templateUrl:"js/ctrl/children/wrongQuestion/wQDetail.html",controller:"wQDetailCtrl",resolve:o("wQDetailCtrl")}}}).state("main.examList",{url:"/examList?uid",views:{"main-view":{templateUrl:"js/ctrl/children/examSystem/examList.html",controller:"examListCtrl",resolve:o("examListCtrl")}}}).state("main.examInfo",{url:"/examInfo?uid&title&examinationID&status",views:{"main-view":{templateUrl:"js/ctrl/children/examSystem/examInfo.html",controller:"examInfoCtrl",resolve:o("examInfoCtrl")}}}).state("main.examResult",{url:"/examResult?uid&id&title&classAvg&gradeAvg",views:{"main-view":{templateUrl:"js/ctrl/children/examSystem/examResult.html",controller:"StuExamResultCtrl",resolve:o("StuExamResultCtrl")}}}).state("main.examDetail",{url:"/examDetail?index",views:{"main-view":{templateUrl:"js/ctrl/children/examSystem/examDetail.html",controller:"examDetailCtrl",resolve:o("examDetailCtrl")}}}).state("main.personInfo",{url:"/personInfo",views:{"main-view":{templateUrl:"js/ctrl/person/personInfo.html",controller:"personInfoCtrl",resolve:o("personInfoCtrl")}}}).state("main.childInfo",{url:"/childInfo?index",views:{"main-view":{templateUrl:"page/mine/childInfo.html",controller:"childInfo",resolve:o("childInfo")}}}).state("main.hasChild",{url:"/hasChild",views:{"main-view":{templateUrl:"page/regChild/hasChild.html",controller:"hasChild",resolve:o("hasChild")}}}).state("main.regChildStep1",{url:"/regChildStep1",views:{"main-view":{templateUrl:"page/regChild/step1.html",controller:"regChildStep1",resolve:o("regChildStep1")}}}).state("main.regChildStep2",{url:"/regChildStep2?sex&name&gradeID&areaID&peopleSub",views:{"main-view":{templateUrl:"page/regChild/step2.html",controller:"regChildStep2",resolve:o("regChildStep2")}}}).state("main.perfectChildStep1",{url:"/perfectChildStep1",views:{"main-view":{templateUrl:"page/perfectChild/step1.html",controller:"perfectChildStep1",resolve:o("perfectChildStep1")}}}).state("main.perfectChildStep2",{url:"/perfectChildStep2?sex&name&gradeID&areaID&peopleSub",views:{"main-view":{templateUrl:"page/perfectChild/step2.html",controller:"perfectChildStep2",resolve:o("perfectChildStep2")}}}).state("main.setEmailOrPhone",{url:"/setEmailOrPhone?type&force&index",views:{"main-view":{templateUrl:"page/mine/account/setEmailOrPhone.html",controller:"setEmailOrPhoneCtrl",resolve:o("setEmailOrPhoneCtrl")}}}).state("main.invite",{url:"/invite",views:{"main-view":{templateUrl:"page/invite/invite.html",controller:"invite",resolve:o("invite")}}}).state("main.inviteIntro",{url:"/inviteIntro",views:{"main-view":{templateUrl:"page/invite/inviteIntro.html",controller:"inviteIntro",resolve:o("inviteIntro")}}}).state("main.inviteNum",{url:"/inviteNum?type",views:{"main-view":{templateUrl:"page/invite/inviteNum.html",controller:"inviteNum",resolve:o("inviteNum")}}}).state("main.setName",{url:"/setName?type&name&index",views:{"main-view":{templateUrl:"js/ctrl/person/setName.html",controller:"setNameCtrl",resolve:o("setNameCtrl")}}}).state("main.activateCloud",{url:"/activateCloud?index",views:{"main-view":{templateUrl:"page/activateCloud/activateCloud.html",controller:"activateCloud",resolve:o("activateCloud")}}}).state("main.setPwd",{url:"/setPwd?force&type&wxInfo",views:{"main-view":{templateUrl:"js/ctrl/person/setPwd.html",controller:"setPwdCtrl",resolve:o("setPwdCtrl")}}}).state("main.setChild",{url:"/setChild",views:{"main-view":{templateUrl:"js/ctrl/person/setChild.html",controller:"setChildCtrl",resolve:o("setChildCtrl")}}}).state("main.addChild",{url:"/addChild",views:{"main-view":{templateUrl:"js/ctrl/person/addChild.html",controller:"addChildCtrl",resolve:o("addChildCtrl")}}}).state("main.feedback",{url:"/feedback",views:{"main-view":{templateUrl:"js/ctrl/person/feedback.html",controller:"feedbackCtrl",resolve:o("feedbackCtrl")}}}).state("main.setTextbook",{url:"/setTextbook",views:{"main-view":{templateUrl:"js/ctrl/person/setTextbook.html",controller:"setTextbookCtrl",resolve:o("setTextbookCtrl")}}}).state("main.checkUpdate",{url:"/checkUpdate",views:{"main-view":{templateUrl:"js/ctrl/person/checkUpdate.html",controller:"checkUpdateCtrl",resolve:o("checkUpdateCtrl")}}}).state("main.notifSetting",{url:"/notifSetting",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/person/notifSetting.html",controller:"notifSettingCtrl",resolve:o("notifSettingCtrl")}}}).state("main.myFavor",{url:"/myFavor",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/person/myFavor.html",controller:"MyFavorCtrl",resolve:o("MyFavorCtrl")}}}).state("main.browsingHistory",{url:"/browsingHistory",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/person/browsingHistory.html",controller:"BrowsingHistoryCtrl",resolve:o("BrowsingHistoryCtrl")}}}).state("main.resource",{url:"/resource",views:{"main-view":{templateUrl:"js/ctrl/master/resource.html",controller:"ResourceCtrl",resolve:o("ResourceCtrl")}}}).state("main.resourceSearch",{url:"/resourceSearch",views:{"main-view":{templateUrl:"js/ctrl/master/resourceSearch.html",controller:"ResourceSearchCtrl",resolve:o("ResourceSearchCtrl")}}}).state("main.video",{url:"/video/:id",views:{"main-view":{templateUrl:"js/ctrl/master/video.html",controller:"VideoCtrl",resolve:o("VideoCtrl")}}}).state("main.chapter",{url:"/chapter?index",views:{"main-view":{templateUrl:"js/ctrl/master/chapter.html",controller:"ChapterCtrl",resolve:o("ChapterCtrl")}}}).state("main.textbook",{url:"/chapter",views:{"main-view":{templateUrl:"js/ctrl/master/textbook.html",controller:"TextbookCtrl",resolve:o("TextbookCtrl")}}}).state("main.space",{url:"/space/:id",views:{"main-view":{templateUrl:"js/ctrl/master/space.html",controller:"SpaceCtrl",resolve:o("SpaceCtrl")}}}).state("main.articleDetail",{url:"/articleDetail?id&title",views:{"main-view":{templateUrl:"js/ctrl/parent/article/articleDetail.html",controller:"articleCtrl",resolve:o("articleCtrl")}}}).state("main.live",{url:"/liveList",views:{"main-view":{templateUrl:"js/ctrl/parent/live/liveList.html",controller:"liveListCtrl",resolve:o("liveListCtrl")}}}).state("main.liveDetail",{url:"/liveDetail?id",views:{"main-view":{templateUrl:"js/ctrl/parent/live/liveDetail.html",controller:"liveDetailCtrl",resolve:o("liveDetailCtrl")}},cache:!1}).state("main.expert",{url:"/expert",views:{"main-view":{templateUrl:"js/ctrl/parent/expert/expert.html",controller:"expertCtrl",resolve:o("expertCtrl")}}}).state("main.expertDetail",{url:"/expertDetail?id",views:{"main-view":{templateUrl:"js/ctrl/parent/expert/expertDetail.html",controller:"expertDetailCtrl",resolve:o("expertDetailCtrl")}}}).state("main.course",{url:"/course?id",views:{"main-view":{templateUrl:"js/ctrl/parent/course/course.html",controller:"courseCtrl",resolve:o("courseCtrl")}}}).state("main.courseDetail",{url:"/courseDetail?id",views:{"main-view":{templateUrl:"js/ctrl/parent/course/courseDetail.html",controller:"courseDetailCtrl",resolve:o("courseDetailCtrl")}},cache:!1}).state("main.story",{url:"/storyList",views:{"main-view":{templateUrl:"js/ctrl/parent/story/storyList.html",controller:"storyListCtrl",resolve:o("storyListCtrl")}},cache:!1}).state("main.storyDetail",{url:"/storyDetail?id",views:{"main-view":{templateUrl:"js/ctrl/parent/story/storyDetail.html",controller:"storyDetailCtrl",resolve:o("storyDetailCtrl")}},cache:!1}).state("main.book",{url:"/bookList",views:{"main-view":{templateUrl:"js/ctrl/parent/book/bookList.html",controller:"bookListCtrl",resolve:o("bookListCtrl")}},cache:!1}).state("main.bookDetail",{url:"/bookDetail?id",views:{"main-view":{templateUrl:"js/ctrl/parent/book/bookDetail.html",controller:"bookDetailCtrl",resolve:o("bookDetailCtrl")}},cache:!1}).state("main.bookChapter",{url:"/bookChapter?id",views:{"main-view":{templateUrl:"js/ctrl/parent/book/bookChapter.html",controller:"bookChapterCtrl",resolve:o("bookChapterCtrl")}},cache:!1}).state("main.bookChapterDetail",{url:"/bookChapterDetail?id&title",views:{"main-view":{templateUrl:"js/ctrl/parent/book/bookChapterDetail.html",controller:"bookChapterDetailCtrl",resolve:o("bookChapterDetailCtrl")}},cache:!1}).state("main.base",{url:"/base?tabsID",views:{"main-view":{templateUrl:"js/ctrl/children/school/base.html",controller:"baseCtrl",resolve:o("baseCtrl")}}}).state("main.mineOrder",{url:"/mineOrder",views:{"main-view":{templateUrl:"page/mine/mineOrder.html",controller:"mineOrder",resolve:o("mineOrder")}}}).state("main.order",{url:"/order?orderID",views:{"main-view":{templateUrl:"page/mine/order.html",controller:"order",resolve:o("order")}}}).state("main.account",{url:"/account",cache:!1,views:{"main-view":{templateUrl:"page/mine/account/account.html",controller:"account",resolve:o("account")}}}).state("main.withdraw",{url:"/withdraw?money",views:{"main-view":{templateUrl:"page/mine/account/withdraw.html",controller:"withdraw",resolve:o("withdraw")}}}).state("main.withdrawMethod",{url:"/withdrawMethod",views:{"main-view":{templateUrl:"page/mine/account/withdrawMethod.html",controller:"withdrawMethod",resolve:o("withdrawMethod")}}}).state("main.withdrawRecord",{url:"/withdrawRecord",views:{"main-view":{templateUrl:"page/mine/account/withdrawRecord.html",controller:"withdrawRecord",resolve:o("withdrawRecord")}}}).state("main.addWithdrawMethod",{url:"/addWithdrawMethod?type",views:{"main-view":{templateUrl:"page/mine/account/addWithdrawMethod.html",controller:"addWithdrawMethod",resolve:o("addWithdrawMethod")}}}).state("main.accountDetail",{url:"/accountDetail",views:{"main-view":{templateUrl:"page/mine/account/accountDetail.html",controller:"accountDetail",resolve:o("accountDetail")}}}).state("main.accountDetailCon",{url:"/accountDetailCon?id",views:{"main-view":{templateUrl:"page/mine/account/accountDetailCon.html",controller:"accountDetailCon",resolve:o("accountDetailCon")}}}).state("main.accountRecord",{url:"/accountRecord",views:{"main-view":{templateUrl:"page/mine/account/accountRecord.html",controller:"accountRecord",resolve:o("accountRecord")}}}).state("main.evaluation",{cache:!1,url:"/evaluation",views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/evaluation.html",controller:"evaluationCtrl",resolve:o("evaluationCtrl")}}}).state("main.examination",{cache:!1,url:"/examination?type&title",views:{"main-view":{templateUrl:"js/ctrl/children/mathClearance/examination.html",controller:"examinationCtrl",resolve:o("examinationCtrl")}}}).state("main.exerType",{cache:!1,url:"/exerType?title",views:{"main-view":{templateUrl:"js/ctrl/children/mathClearance/exerType.html",controller:"exerTypeCtrl",resolve:o("exerTypeCtrl")}}}).state("main.mockExam",{cache:!1,url:"/mockExam?title",views:{"main-view":{templateUrl:"js/ctrl/children/mathClearance/mockExam.html",controller:"mockExamCtrl",resolve:o("mockExamCtrl")}}}).state("main.syncCourse",{cache:!1,url:"/syncCourse?title",views:{"main-view":{templateUrl:"js/ctrl/children/mathClearance/syncCourse.html",controller:"syncCourseCtrl",resolve:o("syncCourseCtrl")}}}).state("main.wrongExer",{cache:!1,url:"/wrongExer?title",views:{"main-view":{templateUrl:"js/ctrl/children/studyServices/wrongExer.html",controller:"wrongExerCtrl",resolve:o("wrongExerCtrl")}}}).state("main.tutorSendMsg",{url:"/tutorSendMsg?uid&name&avatar",views:{"main-view":{templateUrl:"page/chat/sendMsg.html",controller:"tutorSendMsg",resolve:o("tutorSendMsg")}}}).state("main.tutor",{cache:!1,url:"/tutor",views:{"main-view":{templateUrl:"page/mine/tutor.html",controller:"tutor",resolve:o("tutor")}}}).state("main.studentReport",{url:"/studentReport?answerExamID&type&view",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/studentReport.html",controller:"studentReportCtrl",resolve:o("studentReportCtrl")}}}).state("main.stuTestResults",{url:"/stuTestResults?classID&assignmentItemID&aeid&view&type&hideAnswer&title&sceneID&isOpenEachLook",views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/testResults.html",controller:"stuTestResultsCtrl",resolve:o("stuTestResultsCtrl")}}}).state("main.dvCode",{url:"/dvCode",views:{"main-view":{templateUrl:"page/dvCode/dvCode.html",controller:"dvCode",resolve:o("dvCode")}}}).state("main.knowledgeDiagnosis",{url:"/knowledgeDiagnosis?classID&id&uid&from&sceneID",views:{"main-view":{templateUrl:"page/knowledgeDiagnosis/knowledgeDiagnosis.html",controller:"KnowledgeDiagnosisCtrl",resolve:o("KnowledgeDiagnosisCtrl")}}}).state("main.stuWQDo",{url:"/stuWQDo?ids&aeid&wrongID",views:{"main-view":{templateUrl:"page/wrongQuestion/wQDo.html",controller:"StuWQDoCtrl",resolve:o("StuWQDoCtrl")}}}).state("main.stuTestDetail",{url:"/stuTestDetail?classID&assignmentItemID&aeid&isOpenEachLook&index&subjectId&exerciseIds&aqids&title&view&hideAnswer&itemIndex&examID",views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/testDetail.html",controller:"stuTestDetailCtrl",resolve:o("stuTestDetailCtrl")}}}).state("main.sprintChapter",{url:"/sprintChapter?tagID",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/sprintChapter/sprint.html",controller:"sprintChapterCtrl",resolve:o("sprintChapterCtrl")}}}).state("main.thematicUnit",{url:"/thematicUnit?scheduleID&typeID",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/thematicUnit.html",controller:"thematicUnitCtrl",resolve:o("thematicUnitCtrl")}}}).state("main.thematicDetails",{url:"/thematicDetails?title&scheduleID&aeid&scheduleType",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/thematicDetails.html",controller:"thematicDetailsCtrl",resolve:o("thematicDetailsCtrl")}}}).state("main.studySituation",{url:"/studySituation?scheduleID&aeid&type&scheduleType",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/studySituation.html",controller:"studySituationCtrl",resolve:o("studySituationCtrl")}}}).state("main.synthesisReport",{url:"/synthesisReport?scheduleID&aeid&type",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/synthesisReport.html",controller:"synthesisReportCtrl",resolve:o("synthesisReportCtrl")}}}).state("main.consolidationExercise",{url:"/consolidationExercise?tagID&scheduleID&status&stype&isCourseSprint",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/consolidationExercise.html",controller:"consolidationExerciseCtrl",resolve:o("consolidationExerciseCtrl")}}}).state("main.sectionReport",{url:"/sectionReport?tagID&scheduleID&scheduleType",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/sectionReport.html",controller:"sectionReportCtrl",resolve:o("sectionReportCtrl")}}}).state("main.reviewDetail",{url:"/reviewDetail?tagID&type&module&time&scheduleType",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/reviewDetail.html",controller:"reviewDetailCtrl",resolve:o("reviewDetailCtrl")}}}).state("main.summary",{url:"/summary?data",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/summary.html",controller:"summaryCtrl",resolve:o("summaryCtrl")}}}).state("main.assessmentReport",{url:"/assessmentReport?answerExamID&scheduleID&type",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/assessmentReport.html",controller:"assessmentReportCtrl",resolve:o("assessmentReportCtrl")}}}).state("main.courseHistory",{url:"/courseHistory",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/courseHistory.html",controller:"courseHistoryCtrl",resolve:o("courseHistoryCtrl")}}}).state("main.moreKnowLedge",{url:"/moreKnowLedge?answerExamID&type",views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/moreKnowLedge.html",controller:"moreKnowLedgeCtrl",resolve:o("moreKnowLedgeCtrl")}}}).state("main.knowledgeWeike",{url:"/knowledgeWeike?aeid&tag",cache:!0,views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/knowledgeWeike.html",controller:"knowledgeWeikeCtrl",resolve:o("knowledgeWeikeCtrl")}}}).state("main.weakTag",{url:"/weakTag?aeid&tag",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/weakTag.html",controller:"weakTagCtrl",resolve:o("weakTagCtrl")}}}).state("main.tagReport",{url:"/tagReport?answerExamID&tagID",views:{"main-view":{templateUrl:"js/ctrl/children/school/evaluation/tagReport.html",controller:"tagReportCtrl",resolve:o("tagReportCtrl")}}}).state("main.buyIntroduce365",{url:"/buyIntroduce365",views:{"main-view":{templateUrl:"js/ctrl/buy/buyIntroduce365.html",controller:"buyIntroduce365",resolve:o("buyIntroduce365")}}}).state("main.buyIntroduce",{url:"/buyIntroduce?type",views:{"main-view":{templateUrl:"js/ctrl/buy/buyIntroduce.html",controller:"buyIntroduce",resolve:o("buyIntroduce")}}}).state("main.buyAdd",{url:"/buyAdd?type&orderID&price&name&orderIDStr&offerCny&items",views:{"main-view":{templateUrl:"js/ctrl/buy/buyAdd.html",controller:"buyAdd",resolve:o("buyAdd")}}}).state("main.buyAdd365",{url:"/buyAdd365",views:{"main-view":{templateUrl:"js/ctrl/buy/buyAdd365.html",controller:"buyAdd365",resolve:o("buyAdd365")}}}).state("main.buyAddAddress",{url:"/buyAddAddress",views:{"main-view":{templateUrl:"js/ctrl/buy/buyAddAddress.html",controller:"buyAddAddress",resolve:o("buyAddAddress")}}}).state("main.topicList",{url:"/topicList?tagID",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/school/sprintChapter/topicList.html",controller:"topicListCtrl",resolve:o("topicListCtrl")}}}).state("main.courseLive",{url:"/courseLive",views:{"main-view":{templateUrl:"page/live/live.html",controller:"liveCtrl",resolve:o("liveCtrl")}}}).state("main.teacherDetail",{url:"/teacherDetail?id",cache:!1,views:{"main-view":{templateUrl:"page/live/teacherDetail.html",controller:"teacherDetailCtrl",resolve:o("teacherDetailCtrl")}}}).state("main.editComment",{url:"/editComment",cache:!1,views:{"main-view":{templateUrl:"page/live/editComment.html",controller:"editCommentCtrl",resolve:o("editCommentCtrl")}}}).state("main.liveCalendar",{url:"/liveCalendar",cache:!1,views:{"main-view":{templateUrl:"page/live/calendar/liveCalendar.html",controller:"liveCalendar",resolve:o("liveCalendar")}}}).state("main.xuetang",{url:"/xuetang",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/xuetang.html",controller:"xuetangCtrl",resolve:o("xuetangCtrl")}}}).state("main.famousTeacher",{url:"/famousTeacher",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/teacher/famousTeacher.html",controller:"famousTeacherCtrl",resolve:o("famousTeacherCtrl")}}}).state("main.msTeacherSearch",{url:"/msTeacherSearch",cache:!1,views:{"main-view":{templateUrl:"js/ctrl/children/teacher/msTeacherSearch.html",controller:"msTeacherSearchCtrl",resolve:o("msTeacherSearchCtrl")}}}).state("main.learningRecord",{url:"/learningRecord?uid",cache:!0,views:{"main-view":{templateUrl:"page/365/learningRecord.html",controller:"learningRecord",resolve:o("learningRecord")}}}).state("main.examRecordDetail",{url:"/examRecordDetail?examinationRecordID&aeid&subjectID&subject&subjectName",cache:!1,views:{"main-view":{templateUrl:"page/365/examRecordDetail.html",controller:"examRecordDetail",resolve:o("examRecordDetail")}}}).state("main.learningRecordDetail",{url:"/learningRecordDetail?id&begin&end&sid&reportType",cache:!0,views:{"main-view":{templateUrl:"page/365/learningRecordDetail.html",controller:"learningRecordDetail",resolve:o("learningRecordDetail")}}}).state("main.classAlbumTab",{url:"/classAlbumTab?classID",views:{"main-view":{templateUrl:"page/classAlbum/classAlbumTab.html",controller:"classAlbumTab",resolve:o("classAlbumTab")}}}).state("main.albumList",{url:"/albumList?classID",views:{"main-view":{templateUrl:"page/classAlbum/albumList.html",controller:"albumListCtrl",resolve:o("albumListCtrl")}}}).state("main.classPhotoList",{url:"/classPhotoList?albumID",views:{"main-view":{templateUrl:"page/classAlbum/classPhotoList.html",controller:"classPhotoListCtrl",resolve:o("classPhotoListCtrl")}}}).state("main.timeAlbumList",{url:"/timeAlbumList?classID",views:{"main-view":{templateUrl:"page/classAlbum/timeAlbumList.html",controller:"timeAlbumListCtrl",resolve:o("timeAlbumListCtrl")}}}).state("main.commonIframe",{url:"/commonIframe?url&title",views:{"main-view":{templateUrl:"page/application/commonIframe.html",controller:"commonIframe",resolve:o("commonIframe")}}}),r.otherwise("/init"),angular.services.loadService=function(e,t){var r=angular.services.injector,l=r.get("$ocLazyLoad"),i=r.get("$q");if(r.has(e)){var o=r.get(e);t&&t(o)}else(function(e,t,r){var l=t.when(1),i=[],o=[];a.commonLoaded||(angular.forEach(a.common,(function(e){s(e)})),a.commonPaths=[].concat(i),appConf.commonMin&&(i=[a.scripts["app.common"]]),a.commonLoaded=!0);function s(e){if(o.indexOf(e)<0){o.push(e);var t=a.dependents[e];if(t)for(var r=0;r<t.length;r++){s(t[r])}var l=a.scripts[e];l&&(a.commonLoaded?a.commonPaths.indexOf(l)<0&&i.push(l):i.push(l))}}return s(r),l.then((function(){var r=t.defer();function l(t){return e.load(t).then((function(){a()}))}function a(){var e=i.shift();e?l(e):r.resolve()}return a(),r.promise}))})(l,i,e).then((function(){var l=r.get(e);t&&t(l)}))}}]).run(["$rootScope","$templateRequest","$ionicHistory","$ionicPlatform","$timeout","$location","$state","$ionicScrollDelegate","$ocLazyLoad","JS_CONFIG","$q",function(e,t,r,l,i,a,o,s,n,c,m){function d(){var e=ionic.Platform.update;hookAjax({open:function(t){var r=t[1];"GET"===t[0]&&r.indexOf(".html")>0&&(r+="?"+appConf.appVersion.sno,1===appConf.openRemote&&0!==r.indexOf("http")?r=appConf.remoteUrl+"/"+r:e&&0!==t.indexOf("http")&&(r=e.path+"/"+r),t[1]=r)}})}var u,v;if(u=n.load,v=ionic.Platform.update,n.load=function(){var e=[].slice.call(arguments),t=e[0];if("string"==typeof t){if(c.commonLoaded&&appConf.commonMin&&c.commonPaths.indexOf(t)>=0){if(appConf.terminalType>0)return m((function(e){e()}));t=c.scripts["app.common"]}t+="?"+appConf.appVersion.sno,1===appConf.openRemote&&0!==t.indexOf("http")?t=appConf.remoteUrl+"/"+t:v&&0!==t.indexOf("http")&&t.indexOf("vendor")<0&&(t=v.path+"/"+t),e[0]=t}return u.apply(this,e)},window.cordova?document.addEventListener("deviceready",d):d(),appConf.openRemote||appConf.isTest){var h=window.localStorage.appName;if(h){var w,p=appConfigs;for(var C in p){var g=p[C];if(g.key===h){w=g;break}}w&&(angular.extend(appConf,w),appConf.configHost(),e.$broadcast("changeHost"))}}var f,D=a.path();!appConf.isTest&&2===appConf.terminalType&&D.indexOf("wxLogin")<0&&(ionic.Platform.isReload=!0,a.path("/wxLogin"));var k={};function y(){var e,t=[];for(e in k){var r;k.hasOwnProperty(e)&&(r=k[e])&&t.push(e+("_"==r?"":"="+r))}f.content=t.join(", "),console.log("viewportTagUpdate over")}function U(){console.log("浏览器分辨率是"+document.documentElement.clientWidth+"*"+document.documentElement.clientHeight);var e=document.documentElement.clientWidth,t=ionic.viewport.orientation(),r=1;if(0==t&&e>460){var l=document.documentElement.clientHeight;r=l/e<1.45?l/615:e/460;var i=e/(r=Math.min(2,r));1!=r&&(k.width=i,k["initial-scale"]=r,k["minimum-scale"]=r,k["maximum-scale"]=r,y())}else if(0==t&&e<360){r=e/360,i=360;k.width=i,k["initial-scale"]=r,k["minimum-scale"]=r,k["maximum-scale"]=r,y()}}function x(){s.resize(),e.keyboard_hasShown=!0}function b(){i((function(){e.keyboard_hasShown=!1}),100)}ionic.Platform.ready((function(){if(i((function(){!function(){for(var e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){f=document.head.children[e];break}if(f){var t,r=f.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<r.length;e++)r[e]&&(t=r[e].split("="),k[t[0]]=t.length>1?t[1]:"_");U()}}()}),100),window.addEventListener("orientationchange",(function(){e.videoFullScreen||setTimeout(U,1100)}),!1),window.addEventListener("keyboardDidShow",x,!1),window.addEventListener("keyboardDidHide",b,!1),window.cordova){var t=window.Keyboard;cordova.plugins.Keyboard=t,t.close=t.hide,window.StatusBar.styleDefault(),ionic.Platform.isIOS()&&(t.shrinkView(!0),t.disableScrollingInShrinkView(!0),t.hideFormAccessoryBar(!0),window.StatusBar.overlaysWebView(!1))}})),e.keyboard_hasShown=!1,angular.hideSplashScreen=function(){document.addEventListener("deviceready",(function(){var e=(new Date).getTime()-window.appStartTime;console.log("interval "+e),i((function(){navigator.splashscreen&&navigator.splashscreen.hide(),console.log("hideSplashScreen")}),e>3e3?0:3e3-e)}))},e.isCustomized=!1,e.appConf=appConf,l.ready((function(){var t;ionic.Platform.isAndroid()&&window.plugins&&(window.plugins.utilsPlugin.clearCache(),window.plugins.utilsPlugin.checkAppInstall({wholeWord:!1,packageName:"com.wmzz.installer"},(function(t){0==t.status&&(e.isCustomized=!0,console.log("isCrosswalk = "+ionic.Platform.isCrosswalk()),ionic.Platform.isCrosswalk()||(window.plugins.utilsPlugin.sendBroadcast({action:"com.wmzz.installer.receiver.start",includeStopped:!0}),i((function(){window.plugins.utilsPlugin.sendBroadcast({action:"com.wmzz.installer_oneHour"})}),6e3)))})),i((function(){plugins.enginePlugin&&plugins.enginePlugin.setUserAgent(navigator.userAgent+" app/"+appConf.appKey)}),5e3),document.addEventListener("pause",(function(){t&&t(),t=l.registerBackButtonAction((function(){}),1e3)}),!1),document.addEventListener("resume",(function(){i((function(){t&&t()}),200)}),!1))}));var I=document.documentElement.clientHeight;document.addEventListener("deviceready",(function(){window.plugins&&window.plugins.screensize&&window.plugins.screensize.get((function(e){I=e.height}),null)}),!1);var j=0;l.registerBackButtonAction((function(){return!e.keyboard_hasShown&&("/main/home"==a.path()||"/single/login"==a.path()?(2==++j&&ionic.Platform.exitApp(),window.plugins&&window.plugins.toast&&window.plugins.toast.showWithOptions({message:"再按一次退出程序.",duration:"short",position:"bottom",addPixelsY:20-I/8}),i((function(){j=0}),2e3),!1):void(r.backView()&&!/login/i.test(a.url())?r.goBack():o.go("main.home")))}),100),o.goIndex=function(){o.go("main.home")},r.removeView=function(e){e=e||1;var t=this.viewHistory(),r=t.histories[this.currentHistoryId()],l=r.cursor,i=r.stack[l],a=r.stack[l-e];if(a&&i){for(var o=0;o<e;o++)this.clearCache([r.stack[l-o].viewId]);r.stack.splice(l,e),i.viewId=a.viewId,i.index=i.index-e,a.forwardViewId=i.viewId,t.backView=a,r.currentCursor+=-e}},e.$on("$stateChangeSuccess",(function(e,t,r,l,i){l.name&&"init"!=l.name&&window.cordova&&cordova.plugins.BaiduMobStatistics&&cordova.plugins.BaiduMobStatistics.onPageEnd(l.name),t.name&&"init"!=t.name&&window.cordova&&cordova.plugins.BaiduMobStatistics&&cordova.plugins.BaiduMobStatistics.onPageStart(t.name)}))}]),String.prototype.test=function(e){return new RegExp(this.toString()).test(e)};
var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,o=0,i=arguments.length;o<i;o++)n+=arguments[o].length;var s=Array(n),e=0;for(o=0;o<i;o++)for(var r=arguments[o],c=0,t=r.length;c<t;c++,e++)s[e]=r[c];return s};angular.services.factory("$androidPermission",["localStorage","$ionicModal","$rootScope",function(n,o,i){function s(n,o,i){if(ionic.Platform.isAndroid()){var s=function(){var s=i.shift();s?c(s):r?n&&n():o&&o("无权限，可通过【设置】开启")},e=cordova.plugins.permissions,r=!0,c=function(n){e.requestPermission(n,(function(n){n.hasPermission||(r=!1),s()}),(function(){s()}))};s()}else n&&n()}function e(n,o,i){var s=__spreadArrays(i);if(console.log("当前的检测对象为："+JSON.stringify(s)),ionic.Platform.isAndroid()){var e=function(){var i=s.shift();i?t(i):c?n&&n():o&&o("无权限，可通过【设置】开启")},r=cordova.plugins.permissions,c=!0,t=function(n){r.checkPermission(n,(function(n){n.hasPermission?console.log("检查已经有权限"):(c=!1,console.log("检查没有权限")),e()}),(function(){e()}))};e()}else n&&n()}function r(o){var i=(new Date).getTime();n.set(o.name+"",i+"")}function c(o){var i=parseInt(n.get(o.name+""))||0,s=(new Date).getTime();return console.log("相差时间："+(s-i)/1e3/3600+"小时"),s-i>1728e5?{flag:1}:{flag:0,desc:o.desc}}function t(){window.plugins.utilsPlugin.openSetting()}function a(n){var s=i||{};o.fromTemplateUrl("js/others/permissionDesc.html",angular.extend({animation:"none"},{scope:s})).then((function(o){o.show(),s.permissionModal=o,s.desc=n.desc})),s.closeModal=function(){s.permissionModal.remove()},s.toSetting=function(n){s.permissionModal.remove(),t()}}return{check:e,checkPermission:s,openSetting:t,rejectPermission:r,checkRejectTime:c,openPrompt:a,checkWithPrompt:function(n,o,i){!function t(){var m=n.shift();m?e((function(){t()}),(function(n){var o=c(m);console.log("是否超过48小时："+(o.flag?"是":"否")),o.flag?(console.log("准备申请权限："+m.permission),s((function(){t()}),(function(n){console.log("拒绝了权限，记录拒绝时间"),r(m),i&&i()}),[m.permission])):(console.log("没有超出48小时立刻弹窗"),a(m))}),[m.permission]):(console.log("所有结束"),o&&o())}()},camera_permission_info:{name:"PERMISSION_CAMERA",permission:window.cordova?cordova.plugins.permissions.CAMERA:"",desc:"未开启摄像头访问权限，您无法扫描二维码或上传图片"},storage_permission_info:{name:"PERMISSION_STORAGE",permission:window.cordova?cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE:"",desc:"未开启文件访问与存储权限，您可能无法正常拍照、录音、保存媒体文件"},album_permission_info:{name:"PERMISSION_ALBUM",permission:window.cordova?cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE:"",desc:"未开启手机相册、文件访问权限，您无法进行答题、上传图片或发送图片"},audio_permission_info:{name:"PERMISSION_RECORD_AUDIO",permission:window.cordova?cordova.plugins.permissions.RECORD_AUDIO:"",desc:"未开启麦克风访问权限，您无法进行录音或发送语音"},update_permission_info:{name:"PERMISSION_UPDATE",permission:window.cordova?cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE:"",desc:"未开启文件访问与存储权限，您可能无法正常更新应用"},checkPermissionWithFun:function(n,o,i){s((function(){n&&n()}),(function(n){a(o)}),[i])},checkPermissionArrayWithFun:function(n,o,i){!function e(){var r=n.shift();r?s((function(){e()}),(function(n){a(r),i&&i()}),[r.permission]):o&&o()}()}}}]),angular.services.factory("androidPermission",["$androidPermission",function(n){return n}]);
angular.directives.directive("codeInput",["$timeout",function(e){return{restrict:"E",replace:!0,scope:{codeValue:"=",codeComplete:"="},template:'<div class="dp-ib df"></div>',compile:function(t,i){for(var a=0;a<i.length;a++)t.append('<div class="flex1 plr5"><input type="number" class="input-rectangle under-line"></div>');return function(l){var n,o=t.find("input");o.bind("keydown",(function(e){$(this).val(""),"Backspace"!=e.key?void 0===e.key&&void 0!==e.keyCode&&(8===e.keyCode?$(this).val(""):48===e.keyCode?$(this).val("0"):49===e.keyCode?$(this).val("1"):50===e.keyCode?$(this).val("2"):51===e.keyCode?$(this).val("3"):52===e.keyCode?$(this).val("4"):53===e.keyCode?$(this).val("5"):54===e.keyCode?$(this).val("6"):55===e.keyCode?$(this).val("7"):56===e.keyCode?$(this).val("8"):57===e.keyCode&&$(this).val("9")):$(this).val("")})),o.bind("keyup",(function(e){if(l.codeValue="",$(this).val())for(var t=0;t<o.length;t++){var a=$(o[t]);if(l.$apply((function(){l.codeValue+=a.val()})),!a.val()){a.focus();break}parseInt(t)+1>=i.length&&l.codeComplete&&l.codeComplete()}else for(t=0;t<o.length;t++){a=$(o[t]);l.$apply((function(){l.codeValue+=a.val()})),a.val()&&$(o[t]).focus()}})),o.bind("input",(function(t){if(t.preventDefault(),t.stopPropagation(),!n){n=!0;var d=$(this).val();Number.isInteger(parseInt($(this).val()))||$(this).val("");var v=$(this);e((function(){if(d.length>=i.length)for(var t in v.val(""),o){var s=parseInt(d.substring(1*t,1*t+1));o[t].value=s;$(o[a]);if(l.$apply((function(){l.codeValue+=s})),t==i.length-1)return void e((function(){l.codeComplete&&l.codeComplete()}),500)}n=!1}),80)}}))}}}}]);
angular.services.factory("correct",["request","serviceManager",function(e,i){var n={};return i.addService(n),n.record={},n.isRefreshRecord=!1,n.getRecord=function(i,n,c){e.jsonp("scan/record",i,(function(e){n(e)}),(function(e){c(e)}))},n.clearRecord=function(){n.record={}},n.getExamDetail=function(i,n,c,t){var o={aeid:i};t&&(o.uid=t),e.jsonp("exam/detail",o,(function(e){n&&n(e)}),(function(e){c&&c(e)}))},n.getExamDetailTopic=function(i,n,c,t){var o={aeid:i};t&&(o.uid=t),e.jsonp("exam/detailTopic",o,(function(e){n&&n(e)}),(function(e){c&&c(e)}))},n.getExerciseDetail=function(i,n,c){var t="",o={_host:appConf.IAS_HOST};i.uid&&(o.uid=i.uid),i.type?(t="exercise/detail",o.aqid=i.id):(t="exercise/getExercise",o.eid=i.id),e.jsonp(t,o,(function(e){n&&n(e)}),(function(e){c&&c(e)}))},n}]);
angular.services.factory("$calculate",["$ionicPopup","$rootScope","prompt",function(e,l,a){return{create:function(n,i){var o=(n.scope||l).$new();o.maxCount=n.max,o.message="hello",o.display="";var s=[];o.numbers=function(e){if(".5"!==s[s.length-1]){s.push(e);var l=1*s.join("");if(l>n.max)return s.pop(),o.display="",s.length=0,a.showTip("不能超过满分");".5"===e&&(o.numberDisable=!0),o.display=l}},o.operation=function(e){o.display,s=[],e},o.delete=function(){".5"===s.pop()&&(o.numberDisable=!1),o.display=1*s.join(""),0!==o.display&&"0"!==o.display||(o.display="",s.length=0)},o.closeCal=function(){t.close()},o.calThen=function(){if(""===o.display)return a.showTip("请输入分数");i&&i(o.display),t.close()};var t=e.show({cssClass:"popup-calculate",title:null,templateUrl:"page/calculate/calculate.html",scope:o});return this}}}]);
angular.services.factory("$topDrawingBoard",["$ionicModal","$ocLazyLoad","$ionicPlatform","$androidPermission",function(t,a,i,n){var o,r=this;return this.cropBlanks=function(t,a,i){getRBG=function(a,n){return{red:i[4*(t*n+a)],green:i[4*(t*n+a)+1],blue:i[4*(t*n+a)+2]}},isWhite=function(t){return 255==t.red&&255==t.green&&255==t.blue},scanY=function(i){for(var n=i?1:-1,o=i?0:a-1;i?o<a:o>-1;o+=n)for(var r=0;r<t;r++)if(!isWhite(getRBG(r,o)))return o;return null},scanX=function(i){for(var n=i?1:-1,o=i?0:t-1;i?o<t:o>-1;o+=n)for(var r=0;r<a;r++)if(!isWhite(getRBG(o,r)))return o;return null};var n=scanY(!0)-1,o=scanY(!1)+1,r=scanX(!0)-1,e=scanX(!1)+1;return{cropTop:n,cropBottom:o,cropLeft:r,cropRight:e,cropWidth:e-r,cropHeight:o-n}},this.then=function(){return angular.isFunction(arguments[0])&&(o.utils.callback=arguments[0]),this},this.remove=function(){o.boardModal&&o.boardModal.remove()},this.getImg=function(){return o.utils.returnImageData()},this.create=function(e,d){function c(){var t=DrawingBoard.Utils.drawingBoards.topDrawingBoard.canvas,a=document.createElement("canvas");return a.width=t.width,a.height=t.height,t.toDataURL()==a.toDataURL()}if(window.cordova&&window.cordova.plugins.Keyboard.hide(),this.scope=e.scope,e.scope.uri=e.uri,e.scope.buttons=e.buttons,angular.extend(e.scope,{color:e.color,backgroundColor:e.backgroundColor,$buttonTapped:function(t,a){if(a.onTap)(a.onTap||noop).apply(r,[t,c()])},$then:function(t){if(e.then)(e.then||noop).apply(r,[t,c()]);else t&&o.utils.returnImageData()},isReset:!!e.then}),(o=e.scope).utils={buttonMode:"pencil",callback:function(){},changeButtonMode:function(){"pencil"==o.utils.buttonMode?(o.utils.buttonMode="eraser",DrawingBoard.Utils.drawingBoards.topDrawingBoard.ctx.lineWidth=30):(o.utils.buttonMode="pencil",DrawingBoard.Utils.drawingBoards.topDrawingBoard.ctx.lineWidth=2),DrawingBoard.Utils.drawingBoards.topDrawingBoard.setMode(o.utils.buttonMode)},returnImageData:function(){var t=document.createElement("canvas");t.width=DrawingBoard.Utils.drawingBoards.topDrawingBoard.canvas.width,t.height=DrawingBoard.Utils.drawingBoards.topDrawingBoard.canvas.height;var a=t.getContext("2d");(a.rect(0,0,t.width,t.height),a.fillStyle="white",a.fill(),e.uri)&&function(t,a){var i=a.canvas,n=i.width/t.width,o=i.height/t.height,r=Math.min(n,o),e=(i.width-t.width*r)/2,d=(i.height-t.height*r)/2;a.clearRect(0,0,i.width,i.height),a.drawImage(t,0,0,t.width,t.height,e,d,t.width*r,t.height*r)}(document.getElementById("tDB-img"),a);a.drawImage(DrawingBoard.Utils.drawingBoards.topDrawingBoard.canvas,0,0);var i=r.cropBlanks(t.width,t.height,a.getImageData(0,0,t.width,t.height).data),n=document.createElement("canvas");n.width=i.cropWidth,n.height=i.cropHeight,n.getContext("2d").drawImage(t,i.cropLeft,i.cropTop,i.cropWidth,i.cropHeight,0,0,i.cropWidth,i.cropHeight);var d=n.toDataURL();return this.callback&&this.callback(d),e.then||o.boardModal&&o.boardModal.remove(),e.then&&ionic.Platform.isIOS()?t.toDataURL():d}},o.submitImg=function(){n.checkPermissionArrayWithFun([n.storage_permission_info],(function(){o.utils.returnImageData()}))},a.load(["vendor/drawingboard.min.js","js/directive/drawingBoard.js"]).then((function(){t.fromTemplateUrl("js/others/drawingBoard.html",{scope:e.scope,animation:"slide-in-up"}).then((function(t){t.show(),o.boardModal=t}))})),e.then)var h=i.registerBackButtonAction((function(t){e.then(!1,c()),h&&h()}),301);return this},this}]);
angular.services.factory("mediaFactory",["$q","phoneUtils","$timeout",function(e,o,n){var r,t,i,c={recording:!1,isBusy:!1,stop:!1};function s(){c.stop=!0,window.cordova?r&&r.stopRecord():(console.log("stopRecordWeb"),t&&t.stop((function(e,o){t.close(),t=null;var r={duration:o,blob:e};i.resolve(r),c.recording=!1,n((function(){c.isBusy=!1}),200)}),(function(e){console.log("录音失败:"+e),t.close(),t=null}))),n((function(){c.stop&&(c.recording=!1,c.isBusy=!1)}),2e3)}return{startRecord:function(a){return window.cordova?function(t){var i=e.defer();function a(e){console.log("Record success"),i.resolve(e),c.recording=!1,n((function(){c.isBusy=!1}),200)}function l(e){console.log("Record error"),i.reject(e),c.recording=!1,n((function(){c.isBusy=!1}),200)}if(c.recording)return void s();if(c.isBusy)return void l({msg:"请稍后再试"});return o.createDir(t,(function(e){var n=e.nativeURL.replace("file://","")+(new Date).getTime()+".wav";o.deviceIsIOS&&(n=cordova.file.tempDirectory.replace("file://","")+(new Date).getTime()+".wav"),r=new Media(n,(function(){var e={},r=encodeURI("file://"+n);o.readFile(r,!1,(function(o){e.stream=o,e.path=n,e.nativeURL=r,function(e,o){var n=new Media(e);n.play(),n.pause();var r=0,t=setInterval((function(){r+=50;var e=n.getDuration();e>0&&(clearInterval(t),n.release(),o&&o(e)),r>1500&&(clearInterval(t),n.release(),o&&o(-1))}),50)}(n,(function(o){o>0&&(o*=1e3),e.duration=o,console.log("getDuration = "+o),a(e)}))}),(function(e){console.log("read file fail"+JSON.stringify(e)),l({msg:"录音失败"})}))}),(function(e){console.log("record fail"+JSON.stringify(e)),l({msg:""})})),c.recording=!0,c.isBusy=!0,c.stop=!1,r.startRecord()}),(function(){l({msg:"录音失败"})})),i.promise}(a):(i=e.defer(),void(t=Recorder({type:"mp3",sampleRate:16e3,bitRate:16,onProcess:function(e,o,n,r,t,i){}})).open((function(){console.log("rec.start"),c.recording=!0,c.isBusy=!0,c.stop=!1,t.start()}),(function(e,o){i.reject({msg:(o?"用户未同意，":"")+"无法录音:"+e}),c.recording=!1,n((function(){c.isBusy=!1}),200),console.log((o?"UserNotAllow，":"")+"无法录音:"+e)})),i.promise)},stopRecord:s,status:c}}]);
angular.directives.directive("photoSwipe",["$ionicModal","$ionicPlatform",function(e,i){return{restrict:"A",link:function(t,n,o){o.$observe("photoSwipe",(function(){var o,r=$(n.find("img")),a=[];"IMG"==n[0].nodeName&&(r=$(n[0])),r.each((function(e,i){var t=$(i).attr("src"),n=new Image;n.src=t,a.push({src:t,w:0,h:0,img:n})})),r.bind("click",(function(n){var c;n.stopPropagation();var s=r.index($(this));e.fromTemplateUrl("js/services/showImages.html",{scope:t,animation:"slide-in-up",hardwareBackButtonClose:!0}).then((function(e){var i;c=e,e.show();var t=0;i=setInterval((function(){t++;for(var n=!0,r=0;r<a.length;r++){var c=a[r];if(0==c.w){var h=c.img;if(h.width>0||h.height>0){var l=h.width,u=h.height;c.w=l,c.h=u}else n=!1}}(n||t>=200)&&(clearInterval(i),function(i){var t=document.querySelectorAll(".pswp")[0],n=new PhotoSwipe(t,PhotoSwipeUI_Default,i,{index:s,bgOpacity:.85});n.init(),n.listen("close",(function(){e.remove(),o&&o()}))}(a))}),50)})),o=i.registerBackButtonAction((function(){c&&c.remove(),o()}),501)}))}))}}}]);
"use strict";angular.module("com.2fdevs.videogular",["ngSanitize"]).run(["$templateCache",function(a){a.put("vg-templates/vg-media-video","<video></video>"),a.put("vg-templates/vg-media-audio","<audio></audio>"),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e})}]),angular.module("com.2fdevs.videogular").constant("VG_STATES",{PLAY:"play",PAUSE:"pause",STOP:"stop"}).constant("VG_VOLUME_KEY","videogularVolume"),angular.module("com.2fdevs.videogular").controller("vgController",["$scope","$window","vgConfigLoader","vgFullscreen","VG_UTILS","VG_STATES","VG_VOLUME_KEY",function(a,b,c,d,e,f,g){var h=null,i=!1,j=!1,k=!1,l=!1;this.videogularElement=null,this.clearMedia=function(){this.mediaElement[0].src="",this.mediaElement[0].removeEventListener("canplay",this.onCanPlay.bind(this),!1),this.mediaElement[0].removeEventListener("loadedmetadata",this.onLoadMetaData.bind(this),!1),this.mediaElement[0].removeEventListener("waiting",this.onStartBuffering.bind(this),!1),this.mediaElement[0].removeEventListener("ended",this.onComplete.bind(this),!1),this.mediaElement[0].removeEventListener("playing",this.onStartPlaying.bind(this),!1),this.mediaElement[0].removeEventListener("play",this.onPlay.bind(this),!1),this.mediaElement[0].removeEventListener("pause",this.onPause.bind(this),!1),this.mediaElement[0].removeEventListener("volumechange",this.onVolumeChange.bind(this),!1),this.mediaElement[0].removeEventListener("playbackchange",this.onPlaybackChange.bind(this),!1),this.mediaElement[0].removeEventListener("timeupdate",this.onUpdateTime.bind(this),!1),this.mediaElement[0].removeEventListener("progress",this.onProgress.bind(this),!1),this.mediaElement[0].removeEventListener("seeking",this.onSeeking.bind(this),!1),this.mediaElement[0].removeEventListener("seeked",this.onSeeked.bind(this),!1),this.mediaElement[0].removeEventListener("error",this.onVideoError.bind(this),!1)},this.onRouteChange=function(){(void 0===this.clearMediaOnNavigate||this.clearMediaOnNavigate===!0)&&this.clearMedia()},this.onCanPlay=function(b){this.isBuffering=!1,a.$parent.$digest(a.vgCanPlay({$event:b})),!k&&(this.startTime>0||0===this.startTime)&&(this.seekTime(this.startTime),k=!0)},this.onVideoReady=function(){this.isReady=!0,this.autoPlay=a.vgAutoPlay,this.playsInline=a.vgPlaysInline,this.nativeFullscreen=a.vgNativeFullscreen||!0,this.cuePoints=a.vgCuePoints,this.startTime=a.vgStartTime,this.virtualClipDuration=a.vgVirtualClipDuration,this.clearMediaOnNavigate=a.vgClearMediaOnNavigate||!0,this.currentState=f.STOP,j=!0,l=this.startTime>=0&&this.virtualClipDuration>0,e.supportsLocalStorage()&&this.setVolume(parseFloat(b.localStorage.getItem(g)||"1")),a.vgConfig?c.loadConfig(a.vgConfig).then(this.onLoadConfig.bind(this)):a.vgPlayerReady({$API:this})},this.onLoadConfig=function(b){this.config=b,a.vgTheme=this.config.theme,a.vgAutoPlay=this.config.autoPlay,a.vgPlaysInline=this.config.playsInline,a.vgNativeFullscreen=this.config.nativeFullscreen,a.vgCuePoints=this.config.cuePoints,a.vgClearMediaOnNavigate=this.config.clearMediaOnNavigate,a.vgStartTime=this.config.startTime,a.vgVirtualClipDuration=this.config.virtualClipDuration,l=a.vgStartTime>=0&&a.vgVirtualClipDuration>0,a.vgPlayerReady({$API:this})},this.onLoadMetaData=function(a){this.isBuffering=!1,this.onUpdateTime(a)},this.onProgress=function(b){this.updateBuffer(b),a.$parent.$digest()},this.updateBuffer=function(a){a.target.buffered.length&&(this.buffered=a.target.buffered,this.bufferEnd=1e3*a.target.buffered.end(a.target.buffered.length-1),this.bufferEnd>this.totalTime&&(this.bufferEnd=this.totalTime))},this.onUpdateTime=function(b){var d,e,c=1e3*b.target.currentTime;this.updateBuffer(b),1/0!=b.target.duration&&null!=b.target.duration&&void 0!=b.target.duration&&1.7976931348623157e308!=b.target.duration?(l?k&&(b.target.currentTime<this.startTime||b.target.currentTime-this.startTime>this.virtualClipDuration)?this.onComplete():(this.currentTime=Math.max(0,c-1e3*this.startTime),this.totalTime=1e3*this.virtualClipDuration,this.timeLeft=1e3*this.virtualClipDuration-this.currentTime):(this.currentTime=c,this.totalTime=1e3*b.target.duration,this.timeLeft=1e3*(b.target.duration-b.target.currentTime)),this.isLive=!1):(this.currentTime=c,this.isLive=!0),d=l?this.currentTime/1e3:b.target.currentTime,e=l?this.totalTime/1e3:b.target.duration,this.cuePoints&&this.checkCuePoints(d),a.vgUpdateTime({$currentTime:d,$duration:e}),"$apply"!=a.$$phase&&"$digest"!=a.$$phase&&a.$parent.$digest()},this.checkCuePoints=function(a){var b,c,d,e,f,g;for(b in this.cuePoints)for(c=0,d=this.cuePoints[b].length;d>c;c++)e=this.cuePoints[b][c],f=parseInt(a,10),g=parseInt(e.timeLapse.start,10),e.timeLapse.end||(e.timeLapse.end=e.timeLapse.start+1),a<e.timeLapse.end&&(e.$$isCompleted=!1),e.$$isDirty||f!==g||"function"!=typeof e.onEnter||(e.onEnter(a,e.timeLapse,e.params),e.$$isDirty=!0),a>e.timeLapse.start?(a<e.timeLapse.end&&(e.onUpdate&&e.onUpdate(a,e.timeLapse,e.params),e.$$isDirty||"function"!=typeof e.onEnter||e.onEnter(a,e.timeLapse,e.params)),a>=e.timeLapse.end&&e.onComplete&&!e.$$isCompleted&&(e.$$isCompleted=!0,e.onComplete(a,e.timeLapse,e.params)),e.$$isDirty=!0):(e.onLeave&&e.$$isDirty&&e.onLeave(a,e.timeLapse,e.params),e.$$isDirty=!1)},this.onPlay=function(){this.setState(f.PLAY),a.$parent.$digest()},this.onPause=function(){var b=l?this.currentTime:this.mediaElement[0].currentTime;0==b?this.setState(f.STOP):this.setState(f.PAUSE),a.$parent.$digest()},this.onVolumeChange=function(){this.volume=this.mediaElement[0].volume,a.$parent.$digest()},this.onPlaybackChange=function(){this.playback=this.mediaElement[0].playbackRate,a.$parent.$digest()},this.onSeeking=function(b){a.vgSeeking({$currentTime:b.target.currentTime,$duration:b.target.duration})},this.onSeeked=function(b){a.vgSeeked({$currentTime:b.target.currentTime,$duration:b.target.duration})},this.seekTime=function(a,b){var c,d;b?l?(a=Math.max(0,Math.min(a,100)),c=a*this.virtualClipDuration/100,this.mediaElement[0].currentTime=this.startTime+c):(c=a*this.mediaElement[0].duration/100,this.mediaElement[0].currentTime=c):l?(d=a/this.mediaElement[0].duration,c=k?this.virtualClipDuration*d:0,this.mediaElement[0].currentTime=k?this.startTime+c:this.startTime):(c=a,this.mediaElement[0].currentTime=c),this.currentTime=1e3*c},this.playPause=function(){this.mediaElement[0].paused?this.play():this.pause()},this.setState=function(b){return b&&b!=this.currentState&&(a.vgUpdateState({$state:b}),this.currentState=b),this.currentState},this.play=function(){this.mediaElement[0].play(),this.setState(f.PLAY)},this.pause=function(){this.mediaElement[0].pause(),this.setState(f.PAUSE)},this.stop=function(){try{this.mediaElement[0].pause();var a=l?this.startTime:0;this.mediaElement[0].currentTime=a,this.currentTime=a,this.buffered=[],this.bufferEnd=0,this.setState(f.STOP)}catch(b){return b}},this.toggleFullScreen=function(){d.isAvailable&&this.nativeFullscreen?this.isFullScreen?e.isMobileDevice()||d.exit():e.isMobileDevice()?e.isiOSDevice()?j?this.enterElementInFullScreen(this.mediaElement[0]):(i=!0,this.play()):this.enterElementInFullScreen(this.mediaElement[0]):this.enterElementInFullScreen(this.videogularElement[0]):(this.isFullScreen?(this.videogularElement.removeClass("fullscreen"),this.videogularElement.css("z-index","auto")):(this.videogularElement.addClass("fullscreen"),this.videogularElement.css("z-index",e.getZIndex())),this.isFullScreen=!this.isFullScreen)},this.enterElementInFullScreen=function(a){d.request(a)},this.changeSource=function(b){a.vgChangeSource({$source:b})},this.setVolume=function(c){c=Math.max(Math.min(c,1),0),a.vgUpdateVolume({$volume:c}),this.mediaElement[0].volume=c,this.volume=c,e.supportsLocalStorage()&&b.localStorage.setItem(g,c.toString())},this.setPlayback=function(b){a.vgUpdatePlayback({$playBack:b}),this.mediaElement[0].playbackRate=b,this.playback=b},this.updateTheme=function(a){var c,d,e,f,b=document.getElementsByTagName("link");if(h)for(c=0,d=b.length;d>c;c++)if(b[c].outerHTML.indexOf(h)>=0){b[c].parentNode.removeChild(b[c]);break}if(a){for(e=angular.element(document).find("head"),f=!1,c=0,d=b.length;d>c&&!(f=b[c].outerHTML.indexOf(a)>=0);c++);f||e.append("<link rel='stylesheet' href='"+a+"'>"),h=a}},this.onStartBuffering=function(){this.isBuffering=!0,a.$parent.$digest()},this.onStartPlaying=function(){this.isBuffering=!1,a.$parent.$digest()},this.onComplete=function(){a.vgComplete(),this.setState(f.STOP),this.isCompleted=!0,l&&this.stop(),a.$parent.$digest()},this.onVideoError=function(b){a.vgError({$event:b})},this.addListeners=function(){this.mediaElement[0].addEventListener("canplay",this.onCanPlay.bind(this),!1),this.mediaElement[0].addEventListener("loadedmetadata",this.onLoadMetaData.bind(this),!1),this.mediaElement[0].addEventListener("waiting",this.onStartBuffering.bind(this),!1),this.mediaElement[0].addEventListener("ended",this.onComplete.bind(this),!1),this.mediaElement[0].addEventListener("playing",this.onStartPlaying.bind(this),!1),this.mediaElement[0].addEventListener("play",this.onPlay.bind(this),!1),this.mediaElement[0].addEventListener("pause",this.onPause.bind(this),!1),this.mediaElement[0].addEventListener("volumechange",this.onVolumeChange.bind(this),!1),this.mediaElement[0].addEventListener("playbackchange",this.onPlaybackChange.bind(this),!1),this.mediaElement[0].addEventListener("timeupdate",this.onUpdateTime.bind(this),!1),this.mediaElement[0].addEventListener("progress",this.onProgress.bind(this),!1),this.mediaElement[0].addEventListener("seeking",this.onSeeking.bind(this),!1),this.mediaElement[0].addEventListener("seeked",this.onSeeked.bind(this),!1),this.mediaElement[0].addEventListener("error",this.onVideoError.bind(this),!1)},this.init=function(){this.isReady=!1,this.isCompleted=!1,this.buffered=[],this.bufferEnd=0,this.currentTime=0,this.totalTime=0,this.timeLeft=0,this.isLive=!1,this.isFullScreen=!1,this.playback=1,this.isConfig=void 0!=a.vgConfig,this.mediaElement=[{play:function(){},pause:function(){},stop:function(){},addEventListener:function(){},removeEventListener:function(){}}],d.isAvailable&&(this.isFullScreen=d.isFullScreen()),this.updateTheme(a.vgTheme),this.addBindings(),d.isAvailable&&document.addEventListener(d.onchange,this.onFullScreenChange.bind(this))},this.onUpdateTheme=function(a){this.updateTheme(a)},this.onUpdateAutoPlay=function(a){a&&!this.autoPlay&&(this.autoPlay=a,this.play(this))},this.onUpdateStartTime=function(a){if(a&&a!=this.startTime){this.mediaElement[0].currentTime=a,this.startTime=a,l=this.startTime>=0&&this.virtualClipDuration>0;var b={target:this.mediaElement[0]};this.onUpdateTime(b,!0)}},this.onUpdateVirtualClipDuration=function(a){if(a&&a!=this.virtualClipDuration){this.virtualClipDuration=a,l=this.startTime>=0&&this.virtualClipDuration>0;var b={target:this.mediaElement[0]};this.onUpdateTime(b,!0)}},this.onUpdatePlaysInline=function(a){this.playsInline=a},this.onUpdateNativeFullscreen=function(a){void 0==a&&(a=!0),this.nativeFullscreen=a},this.onUpdateCuePoints=function(a){this.cuePoints=a,this.checkCuePoints(this.currentTime)},this.onUpdateClearMediaOnNavigate=function(a){this.clearMediaOnNavigate=a},this.addBindings=function(){a.$watch("vgTheme",this.onUpdateTheme.bind(this)),a.$watch("vgAutoPlay",this.onUpdateAutoPlay.bind(this)),a.$watch("vgStartTime",this.onUpdateStartTime.bind(this)),a.$watch("vgVirtualClipDuration",this.onUpdateVirtualClipDuration.bind(this)),a.$watch("vgPlaysInline",this.onUpdatePlaysInline.bind(this)),a.$watch("vgNativeFullscreen",this.onUpdateNativeFullscreen.bind(this)),a.$watch("vgCuePoints",this.onUpdateCuePoints.bind(this)),a.$watch("vgClearMediaOnNavigate",this.onUpdateClearMediaOnNavigate.bind(this))},this.onFullScreenChange=function(){this.isFullScreen=d.isFullScreen(),a.$parent.$digest()},a.$on("$destroy",this.clearMedia.bind(this)),a.$on("$routeChangeStart",this.onRouteChange.bind(this)),this.init()}]),angular.module("com.2fdevs.videogular").directive("vgCrossorigin",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(a,b,c,d){var e;a.setCrossorigin=function(a){a?d.mediaElement.attr("crossorigin",a):d.mediaElement.removeAttr("crossorigin")},d.isConfig?a.$watch(function(){return d.config},function(){d.config&&a.setCrossorigin(d.config.crossorigin)}):a.$watch(c.vgCrossorigin,function(b,c){e&&b==c||!b?a.setCrossorigin():(e=b,a.setCrossorigin(e))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgLoop",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(a,b,c,d){var e;a.setLoop=function(a){a?d.mediaElement.attr("loop",a):d.mediaElement.removeAttr("loop")},d.isConfig?a.$watch(function(){return d.config},function(){d.config&&a.setLoop(d.config.loop)}):a.$watch(c.vgLoop,function(b,c){e&&b==c||!b?a.setLoop():(e=b,a.setLoop(e))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgMedia",["$timeout","VG_UTILS","VG_STATES",function(a,b,c){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){var c=b.vgType||"video";return b.vgTemplate||"vg-templates/vg-media-"+c},scope:{vgSrc:"=?",vgType:"=?"},link:function(d,e,f,g){var h;f.vgType=f.vgType&&"video"!==f.vgType?"audio":"video",d.onChangeSource=function(a,b){h&&a==b||!a||(h=a,g.currentState!==c.PLAY&&(g.currentState=c.STOP),g.sources=h,d.changeSource())},d.changeSource=function(){var c,d,e;if(angular.isArray(h))if(c="",g.mediaElement[0].canPlayType){for(d=0,e=h.length;e>d;d++)if(c=g.mediaElement[0].canPlayType(h[d].type),"maybe"==c||"probably"==c){g.mediaElement.attr("src",h[d].src),g.mediaElement.attr("type",h[d].type),g.changeSource(h[d]);break}}else g.mediaElement.attr("src",h[0].src),g.mediaElement.attr("type",h[0].type),g.changeSource(h[0]);else g.mediaElement.attr("src",h),g.changeSource(h);b.isMobileDevice()&&g.mediaElement[0].load(),a(function(){!g.autoPlay||!b.isCordova()&&b.isMobileDevice()||g.play()}),""==c&&g.onVideoError()},g.mediaElement=e.find(f.vgType),g.sources=d.vgSrc,g.addListeners(),g.onVideoReady(),d.$watch("vgSrc",d.onChangeSource),d.$watch(function(){return g.sources},d.onChangeSource),d.$watch(function(){return g.playsInline},function(a){a?g.mediaElement.attr("webkit-playsinline",""):g.mediaElement.removeAttr("webkit-playsinline")}),g.isConfig&&d.$watch(function(){return g.config},function(){g.config&&(d.vgSrc=g.config.sources)})}}}]),angular.module("com.2fdevs.videogular").directive("vgNativeControls",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(a,b,c,d){var e;a.setControls=function(a){a?d.mediaElement.attr("controls",a):d.mediaElement.removeAttr("controls")},d.isConfig?a.$watch(function(){return d.config},function(){d.config&&a.setControls(d.config.controls)}):a.$watch(c.vgNativeControls,function(b,c){e&&b==c||!b?a.setControls():(e=b,a.setControls(e))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgPreload",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(a,b,c,d){var e;a.setPreload=function(a){a?d.mediaElement.attr("preload",a):d.mediaElement.removeAttr("preload")},d.isConfig?a.$watch(function(){return d.config},function(){d.config&&a.setPreload(d.config.preload)}):a.$watch(c.vgPreload,function(b,c){e&&b==c||!b?a.setPreload():(e=b,a.setPreload(e))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgTracks",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(a,b,c,d){var f,g,h,e=!1;a.onLoadMetaData=function(){e=!0,a.updateTracks()},a.updateTracks=function(){var c,e,b=d.mediaElement.children();for(g=0,h=b.length;h>g;g++)b[g].remove&&b[g].remove();if(f)for(g=0,h=f.length;h>g;g++){c=document.createElement("track");for(e in f[g])c[e]=f[g][e];c.addEventListener("load",a.onLoadTrack.bind(a,c)),d.mediaElement[0].appendChild(c)}},a.onLoadTrack=function(b){b.mode=b.default?"showing":"hidden";for(var c=0,e=d.mediaElement[0].textTracks.length;e>c;c++)b.label==d.mediaElement[0].textTracks[c].label&&(d.mediaElement[0].textTracks[c].mode=b.default?"showing":"disabled");b.removeEventListener("load",a.onLoadTrack.bind(a,b))},a.setTracks=function(b){f=b,d.tracks=b,e?a.updateTracks():d.mediaElement[0].addEventListener("loadedmetadata",a.onLoadMetaData.bind(a),!1)},d.isConfig?a.$watch(function(){return d.config},function(){d.config&&a.setTracks(d.config.tracks)}):a.$watch(c.vgTracks,function(b,c){f&&b==c||a.setTracks(b)},!0)}}}}]),angular.module("com.2fdevs.videogular").directive("videogular",[function(){return{restrict:"EA",scope:{vgTheme:"=?",vgAutoPlay:"=?",vgStartTime:"=?",vgVirtualClipDuration:"=?",vgPlaysInline:"=?",vgNativeFullscreen:"=?",vgClearMediaOnNavigate:"=?",vgCuePoints:"=?",vgConfig:"@",vgCanPlay:"&",vgComplete:"&",vgUpdateVolume:"&",vgUpdatePlayback:"&",vgUpdateTime:"&",vgUpdateState:"&",vgPlayerReady:"&",vgChangeSource:"&",vgSeeking:"&",vgSeeked:"&",vgError:"&"},controller:"vgController",controllerAs:"API",link:{pre:function(a,b,c,d){d.videogularElement=angular.element(b)}}}}]),angular.module("com.2fdevs.videogular").service("vgConfigLoader",["$http","$q","$sce",function(a,b,c){this.loadConfig=function(d){var e=b.defer();return a({method:"GET",url:d}).then(function(a){var d,f,b=a.data;for(d=0,f=b.sources.length;f>d;d++)b.sources[d].src=c.trustAsResourceUrl(b.sources[d].src);e.resolve(b)},function(){e.reject()}),e.promise}}]),angular.module("com.2fdevs.videogular").service("vgFullscreen",["VG_UTILS",function(a){function f(){var a=!1;return a=b?null!=document[c.element]||b.webkitDisplayingFullscreen:null!=document[c.element]}var b,e,c=null,d={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",onchange:"fullscreenchange",onerror:"fullscreenerror"},newWebkit:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},oldWebkit:{enabled:"webkitIsFullScreen",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullScreen",exit:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},moz:{enabled:"mozFullScreen",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},ios:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitEnterFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}};for(e in d)if(d[e].enabled in document){c=d[e];break}a.isiOSDevice()&&(c=d.ios),this.isAvailable=null!=c,c&&(this.onchange=c.onchange,this.onerror=c.onerror,this.isFullScreen=f,this.exit=function(){document[c.exit]()},this.request=function(a){b=a,b[c.request]()})}]),angular.module("com.2fdevs.videogular").service("VG_UTILS",["$window",function(a){this.fixEventOffset=function(a){var c,d,e,f,g,h,b=navigator.userAgent.match(/Firefox\/(\d+)/i);return b&&Number.parseInt(b.pop())<39&&(c=a.currentTarget.currentStyle||window.getComputedStyle(a.target,null),d=parseInt(c["borderLeftWidth"],10),e=parseInt(c["borderTopWidth"],10),f=a.currentTarget.getBoundingClientRect(),g=a.clientX-d-f.left,h=a.clientY-e-f.top,a.offsetX=g,a.offsetY=h),a},this.getZIndex=function(){var b,d,e,a=1,c=document.getElementsByTagName("*");for(d=0,e=c.length;e>d;d++)b=parseInt(window.getComputedStyle(c[d])["z-index"]),b>a&&(a=b+1);return a},this.isMobileDevice=function(){return"undefined"!=typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},this.isiOSDevice=function(){return navigator.userAgent.match(/ip(hone|ad|od)/i)&&!navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i)},this.isCordova=function(){return-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")},this.supportsLocalStorage=function(){var c,b="videogular-test-key";try{return c=a.sessionStorage,c.setItem(b,"1"),c.removeItem(b),"localStorage"in a&&null!==a["localStorage"]}catch(d){return!1}}}]),angular.module("com.2fdevs.videogular.plugins.poster",[]).run(["$templateCache",function(a){a.put("vg-templates/vg-poster",'<img ng-src="{{vgUrl}}" ng-class="API.currentState" role="presentation" alt="">')}]).directive("vgPoster",[function(){return{restrict:"E",require:"^videogular",scope:{vgUrl:"=?"},templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-poster"},link:function(a,b,c,d){a.API=d,d.isConfig&&a.$watch("API.config",function(){a.API.config&&(a.vgUrl=a.API.config.plugins.poster.url)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls",[]).run(["$templateCache",function(a){a.put("vg-templates/vg-controls",'<div class="controls-container" ng-mousemove="onMouseMove()" ng-class="animationClass" ng-transclude></div>')}]).directive("vgControls",["$timeout","VG_STATES",function(a,b){return{restrict:"E",require:"^videogular",transclude:!0,templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-controls"},scope:{vgAutohide:"=?",vgAutohideTime:"=?"},link:function(c,d,e,f){var j,i=2e3;c.API=f,c.onMouseMove=function(){c.vgAutohide&&c.showControls()},c.setAutohide=function(d){d&&f.currentState==b.PLAY?j=a(c.hideControls,i):(c.animationClass="",a.cancel(j),c.showControls())},c.setAutohideTime=function(a){i=a},c.hideControls=function(){c.animationClass="hide-animation"},c.showControls=function(){c.animationClass="show-animation",a.cancel(j),c.vgAutohide&&f.currentState==b.PLAY&&(j=a(c.hideControls,i))},f.isConfig?c.$watch("API.config",function(){var a,b;c.API.config&&(a=c.API.config.plugins.controls.autohide||!1,b=c.API.config.plugins.controls.autohideTime||2e3,c.vgAutohide=a,c.vgAutohideTime=b,c.setAutohideTime(b),c.setAutohide(a))}):(void 0!=c.vgAutohide&&c.$watch("vgAutohide",c.setAutohide),void 0!=c.vgAutohideTime&&c.$watch("vgAutohideTime",c.setAutohideTime)),c.$watch(function(){return f.currentState},function(){c.vgAutohide&&c.showControls()})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-fullscreen-button",'<button class="iconButton" ng-click="onClickFullScreen()" ng-class="fullscreenIcon" aria-label="Toggle full screen" type="button"> </button>')}]).directive("vgFullscreenButton",[function(){return{restrict:"E",require:"^videogular",scope:{},templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-fullscreen-button"},link:function(a,b,c,d){a.onChangeFullScreen=function(b){a.fullscreenIcon={enter:!b,exit:b}},a.onClickFullScreen=function(){d.toggleFullScreen()},a.fullscreenIcon={enter:!0},a.$watch(function(){return d.isFullScreen},function(b,c){b!=c&&a.onChangeFullScreen(b)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-play-pause-button",'<button class="iconButton" ng-click="onClickPlayPause()" ng-class="playPauseIcon" aria-label="Play/Pause" type="button"></button>')}]).directive("vgPlayPauseButton",["VG_STATES",function(a){return{restrict:"E",require:"^videogular",scope:{},templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-play-pause-button"},link:function(b,c,d,e){b.setState=function(c){switch(c){case a.PLAY:b.playPauseIcon={pause:!0};break;case a.PAUSE:b.playPauseIcon={play:!0};break;case a.STOP:b.playPauseIcon={play:!0}}},b.onClickPlayPause=function(){e.playPause()},b.playPauseIcon={play:!0},b.$watch(function(){return e.currentState},function(a){b.setState(a)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-playback-button",'<button class="playbackValue iconButton" ng-click="onClickPlayback()">{{playback}}x</button>')}]).directive("vgPlaybackButton",[function(){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-playback-button"},scope:{vgSpeeds:"=?"},link:function(a,b,c,d){a.playback="1",a.setPlayback=function(b){a.playback=b,d.setPlayback(parseFloat(b))},a.onClickPlayback=function(){var b=a.vgSpeeds||["0.5","1","1.5","2"],c=b.indexOf(a.playback.toString())+1;a.playback=c>=b.length?b[0]:b[c],a.setPlayback(a.playback)},a.$watch(function(){return d.playback},function(b,c){b!=c&&a.setPlayback(b)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").directive("vgScrubBarBuffer",[function(){return{restrict:"E",require:"^videogular",link:function(a,b,c,d){var e=0;a.onUpdateBuffer=function(a){"number"==typeof a&&d.totalTime?(e=100*(a/d.totalTime),b.css("width",e+"%")):b.css("width",0)},a.$watch(function(){return d.bufferEnd},function(b){a.onUpdateBuffer(b)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-scrub-bar-cue-points",'<div class="cue-point-timeline"><div ng-repeat="cuePoint in vgCuePoints" class="cue-point" ng-style="cuePoint.$$style"></div></div>')}]).directive("vgScrubBarCuePoints",[function(){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-scrub-bar-cue-points"},scope:{vgCuePoints:"="},link:function(a,b,c,d){a.onPlayerReady=function(){a.updateCuePoints(a.vgCuePoints)},a.updateCuePoints=function(a){var c,e,f,g,h,i,j;if(a)for(c=parseInt(b[0].clientWidth),e=0,f=a.length;f>e;e++)g=a[e].timeLapse.end>=0?a[e].timeLapse.end:a[e].timeLapse.start+1,h=1e3*(g-a[e].timeLapse.start),i=100*a[e].timeLapse.start/Math.round(d.totalTime/1e3)+"%",j=0,"number"==typeof h&&d.totalTime&&(j=100*h/d.totalTime+"%"),a[e].$$style={width:j,left:i}},a.$watch("vgCuePoints",a.updateCuePoints),a.$watch(function(){return d.totalTime},function(b){b>0&&a.onPlayerReady()})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").directive("vgScrubBarCurrentTime",[function(){return{restrict:"E",require:"^videogular",link:function(a,b,c,d){var e=0;a.onUpdateTime=function(a){"number"==typeof a&&d.totalTime?(e=100*(a/d.totalTime),b.css("width",e+"%")):b.css("width",0)},a.$watch(function(){return d.currentTime},function(b){a.onUpdateTime(b)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-scrub-bar-thumbnails",'<div class="vg-thumbnails" ng-show="thumbnails" ng-style="thumbnailContainer"><div class="image-thumbnail" ng-style="thumbnails"></div></div><div class="background"></div>')}]).directive("vgScrubBarThumbnails",["VG_UTILS",function(a){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-scrub-bar-thumbnails"},scope:{vgThumbnails:"="},link:function(b,c,d,e){var j,f=0,g=0,h=c[0].querySelector(".background"),i="string"==typeof b.vgThumbnails;b.thumbnails=!1,b.thumbnailContainer={},b.getOffset=function(a){for(var b=a.target,c=0;b&&!isNaN(b.offsetLeft);)c+=b.offsetLeft-b.scrollLeft,b=b.offsetParent;return a.clientX-c},b.onLoadThumbnails=function(a){f=a.currentTarget.naturalWidth,g=f/100},b.onLoadThumbnail=function(a){g=a.currentTarget.naturalWidth},b.updateThumbnails=function(a){var j,k,l,m,n,o,c=Math.round(100*a/(e.totalTime/1e3)),d=h.scrollWidth*c/100-g/2;if(i)j=Math.round(f*c/100),b.thumbnailContainer={width:g+"px",left:d+"px"},b.thumbnails={"background-image":'url("'+b.vgThumbnails+'")',"background-position":-j+"px 0px"};else if(k=e.totalTime/h.scrollWidth/1e3,l={start:Math.floor(a-k/2),end:Math.ceil(a)},l.start<0&&(l.start=0),l.end>e.totalTime&&(l.end=e.totalTime),b.thumbnailContainer={left:d+"px"},b.thumbnails={"background-image":"none"},b.vgThumbnails)for(m=0,n=b.vgThumbnails.length;n>m;m++)if(o=b.vgThumbnails[m],o.timeLapse.end>=0){if(l.start>=o.timeLapse.start&&(l.end<=o.timeLapse.end||l.end<=o.timeLapse.start)){b.thumbnails={"background-image":'url("'+o.params.thumbnail+'")'};break}}else if(o.timeLapse.start>=l.start&&o.timeLapse.start<=l.end){b.thumbnails={"background-image":'url("'+o.params.thumbnail+'")'};break}},b.onMouseMove=function(a){var c=Math.round(a.offsetX*e.mediaElement[0].duration/h.scrollWidth);b.updateThumbnails(c),b.$digest()},b.onTouchMove=function(a){var c=a.touches,d=b.getOffset(c[0]),f=Math.round(d*e.mediaElement[0].duration/h.scrollWidth);b.updateThumbnails(f),b.$digest()},b.onMouseLeave=function(){b.thumbnails=!1,b.$digest()},b.onTouchLeave=function(){b.thumbnails=!1,b.$digest()},b.onDestroy=function(){c.unbind("touchmove",b.onTouchMove),c.unbind("touchleave",b.onTouchLeave),c.unbind("touchend",b.onTouchLeave),c.unbind("mousemove",b.onMouseMove),c.unbind("mouseleave",b.onMouseLeave)},i?(j=new Image,j.onload=b.onLoadThumbnails.bind(b),j.src=b.vgThumbnails):(j=new Image,j.onload=b.onLoadThumbnail.bind(b),j.src=b.vgThumbnails[0].params.thumbnail),a.isMobileDevice()?(c.bind("touchmove",b.onTouchMove),c.bind("touchleave",b.onTouchLeave),c.bind("touchend",b.onTouchLeave)):(c.bind("mousemove",b.onMouseMove),c.bind("mouseleave",b.onMouseLeave)),b.$on("destroy",b.onDestroy.bind(b))}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-scrub-bar",'<div role="slider" aria-valuemax="{{ariaTime(API.totalTime)}}" aria-valuenow="{{ariaTime(API.currentTime)}}" aria-valuemin="0" aria-label="Time scrub bar" tabindex="0" ng-keydown="onScrubBarKeyDown($event)"></div><div class="container" ng-transclude></div>')}]).directive("vgScrubBar",["VG_STATES","VG_UTILS",function(a,b){return{restrict:"E",require:"^videogular",transclude:!0,templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-scrub-bar"},scope:{vgThumbnails:"="},link:function(c,d,e,f){var p,g=!1,h=!1,i=!1,j=37,k=39,l=5,m=0,n=0,o=d[0].querySelector("div[role=slider]");c.thumbnails=!1,c.thumbnailContainer={},c.API=f,c.onLoadThumbnails=function(a){m=a.path[0].naturalWidth,n=m/100},c.ariaTime=function(a){return Math.round(a/1e3)},c.getOffset=function(a){for(var b=a.target,c=0;b&&!isNaN(b.offsetLeft);)c+=b.offsetLeft-b.scrollLeft,b=b.offsetParent;return a.clientX-c},c.onScrubBarTouchStart=function(a){var b=a.originalEvent||a,d=b.touches,e=c.getOffset(d[0]);g=!0,h&&(i=!0),f.pause(),f.seekTime(e*f.mediaElement[0].duration/o.scrollWidth),c.$digest()},c.onScrubBarTouchEnd=function(a){a.originalEvent||a,i&&(i=!1,f.play()),g=!1,c.$digest()},c.onScrubBarTouchMove=function(a){var h,i,b=a.originalEvent||a,d=b.touches,e=c.getOffset(d[0]);c.vgThumbnails&&c.vgThumbnails.length&&(h=Math.round(e*f.mediaElement[0].duration/o.scrollWidth),i=Math.round(100*h/(f.totalTime/1e3)),c.updateThumbnails(i)),g&&f.seekTime(e*f.mediaElement[0].duration/o.scrollWidth),c.$digest()},c.onScrubBarTouchLeave=function(){g=!1,c.thumbnails=!1,c.$digest()},c.onScrubBarMouseDown=function(a){a=b.fixEventOffset(a),g=!0,h&&(i=!0),f.pause(),f.seekTime(a.offsetX*f.mediaElement[0].duration/o.scrollWidth),c.$digest()},c.onScrubBarMouseUp=function(){i&&(i=!1,f.play()),g=!1,c.$digest()},c.onScrubBarMouseMove=function(a){var d,e;c.vgThumbnails&&c.vgThumbnails.length&&(d=Math.round(a.offsetX*f.mediaElement[0].duration/o.scrollWidth),e=Math.round(100*d/(f.totalTime/1e3)),c.updateThumbnails(e)),g&&(a=b.fixEventOffset(a),f.seekTime(a.offsetX*f.mediaElement[0].duration/o.scrollWidth)),c.$digest()},c.onScrubBarMouseLeave=function(){g=!1,c.thumbnails=!1,c.$digest()},c.onScrubBarKeyDown=function(a){var b=100*(f.currentTime/f.totalTime);a.which===j||a.keyCode===j?(f.seekTime(b-l,!0),a.preventDefault()):(a.which===k||a.keyCode===k)&&(f.seekTime(b+l,!0),a.preventDefault())},c.updateThumbnails=function(a){var b=Math.round(m*a/100),d=o.scrollWidth*a/100-n/2;c.thumbnailContainer={width:n+"px",left:d+"px"},c.thumbnails={"background-image":'url("'+c.vgThumbnails+'")',"background-position":-b+"px 0px"}},c.setState=function(b){if(!g)switch(b){case a.PLAY:h=!0;
    break;case a.PAUSE:h=!1;break;case a.STOP:h=!1}},c.onDestroy=function(){d.unbind("touchstart",c.onScrubBarTouchStart),d.unbind("touchend",c.onScrubBarTouchEnd),d.unbind("touchmove",c.onScrubBarTouchMove),d.unbind("touchleave",c.onScrubBarTouchLeave),d.unbind("mousedown",c.onScrubBarMouseDown),d.unbind("mouseup",c.onScrubBarMouseUp),d.unbind("mousemove",c.onScrubBarMouseMove),d.unbind("mouseleave",c.onScrubBarMouseLeave)},c.$watch(function(){return f.currentState},function(a,b){a!=b&&c.setState(a)}),c.vgThumbnails&&(p=new Image,p.onload=c.onLoadThumbnails.bind(c),p.src=c.vgThumbnails),b.isMobileDevice()?(d.bind("touchstart",c.onScrubBarTouchStart),d.bind("touchend",c.onScrubBarTouchEnd),d.bind("touchmove",c.onScrubBarTouchMove),d.bind("touchleave",c.onScrubBarTouchLeave)):(d.bind("mousedown",c.onScrubBarMouseDown),d.bind("mouseup",c.onScrubBarMouseUp),d.bind("mousemove",c.onScrubBarMouseMove),d.bind("mouseleave",c.onScrubBarMouseLeave)),c.$on("destroy",c.onDestroy.bind(c))}}}]),angular.module("com.2fdevs.videogular.plugins.controls").directive("vgTimeDisplay",[function(){return{require:"^videogular",restrict:"E",link:function(a,b,c,d){a.currentTime=d.currentTime,a.timeLeft=d.timeLeft,a.totalTime=d.totalTime,a.isLive=d.isLive,a.$watch(function(){return d.currentTime},function(b){a.currentTime=b}),a.$watch(function(){return d.timeLeft},function(b){a.timeLeft=b}),a.$watch(function(){return d.totalTime},function(b){a.totalTime=b}),a.$watch(function(){return d.isLive},function(b){a.isLive=b})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-mute-button",'<button type="button" class="iconButton" ng-class="muteIcon" ng-click="onClickMute()" ng-focus="onMuteButtonFocus()" ng-blur="onMuteButtonLoseFocus()" ng-mouseleave="onMuteButtonLeave()" ng-keydown="onMuteButtonKeyDown($event)" aria-label="Mute"></button>')}]).directive("vgMuteButton",[function(){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-mute-button"},link:function(a,b,c,d){var e=!1,f=38,g=40,h=.05;a.onClickMute=function(){e?a.currentVolume=a.defaultVolume:(a.currentVolume=0,a.muteIcon={mute:!0}),e=!e,d.setVolume(a.currentVolume)},a.onMuteButtonFocus=function(){a.volumeVisibility="visible"},a.onMuteButtonLoseFocus=function(){a.volumeVisibility="hidden"},a.onMuteButtonLeave=function(){document.activeElement.blur()},a.onMuteButtonKeyDown=function(a){var c,b=null!=d.volume?d.volume:1;a.which===f||a.keyCode===f?(c=b+h,c>1&&(c=1),d.setVolume(c),a.preventDefault()):(a.which===g||a.keyCode===g)&&(c=b-h,0>c&&(c=0),d.setVolume(c),a.preventDefault())},a.onSetVolume=function(b){a.currentVolume=b,e=0===a.currentVolume,e?b>0&&(a.defaultVolume=b):a.defaultVolume=b;var c=Math.round(100*b);0==c?a.muteIcon={mute:!0}:c>0&&25>c?a.muteIcon={level0:!0}:c>=25&&50>c?a.muteIcon={level1:!0}:c>=50&&75>c?a.muteIcon={level2:!0}:c>=75&&(a.muteIcon={level3:!0})},a.defaultVolume=1,a.currentVolume=a.defaultVolume,a.muteIcon={level3:!0},a.onSetVolume(d.volume),a.$watch(function(){return d.volume},function(b,c){b!=c&&a.onSetVolume(b)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").run(["$templateCache",function(a){a.put("vg-templates/vg-volume-bar",'<div class="verticalVolumeBar">              <div class="volumeBackground" ng-click="onClickVolume($event)" ng-mousedown="onMouseDownVolume()" ng-mouseup="onMouseUpVolume()" ng-mousemove="onMouseMoveVolume($event)" ng-mouseleave="onMouseLeaveVolume()">                <div class="volumeValue"></div>                <div class="volumeClickArea"></div>              </div>            </div>')}]).directive("vgVolumeBar",["VG_UTILS",function(a){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-volume-bar"},link:function(b,c,d,e){var f=!1,g=angular.element(c[0].getElementsByClassName("volumeBackground")),h=angular.element(c[0].getElementsByClassName("volumeValue"));b.onClickVolume=function(b){var c,d,f;b=a.fixEventOffset(b),c=parseInt(g.prop("offsetHeight")),d=100*b.offsetY/c,f=1-d/100,e.setVolume(f)},b.onMouseDownVolume=function(){f=!0},b.onMouseUpVolume=function(){f=!1},b.onMouseLeaveVolume=function(){f=!1},b.onMouseMoveVolume=function(b){var c,d,h;f&&(b=a.fixEventOffset(b),c=parseInt(g.prop("offsetHeight")),d=100*b.offsetY/c,h=1-d/100,e.setVolume(h))},b.updateVolumeView=function(a){a=100*a,h.css("height",a+"%"),h.css("top",100-a+"%")},b.onChangeVisibility=function(a){c.css("visibility",a)},c.css("visibility",b.volumeVisibility),b.$watch("volumeVisibility",b.onChangeVisibility),b.updateVolumeView(e.volume),b.$watch(function(){return e.volume},function(a,c){a!=c&&b.updateVolumeView(a)})}}}]),angular.module("com.2fdevs.videogular.plugins.controls").directive("vgVolume",["VG_UTILS",function(a){return{restrict:"E",link:function(b,c){b.onMouseOverVolume=function(){b.$evalAsync(function(){b.volumeVisibility="visible"})},b.onMouseLeaveVolume=function(){b.$evalAsync(function(){b.volumeVisibility="hidden"})},b.onDestroy=function(){c.unbind("mouseover",b.onScrubBarTouchStart),c.unbind("mouseleave",b.onScrubBarTouchEnd)},a.isMobileDevice()?c.css("display","none"):(b.volumeVisibility="hidden",c.bind("mouseover",b.onMouseOverVolume),c.bind("mouseleave",b.onMouseLeaveVolume)),b.$on("destroy",b.onDestroy.bind(b))}}}]),angular.module("com.2fdevs.videogular.plugins.overlayplay",[]).run(["$templateCache",function(a){a.put("vg-templates/vg-overlay-play",'<div class="overlayPlayContainer" ng-click="onClickOverlayPlay()">              <div class="iconButton" ng-class="overlayPlayIcon"></div>            </div>')}]).directive("vgOverlayPlay",["VG_STATES",function(a){return{restrict:"E",require:"^videogular",scope:{},templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-overlay-play"},link:function(b,c,d,e){b.onChangeState=function(c){switch(c){case a.PLAY:b.overlayPlayIcon={};break;case a.PAUSE:b.overlayPlayIcon={play:!0};break;case a.STOP:b.overlayPlayIcon={play:!0}}},b.onClickOverlayPlay=function(){e.playPause()},b.overlayPlayIcon={play:!0},b.$watch(function(){return e.currentState},function(a){b.onChangeState(a)})}}}]),angular.module("com.2fdevs.videogular.plugins.buffering",[]).run(["$templateCache",function(a){a.put("vg-templates/vg-buffering",'<div class="bufferingContainer">              <div ng-class="spinnerClass" class="loadingSpinner"></div>            </div>')}]).directive("vgBuffering",["VG_STATES","VG_UTILS",function(a,b){return{restrict:"E",require:"^videogular",templateUrl:function(a,b){return b.vgTemplate||"vg-templates/vg-buffering"},link:function(c,d,e,f){c.showSpinner=function(){c.spinnerClass={stop:f.isBuffering},d.css("display","block")},c.hideSpinner=function(){c.spinnerClass={stop:f.isBuffering},d.css("display","none")},c.setState=function(a){a?c.showSpinner():c.hideSpinner()},c.onStateChange=function(b){b==a.STOP&&c.hideSpinner()},c.onPlayerReady=function(a){a&&c.hideSpinner()},c.showSpinner(),b.isMobileDevice()?c.hideSpinner():c.$watch(function(){return f.isReady},function(a,b){(1==f.isReady||a!=b)&&c.onPlayerReady(a)}),c.$watch(function(){return f.currentState},function(a,b){a!=b&&c.onStateChange(a)}),c.$watch(function(){return f.isBuffering},function(a,b){a!=b&&c.setState(a)})}}}]);
$.smVersion="0.6.2",function(t){"use strict";t.smConfig=t.extend({autoInit:!1,showPageLoadingIndicator:!0,router:!1,swipePanel:"left",swipePanelOnlyClose:!0},t.config)}($),function(t){"use strict";t.compareVersion=function(t,e){var i=t.split("."),s=e.split(".");if(t===e)return 0;for(var o=0;o<i.length;o++){var n=parseInt(i[o]);if(!s[o])return 1;var a=parseInt(s[o]);if(n<a)return-1;if(n>a)return 1}return-1},t.getCurrentPage=function(){return t(".page-current")[0]||t(".page")[0]||document.body}}($),function(t){"use strict";function e(t,e){var i,s=t,o=this;function n(t){if(t.target===this)for(e.call(this,t),i=0;i<s.length;i++)o.off(s[i],n)}if(e)for(i=0;i<s.length;i++)o.on(s[i],n)}["width","height"].forEach((function(e){var i=e.replace(/./,(function(t){return t[0].toUpperCase()}));t.fn["outer"+i]=function(t){var i=this;if(i){var s=i[e]();return{width:["left","right"],height:["top","bottom"]}[e].forEach((function(e){t&&(s+=parseInt(i.css("margin-"+e),10))})),s}return null}})),t.support={touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)},t.touchEvents={start:t.support.touch?"touchstart":"mousedown",move:t.support.touch?"touchmove":"mousemove",end:t.support.touch?"touchend":"mouseup"},t.getTranslate=function(t,e){var i,s,o,n;return void 0===e&&(e="x"),o=window.getComputedStyle(t,null),window.WebKitCSSMatrix?n=new WebKitCSSMatrix("none"===o.webkitTransform?"":o.webkitTransform):i=(n=o.MozTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===e&&(s=window.WebKitCSSMatrix?n.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===e&&(s=window.WebKitCSSMatrix?n.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0},t.requestAnimationFrame=function(t){return requestAnimationFrame?requestAnimationFrame(t):webkitRequestAnimationFrame?webkitRequestAnimationFrame(t):mozRequestAnimationFrame?mozRequestAnimationFrame(t):setTimeout(t,1e3/60)},t.cancelAnimationFrame=function(t){return cancelAnimationFrame?cancelAnimationFrame(t):webkitCancelAnimationFrame?webkitCancelAnimationFrame(t):mozCancelAnimationFrame?mozCancelAnimationFrame(t):clearTimeout(t)},t.fn.dataset=function(){var e={},i=this[0].dataset;for(var s in i){var o=e[s]=i[s];"false"===o?e[s]=!1:"true"===o?e[s]=!0:parseFloat(o)===1*o&&(e[s]=1*o)}return t.extend({},e,this[0].__eleData)},t.fn.data=function(e,i){var s=t(this).dataset();if(!e)return s;if(void 0===i){var o=s[e],n=this[0].__eleData;return n&&e in n?n[e]:o}for(var a=0;a<this.length;a++){var r=this[a];e in s&&delete r.dataset[e],r.__eleData||(r.__eleData={}),r.__eleData[e]=i}return this},t.fn.animationEnd=function(t){return e.call(this,["webkitAnimationEnd","animationend"],t),this},t.fn.transitionEnd=function(t){return e.call(this,["webkitTransitionEnd","transitionend"],t),this},t.fn.transition=function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e++){var i=this[e].style;i.webkitTransitionDuration=i.MozTransitionDuration=i.transitionDuration=t}return this},t.fn.transform=function(t){for(var e=0;e<this.length;e++){var i=this[e].style;i.webkitTransform=i.MozTransform=i.transform=t}return this},t.fn.prevAll=function(e){var i=[],s=this[0];if(!s)return t([]);for(;s.previousElementSibling;){var o=s.previousElementSibling;e?t(o).is(e)&&i.push(o):i.push(o),s=o}return t(i)},t.fn.nextAll=function(e){var i=[],s=this[0];if(!s)return t([]);for(;s.nextElementSibling;){var o=s.nextElementSibling;e?t(o).is(e)&&i.push(o):i.push(o),s=o}return t(i)},t.fn.show=function(){var t={};return this.each((function(){var e,i,s;"none"===this.style.display&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display"),this.style.display=(e=this.nodeName,t[e]||(i=document.createElement(e),document.body.appendChild(i),s=getComputedStyle(i,"").getPropertyValue("display"),i.parentNode.removeChild(i),"none"===s&&(s="block"),t[e]=s),t[e])}))}}($),function(t){"use strict";var e={},i=navigator.userAgent,s=i.match(/(Android);?[\s\/]+([\d.]+)?/),o=i.match(/(iPad).*OS\s([\d_]+)/),n=i.match(/(iPod)(.*OS\s([\d_]+))?/),a=!o&&i.match(/(iPhone\sOS)\s([\d_]+)/);if(e.ios=e.android=e.iphone=e.ipad=e.androidChrome=!1,s&&(e.os="android",e.osVersion=s[2],e.android=!0,e.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(o||a||n)&&(e.os="ios",e.ios=!0),a&&!n&&(e.osVersion=a[2].replace(/_/g,"."),e.iphone=!0),o&&(e.osVersion=o[2].replace(/_/g,"."),e.ipad=!0),n&&(e.osVersion=n[3]?n[3].replace(/_/g,"."):null,e.iphone=!0),e.ios&&e.osVersion&&i.indexOf("Version/")>=0&&"10"===e.osVersion.split(".")[0]&&(e.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),e.webView=(a||o||n)&&i.match(/.*AppleWebKit(?!.*Safari)/i),e.os&&"ios"===e.os){var r=e.osVersion.split(".");e.minimalUi=!e.webView&&(n||a)&&(1*r[0]==7?1*r[1]>=1:1*r[0]>7)&&t('meta[name="viewport"]').length>0&&t('meta[name="viewport"]').attr("content").indexOf("minimal-ui")>=0}var l=t(window).width(),h=t(window).height();e.statusBar=!1,e.webView&&l*h==screen.width*screen.height?e.statusBar=!0:e.statusBar=!1;var c=[];if(e.pixelRatio=window.devicePixelRatio||1,c.push("pixel-ratio-"+Math.floor(e.pixelRatio)),e.pixelRatio>=2&&c.push("retina"),e.os&&(c.push(e.os,e.os+"-"+e.osVersion.split(".")[0],e.os+"-"+e.osVersion.replace(/\./g,"-")),"ios"===e.os))for(var p=parseInt(e.osVersion.split(".")[0],10)-1;p>=6;p--)c.push("ios-gt-"+p);e.statusBar?c.push("with-statusbar-overlay"):t("html").removeClass("with-statusbar-overlay"),c.length>0&&t("html").addClass(c.join(" ")),e.isWeixin=/MicroMessenger/i.test(i),t.device=e}($),function(){"use strict";
/**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */function t(e,s){var o;if(s=s||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=s.touchBoundary||10,this.layer=e,this.tapDelay=s.tapDelay||200,this.tapTimeout=s.tapTimeout||700,!t.notNeeded(e)){for(var n=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,r=0,l=n.length;r<l;r++)a[n[r]]=h(a[n[r]],a);i&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,i,s){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,i.hijacked||i,s):o.call(e,t,i,s)},e.addEventListener=function(t,i,s){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),s):o.call(e,t,i,s)}),"function"==typeof e.onclick&&(o=e.onclick,e.addEventListener("click",(function(t){o(t)}),!1),e.onclick=null)}function h(t,e){return function(){return t.apply(e,arguments)}}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0&&!e,s=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,o=s&&/OS 4_\d(_\d)?/.test(navigator.userAgent),n=s&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0,r=!1;t.prototype.needsClick=function(t){for(var e=t;e&&"BODY"!==e.tagName.toUpperCase();){if("LABEL"===e.tagName.toUpperCase()&&(r=!0,/\bneedsclick\b/.test(e.className)))return!0;e=e.parentNode}switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(s&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var i,s;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),s=e.changedTouches[0],(i=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,s.screenX,s.screenY,s.clientX,s.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},t.prototype.determineEventType=function(t){return i&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;s&&t.setSelectionRange&&-1===["date","time","month","number","email"].indexOf(t.type)?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,i;if(!(e=t.fastClickScrollParent)||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,i,n;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],s){if((n=window.getSelection()).rangeCount&&!n.isCollapsed)return!0;if(!o){if(i.identifier&&i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i},t.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,r,l,h,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(-1!==["date","time","month"].indexOf(t.target.type))return!1;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,n&&(h=t.changedTouches[0],(c=document.elementFromPoint(h.pageX-window.pageXOffset,h.pageY-window.pageYOffset)||c).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(r=c.tagName.toLowerCase())){if(e=this.findControl(c)){if(this.focus(c),i)return!1;c=e}}else if(this.needsFocus(c))return t.timeStamp-a>100||s&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),s&&"select"===r||(this.targetElement=null,t.preventDefault()),!1);return!(!s||o||!(l=c.fastClickScrollParent)||l.fastClickLastScrollTop===l.scrollTop)||(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),r||t.preventDefault(),!1))))},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;i&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,s,o;if(void 0===window.ontouchstart)return!0;if(s=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(s>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},t.attach=function(e,i){return new t(e,i)},window.FastClick=t}(),function(t){"use strict";var e=document.createElement("div");t.modalStack=[],t.modalStackClearQueue=function(){t.modalStack.length&&t.modalStack.shift()()},t.modal=function(s){var o,n="";if((s=s||{}).buttons&&s.buttons.length>0)for(var a=0;a<s.buttons.length;a++)n+='<span class="modal-button'+(s.buttons[a].bold?" modal-button-bold":"")+'">'+s.buttons[a].text+"</span>";var r=s.extraClass||"",l=s.title?'<div class="modal-title">'+s.title+"</div>":"",h=s.text?'<div class="modal-text">'+s.text+"</div>":"",c=s.afterText?s.afterText:"";o='<div class="modal '+r+" "+(s.buttons&&0!==s.buttons.length?"":"modal-no-buttons")+'"><div class="modal-inner">'+(l+h+c)+'</div><div class="modal-buttons '+(s.verticalButtons?"modal-buttons-vertical":"")+'">'+n+"</div></div>",e.innerHTML=o;var p=t(e).children();return t(i.modalContainer).append(p[0]),p.find(".modal-button").each((function(e,i){t(i).on("click",(function(i){!1!==s.buttons[e].close&&t.closeModal(p),s.buttons[e].onClick&&s.buttons[e].onClick(p,i),s.onClick&&s.onClick(p,e)}))})),t.openModal(p),p[0]},t.alert=function(e,s,o){return"function"==typeof s&&(o=arguments[1],s=void 0),t.modal({text:e||"",title:void 0===s?i.modalTitle:s,buttons:[{text:i.modalButtonOk,bold:!0,onClick:o}]})},t.confirm=function(e,s,o,n){return"function"==typeof s&&(n=arguments[2],o=arguments[1],s=void 0),t.modal({text:e||"",title:void 0===s?i.modalTitle:s,buttons:[{text:i.modalButtonCancel,onClick:n},{text:i.modalButtonOk,bold:!0,onClick:o}]})},t.prompt=function(e,s,o,n){return"function"==typeof s&&(n=arguments[2],o=arguments[1],s=void 0),t.modal({text:e||"",title:void 0===s?i.modalTitle:s,afterText:'<input type="text" class="modal-text-input">',buttons:[{text:i.modalButtonCancel},{text:i.modalButtonOk,bold:!0}],onClick:function(e,i){0===i&&n&&n(t(e).find(".modal-text-input").val()),1===i&&o&&o(t(e).find(".modal-text-input").val())}})},t.modalLogin=function(e,s,o,n){return"function"==typeof s&&(n=arguments[2],o=arguments[1],s=void 0),t.modal({text:e||"",title:void 0===s?i.modalTitle:s,afterText:'<input type="text" name="modal-username" placeholder="'+i.modalUsernamePlaceholder+'" class="modal-text-input modal-text-input-double"><input type="password" name="modal-password" placeholder="'+i.modalPasswordPlaceholder+'" class="modal-text-input modal-text-input-double">',buttons:[{text:i.modalButtonCancel},{text:i.modalButtonOk,bold:!0}],onClick:function(e,i){var s=t(e).find('.modal-text-input[name="modal-username"]').val(),a=t(e).find('.modal-text-input[name="modal-password"]').val();0===i&&n&&n(s,a),1===i&&o&&o(s,a)}})},t.modalPassword=function(e,s,o,n){return"function"==typeof s&&(n=arguments[2],o=arguments[1],s=void 0),t.modal({text:e||"",title:void 0===s?i.modalTitle:s,afterText:'<input type="password" name="modal-password" placeholder="'+i.modalPasswordPlaceholder+'" class="modal-text-input">',buttons:[{text:i.modalButtonCancel},{text:i.modalButtonOk,bold:!0}],onClick:function(e,i){var s=t(e).find('.modal-text-input[name="modal-password"]').val();0===i&&n&&n(s),1===i&&o&&o(s)}})},t.showPreloader=function(e){return t.hidePreloader(),t.showPreloader.preloaderModal=t.modal({title:e||i.modalPreloaderTitle,text:'<div class="preloader"></div>'}),t.showPreloader.preloaderModal},t.hidePreloader=function(){t.showPreloader.preloaderModal&&t.closeModal(t.showPreloader.preloaderModal)},t.showIndicator=function(){t(".preloader-indicator-modal")[0]||t(i.modalContainer).append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>')},t.hideIndicator=function(){t(".preloader-indicator-overlay, .preloader-indicator-modal").remove()},t.actions=function(s){var o,n;(s=s||[]).length>0&&!t.isArray(s[0])&&(s=[s]);for(var a="",r=0;r<s.length;r++)for(var l=0;l<s[r].length;l++){0===l&&(a+='<div class="actions-modal-group">');var h=s[r][l],c=h.label?"actions-modal-label":"actions-modal-button";h.bold&&(c+=" actions-modal-button-bold"),h.color&&(c+=" color-"+h.color),h.bg&&(c+=" bg-"+h.bg),h.disabled&&(c+=" disabled"),a+='<span class="'+c+'">'+h.text+"</span>",l===s[r].length-1&&(a+="</div>")}return n='<div class="actions-modal">'+a+"</div>",e.innerHTML=n,o=t(e).children(),t(i.modalContainer).append(o[0]),".actions-modal-group",".actions-modal-button",o.find(".actions-modal-group").each((function(e,i){var n=e;t(i).children().each((function(e,i){var a,r=e,l=s[n][r];t(i).is(".actions-modal-button")&&(a=t(i)),a&&a.on("click",(function(e){!1!==l.close&&t.closeModal(o),l.onClick&&l.onClick(o,e)}))}))})),t.openModal(o),o[0]},t.popup=function(e,s){if(void 0===s&&(s=!0),"string"==typeof e&&e.indexOf("<")>=0){var o=document.createElement("div");if(o.innerHTML=e.trim(),!(o.childNodes.length>0))return!1;e=o.childNodes[0],s&&e.classList.add("remove-on-close"),t(i.modalContainer).append(e)}return 0!==(e=t(e)).length&&(e.show(),e.find(".content").scroller("refresh"),e.find("."+i.viewClass).length>0&&t.sizeNavbars(e.find("."+i.viewClass)[0]),t.openModal(e),e[0])},t.pickerModal=function(e,s){if(void 0===s&&(s=!0),"string"==typeof e&&e.indexOf("<")>=0){if(!((e=t(e)).length>0))return!1;s&&e.addClass("remove-on-close"),t(i.modalContainer).append(e[0])}return 0!==(e=t(e)).length&&(e.show(),t.openModal(e),e[0])},t.loginScreen=function(e){return e||(e=".login-screen"),0!==(e=t(e)).length&&(e.show(),e.find("."+i.viewClass).length>0&&t.sizeNavbars(e.find("."+i.viewClass)[0]),t.openModal(e),e[0])},t.toast=function(e,i,s){var o=t('<div class="modal toast '+(s||"")+'">'+e+"</div>").appendTo(document.body);t.openModal(o,(function(){setTimeout((function(){t.closeModal(o)}),i||2e3)}))},t.openModal=function(e,s){var o=(e=t(e)).hasClass("modal"),n=!e.hasClass("toast");if(!(t(".modal.modal-in:not(.modal-out)").length&&i.modalStack&&o&&n)){var a,r=e.hasClass("popup"),l=e.hasClass("login-screen"),h=e.hasClass("picker-modal"),c=e.hasClass("toast");o&&(e.show(),e.css({marginTop:-Math.round(e.outerHeight()/2)+"px"})),c&&e.css({marginLeft:-Math.round(e.outerWidth()/2/1.185)+"px"}),l||h||c||(0!==t(".modal-overlay").length||r||t(i.modalContainer).append('<div class="modal-overlay"></div>'),0===t(".popup-overlay").length&&r&&t(i.modalContainer).append('<div class="popup-overlay"></div>'),a=t(r?".popup-overlay":".modal-overlay"));e[0].clientLeft;return e.trigger("open"),h&&t(i.modalContainer).addClass("with-picker-modal"),l||h||c||a.addClass("modal-overlay-visible"),e.removeClass("modal-out").addClass("modal-in").transitionEnd((function(t){e.hasClass("modal-out")?e.trigger("closed"):e.trigger("opened")})),"function"==typeof s&&s.call(this),!0}t.modalStack.push((function(){t.openModal(e,s)}))},t.closeModal=function(e,s){if(void 0===(e=t(e||".modal-in"))||0!==e.length){var o=e.hasClass("modal"),n=e.hasClass("popup"),a=e.hasClass("toast"),r=e.hasClass("login-screen"),l=e.hasClass("picker-modal"),h=e.hasClass("remove-on-close"),c=t(n?".popup-overlay":".modal-overlay");return n?e.length===t(".popup.modal-in").length&&c.removeClass("modal-overlay-visible"):l||a||c.removeClass("modal-overlay-visible"),e.trigger("close",s),l&&(t(i.modalContainer).removeClass("with-picker-modal"),t(i.modalContainer).addClass("picker-modal-closing")),e.removeClass("modal-in").addClass("modal-out").transitionEnd((function(s){e.hasClass("modal-out")?e.trigger("closed"):e.trigger("opened"),l&&t(i.modalContainer).removeClass("picker-modal-closing"),n||r||l?(e.removeClass("modal-out").hide(),h&&e.length>0&&e.remove()):e.remove()})),o&&i.modalStack&&t.modalStackClearQueue(),!0}},t(document).on("click"," .modal-overlay, .popup-overlay, .close-popup, .open-popup, .close-picker",(function(e){var s,o=t(this),n=(o.attr("href"),o.dataset());o.hasClass("open-popup")&&(s=n.popup?n.popup:".popup",t.popup(s)),o.hasClass("close-popup")&&(s=n.popup?n.popup:".popup.modal-in",t.closeModal(s)),o.hasClass("modal-overlay")&&(t(".modal.modal-in").length>0&&i.modalCloseByOutside&&t.closeModal(".modal.modal-in"),t(".actions-modal.modal-in").length>0&&i.actionsCloseByOutside&&t.closeModal(".actions-modal.modal-in")),o.hasClass("popup-overlay")&&t(".popup.modal-in").length>0&&i.popupCloseByOutside&&t.closeModal(".popup.modal-in")}));var i=t.modal.prototype.defaults={modalStack:!0,modalButtonOk:"确定",modalButtonCancel:"取消",modalPreloaderTitle:"加载中",modalContainer:document.body}}($),function(t){"use strict";var e=function(e){var i=this,s={updateValuesOnMomentum:!1,updateValuesOnTouchmove:!0,rotateEffect:!1,momentumRatio:7,freeMode:!1,scrollToInput:!0,inputReadOnly:!0,toolbar:!0,toolbarCloseText:"确定",toolbarTemplate:'<header class="bar bar-nav">                <button class="button c-83c744 button-clear close-picker button-link f16">取消</button>                              <h1 class="title c-868686">设置地区</h1>                          <button class="button c-83c744 button-link pull-right close-picker button-clear picker-confirm f16">确定</button>                </header>'};for(var o in e=e||{},s)void 0===e[o]&&(e[o]=s[o]);i.params=e,i.cols=[],i.initialized=!1,i.inline=!!i.params.container;var n=t.device.ios||navigator.userAgent.toLowerCase().indexOf("safari")>=0&&navigator.userAgent.toLowerCase().indexOf("chrome")<0&&!t.device.android;function a(){if(i.opened)for(var t=0;t<i.cols.length;t++)i.cols[t].divider||(i.cols[t].calcSize(),i.cols[t].setValue(i.cols[t].value,0,!1))}function r(e){if(e.preventDefault(),t.device.isWeixin&&t.device.android&&i.params.inputReadOnly&&(this.focus(),this.blur()),!i.opened&&(i.open(),i.params.scrollToInput)){var s=i.input.parents(".content");if(0===s.length)return;var o,n=parseInt(s.css("padding-top"),10),a=parseInt(s.css("padding-bottom"),10),r=s[0].offsetHeight-n-i.container.height(),l=s[0].scrollHeight-n-i.container.height(),h=i.input.offset().top-n+i.input[0].offsetHeight;if(h>r){var c=s.scrollTop()+h-r;c+r>l&&(o=c+r-l+a,r===l&&(o=i.container.height()),s.css({"padding-bottom":o+"px"})),s.scrollTop(c,300)}}}function l(e){i.opened&&(i.input&&i.input.length>0?e.target!==i.input[0]&&0===t(e.target).parents(".picker-modal").length&&i.close():0===t(e.target).parents(".picker-modal").length&&i.close())}i.setValue=function(t,e){for(var s=0,o=0;o<i.cols.length;o++)i.cols[o]&&!i.cols[o].divider&&(i.cols[o].setValue(t[s],e),s++)},i.updateValue=function(){for(var e=[],s=[],o=0;o<i.cols.length;o++)i.cols[o].divider||(e.push(i.cols[o].value),s.push(i.cols[o].displayValue));e.indexOf(void 0)>=0||(i.value=e,i.displayValue=s,i.params.onChange&&i.params.onChange(i,i.value,i.displayValue),i.input&&i.input.length>0&&(t(i.input).val(i.params.formatValue?i.params.formatValue(i,i.value,i.displayValue):i.value.join(" ")),t(i.input).trigger("change")))},i.initPickerCol=function(e,s){var o=t(e),a=o.index(),r=i.cols[a];if(!r.divider){var l,h,c,p;r.container=o,r.wrapper=r.container.find(".picker-items-col-wrapper"),r.items=r.wrapper.find(".picker-item"),r.replaceValues=function(t,e){r.destroyEvents(),r.values=t,r.displayValues=e;var s=i.columnHTML(r,!0);r.wrapper.html(s),r.items=r.wrapper.find(".picker-item"),r.calcSize(),r.setValue(r.values[0],0,!0),r.initEvents()},r.calcSize=function(){var e,s;i.params.rotateEffect&&(r.container.removeClass("picker-items-col-absolute"),r.width||r.container.css({width:""})),e=0,s=r.container[0].offsetHeight,r.wrapper[0].offsetHeight,l=r.items[0].offsetHeight,h=l*r.items.length,c=s/2-h+l/2,p=s/2-l/2,r.width&&(e=r.width,parseInt(e,10)===e&&(e+="px"),r.container.css({width:e})),i.params.rotateEffect&&(r.width||(r.items.each((function(){var i=t(this);i.css({width:"auto"}),e=Math.max(e,i[0].offsetWidth),i.css({width:""})})),r.container.css({width:e+2+"px"})),r.container.addClass("picker-items-col-absolute"))},r.calcSize(),r.wrapper.transform("translate3d(0,"+p+"px,0)").transition(0);var d;r.setValue=function(e,s,o){void 0===s&&(s="");var n=r.wrapper.find('.picker-item[data-picker-value="'+e+'"]').index();if(void 0!==n&&-1!==n){var a=-n*l+p;r.wrapper.transition(s),r.wrapper.transform("translate3d(0,"+a+"px,0)"),i.params.updateValuesOnMomentum&&r.activeIndex&&r.activeIndex!==n&&(t.cancelAnimationFrame(d),r.wrapper.transitionEnd((function(){t.cancelAnimationFrame(d)})),C()),r.updateItems(n,a,s,o)}},r.updateItems=function(e,s,o,a){void 0===s&&(s=t.getTranslate(r.wrapper[0],"y")),void 0===e&&(e=-Math.round((s-p)/l)),e<0&&(e=0),e>=r.items.length&&(e=r.items.length-1);var h=r.activeIndex;r.activeIndex=e,r.wrapper.find(".picker-selected").removeClass("picker-selected"),i.params.rotateEffect&&r.items.transition(o);var c=r.items.eq(e).addClass("picker-selected").transform("");if((a||void 0===a)&&(r.value=c.attr("data-picker-value"),r.displayValue=r.displayValues?r.displayValues[e]:r.value,h!==e&&(r.onChange&&r.onChange(i,r.value,r.displayValue),i.updateValue())),i.params.rotateEffect){Math.floor((s-p)/l);r.items.each((function(){var e=t(this),i=(e.index()*l-(p-s))/l,o=Math.ceil(r.height/l/2)+1,a=-18*i;a>180&&(a=180),a<-180&&(a=-180),Math.abs(i)>o?e.addClass("picker-item-far"):e.removeClass("picker-item-far"),e.transform("translate3d(0, "+(-s+p)+"px, "+(n?-110:0)+"px) rotateX("+a+"deg)")}))}},s&&r.updateItems(0,p,0);var u,m,f,v,g,y,x,w,b,k,T,S,E=!0;r.initEvents=function(e){var i=e?"off":"on";r.container[i](t.touchEvents.start,P),r.container[i](t.touchEvents.move,M),r.container[i](t.touchEvents.end,X),r.items[i]("click",Y)},r.destroyEvents=function(){r.initEvents(!0)},r.container[0].f7DestroyPickerCol=function(){r.destroyEvents()},r.initEvents()}function C(){d=t.requestAnimationFrame((function(){r.updateItems(void 0,void 0,0),C()}))}function P(e){m||u||(e.preventDefault(),u=!0,f=v="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,g=(new Date).getTime(),E=!0,x=b=t.getTranslate(r.wrapper[0],"y"))}function M(e){u&&(e.preventDefault(),E=!1,v="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,m||(t.cancelAnimationFrame(d),m=!0,x=b=t.getTranslate(r.wrapper[0],"y"),r.wrapper.transition(0)),e.preventDefault(),w=void 0,(b=x+(v-f))<c&&(b=c-Math.pow(c-b,.8),w="min"),b>p&&(b=p+Math.pow(b-p,.8),w="max"),r.wrapper.transform("translate3d(0,"+b+"px,0)"),r.updateItems(void 0,b,0,i.params.updateValuesOnTouchmove),T=b-k||b,S=(new Date).getTime(),k=b)}function X(e){if(u&&m){var s;u=m=!1,r.wrapper.transition(""),w&&("min"===w?r.wrapper.transform("translate3d(0,"+c+"px,0)"):r.wrapper.transform("translate3d(0,"+p+"px,0)")),(y=(new Date).getTime())-g>300?s=b:(Math.abs(T/(y-S)),s=b+T*i.params.momentumRatio),s=Math.max(Math.min(s,p),c);var o=-Math.floor((s-p)/l);i.params.freeMode||(s=-o*l+p),r.wrapper.transform("translate3d(0,"+parseInt(s,10)+"px,0)"),r.updateItems(o,s,"",!0),i.params.updateValuesOnMomentum&&(C(),r.wrapper.transitionEnd((function(){t.cancelAnimationFrame(d)}))),setTimeout((function(){E=!0}),100)}else u=m=!1}function Y(e){if(E){t.cancelAnimationFrame(d);var i=t(this).attr("data-picker-value");r.setValue(i)}}},i.destroyPickerCol=function(e){"f7DestroyPickerCol"in(e=t(e))[0]&&e[0].f7DestroyPickerCol()},t(window).on("resize",a),i.columnHTML=function(t,e){var i="",s="";if(t.divider)s+='<div class="picker-items-col picker-items-col-divider '+(t.textAlign?"picker-items-col-"+t.textAlign:"")+" "+(t.cssClass||"")+'">'+t.content+"</div>";else{for(var o=0;o<t.values.length;o++)i+='<div class="picker-item" data-picker-value="'+t.values[o]+'">'+(t.displayValues?t.displayValues[o]:t.values[o])+"</div>";s+='<div class="picker-items-col '+(t.textAlign?"picker-items-col-"+t.textAlign:"")+" "+(t.cssClass||"")+'"><div class="picker-items-col-wrapper">'+i+"</div></div>"}return e?i:s},i.layout=function(){var t,e;i.cols=[];var s="";for(e=0;e<i.params.cols.length;e++){var o=i.params.cols[e];s+=i.columnHTML(i.params.cols[e]),i.cols.push(o)}t='<div class="'+("picker-modal picker-columns "+(i.params.cssClass||"")+(i.params.rotateEffect?" picker-3d":""))+'">'+(i.params.toolbar?i.params.toolbarTemplate.replace(/{{closeText}}/g,i.params.toolbarCloseText):"")+'<div class="picker-modal-inner picker-items">'+s+'<div class="picker-center-highlight"></div></div></div>',i.pickerHTML=t},i.params.input&&(i.input=t(i.params.input),i.input.length>0&&(i.params.inputReadOnly&&i.input.prop("readOnly",!0),i.inline||i.input.on("click",r))),i.inline||t("html").on("click",l),i.opened=!1;var h=t('<div class="pa z100 w h t0 l0" style="background-color: rgba(0,0,0,.5)"></div>');return i.open=function(){t("body").append(h),h.one("click",(function(){i.destroy()})),i.opened||(i.layout(),i.inline?(i.container=t(i.pickerHTML),i.container.addClass("picker-modal-inline"),t(i.params.container).append(i.container),i.opened=!0):(i.container=t(t.pickerModal(i.pickerHTML)),t(i.container).one("opened",(function(){i.opened=!0})).on("close",(function(t,e){!function(t){h.remove(),i.opened=!1,i.input&&i.input.length>0&&i.input.parents(".content").css({"padding-bottom":""}),i.params.onClose&&i.params.onClose(i,t),i.container.find(".picker-items-col").each((function(){i.destroyPickerCol(this)})),i.destroy()}(e)}))),i.container[0].f7Picker=i,i.container.find(".picker-items-col").each((function(){var t=!0;(!i.initialized&&i.params.value||i.initialized&&i.value)&&(t=!1),i.initPickerCol(this,t)})),i.initialized?i.value&&i.setValue(i.value,0):i.params.value&&i.setValue(i.params.value,0)),i.initialized=!0,i.params.onOpen&&i.params.onOpen(i)},i.close=function(){i.opened&&!i.inline&&t.closeModal(i.container)},i.destroy=function(){i.close(),i.params.input&&i.input.length>0&&i.input.off("click",r),t("html").off("click",l),t(window).off("resize",a)},i.inline&&i.open(),i};t(document).on("click",".close-picker",(function(){var e=t(".picker-modal.modal-in");t(this).hasClass("picker-confirm")?t.closeModal(e,!0):t.closeModal(e)})),t.fn.picker=function(i){var s=arguments;return this.each((function(){if(this){var o=t(this),n=o.data("picker");if(!n){var a=t.extend({input:this,value:o.val()?o.val().split(" "):""},i);n=new e(a),o.data("picker",n)}"string"==typeof i&&n[i].apply(n,Array.prototype.slice.call(s,1))}}))}}($),function(t){"use strict";var e=new Date,i=function(t){for(var e=[],i=1;i<=(t||31);i++)e.push(i<10?"0"+i:i);return e},s=function(t){return t<10?"0"+t:t},o="01 02 03 04 05 06 07 08 09 10 11 12".split(" "),n=function(){for(var t=[],e=1950;e<=2050;e++)t.push(e);return t}(),a={rotateEffect:!1,value:[e.getFullYear(),s(e.getMonth()+1),s(e.getDate()),e.getHours(),s(e.getMinutes())],onChange:function(t,e,s){var o,n,a,r,l=(o=t.cols[1].value,n=t.cols[0].value,a=new Date(n,parseInt(o)+1-1,1),r=new Date(a-1),i(r.getDate())),h=t.cols[2].value;h>l.length&&(h=l.length),t.cols[2].setValue(h)},formatValue:function(t,e,i){return i[0]+"-"+e[1]+"-"+e[2]+" "+e[3]+":"+e[4]},cols:[{values:n},{values:o},{values:i()},{divider:!0,content:"  "},{values:function(){for(var t=[],e=0;e<=23;e++)t.push(e);return t}()},{divider:!0,content:":"},{values:function(){for(var t=[],e=0;e<=59;e++)t.push(e<10?"0"+e:e);return t}()}]};t.fn.datetimePicker=function(e){return this.each((function(){if(this){var i=t.extend(a,e);t(this).picker(i),e.value&&t(this).val(i.formatValue(i,i.value,i.value))}}))}}($),function(t){"use strict";var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},i=function(){var i={},s=document.createElement("div").style,o=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in s)return t[e].substr(0,t[e].length-1);return!1}();function n(t){return!1!==o&&(""===o?t:o+t.charAt(0).toUpperCase()+t.substr(1))}i.getTime=Date.now||function(){return(new Date).getTime()},i.extend=function(t,e){for(var i in e)t[i]=e[i]},i.addEvent=function(t,e,i,s){t.addEventListener(e,i,!!s)},i.removeEvent=function(t,e,i,s){t.removeEventListener(e,i,!!s)},i.prefixPointerEvent=function(e){return t.MSPointerEvent?"MSPointer"+e.charAt(9).toUpperCase()+e.substr(10):e},i.momentum=function(t,i,s,o,n,a,r){var l,h,c=t-i,p=Math.abs(c)/s;h=(p=(p/=2)>1.5?1.5:p)/(a=void 0===a?6e-4:a),(l=t+p*p/(2*a)*(c<0?-1:1))<o?(l=n?o-n/2.5*(p/8):o,c=Math.abs(l-t),h=c/p):l>0&&(l=n?n/2.5*(p/8):0,c=Math.abs(t)+l,h=c/p);var d=+new Date,u=d;return e((function t(){+new Date-u>50&&(r._execEvent("scroll"),u=+new Date),+new Date-d<h&&e(t)})),{destination:Math.round(l),duration:h}};var a=n("transform");return i.extend(i,{hasTransform:!1!==a,hasPerspective:n("perspective")in s,hasTouch:"ontouchstart"in t,hasPointer:t.PointerEvent||t.MSPointerEvent,hasTransition:n("transition")in s}),i.isBadAndroid=/Android /.test(t.navigator.appVersion)&&!/Chrome\/\d/.test(t.navigator.appVersion)&&!1,i.extend(i.style={},{transform:a,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin")}),i.hasClass=function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},i.addClass=function(t,e){if(!i.hasClass(t,e)){var s=t.className.split(" ");s.push(e),t.className=s.join(" ")}},i.removeClass=function(t,e){if(i.hasClass(t,e)){var s=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(s," ")}},i.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},i.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},i.extend(i.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),i.extend(i.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1===t?1:.4*Math.pow(2,-10*t)*Math.sin((t-.055)*(2*Math.PI)/.22)+1}}}),i.tap=function(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},i.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||((e=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,i.screenX,i.screenY,i.clientX,i.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,i.dispatchEvent(e))},i}();function s(t,e){for(var s in this.wrapper="string"==typeof t?document.querySelector(t):t,this.scroller=$(this.wrapper).find(".content-inner")[0],this.scrollerStyle=this.scroller&&this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,eventPassthrough:void 0},e)this.options[s]=e[s];this.translateZ=this.options.HWCompositing&&i.hasPerspective?" translateZ(0)":"",this.options.useTransition=i.hasTransition&&this.options.useTransition,this.options.useTransform=i.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?i.ease[this.options.bounceEasing]||i.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),"scale"===this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3===this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(t,e,i){var s=document.createElement("div"),o=document.createElement("div");return!0===i&&(s.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"===t?(!0===i&&(s.style.cssText+=";height:5px;left:2px;right:2px;bottom:0",o.style.height="100%"),s.className="iScrollHorizontalScrollbar"):(!0===i&&(s.style.cssText+=";width:5px;bottom:2px;top:2px;right:1px",o.style.width="100%"),s.className="iScrollVerticalScrollbar"),s.style.cssText+=";overflow:hidden",e||(s.style.pointerEvents="none"),s.appendChild(o),s}function n(e,s){for(var o in this.wrapper="string"==typeof s.el?document.querySelector(s.el):s.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=e,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},s)this.options[o]=s[o];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(i.addEvent(this.indicator,"touchstart",this),i.addEvent(t,"touchend",this)),this.options.disablePointer||(i.addEvent(this.indicator,i.prefixPointerEvent("pointerdown"),this),i.addEvent(t,i.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(i.addEvent(this.indicator,"mousedown",this),i.addEvent(t,"mouseup",this))),this.options.fade&&(this.wrapperStyle[i.style.transform]=this.scroller.translateZ,this.wrapperStyle[i.style.transitionDuration]=i.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}s.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if((1===i.eventType[t.type]||0===t.button)&&this.enabled&&(!this.initiated||i.eventType[t.type]===this.initiated)){!this.options.preventDefault||i.isBadAndroid||i.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,s=t.touches?t.touches[0]:t;this.initiated=i.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=i.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,e=this.getComputedPosition(),this._translate(Math.round(e.x),Math.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&i.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,s,o,n,a=t.touches?t.touches[0]:t,r=a.pageX-this.pointX,l=a.pageY-this.pointY,h=i.getTime();if(this.pointX=a.pageX,this.pointY=a.pageY,this.distX+=r,this.distY+=l,o=Math.abs(this.distX),n=Math.abs(this.distY),!(h-this.endTime>300&&o<10&&n<10)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,l=this.hasVerticalScroll?l:0,e=this.x+r,s=this.y+l,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+r/3:e>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+l/3:s>0?0:this.maxScrollY),this.directionX=r>0?-1:r<0?1:0,this.directionY=l>0?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,s),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&i.eventType[t.type]===this.initiated){this.options.preventDefault&&!i.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,s,o=i.getTime()-this.startTime,n=Math.round(this.x),a=Math.round(this.y),r=Math.abs(n-this.startX),l=Math.abs(a-this.startY),h=0,c="";if(this.isInTransition=0,this.initiated=0,this.endTime=i.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,a),!this.moved)return this.options.tap&&i.tap(t,this.options.tap),this.options.click&&i.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&o<200&&r<100&&l<100)this._execEvent("flick");else{if(this.options.momentum&&o<300&&(e=this.hasHorizontalScroll?i.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration,this):{destination:n,duration:0},s=this.hasVerticalScroll?i.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration,this):{destination:a,duration:0},n=e.destination,a=s.destination,h=Math.max(e.duration,s.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(n,a);this.currentPage=p,h=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(n-p.x),1e3),Math.min(Math.abs(a-p.y),1e3)),300),n=p.x,a=p.y,this.directionX=0,this.directionY=0,c=this.options.bounceEasing}if(n!==this.x||a!==this.y)return(n>0||n<this.maxScrollX||a>0||a<this.maxScrollY)&&(c=i.ease.quadratic),void this.scrollTo(n,a,h,c);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){t.refresh()}),this.options.resizePolling)},resetPosition:function(e){var i=this.x,s=this.y;if(e=e||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),i===this.x&&s===this.y)return!1;if(this.options.ptr&&this.y>44&&-1*this.startY<$(t).height()&&!this.ptrLock){s=this.options.ptrOffset||44,this._execEvent("ptr"),this.ptrLock=!0;var o=this;setTimeout((function(){o.ptrLock=!1}),500)}return this.scrollTo(i,s,e,this.options.bounceEasing),!0},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=i.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,s){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,s)},scrollTo:function(t,e,s,o){o=o||i.ease.circular,this.isInTransition=this.options.useTransition&&s>0,!s||this.options.useTransition&&o.style?(this._transitionTimingFunction(o.style),this._transitionTime(s),this._translate(t,e)):this._animate(t,e,s,o.fn)},scrollToElement:function(t,e,s,o,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var a=i.offset(t);a.left-=this.wrapperOffset.left,a.top-=this.wrapperOffset.top,!0===s&&(s=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),a.left-=s||0,a.top-=o||0,a.left=a.left>0?0:a.left<this.maxScrollX?this.maxScrollX:a.left,a.top=a.top>0?0:a.top<this.maxScrollY?this.maxScrollY:a.top,e=null==e||"auto"===e?Math.max(Math.abs(this.x-a.left),Math.abs(this.y-a.top)):e,this.scrollTo(a.left,a.top,e,n)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[i.style.transitionDuration]=t+"ms",!t&&i.isBadAndroid&&(this.scrollerStyle[i.style.transitionDuration]="0.001s"),this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[i.style.transitionTimingFunction]=t,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTimingFunction(t)},_translate:function(t,e){if(this.options.useTransform?this.scrollerStyle[i.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(e){var s=e?i.removeEvent:i.addEvent,o=this.options.bindToWrapper?this.wrapper:t;s(t,"orientationchange",this),s(t,"resize",this),this.options.click&&s(this.wrapper,"click",this,!0),this.options.disableMouse||(s(this.wrapper,"mousedown",this),s(o,"mousemove",this),s(o,"mousecancel",this),s(o,"mouseup",this)),i.hasPointer&&!this.options.disablePointer&&(s(this.wrapper,i.prefixPointerEvent("pointerdown"),this),s(o,i.prefixPointerEvent("pointermove"),this),s(o,i.prefixPointerEvent("pointercancel"),this),s(o,i.prefixPointerEvent("pointerup"),this)),i.hasTouch&&!this.options.disableTouch&&(s(this.wrapper,"touchstart",this),s(o,"touchmove",this),s(o,"touchcancel",this),s(o,"touchend",this)),s(this.scroller,"transitionend",this),s(this.scroller,"webkitTransitionEnd",this),s(this.scroller,"oTransitionEnd",this),s(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,s,o=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=+((o=o[i.style.transform].split(")")[0].split(", "))[12]||o[4]),s=+(o[13]||o[5])):(e=+o.left.replace(/[^-\d.]/g,""),s=+o.top.replace(/[^-\d.]/g,"")),{x:e,y:s}},_initIndicators:function(){var t,e=this.options.interactiveScrollbars,i="string"!=typeof this.options.scrollbars,s=[],a=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:o("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),s.push(t)),this.options.scrollX&&(t={el:o("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),s.push(t))),this.options.indicators&&(s=s.concat(this.options.indicators));for(var r=s.length;r--;)this.indicators.push(new n(this,s[r]));function l(t){for(var e=a.indicators.length;e--;)t.call(a.indicators[e])}this.options.fadeScrollbars&&(this.on("scrollEnd",(function(){l((function(){this.fade()}))})),this.on("scrollCancel",(function(){l((function(){this.fade()}))})),this.on("scrollStart",(function(){l((function(){this.fade(1)}))})),this.on("beforeScrollStart",(function(){l((function(){this.fade(1,!0)}))}))),this.on("refresh",(function(){l((function(){this.refresh()}))})),this.on("destroy",(function(){l((function(){this.destroy()})),delete this.indicators}))},_initWheel:function(){i.addEvent(this.wrapper,"wheel",this),i.addEvent(this.wrapper,"mousewheel",this),i.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",(function(){i.removeEvent(this.wrapper,"wheel",this),i.removeEvent(this.wrapper,"mousewheel",this),i.removeEvent(this.wrapper,"DOMMouseScroll",this)}))},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var e,i,s,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout((function(){n._execEvent("scrollEnd"),n.wheelTimeout=void 0}),400),"deltaX"in t)1===t.deltaMode?(e=-t.deltaX*this.options.mouseWheelSpeed,i=-t.deltaY*this.options.mouseWheelSpeed):(e=-t.deltaX,i=-t.deltaY);else if("wheelDeltaX"in t)e=t.wheelDeltaX/120*this.options.mouseWheelSpeed,i=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)e=i=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;e=i=-t.detail/3*this.options.mouseWheelSpeed}if(e*=this.options.invertWheelDirection,i*=this.options.invertWheelDirection,this.hasVerticalScroll||(e=i,i=0),this.options.snap)return s=this.currentPage.pageX,o=this.currentPage.pageY,e>0?s--:e<0&&s++,i>0?o--:i<0&&o++,void this.goToPage(s,o);s=this.x+Math.round(this.hasHorizontalScroll?e:0),o=this.y+Math.round(this.hasVerticalScroll?i:0),s>0?s=0:s<this.maxScrollX&&(s=this.maxScrollX),o>0?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(s,o,0),this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",(function(){var t,e,i,s,o,n,a=0,r=0,l=0,h=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(i=Math.round(h/2),s=Math.round(c/2);l>-this.scrollerWidth;){for(this.pages[a]=[],t=0,o=0;o>-this.scrollerHeight;)this.pages[a][t]={x:Math.max(l,this.maxScrollX),y:Math.max(o,this.maxScrollY),width:h,height:c,cx:l-i,cy:o-s},o-=c,t++;l-=h,a++}else for(t=(n=this.options.snap).length,e=-1;a<t;a++)(0===a||n[a].offsetLeft<=n[a-1].offsetLeft)&&(r=0,e++),this.pages[r]||(this.pages[r]=[]),l=Math.max(-n[a].offsetLeft,this.maxScrollX),o=Math.max(-n[a].offsetTop,this.maxScrollY),i=l-Math.round(n[a].offsetWidth/2),s=o-Math.round(n[a].offsetHeight/2),this.pages[r][e]={x:l,y:o,width:n[a].offsetWidth,height:n[a].offsetHeight,cx:i,cy:s},l>this.maxScrollX&&r++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}})),this.on("flick",(function(){var t=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.x-this.startX),1e3),Math.min(Math.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)}))},_nearestSnap:function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var i=0,s=this.pages.length,o=0;if(Math.abs(t-this.absStartX)<this.snapThresholdX&&Math.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);i<s;i++)if(t>=this.pages[i][0].cx){t=this.pages[i][0].x;break}for(s=this.pages[i].length;o<s;o++)if(e>=this.pages[0][o].cy){e=this.pages[0][o].y;break}return i===this.currentPage.pageX&&((i+=this.directionX)<0?i=0:i>=this.pages.length&&(i=this.pages.length-1),t=this.pages[i][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),e=this.pages[0][o].y),{x:t,y:e,pageX:i,pageY:o}},goToPage:function(t,e,i,s){s=s||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:e<0&&(e=0);var o=this.pages[t][e].x,n=this.pages[t][e].y;i=void 0===i?this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(o-this.x),1e3),Math.min(Math.abs(n-this.y),1e3)),300):i,this.currentPage={x:o,y:n,pageX:t,pageY:e},this.scrollTo(o,n,i,s)},next:function(t,e){var i=this.currentPage.pageX,s=this.currentPage.pageY;++i>=this.pages.length&&this.hasVerticalScroll&&(i=0,s++),this.goToPage(i,s,t,e)},prev:function(t,e){var i=this.currentPage.pageX,s=this.currentPage.pageY;--i<0&&this.hasVerticalScroll&&(i=0,s--),this.goToPage(i,s,t,e)},_initKeys:function(){var e,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(e in this.options.keyBindings)"string"==typeof this.options.keyBindings[e]&&(this.options.keyBindings[e]=this.options.keyBindings[e].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(e in s)this.options.keyBindings[e]=this.options.keyBindings[e]||s[e];i.addEvent(t,"keydown",this),this.on("destroy",(function(){i.removeEvent(t,"keydown",this)}))},_key:function(t){if(this.enabled){var e,s=this.options.snap,o=s?this.currentPage.pageX:this.x,n=s?this.currentPage.pageY:this.y,a=i.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(e=this.getComputedPosition(),this._translate(Math.round(e.x),Math.round(e.y)),this.isInTransition=!1),this.keyAcceleration=a-r<200?Math.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=s?1:this.wrapperWidth:n+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=s?1:this.wrapperWidth:n-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=s?this.pages.length-1:this.maxScrollX,n=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,n=0;break;case this.options.keyBindings.left:o+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(o,n):(o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,n,0),this.keyTime=a)}},_animate:function(t,s,o,n){var a=this,r=this.x,l=this.y,h=i.getTime(),c=h+o;this.isAnimating=!0,function p(){var d,u,m,f=i.getTime();if(f>=c)return a.isAnimating=!1,a._translate(t,s),void(a.resetPosition(a.options.bounceTime)||a._execEvent("scrollEnd"));m=n(f=(f-h)/o),d=(t-r)*m+r,u=(s-l)*m+l,a._translate(d,u),a.isAnimating&&e(p),3===a.options.probeType&&a._execEvent("scroll")}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},n.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(i.removeEvent(this.indicator,"touchstart",this),i.removeEvent(this.indicator,i.prefixPointerEvent("pointerdown"),this),i.removeEvent(this.indicator,"mousedown",this),i.removeEvent(t,"touchmove",this),i.removeEvent(t,i.prefixPointerEvent("pointermove"),this),i.removeEvent(t,"mousemove",this),i.removeEvent(t,"touchend",this),i.removeEvent(t,i.prefixPointerEvent("pointerup"),this),i.removeEvent(t,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var s=e.touches?e.touches[0]:e;e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=s.pageX,this.lastPointY=s.pageY,this.startTime=i.getTime(),this.options.disableTouch||i.addEvent(t,"touchmove",this),this.options.disablePointer||i.addEvent(t,i.prefixPointerEvent("pointermove"),this),this.options.disableMouse||i.addEvent(t,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var e,s,o,n,a=t.touches?t.touches[0]:t,r=i.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,e=a.pageX-this.lastPointX,this.lastPointX=a.pageX,s=a.pageY-this.lastPointY,this.lastPointY=a.pageY,o=this.x+e,n=this.y+s,this._pos(o,n),1===this.scroller.options.probeType&&r-this.startTime>300?(this.startTime=r,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),e.stopPropagation(),i.removeEvent(t,"touchmove",this),i.removeEvent(t,i.prefixPointerEvent("pointermove"),this),i.removeEvent(t,"mousemove",this),this.scroller.options.snap){var s=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-s.x),1e3),Math.min(Math.abs(this.scroller.y-s.y),1e3)),300);this.scroller.x===s.x&&this.scroller.y===s.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=s,this.scroller.scrollTo(s.x,s.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[i.style.transitionDuration]=t+"ms",!t&&i.isBadAndroid&&(this.indicatorStyle[i.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[i.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(i.addClass(this.wrapper,"iScrollBothScrollbars"),i.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(i.removeClass(this.wrapper,"iScrollBothScrollbars"),i.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=Math.max(Math.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"===this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=Math.max(Math.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"===this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&Math.round(this.sizeRatioX*this.scroller.x)||0,e=this.options.listenY&&Math.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"===this.options.shrink&&(this.width=Math.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"===this.options.shrink?(this.width=Math.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"===this.options.shrink&&this.width!==this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),e<this.minBoundaryY?("scale"===this.options.shrink&&(this.height=Math.max(this.indicatorHeight+3*e,8),this.indicatorStyle.height=this.height+"px"),e=this.minBoundaryY):e>this.maxBoundaryY?"scale"===this.options.shrink?(this.height=Math.max(this.indicatorHeight-3*(e-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",e=this.maxPosY+this.indicatorHeight-this.height):e=this.maxBoundaryY:"scale"===this.options.shrink&&this.height!==this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=e,this.scroller.options.useTransform?this.indicatorStyle[i.style.transform]="translate("+t+"px,"+e+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=e+"px")},_pos:function(t,e){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),e<0?e=0:e>this.maxPosY&&(e=this.maxPosY),t=this.options.listenX?Math.round(t/this.sizeRatioX):this.scroller.x,e=this.options.listenY?Math.round(e/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,e)},fade:function(t,e){if(!e||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,o=t?0:300;t=t?"1":"0",this.wrapperStyle[i.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),o)}}},s.utils=i,t.IScroll=s}(window),function(t){"use strict";t.allowPanelOpen=!0,t.openPanel=function(e){if(!t.allowPanelOpen)return!1;"left"!==e&&"right"!==e||(e=".panel-"+e);var i=(e=e?t(e):t(".panel").eq(0)).hasClass("panel-right")?"right":"left";if(0===e.length||e.hasClass("active"))return!1;t.closePanel(),t.allowPanelOpen=!1;var s=e.hasClass("panel-reveal")?"reveal":"cover";e.css({display:"block"}).addClass("active"),e.trigger("open");e[0].clientLeft;var o="reveal"===s?t(t.getCurrentPage()):e;return function i(){o.transitionEnd((function(s){s.target===o[0]?(e.hasClass("active")?e.trigger("opened"):e.trigger("closed"),t.allowPanelOpen=!0):i()}))}(),t(document.body).addClass("with-panel-"+i+"-"+s),!0},t.closePanel=function(){var e=t(".panel.active");if(0===e.length)return!1;var i=e.hasClass("panel-reveal")?"reveal":"cover",s=e.hasClass("panel-left")?"left":"right";e.removeClass("active");var o="reveal"===i?t(".page"):e;e.trigger("close"),t.allowPanelOpen=!1,o.transitionEnd((function(){e.hasClass("active")||(e.css({display:""}),e.trigger("closed"),t("body").removeClass("panel-closing"),t.allowPanelOpen=!0)})),t("body").addClass("panel-closing").removeClass("with-panel-"+s+"-"+i)},t(document).on("click",".open-panel",(function(e){var i=t(e.target).data("panel");t.openPanel(i)})),t(document).on("click",".close-panel, .panel-overlay",(function(e){t.closePanel()})),t.initSwipePanels=function(){var e,i,s=t.smConfig.swipePanel,o=t.smConfig.swipePanelOnlyClose;if(s||o){var n,a,r,l,h,c,p,d,u,m,f=t(".panel-overlay"),v={},g=t(".page");t(document).on(t.touchEvents.start,(function(h){if(t.allowPanelOpen&&(s||o)&&!n&&!(t(".modal-in, .photo-browser-in").length>0)){if(v.x="touchstart"===h.type?h.targetTouches[0].pageX:h.pageX,v.y="touchstart"===h.type?h.targetTouches[0].pageY:h.pageY,t(".panel.active").length>0)i=t(".panel.active").hasClass("panel-left")?"left":"right";else{if(o)return;i=s}i&&(e=t(".panel.panel-"+i))[0]&&(p=e.hasClass("active"),a=!1,n=!0,r=void 0,l=(new Date).getTime(),m=void 0)}})),t(document).on(t.touchEvents.move,(function(t){if(n&&e[0]&&!t.f7PreventPanelSwipe){var s="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,o="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;if(void 0===r&&(r=!!(r||Math.abs(o-v.y)>Math.abs(s-v.x))),r)n=!1;else if(!m&&(m=s>v.x?"to-right":"to-left","left"===i&&"to-left"===m&&!e.hasClass("active")||"right"===i&&"to-right"===m&&!e.hasClass("active")))n=!1;else{a||(u=e.hasClass("panel-cover")?"cover":"reveal",p||(e.show(),f.show()),d=e[0].offsetWidth,e.transition(0)),a=!0,t.preventDefault();var l=p?0:-2;"right"===i&&(l=-l),h=s-v.x+l,"right"===i?((c=h-(p?d:0))>0&&(c=0),c<-d&&(c=-d)):((c=h+(p?d:0))<0&&(c=0),c>d&&(c=d)),"reveal"===u?(g.transform("translate3d("+c+"px,0,0)").transition(0),f.transform("translate3d("+c+"px,0,0)")):e.transform("translate3d("+c+"px,0,0)").transition(0)}}})),t(document).on(t.touchEvents.end,(function(s){if(!n||!a)return n=!1,void(a=!1);n=!1,a=!1;var o,r=(new Date).getTime()-l,h=0===c||Math.abs(c)===d;if("swap"===(o=p?c===-d?"reset":r<300&&Math.abs(c)>=0||r>=300&&Math.abs(c)<=d/2?"left"===i&&c===d?"reset":"swap":"reset":0===c?"reset":r<300&&Math.abs(c)>0||r>=300&&Math.abs(c)>=d/2?"swap":"reset")&&(t.allowPanelOpen=!0,p?(t.closePanel(),h&&(e.css({display:""}),t("body").removeClass("panel-closing"))):t.openPanel(i),h&&(t.allowPanelOpen=!0)),"reset"===o)if(p)t.allowPanelOpen=!0,t.openPanel(i);else if(t.closePanel(),h)t.allowPanelOpen=!0,e.css({display:""});else{var m="reveal"===u?g:e;t("body").addClass("panel-closing"),m.transitionEnd((function(){t.allowPanelOpen=!0,e.css({display:""}),t("body").removeClass("panel-closing")}))}"reveal"===u&&(g.transition(""),g.transform("")),e.transition("").transform(""),f.css({display:""}).transform("")}))}},t.initSwipePanels()}($);
angular.services.factory("scrollSelect",["$ionicPlatform","requestTFP","prompt","$timeout",function(e,n,a,t){var u,l,c,o={},i=$("body");function s(){i.find("#citySelect").length||i.append('<input type="hidden" id="citySelect">'),i.find("#gradeSelect").length||i.append('<input type="hidden" id="gradeSelect">')}return o.city=function(l,c,o){s();var i,r=c;function v(){var e,n=function(e){return e.sub?function(e){for(var n=[],a=0;a<e.length;a++){var t=e[a];"设置地区"!==t.name&&n.push(t.name)}return n.length?n:[""]}(e.sub):[""]},a=function(e){for(var a=0;a<i.length;a++)if(i[a].name===e)return n(i[a]);return[""]},c=function(e,a){for(var t=0;t<i.length;t++)if(i[t].name===e)for(var u=0;u<i[t].sub.length;u++)if(i[t].sub[u].name===a)return n(i[t].sub[u]);return[""]},i=u,s=i.map((function(e){return e.name})),v=n(i[0]),d=[""],p=s[0],m=v[0],b={cssClass:"city-picker",rotateEffect:!1,onClose:function(e,n){var a;n&&(u.forEach((function(n){n.name==e.value[0]&&n.sub.forEach((function(n){n.name==e.value[1]&&(a=n.id,e.value[2]&&n.sub.forEach((function(n){e.value[2]==n.name&&(a=n.id)})))}))})),l&&t(l.apply(this,[e.value,a])));f&&f()},toolbarTemplate:'<header class="bar bar-nav">                <button class="button c-83c744 button-clear close-picker button-link f16">取消</button>                              <h1 class="title c-868686">'+(o||"设置地区")+'</h1>                          <button class="button c-83c744 button-link pull-right close-picker button-clear picker-confirm f16">确定</button>                </header>',onChange:function(n,t,u,l,o){var i,s=n.cols[0].value;if(s!==p)return clearTimeout(e),void(e=setTimeout((function(){var e=a(s);i=e[0];var t=c(s,i);n.cols[1].replaceValues(e),n.cols[2].replaceValues(t),p=s,m=i,n.updateValue()}),200));(i=n.cols[1].value)!==m&&(n.cols[2].replaceValues(c(s,i)),m=i,n.updateValue())},cols:[{textAlign:"center",values:s,displayValue:v,cssClass:"col-province"},{textAlign:"center",values:v,cssClass:"col-city"},{textAlign:"center",values:d,cssClass:"col-district"}]},h=$.extend(b,{});h.value&&(h.value[0]&&(p=h.value[0],h.cols[1].values=a(h.value[0])),h.value[1]?(m=h.value[1],h.cols[2].values=c(h.value[0],h.value[1])):h.cols[2].values=c(h.value[0],h.cols[1].values[0]),!h.value[2]&&(h.value[2]=""),h.value[2]),r.picker(h),r.picker("open")}u?v():(i=function(){v()},a.loading.show(),n.jsonp("system/getArea",{},(function(e){a.loading.hide(),u=[],e.data.area.province.forEach((function(e,n){var a=u[n]={id:e.id,name:e.title,sub:[{name:"设置地区"}],type:0};e.city.forEach((function(e,t){var l=u[n].sub[t+1]={id:e.id,name:e.title};e.country&&(a.type=1,l.sub=[{name:"设置地区"}],e.country.forEach((function(e,n){l.sub[n+1]={id:e.id,name:e.title}})))}))})),i&&i(u)}),(function(e){a.loading.hide(),a.showTip(e.msg)})));var f=e.registerBackButtonAction((function(){r.picker("close"),f&&f()}),101)},o.grade=function(n,a,u){var l,c=a,o=function(e){return e.sub?function(e){for(var n=[],a=0;a<e.length;a++){var t=e[a];"设置年级"!==t.name&&n.push(t.name)}return n.length?n:[""]}(e.sub):[""]},i=function(e){for(var n=0;n<r.length;n++)if(r[n].name===e)return o(r[n]);return[""]},s=function(e,n){for(var a=0;a<r.length;a++)if(r[a].name===e)for(var t=0;t<r[a].sub.length;t++)if(r[a].sub[t].name===n)return o(r[a].sub[t]);return[""]},r=[{name:"小学",sub:[{name:"设置年级"},{name:"一年级",id:1},{name:"二年级",id:2},{name:"三年级",id:3},{name:"四年级",id:4},{name:"五年级",id:5},{name:"六年级",id:6}],type:0},{name:"初中",sub:[{name:"设置年级"},{name:"初一",id:7},{name:"初二",id:8},{name:"初三",id:9}],type:0},{name:"高中",sub:[{name:"设置年级"},{name:"高一",id:10,sub:[{name:"设置年级"},{name:"理科",id:1},{name:"文科",id:2},{name:"综合",id:3}]},{name:"高二",id:11,sub:[{name:"设置年级"},{name:"理科",id:1},{name:"文科",id:2},{name:"综合",id:3}]},{name:"高三",id:12,sub:[{name:"设置年级"},{name:"理科",id:1},{name:"文科",id:2},{name:"综合",id:3}]}],type:1}],v=r.map((function(e){return e.name})),f=o(r[0]),d=o(r[0].sub[1]),p=v[0],m=f[0],b=d[0];console.log(p,m,b);var h={cssClass:"city-picker",rotateEffect:!1,toolbarTemplate:'<header class="bar bar-nav">                <button class="button c-83c744 button-clear close-picker button-link f16">取消</button>                              <h1 class="title c-868686">设置年级</h1>                          <button class="button c-83c744 button-link pull-right close-picker button-clear picker-confirm f16">确定</button>                </header>',onClose:function(e,a){var l,c;a&&(r.forEach((function(n){n.name==e.value[0]&&n.sub.forEach((function(n){n.name==e.value[1]&&(l=n.id,e.value[2]&&n.sub.forEach((function(n){e.value[2]==n.name&&(c=n.id)})))}))})),n&&t(n.apply(this,[e.value,l,c])));u.showGradeList&&(u.showGradeList=!u.showGradeList),console.log(u.showGradeList,"====="),k&&k()},onChange:function(e,n,a,t,u){var c,o=e.cols[0].value;if(o!==p)return clearTimeout(l),void(l=setTimeout((function(){var n=i(o);c=n[0];var a=s(o,c);e.cols[1].replaceValues(n),e.cols[2].replaceValues(a),p=o,m=c,e.updateValue()}),200));(c=e.cols[1].value)!==m&&(e.cols[2].replaceValues(s(o,c)),m=c,e.updateValue())},cols:[{textAlign:"center",values:v,displayValue:f,cssClass:"col-province"},{textAlign:"center",values:f,cssClass:"col-city"},{textAlign:"center",values:d,cssClass:"col-district"}]},g=$.extend(h,{});g.value&&(g.value[0]&&(p=g.value[0],g.cols[1].values=i(g.value[0])),g.value[1]?(m=g.value[1],g.cols[2].values=s(g.value[0],g.value[1])):g.cols[2].values=s(g.value[0],g.cols[1].values[0]),!g.value[2]&&(g.value[2]=""),b=g.value[2]),c.picker(g),c.picker("open");var k=e.registerBackButtonAction((function(){c.picker("close"),k&&k()}),101)},o.subject=function(u,c,o){s();var i,r=c;function v(){var e=function(e){return e.sub?function(e){for(var n=[],a=0;a<e.length;a++){var t=e[a];"设置学科"!==t.name&&n.push(t.name)}return n.length?n:[""]}(e.sub):[""]},n=function(n,t){for(var u=0;u<a.length;u++)if(a[u].name===n)for(var l=0;l<a[u].sub.length;l++)if(a[u].sub[l].name===t)return e(a[u].sub[l]);return[""]},a=l,c=a.map((function(e){return e.name})),i=e(a[0]),s=(c[0],i[0],{cssClass:"city-picker",rotateEffect:!1,onClose:function(e,n){if(n){var a=[];l.forEach((function(n){n.name==e.value[0]&&(a[0]=n.id,n.sub.forEach((function(n){n.name==e.value[1]&&(a[1]=n.id,e.value[2]&&n.sub.forEach((function(n){e.value[2]==n.name&&(a=n.id)})))})))})),console.log([e.value,a]),u&&t(u.apply(this,[e.value,a]))}f&&f()},toolbarTemplate:'<header class="bar bar-nav">                <button class="button c-83c744 button-clear close-picker button-link f16">取消</button>                              <h1 class="title c-868686">'+(o||"设置学科")+'</h1>                          <button class="button c-83c744 button-link pull-right close-picker button-clear picker-confirm f16">确定</button>                </header>',onChange:function(e,n,a,t,u){},cols:[{textAlign:"center",values:c,displayValue:i,cssClass:"col-province"},{textAlign:"center",values:i,cssClass:"col-city"}]}),v=$.extend(s,{});v.value&&(v.value[0]&&(v.value[0],v.cols[1].values=function(n){for(var t=0;t<a.length;t++)if(a[t].name===n)return e(a[t]);return[""]}(v.value[0])),v.value[1]?(v.value[1],v.cols[2].values=n(v.value[0],v.value[1])):v.cols[2].values=n(v.value[0],v.cols[1].values[0]),!v.value[2]&&(v.value[2]=""),v.value[2]),r.picker(v),r.picker("open")}l?v():(i=function(){v()},a.loading.show(),n.jsonp("system/getSchtSubjMap",{},(function(e){a.loading.hide(),l=[],e.data.schoolTypes.forEach((function(e,n){l[n]={id:e.id,name:e.title,sub:[{name:"设置学科"}],type:0},e.subjects.forEach((function(e,a){l[n].sub[a+1]={id:e.id,name:e.title}}))})),i&&i(l)}),(function(e){a.loading.hide(),a.showTip(e.msg)})));var f=e.registerBackButtonAction((function(){r.picker("close"),f&&f()}),101)},o.bank=function(u,l,o){s();var i,r=l;function v(){var e=function(e){return e.sub?function(e){for(var n=[],a=0;a<e.length;a++){var t=e[a];"请选择银行"!==t.name&&n.push(t.name)}return n.length?n:[""]}(e.sub):[""]},n=function(n,t){for(var u=0;u<a.length;u++)if(a[u].name===n)for(var l=0;l<a[u].sub.length;l++)if(a[u].sub[l].name===t)return e(a[u].sub[l]);return[""]},a=c,l=a.map((function(e){return e.name})),i=e(a[0]),s=(l[0],i[0],{cssClass:"city-picker",rotateEffect:!1,onClose:function(e,n){if(n){var a=[];c.forEach((function(n){n.name==e.value[0]&&(a[0]=n.id)})),u&&t(u.apply(this,[e.value,a]))}f&&f()},toolbarTemplate:'<header class="bar bar-nav">                <button class="button c-83c744 button-clear close-picker button-link f16">取消</button>                              <h1 class="title c-868686">'+(o||"请选择银行")+'</h1>                          <button class="button c-83c744 button-link pull-right close-picker button-clear picker-confirm f16">确定</button>                </header>',onChange:function(e,n,a,t,u){},cols:[{textAlign:"center",values:l,displayValue:i,cssClass:"col-province"}]}),v=$.extend(s,{});v.value&&(v.value[0]&&(v.value[0],v.cols[1].values=function(n){for(var t=0;t<a.length;t++)if(a[t].name===n)return e(a[t]);return[""]}(v.value[0])),v.value[1]?(v.value[1],v.cols[2].values=n(v.value[0],v.value[1])):v.cols[2].values=n(v.value[0],v.cols[1].values[0]),!v.value[2]&&(v.value[2]=""),v.value[2]),r.picker(v),r.picker("open")}c?v():(i=function(){v()},a.loading.show(),n.jsonp("withdraw/getUnionPayList",{},(function(e){a.loading.hide(),c=[],e.data.list.forEach((function(e,n){c[n]={id:e.id,name:e.name,sub:[{name:"请选择银行"}],type:0}})),i&&i(c)}),(function(e){a.loading.hide(),a.showTip(e.msg)})));var f=e.registerBackButtonAction((function(){r.picker("close"),f&&f()}),101)},o}]);
"use strict";function SimplePubSub(){var e={};return{on:function(n,t){return n.split(" ").forEach((function(n){e[n]||(e[n]=[]),e[n].push(t)})),this},trigger:function(n,t){return angular.forEach(e[n],(function(e){e.call(null,t)})),this}}}angular.directives.directive("tabSlideBox",["$timeout","$window","$ionicSlideBoxDelegate","$ionicScrollDelegate",function($timeout,$window,$ionicSlideBoxDelegate,$ionicScrollDelegate){return{restrict:"A, E, C",link:function(e,n,t,i){var o=n[0],l=n;function c(){$timeout((function(){var e=angular.element(o.querySelector(".tsb-icons")),n=e.find("a"),i=e[0].querySelector(".tsb-ic-wrp"),l=n.length;i.querySelector(".scroll");angular.forEach(n,(function(e,n){angular.element(e).on("click",(function(){$ionicSlideBoxDelegate.slide(n)}))}));var c=t.tab;(void 0===t.tab||l<=c||c<0)&&(c=Math.floor(n.length/2)),0==c&&a(0),$timeout((function(){$ionicSlideBoxDelegate.slide(c),"false"==t.enableSlide&&$ionicSlideBoxDelegate.enableSlide(!1)}),0)}),100)}function a(e){var n=angular.element(o.querySelector(".tsb-icons")),t=n.find("a"),i=n[0].querySelector(".tsb-ic-wrp"),l=(t.length,i.querySelector(".scroll"),n[0].offsetWidth,angular.element(t[e]));if(l&&l.length){l[0].offsetWidth,l[0].offsetLeft;angular.element(n[0].querySelector(".active")).removeClass("active"),l.addClass("active")}}l.addClass("tabbed-slidebox"),"bottom"===t.tabsPosition&&l.addClass("btm");var r=e.events;r.on("slideChange",(function(e){a(e.index)})),r.on("ngRepeatFinished",(function(e){c()})),c()},controller:function controller($scope,$attrs,$element){$scope.events=new SimplePubSub,$scope.slideHasChanged=function(index){$scope.events.trigger("slideChange",{index:index}),$timeout((function(){$scope.onSlideMove&&$scope.onSlideMove({index:eval(index)})}),100)},$scope.$on("ngRepeatFinished",(function(e){$scope.events.trigger("ngRepeatFinished",{event:e})}))}}}]);
angular.directives.directive("headerBar",["$ionicHistory","$state",function(a,i){return{restrict:"EAC",priority:102,template:'            <ion-nav-bar align-title="center" class="c-fff bc-balanced">                <ion-nav-back-button class="button-clear">                    <i class="icon c-fff ion-ios-arrow-left"></i>                </ion-nav-back-button>            </ion-nav-bar>',replace:!0,compile:function(a,i){a.addClass(i.class)}}}]);
angular.filters.filter("reportCard",["$filter",function(e){return function(r){for(var t={firstAverage:0,average:0,firstAverageRate:0,averageRate:0,firstStage:[0,0,0,0,0],stage:[0,0,0,0,0],result:{list:[]}},a=0,s=0,n=0,u=0,i=0;i<r.length;i++){for(var c={},l={},o=0;o<r[i].result.length;o++){var f=r[i].result[o];switch(1==r[i].result.length&&(f.type=3),f.type){case 1:c=f,n+=Number(f.score),u+=Number(f.scoreRate),f.scoreRate>=90?t.firstStage[4]+=1:90>f.scoreRate&&f.scoreRate>=80?t.firstStage[3]+=1:80>f.scoreRate&&f.scoreRate>=70?t.firstStage[2]+=1:70>f.scoreRate&&f.scoreRate>=60?t.firstStage[1]+=1:t.firstStage[0]+=1;break;case 2:l=f,a+=Number(f.score),s+=Number(f.scoreRate),f.scoreRate>=90?t.stage[4]+=1:90>f.scoreRate&&f.scoreRate>=80?t.stage[3]+=1:80>f.scoreRate&&f.scoreRate>=70?t.stage[2]+=1:70>f.scoreRate&&f.scoreRate>=60?t.stage[1]+=1:t.stage[0]+=1;break;case 3:c=f,n+=Number(f.score),u+=Number(f.scoreRate),l=f,a+=Number(f.score),s+=Number(f.scoreRate),f.scoreRate>=90?(t.firstStage[4]+=1,t.stage[4]+=1):90>f.scoreRate&&f.scoreRate>=80?(t.firstStage[3]+=1,t.stage[3]+=1):80>f.scoreRate&&f.scoreRate>=70?(t.firstStage[2]+=1,t.stage[2]+=1):70>f.scoreRate&&f.scoreRate>=60?(t.firstStage[1]+=1,t.stage[1]+=1):(t.firstStage[0]+=1,t.stage[0]+=1)}}t.result.list.push({uid:r[i].uid,uname:r[i].uname,number:Number(r[i].number),aeid:l.aeid||c.aeid,score:Number(null==l.score?0:l.score),firstScore:Number(null==c.score?0:c.score),scoreRate:Number(null==l.scoreRate?0:l.scoreRate),firstScoreRate:Number(c.scoreRate?0:c.scoreRate)})}t.result.list=e("orderBy")(t.result.list,"score","reverse");var g={score:t.result.list[0]&&t.result.list[0].score,ranking:1};return angular.forEach(t.result.list,(function(e,r){var a=e.score==g.score?g.ranking:r+1;g={score:e.score,ranking:a},t.result.list[r].ranking=a})),t.firstAverage=n/r.length,t.firstAverageRate=u/r.length,t.average=a/r.length,t.averageRate=s/r.length,t}}]),angular.filters.filter("correctReportCard",["$filter",function(e){return function(r,t){for(var a={stage:[0,0,0,0,0],result:{list:[]}},s=0,n=0,u=r.length,i=0;i<u;i++)s+=Number(r[i].score)||0,n+=Number(r[i].scoreRate)||0,r[i].score>=.9*t?a.stage[4]+=1:.9*t>r[i].score&&r[i].score>=.8*t?a.stage[3]+=1:.8*t>r[i].score&&r[i].score>=.7*t?a.stage[2]+=1:.7*t>r[i].score&&r[i].score>=.6*t?a.stage[1]+=1:a.stage[0]+=1,a.result.list.push({uid:r[i].uid,uname:r[i].uname,number:Number(r[i].number),aeid:r[i].aeid,score:Number(null==r[i].score?0:r[i].score)});a.result.list=e("orderBy")(a.result.list,"score","reverse"),a.result.average=s/u,a.result.averageRate=n/u;var c={score:a.result.list[0]&&a.result.list[0].score,ranking:1};return angular.forEach(a.result.list,(function(e,r){var t=e.score==c.score?c.ranking:r+1;c={score:e.score,ranking:t},a.result.list[r].ranking=t})),a}}]),angular.filters.filter("classReportCard",["$filter",function(e){return function(r){for(var t={average:0,averageRate:0,stage:[0,0,0,0,0],result:{list:[]}},a=0,s=0,n=0;n<r.length;n++)a+=r[n].score,s+=r[n].scoreRate,r[n].scoreRate>=90?t.stage[4]+=1:90>r[n].scoreRate&&r[n].scoreRate>=80?t.stage[3]+=1:80>r[n].scoreRate&&r[n].scoreRate>=70?t.stage[2]+=1:70>r[n].scoreRate&&r[n].scoreRate>=60?t.stage[1]+=1:t.stage[0]+=1,t.result.list.push({uid:r[n].uid,uname:r[n].uname,aeid:r[n].aeid,score:Number(null==r[n].score?0:r[n].score)});t.result.list=e("orderBy")(t.result.list,"score","reverse");var u={score:t.result.list[0]&&t.result.list[0].score,ranking:1};return angular.forEach(t.result.list,(function(e,r){var a=e.score==u.score?u.ranking:r+1;u={score:e.score,ranking:a},t.result.list[r].ranking=a})),t.average=a/r.length,t.averageRate=s/r.length,t}}]),angular.filters.filter("moreChoice",["$filter",function(e){return function(r){for(var t=["A","B","C","D","E","F"],a=0;a<r.item.length;a++)if(r.item[a].option){for(var s="",n=[],u=0;u<r.item[a].option.length;u++)if(1==r.item[a].option[u].isRight){s+=t[u];for(var i=0;i<r.item[a].option[u].member.length;i++)n.push(r.item[a].option[u].member[i])}r.item[a].right=s;var c=[];n=e("orderBy")(n,Number(n.uid));for(var l=[],o=0;o<n.length;o++)n[o].uid==n[o+1].uid?l.push(n[o]):(l.push(n[o]),s.length==l.length&&c.push(n[o]),l=[]);r.item[a].rightMember=c}return r}}]),angular.filters.filter("arrayContain",(function(){return function(e,r,t){var a="button button-small m10 f18 bc-fff b1-ddd";return-1!=r.indexOf(e)&&(6!=t&&r.length>1?a+=" b1-ff0000 c-ff0000":a+=" bc-balanced c-fff"),a}})),angular.filters.filter("threeNumber",(function(){return function(e){var r=String(e);switch(r.length){case 1:r="00"+r;break;case 2:r="0"+r}return r}})),angular.filters.filter("dateStyle",["$filter",function(e){return function(r,t){if(!r)return"";var a=(new Date).getTime(),s=(new Date).getDay(),n=new Date(r).getTime(),u=new Date(r).getDay(),i=new Date(a-864e5).getDay(),c="";if(t){switch(new Date(n).getDay()){case 0:c="星期日";break;case 1:c="星期一";break;case 2:c="星期二";break;case 3:c="星期三";break;case 4:c="星期四";break;case 5:c="星期五";break;case 6:c="星期六";break;default:c="unknown"}return c}switch(!0){case n+864e5>=a&&s==u:c=e("date")(n,"HH:mm");break;case n+1728e5>=a&&i==u:c="昨天";break;case n+6048e5>=a:switch(new Date(n).getDay()){case 0:c="星期日";break;case 1:c="星期一";break;case 2:c="星期二";break;case 3:c="星期三";break;case 4:c="星期四";break;case 5:c="星期五";break;case 6:c="星期六";break;default:c="unknown"}break;default:c=e("date")(n,"M月d日")}return c}}]),angular.filters.filter("getByValue",(function(){return function(e,r,t){var a=null;return angular.forEach(e,(function(e,r){r[e]==t&&(a={key:e,value:r})})),a}})),angular.filters.filter("time",(function(){var e={ss:angular.identity,mm:function(e){return 60*e},hh:function(e){return 3600*e}},r=function(e,r){for(var t=r-(""+e).length,a="";t-- >0;)a+="0";return a+e};return function(t,a,s,n){var u=e[a||"ss"](t),i=Math.floor(u/3600),c=Math.floor(u%3600/60),l=u%60;return s=s||"hh:mm:ss",i=(n=!angular.isDefined(n)||n)?r(i,2):i,c=n?r(c,2):c,l=n?r(l,2):l,s.replace(/hh/,i).replace(/mm/,c).replace(/ss/,l)}})),angular.filters.filter("trustUrl",["$sce",function(e){return function(r){return e.trustAsResourceUrl(r)}}]),angular.filters.filter("trustHtml",["$sce",function(e){return function(r){return(r=String(r)).replace(/<img[^>]*>/gi,(function(e){return e.replace(/style=\"(.*)\"/gi,"")})),e.trustAsHtml(r)}}]),angular.filters.filter("orderObjectBy",(function(){return function(e,r,t){var a=[];return angular.forEach(e,(function(e){a.push(e)})),a.sort((function(e,t){return e[r]>t[r]?1:-1})),t&&a.reverse(),a}})),angular.filters.filter("lineDate",["$filter",function(e){return function(r,t){var a=new Date;return a.getMonth()==new Date(t).getMonth()&&a.getDate()==new Date(t).getDate()?e("date")(r,"HH:mm"):e("date")(r,"MM/dd")}}]),angular.filters.filter("playTime",(function(){return function(e){var r=parseInt(e),t=r%60;return parseInt(r/60)+":"+(t>9?t:"0"+t)}})),angular.filters.filter("transleTxtStyle",["$filter",function(e){return function(e){return 0===e.length?"":e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"')}}]),angular.filters.filter("hideHtml",["$filter",function(e){return function(e){return 0===e.length?"":e.replace(/<\/?.+?>/g,"").replace(/ /g,"")}}]);
angular.directives.directive("recordVoice",["mediaFactory","$interval","$timeout","$filter","$ocLazyLoad","$androidPermission","$prompt",function(e,i,o,c,t,n,r){return{restrict:"EA",templateUrl:"js/directive/recordVoice.html",replace:!0,link:function(r,a,l){var s=l.maxTime;r.rvText="点击录音",r.startStatus=0,r.trashStatus=0;var u,d,v,p,m,f,g,y=a[0].querySelector(".rv-button-start");function h(){if(p){if(u||v||d)return v=0,!1;var t=(new Date).getTime()-g;return t<400?o((function(){e.stopRecord()}),400-t):e.stopRecord(),!1}u=0,v=0,d=!1,r.rvText="准备中",r.startStatus=1,g=(new Date).getTime(),o((function(){m=i((function(){var o=Math.floor(((new Date).getTime()-g)/1e3);o>=s&&r.cancelRecord(),r.trashStatus||(r.rvText=c("time")(o,"ss","mm:ss",!0,!0)),o>=300&&(e.stopRecord(),i.cancel(m))}),1e3),p=1,e.startRecord("ktapp/record").then((function(e){var i;if(console.log(e),1==r.trashStatus||v)return s&&(i=e.duration>1e3*(s-1)),r.recordVoiceCallback&&r.recordVoiceCallback({isOverTime:i,msg:"取消发送"},e),P(),!1;e.duration<1e3?r.recordVoiceCallback&&r.recordVoiceCallback({msg:"录音时间过短"},e):e.duration>=1e3&&r.recordVoiceCallback&&r.recordVoiceCallback(null,e),P()}),(function(e){d=!0,r.recordVoiceCallback&&r.recordVoiceCallback(e,null),P()}))}),100)}function P(){o((function(){r.rvText="点击录音",r.startStatus=0,r.trashStatus=0,p=0})),m&&i.cancel(m)}t.load(["vendor/recorder.mp3.min.js"]).then((function(){})),r.cancelRecord=function(i){i&&i.preventDefault(),v=1,e.stopRecord(),o((function(){v=0}),1e3)},r.clickRecord=function(e){if(e&&e.preventDefault(),window.cordova){var i=cordova.plugins.permissions;n.checkPermission((function(){n.checkPermission((function(){h()}),(function(e){console.log(e),n.openPrompt(n.storage_permission_info)}),[i.WRITE_EXTERNAL_STORAGE])}),(function(e){console.log(e),n.openPrompt(n.audio_permission_info)}),[i.RECORD_AUDIO])}else h()},y.addEventListener("touchmove",(function(e){try{e.preventDefault();var i=e.touches?e.touches[0]:e,o=i.pageX,c=i.pageY;o>f.left-10&&o<f.right+10&&c>f.top-10&&c<f.bottom+10?(r.rvText="松手取消发送",r.trashStatus=1):(r.trashStatus=0,r.rvText=undefined)}catch(e){}}),!1),y.addEventListener("touchend",(function(e){})),y.addEventListener("touchcancel",(function(i){if(i.preventDefault(),u||d)return!1;var c=(new Date).getTime()-g;v=1,c<200?o((function(){console.log("touchcancel <200 停止录音"),e.stopRecord()}),200-c):(console.log("touchcancel >200 停止录音"),e.stopRecord())}),!1)}}}]),angular.stopVoices=function(){angular.forEach(document.querySelectorAll(".voice-play"),(function(e,i){var o=e.querySelector("audio");e.isPlay=!1,o.pause()}))},angular.directives.directive("voicePlay",["$timeout",function(e){return{restrict:"EA",template:'<div><div class="voice-play" ng-click="playAudio()"><audio></audio><img src="img/voice/voice-icon.png"/></div><span>{{duration}}"</span></div>',replace:!0,link:function(i,o,c){var t=o[0].querySelector("audio"),n=o[0].querySelector(".voice-play"),r=o[0].querySelector("img");n.isPlay=!1,i.duration=Math.round(c.duration/1e3)||0,i.playAudio=function(){n.isPlay?(n.isPlay=!1,t.pause(),r.src="img/voice/voice-icon.png"):(angular.stopVoices(),n.isPlay=!0,t.src=c.src,t.play(),r.src="img/voice/voice-play-icon.gif")},t.onpause=t.onended=t.onerror=function(){n.isPlay&&e((function(){n.isPlay=!1,r.src="img/voice/voice-icon.png"}))}}}}]),angular.directives.directive("audioPlay",["$timeout",function(e){return{restrict:"EA",template:'<div><div class="center h" ng-click="playAudio($event)"><audio></audio><div><img class="w40" src="img/voice/audio-normal.png"/><p class="center c-fff mt2">{{duration}}</p></div></div></div>',replace:!0,link:function(i,o,c){var t=o[0].querySelector("audio"),n=o[0].querySelector("img"),r={isPlay:!1},a=Math.ceil(c.duration/1e3)||0;if(a>0){var l=Math.floor(a/60),s=Math.floor(a%60);i.duration=(l>=10?l:"0"+l)+":"+(s>=10?s:"0"+s)}else i.duration="00:00";i.playAudio=function(e){e.stopPropagation(),r.isPlay?(r.isPlay=!1,t.pause(),n.src="img/voice/audio-normal.png"):(angular.stopVoices(),r.isPlay=!0,t.src=c.src,t.play(),n.src="img/voice/audio-play.gif")},t.onended=t.onerror=function(){r.isPlay&&e((function(){r.isPlay=!1,n.src="img/voice/audio-normal.png"}))}}}}]),angular.directives.directive("voiceParse",["$timeout",function(e){return{restrict:"A",compile:function(){return{post:function(i,o,c){var t=c.voiceParse;e((function(){angular.forEach(o[0].querySelectorAll("audio"),(function(i,o){var c=i.getAttribute("duration"),n=i.getAttribute("src"),r=document.createElement("div"),a=document.createElement("div"),l=document.createElement("audio"),s=document.createElement("img"),u=document.createElement("span");r.appendChild(a),r.appendChild(u),a.appendChild(l),a.appendChild(s),r.className="voice-content",1!=t?(r.className+=" voice-content-2",s.src="img/voice/voice2-icon.png"):s.src="img/voice/voice-icon.png",a.className="voice-play",a.className+=" p10",a.isPlay=!1,u.innerHTML=Math.round(c/1e3)+'"',a.onclick=function(){this.isPlay?(this.isPlay=!1,l.pause(),s.src=1!=t?"img/voice/voice2-icon.png":"img/voice/voice-icon.png"):(angular.stopVoices(),this.isPlay=!0,l.src=n,l.play(),s.src=1!=t?"img/voice/voice2-play-icon.gif":"img/voice/voice-play-icon.gif")},l.onpause=l.onended=l.onerror=function(){a.isPlay&&e((function(){a.isPlay=!1,s.src=1!=t?"img/voice/voice2-icon.png":"img/voice/voice-icon.png"}))},i.parentNode.replaceChild(r,i)}))}))}}}}}]);
/*
  angular-md5 - v0.1.7 
  2014-01-20
*/

!function(a,b){b.module("angular-md5",["gdi2290.md5"]),b.module("ngMd5",["gdi2290.md5"]),b.module("gdi2290.md5",["gdi2290.gravatar-filter","gdi2290.md5-service","gdi2290.md5-filter"]),b.module("gdi2290.gravatar-filter",[]).filter("gravatar",["md5",function(a){var b={};return function(c,d){return b[c]||(d=d?a.createHash(d.toString().toLowerCase()):"",b[c]=c?a.createHash(c.toString().toLowerCase()):d),b[c]}}]),b.module("gdi2290.md5-filter",[]).filter("md5",["md5",function(a){return function(b){return b?a.createHash(b.toString().toLowerCase()):b}}]),b.module("gdi2290.md5-service",[]).factory("md5",[function(){var a={createHash:function(a){var b,c,d,e,f,g,h,i,j,k,l=function(a,b){return a<<b|a>>>32-b},m=function(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f},n=function(a,b,c){return a&b|~a&c},o=function(a,b,c){return a&c|b&~c},p=function(a,b,c){return a^b^c},q=function(a,b,c){return b^(a|~c)},r=function(a,b,c,d,e,f,g){return a=m(a,m(m(n(b,c,d),e),g)),m(l(a,f),b)},s=function(a,b,c,d,e,f,g){return a=m(a,m(m(o(b,c,d),e),g)),m(l(a,f),b)},t=function(a,b,c,d,e,f,g){return a=m(a,m(m(p(b,c,d),e),g)),m(l(a,f),b)},u=function(a,b,c,d,e,f,g){return a=m(a,m(m(q(b,c,d),e),g)),m(l(a,f),b)},v=function(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g},w=function(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d},x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(x=v(a),h=1732584193,i=4023233417,j=2562383102,k=271733878,b=x.length,c=0;b>c;c+=16)d=h,e=i,f=j,g=k,h=r(h,i,j,k,x[c+0],y,3614090360),k=r(k,h,i,j,x[c+1],z,3905402710),j=r(j,k,h,i,x[c+2],A,606105819),i=r(i,j,k,h,x[c+3],B,3250441966),h=r(h,i,j,k,x[c+4],y,4118548399),k=r(k,h,i,j,x[c+5],z,1200080426),j=r(j,k,h,i,x[c+6],A,2821735955),i=r(i,j,k,h,x[c+7],B,4249261313),h=r(h,i,j,k,x[c+8],y,1770035416),k=r(k,h,i,j,x[c+9],z,2336552879),j=r(j,k,h,i,x[c+10],A,4294925233),i=r(i,j,k,h,x[c+11],B,2304563134),h=r(h,i,j,k,x[c+12],y,1804603682),k=r(k,h,i,j,x[c+13],z,4254626195),j=r(j,k,h,i,x[c+14],A,2792965006),i=r(i,j,k,h,x[c+15],B,1236535329),h=s(h,i,j,k,x[c+1],C,4129170786),k=s(k,h,i,j,x[c+6],D,3225465664),j=s(j,k,h,i,x[c+11],E,643717713),i=s(i,j,k,h,x[c+0],F,3921069994),h=s(h,i,j,k,x[c+5],C,3593408605),k=s(k,h,i,j,x[c+10],D,38016083),j=s(j,k,h,i,x[c+15],E,3634488961),i=s(i,j,k,h,x[c+4],F,3889429448),h=s(h,i,j,k,x[c+9],C,568446438),k=s(k,h,i,j,x[c+14],D,3275163606),j=s(j,k,h,i,x[c+3],E,4107603335),i=s(i,j,k,h,x[c+8],F,1163531501),h=s(h,i,j,k,x[c+13],C,2850285829),k=s(k,h,i,j,x[c+2],D,4243563512),j=s(j,k,h,i,x[c+7],E,1735328473),i=s(i,j,k,h,x[c+12],F,2368359562),h=t(h,i,j,k,x[c+5],G,4294588738),k=t(k,h,i,j,x[c+8],H,2272392833),j=t(j,k,h,i,x[c+11],I,1839030562),i=t(i,j,k,h,x[c+14],J,4259657740),h=t(h,i,j,k,x[c+1],G,2763975236),k=t(k,h,i,j,x[c+4],H,1272893353),j=t(j,k,h,i,x[c+7],I,4139469664),i=t(i,j,k,h,x[c+10],J,3200236656),h=t(h,i,j,k,x[c+13],G,681279174),k=t(k,h,i,j,x[c+0],H,3936430074),j=t(j,k,h,i,x[c+3],I,3572445317),i=t(i,j,k,h,x[c+6],J,76029189),h=t(h,i,j,k,x[c+9],G,3654602809),k=t(k,h,i,j,x[c+12],H,3873151461),j=t(j,k,h,i,x[c+15],I,530742520),i=t(i,j,k,h,x[c+2],J,3299628645),h=u(h,i,j,k,x[c+0],K,4096336452),k=u(k,h,i,j,x[c+7],L,1126891415),j=u(j,k,h,i,x[c+14],M,2878612391),i=u(i,j,k,h,x[c+5],N,4237533241),h=u(h,i,j,k,x[c+12],K,1700485571),k=u(k,h,i,j,x[c+3],L,2399980690),j=u(j,k,h,i,x[c+10],M,4293915773),i=u(i,j,k,h,x[c+1],N,2240044497),h=u(h,i,j,k,x[c+8],K,1873313359),k=u(k,h,i,j,x[c+15],L,4264355552),j=u(j,k,h,i,x[c+6],M,2734768916),i=u(i,j,k,h,x[c+13],N,1309151649),h=u(h,i,j,k,x[c+4],K,4149444226),k=u(k,h,i,j,x[c+11],L,3174756917),j=u(j,k,h,i,x[c+2],M,718787259),i=u(i,j,k,h,x[c+9],N,3951481745),h=m(h,d),i=m(i,e),j=m(j,f),k=m(k,g);var O=w(h)+w(i)+w(j)+w(k);return O.toLowerCase()}};return a}])}(this,this.angular,void 0);
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.loki=e()}(this,function(){return function(){"use strict";function t(t,e,i){return t&&e&&t!==!0&&e!==!0?e>t?!0:t>e?!1:i:t!==!0&&t!==!1||e!==!0&&e!==!1?void 0===e||null===e||t===!0||e===!1?i:void 0===t||null===t||t===!1||e===!0?!0:e>t?!0:t>e?!1:i:i?t===e:t?!1:e}function e(t,e,i){return t&&e&&t!==!0&&e!==!0?t>e?!0:e>t?!1:i:t!==!0&&t!==!1||e!==!0&&e!==!1?void 0===t||null===t||t===!1||e===!0?i:void 0===e||null===e||t===!0||e===!1?!0:t>e?!0:e>t?!1:i:i?t===e:t?!e:!1}function i(i,n,r){return i===n?0:t(i,n,!1)?r?1:-1:e(i,n,!1)?r?-1:1:0}function n(t,e,n){for(var r,o,s=0,a=0,l=t.length;l>a;a++)if(r=t[a],o=r[0],s=i(e[o],n[o],r[1]),0!==s)return s;return 0}function r(t,e,i,n){for(var o=null,s=0,a=0,l=null,u=0,c=e.length;c>u;u++){if(o=e[u],void 0===t||null===t||!N.call(t,o))return!1;if(Array.isArray(t)){if(a=t.length,c>u+1){for(l=e.slice(u+1),s=0;a>s;s++)if(r(t[s],l,i,n))return!0}else for(s=0;a>s;s++)if(i(t[s][o],n))return!0;return!1}t=t[o]}return i(t,n)}function o(t){return"string"==typeof t||Array.isArray(t)?function(e){return-1!==t.indexOf(e)}:"object"==typeof t?function(e){return N.call(t,e)}:void 0}function s(t,e){for(var i in e)if(N.call(e,i))return j[i](t,e[i]);return!1}function a(t,e){var i,n=e||"parse-stringify";switch(n){case"parse-stringify":i=JSON.parse(JSON.stringify(t));break;case"jquery-extend-deep":i=jQuery.extend(!0,{},t);break;case"shallow":i=Object.create(t.prototype||null),Object.keys(t).map(function(e){i[e]=t[e]})}return i}function l(t,e){var i,n=[];if("parse-stringify"==e)return a(t,e);for(i=t.length-1;0>=i;i--)n.push(a(t[i],e));return n}function u(){try{return window&&void 0!==window.localStorage&&null!==window.localStorage}catch(t){return!1}}function c(){}function h(t,e){this.filename=t||"loki.db",this.collections=[],this.databaseVersion=1.1,this.engineVersion=1.1,this.autosave=!1,this.autosaveInterval=5e3,this.autosaveHandle=null,this.options={},this.persistenceMethod=null,this.persistenceAdapter=null,this.verbose=e&&e.hasOwnProperty("verbose")?e.verbose:!1,this.events={init:[],loaded:[],flushChanges:[],close:[],changes:[],warning:[]};var i=function(){return"undefined"==typeof window?"NODEJS":"undefined"!=typeof global&&global.window?"NODEJS":"undefined"!=typeof document?-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")?"CORDOVA":"BROWSER":"CORDOVA"};e&&e.hasOwnProperty("env")?this.ENV=e.env:this.ENV=i(),"undefined"===this.ENV&&(this.ENV="NODEJS"),this.configureOptions(e,!0),this.on("init",this.clearChanges)}function f(){this.fs=require("fs")}function d(){}function p(t,e){return e=e||{},e.queryObj=e.queryObj||null,e.queryFunc=e.queryFunc||null,e.firstOnly=e.firstOnly||!1,this.collection=t,this.searchIsChained=!e.queryObj&&!e.queryFunc,this.filteredrows=[],this.filterInitialized=!1,"undefined"!=typeof e.queryObj&&null!==e.queryObj?this.find(e.queryObj,e.firstOnly):"undefined"!=typeof e.queryFunc&&null!==e.queryFunc?this.where(e.queryFunc):this}function y(t,e,i){this.collection=t,this.name=e,this.rebuildPending=!1,this.options=i||{},this.options.hasOwnProperty("persistent")||(this.options.persistent=!1),this.options.hasOwnProperty("sortPriority")||(this.options.sortPriority="passive"),this.options.hasOwnProperty("minRebuildInterval")||(this.options.minRebuildInterval=1),this.resultset=new p(t),this.resultdata=[],this.resultsdirty=!1,this.cachedresultset=null,this.filterPipeline=[],this.sortFunction=null,this.sortCriteria=null,this.sortDirty=!1,this.events={rebuild:[]}}function v(t,e){function i(t){var e="function"==typeof Set?new Set:[];e.add||(e.add=function(t){return-1===this.indexOf(t)&&this.push(t),this}),t.forEach(function(t){e.add(t.object)}),e.forEach(function(t){if(!N.call(t,"$loki"))return f.removeAutoUpdateObserver(t);try{f.update(t)}catch(e){}})}function n(t,e,i){f.changes.push({name:t,operation:e,obj:JSON.parse(JSON.stringify(i))})}function r(){f.changes=[]}function o(t){t&&(t.meta||(t.meta={}),t.meta.created=(new Date).getTime(),t.meta.revision=0)}function s(t){t&&(t.meta.updated=(new Date).getTime(),t.meta.revision+=1)}function a(t){n(f.name,"I",t)}function l(t){n(f.name,"U",t)}function u(t){o(t),a(t)}function c(t){s(t),l(t)}function h(){y=f.disableChangesApi?o:u,v=f.disableChangesApi?s:c}this.name=t,this.data=[],this.idIndex=[],this.binaryIndices={},this.constraints={unique:{},exact:{}},this.uniqueNames=[],this.transforms={},this.objType=t,this.dirty=!0,this.cachedIndex=null,this.cachedBinaryIndex=null,this.cachedData=null;var f=this;e=e||{},e.hasOwnProperty("unique")&&(Array.isArray(e.unique)||(e.unique=[e.unique]),e.unique.forEach(function(t){f.uniqueNames.push(t),f.constraints.unique[t]=new A(t)})),e.hasOwnProperty("exact")&&e.exact.forEach(function(t){f.constraints.exact[t]=new S(t)}),this.transactional=e.hasOwnProperty("transactional")?e.transactional:!1,this.cloneObjects=e.hasOwnProperty("clone")?e.clone:!1,this.cloneMethod=e.hasOwnProperty("clonemethod")?e.cloneMethod:"parse-stringify",this.asyncListeners=e.hasOwnProperty("asyncListeners")?e.asyncListeners:!1,this.disableChangesApi=e.hasOwnProperty("disableChangesApi")?e.disableChangesApi:!0,this.autoupdate=e.hasOwnProperty("autoupdate")?e.autoupdate:!1,this.ttl={age:null,ttlInterval:null,daemon:null},this.setTTL(e.ttl||-1,e.ttlInterval),this.maxId=0,this.DynamicViews=[],this.events={insert:[],update:[],"pre-insert":[],"pre-update":[],close:[],flushbuffer:[],error:[],"delete":[],warning:[]},this.changes=[],this.ensureId();var d=[];if(e&&e.indices)if("[object Array]"===Object.prototype.toString.call(e.indices))d=e.indices;else{if("string"!=typeof e.indices)throw new TypeError("Indices needs to be a string or an array of strings");d=[e.indices]}for(var p=0;p<d.length;p++)this.ensureIndex(d[p]);this.observerCallback=i,this.getChanges=function(){return f.changes},this.flushChanges=r;var y,v;h(),this.setChangesApi=function(t){f.disableChangesApi=!t,h()},this.on("insert",function(t){y(t)}),this.on("update",function(t){v(t)}),this.on("delete",function(t){f.disableChangesApi||n(f.name,"R",t)}),this.on("warning",function(t){f.console.warn(t)}),r()}function g(t){return-1!==t.indexOf(".")}function m(t){return parseFloat(t,10)}function b(t,e){return t+e}function w(t,e){return t-e}function I(t){return t.reduce(b,0)/t.length}function O(t){var e=I(t),i=t.map(function(t){var i=t-e,n=i*i;return n}),n=I(i),r=Math.sqrt(n);return r}function k(t,e,i){if(i===!1)return t[e];for(var n=e.split("."),r=t;n.length>0;)r=r[n.shift()];return r}function x(t,e,i){for(var n,r,o=0,s=t.length;s>o;){if(r=o+s>>1,n=i.apply(null,[e,t[r]]),0===n)return{found:!0,index:r};0>n?s=r:o=r+1}return{found:!1,index:s}}function D(t){return function(e,i){return x(e,i,t)}}function C(){}function A(t){this.field=t,this.keyMap={},this.lokiMap={}}function S(t){this.index={},this.field=t}function E(t){this.field=t}var N=Object.prototype.hasOwnProperty,P={copyProperties:function(t,e){var i;for(i in t)e[i]=t[i]},resolveTransformObject:function(t,e,i){var n,r;if("number"!=typeof i&&(i=0),++i>=10)return t;for(n in t)"string"==typeof t[n]&&0===t[n].indexOf("[%lktxp]")?(r=t[n].substring(8),e.hasOwnProperty(r)&&(t[n]=e[r])):"object"==typeof t[n]&&(t[n]=P.resolveTransformObject(t[n],e,i));return t},resolveTransformParams:function(t,e){var i,n,r=[];if("undefined"==typeof e)return t;for(i=0;i<t.length;i++)n=JSON.parse(JSON.stringify(t[i])),r.push(P.resolveTransformObject(n,e));return r}},j={$eq:function(t,e){return t===e},$ne:function(t,e){return t!==e},$dteq:function(i,n){return t(i,n,!1)?!1:!e(i,n,!1)},$gt:function(t,i){return e(t,i,!1)},$gte:function(t,i){return e(t,i,!0)},$lt:function(e,i){return t(e,i,!1)},$lte:function(e,i){return t(e,i,!0)},$in:function(t,e){return-1!==e.indexOf(t)},$nin:function(t,e){return-1===e.indexOf(t)},$keyin:function(t,e){return t in e},$nkeyin:function(t,e){return!(t in e)},$definedin:function(t,e){return void 0!==e[t]},$undefinedin:function(t,e){return void 0===e[t]},$regex:function(t,e){return e.test(t)},$containsString:function(t,e){return"string"==typeof t&&-1!==t.indexOf(e)},$containsNone:function(t,e){return!j.$containsAny(t,e)},$containsAny:function(t,e){var i;return Array.isArray(e)||(e=[e]),i=o(t)||function(){return!1},e.reduce(function(t,e){return t?t:i(e)},!1)},$contains:function(t,e){var i;return Array.isArray(e)||(e=[e]),i=o(t)||function(){return!1},e.reduce(function(t,e){return t?i(e):t},!0)},$type:function(t,e){var i=typeof t;return"object"===i&&(Array.isArray(t)?i="array":t instanceof Date&&(i="date")),"object"!=typeof e?i===e:s(i,e)},$size:function(t,e){return Array.isArray(t)?"object"!=typeof e?t.length===e:s(t.length,e):!1},$len:function(t,e){return"string"==typeof t?"object"!=typeof e?t.length===e:s(t.length,e):!1},$not:function(t,e){return!s(t,e)},$and:function(t,e){for(var i=0,n=e.length;n>i;i+=1)if(!s(t,e[i]))return!1;return!0},$or:function(t,e){for(var i=0,n=e.length;n>i;i+=1)if(s(t,e[i]))return!0;return!1}},q=["$eq","$dteq","$gt","$gte","$lt","$lte"];return c.prototype.events={},c.prototype.asyncListeners=!1,c.prototype.on=function(t,e){var i=this.events[t];return i||(i=this.events[t]=[]),i.push(e),e},c.prototype.emit=function(t,e){var i=this;if(!t||!this.events[t])throw new Error("No event "+t+" defined");this.events[t].forEach(function(t){i.asyncListeners?setTimeout(function(){t(e)},1):t(e)})},c.prototype.removeListener=function(t,e){if(this.events[t]){var i=this.events[t];i.splice(i.indexOf(e),1)}},h.prototype=new c,h.prototype.getIndexedAdapter=function(){var t;return"function"==typeof require&&(t=require("./loki-indexed-adapter.js")),t},h.prototype.configureOptions=function(t,e){var i={NODEJS:"fs",BROWSER:"localStorage",CORDOVA:"localStorage"},n={fs:f,localStorage:d};if(this.options={},this.persistenceMethod=null,this.persistenceAdapter=null,"undefined"!=typeof t){if(this.options=t,this.options.hasOwnProperty("persistenceMethod")&&"function"==typeof n[t.persistenceMethod]&&(this.persistenceMethod=t.persistenceMethod,this.persistenceAdapter=new n[t.persistenceMethod]),this.options.hasOwnProperty("adapter")&&(this.persistenceMethod="adapter",this.persistenceAdapter=t.adapter,this.options.adapter=null),t.autoload&&e){var r=this;setTimeout(function(){r.loadDatabase(t,t.autoloadCallback)},1)}this.options.hasOwnProperty("autosaveInterval")&&(this.autosaveDisable(),this.autosaveInterval=parseInt(this.options.autosaveInterval,10)),this.options.hasOwnProperty("autosave")&&this.options.autosave&&(this.autosaveDisable(),this.autosave=!0,this.options.hasOwnProperty("autosaveCallback")?this.autosaveEnable(t,t.autosaveCallback):this.autosaveEnable())}null===this.persistenceAdapter&&(this.persistenceMethod=i[this.ENV],this.persistenceMethod&&(this.persistenceAdapter=new n[this.persistenceMethod]))},h.prototype.anonym=function(t,e){var i=new v("anonym",e);return i.insert(t),this.verbose&&(i.console=console),i},h.prototype.addCollection=function(t,e){var i=new v(t,e);return this.collections.push(i),this.verbose&&(i.console=console),i},h.prototype.loadCollection=function(t){if(!t.name)throw new Error("Collection must have a name property to be loaded");this.collections.push(t)},h.prototype.getCollection=function(t){var e,i=this.collections.length;for(e=0;i>e;e+=1)if(this.collections[e].name===t)return this.collections[e];return this.emit("warning","collection "+t+" not found"),null},h.prototype.listCollections=function(){for(var t=this.collections.length,e=[];t--;)e.push({name:this.collections[t].name,type:this.collections[t].objType,count:this.collections[t].data.length});return e},h.prototype.removeCollection=function(t){var e,i=this.collections.length;for(e=0;i>e;e+=1)if(this.collections[e].name===t){var n=new v(t,{}),r=this.collections[e];for(var o in r)r.hasOwnProperty(o)&&n.hasOwnProperty(o)&&(r[o]=n[o]);return void this.collections.splice(e,1)}},h.prototype.getName=function(){return this.name},h.prototype.serializeReplacer=function(t,e){switch(t){case"autosaveHandle":case"persistenceAdapter":case"constraints":return null;default:return e}},h.prototype.serialize=function(){return JSON.stringify(this,this.serializeReplacer)},h.prototype.toJson=h.prototype.serialize,h.prototype.loadJSON=function(t,e){var i;i=0===t.length?{}:JSON.parse(t),this.loadJSONObject(i,e)},h.prototype.loadJSONObject=function(t,e){var i,n,r,o,s=0,a=t.collections?t.collections.length:0;for(this.name=t.name,this.databaseVersion=1,t.hasOwnProperty("databaseVersion")&&(this.databaseVersion=t.databaseVersion),this.collections=[],s;a>s;s+=1){if(i=t.collections[s],n=this.addCollection(i.name),n.transactional=i.transactional,n.asyncListeners=i.asyncListeners,n.disableChangesApi=i.disableChangesApi,n.cloneObjects=i.cloneObjects,n.cloneMethod=i.cloneMethod||"parse-stringify",n.autoupdate=i.autoupdate,r=i.data.length,o=0,e&&e.hasOwnProperty(i.name)){var l=e[i.name].inflate?e[i.name].inflate:P.copyProperties;for(o;r>o;o++){var u=new e[i.name].proto;l(i.data[o],u),n.data[o]=u,n.addAutoUpdateObserver(u)}}else for(o;r>o;o++)n.data[o]=i.data[o],n.addAutoUpdateObserver(n.data[o]);if(n.maxId=0===i.data.length?0:i.maxId,n.idIndex=i.idIndex,"undefined"!=typeof i.binaryIndices&&(n.binaryIndices=i.binaryIndices),"undefined"!=typeof i.transforms&&(n.transforms=i.transforms),n.ensureId(),n.uniqueNames=[],i.hasOwnProperty("uniqueNames"))for(n.uniqueNames=i.uniqueNames,o=0;o<n.uniqueNames.length;o++)n.ensureUniqueIndex(n.uniqueNames[o]);if("undefined"!=typeof i.DynamicViews)for(var c=0;c<i.DynamicViews.length;c++){var h=i.DynamicViews[c],f=n.addDynamicView(h.name,h.options);f.resultdata=h.resultdata,f.resultsdirty=h.resultsdirty,f.filterPipeline=h.filterPipeline,f.sortCriteria=h.sortCriteria,f.sortFunction=null,f.sortDirty=h.sortDirty,f.resultset.filteredrows=h.resultset.filteredrows,f.resultset.searchIsChained=h.resultset.searchIsChained,f.resultset.filterInitialized=h.resultset.filterInitialized,f.rematerialize({removeWhereFilters:!0})}}},h.prototype.close=function(t){this.autosave&&(this.autosaveDisable(),this.autosaveDirty()&&(this.saveDatabase(t),t=void 0)),t&&this.on("close",t),this.emit("close")},h.prototype.generateChangesNotification=function(t){function e(t){return t.name}var i=[],n=t||this.collections.map(e);return this.collections.forEach(function(t){-1!==n.indexOf(e(t))&&(i=i.concat(t.getChanges()))}),i},h.prototype.serializeChanges=function(t){return JSON.stringify(this.generateChangesNotification(t))},h.prototype.clearChanges=function(){this.collections.forEach(function(t){t.flushChanges&&t.flushChanges()})},f.prototype.loadDatabase=function(t,e){this.fs.readFile(t,{encoding:"utf8"},function(t,i){e(t?new Error(t):i)})},f.prototype.saveDatabase=function(t,e,i){this.fs.writeFile(t,e,i)},f.prototype.deleteDatabase=function(t,e){this.fs.unlink(t,function(t){t?e(new Error(t)):e()})},d.prototype.loadDatabase=function(t,e){e(u()?localStorage.getItem(t):new Error("localStorage is not available"))},d.prototype.saveDatabase=function(t,e,i){u()?(localStorage.setItem(t,e),i(null)):i(new Error("localStorage is not available"))},d.prototype.deleteDatabase=function(t,e){u()?(localStorage.removeItem(t),e(null)):e(new Error("localStorage is not available"))},h.prototype.loadDatabase=function(t,e){var i=e||function(t,e){if(t)throw t},n=this;null!==this.persistenceAdapter?this.persistenceAdapter.loadDatabase(this.filename,function(e){if("string"==typeof e){var r=!1;try{n.loadJSON(e,t||{}),r=!0}catch(o){i(o)}r&&(i(null),n.emit("loaded","database "+n.filename+" loaded"))}else"object"!=typeof e||null===e||e instanceof Error?i(e):(n.loadJSONObject(e,t||{}),i(null),n.emit("loaded","database "+n.filename+" loaded"))}):i(new Error("persistenceAdapter not configured"))},h.prototype.saveDatabase=function(t){var e=t||function(t){if(t)throw t},i=this;null!==this.persistenceAdapter?"reference"===this.persistenceAdapter.mode&&"function"==typeof this.persistenceAdapter.exportDatabase?this.persistenceAdapter.exportDatabase(this.filename,this,function(t){i.autosaveClearFlags(),e(t)}):this.persistenceAdapter.saveDatabase(this.filename,i.serialize(),function(t){i.autosaveClearFlags(),e(t)}):e(new Error("persistenceAdapter not configured"))},h.prototype.save=h.prototype.saveDatabase,h.prototype.deleteDatabase=function(t,e){var i=e||function(t,e){if(t)throw t};null!==this.persistenceAdapter?this.persistenceAdapter.deleteDatabase(this.filename,function(t){i(t)}):i(new Error("persistenceAdapter not configured"))},h.prototype.autosaveDirty=function(){for(var t=0;t<this.collections.length;t++)if(this.collections[t].dirty)return!0;return!1},h.prototype.autosaveClearFlags=function(){for(var t=0;t<this.collections.length;t++)this.collections[t].dirty=!1},h.prototype.autosaveEnable=function(t,e){this.autosave=!0;var i=5e3,n=this;"undefined"!=typeof this.autosaveInterval&&null!==this.autosaveInterval&&(i=this.autosaveInterval),this.autosaveHandle=setInterval(function(){n.autosaveDirty()&&n.saveDatabase(e)},i)},h.prototype.autosaveDisable=function(){"undefined"!=typeof this.autosaveHandle&&null!==this.autosaveHandle&&(clearInterval(this.autosaveHandle),this.autosaveHandle=null)},p.prototype.reset=function(){return this.filteredrows.length>0&&(this.filteredrows=[]),this.filterInitialized=!1,this},p.prototype.toJSON=function(){var t=this.copy();return t.collection=null,t},p.prototype.limit=function(t){this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex());var e=new p(this.collection);return e.filteredrows=this.filteredrows.slice(0,t),e.filterInitialized=!0,e},p.prototype.offset=function(t){this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex());var e=new p(this.collection);return e.filteredrows=this.filteredrows.slice(t),e.filterInitialized=!0,e},p.prototype.copy=function(){var t=new p(this.collection);return this.filteredrows.length>0&&(t.filteredrows=this.filteredrows.slice()),t.filterInitialized=this.filterInitialized,t},p.prototype.branch=p.prototype.copy,p.prototype.transform=function(t,e){var i,n,r=this;if("string"==typeof t&&this.collection.transforms.hasOwnProperty(t)&&(t=this.collection.transforms[t]),"object"!=typeof t||!Array.isArray(t))throw new Error("Invalid transform");for("undefined"!=typeof e&&(t=P.resolveTransformParams(t,e)),i=0;i<t.length;i++)switch(n=t[i],n.type){case"find":r.find(n.value);break;case"where":r.where(n.value);break;case"simplesort":r.simplesort(n.property,n.desc);break;case"compoundsort":r.compoundsort(n.value);break;case"sort":r.sort(n.value);break;case"limit":r=r.limit(n.value);break;case"offset":r=r.offset(n.value);break;case"map":r=r.map(n.value);break;case"eqJoin":r=r.eqJoin(n.joinData,n.leftJoinKey,n.rightJoinKey,n.mapFun);break;case"mapReduce":r=r.mapReduce(n.mapFunction,n.reduceFunction);break;case"update":r.update(n.value);break;case"remove":r.remove()}return r},p.prototype.sort=function(t){this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex());var e=function(t,e){return function(i,n){return t(e[i],e[n])}}(t,this.collection.data);return this.filteredrows.sort(e),this},p.prototype.simplesort=function(t,e){this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex()),"undefined"==typeof e&&(e=!1);var n=function(t,e,n){return function(r,o){return i(n[r][t],n[o][t],e)}}(t,e,this.collection.data);return this.filteredrows.sort(n),this},p.prototype.compoundsort=function(t){if(0===t.length)throw new Error("Invalid call to compoundsort, need at least one property");var e;if(1===t.length)return e=t[0],Array.isArray(e)?this.simplesort(e[0],e[1]):this.simplesort(e,!1);for(var i=0,r=t.length;r>i;i+=1)e=t[i],Array.isArray(e)||(t[i]=[e,!1]);this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex());var o=function(t,e){return function(i,r){return n(t,e[i],e[r])}}(t,this.collection.data);return this.filteredrows.sort(o),this},p.prototype.calculateRange=function(i,n,r){var o=this.collection.data,s=this.collection.binaryIndices[n].values,a=0,l=s.length-1,u=0;if(0===o.length)return[0,-1];var c=o[s[a]][n],h=o[s[l]][n];switch(i){case"$eq":if(t(r,c,!1)||e(r,h,!1))return[0,-1];break;case"$dteq":if(t(r,c,!1)||e(r,h,!1))return[0,-1];break;case"$gt":if(e(r,h,!0))return[0,-1];break;case"$gte":if(e(r,h,!1))return[0,-1];break;case"$lt":if(t(r,c,!0))return[0,-1];if(t(h,r,!1))return[0,o.length-1];break;case"$lte":if(t(r,c,!1))return[0,-1];if(t(h,r,!0))return[0,o.length-1]}for(;l>a;)u=a+l>>1,t(o[s[u]][n],r,!1)?a=u+1:l=u;var f=a;for(l=s.length-1;l>a;)u=a+l>>1,t(r,o[s[u]][n],!1)?l=u:a=u+1;var d=l,p=o[s[f]][n],y=o[s[d]][n];switch(i){case"$eq":return p!==r?[0,-1]:(y!==r&&d--,[f,d]);case"$dteq":return p>r||r>p?[0,-1]:((y>r||r>y)&&d--,[f,d]);case"$gt":return t(y,r,!0)?[0,-1]:[d,o.length-1];case"$gte":return t(p,r,!1)?[0,-1]:[f,o.length-1];case"$lt":return 0===f&&t(p,r,!1)?[0,0]:[0,f-1];case"$lte":return y!==r&&d--,0===d&&t(y,r,!1)?[0,0]:[0,d];default:return[0,o.length-1]}},p.prototype.findOr=function(t){for(var e=null,i=0,n=0,r=[],o=[],s=0,a=this.count(),l=0,u=t.length;u>l;l++){if(e=this.branch().find(t[l]).filteredrows,n=e.length,n===a)return this;for(i=0;n>i;i++)s=e[i],void 0===o[s]&&(o[s]=!0,r.push(s))}return this.filteredrows=r,this.filterInitialized=!0,this},p.prototype.$or=p.prototype.findOr,p.prototype.findAnd=function(t){for(var e=0,i=t.length;i>e;e++){if(0===this.count())return this;this.find(t[e])}return this},p.prototype.$and=p.prototype.findAnd,p.prototype.find=function(t,e){if(0===this.collection.data.length)return this.searchIsChained?(this.filteredrows=[],this.filterInitialized=!0,this):[];var i,n,o,s,a,l,u=t||"getAll",c=!1,h=[],f=null;if(e=e||!1,"object"==typeof u)for(i in u)if(N.call(u,i)){n=i,o=u[i];break}if(!n||"getAll"===u)return this.searchIsChained?this:this.collection.data.slice();if("$and"===n||"$or"===n)return this.searchIsChained?(this[n](o),e&&this.filteredrows.length>1&&(this.filteredrows=this.filteredrows.slice(0,1)),this):(h=this.collection.chain()[n](o).data(),e?0===h.length?[]:h[0]:h);if(null===o||"object"!=typeof o||o instanceof Date)s="$eq",a=o;else{if("object"!=typeof o)throw new Error("Do not know what you want to do.");for(l in o)if(N.call(o,l)){s=l,a=o[l];break}}"$regex"===s&&(Array.isArray(a)?a=new RegExp(a[0],a[1]):a instanceof RegExp||(a=new RegExp(a)));var d=-1!==n.indexOf("."),p=!(d||this.searchIsChained&&this.filterInitialized);p&&this.collection.binaryIndices[n]&&-1!==q.indexOf(s)&&(this.collection.ensureIndex(n),c=!0,f=this.collection.binaryIndices[n]);var y=j[s],v=this.collection.data,g=0;if(!this.searchIsChained){if(c){var m=this.calculateRange(s,n,a);if(e)return-1!==m[1]?v[f.values[m[0]]]:[];for(g=m[0];g<=m[1];g++)h.push(v[f.values[g]])}else{if(g=v.length,e){if(d){for(n=n.split(".");g--;)if(r(v[g],n,y,a))return v[g]}else for(;g--;)if(y(v[g][n],a))return v[g];return[]}if(d)for(n=n.split(".");g--;)r(v[g],n,y,a)&&h.push(v[g]);else for(;g--;)y(v[g][n],a)&&h.push(v[g])}return h}var b,w=0;if(this.filterInitialized)if(b=this.filteredrows,g=b.length,d)for(n=n.split(".");g--;)w=b[g],r(v[w],n,y,a)&&h.push(w);else for(;g--;)w=b[g],y(v[w][n],a)&&h.push(w);else{if(c){var I=this.calculateRange(s,n,a);for(g=I[0];g<=I[1];g++)h.push(f.values[g])}else if(g=v.length,d)for(n=n.split(".");g--;)r(v[g],n,y,a)&&h.push(g);else for(;g--;)y(v[g][n],a)&&h.push(g);this.filterInitialized=!0}return this.filteredrows=h,this},p.prototype.where=function(t){var e,i=[];if("function"!=typeof t)throw new TypeError("Argument is not a stored view or a function");e=t;try{if(this.searchIsChained){if(this.filterInitialized){for(var n=this.filteredrows.length;n--;)e(this.collection.data[this.filteredrows[n]])===!0&&i.push(this.filteredrows[n]);return this.filteredrows=i,this}for(var r=this.collection.data.length;r--;)e(this.collection.data[r])===!0&&i.push(r);return this.filteredrows=i,this.filterInitialized=!0,this}for(var o=this.collection.data.length;o--;)e(this.collection.data[o])===!0&&i.push(this.collection.data[o]);return i}catch(s){throw s}},p.prototype.count=function(){return this.searchIsChained&&this.filterInitialized?this.filteredrows.length:this.collection.count()},p.prototype.data=function(t){var e,i,n,r=[],o=this.collection.data;if(t=t||{},this.searchIsChained&&!this.filterInitialized){if(0===this.filteredrows.length){if(this.collection.cloneObjects||t.forceClones){for(e=o.length,n=t.forceCloneMethod||this.collection.cloneMethod,i=0;e>i;i++)r.push(a(o[i],n));return r}return o.slice()}this.filterInitialized=!0}var s=this.filteredrows;if(e=s.length,this.collection.cloneObjects||t.forceClones)for(n=t.forceCloneMethod||this.collection.cloneMethod,i=0;e>i;i++)r.push(a(o[s[i]],n));else for(i=0;e>i;i++)r.push(o[s[i]]);return r},p.prototype.update=function(t){if("function"!=typeof t)throw new TypeError("Argument is not a function");this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex());for(var e=this.filteredrows.length,i=this.collection.data,n=0;e>n;n++)t(i[this.filteredrows[n]]),this.collection.update(i[this.filteredrows[n]]);return this},p.prototype.remove=function(){return this.searchIsChained&&!this.filterInitialized&&0===this.filteredrows.length&&(this.filteredrows=this.collection.prepareFullDocIndex()),this.collection.remove(this.data()),this.filteredrows=[],this},p.prototype.mapReduce=function(t,e){try{return e(this.data().map(t))}catch(i){throw i}},p.prototype.eqJoin=function(t,e,i,n){var r,o,s,a=[],l=[],u=[],c="function"==typeof e,h="function"==typeof i,f={};if(a=this.data(),r=a.length,t instanceof p)l=t.data();else{if(!Array.isArray(t))throw new TypeError("joinData needs to be an array or result set");l=t}o=l.length;for(var d=0;o>d;d++)s=h?i(l[d]):l[d][i],f[s]=l[d];n||(n=function(t,e){return{left:t,right:e}});for(var y=0;r>y;y++)s=c?e(a[y]):a[y][e],u.push(n(a[y],f[s]||{}));return this.collection=new v("joinData"),this.collection.insert(u),this.filteredrows=[],this.filterInitialized=!1,this},p.prototype.map=function(t){var e=this.data().map(t);return this.collection=new v("mappedData"),this.collection.insert(e),this.filteredrows=[],this.filterInitialized=!1,this},y.prototype=new c,y.prototype.rematerialize=function(t){var e,i,n;if(t=t||{},this.resultdata=[],this.resultsdirty=!0,this.resultset=new p(this.collection),(this.sortFunction||this.sortCriteria)&&(this.sortDirty=!0),t.hasOwnProperty("removeWhereFilters"))for(e=this.filterPipeline.length,i=e;i--;)"where"===this.filterPipeline[i].type&&(i!==this.filterPipeline.length-1&&(this.filterPipeline[i]=this.filterPipeline[this.filterPipeline.length-1]),this.filterPipeline.length--);var r=this.filterPipeline;for(this.filterPipeline=[],e=r.length,n=0;e>n;n++)this.applyFind(r[n].val);return this.data(),this.emit("rebuild",this),this},y.prototype.branchResultset=function(t,e){var i=this.resultset.branch();return"undefined"==typeof t?i:i.transform(t,e)},y.prototype.toJSON=function(){var t=new y(this.collection,this.name,this.options);return t.resultset=this.resultset,t.resultdata=[],t.resultsdirty=!0,t.filterPipeline=this.filterPipeline,t.sortFunction=this.sortFunction,t.sortCriteria=this.sortCriteria,t.sortDirty=this.sortDirty,t.collection=null,t},y.prototype.removeFilters=function(){this.rebuildPending=!1,this.resultset.reset(),this.resultdata=[],this.resultsdirty=!1,this.cachedresultset=null,this.filterPipeline=[],this.sortFunction=null,this.sortCriteria=null,this.sortDirty=!1},y.prototype.applySort=function(t){return this.sortFunction=t,this.sortCriteria=null,this.queueSortPhase(),this},y.prototype.applySimpleSort=function(t,e){return this.sortCriteria=[[t,e||!1]],this.sortFunction=null,this.queueSortPhase(),this},y.prototype.applySortCriteria=function(t){return this.sortCriteria=t,this.sortFunction=null,this.queueSortPhase(),this},y.prototype.startTransaction=function(){return this.cachedresultset=this.resultset.copy(),this},y.prototype.commit=function(){return this.cachedresultset=null,this},y.prototype.rollback=function(){return this.resultset=this.cachedresultset,this.options.persistent&&(this.resultdata=this.resultset.data(),this.emit("rebuild",this)),this},y.prototype._indexOfFilterWithId=function(t){if("string"==typeof t||"number"==typeof t)for(var e=0,i=this.filterPipeline.length;i>e;e+=1)if(t===this.filterPipeline[e].uid)return e;return-1},y.prototype._addFilter=function(t){this.filterPipeline.push(t),this.resultset[t.type](t.val)},y.prototype.reapplyFilters=function(){this.resultset.reset(),this.cachedresultset=null,this.options.persistent&&(this.resultdata=[],this.resultsdirty=!0);var t=this.filterPipeline;this.filterPipeline=[];for(var e=0,i=t.length;i>e;e+=1)this._addFilter(t[e]);return this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent(),this},y.prototype.applyFilter=function(t){var e=this._indexOfFilterWithId(t.uid);return e>=0?(this.filterPipeline[e]=t,this.reapplyFilters()):(this.cachedresultset=null,this.options.persistent&&(this.resultdata=[],this.resultsdirty=!0),this._addFilter(t),this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent(),this)},y.prototype.applyFind=function(t,e){return this.applyFilter({type:"find",val:t,uid:e}),this},y.prototype.applyWhere=function(t,e){return this.applyFilter({type:"where",val:t,uid:e}),this},y.prototype.removeFilter=function(t){var e=this._indexOfFilterWithId(t);if(0>e)throw new Error("Dynamic view does not contain a filter with ID: "+t);return this.filterPipeline.splice(e,1),this.reapplyFilters(),this},y.prototype.count=function(){return this.options.persistent?this.resultdata.length:this.resultset.count()},y.prototype.data=function(){return(this.sortDirty||this.resultsdirty)&&this.performSortPhase({suppressRebuildEvent:!0}),this.options.persistent?this.resultdata:this.resultset.data()},y.prototype.queueRebuildEvent=function(){if(!this.rebuildPending){this.rebuildPending=!0;var t=this;setTimeout(function(){t.rebuildPending&&(t.rebuildPending=!1,t.emit("rebuild",t))},this.options.minRebuildInterval)}},y.prototype.queueSortPhase=function(){if(!this.sortDirty){this.sortDirty=!0;var t=this;"active"===this.options.sortPriority?setTimeout(function(){t.performSortPhase()},this.options.minRebuildInterval):this.queueRebuildEvent()}},y.prototype.performSortPhase=function(t){(this.sortDirty||this.resultsdirty)&&(t=t||{},this.sortDirty&&(this.sortFunction?this.resultset.sort(this.sortFunction):this.sortCriteria&&this.resultset.compoundsort(this.sortCriteria),this.sortDirty=!1),this.options.persistent&&(this.resultdata=this.resultset.data(),this.resultsdirty=!1),t.suppressRebuildEvent||this.emit("rebuild",this))},y.prototype.evaluateDocument=function(t,e){var i=this.resultset.filteredrows,n=e?-1:i.indexOf(+t),r=i.length,o=new p(this.collection);o.filteredrows=[t],o.filterInitialized=!0;for(var s,a=0,l=this.filterPipeline.length;l>a;a++)s=this.filterPipeline[a],o[s.type](s.val);var u=0===o.filteredrows.length?-1:0;return-1!==n||-1!==u?-1===n&&-1!==u?(i.push(t),this.options.persistent&&this.resultdata.push(this.collection.data[t]),void(this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent())):-1!==n&&-1===u?(r-1>n?(i[n]=i[r-1],i.length=r-1,this.options.persistent&&(this.resultdata[n]=this.resultdata[r-1],this.resultdata.length=r-1)):(i.length=r-1,this.options.persistent&&(this.resultdata.length=r-1)),void(this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent())):-1!==n&&-1!==u?(this.options.persistent&&(this.resultdata[n]=this.collection.data[t]),void(this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent())):void 0:void 0},y.prototype.removeDocument=function(t){var e,i=this.resultset.filteredrows,n=i.indexOf(+t),r=i.length;for(-1!==n&&(r-1>n?(i[n]=i[r-1],i.length=r-1,
this.options.persistent&&(this.resultdata[n]=this.resultdata[r-1],this.resultdata.length=r-1)):(i.length=r-1,this.options.persistent&&(this.resultdata.length=r-1)),this.sortFunction||this.sortCriteria?this.queueSortPhase():this.queueRebuildEvent()),r=i.length,e=0;r>e;e++)i[e]>t&&i[e]--},y.prototype.mapReduce=function(t,e){try{return e(this.data().map(t))}catch(i){throw i}},v.prototype=new c,v.prototype.console={log:function(){},warn:function(){},error:function(){}},v.prototype.addAutoUpdateObserver=function(t){this.autoupdate&&"function"==typeof Object.observe&&Object.observe(t,this.observerCallback,["add","update","delete","reconfigure","setPrototype"])},v.prototype.removeAutoUpdateObserver=function(t){this.autoupdate&&"function"==typeof Object.observe&&Object.unobserve(t,this.observerCallback)},v.prototype.addTransform=function(t,e){if(this.transforms.hasOwnProperty(t))throw new Error("a transform by that name already exists");this.transforms[t]=e},v.prototype.setTransform=function(t,e){this.transforms[t]=e},v.prototype.removeTransform=function(t){delete this.transforms[t]},v.prototype.byExample=function(t){var e,i,n;n=[];for(e in t)t.hasOwnProperty(e)&&n.push((i={},i[e]=t[e],i));return{$and:n}},v.prototype.findObject=function(t){return this.findOne(this.byExample(t))},v.prototype.findObjects=function(t){return this.find(this.byExample(t))},v.prototype.ttlDaemonFuncGen=function(){var t=this,e=this.ttl.age;return function(){var i=Date.now(),n=t.chain().where(function(t){var n=t.meta.updated||t.meta.created,r=i-n;return r>e});n.remove()}},v.prototype.setTTL=function(t,e){0>t?clearInterval(this.ttl.daemon):(this.ttl.age=t,this.ttl.ttlInterval=e,this.ttl.daemon=setInterval(this.ttlDaemonFuncGen(),e))},v.prototype.prepareFullDocIndex=function(){for(var t=this.data.length,e=new Array(t),i=0;t>i;i+=1)e[i]=i;return e},v.prototype.ensureIndex=function(i,n){if("undefined"==typeof n&&(n=!1),null===i||void 0===i)throw new Error("Attempting to set index without an associated property");if(!this.binaryIndices[i]||n||this.binaryIndices[i].dirty){var r={name:i,dirty:!0,values:this.prepareFullDocIndex()};this.binaryIndices[i]=r;var o=function(i,n){return function(r,o){var s=n[r][i],a=n[o][i];if(s!==a){if(t(s,a,!1))return-1;if(e(s,a,!1))return 1}return 0}}(i,this.data);r.values.sort(o),r.dirty=!1,this.dirty=!0}},v.prototype.ensureUniqueIndex=function(t){var e=this.constraints.unique[t];return e||(-1==this.uniqueNames.indexOf(t)&&this.uniqueNames.push(t),this.constraints.unique[t]=e=new A(t)),this.data.forEach(function(t){e.set(t)}),e},v.prototype.ensureAllIndexes=function(t){var e,i=this.binaryIndices;for(e in i)N.call(i,e)&&this.ensureIndex(e,t)},v.prototype.flagBinaryIndexesDirty=function(){var t,e=this.binaryIndices;for(t in e)N.call(e,t)&&(e[t].dirty=!0)},v.prototype.flagBinaryIndexDirty=function(t){this.binaryIndices[t]&&(this.binaryIndices[t].dirty=!0)},v.prototype.count=function(t){return t?this.chain().find(t).filteredrows.length:this.data.length},v.prototype.ensureId=function(){var t=this.data.length,e=0;for(this.idIndex=[],e;t>e;e+=1)this.idIndex.push(this.data[e].$loki)},v.prototype.ensureIdAsync=function(t){this.async(function(){this.ensureId()},t)},v.prototype.addDynamicView=function(t,e){var i=new y(this,t,e);return this.DynamicViews.push(i),i},v.prototype.removeDynamicView=function(t){for(var e=0;e<this.DynamicViews.length;e++)this.DynamicViews[e].name===t&&this.DynamicViews.splice(e,1)},v.prototype.getDynamicView=function(t){for(var e=0;e<this.DynamicViews.length;e++)if(this.DynamicViews[e].name===t)return this.DynamicViews[e];return null},v.prototype.findAndUpdate=function(t,e){var i,n=this.where(t),r=0;try{for(r;r<n.length;r++)i=e(n[r]),this.update(i)}catch(o){this.rollback(),this.console.error(o.message)}},v.prototype.insert=function(t){if(!Array.isArray(t))return this.insertOne(t);for(var e,i=[],n=0,r=t.length;r>n;n++){if(e=this.insertOne(t[n]),!e)return void 0;i.push(e)}return 1===i.length?i[0]:i},v.prototype.insertOne=function(t){var e=null;if("object"!=typeof t?e=new TypeError("Document needs to be an object"):null===t&&(e=new TypeError("Object cannot be null")),null!==e)throw this.emit("error",e),e;var i=this.cloneObjects?a(t,this.cloneMethod):t;return"undefined"==typeof i.meta&&(i.meta={revision:0,created:0}),this.emit("pre-insert",i),this.add(i)?(this.addAutoUpdateObserver(i),this.emit("insert",i),i):void 0},v.prototype.clear=function(){this.data=[],this.idIndex=[],this.binaryIndices={},this.cachedIndex=null,this.cachedBinaryIndex=null,this.cachedData=null,this.maxId=0,this.DynamicViews=[],this.dirty=!0},v.prototype.update=function(t){if(this.flagBinaryIndexesDirty(),Array.isArray(t)){var e=0,i=t.length;for(e;i>e;e+=1)this.update(t[e])}else{if(!N.call(t,"$loki"))throw new Error("Trying to update unsynced document. Please save the document first by using insert() or addMany()");try{this.startTransaction();var n,r,o=this.get(t.$loki,!0),s=this;if(!o)throw new Error("Trying to update a document not in collection.");this.emit("pre-update",t),n=o[0],Object.keys(this.constraints.unique).forEach(function(t){s.constraints.unique[t].update(n)}),r=o[1],this.data[r]=t,n!==t&&this.addAutoUpdateObserver(t);for(var a=0;a<this.DynamicViews.length;a++)this.DynamicViews[a].evaluateDocument(r,!1);return this.idIndex[r]=n.$loki,this.commit(),this.dirty=!0,this.emit("update",t),t}catch(l){throw this.rollback(),this.console.error(l.message),this.emit("error",l),l}}},v.prototype.add=function(t){if("object"!=typeof t)throw new TypeError("Object being added needs to be an object");if("undefined"!=typeof t.$loki)throw new Error("Document is already in collection, please use update()");this.flagBinaryIndexesDirty();try{this.startTransaction(),this.maxId++,isNaN(this.maxId)&&(this.maxId=this.data[this.data.length-1].$loki+1),t.$loki=this.maxId,t.meta.version=0;var e,i=this.constraints.unique;for(e in i)N.call(i,e)&&i[e].set(t);this.idIndex.push(t.$loki),this.data.push(t);for(var n=this.data.length-1,r=this.DynamicViews.length,o=0;r>o;o++)this.DynamicViews[o].evaluateDocument(n,!0);return this.commit(),this.dirty=!0,this.cloneObjects?a(t,this.cloneMethod):t}catch(s){this.rollback(),this.console.error(s.message)}},v.prototype.removeWhere=function(t){var e;e="function"==typeof t?this.data.filter(t):new p(this,{queryObj:t}),this.remove(e)},v.prototype.removeDataOnly=function(){this.remove(this.data.slice())},v.prototype.remove=function(t){if("number"==typeof t&&(t=this.get(t)),"object"!=typeof t)throw new Error("Parameter is not an object");if(Array.isArray(t)){var e=0,i=t.length;for(e;i>e;e+=1)this.remove(t[e])}else{if(!N.call(t,"$loki"))throw new Error("Object is not a document stored in the collection");this.flagBinaryIndexesDirty();try{this.startTransaction();var n=this.get(t.$loki,!0),r=n[1],o=this;Object.keys(this.constraints.unique).forEach(function(e){null!==t[e]&&"undefined"!=typeof t[e]&&o.constraints.unique[e].remove(t[e])});for(var s=0;s<this.DynamicViews.length;s++)this.DynamicViews[s].removeDocument(r);return this.data.splice(r,1),this.removeAutoUpdateObserver(t),this.idIndex.splice(r,1),this.commit(),this.dirty=!0,this.emit("delete",n[0]),delete t.$loki,delete t.meta,t}catch(a){return this.rollback(),this.console.error(a.message),this.emit("error",a),null}}},v.prototype.get=function(t,e){var i=e||!1,n=this.idIndex,r=n.length-1,o=0,s=o+r>>1;if(t="number"==typeof t?t:parseInt(t,10),isNaN(t))throw new TypeError("Passed id is not an integer");for(;n[o]<n[r];)s=o+r>>1,n[s]<t?o=s+1:r=s;return r===o&&n[o]===t?i?[this.data[o],o]:this.data[o]:null},v.prototype.by=function(t,e){var i;if(!e)return i=this,function(e){return i.by(t,e)};var n=this.constraints.unique[t].get(e);return this.cloneObjects?a(n,this.cloneMethod):n},v.prototype.findOne=function(t){var e=new p(this,{queryObj:t,firstOnly:!0});return Array.isArray(e)&&0===e.length?null:this.cloneObjects?a(e,this.cloneMethod):e},v.prototype.chain=function(t,e){var i=new p(this);return"undefined"==typeof t?i:i.transform(t,e)},v.prototype.find=function(t){"undefined"==typeof t&&(t="getAll");var e=new p(this,{queryObj:t});return this.cloneObjects?l(e,this.cloneMethod):e},v.prototype.findOneUnindexed=function(t,e){for(var i,n=this.data.length;n--;)if(this.data[n][t]===e)return i=this.data[n];return null},v.prototype.startTransaction=function(){if(this.transactional){this.cachedData=a(this.data,this.cloneMethod),this.cachedIndex=this.idIndex,this.cachedBinaryIndex=this.binaryIndices;for(var t=0;t<this.DynamicViews.length;t++)this.DynamicViews[t].startTransaction()}},v.prototype.commit=function(){if(this.transactional){this.cachedData=null,this.cachedIndex=null,this.cachedBinaryIndex=null;for(var t=0;t<this.DynamicViews.length;t++)this.DynamicViews[t].commit()}},v.prototype.rollback=function(){if(this.transactional){null!==this.cachedData&&null!==this.cachedIndex&&(this.data=this.cachedData,this.idIndex=this.cachedIndex,this.binaryIndices=this.cachedBinaryIndex);for(var t=0;t<this.DynamicViews.length;t++)this.DynamicViews[t].rollback()}},v.prototype.async=function(t,e){setTimeout(function(){if("function"!=typeof t)throw new TypeError("Argument passed for async execution is not a function");t(),e()},0)},v.prototype.where=function(t){var e=new p(this,{queryFunc:t});return this.cloneObjects?l(e,this.cloneMethod):e},v.prototype.mapReduce=function(t,e){try{return e(this.data.map(t))}catch(i){throw i}},v.prototype.eqJoin=function(t,e,i,n){return new p(this).eqJoin(t,e,i,n)},v.prototype.stages={},v.prototype.getStage=function(t){return this.stages[t]||(this.stages[t]={}),this.stages[t]},v.prototype.commitLog=[],v.prototype.stage=function(t,e){var i=JSON.parse(JSON.stringify(e));return this.getStage(t)[e.$loki]=i,i},v.prototype.commitStage=function(t,e){var i,n=this.getStage(t),r=(new Date).getTime();for(i in n)this.update(n[i]),this.commitLog.push({timestamp:r,message:e,data:JSON.parse(JSON.stringify(n[i]))});this.stages[t]={}},v.prototype.no_op=function(){},v.prototype.extract=function(t){var e=0,i=this.data.length,n=g(t),r=[];for(e;i>e;e+=1)r.push(k(this.data[e],t,n));return r},v.prototype.max=function(t){return Math.max.apply(null,this.extract(t))},v.prototype.min=function(t){return Math.min.apply(null,this.extract(t))},v.prototype.maxRecord=function(t){var e,i=0,n=this.data.length,r=g(t),o={index:0,value:void 0};for(i;n>i;i+=1)void 0!==e?e<k(this.data[i],t,r)&&(e=k(this.data[i],t,r),o.index=this.data[i].$loki):(e=k(this.data[i],t,r),o.index=this.data[i].$loki);return o.value=e,o},v.prototype.minRecord=function(t){var e,i=0,n=this.data.length,r=g(t),o={index:0,value:void 0};for(i;n>i;i+=1)void 0!==e?e>k(this.data[i],t,r)&&(e=k(this.data[i],t,r),o.index=this.data[i].$loki):(e=k(this.data[i],t,r),o.index=this.data[i].$loki);return o.value=e,o},v.prototype.extractNumerical=function(t){return this.extract(t).map(m).filter(Number).filter(function(t){return!isNaN(t)})},v.prototype.avg=function(t){return I(this.extractNumerical(t))},v.prototype.stdDev=function(t){return O(this.extractNumerical(t))},v.prototype.mode=function(t){var e={},i=this.extract(t);i.forEach(function(t){e[t]?e[t]+=1:e[t]=1});var n,r,o;for(r in e)n?n<e[r]&&(o=r):(o=r,n=e[r]);return o},v.prototype.median=function(t){var e=this.extractNumerical(t);e.sort(w);var i=Math.floor(e.length/2);return e.length%2?e[i]:(e[i-1]+e[i])/2},C.prototype={keys:[],values:[],sort:function(t,e){return e>t?-1:t>e?1:0},setSort:function(t){this.bs=new D(t)},bs:function(){return new D(this.sort)},set:function(t,e){var i=this.bs(this.keys,t);i.found?this.values[i.index]=e:(this.keys.splice(i.index,0,t),this.values.splice(i.index,0,e))},get:function(t){return this.values[x(this.keys,t,this.sort).index]}},A.prototype.keyMap={},A.prototype.lokiMap={},A.prototype.set=function(t){var e=t[this.field];if(null!==e&&"undefined"!=typeof e){if(this.keyMap[e])throw new Error("Duplicate key for property "+this.field+": "+e);this.keyMap[e]=t,this.lokiMap[t.$loki]=e}},A.prototype.get=function(t){return this.keyMap[t]},A.prototype.byId=function(t){return this.keyMap[this.lokiMap[t]]},A.prototype.update=function(t){if(this.lokiMap[t.$loki]!==t[this.field]){var e=this.lokiMap[t.$loki];this.set(t),this.keyMap[e]=void 0}else this.keyMap[t[this.field]]=t},A.prototype.remove=function(t){var e=this.keyMap[t];if(null===e||"undefined"==typeof e)throw new Error("Key is not in unique index: "+this.field);this.keyMap[t]=void 0,this.lokiMap[e.$loki]=void 0},A.prototype.clear=function(){this.keyMap={},this.lokiMap={}},S.prototype={set:function(t,e){this.index[t]?this.index[t].push(e):this.index[t]=[e]},remove:function(t,e){var i=this.index[t];for(var n in i)i[n]==e&&i.splice(n,1);i.length<1&&(this.index[t]=void 0)},get:function(t){return this.index[t]},clear:function(t){this.index={}}},E.prototype={keys:[],values:[],sort:function(t,e){return e>t?-1:t>e?1:0},bs:function(){return new D(this.sort)},setSort:function(t){this.bs=new D(t)},set:function(t,e){var i=x(this.keys,t,this.sort);i.found?this.values[i.index].push(e):(this.keys.splice(i.index,0,t),this.values.splice(i.index,0,[e]))},get:function(t){var e=x(this.keys,t,this.sort);return e.found?this.values[e.index]:[]},getLt:function(t){var e=x(this.keys,t,this.sort),i=e.index;return e.found&&i--,this.getAll(t,0,i)},getGt:function(t){var e=x(this.keys,t,this.sort),i=e.index;return e.found&&i++,this.getAll(t,i,this.keys.length)},getAll:function(t,e,i){for(var n=[],r=e;i>r;r++)n=n.concat(this.values[r]);return n},getPos:function(t){return x(this.keys,t,this.sort)},remove:function(t,e){var i=x(this.keys,t,this.sort).index,n=this.values[i];for(var r in n)n[r]==e&&n.splice(r,1);n.length<1&&(this.keys.splice(i,1),this.values.splice(i,1))},clear:function(){this.keys=[],this.values=[]}},h.LokiOps=j,h.Collection=v,h.KeyValueStore=C,h}()}),function(t,e){"function"==typeof define&&define.amd?define(["angular","lokijs"],e):"object"==typeof exports?module.exports=e():t.lokiAngular=e(t.angular,t.thirdParty&&t.thirdParty.loki?t.thirdParty.loki:t.loki)}(this,function(t,e){function i(){return loki}function n(e,i,n,r){function o(){return J}function s(t){localStorage.removeItem(t)}function a(t,e,n){return i(function(i,r){$=t,m("delete_doc",t,e,n).then(function(t){J={},i(t)},function(t){r(t)})})}function l(t){return i(function(e,i){m("insert_item_in_doc",J.dbName,J.collName,J.doc,"",t).then(function(t){e(t)},function(t){i(t)})})}function u(){return i(function(t,e){m("delete_current_doc").then(function(e){t(e)},function(t){e(t)})})}function c(t,e,n){return i(function(i,r){$=t,m("create_doc",t,e,"","",n).then(function(n){J.dbName=t,J.collName=e,J.doc=n,J.lokiNum=n[0].$loki,i(n[0])},function(t){r(t)})})}function h(t,e,n){return i(function(i,r){$=t,m("set_doc",t,e,n).then(function(n){J.dbName=t,J.collName=e,J.doc=n,J.lokiNum=n[0].$loki,i(n[0])},function(t){r(t)})})}function f(t,e){return i(function(i,n){J?m("update_current_doc",J.dbName,J.collName,J.doc,t,e).then(function(t){i(t[0])},function(t){n(t)}):n("you have to set a current doc first, use: setCurrentDoc(dbName, collName, docName)")})}function d(t,e,n,r,o){return i(function(i,s){$=t,J?m("update_doc",t,e,n,r,o).then(function(t){i(t[0])},function(t){s(t)}):s("bad, check parameters)")})}function p(t,e,n){return i(function(i,r){$=t,m("get_doc",t,e,n).then(function(n){J.dbName=t,J.collName=e,J.doc=n,J.lokiNum=n[0].$loki,i(n[0])},function(t){r(t)})})}function y(t,e){return i(function(i,n){$=t,m("get_collection",t,e).then(function(n){V.dbName=t,V.collName=e,i(n)},function(t){n(t)})})}function v(t,e){return i(function(i,n){$=t,m("remove_collection",t,e).then(function(t){V={},i(t)},function(t){n(t)})})}function g(t){return i(function(e,i){var n=N(t);$=t[n.db],m("add_collection",$,"","","",t).then(function(t){V.dbName=$,e(t)},function(t){i(t)})})}function m(e,n,r,o,s,a){return i(function(i,l){function u(){var u;if("update_doc"===e||"insert_item_in_doc"===e){q.loadDatabase(n);var c=q.getCollection(r);for(var h in o)J.key=h,J.value=o[h];for(var f=0;f<c.data.length;f++)c.data[f][J.key]===J.value&&(J.lokiNum=c.data[f].$loki);u=c.get(parseInt(J.lokiNum,10)),"update_doc"===e?(u[s]=a,c.update(u)):u.insert(a),q.save(),i(!0)}else if("update_current_doc"===e){q.loadDatabase(n);var d=q.getCollection(r);u=d.get(parseInt(J.lokiNum,10)),u[s]=a,d.update(u),q.save(),i(!0)}else if("delete_current_doc"===e||"delete_doc"===e){q.loadDatabase(n);var p=q.getCollection(r);if("delete_doc"===e){for(var y in o)J.key=y,J.value=o[y];for(var v=0;v<p.data.length;v++)p.data[v][J.key]===J.value&&(J.lokiNum=p.data[v].$loki)}p.remove(J.lokiNum),q.save(),i(!0)}else if("get_doc"===e||"set_doc"===e){q.loadDatabase(n);var g=q.getCollection(r);u=g.find(o),i(t.fromJson(u))}else if("get_collection"===e){q.loadDatabase(n);var m=q.getCollection(r);i(t.fromJson(m))}else if("remove_collection"===e)q.loadDatabase(n),q.removeCollection(r),q.save(function(){i("collection deleted")});else if("add_collection"===e){q.loadDatabase(n);for(var b=N(a),w=0;w<b.coll_array.length;w++){var I=q.addCollection(a[b.coll_array[w].coll]);I.insert(a[b.coll_array[w].docs])}q.save(function(){i("collection(s) added")})}else if("create_doc"===e){q.loadDatabase(n);var O=q.getCollection(r);O.insert(a),q.save(function(){var e=O.find({name:a.name});i(t.fromJson(e))})}else if("delete_current_doc"===e){var k=q.getCollection(J.collName);k?(k.remove(parseInt(J.lokiNum,10)),q.save(),i(!0)):l("You forgot to specify a current doc first")}}q?q.filename===n?u():S(n).then(function(){u()}):F?S(n).then(function(){u()}):O().then(function(){u()},function(t){l(t)})})}function b(t){var e=window.localStorage.getItem(t);return e?!0:!1}function w(){return i(function(t,e){for(var i=0,n=0;n<R.length;n++)i++,R[n].close(),n===R.length-1&&t()})}function I(t){return i(function(e,i){for(var n=0;n<R.length;n++)if(R.filename===t){R[n].close(),e();break}})}function O(){return i(function(t,e){0===M.length?C().then(function(){console.log("had to initialize all dbs"),F=!0,t()},function(t){e(t)}):(console.log("db list already initialized"),t())})}function k(){return i(function(t,e){for(var i=0;i>=0;i++){if(!n.has("json"+(i+1))){t();break}var r={},o=n.get("json"+(i+1)),s=N(o);o[s.db]===$?(_=i+1,i===T-1&&t()):(r.filename=s.db,r.json=i+1,M.push(r),i===T-1&&t())}})}function x(){return i(function(t,e){k().then(function(){0===_&&e("Oops!, you didn't specify any starting document");var i=n.get("json"+_),r={},o=N(i);r.filename=o.db,r.json=_,M.push(r),t()})})}function D(){if(T>=1)return T;for(var t=0;t>=0&&n.has("json"+(t+1));t++)T++;return T}function C(){return i(function(e,i){x().then(function(){function i(){if(n.has("json"+M[L-1].json)){var r=n.get("json"+M[L-1].json);console.log("number = "+L);var o=t.fromJson(r);z=!0,E(o).then(function(){return A(q.filename)||R.push(t.copy(q)),z=!1,L!==M.length?(L++,void i()):void e()})}}i()},function(t){i(t)})})}function A(t){for(var e=!1,i=0;i<R.length;i++)R[i].filename===t&&(e=!0);return e}function S(t){return i(function(e,i){for(var n=0;n<R.length;n++)R[n].filename===t&&(q=R[n],e())})}function E(t){return i(function(e,i){function n(){if(o)e();else{for(var i=N(t),n=0;n<i.coll_array.length;n++){var r=q.addCollection(t[i.coll_array[n].coll]);r.insert(t[i.coll_array[n].docs])}q.save(),e()}}var r=N(t),o=!1;b(t[r.db])&&(o=!0),q=new loki(t[r.db],{autoload:!0,autoloadCallback:n,autosave:!0,autosaveInterval:1e4})})}function N(t){var e=1,i="",n="",r="",o=[];for(var s in t){if(e>1)if(P(e))n=s;else{r=s;var a={coll:n,docs:r};o.push(a)}else i=s;e++}var l={db:i,coll_array:o};return l}function P(t){return t%2===0}var j=this;j.checkStates=O;var q,F=!1,$="",_=0,T=0,M=[],R=[];j.dbExists=b,j.closeDb=I,j.closeAllDbs=w,j.getCollection=y,j.addCollection=g,j.removeCollection=v,j.getDoc=p,j.updateDoc=d,j.updateCurrentDoc=f,j.setCurrentDoc=h,j.getCurrentDoc=o,j.deleteDocument=a,j.deleteCurrentDoc=u,j.deleteDatabase=s,j.addDocument=c,j.insertItemInDoc=l;var J={},V={};T=D();var z=!1,L=1}var r=t.module("lokijs",[]).factory("Loki",i).service("Lokiwork",n);return n.$inject=["Loki","$q","$injector","$window"],r});var _createClass=function(){function t(t,e){for(var i in e){var n=e[i];n.configurable=!0,n.value&&(n.writable=!0)}Object.defineProperties(t,e)}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),_inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},_classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},LokiCordovaFSAdapterError=function(t){function e(){_classCallCheck(this,e),null!=t&&t.apply(this,arguments)}return _inherits(e,t),e}(Error),TAG="[LokiCordovaFSAdapter]",LokiCordovaFSAdapter=function(){function t(e){_classCallCheck(this,t),this.options=e}return _createClass(t,{saveDatabase:{value:function(t,e,i){var n=this;console.log(TAG,"saving database"),this._getFile(t,function(t){t.createWriter(function(t){t.onwriteend=function(){if(0===t.length){var r=n._createBlob(e,"text/plain");t.write(r),i()}},t.truncate(0)},function(t){throw console.error(TAG,"error writing file",t),new LokiCordovaFSAdapterError("Unable to write file"+JSON.stringify(t))})},function(t){throw console.error(TAG,"error getting file",t),new LokiCordovaFSAdapterError("Unable to get file"+JSON.stringify(t))})}},loadDatabase:{value:function(t,e){console.log(TAG,"loading database"),this._getFile(t,function(t){t.file(function(t){var i=new FileReader;i.onloadend=function(t){var i=t.target.result;0===i.length?(console.warn(TAG,"couldn't find database"),e(null)):e(i)},i.readAsText(t)},function(t){console.error(TAG,"error reading file",t),e(new LokiCordovaFSAdapterError("Unable to read file"+t.message))})},function(t){console.error(TAG,"error getting file",t),e(new LokiCordovaFSAdapterError("Unable to get file: "+t.message))})}},deleteDatabase:{value:function(t,e){var i=this;console.log(TAG,"delete database"),window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(n){var r=i.options.prefix+"__"+t;n.getFile(r,{create:!0},function(t){t.remove(function(){e()},function(t){throw console.error(TAG,"error delete file",t),new LokiCordovaFSAdapterError("Unable delete file"+JSON.stringify(t))})},function(t){throw console.error(TAG,"error delete database",t),new LokiCordovaFSAdapterError("Unable delete database"+JSON.stringify(t))})},function(t){throw new LokiCordovaFSAdapterError("Unable to resolve local file system URL"+JSON.stringify(t))})}},_getFile:{value:function(t,e,i){var n=this;window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(r){var o=n.options.prefix+"__"+t;r.getFile(o,{create:!0},e,i)},function(t){throw new LokiCordovaFSAdapterError("Unable to resolve local file system URL"+JSON.stringify(t))})}},_createBlob:{value:function(t,e){var i=void 0;try{i=new Blob([t],{type:e})}catch(n){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===n.name&&window.BlobBuilder){var r=new window.BlobBuilder;r.append(t),i=r.getBlob(e)}else{if("InvalidStateError"!==n.name)throw new LokiCordovaFSAdapterError("Unable to create blob"+JSON.stringify(n));i=new Blob([t],{type:e})}}return i}}}),t}();
angular.services.factory("lokiService",["Loki",function(e){var o={loadCommonDB:a,loadUserDB:function(n,a){var t={autosave:!0,autosaveInterval:1e4};ionic.Platform.isAndroid()&&window.cordova&&(t.adapter=new LokiCordovaFSAdapter({prefix:"loki"}));o.userDB=new e(appConf.dataDBName+"-userDB-"+n,t),ionic.Platform.ready((function(){o.userDB.loadDatabase({},(function(){var e=o.userDB.getCollection("userKeyValue");e||(e=o.userDB.addCollection("userKeyValue")).insert({firstIn:!0}),o.userKeyValue=e.data[0],!0,a&&a()}))}))},userDB:{},userKeyValue:{},commonDB:{},commonKeyValue:{},setKey:function(e,t){n?(o.commonKeyValue[e]=t,setTimeout((function(){o.commonDB.save()}))):a((function(){o.commonKeyValue[e]=t,setTimeout((function(){o.commonDB.save()}))}))},getKey:function(e,n){return o.commonKeyValue[e]||n},setUserKey:function(e,n){o.userKeyValue[e]=n,setTimeout((function(){o.userDB.save()}))},getUserKey:function(e,n){return o.userKeyValue[e]||n}},n=!1;function a(a){(function(e){for(var o in e)return!1;return!0})(o.commonKeyValue)||a&&a();o.commonDB=new e(appConf.dataDBName+"-appDB",{}),o.commonDB.loadDatabase({},(function(){var e=o.commonDB.getCollection("commonKeyValue");e||(e=o.commonDB.addCollection("commonKeyValue")).insert({login:{}}),o.commonKeyValue=e.data[0],n=!0,a&&a()}))}return a(),o}]);
angular.services.factory("serviceManager",(function(){var a=[];return{clearCache:function(){angular.forEach(a,(function(a){a&&a.clearCache&&a.clearCache()}))},addService:function(c){a.push(c)}}}));
function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}angular.services.factory("localStorage",["$window",function(o){return{set:function(t,e){var r=_typeof(e);"string"==r||"number"==r?o.localStorage[t]=e:"object"==r?o.localStorage[t]=JSON.stringify(e):console.warn("传入类型不正确")},get:function(t,e){return o.localStorage[t]||e},getObject:function(t){return JSON.parse(o.localStorage[t]||"{}")},remove:function(t){o.localStorage.removeItem(t)},clear:function(){o.localStorage.clear()}}}]);
angular.services.factory("phoneUtils",["$q",function(e){var n={};return n.deviceIsAndroid=/Android/i.test(navigator.userAgent),n.deviceIsIOS=/iPhone|iPad|iPod/i.test(navigator.userAgent),n.deviceWidth=document.documentElement.clientWidth,n.deviceHeight=document.documentElement.clientHeight,document.addEventListener("deviceready",(function(){window.plugins&&window.plugins.screensize&&window.plugins.screensize.get((function(e){n.deviceWidth=e.width,n.deviceHeight=e.height}),null)}),!1),n.randomSort=function(e){return e?(e.sort((function(){return.5-Math.random()})),e):e},n.getFile=function(e,n,i){e.indexOf("://")>=0?window.resolveLocalFileSystemURL(e,(function(e){n&&n(e)}),i):window.requestFileSystem(LocalFileSystem.PERSISTENT,0,(function(o){o.root.getFile(e,{create:!1},(function(e){n&&n(e)}),i)}),i)},n.listDir=function(e,n,i){this.getFile(e,(function(e){e.createReader().readEntries((function(e){n(e)}),(function(e){i(e)}))}),i)},n.getDir=function(e,n,i){window.requestFileSystem(LocalFileSystem.PERSISTENT,0,(function(e){e.root.getDirectory(name,{create:!1,exclusive:!1},(function(e){n&&n(e)}),i)}),i)},n.createDir=function(e,n,i){window.resolveLocalFileSystemURL(ionic.Platform.isIOS()?cordova.file.documentsDirectory:cordova.file.externalRootDirectory,(function(o){var t=e.split("/"),r=o,c=function(e){r.getDirectory(e,{create:!0,exclusive:!1},(function(e){r=e,a()}),i)},a=function e(){var i=t.shift();i?c(i):null==i?n&&n(r):e()};a()}),i)},n.downloadFile=function(e,n,i,o,t){var r=new FileTransfer,c=encodeURI(e);return t&&(r.onprogress=t),r.download(c,n,(function(e){i&&i(e)}),(function(e){o&&o(e)})),r},n.fileDownload=function(e,i,o,t){if(window.LocalFileSystem){var r={},c=e.dir||"/",a=e.url,l=e.name;if(!l||0==l.length){var u=a.substr(a.lastIndexOf("."),a.length);(0!=u.indexOf(".")||u.length>5)&&(u=a.indexOf(".png")>0?".png":""),l=(new Date).getTime()+u}return n.createDir(c,(function(c){c.getFile(l,null,(function(u){console.log("文件已存在 "+u.nativeURL),e.overwrite?(u.remove(),c.getFile(l,{create:!0},(function(e){r.target=n.downloadFile(a,e.toURL(),i,(function(n){e.remove(),o&&o(n)}),t)}),o)):i&&i(u)}),(function(){c.getFile(l,{create:!0},(function(e){r.target=n.downloadFile(a,e.toURL(),i,(function(n){e.remove(),o&&o(n)}),t)}),o)}))}),o),r}o&&o("file plugin not found")},n.uploadImg=function(e,i,o,t,r,c){window.FileUploadOptions||t&&t("file plugin not found");var a=new FileUploadOptions;a.fileKey="uploadedfile",a.mimeType="image/jpeg",r&&(a.params=r),n.getFile(e,(function(r){a.fileName=r.nativeURL.substr(r.nativeURL.lastIndexOf("/")+1),n.upload(e,i,o,t,a,c)}),t)},n.uploadFile=function(i,o,t){var r=e.defer();function c(e){r.resolve(e)}function a(e){r.reject(e)}function l(e){r.notify(e)}window.FileUploadOptions||a("file plugin not found");var u=new FileUploadOptions;return u.fileKey="uploadedfile",u.mimeType="image/jpeg",t&&(u.params=t),n.getFile(i,(function(e){u.fileName=e.nativeURL.substr(e.nativeURL.lastIndexOf("/")+1),n.upload(i,o,c,a,u,l)}),a),r.promise},n.upload=function(e,n,i,o,t,r){var c=new FileTransfer,a=encodeURI(n);r&&(c.onprogress=r),t=t||{},c.upload(e,a,i,o,t)},n.saveImageDataToFile=function(e,i,o){window.canvas2ImagePlugin?n.deviceIsIOS?cordova.base64ToGallery(e,{prefix:"img_",mediaScanner:!0},(function(e){e="file://"+e,window.resolveLocalFileSystemURL(cordova.file.tempDirectory,(function(t){t.getDirectory("img",{create:!0,exclusive:!1},(function(t){n.getFile(e,(function(e){e.moveTo(t,null,i,o)}),o)}),o)}),o)}),(function(e){console.log(e),o&&o("图片保存失败")})):cordova.base64ToGallery(e,{prefix:"img_",mediaScanner:!0},(function(e){/storage\/emulated/.test(e)&&(e="file://"+e),n.getFile(e,(function(e){i&&i(e)}),o)}),(function(e){console.log(e),o&&o("图片保存失败")})):o&&o("canvas2ImagePlugin Plugin not found")},n.writeFile=function(e,n,i,o,t){window.requestFileSystem(LocalFileSystem.PERSISTENT,0,(function(r){r.root().getFile(e,{create:!0},(function(e){e.createWriter((function(r){r.onwrite=function(){i&&i(e)},r.onerror=function(e){o&&o(e.target.error)},1==t&&r.seek(r.length),r.write(n)}),o)}),o)}),o)},n.readFile=function(e,i,o,t){n.getFile(e,(function(e){e.file((function(e){var n=new FileReader;n.onerror=function(e){t&&t(e.target.error)},n.onload=function(e){o&&o(e.target.result)},i?n.readAsText(e):n.readAsDataURL(e)}),t)}),t)},n.deleteFile=function(e,i,o){n.getFile(e,(function(e){e.isFile?e.remove(i,o):e.removeRecursively(i,o)}),o)},n.moveFileTo=function(e,i,o,t,r){n.getFile(e,(function(e){n.createDir(i,(function(n){e.moveTo(n,o,t,r)}),r)}),r)},n.moveDirTo=function(e,i,o,t,r){n.getDir(e,(function(e){n.createDir(i,(function(n){e.moveTo(n,o,t,r)}),r)}),r)},n.copyFileTo=function(e,i,o,t,r){n.getFile(e,(function(e){n.createDir(i,(function(n){e.copyTo(n,o,t,r)}),r)}),r)},n.copyDirTo=function(e,i,o,t,r){n.getDir(e,(function(e){n.createDir(i,(function(n){e.copyTo(n,o,t,r)}),r)}),r)},n.getFileNativePath=function(e,i,o){n.getFile(e,(function(e){i&&i(e.nativeURL)}),o)},n.renameFile=function(e,i,o,t){n.getFile(e,(function(e){e.getParent((function(n){e.moveTo(n,i,o,t)}),t)}),t)},n.toast=function(e,n,i){n=n||"center",i=i||"short",window.plugins&&window.plugins.toast&&window.plugins.toast.show(e,i,n)},n.barcodeScan=function(e,n){window.cordova&&cordova.plugins&&cordova.plugins.barcodeScanner?cordova.plugins.barcodeScanner.scan(e,n):(console.log("plugin barcodeScanner not found!"),n&&n("plugin barcodeScanner not found!"))},n.openFile=function(e,n,i){window.cordova&&cordova.plugins.disusered&&cordova.plugins.disusered.open(e,n,i)},n.confirm=function(e,n,i,o,t){window.navigator&&window.navigator.notification&&window.navigator.notification.confirm(e||"",n,i||"提示",o||["确定"],t)},n.formatDate=function(e,n){var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+o+")").test(n)&&(n=n.replace(RegExp.$1,1==RegExp.$1.length?i[o]:("00"+i[o]).substr((""+i[o]).length)));return n},n.isWifiConnect=function(){return!navigator.connection||navigator.connection.type==Connection.WIFI},n.isNetworkConnect=function(){return!navigator.connection||navigator.connection.type!=Connection.NONE},n.openUrl=function(e,i){if(i)n.deviceIsAndroid?navigator.app.loadUrl(e,{openExternal:!0}):n.deviceIsIOS&&window.open(e,"_system");else{if(!/Crosswalk/.test(navigator.userAgent))return window.open(e,"_blank","location=no, closeButtonCaption=关闭");window.plugins.utilsPlugin.openUrl(e)}},n.getPicture=function(i){var o=e.defer();function t(e){if(console.log("拍照返回--"+e),i&&i.destinationType&&i.destinationType==Camera.DestinationType.FILE_URI)if(e.indexOf("?")>0){var t=e.indexOf("png")>0?".png":".jpg",r=(new Date).getTime()+t;n.renameFile(e,r,(function(e){o.resolve(e.nativeURL),console.log("renameFile "+e.nativeURL)}),(function(e){console.log("rename err"+JSON.stringify(e)),o.reject(e)}))}else o.resolve(e);else o.resolve(e)}return n.deviceIsAndroid&&i.allowEdit&&i.destinationType&&i.destinationType==Camera.DestinationType.FILE_URI&&i.targetWidth!=i.targetHeight?window.plugins.cropPlugin.crop(i,(function(e){t(e)}),(function(e){console.log("cropImage--"+JSON.stringify(e)),o.reject(e)})):navigator.camera.getPicture((function(e){t(e)}),(function(e){console.log("拍照返回--"+JSON.stringify(e)),e&&!/no image selected.|has no access to assets./i.test(e)?o.reject("Selection cancelled."):o.reject(e)}),i),o.promise},n.recognize=function(n){var i=e.defer();return iasPlugin.recognize(n,(function(e){i.resolve(e)}),(function(e){i.reject(e)})),i.promise},n.lockKeys=function(){n.deviceIsAndroid&&window.plugins.utilsPlugin.sendBroadcast({action:"com.linspirer.edu.class.begin",includeStopped:!0})},n.unlockKeys=function(){n.deviceIsAndroid&&window.plugins.utilsPlugin.sendBroadcast({action:"com.linspirer.edu.class.over",includeStopped:!0})},n.disableBackButton=function(e){if(n.deviceIsAndroid){var i="com.linspirer.edu.disableback";e||(i="com.linspirer.edu.enableback"),window.plugins.utilsPlugin.sendBroadcast({action:i,includeStopped:!0})}},n.screenShot=function(e,n,i){navigator.screenshot.save((function(e,o){e?(i&&i(e),console.log(e)):(n&&n(o.filePath),console.log("ok",o.filePath))}),"jpg",e)},n}]);
angular.services.factory("tabsCache",["requestTF","serviceManager",function(t,e){var n={isHome:!0,DK_list:{t4:null,t8:null,t10:null},reviewRecordID:0,synthesisTarget:0,tabOne:null,tabTwo:null,ChapterList:null,thematicList:null,task:{},wrongRecord:null,_events:{},clearCache:function(){this.DK_list={t4:null,t8:null,t10:null},this.thematicList=null,this.task={},this._events={}},on:function(t,e){return this._events[t]=this._events[t]||[],this._events[t].push({callback:e}),this},publish:function(t){if(!this._events)return this;var e,n=[].slice,a=n.call(arguments,1),s=this._events[t],l=-1,r=s.length,c=a[0],i=a[1],u=a[2];switch(a.length){case 0:for(;++l<r;)(e=s[l]).callback.call(e.ctx);return;case 1:for(;++l<r;)(e=s[l]).callback.call(e.ctx,c);return;case 2:for(;++l<r;)(e=s[l]).callback.call(e.ctx,c,i);return;case 3:for(;++l<r;)(e=s[l]).callback.call(e.ctx,c,i,u);return;default:for(;++l<r;)(e=s[l]).callback.apply(e.ctx,a);return}},refreshTabOne:function(){var e=this;t.jsonp("task/page",{scheduleID:e.task.scheduleID||null},(function(t){e.tabOne=t.data,e.publish("refreshTabOne")}),(function(t){}))},refreshTabOne_primary:function(){var e=this;t.jsonp("home/page",{},(function(t){e.tabOne=t.data,e.publish("refreshTabOne")}),(function(t){}))},refreshTabTwo:function(){var e=this;t.jsonp("passer/tagIndex",{scheduleID:null},(function(t){e.tabTwo=t.data.tagList,e.eachFirstPoint(e.tabTwo)}),(function(t){}))},eachFirstPoint:function(t){for(var e=0,n=t.length;e<n;e++){t[e].finish=0,t[e].total=0;for(var a=0,s=t[e].childNode,l=s.length;a<l;a++)for(var r=0,c=s[a].childNode,i=c.length;r<i;r++)t[e].total+=1,c[r].status>0&&(t[e].status=1),2==c[r].status&&(t[e].finish+=1)}}};return e.addService(n),n}]);
angular.directives.directive("videoPlay",["$ionicPlatform","$timeout","$interval","phoneUtils","$ocLazyLoad",function(e,n,o,t,i){return{restrict:"A",link:function(e,n,o){if(ionic.Platform.isIOS()||ionic.Platform.isWeiXin())n.attr("controls","controls");else{var t=n[0].id,a=n,l=o.duration;a.attr("width",a[0].offsetWidth),a.attr("height",a[0].offsetHeight),console.log(o),i.load("vendor/mediaelement-and-player.min.js").then((function(){var i=new MediaElementPlayer(t,{success:function(n){e.$watch((function(){if(e.isShow&&(console.log(o.videoPlay),o.videoPlay)){if(o.videoPlay.indexOf("http")<0){var t=o.videoPlay,i="";o.videoPlay==t&&(i=t<11?"课程暂未开放，敬请期待":t>20?"课程已结束，未发布录像":t>30?"课程暂未开始，敬请期待":t>40?"转码失败":"转码中，请等待",$(".videoPlayer .mejs__container").addClass("pr").append("<div class='tc f16 noVideo asd'>"+i+"</div>"))}else n.setSrc(o.videoPlay),$(".videoPlayer .mejs-playpause-button").removeClass("mejs-pause").addClass("mejs-play");e.isShow=!1}})),o.$observe("src",(function(){i&&i.play()}))}});function a(){i.pause()}i&&i.play();var r=(new Date).getTime();document.addEventListener("pause",a,!1),n.on("$destroy",(function(){l&&(new Date).getTime()-r>=1e3*l/2&&e.finishItem&&e.finishItem(),document.removeEventListener("pause",a,!1)}))}))}}}}]),angular.directives.directive("wmVideo",["$ionicPlatform","$timeout","$interval","$rootScope","$ocLazyLoad",function(e,n,o,t,i){return{restrict:"A",link:function(e,o,i){console.log("wmVideo");var a=o;function l(){console.log("webkitbeginfullscreen"),t.videoFullScreen=!0,m(!0)}function r(){console.log("webkitendfullscreen"),m(!0),n((function(){t.videoFullScreen=!1}),1500)}"VIDEO"!=o[0].tagName&&(a=o[0].getElementsByTagName("video")),a[0].setAttribute("webkit-playsinline",!0),a[0].setAttribute("playsinline",!0),console.log(a),ionic.Platform.isIOS()&&(a[0].addEventListener("webkitbeginfullscreen",l),a[0].addEventListener("webkitendfullscreen",r),window.addEventListener("orientationchange",v,!1));var s=null,c="portrait";function d(){}function u(){console.log("onResume---------"),ionic.Platform.isIOS()&&"landscape"==c&&(console.log("设为横屏"),screen.orientation.lock("landscape"))}function v(){"landscape"==c&&(console.log("lock landscape"),screen.orientation.lock("landscape"))}function m(e){if(console.log("changeOrientation---"),e||(new Date).getTime()-s>1e3||!s){s=(new Date).getTime();cordova.plugins.screenorientation;"portrait"==c?(console.log("设为横屏"),screen.orientation.lock("landscape"),c="landscape"):(console.log("设为竖屏"),screen.orientation.lock("portrait"),c="portrait")}}document.addEventListener("pause",d,!1),document.addEventListener("resume",u,!1),o.on("$destroy",(function(){document.removeEventListener("pause",d,!1),document.removeEventListener("resume",u,!1),ionic.Platform.isIOS()&&(a[0].removeEventListener("webkitbeginfullscreen",l,!1),a[0].removeEventListener("webkitendfullscreen",r,!1),window.removeEventListener("orientationchange",v,!1),"landscape"==c&&m(!0))}))}}}]);
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";var e=function(e,t,n,i){var o={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){o.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){o.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(o.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(o.features)return o.features;var e=o.createEl(),t=e.style,n="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!i.pointerEvent){var a=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);r&&r.length>0&&(r=parseInt(r[1],10),r>=1&&8>r&&(i.isOldIOSPhone=!0))}var l=a.match(/Android\s([0-9\.]*)/),s=l?l[1]:0;s=parseFloat(s),s>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(a)}for(var u,c,d=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],p=0;4>p;p++){n=m[p];for(var f=0;3>f;f++)u=d[f],c=n+(n?u.charAt(0).toUpperCase()+u.slice(1):u),!i[u]&&c in t&&(i[u]=c);n&&!i.raf&&(n=n.toLowerCase(),i.raf=window[n+"RequestAnimationFrame"],i.raf&&(i.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!i.raf){var y=0;i.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-y)),i=window.setTimeout(function(){e(t+n)},n);return y=t+n,i},i.caf=function(e){clearTimeout(e)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var a=this,r=25,l=3,s={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(s,i);var u,c,d,m,p,f,y,v,h,x,g,w,b,I,C,D,M,S,T,A,E,O,k,R,Z,P,F,L,z,_,N,U,Y,W,B,G,H,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce,de,me=function(){return{x:0,y:0}},pe=me(),fe=me(),ye=me(),ve={},he=0,xe={},ge=me(),we=0,be=!0,Ie=[],Ce={},De=!1,Me=function(e,t){o.extend(a,t.publicMethods),Ie.push(e)},Se=function(e){var t=en();return e>t-1?e-t:0>e?t+e:e},Te={},Ae=function(e,t){return Te[e]||(Te[e]=[]),Te[e].push(t)},Ee=function(e){var t=Te[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(a,n)}},Oe=function(){return(new Date).getTime()},ke=function(e){ue=e,a.bg.style.opacity=e*s.bgOpacity},Re=function(e,t,n,i,o){(!De||o&&o!==a.currItem)&&(i/=o?o.fitRatio:a.currItem.fitRatio),e[O]=w+t+"px, "+n+"px"+b+" scale("+i+")"},Ze=function(e){oe&&(e&&(x>a.currItem.fitRatio?De||(pn(a.currItem,!1,!0),De=!0):De&&(pn(a.currItem),De=!1)),Re(oe,ye.x,ye.y,x))},Pe=function(e){e.container&&Re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Fe=function(e,t){t[O]=w+e+"px, 0px"+b},Le=function(e,t){if(!s.loop&&t){var n=m+(ge.x*he-e)/ge.x,i=Math.round(e-gt.x);(0>n&&i>0||n>=en()-1&&0>i)&&(e=gt.x+i*s.mainScrollEndFriction)}gt.x=e,Fe(e,p)},ze=function(e,t){var n=wt[e]-xe[e];return fe[e]+pe[e]+n-n*(t/g)},_e=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Ne=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Ue=null,Ye=function(){Ue&&(o.unbind(document,"mousemove",Ye),o.addClass(e,"pswp--has_mouse"),s.mouseUsed=!0,Ee("mouseUsed")),Ue=setTimeout(function(){Ue=null},100)},We=function(){o.bind(document,"keydown",a),N.transform&&o.bind(a.scrollWrap,"click",a),s.mouseUsed||o.bind(document,"mousemove",Ye),o.bind(window,"resize scroll orientationchange",a),Ee("bindEvents")},Be=function(){o.unbind(window,"resize scroll orientationchange",a),o.unbind(window,"scroll",h.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",Ye),N.transform&&o.unbind(a.scrollWrap,"click",a),V&&o.unbind(window,y,a),clearTimeout(U),Ee("unbindEvents")},Ge=function(e,t){var n=un(a.currItem,ve,e);return t&&(ie=n),n},He=function(e){return e||(e=a.currItem),e.initialZoomLevel},Xe=function(e){return e||(e=a.currItem),e.w>0?s.maxSpreadZoom:1},Ve=function(e,t,n,i){return i===a.currItem.initialZoomLevel?(n[e]=a.currItem.initialPosition[e],!0):(n[e]=ze(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},Ke=function(){if(O){var t=N.perspective&&!R;return w="translate"+(t?"3d(":"("),void(b=N.perspective?", 0px)":")")}O="left",o.addClass(e,"pswp--ie"),Fe=function(e,t){t.left=e+"px"},Pe=function(e){var t=e.fitRatio>1?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Ze=function(){if(oe){var e=oe,t=a.currItem,n=t.fitRatio>1?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=ye.x+"px",e.top=ye.y+"px"}}},qe=function(e){var t="";s.escKey&&27===e.keyCode?t="close":s.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,a[t]()))},$e=function(e){e&&($||q||ae||H)&&(e.preventDefault(),e.stopPropagation())},je=function(){a.setScrollOffset(0,o.getScrollY())},Je={},Qe=0,et=function(e){Je[e]&&(Je[e].raf&&P(Je[e].raf),Qe--,delete Je[e])},tt=function(e){Je[e]&&et(e),Je[e]||(Qe++,Je[e]={})},nt=function(){for(var e in Je)Je.hasOwnProperty(e)&&et(e)},it=function(e,t,n,i,o,a,r){var l,s=Oe();tt(e);var u=function(){if(Je[e]){if(l=Oe()-s,l>=i)return et(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Je[e].raf=Z(u)}};u()},ot={shout:Ee,listen:Ae,viewportSize:ve,options:s,isMainScrollAnimating:function(){return ae},getZoomLevel:function(){return x},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return ee},setScrollOffset:function(e,t){xe.x=e,_=xe.y=t,Ee("updateScrollOffset",xe)},applyZoomPan:function(e,t,n,i){ye.x=t,ye.y=n,x=e,Ze(i)},init:function(){if(!u&&!c){var n;a.framework=o,a.template=e,a.bg=o.getChildByClass(e,"pswp__bg"),F=e.className,u=!0,N=o.detectFeatures(),Z=N.raf,P=N.caf,O=N.transform,z=N.oldIE,a.scrollWrap=o.getChildByClass(e,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),p=a.container.style,a.itemHolders=D=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],D[0].el.style.display=D[2].el.style.display="none",Ke(),h={resize:a.updateSize,orientationchange:function(){clearTimeout(U),U=setTimeout(function(){ve.x!==a.scrollWrap.clientWidth&&a.updateSize()},500)},scroll:je,keydown:qe,click:$e};var i=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!i||(s.showAnimationDuration=s.hideAnimationDuration=0),n=0;n<Ie.length;n++)a["init"+Ie[n]]();if(t){var r=a.ui=new t(a,o);r.init()}Ee("firstUpdate"),m=m||s.index||0,(isNaN(m)||0>m||m>=en())&&(m=0),a.currItem=Qt(m),(N.isOldIOSPhone||N.isOldAndroid)&&(be=!1),e.setAttribute("aria-hidden","false"),s.modal&&(be?e.style.position="fixed":(e.style.position="absolute",e.style.top=o.getScrollY()+"px")),void 0===_&&(Ee("initialLayout"),_=L=o.getScrollY());var d="pswp--open ";for(s.mainClass&&(d+=s.mainClass+" "),s.showHideOpacity&&(d+="pswp--animate_opacity "),d+=R?"pswp--touch":"pswp--notouch",d+=N.animationName?" pswp--css_animation":"",d+=N.svg?" pswp--svg":"",o.addClass(e,d),a.updateSize(),f=-1,we=null,n=0;l>n;n++)Fe((n+f)*ge.x,D[n].el.style);z||o.bind(a.scrollWrap,v,a),Ae("initialZoomInEnd",function(){a.setContent(D[0],m-1),a.setContent(D[2],m+1),D[0].el.style.display=D[2].el.style.display="block",s.focus&&e.focus(),We()}),a.setContent(D[1],m),a.updateCurrItem(),Ee("afterInit"),be||(I=setInterval(function(){Qe||V||ee||x!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(e,"pswp--visible")}},close:function(){u&&(u=!1,c=!0,Ee("close"),Be(),nn(a.currItem,null,!0,a.destroy))},destroy:function(){Ee("destroy"),qt&&clearTimeout(qt),e.setAttribute("aria-hidden","true"),e.className=F,I&&clearInterval(I),o.unbind(a.scrollWrap,v,a),o.unbind(window,"scroll",a),Mt(),nt(),Te=null},panTo:function(e,t,n){n||(e>ie.min.x?e=ie.min.x:e<ie.max.x&&(e=ie.max.x),t>ie.min.y?t=ie.min.y:t<ie.max.y&&(t=ie.max.y)),ye.x=e,ye.y=t,Ze()},handleEvent:function(e){e=e||window.event,h[e.type]&&h[e.type](e)},goTo:function(e){e=Se(e);var t=e-m;we=t,m=e,a.currItem=Qt(m),he-=t,Le(ge.x*he),nt(),ae=!1,a.updateCurrItem()},next:function(){a.goTo(m+1)},prev:function(){a.goTo(m-1)},updateCurrZoomItem:function(e){if(e&&Ee("beforeChange",0),D[1].el.children.length){var t=D[1].el.children[0];oe=o.hasClass(t,"pswp__zoom-wrap")?t.style:null}else oe=null;ie=a.currItem.bounds,g=x=a.currItem.initialZoomLevel,ye.x=ie.center.x,ye.y=ie.center.y,e&&Ee("afterChange")},invalidateCurrItems:function(){C=!0;for(var e=0;l>e;e++)D[e].item&&(D[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==we){var t,n=Math.abs(we);if(!(e&&2>n)){a.currItem=Qt(m),De=!1,Ee("beforeChange",we),n>=l&&(f+=we+(we>0?-l:l),n=l);for(var i=0;n>i;i++)we>0?(t=D.shift(),D[l-1]=t,f++,Fe((f+2)*ge.x,t.el.style),a.setContent(t,m-n+i+1+1)):(t=D.pop(),D.unshift(t),f--,Fe(f*ge.x,t.el.style),a.setContent(t,m+n-i-1-1));if(oe&&1===Math.abs(we)){var o=Qt(M);o.initialZoomLevel!==x&&(un(o,ve),pn(o),Pe(o))}we=0,a.updateCurrZoomItem(),M=m,Ee("afterChange")}}},updateSize:function(t){if(!be&&s.modal){var n=o.getScrollY();if(_!==n&&(e.style.top=n+"px",_=n),!t&&Ce.x===window.innerWidth&&Ce.y===window.innerHeight)return;Ce.x=window.innerWidth,Ce.y=window.innerHeight,e.style.height=Ce.y+"px"}if(ve.x=a.scrollWrap.clientWidth,ve.y=a.scrollWrap.clientHeight,je(),ge.x=ve.x+Math.round(ve.x*s.spacing),ge.y=ve.y,Le(ge.x*he),Ee("beforeResize"),void 0!==f){for(var i,r,u,c=0;l>c;c++)i=D[c],Fe((c+f)*ge.x,i.el.style),u=m+c-1,s.loop&&en()>2&&(u=Se(u)),r=Qt(u),r&&(C||r.needsUpdate||!r.bounds)?(a.cleanSlide(r),a.setContent(i,u),1===c&&(a.currItem=r,a.updateCurrZoomItem(!0)),r.needsUpdate=!1):-1===i.index&&u>=0&&a.setContent(i,u),r&&r.container&&(un(r,ve),pn(r),Pe(r));C=!1}g=x=a.currItem.initialZoomLevel,ie=a.currItem.bounds,ie&&(ye.x=ie.center.x,ye.y=ie.center.y,Ze(!0)),Ee("resize")},zoomTo:function(e,t,n,i,a){t&&(g=x,wt.x=Math.abs(t.x)-ye.x,wt.y=Math.abs(t.y)-ye.y,_e(fe,ye));var r=Ge(e,!1),l={};Ve("x",r,l,e),Ve("y",r,l,e);var s=x,u={x:ye.x,y:ye.y};Ne(l);var c=function(t){1===t?(x=e,ye.x=l.x,ye.y=l.y):(x=(e-s)*t+s,ye.x=(l.x-u.x)*t+u.x,ye.y=(l.y-u.y)*t+u.y),a&&a(t),Ze(1===t)};n?it("customZoomTo",0,1,n,i||o.easing.sine.inOut,c):c(1)}},at=30,rt=10,lt={},st={},ut={},ct={},dt={},mt=[],pt={},ft=[],yt={},vt=0,ht=me(),xt=0,gt=me(),wt=me(),bt=me(),It=function(e,t){return e.x===t.x&&e.y===t.y},Ct=function(e,t){return Math.abs(e.x-t.x)<r&&Math.abs(e.y-t.y)<r},Dt=function(e,t){return yt.x=Math.abs(e.x-t.x),yt.y=Math.abs(e.y-t.y),Math.sqrt(yt.x*yt.x+yt.y*yt.y)},Mt=function(){j&&(P(j),j=null)},St=function(){V&&(j=Z(St),Wt())},Tt=function(){return!("fit"===s.scaleMode&&x===a.currItem.initialZoomLevel)},At=function(e,t){return e&&e!==document?e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:t(e)?e:At(e.parentNode,t):!1},Et={},Ot=function(e,t){return Et.prevent=!At(e.target,s.isClickableElement),Ee("preventDragEvent",e,t,Et),Et.prevent},kt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Rt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Zt=function(e,t,n){if(e-W>50){var i=ft.length>2?ft.shift():{};i.x=t,i.y=n,ft.push(i),W=e}},Pt=function(){var e=ye.y-a.currItem.initialPosition.y;return 1-Math.abs(e/(ve.y/2))},Ft={},Lt={},zt=[],_t=function(e){for(;zt.length>0;)zt.pop();return k?(de=0,mt.forEach(function(e){0===de?zt[0]=e:1===de&&(zt[1]=e),de++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(zt[0]=kt(e.touches[0],Ft),e.touches.length>1&&(zt[1]=kt(e.touches[1],Lt))):(Ft.x=e.pageX,Ft.y=e.pageY,Ft.id="",zt[0]=Ft),zt},Nt=function(e,t){var n,i,o,r,l=0,u=ye[e]+t[e],c=t[e]>0,d=gt.x+t.x,m=gt.x-pt.x;return n=u>ie.min[e]||u<ie.max[e]?s.panEndFriction:1,u=ye[e]+t[e]*n,!s.allowPanToNext&&x!==a.currItem.initialZoomLevel||(oe?"h"!==re||"x"!==e||q||(c?(u>ie.min[e]&&(n=s.panEndFriction,l=ie.min[e]-u,i=ie.min[e]-fe[e]),(0>=i||0>m)&&en()>1?(r=d,0>m&&d>pt.x&&(r=pt.x)):ie.min.x!==ie.max.x&&(o=u)):(u<ie.max[e]&&(n=s.panEndFriction,l=u-ie.max[e],i=fe[e]-ie.max[e]),(0>=i||m>0)&&en()>1?(r=d,m>0&&d<pt.x&&(r=pt.x)):ie.min.x!==ie.max.x&&(o=u))):r=d,"x"!==e)?void(ae||J||x>a.currItem.fitRatio&&(ye[e]+=t[e]*n)):(void 0!==r&&(Le(r,!0),J=r===pt.x?!1:!0),ie.min.x!==ie.max.x&&(void 0!==o?ye.x=o:J||(ye.x+=t.x*n)),void 0!==r)},Ut=function(e){if(!("mousedown"===e.type&&e.button>0)){if(Jt)return void e.preventDefault();if(!X||"mousedown"!==e.type){if(Ot(e,!0)&&e.preventDefault(),Ee("pointerDown"),k){var t=o.arraySearch(mt,e.pointerId,"id");0>t&&(t=mt.length),mt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=_t(e),i=n.length;Q=null,nt(),V&&1!==i||(V=le=!0,o.bind(window,y,a),G=ce=se=H=J=$=K=q=!1,re=null,Ee("firstTouchStart",n),_e(fe,ye),pe.x=pe.y=0,_e(ct,n[0]),_e(dt,ct),pt.x=ge.x*he,ft=[{x:ct.x,y:ct.y}],W=Y=Oe(),Ge(x,!0),Mt(),St()),!ee&&i>1&&!ae&&!J&&(g=x,q=!1,ee=K=!0,pe.y=pe.x=0,_e(fe,ye),_e(lt,n[0]),_e(st,n[1]),Rt(lt,st,bt),wt.x=Math.abs(bt.x)-ye.x,wt.y=Math.abs(bt.y)-ye.y,te=ne=Dt(lt,st))}}},Yt=function(e){if(e.preventDefault(),k){var t=o.arraySearch(mt,e.pointerId,"id");if(t>-1){var n=mt[t];n.x=e.pageX,n.y=e.pageY}}if(V){var i=_t(e);if(re||$||ee)Q=i;else if(gt.x!==ge.x*he)re="h";else{var a=Math.abs(i[0].x-ct.x)-Math.abs(i[0].y-ct.y);Math.abs(a)>=rt&&(re=a>0?"h":"v",Q=i)}}},Wt=function(){if(Q){var e=Q.length;if(0!==e)if(_e(lt,Q[0]),ut.x=lt.x-ct.x,ut.y=lt.y-ct.y,ee&&e>1){if(ct.x=lt.x,ct.y=lt.y,!ut.x&&!ut.y&&It(Q[1],st))return;_e(st,Q[1]),q||(q=!0,Ee("zoomGestureStarted"));var t=Dt(lt,st),n=Vt(t);n>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(ce=!0);var i=1,o=He(),r=Xe();if(o>n)if(s.pinchToClose&&!ce&&g<=a.currItem.initialZoomLevel){var l=o-n,u=1-l/(o/1.2);ke(u),Ee("onPinchClose",u),se=!0}else i=(o-n)/o,i>1&&(i=1),n=o-i*(o/3);else n>r&&(i=(n-r)/(6*o),i>1&&(i=1),n=r+i*o);0>i&&(i=0),te=t,Rt(lt,st,ht),pe.x+=ht.x-bt.x,pe.y+=ht.y-bt.y,_e(bt,ht),ye.x=ze("x",n),ye.y=ze("y",n),G=n>x,x=n,Ze()}else{if(!re)return;if(le&&(le=!1,Math.abs(ut.x)>=rt&&(ut.x-=Q[0].x-dt.x),Math.abs(ut.y)>=rt&&(ut.y-=Q[0].y-dt.y)),ct.x=lt.x,ct.y=lt.y,0===ut.x&&0===ut.y)return;if("v"===re&&s.closeOnVerticalDrag&&!Tt()){pe.y+=ut.y,ye.y+=ut.y;var c=Pt();return H=!0,Ee("onVerticalDrag",c),ke(c),void Ze()}Zt(Oe(),lt.x,lt.y),$=!0,ie=a.currItem.bounds;var d=Nt("x",ut);d||(Nt("y",ut),Ne(ye),Ze())}}},Bt=function(e){if(N.isOldAndroid){if(X&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout(X),X=setTimeout(function(){X=0},600))}Ee("pointerUp"),Ot(e,!1)&&e.preventDefault();var t;if(k){var n=o.arraySearch(mt,e.pointerId,"id");if(n>-1)if(t=mt.splice(n,1)[0],navigator.msPointerEnabled){var i={4:"mouse",2:"touch",3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}else t.type=e.pointerType||"mouse"}var r,l=_t(e),u=l.length;if("mouseup"===e.type&&(u=0),2===u)return Q=null,!0;1===u&&_e(dt,l[0]),0!==u||re||ae||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Ee("touchRelease",e,t));var c=-1;if(0===u&&(V=!1,o.unbind(window,y,a),Mt(),ee?c=0:-1!==xt&&(c=Oe()-xt)),xt=1===u?Oe():-1,r=-1!==c&&150>c?"zoom":"swipe",ee&&2>u&&(ee=!1,1===u&&(r="zoomPointerUp"),Ee("zoomGestureEnded")),Q=null,$||q||ae||H)if(nt(),B||(B=Gt()),B.calculateSwipeSpeed("x"),H){var d=Pt();if(d<s.verticalDragRange)a.close();else{var m=ye.y,p=ue;it("verticalDrag",0,1,300,o.easing.cubic.out,function(e){ye.y=(a.currItem.initialPosition.y-m)*e+m,ke((1-p)*e+p),Ze()}),Ee("onVerticalDrag",1)}}else{if((J||ae)&&0===u){var f=Xt(r,B);if(f)return;r="zoomPointerUp"}if(!ae)return"swipe"!==r?void Kt():void(!J&&x>a.currItem.fitRatio&&Ht(B))}},Gt=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(i){ft.length>1?(e=Oe()-W+50,t=ft[ft.length-2][i]):(e=Oe()-Y,t=dt[i]),n.lastFlickOffset[i]=ct[i]-t,n.lastFlickDist[i]=Math.abs(n.lastFlickOffset[i]),n.lastFlickDist[i]>20?n.lastFlickSpeed[i]=n.lastFlickOffset[i]/e:n.lastFlickSpeed[i]=0,Math.abs(n.lastFlickSpeed[i])<.1&&(n.lastFlickSpeed[i]=0),n.slowDownRatio[i]=.95,n.slowDownRatioReverse[i]=1-n.slowDownRatio[i],n.speedDecelerationRatio[i]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(ye[e]>ie.min[e]?n.backAnimDestination[e]=ie.min[e]:ye[e]<ie.max[e]&&(n.backAnimDestination[e]=ie.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,it("bounceZoomPan"+e,ye[e],n.backAnimDestination[e],t||300,o.easing.sine.out,function(t){ye[e]=t,Ze()}))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,ye[e]+=n.distanceOffset[e])},panAnimLoop:function(){return Je.zoomPan&&(Je.zoomPan.raf=Z(n.panAnimLoop),n.now=Oe(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),Ze(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05)?(ye.x=Math.round(ye.x),ye.y=Math.round(ye.y),Ze(),void et("zoomPan")):void 0}};return n},Ht=function(e){return e.calculateSwipeSpeed("y"),ie=a.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(tt("zoomPan"),e.lastNow=Oe(),void e.panAnimLoop())},Xt=function(e,t){var n;ae||(vt=m);var i;if("swipe"===e){var r=ct.x-dt.x,l=t.lastFlickDist.x<10;r>at&&(l||t.lastFlickOffset.x>20)?i=-1:-at>r&&(l||t.lastFlickOffset.x<-20)&&(i=1)}var u;i&&(m+=i,0>m?(m=s.loop?en()-1:0,u=!0):m>=en()&&(m=s.loop?0:en()-1,u=!0),(!u||s.loop)&&(we+=i,he-=i,n=!0));var c,d=ge.x*he,p=Math.abs(d-gt.x);return n||d>gt.x==t.lastFlickSpeed.x>0?(c=Math.abs(t.lastFlickSpeed.x)>0?p/Math.abs(t.lastFlickSpeed.x):333,c=Math.min(c,400),c=Math.max(c,250)):c=333,vt===m&&(n=!1),ae=!0,Ee("mainScrollAnimStart"),it("mainScroll",gt.x,d,c,o.easing.cubic.out,Le,function(){nt(),ae=!1,vt=-1,(n||vt!==m)&&a.updateCurrItem(),Ee("mainScrollAnimComplete")}),n&&a.updateCurrItem(!0),n},Vt=function(e){return 1/ne*e*g},Kt=function(){var e=x,t=He(),n=Xe();t>x?e=t:x>n&&(e=n);var i,r=1,l=ue;return se&&!G&&!ce&&t>x?(a.close(),!0):(se&&(i=function(e){ke((r-l)*e+l)}),a.zoomTo(e,0,200,o.easing.cubic.out,i),!0)};Me("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){S=e+t,T=e+n,A=e+i,E=o?e+o:""};k=N.pointerEvent,k&&N.touch&&(N.touch=!1),k?navigator.msPointerEnabled?e("MSPointer","Down","Move","Up","Cancel"):e("pointer","down","move","up","cancel"):N.touch?(e("touch","start","move","end","cancel"),R=!0):e("mouse","down","move","up"),y=T+" "+A+" "+E,v=S,k&&!R&&(R=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=R,h[S]=Ut,h[T]=Yt,h[A]=Bt,E&&(h[E]=h[A]),N.touch&&(v+=" mousedown",y+=" mousemove mouseup",h.mousedown=h[S],h.mousemove=h[T],h.mouseup=h[A]),R||(s.allowPanToNext=!1)}}});var qt,$t,jt,Jt,Qt,en,tn,nn=function(t,n,i,r){qt&&clearTimeout(qt),Jt=!0,jt=!0;var l;t.initialLayout?(l=t.initialLayout,t.initialLayout=null):l=s.getThumbBoundsFn&&s.getThumbBoundsFn(m);var u=i?s.hideAnimationDuration:s.showAnimationDuration,c=function(){et("initialZoom"),i?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(ke(1),n&&(n.style.display="block"),o.addClass(e,"pswp--animated-in"),Ee("initialZoom"+(i?"OutEnd":"InEnd"))),r&&r(),Jt=!1};if(!u||!l||void 0===l.x)return Ee("initialZoom"+(i?"Out":"In")),x=t.initialZoomLevel,_e(ye,t.initialPosition),Ze(),e.style.opacity=i?0:1,ke(1),void(u?setTimeout(function(){c()},u):c());var p=function(){var n=d,r=!a.currItem.src||a.currItem.loadError||s.showHideOpacity;t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),i||(x=l.w/t.w,ye.x=l.x,ye.y=l.y-L,a[r?"template":"bg"].style.opacity=.001,Ze()),tt("initialZoom"),i&&!n&&o.removeClass(e,"pswp--animated-in"),r&&(i?o[(n?"remove":"add")+"Class"](e,"pswp--animate_opacity"):setTimeout(function(){o.addClass(e,"pswp--animate_opacity")},30)),qt=setTimeout(function(){if(Ee("initialZoom"+(i?"Out":"In")),i){var a=l.w/t.w,s={x:ye.x,y:ye.y},d=x,m=ue,p=function(t){1===t?(x=a,ye.x=l.x,ye.y=l.y-_):(x=(a-d)*t+d,ye.x=(l.x-s.x)*t+s.x,ye.y=(l.y-_-s.y)*t+s.y),Ze(),r?e.style.opacity=1-t:ke(m-t*m)};n?it("initialZoom",0,1,u,o.easing.cubic.out,p,c):(p(1),qt=setTimeout(c,u+20))}else x=t.initialZoomLevel,_e(ye,t.initialPosition),Ze(),ke(1),r?e.style.opacity=1:ke(1),qt=setTimeout(c,u+20)},i?25:90)};p()},on={},an=[],rn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return $t.length}},ln=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},sn=function(e,t,n){var i=e.bounds;i.center.x=Math.round((on.x-t)/2),i.center.y=Math.round((on.y-n)/2)+e.vGap.top,i.max.x=t>on.x?Math.round(on.x-t):i.center.x,i.max.y=n>on.y?Math.round(on.y-n)+e.vGap.top:i.center.y,i.min.x=t>on.x?0:i.center.x,i.min.y=n>on.y?e.vGap.top:i.center.y},un=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Ee("parseVerticalMargin",e)),on.x=t.x,on.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=on.x/e.w,a=on.y/e.h;e.fitRatio=a>o?o:a;var r=s.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=ln())}if(!n)return;return sn(e,e.w*n,e.h*n),i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=ln(),e.initialPosition=e.bounds.center,e.bounds},cn=function(e,t,n,i,o,r){t.loadError||i&&(t.imageAppended=!0,pn(t,i,t===a.currItem&&De),n.appendChild(i),r&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},dn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=o.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},mn=function(e,t){return e.src&&e.loadError&&e.container?(t&&(e.container.innerHTML=""),e.container.innerHTML=s.errorMsg.replace("%url%",e.src),!0):void 0},pn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},fn=function(){if(an.length){for(var e,t=0;t<an.length;t++)e=an[t],e.holder.index===e.index&&cn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);an=[]}};Me("Controller",{publicMethods:{lazyLoadItem:function(e){e=Se(e);var t=Qt(e);t&&(!t.loaded&&!t.loading||C)&&(Ee("gettingData",e,t),t.src&&dn(t))},initController:function(){o.extend(s,rn,!0),a.items=$t=n,Qt=a.getItemAt,en=s.getNumItemsFn,tn=s.loop,en()<3&&(s.loop=!1),Ae("beforeChange",function(e){var t,n=s.preload,i=null===e?!0:e>=0,o=Math.min(n[0],en()),r=Math.min(n[1],en());for(t=1;(i?r:o)>=t;t++)a.lazyLoadItem(m+t);for(t=1;(i?o:r)>=t;t++)a.lazyLoadItem(m-t)}),Ae("initialLayout",function(){a.currItem.initialLayout=s.getThumbBoundsFn&&s.getThumbBoundsFn(m)}),Ae("mainScrollAnimComplete",fn),Ae("initialZoomInEnd",fn),Ae("destroy",function(){for(var e,t=0;t<$t.length;t++)e=$t[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);an=null})},getItemAt:function(e){return e>=0&&void 0!==$t[e]?$t[e]:!1},allowProgressiveImg:function(){return s.forceProgressiveLoading||!R||s.mouseUsed||screen.width>1200},setContent:function(e,t){s.loop&&(t=Se(t));var n=a.getItemAt(e.index);n&&(n.container=null);var i,r=a.getItemAt(t);if(!r)return void(e.el.innerHTML="");Ee("gettingData",t,r),e.index=t,e.item=r;var l=r.container=o.createEl("pswp__zoom-wrap");if(!r.src&&r.html&&(r.html.tagName?l.appendChild(r.html):l.innerHTML=r.html),mn(r),un(r,ve),!r.src||r.loadError||r.loaded)r.src&&!r.loadError&&(i=o.createEl("pswp__img","img"),i.style.opacity=1,i.src=r.src,pn(r,i),cn(t,r,l,i,!0));else{if(r.loadComplete=function(n){if(u){if(e&&e.index===t){if(mn(n,!0))return n.loadComplete=n.img=null,un(n,ve),Pe(n),void(e.index===m&&a.updateCurrZoomItem());n.imageAppended?!Jt&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):N.transform&&(ae||Jt)?an.push({item:n,baseDiv:l,img:n.img,index:t,holder:e,clearPlaceholder:!0}):cn(t,n,l,n.img,ae||Jt,!0)}n.loadComplete=null,n.img=null,Ee("imageLoadComplete",t,n)}},o.features.transform){var c="pswp__img pswp__img--placeholder";c+=r.msrc?"":" pswp__img--placeholder--blank";var d=o.createEl(c,r.msrc?"img":"");r.msrc&&(d.src=r.msrc),pn(r,d),l.appendChild(d),r.placeholder=d}r.loading||dn(r),a.allowProgressiveImg()&&(!jt&&N.transform?an.push({item:r,baseDiv:l,img:r.img,index:t,holder:e}):cn(t,r,l,r.img,!0,!0))}jt||t!==m?Pe(r):(oe=l.style,nn(r,i||r.img)),e.el.innerHTML="",e.el.appendChild(l)},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var yn,vn={},hn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};Me("Tap",{publicMethods:{initTap:function(){Ae("firstTouchStart",a.onTapStart),Ae("touchRelease",a.onTapRelease),Ae("destroy",function(){vn={},yn=null})},onTapStart:function(e){e.length>1&&(clearTimeout(yn),yn=null)},onTapRelease:function(e,t){if(t&&!$&&!K&&!Qe){var n=t;if(yn&&(clearTimeout(yn),yn=null,Ct(n,vn)))return void Ee("doubleTap",n);if("mouse"===t.type)return void hn(e,t,"mouse");var i=e.target.tagName.toUpperCase();if("BUTTON"===i||o.hasClass(e.target,"pswp__single-tap"))return void hn(e,t);_e(vn,n),yn=setTimeout(function(){hn(e,t),yn=null},300)}}}});var xn;Me("DesktopZoom",{publicMethods:{initDesktopZoom:function(){z||(R?Ae("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))},setupDesktopZoom:function(t){xn={};var n="wheel mousewheel DOMMouseScroll";Ae("bindEvents",function(){o.bind(e,n,a.handleMouseWheel)}),Ae("unbindEvents",function(){xn&&o.unbind(e,n,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var i,r=function(){a.mouseZoomedIn&&(o.removeClass(e,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>x?o.addClass(e,"pswp--zoom-allowed"):o.removeClass(e,"pswp--zoom-allowed"),l()},l=function(){i&&(o.removeClass(e,"pswp--dragging"),i=!1)};Ae("resize",r),Ae("afterChange",r),Ae("pointerDown",function(){a.mouseZoomedIn&&(i=!0,o.addClass(e,"pswp--dragging"))}),Ae("pointerUp",l),t||r()},handleMouseWheel:function(e){if(x<=a.currItem.fitRatio)return s.modal&&(!s.closeOnScroll||Qe||V?e.preventDefault():O&&Math.abs(e.deltaY)>2&&(d=!0,a.close())),!0;if(e.stopPropagation(),xn.x=0,"deltaX"in e)1===e.deltaMode?(xn.x=18*e.deltaX,xn.y=18*e.deltaY):(xn.x=e.deltaX,xn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(xn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?xn.y=-.16*e.wheelDeltaY:xn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;xn.y=e.detail}Ge(x,!0);var t=ye.x-xn.x,n=ye.y-xn.y;(s.modal||t<=ie.min.x&&t>=ie.max.x&&n<=ie.min.y&&n>=ie.max.y)&&e.preventDefault(),a.panTo(t,n)},toggleDesktopZoom:function(t){t=t||{x:ve.x/2+xe.x,y:ve.y/2+xe.y};var n=s.getDoubleTapZoom(!0,a.currItem),i=x===n;a.mouseZoomedIn=!i,a.zoomTo(i?a.currItem.initialZoomLevel:n,t,333),o[(i?"remove":"add")+"Class"](e,"pswp--zoomed-in")}}}),o.extend(a,ot)};return e});
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
angular.services.factory("$openResource",["$ionicModal","$ionicPlatform","$prompt","$request","$timeout",function(e,i,t,o,n){return function(r,s){var a=r.scope||{};function l(t){var o=navigator.userAgent;a.sewiseItem=t,e.fromTemplateUrl("js/services/sewiseSPlayer.html",angular.extend({animation:"slide-in-right",hardwareBackButtonClose:!1},r)).then((function(e){e.show(),a.modal=e,setTimeout((function(){navigator.__defineGetter__("userAgent",(function(){return o}))}),1e4)}));var n=i.registerBackButtonAction(a.closeModal,500);a.closeModal=function(){a.modal.remove(),n()}}if(a.rTitle=r.title,a.rDuration=r.duration,a.rType=r.itype,a._item=r.type&&r,"video"==a.rType&&a._item&&a._item.type&&o.jsonp("resource/savePlayRecord",{typeID:a._item.type,resourceID:a._item.id},(function(e){a._item.playNum++}),(function(e){})),a.setFavorite=function(){var e=a._item;a.isSetting=!0,o.jsonp("resource/favorite",{type:e.type,id:e.id,action:e.isfavorite?2:1},(function(i){e.isfavorite=e.isfavorite?0:1,s&&(s.isFavorite=s.isFavorite?0:1),a.isSetting=!1,t.showTip(i.msg)}),(function(e){a.isSetting=!1,t.showTip(e.msg)}))},a._item&&a._item.swlid)l(a._item);else if(s&&s.swlid)l(s);else{var u,c,m;if("pictures"==r.itype)a.url=r.url;else{if(a.file=/[.]/.exec(r.url)?/[^.]+$/.exec(r.url):void 0,"swf"==a.file[0].toLowerCase())return t.showTip("不能播放flash格式视频");"file"==r.itype&&(u=appConf.pptViewHost+"/op/embed.aspx/?src=",c=encodeURIComponent(r.url),m='<iframe src="'+u+c+'&access_token=1&access_token_ttl=0&wdMobileHost=2" width="100%" height="100%" target="_self"></iframe>',a.htmlIframe=m)}a.$on("$destroy",(function(){a.modal&&a.modal.remove()}));var f=(new Date).getTime();window.cordova&&ionic.Platform.isAndroid()&&"video"==a.rType?window.plugins&&window.plugins.videoPlayPlugin.play({isFullScreen:!0,autoPlay:!0,videos:[{title:r.title,size:"22",duration:0,url:a.file.input}]},(function(e){if(e.duration=e.duration/1e3,s&&1!=s.status){var i=r.duration||s.duration||e.duration;i&&((new Date).getTime()-f>=1e3*i/2?a.finishItem&&a.finishItem():a.finishItem&&t.showTip("学习时间太短，该学习任务未完成"))}})):(window.plugins&&ionic.Platform.isAndroid()&&a.rType,d())}function d(){"pictures"==a.rType&&a.finishItem&&a.finishItem(),a.modal&&a.modal.remove(),"pictures"==a.rType?e.fromTemplateUrl("js/services/showImages.html",{scope:a,animation:"slide-in-up",hardwareBackButtonClose:!1}).then((function(e){a.modal=e,a.modal.show(),n((function(){var e=[];if("string"==typeof a.url)e.push(a.url);else{if("[object Array]"!=Object.prototype.toString.call(a.url))return;e=a.url}for(var i=[],t=0;t<e.length;t++){var o=e[t],n=new Image;n.src=o,i.push({src:o,w:0,h:0,img:n})}var s,l=0;s=setInterval((function(){l++;for(var e=!0,t=0;t<i.length;t++){var o=i[t];if(0==o.w){var n=o.img;if(n.width>0||n.height>0){var u=n.width,c=n.height;o.w=u,o.h=c}else e=!1}}(e||l>=200)&&(clearInterval(s),function(e){var i=document.querySelectorAll(".pswp")[0],t=new PhotoSwipe(i,PhotoSwipeUI_Default,e,{index:0|r.index,bgOpacity:1});t.init(),t.listen("close",(function(){a.close()}))}(i))}),50)}),100)})):e.fromTemplateUrl("js/services/openResource.html",angular.extend({animation:"slide-in-right",hardwareBackButtonClose:!1},r)).then((function(e){e.show(),a.modal=e}));var o=i.registerBackButtonAction((function(){a.close()}),500);a.close=function(){if(a.modal.remove(),o(),s&&1!=s.status){var e=document.getElementById("openResourceVideo")||document.getElementById("openResourceAudio"),i=r.duration||s&&s.duration||e&&e.duration;i&&((new Date).getTime()-f>=1e3*i/2?a.finishItem&&a.finishItem():a.finishItem&&t.showTip("学习时间太短，该学习任务未完成")),"file"==r.itype&&((new Date).getTime()-f>=3e4?a.finishItem&&a.finishItem():a.finishItem&&t.showTip("学习时间太短，该学习任务未完成"))}a.onCloseModal&&a.onCloseModal(),a.timer&&window.clearTimeout(a.timer)}}}}]),angular.services.factory("openResource",["$openResource",function(e){return e}]);
angular.directives.directive("resourceItem",["$request","prompt","openResource","$openResourceWeike","openResourceExercise","openResourceExam",function(e,t,i,r,s,a){return{restrict:"EA",transclude:!0,scope:{itemDetail:"="},templateUrl:"js/others/resource-item.html",link:function(c){var o;c.itemSetFavorite=function(i,r){var s="isfavorite";void 0===i[s]&&(s="isFavorite"),r.stopPropagation(),r.preventDefault(),o||(o=!0,e.jsonp("resource/favorite",{type:i.type,id:i.id,action:i[s]?2:1},(function(e){i[s]=i[s]?0:1,o=!1,t.showTip(e.msg)}),(function(e){o=!1,t.showTip(e.msg)})))},c.openItem=function(e){switch(c.item=e,(e=e).id=e.examID||e.id,e.title=e.title||e.name||e.text,e.url=e.cache||e.url,e.scope=c,parseInt(e.type)){case 6:s(e);break;case 7:a(e);break;case 17:case 18:case 30:e.itype="file",i(e);break;case 2:e.itype="audio",i(e);break;case 25:case 24:case 26:e.itype="video",i(e);break;case 27:case 85:r({courseId:e.id,scope:c,animation:"slide-in-right"},e);break;case 37:e.itype="pictures",i(e)}}}}}]);
angular.services.factory("$fileTransfer",["$q","$window","phoneUtils","$http","$ocLazyLoad",function(e,n,t,o,a){var i=0,r=0,s={accessKeyId:"",accessKeySecret:"",securityToken:""},u={bucket:"wmzz",endPoint:"http://oss-cn-hangzhou.aliyuncs.com",region:"oss-cn-hangzhou",domain:"http://al.cnweike.cn",accessKeyId:"",accessKeySecret:"",securityToken:""},c=appConf.dataDirectory+"/cache/",d={uid:0};function f(e){var n=e.userInfo;if(n){if(147==n.outsideHost)return 1;if(132==n.outsideHost)return 2}else if(n=ionic.app.user.user.info){if(3===n.utype)return 0;if(147==n.outsideHost)return 1;if(132==n.outsideHost)return 2}return 0}function l(e){if(e.uid)return e.uid;var n=e.userInfo;if(n){if(n.uid||n.id)return n.uid||n.id;if((n=ionic.app.user.user.info)&&(n.uid||n.id))return n.uid||n.id}else if((n=ionic.app.user.user.info)&&(n.uid||n.id))return n.uid||n.id;return d.uid}function p(e){var n=document.createElement("a");return n.href=e,n.pathname.substr(1)}function m(e,n){t.createDir(c,e,n)}var y=function(e,n){var t={uid:d.uid,ssk:angular.services.ssk},a=appConf.OSS_URL;"com.wmzz.yuejiaoxiangyunketang"==appConf.packageName&&(a="http://ktapp.wmketang.com/index.php?r=dsapi/system/getStsAuthorizeGdeu");var u=navigator.userAgent,c=window.device?window.device.uuid:"from.browser";o.jsonp(a+"&ua="+u+"&mac="+c+"&app="+appConf.appKey+"&callback=JSON_CALLBACK",{params:t,data:t,timeout:3e4}).success((function(t){if(t&&0==t.status){var o=t.data,a=o.Expiration;t.systime,r=a-t.systime-18e4,i=(new Date).getTime(),s.accessKeyId=o.AccessKeyId,s.accessKeySecret=o.AccessKeySecret,s.securityToken=o.SecurityToken,o.bucket&&(s.bucket=o.bucket),o.domain&&(s.domain=o.domain),e&&e()}else n&&n(t)})).error((function(e){console.log(JSON.stringify(e)),n&&n(e)}))};function g(e){for(var n=e.split(","),t=n[0].match(/:(.*?);/)[1],o=atob(n[1]),a=o.length,i=new Uint8Array(a);a--;)i[a]=o.charCodeAt(a);return new Blob([i],{type:t})}function h(e,n,o,c){var d=f(c);if(c.uid=l(c),1!==d){2===d&&v(e,n,o,c);var p=function(){var a,i;a=(i=e instanceof Blob?e:g(e)).type;var r=t.formatDate(new Date,"yyyyMMdd"),d=c.from||"answerExercise",f=(new Date).getTime()+"."+a.substring(a.indexOf("/")+1),l="content/resource/"+r+"/"+c.uid+"/"+d+"/"+f;angular.extend(u,s);var p=new OSS({endPoint:u.endPoint,accessKeyId:u.accessKeyId,accessKeySecret:u.accessKeySecret,bucket:u.bucket,stsToken:u.securityToken,timeout:9e5}),m=0;p.multipartUpload(l,i,{progress:function(e){var n=Math.floor(100*e);(n-m>5||100==n)&&(m=n)}}).then((function(){n&&n(u.domain+"/"+l)})).catch((function(e){o&&o(e)}))},m=(new Date).getTime();r>0&&m-i<r?a.load(["vendor/aliyun-oss-sdk.min.js"]).then((function(){p()})):y((function(){a.load(["vendor/aliyun-oss-sdk.min.js"]).then((function(){p()}))}),(function(e){o&&o(e)}))}else x({data:e,uid:c.uid},n,o,c)}function v(e,n,t,o){var a,i;a=(i=e instanceof Blob?e:g(e)).type;var r=o.from||"answerExercise",s=(new Date).getTime()+"."+a.substring(a.indexOf("/")+1),u=new FormData;u.append("uploadedfile",i),u.append("fileName",s),u.append("from",r);$.ajax({url:appConf.UPLOAD_HOST,type:"post",async:!0,data:u,processData:!1,contentType:!1,xhr:function(){var e=$.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",(function(e){var n=e.loaded,t=e.total,o=Math.floor(100*n/t)+"%";console.log("已经上传了："+o)}),!1),e},success:function(e){console.log(e);var t=JSON.parse(e.response);n&&n(t.msg)},error:function(e){t&&t(e)}})}function w(e,n,t,o){e instanceof Blob||0==e.indexOf("data")&&e.indexOf("base64")>0?x({data:e,uid:o.uid},n,t,o):window.cordova&&function(e,n,t,o){var a=e.data,i=a.substr(a.lastIndexOf("/")+1),r={uid:"",resType:"image"};function s(){return(r.uid||"")+(new Date).getTime()+Math.round(9999*Math.random())}function u(e,n){var a=e.fileRanName,i=o.from||"answerexercise",r=o.uid+"/"+i+"/"+a,s="https://zhanjiang.xxkjrrt.com/?r=upload/getTyySignUrl";$.ajax({url:s,type:"GET",dataType:"json",timeout:1e4,tryCount:0,retryLimit:3,data:{fileName:r},xhr:function(){return new ionic.app.XMLHttpRequest},success:function(e){if(0==e.status){var t=e.signedUrl||"";n&&n(t)}else this.tryCount++,this.tryCount<=this.retryLimit?$.ajax(this):alert("获取签名失败，请稍后重试")},error:function(e){this.tryCount++,console.log(e),this.tryCount<=this.retryLimit?$.ajax(this):t&&t(e)}})}function c(e){e.fileRanName=e.ranName+i.slice(i.lastIndexOf(".")).toLowerCase(),u(e,(function(o){var i=new FileTransfer;i.onprogress=function(e){e.lengthComputable&&(console.log(e.loaded/e.total),console.log("已上传:"+e.loaded))};var r={httpMethod:"PUT",headers:{"x-amz-acl":"public-read","Content-Type":!1},chunkedMode:!0,fileName:e.fileRanName};ionic.Platform.isAndroid()&&(r.chunkedMode=!1),i.upload(a,o,(function(){var e=o.split("?")[0];n&&n(e)}),t,r,!0)}))}angular.extend(r,e||{}),c({ranName:s()})}({data:e,uid:o.uid},n,t,o)}function x(e,n,t,o){var a,i,r=e.data;a=(i=r instanceof Blob?r:g(r)).type;var s=(new Date).getTime()+"."+a.substring(a.indexOf("/")+1),u={uid:"",resType:"image"};angular.extend(u,e||{});var c,d={ranName:(u.uid||"")+(new Date).getTime()+Math.round(9999*Math.random())};(c=d).fileRanName=c.ranName+s.slice(s.lastIndexOf(".")).toLowerCase(),function(e,n){var a=e.fileRanName,i=o.from||"answerexercise",r=o.uid+"/"+i+"/"+a,s="https://zhanjiang.xxkjrrt.com/?r=upload/getTyySignUrl";$.ajax({url:s,type:"GET",dataType:"json",timeout:1e4,tryCount:0,retryLimit:3,data:{fileName:r},success:function(e){if(0==e.status){var t=e.signedUrl||"";n&&n(t)}else this.tryCount++,this.tryCount<=this.retryLimit?$.ajax(this):alert("获取签名失败，请稍后重试")},error:function(e){this.tryCount++,console.log(e),this.tryCount<=this.retryLimit?$.ajax(this):t&&t(e)}})}(c,(function(e){$.ajax({url:e,type:"PUT",async:!0,data:i.slice(0,i.size),processData:!1,contentType:!1,beforeSend:function(e){e.setRequestHeader("x-amz-acl","public-read")},xhr:function(){var e=$.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",(function(e){var n=e.loaded,t=e.total,o=Math.floor(100*n/t)+"%";console.log("已经上传了："+o)}),!1),e},success:function(){var t=e.split("?")[0];console.log(t),n&&n(t)},error:function(e){t&&t(e)}})})),console.log("file size:"+i.size)}return{setUid:function(e){d.uid=e},download:function(n,t,o,a){var i=e.defer(),r=new FileTransfer;return i.promise.then((function(e){t&&t(e)}),(function(e){o&&o(e)}),(function(e){a(e.loaded/e.total*100)})),i.promise.abort=function(){r.abort()},a&&(r.onprogress=function(e){i.notify(e)}),m((function(e){var t=e.nativeURL+p(n);r.download(encodeURI(n),t,(function(e){i.resolve(e)}),(function(e){i.reject(e)}))}),(function(e){i.reject(e)})),i.promise},getImageData:function(e,n,t){o.get(e,{responseType:"blob"}).success((function(e){var t,o,a;t=e,o=function(e){n&&n(e)},(a=new FileReader).onload=function(e){o(e.target.result)},a.readAsDataURL(t)})).error((function(e){t&&t(e)}))},uploadOssWeb:h,upload:function(e,n,o,a){if(e){var u=f(a);console.log("uploadType:"+u),a.uid=l(a),1===u?w(e,(function(e){var t={status:"ok",msg:e};n&&n({response:JSON.stringify(t)})}),o,a):0===u?e instanceof Blob||0==e.indexOf("data")&&e.indexOf("base64")>0?h(e,(function(e){var t={status:"ok",msg:e};n&&n({response:JSON.stringify(t)})}),o,a):window.cordova?function(e,n,o,a){var u=t.formatDate(new Date,"yyyyMMdd"),c=(e=e.replace("file://","")).substr(e.lastIndexOf("/")+1),d=a.from||"answerexercise",f=c.lastIndexOf("."),l=c;f>0&&(l=c.substring(0,c.lastIndexOf("."))),(l=l.replace("_","")).length<13&&(c=(new Date).getTime()+"-"+c);var p="content/resource/"+u+"/"+a.uid+"/"+d+"/"+c,m={bucket:"wmzz",endPoint:"http://oss-cn-hangzhou.aliyuncs.com",objectKey:p,filePath:e,domain:"http://al.cnweike.cn"},g=function(){angular.extend(m,s),aliyunOSSupload.ossUpload(m,(function(e){if(0==e.status){var t={status:"ok",msg:m.domain+"/"+p};n&&n({response:JSON.stringify(t)})}}),(function(e){console.log(JSON.stringify(e)),o&&o(e)}))},h=(new Date).getTime();r>0&&h-i<r?g():y((function(){g()}),(function(e){o&&o(e)}))}(e,n,o,a):o&&o({msg:"上传失败"}):window.cordova?t.uploadFile(e,appConf.UPLOAD_HOST,a).then((function(e){n&&n(e)}),(function(e){o&&o(e)})):v(e,(function(e){var t={status:"ok",msg:e};n&&n({response:JSON.stringify(t)})}),o,a)}else o&&o({msg:"上传失败"})},check:function(n,t,o){function a(n,t){var o=e.defer();return m((function(e){e.getFile(n,t,o.resolve,o.reject)}),(function(e){o.reject(e)})),o.promise}(function(e){return 2==arguments.length&&(e="/"+e+"/"+arguments[1]),a(e,{create:!1})})(p(n)).then((function(e){t&&t()}),(function(e){o&&o()}))},open:function(e,n,t){m((function(o){var a=o.nativeURL+p(e);console.log("open "+a),cordova.plugins.disusered.open(a,(function(e){n&&n(e)}),(function(e){t&&t(e)}))}),(function(e){t&&t(e)}))}}}]);
angular.services.factory("routeHistory",["$ionicHistory","$state",function(e,i){return{removePreView:function(){var i=e.viewHistory(),r=i.histories.root.cursor,o=i.histories.root.stack;console.log(i);var t=i.currentView,s=i.backView,c=i.views[s.backViewId];if(!t||!s)return!1;r-=1,o.splice(r,1),delete i.views[s.viewId],c.forwardViewId=t.viewId,t.backViewId=c.viewId,t.index=t.index-1,i.backView=c},go:function(e,r){var o=i.current.url.split("/");o[1];r?i.go(e,r,arguments[2]&&arguments[2]):i.go(e)}}}]);
angular.services.factory("prompt",["$ionicPlatform","phoneUtils","$ionicPopup","$ionicLoading","$interval","$rootScope",function(t,n,o,e,i,c){var a,s=function(n,e,i,c,a,s,p){var r;s&&(r=t.registerBackButtonAction((function(t){}),401));var u=0;o.show({title:null,template:n,cssClass:"no-title br5",scope:p,buttons:[{text:c||"取消",type:"kt-box-pointBtn button-outline br5 f13 button-balanced",onTap:function(){a&&a(),r&&r()}},{text:i||"确定",type:"kt-box-pointBtn br5 f13 button-balanced",onTap:function(){1==(u+=1)&&(e&&e(),r&&r())}}]})};return{showTip:function(t){t&&window.plugins&&window.plugins.toast?window.plugins.toast.showWithOptions({message:t,duration:"short",position:"bottom",addPixelsY:20-n.deviceHeight/8}):function(t,n){var o=document.createElement("div");o.className="web-toast",o.appendChild(document.createTextNode(t)),document.body.appendChild(o);var e=parseInt(window.getComputedStyle(o).width.split("px")[0]);console.log(e),180<e&&e<280?e+=30:e<=180?e=180:e>=280&&(e=280);o.style.width=e+"px",o.style.marginLeft="-"+e/2+"px",window.setTimeout((function(){o.style.opacity="0",window.setTimeout((function(){document.body.removeChild(o)}),800)}),n||3e3)}(t)},confirm:s,confirm2:function(n,e,i,a,s,p,r){var u;p&&(u=t.registerBackButtonAction((function(t){}),401));var l=0,d=o.show({cssClass:r?"activeBox-confirm":"activeBox",template:'<div class="fl" style="width: 100%;"><p class="fl tc f16" style="width: 100%; background: none;padding: 0 10px; border-bottom: 1px solid #f2f2f2;">'+n+"</p></div>",buttons:[{text:a||"取消",type:"kt-box-pointBtn active-button-cancel",onTap:function(){s&&s(),u&&u()}},{text:i||"确定",type:"kt-box-pointBtn active-button-sure",onTap:function(){1==(l+=1)&&(e&&e(),u&&u())}}]});$(document).find(".popup-head").remove(),c.dialog_close=function(){d.close()}},goDownload:function(){s("受微信端功能限制，画笔、相册、拍照、录音等功能请移步到家长云APP使用。",(function(){window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.wmzz.parents.cloud"}),"下载家长云")},alert:function(n,e,a,s,p,r,u){var l;r&&(l=t.registerBackButtonAction((function(t){}),401));var d=p?'<span class="pa" style="bottom: 18px;right: 65px;">{{_countDown}}秒</span>':"";if(p){s._countDown=p;var f=i((function(){s._countDown--,s._countDown<=0&&(i.cancel(f),m.close())}),1e3,0)}var m=o.show({title:n,template:d,cssClass:u?"kt-alert":"showBox-alert",scope:c,buttons:[{text:a||"确定",type:"button-clear p0 c-main-i",onTap:function(){e&&e()}}]});m.then((function(){l&&l()}))},alert2:function(n,e,i,a,s,p,r,u,l){var d;r&&(d=t.registerBackButtonAction((function(t){}),401));var f=[{text:i||"确定",type:"button-clear p0 c-main-i",onTap:function(){e&&e()}}];l&&f.push({text:s||"确定",type:"button-clear p0 c-main-i",onTap:function(){a&&a()}}),o.show({title:n,cssClass:l?"showBox-alert buyCourse-alert":u?"kt-alert":"showBox-alert",scope:c,buttons:f}).then((function(){d&&d()}))},alert3:function(n,e,i,c){var a;c&&(a=t.registerBackButtonAction((function(t){}),401)),o.show({template:'<div class="fl" style="width: 100%;"><p class="fl tc f16" style="width: 100%; background: none;padding: 0 10px; border-bottom: 1px solid #f2f2f2;">'+n+"</p></div>",cssClass:"activeBox-alert",buttons:[{text:i||"确定",type:"active-button-sure",onTap:function(){e&&e()}}]}).then((function(){a&&a()})),$(document).find(".popup-head").remove()},loading:new function(){var n=0,o=ionic.Platform.version();if(o&&"string"==typeof o){var i=o.split(".");n=parseInt(i[0]+i[1])}this.show=function(o){o=o||"",e.show({template:'<ion-spinner class="spinner-light" icon="spiral"></ion-spinner><div>'+(o||"正在加载")+"</div>",noBackdrop:n<42}),a=t.registerBackButtonAction((function(){e.hide(),a&&a()}),301)},this.hide=function(){e.hide(),a&&a()}}}}]),angular.services.factory("$prompt",["prompt",function(t){return t}]);
angular.services.factory("request",["$rootScope","$filter","$q","$http","$timeout","$state","prompt","$location","serviceManager",function(t,e,o,s,n,r,a,i,u){var c=o.defer();this.httpURL=appConf.KT_HOST;var p=this;t.$on("changeHost",(function(){p.httpURL=appConf.KT_HOST}));var h,f=navigator.userAgent,l=window.device?device.uuid:"from.browser";function v(){u.clearCache(),c.resolve(!0),a.loading.hide(),"/single/login"!=i.path()&&(a.showTip("登录失效，请重新登录"),r.go("single.login",{reLogin:!0}))}function d(t){c.resolve(!0),a.loading.hide();var e="登录失效，请重新登录!";switch(t.status){case 408:e="账号在其他地点登录，您被强制下线;如非本人操作，请注意账号安全。";break;case 409:e=t.msg||"您的密码已被修改,请重新登录!"}angular.services.ssk=void 0,h||(ionic.Platform.isIOS()?a.alert(e,(function(){u.clearCache(),r.go("single.login",{reLogin:!0}),h=!h}),"重新登录"):a.confirm(e,(function(){u.clearCache(),r.go("single.login",{reLogin:!0}),h=!h}),"重新登录","退出",(function(){ionic.Platform.exitApp(),h=!h}))),h=!0}function g(t){for(var e=0;e<appConf.xtHost.length;e++){var o=appConf.xtHost[e];if(t.indexOf(o)>=0)return 1}for(e=0;e<appConf.ktHost.length;e++){var s=appConf.ktHost[e];if(t.indexOf(s)>=0)return 2}return-1}return this.jsonp=function(r,a,i,u,p){p=p||{};var h=appConf.appKey,m=3e4,C=0,T=0,y=0;"number"==typeof p.retryCount&&(C=p.retryCount),"number"==typeof p.retryInterval&&(y=p.retryInterval),"number"==typeof p.timeout&&(m=p.timeout);var S=((a=a||{})._host||p.host||this.httpURL)+(r||""),$=g(S);a.ssk||(2==$&&t.user.childS?a.ssk=t.user.childS.ktinfo.ssk:a.ssk=angular.services.ssk),a._host&&delete a._host;var k=new Date,H=e("date")(k,"MMddhh");!function t(){s.jsonp(S+"&ua="+f+"&theTime="+H+"&mac="+l+"&app="+h+"&callback=JSON_CALLBACK",{params:a,data:a,timeout:m}).success((function(t,e,o,s,n){return!t||401!=t.status&&405!=t.status?!t||408!=t.status&&409!=t.status?void(t.status?u&&u(t,e,o,s,n):i&&i(t,e,o,s,n)):(d(t),!1):(v(),!1)})).error((function(e,s,r,a,i){return c.promise.$$state.value?(n((function(){c=o.defer()}),100),!1):T<C?(T++,void n((function(){t()}),y)):((e=e||{}).msg="网络连接失败",void(u&&u(e,s,r,a,i)))}))}()},this.post=function(r,a,i,u,p){p=p||{};var h=0,m=0,C=0,T=3e4,y=appConf.appKey,S=((a=a||{})._host||p.host||this.httpURL)+(r||""),k=a.ssk;2==g(S)&&t.user.childS?a.ssk=t.user.childS.ktinfo.ssk:k||(k=angular.services.ssk),a._host&&delete a._host,"number"==typeof p.retryCount&&(h=p.retryCount),"number"==typeof p.retryInterval&&(C=p.retryInterval),"number"==typeof p.timeout&&(T=p.timeout);var H=new Date,L=e("date")(H,"MMddhh");!function t(){s({method:"POST",url:S+"&ssk="+k+"&ua="+f+"&theTime="+L+"&mac="+l+"&app="+y,data:$.param(a),headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:T}).success((function(t,e,o,s,n){return!t||401!=t.status&&405!=t.status?!t||408!=t.status&&409!=t.status?void(t.status?u&&u(t,e,o,s,n):i&&i(t,e,o,s,n)):(d(t),!1):(v(),!1)})).error((function(e,s,r,a,i){return c.promise.$$state.value?(n((function(){c=o.defer()}),100),!1):m<h?(m++,void n((function(){t()}),C)):((e=e||{}).msg="网络连接失败",void(u&&u(e,s,r,a,i)))}))}()},this.cancel=function(){c.resolve()},this}]),angular.services.factory("requestM",["request","$rootScope",function(t,e){this.httpURL=appConf.T_HOST;var o=this;return e.$on("changeHost",(function(){o.httpURL=appConf.T_HOST})),this.jsonp=t.jsonp,this.post=t.post,this.cancel=t.cancel,this}]),angular.services.factory("requestXT",["request","$rootScope",function(t,e){this.httpURL=appConf.XT_HOST;var o=this;return e.$on("changeHost",(function(){o.httpURL=appConf.XT_HOST})),this.jsonp=t.jsonp,this.post=t.post,this.cancel=t.cancel,this}]),angular.services.factory("requestP",["request","$rootScope",function(t,e){this.httpURL=appConf.XTP_HOST;var o=this;return e.$on("changeHost",(function(){o.httpURL=appConf.XTP_HOST})),this.jsonp=t.jsonp,this.post=t.post,this.cancel=t.cancel,this}]);
angular.services.factory("$request",["request","user",function(s,t){return this.jsonp=function(n,o,e,c,i){t.user.childS.ktinfo?(o.ssk=o.ssk||t.user.childS.ktinfo.ssk,s.jsonp(n,o,e,c,i)):console.log("该学生没有课堂账号")},this.post=function(n,o,e,c,i){t.user.childS.ktinfo?(o.ssk=o.ssk||t.user.childS.ktinfo.ssk,s.post(n,o,e,c,i)):console.log("该学生没有课堂账号")},this.cancel=function(){s.cancel()},this}]),angular.services.factory("$requestCB",["$rootScope","request",function(s,t){this.httpURL=appConf.CB_HOST;var n=this;return s.$on("changeHost",(function(){n.httpURL=appConf.CB_HOST})),this.jsonp=t.jsonp,this.post=t.post,this.cancel=t.cancel,this}]),angular.services.factory("$requestCP",["$rootScope","request",function(s,t){this.httpURL=appConf.E_HOST;var n=this;return s.$on("changeHost",(function(){n.httpURL=appConf.E_HOST})),this.jsonp=t.jsonp,this.post=t.post,this.cancel=t.cancel,this}]);
angular.services.factory("requestTF",["request","user",function(s,t){return this.jsonp=function(n,o,e,c,i){(o=o||{}).ssk=o.ssk||t.user.childS&&t.user.childS.ssk,o._host=o._host||appConf.XT_HOST,s.jsonp(n,o,e,c,i)},this.post=function(n,o,e,c,i){(o=o||{}).ssk=o.ssk||t.user.childS&&t.user.childS.ssk,o._host=o._host||appConf.XT_HOST,s.post(n,o,e,c,i)},this.cancel=function(){s.cancel()},this}]),angular.services.factory("requestTFP",["request","user",function(s,t){return this.jsonp=function(t,n,o,e,c){(n=n||{}).ssk=n.ssk||angular.services.ssk,n._host=n._host||appConf.XT_HOST,s.jsonp(t,n,o,e,c)},this.post=function(t,n,o,e){(n=n||{}).ssk=n.ssk||angular.services.ssk,n._host=n._host||appConf.XT_HOST,s.post(t,n,o,e)},this.cancel=function(){s.cancel()},this}]);
angular.services.factory("examService",["$request","$rootScope",function(t,e){var o={getHost:r,selfAppraise:function(e,s,n){r(void 0,void 0);var i="stuhomework/selfAppraise";o.serverHost&&o.serverHost.submitScoreHost&&(i="/student/selfScore?",e._host=o.serverHost.submitScoreHost);t.post(i,e,(function(t){s&&s(t)}),(function(t){n&&n(t)}),{retryCount:3,retryInterval:2e3})},teachAppraise:function(e,s,n){r(void 0,void 0);var i="job/teachAppraise";o.serverHost&&o.serverHost.submitScoreHost&&(i="/teacher/correct?",e._host=o.serverHost.submitScoreHost);t.post(i,e,(function(t){s&&s(t)}),(function(t){n&&n(t)}),{retryCount:3,retryInterval:2e3})},examinationAppraise:function(e,s,n){r(void 0,void 0);var i="correct/submitScore";o.serverHost&&o.serverHost.submitScoreHost&&(i="/teacher/examination/correct?",e._host=o.serverHost.submitScoreHost);t.post(i,e,(function(t){s&&s(t)}),(function(t){n&&n(t)}),{retryCount:3,retryInterval:2e3})},serverHost:void 0};function r(e,r){o.serverHost?e&&e({data:o.serverHost}):t.jsonp("r=submitExam/getHost",{_host:appConf.host},(function(t){o.serverHost=t.data,e&&e(t)}),(function(){r&&r({msg:"网络连接失败,请稍后再试!"})}),{retryCount:10,retryInterval:3e3})}return e.$watch((function(){return appConf.host}),(function(){o.serverHost=void 0,r(void 0,void 0)}),!0),r(void 0,void 0),o}]);
angular.services.factory("systemFactory",["$http","phoneUtils","$timeout","$ionicPopup","$ionicPlatform","$androidPermission",function(n,o,e,t,i,a){var r=!1,c={checkTime:0},l=function(){var n=localStorage.getItem("appUpdateData");if((n=n||"{}")&&0===n.indexOf("{"))return JSON.parse(n);return{}}();function s(){localStorage.setItem("appUpdateData",JSON.stringify(l))}function u(n){return!(!n.incrementUrl||!n.currentToken||n.currentToken.toLowerCase()!=l.apkMD5.md5)}function p(o,e,t,i){var a=appConf.appVersion,r={data:{apps:[{package:appConf.packageName,No:a.no,sNo:a.sno}]}};i&&(r.data.uid=i),r.data.incUpdate=1,!t&&(new Date).getTime()-c.checkTime<36e5?o&&o(c):(r._host="http://shop.wmketang.com/?r=shop/",function(o,e,t,i){var a=appConf.appKey,r=navigator.userAgent,c=window.device?device.uuid:"from.browser";n({method:"POST",url:(e._host||this.httpURL)+(o||"")+"&ssk="+angular.services.ssk+"&ua="+r+"&mac="+c+"&app="+a,data:$.param(e),headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:3e4}).success((function(n,o,e,a,r){n.status?i&&i(n,o,e,a,r):t&&t(n,o,e,a,r)})).error((function(n,o,e,t,a){(n=n||{}).msg="网络连接失败",i&&i(n,o,e,t,a)}))}("app/update",r,(function(n){c.checkTime=(new Date).getTime(),n.data&&n.data.apps&&(c.update=n.data.apps[0]),o&&o(c)}),e))}function f(n){var e=function(){var e=0;noticePlugin.create("下载中",(function(n){e=n.id})),g(n.url,(function(n){e>0&&noticePlugin.cancel(e),o.openFile(n.nativeURL,(function(){console.log("apk打开成功")}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n))}))}),(function(){e>0&&noticePlugin.cancel(e)}),(function(n){e>0&&noticePlugin.progress(n,e)}))},t=function(){noticePlugin.showProgressDialog({rate:0,title:"应用下载中...",percentage:"0%",size:"0/"+parseInt(n.size/1024)+"kb",cancelable:!1}),g(n.url,(function(n){o.openFile(n.nativeURL,(function(){console.log("apk打开成功"),ionic.Platform.exitApp()}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n)),i()})),noticePlugin.hideProgressDialog()}),(function(){noticePlugin.hideProgressDialog(),i()}),(function(n,o,e){noticePlugin.updateProgressDialog({rate:n,title:"应用下载中...",percentage:n+"%",size:parseInt(o/1024)+"/"+parseInt(e/1024)+"kb"})}))},i=function(){o.confirm("更新失败",(function(n){1==n?ionic.Platform.exitApp():2==n&&t()}),"提示",["关闭应用","重试"],!1)};1!=n.updateType&&(1==n.force?o.confirm("版本:"+n.version+"\n"+n.feature,(function(n){1==n?ionic.Platform.exitApp():2==n&&a.checkPermissionWithFun(t,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE)}),"版本更新",["关闭应用","升级"],!1):o.confirm("版本:"+n.version+"\n"+n.feature,(function(o){1==o?v(n):2==o&&a.checkPermissionWithFun(e,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE)}),"版本更新",["取消","确定"]))}function d(n){var e=function e(){var t=0,i=0,a=n.url;u(n)&&(i=1,a=n.incrementUrl),noticePlugin.create("下载中",(function(n){t=n.id}));var r=function(n){o.openFile(n,(function(){console.log("apk打开成功")}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n))}))};g(a,(function(o){if(t>0&&noticePlugin.cancel(t),1===i){var a=[o.nativeURL,n.fileToken];window.plugins.utilsPlugin.applyPatchUpdate(a,(function(o){0==o.status?r("file://"+o.data):(n.incrementUrl=void 0,e())}))}else r(o.nativeURL)}),(function(){t>0&&noticePlugin.cancel(t)}),(function(n){t>0&&noticePlugin.progress(n,t)}))},t=function e(){var t=0,a=n.url;u(n)&&(t=1,a=n.incrementUrl),noticePlugin.showProgressDialog({rate:0,title:"应用下载中...",percentage:"0%",size:"0/"+parseInt(n.size/1024)+"kb",cancelable:!1});var r=function(n){o.openFile(n,(function(){console.log("apk打开成功"),ionic.Platform.exitApp()}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n)),i()}))};g(a,(function(o){if(1===t){var i=[o.nativeURL,n.fileToken];window.plugins.utilsPlugin.applyPatchUpdate(i,(function(o){console.log("applyPatchUpdate:"+JSON.stringify(o)),0==o.status?r("file://"+o.data):(n.incrementUrl=void 0,e())}))}else r(o.nativeURL);noticePlugin.hideProgressDialog()}),(function(){noticePlugin.hideProgressDialog(),i()}),(function(n,o,e){noticePlugin.updateProgressDialog({rate:n,title:"应用下载中...",percentage:n+"%",size:parseInt(o/1024)+"/"+parseInt(e/1024)+"kb"})}))},i=function(){o.confirm("更新失败",(function(n){1==n?ionic.Platform.exitApp():2==n&&t()}),"提示",["关闭应用","重试"],!1)};1!=n.updateType&&(1==n.force?o.confirm("版本:"+n.version+"\n"+n.feature,(function(n){1==n?ionic.Platform.exitApp():2==n&&a.checkPermissionWithFun(t,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE)}),"版本更新",["关闭应用","升级"],!1):o.confirm("版本:"+n.version+"\n"+n.feature,(function(o){1==o?v(n):2==o&&a.checkPermissionWithFun(e,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE)}),"版本更新",["取消","确定"]))}function g(n,e,t,i){var a=n.substr(n.lastIndexOf("/")+1),r={name:a,url:n,dir:"/"+appConf.dataDirectory+"/download"},c=0;!function n(){o.fileDownload(r,(function(o){var t=localStorage.getItem("downloadApk");t&&-1!=t.indexOf(a)?e&&e(o):(r.overwrite=!0,n())}),(function(n){t&&t(n),console.log(n)}),(function(n){if(n.lengthComputable){var o=(n.loaded/n.total*100).toFixed(2);if(100==o){i&&i(100,n.loaded,n.total);var e=a+","+localStorage.getItem("downloadApk")||"";localStorage.setItem("downloadApk",e)}else o-c>.5&&(c=o,i&&i(o,n.loaded,n.total))}}))}()}function m(n){if(1==n.force||1==n.updateType)return!0;var o=localStorage.getItem("upgrade_no")||0;if(0==o||o<n.No)return!0;var e=localStorage.getItem("upgrade_no_time");if(e&&(e=new Date(parseInt(e)),(new Date).getTime()>e.getTime()&&(new Date).getDate()!=e.getDate()))return!0;return!1}function v(n){n&&n.No&&(localStorage.setItem("upgrade_no",n.No),localStorage.setItem("upgrade_no_time",(new Date).getTime()+""))}var P,h,k=!((P=l.lastAppVersion)&&P==appConf.appVersion.no||(l.lastAppVersion=appConf.appVersion.no,s(),0));function w(n,o,e,a,r){var c=[],l=[];l.push((function(){a&&a(1)})),l.push((function(n){a&&a(2,n)}));for(var s=0;s<e.length;s++){var u={text:e[s],onTap:l[s]};c.push(u)}var p,f={template:"<pre>"+o+"</pre>",title:n||"提示",cssClass:"update-box",buttons:c},d=t.show(f);"boolean"!=typeof r||r||(p=i.registerBackButtonAction((function(n){n.preventDefault()}),800)),d.then((function(){p&&p()}))}return h=function(){ionic.Platform.isAndroid()&&window.plugins&&window.plugins.utilsPlugin.getAppMD5((function(n){l.apkMD5.no=appConf.appVersion.no,l.apkMD5.md5=n.data,s()}))},l.apkMD5?(l.apkMD5.no!=appConf.appVersion.no||l.apkMD5.md5)&&h():(l.apkMD5={},h()),{autoCheckUpdate:function(n){if(!r){r=!0;!function t(){p((function(n){var t,i,r=n.update;r&&(1==r.updateType?(t=r,i=function n(){window.plugins&&window.plugins.hotUpdatePlugin&&plugins.hotUpdatePlugin.download({url:t.url},(function(){plugins.hotUpdatePlugin.extract({version:t.No+"_"+t.sNo},(function(n){console.log("extract over"),l.hotUpdate={version:t.version,sno:t.sNo,no:t.No,path:n},s()}),(function(n){console.log("热更新包解压失败"+n)}))}),(function(){console.log("下载热更新失败"),e((function(){n()}),6e4)}))},o.deviceIsAndroid?function(n){console.log("处理热更新");var e=function(){var o=0;window.plugins&&window.plugins.hotUpdatePlugin&&(noticePlugin.showProgressDialog({rate:0,title:"应用下载中...",percentage:"0%",size:"0/"+parseInt(n.size/1024)+"kb",cancelable:!1}),plugins.hotUpdatePlugin.download({url:n.url},(function(){console.log("热更新包下载成功"),plugins.hotUpdatePlugin.extract({version:n.No+"_"+n.sNo},(function(o){console.log("热更新包解压成功4"),l.hotUpdate={version:n.version,sno:n.sNo,no:n.No,path:o},s(),plugins.hotUpdatePlugin.redirect()}),(function(n){console.log("热更新包解压失败"+n)})),noticePlugin.hideProgressDialog()}),(function(n){noticePlugin.hideProgressDialog(),console.log("下载热更新失败"+n),t()}),(function(n){o=(n.loaded/n.total*100).toFixed(2),noticePlugin.updateProgressDialog({rate:o,title:"应用更新中...",percentage:o+"%",size:parseInt(n.loaded/1024)+"/"+parseInt(n.total/1024)+"kb"})})))},t=function(){o.confirm("下载更新文件失败",(function(n){1==n||2==n&&e()}),"文件更新失败",["取消","重试"],!0)},i=n.feature+"\n(文件大小"+(n.size/1024/1024).toFixed(2)+"MB)";o.confirm(i,(function(n){1==n&&a.checkPermissionWithFun(e,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE)}),"文件更新",["升级"],!1)}(t):i()):o.deviceIsAndroid&&m(r)?1==r.force?d(r):o.isWifiConnect()?a.check((function(){!function(n){var e=function(e){1==n.force?o.confirm("版本:"+n.version+"\n"+n.feature,(function(n){1==n?ionic.Platform.exitApp():2==n&&o.openFile(e,(function(){console.log("apk打开成功")}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n))}))}),"版本更新",["关闭应用","升级"],!1):o.confirm("版本:"+n.version+"\n"+n.feature,(function(t){1==t?v(n):2==t&&o.openFile(e,(function(){console.log("apk打开成功")}),(function(n){localStorage.removeItem("downloadApk"),console.log("apk打开失败"+JSON.stringify(n))}))}),"版本更新",["取消","确定"])},t=function(){g(n.incrementUrl,(function(o){var t=[o.nativeURL,n.fileToken];window.plugins.utilsPlugin.applyPatchUpdate(t,(function(o){0==o.status?e("file://"+o.data):f(n)}))}),(function(){f(n)}),(function(){}))};console.log("handleUpdateV3更新"),1!=n.updateType&&(u(n)?a.checkPermissionWithFun(t,a.update_permission_info,cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE):f(n))}(r)}),(function(){d(r)}),[a.update_permission_info.permission]):d(r):o.deviceIsIOS&&m(r)&&function(n){!function o(){1==n.force?w("版本更新","版本:"+n.version+"\n"+n.feature,["前往更新"],(function(){window.open(n.url),1==n.force&&o()}),!1):w("版本更新","版本:"+n.version+"\n"+n.feature,["取消","前往更新"],(function(o){1==o?v(n):2==o&&window.open(n.url)}),!1)}()}(r))}),(function(n,o){200!==o&&e((function(){t()}),1e4)}),!0,n)}()}},checkUpdate:p,downloadApk:g,downloadUpdateApk:function(n,e,t,i,a){var r;return function a(){var c=c||"/"+appConf.dataDirectory+"/update",l=0,s=0,p=n.url;u(n)&&(s=1,p=n.incrementUrl);var f=p.substr(p.lastIndexOf("/")+1),d={name:f,dir:c};d.url=p,r=o.fileDownload(d,(function(o){var t=localStorage.getItem("downloadApk");if(t&&-1!=t.indexOf(f))if(1===s){var i=[o.nativeURL,n.fileToken];window.plugins.utilsPlugin.applyPatchUpdate(i,(function(o){console.log("applyPatchUpdate:"+JSON.stringify(o)),0==o.status?e&&e({nativeURL:"file://"+o.data}):(n.incrementUrl=void 0,a())}))}else e&&e(o);else d.overwrite=!0,a()}),(function(o){1===s&&(n.incrementUrl=void 0),t&&t(o),console.log(o)}),(function(n){if(n.lengthComputable){var o=(n.loaded/n.total*100).toFixed(2);if(100==o){i&&i(100,n.loaded,n.total);var e=f+","+localStorage.getItem("downloadApk")||"";localStorage.setItem("downloadApk",e)}else o-l>.5&&(l=o,i&&i(o,n.loaded,n.total))}}))}(),function(){r&&r.target&&r.target.abort()}},versionData:c,isFirstRun:k}}]);
angular.services.factory("$camera",["phoneUtils","$interval","$ocLazyLoad","$androidPermission",function(e,t,i,n){function a(t,i,n){e.getPicture(t).then((function(e){t.destinationType==Camera.DestinationType.DATA_URL&&(e="data:image/jpeg;base64,"+e),i&&i(e)}),(function(e){n&&n(e)}))}var o;return{imagePickWeb:function(e,n,a){t.cancel(o);var r,c=0;function s(e,t,i){if(null!==e){var n=i.width,a=i.height,o=2;null===o&&(o=0),"right90"===t?++o>3&&(o=0):"right180"===t?o=2:--o<0&&(o=3);var r=90*o*Math.PI/180,c=i.getContext("2d");switch(o){case 0:i.width=n,i.height=a,c.drawImage(e,0,0,n,a);break;case 1:i.width=a,i.height=n,c.rotate(r),c.drawImage(e,0,-a,n,a);break;case 2:i.width=n,i.height=a,c.rotate(r),c.drawImage(e,-n,-a,n,a);break;case 3:i.width=a,i.height=n,c.rotate(r),c.drawImage(e,-n,0,n,a)}}}(r=document.createElement("input")).setAttribute("type","file"),r.setAttribute("accept","image/*"),r.addEventListener("change",(function(n){t.cancel(o);var r=n.target.files;i.load(["vendor/exif.js"]).then((function(){!function(e,t,i){var n=(new Date).getTime(),a=new Image;a.crossOrigin="Anonymous",a.src=window.URL.createObjectURL(t),a.onload=function(){var o=function(e,t,i,n){if(e>t&&i<n||e<t&&i>n){var a=i;i=n,n=a}if(e<=i&&t<=n)i=e,n=t;else{var o=e/i,r=t/n,c=Math.max(o,r);i=Math.ceil(e/c),n=Math.ceil(t/c)}return{width:i,height:n}}(a.naturalWidth,a.naturalHeight,i.targetWidth,i.targetHeight);EXIF.getData(t,(function(){var t=document.createElement("canvas"),r=t.getContext("2d");t.width=o.width,t.height=o.height,r.drawImage(a,0,0,o.width,o.height);var c=navigator.userAgent,g=EXIF.getTag(this,"Orientation"),u=c.indexOf("Android")>-1||c.indexOf("Adr")>-1;if((c.indexOf("iPhone")>-1||c.indexOf("iOS")>-1||u)&&g&&""!==g&&1!==g)switch(g){case 6:s(a,"left",t);break;case 8:s(a,"right90",t);break;case 3:s(a,"right180",t)}console.log("compressImage:"+((new Date).getTime()-n)),e&&e(t.toDataURL("image/jpeg",i.quality/100))}))}}((function(t){e&&e(t)}),r[0],a)}))}),!1),r.click(),o=t((function(){r.files&&r.files.length>0&&console.log("pick over"),++c>=200&&t.cancel(o)}),300)},imagePick:function(e,t,i){var o={quality:100,destinationType:Camera.DestinationType.DATA_URL,sourceType:Camera.PictureSourceType.PHOTOLIBRARY,allowEdit:!0,encodingType:Camera.EncodingType.JPEG,targetWidth:140,targetHeight:140,popoverOptions:CameraPopoverOptions,saveToPhotoAlbum:!1};i&&(o=angular.extend(o,i));var r=cordova.plugins.permissions;n.checkPermission((function(){a(o,e,t)}),(function(e){n.openPrompt(n.album_permission_info)}),[r.WRITE_EXTERNAL_STORAGE])},camera:function(e,t,i){var o={quality:100,destinationType:Camera.DestinationType.DATA_URL,sourceType:Camera.PictureSourceType.CAMERA,allowEdit:!0,encodingType:Camera.EncodingType.JPEG,targetWidth:140,targetHeight:140,popoverOptions:CameraPopoverOptions,saveToPhotoAlbum:!1};i&&(o=angular.extend(o,i));var r=cordova.plugins.permissions;n.checkPermission((function(){n.checkPermission((function(){a(o,e,t)}),(function(e){n.openPrompt(n.storage_permission_info)}),[r.WRITE_EXTERNAL_STORAGE])}),(function(e){n.openPrompt(n.camera_permission_info)}),[r.CAMERA])},scan:function(e,t){var i=[cordova.plugins.permissions.CAMERA];n.checkPermission((function(){window.plugins&&window.plugins.scannerPlugin?plugins.scannerPlugin.scan(e,t):t&&t({msg:"扫描失败"})}),(function(e){n.openPrompt(n.camera_permission_info)}),i)}}}]),angular.services.factory("camera",["$camera",function(e){return e}]);
angular.services.factory("$verify",(function(){return{account:/^1[3-9]\d{9}$|^.{3,32}@[\w]+\.[\w]+$/,pass:/^.{6,20}$/,phone:/^1[3-9]\d{9}$/,sendCode:function(n,t,e){},nickname:function(n){var t=function(n){var t=0;if(n)for(var e=0;e<n.length;e++){var r=n.charAt(e);/[\u4e00-\u9fa5]/g.test(r)?t+=2:/\w/g.test(r)&&(t+=1)}return t}(n);return/^[\w\u4e00-\u9fa5]+$/.test(n)&&t>3&&t<21}}}));
angular.directives.directive("autoTextarea",(function(){return{restrict:"E",replace:!0,require:"?ngModel",template:'            <div class="w pr" style="padding: 8px 0">                <textarea class="auto-textArea-text f14" style="overflow-y:auto;max-height: 80px;min-height: 22px;"></textarea>                <textarea class="auto-textArea-shadow"></textarea>            </div>            ',link:function(e,a,n,t){var l=a[0].children[0],r=a[0].children[1];n.$observe("placeholder",(function(){l.placeholder=n.placeholder}));var i=a.find("input");function u(){function a(){l.style.height=r.scrollHeight+"px"}r.value=l.value,a(),setTimeout(a,0),e.$apply((function(){t.$setViewValue(l.value)}))}angular.forEach({name:n.name,value:n.value,disabled:n.disabled,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-disabled":n.ngDisabled,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},(function(e,a){angular.isDefined(e)&&i.attr(a,e)})),l.oninput=l.onpropertychange=u,a.bind("change",u),t.$render=function(){function e(){l.style.height=r.scrollHeight+"px"}l.value=t.$viewValue,r.value=l.value,e(),setTimeout(e,0)}}}})),angular.directives.directive("focusTextarea",(function(){return{restrict:"E",replace:!0,require:"?ngModel",template:'<textarea style="overflow-y: scroll;"></textarea>',link:function(e,a,n,t){var l=a[0];angular.forEach({maxlength:n.maxlength,class:n.class,placeholder:n.placeholder,"ng-class":n.ngClass,name:n.name,value:n.value,disabled:n.disabled,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-disabled":n.ngDisabled,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},(function(e,n){angular.isDefined(e)&&a.attr(n,e)})),l.oninput=l.onpropertychange=onchange,t.$render=function(){setTimeout((function(){l.focus()}),100)}}}}));
angular.services.factory("data",(function(){return{}}));
angular.directives.directive("header",["$ionicHistory","$state",function($ionicHistory,$state){return{restrict:"EAC",transclude:!0,templateUrl:"js/directive/header.html",replace:!0,priority:102,bindToController:!0,link:function link(scope,element,attr){scope.title=attr.title,scope.$goBack=function(){if(eval(attr.backToMain))return $state.go("main.home");$ionicHistory.backView()?scope.back?scope.back():$ionicHistory.goBack():$state.go("main.home")}}}}]),angular.directives.directive("header2",["$ionicHistory","$state",function(e,t){return{restrict:"EAC",transclude:!0,scope:{alignTitle:"@",hideLeft:"@",back:"=",title:"=",showRight:"=",rightText:"="},templateUrl:"js/directive/header.html",link:function(o,i){o.$goBack=function(){e.backView()?o.back?o.back():e.goBack():t.go("main.home")},setTimeout((function(){var e=i.children()[0].children[2].offsetWidth;e>0&&(i.children()[0].children[1].style.right=e+"px")}),100)}}}]),angular.directives.directive("scrollFix",["$ionicScrollDelegate","$timeout",function(e,t){return{restrict:"AE",link:function(o,i,n){t((function(){console.log(n.delegateHandle);var t=e.$getByHandle(n.delegateHandle).getScrollView();if(t){var o=t.__container,i=t.touchStart,r=(t.mouseDown,t.touchMove);t.mouseMove;o.removeEventListener("touchstart",t.touchStart),o.removeEventListener("mousedown",t.mouseDown),document.removeEventListener("touchmove",t.touchMove),document.removeEventListener("mousemove",t.mousemove),t.touchStart=function(e){e.preventDefault=function(){},i.apply(t,[e])},t.touchMove=function(e){e.preventDefault=function(){},r.apply(t,[e])},o.addEventListener("touchstart",t.touchStart,!1),o.addEventListener("mousedown",t.mouseDown,!1),document.addEventListener("touchmove",t.touchMove,!1),document.addEventListener("mousemove",t.mouseMove,!1)}}),100)}}}]);
angular.directives.directive("basisContent",["$state","$ionicHistory","$timeout","$controller",function(n,i,r,e){return{restrict:"E",transclude:!0,template:'                    <div ng-show="!isLoaded" class="has-header center pa w b0 bc-fff z99">                        <section ng-if="!dataError" class="p10 w100 bc-333333 c-fff tc br5">                            <ion-spinner class="spinner-light" icon="spiral"></ion-spinner>                            <div>正在加载</div>                        </section>                        <img ng-if="dataError" ng-click="pageReload()" src="img/click-reload.png" class="pa l50p t50p" style="margin-left: -125px;margin-top: -125px;">                    </div>                    <div ng-if="dataNone" class="has-header pa w b0 bc-fff z99">                        <div class="point-center point-center-position">                            <span>暂无数据</span>                        </div>                    </div>                    <section ng-transclude></section>',priority:100,bindToController:!0,link:function(i){i.pageReload=function(){var t;for(var a in n.$current.views)t=n.$current.views[a].controller;if(!t)for(var c in n.$current.parent.views)t=n.$current.parent.views[c].controller;r((function(){e(t,{$scope:i})}),200),i.dataError=!1}}}}]);
angular.directives.directive("fallBackSrc",(function(){return{link:function(r,t,i){t.bind("error",(function(){t.attr("src",i.fallBackSrc)}))}}})),angular.directives.directive("imgDefault",(function(){return{link:function(r,t,i){var n=i.src;t.attr("src",i.imgDefault),t.attr("src",n),t.bind("error",(function(){t.attr("src",i.imgDefault)}))}}})),angular.directives.directive("avatarDefault",(function(){return{link:function(r,t,i){var n=i.src;t.attr("src","img/avatar.png"),t.attr("src",n),t.bind("error",(function(){t.attr("src","img/avatar.png")}))}}})),angular.directives.directive("imgSrc",["$setting",function(r){return{link:function(t,i,n){r.img?(i.attr("src","img/default_head.jpg"),i.bind("click",(function(){i.attr("src",n.imgSrc)}))):i.attr("src",n.imgSrc)}}}]),angular.directives.directive("fallBackPoster",(function(){return{link:function(r,t,i){t.bind("error",(function(){t.attr("poster",i.fallBackPoster)}))}}})),angular.directives.directive("videoPoster",(function(){return{restrict:"A",link:function(r,t,i){i.$observe("videoPoster",(function(){t.attr("poster",i.videoPoster)}))}}})),angular.directives.directive("compile",["$compile",function(r){return function(t,i,n){t.$watch((function(r){return r.$eval(n.compile)}),(function(n){i.html(n),r(i.contents())(t)}))}}]);
angular.services.factory("preLoader",(function(){return function(a,e,r){angular.element(new Image).bind("load",(function(){e()})).bind("error",(function(){r()})).attr("src",a)}})),angular.directives.directive("preloadImage",["preLoader",function(a){return{restrict:"A",terminal:!0,priority:100,link:function(e,r,t){var n=t.preloadImage;e.default=t.defaultImage||"img/avatar.png",t.$set("src",e.default);var A=r.attr("preload-image").split("{{")[1].split("}}")[0];e.$watch(A,(function(){t.$set("src",t.preloadImage)})),a(n,(function(){t.$set("src",n)}),(function(){null!=t.fallbackImage&&t.$set("src",t.fallbackImage)}))}}}]),angular.directives.directive("preloadBgImage",["preLoader",function(a){return{restrict:"A",link:function(e,r,t){null!=t.preloadBgImage&&(e.default=t.defaultImage||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=",r.css({"background-image":'url("'+e.default+'")'}),a(t.preloadBgImage,(function(){r.css({"background-image":'url("'+t.preloadBgImage+'")'})}),(function(){null!=t.fallbackImage&&r.css({"background-image":'url("'+t.fallbackImage+'")'})})))}}}]);
angular.directives.directive("basisTip",(function(){return{restrict:"E",replace:!0,template:'                    <div class="point-center">                        <span></span>                    </div>                ',compile:function(i,e){i.find("span").text(e.tipText),i.find("div").addClass(e.class)}}}));
angular.services.factory("appState",["phoneUtils","$ionicModal","$rootScope",function(t,e,i){var o,n={},s="file:///android_asset/www/module",a=1,r="";function d(t){var n='<ion-modal-view>\n        <iframe target="_top" data-tap-disabled="true" style="height:100%;width:100%;position: absolute;" src='+t+"></iframe>\n</ion-modal-view>";(o=e.fromTemplate(n,{scope:i,animation:"slide-in-right"})).show()}return n.setHostType=function(t){a=t},n.setHostSsk=function(t){r=t},n.goTifen=function(e,i){var o=i.ssk;delete i.ssk;var n=o,w={state:e,param:i};1===appConf.serverType?w.xtHost="http://tcourse.wmxuetang.com":w.xtHost="http://course.wmxuetang.com",w.hostType=a,w.hostSsk=r;var p;p="module/tifen/www/index.html",window.cordova?t.deviceIsAndroid?(p=s+"/tifen/www/index.html",p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true",window.plugins.utilsPlugin.openUrl(p)):(p+="#/init?ssk="+n+"&data="+encodeURIComponent(JSON.stringify(w))+"&from=0&outside=true",webview.Show(p)):(0===appConf.terminalType&&(p="../plugins/com-wmzz-plugins-tifen/src/www/index.html"),d(p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true"))},n.goXwkongjian=function(e,i){var o=i.ssk;delete i.ssk;var n={state:e,param:i};n.serverType=appConf.serverType,1===appConf.serverType?n.xtHost="http://tcourse.wmxuetang.com":n.xtHost="http://course.wmxuetang.com",n.hostType=a,n.hostSsk=r;var w;w="module/xwkongjian/www/index.html",window.cordova?t.deviceIsAndroid?(w=s+"/xwkongjian/www/index.html",w+="#/init?ssk="+o+"&data="+JSON.stringify(n)+"&from=0&outside=true",window.plugins.utilsPlugin.openUrl(w)):(w+="#/init?ssk="+o+"&data="+encodeURIComponent(JSON.stringify(n))+"&from=0&outside=true",webview.Show(w)):(0===appConf.terminalType&&(w="../plugins/com-wmzz-plugins-xwkongjian/src/www/index.html"),d(w+="#/init?ssk="+o+"&data="+JSON.stringify(n)+"&from=0&outside=true"))},n.goXtapp=function(e,i){var o=i.ssk;delete i.ssk;var n=o,w={state:e,param:i};1===appConf.serverType?w.xtHost="http://t.wmxuetang.com":w.xtHost="http://wmxuetang.com",w.hostType=a,w.hostSsk=r;var p;p="module/xtapp/www/index.html",window.cordova?t.deviceIsAndroid?(p=s+"/xtapp/www/index.html",p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true",window.plugins.utilsPlugin.openUrl(p)):(p+="#/init?ssk="+n+"&data="+encodeURIComponent(JSON.stringify(w))+"&from=0&outside=true",webview.Show(p)):(0===appConf.terminalType&&(p="../plugins/com-wmzz-plugins-xtapp/src/www/index.html"),d(p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true"))},n.goTbj=function(e,i){var o=i.ssk;delete i.ssk;var n=o,w={state:e,param:i};1===appConf.serverType?w.xtHost="http://mingshi.wm3dao.com":w.xtHost="http://tbj.wmxuetang.com",w.hostType=a,w.hostSsk=r;var p;p="module/tbj/www/index.html",window.cordova?t.deviceIsAndroid?(p=s+"/tbj/www/index.html",p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true",window.plugins.utilsPlugin.openUrl(p)):(p+="#/init?ssk="+n+"&data="+encodeURIComponent(JSON.stringify(w))+"&from=0&outside=true",webview.Show(p)):(0===appConf.terminalType&&(p="../plugins/com-wmzz-plugins-tbj/src/www/index.html"),d(p+="#/init?ssk="+n+"&data="+JSON.stringify(w)+"&from=0&outside=true"))},window.addEventListener("message",(function(t){t.data&&0===t.data.actionClose&&o&&o.remove()})),n}]);
angular.services.factory("user",["$timeout","$ionicPopup","camera","$fileTransfer","$ionicHistory","$state","md5","requestP","prompt","localStorage","serviceManager","lokiService","appState","$rootScope",function(n,e,o,i,s,t,r,a,u,c,f,p,l,d){var h={userType:c.getObject("userType")||6,user:p.getKey("user",{}),parentData:{},firstActivate:!0,currentTab:0,gradeData:{},areaData:[],loginDeviceData:{loginMode:[0,1,2,3]},phone:null,firstLogin:!0,clearCache:function(){this.user={},this.parentData={},this.currentTab=0,this.gradeData={},this.areaData=[],this.firstActivate=!0,this.phone=null,this.saveUser()},saveUser:function(){p.setKey("user",h.user),c.set("userType",h.userType)},deviceLogin:function(n,e){var o=p.getKey("lastDeviceLogin"),i={};o?appConf.appVersion.no>o&&(i.starttype=2):i.starttype=1,a.jsonp("user/login",i,(function(e){e.pptViewHost&&(appConf.pptViewHost=e.pptViewHost),e.socketioHost&&(appConf.socket=e.socketioHost),h.loginDeviceData.loginMode=e.loginMode,h.user.ssk=e.ssk,angular.services.ssk=e.ssk,angular.services.ktssk=e.ssk,h.saveUser(),n&&n(e),(!o||appConf.appVersion.no>o)&&p.setKey("lastDeviceLogin",appConf.appVersion.no)}),(function(n){e&&e(n)}))},signinBySsk:function(n,e){a.jsonp("user/signinBySsk",{ssk:h.user.ssk},(function(e){g(e),n&&n(e)}),(function(n){e&&e(n)}))},login:function(n,e,o){a.post("user/signin",{ssk:angular.services.ssk,name:n.username,pwd:1!=n.outsideHost?n.pwd?r.createHash(n.pwd||""):"":n.pwd,outsideHost:1*n.outsideHost,rememberme:1},(function(n){g(n),e&&e(n)}),(function(n){o&&o(n)}))},loginOut:function(e,o){function i(){h.clearCache(),h.saveUser(),d.isShowInfo=0,angular.services.ssk=null,angular.services.ktssk=null,f.clearCache(),ionic.Platform.isWeiXin()?window.location.href=appConf.domain_xt+"?r=parents/wechat/index":t.go("single.login",{reLogin:!0}),n((function(){s.clearCache(),s.clearHistory()}),1e3)}ionic.Platform.isWeiXin()?a.jsonp("user/unBindWeChat",{},(function(n){i(),e&&e(n)}),(function(n){i(),o&&o(n)})):a.jsonp("user/signout",{},(function(n){i(),e&&e(n)}),(function(n){i(),o&&o(n)}))},register:function(n,e,o){a.jsonp("user/login",{_host:appConf.XT_HOST},(function(i){i.pptViewHost&&(appConf.pptViewHost=i.pptViewHost),i.socketioHost&&(appConf.socket=i.socketioHost),h.loginDeviceData.loginMode=i.loginMode,h.ssk=i.ssk,h.user.ssk=i.ssk,angular.services.ktssk=i.ssk,angular.services.ssk=i.ssk;var s=r.createHash(n.password||"");a.jsonp("user/register",{_host:appConf.XT_HOST,utype:n.utype,name:n.username,pwd:s,atype:n.atype,version:1,code:n.code||""},(function(n){g(n),e&&e(n)}),(function(n){o&&o(n)}))}),(function(n){o&&o(n)}))},bindWx:function(n,e,o){a.post("user/bindWeChatInfo",{unionid:n.unionid,openid:n.openid,nickname:n.nickname,headimgurl:n.headimgurl,_host:appConf.XTP_HOST},(function(n){e&&e(n)}),(function(n){o&&o(n)}))},unBindWx:function(n,e,o){a.post("user/unBindWeChat",{_host:appConf.XTP_HOST},(function(n){e&&e(n)}),(function(n){o&&o(n)}))},hasWeChatBind:function(n,e){a.post("user/hasWeChatBind",{_host:appConf.XTP_HOST},(function(e){n&&n(e)}),(function(n){e&&e(n)}))},mobmyPreLogin:function(n,e){window.plugins.yjyzPlugin.init({appKey:"5b5819ec7f88c",appSecret:"6b6db5b4c7f596a84e98a0579ade0eb8"},(function(o){window.plugins.yjyzPlugin.preVerify((function(e){n&&n(e)}),(function(n){console.log("预登陆失败："),e&&e(n)}))}),(function(n){console.log("不支持："),e&&e(n)}))},mobmyLogin:function(n,e){var o={title:"用户服务协议与隐私政策",url:cordova.file.applicationDirectory+"www/page/html/disclaimers.html"};window.plugins.yjyzPlugin.verify(o,(function(o){u.loading.show("设备登录中...");var i=JSON.parse(o),s={opToken:ionic.Platform.isIOS()?i.operatorToken:i.seqId,operator:ionic.Platform.isIOS()?i.operatorType:i.operator,token:ionic.Platform.isIOS()?i.token:i.tag,_host:appConf.XTP_HOST,type:1};a.post("user/SecVerifyLogin",s,(function(e){g(e),n&&n(e)}),(function(n){e&&e(n)}))}),(function(n){e&&e({msg:n})}))},getWeChatUserInfo:function(n,e,o){a.jsonp("user/getWeChatUserInfo",{code:n.code,_host:appConf.XTP_HOST},(function(n){e&&e(n)}),(function(n){o&&o(n)}))},createSskByUnionID:function(n,e,o){a.post("user/createSskByUnionID",{unionid:n.unionid,_host:appConf.XTP_HOST},(function(n){e&&e(n)}),(function(n){o&&o(n)}))},setPortraits:function(n,s,t,r){if(!window.cordova)return!1;function u(n,e,o,s,t){i.upload(n,(function(n){var i=JSON.parse(n.response),r=s?h.user.info.children[t].ssk:h.user.ssk;i&&"ok"==i.status?a.jsonp("user/setPortraitsUrl",{url:i.msg,ssk:r},(function(n){s?h.user.info.children[t].portrait=n.data.portraits:h.user.info.portrait=n.data.portraits,h.saveUser(),e&&e(n)}),(function(n){o&&o(n)})):o&&o({msg:"上传失败，请重新上传"})}),(function(){o&&o({msg:"上传失败，请重新上传"})}),{from:"avatar"})}e.confirm({title:"<strong>选择上传方式</strong>",buttons:[{text:"拍照",onTap:function(){o.camera((function(e){t?u(e,n,s,t,r):u(e,n,s)}),(function(n){s&&s(n)}),{destinationType:Camera.DestinationType.FILE_URI})}},{text:"本地",onTap:function(){o.imagePick((function(e){t?u(e,n,s,t,r):u(e,n,s)}),(function(n){s&&s(n)}),{destinationType:Camera.DestinationType.FILE_URI})}},{text:"取消"}]})},setName:function(n,e,o){if(!n)return u.showTip("姓名不能为空！");a.jsonp("user/setRealName",{_host:appConf.XT_HOST,name:n},(function(o){h.user.info.uname=n,h.saveUser(),e&&e(o)}),(function(n){o&&o(n)}))},setRealName:function(n,e,o){if(!n.name)return u.showTip("姓名不能为空！");a.jsonp("user/setRealName",n,(function(n){e&&e(n)}),(function(n){o&&o(n)}))},setNick:function(n,e,o){if(!n)return u.showTip("姓名不能为空！");a.jsonp("user/setNick",{_host:appConf.XT_HOST,nick:n},(function(n){e&&e(n)}),(function(n){o&&o(n)}))},setPwd:function(n,e,o){return n.oldpwd&&n.newpwd?n.oldpwd==n.newpwd?u.showTip("新旧密码不能相同！"):(u.loading.show(),void a.jsonp("user/setPwd",{_host:appConf.XT_HOST,oldpwd:r.createHash(n.oldpwd),newpwd:r.createHash(n.newpwd)},(function(n){h.saveUser(),e&&e(n)}),(function(n){o&&o(n)}))):u.showTip("新旧密码不能为空！")},setEmailOrPhone:function(n,e,o){a.jsonp("user/bindAccount",{account:n.account,_host:appConf.XTP_HOST,type:n.type,code:n.code,ssk:n.ssk},(function(o){n.type,h.saveUser(),e&&e(o)}),(function(n){o&&o(n)}))},checkPsw:function(n,e,o){a.jsonp("user/verifyPwd",{_host:appConf.XT_HOST,pwd:r.createHash(n)},(function(o){e&&e(n,o)}),(function(n){o&&o(n)}))},relateChild:function(n,e,o){a.jsonp("user/relate",{_host:appConf.XT_HOST,account:n.account,pwd:r.createHash(n.pwd),type:1,verifyStatus:n.verifyStatus,ktinfo:1},(function(n){h.signinBySsk((function(){h.user.childS=n.data,e&&e(n)}),(function(n){o&&o(n)}))}),(function(n){o&&o(n)}))},unrelateChild:function(n,e,o){a.jsonp("user/unrelate",{_host:appConf.XT_HOST,uid:n},(function(o){var i=h.user.info.children;angular.forEach(i,(function(e,o){e.uid==n&&(i.splice(o,1),h.user.childS.uid==n&&(h.user.childS=i[0],h.user.info.childIndex=0))})),h.saveUser(),e&&e(o)}),(function(n){o&&o(n)}))},findFirstEid:function(n){for(var e=null,o=0,i=n.length;o<i;o++){var s=n[o];if(1==s.needSelf){e=o;break}if(!s.aqid){e=o;break}}return e},agreeClause:function(n,e){a.jsonp("user/agreeClause",{},(function(e){n&&n(e)}),(function(n){e&&e(n)}))},getAgreement:function(n,e){var o={package:appConf.packageName};1==appConf.serverType?o._host=appConf.host+"r=shop/":o._host="http://shop.wmketang.com?r=shop/",a.jsonp("user/getAgreement",o,(function(e){n&&n(e)}),(function(n){e&&e(n)}))},selectChildByUid:k,selectChildByKTUid:function(n){var e=h.user.info.children;if(e){for(var o,i=0;i<e.length;i++){var s=e[i];if(s.ktinfo&&s.ktinfo.uid==n){o=s,h.user.info.childIndex=i;break}}o?h.user.childS=o:(h.user.childS=e[0],h.user.info.childIndex=0)}h.saveUser()},loginEnd:g,handleRequestPermission:v};function g(n){var e=n.data;i.setUid(e.uid),h.user.info=e,e.utype=3,e.childIndex=0,angular.services.ktssk=e.ktssk,h.user.ktssk=e.ktssk,n.ssk&&(l.setHostSsk(n.ssk),angular.services.ssk=n.ssk,h.user.ssk=n.ssk);var o=e.children;h.user.childS&&h.user.childS.uid?k(h.user.childS.uid):o&&(h.user.childS=o[0]),h.saveUser()}function k(n){var e=h.user.info.children;if(e){for(var o,i=0;i<e.length;i++){var s=e[i];if(s.uid==n){o=s,h.user.info.childIndex=i;break}}o?h.user.childS=o:(h.user.childS=e[0],h.user.info.childIndex=0)}h.saveUser()}function v(){window.cordova&&(ionic.Platform.isIOS()&&cordova.plugins.notification.local.hasPermission((function(n){n?d.$broadcast("login.yjyzlistener"):cordova.plugins.notification.local.requestPermission((function(){d.$broadcast("login.yjyzlistener")}))}),{}),ionic.Platform.isAndroid()&&d.$broadcast("login.yjyzlistener"),window.cordova&&n((function(){angular.services.loadService("systemFactory",(function(n){var e;h.user.info&&(e=h.user.info.uid||h.user.info.id),n.autoCheckUpdate(e)}))}),2e3))}return p.getKey("disclaimersAgree")?n((function(){v()}),1e3):angular.services.loadService("disclaimers",(function(n){n.showConfirm({title:"#78c549",button:{ok:"#78c549",cancel:"orange"},scope:d,user:h})})),f.addService(h),angular.services.ssk=h.user.ssk,angular.services.ktssk=h.user.ktssk,l.setHostType(3),n((function(){1==appConf.openRemote&&u.showTip("云端代码测试版,重启app可测试最新功能")}),2500),ionic.app=ionic.app||{},ionic.app.user=h,h}]),angular.services.factory("$user",["user",function(n){return n}]);
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}angular.services.service("$class",["$request","lokiService","$ionicPopup","camera","user","serviceManager",function(e,t,n,s,a,o){o.addService(this);var i=this,r=t.userKeyValue.membersArrangeAll||{},u=t.userKeyValue.members||{},c=t.userKeyValue.friends||{},f=[],l=t.userKeyValue.classInfo||{list:[],status:{}};i.clearCache=function(){r={},u={},i.friends={},f=[],l={list:[],status:{}}},i.getList=function(n,s,o){switch(l.status.ssk=a.user.childS.ktinfo.ssk,n){case 1:i();break;case 2:l.status.isGroup=!0,i();break;case 3:l.status.isCount=!0,i();break;case 4:l.status.isGroup=!0,l.status.isCount=!0,i();break;case 5:l.status.isGroup=!0,l.status.isCount=!0,l.status.isCountStudent=!0,i()}function i(){e.jsonp("class/getList",l.status,(function(e){l.list=e.data.class||[],s(e.data.class),t.userKeyValue.classInfo=l}),(function(e){o(e)}),!0)}},i.clearList=function(){l={list:[],status:{}},t.userKeyValue.classInfo={list:[],status:{}}},i.getClassMemberArrange=function(n,s,a,o){var c,f={};return"object"==_typeof(n)?(f=n,c=n.classid):f.classid=c=n,angular.services.loadService("Pinyin",(function(n){var l=new n;e.jsonp("class/getMember",f,(function(e){var n={},a={};o?angular.forEach(e.data.member,(function(e,t){e.type==o&&(a[t]=e)})):a=e.data.member,angular.forEach(a,(function(e){!n[e.type]&&(n[e.type]=[]),e.pinyin=l.getFullChars(e.name).toUpperCase(),n[e.type].push(e)})),angular.forEach(n,(function(e){e.sort((function(e,t){return e.pinyin.localeCompare(t.pinyin)}))}));var f=[];angular.forEach(n,(function(e,t){angular.forEach(e,(function(e){var n=e.pinyin.substr(0,1);!f[t]&&(f[t]={}),!f[t][n]&&(f[t][n]=[]),f[t][n].push(e)}))})),r[c]=f,t.userKeyValue.membersArrangeAll=r,u[c]=e.data.member,t.userKeyValue.members=u,s&&s(r),i.friends=angular.extend(i.friends,e.data.member),t.userKeyValue.friends=i.friends}),(function(e){a&&a(e)}))})),r||null},i.getPortrait=function(a,o,i){function r(n,s,a,o){e.post("class/protraitsEdit",{classid:l[n].id,fileStream:s},(function(e){l[n].portraits="data:image/jpeg;base64,"+s,t.userKeyValue.classInfo=l,e.fileStream=s,a&&a(e)}),(function(e){o&&o(e)}))}n.confirm({title:"<strong>选择上传方式</strong>",buttons:[{text:"拍照",onTap:function(){s.camera((function(e){console.log(e),e=e.split("data:image/jpeg;base64,"),r(a,e[1],o,i)}),(function(e){i&&i(e)}))}},{text:"本地",onTap:function(){s.imagePick((function(e){console.log(e),e=e.split("data:image/jpeg;base64,"),r(a,e[1],o,i)}),(function(e){i&&i(e)}))}},{text:"取消"}]})},i.setPortrait=function(e,t){n.confirm({title:"<strong>选择上传方式</strong>",buttons:[{text:"拍照",onTap:function(){s.camera((function(t){console.log(t),t=t.split("data:image/jpeg;base64,"),e&&e(t[1])}),(function(e){t&&t(e)}))}},{text:"本地",onTap:function(){s.imagePick((function(t){console.log(t),t=t.split("data:image/jpeg;base64,"),e&&e(t[1])}),(function(e){t&&t(e)}))}},{text:"取消"}]})},i.getClassInfo=function(t,n,s){e.jsonp("class/getInfo",{classid:t},(function(e){n(e)}),(function(e){s(e)}))},i.getExistNumber=function(t,n,s){e.jsonp("class/getExistNumber",t,(function(e){n(e)}),(function(e){s(e)}))},i.saveClassInfo=function(t,n,s){e.jsonp("class/infoEdit",t,(function(e){n(e)}),(function(e){s(e)}))},i.friends=c,i.getFriends=function(){return i.friends},i.getMyParent=function(t,n,s){f&&0==f.length?e.jsonp("class/getMember",{classid:t},(function(e){var t=a.user.info.id,s=e.data.member[t].parent;f=s,n&&n(s)}),(function(e){s&&s(e)})):n&&n(f)},i.getMembers=function(n,s,a){return e.jsonp("class/getMember",n,(function(e){u[n.classid]=e.data.member,t.userKeyValue.members=u,s&&s(e),angular.forEach(e.data.member,(function(t){1==t.type&&t.parent.forEach((function(t){e.data.member[t.uid]=t}))})),i.friends=angular.extend(i.friends,e.data.member),t.userKeyValue.friends=i.friends}),(function(e){a&&a(e)})),u[n.classid]},i.getAllSubject=function(t,n){e.jsonp("prepare/getSubjectBySchoolType",{_host:appConf.KT3_HOST},(function(e){t&&t(e)}),(function(e){n&&n(e)}),!0)}}]);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

  module.exports = _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var url = _dereq_('./url');
  var parser = _dereq_('socket.io-parser');
  var Manager = _dereq_('./manager');
  var debug = _dereq_('debug')('socket.io-client');

  /**
   * Module exports.
   */

  module.exports = exports = lookup;

  /**
   * Managers cache.
   */

  var cache = exports.managers = {};

  /**
   * Looks up an existing `Manager` for multiplexing.
   * If the user summons:
   *
   *   `io('http://localhost/a');`
   *   `io('http://localhost/b');`
   *
   * We reuse the existing instance based on same scheme/port/host,
   * and we initialize sockets for each namespace.
   *
   * @api public
   */

  function lookup(uri, opts) {
    if (typeof uri == 'object') {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};

    var parsed = url(uri);
    var source = parsed.source;
    var id = parsed.id;
    var io;

    if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
      debug('ignoring socket cache for %s', source);
      io = Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug('new io instance for %s', source);
        cache[id] = Manager(source, opts);
      }
      io = cache[id];
    }

    return io.socket(parsed.path);
  }

  /**
   * Protocol version.
   *
   * @api public
   */

  exports.protocol = parser.protocol;

  /**
   * `connect`.
   *
   * @param {String} uri
   * @api public
   */

  exports.connect = lookup;

  /**
   * Expose constructors for standalone build.
   *
   * @api public
   */

  exports.Manager = _dereq_('./manager');
  exports.Socket = _dereq_('./socket');

},{"./manager":3,"./socket":5,"./url":6,"debug":10,"socket.io-parser":46}],3:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var url = _dereq_('./url');
  var eio = _dereq_('engine.io-client');
  var Socket = _dereq_('./socket');
  var Emitter = _dereq_('component-emitter');
  var parser = _dereq_('socket.io-parser');
  var on = _dereq_('./on');
  var bind = _dereq_('component-bind');
  var object = _dereq_('object-component');
  var debug = _dereq_('debug')('socket.io-client:manager');
  var indexOf = _dereq_('indexof');
  var Backoff = _dereq_('backo2');

  /**
   * Module exports
   */

  module.exports = Manager;

  /**
   * `Manager` constructor.
   *
   * @param {String} engine instance or engine uri/opts
   * @param {Object} options
   * @api public
   */

  function Manager(uri, opts){
    if (!(this instanceof Manager)) return new Manager(uri, opts);
    if (uri && ('object' == typeof uri)) {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};

    opts.path = opts.path || '/socket.io';
    this.nsps = {};
    this.subs = [];
    this.opts = opts;
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor(opts.randomizationFactor || 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this.readyState = 'closed';
    this.uri = uri;
    this.connected = [];
    this.encoding = false;
    this.packetBuffer = [];
    this.encoder = new parser.Encoder();
    this.decoder = new parser.Decoder();
    this.autoConnect = opts.autoConnect !== false;
    if (this.autoConnect) this.open();
  }

  /**
   * Propagate given event to sockets and emit on `this`
   *
   * @api private
   */

  Manager.prototype.emitAll = function() {
    this.emit.apply(this, arguments);
    for (var nsp in this.nsps) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  };

  /**
   * Update `socket.id` of all sockets
   *
   * @api private
   */

  Manager.prototype.updateSocketIds = function(){
    for (var nsp in this.nsps) {
      this.nsps[nsp].id = this.engine.id;
    }
  };

  /**
   * Mix in `Emitter`.
   */

  Emitter(Manager.prototype);

  /**
   * Sets the `reconnection` config.
   *
   * @param {Boolean} true/false if it should automatically reconnect
   * @return {Manager} self or value
   * @api public
   */

  Manager.prototype.reconnection = function(v){
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  };

  /**
   * Sets the reconnection attempts config.
   *
   * @param {Number} max reconnection attempts before giving up
   * @return {Manager} self or value
   * @api public
   */

  Manager.prototype.reconnectionAttempts = function(v){
    if (!arguments.length) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  };

  /**
   * Sets the delay between reconnections.
   *
   * @param {Number} delay
   * @return {Manager} self or value
   * @api public
   */

  Manager.prototype.reconnectionDelay = function(v){
    if (!arguments.length) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    this.backoff && this.backoff.setMin(v);
    return this;
  };

  Manager.prototype.randomizationFactor = function(v){
    if (!arguments.length) return this._randomizationFactor;
    this._randomizationFactor = v;
    this.backoff && this.backoff.setJitter(v);
    return this;
  };

  /**
   * Sets the maximum delay between reconnections.
   *
   * @param {Number} delay
   * @return {Manager} self or value
   * @api public
   */

  Manager.prototype.reconnectionDelayMax = function(v){
    if (!arguments.length) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    this.backoff && this.backoff.setMax(v);
    return this;
  };

  /**
   * Sets the connection timeout. `false` to disable
   *
   * @return {Manager} self or value
   * @api public
   */

  Manager.prototype.timeout = function(v){
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  };

  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @api private
   */

  Manager.prototype.maybeReconnectOnOpen = function() {
    // Only try to reconnect if it's the first time we're connecting
    if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
      // keeps reconnection from firing twice for the same reconnection loop
      this.reconnect();
    }
  };


  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} optional, callback
   * @return {Manager} self
   * @api public
   */

  Manager.prototype.open =
      Manager.prototype.connect = function(fn){
        debug('readyState %s', this.readyState);
        if (~this.readyState.indexOf('open')) return this;

        debug('opening %s', this.uri);
        this.engine = eio(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this.readyState = 'opening';
        this.skipReconnect = false;

        // emit `open`
        var openSub = on(socket, 'open', function() {
          self.onopen();
          fn && fn();
        });

        // emit `connect_error`
        var errorSub = on(socket, 'error', function(data){
          debug('connect_error');
          self.cleanup();
          self.readyState = 'closed';
          self.emitAll('connect_error', data);
          if (fn) {
            var err = new Error('Connection error');
            err.data = data;
            fn(err);
          } else {
            // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
          }
        });

        // emit `connect_timeout`
        if (false !== this._timeout) {
          var timeout = this._timeout;
          debug('connect attempt will timeout after %d', timeout);

          // set timer
          var timer = setTimeout(function(){
            debug('connect attempt timed out after %d', timeout);
            openSub.destroy();
            socket.close();
            socket.emit('error', 'timeout');
            self.emitAll('connect_timeout', timeout);
          }, timeout);

          this.subs.push({
            destroy: function(){
              clearTimeout(timer);
            }
          });
        }

        this.subs.push(openSub);
        this.subs.push(errorSub);

        return this;
      };

  /**
   * Called upon transport open.
   *
   * @api private
   */

  Manager.prototype.onopen = function(){
    debug('open');

    // clear old subs
    this.cleanup();

    // mark as open
    this.readyState = 'open';
    this.emit('open');

    // add new subs
    var socket = this.engine;
    this.subs.push(on(socket, 'data', bind(this, 'ondata')));
    this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
    this.subs.push(on(socket, 'error', bind(this, 'onerror')));
    this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  };

  /**
   * Called with data.
   *
   * @api private
   */

  Manager.prototype.ondata = function(data){
    this.decoder.add(data);
  };

  /**
   * Called when parser fully decodes a packet.
   *
   * @api private
   */

  Manager.prototype.ondecoded = function(packet) {
    this.emit('packet', packet);
  };

  /**
   * Called upon socket error.
   *
   * @api private
   */

  Manager.prototype.onerror = function(err){
    debug('error', err);
    this.emitAll('error', err);
  };

  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @api public
   */

  Manager.prototype.socket = function(nsp){
    var socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp);
      this.nsps[nsp] = socket;
      var self = this;
      socket.on('connect', function(){
        socket.id = self.engine.id;
        if (!~indexOf(self.connected, socket)) {
          self.connected.push(socket);
        }
      });
    }
    return socket;
  };

  /**
   * Called upon a socket close.
   *
   * @param {Socket} socket
   */

  Manager.prototype.destroy = function(socket){
    var index = indexOf(this.connected, socket);
    if (~index) this.connected.splice(index, 1);
    if (this.connected.length) return;

    this.close();
  };

  /**
   * Writes a packet.
   *
   * @param {Object} packet
   * @api private
   */

  Manager.prototype.packet = function(packet){
    debug('writing packet %j', packet);
    var self = this;

    if (!self.encoding) {
      // encode, then write to engine with result
      self.encoding = true;
      this.encoder.encode(packet, function(encodedPackets) {
        for (var i = 0; i < encodedPackets.length; i++) {
          self.engine.write(encodedPackets[i]);
        }
        self.encoding = false;
        self.processPacketQueue();
      });
    } else { // add packet to the queue
      self.packetBuffer.push(packet);
    }
  };

  /**
   * If packet buffer is non-empty, begins encoding the
   * next packet in line.
   *
   * @api private
   */

  Manager.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
      var pack = this.packetBuffer.shift();
      this.packet(pack);
    }
  };

  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @api private
   */

  Manager.prototype.cleanup = function(){
    var sub;
    while (sub = this.subs.shift()) sub.destroy();

    this.packetBuffer = [];
    this.encoding = false;

    this.decoder.destroy();
  };

  /**
   * Close the current socket.
   *
   * @api private
   */

  Manager.prototype.close =
      Manager.prototype.disconnect = function(){
        this.skipReconnect = true;
        this.backoff.reset();
        this.readyState = 'closed';
        this.engine && this.engine.close();
      };

  /**
   * Called upon engine close.
   *
   * @api private
   */

  Manager.prototype.onclose = function(reason){
    debug('close');
    this.cleanup();
    this.backoff.reset();
    this.readyState = 'closed';
    this.emit('close', reason);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  };

  /**
   * Attempt a reconnection.
   *
   * @api private
   */

  Manager.prototype.reconnect = function(){
    if (this.reconnecting || this.skipReconnect) return this;

    var self = this;

    if (this.backoff.attempts >= this._reconnectionAttempts) {
      debug('reconnect failed');
      this.backoff.reset();
      this.emitAll('reconnect_failed');
      this.reconnecting = false;
    } else {
      var delay = this.backoff.duration();
      debug('will wait %dms before reconnect attempt', delay);

      this.reconnecting = true;
      var timer = setTimeout(function(){
        if (self.skipReconnect) return;

        debug('attempting reconnect');
        self.emitAll('reconnect_attempt', self.backoff.attempts);
        self.emitAll('reconnecting', self.backoff.attempts);

        // check again for the case socket closed in above events
        if (self.skipReconnect) return;

        self.open(function(err){
          if (err) {
            debug('reconnect attempt error');
            self.reconnecting = false;
            self.reconnect();
            self.emitAll('reconnect_error', err.data);
          } else {
            debug('reconnect success');
            self.onreconnect();
          }
        });
      }, delay);

      this.subs.push({
        destroy: function(){
          clearTimeout(timer);
        }
      });
    }
  };

  /**
   * Called upon successful reconnect.
   *
   * @api private
   */

  Manager.prototype.onreconnect = function(){
    var attempt = this.backoff.attempts;
    this.reconnecting = false;
    this.backoff.reset();
    this.updateSocketIds();
    this.emitAll('reconnect', attempt);
  };

},{"./on":4,"./socket":5,"./url":6,"backo2":7,"component-bind":8,"component-emitter":9,"debug":10,"engine.io-client":11,"indexof":42,"object-component":43,"socket.io-parser":46}],4:[function(_dereq_,module,exports){

  /**
   * Module exports.
   */

  module.exports = on;

  /**
   * Helper for subscriptions.
   *
   * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
   * @param {String} event name
   * @param {Function} callback
   * @api public
   */

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return {
      destroy: function(){
        obj.removeListener(ev, fn);
      }
    };
  }

},{}],5:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var parser = _dereq_('socket.io-parser');
  var Emitter = _dereq_('component-emitter');
  var toArray = _dereq_('to-array');
  var on = _dereq_('./on');
  var bind = _dereq_('component-bind');
  var debug = _dereq_('debug')('socket.io-client:socket');
  var hasBin = _dereq_('has-binary');

  /**
   * Module exports.
   */

  module.exports = exports = Socket;

  /**
   * Internal events (blacklisted).
   * These events can't be emitted by the user.
   *
   * @api private
   */

  var events = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1
  };

  /**
   * Shortcut to `Emitter#emit`.
   */

  var emit = Emitter.prototype.emit;

  /**
   * `Socket` constructor.
   *
   * @api public
   */

  function Socket(io, nsp){
    this.io = io;
    this.nsp = nsp;
    this.json = this; // compat
    this.ids = 0;
    this.acks = {};
    if (this.io.autoConnect) this.open();
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.connected = false;
    this.disconnected = true;
  }

  /**
   * Mix in `Emitter`.
   */

  Emitter(Socket.prototype);

  /**
   * Subscribe to open, close and packet events
   *
   * @api private
   */

  Socket.prototype.subEvents = function() {
    if (this.subs) return;

    var io = this.io;
    this.subs = [
      on(io, 'open', bind(this, 'onopen')),
      on(io, 'packet', bind(this, 'onpacket')),
      on(io, 'close', bind(this, 'onclose'))
    ];
  };

  /**
   * "Opens" the socket.
   *
   * @api public
   */

  Socket.prototype.open =
      Socket.prototype.connect = function(){
        if (this.connected) return this;

        this.subEvents();
        this.io.open(); // ensure open
        if ('open' == this.io.readyState) this.onopen();
        return this;
      };

  /**
   * Sends a `message` event.
   *
   * @return {Socket} self
   * @api public
   */

  Socket.prototype.send = function(){
    var args = toArray(arguments);
    args.unshift('message');
    this.emit.apply(this, args);
    return this;
  };

  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @param {String} event name
   * @return {Socket} self
   * @api public
   */

  Socket.prototype.emit = function(ev){
    if (events.hasOwnProperty(ev)) {
      emit.apply(this, arguments);
      return this;
    }

    var args = toArray(arguments);
    var parserType = parser.EVENT; // default
    if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
    var packet = { type: parserType, data: args };

    // event ack callback
    if ('function' == typeof args[args.length - 1]) {
      debug('emitting packet with ack id %d', this.ids);
      this.acks[this.ids] = args.pop();
      packet.id = this.ids++;
    }

    if (this.connected) {
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    return this;
  };

  /**
   * Sends a packet.
   *
   * @param {Object} packet
   * @api private
   */

  Socket.prototype.packet = function(packet){
    packet.nsp = this.nsp;
    this.io.packet(packet);
  };

  /**
   * Called upon engine `open`.
   *
   * @api private
   */

  Socket.prototype.onopen = function(){
    debug('transport is open - connecting');

    // write connect packet if necessary
    if ('/' != this.nsp) {
      this.packet({ type: parser.CONNECT });
    }
  };

  /**
   * Called upon engine `close`.
   *
   * @param {String} reason
   * @api private
   */

  Socket.prototype.onclose = function(reason){
    debug('close (%s)', reason);
    this.connected = false;
    this.disconnected = true;
    delete this.id;
    this.emit('disconnect', reason);
  };

  /**
   * Called with socket packet.
   *
   * @param {Object} packet
   * @api private
   */

  Socket.prototype.onpacket = function(packet){
    if (packet.nsp != this.nsp) return;

    switch (packet.type) {
      case parser.CONNECT:
        this.onconnect();
        break;

      case parser.EVENT:
        this.onevent(packet);
        break;

      case parser.BINARY_EVENT:
        this.onevent(packet);
        break;

      case parser.ACK:
        this.onack(packet);
        break;

      case parser.BINARY_ACK:
        this.onack(packet);
        break;

      case parser.DISCONNECT:
        this.ondisconnect();
        break;

      case parser.ERROR:
        this.emit('error', packet.data);
        break;
    }
  };

  /**
   * Called upon a server event.
   *
   * @param {Object} packet
   * @api private
   */

  Socket.prototype.onevent = function(packet){
    var args = packet.data || [];
    debug('emitting event %j', args);

    if (null != packet.id) {
      debug('attaching ack callback to event');
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      emit.apply(this, args);
    } else {
      this.receiveBuffer.push(args);
    }
  };

  /**
   * Produces an ack callback to emit with an event.
   *
   * @api private
   */

  Socket.prototype.ack = function(id){
    var self = this;
    var sent = false;
    return function(){
      // prevent double callbacks
      if (sent) return;
      sent = true;
      var args = toArray(arguments);
      debug('sending ack %j', args);

      var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
      self.packet({
        type: type,
        id: id,
        data: args
      });
    };
  };

  /**
   * Called upon a server acknowlegement.
   *
   * @param {Object} packet
   * @api private
   */

  Socket.prototype.onack = function(packet){
    debug('calling ack %s with %j', packet.id, packet.data);
    var fn = this.acks[packet.id];
    fn.apply(this, packet.data);
    delete this.acks[packet.id];
  };

  /**
   * Called upon server connect.
   *
   * @api private
   */

  Socket.prototype.onconnect = function(){
    this.connected = true;
    this.disconnected = false;
    this.emit('connect');
    this.emitBuffered();
  };

  /**
   * Emit buffered events (received and emitted).
   *
   * @api private
   */

  Socket.prototype.emitBuffered = function(){
    var i;
    for (i = 0; i < this.receiveBuffer.length; i++) {
      emit.apply(this, this.receiveBuffer[i]);
    }
    this.receiveBuffer = [];

    for (i = 0; i < this.sendBuffer.length; i++) {
      this.packet(this.sendBuffer[i]);
    }
    this.sendBuffer = [];
  };

  /**
   * Called upon server disconnect.
   *
   * @api private
   */

  Socket.prototype.ondisconnect = function(){
    debug('server disconnect (%s)', this.nsp);
    this.destroy();
    this.onclose('io server disconnect');
  };

  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @api private.
   */

  Socket.prototype.destroy = function(){
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      for (var i = 0; i < this.subs.length; i++) {
        this.subs[i].destroy();
      }
      this.subs = null;
    }

    this.io.destroy(this);
  };

  /**
   * Disconnects the socket manually.
   *
   * @return {Socket} self
   * @api public
   */

  Socket.prototype.close =
      Socket.prototype.disconnect = function(){
        if (this.connected) {
          debug('performing disconnect (%s)', this.nsp);
          this.packet({ type: parser.DISCONNECT });
        }

        // remove socket from pool
        this.destroy();

        if (this.connected) {
          // fire events
          this.onclose('io client disconnect');
        }
        return this;
      };

},{"./on":4,"component-bind":8,"component-emitter":9,"debug":10,"has-binary":38,"socket.io-parser":46,"to-array":50}],6:[function(_dereq_,module,exports){
  (function (global){

    /**
     * Module dependencies.
     */

    var parseuri = _dereq_('parseuri');
    var debug = _dereq_('debug')('socket.io-client:url');

    /**
     * Module exports.
     */

    module.exports = url;

    /**
     * URL parser.
     *
     * @param {String} url
     * @param {Object} An object meant to mimic window.location.
     *                 Defaults to window.location.
     * @api public
     */

    function url(uri, loc){
      var obj = uri;

      // default to window.location
      var loc = loc || global.location;
      if (null == uri) uri = loc.protocol + '//' + loc.host;

      // relative path support
      if ('string' == typeof uri) {
        if ('/' == uri.charAt(0)) {
          if ('/' == uri.charAt(1)) {
            uri = loc.protocol + uri;
          } else {
            uri = loc.hostname + uri;
          }
        }

        if (!/^(https?|wss?):\/\//.test(uri)) {
          debug('protocol-less url %s', uri);
          if ('undefined' != typeof loc) {
            uri = loc.protocol + '//' + uri;
          } else {
            uri = 'https://' + uri;
          }
        }

        // parse
        debug('parse %s', uri);
        obj = parseuri(uri);
      }

      // make sure we treat `localhost:80` and `localhost` equally
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = '80';
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = '443';
        }
      }

      obj.path = obj.path || '/';

      // define unique id
      obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
      // define href
      obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

      return obj;
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"debug":10,"parseuri":44}],7:[function(_dereq_,module,exports){

  /**
   * Expose `Backoff`.
   */

  module.exports = Backoff;

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */

  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }

  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */

  Backoff.prototype.duration = function(){
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand =  Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };

  /**
   * Reset the number of attempts.
   *
   * @api public
   */

  Backoff.prototype.reset = function(){
    this.attempts = 0;
  };

  /**
   * Set the minimum duration
   *
   * @api public
   */

  Backoff.prototype.setMin = function(min){
    this.ms = min;
  };

  /**
   * Set the maximum duration
   *
   * @api public
   */

  Backoff.prototype.setMax = function(max){
    this.max = max;
  };

  /**
   * Set the jitter
   *
   * @api public
   */

  Backoff.prototype.setJitter = function(jitter){
    this.jitter = jitter;
  };


},{}],8:[function(_dereq_,module,exports){
  /**
   * Slice reference.
   */

  var slice = [].slice;

  /**
   * Bind `obj` to `fn`.
   *
   * @param {Object} obj
   * @param {Function|String} fn or string
   * @return {Function}
   * @api public
   */

  module.exports = function(obj, fn){
    if ('string' == typeof fn) fn = obj[fn];
    if ('function' != typeof fn) throw new Error('bind() requires a function');
    var args = slice.call(arguments, 2);
    return function(){
      return fn.apply(obj, args.concat(slice.call(arguments)));
    }
  };

},{}],9:[function(_dereq_,module,exports){

  /**
   * Expose `Emitter`.
   */

  module.exports = Emitter;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  };

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on =
      Emitter.prototype.addEventListener = function(event, fn){
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || [])
            .push(fn);
        return this;
      };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function(event, fn){
    var self = this;
    this._callbacks = this._callbacks || {};

    function on() {
      self.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off =
      Emitter.prototype.removeListener =
          Emitter.prototype.removeAllListeners =
              Emitter.prototype.removeEventListener = function(event, fn){
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                  this._callbacks = {};
                  return this;
                }

                // specific event
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                  delete this._callbacks[event];
                  return this;
                }

                // remove specific handler
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                  cb = callbacks[i];
                  if (cb === fn || cb.fn === fn) {
                    callbacks.splice(i, 1);
                    break;
                  }
                }
                return this;
              };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
        , callbacks = this._callbacks[event];

    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
  };

},{}],10:[function(_dereq_,module,exports){

  /**
   * Expose `debug()` as the module.
   */

  module.exports = debug;

  /**
   * Create a debugger with the given `name`.
   *
   * @param {String} name
   * @return {Type}
   * @api public
   */

  function debug(name) {
    if (!debug.enabled(name)) return function(){};

    return function(fmt){
      fmt = coerce(fmt);

      var curr = new Date;
      var ms = curr - (debug[name] || curr);
      debug[name] = curr;

      fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

      // This hackery is required for IE8
      // where `console.log` doesn't have 'apply'
      window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
    }
  }

  /**
   * The currently active debug mode names.
   */

  debug.names = [];
  debug.skips = [];

  /**
   * Enables a debug mode by name. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} name
   * @api public
   */

  debug.enable = function(name) {
    try {
      localStorage.debug = name;
    } catch(e){}

    var split = (name || '').split(/[\s,]+/)
        , len = split.length;

    for (var i = 0; i < len; i++) {
      name = split[i].replace('*', '.*?');
      if (name[0] === '-') {
        debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
      }
      else {
        debug.names.push(new RegExp('^' + name + '$'));
      }
    }
  };

  /**
   * Disable debug output.
   *
   * @api public
   */

  debug.disable = function(){
    debug.enable('');
  };

  /**
   * Humanize the given `ms`.
   *
   * @param {Number} m
   * @return {String}
   * @api private
   */

  debug.humanize = function(ms) {
    var sec = 1000
        , min = 60 * 1000
        , hour = 60 * min;

    if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
    if (ms >= min) return (ms / min).toFixed(1) + 'm';
    if (ms >= sec) return (ms / sec | 0) + 's';
    return ms + 'ms';
  };

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  debug.enabled = function(name) {
    for (var i = 0, len = debug.skips.length; i < len; i++) {
      if (debug.skips[i].test(name)) {
        return false;
      }
    }
    for (var i = 0, len = debug.names.length; i < len; i++) {
      if (debug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  };

  /**
   * Coerce `val`.
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }

// persist

  try {
    if (window.localStorage) debug.enable(localStorage.debug);
  } catch(e){}

},{}],11:[function(_dereq_,module,exports){

  module.exports =  _dereq_('./lib/');

},{"./lib/":12}],12:[function(_dereq_,module,exports){

  module.exports = _dereq_('./socket');

  /**
   * Exports parser
   *
   * @api public
   *
   */
  module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":13,"engine.io-parser":25}],13:[function(_dereq_,module,exports){
  (function (global){
    /**
     * Module dependencies.
     */

    var transports = _dereq_('./transports');
    var Emitter = _dereq_('component-emitter');
    var debug = _dereq_('debug')('engine.io-client:socket');
    var index = _dereq_('indexof');
    var parser = _dereq_('engine.io-parser');
    var parseuri = _dereq_('parseuri');
    var parsejson = _dereq_('parsejson');
    var parseqs = _dereq_('parseqs');

    /**
     * Module exports.
     */

    module.exports = Socket;

    /**
     * Noop function.
     *
     * @api private
     */

    function noop(){}

    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} options
     * @api public
     */

    function Socket(uri, opts){
      if (!(this instanceof Socket)) return new Socket(uri, opts);

      opts = opts || {};

      if (uri && 'object' == typeof uri) {
        opts = uri;
        uri = null;
      }

      if (uri) {
        uri = parseuri(uri);
        opts.host = uri.host;
        opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
        opts.port = uri.port;
        if (uri.query) opts.query = uri.query;
      }

      this.secure = null != opts.secure ? opts.secure :
          (global.location && 'https:' == location.protocol);

      if (opts.host) {
        var pieces = opts.host.split(':');
        opts.hostname = pieces.shift();
        if (pieces.length) {
          opts.port = pieces.pop();
        } else if (!opts.port) {
          // if no port is specified manually, use the protocol default
          opts.port = this.secure ? '443' : '80';
        }
      }

      this.agent = opts.agent || false;
      this.hostname = opts.hostname ||
      (global.location ? location.hostname : 'localhost');
      this.port = opts.port || (global.location && location.port ?
          location.port :
          (this.secure ? 443 : 80));
      this.query = opts.query || {};
      if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
      this.upgrade = false !== opts.upgrade;
      this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
      this.forceJSONP = !!opts.forceJSONP;
      this.jsonp = false !== opts.jsonp;
      this.forceBase64 = !!opts.forceBase64;
      this.enablesXDR = !!opts.enablesXDR;
      this.timestampParam = opts.timestampParam || 't';
      this.timestampRequests = opts.timestampRequests;
      this.transports = opts.transports || ['polling', 'websocket'];
      this.readyState = '';
      this.writeBuffer = [];
      this.callbackBuffer = [];
      this.policyPort = opts.policyPort || 843;
      this.rememberUpgrade = opts.rememberUpgrade || false;
      this.binaryType = null;
      this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

      // SSL options for Node.js client
      this.pfx = opts.pfx || null;
      this.key = opts.key || null;
      this.passphrase = opts.passphrase || null;
      this.cert = opts.cert || null;
      this.ca = opts.ca || null;
      this.ciphers = opts.ciphers || null;
      this.rejectUnauthorized = opts.rejectUnauthorized || null;

      this.open();
    }

    Socket.priorWebsocketSuccess = false;

    /**
     * Mix in `Emitter`.
     */

    Emitter(Socket.prototype);

    /**
     * Protocol version.
     *
     * @api public
     */

    Socket.protocol = parser.protocol; // this is an int

    /**
     * Expose deps for legacy compatibility
     * and standalone browser access.
     */

    Socket.Socket = Socket;
    Socket.Transport = _dereq_('./transport');
    Socket.transports = _dereq_('./transports');
    Socket.parser = _dereq_('engine.io-parser');

    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */

    Socket.prototype.createTransport = function (name) {
      debug('creating transport "%s"', name);
      var query = clone(this.query);

      // append engine.io protocol identifier
      query.EIO = parser.protocol;

      // transport name
      query.transport = name;

      // session id if we already have one
      if (this.id) query.sid = this.id;

      var transport = new transports[name]({
        agent: this.agent,
        hostname: this.hostname,
        port: this.port,
        secure: this.secure,
        path: this.path,
        query: query,
        forceJSONP: this.forceJSONP,
        jsonp: this.jsonp,
        forceBase64: this.forceBase64,
        enablesXDR: this.enablesXDR,
        timestampRequests: this.timestampRequests,
        timestampParam: this.timestampParam,
        policyPort: this.policyPort,
        socket: this,
        pfx: this.pfx,
        key: this.key,
        passphrase: this.passphrase,
        cert: this.cert,
        ca: this.ca,
        ciphers: this.ciphers,
        rejectUnauthorized: this.rejectUnauthorized
      });

      return transport;
    };

    function clone (obj) {
      var o = {};
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          o[i] = obj[i];
        }
      }
      return o;
    }

    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */
    Socket.prototype.open = function () {
      var transport;
      if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
        transport = 'websocket';
      } else if (0 == this.transports.length) {
        // Emit error on next tick so it can be listened to
        var self = this;
        setTimeout(function() {
          self.emit('error', 'No transports available');
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = 'opening';

      // Retry with the next transport if the transport is disabled (jsonp: false)
      var transport;
      try {
        transport = this.createTransport(transport);
      } catch (e) {
        this.transports.shift();
        this.open();
        return;
      }

      transport.open();
      this.setTransport(transport);
    };

    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */

    Socket.prototype.setTransport = function(transport){
      debug('setting transport %s', transport.name);
      var self = this;

      if (this.transport) {
        debug('clearing existing transport %s', this.transport.name);
        this.transport.removeAllListeners();
      }

      // set up transport
      this.transport = transport;

      // set up transport listeners
      transport
          .on('drain', function(){
            self.onDrain();
          })
          .on('packet', function(packet){
            self.onPacket(packet);
          })
          .on('error', function(e){
            self.onError(e);
          })
          .on('close', function(){
            self.onClose('transport close');
          });
    };

    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */

    Socket.prototype.probe = function (name) {
      debug('probing transport "%s"', name);
      var transport = this.createTransport(name, { probe: 1 })
          , failed = false
          , self = this;

      Socket.priorWebsocketSuccess = false;

      function onTransportOpen(){
        if (self.onlyBinaryUpgrades) {
          var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
          failed = failed || upgradeLosesBinary;
        }
        if (failed) return;

        debug('probe transport "%s" opened', name);
        transport.send([{ type: 'ping', data: 'probe' }]);
        transport.once('packet', function (msg) {
          if (failed) return;
          if ('pong' == msg.type && 'probe' == msg.data) {
            debug('probe transport "%s" pong', name);
            self.upgrading = true;
            self.emit('upgrading', transport);
            if (!transport) return;
            Socket.priorWebsocketSuccess = 'websocket' == transport.name;

            debug('pausing current transport "%s"', self.transport.name);
            self.transport.pause(function () {
              if (failed) return;
              if ('closed' == self.readyState) return;
              debug('changing transport and sending upgrade packet');

              cleanup();

              self.setTransport(transport);
              transport.send([{ type: 'upgrade' }]);
              self.emit('upgrade', transport);
              transport = null;
              self.upgrading = false;
              self.flush();
            });
          } else {
            debug('probe transport "%s" failed', name);
            var err = new Error('probe error');
            err.transport = transport.name;
            self.emit('upgradeError', err);
          }
        });
      }

      function freezeTransport() {
        if (failed) return;

        // Any callback called by transport should be ignored since now
        failed = true;

        cleanup();

        transport.close();
        transport = null;
      }

      //Handle any error that happens while probing
      function onerror(err) {
        var error = new Error('probe error: ' + err);
        error.transport = transport.name;

        freezeTransport();

        debug('probe transport "%s" failed because of error: %s', name, err);

        self.emit('upgradeError', error);
      }

      function onTransportClose(){
        onerror("transport closed");
      }

      //When the socket is closed while we're probing
      function onclose(){
        onerror("socket closed");
      }

      //When the socket is upgraded while we're probing
      function onupgrade(to){
        if (transport && to.name != transport.name) {
          debug('"%s" works - aborting "%s"', to.name, transport.name);
          freezeTransport();
        }
      }

      //Remove all listeners on the transport and on self
      function cleanup(){
        transport.removeListener('open', onTransportOpen);
        transport.removeListener('error', onerror);
        transport.removeListener('close', onTransportClose);
        self.removeListener('close', onclose);
        self.removeListener('upgrading', onupgrade);
      }

      transport.once('open', onTransportOpen);
      transport.once('error', onerror);
      transport.once('close', onTransportClose);

      this.once('close', onclose);
      this.once('upgrading', onupgrade);

      transport.open();

    };

    /**
     * Called when connection is deemed open.
     *
     * @api public
     */

    Socket.prototype.onOpen = function () {
      debug('socket open');
      this.readyState = 'open';
      Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
      this.emit('open');
      this.flush();

      // we check for `readyState` in case an `open`
      // listener already closed the socket
      if ('open' == this.readyState && this.upgrade && this.transport.pause) {
        debug('starting upgrade probes');
        for (var i = 0, l = this.upgrades.length; i < l; i++) {
          this.probe(this.upgrades[i]);
        }
      }
    };

    /**
     * Handles a packet.
     *
     * @api private
     */

    Socket.prototype.onPacket = function (packet) {
      if ('opening' == this.readyState || 'open' == this.readyState) {
        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

        this.emit('packet', packet);

        // Socket is live - any packet counts
        this.emit('heartbeat');

        switch (packet.type) {
          case 'open':
            this.onHandshake(parsejson(packet.data));
            break;

          case 'pong':
            this.setPing();
            break;

          case 'error':
            var err = new Error('server error');
            err.code = packet.data;
            this.emit('error', err);
            break;

          case 'message':
            this.emit('data', packet.data);
            this.emit('message', packet.data);
            break;
        }
      } else {
        debug('packet received with socket readyState "%s"', this.readyState);
      }
    };

    /**
     * Called upon handshake completion.
     *
     * @param {Object} handshake obj
     * @api private
     */

    Socket.prototype.onHandshake = function (data) {
      this.emit('handshake', data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.onOpen();
      // In case open handler closes socket
      if  ('closed' == this.readyState) return;
      this.setPing();

      // Prolong liveness of socket on heartbeat
      this.removeListener('heartbeat', this.onHeartbeat);
      this.on('heartbeat', this.onHeartbeat);
    };

    /**
     * Resets ping timeout.
     *
     * @api private
     */

    Socket.prototype.onHeartbeat = function (timeout) {
      clearTimeout(this.pingTimeoutTimer);
      var self = this;
      self.pingTimeoutTimer = setTimeout(function () {
        if ('closed' == self.readyState) return;
        self.onClose('ping timeout');
      }, timeout || (self.pingInterval + self.pingTimeout));
    };

    /**
     * Pings server every `this.pingInterval` and expects response
     * within `this.pingTimeout` or closes connection.
     *
     * @api private
     */

    Socket.prototype.setPing = function () {
      var self = this;
      clearTimeout(self.pingIntervalTimer);
      self.pingIntervalTimer = setTimeout(function () {
        debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
        self.ping();
        self.onHeartbeat(self.pingTimeout);
      }, self.pingInterval);
    };

    /**
     * Sends a ping packet.
     *
     * @api public
     */

    Socket.prototype.ping = function () {
      this.sendPacket('ping');
    };

    /**
     * Called on `drain` event
     *
     * @api private
     */

    Socket.prototype.onDrain = function() {
      for (var i = 0; i < this.prevBufferLen; i++) {
        if (this.callbackBuffer[i]) {
          this.callbackBuffer[i]();
        }
      }

      this.writeBuffer.splice(0, this.prevBufferLen);
      this.callbackBuffer.splice(0, this.prevBufferLen);

      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this.prevBufferLen = 0;

      if (this.writeBuffer.length == 0) {
        this.emit('drain');
      } else {
        this.flush();
      }
    };

    /**
     * Flush write buffers.
     *
     * @api private
     */

    Socket.prototype.flush = function () {
      if ('closed' != this.readyState && this.transport.writable &&
          !this.upgrading && this.writeBuffer.length) {
        debug('flushing %d packets in socket', this.writeBuffer.length);
        this.transport.send(this.writeBuffer);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this.prevBufferLen = this.writeBuffer.length;
        this.emit('flush');
      }
    };

    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     * @api public
     */

    Socket.prototype.write =
        Socket.prototype.send = function (msg, fn) {
          this.sendPacket('message', msg, fn);
          return this;
        };

    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Function} callback function.
     * @api private
     */

    Socket.prototype.sendPacket = function (type, data, fn) {
      if ('closing' == this.readyState || 'closed' == this.readyState) {
        return;
      }

      var packet = { type: type, data: data };
      this.emit('packetCreate', packet);
      this.writeBuffer.push(packet);
      this.callbackBuffer.push(fn);
      this.flush();
    };

    /**
     * Closes the connection.
     *
     * @api private
     */

    Socket.prototype.close = function () {
      if ('opening' == this.readyState || 'open' == this.readyState) {
        this.readyState = 'closing';

        var self = this;

        function close() {
          self.onClose('forced close');
          debug('socket closing - telling transport to close');
          self.transport.close();
        }

        function cleanupAndClose() {
          self.removeListener('upgrade', cleanupAndClose);
          self.removeListener('upgradeError', cleanupAndClose);
          close();
        }

        function waitForUpgrade() {
          // wait for upgrade to finish since we can't send packets while pausing a transport
          self.once('upgrade', cleanupAndClose);
          self.once('upgradeError', cleanupAndClose);
        }

        if (this.writeBuffer.length) {
          this.once('drain', function() {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }

      return this;
    };

    /**
     * Called upon transport error
     *
     * @api private
     */

    Socket.prototype.onError = function (err) {
      debug('socket error %j', err);
      Socket.priorWebsocketSuccess = false;
      this.emit('error', err);
      this.onClose('transport error', err);
    };

    /**
     * Called upon transport close.
     *
     * @api private
     */

    Socket.prototype.onClose = function (reason, desc) {
      if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
        debug('socket close with reason: "%s"', reason);
        var self = this;

        // clear timers
        clearTimeout(this.pingIntervalTimer);
        clearTimeout(this.pingTimeoutTimer);

        // clean buffers in next tick, so developers can still
        // grab the buffers on `close` event
        setTimeout(function() {
          self.writeBuffer = [];
          self.callbackBuffer = [];
          self.prevBufferLen = 0;
        }, 0);

        // stop event from firing again for transport
        this.transport.removeAllListeners('close');

        // ensure transport won't stay open
        this.transport.close();

        // ignore further transport communication
        this.transport.removeAllListeners();

        // set ready state
        this.readyState = 'closed';

        // clear session id
        this.id = null;

        // emit close event
        this.emit('close', reason, desc);
      }
    };

    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */

    Socket.prototype.filterUpgrades = function (upgrades) {
      var filteredUpgrades = [];
      for (var i = 0, j = upgrades.length; i<j; i++) {
        if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    };

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./transport":14,"./transports":15,"component-emitter":9,"debug":22,"engine.io-parser":25,"indexof":42,"parsejson":34,"parseqs":35,"parseuri":36}],14:[function(_dereq_,module,exports){
  /**
   * Module dependencies.
   */

  var parser = _dereq_('engine.io-parser');
  var Emitter = _dereq_('component-emitter');

  /**
   * Module exports.
   */

  module.exports = Transport;

  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */

  function Transport (opts) {
    this.path = opts.path;
    this.hostname = opts.hostname;
    this.port = opts.port;
    this.secure = opts.secure;
    this.query = opts.query;
    this.timestampParam = opts.timestampParam;
    this.timestampRequests = opts.timestampRequests;
    this.readyState = '';
    this.agent = opts.agent || false;
    this.socket = opts.socket;
    this.enablesXDR = opts.enablesXDR;

    // SSL options for Node.js client
    this.pfx = opts.pfx;
    this.key = opts.key;
    this.passphrase = opts.passphrase;
    this.cert = opts.cert;
    this.ca = opts.ca;
    this.ciphers = opts.ciphers;
    this.rejectUnauthorized = opts.rejectUnauthorized;
  }

  /**
   * Mix in `Emitter`.
   */

  Emitter(Transport.prototype);

  /**
   * A counter used to prevent collisions in the timestamps used
   * for cache busting.
   */

  Transport.timestamps = 0;

  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */

  Transport.prototype.onError = function (msg, desc) {
    var err = new Error(msg);
    err.type = 'TransportError';
    err.description = desc;
    this.emit('error', err);
    return this;
  };

  /**
   * Opens the transport.
   *
   * @api public
   */

  Transport.prototype.open = function () {
    if ('closed' == this.readyState || '' == this.readyState) {
      this.readyState = 'opening';
      this.doOpen();
    }

    return this;
  };

  /**
   * Closes the transport.
   *
   * @api private
   */

  Transport.prototype.close = function () {
    if ('opening' == this.readyState || 'open' == this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  };

  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */

  Transport.prototype.send = function(packets){
    if ('open' == this.readyState) {
      this.write(packets);
    } else {
      throw new Error('Transport not open');
    }
  };

  /**
   * Called upon open
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.readyState = 'open';
    this.writable = true;
    this.emit('open');
  };

  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */

  Transport.prototype.onData = function(data){
    var packet = parser.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  };

  /**
   * Called with a decoded packet.
   */

  Transport.prototype.onPacket = function (packet) {
    this.emit('packet', packet);
  };

  /**
   * Called upon close.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    this.readyState = 'closed';
    this.emit('close');
  };

},{"component-emitter":9,"engine.io-parser":25}],15:[function(_dereq_,module,exports){
  (function (global){
    /**
     * Module dependencies
     */

    var XMLHttpRequest = _dereq_('xmlhttprequest');
    var XHR = _dereq_('./polling-xhr');
    var JSONP = _dereq_('./polling-jsonp');
    var websocket = _dereq_('./websocket');

    /**
     * Export transports.
     */

    exports.polling = polling;
    exports.websocket = websocket;

    /**
     * Polling transport polymorphic constructor.
     * Decides on xhr vs jsonp based on feature detection.
     *
     * @api private
     */

    function polling(opts){
      var xhr;
      var xd = false;
      var xs = false;
      var jsonp = false !== opts.jsonp;

      if (global.location) {
        var isSSL = 'https:' == location.protocol;
        var port = location.port;

        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? 443 : 80;
        }

        xd = opts.hostname != location.hostname || port != opts.port;
        xs = opts.secure != isSSL;
      }

      opts.xdomain = xd;
      opts.xscheme = xs;
      xhr = new XMLHttpRequest(opts);

      if ('open' in xhr && !opts.forceJSONP) {
        return new XHR(opts);
      } else {
        if (!jsonp) throw new Error('JSONP disabled');
        return new JSONP(opts);
      }
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,"xmlhttprequest":20}],16:[function(_dereq_,module,exports){
  (function (global){

    /**
     * Module requirements.
     */

    var Polling = _dereq_('./polling');
    var inherit = _dereq_('component-inherit');

    /**
     * Module exports.
     */

    module.exports = JSONPPolling;

    /**
     * Cached regular expressions.
     */

    var rNewline = /\n/g;
    var rEscapedNewline = /\\n/g;

    /**
     * Global JSONP callbacks.
     */

    var callbacks;

    /**
     * Callbacks count.
     */

    var index = 0;

    /**
     * Noop.
     */

    function empty () { }

    /**
     * JSONP Polling constructor.
     *
     * @param {Object} opts.
     * @api public
     */

    function JSONPPolling (opts) {
      Polling.call(this, opts);

      this.query = this.query || {};

      // define global callbacks array if not present
      // we do this here (lazily) to avoid unneeded global pollution
      if (!callbacks) {
        // we need to consider multiple engines in the same page
        if (!global.___eio) global.___eio = [];
        callbacks = global.___eio;
      }

      // callback identifier
      this.index = callbacks.length;

      // add callback to jsonp global
      var self = this;
      callbacks.push(function (msg) {
        self.onData(msg);
      });

      // append to query string
      this.query.j = this.index;

      // prevent spurious errors from being emitted when the window is unloaded
      if (global.document && global.addEventListener) {
        global.addEventListener('beforeunload', function () {
          if (self.script) self.script.onerror = empty;
        }, false);
      }
    }

    /**
     * Inherits from Polling.
     */

    inherit(JSONPPolling, Polling);

    /*
     * JSONP only supports binary as base64 encoded strings
     */

    JSONPPolling.prototype.supportsBinary = false;

    /**
     * Closes the socket.
     *
     * @api private
     */

    JSONPPolling.prototype.doClose = function () {
      if (this.script) {
        this.script.parentNode.removeChild(this.script);
        this.script = null;
      }

      if (this.form) {
        this.form.parentNode.removeChild(this.form);
        this.form = null;
        this.iframe = null;
      }

      Polling.prototype.doClose.call(this);
    };

    /**
     * Starts a poll cycle.
     *
     * @api private
     */

    JSONPPolling.prototype.doPoll = function () {
      var self = this;
      var script = document.createElement('script');

      if (this.script) {
        this.script.parentNode.removeChild(this.script);
        this.script = null;
      }

      script.async = true;
      script.src = this.uri();
      script.onerror = function(e){
        self.onError('jsonp poll error',e);
      };

      var insertAt = document.getElementsByTagName('script')[0];
      insertAt.parentNode.insertBefore(script, insertAt);
      this.script = script;

      var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

      if (isUAgecko) {
        setTimeout(function () {
          var iframe = document.createElement('iframe');
          document.body.appendChild(iframe);
          document.body.removeChild(iframe);
        }, 100);
      }
    };

    /**
     * Writes with a hidden iframe.
     *
     * @param {String} data to send
     * @param {Function} called upon flush.
     * @api private
     */

    JSONPPolling.prototype.doWrite = function (data, fn) {
      var self = this;

      if (!this.form) {
        var form = document.createElement('form');
        var area = document.createElement('textarea');
        var id = this.iframeId = 'eio_iframe_' + this.index;
        var iframe;

        form.className = 'socketio';
        form.style.position = 'absolute';
        form.style.top = '-1000px';
        form.style.left = '-1000px';
        form.target = id;
        form.method = 'POST';
        form.setAttribute('accept-charset', 'utf-8');
        area.name = 'd';
        form.appendChild(area);
        document.body.appendChild(form);

        this.form = form;
        this.area = area;
      }

      this.form.action = this.uri();

      function complete () {
        initIframe();
        fn();
      }

      function initIframe () {
        if (self.iframe) {
          try {
            self.form.removeChild(self.iframe);
          } catch (e) {
            self.onError('jsonp polling iframe removal error', e);
          }
        }

        try {
          // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
          var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
          iframe = document.createElement(html);
        } catch (e) {
          iframe = document.createElement('iframe');
          iframe.name = self.iframeId;
          iframe.src = 'javascript:0';
        }

        iframe.id = self.iframeId;

        self.form.appendChild(iframe);
        self.iframe = iframe;
      }

      initIframe();

      // escape \n to prevent it from being converted into \r\n by some UAs
      // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
      data = data.replace(rEscapedNewline, '\\\n');
      this.area.value = data.replace(rNewline, '\\n');

      try {
        this.form.submit();
      } catch(e) {}

      if (this.iframe.attachEvent) {
        this.iframe.onreadystatechange = function(){
          if (self.iframe.readyState == 'complete') {
            complete();
          }
        };
      } else {
        this.iframe.onload = complete;
      }
    };

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-inherit":21}],17:[function(_dereq_,module,exports){
  (function (global){
    /**
     * Module requirements.
     */

    var XMLHttpRequest = _dereq_('xmlhttprequest');
    var Polling = _dereq_('./polling');
    var Emitter = _dereq_('component-emitter');
    var inherit = _dereq_('component-inherit');
    var debug = _dereq_('debug')('engine.io-client:polling-xhr');

    /**
     * Module exports.
     */

    module.exports = XHR;
    module.exports.Request = Request;

    /**
     * Empty function
     */

    function empty(){}

    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */

    function XHR(opts){
      Polling.call(this, opts);

      if (global.location) {
        var isSSL = 'https:' == location.protocol;
        var port = location.port;

        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? 443 : 80;
        }

        this.xd = opts.hostname != global.location.hostname ||
        port != opts.port;
        this.xs = opts.secure != isSSL;
      }
    }

    /**
     * Inherits from Polling.
     */

    inherit(XHR, Polling);

    /**
     * XHR supports binary
     */

    XHR.prototype.supportsBinary = true;

    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */

    XHR.prototype.request = function(opts){
      opts = opts || {};
      opts.uri = this.uri();
      opts.xd = this.xd;
      opts.xs = this.xs;
      opts.agent = this.agent || false;
      opts.supportsBinary = this.supportsBinary;
      opts.enablesXDR = this.enablesXDR;

      // SSL options for Node.js client
      opts.pfx = this.pfx;
      opts.key = this.key;
      opts.passphrase = this.passphrase;
      opts.cert = this.cert;
      opts.ca = this.ca;
      opts.ciphers = this.ciphers;
      opts.rejectUnauthorized = this.rejectUnauthorized;

      return new Request(opts);
    };

    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */

    XHR.prototype.doWrite = function(data, fn){
      var isBinary = typeof data !== 'string' && data !== undefined;
      var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
      var self = this;
      req.on('success', fn);
      req.on('error', function(err){
        self.onError('xhr post error', err);
      });
      this.sendXhr = req;
    };

    /**
     * Starts a poll cycle.
     *
     * @api private
     */

    XHR.prototype.doPoll = function(){
      debug('xhr poll');
      var req = this.request();
      var self = this;
      req.on('data', function(data){
        self.onData(data);
      });
      req.on('error', function(err){
        self.onError('xhr poll error', err);
      });
      this.pollXhr = req;
    };

    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */

    function Request(opts){
      this.method = opts.method || 'GET';
      this.uri = opts.uri;
      this.xd = !!opts.xd;
      this.xs = !!opts.xs;
      this.async = false !== opts.async;
      this.data = undefined != opts.data ? opts.data : null;
      this.agent = opts.agent;
      this.isBinary = opts.isBinary;
      this.supportsBinary = opts.supportsBinary;
      this.enablesXDR = opts.enablesXDR;

      // SSL options for Node.js client
      this.pfx = opts.pfx;
      this.key = opts.key;
      this.passphrase = opts.passphrase;
      this.cert = opts.cert;
      this.ca = opts.ca;
      this.ciphers = opts.ciphers;
      this.rejectUnauthorized = opts.rejectUnauthorized;

      this.create();
    }

    /**
     * Mix in `Emitter`.
     */

    Emitter(Request.prototype);

    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */

    Request.prototype.create = function(){
      var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

      // SSL options for Node.js client
      opts.pfx = this.pfx;
      opts.key = this.key;
      opts.passphrase = this.passphrase;
      opts.cert = this.cert;
      opts.ca = this.ca;
      opts.ciphers = this.ciphers;
      opts.rejectUnauthorized = this.rejectUnauthorized;

      var xhr = this.xhr = new XMLHttpRequest(opts);
      var self = this;

      try {
        debug('xhr open %s: %s', this.method, this.uri);
        xhr.open(this.method, this.uri, this.async);
        if (this.supportsBinary) {
          // This has to be done after open because Firefox is stupid
          // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
          xhr.responseType = 'arraybuffer';
        }

        if ('POST' == this.method) {
          try {
            if (this.isBinary) {
              xhr.setRequestHeader('Content-type', 'application/octet-stream');
            } else {
              xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
            }
          } catch (e) {}
        }

        // ie6 check
        if ('withCredentials' in xhr) {
          xhr.withCredentials = true;
        }

        if (this.hasXDR()) {
          xhr.onload = function(){
            self.onLoad();
          };
          xhr.onerror = function(){
            self.onError(xhr.responseText);
          };
        } else {
          xhr.onreadystatechange = function(){
            if (4 != xhr.readyState) return;
            if (200 == xhr.status || 1223 == xhr.status) {
              self.onLoad();
            } else {
              // make sure the `error` event handler that's user-set
              // does not throw in the same tick and gets caught here
              setTimeout(function(){
                self.onError(xhr.status);
              }, 0);
            }
          };
        }

        debug('xhr data %s', this.data);
        xhr.send(this.data);
      } catch (e) {
        // Need to defer since .create() is called directly fhrom the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        setTimeout(function() {
          self.onError(e);
        }, 0);
        return;
      }

      if (global.document) {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    };

    /**
     * Called upon successful response.
     *
     * @api private
     */

    Request.prototype.onSuccess = function(){
      this.emit('success');
      this.cleanup();
    };

    /**
     * Called if we have data.
     *
     * @api private
     */

    Request.prototype.onData = function(data){
      this.emit('data', data);
      this.onSuccess();
    };

    /**
     * Called upon error.
     *
     * @api private
     */

    Request.prototype.onError = function(err){
      this.emit('error', err);
      this.cleanup(true);
    };

    /**
     * Cleans up house.
     *
     * @api private
     */

    Request.prototype.cleanup = function(fromError){
      if ('undefined' == typeof this.xhr || null === this.xhr) {
        return;
      }
      // xmlhttprequest
      if (this.hasXDR()) {
        this.xhr.onload = this.xhr.onerror = empty;
      } else {
        this.xhr.onreadystatechange = empty;
      }

      if (fromError) {
        try {
          this.xhr.abort();
        } catch(e) {}
      }

      if (global.document) {
        delete Request.requests[this.index];
      }

      this.xhr = null;
    };

    /**
     * Called upon load.
     *
     * @api private
     */

    Request.prototype.onLoad = function(){
      var data;
      try {
        var contentType;
        try {
          contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
        } catch (e) {}
        if (contentType === 'application/octet-stream') {
          data = this.xhr.response;
        } else {
          if (!this.supportsBinary) {
            data = this.xhr.responseText;
          } else {
            data = 'ok';
          }
        }
      } catch (e) {
        this.onError(e);
      }
      if (null != data) {
        this.onData(data);
      }
    };

    /**
     * Check if it has XDomainRequest.
     *
     * @api private
     */

    Request.prototype.hasXDR = function(){
      return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
    };

    /**
     * Aborts the request.
     *
     * @api public
     */

    Request.prototype.abort = function(){
      this.cleanup();
    };

    /**
     * Aborts pending requests when unloading the window. This is needed to prevent
     * memory leaks (e.g. when using IE) and to ensure that no spurious error is
     * emitted.
     */

    if (global.document) {
      Request.requestsCount = 0;
      Request.requests = {};
      if (global.attachEvent) {
        global.attachEvent('onunload', unloadHandler);
      } else if (global.addEventListener) {
        global.addEventListener('beforeunload', unloadHandler, false);
      }
    }

    function unloadHandler() {
      for (var i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
          Request.requests[i].abort();
        }
      }
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-emitter":9,"component-inherit":21,"debug":22,"xmlhttprequest":20}],18:[function(_dereq_,module,exports){
  /**
   * Module dependencies.
   */

  var Transport = _dereq_('../transport');
  var parseqs = _dereq_('parseqs');
  var parser = _dereq_('engine.io-parser');
  var inherit = _dereq_('component-inherit');
  var debug = _dereq_('debug')('engine.io-client:polling');

  /**
   * Module exports.
   */

  module.exports = Polling;

  /**
   * Is XHR2 supported?
   */

  var hasXHR2 = (function() {
    var XMLHttpRequest = _dereq_('xmlhttprequest');
    var xhr = new XMLHttpRequest({ xdomain: false });
    return null != xhr.responseType;
  })();

  /**
   * Polling interface.
   *
   * @param {Object} opts
   * @api private
   */

  function Polling(opts){
    var forceBase64 = (opts && opts.forceBase64);
    if (!hasXHR2 || forceBase64) {
      this.supportsBinary = false;
    }
    Transport.call(this, opts);
  }

  /**
   * Inherits from Transport.
   */

  inherit(Polling, Transport);

  /**
   * Transport name.
   */

  Polling.prototype.name = 'polling';

  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */

  Polling.prototype.doOpen = function(){
    this.poll();
  };

  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */

  Polling.prototype.pause = function(onPause){
    var pending = 0;
    var self = this;

    this.readyState = 'pausing';

    function pause(){
      debug('paused');
      self.readyState = 'paused';
      onPause();
    }

    if (this.polling || !this.writable) {
      var total = 0;

      if (this.polling) {
        debug('we are currently polling - waiting to pause');
        total++;
        this.once('pollComplete', function(){
          debug('pre-pause polling complete');
          --total || pause();
        });
      }

      if (!this.writable) {
        debug('we are currently writing - waiting to pause');
        total++;
        this.once('drain', function(){
          debug('pre-pause writing complete');
          --total || pause();
        });
      }
    } else {
      pause();
    }
  };

  /**
   * Starts polling cycle.
   *
   * @api public
   */

  Polling.prototype.poll = function(){
    debug('polling');
    this.polling = true;
    this.doPoll();
    this.emit('poll');
  };

  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */

  Polling.prototype.onData = function(data){
    var self = this;
    debug('polling got data %s', data);
    var callback = function(packet, index, total) {
      // if its the first message we consider the transport open
      if ('opening' == self.readyState) {
        self.onOpen();
      }

      // if its a close packet, we close the ongoing requests
      if ('close' == packet.type) {
        self.onClose();
        return false;
      }

      // otherwise bypass onData and handle the message
      self.onPacket(packet);
    };

    // decode payload
    parser.decodePayload(data, this.socket.binaryType, callback);

    // if an event did not trigger closing
    if ('closed' != this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emit('pollComplete');

      if ('open' == this.readyState) {
        this.poll();
      } else {
        debug('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  };

  /**
   * For polling, send a close packet.
   *
   * @api private
   */

  Polling.prototype.doClose = function(){
    var self = this;

    function close(){
      debug('writing close packet');
      self.write([{ type: 'close' }]);
    }

    if ('open' == this.readyState) {
      debug('transport open - closing');
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      debug('transport not open - deferring close');
      this.once('open', close);
    }
  };

  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */

  Polling.prototype.write = function(packets){
    var self = this;
    this.writable = false;
    var callbackfn = function() {
      self.writable = true;
      self.emit('drain');
    };

    var self = this;
    parser.encodePayload(packets, this.supportsBinary, function(data) {
      self.doWrite(data, callbackfn);
    });
  };

  /**
   * Generates uri for connection.
   *
   * @api private
   */

  Polling.prototype.uri = function(){
    var query = this.query || {};
    var schema = this.secure ? 'https' : 'http';
    var port = '';

    // cache busting is forced
    if (false !== this.timestampRequests) {
      query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // avoid port if default for schema
    if (this.port && (('https' == schema && this.port != 443) ||
        ('http' == schema && this.port != 80))) {
      port = ':' + this.port;
    }

    // prepend ? to query
    if (query.length) {
      query = '?' + query;
    }

    return schema + '://' + this.hostname + port + this.path + query;
  };

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"xmlhttprequest":20}],19:[function(_dereq_,module,exports){
  /**
   * Module dependencies.
   */

  var Transport = _dereq_('../transport');
  var parser = _dereq_('engine.io-parser');
  var parseqs = _dereq_('parseqs');
  var inherit = _dereq_('component-inherit');
  var debug = _dereq_('debug')('engine.io-client:websocket');

  /**
   * `ws` exposes a WebSocket-compatible interface in
   * Node, or the `WebSocket` or `MozWebSocket` globals
   * in the browser.
   */

  var WebSocket = _dereq_('ws');

  /**
   * Module exports.
   */

  module.exports = WS;

  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */

  function WS(opts){
    var forceBase64 = (opts && opts.forceBase64);
    if (forceBase64) {
      this.supportsBinary = false;
    }
    Transport.call(this, opts);
  }

  /**
   * Inherits from Transport.
   */

  inherit(WS, Transport);

  /**
   * Transport name.
   *
   * @api public
   */

  WS.prototype.name = 'websocket';

  /*
   * WebSockets support binary
   */

  WS.prototype.supportsBinary = true;

  /**
   * Opens socket.
   *
   * @api private
   */

  WS.prototype.doOpen = function(){
    if (!this.check()) {
      // let probe timeout
      return;
    }

    var self = this;
    var uri = this.uri();
    var protocols = void(0);
    var opts = { agent: this.agent };

    // SSL options for Node.js client
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;

    this.ws = new WebSocket(uri, protocols, opts);

    if (this.ws.binaryType === undefined) {
      this.supportsBinary = false;
    }

    this.ws.binaryType = 'arraybuffer';
    this.addEventListeners();
  };

  /**
   * Adds event listeners to the socket
   *
   * @api private
   */

  WS.prototype.addEventListeners = function(){
    var self = this;

    this.ws.onopen = function(){
      self.onOpen();
    };
    this.ws.onclose = function(){
      self.onClose();
    };
    this.ws.onmessage = function(ev){
      self.onData(ev.data);
    };
    this.ws.onerror = function(e){
      self.onError('websocket error', e);
    };
  };

  /**
   * Override `onData` to use a timer on iOS.
   * See: https://gist.github.com/mloughran/2052006
   *
   * @api private
   */

  if ('undefined' != typeof navigator
      && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    WS.prototype.onData = function(data){
      var self = this;
      setTimeout(function(){
        Transport.prototype.onData.call(self, data);
      }, 0);
    };
  }

  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */

  WS.prototype.write = function(packets){
    var self = this;
    this.writable = false;
    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    for (var i = 0, l = packets.length; i < l; i++) {
      parser.encodePacket(packets[i], this.supportsBinary, function(data) {
        //Sometimes the websocket has already been closed but the browser didn't
        //have a chance of informing us about it yet, in that case send will
        //throw an error
        try {
          self.ws.send(data);
        } catch (e){
          debug('websocket closed before onclose event');
        }
      });
    }

    function ondrain() {
      self.writable = true;
      self.emit('drain');
    }
    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(ondrain, 0);
  };

  /**
   * Called upon close
   *
   * @api private
   */

  WS.prototype.onClose = function(){
    Transport.prototype.onClose.call(this);
  };

  /**
   * Closes socket.
   *
   * @api private
   */

  WS.prototype.doClose = function(){
    if (typeof this.ws !== 'undefined') {
      this.ws.close();
    }
  };

  /**
   * Generates uri for connection.
   *
   * @api private
   */

  WS.prototype.uri = function(){
    var query = this.query || {};
    var schema = this.secure ? 'wss' : 'ws';
    var port = '';

    // avoid port if default for schema
    if (this.port && (('wss' == schema && this.port != 443)
        || ('ws' == schema && this.port != 80))) {
      port = ':' + this.port;
    }

    // append timestamp to URI
    if (this.timestampRequests) {
      query[this.timestampParam] = +new Date;
    }

    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // prepend ? to query
    if (query.length) {
      query = '?' + query;
    }

    return schema + '://' + this.hostname + port + this.path + query;
  };

  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */

  WS.prototype.check = function(){
    return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
  };

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"ws":37}],20:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
  var hasCORS = _dereq_('has-cors');

  module.exports = function(opts) {
    var xdomain = opts.xdomain;

    // scheme must be same when usign XDomainRequest
    // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
    var xscheme = opts.xscheme;

    // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
    // https://github.com/Automattic/engine.io-client/pull/217
    var enablesXDR = opts.enablesXDR;

    // XMLHttpRequest can be disabled on IE
    try {
      if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) { }

    // Use XDomainRequest for IE8 if enablesXDR is true
    // because loading bar keeps flashing when using jsonp-polling
    // https://github.com/yujiosaka/socke.io-ie8-loading-example
    try {
      if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
        return new XDomainRequest();
      }
    } catch (e) { }

    if (!xdomain) {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch(e) { }
    }
  }

},{"has-cors":40}],21:[function(_dereq_,module,exports){

  module.exports = function(a, b){
    var fn = function(){};
    fn.prototype = b.prototype;
    a.prototype = new fn;
    a.prototype.constructor = a;
  };
},{}],22:[function(_dereq_,module,exports){

  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = _dereq_('./debug');
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;

  /**
   * Colors.
   */

  exports.colors = [
    'lightseagreen',
    'forestgreen',
    'goldenrod',
    'dodgerblue',
    'darkorchid',
    'crimson'
  ];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // is webkit? http://stackoverflow.com/a/16459606/376773
    return ('WebkitAppearance' in document.documentElement.style) ||
          // is firebug? http://stackoverflow.com/a/398120/376773
        (window.console && (console.firebug || (console.exception && console.table))) ||
          // is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  exports.formatters.j = function(v) {
    return JSON.stringify(v);
  };


  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;

    args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

    if (!useColors) return args;

    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });

    args.splice(lastC, 0, c);
    return args;
  }

  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */

  function log() {
    // This hackery is required for IE8,
    // where the `console.log` function doesn't have 'apply'
    return 'object' == typeof console
        && 'function' == typeof console.log
        && Function.prototype.apply.call(console.log, console, arguments);
  }

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */

  function save(namespaces) {
    try {
      if (null == namespaces) {
        localStorage.removeItem('debug');
      } else {
        localStorage.debug = namespaces;
      }
    } catch(e) {}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */

  function load() {
    var r;
    try {
      r = localStorage.debug;
    } catch(e) {}
    return r;
  }

  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */

  exports.enable(load());

},{"./debug":23}],23:[function(_dereq_,module,exports){

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = _dereq_('ms');

  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];

  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lowercased letter, i.e. "n".
   */

  exports.formatters = {};

  /**
   * Previously assigned color.
   */

  var prevColor = 0;

  /**
   * Previous log timestamp.
   */

  var prevTime;

  /**
   * Select a color.
   *
   * @return {Number}
   * @api private
   */

  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }

  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */

  function debug(namespace) {

    // define the `disabled` version
    function disabled() {
    }
    disabled.enabled = false;

    // define the `enabled` version
    function enabled() {

      var self = enabled;

      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;

      // add the `color` if not set
      if (null == self.useColors) self.useColors = exports.useColors();
      if (null == self.color && self.useColors) self.color = selectColor();

      var args = Array.prototype.slice.call(arguments);

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %o
        args = ['%o'].concat(args);
      }

      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);

          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;

    var fn = exports.enabled(namespace) ? enabled : disabled;

    fn.namespace = namespace;

    return fn;
  }

  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */

  function enable(namespaces) {
    exports.save(namespaces);

    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;

    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
   * Disable debug output.
   *
   * @api public
   */

  function disable() {
    exports.enable('');
  }

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }

},{"ms":24}],24:[function(_dereq_,module,exports){
  /**
   * Helpers.
   */

  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} options
   * @return {String|Number}
   * @api public
   */

  module.exports = function(val, options){
    options = options || {};
    if ('string' == typeof val) return parse(val);
    return options.long
        ? long(val)
        : short(val);
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse(str) {
    var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 's':
        return n * s;
      case 'ms':
        return n;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function short(ms) {
    if (ms >= d) return Math.round(ms / d) + 'd';
    if (ms >= h) return Math.round(ms / h) + 'h';
    if (ms >= m) return Math.round(ms / m) + 'm';
    if (ms >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function long(ms) {
    return plural(ms, d, 'day')
        || plural(ms, h, 'hour')
        || plural(ms, m, 'minute')
        || plural(ms, s, 'second')
        || ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, n, name) {
    if (ms < n) return;
    if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }

},{}],25:[function(_dereq_,module,exports){
  (function (global){
    /**
     * Module dependencies.
     */

    var keys = _dereq_('./keys');
    var hasBinary = _dereq_('has-binary');
    var sliceBuffer = _dereq_('arraybuffer.slice');
    var base64encoder = _dereq_('base64-arraybuffer');
    var after = _dereq_('after');
    var utf8 = _dereq_('utf8');

    /**
     * Check if we are running an android browser. That requires us to use
     * ArrayBuffer with polling transports...
     *
     * http://ghinda.net/jpeg-blob-ajax-android/
     */

    var isAndroid = navigator.userAgent.match(/Android/i);

    /**
     * Check if we are running in PhantomJS.
     * Uploading a Blob with PhantomJS does not work correctly, as reported here:
     * https://github.com/ariya/phantomjs/issues/11395
     * @type boolean
     */
    var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

    /**
     * When true, avoids using Blobs to encode payloads.
     * @type boolean
     */
    var dontSendBlobs = isAndroid || isPhantomJS;

    /**
     * Current protocol version.
     */

    exports.protocol = 3;

    /**
     * Packet types.
     */

    var packets = exports.packets = {
      open:     0    // non-ws
      , close:    1    // non-ws
      , ping:     2
      , pong:     3
      , message:  4
      , upgrade:  5
      , noop:     6
    };

    var packetslist = keys(packets);

    /**
     * Premade error packet.
     */

    var err = { type: 'error', data: 'parser error' };

    /**
     * Create a blob api even for blob builder when vendor prefixes exist
     */

    var Blob = _dereq_('blob');

    /**
     * Encodes a packet.
     *
     *     <packet type id> [ <data> ]
     *
     * Example:
     *
     *     5hello world
     *     3
     *     4
     *
     * Binary is encoded in an identical principle
     *
     * @api private
     */

    exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
      if ('function' == typeof supportsBinary) {
        callback = supportsBinary;
        supportsBinary = false;
      }

      if ('function' == typeof utf8encode) {
        callback = utf8encode;
        utf8encode = null;
      }

      var data = (packet.data === undefined)
          ? undefined
          : packet.data.buffer || packet.data;

      if (global.ArrayBuffer && data instanceof ArrayBuffer) {
        return encodeArrayBuffer(packet, supportsBinary, callback);
      } else if (Blob && data instanceof global.Blob) {
        return encodeBlob(packet, supportsBinary, callback);
      }

      // might be an object with { base64: true, data: dataAsBase64String }
      if (data && data.base64) {
        return encodeBase64Object(packet, callback);
      }

      // Sending data as a utf-8 string
      var encoded = packets[packet.type];

      // data fragment is optional
      if (undefined !== packet.data) {
        encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
      }

      return callback('' + encoded);

    };

    function encodeBase64Object(packet, callback) {
      // packet data is an object { base64: true, data: dataAsBase64String }
      var message = 'b' + exports.packets[packet.type] + packet.data.data;
      return callback(message);
    }

    /**
     * Encode packet helpers for binary types
     */

    function encodeArrayBuffer(packet, supportsBinary, callback) {
      if (!supportsBinary) {
        return exports.encodeBase64Packet(packet, callback);
      }

      var data = packet.data;
      var contentArray = new Uint8Array(data);
      var resultBuffer = new Uint8Array(1 + data.byteLength);

      resultBuffer[0] = packets[packet.type];
      for (var i = 0; i < contentArray.length; i++) {
        resultBuffer[i+1] = contentArray[i];
      }

      return callback(resultBuffer.buffer);
    }

    function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
      if (!supportsBinary) {
        return exports.encodeBase64Packet(packet, callback);
      }

      var fr = new FileReader();
      fr.onload = function() {
        packet.data = fr.result;
        exports.encodePacket(packet, supportsBinary, true, callback);
      };
      return fr.readAsArrayBuffer(packet.data);
    }

    function encodeBlob(packet, supportsBinary, callback) {
      if (!supportsBinary) {
        return exports.encodeBase64Packet(packet, callback);
      }

      if (dontSendBlobs) {
        return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
      }

      var length = new Uint8Array(1);
      length[0] = packets[packet.type];
      var blob = new Blob([length.buffer, packet.data]);

      return callback(blob);
    }

    /**
     * Encodes a packet with binary data in a base64 string
     *
     * @param {Object} packet, has `type` and `data`
     * @return {String} base64 encoded message
     */

    exports.encodeBase64Packet = function(packet, callback) {
      var message = 'b' + exports.packets[packet.type];
      if (Blob && packet.data instanceof Blob) {
        var fr = new FileReader();
        fr.onload = function() {
          var b64 = fr.result.split(',')[1];
          callback(message + b64);
        };
        return fr.readAsDataURL(packet.data);
      }

      var b64data;
      try {
        b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
      } catch (e) {
        // iPhone Safari doesn't let you apply with typed arrays
        var typed = new Uint8Array(packet.data);
        var basic = new Array(typed.length);
        for (var i = 0; i < typed.length; i++) {
          basic[i] = typed[i];
        }
        b64data = String.fromCharCode.apply(null, basic);
      }
      message += global.btoa(b64data);
      return callback(message);
    };

    /**
     * Decodes a packet. Changes format to Blob if requested.
     *
     * @return {Object} with `type` and `data` (if any)
     * @api private
     */

    exports.decodePacket = function (data, binaryType, utf8decode) {
      // String data
      if (typeof data == 'string' || data === undefined) {
        if (data.charAt(0) == 'b') {
          return exports.decodeBase64Packet(data.substr(1), binaryType);
        }

        if (utf8decode) {
          try {
            data = utf8.decode(data);
          } catch (e) {
            return err;
          }
        }
        var type = data.charAt(0);

        if (Number(type) != type || !packetslist[type]) {
          return err;
        }

        if (data.length > 1) {
          return { type: packetslist[type], data: data.substring(1) };
        } else {
          return { type: packetslist[type] };
        }
      }

      var asArray = new Uint8Array(data);
      var type = asArray[0];
      var rest = sliceBuffer(data, 1);
      if (Blob && binaryType === 'blob') {
        rest = new Blob([rest]);
      }
      return { type: packetslist[type], data: rest };
    };

    /**
     * Decodes a packet encoded in a base64 string
     *
     * @param {String} base64 encoded message
     * @return {Object} with `type` and `data` (if any)
     */

    exports.decodeBase64Packet = function(msg, binaryType) {
      var type = packetslist[msg.charAt(0)];
      if (!global.ArrayBuffer) {
        return { type: type, data: { base64: true, data: msg.substr(1) } };
      }

      var data = base64encoder.decode(msg.substr(1));

      if (binaryType === 'blob' && Blob) {
        data = new Blob([data]);
      }

      return { type: type, data: data };
    };

    /**
     * Encodes multiple messages (payload).
     *
     *     <length>:data
     *
     * Example:
     *
     *     11:hello world2:hi
     *
     * If any contents are binary, they will be encoded as base64 strings. Base64
     * encoded strings are marked with a b before the length specifier
     *
     * @param {Array} packets
     * @api private
     */

    exports.encodePayload = function (packets, supportsBinary, callback) {
      if (typeof supportsBinary == 'function') {
        callback = supportsBinary;
        supportsBinary = null;
      }

      var isBinary = hasBinary(packets);

      if (supportsBinary && isBinary) {
        if (Blob && !dontSendBlobs) {
          return exports.encodePayloadAsBlob(packets, callback);
        }

        return exports.encodePayloadAsArrayBuffer(packets, callback);
      }

      if (!packets.length) {
        return callback('0:');
      }

      function setLengthHeader(message) {
        return message.length + ':' + message;
      }

      function encodeOne(packet, doneCallback) {
        exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
          doneCallback(null, setLengthHeader(message));
        });
      }

      map(packets, encodeOne, function(err, results) {
        return callback(results.join(''));
      });
    };

    /**
     * Async array map using after
     */

    function map(ary, each, done) {
      var result = new Array(ary.length);
      var next = after(ary.length, done);

      var eachWithIndex = function(i, el, cb) {
        each(el, function(error, msg) {
          result[i] = msg;
          cb(error, result);
        });
      };

      for (var i = 0; i < ary.length; i++) {
        eachWithIndex(i, ary[i], next);
      }
    }

    /*
     * Decodes data when a payload is maybe expected. Possible binary contents are
     * decoded from their base64 representation
     *
     * @param {String} data, callback method
     * @api public
     */

    exports.decodePayload = function (data, binaryType, callback) {
      if (typeof data != 'string') {
        return exports.decodePayloadAsBinary(data, binaryType, callback);
      }

      if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
      }

      var packet;
      if (data == '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      var length = ''
          , n, msg;

      for (var i = 0, l = data.length; i < l; i++) {
        var chr = data.charAt(i);

        if (':' != chr) {
          length += chr;
        } else {
          if ('' == length || (length != (n = Number(length)))) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
          }

          msg = data.substr(i + 1, n);

          if (length != msg.length) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
          }

          if (msg.length) {
            packet = exports.decodePacket(msg, binaryType, true);

            if (err.type == packet.type && err.data == packet.data) {
              // parser error in individual packet - ignoring payload
              return callback(err, 0, 1);
            }

            var ret = callback(packet, i + n, l);
            if (false === ret) return;
          }

          // advance cursor
          i += n;
          length = '';
        }
      }

      if (length != '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

    };

    /**
     * Encodes multiple messages (payload) as binary.
     *
     * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
     * 255><data>
     *
     * Example:
     * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
     *
     * @param {Array} packets
     * @return {ArrayBuffer} encoded payload
     * @api private
     */

    exports.encodePayloadAsArrayBuffer = function(packets, callback) {
      if (!packets.length) {
        return callback(new ArrayBuffer(0));
      }

      function encodeOne(packet, doneCallback) {
        exports.encodePacket(packet, true, true, function(data) {
          return doneCallback(null, data);
        });
      }

      map(packets, encodeOne, function(err, encodedPackets) {
        var totalLength = encodedPackets.reduce(function(acc, p) {
          var len;
          if (typeof p === 'string'){
            len = p.length;
          } else {
            len = p.byteLength;
          }
          return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
        }, 0);

        var resultArray = new Uint8Array(totalLength);

        var bufferIndex = 0;
        encodedPackets.forEach(function(p) {
          var isString = typeof p === 'string';
          var ab = p;
          if (isString) {
            var view = new Uint8Array(p.length);
            for (var i = 0; i < p.length; i++) {
              view[i] = p.charCodeAt(i);
            }
            ab = view.buffer;
          }

          if (isString) { // not true binary
            resultArray[bufferIndex++] = 0;
          } else { // true binary
            resultArray[bufferIndex++] = 1;
          }

          var lenStr = ab.byteLength.toString();
          for (var i = 0; i < lenStr.length; i++) {
            resultArray[bufferIndex++] = parseInt(lenStr[i]);
          }
          resultArray[bufferIndex++] = 255;

          var view = new Uint8Array(ab);
          for (var i = 0; i < view.length; i++) {
            resultArray[bufferIndex++] = view[i];
          }
        });

        return callback(resultArray.buffer);
      });
    };

    /**
     * Encode as Blob
     */

    exports.encodePayloadAsBlob = function(packets, callback) {
      function encodeOne(packet, doneCallback) {
        exports.encodePacket(packet, true, true, function(encoded) {
          var binaryIdentifier = new Uint8Array(1);
          binaryIdentifier[0] = 1;
          if (typeof encoded === 'string') {
            var view = new Uint8Array(encoded.length);
            for (var i = 0; i < encoded.length; i++) {
              view[i] = encoded.charCodeAt(i);
            }
            encoded = view.buffer;
            binaryIdentifier[0] = 0;
          }

          var len = (encoded instanceof ArrayBuffer)
              ? encoded.byteLength
              : encoded.size;

          var lenStr = len.toString();
          var lengthAry = new Uint8Array(lenStr.length + 1);
          for (var i = 0; i < lenStr.length; i++) {
            lengthAry[i] = parseInt(lenStr[i]);
          }
          lengthAry[lenStr.length] = 255;

          if (Blob) {
            var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
            doneCallback(null, blob);
          }
        });
      }

      map(packets, encodeOne, function(err, results) {
        return callback(new Blob(results));
      });
    };

    /*
     * Decodes data when a payload is maybe expected. Strings are decoded by
     * interpreting each byte as a key code for entries marked to start with 0. See
     * description of encodePayloadAsBinary
     *
     * @param {ArrayBuffer} data, callback method
     * @api public
     */

    exports.decodePayloadAsBinary = function (data, binaryType, callback) {
      if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
      }

      var bufferTail = data;
      var buffers = [];

      var numberTooLong = false;
      while (bufferTail.byteLength > 0) {
        var tailArray = new Uint8Array(bufferTail);
        var isString = tailArray[0] === 0;
        var msgLength = '';

        for (var i = 1; ; i++) {
          if (tailArray[i] == 255) break;

          if (msgLength.length > 310) {
            numberTooLong = true;
            break;
          }

          msgLength += tailArray[i];
        }

        if(numberTooLong) return callback(err, 0, 1);

        bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
        msgLength = parseInt(msgLength);

        var msg = sliceBuffer(bufferTail, 0, msgLength);
        if (isString) {
          try {
            msg = String.fromCharCode.apply(null, new Uint8Array(msg));
          } catch (e) {
            // iPhone Safari doesn't let you apply to typed arrays
            var typed = new Uint8Array(msg);
            msg = '';
            for (var i = 0; i < typed.length; i++) {
              msg += String.fromCharCode(typed[i]);
            }
          }
        }

        buffers.push(msg);
        bufferTail = sliceBuffer(bufferTail, msgLength);
      }

      var total = buffers.length;
      buffers.forEach(function(buffer, i) {
        callback(exports.decodePacket(buffer, binaryType, true), i, total);
      });
    };

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":26,"after":27,"arraybuffer.slice":28,"base64-arraybuffer":29,"blob":30,"has-binary":31,"utf8":33}],26:[function(_dereq_,module,exports){

  /**
   * Gets the keys for an object.
   *
   * @return {Array} keys
   * @api private
   */

  module.exports = Object.keys || function keys (obj){
    var arr = [];
    var has = Object.prototype.hasOwnProperty;

    for (var i in obj) {
      if (has.call(obj, i)) {
        arr.push(i);
      }
    }
    return arr;
  };

},{}],27:[function(_dereq_,module,exports){
  module.exports = after

  function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
      if (proxy.count <= 0) {
        throw new Error('after called too many times')
      }
      --proxy.count

      // after first error, rest are passed to err_cb
      if (err) {
        bail = true
        callback(err)
        // future error callbacks will go to error handler
        callback = err_cb
      } else if (proxy.count === 0 && !bail) {
        callback(null, result)
      }
    }
  }

  function noop() {}

},{}],28:[function(_dereq_,module,exports){
  /**
   * An abstraction for slicing an arraybuffer even when
   * ArrayBuffer.prototype.slice is not supported
   *
   * @api public
   */

  module.exports = function(arraybuffer, start, end) {
    var bytes = arraybuffer.byteLength;
    start = start || 0;
    end = end || bytes;

    if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

    if (start < 0) { start += bytes; }
    if (end < 0) { end += bytes; }
    if (end > bytes) { end = bytes; }

    if (start >= bytes || start >= end || bytes === 0) {
      return new ArrayBuffer(0);
    }

    var abv = new Uint8Array(arraybuffer);
    var result = new Uint8Array(end - start);
    for (var i = start, ii = 0; i < end; i++, ii++) {
      result[ii] = abv[i];
    }
    return result.buffer;
  };

},{}],29:[function(_dereq_,module,exports){
  /*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
  (function(chars){
    "use strict";

    exports.encode = function(arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
          i, len = bytes.length, base64 = "";

      for (i = 0; i < len; i+=3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
      }

      if ((len % 3) === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }

      return base64;
    };

    exports.decode =  function(base64) {
      var bufferLength = base64.length * 0.75,
          len = base64.length, i, p = 0,
          encoded1, encoded2, encoded3, encoded4;

      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }

      var arraybuffer = new ArrayBuffer(bufferLength),
          bytes = new Uint8Array(arraybuffer);

      for (i = 0; i < len; i+=4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i+1]);
        encoded3 = chars.indexOf(base64[i+2]);
        encoded4 = chars.indexOf(base64[i+3]);

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
      }

      return arraybuffer;
    };
  })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],30:[function(_dereq_,module,exports){
  (function (global){
    /**
     * Create a blob builder even when vendor prefixes exist
     */

    var BlobBuilder = global.BlobBuilder
        || global.WebKitBlobBuilder
        || global.MSBlobBuilder
        || global.MozBlobBuilder;

    /**
     * Check if Blob constructor is supported
     */

    var blobSupported = (function() {
      try {
        var b = new Blob(['hi']);
        return b.size == 2;
      } catch(e) {
        return false;
      }
    })();

    /**
     * Check if BlobBuilder is supported
     */

    var blobBuilderSupported = BlobBuilder
        && BlobBuilder.prototype.append
        && BlobBuilder.prototype.getBlob;

    function BlobBuilderConstructor(ary, options) {
      options = options || {};

      var bb = new BlobBuilder();
      for (var i = 0; i < ary.length; i++) {
        bb.append(ary[i]);
      }
      return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
    };

    module.exports = (function() {
      if (blobSupported) {
        return global.Blob;
      } else if (blobBuilderSupported) {
        return BlobBuilderConstructor;
      } else {
        return undefined;
      }
    })();

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(_dereq_,module,exports){
  (function (global){

    /*
     * Module requirements.
     */

    var isArray = _dereq_('isarray');

    /**
     * Module exports.
     */

    module.exports = hasBinary;

    /**
     * Checks for binary data.
     *
     * Right now only Buffer and ArrayBuffer are supported..
     *
     * @param {Object} anything
     * @api public
     */

    function hasBinary(data) {

      function _hasBinary(obj) {
        if (!obj) return false;

        if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
            (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
            (global.Blob && obj instanceof Blob) ||
            (global.File && obj instanceof File)
        ) {
          return true;
        }

        if (isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            if (_hasBinary(obj[i])) {
              return true;
            }
          }
        } else if (obj && 'object' == typeof obj) {
          if (obj.toJSON) {
            obj = obj.toJSON();
          }

          for (var key in obj) {
            if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
              return true;
            }
          }
        }

        return false;
      }

      return _hasBinary(data);
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":32}],32:[function(_dereq_,module,exports){
  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

},{}],33:[function(_dereq_,module,exports){
  (function (global){
    /*! http://mths.be/utf8js v2.0.0 by @mathias */
    ;(function(root) {

      // Detect free variables `exports`
      var freeExports = typeof exports == 'object' && exports;

      // Detect free variable `module`
      var freeModule = typeof module == 'object' && module &&
          module.exports == freeExports && module;

      // Detect free variable `global`, from Node.js or Browserified code,
      // and use it as `root`
      var freeGlobal = typeof global == 'object' && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }

      /*--------------------------------------------------------------------------*/

      var stringFromCharCode = String.fromCharCode;

      // Taken from http://mths.be/punycode
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        var value;
        var extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // unmatched surrogate; only append this code unit, in case the next
              // code unit is the high surrogate of a surrogate pair
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }

      // Taken from http://mths.be/punycode
      function ucs2encode(array) {
        var length = array.length;
        var index = -1;
        var value;
        var output = '';
        while (++index < length) {
          value = array[index];
          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }
          output += stringFromCharCode(value);
        }
        return output;
      }

      /*--------------------------------------------------------------------------*/

      function createByte(codePoint, shift) {
        return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
      }

      function encodeCodePoint(codePoint) {
        if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
          return stringFromCharCode(codePoint);
        }
        var symbol = '';
        if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
          symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
        }
        else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
          symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
          symbol += createByte(codePoint, 6);
        }
        else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
          symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
          symbol += createByte(codePoint, 12);
          symbol += createByte(codePoint, 6);
        }
        symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
        return symbol;
      }

      function utf8encode(string) {
        var codePoints = ucs2decode(string);

        // console.log(JSON.stringify(codePoints.map(function(x) {
        // 	return 'U+' + x.toString(16).toUpperCase();
        // })));

        var length = codePoints.length;
        var index = -1;
        var codePoint;
        var byteString = '';
        while (++index < length) {
          codePoint = codePoints[index];
          byteString += encodeCodePoint(codePoint);
        }
        return byteString;
      }

      /*--------------------------------------------------------------------------*/

      function readContinuationByte() {
        if (byteIndex >= byteCount) {
          throw Error('Invalid byte index');
        }

        var continuationByte = byteArray[byteIndex] & 0xFF;
        byteIndex++;

        if ((continuationByte & 0xC0) == 0x80) {
          return continuationByte & 0x3F;
        }

        // If we end up here, it’s not a continuation byte
        throw Error('Invalid continuation byte');
      }

      function decodeSymbol() {
        var byte1;
        var byte2;
        var byte3;
        var byte4;
        var codePoint;

        if (byteIndex > byteCount) {
          throw Error('Invalid byte index');
        }

        if (byteIndex == byteCount) {
          return false;
        }

        // Read first byte
        byte1 = byteArray[byteIndex] & 0xFF;
        byteIndex++;

        // 1-byte sequence (no continuation bytes)
        if ((byte1 & 0x80) == 0) {
          return byte1;
        }

        // 2-byte sequence
        if ((byte1 & 0xE0) == 0xC0) {
          var byte2 = readContinuationByte();
          codePoint = ((byte1 & 0x1F) << 6) | byte2;
          if (codePoint >= 0x80) {
            return codePoint;
          } else {
            throw Error('Invalid continuation byte');
          }
        }

        // 3-byte sequence (may include unpaired surrogates)
        if ((byte1 & 0xF0) == 0xE0) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
          if (codePoint >= 0x0800) {
            return codePoint;
          } else {
            throw Error('Invalid continuation byte');
          }
        }

        // 4-byte sequence
        if ((byte1 & 0xF8) == 0xF0) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          byte4 = readContinuationByte();
          codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
          (byte3 << 0x06) | byte4;
          if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
            return codePoint;
          }
        }

        throw Error('Invalid UTF-8 detected');
      }

      var byteArray;
      var byteCount;
      var byteIndex;
      function utf8decode(byteString) {
        byteArray = ucs2decode(byteString);
        byteCount = byteArray.length;
        byteIndex = 0;
        var codePoints = [];
        var tmp;
        while ((tmp = decodeSymbol()) !== false) {
          codePoints.push(tmp);
        }
        return ucs2encode(codePoints);
      }

      /*--------------------------------------------------------------------------*/

      var utf8 = {
        'version': '2.0.0',
        'encode': utf8encode,
        'decode': utf8decode
      };

      // Some AMD build optimizers, like r.js, check for specific condition patterns
      // like the following:
      if (
          typeof define == 'function' &&
          typeof define.amd == 'object' &&
          define.amd
      ) {
        define(function() {
          return utf8;
        });
      }	else if (freeExports && !freeExports.nodeType) {
        if (freeModule) { // in Node.js or RingoJS v0.8.0+
          freeModule.exports = utf8;
        } else { // in Narwhal or RingoJS v0.7.0-
          var object = {};
          var hasOwnProperty = object.hasOwnProperty;
          for (var key in utf8) {
            hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
          }
        }
      } else { // in Rhino or a web browser
        root.utf8 = utf8;
      }

    }(this));

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],34:[function(_dereq_,module,exports){
  (function (global){
    /**
     * JSON parse.
     *
     * @see Based on jQuery#parseJSON (MIT) and JSON2
     * @api private
     */

    var rvalidchars = /^[\],:{}\s]*$/;
    var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
    var rtrimLeft = /^\s+/;
    var rtrimRight = /\s+$/;

    module.exports = function parsejson(data) {
      if ('string' != typeof data || !data) {
        return null;
      }

      data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

      // Attempt to parse using the native JSON parser first
      if (global.JSON && JSON.parse) {
        return JSON.parse(data);
      }

      if (rvalidchars.test(data.replace(rvalidescape, '@')
              .replace(rvalidtokens, ']')
              .replace(rvalidbraces, ''))) {
        return (new Function('return ' + data))();
      }
    };
  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],35:[function(_dereq_,module,exports){
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */

  exports.encode = function (obj) {
    var str = '';

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }

    return str;
  };

  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */

  exports.decode = function(qs){
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  };

},{}],36:[function(_dereq_,module,exports){
  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
  ];

  module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }

    return uri;
  };

},{}],37:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var global = (function() { return this; })();

  /**
   * WebSocket constructor.
   */

  var WebSocket = global.WebSocket || global.MozWebSocket;

  /**
   * Module exports.
   */

  module.exports = WebSocket ? ws : null;

  /**
   * WebSocket constructor.
   *
   * The third `opts` options object gets ignored in web browsers, since it's
   * non-standard, and throws a TypeError if passed to the constructor.
   * See: https://github.com/einaros/ws/issues/227
   *
   * @param {String} uri
   * @param {Array} protocols (optional)
   * @param {Object) opts (optional)
 * @api public
   */

  function ws(uri, protocols, opts) {
    var instance;
    if (protocols) {
      instance = new WebSocket(uri, protocols);
    } else {
      instance = new WebSocket(uri);
    }
    return instance;
  }

  if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],38:[function(_dereq_,module,exports){
  (function (global){

    /*
     * Module requirements.
     */

    var isArray = _dereq_('isarray');

    /**
     * Module exports.
     */

    module.exports = hasBinary;

    /**
     * Checks for binary data.
     *
     * Right now only Buffer and ArrayBuffer are supported..
     *
     * @param {Object} anything
     * @api public
     */

    function hasBinary(data) {

      function _hasBinary(obj) {
        if (!obj) return false;

        if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
            (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
            (global.Blob && obj instanceof Blob) ||
            (global.File && obj instanceof File)
        ) {
          return true;
        }

        if (isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            if (_hasBinary(obj[i])) {
              return true;
            }
          }
        } else if (obj && 'object' == typeof obj) {
          if (obj.toJSON) {
            obj = obj.toJSON();
          }

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
              return true;
            }
          }
        }

        return false;
      }

      return _hasBinary(data);
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":39}],39:[function(_dereq_,module,exports){
  module.exports=_dereq_(32)
},{}],40:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var global = _dereq_('global');

  /**
   * Module exports.
   *
   * Logic borrowed from Modernizr:
   *
   *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
   */

  try {
    module.exports = 'XMLHttpRequest' in global &&
    'withCredentials' in new global.XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
  }

},{"global":41}],41:[function(_dereq_,module,exports){

  /**
   * Returns `this`. Execute this without a "context" (i.e. without it being
   * attached to an object of the left-hand side), and `this` points to the
   * "global" scope of the current JS execution.
   */

  module.exports = (function () { return this; })();

},{}],42:[function(_dereq_,module,exports){

  var indexOf = [].indexOf;

  module.exports = function(arr, obj){
    if (indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };
},{}],43:[function(_dereq_,module,exports){

  /**
   * HOP ref.
   */

  var has = Object.prototype.hasOwnProperty;

  /**
   * Return own keys in `obj`.
   *
   * @param {Object} obj
   * @return {Array}
   * @api public
   */

  exports.keys = Object.keys || function(obj){
    var keys = [];
    for (var key in obj) {
      if (has.call(obj, key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  /**
   * Return own values in `obj`.
   *
   * @param {Object} obj
   * @return {Array}
   * @api public
   */

  exports.values = function(obj){
    var vals = [];
    for (var key in obj) {
      if (has.call(obj, key)) {
        vals.push(obj[key]);
      }
    }
    return vals;
  };

  /**
   * Merge `b` into `a`.
   *
   * @param {Object} a
   * @param {Object} b
   * @return {Object} a
   * @api public
   */

  exports.merge = function(a, b){
    for (var key in b) {
      if (has.call(b, key)) {
        a[key] = b[key];
      }
    }
    return a;
  };

  /**
   * Return length of `obj`.
   *
   * @param {Object} obj
   * @return {Number}
   * @api public
   */

  exports.length = function(obj){
    return exports.keys(obj).length;
  };

  /**
   * Check if `obj` is empty.
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api public
   */

  exports.isEmpty = function(obj){
    return 0 == exports.length(obj);
  };
},{}],44:[function(_dereq_,module,exports){
  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
    , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
  ];

  module.exports = function parseuri(str) {
    var m = re.exec(str || '')
        , uri = {}
        , i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    return uri;
  };

},{}],45:[function(_dereq_,module,exports){
  (function (global){
    /*global Blob,File*/

    /**
     * Module requirements
     */

    var isArray = _dereq_('isarray');
    var isBuf = _dereq_('./is-buffer');

    /**
     * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
     * Anything with blobs or files should be fed through removeBlobs before coming
     * here.
     *
     * @param {Object} packet - socket.io event packet
     * @return {Object} with deconstructed packet and list of buffers
     * @api public
     */

    exports.deconstructPacket = function(packet){
      var buffers = [];
      var packetData = packet.data;

      function _deconstructPacket(data) {
        if (!data) return data;

        if (isBuf(data)) {
          var placeholder = { _placeholder: true, num: buffers.length };
          buffers.push(data);
          return placeholder;
        } else if (isArray(data)) {
          var newData = new Array(data.length);
          for (var i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i]);
          }
          return newData;
        } else if ('object' == typeof data && !(data instanceof Date)) {
          var newData = {};
          for (var key in data) {
            newData[key] = _deconstructPacket(data[key]);
          }
          return newData;
        }
        return data;
      }

      var pack = packet;
      pack.data = _deconstructPacket(packetData);
      pack.attachments = buffers.length; // number of binary 'attachments'
      return {packet: pack, buffers: buffers};
    };

    /**
     * Reconstructs a binary packet from its placeholder packet and buffers
     *
     * @param {Object} packet - event packet with placeholders
     * @param {Array} buffers - binary buffers to put in placeholder positions
     * @return {Object} reconstructed packet
     * @api public
     */

    exports.reconstructPacket = function(packet, buffers) {
      var curPlaceHolder = 0;

      function _reconstructPacket(data) {
        if (data && data._placeholder) {
          var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
          return buf;
        } else if (isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i]);
          }
          return data;
        } else if (data && 'object' == typeof data) {
          for (var key in data) {
            data[key] = _reconstructPacket(data[key]);
          }
          return data;
        }
        return data;
      }

      packet.data = _reconstructPacket(packet.data);
      packet.attachments = undefined; // no longer useful
      return packet;
    };

    /**
     * Asynchronously removes Blobs or Files from data via
     * FileReader's readAsArrayBuffer method. Used before encoding
     * data as msgpack. Calls callback with the blobless data.
     *
     * @param {Object} data
     * @param {Function} callback
     * @api private
     */

    exports.removeBlobs = function(data, callback) {
      function _removeBlobs(obj, curKey, containingObject) {
        if (!obj) return obj;

        // convert any blob
        if ((global.Blob && obj instanceof Blob) ||
            (global.File && obj instanceof File)) {
          pendingBlobs++;

          // async filereader
          var fileReader = new FileReader();
          fileReader.onload = function() { // this.result == arraybuffer
            if (containingObject) {
              containingObject[curKey] = this.result;
            }
            else {
              bloblessData = this.result;
            }

            // if nothing pending its callback time
            if(! --pendingBlobs) {
              callback(bloblessData);
            }
          };

          fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
        } else if (isArray(obj)) { // handle array
          for (var i = 0; i < obj.length; i++) {
            _removeBlobs(obj[i], i, obj);
          }
        } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
          for (var key in obj) {
            _removeBlobs(obj[key], key, obj);
          }
        }
      }

      var pendingBlobs = 0;
      var bloblessData = data;
      _removeBlobs(bloblessData);
      if (!pendingBlobs) {
        callback(bloblessData);
      }
    };

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./is-buffer":47,"isarray":48}],46:[function(_dereq_,module,exports){

  /**
   * Module dependencies.
   */

  var debug = _dereq_('debug')('socket.io-parser');
  var json = _dereq_('json3');
  var isArray = _dereq_('isarray');
  var Emitter = _dereq_('component-emitter');
  var binary = _dereq_('./binary');
  var isBuf = _dereq_('./is-buffer');

  /**
   * Protocol version.
   *
   * @api public
   */

  exports.protocol = 4;

  /**
   * Packet types.
   *
   * @api public
   */

  exports.types = [
    'CONNECT',
    'DISCONNECT',
    'EVENT',
    'BINARY_EVENT',
    'ACK',
    'BINARY_ACK',
    'ERROR'
  ];

  /**
   * Packet type `connect`.
   *
   * @api public
   */

  exports.CONNECT = 0;

  /**
   * Packet type `disconnect`.
   *
   * @api public
   */

  exports.DISCONNECT = 1;

  /**
   * Packet type `event`.
   *
   * @api public
   */

  exports.EVENT = 2;

  /**
   * Packet type `ack`.
   *
   * @api public
   */

  exports.ACK = 3;

  /**
   * Packet type `error`.
   *
   * @api public
   */

  exports.ERROR = 4;

  /**
   * Packet type 'binary event'
   *
   * @api public
   */

  exports.BINARY_EVENT = 5;

  /**
   * Packet type `binary ack`. For acks with binary arguments.
   *
   * @api public
   */

  exports.BINARY_ACK = 6;

  /**
   * Encoder constructor.
   *
   * @api public
   */

  exports.Encoder = Encoder;

  /**
   * Decoder constructor.
   *
   * @api public
   */

  exports.Decoder = Decoder;

  /**
   * A socket.io Encoder instance
   *
   * @api public
   */

  function Encoder() {}

  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   * @param {Function} callback - function to handle encodings (likely engine.write)
   * @return Calls callback with Array of encodings
   * @api public
   */

  Encoder.prototype.encode = function(obj, callback){
    debug('encoding packet %j', obj);

    if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
      encodeAsBinary(obj, callback);
    }
    else {
      var encoding = encodeAsString(obj);
      callback([encoding]);
    }
  };

  /**
   * Encode packet as string.
   *
   * @param {Object} packet
   * @return {String} encoded
   * @api private
   */

  function encodeAsString(obj) {
    var str = '';
    var nsp = false;

    // first is type
    str += obj.type;

    // attachments if we have them
    if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
      str += obj.attachments;
      str += '-';
    }

    // if we have a namespace other than `/`
    // we append it followed by a comma `,`
    if (obj.nsp && '/' != obj.nsp) {
      nsp = true;
      str += obj.nsp;
    }

    // immediately followed by the id
    if (null != obj.id) {
      if (nsp) {
        str += ',';
        nsp = false;
      }
      str += obj.id;
    }

    // json data
    if (null != obj.data) {
      if (nsp) str += ',';
      str += json.stringify(obj.data);
    }

    debug('encoded %j as %s', obj, str);
    return str;
  }

  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   *
   * @param {Object} packet
   * @return {Buffer} encoded
   * @api private
   */

  function encodeAsBinary(obj, callback) {

    function writeEncoding(bloblessData) {
      var deconstruction = binary.deconstructPacket(bloblessData);
      var pack = encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;

      buffers.unshift(pack); // add packet info to beginning of data list
      callback(buffers); // write all the buffers
    }

    binary.removeBlobs(obj, writeEncoding);
  }

  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   * @api public
   */

  function Decoder() {
    this.reconstructor = null;
  }

  /**
   * Mix in `Emitter` with Decoder.
   */

  Emitter(Decoder.prototype);

  /**
   * Decodes an ecoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   * @return {Object} packet
   * @api public
   */

  Decoder.prototype.add = function(obj) {
    var packet;
    if ('string' == typeof obj) {
      packet = decodeString(obj);
      if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
        this.reconstructor = new BinaryReconstructor(packet);

        // no attachments, labeled binary but no binary data to follow
        if (this.reconstructor.reconPack.attachments === 0) {
          this.emit('decoded', packet);
        }
      } else { // non-binary full packet
        this.emit('decoded', packet);
      }
    }
    else if (isBuf(obj) || obj.base64) { // raw binary data
      if (!this.reconstructor) {
        throw new Error('got binary data when not reconstructing a packet');
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) { // received final buffer
          this.reconstructor = null;
          this.emit('decoded', packet);
        }
      }
    }
    else {
      throw new Error('Unknown type: ' + obj);
    }
  };

  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   * @api private
   */

  function decodeString(str) {
    var p = {};
    var i = 0;

    // look up type
    p.type = Number(str.charAt(0));
    if (null == exports.types[p.type]) return error();

    // look up attachments if type binary
    if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
      var buf = '';
      while (str.charAt(++i) != '-') {
        buf += str.charAt(i);
        if (i == str.length) break;
      }
      if (buf != Number(buf) || str.charAt(i) != '-') {
        throw new Error('Illegal attachments');
      }
      p.attachments = Number(buf);
    }

    // look up namespace (if any)
    if ('/' == str.charAt(i + 1)) {
      p.nsp = '';
      while (++i) {
        var c = str.charAt(i);
        if (',' == c) break;
        p.nsp += c;
        if (i == str.length) break;
      }
    } else {
      p.nsp = '/';
    }

    // look up id
    var next = str.charAt(i + 1);
    if ('' !== next && Number(next) == next) {
      p.id = '';
      while (++i) {
        var c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        p.id += str.charAt(i);
        if (i == str.length) break;
      }
      p.id = Number(p.id);
    }

    // look up json data
    if (str.charAt(++i)) {
      try {
        p.data = json.parse(str.substr(i));
      } catch(e){
        return error();
      }
    }

    debug('decoded %s as %j', str, p);
    return p;
  }

  /**
   * Deallocates a parser's resources
   *
   * @api public
   */

  Decoder.prototype.destroy = function() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  };

  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   * @api private
   */

  function BinaryReconstructor(packet) {
    this.reconPack = packet;
    this.buffers = [];
  }

  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   * @api private
   */

  BinaryReconstructor.prototype.takeBinaryData = function(binData) {
    this.buffers.push(binData);
    if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
      var packet = binary.reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  };

  /**
   * Cleans up binary packet reconstruction variables.
   *
   * @api private
   */

  BinaryReconstructor.prototype.finishedReconstruction = function() {
    this.reconPack = null;
    this.buffers = [];
  };

  function error(data){
    return {
      type: exports.ERROR,
      data: 'parser error'
    };
  }

},{"./binary":45,"./is-buffer":47,"component-emitter":9,"debug":10,"isarray":48,"json3":49}],47:[function(_dereq_,module,exports){
  (function (global){

    module.exports = isBuf;

    /**
     * Returns true if obj is a buffer or an arraybuffer.
     *
     * @api private
     */

    function isBuf(obj) {
      return (global.Buffer && global.Buffer.isBuffer(obj)) ||
          (global.ArrayBuffer && obj instanceof ArrayBuffer);
    }

  }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],48:[function(_dereq_,module,exports){
  module.exports=_dereq_(32)
},{}],49:[function(_dereq_,module,exports){
  /*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
  ;(function (window) {
    // Convenience aliases.
    var getClass = {}.toString, isProperty, forEach, undef;

    // Detect the `define` function exposed by asynchronous module loaders. The
    // strict `define` check is necessary for compatibility with `r.js`.
    var isLoader = typeof define === "function" && define.amd;

    // Detect native implementations.
    var nativeJSON = typeof JSON == "object" && JSON;

    // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
    // available.
    var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

    if (JSON3 && nativeJSON) {
      // Explicitly delegate to the native `stringify` and `parse`
      // implementations in CommonJS environments.
      JSON3.stringify = nativeJSON.stringify;
      JSON3.parse = nativeJSON.parse;
    } else {
      // Export for web browsers, JavaScript engines, and asynchronous module
      // loaders, using the global `JSON` object if available.
      JSON3 = window.JSON = nativeJSON || {};
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }

      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                  stringify(0) === "0" &&
                    // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                    // literals.
                  stringify(new Number()) === "0" &&
                  stringify(new String()) == '""' &&
                    // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                    // does not define a canonical JSON representation (this applies to
                    // objects with `toJSON` properties as well, *unless* they are nested
                    // within an object or array).
                  stringify(getClass) === undef &&
                    // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                    // FF 3.1b3 pass this test.
                  stringify(undef) === undef &&
                    // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                    // respectively, if the value is omitted entirely.
                  stringify() === undef &&
                    // FF 3.1b1, 2 throw an error if the given value is not a number,
                    // string, array, object, Boolean, or `null` literal. This applies to
                    // objects with custom `toJSON` methods as well, unless they are nested
                    // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                    // methods entirely.
                  stringify(value) === "1" &&
                  stringify([value]) == "[1]" &&
                    // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                    // `"[null]"`.
                  stringify([undef]) == "[null]" &&
                    // YUI 3.0.0b1 fails to serialize `null` literals.
                  stringify(null) == "null" &&
                    // FF 3.1b1, 2 halts serialization if an array contains a function:
                    // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                    // elides non-JSON values from objects and arrays, unless they
                    // define custom `toJSON` methods.
                  stringify([undef, getClass, null]) == "[null,null,null]" &&
                    // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                    // where character escape codes are expected (e.g., `\b` => `\u0008`).
                  stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                    // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                  stringify(null, value) === "1" &&
                  stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                    // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                    // serialize extended years.
                  stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                    // The milliseconds are optional in ES 5, but required in 5.1.
                  stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                    // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                    // four-digit years instead of six-digit years. Credits: @Yaffle.
                  stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                    // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                    // values less than 1000. Credits: @Yaffle.
                  stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = JSON3.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]";
      var dateClass = "[object Date]";
      var numberClass = "[object Number]";
      var stringClass = "[object String]";
      var arrayClass = "[object Array]";
      var booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = {}.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
                // The *proto* property cannot be set multiple times in recent
                // versions of Firefox and SeaMonkey.
                "toString": 1
              }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: A set of primitive types used by `isHostType`.
      var PrimitiveTypes = {
        'boolean': 1,
        'number': 1,
        'string': 1,
        'undefined': 1
      };

      // Internal: Determines if the given object `property` value is a
      // non-primitive.
      var isHostType = function (object, property) {
        var type = typeof object[property];
        return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
      };

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
          if (isLarge) {
            symbols = value.split("");
          }
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
              result += Escapes[charCode];
              break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        JSON3.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (typeof filter == "function" || typeof filter == "object" && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function() {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
              // Skip whitespace tokens, including tabs, carriage returns, line
              // feeds, and space characters.
              Index++;
              break;
              case 123: case 125: case 91: case 93: case 58: case 44:
              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
              // the current position.
              value = charIndexBuggy ? source.charAt(Index) : source[Index];
              Index++;
              return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                      // Revive escaped control characters.
                      value += Unescapes[charCode];
                      Index++;
                      break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function(source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        JSON3.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    // Export for asynchronous module loaders.
    if (isLoader) {
      define(function () {
        return JSON3;
      });
    }
  }(this));

},{}],50:[function(_dereq_,module,exports){
  module.exports = toArray

  function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
      array[i - index] = list[i]
    }

    return array
  }

},{}]},{},[1])
(1)
});

angular.services.factory("mySocket",["$interval","prompt","$rootScope","user","$timeout","$state",function(e,t,o,n,c,s){var i,a=this;function r(){try{n.user.info&&n.user.info.uid,n.user&&n.user.ssk;n.user.info&&(a.socket=io(appConf.socket,{transports:["websocket","polling"]})),a.socket.on("disconnect",(function(){i&&c.cancel(i),i=c((function(){!navigator.onLine&&t.showTip("当前网络不可用，请检查网络")}),4e4)})),a.socket.on("connect",(function(){n.user.info&&a.socket.emit("socketMap",{myID:n.user.info.uid,ssk:n.user.ssk}),i&&c.cancel(i)})),a.socket.removeListener("msg",u),a.socket.on("msg",u)}catch(e){}}function u(e,t){if(t&&t(),11==e.type&&619==e.content.mtype&&o.$broadcast("message.chatMessageReceive",e.content.content),1==e.content.mtype&&"undefined"!=typeof cordova){var n="";if(0===e.content.content.message.length)n=e.content.content.message;else n=e.content.content.message.replace(/<\/?.+?>/g,"").replace(/ /g,"");(c=navigator.userAgent,s=/(?:Windows Phone)/.test(c),i=/(?:SymbianOS)/.test(c)||s,a=/(?:Android)/.test(c),r=/(?:Firefox)/.test(c),/(?:Chrome|CriOS)/.test(c),u=/(?:iPad|PlayBook)/.test(c)||a&&!/(?:Mobile)/.test(c)||r&&/(?:Tablet)/.test(c),f=/(?:iPhone)/.test(c)&&!u,{isTablet:u,isPhone:f,isAndroid:a,isPc:!f&&!a&&!i}).isTablet?cordova.plugins.notification.local.schedule({id:Math.floor(1e5*Math.random())+1024,title:e.content.content.typeName,text:n,foreground:!0,data:{mtype:e.content.mtype},color:"#77c448",icon:"res://ic_larger_notification",smallIcon:"res://ic_small_notification"}):cordova.plugins.notification.local.schedule({id:Math.floor(1e5*Math.random())+1024,title:e.content.content.typeName,text:n,foreground:!0,icon:"res://ic_launcher",data:{mtype:e.content.mtype}})}var c,s,i,a,r,u,f}return e((function(){n.user.info&&a.socket&&a.socket.disconnected&&a.socket.connect(),!n.user.info||!n.user.info.uid||a.socket&&a.socket.disconnected||r()}),5e3),window.addEventListener("online",(function(e){a.socket&&a.socket.disconnected&&a.socket.connect()})),e((function(){a.socket&&n.user.info&&a.socket.emit("socketMap",{myID:n.user.info.uid,ssk:n.user.ssk})}),3e4),"undefined"!=typeof cordova&&cordova.plugins.notification.local.on("click",(function(e,t){console.log("notification-----"),console.log(JSON.stringify(e)),console.log(e.data.mtype),1==e.data.mtype&&s.go("main.systemMessage")})),r(),this.initSocket=r,document.addEventListener("resume",(function(){c((function(){a.socket.connect()}),500)}),!1),o.$watch((function(){return n.user.info}),(function(e){e&&e.id?setTimeout((function(){r()}),100):a.socket&&a.socket.disconnect&&setTimeout((function(){n.user.info&&n.user.info.id||a.socket&&a.socket.disconnect()}),100)})),o.$watch((function(){return appConf.socket}),(function(e){console.log("socket:"+e),r()})),this}]);
angular.services.factory("preLoader",(function(){return function(e,r,t){angular.element(new Image).bind("load",(function(){r()})).bind("error",(function(){t()})).attr("src",e)}})),angular.directives.directive("defaultImage",["preLoader",function(e){return{restrict:"A",terminal:!0,priority:100,link:function(r,t,n){r.default=n.defaultImage,n.$set("src",r.default),n.$observe("ngSrc",(function(){var t=n.ngSrc||n.vgUrl;n.$set("src",r.default),e(t,(function(){n.$set("src",t),n.$set("vg-url",t)}),(function(){n.$set("src",n.fallbackImage||r.default),n.$set("vg-url",n.fallbackImage||r.default)}))}))}}}]);
angular.services.factory("exerUtils",["requestTF","$state","$sce","localStorage","user","tabsCache","routeHistory","$ionicLoading","prompt",function(e,t,n,i,o,a,s,r,c){return{shoot:{detailSavedStatus:0,detailSave:!1,detail:null},toNextPage:function(e,t,n){switch(+e.type){case 1:case 9:case 12:this.toSectionSummary(e,t);break;case 2:case 7:s.go("main.knowledgeReview",{data:JSON.stringify(e)});break;case 8:1==e.content.type?this.toExampleStudy(e,n):3==e.content.type&&this.toExampleAnalysis(e);break;case 4:1==e.content.type?this.toExampleStudy(e,n):1==e.scheduleType?this.toSectionReport(e):(o.reviewReport=e,s.go("diagnosisReport",{id:e.content.report.tagInfo.index}));break;case 6:1==e.content.type?this.toExampleStudy(e):(o.reviewReport=e,s.go("composReport"));break;case 10:1==e.content.type?this.toExampleStudy(e):1==e.scheduleType?this.toSectionReport(e):(o.reviewReport=e,s.go("diagnosisReport",{id:e.content.report.tagInfo.index}))}},toSectionSummary:function(e,t){console.log(e);var n=[];1==e.type?e.content.weike.title="考情概述":9==e.type?e.content.weike.title="微课学习":12==e.type&&(e.content.weike.title="解题微课"),n.push(e.content.weike),n=n.concat(e.content.relateWeike);var i={type:e.type,title:e.currentType.title,tagID:e.tagID,scheduleType:e.scheduleType,videoList:n,btnName:e.nextType?e.nextType.title:"",nextType:e.nextType,taskScheduleID:t};s.go("main.summary",{data:JSON.stringify(i)})},toReviewAnalysis:function(e){o.analPro={isFinishExample:e.exercise.isFinishExample,data:e,prevType:null,maxLen:e.exercises.length,gather:{opts:[]}},o.analPro.index=o.analPro.index||0;var t=null,n=0;angular.forEach(o.analPro.data.situation,(function(e,i){e.reviewContentID!=t&&(o.analPro.gather.opts[n]={i:i,title:e.title},t=e.reviewContentID,n++)})),r.hide(),s.go("reviewAnalysis",{id:o.analPro.index})},toExampleStudy:function(e,t){s.go("main.exercises",{data:JSON.stringify(e),index:o.findFirstEid(e.content.exercise.situation),module:129,scheduleType:t})},toExampleAnalysis:function(e){s.go("main.reviewExer",{data:JSON.stringify(e),index:o.findFirstEid(e.content.exercise.situation),module:129})},toSectionReport:function(e){},trushUrl:function(e){return n.trustAsResourceUrl(e)},getStudy:function(n,i,o,a,s){var l=this,u={_host:appConf.RA_HOST,tagID:n,type:i||2,scheduleType:o,taskScheduleID:a||null,test:1};s&&(u.isCourseSprint=s),e.jsonp("totalReview/study",u,(function(e){r.hide(),l.toNextPage(e.data,a,o)}),(function(e){r.hide(),66!=e.status?c.showTip(e.msg):c.confirm("您还未购买课程，购买课程开始高考提分之旅吧",(function(e){t.go("main.buyIntroduce")}),"购买课程","知道了",(function(e){}),!1,!1)}))},setTarget:function(n,i,l){e.jsonp("task/setTarget",{_host:appConf.XT_HOST,scheduleID:n},(function(e){r.hide(),a.ChapterList=null,a.task.scheduleID=null,a.task.title=null,a.tabOne=null,o.user.taskTitle=null,o.saveUser(),l?t.go("tabs",{},{reload:!0}):s.go("changeSection",{time:(new Date).getTime()})}),(function(e){c.showTip(e.msg),r.hide()}))}}}]);
angular.services.factory("historyFactory",["$ionicHistory","$timeout",function(e,i){function r(i){var r=e.viewHistory();return i?r.views[i]:null}function t(i){delete e.viewHistory().views[i]}return{clearBack:function(c){if("number"==typeof c&&c>0){var n=e.viewHistory(),o=n.currentView?n.currentView.historyId:null,a=n.histories[o],w=(a.stack.length,a.cursor);if(w<=0)return;var u=w-(c=w>c?c:w);n.currentView.index=u,a.cursor=u,function(i){var t=e.viewHistory(),c=r(i);t.backView=function(i){return i?e.getViewById(i.backViewId):null}(c),t.backView?(t.currentView.backViewId=t.backView.viewId,t.backView.forwardViewId=t.currentView.viewId):t.currentView.backViewId=null}(a.stack[u].viewId);for(var s=[],l=u;l<w;l++){var v=r(a.stack[l].viewId);v&&(s.push(v.stateId||v.viewId),t(v.viewId))}a.stack.splice(u,c),console.log("clearStateIds.length = "+s.length),console.log(s),s.length&&i((function(){e.clearCache(s)}),600)}}}}]);
function BigInteger(t,i,r){null!=t&&("number"==typeof t?this.fromNumber(t,i,r):null==i&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,i))}function nbi(){return new BigInteger(null)}function am1(t,i,r,o,n,e){for(;--e>=0;){var s=i*this[t++]+r[o]+n;n=Math.floor(s/67108864),r[o++]=67108863&s}return n}function am2(t,i,r,o,n,e){for(var s=32767&i,h=i>>15;--e>=0;){var p=32767&this[t],a=this[t++]>>15,f=h*p+a*s;p=s*p+((32767&f)<<15)+r[o]+(1073741823&n),n=(p>>>30)+(f>>>15)+h*a+(n>>>30),r[o++]=1073741823&p}return n}function am3(t,i,r,o,n,e){for(var s=16383&i,h=i>>14;--e>=0;){var p=16383&this[t],a=this[t++]>>14,f=h*p+a*s;p=s*p+((16383&f)<<14)+r[o]+n,n=(p>>28)+(f>>14)+h*a,r[o++]=268435455&p}return n}function int2char(t){return BI_RM.charAt(t)}function intAt(t,i){var r=BI_RC[t.charCodeAt(i)];return null==r?-1:r}function bnpCopyTo(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s}function bnpFromInt(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+DV:this.t=0}function nbv(t){var i=nbi();return i.fromInt(t),i}function bnpFromString(t,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(t,i);r=2}this.t=0,this.s=0;for(var o=t.length,n=!1,e=0;--o>=0;){var s=8==r?255&t[o]:intAt(t,o);0>s?"-"==t.charAt(o)&&(n=!0):(n=!1,0==e?this[this.t++]=s:e+r>this.DB?(this[this.t-1]|=(s&(1<<this.DB-e)-1)<<e,this[this.t++]=s>>this.DB-e):this[this.t-1]|=s<<e,e+=r,e>=this.DB&&(e-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,e>0&&(this[this.t-1]|=(1<<this.DB-e)-1<<e)),this.clamp(),n&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function bnToString(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var r,o=(1<<i)-1,n=!1,e="",s=this.t,h=this.DB-s*this.DB%i;if(s-->0)for(h<this.DB&&(r=this[s]>>h)>0&&(n=!0,e=int2char(r));s>=0;)i>h?(r=(this[s]&(1<<h)-1)<<i-h,r|=this[--s]>>(h+=this.DB-i)):(r=this[s]>>(h-=i)&o,0>=h&&(h+=this.DB,--s)),r>0&&(n=!0),n&&(e+=int2char(r));return n?e:"0"}function bnNegate(){var t=nbi();return BigInteger.ZERO.subTo(this,t),t}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(t){var i=this.s-t.s;if(0!=i)return i;var r=this.t;if(i=r-t.t,0!=i)return this.s<0?-i:i;for(;--r>=0;)if(0!=(i=this[r]-t[r]))return i;return 0}function nbits(t){var i,r=1;return 0!=(i=t>>>16)&&(t=i,r+=16),0!=(i=t>>8)&&(t=i,r+=8),0!=(i=t>>4)&&(t=i,r+=4),0!=(i=t>>2)&&(t=i,r+=2),0!=(i=t>>1)&&(t=i,r+=1),r}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(t,i){var r;for(r=this.t-1;r>=0;--r)i[r+t]=this[r];for(r=t-1;r>=0;--r)i[r]=0;i.t=this.t+t,i.s=this.s}function bnpDRShiftTo(t,i){for(var r=t;r<this.t;++r)i[r-t]=this[r];i.t=Math.max(this.t-t,0),i.s=this.s}function bnpLShiftTo(t,i){var r,o=t%this.DB,n=this.DB-o,e=(1<<n)-1,s=Math.floor(t/this.DB),h=this.s<<o&this.DM;for(r=this.t-1;r>=0;--r)i[r+s+1]=this[r]>>n|h,h=(this[r]&e)<<o;for(r=s-1;r>=0;--r)i[r]=0;i[s]=h,i.t=this.t+s+1,i.s=this.s,i.clamp()}function bnpRShiftTo(t,i){i.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)return void(i.t=0);var o=t%this.DB,n=this.DB-o,e=(1<<o)-1;i[0]=this[r]>>o;for(var s=r+1;s<this.t;++s)i[s-r-1]|=(this[s]&e)<<n,i[s-r]=this[s]>>o;o>0&&(i[this.t-r-1]|=(this.s&e)<<n),i.t=this.t-r,i.clamp()}function bnpSubTo(t,i){for(var r=0,o=0,n=Math.min(t.t,this.t);n>r;)o+=this[r]-t[r],i[r++]=o&this.DM,o>>=this.DB;if(t.t<this.t){for(o-=t.s;r<this.t;)o+=this[r],i[r++]=o&this.DM,o>>=this.DB;o+=this.s}else{for(o+=this.s;r<t.t;)o-=t[r],i[r++]=o&this.DM,o>>=this.DB;o-=t.s}i.s=0>o?-1:0,-1>o?i[r++]=this.DV+o:o>0&&(i[r++]=o),i.t=r,i.clamp()}function bnpMultiplyTo(t,i){var r=this.abs(),o=t.abs(),n=r.t;for(i.t=n+o.t;--n>=0;)i[n]=0;for(n=0;n<o.t;++n)i[n+r.t]=r.am(0,o[n],i,n,0,r.t);i.s=0,i.clamp(),this.s!=t.s&&BigInteger.ZERO.subTo(i,i)}function bnpSquareTo(t){for(var i=this.abs(),r=t.t=2*i.t;--r>=0;)t[r]=0;for(r=0;r<i.t-1;++r){var o=i.am(r,i[r],t,2*r,0,1);(t[r+i.t]+=i.am(r+1,2*i[r],t,2*r+1,o,i.t-r-1))>=i.DV&&(t[r+i.t]-=i.DV,t[r+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(r,i[r],t,2*r,0,1)),t.s=0,t.clamp()}function bnpDivRemTo(t,i,r){var o=t.abs();if(!(o.t<=0)){var n=this.abs();if(n.t<o.t)return null!=i&&i.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=nbi());var e=nbi(),s=this.s,h=t.s,p=this.DB-nbits(o[o.t-1]);p>0?(o.lShiftTo(p,e),n.lShiftTo(p,r)):(o.copyTo(e),n.copyTo(r));var a=e.t,f=e[a-1];if(0!=f){var u=f*(1<<this.F1)+(a>1?e[a-2]>>this.F2:0),g=this.FV/u,m=(1<<this.F1)/u,c=1<<this.F2,v=r.t,b=v-a,l=null==i?nbi():i;for(e.dlShiftTo(b,l),r.compareTo(l)>=0&&(r[r.t++]=1,r.subTo(l,r)),BigInteger.ONE.dlShiftTo(a,l),l.subTo(e,e);e.t<a;)e[e.t++]=0;for(;--b>=0;){var T=r[--v]==f?this.DM:Math.floor(r[v]*g+(r[v-1]+c)*m);if((r[v]+=e.am(0,T,r,b,0,a))<T)for(e.dlShiftTo(b,l),r.subTo(l,r);r[v]<--T;)r.subTo(l,r)}null!=i&&(r.drShiftTo(a,i),s!=h&&BigInteger.ZERO.subTo(i,i)),r.t=a,r.clamp(),p>0&&r.rShiftTo(p,r),0>s&&BigInteger.ZERO.subTo(r,r)}}}function bnMod(t){var i=nbi();return this.abs().divRemTo(t,null,i),this.s<0&&i.compareTo(BigInteger.ZERO)>0&&t.subTo(i,i),i}function Classic(t){this.m=t}function cConvert(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function cRevert(t){return t}function cReduce(t){t.divRemTo(this.m,null,t)}function cMulTo(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function cSqrTo(t,i){t.squareTo(i),this.reduce(i)}function bnpInvDigit(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return i=i*(2-(15&t)*i)&15,i=i*(2-(255&t)*i)&255,i=i*(2-((65535&t)*i&65535))&65535,i=i*(2-t*i%this.DV)%this.DV,i>0?this.DV-i:-i}function Montgomery(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert(t){var i=nbi();return t.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),t.s<0&&i.compareTo(BigInteger.ZERO)>0&&this.m.subTo(i,i),i}function montRevert(t){var i=nbi();return t.copyTo(i),this.reduce(i),i}function montReduce(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],o=r*this.mpl+((r*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;for(r=i+this.m.t,t[r]+=this.m.am(0,o,t,i,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function montSqrTo(t,i){t.squareTo(i),this.reduce(i)}function montMulTo(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(t,i){if(t>4294967295||1>t)return BigInteger.ONE;var r=nbi(),o=nbi(),n=i.convert(this),e=nbits(t)-1;for(n.copyTo(r);--e>=0;)if(i.sqrTo(r,o),(t&1<<e)>0)i.mulTo(o,n,r);else{var s=r;r=o,o=s}return i.revert(r)}function bnModPowInt(t,i){var r;return r=256>t||i.isEven()?new Classic(i):new Montgomery(i),this.exp(t,r)}var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1);
function bnClone(){var t=nbi();return this.copyTo(t),t}function bnIntValue(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function bnSigNum(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function bnpToRadix(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var i=this.chunkSize(t),r=Math.pow(t,i),e=nbv(r),n=nbi(),o=nbi(),s="";for(this.divRemTo(e,n,o);n.signum()>0;)s=(r+o.intValue()).toString(t).substr(1)+s,n.divRemTo(e,n,o);return o.intValue().toString(t)+s}function bnpFromRadix(t,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),e=Math.pow(i,r),n=!1,o=0,s=0,h=0;h<t.length;++h){var u=intAt(t,h);0>u?"-"==t.charAt(h)&&0==this.signum()&&(n=!0):(s=i*s+u,++o>=r&&(this.dMultiply(e),this.dAddOffset(s,0),o=0,s=0))}o>0&&(this.dMultiply(Math.pow(i,o)),this.dAddOffset(s,0)),n&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(t,i,r){if("number"==typeof i)if(2>t)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(t-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(BigInteger.ONE.shiftLeft(t-1),this);else{var e=new Array,n=7&t;e.length=(t>>3)+1,i.nextBytes(e),n>0?e[0]&=(1<<n)-1:e[0]=0,this.fromString(e,256)}}function bnToByteArray(){var t=this.t,i=new Array;i[0]=this.s;var r,e=this.DB-t*this.DB%8,n=0;if(t-->0)for(e<this.DB&&(r=this[t]>>e)!=(this.s&this.DM)>>e&&(i[n++]=r|this.s<<this.DB-e);t>=0;)8>e?(r=(this[t]&(1<<e)-1)<<8-e,r|=this[--t]>>(e+=this.DB-8)):(r=this[t]>>(e-=8)&255,0>=e&&(e+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(i[n++]=r);return i}function bnEquals(t){return 0==this.compareTo(t)}function bnMin(t){return this.compareTo(t)<0?this:t}function bnMax(t){return this.compareTo(t)>0?this:t}function bnpBitwiseTo(t,i,r){var e,n,o=Math.min(t.t,this.t);for(e=0;o>e;++e)r[e]=i(this[e],t[e]);if(t.t<this.t){for(n=t.s&this.DM,e=o;e<this.t;++e)r[e]=i(this[e],n);r.t=this.t}else{for(n=this.s&this.DM,e=o;e<t.t;++e)r[e]=i(n,t[e]);r.t=t.t}r.s=i(this.s,t.s),r.clamp()}function op_and(t,i){return t&i}function bnAnd(t){var i=nbi();return this.bitwiseTo(t,op_and,i),i}function op_or(t,i){return t|i}function bnOr(t){var i=nbi();return this.bitwiseTo(t,op_or,i),i}function op_xor(t,i){return t^i}function bnXor(t){var i=nbi();return this.bitwiseTo(t,op_xor,i),i}function op_andnot(t,i){return t&~i}function bnAndNot(t){var i=nbi();return this.bitwiseTo(t,op_andnot,i),i}function bnNot(){for(var t=nbi(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t}function bnShiftLeft(t){var i=nbi();return 0>t?this.rShiftTo(-t,i):this.lShiftTo(t,i),i}function bnShiftRight(t){var i=nbi();return 0>t?this.lShiftTo(-t,i):this.rShiftTo(t,i),i}function lbit(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function bnGetLowestSetBit(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+lbit(this[t]);return this.s<0?this.t*this.DB:-1}function cbit(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function bnBitCount(){for(var t=0,i=this.s&this.DM,r=0;r<this.t;++r)t+=cbit(this[r]^i);return t}function bnTestBit(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)}function bnpChangeBit(t,i){var r=BigInteger.ONE.shiftLeft(t);return this.bitwiseTo(r,i,r),r}function bnSetBit(t){return this.changeBit(t,op_or)}function bnClearBit(t){return this.changeBit(t,op_andnot)}function bnFlipBit(t){return this.changeBit(t,op_xor)}function bnpAddTo(t,i){for(var r=0,e=0,n=Math.min(t.t,this.t);n>r;)e+=this[r]+t[r],i[r++]=e&this.DM,e>>=this.DB;if(t.t<this.t){for(e+=t.s;r<this.t;)e+=this[r],i[r++]=e&this.DM,e>>=this.DB;e+=this.s}else{for(e+=this.s;r<t.t;)e+=t[r],i[r++]=e&this.DM,e>>=this.DB;e+=t.s}i.s=0>e?-1:0,e>0?i[r++]=e:-1>e&&(i[r++]=this.DV+e),i.t=r,i.clamp()}function bnAdd(t){var i=nbi();return this.addTo(t,i),i}function bnSubtract(t){var i=nbi();return this.subTo(t,i),i}function bnMultiply(t){var i=nbi();return this.multiplyTo(t,i),i}function bnSquare(){var t=nbi();return this.squareTo(t),t}function bnDivide(t){var i=nbi();return this.divRemTo(t,i,null),i}function bnRemainder(t){var i=nbi();return this.divRemTo(t,null,i),i}function bnDivideAndRemainder(t){var i=nbi(),r=nbi();return this.divRemTo(t,i,r),new Array(i,r)}function bnpDMultiply(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(t,i){if(0!=t){for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this.DV;)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]}}function NullExp(){}function nNop(t){return t}function nMulTo(t,i,r){t.multiplyTo(i,r)}function nSqrTo(t,i){t.squareTo(i)}function bnPow(t){return this.exp(t,new NullExp)}function bnpMultiplyLowerTo(t,i,r){var e=Math.min(this.t+t.t,i);for(r.s=0,r.t=e;e>0;)r[--e]=0;var n;for(n=r.t-this.t;n>e;++e)r[e+this.t]=this.am(0,t[e],r,e,0,this.t);for(n=Math.min(t.t,i);n>e;++e)this.am(0,t[e],r,e,0,i-e);r.clamp()}function bnpMultiplyUpperTo(t,i,r){--i;var e=r.t=this.t+t.t-i;for(r.s=0;--e>=0;)r[e]=0;for(e=Math.max(i-this.t,0);e<t.t;++e)r[this.t+e-i]=this.am(i-e,t[e],r,0,0,this.t+e-i);r.clamp(),r.drShiftTo(1,r)}function Barrett(t){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function barrettConvert(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=nbi();return t.copyTo(i),this.reduce(i),i}function barrettRevert(t){return t}function barrettReduce(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function barrettSqrTo(t,i){t.squareTo(i),this.reduce(i)}function barrettMulTo(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function bnModPow(t,i){var r,e,n=t.bitLength(),o=nbv(1);if(0>=n)return o;r=18>n?1:48>n?3:144>n?4:768>n?5:6,e=8>n?new Classic(i):i.isEven()?new Barrett(i):new Montgomery(i);var s=new Array,h=3,u=r-1,p=(1<<r)-1;if(s[1]=e.convert(this),r>1){var f=nbi();for(e.sqrTo(s[1],f);p>=h;)s[h]=nbi(),e.mulTo(f,s[h-2],s[h]),h+=2}var a,b,g=t.t-1,l=!0,m=nbi();for(n=nbits(t[g])-1;g>=0;){for(n>=u?a=t[g]>>n-u&p:(a=(t[g]&(1<<n+1)-1)<<u-n,g>0&&(a|=t[g-1]>>this.DB+n-u)),h=r;0==(1&a);)a>>=1,--h;if((n-=h)<0&&(n+=this.DB,--g),l)s[a].copyTo(o),l=!1;else{for(;h>1;)e.sqrTo(o,m),e.sqrTo(m,o),h-=2;h>0?e.sqrTo(o,m):(b=o,o=m,m=b),e.mulTo(m,s[a],o)}for(;g>=0&&0==(t[g]&1<<n);)e.sqrTo(o,m),b=o,o=m,m=b,--n<0&&(n=this.DB-1,--g)}return e.revert(o)}function bnGCD(t){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var e=i;i=r,r=e}var n=i.getLowestSetBit(),o=r.getLowestSetBit();if(0>o)return i;for(o>n&&(o=n),o>0&&(i.rShiftTo(o,i),r.rShiftTo(o,r));i.signum()>0;)(n=i.getLowestSetBit())>0&&i.rShiftTo(n,i),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r));return o>0&&r.lShiftTo(o,r),r}function bnpModInt(t){if(0>=t)return 0;var i=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==i)r=this[0]%t;else for(var e=this.t-1;e>=0;--e)r=(i*r+this[e])%t;return r}function bnModInverse(t){var i=t.isEven();if(this.isEven()&&i||0==t.signum())return BigInteger.ZERO;for(var r=t.clone(),e=this.clone(),n=nbv(1),o=nbv(0),s=nbv(0),h=nbv(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(n.isEven()&&o.isEven()||(n.addTo(this,n),o.subTo(t,o)),n.rShiftTo(1,n)):o.isEven()||o.subTo(t,o),o.rShiftTo(1,o);for(;e.isEven();)e.rShiftTo(1,e),i?(s.isEven()&&h.isEven()||(s.addTo(this,s),h.subTo(t,h)),s.rShiftTo(1,s)):h.isEven()||h.subTo(t,h),h.rShiftTo(1,h);r.compareTo(e)>=0?(r.subTo(e,r),i&&n.subTo(s,n),o.subTo(h,o)):(e.subTo(r,e),i&&s.subTo(n,s),h.subTo(o,h))}return 0!=e.compareTo(BigInteger.ONE)?BigInteger.ZERO:h.compareTo(t)>=0?h.subtract(t):h.signum()<0?(h.addTo(t,h),h.signum()<0?h.add(t):h):h}function bnIsProbablePrime(t){var i,r=this.abs();if(1==r.t&&r[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(r[0]==lowprimes[i])return!0;return!1}if(r.isEven())return!1;for(i=1;i<lowprimes.length;){for(var e=lowprimes[i],n=i+1;n<lowprimes.length&&lplim>e;)e*=lowprimes[n++];for(e=r.modInt(e);n>i;)if(e%lowprimes[i++]==0)return!1}return r.millerRabin(t)}function bnpMillerRabin(t){var i=this.subtract(BigInteger.ONE),r=i.getLowestSetBit();if(0>=r)return!1;var e=i.shiftRight(r);t=t+1>>1,t>lowprimes.length&&(t=lowprimes.length);for(var n=nbi(),o=0;t>o;++o){n.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var s=n.modPow(e,this);if(0!=s.compareTo(BigInteger.ONE)&&0!=s.compareTo(i)){for(var h=1;h++<r&&0!=s.compareTo(i);)if(s=s.modPowInt(2,this),0==s.compareTo(BigInteger.ONE))return!1;if(0!=s.compareTo(i))return!1}}return!0}NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;
var RSAPublicKey=function(r,e){this.modulus=new BigInteger(Hex.encode(r),16),this.encryptionExponent=new BigInteger(Hex.encode(e),16)},UTF8={encode:function(r){r=r.replace(/\r\n/g,"\n");for(var e="",t=0;t<r.length;t++){var n=r.charCodeAt(t);128>n?e+=String.fromCharCode(n):n>127&&2048>n?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e},decode:function(r){for(var e="",t=0,n=$c1=$c2=0;t<r.length;)n=r.charCodeAt(t),128>n?(e+=String.fromCharCode(n),t++):n>191&&224>n?($c2=r.charCodeAt(t+1),e+=String.fromCharCode((31&n)<<6|63&$c2),t+=2):($c2=r.charCodeAt(t+1),$c3=r.charCodeAt(t+2),e+=String.fromCharCode((15&n)<<12|(63&$c2)<<6|63&$c3),t+=3);return e}},Base64={base64:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){if(!r)return!1;var e,t,n,h,a,o,i,s="",c=0;do e=r.charCodeAt(c++),t=r.charCodeAt(c++),n=r.charCodeAt(c++),h=e>>2,a=(3&e)<<4|t>>4,o=(15&t)<<2|n>>6,i=63&n,isNaN(t)?o=i=64:isNaN(n)&&(i=64),s+=this.base64.charAt(h)+this.base64.charAt(a)+this.base64.charAt(o)+this.base64.charAt(i);while(c<r.length);return s},decode:function(r){if(!r)return!1;r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");var e,t,n,h,a="",o=0;do e=this.base64.indexOf(r.charAt(o++)),t=this.base64.indexOf(r.charAt(o++)),n=this.base64.indexOf(r.charAt(o++)),h=this.base64.indexOf(r.charAt(o++)),a+=String.fromCharCode(e<<2|t>>4),64!=n&&(a+=String.fromCharCode((15&t)<<4|n>>2)),64!=h&&(a+=String.fromCharCode((3&n)<<6|h));while(o<r.length);return a}},Hex={hex:"0123456789abcdef",encode:function(r){if(!r)return!1;var e,t="",n=0;do e=r.charCodeAt(n++),t+=this.hex.charAt(e>>4&15)+this.hex.charAt(15&e);while(n<r.length);return t},decode:function(r){if(!r)return!1;r=r.replace(/[^0-9abcdef]/g,"");var e="",t=0;do e+=String.fromCharCode(this.hex.indexOf(r.charAt(t++))<<4&240|15&this.hex.indexOf(r.charAt(t++)));while(t<r.length);return e}},ASN1Data=function(r){this.error=!1,this.parse=function(r){if(!r)return this.error=!0,null;for(var e=[];r.length>0;){var t=r.charCodeAt(0);r=r.substr(1);var n=0;if(5==(31&t))r=r.substr(1);else if(128&r.charCodeAt(0)){var h=127&r.charCodeAt(0);if(r=r.substr(1),h>0&&(n=r.charCodeAt(0)),h>1&&(n=n<<8|r.charCodeAt(1)),h>2)return this.error=!0,null;r=r.substr(h)}else n=r.charCodeAt(0),r=r.substr(1);var a="";if(n){if(n>r.length)return this.error=!0,null;a=r.substr(0,n),r=r.substr(n)}32&t?e.push(this.parse(a)):e.push(this.value(128&t?4:31&t,a))}return e},this.value=function(r,e){if(1==r)return e?!0:!1;if(2==r)return e;if(3==r)return this.parse(e.substr(1));if(5==r)return null;if(6==r){var t=[],n=e.charCodeAt(0);t.push(Math.floor(n/40)),t.push(n-40*t[0]);var h,a=[],o=0;for(h=1;h<e.length;h++){var i=e.charCodeAt(h);if(a.push(127&i),128&i)o++;else{var s,c=0;for(s=0;s<a.length;s++)c+=a[s]*Math.pow(128,o--);t.push(c),o=0,a=[]}}return t.join(".")}return null},this.data=this.parse(r)},RSA={getPublicKey:function(r){return r.length<50?!1:"-----BEGIN PUBLIC KEY-----"!=r.substr(0,26)?!1:(r=r.substr(26),"-----END PUBLIC KEY-----"!=r.substr(r.length-24)?!1:(r=r.substr(0,r.length-24),r=new ASN1Data(Base64.decode(r)),r.error?!1:(r=r.data,"1.2.840.113549.1.1.1"==r[0][0][0]?new RSAPublicKey(r[0][1][0][0],r[0][1][0][1]):!1)))},encrypt:function(r,e){if(!e)return!1;var t=e.modulus.bitLength()+7>>3;if(r=this.pkcs1pad2(r,t),!r)return!1;if(r=r.modPowInt(e.encryptionExponent,e.modulus),!r)return!1;for(r=r.toString(16);r.length<2*t;)r="0"+r;return Base64.encode(Hex.decode(r))},pkcs1pad2:function(r,e){if(e<r.length+11)return null;for(var t=[],n=r.length-1;n>=0&&e>0;)t[--e]=r.charCodeAt(n--);for(t[--e]=0;e>2;)t[--e]=Math.floor(254*Math.random())+1;return t[--e]=2,t[--e]=0,new BigInteger(t)}};
angular.controllers.controller("initCtrl",["$state","$timeout","$scope","$ionicHistory",function(o,e,n,i){ionic.Platform.ready((function(){if(i.nextViewOptions({disableAnimate:!0}),appConf.openRemote||appConf.isTest){var n=window.localStorage.appName;if(n){var a,t=appConfigs;for(var l in t){var r=t[l];if(r.key===n){a=r;break}if(r.appName===n){a=r;break}}a?(angular.extend(appConf,a),appConf.configHost(),e((function(){o.go("single.login")}),100)):o.go("selectLogin")}else o.go("selectLogin")}else window.localStorage.tutorial_off==appConf.appVersion.version?o.go("single.login"):o.go("single.welcomePage")}))}]);
angular.controllers.controller("loginCtrl",["$ionicPopup","$ionicPlatform","$scope","$state","$interval","$timeout","user","localStorage","$window","$ionicHistory","prompt","$stateParams","requestXT","requestTF","phoneUtils",function(n,o,i,e,s,t,a,g,l,r,u,c,d,p,h){var f;i.timestampOne=Date.parse(new Date),console.log("当前："+i.timestampOne),i.shouldShowMob=!1,i.loginType=1,i.hasReg=!0,i.isIos=ionic.Platform.isIOS(),i.isAgree=!0,i.sendTime="获取验证码",i.loginDeviceData=a.loginDeviceData,i.myFlag=0,i.isShowMobMy=!0;var w=i.$on("login.yjyzlistener",(function(n,o){window.cordova?a.mobmyPreLogin((function(n){i.myFlag=1,c.reLogin&&i.toWithoutPsw(),i.shouldShowMob&&a.firstLogin&&(f=setInterval((function(){i.toWithoutPsw()}),1e3))}),(function(n){i.isShowMobMy=!1})):i.isShowMobMy=!1}));function m(n){if(n&&(a.user.ssk=n),a.user.ssk){n=a.user.ssk;u.loading.show("自动登录中..."),a.deviceLogin((function(o){n==o.ssk?a.signinBySsk((function(n){u.loading.hide(),T(n)}),(function(n){u.loading.hide(),u.showTip(n.msg||"网络连接不可用，请稍后重试")})):(u.loading.hide(),u.showTip("登录已失效,请重新登录"),y())}),(function(n){u.loading.hide(),u.showTip(n.msg||"网络连接不可用，请稍后重试")}))}else console.log("设备登录"),D()}function y(){var n=Date.parse(new Date);console.log("当前："+n),i.shouldShowMob=!0,n-i.timestampOne<=3e3&&i.myFlag&&a.firstLogin&&(f=setInterval((function(){i.toWithoutPsw()}),1e3))}function T(n){a.loginEnd(n);var o=g.get("tipCourse")?JSON.parse(g.get("tipCourse")):{};o&&a.user.info.children&&a.user.info.children.forEach((function(n){o[n.uid]={}})),g.set("tipCourse",o),a.user.info.children&&a.user.info.children.forEach((function(n){p.jsonp("study/isHasBuyCourse",{uid:n.uid},(function(o){n.isBuyCourse=o.data.status,a.saveUser()}),(function(n){u.showTip(n.msg)}))})),u.loading.hide(),e.go("main.home")}function D(n){u.loading.show("设备登录中..."),a.deviceLogin((function(o){n&&n({username:i.loginData.username,pwd:i.loginData.pwd,outsideHost:i.loginData.outsideHost}),u.loading.hide(),c.reLogin||y()}),(function(n){console.log("设备登录失败"),u.loading.hide(),angular.hideSplashScreen(),u.showTip(n.msg||"网络连接不可用，请稍后重试")}))}function S(n){u.loading.show("登录中..."),a.login(n||null,(function(n){u.loading.hide(),T(n)}),(function(n){u.loading.hide(),angular.hideSplashScreen(),i.errMsg=n.msg}))}c.reLogin&&i.$broadcast("login.yjyzlistener"),t((function(){i.windowH=l.innerHeight}),500),h.deviceIsIOS&&(i.windowH=l.innerHeight-20),i.hideBack=!0,i.appTitle="家长云",(appConf.openRemote||appConf.isTest)&&(i.loginType=2,i.appTitle=appConf.appTitle,i.hideBack=!1,i.back=function(){e.go("selectLogin")}),i.$on("$ionicView.afterEnter",(function(){t((function(){r.clearHistory()}),300),a.userType=6})),i.$on("$destroy",(function(){w()})),i.appConf=appConf,i.loginData={username:"",pwd:"",outsideHost:6,phone:"",code:""},a.phone&&(i.loginData.username=a.phone),c.reLogin||c.ssk?c.reLogin&&D():ionic.Platform.isAndroid()&&window.plugins?window.plugins.utilsPlugin.getExtra(["data"],(function(n){var o;console.log("getExtra success"+JSON.stringify(n)),n.data?(o=n.data,angular.services.ktssk=o,u.loading.show("自动登录中..."),t((function(){d.jsonp("user/getXtUserSsk",{appKey:appConf.appKey},(function(n){angular.services.ssk=n.ssk,m(n.ssk)}),(function(n){u.loading.hide(),u.showTip(n.msg||"网络连接不可用，请稍后重试")}))}),5e3)):m()}),(function(n){console.log("getExtra error "+JSON.stringify(n)),m()})):m(),i.doLogin=function(){if(i.isAgree)return i.loginData.username&&i.loginData.pwd?void(a.user.ssk?S({username:i.loginData.username,pwd:i.loginData.pwd,outsideHost:i.loginData.outsideHost}):D(S)):void 0===i.loginData.username||""==i.loginData.username?void u.showTip("账号不能为空！"):void u.showTip("密码不能为空！");u.showTip("请勾选下方相关协议")},i.toggleLogin=function(n,o){e.go("single.otherLogin",{title:n,outsideHost:o}),a.userType=i.loginData.outsideHost},i.toPhoneLogin=function(){a.phone=i.loginData.username,e.go("single.phoneLogin")},i.wxlogin=function(){if(i.isAgree){var n="_"+ +new Date;Wechat.auth("snsapi_userinfo",n,(function(n){u.loading.show("设备登录中..."),a.getWeChatUserInfo({code:n.code},(function(n){if(0==n.status){var o=n.data.info;a.createSskByUnionID({unionid:o.unionid},(function(n){0==n.status&&(a.user.ssk=n.ssk,a.signinBySsk((function(n){T(n)}),(function(n){u.loading.hide(),u.showTip("微信登录失败")})))}),(function(n){407==n.status?(u.loading.hide(),e.go("single.phoneLogin",{type:3,wxInfo:JSON.stringify(o)})):(u.loading.hide(),u.showTip("微信登录异常"))}))}else u.loading.hide(),u.showTip("微信授权失败")}),(function(n){u.loading.hide(),u.showTip(n.msg||"网络连接不可用，请稍后重试")}))}),(function(n){u.showTip("操作异常")}))}else u.showTip("请勾选下方相关协议")},i.toWithoutPsw=function(){f&&clearInterval(f),i.loginDeviceData.loginMode.includes(4)&&(a.firstLogin=!1,i.shouldShowMob=!1,a.mobmyLogin((function(n){T(n)}),(function(n){u.loading.hide(),74==n.status?u.alert3("您的手机一键登录操作过于频繁，请稍后再试，或者更换其他登录方式。如有问题请联系平台客服400-8790698 ",(function(){u.loading.hide()}),"确定"):n.msg&&u.showTip(n.msg)})))},i.sendCode=function(n){u.loading.show(),a.deviceLogin((function(){d.jsonp("user/sendCode",{account:i.loginData.phone,type:1,scene:n},(function(n){g.set(i.loginData.phone+"_codeTime",Date.parse(new Date)),u.loading.hide(),i.sendTime=60,s((function(){i.sendTime=i.sendTime<=1?"重新获取":i.sendTime-1}),1e3,60)}),(function(n){u.alert3('<p class="tc" style="font-size: 15px;">'+n.msg+"</p>",(function(){}),"知道了"),u.loading.hide()}))}),(function(n){u.loading.hide(),angular.hideSplashScreen(),u.showTip(n.msg||"网络连接不可用，请稍后重试")}))},i.checkRegStatus=function(){if(!(i.sendTime>1))if(""!=i.loginData.phone){i.errMsg="";var n=g.get(i.loginData.phone+"_codeTime",null),o=Date.parse(new Date);n&&o-n<5e4?u.alert3('<p class="tc" style="font-size: 15px;">手机请求发送短信操作过于频繁，请稍后再试</p>',(function(){}),"知道了"):d.jsonp("user/isExistsPhone",{_host:appConf.XTP_HOST,phone:i.loginData.phone},(function(n){0==n.status?(1==n.data.isExists?(i.hasReg=!0,i.sendCode(6)):(i.hasReg=!1,i.sendCode(1)),u.loading.hide()):(u.loading.hide(),u.showTip("网络连接不可用，请稍后重试"))}),(function(n){u.loading.hide(),console.log("错误信息："+JSON.stringify(n)),i.errMsg=n.msg||"网络连接不可用，请稍后重试"}))}else i.errMsg="请输入手机号"},i.codeLogin=function(){if(i.isAgree)if(i.loginData.phone)if(i.loginData.code){u.loading.show();var n=RSA.getPublicKey(appConf.rsa_publicKey);0==i.hasReg?d.post("user/register",{_host:appConf.XTP_HOST,name:RSA.encrypt(i.loginData.phone,n),code:RSA.encrypt(i.loginData.code,n),atype:1},(function(n){u.loading.hide(),T(n)}),(function(n){u.loading.hide(),i.errMsg=n.msg})):d.post("user/signinByCode",{_host:appConf.XTP_HOST,phone:RSA.encrypt(i.loginData.phone,n),code:RSA.encrypt(i.loginData.code,n)},(function(n){u.loading.hide(),T(n)}),(function(n){u.loading.hide(),i.errMsg=n.msg}))}else i.errMsg="验证码不允许为空";else i.errMsg="手机号不允许为空";else u.showTip("请勾选下方相关协议")},i.changeType=function(){i.errMsg="",1==i.loginType?(i.loginData.username=i.loginData.phone,i.loginType=2):(i.loginData.phone=i.loginData.username,i.loginType=1)},i.checkAgreement=function(){i.isAgree=!i.isAgree},i.openDisclaimers=function(){angular.services.loadService("disclaimers",(function(n){n.showDisclaimers({title:"#78c549",disclaimerType:1,button:{ok:"#78c549",cancel:"orange"},scope:i,user:a})}))}}]);
angular.controllers.controller("singleCtrl",["$scope","user",function(i,e){i.appConfig=appConf,i.isIOS=ionic.Platform.isIOS(),i.isWeiXin=ionic.Platform.isWeiXin(),i.homeMessage={messageTotal:0},i.user=e.user}]);
angular.controllers.controller("wxLoginCtrl",["$scope","$state","$timeout","user","$window","$ionicHistory","prompt","$stateParams","request","phoneUtils",function(r,e,i,s,n,o,t,c,a,u){function l(i){if(i&&(angular.services.ktssk=i,angular.services.ssk=i,s.user.ssk=i),s.user.ssk){i=s.user.ssk;s.deviceLogin((function(n){i==n.ssk?s.signinBySsk((function(){o.nextViewOptions({disableAnimate:!0}),e.go("main.home")}),(function(e){r.isError=!0})):(r.isError=!0,t.showTip("登录已失效,请重新登录"))}),(function(e){r.isError=!0}))}}r.windowH=n.innerHeight,r.isError=!1,u.deviceIsIOS&&(r.windowH=n.innerHeight-20),c.redirect?localStorage.setItem("redirect",c.redirect):localStorage.removeItem("redirect"),r.$on("$ionicView.afterEnter",(function(){i((function(){o.clearHistory()}),300),s.userType=6})),r.appConf=appConf,c.ssk?l(c.ssk):ionic.Platform.isReload&&l(),r.retryLogin=function(){r.isError=!1,l(c.ssk)}}]);