(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(e,a,t){"use strict";t.r(a);var l=t(68),n=t.n(l),s=t(69),c=t(6),r=t(7),i=t(10),m=t(8),o=t(9),u=t(0),d=t.n(u),p=t(64),E=t(104),b=t(105),h=t(81),f=t(108),x=t(107),v=t(106),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={details:[]},t.componentDidMount=Object(s.a)(n.a.mark(function e(){var a,l,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"8c009e936441b08ba9484ac72953b872",a=t.props.location.state.recipe,e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat("8c009e936441b08ba9484ac72953b872","&q=").concat(a));case 4:return l=e.sent,e.next=7,l.json();case 7:s=e.sent,t.setState({details:s.recipes[0]});case 9:case"end":return e.stop()}},e,this)})),t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(p.a,null),d.a.createElement(E.a,null,d.a.createElement(b.a,null,d.a.createElement(h.a,{xl:12,md:12,sm:12,xs:12}," ",d.a.createElement("h1",{className:"details"}," Recipes details..... ")," ")),d.a.createElement("div",{className:"link"},d.a.createElement(v.a,{to:"/"}," ",d.a.createElement(f.a,{size:"sm",className:"back-btn"},"    GO BACK! ")," ")),d.a.createElement(b.a,{style:{marginTop:"40px"}},d.a.createElement(h.a,{xl:6,md:12,sm:12,xs:12,className:"box-1"},d.a.createElement(x.a,{className:"details-img",src:this.state.details.image_url,alt:this.state.details.title}),"     "),d.a.createElement(h.a,{xl:6,md:8,sm:8,xs:8,className:"box-2"},d.a.createElement("div",{className:"box-2-title"}," Tittle of Recipe: ",d.a.createElement("br",null),this.state.details.title,d.a.createElement("hr",null)),d.a.createElement("div",{className:"box-2-publisher"}," Publisher: ",d.a.createElement("br",null),this.state.details.publisher,d.a.createElement("hr",null)),d.a.createElement("div",{className:"box-2-url"}," Website: ",d.a.createElement("br",null),d.a.createElement("a",{href:this.state.details.source_url},this.state.details.publisher_url),d.a.createElement("hr",null))))))}}]),a}(u.Component);a.default=N},64:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=t(112),c=t(111),r=t(65),i=t.n(r),m=t(106);a.a=function(){return n.a.createElement("header",null,n.a.createElement(s.a,{className:"nav",bg:"dark",variant:"dark"},n.a.createElement(m.a,{to:"/"},n.a.createElement(s.a.Brand,null,n.a.createElement("img",{src:i.a,alt:"logo",className:"logo"})," ",n.a.createElement("span",{className:"logo-name"}," Recipes....."))),n.a.createElement(c.a,{className:"mr-auto"},n.a.createElement("h2",null,"   Recipe Search!  "))))}},65:function(e,a,t){e.exports=t.p+"static/media/logo.3a0149d9.png"}}]);
//# sourceMappingURL=5.024bf16a.chunk.js.map