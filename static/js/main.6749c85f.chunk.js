(this["webpackJsonpkadena-tx-tester"]=this["webpackJsonpkadena-tx-tester"]||[]).push([[0],{207:function(e,t,a){e.exports=a(377)},212:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},214:function(e,t,a){},331:function(e,t){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(41),c=a.n(r),i=(a(212),a(213),a(214),a(34)),o=a(89),s=a(22),m=a.n(s),u=a(16),p=a(394),d=a(395),h=a(387),y=a(379),g=a(195),E=a(396),f=a(392),b=a(393),v=a(44),w=a(391),k=a(388),x=a(389),S=a(390),C=function(e){return l.a.createElement(E.a,{as:"h1",style:{color:"black",fontSize:15,margin:5}},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},"code: |-")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  "+e.pactCode)),""!==e.ksName?l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},"data:")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  "+e.ksName+":")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"    keys: ["+e.envKeys+"]")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},'    pred: "'+e.pred+'"'))):l.a.createElement("div",null),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},"publicMeta:")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},'  chainId: "'+e.chainId+'"')),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  sender: "+e.acct)),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  gasLimit: "+e.gasLimit)),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  gasPrice: "+e.gasPrice)),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  ttl: "+e.ttl)),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},'networkId: "'+e.ver+'"')),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},"signers:")),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  - public: "+e.pubKey)),e.caps.length>0?l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"    caps:")),e.caps.map((function(e,t){var a=e.replace("(","").replace(")","").split(" ");return l.a.createElement("div",{key:t},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"      - name: "+a.shift())),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"        args: ["+a.map((function(e){return isNaN(e)?e:e.includes(".")?parseFloat(e):JSON.stringify({int:e})}))+"]")))}))):l.a.createElement("div",null),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("code",{style:{wordBreak:"break-all"}},"type: exec")))},O=function(e){var t=[{menuItem:"JSON",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5,fontWeight:"bold"}},l.a.createElement(d.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"JSON Request Object (incomplete)":"JSON Request Object"),l.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15}},e.cmd),l.a.createElement(d.a.Header,{style:{marginBottom:10,marginTop:10}},"API Host"),l.a.createElement("code",{style:{wordBreak:"break-all"}},e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}},{menuItem:"curl cmd",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement("div",null,l.a.createElement(d.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5}},l.a.createElement(d.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"Curl Command (incomplete)":"Curl Command"),l.a.createElement("div",{style:{marginBottom:5}}),l.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginBottom:20,fontWeight:"bold"}},'curl -sk -H "Content-Type: application/json" -d \''.concat(e.cmd,"' -X POST ").concat(e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}},{menuItem:"yaml",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement("div",null,l.a.createElement(d.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5}},l.a.createElement(d.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"YAML Request Format (incomplete)":"YAML Request Format"),l.a.createElement(C,{pactCode:e.pactCode,caps:e.caps,server:e.server,ver:e.ver,acct:e.acct,pubKey:e.pubKey,privKey:e.privKey,chainId:e.chainId,creationTime:e.creationTime,ttl:e.ttl,gasPrice:e.gasPrice,gasLimit:e.gasLimit,envKeys:e.envKeys,pred:e.pred,ksName:e.ksName}),l.a.createElement(d.a.Header,{style:{marginBottom:10,marginTop:10}},"API Host"),l.a.createElement("div",{style:{margin:20,marginBottom:0}},l.a.createElement("code",{style:{wordBreak:"break-all"}},e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}}];return l.a.createElement("div",null,l.a.createElement(p.a,{panes:t}))},T=a(58),j=a.n(T),B=localStorage.getItem("nodes"),P=function(){var e=Object(n.useState)(["(coin.GAS)"]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),C=(s[0],s[1],Object(n.useState)("sig")),T=Object(u.a)(C,2),P=T[0],I=T[1],N=Object(n.useState)(""),A=Object(u.a)(N,2),F=A[0],H=A[1],K=Object(n.useState)(""),L=Object(u.a)(K,2),J=L[0],W=L[1],D=Object(n.useState)("api.testnet.chainweb.com"),R=Object(u.a)(D,2),G=R[0],q=R[1],z=Object(n.useState)("testnet04"),X=Object(u.a)(z,2),M=X[0],Y=X[1],U=Object(n.useState)(""),V=Object(u.a)(U,2),$=V[0],Q=V[1],Z=Object(n.useState)(""),_=Object(u.a)(Z,2),ee=_[0],te=_[1],ae=Object(n.useState)(""),ne=Object(u.a)(ae,2),le=ne[0],re=ne[1],ce=Object(n.useState)(""),ie=Object(u.a)(ce,2),oe=ie[0],se=ie[1],me=Object(n.useState)(""),ue=Object(u.a)(me,2),pe=ue[0],de=ue[1],he=Object(n.useState)(Math.round((new Date).getTime()/1e3)-15),ye=Object(u.a)(he,2),ge=ye[0],Ee=ye[1],fe=Object(n.useState)(28800),be=Object(u.a)(fe,2),ve=be[0],we=be[1],ke=Object(n.useState)(1e-5),xe=Object(u.a)(ke,2),Se=xe[0],Ce=xe[1],Oe=Object(n.useState)(1500),Te=Object(u.a)(Oe,2),je=Te[0],Be=Te[1],Pe=Object(n.useState)(""),Ie=Object(u.a)(Pe,2),Ne=Ie[0],Ae=Ie[1],Fe=Object(n.useState)([]),He=Object(u.a)(Fe,2),Ke=He[0],Le=He[1],Je=Object(n.useState)(""),We=Object(u.a)(Je,2),De=We[0],Re=We[1],Ge=Object(n.useState)(""),qe=Object(u.a)(Ge,2),ze=qe[0],Xe=qe[1],Me=Object(n.useState)(""),Ye=Object(u.a)(Me,2),Ue=Ye[0],Ve=Ye[1],$e=Object(n.useState)(""),Qe=Object(u.a)($e,2),Ze=Qe[0],_e=Qe[1],et=Object(n.useState)(""),tt=Object(u.a)(et,2),at=tt[0],nt=tt[1],lt=Object(n.useState)(!1),rt=Object(u.a)(lt,2),ct=rt[0],it=rt[1],ot=Object(n.useState)(!1),st=Object(u.a)(ot,2),mt=st[0],ut=st[1],pt=Object(n.useState)(""),dt=Object(u.a)(pt,2),ht=dt[0],yt=dt[1],gt=Object(n.useState)(""),Et=Object(u.a)(gt,2),ft=Et[0],bt=Et[1],vt=Object(n.useState)(!1),wt=Object(u.a)(vt,2),kt=wt[0],xt=wt[1],St=Object(n.useState)(!1),Ct=Object(u.a)(St,2),Ot=Ct[0],Tt=Ct[1],jt=Object(n.useState)(!1),Bt=Object(u.a)(jt,2),Pt=Bt[0],It=Bt[1],Nt=Object(n.useState)(""),At=Object(u.a)(Nt,2),Ft=At[0],Ht=At[1],Kt=Object(n.useState)(!1),Lt=Object(u.a)(Kt,2),Jt=Lt[0],Wt=Lt[1],Dt=Object(n.useState)(!1),Rt=Object(u.a)(Dt,2),Gt=Rt[0],qt=Rt[1],zt=Object(n.useState)(null===B?[{key:"0",value:"api.testnet.chainweb.com",text:"api.testnet.chainweb.com"},{key:"1",value:"api.chainweb.com",text:"api.chainweb.com"}]:[{key:"0",value:"api.testnet.chainweb.com",text:"api.testnet.chainweb.com"},{key:"1",value:"api.chainweb.com",text:"api.chainweb.com"}].concat(JSON.parse(B))),Xt=Object(u.a)(zt,2),Mt=Xt[0],Yt=Xt[1];Object(n.useEffect)((function(){yt(Zt())}),[ee,a,P,F,M,$,le,oe,pe,ve,Se,je,Ke,De,kt]);var Ut=function(e){return{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}},Vt="https://".concat(G,"/chainweb/0.0/").concat(M,"/chain/").concat(pe,"/pact"),$t=function(e){var t=[];return e.map((function(e,a){var n=(e=e.replace("(","").replace(")","")).split(" ");t.push({name:n.shift(),args:n.map((function(e){return isNaN(e)?e.replace('"',"").replace('"',""):e.includes(".")?parseFloat(e):{int:e}}))})})),t},Qt=function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(localStorage.getItem("nodes"));case 2:null===(t=a.sent)?localStorage.setItem("nodes",JSON.stringify([e])):0===JSON.parse(t).filter((function(t){return t.value===e.value})).length&&localStorage.setItem("nodes",JSON.stringify(JSON.parse(t).concat([e])));case 4:case"end":return a.stop()}}))},Zt=function(){try{var e=j.a.api.prepareExecCmd(le?[{publicKey:le,secretKey:oe,clist:$t(a)}]:[],ge.toString(),ee.replace("\n",""),""!==ze?Object(o.a)({},ze,{pred:De,keys:Ke}):{},j.a.lang.mkMeta($,pe,Se,je,ge,ve),M);return"sig"===P&&e.sigs[0]&&(e.sigs[0].sig=F),JSON.stringify(e)}catch(t){return t.message}return"Enter a valid keypair to preview JSON request (or click generate)"},_t=function(e){return!!/^[0-9a-fA-F]+$/.test(e)},ea=function(e){return 64===e.length&&!!_t(e)},ta=function(e){return"("!==e[0]||")"!==e[e.length-1]},aa=function(e){var t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return q(e),n.prev=1,n.next=4,m.a.awrap(fetch("https://".concat(e,"/info")));case 4:return t=n.sent,n.next=7,m.a.awrap(t.json());case 7:a=n.sent,Y(a.nodeVersion),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),Y("not a chainweb node");case 14:case"end":return n.stop()}}),null,null,[[1,11]])};function na(e){try{var t=document.getElementById("to-pub-file").files[0];(".kda"!==t.name.substr(t.name.length-4)||t.name.includes(e?"private":"public"))&&alert("file must be a .kda ".concat(e?"public":"private"," key file"));var a=new FileReader;a.onload=function(t){var a=t.target.result;if(e)re(a.replace("public: ",""));else{var n=a.split("\n");re(n[0].replace("public: ","")),se(n[1].replace("secret: ",""))}},a.readAsText(t,"UTF-8")}catch(n){console.log(n),alert("file must be a .kda ".concat(e?"public":"private"," key file"))}}var la=function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.awrap(j.a.fetch.listen({listen:e},Vt));case 3:t=a.sent,It(!1),"failure"===t.result.status?Tt(!0):Tt(!1),Ht(t),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),null,null,[[0,9]])},ra=(""!==Ft?[{menuItem:"Result Summary",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(d.a,{style:{marginTop:5,marginBottom:15},info:!0,error:Ot},l.a.createElement(d.a.Header,null,JSON.stringify(Ft.result.status.replace('"',""))),l.a.createElement("div",null,l.a.createElement("p",{style:{wordBreak:"break-all"}},"Result: "+JSON.stringify(Ft.result.data))),l.a.createElement("div",null,l.a.createElement("p",{style:{wordBreak:"break-all"}},"Block Height: "+JSON.stringify(Ft.metaData.blockHeight))),l.a.createElement("div",null,l.a.createElement("p",{style:{wordBreak:"break-all"}},"Block Hash: "+JSON.stringify(Ft.metaData.blockHash)))))}},{menuItem:"JSON Response",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(d.a,{style:{marginTop:5,marginBottom:15},info:!0,error:Ot},l.a.createElement(d.a.Header,{style:{marginTop:5,marginBottom:15}},JSON.stringify(Ft.result.status)),l.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginBottom:5}},JSON.stringify(Ft,null,"\t"))))}}]:[]).concat([{menuItem:"Request Key",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(d.a,{style:{marginTop:5,marginBottom:25},info:!0,error:kt},l.a.createElement(d.a.Header,null,kt?"Send Failure":"Request Key"),l.a.createElement("p",null,ft),Pt?l.a.createElement("div",null,l.a.createElement("p",null,"Please wait your transaction is being mined...."),l.a.createElement(h.a,{active:!0,inline:!0})):l.a.createElement("div",null)))}},{menuItem:"Poll curl cmd",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(d.a,{style:{marginTop:5,marginBottom:25},info:!0,error:kt},l.a.createElement(d.a.Header,{style:{marginBottom:10}},kt?"Send Failure":"Poll Curl Command"),kt?"TX must make it to the mempool to see Poll Curl Command":l.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginTop:15,marginBottom:20}},'curl -sk -H "Content-Type: application/json" -d \'{"requestKeys": ["'.concat(ft,"\"]}' -X POST ").concat(Vt==="https://".concat(G,"/chainweb/0.0/").concat(M,"/chain//pact")?"Select Chain Id":"not a chainweb node"===M?"Select a valid Chainweb node":Vt+"/api/v1/poll")),Pt?l.a.createElement("div",null,l.a.createElement("p",null,"Please wait your transaction is being mined...."),l.a.createElement(h.a,{active:!0,inline:!0})):l.a.createElement("div",null)))}},{menuItem:"Listen curl cmd",render:function(){return l.a.createElement(p.a.Pane,null,l.a.createElement(d.a,{style:{marginTop:5,marginBottom:25},info:!0,error:kt},l.a.createElement(d.a.Header,{style:{marginBottom:10}},kt?"Send Failure":"Listen Curl Command"),kt?"TX must make it to the mempool to see Listen Curl Command":l.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginTop:15,marginBottom:20}},'curl -sk -H "Content-Type: application/json" -d \'{"listen": "'.concat(ft,"\"}' -X POST ").concat(Vt==="https://".concat(G,"/chainweb/0.0/").concat(M,"/chain//pact")?"Select Chain Id":"not a chainweb node"===M?"Select a valid Chainweb node":Vt+"/api/v1/listen")),Pt?l.a.createElement("div",null,l.a.createElement("p",null,"Please wait your transaction is being mined...."),l.a.createElement(h.a,{active:!0,inline:!0})):l.a.createElement("div",null)))}}]);return l.a.createElement(g.a,{columns:2,padded:!0,scrollable:!0,verticalAlign:"top"},l.a.createElement(g.a.Column,{textAlign:"center",style:{overflow:"auto"}},l.a.createElement("div",{style:{overflow:"auto",height:"100vh"}},l.a.createElement("img",{src:"https://explorer.chainweb.com/static/1lv9xhxyhlqc262kffl55w08ms1cvxsnrv49zhvm0b799dsi0v0i-kadena-k-logo.png",style:{height:70,marginTop:50}}),l.a.createElement(E.a,{as:"h6",style:{color:"black",fontWeight:"bold",fontSize:40,marginTop:20}},"Command Preview"),l.a.createElement(O,{pactCode:ee,caps:a,server:G,ver:M,acct:$,pubKey:le,privKey:oe,chainId:pe,creationTime:ge,ttl:ve,gasPrice:Se,gasLimit:je,envKeys:Ke,pred:De,ksName:ze,cmd:ht,host:Vt}),l.a.createElement(y.a,{style:{backgroundColor:"#B54FA3",color:"white",marginBottom:10,marginTop:20,width:340},loading:ct,onClick:function(){return function(){var e,t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,bt(""),xt(!1),Tt(!1),It(!1),Ht(""),it(!0),Ve(""),qt(!1),""!==ze?Object(o.a)({},ze,{pred:De,keys:Ke}):{},e=JSON.parse(ht),n.next=13,m.a.awrap(fetch("".concat(Vt,"/api/v1/local"),Ut(e)));case 13:return t=n.sent,n.next=16,m.a.awrap(t.json());case 16:a=n.sent,console.log(a),it(!1),"failure"===a.result.status?(Ve("TX preview failed:"),_e(a.result.error.message),nt("")):(Ve("TX preview suceeded:"),console.log(a.gas),_e("Result: "+JSON.stringify(a.result.data)),nt(a.gas*parseFloat(Se)),Wt(!0)),n.next=27;break;case 22:n.prev=22,n.t0=n.catch(0),it(!1),Ve("CHECK YOUR INPUTS"),""===ee?(_e("Enter some Pact code"),nt("")):""===pe?(_e("Set Chain ID"),nt("")):"Unexpected token V in JSON at position 0"===n.t0.message?(_e("Make sure you signed after you filled in the rest of the transaction details"),nt("")):(_e(n.t0.message),nt(""));case 27:case"end":return n.stop()}}),null,null,[[0,22]])}()},disabled:""===pe||""===ee},"Preview Transaction"),""===Ue?l.a.createElement("div",null," "):l.a.createElement("div",{style:{margin:10,marginRight:20,marginBottom:10}},l.a.createElement(d.a,{style:{marginTop:5,marginBottom:15},info:!0,error:"TX preview suceeded:"!==Ue},l.a.createElement(d.a.Header,null,Ue),l.a.createElement("div",null,l.a.createElement("p",{style:{wordBreak:"break-all"}},Ze)),l.a.createElement("div",null,l.a.createElement("p",{style:{wordBreak:"break-all"}},""===at?"":"Gas Cost: "+at)))),"TX preview suceeded:"===Ue?l.a.createElement("div",null,l.a.createElement(y.a,{style:{backgroundColor:"#B54FA3",color:"white",marginBottom:20,marginTop:20,width:340},loading:mt,onClick:function(){return function(){var e,t,a,n,l;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return Wt(!1),r.prev=1,xt(!1),ut(!0),qt(!0),""!==ze&&Object(o.a)({},ze,{pred:De,keys:Ke}),e=JSON.parse(ht),t={cmds:[e]},r.next=10,m.a.awrap(fetch("".concat(Vt,"/api/v1/send"),Ut(t)));case 10:return a=r.sent,console.log(a),r.next=14,m.a.awrap(a.text());case 14:n=r.sent,console.log(n),"Validation"===n.substring(0,10)?(ut(!1),bt(n),xt(!0)):(l=JSON.parse(n),bt(l.requestKeys[0]),ut(!1),It(!0),la(l.requestKeys[0])),r.next=26;break;case 19:r.prev=19,r.t0=r.catch(1),console.log(r.t0),console.log(r.t0.msg),ut(!1),bt("Your requested transaction's inputs failed to validate. If your preview is succeeding and you are seeing this message it is because SEND TRANSACTIONS MUST BE SIGNED"),xt(!0);case 26:case"end":return r.stop()}}),null,null,[[1,19]])}()},disabled:Pt||!Jt||""===$},Jt?ea(le)?"Send Transaction":"Send Unsigned TX":"Please Preview Again"),Gt?l.a.createElement(p.a,{panes:ra,style:{marginBottom:350}}):l.a.createElement("div",null)):l.a.createElement("div",null))),l.a.createElement(g.a.Column,{style:{overflow:"auto",backgroundColor:"\t#99468A"}},l.a.createElement("div",{style:{overflow:"auto",height:"100vh"}},l.a.createElement(f.a,null,l.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Pact"),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Pact Code",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Pact Code? "),l.a.createElement(b.a.Content,null,"Pact is Kadena's smart contract programming language. Type arbitrary pact expressions in the inpout box below. For more help look at our docs: ",l.a.createElement("a",null,"https://pact-language.readthedocs.io/en/stable/")))),l.a.createElement(w.a,{style:{width:"440px",height:"200px",wordBreak:"break-all"},placeholder:'                                                                                                        ;;coin contract examples:                                                                                  (coin.details "nick-cage")                                                                                                                                  (coin.transfer "from" "to" 12.4)                                                                              (coin.transfer-create "from" "to" (read-keyset "to-ks") 4.2)                                                                            (coin.create-account "my-new-acct" (read-keyset "my-new-ks"))                           ;;arbitrary contract calls:                                                                                  (free.my-contract-name.foo "param-one" "param-two")                           (user.my-contract-name.bar [list, of, stuff] 1.0)                               ',value:ee,onChange:function(e){return te(e.target.value)}}))),l.a.createElement(f.a,{onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},l.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Signing"),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Sender Account",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is the Sender Account? "),l.a.createElement(b.a.Content,null,"Sender Account represents the account name you use to identify yourself in chainweb. You'll be asked to sign with associated key/keys when you make transactions. Account names need to be unique and are assosciated to keypairs that can sign its transactions. The simplest way would be to use your public key as your account name"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"user",iconPosition:"left",placeholder:"Account Name",value:$,onChange:function(e){return Q(e.target.value)}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement(f.a.Field,null,l.a.createElement(k.a,{label:l.a.createElement("label",{style:{color:"white"}},"Key Pair",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},l.a.createElement(b.a.Header,null,"What is a Keypair?"),l.a.createElement(b.a.Content,null,'A keypair is composed of a public key and a private key. If you don\'t have a keypair, generate one in the Kadena wallet, or click \'Generate\' for tx\'s that don\'t require a particular account to sign it. For example, to do a (coin.transfer "from" "to" 1.0) you must sign with the keys assosciated with the transfering account, but to do an account info call such as (coin.details "nick-cage"), you can sign with a dummy key pair as there are no capabilities assosciated with this transaction'))),name:"radioGroup",value:"kp",checked:"kp"===P,onChange:function(){return I("kp")}}),l.a.createElement(f.a.Field,null,l.a.createElement(k.a,{label:l.a.createElement("label",{style:{color:"white"}},"Signature",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},l.a.createElement(b.a.Header,null,"What is a Signature?"),l.a.createElement(b.a.Content,null,"This is a safe way to sign your transaction offline without pasting your private key on the web. Once you fill in all the parameters for your desired trasaction you will be provided a hash that you can copy and sign offline with the Chainweaver wallet or pact cli. You must sign with the corresponding private key of the public key provided."))),name:"radioGroup",value:"sig",checked:"sig"===P,onChange:function(){return I("sig")}}))),l.a.createElement(x.a,{placeholder:"Public Key",icon:"key",iconPosition:"left",style:{width:"440px"},value:le,onChange:function(e){return re(e.target.value)}}),"kp"===P?l.a.createElement("div",null,l.a.createElement(x.a,{placeholder:"Private Key",icon:"lock",iconPosition:"left",style:{marginTop:5,width:"440px"},value:oe,onChange:function(e){return se(e.target.value)}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("input",{style:{marginTop:5,width:"270px",flex:1},id:"to-pub-file",type:"file",onChange:function(e){return na(!1)}}),l.a.createElement(d.a,{color:"purple",style:{marginTop:5,marginRight:0,marginLeft:5,width:270,flex:1,bottom:0,right:0},onClick:function(){return function(){var e=j.a.crypto.genKeyPair();Q("fake-account"),re(e.publicKey),se(e.secretKey)}()}},l.a.createElement(d.a.Header,{style:{textAlign:"center"}},"Generate")))):l.a.createElement("div",null,l.a.createElement("input",{style:{marginTop:5,width:"440px"},id:"to-pub-file",type:"file",onChange:function(e){return na(!0)}}),l.a.createElement(d.a,{color:"purple",style:{marginTop:5,marginBottom:5,width:"440px",textAlign:"center"}},l.a.createElement(d.a.Header,null,"Hash to Sign",l.a.createElement(y.a,{circular:!0,icon:"copy",basic:!0,disabled:""===pe||""===ee||""===le,style:{marginLeft:5,marginTop:0},onClick:function(e){try{navigator.clipboard.writeText(JSON.parse(ht).hash)}catch(e){console.log("can't copy without https")}}})),l.a.createElement("p",{style:{wordBreak:"break-all"}},""===pe||""===ee||""===le?"please fill in all parameters first":ea(le)?JSON.parse(ht).hash:"enter a valid public key")),l.a.createElement(x.a,{placeholder:"TX Signature",icon:"pencil alternate",iconPosition:"left",style:{width:"440px"},value:F,onChange:function(e){return H(e.target.value)}}))),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Capabilities",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},l.a.createElement(b.a.Header,null,"What is a Capability?"),l.a.createElement(b.a.Content,null,"In Pact, a capability is a way to scope what the signing keypairs are allowed to perform in code. The defauly capability is GAS, as all transactions need to have a keypair signing for the gas fee. Another standard capability is the TRANSFER capability that requires a user to specify a from-account, to-account, and amount. This means that you are allowing the scoped signature to only perform the transfer amount specified. Example: ",l.a.createElement("b",null,'(coin.TRANSFER "from-account" "to-account" 10.0)')))),a.map((function(e,t){return l.a.createElement(x.a,{placeholder:"",key:t,icon:"code",iconPosition:"left",style:{width:"440px",marginTop:0===t?0:5},value:e,action:l.a.createElement(y.a,{icon:"minus",onClick:function(){a.splice(t,1),r(Object(i.a)(a))}})})})),l.a.createElement(x.a,{placeholder:'(coin.TRANSFER "from" "to" 1.0)',icon:"code",iconPosition:"left",style:{width:"440px",marginTop:5,color:ta(J)&&""!==J?"red":"black"},value:J,onKeyDown:function(e){13!==e.keyCode&&9!==e.keyCode||(console.log(J),ta(J)||(console.log("here"),r([].concat(Object(i.a)(a),[J])),W("")))},onChange:function(e){return W(e.target.value)},action:l.a.createElement(y.a,{icon:"add",onClick:function(){r([].concat(Object(i.a)(a),[J])),W("")},disabled:ta(J)})})),l.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Network"),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Chain ID",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Chain ID? "),l.a.createElement(b.a.Content,null,"Chain ID is the specific chain within chainweb you are targeting with your transaction. For more info look at: ",l.a.createElement("a",null,"https://www.youtube.com/watch?v=hYvXxFbsN6I")," "))),l.a.createElement(S.a,{style:{width:"440px"},placeholder:"Chain ID",options:[{key:"0",value:"0",text:"0"},{key:"1",value:"1",text:"1"},{key:"2",value:"2",text:"2"},{key:"3",value:"3",text:"3"},{key:"4",value:"4",text:"4"},{key:"5",value:"5",text:"5"},{key:"6",value:"6",text:"6"},{key:"7",value:"7",text:"7"},{key:"8",value:"8",text:"8"},{key:"9",value:"9",text:"9"},{key:"10",value:"10",text:"10"},{key:"11",value:"11",text:"11"},{key:"12",value:"12",text:"12"},{key:"13",value:"13",text:"13"},{key:"14",value:"14",text:"14"},{key:"15",value:"15",text:"15"},{key:"16",value:"16",text:"16"},{key:"17",value:"17",text:"17"},{key:"18",value:"18",text:"18"},{key:"19",value:"19",text:"19"}],onChange:function(e,t){var a=t.value;return de(a)}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Server",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Server? "),l.a.createElement(b.a.Content,null,"Server is the Chainweb node you would like to execute the transaction on "))),l.a.createElement(S.a,{style:{width:"440px"},placeholder:"Server",search:!0,onClose:function(e,t){var a=t.value,n={key:Math.random().toString(),text:a,value:a};Yt([].concat(Object(i.a)(Mt),[n])),Qt(n)},options:Mt,value:G,allowAdditions:!0,onAddItem:function(e,t){var a=t.value,n={key:a,text:a,value:a};Yt([].concat(Object(i.a)(Mt),[n])),Qt(n)},onSearchChange:function(e,t){t.value;aa(e.target.value)},onChange:function(e,t){var a=t.value;aa(a)}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Version",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Version? "),l.a.createElement(b.a.Content,null,"This defines what version of Chainweb you are targeting. Mainnet is mainnet01, Testnet is testnet04"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"sync",iconPosition:"left",placeholder:"Version",value:M,disabled:!0})),l.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Meta Data"),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Chain ID",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Chain ID? "),l.a.createElement(b.a.Content,null,"Chain ID is the specific chain within chainweb you are targeting with your transaction. For more info look at: ",l.a.createElement("a",null,"https://www.youtube.com/watch?v=hYvXxFbsN6I")," "))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"paper plane",iconPosition:"left",placeholder:"Chain ID",disabled:!0,value:pe})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Sender",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Sender? "),l.a.createElement(b.a.Content,null,"In the absence of a gas capability, the account specified as sender will be defaulted to the account name that signed the transaction"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"user",iconPosition:"left",placeholder:"Sender",disabled:!0,value:$})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Creation Time",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Creation Time? "),l.a.createElement(b.a.Content,null,"This specifies that time that your transaction was created. The default is to use current time (in seconds)"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"calendar",iconPosition:"left",placeholder:"Creation Time",value:ge,onChange:function(e){return Ee(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"TTL",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is TTL? "),l.a.createElement(b.a.Content,null,"Time to Live for a transaction. Your transaction will stay in the mempool for the specified interval between creation time and time to live (in seconds)"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"clock",iconPosition:"left",placeholder:"Time To Live",value:ve,onChange:function(e){return we(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Gas Price",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Gas price? "),l.a.createElement(b.a.Content,null,"Gas Price is the amount you are willing to pay for each unit of computation on chain. Note that transactions are ordered by miners based on this price, so if you want your transaction to be included in the next block be generous!! Default is 1e-6"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"dollar sign",iconPosition:"left",placeholder:"Gas Price",value:Se,onChange:function(e){console.log(e.target.value),0===parseFloat(e.target.value)?Ce(e.target.value):Ce(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Gas Limit",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is Gas Limit? "),l.a.createElement(b.a.Content,null,"Gas Limit is the maximum number of computational units you are willing to use. If a transactions takes less gas than specified, you will only be charged how much it effectively takes. Fee for a transaction will be (Gas Price * Gas Limit)"))),l.a.createElement(f.a.Input,{style:{width:"440px"},icon:"tint",iconPosition:"left",placeholder:"Gas Limit",value:je,onChange:function(e){return Be(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),l.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Env Data (Advanced)"),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Keyset Name",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is a Keyset Name? "),l.a.createElement(b.a.Content,null,'It is a way to refer to the following keyset predicate and public key. For example, the transfer-create functions expects the user to pass in a new keyset to assosciate to and guard the account that is about to be created. The syntax is as follows: (coin.transfer-create "from" "to" (read-keyset "THIS-NAME-JUST-DEFINED") 10.0). Here were are telling Pact how to find the newly defined keyset to assosciate to the account to be created. To better understand this advanced section, go to ',l.a.createElement("a",null,"pact.kadena.io")," create a new keyset name under the data section, assosciate a keypair to it, then go to the results tab"))),l.a.createElement(x.a,{placeholder:"Keyset Name",icon:"copy",iconPosition:"left",style:{width:"440px"},value:ze,onChange:function(e){return Xe(e.target.value)}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Keyset Predicate",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},l.a.createElement(b.a.Header,null,"What is a Keyset Predicate? "),l.a.createElement(b.a.Content,null,'Keyset Predicates allow you to chose which type of signing rules a particular account needs to enforce. "keys-all" will require all the keys assosciated to an account to validate a signature. "keys-any will require only one of the keys assosciated to an account to validate a signature. Note that for single sig accounts both predicates are the same in practice'))),l.a.createElement(S.a,{style:{width:"440px"},placeholder:"Predicate",options:[{key:"0",value:"keys-all",text:"keys-all"},{key:"1",value:"keys-any",text:"keys-any"}],onChange:function(e,t){var a=t.value;return Re(a)}})),l.a.createElement(f.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},l.a.createElement("label",{style:{color:"white"}},"Public Key",l.a.createElement(b.a,{trigger:l.a.createElement(v.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},l.a.createElement(b.a.Header,null,"What is this Public Key?"),l.a.createElement(b.a.Content,null,"This is the public key that you are assosicating to the given account. You can assosciate more than one key for each account to allow for multi-sig"))),Ke.map((function(e,t){return l.a.createElement(x.a,{placeholder:"",key:t,icon:"key",iconPosition:"left",style:{width:"440px",marginTop:0===t?0:5},value:e,action:l.a.createElement(y.a,{icon:"minus",onClick:function(){Ke.splice(t,1),Le(Object(i.a)(Ke))}})})})),l.a.createElement(x.a,{placeholder:"Public Key",icon:"key",iconPosition:"left",style:{width:"440px",marginTop:5,marginBottom:100},value:Ne,onChange:function(e){return Ae(e.target.value)},onKeyDown:function(e){13!==e.keyCode&&9!==e.keyCode||_t(Ne)&&ea(Ne)&&(Le([].concat(Object(i.a)(Ke),[Ne])),Ae(""))},action:l.a.createElement(y.a,{icon:"add",onClick:function(){Le([].concat(Object(i.a)(Ke),[Ne])),Ae("")},disabled:!(_t(Ne)&&ea(Ne))})}))))))};var I=function(){return l.a.createElement("div",null,l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(376);c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.6749c85f.chunk.js.map