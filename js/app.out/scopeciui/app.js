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
scopeciui.app.CISERVER = "http://ec2-52-28-176-87.eu-central-1.compute.amazonaws.com/ciui/";
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
return (function (state_18371){
var state_val_18372 = (state_18371[(1)]);
if((state_val_18372 === (1))){
var inst_18361 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18362 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("kgo/"),cljs.core.str(inst_18361)].join('');
var inst_18363 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_18362,cljs.core.array_seq([scopeciui.app.BASE_PARAMS], 0));
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18371__$1,(2),inst_18363);
} else {
if((state_val_18372 === (2))){
var inst_18365 = (state_18371[(2)]);
var inst_18366 = scopeciui.app.load_state_from_server();
var inst_18367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false);
var inst_18368 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,inst_18368);
var state_18371__$1 = (function (){var statearr_18373 = state_18371;
(statearr_18373[(7)] = inst_18365);

(statearr_18373[(8)] = inst_18367);

(statearr_18373[(9)] = inst_18366);

return statearr_18373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18371__$1,inst_18369);
} else {
return null;
}
}
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var scopeciui$app$load_revision_$_state_machine__13884__auto__ = null;
var scopeciui$app$load_revision_$_state_machine__13884__auto____0 = (function (){
var statearr_18377 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18377[(0)] = scopeciui$app$load_revision_$_state_machine__13884__auto__);

(statearr_18377[(1)] = (1));

return statearr_18377;
});
var scopeciui$app$load_revision_$_state_machine__13884__auto____1 = (function (state_18371){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18371);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18378){if((e18378 instanceof Object)){
var ex__13887__auto__ = e18378;
var statearr_18379_18381 = state_18371;
(statearr_18379_18381[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18371);

return cljs.core.cst$kw$recur;
} else {
throw e18378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18382 = state_18371;
state_18371 = G__18382;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$load_revision_$_state_machine__13884__auto__ = function(state_18371){
switch(arguments.length){
case 0:
return scopeciui$app$load_revision_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$load_revision_$_state_machine__13884__auto____1.call(this,state_18371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$load_revision_$_state_machine__13884__auto____0;
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$load_revision_$_state_machine__13884__auto____1;
return scopeciui$app$load_revision_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18380 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18380;
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
return (function scopeciui$app$commitlist_$_iter__18397(s__18398){
return (new cljs.core.LazySeq(null,((function (servers,selected){
return (function (){
var s__18398__$1 = s__18398;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18398__$1);
if(temp__4425__auto__){
var s__18398__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18398__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18398__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18400 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18399 = (0);
while(true){
if((i__18399 < size__7226__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18399);
cljs.core.chunk_append(b__18400,(function (){var s = (function (){var G__18407 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18407) : servers.call(null,G__18407));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (i__18399,s,available,running,selected_QMARK_,c,c__7225__auto__,size__7226__auto__,b__18400,s__18398__$2,temp__4425__auto__,servers,selected){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(i__18399,s,available,running,selected_QMARK_,c,c__7225__auto__,size__7226__auto__,b__18400,s__18398__$2,temp__4425__auto__,servers,selected))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18408 = c;
var G__18408__$1 = (((G__18408 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18408));
var G__18408__$2 = (((G__18408__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18408__$1));
return G__18408__$2;
})()], null)], null);
})());

var G__18411 = (i__18399 + (1));
i__18399 = G__18411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18400),scopeciui$app$commitlist_$_iter__18397(cljs.core.chunk_rest(s__18398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18400),null);
}
} else {
var c = cljs.core.first(s__18398__$2);
return cljs.core.cons((function (){var s = (function (){var G__18409 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18409) : servers.call(null,G__18409));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (s,available,running,selected_QMARK_,c,s__18398__$2,temp__4425__auto__,servers,selected){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(s,available,running,selected_QMARK_,c,s__18398__$2,temp__4425__auto__,servers,selected))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18410 = c;
var G__18410__$1 = (((G__18410 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18410));
var G__18410__$2 = (((G__18410__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18410__$1));
return G__18410__$2;
})()], null)], null);
})(),scopeciui$app$commitlist_$_iter__18397(cljs.core.rest(s__18398__$2)));
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
var action__17679__auto___18415 = (function (params__17680__auto__){
if(cljs.core.map_QMARK_(params__17680__auto__)){
var map__18412 = params__17680__auto__;
var map__18412__$1 = ((((!((map__18412 == null)))?((((map__18412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18412):map__18412);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1urz/-grrwi1/scopeciui/app.cljs",19,1,111,111,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17680__auto__)){
var vec__18414 = params__17680__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1urz/-grrwi1/scopeciui/app.cljs",19,1,111,111,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17679__auto___18415);

var action__17679__auto___18419 = (function (params__17680__auto__){
if(cljs.core.map_QMARK_(params__17680__auto__)){
var map__18416 = params__17680__auto__;
var map__18416__$1 = ((((!((map__18416 == null)))?((((map__18416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18416):map__18416);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1urz/-grrwi1/scopeciui/app.cljs",17,1,117,117,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17680__auto__)){
var vec__18418 = params__17680__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1urz/-grrwi1/scopeciui/app.cljs",17,1,117,117,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__17679__auto___18419);

if(typeof scopeciui.app.load_loop !== 'undefined'){
} else {
scopeciui.app.load_loop = (function (){var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_18431){
var state_val_18432 = (state_18431[(1)]);
if((state_val_18432 === (1))){
var state_18431__$1 = state_18431;
var statearr_18433_18444 = state_18431__$1;
(statearr_18433_18444[(2)] = null);

(statearr_18433_18444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18432 === (2))){
var inst_18421 = scopeciui.app.load_state_from_server();
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18431__$1,(4),inst_18421);
} else {
if((state_val_18432 === (3))){
var inst_18429 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18431__$1,inst_18429);
} else {
if((state_val_18432 === (4))){
var inst_18423 = (state_18431[(2)]);
var inst_18424 = cljs.core.async.timeout((10000));
var state_18431__$1 = (function (){var statearr_18434 = state_18431;
(statearr_18434[(7)] = inst_18423);

return statearr_18434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18431__$1,(5),inst_18424);
} else {
if((state_val_18432 === (5))){
var inst_18426 = (state_18431[(2)]);
var state_18431__$1 = (function (){var statearr_18435 = state_18431;
(statearr_18435[(8)] = inst_18426);

return statearr_18435;
})();
var statearr_18436_18445 = state_18431__$1;
(statearr_18436_18445[(2)] = null);

(statearr_18436_18445[(1)] = (2));


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
var statearr_18440 = [null,null,null,null,null,null,null,null,null];
(statearr_18440[(0)] = scopeciui$app$state_machine__13884__auto__);

(statearr_18440[(1)] = (1));

return statearr_18440;
});
var scopeciui$app$state_machine__13884__auto____1 = (function (state_18431){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18431);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18441){if((e18441 instanceof Object)){
var ex__13887__auto__ = e18441;
var statearr_18442_18446 = state_18431;
(statearr_18442_18446[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18431);

return cljs.core.cst$kw$recur;
} else {
throw e18441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18447 = state_18431;
state_18431 = G__18447;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$state_machine__13884__auto__ = function(state_18431){
switch(arguments.length){
case 0:
return scopeciui$app$state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$state_machine__13884__auto____1.call(this,state_18431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$state_machine__13884__auto____0;
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$state_machine__13884__auto____1;
return scopeciui$app$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18443 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18443;
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
