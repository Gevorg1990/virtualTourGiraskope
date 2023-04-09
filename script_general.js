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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"start":"this.playAudioList([this.audio_526A0B6A_47AA_F7AE_41B5_223CB5AC9E41, this.audio_5288F0AB_479E_F2AC_41BF_33C985C063B6], true); this.init(); this._initTTSTooltips()","data":{"name":"Player796","locales":{"am":"locale/am.txt","en":"locale/en.txt","es":"locale/es.txt","ru":"locale/ru.txt"},"defaultLocale":"es","history":{},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"rate":1.8,"speechOnInfoWindow":true,"stopBackgroundAudio":true,"speechOnTooltip":true,"pitch":1.45}},"propagateClick":false,"scrollBarMargin":2,"hash": "584bc8c31449f5e50efb2b6fafe96085caf734934aaaf185d1b4a50ce1773a3c", "definitions": [{"id":"Image_4F573DA1_429B_135D_41B3_256004B7B359","propagateClick":false,"scaleMode":"fit_inside","url":trans('Image_4F573DA1_429B_135D_41B3_256004B7B359.url'),"data":{"name":"Image3133"},"backgroundOpacity":0,"verticalAlign":"middle","top":"88.57%","bottom":"2.23%","class":"Image","width":"5.025%","cursor":"hand","minHeight":1,"click":"this.openLink(this.translate('LinkBehaviour_4D8D5E25_42EB_71A5_41C9_F3CE6B145AF0.source'), '_blank')","minWidth":1,"left":"1.33%","horizontalAlign":"center"},{"id":"audio_53D29D1B_47E9_136E_41A3_A381C2A5A90E","class":"MediaAudio","autoplay":true,"data":{"label":"4"},"audio":"this.audiores_52773C90_47EB_F17B_41A6_8667BF9B9BD6"},{"id":"panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F","label":trans('panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F.label'),"class":"Panorama","thumbnailUrl":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_t.jpg","data":{"label":"alex-bdnr-GNNoZa8zVwY-unsplash"},"hfovMax":130,"vfov":128.07,"overlays":["this.overlay_53A70BAA_42FB_36AF_41C5_19D7ABADCDA1","this.overlay_532E96BF_47A6_FEA5_41CE_64AC492EF9DA","this.panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_tcap0","this.overlay_6BFDACD1_657B_CDC7_41CC_D922C4730AAA"],"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE","distance":100,"select":"this.overlay_53A70BAA_42FB_36AF_41C5_19D7ABADCDA1.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","yaw":41.64,"data":{"overlayID":"overlay_53A70BAA_42FB_36AF_41C5_19D7ABADCDA1"}}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":2560,"colCount":30,"rowCount":5,"class":"TiledImageResourceLevel","url":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_0/{face}/0/{row}_{column}.jpg","width":15360},{"tags":"ondemand","height":1536,"colCount":18,"rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_0/{face}/1/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_0/{face}/2/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_0/{face}/3/{row}_{column}.jpg","width":3072},{"tags":"mobilevr2gen","height":2048,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_0/{face}/vr2gen/0.jpg","width":12288}]}}],"hfovMin":"121%"},{"fontFamily":"Arial","id":"Label_565F6869_4379_11AD_41A8_B93D16DCED2A","fontSize":"1.48vmin","propagateClick":false,"fontColor":"#F33401","data":{"name":"Label21573"},"backgroundOpacity":0,"rollOver":"this.textToSpeechComponent(this.Label_565F6869_4379_11AD_41A8_B93D16DCED2A)","text":trans('Label_565F6869_4379_11AD_41A8_B93D16DCED2A.text'),"bottom":"19.83%","class":"Label","height":"4.292%","width":"8.237%","cursor":"hand","minHeight":16,"minWidth":30,"horizontalAlign":"center","left":"5.73%"},{"class":"PlayList","id":"mainPlayList","items":["this.PanoramaPlayListItem_74D31161_658A_54C7_41D7_A9AFB6ABC3EE","this.PanoramaPlayListItem_74D3815E_658A_54FD_41C3_7FD6018555E4"]},{"id":"IconButton_508AAB13_4369_177D_41A1_3FF2CA8531EE","propagateClick":false,"rollOverIconURL":"skin/IconButton_508AAB13_4369_177D_41A1_3FF2CA8531EE_rollover.png","data":{"name":"Button1162"},"iconURL":"skin/IconButton_508AAB13_4369_177D_41A1_3FF2CA8531EE.png","transparencyActive":true,"backgroundOpacity":0,"verticalAlign":"middle","bottom":"2%","pressedIconURL":"skin/IconButton_508AAB13_4369_177D_41A1_3FF2CA8531EE_pressed.png","class":"IconButton","width":67.2,"height":62.55,"minHeight":0,"click":"this.setLocale('ru')","minWidth":0,"horizontalAlign":"center","left":"6.79%"},{"id":"audio_526A0B6A_47AA_F7AE_41B5_223CB5AC9E41","class":"MediaAudio","autoplay":true,"data":{"label":"3"},"audio":"this.audiores_53801C4E_47A9_31E6_418C_FEA9BDA0E427"},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","mode":"quality","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","arrowKeysAction":"translate"},{"id":"MainViewer","progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesBottom":50,"progressBarBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"class":"ViewerArea","playbackBarBackgroundOpacity":1,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarRight":0,"playbackBarBorderSize":0,"progressBottom":10,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"progressHeight":2,"minHeight":50,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"progressBarBorderRadius":2,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarLeft":0,"minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBorderRadius":2,"width":"100%","propagateClick":false,"toolTipShadowColor":"#333138","playbackBarHeadShadow":true,"playbackBarHeight":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":"33%","playbackBarHeadHeight":15,"height":"100%","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","top":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipPaddingRight":6,"left":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingTop":4},{"id":"audio_5288F0AB_479E_F2AC_41BF_33C985C063B6","class":"MediaAudio","autoplay":true,"data":{"label":"4"},"audio":"this.audiores_53F162FA_4799_16AF_4198_D0621ED07D80"},{"id":"panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":-6.09},"class":"PanoramaCamera","initialSequence":"this.sequence_51A680EF_4299_12A5_41C6_76A84F5D0DFE","enterPointingToHorizon":true},{"id":"panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_50641B93_429B_377D_41C0_8B775BA1DDA0","enterPointingToHorizon":true},{"id":"panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE","label":trans('panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE.label'),"class":"Panorama","thumbnailUrl":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_t.jpg","data":{"label":"marc-markstein-if4wsNq145o-unsplash"},"hfovMax":130,"vfov":161.29,"overlays":["this.overlay_50B385D5_42E9_32E5_41CC_0DD568B8DC46"],"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":3584,"colCount":42,"rowCount":7,"class":"TiledImageResourceLevel","url":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_0/{face}/0/{row}_{column}.jpg","width":21504},{"tags":"ondemand","height":2048,"colCount":24,"rowCount":4,"class":"TiledImageResourceLevel","url":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_0/{face}/1/{row}_{column}.jpg","width":12288},{"tags":"ondemand","height":1024,"colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_0/{face}/2/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_0/{face}/3/{row}_{column}.jpg","width":3072},{"tags":"mobilevr2gen","height":2048,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_0/{face}/vr2gen/0.jpg","width":12288}]}}],"adjacentPanoramas":[{"panorama":"this.panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F","distance":14.39,"select":"this.overlay_50B385D5_42E9_32E5_41CC_0DD568B8DC46.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","yaw":-2.31,"data":{"overlayID":"overlay_50B385D5_42E9_32E5_41CC_0DD568B8DC46"}}]},{"class":"AudioResource","id":"audiores_52773C90_47EB_F17B_41A6_8667BF9B9BD6","mp3Url":trans('audiores_52773C90_47EB_F17B_41A6_8667BF9B9BD6.mp3Url')},{"id":"overlay_53A70BAA_42FB_36AF_41C5_19D7ABADCDA1","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_530A1C21_42FB_315A_41D0_AECE6F3D3100"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"data":{"label":"Circle 01c"},"class":"HotspotPanoramaOverlayImage","vfov":4.15,"scaleMode":"fit_inside","yaw":41.64,"image":"this.AnimatedImageResource_74AF6FD9_658A_4BC7_4188_C5B823217807","hfov":7.41,"pitch":0.01}],"maps":[],"data":{"label":"Circle 01c"}},{"id":"overlay_532E96BF_47A6_FEA5_41CE_64AC492EF9DA","enabled":false,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_53A3D7F5_47A6_FEA5_41CF_9F7D26DB7DFD"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_535716AD_47A6_FEA5_41D1_044D7134A775"],"maps":[],"data":{"label":"Text"}},{"id":"panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","inertia":true,"image":"this.res_43E5CB9E_4D42_30D4_41C0_1E7A613E650B","angle":-152,"hfov":55.5},{"id":"overlay_6BFDACD1_657B_CDC7_41CC_D922C4730AAA","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6B943DE5_657B_CFCF_41BA_144830F09073"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_6B095CBB_657B_CDBB_41C5_8269412EABC7"],"maps":[],"data":{"label":"Text"}},{"id":"PanoramaPlayListItem_74D31161_658A_54C7_41D7_A9AFB6ABC3EE","class":"PanoramaPlayListItem","camera":"this.panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4E40FD7D_4299_13AA_41C3_FC2E7B53A17F","begin":"this.executeFunctionWhenChange(this.mainPlayList, 0, function(){this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_74D31161_658A_54C7_41D7_A9AFB6ABC3EE, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV);this.mainPlayList.set('selectedIndex', 0)}); "},{"end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_74D3815E_658A_54FD_41C3_7FD6018555E4","class":"PanoramaPlayListItem","camera":"this.panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_5366B3DF_42F9_16E6_41B5_3C83AF3438CE","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"class":"AudioResource","id":"audiores_53801C4E_47A9_31E6_418C_FEA9BDA0E427","mp3Url":trans('audiores_53801C4E_47A9_31E6_418C_FEA9BDA0E427.mp3Url')},{"class":"AudioResource","id":"audiores_53F162FA_4799_16AF_4198_D0621ED07D80","mp3Url":trans('audiores_53F162FA_4799_16AF_4198_D0621ED07D80.mp3Url')},{"id":"sequence_51A680EF_4299_12A5_41C6_76A84F5D0DFE","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":360,"yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_50641B93_429B_377D_41C0_8B775BA1DDA0","movements":[{"easing":"cubic_in_out","pitchSpeed":29.82,"class":"TargetPanoramaCameraMovement","targetPitch":23.84,"targetYaw":-32.64,"yawSpeed":82.7},{"easing":"cubic_in_out","pitchSpeed":39.68,"hfovSpeed":110.65,"class":"TargetPanoramaCameraMovement","targetPitch":22.38,"targetHfov":24,"targetYaw":41.9,"yawSpeed":110.65},{"pitchSpeed":57.12,"hfovSpeed":160.1,"class":"TargetPanoramaCameraMovement","targetPitch":-0.33,"targetHfov":90,"targetYaw":0.25,"yawSpeed":160.1}]},{"id":"overlay_50B385D5_42E9_32E5_41CC_0DD568B8DC46","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_50BB85DE_42E9_32E7_41B9_CF2192AE7F4E"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"data":{"label":"Circle 01c"},"class":"HotspotPanoramaOverlayImage","vfov":2.72,"scaleMode":"fit_inside","yaw":-2.31,"image":"this.AnimatedImageResource_74AFEFDA_658A_4BC5_41D1_AEFC69EB4678","hfov":10.5,"pitch":-6.73}],"data":{"label":"Circle 01c","hasPanoramaAction":true},"maps":[]},{"id":"HotspotPanoramaOverlayArea_530A1C21_42FB_315A_41D0_AECE6F3D3100","mapColor":"any","rollOut":"this.setOverlaysVisibility([this.overlay_532E96BF_47A6_FEA5_41CE_64AC492EF9DA], false, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"rollOver":"this.setOverlaysVisibility([this.overlay_532E96BF_47A6_FEA5_41CE_64AC492EF9DA], true, 300)","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_74D3815E_658A_54FD_41C3_7FD6018555E4, -7.2, -0.4351521286316369, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_74AF6FD9_658A_4BC7_4188_C5B823217807","levels":[{"height":350,"class":"ImageResourceLevel","url":"media/res_50F42187_42F9_1366_4194_14F79300DB06_0.png","width":1080}],"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"rowCount":5,"colCount":4,"frameCount":20},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_53A3D7F5_47A6_FEA5_41CF_9F7D26DB7DFD","displayTooltipInTouchScreens":true,"mapColor":"any"},{"id":"HotspotPanoramaOverlayTextImage_535716AD_47A6_FEA5_41D1_044D7134A775","class":"HotspotPanoramaOverlayImage","vfov":4.26,"hfov":10.5,"data":{"label":"Text"},"distance":50,"rotationX":-19.4,"pitch":2.99,"yaw":41.6,"image":{"class":"ImageResource","levels":["this.imlevel_5250CF32_47B9_0FBF_41B8_1E40A93F17F1"]}},{"class":"ImageResource","id":"res_43E5CB9E_4D42_30D4_41C0_1E7A613E650B","levels":[{"height":400,"class":"ImageResourceLevel","url":"media/res_43E5CB9E_4D42_30D4_41C0_1E7A613E650B_0.png","width":400}]},{"id":"HotspotPanoramaOverlayArea_6B943DE5_657B_CFCF_41BA_144830F09073","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.pauseGlobalAudios(); this.MainViewerPanoramaPlayer.set('gyroscopeEnabled', !this.MainViewerPanoramaPlayer.get('gyroscopeEnabled'))"},{"id":"HotspotPanoramaOverlayTextImage_6B095CBB_657B_CDBB_41C5_8269412EABC7","class":"HotspotPanoramaOverlayImage","vfov":10.5,"hfov":10.5,"data":{"label":"Text"},"distance":50,"pitch":-14.8,"yaw":-3.28,"image":{"class":"ImageResource","levels":["this.imlevel_6A5B7240_657D_D4C5_419D_1DB8EB8F4AD2"]}},{"id":"HotspotPanoramaOverlayArea_50BB85DE_42E9_32E7_41B9_CF2192AE7F4E","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_74AFEFDA_658A_4BC5_41D1_AEFC69EB4678","levels":[{"height":350,"class":"ImageResourceLevel","url":"media/res_50F42187_42F9_1366_4194_14F79300DB06_0.png","width":1080}],"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"rowCount":5,"colCount":4,"frameCount":20},{"id":"imlevel_5250CF32_47B9_0FBF_41B8_1E40A93F17F1","height":170.84,"class":"ImageResourceLevel","url":trans('imlevel_5250CF32_47B9_0FBF_41B8_1E40A93F17F1.url'),"width":421.58},{"id":"imlevel_6A5B7240_657D_D4C5_419D_1DB8EB8F4AD2","height":421.58,"class":"ImageResourceLevel","url":trans('imlevel_6A5B7240_657D_D4C5_419D_1DB8EB8F4AD2.url'),"width":421.58}],"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","gap":10,"class":"Player","width":"100%","scripts":{"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"registerKey":TDV.Tour.Script.registerKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"createTween":TDV.Tour.Script.createTween,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"translate":TDV.Tour.Script.translate,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getKey":TDV.Tour.Script.getKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"shareSocial":TDV.Tour.Script.shareSocial,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByName":TDV.Tour.Script.getMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizFinish":TDV.Tour.Script.quizFinish,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"height":"100%","minHeight":0,"minWidth":0,"children":["this.MainViewer","this.Image_4F573DA1_429B_135D_41B3_256004B7B359","this.IconButton_508AAB13_4369_177D_41A1_3FF2CA8531EE","this.Label_565F6869_4379_11AD_41A8_B93D16DCED2A"],"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.3.js.map
})();
//Generated with v2023.0.3, Sun Apr 9 2023