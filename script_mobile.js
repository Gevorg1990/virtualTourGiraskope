(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"height":"100%","start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_11A96FCE_1FC8_2725_4199_D47672192639_mobile], 'cardboardAvailable')","data":{"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","name":"Player2679","textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1,"speechOnTooltip":false}},"children":["this.MainViewer_mobile","this.Container_11076073_1FD8_79E2_4173_9DA6967D6750_mobile","this.IconButton_11A96FCE_1FC8_2725_4199_D47672192639_mobile"],"hash": "49f1f2b5e94b27c49f0c32fd9b2984cf3e87b836c7d5950732a44d21f6654984", "definitions": [{"width":"33.125%","backgroundOpacity":0.3,"height":"19.844%","children":["this.Image_0C3E61A9_1E58_DB6F_4198_2ACBB8FF79F9"],"data":{"name":"Container6208"},"backgroundColorRatios":[0,1],"minHeight":10,"minWidth":10,"backgroundColor":["#FFFFFF","#FFFFFF"],"scrollBarColor":"#000000","gap":5,"overflow":"scroll","top":"9.27%","propagateClick":false,"class":"Container","scrollBarMargin":1,"scrollBarWidth":5,"left":"4.42%","layout":"absolute","id":"Container_11076073_1FD8_79E2_4173_9DA6967D6750_mobile"},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_10638595_1DC8_3B27_41B8_188A40BF80A3_camera","media":"this.panorama_10638595_1DC8_3B27_41B8_188A40BF80A3"}],"class":"PlayList"},{"hfovMin":"150%","thumbnailUrl":"media/panorama_10638595_1DC8_3B27_41B8_188A40BF80A3_t.jpg","label":trans('panorama_10638595_1DC8_3B27_41B8_188A40BF80A3.label'),"class":"Panorama","data":{"label":"Insta360-X3-13"},"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_10638595_1DC8_3B27_41B8_188A40BF80A3_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":1,"height":512,"width":3072,"colCount":6,"url":"media/panorama_10638595_1DC8_3B27_41B8_188A40BF80A3_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]}}],"vfov":164.1,"id":"panorama_10638595_1DC8_3B27_41B8_188A40BF80A3","hfov":360},{"backgroundOpacity":0,"maxHeight":21,"right":"14.28%","maxWidth":21,"data":{"name":"IconButton15824"},"minHeight":1,"minWidth":1,"top":"5.66%","propagateClick":false,"width":21,"interactionEnabled":false,"horizontalAlign":"center","verticalAlign":"middle","class":"IconButton","height":21,"iconURL":"skin/IconButton_11A96FCE_1FC8_2725_4199_D47672192639.png","id":"IconButton_11A96FCE_1FC8_2725_4199_D47672192639_mobile"},{"id":"MainViewer_mobile","playbackBarHeadBorderSize":0,"progressBorderSize":0,"data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","playbackBarProgressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"minHeight":25,"playbackBarBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"minWidth":50,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":3,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBackgroundColor":["#000000"],"subtitlesTop":0,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","playbackBarRight":0,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderRadius":0,"propagateClick":false,"progressBarBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","width":"100%","height":"100%","vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderColor":"#000000","toolTipShadowBlurRadius":1,"subtitlesGap":0,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"toolTipBorderRadius":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesTextShadowOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipPaddingRight":3,"top":0,"progressRight":"33%","progressBarBorderSize":0,"progressBarBorderRadius":2,"progressOpacity":0.7,"toolTipShadowColor":"#333138","playbackBarLeft":0,"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"toolTipBorderColor":"#767676","toolTipTextShadowBlurRadius":1,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","subtitlesBottom":50,"progressHeight":2,"vrPointerSelectionTime":2000,"playbackBarHeadWidth":6,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeight":10,"progressBottom":10,"left":0,"playbackBarHeadBackgroundColorRatios":[0,1]},{"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","mode":"quality","touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewer_mobilePanoramaPlayer","buttonCardboardView":"this.IconButton_11A96FCE_1FC8_2725_4199_D47672192639_mobile"},{"backgroundOpacity":0,"height":"100%","id":"Image_0C3E61A9_1E58_DB6F_4198_2ACBB8FF79F9","data":{"name":"Image9084"},"url":trans('Image_0C3E61A9_1E58_DB6F_4198_2ACBB8FF79F9.url'),"minHeight":1,"minWidth":1,"scaleMode":"fit_inside","top":"0%","propagateClick":false,"class":"Image","horizontalAlign":"center","verticalAlign":"middle","width":"100%","left":"0%"},{"class":"PanoramaCamera","id":"panorama_10638595_1DC8_3B27_41B8_188A40BF80A3_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_11B47CAA_1DC8_296D_417A_85D484E55A14","enterPointingToHorizon":true},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_11B47CAA_1DC8_296D_417A_85D484E55A14"}],"backgroundColorRatios":[0],"layout":"absolute","minHeight":0,"scripts":{"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPixels":TDV.Tour.Script.getPixels,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"downloadFile":TDV.Tour.Script.downloadFile,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isPanorama":TDV.Tour.Script.isPanorama,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"registerKey":TDV.Tour.Script.registerKey,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"init":TDV.Tour.Script.init,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showWindow":TDV.Tour.Script.showWindow,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"setLocale":TDV.Tour.Script.setLocale,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"translate":TDV.Tour.Script.translate,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"clone":TDV.Tour.Script.clone,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"historyGoForward":TDV.Tour.Script.historyGoForward,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"mixObject":TDV.Tour.Script.mixObject,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startMeasurement":TDV.Tour.Script.startMeasurement,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"createTween":TDV.Tour.Script.createTween},"minWidth":0,"backgroundColor":["#330066"],"scrollBarColor":"#000000","gap":10,"propagateClick":false,"class":"Player","scrollBarMargin":2,"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.24.js.map
})();
//Generated with v2022.2.24, Sun Mar 26 2023