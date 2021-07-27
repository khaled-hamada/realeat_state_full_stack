(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{90:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(23),n=s.n(c),i=s(9),l=s(8),o=s(17),r=s.n(o),j=s(18),d=s(7),u=s.n(d),m=s(93),b="SET_ALERT",h="REMOVE_ALERT",_="SIGNUP_SUCCESS",p="SIGNUP_FAILED",O="LOGIN_SUCCESS",x="LOGIN_FAILED",g="LOGOUT",f=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a,c){var n=Object(m.a)();a({type:b,payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return a({type:h,payload:n})}),s)}},v=function(e,t){return function(){var s=Object(j.a)(r.a.mark((function s(a){var c,n,i;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:e,password:t}),console.log(n),s.prev=3,s.next=6,u.a.post("http://127.0.0.1:8000/api/token/",n,c);case 6:i=s.sent,a({type:O,payload:i.data}),a(f("Authenticated Successfully","success")),s.next=15;break;case 11:s.prev=11,s.t0=s.catch(3),a({type:x}),a(f("Cannot Authenticate User","error"));case 15:case"end":return s.stop()}}),s,null,[[3,11]])})));return function(e){return s.apply(this,arguments)}}()},N=s(0),y=Object(i.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0?t.map((function(e){return Object(N.jsx)("div",{className:"alert alert--".concat(e.alertType),children:e.msg},e.id)})):Object(N.jsx)(N.Fragment,{children:" "})})),w=Object(i.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(f("logout successful.","success")),e({type:g})}}})((function(e){var t=e.auth,s=t.isAuthenticated,c=t.loading,n=e.logout,i=Object(N.jsx)("a",{className:"navbar__top__auth__link",onClick:n,href:"#!",children:"Logout"}),o=Object(N.jsxs)(a.Fragment,{children:[Object(N.jsx)(l.b,{className:"navbar__top__auth__link",to:"/login",children:"Login"}),Object(N.jsx)(l.b,{className:"navbar__top__auth__link",to:"/signup",children:"Sign Up"})]});return Object(N.jsxs)(a.Fragment,{children:[Object(N.jsxs)("nav",{className:"navbar",children:[Object(N.jsxs)("div",{className:"navbar__top",children:[Object(N.jsx)("div",{className:"navbar__top__logo",children:Object(N.jsx)(l.b,{className:"navbar__top__logo__link",to:"/",children:"Realest Estate"})}),Object(N.jsx)("div",{className:"navbar__top__auth",children:!c&&Object(N.jsx)(a.Fragment,{children:s?i:o})})]}),Object(N.jsxs)("div",{className:"navbar__bottom",children:[Object(N.jsx)("li",{className:"navbar__bottom__item",children:Object(N.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/",children:"Home"})}),Object(N.jsx)("li",{className:"navbar__bottom__item",children:Object(N.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings",children:"Listings"})}),Object(N.jsx)("li",{className:"navbar__bottom__item",children:Object(N.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about",children:"About"})}),Object(N.jsx)("li",{className:"navbar__bottom__item",children:Object(N.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact",children:"Contact"})})]})]}),Object(N.jsx)(y,{})]})})),S=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)(w,{}),e.children]})},C=s(5),k=s(3),A=s(10),F=s(16),E=s(6),q=s(26),L=s.n(q),T=Object(i.b)()((function(e){var t=Object(a.useState)({sale_type:"For Sale",price:"$0+",bedrooms:"0+",home_type:"House",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"1+",open_house:"false",keywords:""}),s=Object(k.a)(t,2),c=s[0],n=s[1],i=c.sale_type,l=c.price,o=c.bedrooms,r=c.home_type,j=c.bathrooms,d=c.sqft,m=c.days_listed,b=c.has_photos,h=c.open_house,_=c.keywords,p=Object(a.useState)(!1),O=Object(k.a)(p,2),x=O[0],g=O[1],v=function(e){"checkbox"===e.target.type?(console.log(e.target.checked),n(Object(E.a)(Object(E.a)({},c),{},Object(F.a)({},e.target.name,e.target.checked)))):n(Object(E.a)(Object(E.a)({},c),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(N.jsx)("form",{className:"listingform",onSubmit:function(t){return function(t){t.preventDefault(),g(!0),u.a.post("http://127.0.0.1:8000/api/listings/search",{sale_type:i,price:l,bedrooms:o,home_type:r,bathrooms:j,sqft:d,days_listed:m,has_photos:b,open_house:h,keywords:_},{headers:{"Content-Type":"application/json"}}).then((function(t){g(!1),e.setListings(t.data),window.scrollTo(0,0),e.dispatch(f("we have recieved ".concat(t.data.length," listings from the data base "),"success"))})).catch((function(e){g(!1),window.scrollTo(0,0)}))}(t)},children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-1-of-6",children:[Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"sale_type",children:"Sale or Rent"}),Object(N.jsxs)("select",{className:"listingform__select",name:"sale_type",onChange:function(e){return v(e)},value:i,children:[Object(N.jsx)("option",{children:"For Sale"}),Object(N.jsx)("option",{children:"For Rent"})]})]}),Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"sqft",children:"Sqft"}),Object(N.jsxs)("select",{className:"listingform__select",name:"sqft",onChange:function(e){return v(e)},value:d,children:[Object(N.jsx)("option",{children:"1000+"}),Object(N.jsx)("option",{children:"1200+"}),Object(N.jsx)("option",{children:"1500+"}),Object(N.jsx)("option",{children:"2000+"}),Object(N.jsx)("option",{children:"Any"})]})]})]}),Object(N.jsxs)("div",{className:"col-1-of-6",children:[Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"price",children:"Minimum Price"}),Object(N.jsxs)("select",{className:"listingform__select",name:"price",onChange:function(e){return v(e)},value:l,children:[Object(N.jsx)("option",{children:"$0+"}),Object(N.jsx)("option",{children:"$200,000+"}),Object(N.jsx)("option",{children:"$400,000+"}),Object(N.jsx)("option",{children:"$600,000+"}),Object(N.jsx)("option",{children:"$800,000+"}),Object(N.jsx)("option",{children:"$1,000,000+"}),Object(N.jsx)("option",{children:"$1,200,000+"}),Object(N.jsx)("option",{children:"$1,500,000+"}),Object(N.jsx)("option",{children:"Any"})]})]}),Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"days_listed",children:"Days Listed"}),Object(N.jsxs)("select",{className:"listingform__select",name:"days_listed",onChange:function(e){return v(e)},value:m,children:[Object(N.jsx)("option",{children:"1 of less"}),Object(N.jsx)("option",{children:"2 of less"}),Object(N.jsx)("option",{children:"5 of less"}),Object(N.jsx)("option",{children:"10 of less"}),Object(N.jsx)("option",{children:"20 of less"}),Object(N.jsx)("option",{children:"Any"})]})]})]}),Object(N.jsxs)("div",{className:"col-1-of-6",children:[Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"bedrooms",children:"Bedrooms"}),Object(N.jsxs)("select",{className:"listingform__select",name:"bedrooms",onChange:function(e){return v(e)},value:o,children:[Object(N.jsx)("option",{children:"0+"}),Object(N.jsx)("option",{children:"1+"}),Object(N.jsx)("option",{children:"2+"}),Object(N.jsx)("option",{children:"3+"}),Object(N.jsx)("option",{children:"4+"}),Object(N.jsx)("option",{children:"5+"})]})]}),Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"has_photos",children:"Has Photos"}),Object(N.jsxs)("select",{className:"listingform__select",name:"has_photos",onChange:function(e){return v(e)},value:b,children:[Object(N.jsx)("option",{children:"1+"}),Object(N.jsx)("option",{children:"3+"}),Object(N.jsx)("option",{children:"5+"}),Object(N.jsx)("option",{children:"10+"}),Object(N.jsx)("option",{children:"15+"})]})]})]}),Object(N.jsxs)("div",{className:"col-1-of-6",children:[Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"home_type",children:"Home Type"}),Object(N.jsxs)("select",{className:"listingform__select",name:"home_type",onChange:function(e){return v(e)},value:r,children:[Object(N.jsx)("option",{children:"House"}),Object(N.jsx)("option",{children:"Condo"}),Object(N.jsx)("option",{children:"Townhouse"})]})]}),Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"keywords",children:"Keywords"}),Object(N.jsx)("input",{className:"listingform__input",name:"keywords",type:"text",onChange:function(e){return v(e)},value:_})]})]}),Object(N.jsxs)("div",{className:"col-1-of-6",children:[Object(N.jsxs)("div",{className:"listingform__section",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"bathrooms",children:"Baths"}),Object(N.jsxs)("select",{className:"listingform__select",name:"bathrooms",onChange:function(e){return v(e)},value:j,children:[Object(N.jsx)("option",{children:"0+"}),Object(N.jsx)("option",{children:"1+"}),Object(N.jsx)("option",{children:"2+"}),Object(N.jsx)("option",{children:"3+"}),Object(N.jsx)("option",{children:"4+"})]})]}),Object(N.jsxs)("div",{className:"listingform__altsection",children:[Object(N.jsx)("label",{className:"listingform__label",htmlFor:"open_house",children:"Open Houses"}),Object(N.jsx)("input",{className:"listingform__checkbox",name:"open_house",type:"checkbox",onChange:function(e){return v(e)},value:h})]})]}),Object(N.jsx)("div",{className:"col-1-of-6",children:x?Object(N.jsx)("div",{className:"listingform__loader",children:Object(N.jsx)(L.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(N.jsx)("button",{className:"listingform__button listingform__button--primary",children:"Save"})})]})})})),P=function(e){var t;return Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("h3",{className:"card__title",children:e.title}),Object(N.jsx)("div",{className:"card__header",children:Object(N.jsx)("img",{className:"card__header__photo",src:e.photo_main,alt:"House"})}),Object(N.jsxs)("p",{className:"card__location",children:[e.address,", ",e.city,", ",e.state]}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-2-of-3",children:[Object(N.jsxs)("p",{className:"card__info",children:["Price: $",(t=e.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(N.jsxs)("p",{className:"card__info",children:["Bedrooms: ",e.bedrooms]}),Object(N.jsxs)("p",{className:"card__info",children:["Bathrooms: ",e.bathrooms]})]}),Object(N.jsxs)("div",{className:"col-1-of-3",children:[Object(N.jsx)("p",{className:"card__saletype",children:e.sale_type}),Object(N.jsx)("p",{className:"card__hometype",children:e.home_type}),Object(N.jsxs)("p",{className:"card__sqft",children:["Sqft: ",e.sqft]})]})]}),Object(N.jsx)(l.b,{className:"card__link",to:"/listings/".concat(e.slug),children:"View Listing"})]})},R=function(e){var t=e.listings;return Object(N.jsx)("div",{children:function(){var e=[],s=[];t.map((function(t){return e.push(Object(N.jsx)(P,{title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug}))}));for(var a=0;a<t.length;a+=3)s.push(Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-1-of-3",children:e[a]}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[a+1]?e[a+1]:null}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[a+2]?e[a+2]:null})]}));return s}()})},I=function(e){return Object(N.jsxs)("div",{className:"pagination",children:[Object(N.jsx)("div",{onClick:function(){return e.previous()},className:"pagination__number",children:"Previous"}),function(){for(var t=[],s=1,a=function(a){var c=s,n="pagination__number",i=null;e.active===c?(n="pagination__number pagination__number--active",i=Object(N.jsx)("div",{className:n,children:s},s)):i=Object(N.jsx)("div",{onClick:function(){return e.visitPage(c)},className:n,children:s},s),t.push(i),s++},c=0;c<e.count;c+=e.itemsPerPage)a();return t}(),Object(N.jsx)("div",{onClick:function(){return e.next()},className:"pagination__number",children:"Next"})]})},B=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(1),i=Object(k.a)(n,2),l=i[0],o=i[1],r=Object(a.useState)(3),j=Object(k.a)(r,2),d=j[0],u=(j[1],Object(a.useState)(1)),m=Object(k.a)(u,2),b=m[0],h=m[1],_=l*d,p=_-d,O=s.slice(p,_);return Object(N.jsxs)("main",{className:"home",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - Home"}),Object(N.jsx)("meta",{name:"description",content:"Realest Estate Home Page"})]}),Object(N.jsx)("section",{className:"home__form",children:Object(N.jsx)(T,{setListings:c})}),Object(N.jsx)("section",{className:"home__listings",children:Object(N.jsx)(R,{listings:O})}),Object(N.jsx)("section",{className:"home__pagination",children:Object(N.jsx)("div",{className:"row",children:0!==s.length?Object(N.jsx)(I,{itemsPerPage:d,count:s.length,visitPage:function(e){o(e),h(e)},previous:function(){1!==l&&(o(l-1),h(l-1))},next:function(){l!==Math.ceil(s.length/3)&&(o(l+1),h(l+1))},active:b,setActive:h}):null})})]})},D=s.p+"static/media/house_1.fd0e2976.jpg",H=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),i=Object(k.a)(n,2),l=i[0],o=i[1];Object(a.useEffect)((function(){u.a.get("http://127.0.0.1:8000/api/realtors/topseller/",{headers:{"Content-Type":"application/json"}}).then((function(e){return c(e.data)})).catch((function(e){}))}),[]),Object(a.useEffect)((function(){var e={headers:{"Content-Type":"application/json"}};(function(){var t=Object(j.a)(r.a.mark((function t(){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("http://127.0.0.1:8000/api/realtors/",e);case 3:s=t.sent,o(s.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]);return Object(N.jsxs)("main",{className:"about",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - About"}),Object(N.jsx)("meta",{name:"description",content:"About us"})]}),Object(N.jsx)("header",{className:"about__header",children:Object(N.jsx)("h1",{className:"about__heading",children:"About Realest Estate"})}),Object(N.jsx)("section",{className:"about__info",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-3-of-4",children:[Object(N.jsx)("h2",{className:"about__subheading",children:"We find the perfect home for you"}),Object(N.jsx)("p",{className:"about__paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien a diam eleifend faucibus. Suspendisse vitae sodales leo. Proin hendrerit aliquam interdum. Maecenas tellus ante, ultrices id justo id, venenatis hendrerit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent aliquam condimentum ligula eget ullamcorper."}),Object(N.jsx)("div",{className:"about__display",children:Object(N.jsx)("img",{className:"about__display__image",src:D,alt:""})}),Object(N.jsx)("p",{className:"about__paragraph",children:"Suspendisse gravida magna posuere purus laoreet, et elementum velit placerat. Fusce at convallis erat. Curabitur placerat eros eu interdum lacinia. Nulla facilisi. Duis pretium tristique porta. Donec vehicula est a massa interdum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada lacus mauris, eu ultrices neque egestas eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elementum enim vitae purus pulvinar tincidunt. Aenean id viverra leo, non vehicula odio. Vestibulum volutpat a nulla at mattis. Nam cursus semper sapien, eu consequat lacus iaculis vel."})]}),Object(N.jsx)("div",{className:"col-1-of-4",children:function(){var e=[];return s.map((function(t){return e.push(Object(N.jsxs)(a.Fragment,{children:[Object(N.jsx)("div",{className:"about__display",children:Object(N.jsx)("img",{className:"about__display__image",src:t.photo,alt:""})}),Object(N.jsx)("h3",{className:"about__topseller",children:"Top Seller:"}),Object(N.jsx)("p",{className:"about__realtor",children:t.name}),Object(N.jsx)("p",{className:"about__contact",children:t.phone}),Object(N.jsx)("p",{className:"about__contact",children:t.email}),Object(N.jsx)("p",{className:"about__about",children:t.description})]},t.id))})),e}()})]})}),Object(N.jsxs)("section",{className:"about__team",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("h2",{className:"about__subheading",children:"Meet out awesome team!"})}),function(){var e=[],t=[];l.map((function(t){return e.push(Object(N.jsxs)(a.Fragment,{children:[Object(N.jsx)("div",{className:"about__display",children:Object(N.jsx)("img",{className:"about__display__image",src:t.photo,alt:""})}),Object(N.jsx)("h3",{className:"about__realtor",children:t.name}),Object(N.jsx)("p",{className:"about__contact",children:t.phone}),Object(N.jsx)("p",{className:"about__contact",children:t.email}),Object(N.jsx)("p",{className:"about__about",children:t.description})]},t.id))}));for(var s=0;s<l.length;s+=3)t.push(Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-1-of-3",children:e[s]}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[s+1]?e[s+1]:null}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[s+2]?e[s+2]:null})]},s));return t}()]})]})},M=Object(i.b)(null,{setAlert:f})((function(e){var t=e.setAlert;Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var s=Object(a.useState)({name:"",email:"",subject:"",message:""}),c=Object(k.a)(s,2),n=c[0],i=c[1],l=n.name,o=n.email,r=n.subject,j=n.message,d=Object(a.useState)(!1),m=Object(k.a)(d,2),b=m[0],h=m[1],_=function(e){return i(Object(E.a)(Object(E.a)({},n),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(N.jsxs)("div",{className:"contact",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - Contact"}),Object(N.jsx)("meta",{name:"description",content:"Contact us"})]}),Object(N.jsxs)("form",{className:"contact__form",onSubmit:function(e){return function(e){e.preventDefault(),h(!0),u.a.post("http://127.0.0.1:8000/api/contacts/",{name:l,email:o,subject:r,message:j},{headers:{"Content-Type":"application/json"}}).then((function(e){t("Message Sent","success"),h(!1),window.scrollTo(0,0)})).catch((function(e){t("Error with Sending Message","error"),h(!1),window.scrollTo(0,0)}))}(e)},children:[Object(N.jsx)("label",{className:"contact__form__label",htmlFor:"name",children:"Name*"}),Object(N.jsx)("input",{className:"contact__form__input",name:"name",type:"text",placeholder:"Full Name",onChange:function(e){return _(e)},value:l,required:!0}),Object(N.jsx)("label",{className:"contact__form__label",htmlFor:"email",children:"Email*"}),Object(N.jsx)("input",{className:"contact__form__input",name:"email",type:"email",placeholder:"example@gmail.com",onChange:function(e){return _(e)},value:o,required:!0}),Object(N.jsx)("label",{className:"contact__form__label",htmlFor:"subject",children:"Subject*"}),Object(N.jsx)("input",{className:"contact__form__input",name:"subject",type:"text",placeholder:"Buying Home",onChange:function(e){return _(e)},value:r,required:!0}),Object(N.jsx)("label",{className:"contact__form__label",htmlFor:"message",children:"Message"}),Object(N.jsx)("textarea",{className:"contact__form__textarea",name:"message",cols:"30",rows:"10",placeholder:"Message",onChange:function(e){return _(e)},value:j}),b?Object(N.jsx)("div",{className:"contact__form__loader",children:Object(N.jsx)(L.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(N.jsx)("button",{className:"contact__form__button",type:"submit",children:"Send"})]})]})})),U=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(0),i=Object(k.a)(n,2),l=i[0],o=i[1],d=Object(a.useState)(""),m=Object(k.a)(d,2),b=m[0],h=m[1],_=Object(a.useState)(""),p=Object(k.a)(_,2),O=p[0],x=p[1],g=Object(a.useState)(1),f=Object(k.a)(g,2),v=f[0],y=f[1];Object(a.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(j.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("http://127.0.0.1:8000/api/listings/?page=1");case 3:t=e.sent,c(t.data.results),o(t.data.count),h(t.data.previous),x(t.data.next),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return Object(N.jsxs)("main",{className:"listings",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - Listings"}),Object(N.jsx)("meta",{name:"description",content:"Listings page"})]}),Object(N.jsx)("section",{className:"listings__listings",children:function(){var e=[],t=[];s.map((function(t){return e.push(Object(N.jsx)(P,{title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug}))}));for(var a=0;a<s.length;a+=3)t.push(Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-1-of-3",children:e[a]}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[a+1]?e[a+1]:null}),Object(N.jsx)("div",{className:"col-1-of-3",children:e[a+2]?e[a+2]:null})]},a));return t}()}),Object(N.jsx)("section",{className:"listings__pagination",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)(I,{itemsPerPage:3,count:l,visitPage:function(e){u.a.get("http://127.0.0.1:8000/api/listings/?page=".concat(e)).then((function(t){c(t.data.results),h(t.data.previous),x(t.data.next),y(e)})).catch((function(e){}))},previous:function(){u.a.get(b).then((function(e){c(e.data.results),h(e.data.previous),x(e.data.next),b&&y(v-1)})).catch((function(e){}))},next:function(){u.a.get(O).then((function(e){c(e.data.results),h(e.data.previous),x(e.data.next),O&&y(v+1)})).catch((function(e){}))},active:v,setActive:y})})})]})},$=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){e.isAuthenticated||e.history.push("/login");var t=Object(a.useState)({}),s=Object(k.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)({}),o=Object(k.a)(i,2),r=o[0],j=o[1],d=Object(a.useState)(0),m=Object(k.a)(d,2),b=m[0],h=m[1];Object(a.useEffect)((function(){var t=e.match.params.id,s={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};u.a.get("http://127.0.0.1:8000/api/listings/".concat(t),s).then((function(e){n(e.data),h(e.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})).catch((function(e){}))}),[e.match.params.id]),Object(a.useEffect)((function(){var e=c.realtor,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};e&&u.a.get("http://127.0.0.1:8000/api/realtors/".concat(e),t).then((function(e){j(e.data)})).catch((function(e){}))}),[c.realtor]);return Object(N.jsxs)("div",{className:"listingdetail",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsxs)("title",{children:["Realest Estate - Listing | ","".concat(c.title)]}),Object(N.jsx)("meta",{name:"description",content:"Listing detail"})]}),Object(N.jsxs)("div",{className:"listingdetail__header",children:[Object(N.jsx)("h1",{className:"listingdetail__title",children:c.title}),Object(N.jsxs)("p",{className:"listingdetail__location",children:[c.city,", ",c.state,", ",c.zipcode]})]}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"listingdetail__breadcrumb",children:[Object(N.jsx)(l.b,{className:"listingdetail__breadcrumb__link",to:"/",children:"Home"})," / ",c.title]})}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-3-of-4",children:Object(N.jsx)("div",{className:"listingdetail__display",children:Object(N.jsx)("img",{className:"listingdetail__display__image",src:c.photo_main,alt:""})})}),Object(N.jsxs)("div",{className:"col-1-of-4",children:[Object(N.jsx)("div",{className:"listingdetail__display",children:Object(N.jsx)("img",{className:"listingdetail__display__image",src:r.photo,alt:""})}),Object(N.jsx)("h3",{className:"listingdetail__realtor",children:r.name}),Object(N.jsx)("p",{className:"listingdetail__contact",children:r.phone}),Object(N.jsx)("p",{className:"listingdetail__contact",children:r.email}),Object(N.jsx)("p",{className:"listingdetail__about",children:r.description})]})]}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-1-of-2",children:Object(N.jsxs)("ul",{className:"listingdetail__list",children:[Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Home Type: ",c.home_type]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Price: $",b]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Bedrooms: ",c.bedrooms]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Bathrooms: ",c.bathrooms]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Square Feet: ",c.sqft]})]})}),Object(N.jsx)("div",{className:"col-1-of-2",children:Object(N.jsxs)("ul",{className:"listingdetail__list",children:[Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Sale Type: ",c.sale_type]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Address: ",c.address]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["City: ",c.city]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["State: ",c.state]}),Object(N.jsxs)("li",{className:"listingdetail__list__item",children:["Zipcode: ",c.zipcode]})]})})]}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("p",{className:"listingdetail__description",children:c.description})}),function(){for(var e=[],t=c.listing_photos?c.listing_photos:[],s=0;s<t.length;s+=3)e.push(Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-1-of-3",children:t[s]?Object(N.jsx)("div",{className:"listingdetail__display",children:Object(N.jsx)("img",{className:"listingdetail__display__image",src:t[s],alt:""})}):null}),Object(N.jsx)("div",{className:"col-1-of-3",children:t[s+1]?Object(N.jsx)("div",{className:"listingdetail__display",children:Object(N.jsx)("img",{className:"listingdetail__display__image",src:t[s+1],alt:""})}):null}),Object(N.jsx)("div",{className:"col-1-of-3",children:t[s+2]?Object(N.jsx)("div",{className:"listingdetail__display",children:Object(N.jsx)("img",{className:"listingdetail__display__image",src:t[s+2],alt:""})}):null})]},s));return e}()]})})),G=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:v})((function(e){var t=e.login,s=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),n=Object(k.a)(c,2),i=n[0],o=n[1],r=i.email,j=i.password,d=function(e){return o(Object(E.a)(Object(E.a)({},i),{},Object(F.a)({},e.target.name,e.target.value)))};return s?Object(N.jsx)(C.a,{to:"/"}):Object(N.jsxs)("div",{className:"auth",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - Login"}),Object(N.jsx)("meta",{name:"description",content:"login page"})]}),Object(N.jsx)("h1",{className:"auth__title",children:"Sign In"}),Object(N.jsx)("p",{className:"auth__lead",children:"Sign into your Account"}),Object(N.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),t(r,j)}(e)},children:[Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"email",placeholder:"Email",name:"email",value:r,onChange:function(e){return d(e)},required:!0})}),Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Password",name:"password",value:j,onChange:function(e){return d(e)},minLength:"6"})}),Object(N.jsx)("button",{className:"auth__form__button",children:"Login"})]}),Object(N.jsxs)("p",{className:"auth__authtext",children:["Don't have an account? ",Object(N.jsx)(l.b,{className:"auth__authtext__link",to:"/signup",children:"Sign Up"})]})]})})),z=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:f,signup:function(e,t,s,a){return function(){var c=Object(j.a)(r.a.mark((function c(n){var i,l,o;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i={headers:{"Content-Type":"application/json"}},l=JSON.stringify(e,t,s,a),c.prev=2,c.next=5,u.a.post("http://127.0.0.1:8000/api/accounts/signup/",l,i);case 5:o=c.sent,n({type:_,payload:o.data}),n(v(e,s)),c.next=15;break;case 10:c.prev=10,c.t0=c.catch(2),console.log(c.t0),n({type:p}),n(f("Error Creating New User","error"));case 15:case"end":return c.stop()}}),c,null,[[2,10]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,s=e.signup,c=e.isAuthenticated,n=Object(a.useState)({name:"",email:"",password:"",password2:""}),i=Object(k.a)(n,2),o=i[0],r=i[1],j=o.name,d=o.email,u=o.password,m=o.password2,b=function(e){return r(Object(E.a)(Object(E.a)({},o),{},Object(F.a)({},e.target.name,e.target.value)))};return c?Object(N.jsx)(C.a,{to:"/"}):Object(N.jsxs)("div",{className:"auth",children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)("title",{children:"Realest Estate - Sign Up"}),Object(N.jsx)("meta",{name:"description",content:"sign up page"})]}),Object(N.jsx)("h1",{className:"auth__title",children:"Sign Up"}),Object(N.jsx)("p",{className:"auth__lead",children:"Create your Account"}),Object(N.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),u!==m?t("Passwords do not match","error"):s({email:d,name:j,password:u,password2:m})}(e)},children:[Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"text",placeholder:"Name",name:"name",value:j,onChange:function(e){return b(e)},required:!0})}),Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"email",placeholder:"Email",name:"email",value:d,onChange:function(e){return b(e)},required:!0})}),Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Password",name:"password",value:u,onChange:function(e){return b(e)},minLength:"6"})}),Object(N.jsx)("div",{className:"auth__form__group",children:Object(N.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Confirm Password",name:"password2",value:m,onChange:function(e){return b(e)},minLength:"6"})}),Object(N.jsx)("button",{className:"auth__form__button",children:"Register"})]}),Object(N.jsxs)("p",{className:"auth__authtext",children:["Already have an account? ",Object(N.jsx)(l.b,{className:"auth__authtext__link",to:"/login",children:"Sign In"})]})]})})),J=function(){return Object(N.jsxs)("div",{className:"notfound",children:[Object(N.jsx)("h1",{className:"notfound__heading",children:"404 Not Found"}),Object(N.jsx)("p",{className:"notfound__paragraph",children:" Sorry, the page you are looking for not exist "})]})},V=(s(90),s(19)),W=s(41),K=s(42),Z=s(43),Q=[],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case b:return[].concat(Object(Z.a)(e),[a]);case h:return e.filter((function(e){return e.id!==a}));default:return e}},Y={token:localStorage.getItem("token"),isAuthenticated:!1,loading:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case O:return localStorage.setItem("token",a.access),Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!0,loading:!1,token:a.access});case _:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!1,loading:!0});case p:case x:case g:return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},te=Object(V.combineReducers)({alert:X,auth:ee}),se=[K.a],ae=Object(V.createStore)(te,{},Object(W.composeWithDevTools)(V.applyMiddleware.apply(void 0,se))),ce=function(){return console.log(ae),Object(N.jsx)(l.a,{children:Object(N.jsx)(S,{children:Object(N.jsxs)(C.d,{children:[Object(N.jsx)(C.b,{path:"/login",component:G,exact:!0}),Object(N.jsx)(C.b,{path:"/signup",component:z,exact:!0}),Object(N.jsx)(C.b,{path:"/about",component:H,exact:!0}),Object(N.jsx)(C.b,{path:"/contact",component:M,exact:!0}),Object(N.jsx)(C.b,{path:"/listings",component:U,exact:!0}),Object(N.jsx)(C.b,{path:"/listings/:id",component:$,exact:!0}),Object(N.jsx)(C.b,{path:"/",component:B,exact:!0}),Object(N.jsx)(C.b,{component:J,exact:!0})]})})})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,94)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(N.jsx)(i.a,{store:ae,children:Object(N.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[91,1,2]]]);
//# sourceMappingURL=main.a6a9b273.chunk.js.map