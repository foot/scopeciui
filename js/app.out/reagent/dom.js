// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6455__auto__ = (function (){var and__6443__auto__ = typeof ReactDOM !== 'undefined';
if(and__6443__auto__){
return ReactDOM;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto__ = typeof require !== 'undefined';
if(and__6443__auto__){
return require("react-dom");
} else {
return and__6443__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__17313 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17313) : cljs.core.atom.call(null,G__17313));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_17316 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_17316){
return (function (){
var _STAR_always_update_STAR_17317 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17317;
}});})(_STAR_always_update_STAR_17316))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17316;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args17318 = [];
var len__7513__auto___17321 = arguments.length;
var i__7514__auto___17322 = (0);
while(true){
if((i__7514__auto___17322 < len__7513__auto___17321)){
args17318.push((arguments[i__7514__auto___17322]));

var G__17323 = (i__7514__auto___17322 + (1));
i__7514__auto___17322 = G__17323;
continue;
} else {
}
break;
}

var G__17320 = args17318.length;
switch (G__17320) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17318.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__17329_17333 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__17330_17334 = null;
var count__17331_17335 = (0);
var i__17332_17336 = (0);
while(true){
if((i__17332_17336 < count__17331_17335)){
var v_17337 = chunk__17330_17334.cljs$core$IIndexed$_nth$arity$2(null,i__17332_17336);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_17337);

var G__17338 = seq__17329_17333;
var G__17339 = chunk__17330_17334;
var G__17340 = count__17331_17335;
var G__17341 = (i__17332_17336 + (1));
seq__17329_17333 = G__17338;
chunk__17330_17334 = G__17339;
count__17331_17335 = G__17340;
i__17332_17336 = G__17341;
continue;
} else {
var temp__4425__auto___17342 = cljs.core.seq(seq__17329_17333);
if(temp__4425__auto___17342){
var seq__17329_17343__$1 = temp__4425__auto___17342;
if(cljs.core.chunked_seq_QMARK_(seq__17329_17343__$1)){
var c__7258__auto___17344 = cljs.core.chunk_first(seq__17329_17343__$1);
var G__17345 = cljs.core.chunk_rest(seq__17329_17343__$1);
var G__17346 = c__7258__auto___17344;
var G__17347 = cljs.core.count(c__7258__auto___17344);
var G__17348 = (0);
seq__17329_17333 = G__17345;
chunk__17330_17334 = G__17346;
count__17331_17335 = G__17347;
i__17332_17336 = G__17348;
continue;
} else {
var v_17349 = cljs.core.first(seq__17329_17343__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_17349);

var G__17350 = cljs.core.next(seq__17329_17343__$1);
var G__17351 = null;
var G__17352 = (0);
var G__17353 = (0);
seq__17329_17333 = G__17350;
chunk__17330_17334 = G__17351;
count__17331_17335 = G__17352;
i__17332_17336 = G__17353;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
