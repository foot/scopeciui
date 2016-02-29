// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6443__auto__ = v;
if(cljs.core.truth_(and__6443__auto__)){
return (v > (0));
} else {
return and__6443__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17269_SHARP_,p2__17268_SHARP_){
var vec__17271 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17268_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17271,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17271,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17269_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17272_SHARP_){
return cljs_http.client.encode_val(k,p1__17272_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17273){
var vec__17275 = p__17273;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17275,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__17276_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__17276_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6443__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17278 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17278) : client.call(null,G__17278));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17279_SHARP_){
return cljs_http.client.decode_body(p1__17279_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17285 = arguments.length;
var i__7514__auto___17286 = (0);
while(true){
if((i__7514__auto___17286 < len__7513__auto___17285)){
args__7520__auto__.push((arguments[i__7514__auto___17286]));

var G__17287 = (i__7514__auto___17286 + (1));
i__7514__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17282){
var vec__17283 = p__17282;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17283,(0),null);
return ((function (vec__17283,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
var G__17284 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17284) : client.call(null,G__17284));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17283,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17280){
var G__17281 = cljs.core.first(seq17280);
var seq17280__$1 = cljs.core.next(seq17280);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17281,seq17280__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17293 = arguments.length;
var i__7514__auto___17294 = (0);
while(true){
if((i__7514__auto___17294 < len__7513__auto___17293)){
args__7520__auto__.push((arguments[i__7514__auto___17294]));

var G__17295 = (i__7514__auto___17294 + (1));
i__7514__auto___17294 = G__17295;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17290){
var vec__17291 = p__17290;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17291,(0),null);
return ((function (vec__17291,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
var G__17292 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17292) : client.call(null,G__17292));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17291,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17288){
var G__17289 = cljs.core.first(seq17288);
var seq17288__$1 = cljs.core.next(seq17288);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17289,seq17288__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17301 = arguments.length;
var i__7514__auto___17302 = (0);
while(true){
if((i__7514__auto___17302 < len__7513__auto___17301)){
args__7520__auto__.push((arguments[i__7514__auto___17302]));

var G__17303 = (i__7514__auto___17302 + (1));
i__7514__auto___17302 = G__17303;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17298){
var vec__17299 = p__17298;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17299,(0),null);
return ((function (vec__17299,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
var G__17300 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17300) : client.call(null,G__17300));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17299,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17296){
var G__17297 = cljs.core.first(seq17296);
var seq17296__$1 = cljs.core.next(seq17296);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17297,seq17296__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__17307 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17307__$1 = ((((!((map__17307 == null)))?((((map__17307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17307):map__17307);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17307__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17309 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17309) : client.call(null,G__17309));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__17314 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17314__$1 = ((((!((map__17314 == null)))?((((map__17314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17314):map__17314);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17314__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17314__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17314,map__17314__$1,decoding,decoding_opts){
return (function (p1__17310_SHARP_){
return cljs_http.util.transit_decode(p1__17310_SHARP_,decoding,decoding_opts);
});})(map__17314,map__17314__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17314,map__17314__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17311_SHARP_){
return cljs_http.client.decode_body(p1__17311_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17314,map__17314__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17317) : client.call(null,G__17317));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17318_SHARP_){
return cljs_http.client.decode_body(p1__17318_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17323){
var map__17324 = p__17323;
var map__17324__$1 = ((((!((map__17324 == null)))?((((map__17324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17324):map__17324);
var req = map__17324__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17326 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17326) : client.call(null,G__17326));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17331){
var map__17332 = p__17331;
var map__17332__$1 = ((((!((map__17332 == null)))?((((map__17332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17332):map__17332);
var request = map__17332__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17332__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17332__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17332__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6443__auto__ = form_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17334 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17334) : client.call(null,G__17334));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17341_17347 = cljs.core.seq(params);
var chunk__17342_17348 = null;
var count__17343_17349 = (0);
var i__17344_17350 = (0);
while(true){
if((i__17344_17350 < count__17343_17349)){
var vec__17345_17351 = chunk__17342_17348.cljs$core$IIndexed$_nth$arity$2(null,i__17344_17350);
var k_17352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17345_17351,(0),null);
var v_17353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17345_17351,(1),null);
if(cljs.core.coll_QMARK_(v_17353)){
form_data.append(cljs.core.name(k_17352),cljs.core.first(v_17353),cljs.core.second(v_17353));
} else {
form_data.append(cljs.core.name(k_17352),v_17353);
}

var G__17354 = seq__17341_17347;
var G__17355 = chunk__17342_17348;
var G__17356 = count__17343_17349;
var G__17357 = (i__17344_17350 + (1));
seq__17341_17347 = G__17354;
chunk__17342_17348 = G__17355;
count__17343_17349 = G__17356;
i__17344_17350 = G__17357;
continue;
} else {
var temp__4425__auto___17358 = cljs.core.seq(seq__17341_17347);
if(temp__4425__auto___17358){
var seq__17341_17359__$1 = temp__4425__auto___17358;
if(cljs.core.chunked_seq_QMARK_(seq__17341_17359__$1)){
var c__7258__auto___17360 = cljs.core.chunk_first(seq__17341_17359__$1);
var G__17361 = cljs.core.chunk_rest(seq__17341_17359__$1);
var G__17362 = c__7258__auto___17360;
var G__17363 = cljs.core.count(c__7258__auto___17360);
var G__17364 = (0);
seq__17341_17347 = G__17361;
chunk__17342_17348 = G__17362;
count__17343_17349 = G__17363;
i__17344_17350 = G__17364;
continue;
} else {
var vec__17346_17365 = cljs.core.first(seq__17341_17359__$1);
var k_17366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17346_17365,(0),null);
var v_17367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17346_17365,(1),null);
if(cljs.core.coll_QMARK_(v_17367)){
form_data.append(cljs.core.name(k_17366),cljs.core.first(v_17367),cljs.core.second(v_17367));
} else {
form_data.append(cljs.core.name(k_17366),v_17367);
}

var G__17368 = cljs.core.next(seq__17341_17359__$1);
var G__17369 = null;
var G__17370 = (0);
var G__17371 = (0);
seq__17341_17347 = G__17368;
chunk__17342_17348 = G__17369;
count__17343_17349 = G__17370;
i__17344_17350 = G__17371;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__17376){
var map__17377 = p__17376;
var map__17377__$1 = ((((!((map__17377 == null)))?((((map__17377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17377):map__17377);
var request = map__17377__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17377__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17377__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6443__auto__ = multipart_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
var G__17379 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17379) : client.call(null,G__17379));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var G__17381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17381) : client.call(null,G__17381));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17382_SHARP_){
var G__17384 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17382_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17384) : client.call(null,G__17384));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17390){
var map__17391 = p__17390;
var map__17391__$1 = ((((!((map__17391 == null)))?((((map__17391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17391):map__17391);
var req = map__17391__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4423__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
var G__17393 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4423__auto__,map__17391,map__17391__$1,req,query_params){
return (function (p1__17385_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17385_SHARP_,query_params], 0));
});})(spec,temp__4423__auto__,map__17391,map__17391__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17393) : client.call(null,G__17393));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17399 = arguments.length;
var i__7514__auto___17400 = (0);
while(true){
if((i__7514__auto___17400 < len__7513__auto___17399)){
args__7520__auto__.push((arguments[i__7514__auto___17400]));

var G__17401 = (i__7514__auto___17400 + (1));
i__7514__auto___17400 = G__17401;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17396){
var vec__17397 = p__17396;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17397,(0),null);
return ((function (vec__17397,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6455__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17398 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17398) : client.call(null,G__17398));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17397,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17394){
var G__17395 = cljs.core.first(seq17394);
var seq17394__$1 = cljs.core.next(seq17394);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17395,seq17394__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
var G__17403 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17403) : client.call(null,G__17403));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17409 = arguments.length;
var i__7514__auto___17410 = (0);
while(true){
if((i__7514__auto___17410 < len__7513__auto___17409)){
args__7520__auto__.push((arguments[i__7514__auto___17410]));

var G__17411 = (i__7514__auto___17410 + (1));
i__7514__auto___17410 = G__17411;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17406){
var vec__17407 = p__17406;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17407,(0),null);
var G__17408 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17408) : cljs_http.client.request.call(null,G__17408));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17404){
var G__17405 = cljs.core.first(seq17404);
var seq17404__$1 = cljs.core.next(seq17404);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17405,seq17404__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17417 = arguments.length;
var i__7514__auto___17418 = (0);
while(true){
if((i__7514__auto___17418 < len__7513__auto___17417)){
args__7520__auto__.push((arguments[i__7514__auto___17418]));

var G__17419 = (i__7514__auto___17418 + (1));
i__7514__auto___17418 = G__17419;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17414){
var vec__17415 = p__17414;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17415,(0),null);
var G__17416 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17416) : cljs_http.client.request.call(null,G__17416));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17412){
var G__17413 = cljs.core.first(seq17412);
var seq17412__$1 = cljs.core.next(seq17412);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17413,seq17412__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17425 = arguments.length;
var i__7514__auto___17426 = (0);
while(true){
if((i__7514__auto___17426 < len__7513__auto___17425)){
args__7520__auto__.push((arguments[i__7514__auto___17426]));

var G__17427 = (i__7514__auto___17426 + (1));
i__7514__auto___17426 = G__17427;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17422){
var vec__17423 = p__17422;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17423,(0),null);
var G__17424 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17424) : cljs_http.client.request.call(null,G__17424));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17420){
var G__17421 = cljs.core.first(seq17420);
var seq17420__$1 = cljs.core.next(seq17420);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17421,seq17420__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17433 = arguments.length;
var i__7514__auto___17434 = (0);
while(true){
if((i__7514__auto___17434 < len__7513__auto___17433)){
args__7520__auto__.push((arguments[i__7514__auto___17434]));

var G__17435 = (i__7514__auto___17434 + (1));
i__7514__auto___17434 = G__17435;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17430){
var vec__17431 = p__17430;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(0),null);
var G__17432 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17432) : cljs_http.client.request.call(null,G__17432));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17428){
var G__17429 = cljs.core.first(seq17428);
var seq17428__$1 = cljs.core.next(seq17428);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17429,seq17428__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17441 = arguments.length;
var i__7514__auto___17442 = (0);
while(true){
if((i__7514__auto___17442 < len__7513__auto___17441)){
args__7520__auto__.push((arguments[i__7514__auto___17442]));

var G__17443 = (i__7514__auto___17442 + (1));
i__7514__auto___17442 = G__17443;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17438){
var vec__17439 = p__17438;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(0),null);
var G__17440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17440) : cljs_http.client.request.call(null,G__17440));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17436){
var G__17437 = cljs.core.first(seq17436);
var seq17436__$1 = cljs.core.next(seq17436);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17437,seq17436__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17449 = arguments.length;
var i__7514__auto___17450 = (0);
while(true){
if((i__7514__auto___17450 < len__7513__auto___17449)){
args__7520__auto__.push((arguments[i__7514__auto___17450]));

var G__17451 = (i__7514__auto___17450 + (1));
i__7514__auto___17450 = G__17451;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17446){
var vec__17447 = p__17446;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17447,(0),null);
var G__17448 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17448) : cljs_http.client.request.call(null,G__17448));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17444){
var G__17445 = cljs.core.first(seq17444);
var seq17444__$1 = cljs.core.next(seq17444);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17445,seq17444__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17457 = arguments.length;
var i__7514__auto___17458 = (0);
while(true){
if((i__7514__auto___17458 < len__7513__auto___17457)){
args__7520__auto__.push((arguments[i__7514__auto___17458]));

var G__17459 = (i__7514__auto___17458 + (1));
i__7514__auto___17458 = G__17459;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17454){
var vec__17455 = p__17454;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17455,(0),null);
var G__17456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17456) : cljs_http.client.request.call(null,G__17456));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17452){
var G__17453 = cljs.core.first(seq17452);
var seq17452__$1 = cljs.core.next(seq17452);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17453,seq17452__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17465 = arguments.length;
var i__7514__auto___17466 = (0);
while(true){
if((i__7514__auto___17466 < len__7513__auto___17465)){
args__7520__auto__.push((arguments[i__7514__auto___17466]));

var G__17467 = (i__7514__auto___17466 + (1));
i__7514__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17462){
var vec__17463 = p__17462;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17463,(0),null);
var G__17464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17464) : cljs_http.client.request.call(null,G__17464));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17460){
var G__17461 = cljs.core.first(seq17460);
var seq17460__$1 = cljs.core.next(seq17460);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17461,seq17460__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17473 = arguments.length;
var i__7514__auto___17474 = (0);
while(true){
if((i__7514__auto___17474 < len__7513__auto___17473)){
args__7520__auto__.push((arguments[i__7514__auto___17474]));

var G__17475 = (i__7514__auto___17474 + (1));
i__7514__auto___17474 = G__17475;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17470){
var vec__17471 = p__17470;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17471,(0),null);
var G__17472 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17472) : cljs_http.client.request.call(null,G__17472));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17468){
var G__17469 = cljs.core.first(seq17468);
var seq17468__$1 = cljs.core.next(seq17468);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17469,seq17468__$1);
});
