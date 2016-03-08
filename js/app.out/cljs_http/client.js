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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17445_SHARP_,p2__17444_SHARP_){
var vec__17447 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17444_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17447,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17445_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17448_SHARP_){
return cljs_http.client.encode_val(k,p1__17448_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17449){
var vec__17451 = p__17449;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17451,(1),null);
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
return (function (p1__17452_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__17452_SHARP_)].join('');
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
var G__17454 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17454) : client.call(null,G__17454));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17455_SHARP_){
return cljs_http.client.decode_body(p1__17455_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17461 = arguments.length;
var i__7514__auto___17462 = (0);
while(true){
if((i__7514__auto___17462 < len__7513__auto___17461)){
args__7520__auto__.push((arguments[i__7514__auto___17462]));

var G__17463 = (i__7514__auto___17462 + (1));
i__7514__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17458){
var vec__17459 = p__17458;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(0),null);
return ((function (vec__17459,default_headers){
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
var G__17460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17460) : client.call(null,G__17460));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17459,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17456){
var G__17457 = cljs.core.first(seq17456);
var seq17456__$1 = cljs.core.next(seq17456);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17457,seq17456__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17469 = arguments.length;
var i__7514__auto___17470 = (0);
while(true){
if((i__7514__auto___17470 < len__7513__auto___17469)){
args__7520__auto__.push((arguments[i__7514__auto___17470]));

var G__17471 = (i__7514__auto___17470 + (1));
i__7514__auto___17470 = G__17471;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17466){
var vec__17467 = p__17466;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(0),null);
return ((function (vec__17467,accept){
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
var G__17468 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17468) : client.call(null,G__17468));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17467,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17464){
var G__17465 = cljs.core.first(seq17464);
var seq17464__$1 = cljs.core.next(seq17464);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17465,seq17464__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17477 = arguments.length;
var i__7514__auto___17478 = (0);
while(true){
if((i__7514__auto___17478 < len__7513__auto___17477)){
args__7520__auto__.push((arguments[i__7514__auto___17478]));

var G__17479 = (i__7514__auto___17478 + (1));
i__7514__auto___17478 = G__17479;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17474){
var vec__17475 = p__17474;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475,(0),null);
return ((function (vec__17475,content_type){
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
var G__17476 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17476) : client.call(null,G__17476));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17475,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17472){
var G__17473 = cljs.core.first(seq17472);
var seq17472__$1 = cljs.core.next(seq17472);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17473,seq17472__$1);
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
var map__17483 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17483__$1 = ((((!((map__17483 == null)))?((((map__17483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17483):map__17483);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17485) : client.call(null,G__17485));
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
var map__17490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17490__$1 = ((((!((map__17490 == null)))?((((map__17490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17490):map__17490);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17490,map__17490__$1,decoding,decoding_opts){
return (function (p1__17486_SHARP_){
return cljs_http.util.transit_decode(p1__17486_SHARP_,decoding,decoding_opts);
});})(map__17490,map__17490__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17490,map__17490__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17487_SHARP_){
return cljs_http.client.decode_body(p1__17487_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17490,map__17490__$1,decoding,decoding_opts,transit_decode))
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
var G__17493 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17493) : client.call(null,G__17493));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17494_SHARP_){
return cljs_http.client.decode_body(p1__17494_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17499){
var map__17500 = p__17499;
var map__17500__$1 = ((((!((map__17500 == null)))?((((map__17500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17500):map__17500);
var req = map__17500__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17502 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17502) : client.call(null,G__17502));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17507){
var map__17508 = p__17507;
var map__17508__$1 = ((((!((map__17508 == null)))?((((map__17508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17508):map__17508);
var request = map__17508__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6443__auto__ = form_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17510 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17510) : client.call(null,G__17510));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17517_17523 = cljs.core.seq(params);
var chunk__17518_17524 = null;
var count__17519_17525 = (0);
var i__17520_17526 = (0);
while(true){
if((i__17520_17526 < count__17519_17525)){
var vec__17521_17527 = chunk__17518_17524.cljs$core$IIndexed$_nth$arity$2(null,i__17520_17526);
var k_17528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521_17527,(0),null);
var v_17529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17521_17527,(1),null);
if(cljs.core.coll_QMARK_(v_17529)){
form_data.append(cljs.core.name(k_17528),cljs.core.first(v_17529),cljs.core.second(v_17529));
} else {
form_data.append(cljs.core.name(k_17528),v_17529);
}

var G__17530 = seq__17517_17523;
var G__17531 = chunk__17518_17524;
var G__17532 = count__17519_17525;
var G__17533 = (i__17520_17526 + (1));
seq__17517_17523 = G__17530;
chunk__17518_17524 = G__17531;
count__17519_17525 = G__17532;
i__17520_17526 = G__17533;
continue;
} else {
var temp__4425__auto___17534 = cljs.core.seq(seq__17517_17523);
if(temp__4425__auto___17534){
var seq__17517_17535__$1 = temp__4425__auto___17534;
if(cljs.core.chunked_seq_QMARK_(seq__17517_17535__$1)){
var c__7258__auto___17536 = cljs.core.chunk_first(seq__17517_17535__$1);
var G__17537 = cljs.core.chunk_rest(seq__17517_17535__$1);
var G__17538 = c__7258__auto___17536;
var G__17539 = cljs.core.count(c__7258__auto___17536);
var G__17540 = (0);
seq__17517_17523 = G__17537;
chunk__17518_17524 = G__17538;
count__17519_17525 = G__17539;
i__17520_17526 = G__17540;
continue;
} else {
var vec__17522_17541 = cljs.core.first(seq__17517_17535__$1);
var k_17542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17522_17541,(0),null);
var v_17543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17522_17541,(1),null);
if(cljs.core.coll_QMARK_(v_17543)){
form_data.append(cljs.core.name(k_17542),cljs.core.first(v_17543),cljs.core.second(v_17543));
} else {
form_data.append(cljs.core.name(k_17542),v_17543);
}

var G__17544 = cljs.core.next(seq__17517_17535__$1);
var G__17545 = null;
var G__17546 = (0);
var G__17547 = (0);
seq__17517_17523 = G__17544;
chunk__17518_17524 = G__17545;
count__17519_17525 = G__17546;
i__17520_17526 = G__17547;
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
return (function (p__17552){
var map__17553 = p__17552;
var map__17553__$1 = ((((!((map__17553 == null)))?((((map__17553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17553):map__17553);
var request = map__17553__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17553__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17553__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6443__auto__ = multipart_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
var G__17555 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17555) : client.call(null,G__17555));
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
var G__17557 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17557) : client.call(null,G__17557));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17558_SHARP_){
var G__17560 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17558_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17560) : client.call(null,G__17560));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17566){
var map__17567 = p__17566;
var map__17567__$1 = ((((!((map__17567 == null)))?((((map__17567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17567):map__17567);
var req = map__17567__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17567__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4423__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
var G__17569 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4423__auto__,map__17567,map__17567__$1,req,query_params){
return (function (p1__17561_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17561_SHARP_,query_params], 0));
});})(spec,temp__4423__auto__,map__17567,map__17567__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17569) : client.call(null,G__17569));
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
var len__7513__auto___17575 = arguments.length;
var i__7514__auto___17576 = (0);
while(true){
if((i__7514__auto___17576 < len__7513__auto___17575)){
args__7520__auto__.push((arguments[i__7514__auto___17576]));

var G__17577 = (i__7514__auto___17576 + (1));
i__7514__auto___17576 = G__17577;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17572){
var vec__17573 = p__17572;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17573,(0),null);
return ((function (vec__17573,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6455__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17574 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17574) : client.call(null,G__17574));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17573,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17570){
var G__17571 = cljs.core.first(seq17570);
var seq17570__$1 = cljs.core.next(seq17570);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17571,seq17570__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
var G__17579 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17579) : client.call(null,G__17579));
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
var len__7513__auto___17585 = arguments.length;
var i__7514__auto___17586 = (0);
while(true){
if((i__7514__auto___17586 < len__7513__auto___17585)){
args__7520__auto__.push((arguments[i__7514__auto___17586]));

var G__17587 = (i__7514__auto___17586 + (1));
i__7514__auto___17586 = G__17587;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17582){
var vec__17583 = p__17582;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583,(0),null);
var G__17584 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17584) : cljs_http.client.request.call(null,G__17584));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17580){
var G__17581 = cljs.core.first(seq17580);
var seq17580__$1 = cljs.core.next(seq17580);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17581,seq17580__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17593 = arguments.length;
var i__7514__auto___17594 = (0);
while(true){
if((i__7514__auto___17594 < len__7513__auto___17593)){
args__7520__auto__.push((arguments[i__7514__auto___17594]));

var G__17595 = (i__7514__auto___17594 + (1));
i__7514__auto___17594 = G__17595;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17590){
var vec__17591 = p__17590;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17591,(0),null);
var G__17592 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17592) : cljs_http.client.request.call(null,G__17592));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17588){
var G__17589 = cljs.core.first(seq17588);
var seq17588__$1 = cljs.core.next(seq17588);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17589,seq17588__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17601 = arguments.length;
var i__7514__auto___17602 = (0);
while(true){
if((i__7514__auto___17602 < len__7513__auto___17601)){
args__7520__auto__.push((arguments[i__7514__auto___17602]));

var G__17603 = (i__7514__auto___17602 + (1));
i__7514__auto___17602 = G__17603;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17598){
var vec__17599 = p__17598;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17599,(0),null);
var G__17600 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17600) : cljs_http.client.request.call(null,G__17600));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17596){
var G__17597 = cljs.core.first(seq17596);
var seq17596__$1 = cljs.core.next(seq17596);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17597,seq17596__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17609 = arguments.length;
var i__7514__auto___17610 = (0);
while(true){
if((i__7514__auto___17610 < len__7513__auto___17609)){
args__7520__auto__.push((arguments[i__7514__auto___17610]));

var G__17611 = (i__7514__auto___17610 + (1));
i__7514__auto___17610 = G__17611;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17606){
var vec__17607 = p__17606;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17607,(0),null);
var G__17608 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17608) : cljs_http.client.request.call(null,G__17608));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17604){
var G__17605 = cljs.core.first(seq17604);
var seq17604__$1 = cljs.core.next(seq17604);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17605,seq17604__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17617 = arguments.length;
var i__7514__auto___17618 = (0);
while(true){
if((i__7514__auto___17618 < len__7513__auto___17617)){
args__7520__auto__.push((arguments[i__7514__auto___17618]));

var G__17619 = (i__7514__auto___17618 + (1));
i__7514__auto___17618 = G__17619;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17614){
var vec__17615 = p__17614;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615,(0),null);
var G__17616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17616) : cljs_http.client.request.call(null,G__17616));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17612){
var G__17613 = cljs.core.first(seq17612);
var seq17612__$1 = cljs.core.next(seq17612);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17613,seq17612__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17625 = arguments.length;
var i__7514__auto___17626 = (0);
while(true){
if((i__7514__auto___17626 < len__7513__auto___17625)){
args__7520__auto__.push((arguments[i__7514__auto___17626]));

var G__17627 = (i__7514__auto___17626 + (1));
i__7514__auto___17626 = G__17627;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17622){
var vec__17623 = p__17622;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);
var G__17624 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17624) : cljs_http.client.request.call(null,G__17624));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17620){
var G__17621 = cljs.core.first(seq17620);
var seq17620__$1 = cljs.core.next(seq17620);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17621,seq17620__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17633 = arguments.length;
var i__7514__auto___17634 = (0);
while(true){
if((i__7514__auto___17634 < len__7513__auto___17633)){
args__7520__auto__.push((arguments[i__7514__auto___17634]));

var G__17635 = (i__7514__auto___17634 + (1));
i__7514__auto___17634 = G__17635;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17630){
var vec__17631 = p__17630;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(0),null);
var G__17632 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17632) : cljs_http.client.request.call(null,G__17632));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17628){
var G__17629 = cljs.core.first(seq17628);
var seq17628__$1 = cljs.core.next(seq17628);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17629,seq17628__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17641 = arguments.length;
var i__7514__auto___17642 = (0);
while(true){
if((i__7514__auto___17642 < len__7513__auto___17641)){
args__7520__auto__.push((arguments[i__7514__auto___17642]));

var G__17643 = (i__7514__auto___17642 + (1));
i__7514__auto___17642 = G__17643;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17638){
var vec__17639 = p__17638;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17639,(0),null);
var G__17640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17640) : cljs_http.client.request.call(null,G__17640));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17636){
var G__17637 = cljs.core.first(seq17636);
var seq17636__$1 = cljs.core.next(seq17636);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17637,seq17636__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17649 = arguments.length;
var i__7514__auto___17650 = (0);
while(true){
if((i__7514__auto___17650 < len__7513__auto___17649)){
args__7520__auto__.push((arguments[i__7514__auto___17650]));

var G__17651 = (i__7514__auto___17650 + (1));
i__7514__auto___17650 = G__17651;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17646){
var vec__17647 = p__17646;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17647,(0),null);
var G__17648 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17648) : cljs_http.client.request.call(null,G__17648));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17644){
var G__17645 = cljs.core.first(seq17644);
var seq17644__$1 = cljs.core.next(seq17644);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17645,seq17644__$1);
});
