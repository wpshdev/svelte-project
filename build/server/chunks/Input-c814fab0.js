import { L as L$1, T, I, N, p, d, P, z, W, q } from './index-87618b6e.js';
import { k } from './Row-0fc34542.js';

const X=L$1((I$1,e,l,h)=>{let i,w=T(e,["class","inline","validated"]),{class:r=""}=e,{inline:k$1=!1}=e,{validated:z=!1}=e;return e.class===void 0&&l.class&&r!==void 0&&l.class(r),e.inline===void 0&&l.inline&&k$1!==void 0&&l.inline(k$1),e.validated===void 0&&l.validated&&z!==void 0&&l.validated(z),i=k(r,{"form-inline":k$1,"was-validated":z}),`<form${I([N(w),{class:p(i)}],{})}>${h.default?h.default({}):""}</form>`}),U=L$1((I$1,e,l,h)=>{let i,w,r,k$1=T(e,["class","checked","disabled","group","id","inline","inner","invalid","label","name","reverse","size","type","valid","value"]),{class:z=""}=e,{checked:d$1=!1}=e,{disabled:b=!1}=e,{group:S=void 0}=e,{id:F=void 0}=e,{inline:c=!1}=e,{inner:_=void 0}=e,{invalid:B=!1}=e,{label:N$1=""}=e,{name:v=""}=e,{reverse:s=!1}=e,{size:j=""}=e,{type:o="checkbox"}=e,{valid:D=!1}=e,{value:x=void 0}=e;return e.class===void 0&&l.class&&z!==void 0&&l.class(z),e.checked===void 0&&l.checked&&d$1!==void 0&&l.checked(d$1),e.disabled===void 0&&l.disabled&&b!==void 0&&l.disabled(b),e.group===void 0&&l.group&&S!==void 0&&l.group(S),e.id===void 0&&l.id&&F!==void 0&&l.id(F),e.inline===void 0&&l.inline&&c!==void 0&&l.inline(c),e.inner===void 0&&l.inner&&_!==void 0&&l.inner(_),e.invalid===void 0&&l.invalid&&B!==void 0&&l.invalid(B),e.label===void 0&&l.label&&N$1!==void 0&&l.label(N$1),e.name===void 0&&l.name&&v!==void 0&&l.name(v),e.reverse===void 0&&l.reverse&&s!==void 0&&l.reverse(s),e.size===void 0&&l.size&&j!==void 0&&l.size(j),e.type===void 0&&l.type&&o!==void 0&&l.type(o),e.valid===void 0&&l.valid&&D!==void 0&&l.valid(D),e.value===void 0&&l.value&&x!==void 0&&l.value(x),i=k(z,"form-check",{"form-check-reverse":s,"form-switch":o==="switch","form-check-inline":c,[`form-control-${j}`]:j}),w=k("form-check-input",{"is-invalid":B,"is-valid":D}),r=F||N$1,`<div${P("class",i,0)}>${o==="radio"?`<input${I([N(k$1),{class:p(w)},{id:p(r)},{type:"radio"},{disabled:b||null},{name:p(v)},{value:p(x)}],{})}${x===S?P("checked",!0,1):""}${P("this",_,0)}>`:`${o==="switch"?`<input${I([N(k$1),{class:p(w)},{id:p(r)},{type:"checkbox"},{disabled:b||null},{name:p(v)},{value:p(x)}],{})}${P("checked",d$1,1)}${P("this",_,0)}>`:`<input${I([N(k$1),{class:p(w)},{id:p(r)},{type:"checkbox"},{disabled:b||null},{name:p(v)},{value:p(x)}],{})}${P("checked",d$1,1)}${P("this",_,0)}>`}`}
  ${N$1?`<label class="form-check-label"${P("for",r,0)}>${h.label?h.label({}):`${d(N$1)}`}</label>`:""}</div>`}),L=L$1((I$1,e,l,h)=>{let i=T(e,["class","valid","tooltip"]),{class:w=""}=e,{valid:r=void 0}=e,{tooltip:k$1=!1}=e,z;e.class===void 0&&l.class&&w!==void 0&&l.class(w),e.valid===void 0&&l.valid&&r!==void 0&&l.valid(r),e.tooltip===void 0&&l.tooltip&&k$1!==void 0&&l.tooltip(k$1);{const d=k$1?"tooltip":"feedback";z=k(w,r?`valid-${d}`:`invalid-${d}`);}return `<div${I([N(i),{class:p(z)}],{})}>${h.default?h.default({}):""}</div>`}),Y=L$1((I$1,e,l,h)=>{let i,w=T(e,["class","check","disabled","floating","inline","label","row","tag"]),r=q(h),{class:k$1=""}=e,{check:z=!1}=e,{disabled:d$1=!1}=e,{floating:b=!1}=e,{inline:S=!1}=e,{label:F=""}=e,{row:c=!1}=e,{tag:_=null}=e;return e.class===void 0&&l.class&&k$1!==void 0&&l.class(k$1),e.check===void 0&&l.check&&z!==void 0&&l.check(z),e.disabled===void 0&&l.disabled&&d$1!==void 0&&l.disabled(d$1),e.floating===void 0&&l.floating&&b!==void 0&&l.floating(b),e.inline===void 0&&l.inline&&S!==void 0&&l.inline(S),e.label===void 0&&l.label&&F!==void 0&&l.label(F),e.row===void 0&&l.row&&c!==void 0&&l.row(c),e.tag===void 0&&l.tag&&_!==void 0&&l.tag(_),i=k(k$1,"mb-3",{row:c,"form-check":z,"form-check-inline":z&&S,"form-floating":b,disabled:z&&d$1}),`${_==="fieldset"?`<fieldset${I([N(w),{class:p(i)}],{})}>${h.default?h.default({}):""}
    ${F||r.label?`
      <label>${d(F)}
        ${h.label?h.label({}):""}</label>`:""}</fieldset>`:`<div${I([N(w),{class:p(i)}],{})}>${h.default?h.default({}):""}
    ${F||r.label?`
      <label>${d(F)}
        ${h.label?h.label({}):""}</label>`:""}</div>`}`}),Z=L$1((I$1,e,l,h)=>{let i=T(e,["class","bsSize","checked","color","disabled","feedback","files","group","inner","invalid","label","multiple","name","placeholder","plaintext","readonly","reverse","size","type","valid","value"]),{class:w=""}=e,{bsSize:r=void 0}=e,{checked:k$1=!1}=e,{color:z$1=void 0}=e,{disabled:d$1=void 0}=e,{feedback:b=void 0}=e,{files:S=void 0}=e,{group:F=void 0}=e,{inner:c=void 0}=e,{invalid:_=!1}=e,{label:B=void 0}=e,{multiple:N$1=void 0}=e,{name:v=""}=e,{placeholder:s=""}=e,{plaintext:j=!1}=e,{readonly:o=void 0}=e,{reverse:D=!1}=e,{size:x=void 0}=e,{type:n="text"}=e,{valid:E=!1}=e,{value:m=""}=e,y,A;e.class===void 0&&l.class&&w!==void 0&&l.class(w),e.bsSize===void 0&&l.bsSize&&r!==void 0&&l.bsSize(r),e.checked===void 0&&l.checked&&k$1!==void 0&&l.checked(k$1),e.color===void 0&&l.color&&z$1!==void 0&&l.color(z$1),e.disabled===void 0&&l.disabled&&d$1!==void 0&&l.disabled(d$1),e.feedback===void 0&&l.feedback&&b!==void 0&&l.feedback(b),e.files===void 0&&l.files&&S!==void 0&&l.files(S),e.group===void 0&&l.group&&F!==void 0&&l.group(F),e.inner===void 0&&l.inner&&c!==void 0&&l.inner(c),e.invalid===void 0&&l.invalid&&_!==void 0&&l.invalid(_),e.label===void 0&&l.label&&B!==void 0&&l.label(B),e.multiple===void 0&&l.multiple&&N$1!==void 0&&l.multiple(N$1),e.name===void 0&&l.name&&v!==void 0&&l.name(v),e.placeholder===void 0&&l.placeholder&&s!==void 0&&l.placeholder(s),e.plaintext===void 0&&l.plaintext&&j!==void 0&&l.plaintext(j),e.readonly===void 0&&l.readonly&&o!==void 0&&l.readonly(o),e.reverse===void 0&&l.reverse&&D!==void 0&&l.reverse(D),e.size===void 0&&l.size&&x!==void 0&&l.size(x),e.type===void 0&&l.type&&n!==void 0&&l.type(n),e.valid===void 0&&l.valid&&E!==void 0&&l.valid(E),e.value===void 0&&l.value&&m!==void 0&&l.value(m);let G,K;do{G=!0;{const P=new RegExp("\\D","g");let H=!1,C="form-control";switch(A="input",n){case"color":C="form-control form-control-color";break;case"range":C="form-range";break;case"select":C="form-select",A="select";break;case"textarea":A="textarea";break;case"button":case"reset":case"submit":C=`btn btn-${z$1||"secondary"}`,H=!0;break;case"hidden":case"image":C=void 0;break;default:C="form-control",A="input";}j&&(C=`${C}-plaintext`,A="input"),x&&P.test(x)&&(console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),r=x,x=void 0),y=k(w,C,{"is-invalid":_,"is-valid":E,[`form-control-${r}`]:r&&!H,[`btn-${r}`]:r&&H});}K=`${A==="input"?`${n==="text"?`<input${I([N(i),{class:p(y)},{type:"text"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="password"?`<input${I([N(i),{class:p(y)},{type:"password"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="color"?`<input${I([N(i),{class:p(y)},{type:"color"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="email"?`<input${I([N(i),{class:p(y)},{type:"email"},{disabled:d$1||null},{multiple:N$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="file"?`<input${I([N(i),{class:p(y)},{type:"file"},{disabled:d$1||null},{invalid:p(_)},{multiple:N$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{valid:p(E)}],{})}>`:`${n==="checkbox"||n==="radio"||n==="switch"?`${z(U,"FormCheck").$$render(I$1,Object.assign({},i,{class:w},{size:r},{type:n},{disabled:d$1},{invalid:_},{label:B},{name:v},{placeholder:s},{reverse:D},{readonly:o},{valid:E},{checked:k$1},{inner:c},{group:F},{value:m}),{checked:P=>{k$1=P,G=!1;},inner:P=>{c=P,G=!1;},group:P=>{F=P,G=!1;},value:P=>{m=P,G=!1;}},{})}`:`${n==="url"?`<input${I([N(i),{class:p(y)},{type:"url"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="number"?`<input${I([N(i),{class:p(y)},{type:"number"},{readonly:o||null},{name:p(v)},{disabled:d$1||null},{placeholder:p(s)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="date"?`<input${I([N(i),{class:p(y)},{type:"date"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="time"?`<input${I([N(i),{class:p(y)},{type:"time"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="datetime"?`<input${I([N(i),{type:"datetime"},{readonly:o||null},{class:p(y)},{name:p(v)},{disabled:d$1||null},{placeholder:p(s)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="datetime-local"?`<input${I([N(i),{class:p(y)},{type:"datetime-local"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="month"?`<input${I([N(i),{class:p(y)},{type:"month"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="color"?`<input${I([N(i),{type:"color"},{readonly:o||null},{class:p(y)},{name:p(v)},{disabled:d$1||null},{placeholder:p(s)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="range"?`<input${I([N(i),{type:"range"},{readonly:o||null},{class:p(y)},{name:p(v)},{disabled:d$1||null},{placeholder:p(s)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="search"?`<input${I([N(i),{class:p(y)},{type:"search"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="tel"?`<input${I([N(i),{class:p(y)},{type:"tel"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null},{size:p(x)}],{})}${P("value",m,0)}${P("this",c,0)}>`:`${n==="week"?`<input${I([N(i),{class:p(y)},{type:"week"},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("value",m,0)}${P("this",c,0)}>`:`<input${I([N(i),{type:p(n)},{readonly:o||null},{class:p(y)},{name:p(v)},{disabled:d$1||null},{placeholder:p(s)},{value:p(m)}],{})}>`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`:`${A==="textarea"?`<textarea${I([N(i),{class:p(y)},{disabled:d$1||null},{name:p(v)},{placeholder:p(s)},{readonly:o||null}],{})}${P("this",c,0)}>${m||""}</textarea>`:`${A==="select"&&!N$1?`<select${I([N(i),{class:p(y)},{name:p(v)},{disabled:d$1||null},{readonly:o||null}],{})}${P("this",c,0)}>${h.default?h.default({}):""}</select>

  `:""}`}`}
${b?`${Array.isArray(b)?`${W(b,P=>`${z(L,"FormFeedback").$$render(I$1,{valid:E},{},{default:()=>`${d(P)}`})}`)}`:`${z(L,"FormFeedback").$$render(I$1,{valid:E},{},{default:()=>`${d(b)}`})}`}`:""}`;}while(!G);return K});

export { X, Y, Z };
//# sourceMappingURL=Input-c814fab0.js.map
