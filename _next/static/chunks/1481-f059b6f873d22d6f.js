"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1481],{7017:function(e,s,a){var i=a(5893),l=a(7294);let getPartsofTimeDuration=e=>({days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)});s.Z=e=>{let[s,a]=(0,l.useState)(new Date().toLocaleTimeString());(0,l.useEffect)(()=>{let e=setTimeout(()=>{let e=new Date;a(e.toLocaleTimeString())},1e3);return()=>{clearTimeout(e)}},[s]);let r=Date.now(),t=new Date(e.endDateTime),c=t.getTime()-r,n=getPartsofTimeDuration(c);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"js-countdown",children:(0,i.jsxs)("div",{"aria-hidden":"true",className:"countdown__timer",children:[(0,i.jsxs)("span",{className:"countdown__item",children:[(0,i.jsx)("span",{className:"countdown__value countdown__value--0 js-countdown__value--0",children:n.days}),(0,i.jsx)("span",{className:"countdown__label",children:"d"})]}),(0,i.jsxs)("span",{className:"countdown__item",children:[(0,i.jsx)("span",{className:"countdown__value countdown__value--1 js-countdown__value--1",children:n.hours}),(0,i.jsx)("span",{className:"countdown__label",children:"h"})]}),(0,i.jsxs)("span",{className:"countdown__item",children:[(0,i.jsx)("span",{className:"countdown__value countdown__value--2 js-countdown__value--2",children:n.minutes}),(0,i.jsx)("span",{className:"countdown__label",children:"m"})]}),(0,i.jsxs)("span",{className:"countdown__item",children:[(0,i.jsx)("span",{className:"countdown__value countdown__value--3 js-countdown__value--3",children:n.seconds}),(0,i.jsx)("span",{className:"countdown__label",children:"s"})]})]})})})}},2770:function(e,s,a){a.d(s,{Z:function(){return Action3}});var i=a(5893),l=a(1664),r=a.n(l),t=a(8658),c=a(478);function Action3(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tf-section action",children:(0,i.jsx)("div",{className:"themesflat-container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"action__body",children:[(0,i.jsx)("div",{className:"tf-tsparticles",children:(0,i.jsx)("div",{id:"tsparticles1","data-color":"#161616","data-line":"#000"})}),(0,i.jsx)("h2",{children:"Discover, create and sell your own NFT"}),(0,i.jsxs)("div",{className:"flat-button flex",children:[(0,i.jsxs)(r(),{href:"#",className:"tf-button style-2 h50 w190 mr-10",children:["Explore now",(0,i.jsx)("i",{className:"icon-arrow-up-right2"})]}),(0,i.jsxs)(r(),{href:"#",className:"tf-button style-2 h50 w230",children:["Create your first NFT",(0,i.jsx)("i",{className:"icon-arrow-up-right2"})]})]}),(0,i.jsxs)("div",{className:"bg-home7",children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(t.Z,{})]})]})})})})})})}},5553:function(e,s,a){a.d(s,{Z:function(){return DiscoverItem3}});var i=a(5893);a(7017),a(1664);var l=a(7294),r=a(4645);function DiscoverItem3(){let[e,s]=(0,l.useState)(!1),[a,t]=(0,l.useState)({status:!1,key:""});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"tf-section-3 discover-item ",children:(0,i.jsx)("div",{className:"themesflat-container",children:(0,i.jsx)("div",{className:"row"})})}),(0,i.jsx)(r.Z,{handleBidModal:()=>s(!e),isBidModal:e})]})}},7943:function(e,s,a){a.d(s,{Z:function(){return FeaturedItem3}});var i=a(5893);a(1664);var l=a(4135);a(2261),a(7017);var r=a(7294),t=a(4645);function FeaturedSlider3(){let[e,s]=(0,r.useState)(!1);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{handleBidModal:()=>s(!e),isBidModal:e})})}l.pt,l.tl,l.W_;var c=a(381);function FeaturedItem3(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"tf-section featured-item style-bottom",children:[(0,i.jsx)("div",{className:"themesflat-container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"heading-section pb-20",children:(0,i.jsxs)("h2",{className:"tf-title ",children:["รายการ ไอเทมอัพเดท ประจำสัปดาห์1 ",c().format("ll")]})})})})}),(0,i.jsx)(FeaturedSlider3,{})]})})}a(4395),c.locale("th")},6963:function(e,s,a){a.d(s,{Z:function(){return FlatTitle3}});var i=a(5893),l=a(1664),r=a.n(l),t=a(4135),c=a(2261),n=a(4645),d=a(6840),o=a(7294);let m={modules:[t.pt,t.tl,t.W_,t.Rv,t.lI],loop:!1,spaceBetween:0,slidesPerView:1,centeredSlides:!1,freeMode:!1,watchSlidesProgress:!0,effect:"coverflow",grabCursor:!0,coverflowEffect:{rotate:0,stretch:-20,depth:0,modifier:1,scale:.9,slideShadows:!1},autoplay:{delay:2500,disableOnInteraction:!1},navigation:{prevEl:".prev-3d",nextEl:".next-3d"},breakpoints:{500:{slidesPerView:2},991:{slidesPerView:3}}};function TitileSlider3(e){var s;let[a,l]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.tq,{...m,className:"swiper-container swiper-3d-3cardfull",children:null==e?void 0:null===(s=e.datapro)||void 0===s?void 0:s.map((e,s)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.o5,{children:(0,i.jsxs)("div",{className:"tf-card-box style-3",children:[(0,i.jsx)("div",{className:"card-media",children:(0,i.jsx)(r(),{href:"/product-detail-3?provider=".concat(e.id),children:(0,i.jsx)("img",{src:d.Z.apiURL+e.img_event_1,alt:""})})}),(0,i.jsx)("div",{className:"card-bottom"})]})})}))}),(0,i.jsx)("div",{className:"swiper-button-next next-3d over"}),(0,i.jsx)("div",{className:"swiper-button-prev prev-3d over"}),(0,i.jsx)(n.Z,{handleBidModal:()=>l(!a),isBidModal:a})]})}function FlatTitle3(e){var s,a;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"flat-pages-title-home3",children:[(0,i.jsx)("div",{className:"bg-grid-line",children:(0,i.jsx)("div",{className:"bg-line"})}),(0,i.jsx)("div",{className:"themesflat-container w1346",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)(TitileSlider3,{datapro:null==e?void 0:null===(a=e.datamember)||void 0===a?void 0:null===(s=a.data)||void 0===s?void 0:s.promotion})})})})]})})}},650:function(e,s,a){a.d(s,{Z:function(){return Seller4}});var i=a(5893),l=a(4135),r=a(2261),t=a(1664),c=a.n(t);let n={modules:[l.pt,l.tl,l.W_],loop:!1,slidesPerView:2,observer:!0,grabCursor:!0,observeParents:!0,spaceBetween:30,autoplay:{delay:2700,disableOnInteraction:!1},navigation:{clickable:!0,nextEl:".seller-next",prevEl:".seller-prev"},breakpoints:{500:{slidesPerView:3},640:{slidesPerView:4},768:{slidesPerView:5},1070:{slidesPerView:6}}};function Seller4(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tf-section seller ",children:(0,i.jsx)("div",{className:"themesflat-container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"heading-section pb-30",children:[(0,i.jsx)("h2",{className:"tf-title ",children:"Browse by category"}),(0,i.jsxs)(c(),{href:"/explore-3",children:["View all bids ",(0,i.jsx)("i",{className:"icon-arrow-right2"})]})]})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)(r.tq,{...n,className:"swiper-container seller seller-slider2",children:(0,i.jsxs)("div",{className:"swiper-wrapper",children:[(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider1category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider2category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider3category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider4category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider5category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider6category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider1category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})}),(0,i.jsx)(r.o5,{children:(0,i.jsxs)("div",{className:"tf-category text-center",children:[(0,i.jsxs)("div",{className:"card-media",children:[(0,i.jsx)("img",{src:"/assets/images/box-item/imgslider2category.jpg",alt:""}),(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("i",{className:"icon-arrow-up-right2"})})]}),(0,i.jsx)("h6",{children:"Typo"})]})})]})})})]})})})})}},7836:function(e,s,a){a.d(s,{Z:function(){return Seller5}});var i=a(5893),l=a(4135);a(2261);var r=a(1664),t=a.n(r);function Seller5(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tf-section-4 seller-grid ",children:(0,i.jsx)("div",{className:"themesflat-container w1115",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"heading-section",children:(0,i.jsxs)("h2",{className:"tf-title pb-30",children:["Top seller in",(0,i.jsxs)("span",{className:"dropdown",id:"select-day",children:[(0,i.jsx)("span",{className:"btn-selector tf-color",children:(0,i.jsx)("span",{children:"1 day"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:"1 day"})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:"3 day"})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:"7 day"})})]})]})]})})}),(0,i.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-01.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order tf-color",children:"#1"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.1s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-02.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order tf-color",children:"#2"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.2s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-03.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order tf-color",children:"#3"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-04.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#4"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.1s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-05.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#5"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.2s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-06.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#6"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30 no-border-b",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-01.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#7"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.1s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30 no-border-b",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-03.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#8"})]})}),(0,i.jsx)("div",{"data-wow-delay":"0.2s",className:"wow fadeInUp col-md-4",children:(0,i.jsxs)("div",{className:"tf-author-box style-2 hv-border mb-30 no-border-b",children:[(0,i.jsx)("div",{className:"author-avatar ",children:(0,i.jsx)("img",{src:"/assets/images/avatar/avatar-02.png",alt:"",className:"avatar"})}),(0,i.jsxs)("div",{className:"author-infor ",children:[(0,i.jsx)("h5",{children:(0,i.jsx)(t(),{href:"/author-2",children:"Marvin McKinney"})}),(0,i.jsxs)("h6",{className:"price gem style-1",children:[(0,i.jsx)("i",{className:"icon-gem"}),"7,080.95"]})]}),(0,i.jsx)("div",{className:"order",children:"#9"})]})})]})})})})}l.pt,l.tl,l.W_},970:function(e,s,a){a.d(s,{Z:function(){return TopCollections3}});var i=a(5893),l=a(1664),r=a.n(l),t=a(4135);a(2261);var c=a(7294),n=a(381);function TopCollections3(){let[e,s]=(0,c.useState)({status:!1,key:""}),handleToggle=a=>{e.key===a?s({status:!1}):s({status:!0,key:a})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tf-section top-collections d-none",children:(0,i.jsx)("div",{className:"themesflat-container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"heading-section pb-20",children:[(0,i.jsxs)("h2",{className:"tf-title ",children:["ข่าวสาร อัพเดท ประจำสัปดาห์ ",n().format("ll")]}),(0,i.jsxs)(r(),{href:"/explore-3",children:["Discover more ",(0,i.jsx)("i",{className:"icon-arrow-right2"})]})]})}),(0,i.jsx)("div",{className:"tf-section-2 wrap-accordion",children:(0,i.jsx)("div",{className:"themesflat-container w730",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12 mb-20",children:(0,i.jsxs)("div",{className:"flat-accordion2",children:[(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:1==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(1),children:"Why are NFTs becoming popular?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(1==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:2==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(2),children:"How do I keep my NFTs safe?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(2==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:3==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(3),children:"What is blockchain?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(3==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved"})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:4==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(4),children:"What is an NFT?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(4==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:5==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(5),children:"Where can I learn more about cryptocurrencies, NFTs, and blockchain?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(5==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:6==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(6),children:"What is polygon?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(6==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:7==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(7),children:"What is the Ledger Nano X?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(7==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]}),(0,i.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp flat-toggle2",children:[(0,i.jsx)("h6",{className:8==e.key?"toggle-title active":"toggle-title",onClick:()=>handleToggle(8),children:"How do I set up my Ledger?"}),(0,i.jsx)("div",{className:"toggle-content",style:{display:"".concat(8==e.key?"block":"none")},children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})})]})]})})})})})]})})})})}a(4395),n.locale("th"),t.pt,t.tl,t.W_},8658:function(e,s,a){a.d(s,{Z:function(){return AutoSlider1}});var i=a(5893),l=a(4135),r=a(2261);let t={modules:[l.pt,l.tl,l.W_],loop:!0,slidesPerView:"auto",spaceBetween:14,direction:"vertical",speed:1e4,observer:!0,observeParents:!0,autoplay:{delay:0,disableOnInteraction:!1}};function AutoSlider1(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.tq,{...t,className:"swiper-container autoslider3reverse swiper-container-vertical ",children:[(0,i.jsx)(r.o5,{children:(0,i.jsx)("img",{src:"/assets/images/item-background/bg-action-1.png",alt:""})}),(0,i.jsx)(r.o5,{children:(0,i.jsx)("img",{src:"/assets/images/item-background/bg-action-1.png",alt:""})})]})})}},478:function(e,s,a){a.d(s,{Z:function(){return AutoSlider2}});var i=a(5893),l=a(4135),r=a(2261);let t={modules:[l.pt,l.tl,l.W_],loop:!0,slidesPerView:"auto",spaceBetween:14,direction:"vertical",speed:1e4,observer:!0,observeParents:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0}};function AutoSlider2(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.tq,{...t,className:"swiper-container autoslider4reverse swiper-container-vertical",children:[(0,i.jsx)(r.o5,{children:(0,i.jsx)("img",{src:"/assets/images/item-background/bg-action-1.png",alt:""})}),(0,i.jsx)(r.o5,{children:(0,i.jsx)("img",{src:"/assets/images/item-background/bg-action-1.png",alt:""})})]})})}}}]);