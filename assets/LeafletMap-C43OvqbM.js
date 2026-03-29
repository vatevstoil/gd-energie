const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./leaflet-src-BuS-DVFq.js","./chunk-BEqpzyXh.js","./leaflet.markercluster-src-LcF8Oqok.js"])))=>i.map(i=>d[i]);
import{a as e}from"./chunk-BEqpzyXh.js";import{n as t,t as n}from"./jsx-runtime-iFSM2NCI.js";import{t as r}from"./preload-helper-xBbMyY7u.js";import{t as i}from"./zones-B7UJQRcS.js";var a=e(t(),1),o=n(),s={Serrurerie:`#b8a088`,Sécurité:`#8a9a7b`,Façades:`#7b8fa0`,Polycarbonate:`#a08870`,Entretien:`#9a8a7a`,"Multi-corps":`#8a7b6b`};function c(e){let t=s[e.category]||`#b8a088`;return`
    <div style="padding:10px 4px;font-family:'DM Sans',system-ui,sans-serif;min-width:200px">
      <h3 style="font-size:14px;font-weight:600;color:#1E1E1E;margin:0 0 8px;line-height:1.3">
        ${e.title}
      </h3>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="
          padding:2px 8px;
          background:${t}18;
          color:${t};
          font-size:11px;
          font-weight:500;
          letter-spacing:.03em;
        ">${e.category}</span>
        <span style="font-size:11px;color:#8A8A8A">${e.period}</span>
      </div>
      <p style="font-size:12px;color:#6B6B6B;margin:0;line-height:1.4">
        ${e.address}
      </p>
    </div>
  `}var l=`<div style="
  width:28px;height:28px;
  background:#b8a088;
  border:2px solid white;
  border-radius:50% 50% 50% 0;
  transform:rotate(-45deg);
  box-shadow:0 4px 12px rgba(184,160,136,0.4);
"><div style="
  width:8px;height:8px;
  background:white;border-radius:50%;
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
"></div></div>`;function u(e){return`<div style="
    width:44px;height:44px;
    background:#b8a088;
    border:2px solid white;
    border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    color:white;font-weight:600;font-size:14px;
    font-family:'DM Sans',sans-serif;
    box-shadow:0 6px 16px rgba(184,160,136,0.5);
    cursor:pointer;
  ">${e}</div>`}function d({region:t,height:n=`100%`}){let s=(0,a.useRef)(null),d=(0,a.useRef)(null),f=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!s.current)return;let n=!1;async function i(){let i=await r(()=>import(`./leaflet-src-BuS-DVFq.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]),import.meta.url),a=i.default||i;if(f.current=a,await r(()=>import(`./leaflet.markercluster-src-LcF8Oqok.js`).then(t=>e(t.default,1)),__vite__mapDeps([2,1]),import.meta.url),n||!s.current)return;let o=a.map(s.current,{center:[46.603354,1.888334],zoom:6,zoomControl:!0,scrollWheelZoom:!1});a.tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`,{attribution:`&copy; OpenStreetMap &copy; CARTO`,maxZoom:19}).addTo(o),d.current={map:o,cluster:null},p(f.current,o,t)}return i().catch(console.error),()=>{n=!0,d.current?.map&&(d.current.map.remove(),d.current=null)}},[]),(0,a.useEffect)(()=>{!d.current||!f.current||p(f.current,d.current.map,t)},[t]);function p(e,t,n){d.current?.cluster&&t.removeLayer(d.current.cluster);let r=n===`Toutes`?i:i.filter(e=>e.region===n),a=e.markerClusterGroup({maxClusterRadius:50,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0,iconCreateFunction:t=>e.divIcon({html:u(t.getChildCount()),className:``,iconSize:[44,44],iconAnchor:[22,22]})}),o=e.divIcon({html:l,className:``,iconSize:[28,28],iconAnchor:[14,28],popupAnchor:[0,-28]});if(r.forEach(t=>{let n=e.marker([t.lat,t.lng],{icon:o}).bindPopup(c(t),{className:`gd-popup`,maxWidth:260});a.addLayer(n)}),t.addLayer(a),d.current&&(d.current.cluster=a),r.length>0){let n=e.latLngBounds(r.map(e=>[e.lat,e.lng]));t.fitBounds(n,{padding:[50,50],maxZoom:12})}}return(0,o.jsx)(`div`,{ref:s,style:{width:`100%`,height:n}})}export{d as default};