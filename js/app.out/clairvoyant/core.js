// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto__.call(null,this$,trace_data));
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_enter["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto____$1.call(null,this$,trace_data));
} else {
throw cljs.core.missing_protocol("ITraceEnter.-trace-enter",this$);
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
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto__.call(null,this$,trace_data));
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_error["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto____$1.call(null,this$,trace_data));
} else {
throw cljs.core.missing_protocol("ITraceError.-trace-error",this$);
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
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto__.call(null,this$,trace_data));
} else {
var m__7111__auto____$1 = (clairvoyant.core._trace_exit["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,trace_data) : m__7111__auto____$1.call(null,this$,trace_data));
} else {
throw cljs.core.missing_protocol("ITraceExit.-trace-exit",this$);
}
}
}
});

/**
 * Call the -trace-enter method for a given tracer with trace-data.
 *   tracer must satisfy ITraceEnter.
 */
clairvoyant.core.trace_enter = (function clairvoyant$core$trace_enter(tracer,trace_data){
return clairvoyant.core._trace_enter(tracer,trace_data);
});
/**
 * Call the -trace-error method for a given tracer with trace-data.
 *   tracer must satisfy ITraceError.
 */
clairvoyant.core.trace_error = (function clairvoyant$core$trace_error(tracer,trace_data){
return clairvoyant.core._trace_error(tracer,trace_data);
});
/**
 * Call the -trace-exit method for a given tracer with trace-data.
 *   tracer must satisfy ITraceExit.
 */
clairvoyant.core.trace_exit = (function clairvoyant$core$trace_exit(tracer,trace_data){
return clairvoyant.core._trace_exit(tracer,trace_data);
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
var vec__17497 = cljs.core.re_find(clairvoyant.core.fn_re,[cljs.core.str(f)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17497,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17497,(1),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17497,(2),null);
var arglist = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,[cljs.core.str(sig)].join('').split(","));
if(cljs.core.truth_(name)){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,arglist),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.cst$sym$fn);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,arglist),cljs.core.cst$sym$fn);
}
});
clairvoyant.core.default_tracer = (function (){var pr_val_STAR_ = (function clairvoyant$core$pr_val_STAR_(x){
if(cljs.core.fn_QMARK_(x)){
return clairvoyant.core.fn_signature(x);
} else {
if(cljs.core.coll_QMARK_(x)){
return clojure.walk.walk(clairvoyant$core$pr_val_STAR_,cljs.core.identity,x);
} else {
return x;

}
}
});
var pr_val = ((function (pr_val_STAR_){
return (function (x){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pr_val_STAR_(x)], 0));
});})(pr_val_STAR_))
;
var log_binding = ((function (pr_val_STAR_,pr_val){
return (function (form,init){
return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0)),"font-weight:normal;",pr_val(init));
});})(pr_val_STAR_,pr_val))
;
var log_exit = ((function (pr_val_STAR_,pr_val,log_binding){
return (function (exit){
console.groupCollapsed("=>",pr_val(exit));

console.log(exit);

return console.groupEnd();
});})(pr_val_STAR_,pr_val,log_binding))
;
var has_bindings_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [cljs.core.cst$sym$cljs$core_SLASH_extend_DASH_protocol,null,cljs.core.cst$sym$deftype,null,cljs.core.cst$sym$defmethod,null,cljs.core.cst$sym$fn_STAR_,null,cljs.core.cst$sym$cljs$core_SLASH_let,null,cljs.core.cst$sym$defn,null,cljs.core.cst$sym$extend_DASH_protocol,null,cljs.core.cst$sym$extend_DASH_type,null,cljs.core.cst$sym$cljs$core_SLASH_defrecord,null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,cljs.core.cst$sym$reify,null,cljs.core.cst$sym$let,null,cljs.core.cst$sym$fn,null,cljs.core.cst$sym$defrecord,null,cljs.core.cst$sym$defn_DASH_,null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,cljs.core.cst$sym$cljs$core_SLASH_deftype,null,cljs.core.cst$sym$cljs$core_SLASH_extend_DASH_type,null,cljs.core.cst$sym$cljs$core_SLASH_reify,null,cljs.core.cst$sym$cljs$core_SLASH_defn_DASH_,null], null), null);
var fn_like_QMARK_ = cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(has_bindings_QMARK_,cljs.core.cst$sym$let,cljs.core.array_seq([cljs.core.cst$sym$cljs$core_SLASH_let], 0));
if(typeof clairvoyant.core.t_clairvoyant$core17498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clairvoyant.core.ITraceError}
 * @implements {clairvoyant.core.ITraceEnter}
 * @implements {cljs.core.IMeta}
 * @implements {clairvoyant.core.ITraceExit}
 * @implements {cljs.core.IWithMeta}
