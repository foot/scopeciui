// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__16798 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16798) : cljs.core.atom.call(null,G__16798));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__16801){
var vec__16802 = p__16801;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16802,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16804 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__16804)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__16804)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__16804)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__16804)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16804)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16804)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16805){
var map__16809 = p__16805;
var map__16809__$1 = ((((!((map__16809 == null)))?((((map__16809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16809):map__16809);
var request = map__16809__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6455__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16811 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__16811,default_headers);

cljs_http.core.apply_response_type_BANG_(G__16811,response_type);

G__16811.setTimeoutInterval(timeout);

G__16811.setWithCredentials(send_credentials);

return G__16811;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16812){
var map__16840 = p__16812;
var map__16840__$1 = ((((!((map__16840 == null)))?((((map__16840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16840):map__16840);
var request = map__16840__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6455__auto__ = request_method;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__16842 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__16842) : cljs_http.core.error_kw.call(null,G__16842));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13997__auto___16867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_16853){
var state_val_16854 = (state_16853[(1)]);
if((state_val_16854 === (1))){
var state_16853__$1 = state_16853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16853__$1,(2),cancel);
} else {
if((state_val_16854 === (2))){
var inst_16844 = (state_16853[(2)]);
var inst_16845 = xhr__$1.isComplete();
var inst_16846 = cljs.core.not(inst_16845);
var state_16853__$1 = (function (){var statearr_16855 = state_16853;
(statearr_16855[(7)] = inst_16844);

return statearr_16855;
})();
if(inst_16846){
var statearr_16856_16868 = state_16853__$1;
(statearr_16856_16868[(1)] = (3));

} else {
var statearr_16857_16869 = state_16853__$1;
(statearr_16857_16869[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16854 === (3))){
var inst_16848 = xhr__$1.abort();
var state_16853__$1 = state_16853;
var statearr_16858_16870 = state_16853__$1;
(statearr_16858_16870[(2)] = inst_16848);

(statearr_16858_16870[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16854 === (4))){
var state_16853__$1 = state_16853;
var statearr_16859_16871 = state_16853__$1;
(statearr_16859_16871[(2)] = null);

(statearr_16859_16871[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16854 === (5))){
var inst_16851 = (state_16853[(2)]);
var state_16853__$1 = state_16853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16853__$1,inst_16851);
} else {
return null;
}
}
}
}
}
});})(c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__13883__auto__,c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__13884__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13884__auto____0 = (function (){
var statearr_16863 = [null,null,null,null,null,null,null,null];
(statearr_16863[(0)] = cljs_http$core$xhr_$_state_machine__13884__auto__);

(statearr_16863[(1)] = (1));

return statearr_16863;
});
var cljs_http$core$xhr_$_state_machine__13884__auto____1 = (function (state_16853){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16853);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16864){if((e16864 instanceof Object)){
var ex__13887__auto__ = e16864;
var statearr_16865_16872 = state_16853;
(statearr_16865_16872[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16853);

return cljs.core.cst$kw$recur;
} else {
throw e16864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16873 = state_16853;
state_16853 = G__16873;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13884__auto__ = function(state_16853){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13884__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13884__auto____1.call(this,state_16853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13884__auto____0;
cljs_http$core$xhr_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13884__auto____1;
return cljs_http$core$xhr_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__13999__auto__ = (function (){var statearr_16866 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16867);

return statearr_16866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16867,channel,request_url,method,headers__$1,xhr__$1,map__16840,map__16840__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16874){
var map__16891 = p__16874;
var map__16891__$1 = ((((!((map__16891 == null)))?((((map__16891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16891):map__16891);
var request = map__16891__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16891__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16907 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_16907], null));

if(cljs.core.truth_(cancel)){
var c__13997__auto___16908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16897){
var state_val_16898 = (state_16897[(1)]);
if((state_val_16898 === (1))){
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16897__$1,(2),cancel);
} else {
if((state_val_16898 === (2))){
var inst_16894 = (state_16897[(2)]);
var inst_16895 = jsonp__$1.cancel(req_16907);
var state_16897__$1 = (function (){var statearr_16899 = state_16897;
(statearr_16899[(7)] = inst_16894);

return statearr_16899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16897__$1,inst_16895);
} else {
return null;
}
}
});})(c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13883__auto__,c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13884__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13884__auto____0 = (function (){
var statearr_16903 = [null,null,null,null,null,null,null,null];
(statearr_16903[(0)] = cljs_http$core$jsonp_$_state_machine__13884__auto__);

(statearr_16903[(1)] = (1));

return statearr_16903;
});
var cljs_http$core$jsonp_$_state_machine__13884__auto____1 = (function (state_16897){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16897);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16904){if((e16904 instanceof Object)){
var ex__13887__auto__ = e16904;
var statearr_16905_16909 = state_16897;
(statearr_16905_16909[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16897);

return cljs.core.cst$kw$recur;
} else {
throw e16904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16910 = state_16897;
state_16897 = G__16910;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13884__auto__ = function(state_16897){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13884__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13884__auto____1.call(this,state_16897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13884__auto____0;
cljs_http$core$jsonp_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13884__auto____1;
return cljs_http$core$jsonp_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13999__auto__ = (function (){var statearr_16906 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16908);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16908,req_16907,channel,jsonp__$1,map__16891,map__16891__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16911){
var map__16914 = p__16911;
var map__16914__$1 = ((((!((map__16914 == null)))?((((map__16914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16914):map__16914);
var request__$1 = map__16914__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16914__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
