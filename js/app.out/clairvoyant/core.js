// Compiled by ClojureScript 1.7.228 {}
goog.provide('clairvoyant.core');
goog.require('cljs.core');
goog.require('clojure.walk');

/**
 * @interface
 */
clairvoyant.core.ITraceEnter = function(){};

clairvoyant.core._trace_enter = (function clairvoyant$core$_trace_enter(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 == null)))){
return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2(this$,trace_data);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (clairvoyant.core._trace_enter[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,trace_data);
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_enter["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceEnter.-trace-enter",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceError = function(){};

clairvoyant.core._trace_error = (function clairvoyant$core$_trace_error(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceError$_trace_error$arity$2 == null)))){
return this$.clairvoyant$core$ITraceError$_trace_error$arity$2(this$,trace_data);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (clairvoyant.core._trace_error[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,trace_data);
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_error["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceError.-trace-error",this$);
}
}
}
});


/**
 * @interface
 */
clairvoyant.core.ITraceExit = function(){};

clairvoyant.core._trace_exit = (function clairvoyant$core$_trace_exit(this$,trace_data){
if((!((this$ == null))) && (!((this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2 == null)))){
return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2(this$,trace_data);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (clairvoyant.core._trace_exit[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,trace_data);
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_exit["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,trace_data);
} else {
throw cljs.core.missing_protocol.call(null,"ITraceExit.-trace-exit",this$);
}
}
}
});

/**
 * Call the -trace-enter method for a given tracer with trace-data.
 *   tracer must satisfy ITraceEnter.
 */
clairvoyant.core.trace_enter = (function clairvoyant$core$trace_enter(tracer,trace_data){
return clairvoyant.core._trace_enter.call(null,tracer,trace_data);
});
/**
 * Call the -trace-error method for a given tracer with trace-data.
 *   tracer must satisfy ITraceError.
 */
clairvoyant.core.trace_error = (function clairvoyant$core$trace_error(tracer,trace_data){
return clairvoyant.core._trace_error.call(null,tracer,trace_data);
});
/**
 * Call the -trace-exit method for a given tracer with trace-data.
 *   tracer must satisfy ITraceExit.
 */
clairvoyant.core.trace_exit = (function clairvoyant$core$trace_exit(tracer,trace_data){
return clairvoyant.core._trace_exit.call(null,tracer,trace_data);
});
/**
 * Matches the function signature of the result of (str f) where f is a
 *   function. Captures the argument list and identifier (if possible).
 */
clairvoyant.core.fn_re = /function\s+([a-zA-Z0-9_$]+)?\(([a-zA-Z0-9_,\s]+)\)/;
/**
 * Return the function signature of f.
 * 
 *   Example:
 * 
 *  (fn-signature inc)
 *  ;;=> (fn inc [x])
 * 
 *  (fn-signature map)
 *  ;; => (fn [f c1 c2 c3 var_args])
 *   
 */
