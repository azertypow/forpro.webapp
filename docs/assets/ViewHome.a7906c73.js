import{d as p,u as $,_ as u,o as i,c as n,a as t,n as P,r as d,t as f,F as g,b as S,e as k,f as v,g as h,h as w,i as I,w as b}from"./index.4cc3f1f5.js";const N=p({props:{src:{type:String,required:!0},filterSVGFileName:{type:String,required:!0}},data(){return{forProDataStore:$()}},computed:{webkitMask(){return`url(masks/${this.filterSVGFileName}--border--${this.forProDataStore.fpThemeName}.svg)`},maskImage(){return`url(masks/${this.filterSVGFileName}.svg)`}}}),C={class:"v-image-mask"},D=["src"],L=["src"];function V(e,r,s,a,l,c){return i(),n("div",C,[t("img",{src:`masks/${e.filterSVGFileName}--border--${e.forProDataStore.fpThemeName}.svg`,alt:"",class:"v-image-mask__mask"},null,8,D),t("img",{src:e.src,alt:"",class:"v-image-mask__img",style:P({webkitMask:e.webkitMask,maskImage:e.maskImage})},null,12,L)])}var A=u(N,[["render",V],["__scopeId","data-v-fa19dda8"]]);const H=p({components:{ImageMask:A},props:{FPApiSectionIntro:{required:!0,type:Object}}}),M={class:"v-section-introduction fp-section--default fp-with-gutter fp-grid-container fp-max-width"},E={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},B=["innerHTML"],q={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"};function O(e,r,s,a,l,c){const _=d("image-mask");return i(),n("section",M,[t("div",E,[t("h1",null,f(e.FPApiSectionIntro.title),1),t("div",{innerHTML:e.FPApiSectionIntro.text},null,8,B)]),e.FPApiSectionIntro.cover?(i(!0),n(g,{key:0},S(e.FPApiSectionIntro.cover,m=>(i(),n("div",q,[k(_,{"filter-s-v-g-file-name":"forme-1",class:"v-section-introduction__cover",alt:"cover intruduction",src:m.url},null,8,["src"])]))),256)):v("",!0)])}var j=u(H,[["render",O]]);const G=p({data(){return{forProDataStore:$()}},computed:{backgroundImage(){return`url("images/background--${this.forProDataStore.fpThemeName}.svg")`}}}),R=["src"];function x(e,r,s,a,l,c){return i(),n("section",{class:"v-section-header fp-with-gutter",style:P({backgroundImage:e.backgroundImage})},[t("img",{src:`images/logo--${e.forProDataStore.fpThemeName}.svg`,class:"v-section-header__logo fp-with-gutter fp-grid-coll-22-24 fp-grid-skip-1-24",alt:"header logo"},null,8,R)],4)}var z=u(G,[["render",x]]);const Y=p({props:{FPApiSectionPlan:{required:!0,type:Object}},data(){return{top:NaN,bottom:NaN,height:NaN,translateFrom_inPercent:-100,translateTo_inPercent:0}},beforeMount(){window.addEventListener("scroll",this.setPlanPosition)},methods:{setPlanPosition(){this.$refs.planContainer instanceof HTMLElement&&(this.top=this.$refs.planContainer.getBoundingClientRect().top,this.bottom=this.$refs.planContainer.getBoundingClientRect().bottom,this.height=this.$refs.planContainer.getBoundingClientRect().height)}},computed:{distance(){return this.height*1.5},topFromBottomOfScreen(){return this.top-window.innerHeight},percentDistance(){const e=this.topFromBottomOfScreen*-100/this.distance;return e<0?0:e>100?100:e},transitionStyleValue(){return{transformValue:`translate(0, ${(100-this.percentDistance)*-1/2}%) scale(${(s=>(s-0)*(1-.85)/(100-0)+.85)(this.percentDistance)})`,opacityValue:`${this.percentDistance/100}`}}}}),J={class:"v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width"},K={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},Q=["innerHTML"],U=t("div",{class:"fp-grid-coll-12-24"},null,-1),W=t("div",{class:"fp-grid-coll-1-24"},null,-1),X={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-22-24"},Z={class:"v-section-plan__plan-container",ref:"planContainer"},ee=t("div",{class:"v-section-plan__section-name"},[t("div",null,"section 1"),t("div",null,"section 2"),t("div",null,"section 3"),t("div",null,"section 4")],-1),te=t("div",null,null,-1),ie=t("div",null,null,-1),ne=t("div",null,null,-1),oe=t("div",null,null,-1),se=[te,ie,ne,oe];function re(e,r,s,a,l,c){return i(),n("section",J,[t("div",K,[t("h1",null,f(e.FPApiSectionPlan.title),1),t("div",{innerHTML:e.FPApiSectionPlan.text},null,8,Q)]),U,W,t("div",X,[t("div",Z,[ee,t("div",{class:"v-section-plan__plan",style:P({transform:e.transitionStyleValue.transformValue,opacity:e.transitionStyleValue.opacityValue})},se,4)],512)])])}var ae=u(Y,[["render",re]]);const le=p({components:{ImageMask:A},data(){return{isActive:!1}},mounted(){this.$nextTick(()=>{window.addEventListener("scroll",this.addActiveClass)})},unmounted(){this.removeScrollListener()},methods:{addActiveClass(){this.$refs.timelineElement.getBoundingClientRect().top-window.innerHeight/2>0||(this.isActive=!0,this.removeScrollListener())},removeScrollListener(){window.removeEventListener("scroll",this.addActiveClass)}},props:{FPApiSectionTimelineItems:{required:!0,type:Object},styleAlternate:{required:!1,type:Boolean,default:!1}}}),ce=t("div",{class:"v-timeline-item__graphic"},[t("div",{class:"v-timeline-item__graphic__circle"})],-1),_e=t("div",{class:"fp-grid-coll-2-24"},null,-1),de={class:"fp-grid-coll-20-24"},pe={class:"v-timeline-item__date"},ue={class:"v-timeline-item__title"},me=["innerHTML"],ve=t("div",{class:"fp-grid-coll-1-24"},null,-1),he=t("div",{class:"fp-grid-coll-3-24"},null,-1),fe={class:"v-timeline-item__image fp-grid-coll-18-24"},ge=t("div",{class:"fp-grid-coll-3-24"},null,-1);function $e(e,r,s,a,l,c){const _=d("image-mask");return i(),n("div",{class:w(["v-timeline-item fp-with-gutter fp-grid-container",{"is-alternate":e.styleAlternate,"is-active":e.isActive}]),ref:"timelineElement"},[ce,_e,t("div",de,[t("h5",pe,f(e.FPApiSectionTimelineItems.date),1),t("h2",ue,f(e.FPApiSectionTimelineItems.title),1),t("div",{class:"v-timeline-item__content fp-remove-child-spacing",innerHTML:e.FPApiSectionTimelineItems.text},null,8,me)]),ve,e.FPApiSectionTimelineItems.cover?(i(),n(g,{key:0},[he,t("div",fe,[(i(!0),n(g,null,S(e.FPApiSectionTimelineItems.cover,m=>(i(),h(_,{"filter-s-v-g-file-name":"circle",src:m.url},null,8,["src"]))),256))]),ge],64)):v("",!0)],2)}var Se=u(le,[["render",$e]]);const ye=p({components:{TimelineItem:Se},props:{FPApiSectionEvolution:{required:!0,type:Object}}}),Pe={class:"v-section-timeline fp-section--default fp-grid-container fp-with-gutter fp-max-width"},ke={class:"v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},Ae=["innerHTML"],Fe={class:"v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"},Te=t("div",{class:"v-section-timeline__items__lines"},null,-1),we={class:"fp-grid-container"},Ie={class:"v-section-timeline__items__item-container fp-grid-coll-12-24"};function be(e,r,s,a,l,c){const _=d("timeline-item");return i(),n("section",Pe,[t("div",ke,[t("h1",null,f(e.FPApiSectionEvolution.title),1),t("div",{innerHTML:e.FPApiSectionEvolution.text},null,8,Ae)]),t("div",Fe,[Te,t("div",we,[(i(!0),n(g,null,S(e.FPApiSectionEvolution.timeline,(m,y)=>(i(),n("div",Ie,[k(_,{FPApiSectionTimelineItems:m,styleAlternate:y%2!==0},null,8,["FPApiSectionTimelineItems","styleAlternate"])]))),256))])])])}var Ne=u(ye,[["render",be]]);const Ce=p({props:{anchorTitle:{type:String,required:!0}},data(){return{forProDataStore:$()}},mounted(){this.forProDataStore.ArrayOfSectionAnchor.push(this.anchorTitle)}}),De=["id"];function Le(e,r,s,a,l,c){return i(),n("div",{class:"v-scroll-to-nav",id:e.anchorTitle},[I(e.$slots,"default")],8,De)}var Ve=u(Ce,[["render",Le]]);const He=p({components:{ScrollToNav:Ve,SectionTimeline:Ne,SectionPlan:ae,SectionHeader:z,SectionIntroduction:j},data(){return{forProDataStore:$()}},computed:{timelineSections(){return Object.values(this.forProDataStore.dataFPApi.sections).filter(e=>e.type==="evolution")}}}),Me={class:"v-view-home"};function Ee(e,r,s,a,l,c){const _=d("section-header"),m=d("section-introduction"),y=d("section-plan"),F=d("section-timeline"),T=d("scroll-to-nav");return i(),n("main",Me,[k(_),(i(!0),n(g,null,S(e.forProDataStore.dataFPApi.sections,o=>(i(),n("div",null,[o.type==="plan"||o.type==="introduction"||o.type==="foundation"||o.type==="evolution"?(i(),h(T,{key:0,anchorTitle:o.title},{default:b(()=>[o.type==="introduction"||o.type==="foundation"?(i(),h(m,{key:0,FPApiSectionIntro:o},null,8,["FPApiSectionIntro"])):v("",!0),o.type==="plan"?(i(),h(y,{key:1,FPApiSectionPlan:o},null,8,["FPApiSectionPlan"])):v("",!0),o.type==="evolution"?(i(),h(F,{key:2,FPApiSectionEvolution:o},null,8,["FPApiSectionEvolution"])):v("",!0)]),_:2},1032,["anchorTitle"])):v("",!0)]))),256))])}var qe=u(He,[["render",Ee]]);export{qe as default};
