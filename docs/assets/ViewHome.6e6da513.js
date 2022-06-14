import{d as p,_ as m,o as i,c as n,a as e,n as f,r as _,b as d,e as x,t as h,f as A,F as g,g as $,u as P}from"./index.3a0e964b.js";const b=p({props:{src:{type:String,required:!0},filterSVGFileName:{type:String,required:!0}},data(){return{style:{webkitMask:`url(masks/${this.filterSVGFileName}.svg)`,maskImage:`url(masks/${this.filterSVGFileName}.svg)`}}}}),F={class:"v-image-mask"},T=["src"],k=["src"];function L(t,r,s,a,c,l){return i(),n("div",F,[e("img",{src:`masks/${t.filterSVGFileName}--border.svg`,alt:"",class:"v-image-mask__mask"},null,8,T),e("img",{src:t.src,alt:"",class:"v-image-mask__img",style:f(t.style)},null,12,k)])}var S=m(b,[["render",L],["__scopeId","data-v-16148362"]]);const C=p({components:{ImageMask:S}}),I={class:"v-section-introduction fp-section--default fp-with-gutter fp-grid-container fp-max-width"},H=e("div",{class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},[e("h1",null,"Faire ensemble"),e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque aut consequatur corporis deserunt, eos esse eveniet, expedita facere harum inventore, natus nihil nobis non omnis quo. Ipsa, iusto."),e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore et explicabo in ipsa ipsum laboriosam. Amet culpa cumque eius, fugit possimus recusandae voluptas voluptates. Minima odio quia ratione voluptates?")],-1),V={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"};function M(t,r,s,a,c,l){const o=_("image-mask");return i(),n("section",I,[H,e("div",V,[d(o,{"filter-s-v-g-file-name":"forme-1",class:"v-section-introduction__cover",alt:"cover intruduction",src:"https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&h=710&q=80"})])])}var N=m(C,[["render",M]]),q="/forpro.webapp/assets/intro.73b0f763.svg";const B=p({}),D={class:"v-section-header fp-with-gutter"},E=x('<div class="v-section-header__text fp-remove-child-spacing"><h1 class="v-section-header__title fp-text-xxl">Learning Lab</h1><h2 class="fp-with-gutter fp-text-xl v-section-header__subtitle">Viens construire ta voie professionnelle\xA0!</h2></div><div class="v-section-header__graphic"><img class="v-section-header__icon-bottom" src="'+q+'" alt="element graphic"><div class="v-section-header__icon-right"></div></div>',2),G=[E];function j(t,r,s,a,c,l){return i(),n("section",D,G)}var O=m(B,[["render",j]]),R="/forpro.webapp/assets/220613_ForPro_Plan-V2.b36fdd36.svg";const Y=p({data(){return{top:NaN,bottom:NaN,height:NaN,translateFrom_inPercent:-100,translateTo_inPercent:0}},beforeMount(){window.addEventListener("scroll",this.setPlanPosition)},methods:{setPlanPosition(){this.$refs.planContainer instanceof HTMLElement&&(this.top=this.$refs.planContainer.getBoundingClientRect().top,this.bottom=this.$refs.planContainer.getBoundingClientRect().bottom,this.height=this.$refs.planContainer.getBoundingClientRect().height)}},computed:{distance(){return this.height},topFromBottomOfScreen(){return this.top-window.innerHeight},percentDistance(){const t=this.topFromBottomOfScreen*-100/this.distance;return t<0?0:t>100?100:t},transformValue(){return`translate(0, ${(100-this.percentDistance)*-1/2}%) scale(${(s=>(s-0)*(1-.8)/(100-0)+.8)(this.percentDistance)})`}}}),z={class:"v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width"},W=e("div",{class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},[e("h1",null,"Les activit\xE9s"),e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dignissimos doloribus, eius est ex iure quis vitae voluptate. Ad adipisci, alias dolore excepturi iure minima mollitia officiis unde voluptas.")],-1),J={class:"fp-with-gutter fp-remove-child-spacing fp-grid-coll-24-24"},K={class:"v-section-plan__plan-container",ref:"planContainer"};function Q(t,r,s,a,c,l){return i(),n("section",z,[W,e("div",J,[e("div",K,[e("img",{class:"v-section-plan__plan",src:R,alt:"plan",style:f({transform:t.transformValue})},null,4)],512)])])}var U=m(Y,[["render",Q]]);const X=p({components:{ImageMask:S},data(){return{isActive:!1}},mounted(){this.$nextTick(()=>{window.addEventListener("scroll",this.addActiveClass)})},unmounted(){this.removeScrollListener()},methods:{addActiveClass(){this.$refs.timelineElement.getBoundingClientRect().top-window.innerHeight/2>0||(this.isActive=!0,this.removeScrollListener())},removeScrollListener(){window.removeEventListener("scroll",this.addActiveClass)}},props:{FPApiSectionTimelineItems:{required:!0,type:Object},styleAlternate:{required:!1,type:Boolean,default:!1}}}),Z=e("div",{class:"v-timeline-item__graphic"},[e("div",{class:"v-timeline-item__graphic__line"}),e("div",{class:"v-timeline-item__graphic__circle"})],-1),ee=e("div",{class:"fp-grid-coll-2-24"},null,-1),te={class:"fp-grid-coll-20-24"},ie={class:"v-timeline-item__date"},ne={class:"v-timeline-item__title"},se=["innerHTML"],oe=e("div",{class:"fp-grid-coll-1-24"},null,-1),re=e("div",{class:"fp-grid-coll-3-24"},null,-1),ae={class:"v-timeline-item__image fp-grid-coll-18-24"},ce=e("div",{class:"fp-grid-coll-3-24"},null,-1);function le(t,r,s,a,c,l){const o=_("image-mask");return i(),n("div",{class:A(["v-timeline-item fp-with-gutter fp-grid-container",{"is-alternate":t.styleAlternate,"is-active":t.isActive}]),ref:"timelineElement"},[Z,ee,e("div",te,[e("h5",ie,h(t.FPApiSectionTimelineItems.date),1),e("h2",ne,h(t.FPApiSectionTimelineItems.title),1),e("div",{class:"v-timeline-item__content fp-remove-child-spacing",innerHTML:t.FPApiSectionTimelineItems.text},null,8,se)]),oe,re,e("div",ae,[d(o,{"filter-s-v-g-file-name":"circle",src:"images/jambes.jpeg"})]),ce],2)}var _e=m(X,[["render",le]]);const de=p({components:{TimelineItem:_e},props:{FPApiSectionTimeline:{required:!0,type:Object}}}),pe={class:"v-section-timeline fp-section--default fp-grid-container fp-with-gutter fp-max-width"},me={class:"v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"},ue=["innerHTML"],ve={class:"v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"},he=e("div",{class:"v-section-timeline__items__lines"},null,-1),fe={class:"fp-grid-container"},ge={class:"v-section-timeline__items__item-container fp-grid-coll-12-24"};function $e(t,r,s,a,c,l){const o=_("timeline-item");return i(),n("section",pe,[e("div",me,[e("h1",null,h(t.FPApiSectionTimeline.title),1),e("div",{innerHTML:t.FPApiSectionTimeline.description},null,8,ue)]),e("div",ve,[he,e("div",fe,[(i(!0),n(g,null,$(t.FPApiSectionTimeline.items,(u,v)=>(i(),n("div",ge,[d(o,{FPApiSectionTimelineItems:u,styleAlternate:v%2!==0},null,8,["FPApiSectionTimelineItems","styleAlternate"])]))),256))])])])}var Se=m(de,[["render",$e]]);const we=p({components:{SectionTimeline:Se,SectionPlan:U,SectionHeader:O,SectionIntroduction:N},data(){return{forProDataStore:P()}},computed:{timelineSections(){return this.forProDataStore.dataFPApi.sections.filter(t=>t.type==="timeline")}}}),ye={class:"v-view-home"};function xe(t,r,s,a,c,l){const o=_("section-header"),u=_("section-introduction"),v=_("section-plan"),w=_("section-timeline");return i(),n("main",ye,[d(o,{id:"header"}),d(u),d(v,{id:"plan"}),(i(!0),n(g,null,$(t.timelineSections,y=>(i(),n("div",null,[d(w,{FPApiSectionTimeline:y},null,8,["FPApiSectionTimeline"])]))),256))])}var Pe=m(we,[["render",xe]]);export{Pe as default};