clairvoyant.core.fn_signature = (function clairvoyant$core$fn_signature(f){
var vec__12841 = cljs.core.re_find.call(null,clairvoyant.core.fn_re,[cljs.core.str(f)].join(''));
var _ = cljs.core.nth.call(null,vec__12841,(0),null);
var name = cljs.core.nth.call(null,vec__12841,(1),null);
var sig = cljs.core.nth.call(null,vec__12841,(2),null);
var arglist = cljs.core.mapv.call(null,cljs.core.symbol,[cljs.core.str(sig)].join('').split(","));
if(cljs.core.truth_(name)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arglist),cljs.core.symbol.call(null,name)),new cljs.core.Symbol(null,"fn","fn",465265323,null));
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,arglist),new cljs.core.Symbol(null,"fn","fn",465265323,null));
}
});
clairvoyant.core.default_tracer = (function (){var pr_val_STAR_ = (function clairvoyant$core$pr_val_STAR_(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return clairvoyant.core.fn_signature.call(null,x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return clojure.walk.walk.call(null,clairvoyant$core$pr_val_STAR_,cljs.core.identity,x);
} else {
return x;

}
}
});
var pr_val = ((function (pr_val_STAR_){
return (function (x){
return cljs.core.pr_str.call(null,pr_val_STAR_.call(null,x));
});})(pr_val_STAR_))
;
var log_binding = ((function (pr_val_STAR_,pr_val){
return (function (form,init){
return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),"font-weight:normal;",pr_val.call(null,init));
});})(pr_val_STAR_,pr_val))
;
var log_exit = ((function (pr_val_STAR_,pr_val,log_binding){
return (function (exit){
console.groupCollapsed("=>",pr_val.call(null,exit));

console.log(exit);

return console.groupEnd();
});})(pr_val_STAR_,pr_val,log_binding))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol("cljs.core","extend-protocol","cljs.core/extend-protocol",-100428625,null),null,new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null], null), null);
var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
if(typeof clairvoyant.core.t_clairvoyant$core12842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core12842 = (function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta12843){
this.pr_val_STAR_ = pr_val_STAR_;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta12843 = meta12843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clairvoyant.core.t_clairvoyant$core12842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_12844,meta12843__$1){
var self__ = this;
var _12844__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core12842(self__.pr_val_STAR_,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta12843__$1));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_12844){
var self__ = this;
var _12844__$1 = this;
return self__.meta12843;
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceEnter$ = true;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__12845){
var self__ = this;
var map__12846 = p__12845;
var map__12846__$1 = ((((!((map__12846 == null)))?((((map__12846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12846):map__12846);
var form = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var args = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dispatch_val = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));
var protocol = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var init = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var ns = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arglist = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var op = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var anonymous_QMARK_ = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));
var ___$1 = this;
if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str(protocol),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(" "),cljs.core.str(arglist)].join(''):[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name),cljs.core.str((cljs.core.truth_(dispatch_val)?[cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,dispatch_val))].join(''):null)),cljs.core.str([cljs.core.str(" "),cljs.core.str(arglist)].join('')),cljs.core.str((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null], null), null).call(null,op))){
var title = [cljs.core.str(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
return self__.log_binding.call(null,form,init);
} else {
return null;
}
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceExit$ = true;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__12848){
var self__ = this;
var map__12849 = p__12848;
var map__12849__$1 = ((((!((map__12849 == null)))?((((map__12849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12849):map__12849);
var op = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var exit = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

self__.log_exit.call(null,exit);

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceError$ = true;

clairvoyant.core.t_clairvoyant$core12842.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__12851){
var self__ = this;
var map__12852 = p__12851;
var map__12852__$1 = ((((!((map__12852 == null)))?((((map__12852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12852):map__12852);
var op = cljs.core.get.call(null,map__12852__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12852__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var error = cljs.core.get.call(null,map__12852__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var ex_data = cljs.core.get.call(null,map__12852__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed(self__.pr_val.call(null,ex_data));

console.log(ex_data);

console.groupEnd();

console.groupEnd();
} else {
}

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.getBasis = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pr-val*","pr-val*",344533536,null),new cljs.core.Symbol(null,"pr-val","pr-val",-289132329,null),new cljs.core.Symbol(null,"log-binding","log-binding",-7452044,null),new cljs.core.Symbol(null,"log-exit","log-exit",-1916806496,null),new cljs.core.Symbol(null,"has-bindings?","has-bindings?",-1143394454,null),new cljs.core.Symbol(null,"fn-like?","fn-like?",312793189,null),new cljs.core.Symbol(null,"meta12843","meta12843",-521184380,null)], null);
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core12842.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core12842.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core12842";

clairvoyant.core.t_clairvoyant$core12842.cljs$lang$ctorPrWriter = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"clairvoyant.core/t_clairvoyant$core12842");
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.__GT_t_clairvoyant$core12842 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function clairvoyant$core$__GT_t_clairvoyant$core12842(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta12843){
return (new clairvoyant.core.t_clairvoyant$core12842(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta12843));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

}

return (new clairvoyant.core.t_clairvoyant$core12842(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
})();

//# sourceMappingURL=core.js.map