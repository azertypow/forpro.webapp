import{d as p,_ as u,o as i,c as n,a as t,n as P,r as d,t as f,F as g,b as $,e as y,f as v,g as k,h,i as I,u as A,j as V,w as b}from"./index.430c9917.js";const C=p({props:{src:{type:String,required:!0},filterSVGFileName:{type:String,required:!0}},data(){return{style:{webkitMask:`url(masks/${this.filterSVGFileName}.svg)`,maskImage:`url(masks/${this.filterSVGFileName}.svg)`}}}}),L={class:"v-image-mask"},N=["src"],H=["src"];function x(e,r,o,a,l,c){return i(),n("div",L,[t("img",{src:`masks/${e.filterSVGFileName}--border.svg`,alt:"",class:"v-image-mask__mask"},null,8,N),t("img",{src:e.src,alt:"",class:"v-image-mask__img",style:P(e.style)},null,12,H)])}var F=u(C,[["render",x],["__scopeId","data-v-16148362"]]);const E=p({components:{ImageMask:F},props:{FPApiSectionIntro:{required:!0,type:Object}}}),M={class:"v-section-introduction fp-section--default fp-with-gutter fp-grid-container fp-max-width"},B={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},D=["innerHTML"],q={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"};function O(e,r,o,a,l,c){const _=d("image-mask");return i(),n("section",M,[t("div",B,[t("h1",null,f(e.FPApiSectionIntro.title),1),t("div",{innerHTML:e.FPApiSectionIntro.text},null,8,D)]),e.FPApiSectionIntro.cover?(i(!0),n(g,{key:0},$(e.FPApiSectionIntro.cover,m=>(i(),n("div",q,[y(_,{"filter-s-v-g-file-name":"forme-1",class:"v-section-introduction__cover",alt:"cover intruduction",src:m.url},null,8,["src"])]))),256)):v("",!0)])}var j=u(E,[["render",O]]),G="/forpro.webapp/assets/intro.73b0f763.svg";const R=p({}),z={class:"v-section-header fp-with-gutter"},Y=k('<div class="v-section-header__text fp-remove-child-spacing"><h1 class="v-section-header__title fp-text-xxl">ForPro</h1><h2 class="fp-with-gutter fp-text-xl v-section-header__subtitle">Viens construire ta voie professionnelle\xA0!</h2></div><div class="v-section-header__graphic"><img class="v-section-header__icon-bottom" src="'+G+'" alt="element graphic"><div class="v-section-header__icon-right"></div></div>',2),J=[Y];function K(e,r,o,a,l,c){return i(),n("section",z,J)}var Q=u(R,[["render",K]]),U="/forpro.webapp/assets/ForPro_Plan.f7532d47.svg";const W=p({props:{FPApiSectionPlan:{required:!0,type:Object}},data(){return{top:NaN,bottom:NaN,height:NaN,translateFrom_inPercent:-100,translateTo_inPercent:0}},beforeMount(){window.addEventListener("scroll",this.setPlanPosition)},methods:{setPlanPosition(){this.$refs.planContainer instanceof HTMLElement&&(this.top=this.$refs.planContainer.getBoundingClientRect().top,this.bottom=this.$refs.planContainer.getBoundingClientRect().bottom,this.height=this.$refs.planContainer.getBoundingClientRect().height)}},computed:{distance(){return this.height*1.5},topFromBottomOfScreen(){return this.top-window.innerHeight},percentDistance(){const e=this.topFromBottomOfScreen*-100/this.distance;return e<0?0:e>100?100:e},transitionStyleValue(){return{transformValue:`translate(0, ${(100-this.percentDistance)*-1/2}%) scale(${(o=>(o-0)*(1-.85)/(100-0)+.85)(this.percentDistance)})`,opacityValue:`${this.percentDistance/100}`}}}}),X={class:"v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width"},Z={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},ee=["innerHTML"],te=t("div",{class:"fp-grid-coll-12-24"},null,-1),ie=t("div",{class:"fp-grid-coll-1-24"},null,-1),ne={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-24-24"},se={class:"v-section-plan__plan-container",ref:"planContainer"};function oe(e,r,o,a,l,c){return i(),n("section",X,[t("div",Z,[t("h1",null,f(e.FPApiSectionPlan.title),1),t("div",{innerHTML:e.FPApiSectionPlan.text},null,8,ee)]),te,ie,t("div",ne,[t("div",se,[t("img",{class:"v-section-plan__plan",src:U,alt:"plan",style:P({transform:e.transitionStyleValue.transformValue,opacity:e.transitionStyleValue.opacityValue})},null,4)],512)])])}var re=u(W,[["render",oe]]);const ae=p({components:{ImageMask:F},data(){return{isActive:!1}},mounted(){this.$nextTick(()=>{window.addEventListener("scroll",this.addActiveClass)})},unmounted(){this.removeScrollListener()},methods:{addActiveClass(){this.$refs.timelineElement.getBoundingClientRect().top-window.innerHeight/2>0||(this.isActive=!0,this.removeScrollListener())},removeScrollListener(){window.removeEventListener("scroll",this.addActiveClass)}},props:{FPApiSectionTimelineItems:{required:!0,type:Object},styleAlternate:{required:!1,type:Boolean,default:!1}}}),le=t("div",{class:"v-timeline-item__graphic"},[t("div",{class:"v-timeline-item__graphic__circle"})],-1),ce=t("div",{class:"fp-grid-coll-2-24"},null,-1),_e={class:"fp-grid-coll-20-24"},de={class:"v-timeline-item__date"},pe={class:"v-timeline-item__title"},ue=["innerHTML"],me=t("div",{class:"fp-grid-coll-1-24"},null,-1),ve=t("div",{class:"fp-grid-coll-3-24"},null,-1),he={class:"v-timeline-item__image fp-grid-coll-18-24"},fe=t("div",{class:"fp-grid-coll-3-24"},null,-1);function ge(e,r,o,a,l,c){const _=d("image-mask");return i(),n("div",{class:I(["v-timeline-item fp-with-gutter fp-grid-container",{"is-alternate":e.styleAlternate,"is-active":e.isActive}]),ref:"timelineElement"},[le,ce,t("div",_e,[t("h5",de,f(e.FPApiSectionTimelineItems.date),1),t("h2",pe,f(e.FPApiSectionTimelineItems.title),1),t("div",{class:"v-timeline-item__content fp-remove-child-spacing",innerHTML:e.FPApiSectionTimelineItems.text},null,8,ue)]),me,e.FPApiSectionTimelineItems.cover?(i(),n(g,{key:0},[ve,t("div",he,[(i(!0),n(g,null,$(e.FPApiSectionTimelineItems.cover,m=>(i(),h(_,{"filter-s-v-g-file-name":"circle",src:m.url},null,8,["src"]))),256))]),fe],64)):v("",!0)],2)}var $e=u(ae,[["render",ge]]);const Se=p({components:{TimelineItem:$e},props:{FPApiSectionEvolution:{required:!0,type:Object}}}),ye={class:"v-section-timeline fp-section--default fp-grid-container fp-with-gutter fp-max-width"},Pe={class:"v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},Ae=["innerHTML"],Fe={class:"v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"},we=t("div",{class:"v-section-timeline__items__lines"},null,-1),Te={class:"fp-grid-container"},ke={class:"v-section-timeline__items__item-container fp-grid-coll-12-24"};function Ie(e,r,o,a,l,c){const _=d("timeline-item");return i(),n("section",ye,[t("div",Pe,[t("h1",null,f(e.FPApiSectionEvolution.title),1),t("div",{innerHTML:e.FPApiSectionEvolution.text},null,8,Ae)]),t("div",Fe,[we,t("div",Te,[(i(!0),n(g,null,$(e.FPApiSectionEvolution.timeline,(m,S)=>(i(),n("div",ke,[y(_,{FPApiSectionTimelineItems:m,styleAlternate:S%2!==0},null,8,["FPApiSectionTimelineItems","styleAlternate"])]))),256))])])])}var Ve=u(Se,[["render",Ie]]);const be=p({props:{anchorTitle:{type:String,required:!0}},data(){return{forProDataStore:A()}},mounted(){this.forProDataStore.ArrayOfSectionAnchor.push(this.anchorTitle)}}),Ce=["id"];function Le(e,r,o,a,l,c){return i(),n("div",{class:"v-scroll-to-nav",id:e.anchorTitle},[V(e.$slots,"default")],8,Ce)}var Ne=u(be,[["render",Le]]);const He=p({components:{ScrollToNav:Ne,SectionTimeline:Ve,SectionPlan:re,SectionHeader:Q,SectionIntroduction:j},data(){return{forProDataStore:A()}},computed:{timelineSections(){return Object.values(this.forProDataStore.dataFPApi.sections).filter(e=>e.type==="evolution")}}}),xe={class:"v-view-home"};function Ee(e,r,o,a,l,c){const _=d("section-header"),m=d("section-introduction"),S=d("section-plan"),w=d("section-timeline"),T=d("scroll-to-nav");return i(),n("main",xe,[y(_),(i(!0),n(g,null,$(e.forProDataStore.dataFPApi.sections,s=>(i(),n("div",null,[s.type==="plan"||s.type==="introduction"||s.type==="foundation"||s.type==="evolution"?(i(),h(T,{key:0,anchorTitle:s.title},{default:b(()=>[s.type==="introduction"||s.type==="foundation"?(i(),h(m,{key:0,FPApiSectionIntro:s},null,8,["FPApiSectionIntro"])):v("",!0),s.type==="plan"?(i(),h(S,{key:1,FPApiSectionPlan:s},null,8,["FPApiSectionPlan"])):v("",!0),s.type==="evolution"?(i(),h(w,{key:2,FPApiSectionEvolution:s},null,8,["FPApiSectionEvolution"])):v("",!0)]),_:2},1032,["anchorTitle"])):v("",!0)]))),256))])}var Be=u(He,[["render",Ee]]);export{Be as default};