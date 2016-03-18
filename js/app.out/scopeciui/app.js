// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('scopeciui.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('accountant.core');
scopeciui.app.BASE_PARAMS = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null);
scopeciui.app.CISERVER = "http://ec2-52-28-154-146.eu-central-1.compute.amazonaws.com/";
if(typeof scopeciui.app.state !== 'undefined'){
} else {
scopeciui.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
scopeciui.app.selected_sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.servers_sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$servers.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.commits_sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$commits.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.loading_QMARK__sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.parse_servers = (function scopeciui$app$parse_servers(res){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$revision,(function (d){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$running,cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$url,[cljs.core.str(scopeciui.app.CISERVER),cljs.core.str(cljs.core.cst$kw$revision.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str("/")].join(''),cljs.core.cst$kw$revision,cljs.core.cst$kw$revision.cljs$core$IFn$_invoke$arity$1(d)], null);
})),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(res)));
});
scopeciui.app.get_available = (function scopeciui$app$get_available(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var commits_req = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("commits.json")].join(''),cljs.core.array_seq([scopeciui.app.BASE_PARAMS], 0));
var servers_req = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("index.json")].join(''),cljs.core.array_seq([scopeciui.app.BASE_PARAMS], 0));
var c__13997__auto___18301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___18301,c,commits_req,servers_req){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___18301,c,commits_req,servers_req){
return (function (state_18290){
var state_val_18291 = (state_18290[(1)]);
if((state_val_18291 === (1))){
var inst_18277 = [cljs.core.cst$kw$commits,cljs.core.cst$kw$servers];
var state_18290__$1 = (function (){var statearr_18292 = state_18290;
(statearr_18292[(7)] = inst_18277);

return statearr_18292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18290__$1,(3),commits_req);
} else {
if((state_val_18291 === (2))){
var inst_18288 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18290__$1,inst_18288);
} else {
if((state_val_18291 === (3))){
var inst_18279 = (state_18290[(2)]);
var inst_18280 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18279);
var state_18290__$1 = (function (){var statearr_18293 = state_18290;
(statearr_18293[(8)] = inst_18280);

return statearr_18293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18290__$1,(4),servers_req);
} else {
if((state_val_18291 === (4))){
var inst_18277 = (state_18290[(7)]);
var inst_18280 = (state_18290[(8)]);
var inst_18282 = (state_18290[(2)]);
var inst_18283 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18282);
var inst_18284 = scopeciui.app.parse_servers(inst_18283);
var inst_18285 = [inst_18280,inst_18284];
var inst_18286 = cljs.core.PersistentHashMap.fromArrays(inst_18277,inst_18285);
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18290__$1,(2),c,inst_18286);
} else {
return null;
}
}
}
}
});})(c__13997__auto___18301,c,commits_req,servers_req))
;
return ((function (switch__13883__auto__,c__13997__auto___18301,c,commits_req,servers_req){
return (function() {
var scopeciui$app$get_available_$_state_machine__13884__auto__ = null;
var scopeciui$app$get_available_$_state_machine__13884__auto____0 = (function (){
var statearr_18297 = [null,null,null,null,null,null,null,null,null];
(statearr_18297[(0)] = scopeciui$app$get_available_$_state_machine__13884__auto__);

(statearr_18297[(1)] = (1));

return statearr_18297;
});
var scopeciui$app$get_available_$_state_machine__13884__auto____1 = (function (state_18290){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18290);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18298){if((e18298 instanceof Object)){
var ex__13887__auto__ = e18298;
var statearr_18299_18302 = state_18290;
(statearr_18299_18302[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18290);

return cljs.core.cst$kw$recur;
} else {
throw e18298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18303 = state_18290;
state_18290 = G__18303;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$get_available_$_state_machine__13884__auto__ = function(state_18290){
switch(arguments.length){
case 0:
return scopeciui$app$get_available_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$get_available_$_state_machine__13884__auto____1.call(this,state_18290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$get_available_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$get_available_$_state_machine__13884__auto____0;
scopeciui$app$get_available_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$get_available_$_state_machine__13884__auto____1;
return scopeciui$app$get_available_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___18301,c,commits_req,servers_req))
})();
var state__13999__auto__ = (function (){var statearr_18300 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___18301);

return statearr_18300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___18301,c,commits_req,servers_req))
);


return c;
});
scopeciui.app.load_state_from_server = (function scopeciui$app$load_state_from_server(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var data_chan = scopeciui.app.get_available();
var c__13997__auto___18338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___18338,c,data_chan){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___18338,c,data_chan){
return (function (state_18328){
var state_val_18329 = (state_18328[(1)]);
if((state_val_18329 === (1))){
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18328__$1,(2),data_chan);
} else {
if((state_val_18329 === (2))){
var inst_18322 = (state_18328[(2)]);
var inst_18323 = (function (){var new_state = inst_18322;
return ((function (new_state,inst_18322,state_val_18329,c__13997__auto___18338,c,data_chan){
return (function (s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,new_state);
});
;})(new_state,inst_18322,state_val_18329,c__13997__auto___18338,c,data_chan))
})();
var inst_18324 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scopeciui.app.state,inst_18323);
var state_18328__$1 = (function (){var statearr_18330 = state_18328;
(statearr_18330[(7)] = inst_18324);

return statearr_18330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18328__$1,(3),c,"done");
} else {
if((state_val_18329 === (3))){
var inst_18326 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18328__$1,inst_18326);
} else {
return null;
}
}
}
});})(c__13997__auto___18338,c,data_chan))
;
return ((function (switch__13883__auto__,c__13997__auto___18338,c,data_chan){
return (function() {
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto__ = null;
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0 = (function (){
var statearr_18334 = [null,null,null,null,null,null,null,null];
(statearr_18334[(0)] = scopeciui$app$load_state_from_server_$_state_machine__13884__auto__);

(statearr_18334[(1)] = (1));

return statearr_18334;
});
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1 = (function (state_18328){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18328);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18335){if((e18335 instanceof Object)){
var ex__13887__auto__ = e18335;
var statearr_18336_18339 = state_18328;
(statearr_18336_18339[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18328);

return cljs.core.cst$kw$recur;
} else {
throw e18335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18340 = state_18328;
state_18328 = G__18340;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__ = function(state_18328){
switch(arguments.length){
case 0:
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1.call(this,state_18328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0;
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1;
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___18338,c,data_chan))
})();
var state__13999__auto__ = (function (){var statearr_18337 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___18338);

return statearr_18337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___18338,c,data_chan))
);


return c;
});
scopeciui.app.load_revision = (function scopeciui$app$load_revision(rev){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,true);

var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_18385){
var state_val_18386 = (state_18385[(1)]);
if((state_val_18386 === (1))){
var inst_18369 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18370 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("kgo/"),cljs.core.str(inst_18369)].join('');
var inst_18371 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_18370,cljs.core.array_seq([scopeciui.app.BASE_PARAMS], 0));
var state_18385__$1 = state_18385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18385__$1,(2),inst_18371);
} else {
if((state_val_18386 === (2))){
var inst_18373 = (state_18385[(2)]);
var inst_18374 = scopeciui.app.load_state_from_server();
var state_18385__$1 = (function (){var statearr_18387 = state_18385;
(statearr_18387[(7)] = inst_18373);

return statearr_18387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18385__$1,(3),inst_18374);
} else {
if((state_val_18386 === (3))){
var inst_18376 = (state_18385[(2)]);
var inst_18377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,null);
var inst_18378 = cljs.core.async.timeout((1000));
var state_18385__$1 = (function (){var statearr_18388 = state_18385;
(statearr_18388[(8)] = inst_18377);

(statearr_18388[(9)] = inst_18376);

return statearr_18388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18385__$1,(4),inst_18378);
} else {
if((state_val_18386 === (4))){
var inst_18380 = (state_18385[(2)]);
var inst_18381 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false);
var inst_18382 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18383 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,inst_18382);
var state_18385__$1 = (function (){var statearr_18389 = state_18385;
(statearr_18389[(10)] = inst_18380);

(statearr_18389[(11)] = inst_18381);

return statearr_18389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18385__$1,inst_18383);
} else {
return null;
}
}
}
}
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var scopeciui$app$load_revision_$_state_machine__13884__auto__ = null;
var scopeciui$app$load_revision_$_state_machine__13884__auto____0 = (function (){
var statearr_18393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18393[(0)] = scopeciui$app$load_revision_$_state_machine__13884__auto__);

(statearr_18393[(1)] = (1));

return statearr_18393;
});
var scopeciui$app$load_revision_$_state_machine__13884__auto____1 = (function (state_18385){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18385);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18394){if((e18394 instanceof Object)){
var ex__13887__auto__ = e18394;
var statearr_18395_18397 = state_18385;
(statearr_18395_18397[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18385);

return cljs.core.cst$kw$recur;
} else {
throw e18394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18398 = state_18385;
state_18385 = G__18398;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$load_revision_$_state_machine__13884__auto__ = function(state_18385){
switch(arguments.length){
case 0:
return scopeciui$app$load_revision_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$load_revision_$_state_machine__13884__auto____1.call(this,state_18385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$load_revision_$_state_machine__13884__auto____0;
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$load_revision_$_state_machine__13884__auto____1;
return scopeciui$app$load_revision_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18396 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
});
scopeciui.app.commitlist = (function scopeciui$app$commitlist(){
var servers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.servers_sub) : cljs.core.deref.call(null,scopeciui.app.servers_sub));
var selected = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.selected_sub) : cljs.core.deref.call(null,scopeciui.app.selected_sub));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$commitlist,(function (){var iter__7227__auto__ = ((function (servers,selected){
return (function scopeciui$app$commitlist_$_iter__18413(s__18414){
return (new cljs.core.LazySeq(null,((function (servers,selected){
return (function (){
var s__18414__$1 = s__18414;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18414__$1);
if(temp__4425__auto__){
var s__18414__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18414__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18414__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18416 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18415 = (0);
while(true){
if((i__18415 < size__7226__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18415);
cljs.core.chunk_append(b__18416,(function (){var s = (function (){var G__18423 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18423) : servers.call(null,G__18423));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (i__18415,s,available,running,selected_QMARK_,c,c__7225__auto__,size__7226__auto__,b__18416,s__18414__$2,temp__4425__auto__,servers,selected){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(i__18415,s,available,running,selected_QMARK_,c,c__7225__auto__,size__7226__auto__,b__18416,s__18414__$2,temp__4425__auto__,servers,selected))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18424 = c;
var G__18424__$1 = (((G__18424 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18424));
var G__18424__$2 = (((G__18424__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18424__$1));
return G__18424__$2;
})()], null)], null);
})());

var G__18427 = (i__18415 + (1));
i__18415 = G__18427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18416),scopeciui$app$commitlist_$_iter__18413(cljs.core.chunk_rest(s__18414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18416),null);
}
} else {
var c = cljs.core.first(s__18414__$2);
return cljs.core.cons((function (){var s = (function (){var G__18425 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18425) : servers.call(null,G__18425));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (s,available,running,selected_QMARK_,c,s__18414__$2,temp__4425__auto__,servers,selected){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(s,available,running,selected_QMARK_,c,s__18414__$2,temp__4425__auto__,servers,selected))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18426 = c;
var G__18426__$1 = (((G__18426 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18426));
var G__18426__$2 = (((G__18426__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18426__$1));
return G__18426__$2;
})()], null)], null);
})(),scopeciui$app$commitlist_$_iter__18413(cljs.core.rest(s__18414__$2)));
}
} else {
return null;
}
break;
}
});})(servers,selected))
,null,null));
});})(servers,selected))
;
return iter__7227__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commits_sub) : cljs.core.deref.call(null,scopeciui.app.commits_sub)));
})()], null);
});
scopeciui.app.sidebar_mask = (function scopeciui$app$sidebar_mask(){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.loading_QMARK__sub) : cljs.core.deref.call(null,scopeciui.app.loading_QMARK__sub)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mask], null);
} else {
return null;
}
});
scopeciui.app.sidebar = (function scopeciui$app$sidebar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.sidebar_mask], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.commitlist], null)], null);
});
scopeciui.app.content_panel = (function scopeciui$app$content_panel(){
var selected = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.selected_sub) : cljs.core.deref.call(null,scopeciui.app.selected_sub));
var selected_url = (cljs.core.truth_(selected)?cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.servers_sub) : cljs.core.deref.call(null,scopeciui.app.servers_sub)).call(null,selected)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,selected_url], null)], null)], null);
});
scopeciui.app.commits_page = (function scopeciui$app$commits_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.content_panel], null)], null);
});
scopeciui.app.about_page = (function scopeciui$app$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About this project..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"go to the home page"], null)], null)], null);
});
scopeciui.app.current_page = (function scopeciui$app$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)))], null)], null);
});
var action__17679__auto___18431 = (function (params__17680__auto__){
if(cljs.core.map_QMARK_(params__17680__auto__)){
var map__18428 = params__17680__auto__;
var map__18428__$1 = ((((!((map__18428 == null)))?((((map__18428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18428):map__18428);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/wsl/-grrwi1/scopeciui/app.cljs",19,1,113,113,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17680__auto__)){
var vec__18430 = params__17680__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/wsl/-grrwi1/scopeciui/app.cljs",19,1,113,113,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17679__auto___18431);

var action__17679__auto___18435 = (function (params__17680__auto__){
if(cljs.core.map_QMARK_(params__17680__auto__)){
var map__18432 = params__17680__auto__;
var map__18432__$1 = ((((!((map__18432 == null)))?((((map__18432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18432):map__18432);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/wsl/-grrwi1/scopeciui/app.cljs",17,1,119,119,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17680__auto__)){
var vec__18434 = params__17680__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/wsl/-grrwi1/scopeciui/app.cljs",17,1,119,119,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__17679__auto___18435);

if(typeof scopeciui.app.load_loop !== 'undefined'){
} else {
scopeciui.app.load_loop = (function (){var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_18447){
var state_val_18448 = (state_18447[(1)]);
if((state_val_18448 === (1))){
var state_18447__$1 = state_18447;
var statearr_18449_18460 = state_18447__$1;
(statearr_18449_18460[(2)] = null);

(statearr_18449_18460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (2))){
var inst_18437 = scopeciui.app.load_state_from_server();
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18447__$1,(4),inst_18437);
} else {
if((state_val_18448 === (3))){
var inst_18445 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18447__$1,inst_18445);
} else {
if((state_val_18448 === (4))){
var inst_18439 = (state_18447[(2)]);
var inst_18440 = cljs.core.async.timeout((10000));
var state_18447__$1 = (function (){var statearr_18450 = state_18447;
(statearr_18450[(7)] = inst_18439);

return statearr_18450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18447__$1,(5),inst_18440);
} else {
if((state_val_18448 === (5))){
var inst_18442 = (state_18447[(2)]);
var state_18447__$1 = (function (){var statearr_18451 = state_18447;
(statearr_18451[(8)] = inst_18442);

return statearr_18451;
})();
var statearr_18452_18461 = state_18447__$1;
(statearr_18452_18461[(2)] = null);

(statearr_18452_18461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var scopeciui$app$state_machine__13884__auto__ = null;
var scopeciui$app$state_machine__13884__auto____0 = (function (){
var statearr_18456 = [null,null,null,null,null,null,null,null,null];
(statearr_18456[(0)] = scopeciui$app$state_machine__13884__auto__);

(statearr_18456[(1)] = (1));

return statearr_18456;
});
var scopeciui$app$state_machine__13884__auto____1 = (function (state_18447){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18447);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18457){if((e18457 instanceof Object)){
var ex__13887__auto__ = e18457;
var statearr_18458_18462 = state_18447;
(statearr_18458_18462[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18447);

return cljs.core.cst$kw$recur;
} else {
throw e18457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18463 = state_18447;
state_18447 = G__18463;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$state_machine__13884__auto__ = function(state_18447){
switch(arguments.length){
case 0:
return scopeciui$app$state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$state_machine__13884__auto____1.call(this,state_18447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$state_machine__13884__auto____0;
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$state_machine__13884__auto____1;
return scopeciui$app$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18459 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
})();
}
scopeciui.app.mount_root = (function scopeciui$app$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.current_page], null),document.getElementById("container"));
});
scopeciui.app.init = (function scopeciui$app$init(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,location.pathname);

accountant.core.dispatch_current_BANG_();

return scopeciui.app.mount_root();
});
