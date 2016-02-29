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
cljs_http.core.pending_requests = (function (){var G__16794 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16794) : cljs.core.atom.call(null,G__16794));
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
return (function (p__16797){
var vec__16798 = p__16797;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16800 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__16800)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__16800)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__16800)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__16800)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16800)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16800)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16801){
var map__16805 = p__16801;
var map__16805__$1 = ((((!((map__16805 == null)))?((((map__16805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16805):map__16805);
var request = map__16805__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6455__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16807 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__16807,default_headers);

cljs_http.core.apply_response_type_BANG_(G__16807,response_type);

G__16807.setTimeoutInterval(timeout);

G__16807.setWithCredentials(send_credentials);

return G__16807;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16808){
var map__16836 = p__16808;
var map__16836__$1 = ((((!((map__16836 == null)))?((((map__16836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16836):map__16836);
var request = map__16836__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,cljs.core.cst$kw$cancel);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__16838 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__16838) : cljs_http.core.error_kw.call(null,G__16838));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13993__auto___16863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_16849){
var state_val_16850 = (state_16849[(1)]);
if((state_val_16850 === (1))){
var state_16849__$1 = state_16849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16849__$1,(2),cancel);
} else {
if((state_val_16850 === (2))){
var inst_16840 = (state_16849[(2)]);
var inst_16841 = xhr__$1.isComplete();
var inst_16842 = cljs.core.not(inst_16841);
var state_16849__$1 = (function (){var statearr_16851 = state_16849;
(statearr_16851[(7)] = inst_16840);

return statearr_16851;
})();
if(inst_16842){
var statearr_16852_16864 = state_16849__$1;
(statearr_16852_16864[(1)] = (3));

} else {
var statearr_16853_16865 = state_16849__$1;
(statearr_16853_16865[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16850 === (3))){
var inst_16844 = xhr__$1.abort();
var state_16849__$1 = state_16849;
var statearr_16854_16866 = state_16849__$1;
(statearr_16854_16866[(2)] = inst_16844);

(statearr_16854_16866[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16850 === (4))){
var state_16849__$1 = state_16849;
var statearr_16855_16867 = state_16849__$1;
(statearr_16855_16867[(2)] = null);

(statearr_16855_16867[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16850 === (5))){
var inst_16847 = (state_16849[(2)]);
var state_16849__$1 = state_16849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16849__$1,inst_16847);
} else {
return null;
}
}
}
}
}
});})(c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__13879__auto__,c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__13880__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13880__auto____0 = (function (){
var statearr_16859 = [null,null,null,null,null,null,null,null];
(statearr_16859[(0)] = cljs_http$core$xhr_$_state_machine__13880__auto__);

(statearr_16859[(1)] = (1));

return statearr_16859;
});
var cljs_http$core$xhr_$_state_machine__13880__auto____1 = (function (state_16849){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16849);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16860){if((e16860 instanceof Object)){
var ex__13883__auto__ = e16860;
var statearr_16861_16868 = state_16849;
(statearr_16861_16868[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16849);

return cljs.core.cst$kw$recur;
} else {
throw e16860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16869 = state_16849;
state_16849 = G__16869;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13880__auto__ = function(state_16849){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13880__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13880__auto____1.call(this,state_16849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13880__auto____0;
cljs_http$core$xhr_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13880__auto____1;
return cljs_http$core$xhr_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__13995__auto__ = (function (){var statearr_16862 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16863);

return statearr_16862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16863,channel,request_url,method,headers__$1,xhr__$1,map__16836,map__16836__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16870){
var map__16887 = p__16870;
var map__16887__$1 = ((((!((map__16887 == null)))?((((map__16887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16887):map__16887);
var request = map__16887__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16887__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16903 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_16903], null));

if(cljs.core.truth_(cancel)){
var c__13993__auto___16904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16893){
var state_val_16894 = (state_16893[(1)]);
if((state_val_16894 === (1))){
var state_16893__$1 = state_16893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16893__$1,(2),cancel);
} else {
if((state_val_16894 === (2))){
var inst_16890 = (state_16893[(2)]);
var inst_16891 = jsonp__$1.cancel(req_16903);
var state_16893__$1 = (function (){var statearr_16895 = state_16893;
(statearr_16895[(7)] = inst_16890);

return statearr_16895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16893__$1,inst_16891);
} else {
return null;
}
}
});})(c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13879__auto__,c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13880__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13880__auto____0 = (function (){
var statearr_16899 = [null,null,null,null,null,null,null,null];
(statearr_16899[(0)] = cljs_http$core$jsonp_$_state_machine__13880__auto__);

(statearr_16899[(1)] = (1));

return statearr_16899;
});
var cljs_http$core$jsonp_$_state_machine__13880__auto____1 = (function (state_16893){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16893);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16900){if((e16900 instanceof Object)){
var ex__13883__auto__ = e16900;
var statearr_16901_16905 = state_16893;
(statearr_16901_16905[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16893);

return cljs.core.cst$kw$recur;
} else {
throw e16900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16906 = state_16893;
state_16893 = G__16906;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13880__auto__ = function(state_16893){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13880__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13880__auto____1.call(this,state_16893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13880__auto____0;
cljs_http$core$jsonp_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13880__auto____1;
return cljs_http$core$jsonp_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13995__auto__ = (function (){var statearr_16902 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16904);

return statearr_16902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16904,req_16903,channel,jsonp__$1,map__16887,map__16887__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16907){
var map__16910 = p__16907;
var map__16910__$1 = ((((!((map__16910 == null)))?((((map__16910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16910):map__16910);
var request__$1 = map__16910__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16910__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
