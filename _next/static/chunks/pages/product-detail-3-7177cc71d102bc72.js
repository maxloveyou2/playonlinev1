(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8243],{404:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-detail-3",function(){return s(277)}])},6080:function(e,a,s){"use strict";var t=s(5121),i=s(6840);(0,s(471).O)(),a.Z={get_data_event:async()=>{let e={method:"get",url:"".concat(i.Z.apiURL,"/api/v3/user/data_event"),headers:{"Content-Type":"application/json"}};return await (0,t.Z)(e)},post_data_event:async e=>{let a={method:"post",url:"".concat(i.Z.apiURL,"/api/v3/user/postdata_event"),headers:{"Content-Type":"application/json"},data:e};return await (0,t.Z)(a)},post_noconfrimemail:async()=>{let e={method:"get",url:"".concat(i.Z.apiURL,"/api/v3/user/noconfrimemail"),headers:{"Content-Type":"application/json"}};return await (0,t.Z)(e)},post_confrimemail:async e=>{let a={method:"post",url:"".concat(i.Z.apiURL,"/api/v3/user/confrimemail"),headers:{"Content-Type":"application/json"},data:e};return await (0,t.Z)(a)}}},277:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return Home}});var t=s(5893),i=s(4135);s(2261),s(6840);var d=s(4645),l=s(4460);s(278);var c=s(1664),n=s.n(c),r=s(7294),o=s(1163);s(8962);var m=s(6080),h=s(381);function Home(){let[e,a]=(0,r.useState)(!1),handleBidModal=()=>a(!e),s=(0,o.useRouter)();(0,r.useEffect)(()=>{data_api()},[]);let data_api=()=>{var e;let a={pro_id:null==s?void 0:null===(e=s.query)||void 0===e?void 0:e.provider};m.Z.post_data_event(a).then(e=>{!0==e.data.success&&c({data:e.data.data,item:e.data.dataitem})}).catch(e=>{})},[i,c]=(0,r.useReducer)((e,a)=>({...e,...a}),{data:[],item:[]});return console.log(i),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.Z,{headerStyle:1,footerStyle:1,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"tf-section-2 product-detail",children:(0,t.jsx)("div",{className:"themesflat-container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"infor-product style-1",children:[(0,t.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp text justify-center",children:[i.data.name_event," "]}),(0,t.jsx)("h2",{"data-wow-delay":"0s",className:"wow fadeInUp text-center pb-30 mb-0",children:i.data.name_event}),(0,t.jsxs)("div",{className:"flex items-center justify-center",children:[(0,t.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInLeft author flex items-center"}),(0,t.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInRight menu_card position-unset"})]})]})}),(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"tf-card-box style-6",children:[(0,t.jsx)("div",{className:"card-media",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("img",{src:i.data.img_event_1,alt:""})})}),(0,t.jsx)("div",{className:"button-place-bid",children:(0,t.jsx)("a",{onClick:handleBidModal,href:"#",className:"tf-button",children:(0,t.jsx)("span",{children:"Place Bid"})})})]})}),(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{"data-wow-delay":"0s",className:"wow fadeInUp product-item time-sales",children:[(0,t.jsxs)("h6",{children:[(0,t.jsx)("i",{className:"icon-clock"}),h(i.data.strart_date).format("llll")," ถึง"," ",h(i.data.end_date).format("llll")," "]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsxs)("h2",{children:[" ",(0,t.jsx)("i",{className:"icon-clock"}),"เหลือเวลากิจกรรมอีก"," ",(0,t.jsx)("span",{className:"text-danger",children:h(i.data.end_date).fromNow()})]}),i.data.name_event]}),(0,t.jsx)("div",{className:"tf-section-2",children:(0,t.jsx)("div",{className:"themesflat-container",children:(0,t.jsx)("div",{className:"row",children:i.item.map((e,a)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{"data-wow-delay":"0s",className:"wow fadeInUp col-xl-4 col-sm-4 col-4 mb-30 mt-5",children:(0,t.jsxs)("div",{className:"tf-author-box style-3 text-center",children:[(0,t.jsx)("div",{className:"author-avatar ",children:(0,t.jsx)("img",{src:e.picture,alt:"",className:"avatar"})}),(0,t.jsxs)("div",{className:"author-infor ",children:[(0,t.jsx)("h5",{children:(0,t.jsx)(n(),{href:"/author-2",children:e.item_name})}),(0,t.jsxs)("h6",{className:"price gem style-1",children:[(0,t.jsx)("i",{className:"icon-gem"}),e.item_description]})]})]})})}))})})})]})]})})]})})}),(0,t.jsx)("div",{className:"tf-section-2 featured-item style-bottom",children:(0,t.jsx)("div",{className:"themesflat-container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"heading-section",children:[(0,t.jsx)("h2",{className:"tf-title pb-20",children:"Related artworks"}),(0,t.jsxs)(n(),{href:"/explore-3",children:["Discover more ",(0,t.jsx)("i",{className:"icon-arrow-right2"})]})]})}),(0,t.jsx)("div",{className:"col-md-12"})]})})})]}),(0,t.jsx)(d.Z,{handleBidModal:handleBidModal,isBidModal:e})]})})}s(4395),h.locale("th"),i.pt,i.tl,i.W_,i.Rv}},function(e){e.O(0,[1450,4885,2196,1664,5121,3129,6502,4610,4460,4645,2847,9774,2888,179],function(){return e(e.s=404)}),_N_E=e.O()}]);