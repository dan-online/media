"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4268],{84268:function(e,t,a){a.r(t),a.d(t,{show:function(){return p}}),a(98010),a(63238),a(61013),a(32081),a(61418),a(27471),a(95623),a(61514);var i=a(78407),n=a(53218),r=a(44614),s=a(9389),o=a(53913);function u(e,t,a){var o,u=n.O.getSupportedCommands(t),p=[];if(-1!==u.indexOf("SetAspectRatio")){var l=n.O.getAspectRatio(t),d=n.O.getSupportedAspectRatios(t).filter((function(e){return e.id===l}))[0];p.push({name:r.ZP.translate("AspectRatio"),id:"aspectratio",asideText:d?d.name:null})}if(-1!==u.indexOf("PlaybackRate")){var c=n.O.getPlaybackRate(t),m=n.O.getSupportedPlaybackRates(t).filter((function(e){return e.id===c}))[0];p.push({name:r.ZP.translate("PlaybackRate"),id:"playbackrate",asideText:m?m.name:null})}if(e.quality&&u.includes("SetMaxStreamingBitrate")&&null!=a&&null!==(o=a.Policy)&&void 0!==o&&o.EnableVideoPlaybackTranscoding){var b=function(e){var t=n.O.getPlayerState(e),a=n.O.currentMediaSource(e).MediaStreams.filter((function(e){return"Video"===e.Type}))[0],i=a?a.Width:null,r=a?a.Height:null,o=s.ZP.getVideoQualityOptions({currentMaxBitrate:n.O.getMaxStreamingBitrate(e),isAutomaticBitrateEnabled:n.O.enableAutomaticBitrateDetection(e),videoWidth:i,videoHeight:r,enableAuto:!0}).filter((function(e){return e.selected}));if(!o.length)return null;var u=(o=o[0]).name;return o.autoText&&(t.PlayState&&"Transcode"!==t.PlayState.PlayMethod?u+=" - Direct":u+=" "+o.autoText),u}(t);p.push({name:r.ZP.translate("Quality"),id:"quality",asideText:b})}var h=n.O.getRepeatMode(t);return-1!==u.indexOf("SetRepeatMode")&&n.O.currentMediaSource(t).RunTimeTicks&&p.push({name:r.ZP.translate("RepeatMode"),id:"repeatmode",asideText:"RepeatNone"===h?r.ZP.translate("None"):r.ZP.translate(""+h)}),e.suboffset&&p.push({name:r.ZP.translate("SubtitleOffset"),id:"suboffset",asideText:null}),e.stats&&p.push({name:r.ZP.translate("PlaybackData"),id:"stats",asideText:null}),i.default.show({items:p,positionTo:e.positionTo}).then((function(a){return function(e,t,a){switch(e){case"quality":return function(e,t){var a=n.O.currentMediaSource(e).MediaStreams.filter((function(e){return"Video"===e.Type}))[0],r=a?a.Width:null,o=a?a.Height:null,u=s.ZP.getVideoQualityOptions({currentMaxBitrate:n.O.getMaxStreamingBitrate(e),isAutomaticBitrateEnabled:n.O.enableAutomaticBitrateDetection(e),videoWidth:r,videoHeight:o,enableAuto:!0}),p=u.map((function(e){var t={name:e.name,id:e.bitrate,asideText:e.secondaryText};return e.selected&&(t.selected=!0),t})),l=u.filter((function(e){return e.selected})),d=l.length?l[0].bitrate:null;return i.default.show({items:p,positionTo:t}).then((function(t){var a=parseInt(t);a!==d&&n.O.setMaxStreamingBitrate({enableAutomaticBitrateDetection:!a,maxBitrate:a},e)}))}(a,t.positionTo);case"aspectratio":return function(e,t){var a=n.O.getAspectRatio(e),r=n.O.getSupportedAspectRatios(e).map((function(e){return{id:e.id,name:e.name,selected:e.id===a}}));return i.default.show({items:r,positionTo:t}).then((function(t){return t?(n.O.setAspectRatio(t,e),Promise.resolve()):Promise.reject()}))}(a,t.positionTo);case"playbackrate":return function(e,t){var a=n.O.getPlaybackRate(e),r=n.O.getSupportedPlaybackRates(e).map((function(e){return{id:e.id,name:e.name,selected:e.id===a}}));return i.default.show({items:r,positionTo:t}).then((function(t){return t?(n.O.setPlaybackRate(t,e),Promise.resolve()):Promise.reject()}))}(a,t.positionTo);case"repeatmode":return function(e,t){var a=[],s=n.O.getRepeatMode(e);return a.push({name:r.ZP.translate("RepeatAll"),id:"RepeatAll",selected:"RepeatAll"===s}),a.push({name:r.ZP.translate("RepeatOne"),id:"RepeatOne",selected:"RepeatOne"===s}),a.push({name:r.ZP.translate("None"),id:"RepeatNone",selected:"RepeatNone"===s}),i.default.show({items:a,positionTo:t}).then((function(t){t&&n.O.setRepeatMode(t,e)}))}(a,t.positionTo);case"stats":return t.onOption&&t.onOption("stats"),Promise.resolve();case"suboffset":return t.onOption&&t.onOption("suboffset"),Promise.resolve()}return Promise.reject()}(a,e,t)}))}function p(e){var t=e.player,a=n.O.currentItem(t);return a&&a.ServerId?o.Z.getApiClient(a.ServerId).getCurrentUser().then((function(a){return u(e,t,a)})):u(e,t,null)}t.default={show:p}},9389:function(e,t,a){var i=a(94389),n=a(44614),r=a(67469);t.ZP={getVideoQualityOptions:function(e){var t,a=e.currentMaxBitrate,s=e.videoWidth,o=e.videoHeight;s/o<16/9&&(s=o*(16/9));var u=null==e.maxVideoWidth?r.Z.maxVideoWidth():e.maxVideoWidth,p=(u<0?null===(t=i.M.screen())||void 0===t?void 0:t.maxAllowedWidth:u)||4096,l=s||4096,d=[],c={name:n.ZP.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&d.push(c),l>=3800&&p>=1930&&(d.push({name:"4K - 120 Mbps",maxHeight:2160,bitrate:12e7}),d.push({name:"4K - 80 Mbps",maxHeight:2160,bitrate:8e7})),l>=1900&&p>=1290&&(d.push({name:"1080p - 60 Mbps",maxHeight:1080,bitrate:6e7}),d.push({name:"1080p - 40 Mbps",maxHeight:1080,bitrate:4e7}),d.push({name:"1080p - 20 Mbps",maxHeight:1080,bitrate:2e7}),d.push({name:"1080p - 15 Mbps",maxHeight:1080,bitrate:15e6}),d.push({name:"1080p - 10 Mbps",maxHeight:1080,bitrate:1e7})),l>=1260&&p>=650&&(d.push({name:"720p - 8 Mbps",maxHeight:720,bitrate:8e6}),d.push({name:"720p - 6 Mbps",maxHeight:720,bitrate:6e6}),d.push({name:"720p - 4 Mbps",maxHeight:720,bitrate:4e6})),l>=620&&(d.push({name:"480p - 3 Mbps",maxHeight:480,bitrate:3e6}),d.push({name:"480p - 1.5 Mbps",maxHeight:480,bitrate:15e5}),d.push({name:"480p - 720 kbps",maxHeight:480,bitrate:72e4})),d.push({name:"360p - 420 kbps",maxHeight:360,bitrate:42e4}),a){for(var m=d.length-1,b=0,h=d.length;b<h;b++){var f=d[b];if(f.bitrate>0&&f.bitrate<=a){m=b;break}}var g=d[m];e.isAutomaticBitrateEnabled?c.autoText=g.name:g.selected=!0}return d},getAudioQualityOptions:function(e){var t=e.currentMaxBitrate,a=[],i={name:n.ZP.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&a.push(i),a.push({name:"2 Mbps",bitrate:2e6}),a.push({name:"1.5 Mbps",bitrate:15e5}),a.push({name:"1 Mbps",bitrate:1e6}),a.push({name:"320 kbps",bitrate:32e4}),a.push({name:"256 kbps",bitrate:256e3}),a.push({name:"192 kbps",bitrate:192e3}),a.push({name:"128 kbps",bitrate:128e3}),a.push({name:"96 kbps",bitrate:96e3}),a.push({name:"64 kbps",bitrate:64e3}),t){for(var r=a.length-1,s=0,o=a.length;s<o;s++){var u=a[s];if(u.bitrate>0&&u.bitrate<=t){r=s;break}}var p=a[r];e.isAutomaticBitrateEnabled?i.autoText=p.name:p.selected=!0}return a}}}}]);