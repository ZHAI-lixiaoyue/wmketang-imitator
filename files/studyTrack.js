/**
 * Created by tz on 2016/11/28.
 */
angular.controllers.controller("studyTrack", [
    "$state",
    "$class",
    "$rootScope",
    "requestP",
    "$ionicPopover",
    "$window",
    "$interval",
    "$location",
    "$timeout",
    "$scope",
    "$stateParams",
    "$filter",
    "user",
    "request",
    "$request",
    "$class",
    "prompt",
    "$ionicScrollDelegate",
    "activateAccount",
    "requestTF",
    "$openResource",
    function ($state, $class, $rootScope, requestP, $ionicPopover, $window, $interval, $location, $timeout, $scope, $stateParams, $filter, $user, request, $request, $Class, $prompt, $ionicScrollDelegate, activateAccount, requestTF, $openResource) {
        $scope.sliderIndex = 0;
        $scope.mingshiStatus = {};
        $scope.showCardApprove = !!$user.user.info.parentAppJump;
        $scope.Math = Math;
        var slideInter;
        $scope.$on("$destroy", function () {
            $interval.cancel(slideInter);
        });
        function start() {
            $scope.ketangLine = { labels: [], data: [] };
            //知识统计，作业提交，课堂活跃度，
            $scope.knowledge = {};
            $scope.homework = {};
            $scope.ketang = {};
            $scope.isShow = { class: false, subject: false, date: false };
            if (!$user.user.childS.ktinfo.ssk) {
                requestP.jsonp("user/GetKtUserInfoBySSK", { ssk: $user.user.childS.ssk }, function (data) {
                    if (data.data) {
                        if (!data.data.uid) {
                            $user.user.childS.ktinfo.dataIsError = 424;
                            $user.user.childS.ktinfo.msgData = {
                                msg: "孩子信息获取失败,请联系客服人员",
                            };
                            $prompt.loading.hide();
                            return;
                        }
                        $user.user.childS.ktinfo = data.data;
                        if (data.data.isNeedActive == 0) {
                            data.data.activeStatus = 1;
                        }
                        $class.friends[$user.user.childS.ktinfo.uid] = data.data;
                        $user.user.childS.ktInfoLoaded = true;
                        $user.saveUser();
                        resetHost(data.data.host);
                        //检测是否需要提示激活孩子
                        if (activateAccount.needActivate($user.user.childS)) {
                            activateAccount.showActivate({
                                info: $user.user.childS,
                                index: $user.user.info.childIndex,
                            });
                        }
                    }
                    $prompt.loading.hide();
                }, function (err) {
                    $prompt.loading.hide();
                    if (err.status == 424) {
                        $user.user.childS.ktinfo.dataIsError = 424;
                        $user.user.childS.ktinfo.msgData = err;
                        return;
                    }
                    $prompt.showTip(err.msg);
                }, { retryCount: 4, retryInterval: 3000 });
            }
            else {
                resetHost($user.user.childS.ktinfo.host);
                //检测是否需要提示激活孩子
                if (activateAccount.needActivate($user.user.childS)) {
                    activateAccount.showActivate({
                        info: $user.user.childS,
                        index: $user.user.info.childIndex,
                    });
                }
            }
        }
        $scope.$on("enter.home", function () {
            start();
        });
        start();
        function resetHost(host) {
            appConf.resetAppHost(host);
            $rootScope.$broadcast("changeHost");
            $timeout(function () {
                initData();
            }, 100);
        }
        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            data.slider.slideTo($scope.sliderIndex, 0);
            $scope.slider = data.slider;
            $scope.slider.startAutoplay();
        });
        $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
            $scope.sliderIndex = data.slider.activeIndex;
        });
        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            // note: the indexes are 0-based
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });
        $scope.goCardApprove = function () {
            console.log("goCardApprove");
            $state.go("main.commonIframe", {
                url: $user.user.info.parentAppJump,
                title: "家长端",
            });
        };
        function initData() {
            //轮播图
            $scope.options = {
                loop: false,
                effect: "fade",
                speed: 500,
                autoplay: 2000,
            };
            requestTF.jsonp("user/getServiceStatus", {
                serviceID: 35,
            }, function (data) {
                if (data.status == 0) {
                    $scope.mingshiStatus = data.data;
                }
                else {
                    $prompt.showTip(data.msg);
                }
            }, function (err) {
                $prompt.showTip(err.msg);
            });
            $stateParams.uid = eval($stateParams.uid);
            $scope.title =
                ($stateParams.name && $stateParams.name != "null"
                    ? $stateParams.name + "-"
                    : "") + "学情跟踪";
            $scope.knowledgeLine = {
                labels: [],
                data: [],
                option: { scaleLabel: "<%=value%>%" },
            };
            $scope.homeworkDoughnut = {
                labels: [null, null],
                data: [],
                option: { segmentStrokeWidth: 0, segmentStrokeColor: "rgba(0,0,0,0)" },
            };
            function hideFilter() {
                $scope.filterPopover && $scope.filterPopover.remove();
            }
            $scope.showFilter = function ($event) {
                $scope.filterPopover = $ionicPopover.fromTemplate('<span class="platform-ios wq-filter">\n' +
                    '    <ion-popover-view class="bc-main-i c-fff" style="width: 100px">\n' +
                    "        <ul>\n" +
                    '            <li ng-repeat="item in classList" class="lh30 tc f14 hidden ws-no to-ellipsis" ng-class="{\'bt1-eee\': $index}"\n' +
                    '                ng-click="choiceClass(item.id, item.name)">\n' +
                    "                <span>{{item.name}}</span>\n" +
                    "            </li>\n" +
                    "        </ul>\n" +
                    "    </ion-popover-view>\n" +
                    "</span>", {
                    scope: $scope,
                });
                $scope.filterPopover.show($event);
            };
            $scope.jumpToPhotoList = function () {
                $state.go("main.classAlbumTab", { classID: $scope.currentClass.id });
            };
            $scope.openImgList = function (item, index, title) {
                if (item.activityTypeID == 106) {
                    var tmpArray = [];
                    var imgCount = item.resource.length > 4 ? 4 : item.resource.length;
                    for (var i = 0; i < imgCount; i++) {
                        tmpArray.push(item.resource[i].url);
                    }
                    $openResource({
                        url: tmpArray,
                        title: title,
                        size: imgCount,
                        scope: $scope,
                        itype: "pictures",
                        index: index,
                    });
                }
            };
            $scope.jump = function (item) {
                console.log("详情内容" + JSON.stringify(item));
                if (item.activityTypeID == 106) {
                    if (item.class.length == 0) {
                        return;
                    }
                    $state.go("main.classPhotoList", {
                        albumID: item.resourceID,
                    });
                }
            };
            $scope.systemList = [];
            $scope.pointData = {};
            $scope.goMessage = function () {
                $state.go('main.systemMessage');
            };
            function getNewsList(isRead) {
                request.jsonp("news/listMsg", {
                    _host: appConf.XTDA_HOST,
                    catalogID: 1,
                    start: 0,
                    len: 8,
                    ssk: angular.services.ssk,
                    isRead: isRead,
                    totalInt: 1,
                }, function (data) {
                    $scope.systemList = data.data.list;
                    $scope.unreadCount = data.data.total;
                    if (!slideInter) {
                        $scope.systemList[$scope.systemList.length] = angular.extend({}, $scope.systemList[0]);
                        var scrollPo = 0, index = 0;
                        slideInter = $interval(function () {
                            if ($location.path() != "/main/home" ||
                                $scope.tab ||
                                $scope.systemList.length < 3)
                                return;
                            var scroll = $ionicScrollDelegate.$getByHandle("scrollMessage");
                            scroll.scrollTo(0, (scrollPo += $("#systemMessage0").height()), true);
                            index++;
                            $timeout(function () {
                                if (index >= $scope.systemList.length) {
                                    scrollPo = 0;
                                    index = 0;
                                    scroll.scrollTop(false);
                                }
                            }, 1000);
                        }, 5000);
                    }
                }, function (error) {
                    $user.user.childS.ktinfo.dataIsError = true;
                    $prompt.showTip(error.msg);
                }, { retryCount: 2, retryInterval: 3000 });
                // $request.jsonp('wrong/getWrongInt', {}, function (data) {
                //     $scope.pointData.wrong = data.data.unreview;
                // });
                //
                // $request.jsonp('wrong/getWrongInt', {}, function (data) {
                //     $scope.pointData.unreview = data.data.unreview;
                // });
                $request.jsonp("stuhomework/termUnFinishNums", { _host: appConf.KT3_HOST }, function (data) {
                    $scope.pointData.homework = data.unFinish;
                }, null, { retryCount: 2, retryInterval: 3000 });
                $request.jsonp("stuScanExam/todayScanExamTaskNum", { _host: appConf.CP_HOST, type: 6 }, function (data) {
                    $scope.pointData.classRe = data.data.total;
                }, null, { retryCount: 2, retryInterval: 3000 });
                request.jsonp("exam/StatisticsExaminationBasedOnStatus", {
                    _host: appConf.TMS_HOST,
                }, function (data) {
                    $scope.pointData.exam = data.data[1].total;
                }, null, { retryCount: 2, retryInterval: 3000 });
                $request.jsonp("stuhomework/unFinishNums", { _host: appConf.KT3_HOST, type: 6 }, function (data) {
                    $scope.pointData.KZunFinish = data.unFinish;
                }, null, { retryCount: 2, retryInterval: 3000 });
            }
            getNewsList(0);
            /**
             * 设置线形图宽度
             */
            var chartOption = {
                maintainAspectRatio: false,
                lineTension: 0,
                tooltipFontSize: 12,
                isUseToolTip: true,
                scaleShowLabels: false,
                tooltipAnimation: true,
            };
            $scope.hiddenWrapperO = {
                maintainAspectRatio: false,
                animation: false,
                onAnimationComplete: function () {
                    var $chart = $(this.chart.canvas), offsetLeft = parseInt(this.scale.xScalePaddingLeft - 5 + ""), $hiddenWrapper = $chart.parents(".hiddenWrapper"), $chartArea = $hiddenWrapper
                        .parents(".chartWrapper")
                        .find(".chartAreaWrapper");
                    $hiddenWrapper[0].style.height = this.scale.endPoint + 5 + "px";
                    $hiddenWrapper[0].style.width = offsetLeft + "px";
                    $chartArea[0].style.left = offsetLeft + "px";
                },
            };
            function setChartWidth(index) {
                var classId = $scope.currentClass.id;
                var subId = $scope.currentSubject.id;
                var date = $scope.currentDate.date;
                var perWidth = ($window.screen.availWidth - 70) / 7;
                try {
                    if (index == 0) {
                        $scope.knowledgeLine.width =
                            $scope.knowledge[classId][subId][date].labels.length * perWidth;
                        $scope.knowledgeLine.option = angular.extend({
                            tooltipTemplate: function (valObj) {
                                try {
                                    var pointD = $scope.knowledge[classId][subId][date], item = pointD.items[valObj.index];
                                    var _from = item.type == 1
                                        ? "作业"
                                        : item.type == 2
                                            ? "堂练"
                                            : item.type == 3
                                                ? "班级测试"
                                                : item.type == 4
                                                    ? "考试"
                                                    : item.type == 5
                                                        ? "课程任务"
                                                        : "未知";
                                    return item.title
                                        ? item.title +
                                            "," +
                                            $user.user.childS.uname +
                                            "的得分率：" +
                                            parseInt(item.scoreRate || 0) +
                                            "%,班级平均得分率：" +
                                            parseInt(item.scoreRateAvg || 0) +
                                            "%,来源类型：" +
                                            _from +
                                            ",时间：" +
                                            valObj.label
                                        : null;
                                }
                                catch (e) {
                                    console.log(e);
                                }
                            },
                        }, chartOption);
                        $scope.knowledgeLine.labels =
                            $scope.knowledge[classId][subId][date].labels;
                        $scope.knowledgeLine.data =
                            $scope.knowledge[classId][subId][date].data;
                        $scope.knowledgeLine.dataH =
                            $scope.knowledge[classId][subId][date].dataH;
                        $scope.knowledgeLine.data.lineTension = 0;
                    }
                    else if (index == 2) {
                        $scope.ketangLine.width =
                            $scope.ketang[classId][subId][date].chart.labels.length *
                                perWidth;
                        $scope.ketangLine.option = angular.extend({
                            tooltipTemplate: function (valObj) {
                                try {
                                    var pointD = $scope.ketang[classId][subId][date].chart, _index = valObj.index;
                                    return valObj.value != null
                                        ? valObj.label +
                                            "," +
                                            $user.user.childS.uname +
                                            "的积分：" +
                                            pointD.data[0][_index] +
                                            ",班级平均积分：" +
                                            pointD.data[1][_index]
                                        : null;
                                }
                                catch (e) {
                                    console.log(e);
                                }
                            },
                        }, chartOption);
                        $scope.ketangLine.labels =
                            $scope.ketang[classId][subId][date].chart.labels;
                        $scope.ketangLine.data =
                            $scope.ketang[classId][subId][date].chart.data;
                        $scope.ketangLine.dataH =
                            $scope.ketang[classId][subId][date].chart.dataH;
                    }
                }
                catch (e) { }
            }
            //横栏测试数据
            function getAllSituation() {
                $request.jsonp("stu/situation", { _host: appConf.TRACE3_HOST }, function (data) {
                    $scope.situationData = data.data;
                }, function (err) {
                    $prompt.showTip(err.msg);
                }, { retryCount: 2, retryInterval: 3000 });
            }
            var daySeconds = 24 * 3600 * 1000;
            function initStudentData() {
                function getSchoolMsgCount() {
                    $scope.schoolMsgCount = 0;
                    $request.jsonp("message/homePage", {
                        ssk: angular.services.ssk,
                        _host: appConf.XTDA_HOST,
                    }, function (data) {
                        if (data.data.appraise)
                            $scope.schoolMsgCount += data.data.appraise.unreadCount;
                        if (data.data.classMsg)
                            $scope.schoolMsgCount += data.data.classMsg.unconfirmedCount;
                    }, function (error) {
                        $prompt.showTip(error.msg);
                    }, { retryCount: 2, retryInterval: 3000 });
                    request.jsonp("chatMessage/dialogueList", { letterType: 1, start: 0, len: 0, _host: appConf.XTDA_HOST }, function (data) {
                        $scope.schoolMsgCount += parseInt(data.data.unreadTotal);
                    }, function () { }, { retryCount: 2, retryInterval: 3000 });
                }
                getSchoolMsgCount();
                getAllSituation();
                getDateList();
                getClassList();
                // $scope.$on('enter.home', function () {
                // getAllSituation();
                // getDateList();
                // getClassList();
                // getSchoolMsgCount();
                // getNewsList(0);
                // });
                function getDateList() {
                    var dateList = [];
                    var now = new Date();
                    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
                    dateList.push({ name: "今天", date: today });
                    dateList.push({ name: "昨天", date: today - daySeconds });
                    dateList.push({ name: "最近7天", date: today - 7 * daySeconds });
                    dateList.push({ name: "最近14天", date: today - 14 * daySeconds });
                    dateList.push({ name: "最近30天", date: today - 30 * daySeconds });
                    $scope.dateList = dateList;
                }
                function getClassList() {
                    $Class.getList(2, function (list) {
                        $scope.classList = list;
                        $Class.getAllSubject(function (data) {
                            angular.forEach(data.data.list, function (item) {
                                if (item.schoolType == $user.user.childS.schoolTypeID) {
                                    $scope.subjectList = item.subject;
                                }
                            });
                            success();
                        }, function (error) {
                            $scope.dataError = true;
                            $prompt.showTip(error.msg);
                        });
                    }, function () {
                        $scope.dataError = true;
                    }, $stateParams.uid);
                }
                function success() {
                    if ($scope.classList && $scope.subjectList) {
                        $scope.isLoaded = true;
                        if (!$scope.classList[0])
                            return;
                        var classId = $scope.classList[0].id, subId = $scope.subjectList[0].id, date = $scope.dateList[2].date;
                        $scope.currentClass = {
                            id: classId,
                            name: $scope.classList[0].name,
                        };
                        $scope.currentSubject = {
                            id: subId,
                            name: $scope.subjectList[0].title,
                        };
                        $scope.currentDate = {
                            date: date,
                            name: $scope.dateList[2].name,
                        };
                        $scope.loadIndex = 0;
                        getActivityLog();
                    }
                }
            }
            initStudentData();
            $scope.tab = 0;
            $scope.choiceTab = function (tab) {
                $scope.tab = tab;
            };
            $scope.toggleChoice = function (type) {
                $scope.isShow.class = type == 0 ? !$scope.isShow.class : false;
                $scope.isShow.subject = type == 1 ? !$scope.isShow.subject : false;
                $scope.isShow.date = type == 2 ? !$scope.isShow.date : false;
            };
            $scope.choiceClass = function (id, name) {
                hideFilter();
                $scope.toggleChoice(0);
                $scope.currentClass = { id: id, name: name };
                $scope.loadIndex = 0;
            };
            $scope.choiceSubject = function (id, name) {
                $scope.toggleChoice(1);
                $scope.currentSubject = { id: id, name: name };
                $scope.loadIndex = 0;
            };
            $scope.choiceDate = function (date, name) {
                var endDate, now = new Date();
                $scope.toggleChoice(2);
                $scope.currentDate = { date: date, name: name };
                if (name == "昨天")
                    endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
                getData(endDate);
            };
            $scope.toStudyReport = function () {
                if ($scope.mingshiStatus.status == 1) {
                    $state.go("main.learningRecord", { uid: $user.user.childS.uid });
                }
                else {
                    $state.go("main.buyIntroduce365");
                }
            };
            $scope.toFamousTeacher = function () {
                $state.go("main.famousTeacher");
            };
            function getData(endDate) {
                var classId = $scope.currentClass.id;
                var subId = $scope.currentSubject.id;
                var date = $scope.currentDate.date;
                switch ($scope.loadIndex) {
                    case 0:
                        getExerciseRecord(classId, subId, date, endDate);
                        break;
                    case 1:
                        getHomeworkInfo(classId, subId, date);
                        break;
                    case 2:
                        getInclassSituation(classId, subId, date);
                        break;
                }
            }
            $scope.loadData = getData;
            $scope.dynamicList = [];
            $scope.activityType = {
                101: "发布备课案",
                102: "发布作业",
                103: "上传资源",
                104: "发布考试",
                105: "发布主题讨论",
                106: "上传照片到",
                107: "发布光荣榜",
                108: "发布作品展",
                109: "资源分享",
                110: "开始上课",
                111: "发布班测",
                112: "发布班级通知",
                113: "发布任务",
            };
            //获取练习记录
            function getExerciseRecord(classId, subId, date, endDate) {
                if (!$scope.knowledge[classId]) {
                    $scope.knowledge[classId] = {};
                    $scope.knowledge[classId][subId] = {};
                    $scope.knowledge[classId][subId][date] = {
                        isLoad: false,
                        dataNone: false,
                    };
                }
                else {
                    if (!$scope.knowledge[classId][subId]) {
                        $scope.knowledge[classId][subId] = {};
                        $scope.knowledge[classId][subId][date] = {
                            isLoad: false,
                            dataNone: false,
                        };
                    }
                }
                $request.jsonp("stuExercise/getRecord", {
                    _host: appConf.TRACE3_HOST,
                    uid: $user.user.childS.ktinfo.uid,
                    classID: classId,
                    subjectID: subId,
                    begin: date,
                    end: endDate || new Date().getTime(),
                }, function (data) {
                    $scope.knowledge[classId][subId][date].isLoad = true;
                    var labels = [], values = [], classValues = [];
                    var theDate = new Date().getTime();
                    var scoreRateAvg = 0;
                    var wrongTotal = 0;
                    var testTime = 0;
                    data.data.records.forEach(function (val) {
                        scoreRateAvg += val.scoreRate * 1;
                        wrongTotal += val.wrongTotal * 1;
                        if (val.answerExamID)
                            testTime++;
                    });
                    scoreRateAvg = scoreRateAvg / data.data.records.length;
                    if (data.data.records && data.data.records.length > 0) {
                        data.data.records = $filter("orderBy")(data.data.records, "date");
                        if (data.data.records.length < 7) {
                            var toTheEnd;
                            for (var lIndex = 0; data.data.records.length < 7; lIndex++) {
                                var end = data.data.records[data.data.records.length - 1].date;
                                var start = data.data.records[0].date;
                                if (end + daySeconds < theDate)
                                    data.data.records.push({
                                        scoreRateAvg: null,
                                        studentTotal: null,
                                        date: end + daySeconds,
                                        scoreRate: null,
                                    });
                                else
                                    data.data.records.unshift({
                                        scoreRateAvg: null,
                                        studentTotal: null,
                                        date: start - daySeconds,
                                        scoreRate: null,
                                    });
                            }
                        }
                        angular.forEach(data.data.records, function (item) {
                            labels.push($filter("lineDate")(item.date, date));
                            values.push(item.scoreRate);
                            classValues.push(item.scoreRateAvg);
                        });
                        $scope.knowledge[classId][subId][date].data = [
                            values,
                            classValues,
                        ];
                        $scope.knowledge[classId][subId][date].dataH = [
                            values,
                            classValues,
                        ];
                        $scope.knowledge[classId][subId][date].items = data.data.records;
                    }
                    else {
                        if (!labels.length) {
                            $scope.knowledge[classId][subId][date].data = [[null]];
                            $scope.knowledge[classId][subId][date].dataH = [
                                [0, 20, 40, 60, 80, 100],
                            ];
                            for (var lIndex = 0; lIndex < 7; lIndex++)
                                labels.push($filter("lineDate")(theDate - daySeconds * (7 - lIndex), date));
                        }
                    }
                    $scope.knowledge[classId][subId][date].scoreRateAvg = parseInt(scoreRateAvg + "");
                    $scope.knowledge[classId][subId][date].wrongTotal = wrongTotal;
                    $scope.knowledge[classId][subId][date].testTime = testTime;
                    $scope.knowledge[classId][subId][date].labels = labels;
                    setChartWidth(0);
                    $scope.loadIndex++;
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                }, function (error) {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                }, { retryCount: 2, retryInterval: 3000 });
            }
            //获取提交作业信息
            function getHomeworkInfo(classId, subId, date) {
                if (!$scope.homework[classId]) {
                    $scope.homework[classId] = {};
                    $scope.homework[classId][subId] = {};
                    $scope.homework[classId][subId][date] = { isLoad: false };
                }
                else {
                    if (!$scope.homework[classId][subId]) {
                        $scope.homework[classId][subId] = {};
                        $scope.homework[classId][subId][date] = { isLoad: false };
                    }
                    else {
                        if (!$scope.homework[classId][subId][date]) {
                            $scope.homework[classId][subId][date] = { isLoad: false };
                        }
                    }
                }
                $request.jsonp("stuHomework/submitSituation", {
                    _host: appConf.TRACE3_HOST,
                    uid: $user.user.childS.ktinfo.uid,
                    classID: classId,
                    subjectID: subId,
                    begin: date,
                    end: new Date().getTime(),
                }, function (data) {
                    $scope.homework[classId][subId][date].isLoad = true;
                    if (data.data) {
                        $scope.homework[classId][subId][date].submitIntime =
                            data.data.submitIntime;
                        $scope.homework[classId][subId][date].submitOvertime =
                            data.data.submitOvertime;
                        $scope.homework[classId][subId][date].unSubmit =
                            data.data.unSubmit;
                        $scope.homework[classId][subId][date].total =
                            data.data.submitIntime +
                                data.data.unSubmit +
                                data.data.submitOvertime;
                        $scope.homeworkDoughnut.data = [
                            data.data.submitIntime,
                            data.data.submitIntime
                                ? data.data.submitOvertime + data.data.unSubmit
                                : 1,
                        ];
                    }
                    $scope.loadIndex++;
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                }, function (error) {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                }, { retryCount: 2, retryInterval: 3000 });
            }
            //获取课堂活跃度信息
            function getInclassSituation(classId, subId, date) {
                if (!$scope.ketang[classId]) {
                    $scope.ketang[classId] = {};
                    $scope.ketang[classId][subId] = {};
                    $scope.ketang[classId][subId][date] = {
                        situation: { isLoad: false },
                        chart: { isLoad: false, dataNone: false },
                    };
                }
                else {
                    if (!$scope.ketang[classId][subId]) {
                        $scope.ketang[classId][subId] = {};
                        $scope.ketang[classId][subId][date] = {
                            situation: { isLoad: false },
                            chart: { isLoad: false, dataNone: false },
                        };
                    }
                    else {
                        if (!$scope.ketang[classId][subId][date]) {
                            $scope.ketang[classId][subId][date] = {
                                situation: { isLoad: false },
                                chart: { isLoad: false, dataNone: false },
                            };
                        }
                    }
                }
                getSituation();
                function getSituation() {
                    $request.jsonp("stuInclass/situation", {
                        _host: appConf.TRACE3_HOST,
                        uid: $user.user.childS.ktinfo.uid,
                        classID: classId,
                        subjectID: subId,
                        begin: date,
                        end: new Date().getTime(),
                    }, function (data) {
                        try {
                            $scope.ketang[classId][subId][date].situation.isLoad = true;
                            if (data.data) {
                                $scope.ketang[classId][subId][date].situation.info =
                                    data.data;
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        getScoreRecord();
                    }, function (error) {
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    }, { retryCount: 2, retryInterval: 3000 });
                }
                function getScoreRecord() {
                    $request.jsonp("stuInclass/scoreByDay", {
                        _host: appConf.TRACE3_HOST,
                        uid: $user.user.childS.ktinfo.uid,
                        classID: classId,
                        subjectID: subId,
                        begin: date,
                        end: new Date().getTime(),
                    }, function (data) {
                        var theDate = new Date().getTime();
                        try {
                            $scope.ketang[classId][subId][date].chart.isLoad = true;
                            var labels = [], values = [], classValues = [];
                            if (data.data.record) {
                                //重组数据和添加空数据
                                if (length < 7) {
                                    var toTheEnd;
                                    var keys = Object.keys(data.data.record);
                                    var end = parseInt(keys[keys.length - 1]);
                                    var start = parseInt(keys[0]);
                                    for (var lIndex = keys.length; lIndex < 7; lIndex++) {
                                        if (end + daySeconds < theDate) {
                                            end += daySeconds;
                                            data.data.record[end] = {};
                                        }
                                        else {
                                            start -= daySeconds;
                                            data.data.record[start] = {};
                                        }
                                    }
                                }
                                keys = [];
                                angular.forEach(data.data.record, function (item, key) {
                                    item.date = key;
                                    keys.push(item);
                                });
                                data.data.record = $filter("orderBy")(keys, "date");
                                data.data.record.forEach(function (item) {
                                    labels.push($filter("lineDate")(item.date, date));
                                    values.push(item.myScore != undefined ? item.myScore : null);
                                    classValues.push(item.classScoreAvg != undefined ? item.classScoreAvg : null);
                                });
                                $scope.ketang[classId][subId][date].chart.data = [
                                    values,
                                    classValues,
                                ];
                                $scope.ketang[classId][subId][date].chart.dataH = [
                                    values,
                                    classValues,
                                ];
                            }
                            else {
                                for (var lIndex = 0; lIndex < 7; lIndex++)
                                    labels.push($filter("lineDate")(theDate - daySeconds * (7 - lIndex), date));
                                $scope.ketang[classId][subId][date].chart.data = [[null]];
                                $scope.ketang[classId][subId][date].chart.dataH = [
                                    [0, 2, 4, 6, 8, 10],
                                ];
                            }
                            $scope.ketang[classId][subId][date].chart.labels = labels;
                            setChartWidth(2);
                            $scope.loadIndex++;
                        }
                        catch (e) {
                            console.log(e);
                        }
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    }, function (error) {
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    }, { retryCount: 2, retryInterval: 3000 });
                }
            }
            $scope.report = {};
            function getReportUnread() {
                request.jsonp("study/countStudentReportUnread", {}, function (result) {
                    $scope.report = result.data;
                }, function (err) {
                    $prompt.showTip(err.msg);
                });
            }
            getReportUnread();
            function getActivityLog() {
                $request.jsonp("dynamic/GetActivityLog", {
                    _host: appConf.RRT_HOST,
                    readTypeID: 2,
                    start: $scope.dynamicList.length,
                    hasAlbum: 1,
                    len: 1,
                    classID: $scope.currentClass.id,
                }, function (data) {
                    $scope.dynamicList = $scope.dynamicList.concat(data.data.list);
                    if (data.data.list.length < 10)
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    if ($scope.dynamicList.length > 0) {
                        $scope.hideDynamicList = false;
                    }
                }, function (err) {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
            }
        }
    },
]);
