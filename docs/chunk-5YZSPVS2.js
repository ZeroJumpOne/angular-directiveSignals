import{B as _,D as ee,E as te,F as p,G as m,H as ie,J as I,M as C,N as be,O as Me,P as G,Q as Ae,R as Ee,S as we,V as ne,Y as Fe,Z as B,a as l,b as c,c as ge,d as ve,e as ye,f as _e,fa as re,h as j,i as T,j as Ce,k as h,l as y,m as J,n as Ve,o as f,p as d,q as K,t as De,u as E,v as w,x as F,y as a,z as Q}from"./chunk-XX55YP3U.js";var Te=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(E))},e.\u0275dir=d({type:e});let t=e;return t})(),pt=(()=>{let e=class e extends Te{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=De(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[_]});let t=e;return t})(),Ge=new y("");var mt={provide:Ge,useExisting:T(()=>X),multi:!0};function gt(){let t=ne()?ne().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vt=new y(""),X=(()=>{let e=class e extends Te{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!gt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(E),a(vt,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&I("input",function(u){return s._handleInput(u.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(u){return s._compositionEnd(u.target.value)})},features:[G([mt]),_]});let t=e;return t})();function g(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Be(t){return t!=null&&typeof t.length=="number"}var Ue=new y(""),Re=new y(""),yt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,b=class{static min(e){return _t(e)}static max(e){return Ct(e)}static required(e){return Vt(e)}static requiredTrue(e){return Dt(e)}static email(e){return bt(e)}static minLength(e){return Mt(e)}static maxLength(e){return At(e)}static pattern(e){return Et(e)}static nullValidator(e){return He(e)}static compose(e){return Ze(e)}static composeAsync(e){return Ye(e)}};function _t(t){return e=>{if(g(e.value)||g(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Ct(t){return e=>{if(g(e.value)||g(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Vt(t){return g(t.value)?{required:!0}:null}function Dt(t){return t.value===!0?null:{required:!0}}function bt(t){return g(t.value)||yt.test(t.value)?null:{email:!0}}function Mt(t){return e=>g(e.value)||!Be(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function At(t){return e=>Be(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Et(t){if(!t)return He;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(g(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function He(t){return null}function Le(t){return t!=null}function $e(t){return we(t)?ve(t):t}function We(t){let e={};return t.forEach(n=>{e=n!=null?l(l({},e),n):e}),Object.keys(e).length===0?null:e}function qe(t,e){return e.map(n=>n(t))}function wt(t){return!t.validate}function ze(t){return t.map(e=>wt(e)?e:n=>e.validate(n))}function Ze(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(n){return We(qe(n,e))}}function Xe(t){return t!=null?Ze(ze(t)):null}function Ye(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(n){let i=qe(n,e).map($e);return _e(i).pipe(ye(We))}}function Je(t){return t!=null?Ye(ze(t)):null}function Ie(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Qe(t){return t._rawAsyncValidators}function se(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=se(e);return se(t).forEach(r=>{H(n,r)||n.push(r)}),n}function xe(t,e){return se(e).filter(n=>!H(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},M=class extends L{get formDirective(){return null}get path(){return null}},P=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},gi=c(l({},Ft),{"[class.ng-submitted]":"isSubmitted"}),et=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(P,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&te("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[_]});let t=e;return t})(),tt=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(M,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&te("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[_]});let t=e;return t})();var S="VALID",U="INVALID",V="PENDING",x="DISABLED",v=class{},W=class extends v{constructor(e,n){super(),this.value=e,this.source=n}},O=class extends v{constructor(e,n){super(),this.pristine=e,this.source=n}},N=class extends v{constructor(e,n){super(),this.touched=e,this.source=n}},D=class extends v{constructor(e,n){super(),this.status=e,this.source=n}},oe=class extends v{constructor(e){super(),this.source=e}},ae=class extends v{constructor(e){super(),this.source=e}};function ce(t){return(Y(t)?t.validators:t)||null}function It(t){return Array.isArray(t)?Xe(t):t||null}function de(t,e){return(Y(e)?e.asyncValidators:t)||null}function St(t){return Array.isArray(t)?Je(t):t||null}function Y(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function it(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new j(1e3,"");if(!i[n])throw new j(1001,"")}function nt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var A=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===U}get pending(){return this.status==V}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new O(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new O(!0,i))}markAsPending(e={}){this.status=V;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,n)),this._events.next(new D(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=$e(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(U)?U:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new O(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=It(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=St(this._rawAsyncValidators)}},q=class extends A{constructor(e,n,i){super(ce(n),de(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){nt(this,!0,e),Object.keys(e).forEach(i=>{it(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var le=class extends q{};var rt=new y("CallSetDisabledState",{providedIn:"root",factory:()=>he}),he="always";function xt(t,e){return[...e.path,t]}function Oe(t,e,n=he){fe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),kt(t,e),Pt(t,e),Ot(t,e)}function Ne(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function z(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ot(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function fe(t,e){let n=Ke(t);e.validator!==null?t.setValidators(Ie(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Qe(t);e.asyncValidator!==null?t.setAsyncValidators(Ie(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ke(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Qe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return z(e._rawValidators,i),z(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&st(t,e)})}function Pt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&st(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function st(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function kt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){t==null,fe(t,e)}function Tt(t,e){return Z(t,e)}function Gt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Bt(t){return Object.getPrototypeOf(t.constructor)===pt}function Ut(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Rt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===X?n=s:Bt(s)?i=s:r=s}),r||i||n||null}function Ht(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Pe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var R=class extends A{constructor(e=null,n,i){super(ce(n),de(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Lt=t=>t instanceof R;var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var at=new y("");var $t={provide:M,useExisting:T(()=>pe)},pe=(()=>{let e=class e extends M{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Oe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ne(i.control||null,i,!1),Ht(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Ut(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new oe(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1,this.form._events.next(new ae(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(Ne(r||null,i),Lt(s)&&(Oe(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);jt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Tt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){fe(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ue,10),a(Re,10),a(rt,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&I("submit",function(u){return s.onSubmit(u)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[G([$t]),_,K]});let t=e;return t})();var Wt={provide:P,useExisting:T(()=>me)},me=(()=>{let e=class e extends P{set isDisabled(i){}constructor(i,r,s,o,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Rt(this,o)}ngOnChanges(i){this._added||this._setUpControl(),Gt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return xt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(M,13),a(Ue,10),a(Re,10),a(Ge,10),a(at,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[G([Wt]),_,K]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})(),ue=class extends A{constructor(e,n,i){super(ce(n),de(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){nt(this,!1,e),e.forEach((i,r)=>{it(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function je(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var lt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),o={};return je(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new q(s,o)}record(i,r=null){let s=this._reduceControls(i);return new le(s,r)}control(i,r,s){let o={};return this.useNonNullable?(je(r)?o=r:(o.validators=r,o.asyncValidators=s),new R(i,c(l({},o),{nonNullable:!0}))):new R(i,r,s)}array(i,r,s){let o=i.map(u=>this._createControl(u));return new ue(o,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof R)return i;if(i instanceof A)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,o=i.length>2?i[2]:null;return this.control(r,s,o)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ut=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:at,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:rt,useValue:i.callSetDisabledState??he}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[qt]});let t=e;return t})();var ct=(()=>{let e=class e{set color(i){this._color=i,this.setStyle()}set errors(i){this._errors=i,this.setErrorMessage()}constructor(i){this.el=i,this._color="green",this.htmlElement=i}ngOnInit(){this.setStyle()}setStyle(){this.htmlElement&&(this.htmlElement.nativeElement.style.color=this._color)}setErrorMessage(){if(!this.htmlElement)return;if(!this._errors){this.htmlElement.nativeElement.innerText="No hay errores";return}let i=Object.keys(this._errors);if(console.log(i),i.includes("required")){this.htmlElement.nativeElement.innerText="Este campo es requerido";return}if(i.includes("minlength")){let r=this._errors.minlength.requiredLength,s=this._errors.minlength.actualLength;this.htmlElement.nativeElement.innerText=`Minimo requerido ${r}, Faltan ${r-s}`;return}if(i.includes("email")){this.htmlElement.nativeElement.innerText="Formato de correo incorrecto";return}}};e.\u0275fac=function(r){return new(r||e)(a(E))},e.\u0275dir=d({type:e,selectors:[["","customLabel",""]],inputs:{color:"color",errors:"errors"}});let t=e;return t})();var dt=(()=>{let e=class e{constructor(){this.fb=J(lt),this.color="",this.frmProduct=this.fb.group({name:["",[b.required,b.minLength(6),b.email]]})}changeColor(){let i="#xxxxxx".replace(/x/g,r=>(Math.random()*16|0).toString(16));this.color=i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ve({type:e,selectors:[["app-frm-products"]],decls:22,vars:7,consts:[[3,"formGroup"],[1,"row","g-3","align-items-center","mb-3"],[1,"col-auto"],["type","text","formControlName","name",1,"form-control"],["customLabel","",3,"color","errors"],[1,"row"],[1,"col"],[1,"btn","btn-primary",3,"click"],[1,"mt-5"]],template:function(r,s){if(r&1&&(p(0,"h1"),C(1,"Agregar Producto"),m(),ie(2,"hr"),p(3,"form",0)(4,"div",1)(5,"div",2)(6,"label"),C(7,"Nombre:"),m()(),p(8,"div",2),ie(9,"input",3),m(),p(10,"div",2)(11,"span",4),C(12," Temporal "),m()()(),p(13,"div",5)(14,"div",6)(15,"button",7),I("click",function(){return s.changeColor()}),C(16," Cambiar color "),m()()()(),p(17,"pre",8),C(18),Ae(19,"json"),m(),p(20,"p"),C(21),m()),r&2){let o,u;F(3),ee("formGroup",s.frmProduct),F(8),ee("color",s.color)("errors",(o=s.frmProduct.get("name"))==null?null:o.errors),F(7),be(Ee(19,5,(u=s.frmProduct.get("name"))==null?null:u.errors)),F(3),Me("Color: ",s.color,"")}},dependencies:[ot,X,et,tt,pe,me,ct,Fe]});let t=e;return t})();var Xt=[{path:"",children:[{path:"product",component:dt},{path:"**",redirectTo:"product"}]}],ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[re.forChild(Xt),re]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[B]});let t=e;return t})();var Ti=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[B,ht,ut,ft]});let t=e;return t})();export{Ti as ProductsModule};
