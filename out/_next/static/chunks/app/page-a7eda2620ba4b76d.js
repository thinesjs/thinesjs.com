(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{307:function(e,s,t){Promise.resolve().then(t.bind(t,8780))},4876:function(e,s,t){"use strict";t.r(s);var l=t(9268);let a=e=>{let{children:s}=e;return(0,l.jsx)("div",{className:"max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4",children:s})};s.default=a},8780:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var l=t(9268),a=t(4876),r=t(6006),i=t(9),n=t(3380),c=t(296);let o=()=>(0,l.jsx)("div",{id:"home",className:"w-full text-black h-screen",children:(0,l.jsxs)("div",{className:"max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-center h-full",children:[(0,l.jsxs)("h2",{className:"sm:text-5xl font-bold text-4xl",children:["Hey, I'm Thines ",String.fromCodePoint(Number("0x1F44B"))]}),(0,l.jsx)("p",{className:"text-gray-800 py-4 max-w-md",children:"A website & software developer based in Malaysia."}),(0,l.jsx)("div",{children:(0,l.jsx)(c.rU,{to:"projects",smooth:"easeInOutCubic",duration:500,children:(0,l.jsxs)("button",{className:"group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r from-cyan-500 to-blue-500",children:["Projects",(0,l.jsx)("span",{className:"ml-3 group-hover:scale-110 duration-300",children:(0,l.jsx)(n.G,{icon:i.swf,bounce:!0})})]})})})]}),(0,l.jsx)("div",{className:"mx-auto w-2/3 md:w-2/4",children:(0,l.jsx)("img",{src:"/image.png",alt:"image",className:"rounded-2xl m-6"})})]})});var d=t(6048),m=t(5846),x=t.n(m),u=t(661);t(7157);var h=t(4835);let p=()=>{let{data:e,error:s,isLoading:t}=(0,d.ZP)("https://api.tjs-server.com/v1/portfolio",e=>fetch(e,{headers:{"x-api-key":"5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(e=>e.json()));return(0,l.jsx)("div",{id:"projects",className:"text-black w-full h-screen",children:(0,l.jsx)("div",{className:"max-w-screen-lg p-4 mx-auto flex flex-col justify-center",children:(0,l.jsxs)("div",{className:"pb-8",children:[(0,l.jsxs)("p",{className:"text-4xl font-bold inline",children:["Projects ",String.fromCodePoint(Number("0x1F5A5"))]}),(0,l.jsx)("p",{className:"py-6",children:"Check out some of my personal projects!"}),(0,l.jsxs)("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0",children:[s&&(0,l.jsx)("p",{children:"An unknown error has occured while fetching data ;("}),t&&(0,h.times)(9,e=>(0,l.jsx)("div",{className:"shadow-sm rounded-lg border-[1px]",children:(0,l.jsx)(u.Z,{style:{display:"flex",minHeight:150},height:"100%",className:"rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit"})})),e&&(null==e?void 0:e.map(e=>(0,l.jsxs)("div",{className:"shadow-sm rounded-lg border-[1px]",children:[(0,l.jsx)("img",{src:e.thumbnail,alt:"image",className:"rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit"}),(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)(x(),{href:e.hyperlink,children:(0,l.jsxs)("button",{className:"group text-white text-sm w-fit px-4 m-3 py-2 my-2 m-2 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700",children:[(0,l.jsx)(n.G,{icon:i.DBf,className:"mr-2"}),"About"]})}),(0,l.jsx)(x(),{href:e.hyperlink,children:(0,l.jsxs)("button",{className:"group text-white text-sm w-fit px-4 m-3 py-2 m-2 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700",children:[(0,l.jsx)(n.G,{icon:i.Mdf,className:"mr-2"}),"Demo"]})})]})]},e.id)))]})]})})})},f=()=>{let{data:e,error:s,isLoading:t}=(0,d.ZP)("https://api.tjs-server.com/v1/about",e=>fetch(e,{headers:{"x-api-key":"5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(e=>e.json()));return(0,l.jsx)("div",{id:"about",className:"w-full text-black h-screen",children:(0,l.jsxs)("div",{className:"max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full",children:[(0,l.jsxs)("div",{className:"pb-8",children:[(0,l.jsxs)("p",{className:"text-4xl font-bold inline",children:["About ",String.fromCodePoint(Number("0x1F331"))]}),(0,l.jsx)("p",{className:"py-6",children:"A little about me!"})]}),s&&(0,l.jsx)("p",{children:"Uh. oh... An unknown error has occured while fetching data. Visit back later! "}),t&&(0,l.jsx)(u.Z,{count:4}),e&&(0,l.jsx)("p",{className:"text text-justify",children:e[0].text})]})})};var j=t(7577),b=t(15);t(6959);let g=()=>{let e=(0,r.useCallback)(async e=>{console.log(e),await (0,b.R)(e)},[]),s=(0,r.useCallback)(async e=>{await console.log(e)},[]);return(0,l.jsx)(j.Z,{id:"tsparticles",className:"particles",init:e,loaded:s,options:{fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#dedede"},links:{color:"#c2c2c2",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:2,straight:!1},number:{density:{enable:!0,area:800},value:40},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}})};function v(){return(0,l.jsxs)(a.default,{children:[(0,l.jsx)(g,{}),(0,l.jsx)(o,{}),(0,l.jsx)(f,{}),(0,l.jsx)(p,{})]})}},6959:function(){}},function(e){e.O(0,[626,350,845,956,667,139,744],function(){return e(e.s=307)}),_N_E=e.O()}]);