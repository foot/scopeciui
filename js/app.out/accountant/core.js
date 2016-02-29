// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17642_17645 = el;
var G__17643_17646 = type;
var G__17644_17647 = ((function (G__17642_17645,G__17643_17646,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__17642_17645,G__17643_17646,out))
;
goog.events.listen(G__17642_17645,G__17643_17646,G__17644_17647);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__13993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto__,navigation){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto__,navigation){
return (function (state_17690){
var state_val_17691 = (state_17690[(1)]);
if((state_val_17691 === (1))){
var state_17690__$1 = state_17690;
var statearr_17692_17706 = state_17690__$1;
(statearr_17692_17706[(2)] = null);

(statearr_17692_17706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17691 === (2))){
var state_17690__$1 = state_17690;
var statearr_17693_17707 = state_17690__$1;
(statearr_17693_17707[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_17691 === (3))){
var inst_17688 = (state_17690[(2)]);
var state_17690__$1 = state_17690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17690__$1,inst_17688);
} else {
if((state_val_17691 === (4))){
var state_17690__$1 = state_17690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17690__$1,(7),navigation);
} else {
if((state_val_17691 === (5))){
var state_17690__$1 = state_17690;
var statearr_17695_17708 = state_17690__$1;
(statearr_17695_17708[(2)] = null);

(statearr_17695_17708[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17691 === (6))){
var inst_17686 = (state_17690[(2)]);
var state_17690__$1 = state_17690;
var statearr_17696_17709 = state_17690__$1;
(statearr_17696_17709[(2)] = inst_17686);

(statearr_17696_17709[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17691 === (7))){
var inst_17680 = (state_17690[(2)]);
var inst_17681 = inst_17680.token;
var inst_17682 = secretary.core.dispatch_BANG_(inst_17681);
var state_17690__$1 = (function (){var statearr_17697 = state_17690;
(statearr_17697[(7)] = inst_17682);

return statearr_17697;
})();
var statearr_17698_17710 = state_17690__$1;
(statearr_17698_17710[(2)] = null);

(statearr_17698_17710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__13993__auto__,navigation))
;
return ((function (switch__13879__auto__,c__13993__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____0 = (function (){
var statearr_17702 = [null,null,null,null,null,null,null,null];
(statearr_17702[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__);

(statearr_17702[(1)] = (1));

return statearr_17702;
});
var accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____1 = (function (state_17690){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_17690);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e17703){if((e17703 instanceof Object)){
var ex__13883__auto__ = e17703;
var statearr_17704_17711 = state_17690;
(statearr_17704_17711[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17690);

return cljs.core.cst$kw$recur;
} else {
throw e17703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__17712 = state_17690;
state_17690 = G__17712;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__ = function(state_17690){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____1.call(this,state_17690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__13880__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto__,navigation))
})();
var state__13995__auto__ = (function (){var statearr_17705 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_17705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto__);

return statearr_17705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto__,navigation))
);

return c__13993__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4423__auto__ = e.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__17713 = parent;
e = G__17713;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6455__auto__ = title;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = document.title;
if(cljs.core.truth_(or__6455__auto____$1)){
return or__6455__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
var G__17717 = document;
var G__17718 = "click";
var G__17719 = ((function (G__17717,G__17718){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6455__auto__ = meta_key;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var or__6455__auto____$1 = alt_key;
if(cljs.core.truth_(or__6455__auto____$1)){
return or__6455__auto____$1;
} else {
var or__6455__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6455__auto____$2)){
return or__6455__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not(any_key);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6443__auto____$1){
return secretary.core.locate_route(path);
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__17717,G__17718))
;
return goog.events.listen(G__17717,G__17718,G__17719);
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate(accountant.core.history);

return accountant.core.prevent_reload_on_known_path(accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17720_SHARP_){
return cljs.core.name(p1__17720_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__17721_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__17721_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args17722 = [];
var len__7513__auto___17725 = arguments.length;
var i__7514__auto___17726 = (0);
while(true){
if((i__7514__auto___17726 < len__7513__auto___17725)){
args17722.push((arguments[i__7514__auto___17726]));

var G__17727 = (i__7514__auto___17726 + (1));
i__7514__auto___17726 = G__17727;
continue;
} else {
}
break;
}

var G__17724 = args17722.length;
switch (G__17724) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17722.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
return secretary.core.dispatch_BANG_([cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join(''));
});
