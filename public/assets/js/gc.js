!function(){"use strict";var t,e,o,n,r,a,i,c,u,l,d,s;if(window.goatcounter&&window.goatcounter.vars?window.goatcounter=window.goatcounter.vars:window.goatcounter=window.goatcounter||{},(t=document.querySelector("script[data-goatcounter]"))&&t.dataset.goatcounterSettings){try{e=JSON.parse(t.dataset.goatcounterSettings)}catch(t){console.error("invalid JSON in data-goatcounter-settings: "+t)}for(o in e)["no_onload","no_events","allow_local","allow_frame","path","title","referrer","event"].indexOf(o)>-1&&(window.goatcounter[o]=e[o])}n=encodeURIComponent,r=function(t){var e,o,n,r={p:void 0===t.path?goatcounter.path:t.path,r:void 0===t.referrer?goatcounter.referrer:t.referrer,t:void 0===t.title?goatcounter.title:t.title,e:!(!t.event&&!goatcounter.event),s:[window.screen.width,window.screen.height,window.devicePixelRatio||1],b:i(),q:location.search};return"function"==typeof r.r&&(e=r.r),"function"==typeof r.t&&(n=r.t),"function"==typeof r.p&&(o=r.p),a(r.r)&&(r.r=document.referrer),a(r.t)&&(r.t=document.title),a(r.p)&&(r.p=d()),e&&(r.r=e(r.r)),n&&(r.t=n(r.t)),o&&(r.p=o(r.p)),r},a=function(t){return null==t||"function"==typeof t},i=function(){var t=window,e=document;return t.callPhantom||t._phantom||t.phantom?150:t.__nightmare?151:e.__selenium_unwrapped||e.__webdriver_evaluate||e.__driver_evaluate?152:navigator.webdriver?153:0},c=function(t){var e,o=[];for(e in t)""!==t[e]&&null!==t[e]&&void 0!==t[e]&&!1!==t[e]&&o.push(n(e)+"="+n(t[e]));return"?"+o.join("&")},u=function(t){console&&"warn"in console&&console.warn("goatcounter: "+t)},l=function(){var t=document.querySelector("script[data-goatcounter]");return t&&t.dataset.goatcounter?t.dataset.goatcounter:goatcounter.endpoint||window.counter},d=function(){var t,e=location,o=document.querySelector('link[rel="canonical"][href]');return o&&((t=document.createElement("a")).href=o.href,t.hostname.replace(/^www\./,"")===location.hostname.replace(/^www\./,"")&&(e=t)),e.pathname+e.search||"/"},s=function(t){null===document.body?document.addEventListener("DOMContentLoaded",function(){t()},!1):t()},goatcounter.filter=function(){return"visibilityState"in document&&"prerender"===document.visibilityState?"visibilityState":goatcounter.allow_frame||location===parent.location?!goatcounter.allow_local&&location.hostname.match(/(localhost$|^127\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^192\.168\.|^0\.0\.0\.0$)/)?"localhost":goatcounter.allow_local||"file:"!==location.protocol?!(!localStorage||"t"!==localStorage.getItem("skipgc"))&&"disabled with #toggle-goatcounter":"localfile":"frame"},window.goatcounter.url=function(t){var e,o=r(t||{});if(null!==o.p)return o.rnd=Math.random().toString(36).substr(2,5),(e=l())?e+c(o):u("no endpoint found")},window.goatcounter.count=function(t){var e,o,n,r=goatcounter.filter();return r?u("not counting because of: "+r):(e=goatcounter.url(t))?void(navigator.sendBeacon?navigator.sendBeacon(e):(o=document.createElement("img"),o.src=e,o.style.position="absolute",o.style.bottom="0px",o.style.width="1px",o.style.height="1px",o.loading="eager",o.setAttribute("alt",""),o.setAttribute("aria-hidden","true"),n=function(){o&&o.parentNode&&o.parentNode.removeChild(o)},o.addEventListener("load",n,!1),document.body.appendChild(o))):u("not counting because path callback returned null")},window.goatcounter.get_query=function(t){var e,o=location.search.substr(1).split("&");for(e=0;e<o.length;e++)if(0===o[e].toLowerCase().indexOf(t.toLowerCase()+"="))return o[e].substr(t.length+1)},window.goatcounter.bind_events=function(){if(document.querySelectorAll){Array.prototype.slice.call(document.querySelectorAll("*[data-goatcounter-click]")).forEach(function(t){if(!t.dataset.goatcounterBound){var e=function(t){return function(){goatcounter.count({event:!0,path:t.dataset.goatcounterClick||t.name||t.id||"",title:t.dataset.goatcounterTitle||t.title||(t.innerHTML||"").substr(0,200)||"",referrer:t.dataset.goatcounterReferrer||t.dataset.goatcounterReferral||""})}}(t);t.addEventListener("click",e,!1),t.addEventListener("auxclick",e,!1),t.dataset.goatcounterBound="true"}})}},window.goatcounter.visit_count=function(t){s(function(){var e,o,r,a;if((t=t||{}).type=t.type||"html",t.append=t.append||"body",t.path=t.path||d(),t.attr=t.attr||{width:"200",height:t.no_branding?"60":"80"},t.attr.src=l()+"er/"+n(t.path)+"."+n(t.type)+"?",t.no_branding&&(t.attr.src+="&no_branding=1"),t.style&&(t.attr.src+="&style="+n(t.style)),t.start&&(t.attr.src+="&start="+n(t.start)),t.end&&(t.attr.src+="&end="+n(t.end)),!(e={png:"img",svg:"img",html:"iframe"}[t.type]))return u("visit_count: unknown type: "+t.type);for(r in"html"===t.type&&(t.attr.frameborder="0",t.attr.scrolling="no"),o=document.createElement(e),t.attr)o.setAttribute(r,t.attr[r]);return(a=document.querySelector(t.append))?void a.appendChild(o):u("visit_count: append not found: "+t.append)})},"#toggle-goatcounter"===location.hash&&("t"===localStorage.getItem("skipgc")?(localStorage.removeItem("skipgc","t"),alert("GoatCounter tracking is now ENABLED in this browser.")):(localStorage.setItem("skipgc","t"),alert("GoatCounter tracking is now DISABLED in this browser until "+location+" is loaded again."))),goatcounter.no_onload||s(function(){if("visibilityState"in document&&"visible"!==document.visibilityState){var t=function(e){"visible"===document.visibilityState&&(document.removeEventListener("visibilitychange",t),goatcounter.count())};document.addEventListener("visibilitychange",t)}else goatcounter.count();goatcounter.no_events||goatcounter.bind_events()})}();