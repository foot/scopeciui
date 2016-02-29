// Compiled by ClojureScript 1.7.228 {}
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__12654_SHARP_,p2__12653_SHARP_){
var vec__12656 = clojure.string.split.call(null,p2__12653_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__12656,(0),null);
var v = cljs.core.nth.call(null,vec__12656,(1),null);
return cljs.core.assoc.call(null,p1__12654_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__12657_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__12657_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__12658){
var vec__12660 = p__12658;
var k = cljs.core.nth.call(null,vec__12660,(0),null);
var v = cljs.core.nth.call(null,vec__12660,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__12661_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__12661_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6443__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6443__auto__){
var and__6443__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6443__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6443__auto____$1;
}
} else {
return and__6443__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
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
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__12662_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12662_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12667 = arguments.length;
var i__7514__auto___12668 = (0);
while(true){
if((i__7514__auto___12668 < len__7513__auto___12667)){
args__7520__auto__.push((arguments[i__7514__auto___12668]));

var G__12669 = (i__7514__auto___12668 + (1));
i__7514__auto___12668 = G__12669;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12665){
var vec__12666 = p__12665;
var default_headers = cljs.core.nth.call(null,vec__12666,(0),null);
return ((function (vec__12666,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12666,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq12663){
var G__12664 = cljs.core.first.call(null,seq12663);
var seq12663__$1 = cljs.core.next.call(null,seq12663);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__12664,seq12663__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12674 = arguments.length;
var i__7514__auto___12675 = (0);
while(true){
if((i__7514__auto___12675 < len__7513__auto___12674)){
args__7520__auto__.push((arguments[i__7514__auto___12675]));

var G__12676 = (i__7514__auto___12675 + (1));
i__7514__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12672){
var vec__12673 = p__12672;
var accept = cljs.core.nth.call(null,vec__12673,(0),null);
return ((function (vec__12673,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12673,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq12670){
var G__12671 = cljs.core.first.call(null,seq12670);
var seq12670__$1 = cljs.core.next.call(null,seq12670);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__12671,seq12670__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12681 = arguments.length;
var i__7514__auto___12682 = (0);
while(true){
if((i__7514__auto___12682 < len__7513__auto___12681)){
args__7520__auto__.push((arguments[i__7514__auto___12682]));

var G__12683 = (i__7514__auto___12682 + (1));
i__7514__auto___12682 = G__12683;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12679){
var vec__12680 = p__12679;
var content_type = cljs.core.nth.call(null,vec__12680,(0),null);
return ((function (vec__12680,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12680,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq12677){
var G__12678 = cljs.core.first.call(null,seq12677);
var seq12677__$1 = cljs.core.next.call(null,seq12677);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__12678,seq12677__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__12686 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12686__$1 = ((((!((map__12686 == null)))?((((map__12686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12686):map__12686);
var encoding = cljs.core.get.call(null,map__12686__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__12686__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__12692 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12692__$1 = ((((!((map__12692 == null)))?((((map__12692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12692):map__12692);
var decoding = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__12692,map__12692__$1,decoding,decoding_opts){
return (function (p1__12688_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__12688_SHARP_,decoding,decoding_opts);
});})(map__12692,map__12692__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__12692,map__12692__$1,decoding,decoding_opts,transit_decode){
return (function (p1__12689_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12689_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__12692,map__12692__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__12694_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12694_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__12698){
var map__12699 = p__12698;
var map__12699__$1 = ((((!((map__12699 == null)))?((((map__12699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12699):map__12699);
var req = map__12699__$1;
var query_params = cljs.core.get.call(null,map__12699__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__12704){
var map__12705 = p__12704;
var map__12705__$1 = ((((!((map__12705 == null)))?((((map__12705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12705):map__12705);
var request = map__12705__$1;
var form_params = cljs.core.get.call(null,map__12705__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__12705__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__12705__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6443__auto__ = form_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__12713_12719 = cljs.core.seq.call(null,params);
var chunk__12714_12720 = null;
var count__12715_12721 = (0);
var i__12716_12722 = (0);
while(true){
if((i__12716_12722 < count__12715_12721)){
var vec__12717_12723 = cljs.core._nth.call(null,chunk__12714_12720,i__12716_12722);
var k_12724 = cljs.core.nth.call(null,vec__12717_12723,(0),null);
var v_12725 = cljs.core.nth.call(null,vec__12717_12723,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12725)){
form_data.append(cljs.core.name.call(null,k_12724),cljs.core.first.call(null,v_12725),cljs.core.second.call(null,v_12725));
} else {
form_data.append(cljs.core.name.call(null,k_12724),v_12725);
}

var G__12726 = seq__12713_12719;
var G__12727 = chunk__12714_12720;
var G__12728 = count__12715_12721;
var G__12729 = (i__12716_12722 + (1));
seq__12713_12719 = G__12726;
chunk__12714_12720 = G__12727;
count__12715_12721 = G__12728;
i__12716_12722 = G__12729;
continue;
} else {
var temp__4425__auto___12730 = cljs.core.seq.call(null,seq__12713_12719);
if(temp__4425__auto___12730){
var seq__12713_12731__$1 = temp__4425__auto___12730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12713_12731__$1)){
var c__7258__auto___12732 = cljs.core.chunk_first.call(null,seq__12713_12731__$1);
var G__12733 = cljs.core.chunk_rest.call(null,seq__12713_12731__$1);
var G__12734 = c__7258__auto___12732;
var G__12735 = cljs.core.count.call(null,c__7258__auto___12732);
var G__12736 = (0);
seq__12713_12719 = G__12733;
chunk__12714_12720 = G__12734;
count__12715_12721 = G__12735;
i__12716_12722 = G__12736;
continue;
} else {
var vec__12718_12737 = cljs.core.first.call(null,seq__12713_12731__$1);
var k_12738 = cljs.core.nth.call(null,vec__12718_12737,(0),null);
var v_12739 = cljs.core.nth.call(null,vec__12718_12737,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12739)){
form_data.append(cljs.core.name.call(null,k_12738),cljs.core.first.call(null,v_12739),cljs.core.second.call(null,v_12739));
} else {
form_data.append(cljs.core.name.call(null,k_12738),v_12739);
}

var G__12740 = cljs.core.next.call(null,seq__12713_12731__$1);
var G__12741 = null;
var G__12742 = (0);
var G__12743 = (0);
seq__12713_12719 = G__12740;
chunk__12714_12720 = G__12741;
count__12715_12721 = G__12742;
i__12716_12722 = G__12743;
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
return (function (p__12747){
var map__12748 = p__12747;
var map__12748__$1 = ((((!((map__12748 == null)))?((((map__12748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12748):map__12748);
var request = map__12748__$1;
var multipart_params = cljs.core.get.call(null,map__12748__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__12748__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6443__auto__ = multipart_params;
if(cljs.core.truth_(and__6443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6443__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__12750_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__12750_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__12755){
var map__12756 = p__12755;
var map__12756__$1 = ((((!((map__12756 == null)))?((((map__12756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12756):map__12756);
var req = map__12756__$1;
var query_params = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__12756,map__12756__$1,req,query_params){
return (function (p1__12751_SHARP_){
return cljs.core.merge.call(null,p1__12751_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__12756,map__12756__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12762 = arguments.length;
var i__7514__auto___12763 = (0);
while(true){
if((i__7514__auto___12763 < len__7513__auto___12762)){
args__7520__auto__.push((arguments[i__7514__auto___12763]));

var G__12764 = (i__7514__auto___12763 + (1));
i__7514__auto___12763 = G__12764;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12760){
var vec__12761 = p__12760;
var credentials = cljs.core.nth.call(null,vec__12761,(0),null);
return ((function (vec__12761,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6455__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__12761,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq12758){
var G__12759 = cljs.core.first.call(null,seq12758);
var seq12758__$1 = cljs.core.next.call(null,seq12758);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__12759,seq12758__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12769 = arguments.length;
var i__7514__auto___12770 = (0);
while(true){
if((i__7514__auto___12770 < len__7513__auto___12769)){
args__7520__auto__.push((arguments[i__7514__auto___12770]));

var G__12771 = (i__7514__auto___12770 + (1));
i__7514__auto___12770 = G__12771;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12767){
var vec__12768 = p__12767;
var req = cljs.core.nth.call(null,vec__12768,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq12765){
var G__12766 = cljs.core.first.call(null,seq12765);
var seq12765__$1 = cljs.core.next.call(null,seq12765);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__12766,seq12765__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12776 = arguments.length;
var i__7514__auto___12777 = (0);
while(true){
if((i__7514__auto___12777 < len__7513__auto___12776)){
args__7520__auto__.push((arguments[i__7514__auto___12777]));

var G__12778 = (i__7514__auto___12777 + (1));
i__7514__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12774){
var vec__12775 = p__12774;
var req = cljs.core.nth.call(null,vec__12775,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq12772){
var G__12773 = cljs.core.first.call(null,seq12772);
var seq12772__$1 = cljs.core.next.call(null,seq12772);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__12773,seq12772__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12783 = arguments.length;
var i__7514__auto___12784 = (0);
while(true){
if((i__7514__auto___12784 < len__7513__auto___12783)){
args__7520__auto__.push((arguments[i__7514__auto___12784]));

var G__12785 = (i__7514__auto___12784 + (1));
i__7514__auto___12784 = G__12785;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12781){
var vec__12782 = p__12781;
var req = cljs.core.nth.call(null,vec__12782,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq12779){
var G__12780 = cljs.core.first.call(null,seq12779);
var seq12779__$1 = cljs.core.next.call(null,seq12779);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__12780,seq12779__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12790 = arguments.length;
var i__7514__auto___12791 = (0);
while(true){
if((i__7514__auto___12791 < len__7513__auto___12790)){
args__7520__auto__.push((arguments[i__7514__auto___12791]));

var G__12792 = (i__7514__auto___12791 + (1));
i__7514__auto___12791 = G__12792;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12788){
var vec__12789 = p__12788;
var req = cljs.core.nth.call(null,vec__12789,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq12786){
var G__12787 = cljs.core.first.call(null,seq12786);
var seq12786__$1 = cljs.core.next.call(null,seq12786);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__12787,seq12786__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12797 = arguments.length;
var i__7514__auto___12798 = (0);
while(true){
if((i__7514__auto___12798 < len__7513__auto___12797)){
args__7520__auto__.push((arguments[i__7514__auto___12798]));

var G__12799 = (i__7514__auto___12798 + (1));
i__7514__auto___12798 = G__12799;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12795){
var vec__12796 = p__12795;
var req = cljs.core.nth.call(null,vec__12796,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq12793){
var G__12794 = cljs.core.first.call(null,seq12793);
var seq12793__$1 = cljs.core.next.call(null,seq12793);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__12794,seq12793__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12804 = arguments.length;
var i__7514__auto___12805 = (0);
while(true){
if((i__7514__auto___12805 < len__7513__auto___12804)){
args__7520__auto__.push((arguments[i__7514__auto___12805]));

var G__12806 = (i__7514__auto___12805 + (1));
i__7514__auto___12805 = G__12806;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12802){
var vec__12803 = p__12802;
var req = cljs.core.nth.call(null,vec__12803,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq12800){
var G__12801 = cljs.core.first.call(null,seq12800);
var seq12800__$1 = cljs.core.next.call(null,seq12800);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__12801,seq12800__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12811 = arguments.length;
var i__7514__auto___12812 = (0);
while(true){
if((i__7514__auto___12812 < len__7513__auto___12811)){
args__7520__auto__.push((arguments[i__7514__auto___12812]));

var G__12813 = (i__7514__auto___12812 + (1));
i__7514__auto___12812 = G__12813;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12809){
var vec__12810 = p__12809;
var req = cljs.core.nth.call(null,vec__12810,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq12807){
var G__12808 = cljs.core.first.call(null,seq12807);
var seq12807__$1 = cljs.core.next.call(null,seq12807);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__12808,seq12807__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12818 = arguments.length;
var i__7514__auto___12819 = (0);
while(true){
if((i__7514__auto___12819 < len__7513__auto___12818)){
args__7520__auto__.push((arguments[i__7514__auto___12819]));

var G__12820 = (i__7514__auto___12819 + (1));
i__7514__auto___12819 = G__12820;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12816){
var vec__12817 = p__12816;
var req = cljs.core.nth.call(null,vec__12817,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq12814){
var G__12815 = cljs.core.first.call(null,seq12814);
var seq12814__$1 = cljs.core.next.call(null,seq12814);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__12815,seq12814__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7520__auto__ = [];
var len__7513__auto___12825 = arguments.length;
var i__7514__auto___12826 = (0);
while(true){
if((i__7514__auto___12826 < len__7513__auto___12825)){
args__7520__auto__.push((arguments[i__7514__auto___12826]));

var G__12827 = (i__7514__auto___12826 + (1));
i__7514__auto___12826 = G__12827;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12823){
var vec__12824 = p__12823;
var req = cljs.core.nth.call(null,vec__12824,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq12821){
var G__12822 = cljs.core.first.call(null,seq12821);
var seq12821__$1 = cljs.core.next.call(null,seq12821);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__12822,seq12821__$1);
});

//# sourceMappingURL=client.js.map