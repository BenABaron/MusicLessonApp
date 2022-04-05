(this["webpackJsonpmusic-lesson-app"]=this["webpackJsonpmusic-lesson-app"]||[]).push([[0],{207:function(e,t,n){},208:function(e,t,n){},225:function(e,t){},227:function(e,t){},241:function(e,t){},243:function(e,t){},271:function(e,t){},273:function(e,t){},274:function(e,t){},279:function(e,t){},281:function(e,t){},287:function(e,t){},289:function(e,t){},308:function(e,t){},320:function(e,t){},323:function(e,t){},344:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),r=n.n(s),o=(n(207),n(208),n(14)),i=n(121),l=n(11),u=n(23),d=n(31),j=n(376),b=n(379),h=n(346),p=n(381),m=n(22),O=n(2),f=Object(j.a)({root:{display:"flex",flexDirection:"column"},child:{marginTop:"30pt",alignSelf:"center"}});var x=function(e){var t,n,a=f(),s=Object(c.useState)(""),r=Object(d.a)(s,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){""===o&&fetch("https://quotes.rest/qod/students").then((function(e){return e.json()})).then((function(e){return i(e)}))})),Object(O.jsxs)(b.a,{className:a.root,maxWidth:"xl",children:[Object(O.jsx)(h.a,{variant:"h1",className:a.child,children:"Welcome to the Gabe's Lessons!"}),Object(O.jsxs)(h.a,{variant:"body1",className:a.child,children:[null===(t=o.contents)||void 0===t?void 0:t.quotes[0].quote," - ",null===(n=o.contents)||void 0===n?void 0:n.quotes[0].author]}),Object(O.jsx)(h.a,{variant:"h4",className:a.child,children:"If you would like to request lessons, click below!"}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/request",className:a.child,children:"Request lessons"}),Object(O.jsx)(h.a,{variant:"h4",className:a.child,children:"Teachers can get their schedules and accept lessons by clicking below!"}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/dashboard",className:a.child,children:"Teacher Link"})]})},g="LOAD_LESSONS_SUCCESS",v="LOGIN_USER_SUCCESS",y="CREATE_USER_SUCCESS",_="REQUEST_LESSON_SUCCESS",S="GET_LESSON_REQUESTS_SUCCESS",L="ACCEPT_LESSON_REQUEST_SUCCESS",N=n(119),w=n.n(N),k=n(191);function q(e){return E.apply(this,arguments)}function E(){return(E=Object(k.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw n=e.sent,new Error(n);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){throw console.error("API call failed: ".concat(e)),e}function T(e){return console.log(e),localStorage.setItem("token",e),e}function A(){var e=localStorage.getItem("token"),t=new Headers;return t.append("content-type","application/json"),t.append("authorization","Bearer ".concat(e)),t}var R="https://benlessonapp.herokuapp.com";function I(){return function(e){return fetch("".concat(R,"/getWeeklySchedule"),{headers:A()}).then(q).catch(C).then((function(t){return e({type:g,lessons:t})})).catch((function(e){return console.log(e)}))}}var D={loadLessons:I},M=Object(u.b)(null,D)(x),U=n(33),P=n(397),B=Object(j.a)({root:{display:"flex",flexDirection:"column"},child:{marginBottom:"7pt",alignSelf:"center",width:"300pt"},register:{marginTop:"40pt",width:"300pt",alignSelf:"center"}});var F=function(e){var t=B(),n=Object(c.useState)({email:"",password:""}),a=Object(d.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1];function h(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(U.a)({},n,c))}))}return Object(O.jsxs)(b.a,{maxWidth:"sm",className:t.root,children:[Object(O.jsx)("div",{children:u}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),document.cookie="loggedIn = true; max-age=600",e.loginUser(s).then((function(){return e.history.push("/MusicLessonApp/")})).catch((function(e){return j(e)}))},className:t.root,children:[Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.email,name:"email",label:"Email",type:"email",className:t.child}),Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.password,name:"password",label:"Password",type:"password",className:t.child}),Object(O.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",className:t.child,children:"Login"})]}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/register",className:t.register,children:"Register"})]})},W="https://benlessonapp.herokuapp.com";var Y={loginUser:function(e){return function(t){return function(e){return fetch("".concat(W,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(q).then(T).catch(C)}(e).then((function(e){return t(function(e){return{type:v,user:e}}(e))})).catch((function(e){return console.log(e)}))}}},J=Object(u.b)(null,Y)(F),G=Object(j.a)({root:{display:"flex",flexDirection:"column"},child:{marginBottom:"7pt",alignSelf:"center",width:"300pt"}});var Q=function(e){var t=G(),n=Object(c.useState)({email:"",password:"",confirm_password:"",first_name:"",last_name:""}),a=Object(d.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1];function h(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(U.a)({},n,c))}))}return Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)("div",{children:u}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.createUser(s).then((function(){return e.history.push("/MusicLessonApp/login")})).catch((function(e){return j(e)}))},className:t.root,children:[Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.first_name,name:"first_name",label:"First_Name",type:"text",className:t.child}),Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.last_name,name:"last_name",label:"Last_Name",type:"text",className:t.child}),Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.email,name:"email",label:"Email",type:"email",className:t.child}),Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.password,name:"password",label:"Password",type:"password",className:t.child}),Object(O.jsx)(P.a,{required:!0,onChange:h,value:s.confirm_password,name:"confirm_password",label:"Confirm_Password",type:"password",className:t.child}),Object(O.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",className:t.child,children:"Register"})]})]})},H={createUser:function(e){return function(t){return(n=e,fetch("".concat(W,"/createUser"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then(q).catch(C)).then((function(e){return t(function(e){return{type:y,user:e}}(e))})).catch((function(e){return console.log(e)}));var n}}},$=Object(u.b)(null,H)(Q),z=n(385),K=n(396),V=n(384),X=n(399),Z=n(395),ee=n(400),te=n(125),ne=Object(j.a)((function(e){return{container:{display:"flex",flexDirection:"column",flexWrap:"wrap"},form:{alignSelf:"center",display:"flex",flexDirection:"column",flexWrap:"wrap"},textField:{width:300,marginBottom:"7pt",alignSelf:"center"},child:{marginTop:"30pt",alignSelf:"center"}}}));var ce=function(e){var t=ne();Object(c.useEffect)((function(){if(0===s.student_id){var e=function(){var e=localStorage.getItem("token");return te.verify(e,"superSecretLessonApp").id}();r(Object(o.a)(Object(o.a)({},s),{},{student_id:e}))}}));var n=Object(c.useState)({student_id:0,title:"",start_date:"",end_date:"",start_time:"",end_time:"",is_recurring:!1,recurring_type_id:null,separation_count:null,max_occurances:null,day_of_week:null,week_of_month:null,day_of_month:null,month_of_year:null}),a=Object(d.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)({is_disabled:!0}),l=Object(d.a)(i,2),u=l[0],j=l[1],m=Object(c.useState)(""),f=Object(d.a)(m,2),x=(f[0],f[1]);function g(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(U.a)({},n,c))}))}return Object(O.jsxs)(b.a,{className:t.container,children:[Object(O.jsx)(h.a,{variant:"h2",className:t.child,children:"Lesson Request Form"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.requestLesson(s).then((function(){return e.history.push("/MusicLessonApp/")})).catch((function(e){return x(e)}))},className:t.form,children:[Object(O.jsx)(P.a,{required:!0,onChange:g,value:s.title,name:"title",label:"Title",type:"text",className:t.textField}),Object(O.jsx)(P.a,{required:!0,onChange:function(e){var t,n=e.target,c=n.name,a=n.value;r(Object(o.a)(Object(o.a)({},s),{},(t={},Object(U.a)(t,c,a),Object(U.a)(t,"end_date",a),t)))},value:s.start_date,name:"start_date",label:"Date",type:"date",InputLabelProps:{shrink:!0},className:t.textField}),Object(O.jsx)(P.a,{required:!0,onChange:g,value:s.start_time,name:"start_time",label:"Start Time",type:"time",InputLabelProps:{shrink:!0},className:t.textField}),Object(O.jsx)(P.a,{required:!0,onChange:g,value:s.end_time,name:"end_time",label:"End Time",type:"time",InputLabelProps:{shrink:!0},className:t.textField}),Object(O.jsx)(z.a,{control:Object(O.jsx)(K.a,{checked:s.is_recurring,onChange:function(e){r(Object(o.a)(Object(o.a)({},s),{},Object(U.a)({},e.target.name,e.target.checked))),j(Object(o.a)(Object(o.a)({},u),{},{is_disabled:!e.target.checked}))},name:"is_recurring"}),label:"Make lesson recurring?"}),Object(O.jsxs)(V.a,{disabled:u.is_disabled,children:[Object(O.jsx)(X.a,{shrink:!0,id:"demo-simple-select-label",children:"Recurrance type"}),Object(O.jsxs)(Z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.separation_count,name:"separation_count",onChange:g,className:t.textField,children:[Object(O.jsx)(ee.a,{value:void 0,children:"None"}),Object(O.jsx)(ee.a,{value:0,children:"Every"}),Object(O.jsx)(ee.a,{value:1,children:"Every Other"})]})]}),Object(O.jsxs)(V.a,{disabled:u.is_disabled,children:[Object(O.jsx)(X.a,{shrink:!0,id:"demo-simple-select-label",children:"Recurrance type"}),Object(O.jsxs)(Z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.recurring_type_id,name:"recurring_type_id",onChange:g,className:t.textField,children:[Object(O.jsx)(ee.a,{value:null,children:"None"}),Object(O.jsx)(ee.a,{value:2,children:"Week"}),Object(O.jsx)(ee.a,{value:3,children:"Month"})]})]}),Object(O.jsx)(P.a,{disabled:u.is_disabled,required:!0,onChange:g,value:s.end_date,name:"end_date",label:"End Date",type:"date",InputLabelProps:{shrink:!0},className:t.textField}),Object(O.jsx)(p.a,{type:"submit",className:"request-button",variant:"contained",color:"primary",children:"Request Lesson"})]})]})},ae={requestLesson:function(e){return function(t){return function(e){return fetch("".concat(R,"/requestLesson"),{method:"POST",headers:A(),body:JSON.stringify(e)}).then(q).catch(C)}(e).then((function(e){return t({type:_,lessons:e})})).catch((function(e){return console.log(e)}))}}},se=Object(u.b)(null,ae)(ce),re=Object(j.a)({root:{display:"flex",flexDirection:"column"},child:{marginTop:"30pt",alignSelf:"center"}});var oe=function(e){var t=re();return Object(O.jsxs)(b.a,{className:t.root,children:[Object(O.jsx)(h.a,{variant:"h1",className:t.child,children:"Teacher Dashboard"}),Object(O.jsx)(h.a,{variant:"h4",className:t.child,children:"To see any lessons that have been requested, click below."}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/acceptLessons",className:t.child,children:"Accept Lesson Requests"}),Object(O.jsx)(h.a,{variant:"h4",className:t.child,children:"To see all accepted lessons, click below."}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/allLessons",className:t.child,children:"See All Lessons"})]})},ie={loadLessons:I},le=Object(u.b)(null,ie)(oe),ue=n(387),de=n(388),je=n(389),be=n(390),he=n(391),pe=n(392),me=n(386),Oe=n(90),fe=n.n(Oe),xe=Object(j.a)({root:{display:"flex",flexDirection:"column"},paper:{margin:"auto",width:650},row:{"&:hover":{"& $actionButton":{opacity:1}}},actionButton:{opacity:0},child:{marginTop:"30pt",alignSelf:"center"}});var ge=function(e){var t=xe();function n(e){return new Date(e).toDateString()}function a(e){return e.slice(0,5)}function s(e,t,c,a){var s=n(a);return 0===e?"No":2===t?0===c?"Yes, every week until ".concat(s):"Yes, every other week until ".concat(s):0===c?"Yes, every month until ".concat(s):"Yes, every other month until ".concat(s)}return Object(c.useEffect)((function(){0===e.lessonRequests.length&&e.getLessonRequests()})),Object(O.jsxs)(b.a,{className:t.root,children:[Object(O.jsx)(ue.a,{children:Object(O.jsxs)(de.a,{children:[Object(O.jsx)(je.a,{children:Object(O.jsxs)(be.a,{children:[Object(O.jsx)(he.a,{children:"Title"}),Object(O.jsx)(he.a,{children:"Start Date"}),Object(O.jsx)(he.a,{children:"Start Time"}),Object(O.jsx)(he.a,{children:"End Time"}),Object(O.jsx)(he.a,{children:"Is Recurring?"}),Object(O.jsx)(he.a,{children:"Accept Lesson?"})]})}),Object(O.jsx)(pe.a,{children:e.lessonRequests.map((function(c){return Object(O.jsxs)(be.a,{className:t.row,children:[Object(O.jsx)(he.a,{children:c.title}),Object(O.jsx)(he.a,{children:n(c.start_date)}),Object(O.jsx)(he.a,{children:a(c.start_time)}),Object(O.jsx)(he.a,{children:a(c.end_time)}),Object(O.jsx)(he.a,{children:s(c.is_recurring,c.recurring_type_id,c.separation_count,c.end_date)}),Object(O.jsx)(he.a,{children:Object(O.jsx)(me.a,{className:t.actionButton,color:"primary","aria-label":"delete lesson",component:"span",onClick:function(){return t=c.lesson_id,void e.acceptLessonRequest(t);var t},children:Object(O.jsx)(fe.a,{})})})]},c.lesson_id)}))})]})}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/dashboard",className:t.child,children:"Back To Dashboard"})]})};var ve={getLessonRequests:function(){return function(e){return fetch("".concat(R,"/getLessonRequests"),{headers:A()}).then(q).catch(C).then((function(t){return e({type:S,lessonRequests:t})})).catch((function(e){return console.log(e)}))}},acceptLessonRequest:function(e){return function(t){return function(e){return fetch("".concat(R,"/scheduleLesson/").concat(e),{method:"PUT",headers:A()}).then(q).catch(C)}(e).then((function(){return t(function(e){return{type:L,lessonId:e}}(e))})).catch((function(e){return console.log(e)}))}}},ye=Object(u.b)((function(e){return{lessonRequests:e.lessonRequests}}),ve)(ge),_e=Object(j.a)({paper:{margin:"auto",width:650},row:{"&:hover":{"& $actionButton":{opacity:1}}},actionButton:{opacity:0},root:{display:"flex",flexDirection:"column"},child:{marginTop:"30pt",alignSelf:"center"}});var Se=function(e){var t=_e();function n(e){return new Date(e).toDateString()}function a(e){return e.slice(0,5)}function s(e,t,c,a){var s=n(a);return 0===e?"No":2===t?0===c?"Yes, every week until ".concat(s):"Yes, every other week until ".concat(s):0===c?"Yes, every month until ".concat(s):"Yes, every other month until ".concat(s)}return Object(c.useEffect)((function(){e.loadLessons()}),[e.lessons]),Object(O.jsxs)(b.a,{className:t.root,children:[Object(O.jsx)(ue.a,{children:Object(O.jsxs)(de.a,{children:[Object(O.jsx)(je.a,{children:Object(O.jsxs)(be.a,{children:[Object(O.jsx)(he.a,{children:"Title"}),Object(O.jsx)(he.a,{children:"Start Date"}),Object(O.jsx)(he.a,{children:"Start Time"}),Object(O.jsx)(he.a,{children:"End Time"}),Object(O.jsx)(he.a,{children:"Is Recurring?"}),Object(O.jsx)(he.a,{children:"Accept Lesson?"})]})}),Object(O.jsx)(pe.a,{children:e.lessons.map((function(e){return Object(O.jsxs)(be.a,{className:t.row,children:[Object(O.jsx)(he.a,{children:e.title}),Object(O.jsx)(he.a,{children:n(e.start_date)}),Object(O.jsx)(he.a,{children:a(e.start_time)}),Object(O.jsx)(he.a,{children:a(e.end_time)}),Object(O.jsx)(he.a,{children:s(e.is_recurring,e.recurring_type_id,e.separation_count,e.end_date)}),Object(O.jsx)(he.a,{children:Object(O.jsx)(me.a,{className:t.actionButton,color:"primary","aria-label":"delete lesson",component:"span",children:Object(O.jsx)(fe.a,{})})})]},e.lesson_id)}))})]})}),Object(O.jsx)(p.a,{variant:"contained",color:"primary",component:m.b,to:"/MusicLessonApp/dashboard",className:t.child,children:"Back To Dashboard"})]})};var Le={loadLessons:I},Ne=Object(u.b)((function(e){return{lessons:e.lessons}}),Le)(Se),we=n(120),ke=n.n(we),qe=["component"],Ee=["component"],Ce=n(125),Te=function(e){var t=e.component,n=Object(i.a)(e,qe);return Object(O.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){return function(){if(!ke.a.parse(document.cookie).loggedIn)return!1;if(localStorage.getItem("token")){var e=localStorage.getItem("token");return"student"===Ce.verify(e,"superSecretLessonApp").role}}()?Object(O.jsx)(t,Object(o.a)({},e)):Object(O.jsx)(l.a,{to:"/MusicLessonApp/login"})}}))},Ae=function(e){var t=e.component,n=Object(i.a)(e,Ee);return Object(O.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){return function(){if(!ke.a.parse(document.cookie).loggedIn)return!1;if(localStorage.getItem("token")){var e=localStorage.getItem("token");return"teacher"===Ce.verify(e,"superSecretLessonApp").role}}()?Object(O.jsx)(t,Object(o.a)({},e)):Object(O.jsx)(l.a,{to:"/MusicLessonApp/"})}}))},Re=function(){return Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/MusicLessonApp/",component:M}),Object(O.jsx)(l.b,{path:"/MusicLessonApp/login",component:J}),Object(O.jsx)(l.b,{path:"/MusicLessonApp/register",component:$}),Object(O.jsx)(Te,{path:"/MusicLessonApp/request",component:se}),Object(O.jsx)(Ae,{path:"/MusicLessonApp/dashboard",component:le}),Object(O.jsx)(Ae,{path:"/MusicLessonApp/acceptLessons",component:ye}),Object(O.jsx)(Ae,{path:"/MusicLessonApp/allLessons",component:Ne})]})},Ie=n(76);var De=Object(Ie.b)({lessons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.lessons;default:return e}},lessonRequests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.lessonRequests;case L:return e.filter((function(e){return e.lesson_id!==t.lessonId}));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(o.a)(Object(o.a)({},e),t.user);default:return e}}}),Me=n(192),Ue=Object(Ie.c)(De,{lessonRequests:[],lessons:[],user:{},loggedIn:!1},Object(Ie.a)(Me.a)),Pe=n(393),Be=n(394),Fe=Object(j.a)({button:{textDecoration:"none",color:"black",marginLeft:"10pt",marginRight:"10pt"}});var We=function(){var e=Fe();return Object(O.jsx)(Pe.a,{position:"relative",children:Object(O.jsxs)(Be.a,{className:e.root,children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(m.b,{to:"/MusicLessonApp/",className:e.button,children:"Home"})}),Object(O.jsx)(p.a,{children:Object(O.jsx)(m.b,{to:"/MusicLessonApp/login",className:e.button,children:"Login"})}),Object(O.jsx)(p.a,{children:Object(O.jsx)(m.b,{to:"/MusicLessonApp/register",className:e.button,children:"Register"})}),Object(O.jsx)(p.a,{onClick:function(){return localStorage.removeItem("token"),void(document.cookie="loggedIn = false; max-age=1")},className:e.button,children:"Log Out"})]})})};var Ye=function(){return Object(O.jsx)(u.a,{store:Ue,children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(We,{}),Object(O.jsx)(Re,{})]})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,401)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Ye,{})}),document.getElementById("root")),Je()}},[[344,1,2]]]);
//# sourceMappingURL=main.baa3e241.chunk.js.map