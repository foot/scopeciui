// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('scopeciui.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('scopeciui.graph');
goog.require('accountant.core');
cljs.core.enable_console_print_BANG_();
scopeciui.app.BASE_PARAMS = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null);
scopeciui.app.CISERVER = "http://ec2-52-28-154-146.eu-central-1.compute.amazonaws.com/ciui/";
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
scopeciui.app.raw_commits_sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$commits.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.commits_sub = reagent.ratom.make_reaction((function (){
return scopeciui.graph.merge_roots((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.raw_commits_sub) : cljs.core.deref.call(null,scopeciui.app.raw_commits_sub)));
}));
scopeciui.app.commit_parents_sub = reagent.ratom.make_reaction((function (){
return scopeciui.graph.dfs_tree((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commits_sub) : cljs.core.deref.call(null,scopeciui.app.commits_sub)));
}));
scopeciui.app.loading_QMARK__sub = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
}));
scopeciui.app.commit_order_sub = reagent.ratom.make_reaction((function (){
return scopeciui.graph.sort_commits((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commit_parents_sub) : cljs.core.deref.call(null,scopeciui.app.commit_parents_sub)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commits_sub) : cljs.core.deref.call(null,scopeciui.app.commits_sub)));
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
var c__13997__auto___18555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___18555,c,commits_req,servers_req){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___18555,c,commits_req,servers_req){
return (function (state_18544){
var state_val_18545 = (state_18544[(1)]);
if((state_val_18545 === (1))){
var inst_18531 = [cljs.core.cst$kw$commits,cljs.core.cst$kw$servers];
var state_18544__$1 = (function (){var statearr_18546 = state_18544;
(statearr_18546[(7)] = inst_18531);

return statearr_18546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18544__$1,(3),commits_req);
} else {
if((state_val_18545 === (2))){
var inst_18542 = (state_18544[(2)]);
var state_18544__$1 = state_18544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18544__$1,inst_18542);
} else {
if((state_val_18545 === (3))){
var inst_18533 = (state_18544[(2)]);
var inst_18534 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18533);
var state_18544__$1 = (function (){var statearr_18547 = state_18544;
(statearr_18547[(8)] = inst_18534);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18544__$1,(4),servers_req);
} else {
if((state_val_18545 === (4))){
var inst_18534 = (state_18544[(8)]);
var inst_18531 = (state_18544[(7)]);
var inst_18536 = (state_18544[(2)]);
var inst_18537 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18536);
var inst_18538 = scopeciui.app.parse_servers(inst_18537);
var inst_18539 = [inst_18534,inst_18538];
var inst_18540 = cljs.core.PersistentHashMap.fromArrays(inst_18531,inst_18539);
var state_18544__$1 = state_18544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18544__$1,(2),c,inst_18540);
} else {
return null;
}
}
}
}
});})(c__13997__auto___18555,c,commits_req,servers_req))
;
return ((function (switch__13883__auto__,c__13997__auto___18555,c,commits_req,servers_req){
return (function() {
var scopeciui$app$get_available_$_state_machine__13884__auto__ = null;
var scopeciui$app$get_available_$_state_machine__13884__auto____0 = (function (){
var statearr_18551 = [null,null,null,null,null,null,null,null,null];
(statearr_18551[(0)] = scopeciui$app$get_available_$_state_machine__13884__auto__);

(statearr_18551[(1)] = (1));

return statearr_18551;
});
var scopeciui$app$get_available_$_state_machine__13884__auto____1 = (function (state_18544){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18544);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18552){if((e18552 instanceof Object)){
var ex__13887__auto__ = e18552;
var statearr_18553_18556 = state_18544;
(statearr_18553_18556[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18544);

return cljs.core.cst$kw$recur;
} else {
throw e18552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18557 = state_18544;
state_18544 = G__18557;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$get_available_$_state_machine__13884__auto__ = function(state_18544){
switch(arguments.length){
case 0:
return scopeciui$app$get_available_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$get_available_$_state_machine__13884__auto____1.call(this,state_18544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$get_available_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$get_available_$_state_machine__13884__auto____0;
scopeciui$app$get_available_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$get_available_$_state_machine__13884__auto____1;
return scopeciui$app$get_available_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___18555,c,commits_req,servers_req))
})();
var state__13999__auto__ = (function (){var statearr_18554 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___18555);

return statearr_18554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___18555,c,commits_req,servers_req))
);


return c;
});
scopeciui.app.load_state_from_server = (function scopeciui$app$load_state_from_server(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var data_chan = scopeciui.app.get_available();
var c__13997__auto___18592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___18592,c,data_chan){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___18592,c,data_chan){
return (function (state_18582){
var state_val_18583 = (state_18582[(1)]);
if((state_val_18583 === (1))){
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18582__$1,(2),data_chan);
} else {
if((state_val_18583 === (2))){
var inst_18576 = (state_18582[(2)]);
var inst_18577 = (function (){var new_state = inst_18576;
return ((function (new_state,inst_18576,state_val_18583,c__13997__auto___18592,c,data_chan){
return (function (s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,new_state);
});
;})(new_state,inst_18576,state_val_18583,c__13997__auto___18592,c,data_chan))
})();
var inst_18578 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scopeciui.app.state,inst_18577);
var state_18582__$1 = (function (){var statearr_18584 = state_18582;
(statearr_18584[(7)] = inst_18578);

return statearr_18584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18582__$1,(3),c,"done");
} else {
if((state_val_18583 === (3))){
var inst_18580 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18582__$1,inst_18580);
} else {
return null;
}
}
}
});})(c__13997__auto___18592,c,data_chan))
;
return ((function (switch__13883__auto__,c__13997__auto___18592,c,data_chan){
return (function() {
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto__ = null;
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0 = (function (){
var statearr_18588 = [null,null,null,null,null,null,null,null];
(statearr_18588[(0)] = scopeciui$app$load_state_from_server_$_state_machine__13884__auto__);

(statearr_18588[(1)] = (1));

return statearr_18588;
});
var scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1 = (function (state_18582){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18582);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18589){if((e18589 instanceof Object)){
var ex__13887__auto__ = e18589;
var statearr_18590_18593 = state_18582;
(statearr_18590_18593[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18582);

return cljs.core.cst$kw$recur;
} else {
throw e18589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18594 = state_18582;
state_18582 = G__18594;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__ = function(state_18582){
switch(arguments.length){
case 0:
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1.call(this,state_18582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$load_state_from_server_$_state_machine__13884__auto____0;
scopeciui$app$load_state_from_server_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$load_state_from_server_$_state_machine__13884__auto____1;
return scopeciui$app$load_state_from_server_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___18592,c,data_chan))
})();
var state__13999__auto__ = (function (){var statearr_18591 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___18592);

return statearr_18591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___18592,c,data_chan))
);


return c;
});
scopeciui.app.load_revision = (function scopeciui$app$load_revision(rev){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,true);

var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_18639){
var state_val_18640 = (state_18639[(1)]);
if((state_val_18640 === (1))){
var inst_18623 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18624 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("kgo/"),cljs.core.str(inst_18623)].join('');
var inst_18625 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_18624,cljs.core.array_seq([scopeciui.app.BASE_PARAMS], 0));
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18639__$1,(2),inst_18625);
} else {
if((state_val_18640 === (2))){
var inst_18627 = (state_18639[(2)]);
var inst_18628 = scopeciui.app.load_state_from_server();
var state_18639__$1 = (function (){var statearr_18641 = state_18639;
(statearr_18641[(7)] = inst_18627);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18639__$1,(3),inst_18628);
} else {
if((state_val_18640 === (3))){
var inst_18630 = (state_18639[(2)]);
var inst_18631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,null);
var inst_18632 = cljs.core.async.timeout((1000));
var state_18639__$1 = (function (){var statearr_18642 = state_18639;
(statearr_18642[(8)] = inst_18631);

(statearr_18642[(9)] = inst_18630);

return statearr_18642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18639__$1,(4),inst_18632);
} else {
if((state_val_18640 === (4))){
var inst_18634 = (state_18639[(2)]);
var inst_18635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false);
var inst_18636 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev);
var inst_18637 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,inst_18636);
var state_18639__$1 = (function (){var statearr_18643 = state_18639;
(statearr_18643[(10)] = inst_18635);

(statearr_18643[(11)] = inst_18634);

return statearr_18643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18639__$1,inst_18637);
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
var statearr_18647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18647[(0)] = scopeciui$app$load_revision_$_state_machine__13884__auto__);

(statearr_18647[(1)] = (1));

return statearr_18647;
});
var scopeciui$app$load_revision_$_state_machine__13884__auto____1 = (function (state_18639){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18639);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18648){if((e18648 instanceof Object)){
var ex__13887__auto__ = e18648;
var statearr_18649_18651 = state_18639;
(statearr_18649_18651[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18639);

return cljs.core.cst$kw$recur;
} else {
throw e18648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18652 = state_18639;
state_18639 = G__18652;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$load_revision_$_state_machine__13884__auto__ = function(state_18639){
switch(arguments.length){
case 0:
return scopeciui$app$load_revision_$_state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$load_revision_$_state_machine__13884__auto____1.call(this,state_18639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$load_revision_$_state_machine__13884__auto____0;
scopeciui$app$load_revision_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$load_revision_$_state_machine__13884__auto____1;
return scopeciui$app$load_revision_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18650 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
});
scopeciui.app.sidebar_mask = (function scopeciui$app$sidebar_mask(){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.loading_QMARK__sub) : cljs.core.deref.call(null,scopeciui.app.loading_QMARK__sub)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mask], null);
} else {
return null;
}
});
scopeciui.app.commitlist = (function scopeciui$app$commitlist(){
var servers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.servers_sub) : cljs.core.deref.call(null,scopeciui.app.servers_sub));
var selected = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.selected_sub) : cljs.core.deref.call(null,scopeciui.app.selected_sub));
var commits_index = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.identity),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commits_sub) : cljs.core.deref.call(null,scopeciui.app.commits_sub))));
if(cljs.core.not(servers)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$commitlist,(function (){var iter__7227__auto__ = ((function (servers,selected,commits_index){
return (function scopeciui$app$commitlist_$_iter__18667(s__18668){
return (new cljs.core.LazySeq(null,((function (servers,selected,commits_index){
return (function (){
var s__18668__$1 = s__18668;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18668__$1);
if(temp__4425__auto__){
var s__18668__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18668__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18668__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18670 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18669 = (0);
while(true){
if((i__18669 < size__7226__auto__)){
var sha = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18669);
cljs.core.chunk_append(b__18670,(function (){var c = (commits_index.cljs$core$IFn$_invoke$arity$1 ? commits_index.cljs$core$IFn$_invoke$arity$1(sha) : commits_index.call(null,sha));
var s = (function (){var G__18677 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18677) : servers.call(null,G__18677));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (i__18669,c,s,available,running,selected_QMARK_,sha,c__7225__auto__,size__7226__auto__,b__18670,s__18668__$2,temp__4425__auto__,servers,selected,commits_index){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(i__18669,c,s,available,running,selected_QMARK_,sha,c__7225__auto__,size__7226__auto__,b__18670,s__18668__$2,temp__4425__auto__,servers,selected,commits_index))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18678 = c;
var G__18678__$1 = (((G__18678 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18678));
var G__18678__$2 = (((G__18678__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18678__$1));
return G__18678__$2;
})()], null)], null);
})());

var G__18681 = (i__18669 + (1));
i__18669 = G__18681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18670),scopeciui$app$commitlist_$_iter__18667(cljs.core.chunk_rest(s__18668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18670),null);
}
} else {
var sha = cljs.core.first(s__18668__$2);
return cljs.core.cons((function (){var c = (commits_index.cljs$core$IFn$_invoke$arity$1 ? commits_index.cljs$core$IFn$_invoke$arity$1(sha) : commits_index.call(null,sha));
var s = (function (){var G__18679 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18679) : servers.call(null,G__18679));
})();
var available = cljs.core.boolean$(s);
var running = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(s);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (c,s,available,running,selected_QMARK_,sha,s__18668__$2,temp__4425__auto__,servers,selected,commits_index){
return (function (ev){
ev.preventDefault();

if(available){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(c,s,available,running,selected_QMARK_,sha,s__18668__$2,temp__4425__auto__,servers,selected,commits_index))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected_QMARK_)?"selected ":null)),cljs.core.str((cljs.core.truth_(running)?"running ":null)),cljs.core.str(((available)?"available ":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18680 = c;
var G__18680__$1 = (((G__18680 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18680));
var G__18680__$2 = (((G__18680__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18680__$1));
return G__18680__$2;
})()], null)], null);
})(),scopeciui$app$commitlist_$_iter__18667(cljs.core.rest(s__18668__$2)));
}
} else {
return null;
}
break;
}
});})(servers,selected,commits_index))
,null,null));
});})(servers,selected,commits_index))
;
return iter__7227__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commit_order_sub) : cljs.core.deref.call(null,scopeciui.app.commit_order_sub)));
})()], null);
}
});
scopeciui.app.commitgraph = (function scopeciui$app$commitgraph(){
var commits = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,cljs.core.cst$kw$e,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$other_DASH_root], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,cljs.core.cst$kw$d,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$b], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$a], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,cljs.core.cst$kw$b,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$a], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,cljs.core.cst$kw$c,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$b], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,cljs.core.cst$kw$a,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$root], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.graph.treegraph,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commit_parents_sub) : cljs.core.deref.call(null,scopeciui.app.commit_parents_sub)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.commit_order_sub) : cljs.core.deref.call(null,scopeciui.app.commit_order_sub))], null);
});
scopeciui.app.sidebar = (function scopeciui$app$sidebar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.sidebar_mask], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.commitgraph], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.commitlist], null)], null);
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
var action__18297__auto___18685 = (function (params__18298__auto__){
if(cljs.core.map_QMARK_(params__18298__auto__)){
var map__18682 = params__18298__auto__;
var map__18682__$1 = ((((!((map__18682 == null)))?((((map__18682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18682):map__18682);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/14e9/-grrwi1/scopeciui/app.cljs",19,1,134,134,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__18298__auto__)){
var vec__18684 = params__18298__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/14e9/-grrwi1/scopeciui/app.cljs",19,1,134,134,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__18297__auto___18685);

var action__18297__auto___18689 = (function (params__18298__auto__){
if(cljs.core.map_QMARK_(params__18298__auto__)){
var map__18686 = params__18298__auto__;
var map__18686__$1 = ((((!((map__18686 == null)))?((((map__18686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18686):map__18686);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/14e9/-grrwi1/scopeciui/app.cljs",17,1,140,140,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__18298__auto__)){
var vec__18688 = params__18298__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/14e9/-grrwi1/scopeciui/app.cljs",17,1,140,140,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__18297__auto___18689);

if(typeof scopeciui.app.load_loop !== 'undefined'){
} else {
scopeciui.app.load_loop = (function (){var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_18701){
var state_val_18702 = (state_18701[(1)]);
if((state_val_18702 === (1))){
var state_18701__$1 = state_18701;
var statearr_18703_18714 = state_18701__$1;
(statearr_18703_18714[(2)] = null);

(statearr_18703_18714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18702 === (2))){
var inst_18691 = scopeciui.app.load_state_from_server();
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18701__$1,(4),inst_18691);
} else {
if((state_val_18702 === (3))){
var inst_18699 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18701__$1,inst_18699);
} else {
if((state_val_18702 === (4))){
var inst_18693 = (state_18701[(2)]);
var inst_18694 = cljs.core.async.timeout((10000));
var state_18701__$1 = (function (){var statearr_18704 = state_18701;
(statearr_18704[(7)] = inst_18693);

return statearr_18704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18701__$1,(5),inst_18694);
} else {
if((state_val_18702 === (5))){
var inst_18696 = (state_18701[(2)]);
var state_18701__$1 = (function (){var statearr_18705 = state_18701;
(statearr_18705[(8)] = inst_18696);

return statearr_18705;
})();
var statearr_18706_18715 = state_18701__$1;
(statearr_18706_18715[(2)] = null);

(statearr_18706_18715[(1)] = (2));


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
var statearr_18710 = [null,null,null,null,null,null,null,null,null];
(statearr_18710[(0)] = scopeciui$app$state_machine__13884__auto__);

(statearr_18710[(1)] = (1));

return statearr_18710;
});
var scopeciui$app$state_machine__13884__auto____1 = (function (state_18701){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_18701);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e18711){if((e18711 instanceof Object)){
var ex__13887__auto__ = e18711;
var statearr_18712_18716 = state_18701;
(statearr_18712_18716[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18701);

return cljs.core.cst$kw$recur;
} else {
throw e18711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__18717 = state_18701;
state_18701 = G__18717;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
scopeciui$app$state_machine__13884__auto__ = function(state_18701){
switch(arguments.length){
case 0:
return scopeciui$app$state_machine__13884__auto____0.call(this);
case 1:
return scopeciui$app$state_machine__13884__auto____1.call(this,state_18701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$state_machine__13884__auto____0;
scopeciui$app$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$state_machine__13884__auto____1;
return scopeciui$app$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_18713 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_18713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_18713;
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
