(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{5465:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[id]",function(){return t(7767)}])},8357:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(1799),a=t(5893),r=t(9603);function o(e){return(0,a.jsx)(r.G,(0,i.Z)({},e))}},7767:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var i=t(5893),a=t(7294),r=t(9008),o=t.n(r),s=t(1163),c=t(1664),l=t.n(c),u=t(9417),d=t(8357),p=t(5675),h=t.n(p),m=t(5982),f=t.n(m);function _(e){var n=e.className,t=e.loader,a=e.unoptimized,r=e.src,o=e.alt,s=e.width,c=e.height;return(0,i.jsx)("div",{className:"".concat(n," ").concat(f().image),children:(0,i.jsx)(h(),{loader:t,unoptimized:a,src:r,alt:o,width:s,height:c})})}var k=t(6203),x=t(244),g=t(7618),j=t.n(g),P={src:".//_next/static/media/pokeball-white.0180ef72.png",height:208,width:206,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPklEQVR42mXNsQoAIAiE4RtcGiPQIHr/tzy6bEv+5StQAdA4ONWQ8hlcL8lA5xaaCsmRNHZl1+WjjNSl/9kDcSFBbal8NNQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},v=t(6813),A=t.n(v);function N(e){var n=e.value,t=e.color;return(0,i.jsxs)("div",{className:"".concat(A().progressBar," ").concat(t),children:[(0,i.jsx)("label",{children:k.Z.fillZeroInFront(n,3)}),(0,i.jsx)("div",{className:A().progressContainer,children:(0,i.jsx)("div",{className:A().progress,style:{width:"".concat(k.Z.calculatePercentage(n,230),"%")}})})]})}function D(e){var n=e.pokemon,t=e.pokemonsSize,a=e.description;return n?(0,i.jsxs)("div",{className:"".concat(j().pokeDetail," ").concat(n.types[0].type.name),children:[(0,i.jsxs)("div",{className:j().detailHeader,children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(d.Z,{className:j().backIcon,icon:u.acZ})}),(0,i.jsx)("h2",{children:k.Z.makeFirstLetterUpperCase(n.name)}),(0,i.jsx)("h4",{children:"#".concat(k.Z.fillZeroInFront(n.id,3))})]}),(0,i.jsx)(_,{className:j().pokeballImage,src:P,alt:n.name}),(0,i.jsxs)("div",{className:j().nextPokemon,children:[n.id>1&&(0,i.jsx)("div",{className:j().previous,children:(0,i.jsx)(l(),{href:"/detail/".concat(n.id-1),children:(0,i.jsx)(d.Z,{className:j().icon,icon:u.A35})})}),n.id<(void 0===t?151:t)&&(0,i.jsx)("div",{className:j().next,children:(0,i.jsx)(l(),{href:"/detail/".concat(n.id+1),children:(0,i.jsx)(d.Z,{className:j().icon,icon:u._tD})})})]}),(0,i.jsxs)("div",{className:j().detailContainer,children:[(0,i.jsx)(_,{className:j().pokemonImage,loader:function(){return x.Z.getPokemonImage(n.id)},unoptimized:!0,src:x.Z.getPokemonImage(n.id),alt:n.name,width:130,height:130}),(0,i.jsx)("ul",{className:j().typeContainer,children:n.types.map(function(e){return(0,i.jsx)("li",{className:e.type.name,children:k.Z.makeFirstLetterUpperCase(e.type.name)},e.type.name)})}),(0,i.jsx)("h3",{children:"About"}),(0,i.jsxs)("ul",{className:j().infoContainer,children:[(0,i.jsxs)("li",{children:[(0,i.jsxs)("div",{className:j().info,children:[(0,i.jsx)(d.Z,{className:j().infoIcon,icon:u.gql}),(0,i.jsx)("p",{children:k.Z.formatPokeWeight(n.weight)})]}),(0,i.jsx)("h4",{children:"Weight"})]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)("div",{className:j().info,children:[(0,i.jsx)(d.Z,{className:j().infoIcon,icon:u.KXm}),(0,i.jsx)("p",{children:k.Z.formatPokeHeight(n.height)})]}),(0,i.jsx)("h4",{children:"Height"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"".concat(j().info," ").concat(j().pokeAbility),children:n.abilities.map(function(e){return(0,i.jsx)("p",{children:e.ability.name},e.ability.name)})}),(0,i.jsx)("h4",{children:"Moves"})]})]}),(0,i.jsx)("p",{className:j().pokeDescription,children:a}),(0,i.jsx)("h3",{children:"Base Stats"}),(0,i.jsx)("ul",{className:j().statsContainer,children:n.stats.map(function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:k.Z.mapStatsTitle(e.stat.name)}),(0,i.jsx)("span",{className:j().divider}),(0,i.jsx)(N,{value:e.base_stat,color:n.types[0].type.name})]},e.stat.name)})})]})]}):null}var b=t(662),y=t.n(b);function Z(){var e=(0,s.useRouter)(),n=(0,a.useState)(null),t=n[0],r=n[1],c=(0,a.useState)(""),l=c[0],u=c[1];return(0,a.useEffect)(function(){x.Z.getPokemonById(e.query.id).then(function(e){r(e)}).catch(function(e){console.log(e)}),x.Z.getPokemonFireredDescription(e.query.id).then(function(e){u(e)}).catch(function(e){console.log(e)})},[e.query.id]),(0,i.jsxs)("div",{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Poked\xe9x - Pok\xe9mon Detail"}),(0,i.jsx)("meta",{name:"description",content:"Pok\xe9mon Detail"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{className:y().main,children:(0,i.jsx)(D,{pokemon:t,description:l})}),(0,i.jsx)("footer",{className:y().footer})]})}},244:function(e,n,t){"use strict";var i=t(7568),a=t(655),r="https://pokeapi.co/api/v2";function o(){return(o=(0,i.Z)(function(){var e,n,t,o;return(0,a.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("".concat(r,"/pokemon?limit=151"))];case 1:return[4,e.sent().json()];case 2:var n;return[4,Promise.all(e.sent().results.map((n=(0,i.Z)(function(e){var n;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return[4,fetch(e.url)];case 1:return[2,n.sent().json()]}})}),function(e){return n.apply(this,arguments)})))];case 3:return[2,e.sent()]}})})).apply(this,arguments)}function s(){return(s=(0,i.Z)(function(e){var n,t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return[4,fetch("".concat(r,"/pokemon/").concat(e))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}})})).apply(this,arguments)}function c(){return(c=(0,i.Z)(function(e){var n,t,i;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return[4,fetch("".concat(r,"/pokemon-species/").concat(e))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent().flavor_text_entries.find(function(e){return"firered"===e.version.name}).flavor_text]}})})).apply(this,arguments)}n.Z={getAllPokemons:function(){return o.apply(this,arguments)},getPokemonById:function(e){return s.apply(this,arguments)},getPokemonFireredDescription:function(e){return c.apply(this,arguments)},getPokemonImage:function(e){return"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork","/").concat(e,".png")}}},6203:function(e,n){"use strict";n.Z={fillZeroInFront:function(e,n){return(Array(n).join("0")+e).slice(-n)},makeFirstLetterUpperCase:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},formatPokeWeight:function(e){return"".concat(e/10," kg")},formatPokeHeight:function(e){return"".concat(e/10," m")},mapStatsTitle:function(e){return({hp:"HP",attack:"ATK",defense:"DEF","special-attack":"SATK","special-defense":"SDEF",speed:"SPD"})[e]},calculatePercentage:function(e,n){return e/n*100}}},5982:function(e){e.exports={image:"Image_image__ypTIS"}},7618:function(e){e.exports={pokeDetail:"PokeDetail_pokeDetail__pR1OW",detailHeader:"PokeDetail_detailHeader__L3d0R",backIcon:"PokeDetail_backIcon__7Z1bo",pokeballImage:"PokeDetail_pokeballImage__kRcFf",nextPokemon:"PokeDetail_nextPokemon__HGAoY",previous:"PokeDetail_previous__WruuO",next:"PokeDetail_next__B4UXm",icon:"PokeDetail_icon__v5Ee8",detailContainer:"PokeDetail_detailContainer__WxGjc",pokemonImage:"PokeDetail_pokemonImage__qQJii",typeContainer:"PokeDetail_typeContainer__rspbC",infoContainer:"PokeDetail_infoContainer__Iqchh",info:"PokeDetail_info__B5XkD",infoIcon:"PokeDetail_infoIcon__4vhcb",pokeAbility:"PokeDetail_pokeAbility__QZbmM",pokeDescription:"PokeDetail_pokeDescription__V1Lqv",statsContainer:"PokeDetail_statsContainer__4JFOm",divider:"PokeDetail_divider__HvGvh"}},6813:function(e){e.exports={progressBar:"ProgressBar_progressBar__Nbo_u",progressContainer:"ProgressBar_progressContainer__L1Xht",progress:"ProgressBar_progress__xtMUr"}},662:function(e){e.exports={main:"Detail_main___QyAS"}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[976,338,774,888,179],function(){return e(e.s=5465)}),_N_E=e.O()}]);