(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8200)}])},8200:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return F}});var r=t(5893),o=t(7294),a=t(9008),i=t.n(a),s=t(5675),c=t.n(s),u=t(4609),l=t.n(u),h={src:".//_next/static/media/pokeball.4ce843a1.png",height:208,width:206,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAV0lEQVR42lWNsQnAMBADf5RT4cp4n7jMghnCk7g1uE+ZCJMEwsEjBKcPQoXGaRqFCGVNXRjfSQ66w2Azw6kHVTuJwySn6oKvwMVStBQ9Ssaj5h1V8Ht7A1kzLrMOIkdbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};function m(){return(0,r.jsxs)("div",{className:l().logo,children:[(0,r.jsx)(c(),{src:h,alt:"Pokeball",width:40,height:40}),(0,r.jsx)("h1",{children:"Poked\xe9x"})]})}var f={fillZeroInFront:function(n,e){return(Array(e).join("0")+n).slice(-e)},makeFirstLetterUpperCase:function(n){return n.charAt(0).toUpperCase()+n.slice(1)}},p=t(4803),d=t.n(p);function _(n){var e=n.id,t=n.name,o=n.image,a=n.color;return(0,r.jsxs)("div",{className:"".concat(d().pokeCard," ").concat(a),children:[(0,r.jsx)("h4",{children:"#".concat(f.fillZeroInFront(e,3))}),(0,r.jsx)(c(),{loader:function(){return o},unoptimized:!0,src:o,alt:t,width:130,height:130}),(0,r.jsx)("div",{className:d().nameContainer,children:(0,r.jsx)("h3",{children:f.makeFirstLetterUpperCase(t)})})]})}var x=t(7568),g=t(655),j="https://pokeapi.co/api/v2";function k(){return k=(0,x.Z)((function(){var n,e;return(0,g.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(j,"/pokemon?limit=151"))];case 1:return[4,t.sent().json()];case 2:return n=t.sent(),e=n.results.map(function(){var n=(0,x.Z)((function(n){return(0,g.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch(n.url)];case 1:return[2,e.sent().json()]}}))}));return function(e){return n.apply(this,arguments)}}()),[4,Promise.all(e)];case 3:return[2,t.sent()]}}))})),k.apply(this,arguments)}var A={getAllPokemons:function(){return k.apply(this,arguments)},getPokemonImage:function(n){return"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork","/").concat(n,".png")}},v=A,I=t(6580),C=t.n(I);function w(n){var e=n.pokemons,t=void 0===e?[]:e;return(0,r.jsx)("ul",{className:C().pokeList,children:t.map((function(n){return(0,r.jsx)("li",{children:(0,r.jsx)(_,{id:n.id,name:n.name,image:v.getPokemonImage(n.id),color:n.types[0].type.name})},n.id)}))})}var P=t(1799),N=t(9603);function b(n){return(0,r.jsx)(N.G,(0,P.Z)({},n))}var S=t(9417),E=t(9119),B=t.n(E);function L(n){var e=n.initialItems,t=(n.items,n.changeItems);return(0,r.jsxs)("div",{className:B().searchInput,children:[(0,r.jsx)("button",{children:(0,r.jsx)(b,{className:B().searchIcon,icon:S.wn1})}),(0,r.jsx)("input",{type:"text",placeholder:"Procurar",onChange:function(n){var r=n.target.value,o=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));t(o)}})]})}var Q=t(797),y=t(6490),Z=t.n(y),M="id",H="name";function R(n){var e=n.initialItems,t=n.changeInitialItems,a=n.items,i=n.changeItems,s=function(n){var e=(0,Q.Z)(n);return e.sort((function(n,e){return u===H?n.id-e.id:n.name.localeCompare(e.name)})),e},c=(0,o.useState)(M),u=c[0],l=c[1];return(0,r.jsxs)("button",{className:Z().sortButton,onClick:function(){i(s(a)),t(s(e)),l(u===M?H:M)},children:[u===M?(0,r.jsx)("h4",{children:"#"}):(0,r.jsxs)("h4",{children:["A ",(0,r.jsx)("br",{})," Z"]}),(0,r.jsx)(b,{className:Z().sortIcon,icon:S.w8q})]})}var U=t(7352),V=t.n(U);function F(){var n=(0,o.useState)([]),e=n[0],t=n[1],a=(0,o.useState)([]),s=a[0],c=a[1];return(0,o.useEffect)((function(){v.getAllPokemons().then((function(n){t(n),c(n)})).catch((function(n){console.log(n)}))}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Poked\xe9x"}),(0,r.jsx)("meta",{name:"description",content:"Poked\xe9x"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:V().main,children:[(0,r.jsxs)("div",{className:V().logoContainer,children:[(0,r.jsx)(m,{}),(0,r.jsx)(R,{initialItems:s,changeInitialItems:c,items:e,changeItems:t})]}),(0,r.jsx)(L,{initialItems:s,items:e,changeItems:t}),(0,r.jsx)(w,{pokemons:e})]}),(0,r.jsx)("footer",{className:V().footer})]})}},4609:function(n){n.exports={logo:"Logo_logo__5Ik7I"}},4803:function(n){n.exports={pokeCard:"PokeCard_pokeCard__EMGBa",bounce:"PokeCard_bounce__Q91M0",nameContainer:"PokeCard_nameContainer__Twf18"}},6580:function(n){n.exports={pokeList:"PokeList_pokeList__8_zwQ"}},9119:function(n){n.exports={searchInput:"SearchInput_searchInput__WmCKy",searchIcon:"SearchInput_searchIcon___vaJA"}},6490:function(n){n.exports={sortButton:"SortButton_sortButton__W0HRa",sortIcon:"SortButton_sortIcon__YMWvP"}},7352:function(n){n.exports={main:"Home_main__qSIxU",logoContainer:"Home_logoContainer__ZOu2f",actionContainer:"Home_actionContainer__GQzxv"}}},function(n){n.O(0,[976,109,774,888,179],(function(){return e=5557,n(n.s=e);var e}));var e=n.O();_N_E=e}]);