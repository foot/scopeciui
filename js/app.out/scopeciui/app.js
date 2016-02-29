// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
scopeciui.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
scopeciui.app.load_revision = (function scopeciui$app$load_revision(rev){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(rev));
});
scopeciui.app.commits_page = (function scopeciui$app$commits_page(){
var selected = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)));
var servers = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)),cljs.core.cst$kw$servers,cljs.core.PersistentArrayMap.EMPTY);
var selected_url = (cljs.core.truth_(selected)?(servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(selected) : servers.call(null,selected)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$sidebar,(function (){var iter__7227__auto__ = ((function (selected,servers,selected_url){
return (function scopeciui$app$commits_page_$_iter__18109(s__18110){
return (new cljs.core.LazySeq(null,((function (selected,servers,selected_url){
return (function (){
var s__18110__$1 = s__18110;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18110__$1);
if(temp__4425__auto__){
var s__18110__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18110__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18110__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18112 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18111 = (0);
while(true){
if((i__18111 < size__7226__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18111);
cljs.core.chunk_append(b__18112,(function (){var available = (function (){var G__18119 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18119) : servers.call(null,G__18119));
})();
var selected__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (i__18111,available,selected__$1,c,c__7225__auto__,size__7226__auto__,b__18112,s__18110__$2,temp__4425__auto__,selected,servers,selected_url){
return (function (ev){
ev.preventDefault();

if(cljs.core.truth_(available)){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(i__18111,available,selected__$1,c,c__7225__auto__,size__7226__auto__,b__18112,s__18110__$2,temp__4425__auto__,selected,servers,selected_url))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected__$1)?"selected ":null)),cljs.core.str((cljs.core.truth_(available)?"available":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18120 = c;
var G__18120__$1 = (((G__18120 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18120));
var G__18120__$2 = (((G__18120__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18120__$1));
return G__18120__$2;
})()], null)], null);
})());

var G__18123 = (i__18111 + (1));
i__18111 = G__18123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18112),scopeciui$app$commits_page_$_iter__18109(cljs.core.chunk_rest(s__18110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18112),null);
}
} else {
var c = cljs.core.first(s__18110__$2);
return cljs.core.cons((function (){var available = (function (){var G__18121 = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c);
return (servers.cljs$core$IFn$_invoke$arity$1 ? servers.cljs$core$IFn$_invoke$arity$1(G__18121) : servers.call(null,G__18121));
})();
var selected__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c));
var on_click = ((function (available,selected__$1,c,s__18110__$2,temp__4425__auto__,selected,servers,selected_url){
return (function (ev){
ev.preventDefault();

if(cljs.core.truth_(available)){
return scopeciui.app.load_revision(c);
} else {
return null;
}
});})(available,selected__$1,c,s__18110__$2,temp__4425__auto__,selected,servers,selected_url))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str(((selected__$1)?"selected ":null)),cljs.core.str((cljs.core.truth_(available)?"available":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,on_click], null),(function (){var G__18122 = c;
var G__18122__$1 = (((G__18122 == null))?null:cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1(G__18122));
var G__18122__$2 = (((G__18122__$1 == null))?null:cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__18122__$1));
return G__18122__$2;
})()], null)], null);
})(),scopeciui$app$commits_page_$_iter__18109(cljs.core.rest(s__18110__$2)));
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
return iter__7227__auto__(cljs.core.cst$kw$commits.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state))));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,selected_url], null)], null)], null)], null);
});
scopeciui.app.about_page = (function scopeciui$app$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About this project..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"go to the home page"], null)], null)], null);
});
scopeciui.app.current_page = (function scopeciui$app$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scopeciui.app.state) : cljs.core.deref.call(null,scopeciui.app.state)))], null)], null);
});
var action__17521__auto___18127 = (function (params__17522__auto__){
if(cljs.core.map_QMARK_(params__17522__auto__)){
var map__18124 = params__17522__auto__;
var map__18124__$1 = ((((!((map__18124 == null)))?((((map__18124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18124):map__18124);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1bm7/-grrwi1/scopeciui/app.cljs",19,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17522__auto__)){
var vec__18126 = params__17522__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.commits_page;},cljs.core.cst$sym$scopeciui$app_SLASH_commits_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$commits_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1bm7/-grrwi1/scopeciui/app.cljs",19,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.commits_page)?scopeciui.app.commits_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17521__auto___18127);

var action__17521__auto___18131 = (function (params__17522__auto__){
if(cljs.core.map_QMARK_(params__17522__auto__)){
var map__18128 = params__17522__auto__;
var map__18128__$1 = ((((!((map__18128 == null)))?((((map__18128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18128):map__18128);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1bm7/-grrwi1/scopeciui/app.cljs",17,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17522__auto__)){
var vec__18130 = params__17522__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return scopeciui.app.about_page;},cljs.core.cst$sym$scopeciui$app_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$scopeciui$app,cljs.core.cst$sym$about_DASH_page,"/Users/simon/.boot/cache/tmp/Users/simon/Dropbox (Personal)/workspace/scopeciui/1bm7/-grrwi1/scopeciui/app.cljs",17,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(scopeciui.app.about_page)?scopeciui.app.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__17521__auto___18131);

scopeciui.app.parse_servers = (function scopeciui$app$parse_servers(res){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__18132_SHARP_){
return [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str(p1__18132_SHARP_),cljs.core.str("/")].join('');
})),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(res)));
});
var c__13993__auto___18174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___18174){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___18174){
return (function (state_18160){
var state_val_18161 = (state_18160[(1)]);
if((state_val_18161 === (1))){
var state_18160__$1 = state_18160;
var statearr_18162_18175 = state_18160__$1;
(statearr_18162_18175[(2)] = null);

(statearr_18162_18175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18161 === (2))){
var inst_18134 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("commits.json")].join('');
var inst_18135 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18136 = [false];
var inst_18137 = cljs.core.PersistentHashMap.fromArrays(inst_18135,inst_18136);
var inst_18138 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18134,cljs.core.array_seq([inst_18137], 0));
var state_18160__$1 = state_18160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18160__$1,(4),inst_18138);
} else {
if((state_val_18161 === (3))){
var inst_18158 = (state_18160[(2)]);
var state_18160__$1 = state_18160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18160__$1,inst_18158);
} else {
if((state_val_18161 === (4))){
var inst_18140 = (state_18160[(2)]);
var inst_18141 = [cljs.core.str(scopeciui.app.CISERVER),cljs.core.str("index.json")].join('');
var inst_18142 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18143 = [false];
var inst_18144 = cljs.core.PersistentHashMap.fromArrays(inst_18142,inst_18143);
var inst_18145 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18141,cljs.core.array_seq([inst_18144], 0));
var state_18160__$1 = (function (){var statearr_18163 = state_18160;
(statearr_18163[(7)] = inst_18140);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18160__$1,(5),inst_18145);
} else {
if((state_val_18161 === (5))){
var inst_18140 = (state_18160[(7)]);
var inst_18147 = (state_18160[(2)]);
var inst_18148 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18140);
var inst_18149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$commits,inst_18148);
var inst_18150 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18147);
var inst_18151 = scopeciui.app.parse_servers(inst_18150);
var inst_18152 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scopeciui.app.state,cljs.core.assoc,cljs.core.cst$kw$servers,inst_18151);
var inst_18153 = cljs.core.async.timeout((10000));
var state_18160__$1 = (function (){var statearr_18164 = state_18160;
(statearr_18164[(8)] = inst_18152);

(statearr_18164[(9)] = inst_18149);

return statearr_18164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18160__$1,(6),inst_18153);
} else {
if((state_val_18161 === (6))){
var inst_18155 = (state_18160[(2)]);
var state_18160__$1 = (function (){var statearr_18165 = state_18160;
(statearr_18165[(10)] = inst_18155);

return statearr_18165;
})();
var statearr_18166_18176 = state_18160__$1;
(statearr_18166_18176[(2)] = null);

(statearr_18166_18176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__13993__auto___18174))
;
return ((function (switch__13879__auto__,c__13993__auto___18174){
return (function() {
var scopeciui$app$state_machine__13880__auto__ = null;
var scopeciui$app$state_machine__13880__auto____0 = (function (){
var statearr_18170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18170[(0)] = scopeciui$app$state_machine__13880__auto__);

(statearr_18170[(1)] = (1));

return statearr_18170;
});
var scopeciui$app$state_machine__13880__auto____1 = (function (state_18160){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_18160);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e18171){if((e18171 instanceof Object)){
var ex__13883__auto__ = e18171;
var statearr_18172_18177 = state_18160;
(statearr_18172_18177[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18160);

return cljs.core.cst$kw$recur;
} else {
throw e18171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__18178 = state_18160;
state_18160 = G__18178;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
scopeciui$app$state_machine__13880__auto__ = function(state_18160){
switch(arguments.length){
case 0:
return scopeciui$app$state_machine__13880__auto____0.call(this);
case 1:
return scopeciui$app$state_machine__13880__auto____1.call(this,state_18160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scopeciui$app$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = scopeciui$app$state_machine__13880__auto____0;
scopeciui$app$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = scopeciui$app$state_machine__13880__auto____1;
return scopeciui$app$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___18174))
})();
var state__13995__auto__ = (function (){var statearr_18173 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_18173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___18174);

return statearr_18173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___18174))
);

scopeciui.app.mount_root = (function scopeciui$app$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui.app.current_page], null),document.getElementById("container"));
});
scopeciui.app.init = (function scopeciui$app$init(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,location.pathname);

accountant.core.configure_navigation_BANG_();

accountant.core.dispatch_current_BANG_();

return scopeciui.app.mount_root();
});
