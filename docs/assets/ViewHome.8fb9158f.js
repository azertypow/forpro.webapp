import{d as p,u as h,_ as u,o as i,c as n,a as t,n as P,r as d,t as g,F as $,b as S,e as A,f as v,g as f,h as w,i as I,w as N}from"./index.18c10c0f.js";const C=p({props:{src:{type:String,required:!0},filterSVGFileName:{type:String,required:!0}},data(){return{forProDataStore:h(),style:{webkitMask:`url(masks/${this.filterSVGFileName}--border--${h().fpThemeName}.svg)`,maskImage:`url(masks/${this.filterSVGFileName}.svg)`}}}}),b={class:"v-image-mask"},L=["src"],V=["src"];function D(e,r,s,l,a,c){return i(),n("div",b,[t("img",{src:`masks/${e.filterSVGFileName}--border--${e.forProDataStore.fpThemeName}.svg`,alt:"",class:"v-image-mask__mask"},null,8,L),t("img",{src:e.src,alt:"",class:"v-image-mask__img",style:P(e.style)},null,12,V)])}var F=u(C,[["render",D],["__scopeId","data-v-38f1ab0e"]]);const H=p({components:{ImageMask:F},props:{FPApiSectionIntro:{required:!0,type:Object}}}),E={class:"v-section-introduction fp-section--default fp-with-gutter fp-grid-container fp-max-width"},M={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},B=["innerHTML"],q={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"};function O(e,r,s,l,a,c){const _=d("image-mask");return i(),n("section",E,[t("div",M,[t("h1",null,g(e.FPApiSectionIntro.title),1),t("div",{innerHTML:e.FPApiSectionIntro.text},null,8,B)]),e.FPApiSectionIntro.cover?(i(!0),n($,{key:0},S(e.FPApiSectionIntro.cover,m=>(i(),n("div",q,[A(_,{"filter-s-v-g-file-name":"forme-1",class:"v-section-introduction__cover",alt:"cover intruduction",src:m.url},null,8,["src"])]))),256)):v("",!0)])}var j=u(H,[["render",O]]);const x=p({data(){return{forProDataStore:h(),style:{backgroundImage:`url("images/background--${h().fpThemeName}.svg")`}}}}),G=["src"];function R(e,r,s,l,a,c){return i(),n("section",{class:"v-section-header fp-with-gutter",style:P(e.style)},[t("img",{src:`images/logo--${e.forProDataStore.fpThemeName}.svg`,class:"v-section-header__logo fp-with-gutter fp-grid-coll-22-24 fp-grid-skip-1-24",alt:"header logo"},null,8,G)],4)}var z=u(x,[["render",R]]);const Y=p({props:{FPApiSectionPlan:{required:!0,type:Object}},data(){return{top:NaN,bottom:NaN,height:NaN,translateFrom_inPercent:-100,translateTo_inPercent:0}},beforeMount(){window.addEventListener("scroll",this.setPlanPosition)},methods:{setPlanPosition(){this.$refs.planContainer instanceof HTMLElement&&(this.top=this.$refs.planContainer.getBoundingClientRect().top,this.bottom=this.$refs.planContainer.getBoundingClientRect().bottom,this.height=this.$refs.planContainer.getBoundingClientRect().height)}},computed:{distance(){return this.height*1.5},topFromBottomOfScreen(){return this.top-window.innerHeight},percentDistance(){const e=this.topFromBottomOfScreen*-100/this.distance;return e<0?0:e>100?100:e},transitionStyleValue(){return{transformValue:`translate(0, ${(100-this.percentDistance)*-1/2}%) scale(${(s=>(s-0)*(1-.85)/(100-0)+.85)(this.percentDistance)})`,opacityValue:`${this.percentDistance/100}`}}}}),J={class:"v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width"},K={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},Q=["innerHTML"],U=t("div",{class:"fp-grid-coll-12-24"},null,-1),W=t("div",{class:"fp-grid-coll-1-24"},null,-1),X={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-22-24"},Z={class:"v-section-plan__plan-container",ref:"planContainer"},ee=t("div",{class:"v-section-plan__section-name"},[t("div",null,"section 1"),t("div",null,"section 2"),t("div",null,"section 3"),t("div",null,"section 4")],-1),te=t("div",null,null,-1),ie=t("div",null,null,-1),ne=t("div",null,null,-1),oe=t("div",null,null,-1),se=[te,ie,ne,oe];function re(e,r,s,l,a,c){return i(),n("section",J,[t("div",K,[t("h1",null,g(e.FPApiSectionPlan.title),1),t("div",{innerHTML:e.FPApiSectionPlan.text},null,8,Q)]),U,W,t("div",X,[t("div",Z,[ee,t("div",{class:"v-section-plan__plan",style:P({transform:e.transitionStyleValue.transformValue,opacity:e.transitionStyleValue.opacityValue})},se,4)],512)])])}var le=u(Y,[["render",re]]);const ae=p({components:{ImageMask:F},data(){return{isActive:!1}},mounted(){this.$nextTick(()=>{window.addEventListener("scroll",this.addActiveClass)})},unmounted(){this.removeScrollListener()},methods:{addActiveClass(){this.$refs.timelineElement.getBoundingClientRect().top-window.innerHeight/2>0||(this.isActive=!0,this.removeScrollListener())},removeScrollListener(){window.removeEventListener("scroll",this.addActiveClass)}},props:{FPApiSectionTimelineItems:{required:!0,type:Object},styleAlternate:{required:!1,type:Boolean,default:!1}}}),ce=t("div",{class:"v-timeline-item__graphic"},[t("div",{class:"v-timeline-item__graphic__circle"})],-1),_e=t("div",{class:"fp-grid-coll-2-24"},null,-1),de={class:"fp-grid-coll-20-24"},pe={class:"v-timeline-item__date"},ue={class:"v-timeline-item__title"},me=["innerHTML"],ve=t("div",{class:"fp-grid-coll-1-24"},null,-1),he=t("div",{class:"fp-grid-coll-3-24"},null,-1),fe={class:"v-timeline-item__image fp-grid-coll-18-24"},ge=t("div",{class:"fp-grid-coll-3-24"},null,-1);function $e(e,r,s,l,a,c){const _=d("image-mask");return i(),n("div",{class:w(["v-timeline-item fp-with-gutter fp-grid-container",{"is-alternate":e.styleAlternate,"is-active":e.isActive}]),ref:"timelineElement"},[ce,_e,t("div",de,[t("h5",pe,g(e.FPApiSectionTimelineItems.date),1),t("h2",ue,g(e.FPApiSectionTimelineItems.title),1),t("div",{class:"v-timeline-item__content fp-remove-child-spacing",innerHTML:e.FPApiSectionTimelineItems.text},null,8,me)]),ve,e.FPApiSectionTimelineItems.cover?(i(),n($,{key:0},[he,t("div",fe,[(i(!0),n($,null,S(e.FPApiSectionTimelineItems.cover,m=>(i(),f(_,{"filter-s-v-g-file-name":"circle",src:m.url},null,8,["src"]))),256))]),ge],64)):v("",!0)],2)}var Se=u(ae,[["render",$e]]);const ye=p({components:{TimelineItem:Se},props:{FPApiSectionEvolution:{required:!0,type:Object}}}),Pe={class:"v-section-timeline fp-section--default fp-grid-container fp-with-gutter fp-max-width"},Ae={class:"v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},Fe=["innerHTML"],Te={class:"v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"},ke=t("div",{class:"v-section-timeline__items__lines"},null,-1),we={class:"fp-grid-container"},Ie={class:"v-section-timeline__items__item-container fp-grid-coll-12-24"};function Ne(e,r,s,l,a,c){const _=d("timeline-item");return i(),n("section",Pe,[t("div",Ae,[t("h1",null,g(e.FPApiSectionEvolution.title),1),t("div",{innerHTML:e.FPApiSectionEvolution.text},null,8,Fe)]),t("div",Te,[ke,t("div",we,[(i(!0),n($,null,S(e.FPApiSectionEvolution.timeline,(m,y)=>(i(),n("div",Ie,[A(_,{FPApiSectionTimelineItems:m,styleAlternate:y%2!==0},null,8,["FPApiSectionTimelineItems","styleAlternate"])]))),256))])])])}var Ce=u(ye,[["render",Ne]]);const be=p({props:{anchorTitle:{type:String,required:!0}},data(){return{forProDataStore:h()}},mounted(){this.forProDataStore.ArrayOfSectionAnchor.push(this.anchorTitle)}}),Le=["id"];function Ve(e,r,s,l,a,c){return i(),n("div",{class:"v-scroll-to-nav",id:e.anchorTitle},[I(e.$slots,"default")],8,Le)}var De=u(be,[["render",Ve]]);const He=p({components:{ScrollToNav:De,SectionTimeline:Ce,SectionPlan:le,SectionHeader:z,SectionIntroduction:j},data(){return{forProDataStore:h()}},computed:{timelineSections(){return Object.values(this.forProDataStore.dataFPApi.sections).filter(e=>e.type==="evolution")}}}),Ee={class:"v-view-home"};function Me(e,r,s,l,a,c){const _=d("section-header"),m=d("section-introduction"),y=d("section-plan"),T=d("section-timeline"),k=d("scroll-to-nav");return i(),n("main",Ee,[A(_),(i(!0),n($,null,S(e.forProDataStore.dataFPApi.sections,o=>(i(),n("div",null,[o.type==="plan"||o.type==="introduction"||o.type==="foundation"||o.type==="evolution"?(i(),f(k,{key:0,anchorTitle:o.title},{default:N(()=>[o.type==="introduction"||o.type==="foundation"?(i(),f(m,{key:0,FPApiSectionIntro:o},null,8,["FPApiSectionIntro"])):v("",!0),o.type==="plan"?(i(),f(y,{key:1,FPApiSectionPlan:o},null,8,["FPApiSectionPlan"])):v("",!0),o.type==="evolution"?(i(),f(T,{key:2,FPApiSectionEvolution:o},null,8,["FPApiSectionEvolution"])):v("",!0)]),_:2},1032,["anchorTitle"])):v("",!0)]))),256))])}var qe=u(He,[["render",Me]]);export{qe as default};
