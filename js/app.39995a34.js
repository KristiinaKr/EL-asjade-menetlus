(function(i){function t(t){for(var a,o,u=t[0],l=t[1],r=t[2],k=0,m=[];k<u.length;k++)o=u[k],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(i[a]=l[a]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var i,t=0;t<n.length;t++){for(var e=n[t],a=!0,u=1;u<e.length;u++){var l=e[u];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),i=o(o.s=e[0]))}return i}var a={},s={app:0},n=[];function o(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=i,o.c=a,o.d=function(i,t,e){o.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,t){if(1&t&&(i=o(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var a in i)o.d(e,a,function(t){return i[t]}.bind(null,a));return e},o.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(t,"a",t),t},o.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},o.p="/EL-asjade-menetlus/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var r=0;r<u.length;r++)t(u[r]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"0ad7":function(i,t,e){"use strict";e("760c")},2760:function(i,t,e){"use strict";e("7c56")},"56d7":function(i,t,e){"use strict";e.r(t);var a=e("2b0e"),s=function(){var i=this,t=i._self._c;return t("div",{attrs:{id:"app"}},[t("Menetlus")],1)},n=[],o=function(){var i=this,t=i._self._c;return t("div",{staticClass:"timeline"},i._l(i.timeline,(function(e,a){return t("div",{key:a,staticClass:"timeline-block",class:{active:e.active,"first-block":e.firstBlock},on:{click:function(t){return i.toggleDetails(a)}}},[t("div",{staticClass:"main-box"},[t("h3",[i._v(i._s(e.title))])]),t("div",{staticClass:"details"},i._l(e.details,(function(e,a){return t("div",{key:a,staticClass:"sub-box"},[t("div",{staticClass:"sub-box-left"},[t("span",{style:{color:i.institutionColors[e.institution]||"#000"}},[i._v(" "+i._s(e.institution)+" ")])]),t("div",{staticClass:"sub-box-right"},[t("h4",[i._v(i._s(e.title))]),t("p",{domProps:{innerHTML:i._s(e.description)}})])])})),0)])})),0)},u=[],l=(e("0643"),e("4e3e"),{name:"InteractiveTimeline",data(){return{timeline:[{title:"Eelfaas: avalikud konsultatsioonid, proaktiivsed seisukohad, valged paberid",firstBlock:!0},{title:"Euroopa Komisjon esitab algatuse",details:[{institution:"ELS",title:"Uute EL algatuste seire",description:"Uuendab iganädalaset algatuste tabelit. Kooskõlastab ministeeriumitega, kas Eesti seisukohad esitatakse KOK-ile ja valitsuse istungile."},{institution:"KOK",title:"Vastutajate ja tähtaegade määramine",description:"Määrab kindlaks algatuse vastutava ministeeriumi ja kaasvastutaja(d) ning KOK-i/VV-sse esitamise vajaduse."},{institution:"ELS",title:"Resolutsiooni koostamine",description:"ELS saadab pea- ja kaasvastutajatele resolutsiooni EL algatuse osas seisukohtade koostamiseks. Määrab tähtajad (tavapäraselt 6 nädalat VV-sse jõudmiseks  subsidiaarsuskontrolli tähtaja sees)."}],active:!1},{title:"Eesti seisukohtade kujundamine",details:[{institution:"Ministeerium",title:"Seisukohtade koostamine ja taustadokumentide ettevalmistamine",description:"Ministeeriumi eksperdid analüüsivad algatust ja selle valguses Eesti huvisid. Kaasatakse huvigrupid sisendi saamiseks. Koostatakse materjalid (seisukohad, seletuskiri)."},{institution:"KOK",title:"Seisukohtade kooskõlastamine",description:"Kõik KOK-i osapooled kooskõlastavad ja vajadusel täiendavad. Tehakse lõplik otsus seisukohtade VV-le esitamiseks."},{institution:"Valitsus",title:"Seisukohtade heaks kiitmine",description:"Vabariigi Valitsus kiidab heaks esitatud seisukohad. Saadab Riigikogule."},{institution:"Riigikogu juhatus",title:"Vastutavate komisjonide ja menetlustähtaja määramine",description:"Juhatus määrab Riigikogu valdkondliku komisjoni (või mitu) ELAK-ile arvamust andma. Tavapärane tähtaeg 2 töönädalat."},{institution:"Riigikogu valdkondlik komisjon",title:"Arvamuse andmine",description:"Valdkondlik komisjon (või mitu) arutab  valitsuse esitatud seisukohti ning annab arvamuse EL asjade komisjonile."},{institution:"Riigikogu EL asjade komisjon",title:"Lõplike Eesti seisukohtade kinnitamine",description:"ELAK arutab seisukohti võttes arvesse valdkondlike komisjonide arvamust, tehes vajadusel muudatusi ja/või täiendusi, ning kinnitab lõplikud Eesti seisukohad. <br> <span style='color: gray'> Vajadusel analüüsib ELAK subsidiaarsusprintsiibile vastavust. </span>"},{institution:"(Erandkorras)",title:"",description:"<span style='color: darkgray;'>Juhul kui ELAKi kinnitatud seisukoht erineb <strong>märkimisväärselt</strong> VV seisukohast, esitab ministeerium seisukohad uuesti VV-le. RKKTS § 152 prim 4 lõige 3 alusel on Valitsus kohustatud Riigikogu seisukohast kinni pidama.</span>"}],active:!1},{title:"EL tasandil seisukohtade kaitsmine",details:[{institution:"Ministeerium",title:"Seisukohtade esitamine ja töörühmades kaitsmine",description:"Ministeerium edastab Eesti seisukohad Euroopa Komisjonile ning esindab neid töörühmades. Vajadusel algatatakse seisukohtade täiendamine ministrite nõukogu materjalide raames."},{institution:"AEEL",title:"Seisukohtade ettevalmistamine Coreperi kohtumisteks",description:"Eesti alaline esindus (AEEL) edastab ministeeriumitele sisendipalve Coreperi läbirääkimiste juhisteks. Coreperis esindab Eesti seisukohti suursaadik."},{institution:"Ministeerium",title:"Ministrite nõukogu materjalide koostamine",description:"Erinevate EL ministrite nõukogu koosseisude kohtumisteks koostatakse materjal. Hinnatakse, kas vajalik on VV mandaat (näiteks kui pole olemasolevat mandaati või materjali raames täiendatakse mõne EL algatuse kohta Eesti seisukohti)."},{institution:"KOK/Valitsus",title:"Nõukogu materjali esmane heakskiit",description:"Kõik KOK-i osapooled kooskõlastavad ja vajadusel täiendavad materjali. Kui vaja, saadetakse materjal valitsusele heaks kiitmiseks."},{institution:"Riigikogu EL asjade komisjon",title:"Nõukogu materjalile lõpliku mandaadi andmine",description:"Nõukogu seisukohad saadetakse otse ELAK-ile. Minister tutvustab ELAKile Eesti põhisõnumeid, komisjon arutab ja annab mandaadi, vajadusel materjale täiendades."},{institution:"Ministeerium",title:"Eesti seisukohtade kaitsmine ja kohtumiste ülevaadete koostamine",description:"Minister esindab Eesti kinnitatud seisukohti EL nõukogus. Koostab ka aruteludest ülevaated, mis edastatakse Riigikogule ja valitsusele. <br> Kui minister ei ole ELAKi mandaadist kinni pidanud, peab ta RKKTS alusel selles esimesel võimalusel aru andma."}],active:!1},{title:"EL õigusakti ülevõtmine ja järelvalve",details:[{institution:"Euroopa Parlament ja nõukogu",title:"Seadusakti vastuvõtmine",description:"Seadusakti lõpptekst võetakse vastu ning tõlgitakse kõikidesse EL ametlikesse keeltesse."},{institution:"ELS / ministeerium",title:"Siseriiklik rakendamine või ülevõtmine",description:"Tagab EL õigusaktide õigeaegse ülevõtmise, planeerib vajalikke tegevusi."},{institution:"Riigikogu",title:"Direktiivi ülevõtmine",description:"Kavandab direktiiviga sätestatud õigused ja kohustused riigisisesesse õigusesse (seadus või määrus)."}],active:!1}],institutionColors:{ELS:"#EF6c00",KOK:"#00a86b",Ministeerium:"#8E44AD",Valitsus:"#028A0f","KOK/Valitsus":"#00a86b",Riigikogu:"#29b6f6",AEEL:"#de3161","Euroopa Parlament ja nõukogu":"#de3161","Riigikogu juhatus":"#29b6f6","Riigikogu valdkondlik komisjon":"#039be5","Riigikogu EL asjade komisjon":"#01579b","ELS / ministeerium":"#EF6c00","(Erandkorras)":"#a9a9a9"}}},methods:{toggleDetails(i){this.timeline[i].active=!this.timeline[i].active},navigateToStep(i){i>=0&&i<this.timeline.length&&(this.timeline.forEach(i=>i.active=!1),this.timeline[i].active=!0)}}}),r=l,d=(e("0ad7"),e("2877")),k=Object(d["a"])(r,o,u,!1,null,"63c3b64c",null),m=k.exports,v={name:"App",components:{Menetlus:m}},c=v,p=(e("2760"),Object(d["a"])(c,s,n,!1,null,null,null)),g=p.exports;a["a"].config.productionTip=!1,new a["a"]({render:i=>i(g)}).$mount("#app")},"760c":function(i,t,e){},"7c56":function(i,t,e){}});
//# sourceMappingURL=app.39995a34.js.map