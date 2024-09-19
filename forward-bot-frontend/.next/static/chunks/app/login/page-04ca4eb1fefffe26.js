(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6103:function(e,t,r){Promise.resolve().then(r.bind(r,1193))},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},1193:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(7437),s=r(2265),n=r(6463),o=r(6648);function i(){let[e,t]=(0,s.useState)(null),[r,i]=(0,s.useState)(!1),[l,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(!1),[h,m]=(0,s.useState)(Array(8).fill("")),[g,p]=(0,s.useState)(!1),[x,f]=(0,s.useState)(null),b=(0,n.useRouter)();(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat("","whatsapp/status/1"));(await e.json()).status.isConnected&&(f("User already connected"),setTimeout(()=>{b.push("/")},3e3))}catch(e){console.error("Error checking user status:",e)}})()},[b]),(0,s.useEffect)(()=>{"qr"===e&&b.push("/login/qr-code")},[e,b]);let y=async()=>{p(!0),f(null);try{let e=await fetch("".concat("","whatsapp/generate-pairing-code"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:"1",phoneNumber:"+"+l.toString()})}),t=await e.json();console.log(t),e.ok?m(t.pairingCode.split("")):f(t.message||"Failed to generate pairing code")}catch(e){console.error("Error generating pairing code:",e),f("An error occurred while generating the pairing code")}finally{p(!1)}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-gray-100 to-purple-200 flex flex-col",children:[(0,a.jsx)("div",{className:"flex-grow flex items-center justify-center p-4",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300",children:[(0,a.jsxs)("div",{className:"text-center mb-8",children:[(0,a.jsx)(o.default,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",alt:"WhatsApp Logo",width:80,height:80,className:"mx-auto mb-4 animate-pulse"}),(0,a.jsx)("h2",{className:"text-3xl font-bold text-gray-800",children:"Login!"}),(0,a.jsx)("p",{className:"text-gray-600 mt-2",children:"Choose your login method"})]}),x&&(0,a.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4",role:"alert",children:[(0,a.jsx)("strong",{className:"font-bold",children:"Error: "}),(0,a.jsx)("span",{className:"block sm:inline",children:x})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("button",{onClick:()=>t("qr"),className:"w-full py-3 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 flex items-center justify-center transform hover:scale-105",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"})}),"Login with QR Code"]}),(0,a.jsxs)("button",{onClick:()=>i(!0),className:"w-full py-3 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 flex items-center justify-center transform hover:scale-105",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{d:"M12 4v16m8-8H4"})}),"Login with Pairing Code"]})]})]})}),r&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full animate-scaleIn",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Enter Phone Number"}),(0,a.jsx)("input",{type:"tel",value:l,onChange:e=>{let t=e.target.value.replace(/\D/g,"").slice(0,15);c(t),u(/^[0-9]{10,15}$/.test(t))},placeholder:"Enter your phone number",className:"w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"}),(0,a.jsx)("button",{onClick:y,disabled:!d||g,className:"w-full py-2 px-4 rounded-md text-white ".concat(d&&!g?"bg-gray-500 hover:bg-gray-600":"bg-gray-400"," transition duration-300 transform hover:scale-105"),children:g?"Getting Code...":"Get Pairing Code"}),g&&(0,a.jsx)("div",{className:"mt-4 flex justify-between",children:Array.from({length:8}).map((e,t)=>(0,a.jsx)("div",{className:"w-8 h-12 bg-gray-200 rounded animate-pulse"},t))}),!g&&h.some(e=>""!==e)&&(0,a.jsxs)("div",{className:"mt-4 animate-fadeIn",children:[(0,a.jsx)("p",{className:"text-center mb-2 text-gray-700",children:"Your Pairing Code:"}),(0,a.jsx)("div",{className:"flex justify-between",children:h.map((e,t)=>(0,a.jsx)("div",{className:"w-8 h-12 border-2 border-gray-500 rounded flex items-center justify-center text-lg font-bold text-gray-800 animate-popIn",style:{animationDelay:"".concat(.1*t,"s")},children:e},t))})]}),(0,a.jsx)("button",{onClick:()=>{i(!1),c(""),m(Array(8).fill(""))},className:"mt-4 w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105",children:"Close"})]})})]})}}},function(e){e.O(0,[648,971,23,744],function(){return e(e.s=6103)}),_N_E=e.O()}]);