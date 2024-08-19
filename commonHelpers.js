import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function f(e){const r="https://pixabay.com/api/",s="43977888-797e6fb137e01a7a14a4faad2",n=new URLSearchParams({key:s,q:e.replace(/\s+/g,"+"),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${n}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function c(e){u.error({title:"Error",message:e})}function m(e){return`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
      </a>
      <div class="item-info-block">
        ${a("Likes",e.likes)}
        ${a("Views",e.views)}
        ${a("Comments",e.comments)}
        ${a("Downloads",e.downloads)}
      </div>
    </div>
  `}function a(e,r){return`
    <div class="block">
      <p class="title">${e}</p>
      <p class="amount">${r}</p>
    </div>
  `}function h(e){const r=document.querySelector(".gallery");r.innerHTML="";const s=e.map(n=>m(n)).join("");r.insertAdjacentHTML("beforeend",s)}const y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,close:!0,className:"custom-lightbox"}),g=document.querySelector(".js-search"),p=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",e=>{e.preventDefault(),p.innerHTML="";const r=e.target.elements.search.value.trim();r&&(l.classList.toggle("is-hidden"),f(r).then(s=>{if(!s.hits.length){c("Sorry, there are no images matching your search query. Please try again!");return}h(s.hits),y.refresh()}).catch(s=>{c("Unknown error. Please try again!"),console.error(s)}).finally(()=>{l.classList.toggle("is-hidden")}))});
//# sourceMappingURL=commonHelpers.js.map