*/
clairvoyant.core.t_clairvoyant$core17498 = (function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,meta17499){
this.pr_val_STAR_ = pr_val_STAR_;
this.pr_val = pr_val;
this.log_binding = log_binding;
this.log_exit = log_exit;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.fn_like_QMARK_ = fn_like_QMARK_;
this.meta17499 = meta17499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clairvoyant.core.t_clairvoyant$core17498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_17500,meta17499__$1){
var self__ = this;
var _17500__$1 = this;
return (new clairvoyant.core.t_clairvoyant$core17498(self__.pr_val_STAR_,self__.pr_val,self__.log_binding,self__.log_exit,self__.has_bindings_QMARK_,self__.fn_like_QMARK_,meta17499__$1));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core17498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_17500){
var self__ = this;
var _17500__$1 = this;
return self__.meta17499;
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceEnter$ = true;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__17501){
var self__ = this;
var map__17502 = p__17501;
var map__17502__$1 = ((((!((map__17502 == null)))?((((map__17502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17502):map__17502);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$form);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$args);
var dispatch_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$dispatch_DASH_val);
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$protocol);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$init);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$name);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$arglist);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$op);
var anonymous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17502__$1,cljs.core.cst$kw$anonymous_QMARK_);
var ___$1 = this;
if(cljs.core.truth_((self__.fn_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.fn_like_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : self__.fn_like_QMARK_.call(null,op)))){
var title = (cljs.core.truth_(protocol)?[cljs.core.str(protocol),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(" "),cljs.core.str(arglist)].join(''):[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name),cljs.core.str((cljs.core.truth_(dispatch_val)?[cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dispatch_val], 0)))].join(''):null)),cljs.core.str([cljs.core.str(" "),cljs.core.str(arglist)].join('')),cljs.core.str((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))].join(''));
var arglist__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_let,null,cljs.core.cst$sym$let,null], null), null).call(null,op))){
var title = [cljs.core.str(op)].join('');
console.groupCollapsed(title);

return console.groupCollapsed("bindings");
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$binding,null], null), null).call(null,op))){
return (self__.log_binding.cljs$core$IFn$_invoke$arity$2 ? self__.log_binding.cljs$core$IFn$_invoke$arity$2(form,init) : self__.log_binding.call(null,form,init));
} else {
return null;
}
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceExit$ = true;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__17504){
var self__ = this;
var map__17505 = p__17504;
var map__17505__$1 = ((((!((map__17505 == null)))?((((map__17505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17505):map__17505);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$op);
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17505__$1,cljs.core.cst$kw$exit);
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$binding,null], null), null).call(null,op))){
(self__.log_exit.cljs$core$IFn$_invoke$arity$1 ? self__.log_exit.cljs$core$IFn$_invoke$arity$1(exit) : self__.log_exit.call(null,exit));

return console.groupEnd();
} else {
if(cljs.core.truth_((self__.has_bindings_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.has_bindings_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : self__.has_bindings_QMARK_.call(null,op)))){
console.groupEnd();

(self__.log_exit.cljs$core$IFn$_invoke$arity$1 ? self__.log_exit.cljs$core$IFn$_invoke$arity$1(exit) : self__.log_exit.call(null,exit));

return console.groupEnd();
} else {
return null;
}
}
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceError$ = true;

clairvoyant.core.t_clairvoyant$core17498.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__17507){
var self__ = this;
var map__17508 = p__17507;
var map__17508__$1 = ((((!((map__17508 == null)))?((((map__17508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17508):map__17508);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$form);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$error);
var ex_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$ex_DASH_data);
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$binding,null], null), null).call(null,op))){
console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed((self__.pr_val.cljs$core$IFn$_invoke$arity$1 ? self__.pr_val.cljs$core$IFn$_invoke$arity$1(ex_data) : self__.pr_val.call(null,ex_data)));

console.log(ex_data);

console.groupEnd();

return console.groupEnd();
} else {
return null;
}
} else {
if(cljs.core.truth_((self__.has_bindings_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.has_bindings_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : self__.has_bindings_QMARK_.call(null,op)))){
console.groupEnd();

console.error(error.stack);

if(cljs.core.truth_(ex_data)){
console.groupCollapsed("ex-data");

console.groupCollapsed((self__.pr_val.cljs$core$IFn$_invoke$arity$1 ? self__.pr_val.cljs$core$IFn$_invoke$arity$1(ex_data) : self__.pr_val.call(null,ex_data)));

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

clairvoyant.core.t_clairvoyant$core17498.getBasis = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pr_DASH_val_STAR_,cljs.core.cst$sym$pr_DASH_val,cljs.core.cst$sym$log_DASH_binding,cljs.core.cst$sym$log_DASH_exit,cljs.core.cst$sym$has_DASH_bindings_QMARK_,cljs.core.cst$sym$fn_DASH_like_QMARK_,cljs.core.cst$sym$meta17499], null);
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.t_clairvoyant$core17498.cljs$lang$type = true;

clairvoyant.core.t_clairvoyant$core17498.cljs$lang$ctorStr = "clairvoyant.core/t_clairvoyant$core17498";

clairvoyant.core.t_clairvoyant$core17498.cljs$lang$ctorPrWriter = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"clairvoyant.core/t_clairvoyant$core17498");
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

clairvoyant.core.__GT_t_clairvoyant$core17498 = ((function (pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_){
return (function clairvoyant$core$__GT_t_clairvoyant$core17498(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta17499){
return (new clairvoyant.core.t_clairvoyant$core17498(pr_val_STAR___$1,pr_val__$1,log_binding__$1,log_exit__$1,has_bindings_QMARK___$1,fn_like_QMARK___$1,meta17499));
});})(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_))
;

}

return (new clairvoyant.core.t_clairvoyant$core17498(pr_val_STAR_,pr_val,log_binding,log_exit,has_bindings_QMARK_,fn_like_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
})();
