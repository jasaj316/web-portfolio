import{d as r,o as n,c,a as e,t as u,n as x,p as f,b as g,r as $,F as C,e as y,f as p,m}from"./index-d8b668a8.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const I={class:"card"},k=["src","alt"],V=r({__name:"Card",props:{title:null,src:null,alt:null},setup(s){const t=s;return(l,o)=>(n(),c("figure",I,[e("figcaption",null,u(t.title),1),e("img",{onClick:o[0]||(o[0]=a=>l.$emit("imgClicked",t.title,t.src,t.alt)),src:t.src,alt:t.alt},null,8,k)]))}});const j=_(V,[["__scopeId","data-v-18b7fcf9"]]),P=s=>(f("data-v-60e9df4a"),s=s(),g(),s),S={class:"modal-container"},A=["src","alt"],M=P(()=>e("div",{class:"caption-bg"},null,-1)),B=r({__name:"Modal",props:{modalVis:null,title:null,src:null,alt:null},setup(s){const t=s;return(l,o)=>(n(),c("div",{id:"modal-bg",onClick:o[0]||(o[0]=a=>l.$emit("imgClicked")),class:x(t.modalVis)},[e("figure",S,[e("img",{class:"modal-img",src:t.src,alt:t.alt},null,8,A),M,e("figcaption",null,u(t.title),1)])],2))}});const T=_(B,[["__scopeId","data-v-60e9df4a"]]),w=s=>(f("data-v-013bb895"),s=s(),g(),s),F=w(()=>e("div",null,[e("h1",null,"My Projects"),e("h3",null,"A selection of my creations")],-1)),L={class:"portfolio"},N={id:"portfolio-items"},z={class:"cards"},D=r({__name:"Projects",setup(s){const t=[{title:"Title1",src:"src/assets/img/Automoblox.jpg",alt:"alttext"},{title:"Title2",src:"src/assets/img/Automoblox.jpg",alt:"alttext"},{title:"Title3",src:"src/assets/img/Automoblox.jpg",alt:"alttext"}],l=$({modalVis:"hidden",title:"",src:"",alt:""});function o(a="",i="",d=""){l.modalVis=="hidden"?(l.modalVis="vis",l.title=a,l.src=i,l.alt=d):l.modalVis="hidden"}return(a,i)=>(n(),c("main",null,[F,e("div",L,[e("article",N,[(n(),c(C,null,y(t,d=>e("div",z,[p(j,m({onImgClicked:i[0]||(i[0]=(v,b,h)=>o(v,b,h))},d),null,16)])),64))])]),p(T,m({onImgClicked:o},l),null,16)]))}});const q=_(D,[["__scopeId","data-v-013bb895"]]);export{q as default};
