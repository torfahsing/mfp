"use strict";(self.webpackChunkauth=self.webpackChunkauth||[]).push([[795],{6795:(e,t,a)=>{a.r(t),a.d(t,{mount:()=>D});var n=a(7271),r=a.n(n),i=a(7650),l=a.n(i),m=a(71),o=a(334),c=a(8577),s=a(2195),u=a(3901),p=a(282),d=a(9559),E=a(553),g=a(2880),f=a(1749),h=a(9956),v=a(2267),Z=a(2318),b=a(1120),y=a(3832);function x(){return r().createElement(Z.Z,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",r().createElement(o.Link,{color:"inherit",to:"/"},"Your Website")," ",(new Date).getFullYear(),".")}var w=(0,b.Z)((function(e){return{"@global":{a:{textDecoration:"none"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var t=e.onSignIn,a=w();return r().createElement(y.Z,{component:"main",maxWidth:"xs"},r().createElement("div",{className:a.paper},r().createElement(u.Z,{className:a.avatar},r().createElement(v.Z,null)),r().createElement(Z.Z,{component:"h1",variant:"h5"},"Sign in"),r().createElement("form",{onSubmit:function(e){return e.preventDefault()},className:a.form,noValidate:!0},r().createElement(d.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r().createElement(d.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r().createElement(E.Z,{control:r().createElement(g.Z,{value:"remember",color:"primary"}),label:"Remember me"}),r().createElement(p.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:t},"Sign In"),r().createElement(f.Z,{container:!0},r().createElement(f.Z,{item:!0},r().createElement(o.Link,{to:"/auth/signup"},"Don't have an account? Sign Up"))))),r().createElement(h.Z,{mt:8},r().createElement(x,null)))}function N(){return r().createElement(Z.Z,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",r().createElement(o.Link,{to:"/"},"Your Website")," ",(new Date).getFullYear(),".")}var C=(0,b.Z)((function(e){return{"@global":{a:{textDecoration:"none"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function k(e){var t=e.onSignIn,a=C();return r().createElement(y.Z,{component:"main",maxWidth:"xs"},r().createElement("div",{className:a.paper},r().createElement(u.Z,{className:a.avatar},r().createElement(v.Z,null)),r().createElement(Z.Z,{component:"h1",variant:"h5"},"Sign up"),r().createElement("form",{onSubmit:function(e){return e.preventDefault()},className:a.form,noValidate:!0},r().createElement(f.Z,{container:!0,spacing:2},r().createElement(f.Z,{item:!0,xs:12,sm:6},r().createElement(d.Z,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r().createElement(f.Z,{item:!0,xs:12,sm:6},r().createElement(d.Z,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r().createElement(f.Z,{item:!0,xs:12},r().createElement(d.Z,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r().createElement(f.Z,{item:!0,xs:12},r().createElement(d.Z,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r().createElement(f.Z,{item:!0,xs:12},r().createElement(E.Z,{control:r().createElement(g.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r().createElement(p.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:t},"Sign Up"),r().createElement(f.Z,{container:!0,justify:"flex-end"},r().createElement(f.Z,{item:!0},r().createElement(o.Link,{to:"/auth/signin"},"Already have an account? Sign in"))))),r().createElement(h.Z,{mt:5},r().createElement(N,null)))}var W=(0,c.Z)({productionPrefix:"au"});const I=function(e){var t=e.history,a=e.onSignIn;return r().createElement("div",null,r().createElement(s.ZP,{generateClassName:W},r().createElement(o.Router,{history:t},r().createElement(o.Switch,null,r().createElement(o.Route,{path:"/auth/signin"},r().createElement(S,{onSignIn:a})),r().createElement(o.Route,{path:"/auth/signup"},r().createElement(k,{onSignIn:a}))))))};var D=function(e,t){var a=t.onNavigate,n=t.defaultHistory,i=t.initialPath,o=t.onSignIn,c=n||(0,m.PP)({initialEntries:[i]});return a&&c.listen(a),l().render(r().createElement(I,{history:c,onSignIn:o}),e),{onParentNavigate:function(e){var t=e.pathname;c.location.pathname!==t&&c.push(t)}}}}}]);