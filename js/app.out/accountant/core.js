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
var G__17800_17803 = el;
var G__17801_17804 = type;
var G__17802_17805 = ((function (G__17800_17803,G__17801_17804,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__17800_17803,G__17801_17804,out))
;
goog.events.listen(G__17800_17803,G__17801_17804,G__17802_17805);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__,navigation){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__,navigation){
return (function (state_17848){
var state_val_17849 = (state_17848[(1)]);
if((state_val_17849 === (1))){
var state_17848__$1 = state_17848;
var statearr_17850_17864 = state_17848__$1;
(statearr_17850_17864[(2)] = null);

(statearr_17850_17864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17849 === (2))){
var state_17848__$1 = state_17848;
var statearr_17851_17865 = state_17848__$1;
(statearr_17851_17865[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_17849 === (3))){
var inst_17846 = (state_17848[(2)]);
var state_17848__$1 = state_17848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17848__$1,inst_17846);
} else {
if((state_val_17849 === (4))){
var state_17848__$1 = state_17848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17848__$1,(7),navigation);
} else {
if((state_val_17849 === (5))){
var state_17848__$1 = state_17848;
var statearr_17853_17866 = state_17848__$1;
(statearr_17853_17866[(2)] = null);

(statearr_17853_17866[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17849 === (6))){
var inst_17844 = (state_17848[(2)]);
var state_17848__$1 = state_17848;
var statearr_17854_17867 = state_17848__$1;
(statearr_17854_17867[(2)] = inst_17844);

(statearr_17854_17867[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17849 === (7))){
var inst_17838 = (state_17848[(2)]);
var inst_17839 = inst_17838.token;
var inst_17840 = secretary.core.dispatch_BANG_(inst_17839);
var state_17848__$1 = (function (){var statearr_17855 = state_17848;
(statearr_17855[(7)] = inst_17840);

return statearr_17855;
})();
var statearr_17856_17868 = state_17848__$1;
(statearr_17856_17868[(2)] = null);

(statearr_17856_17868[(1)] = (2));


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
});})(c__13997__auto__,navigation))
;
return ((function (switch__13883__auto__,c__13997__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____0 = (function (){
var statearr_17860 = [null,null,null,null,null,null,null,null];
(statearr_17860[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__);

(statearr_17860[(1)] = (1));

return statearr_17860;
});
var accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____1 = (function (state_17848){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_17848);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e17861){if((e17861 instanceof Object)){
var ex__13887__auto__ = e17861;
var statearr_17862_17869 = state_17848;
(statearr_17862_17869[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17848);

return cljs.core.cst$kw$recur;
} else {
throw e17861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__17870 = state_17848;
state_17848 = G__17870;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__ = function(state_17848){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____1.call(this,state_17848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__13884__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__,navigation))
})();
var state__13999__auto__ = (function (){var statearr_17863 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_17863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__,navigation))
);

return c__13997__auto__;
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
var G__17871 = parent;
e = G__17871;
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
var G__17875 = document;
var G__17876 = "click";
var G__17877 = ((function (G__17875,G__17876){
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
});})(G__17875,G__17876))
;
return goog.events.listen(G__17875,G__17876,G__17877);
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
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17878_SHARP_){
return cljs.core.name(p1__17878_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__17879_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__17879_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args17880 = [];
var len__7513__auto___17883 = arguments.length;
var i__7514__auto___17884 = (0);
while(true){
if((i__7514__auto___17884 < len__7513__auto___17883)){
args17880.push((arguments[i__7514__auto___17884]));

var G__17885 = (i__7514__auto___17884 + (1));
i__7514__auto___17884 = G__17885;
continue;
} else {
}
break;
}

var G__17882 = args17880.length;
switch (G__17882) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17880.length)].join('')));

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
