// Compiled by ClojureScript 1.7.228 {}
goog.provide('scopeciui.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('accountant.core');
scopeciui.app.CISERVER = "http://ec2-52-28-176-87.eu-central-1.compute.amazonaws.com/ciui/";
if(typeof scopeciui.app.state !== 'undefined'){
} else {
scopeciui.app.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
scopeciui.app.load_revision = (function scopeciui$app$load_revision(rev){
return cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(rev));
});
scopeciui.app.commits_page = (function scopeciui$app$commits_page(){
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scopeciui.app.state));
var servers = cljs.core.get.call(null,cljs.core.deref.call(null,scopeciui.app.state),new cljs.core.Keyword(null,"servers","servers",1881102005),cljs.core.PersistentArrayMap.EMPTY);
var selected_url = (cljs.core.truth_(selected)?servers.call(null,selected):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.sidebar","ul.sidebar",1566750566),(function (){var iter__7227__auto__ = ((function (selected,servers,selected_url){
return (function scopeciui$app$commits_page_$_iter__13420(s__13421){
return (new cljs.core.LazySeq(null,((function (selected,servers,selected_url){
return (function (){
var s__13421__$1 = s__13421;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13421__$1);
if(temp__4425__auto__){
var s__13421__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13421__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__13421__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__13423 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__13422 = (0);
while(true){
if((i__13422 < size__7226__auto__)){
var c = cljs.core._nth.call(null,c__7225__auto__,i__13422);
cljs.core.chunk_append.call(null,b__13423,(function (){var available = servers.call(null,new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c));
var selected__$1 = cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (i__13422,available,selected__$1,c,c__7225__auto__,size__7226__auto__,b__13423,s__13421__$2,temp__4425__auto__,selected,servers,selected_url){
return (function (ev){
ev.preventDefault();

if(cljs.core.truth_(available)){
return scopeciui.app.load_revision.call(null,c);
} else {
return null;
}
});})(i__13422,available,selected__$1,c,c__7225__auto__,size__7226__auto__,b__13423,s__13421__$2,temp__4425__auto__,selected,servers,selected_url))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((selected__$1)?"selected ":null)),cljs.core.str((cljs.core.truth_(available)?"available":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__13426 = c;
var G__13426__$1 = (((G__13426 == null))?null:new cljs.core.Keyword(null,"commit","commit",113374389).cljs$core$IFn$_invoke$arity$1(G__13426));
var G__13426__$2 = (((G__13426__$1 == null))?null:new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__13426__$1));
return G__13426__$2;
})()], null)], null);
})());

var G__13428 = (i__13422 + (1));
i__13422 = G__13428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13423),scopeciui$app$commits_page_$_iter__13420.call(null,cljs.core.chunk_rest.call(null,s__13421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13423),null);
}
} else {
var c = cljs.core.first.call(null,s__13421__$2);
return cljs.core.cons.call(null,(function (){var available = servers.call(null,new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c));
var selected__$1 = cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (available,selected__$1,c,s__13421__$2,temp__4425__auto__,selected,servers,selected_url){
return (function (ev){
ev.preventDefault();

if(cljs.core.truth_(available)){
return scopeciui.app.load_revision.call(null,c);
} else {
return null;
}
});})(available,selected__$1,c,s__13421__$2,temp__4425__auto__,selected,servers,selected_url))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((selected__$1)?"selected ":null)),cljs.core.str((cljs.core.truth_(available)?"available":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(function (){var G__13427 = c;
var G__13427__$1 = (((G__13427 == null))?null:new cljs.core.Keyword(null,"commit","commit",113374389).cljs$core$IFn$_invoke$arity$1(G__13427));
var G__13427__$2 = (((G__13427__$1 == null))?null:new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__13427__$1));
return G__13427__$2;
})()], null)], null);
})(),scopeciui$app$commits_page_$_iter__13420.call(null,cljs.core.rest.call(null,s__13421__$2)));
}
} else {
return null;
}
break;
}
});})(selected,servers,selected_url))
,null,null));
});})(selected,servers,selected_url))
;
return iter__7227__auto__.call(null,new cljs.core.Keyword(null,"commits","commits",1045759893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scopeciui.app.state)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),selected_url], null)], null)], null)], null);
});
scopeciui.app.about_page = (function scopeciui$app$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About this project..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
scopeciui.app.current_page = (function scopeciui$app$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scopeciui.app.state))], null)], null);
});
var action__12865__auto___13432 = (function (params__12866__auto__){
if(cljs.core.map_QMARK_.call(null,params__12866__auto__)){
var map__13429 = params__12866__auto__;
var map__13429__$1 = ((((!((map__13429 == null)))?((((map__13429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13429):map__13429);
return cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return scopeciui.app.commits_page;},new cljs.core.Symbol("scopeciui.app","commits-page","scopeciui.app/commits-page",-2008608253,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"scopeciui.app","scopeciui.app",-1277230024,null),new cljs.core.Symbol(null,"commits-page","commits-page",-1062811646,null),"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/rfe/-grrwi1/scopeciui/app.cljs",19,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12866__auto__)){
var vec__13431 = params__12866__auto__;
return cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return scopeciui.app.commits_page;},new cljs.core.Symbol("scopeciui.app","commits-page","scopeciui.app/commits-page",-2008608253,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"scopeciui.app","scopeciui.app",-1277230024,null),new cljs.core.Symbol(null,"commits-page","commits-page",-1062811646,null),"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/rfe/-grrwi1/scopeciui/app.cljs",19,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__12865__auto___13432);

var action__12865__auto___13436 = (function (params__12866__auto__){
if(cljs.core.map_QMARK_.call(null,params__12866__auto__)){
var map__13433 = params__12866__auto__;
var map__13433__$1 = ((((!((map__13433 == null)))?((((map__13433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13433):map__13433);
return cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return scopeciui.app.about_page;},new cljs.core.Symbol("scopeciui.app","about-page","scopeciui.app/about-page",-1190517458,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"scopeciui.app","scopeciui.app",-1277230024,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/rfe/-grrwi1/scopeciui/app.cljs",17,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12866__auto__)){
var vec__13435 = params__12866__auto__;
return cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return scopeciui.app.about_page;},new cljs.core.Symbol("scopeciui.app","about-page","scopeciui.app/about-page",-1190517458,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"scopeciui.app","scopeciui.app",-1277230024,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/rfe/-grrwi1/scopeciui/app.cljs",17,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__12865__auto___13436);

scopeciui.app.parse_servers = (function scopeciui$app$parse_servers(res){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (p1__13437_SHARP_){
return [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str(p1__13437_SHARP_),cljs.core.str("/")].join('');
})),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res)));
});
var c__9472__auto___13479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___13479){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___13479){
return (function (state_13465){
var state_val_13466 = (state_13465[(1)]);
if((state_val_13466 === (1))){
var state_13465__$1 = state_13465;
var statearr_13467_13480 = state_13465__$1;
(statearr_13467_13480[(2)] = null);

(statearr_13467_13480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (2))){
var inst_13439 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("commits.json")].join('');
var inst_13440 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_13441 = [false];
var inst_13442 = cljs.core.PersistentHashMap.fromArrays(inst_13440,inst_13441);
var inst_13443 = cljs_http.client.get.call(null,inst_13439,inst_13442);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13465__$1,(4),inst_13443);
} else {
if((state_val_13466 === (3))){
var inst_13463 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13465__$1,inst_13463);
} else {
if((state_val_13466 === (4))){
var inst_13445 = (state_13465[(2)]);
var inst_13446 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("index.json")].join('');
var inst_13447 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_13448 = [false];
var inst_13449 = cljs.core.PersistentHashMap.fromArrays(inst_13447,inst_13448);
var inst_13450 = cljs_http.client.get.call(null,inst_13446,inst_13449);
var state_13465__$1 = (function (){var statearr_13468 = state_13465;
(statearr_13468[(7)] = inst_13445);

return statearr_13468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13465__$1,(5),inst_13450);
} else {
if((state_val_13466 === (5))){
var inst_13445 = (state_13465[(7)]);
var inst_13452 = (state_13465[(2)]);
var inst_13453 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13445);
var inst_13454 = cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"commits","commits",1045759893),inst_13453);
var inst_13455 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13452);
var inst_13456 = scopeciui.app.parse_servers.call(null,inst_13455);
var inst_13457 = cljs.core.swap_BANG_.call(null,scopeciui.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"servers","servers",1881102005),inst_13456);
var inst_13458 = cljs.core.async.timeout.call(null,(10000));
var state_13465__$1 = (function (){var statearr_13469 = state_13465;
(statearr_13469[(8)] = inst_13454);

(statearr_13469[(9)] = inst_13457);

return statearr_13469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13465__$1,(6),inst_13458);
} else {
if((state_val_13466 === (6))){
var inst_13460 = (state_13465[(2)]);
var state_13465__$1 = (function (){var statearr_13470 = state_13465;
(statearr_13470[(10)] = inst_13460);

return statearr_13470;
})();
var statearr_13471_13481 = state_13465__$1;
(statearr_13471_13481[(2)] = null);

(statearr_13471_13481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__9472__auto___13479))
;
return ((function (switch__9360__auto__,c__9472__auto___13479){
return (function() {
var scopeciui$app$state_machine__9361__auto__ = null;
var scopeciui$app$state_machine__9361__auto____0 = (function (){
var statearr_13475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13475[(0)] = scopeciui$app$state_machine__9361__auto__);

(statearr_13475[(1)] = (1));

return statearr_13475;
});
var scopeciui$app$state_machine__9361__auto____1 = (function (state_13465){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_13465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e13476){if((e13476 instanceof Object)){
var ex__9364__auto__ = e13476;
var statearr_13477_13482 = state_13465;
(statearr_13477_13482[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13483 = state_13465;
state_13465 = G__13483;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
scopeciui$app$state_machine__9361__auto__ = function(state_13465){
switch(arguments.length){
case 0:
return scopeciui$app$state_machine__9361__auto____0.call(this);
case 1:
return scopeciui$app$state_machine__9361__auto____1.call(this,state_13465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$state_machine__9361__auto____0;
scopeciui$app$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$state_machine__9361__auto____1;
return scopeciui$app$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___13479))
})();
var state__9474__auto__ = (function (){var statearr_13478 = f__9473__auto__.call(null);
(statearr_13478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___13479);

return statearr_13478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___13479))
);

scopeciui.app.mount_root = (function scopeciui$app$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.current_page], null),document.getElementById("container"));
});
scopeciui.app.init = (function scopeciui$app$init(){
accountant.core.dispatch_current_BANG_.call(null);

return scopeciui.app.mount_root.call(null);
});

//# sourceMappingURL=app.js.map