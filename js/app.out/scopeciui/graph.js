// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('scopeciui.graph');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tailrecursion.priority_map');
goog.require('clairvoyant.core');
scopeciui.graph.re_layout_nodes = (function scopeciui$graph$re_layout_nodes(tree_nodes){
var to_point = (function (n){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,n.x,cljs.core.cst$kw$y,n.y], null);
});
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(to_point,tree_nodes);
var rows = cljs.core.vals(cljs.core.group_by(cljs.core.cst$kw$y,positions));
var sorted_rows = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (to_point,positions,rows){
return (function (p1__18164_SHARP_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,p1__18164_SHARP_);
});})(to_point,positions,rows))
,rows);
var squish_points = ((function (to_point,positions,rows,sorted_rows){
return (function (row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (to_point,positions,rows,sorted_rows){
return (function (p1__18165_SHARP_,p2__18166_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18165_SHARP_,cljs.core.cst$kw$x,((10) + (p2__18166_SHARP_ * (10))));
});})(to_point,positions,rows,sorted_rows))
,row,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});})(to_point,positions,rows,sorted_rows))
;
var squished = cljs.core.map.cljs$core$IFn$_invoke$arity$2(squish_points,sorted_rows);
var old_to_new = cljs.core.zipmap(cljs.core.flatten(sorted_rows),cljs.core.flatten(squished));
var seq__18173_18179 = cljs.core.seq(tree_nodes);
var chunk__18174_18180 = null;
var count__18175_18181 = (0);
var i__18176_18182 = (0);
while(true){
if((i__18176_18182 < count__18175_18181)){
var n_18183 = chunk__18174_18180.cljs$core$IIndexed$_nth$arity$2(null,i__18176_18182);
(n_18183["x"] = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((function (){var G__18177 = to_point(n_18183);
return (old_to_new.cljs$core$IFn$_invoke$arity$1 ? old_to_new.cljs$core$IFn$_invoke$arity$1(G__18177) : old_to_new.call(null,G__18177));
})()));

var G__18184 = seq__18173_18179;
var G__18185 = chunk__18174_18180;
var G__18186 = count__18175_18181;
var G__18187 = (i__18176_18182 + (1));
seq__18173_18179 = G__18184;
chunk__18174_18180 = G__18185;
count__18175_18181 = G__18186;
i__18176_18182 = G__18187;
continue;
} else {
var temp__4425__auto___18188 = cljs.core.seq(seq__18173_18179);
if(temp__4425__auto___18188){
var seq__18173_18189__$1 = temp__4425__auto___18188;
if(cljs.core.chunked_seq_QMARK_(seq__18173_18189__$1)){
var c__7258__auto___18190 = cljs.core.chunk_first(seq__18173_18189__$1);
var G__18191 = cljs.core.chunk_rest(seq__18173_18189__$1);
var G__18192 = c__7258__auto___18190;
var G__18193 = cljs.core.count(c__7258__auto___18190);
var G__18194 = (0);
seq__18173_18179 = G__18191;
chunk__18174_18180 = G__18192;
count__18175_18181 = G__18193;
i__18176_18182 = G__18194;
continue;
} else {
var n_18195 = cljs.core.first(seq__18173_18189__$1);
(n_18195["x"] = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((function (){var G__18178 = to_point(n_18195);
return (old_to_new.cljs$core$IFn$_invoke$arity$1 ? old_to_new.cljs$core$IFn$_invoke$arity$1(G__18178) : old_to_new.call(null,G__18178));
})()));

var G__18196 = cljs.core.next(seq__18173_18189__$1);
var G__18197 = null;
var G__18198 = (0);
var G__18199 = (0);
seq__18173_18179 = G__18196;
chunk__18174_18180 = G__18197;
count__18175_18181 = G__18198;
i__18176_18182 = G__18199;
continue;
}
} else {
}
}
break;
}

return tree_nodes;
});
scopeciui.graph.depth_charge = (function scopeciui$graph$depth_charge(root,node_list){
var target_depths = cljs.core.zipmap(node_list,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var add_depth = ((function (target_depths){
return (function scopeciui$graph$depth_charge_$_add_depth(node,n){
if((n <= (0))){
return node;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopeciui$graph$depth_charge_$_add_depth(node,(n - (1)))], null)], null);
}
});})(target_depths))
;
var recu = ((function (target_depths,add_depth){
return (function scopeciui$graph$depth_charge_$_recu(n,depth){
var target_depth = (function (){var G__18208 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(n);
return (target_depths.cljs$core$IFn$_invoke$arity$1 ? target_depths.cljs$core$IFn$_invoke$arity$1(G__18208) : target_depths.call(null,G__18208));
})();
var child_depth = (target_depth + (1));
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (target_depth,child_depth,target_depths,add_depth){
return (function (p1__18200_SHARP_){
return scopeciui$graph$depth_charge_$_recu(p1__18200_SHARP_,child_depth);
});})(target_depth,child_depth,target_depths,add_depth))
,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(n));
return add_depth(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,cljs.core.cst$kw$children,children),(target_depth - depth));
});})(target_depths,add_depth))
;
return recu(root,(0));
});
scopeciui.graph.find_roots = (function scopeciui$graph$find_roots(commits){
var revisions = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,commits));
var all_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parents,commits))));
var missing_commits = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_parents,revisions);
var is_root_QMARK_ = ((function (revisions,all_parents,missing_commits){
return (function (c){
return cljs.core.some(missing_commits,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(c))));
});})(revisions,all_parents,missing_commits))
;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_root_QMARK_,commits);
});
scopeciui.graph.layout_nodes = (function scopeciui$graph$layout_nodes(node_parents,node_list){
var roots = scopeciui.graph.find_roots(node_parents);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (roots){
return (function (p1__18209_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,((20) * p1__18209_SHARP_)], null);
});})(roots))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(node_list)));
});
scopeciui.graph.graph = (function scopeciui$graph$graph(node_parents,node_list){
var width = (100);
var height = (500);
var radius = 4.5;
var layout = scopeciui.graph.layout_nodes(node_parents,node_list);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(function (){var iter__7227__auto__ = ((function (width,height,radius,layout){
return (function scopeciui$graph$graph_$_iter__18220(s__18221){
return (new cljs.core.LazySeq(null,((function (width,height,radius,layout){
return (function (){
var s__18221__$1 = s__18221;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18221__$1);
if(temp__4425__auto__){
var s__18221__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18221__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18221__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18223 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18222 = (0);
while(true){
if((i__18222 < size__7226__auto__)){
var vec__18228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18222);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228,(1),null);
cljs.core.chunk_append(b__18223,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,n,cljs.core.cst$kw$class,"node",cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(", "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,radius], null)], null)], null));

var G__18230 = (i__18222 + (1));
i__18222 = G__18230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18223),scopeciui$graph$graph_$_iter__18220(cljs.core.chunk_rest(s__18221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18223),null);
}
} else {
var vec__18229 = cljs.core.first(s__18221__$2);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18229,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18229,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,n,cljs.core.cst$kw$class,"node",cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(", "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,radius], null)], null)], null),scopeciui$graph$graph_$_iter__18220(cljs.core.rest(s__18221__$2)));
}
} else {
return null;
}
break;
}
});})(width,height,radius,layout))
,null,null));
});})(width,height,radius,layout))
;
return iter__7227__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,layout,node_list));
})()], null)], null);
});
scopeciui.graph.commit_children = (function scopeciui$graph$commit_children(commits){
var __GT_children = (function (c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(p),cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(c)], true)], true, false);
}),cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(c));
});
var commits_and_children = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(__GT_children,cljs.core.array_seq([commits], 0));
var commit_children__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),commits_and_children);
return commit_children__$1;
});
scopeciui.graph.build_tree = (function scopeciui$graph$build_tree(head,commit_parents,children){
var cs = (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(head) : children.call(null,head));
if(cljs.core.empty_QMARK_(cs)){
return commit_parents;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cs){
return (function (cp,c){
if(cljs.core.truth_((cp.cljs$core$IFn$_invoke$arity$1 ? cp.cljs$core$IFn$_invoke$arity$1(c) : cp.call(null,c)))){
return cp;
} else {
var cp_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cp,c,head);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cp_SINGLEQUOTE_,scopeciui$graph$build_tree(c,cp_SINGLEQUOTE_,children)], 0));
}
});})(cs))
,commit_parents,cs);
}
});
scopeciui.graph.build_tree_js = (function scopeciui$graph$build_tree_js(var_args){
var args__7520__auto__ = [];
var len__7513__auto___18232 = arguments.length;
var i__7514__auto___18233 = (0);
while(true){
if((i__7514__auto___18233 < len__7513__auto___18232)){
args__7520__auto__.push((arguments[i__7514__auto___18233]));

var G__18234 = (i__7514__auto___18233 + (1));
i__7514__auto___18233 = G__18234;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return scopeciui.graph.build_tree_js.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

scopeciui.graph.build_tree_js.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(buildTree,cljs.core.clj__GT_js(args)));
});

scopeciui.graph.build_tree_js.cljs$lang$maxFixedArity = (0);

scopeciui.graph.build_tree_js.cljs$lang$applyTo = (function (seq18231){
return scopeciui.graph.build_tree_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18231));
});
scopeciui.graph.dfs_tree = (function scopeciui$graph$dfs_tree(commits){
var root = cljs.core.first(scopeciui.graph.find_roots(commits));
var root_sha = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(root);
var children = scopeciui.graph.commit_children(commits);
return scopeciui.graph.build_tree(root_sha,cljs.core.PersistentArrayMap.fromArray([root_sha,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(root)))], true, false),children);
});
scopeciui.graph.bfs_tree = (function scopeciui$graph$bfs_tree(pm,children,date_fn){
var vec__18236 = cljs.core.peek(pm);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18236,(0),null);
var head_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18236,(1),null);
var cs = (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(head) : children.call(null,head));
var pm__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(pm),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,date_fn),cs));
if(cljs.core.empty_QMARK_(pm__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(scopeciui$graph$bfs_tree(pm__$1,children,date_fn),head);
}
});
scopeciui.graph.sort_commits = (function scopeciui$graph$sort_commits(commit_parents,commits){
var commits_index = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.identity),commits));
var children = scopeciui.graph.commit_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (commits_index){
return (function (p__18239){
var vec__18240 = p__18239;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18240,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18240,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sha,c,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,p], null)], null)], null);
});})(commits_index))
,commit_parents));
var date_fn = ((function (commits_index,children){
return (function (revision){
return cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$committer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$commit.cljs$core$IFn$_invoke$arity$1((commits_index.cljs$core$IFn$_invoke$arity$1 ? commits_index.cljs$core$IFn$_invoke$arity$1(revision) : commits_index.call(null,revision)))));
});})(commits_index,children))
;
var root = cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(cljs.core.first(scopeciui.graph.find_roots(commits)));
var pm = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([root,date_fn(root)], 0));
return scopeciui.graph.bfs_tree(pm,children,date_fn);
});
scopeciui.graph.merge_roots = (function scopeciui$graph$merge_roots(commits){
var indexed_commits = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (c,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$i,i);
}),commits,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var commits_index = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.identity),indexed_commits));
var roots = scopeciui.graph.find_roots(indexed_commits);
var roots_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (indexed_commits,commits_index,roots){
return (function (p1__18241_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18241_SHARP_,cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,"super-root"], null)], null));
});})(indexed_commits,commits_index,roots))
,roots);
var super_root = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sha,"super-root",cljs.core.cst$kw$parents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sha,cljs.core.cst$kw$super_DASH_duper_DASH_root], null)], null),cljs.core.cst$kw$i,cljs.core.count(commits)], null);
var commits_index_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([commits_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sha,cljs.core.identity),roots_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["super-root",super_root], null)], 0));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$i,cljs.core.vals(commits_index_SINGLEQUOTE_));
});
scopeciui.graph.treegraph = (function scopeciui$graph$treegraph(node_parents,node_list){
if((cljs.core.count(node_list) < (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
var vec__18264 = (function (){var G__18265 = cljs.core.clj__GT_js(node_parents);
var G__18266 = cljs.core.clj__GT_js(node_list);
return toData(G__18265,G__18266);
})();
var js_node_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(0),null);
var js_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(1),null);
var node_list__$1 = cljs.core.clj__GT_js(js_node_list);
var data = scopeciui.graph.depth_charge(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),cljs.core.reverse(node_list__$1));
var radius = 4.5;
var outer_radius = (6);
var width = (200);
var height = (29.91 * cljs.core.count(node_list__$1));
var tree = d3.layout.tree().size([width,(height - ((2) * outer_radius))]);
var line = d3.svg.line().interpolate("linear");
var link_to_line = ((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line){
return (function (link){
var G__18267 = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [link.source.x,link.source.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [link.target.x,link.target.y], null)], null));
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__18267) : line.call(null,G__18267));
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line))
;
var diagonal = d3.svg.diagonal().projection(((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line){
return (function (d){
return [d.x,d.y];
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line))
);
var tree_nodes = scopeciui.graph.re_layout_nodes(tree.nodes(cljs.core.clj__GT_js(data)));
var links = ((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes){
return (function (p1__18242_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(diagonal,p1__18242_SHARP_);
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes))
.call(null,tree.links(tree_nodes));
var to_point = ((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links){
return (function (p1__18243_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,p1__18243_SHARP_.x,cljs.core.cst$kw$y,p1__18243_SHARP_.y,cljs.core.cst$kw$name,p1__18243_SHARP_.name], null));
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("scale(-1, -1)"),cljs.core.str("translate(-120, "),cljs.core.str((outer_radius - height)),cljs.core.str(")")].join('')], null),(function (){var iter__7227__auto__ = ((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function scopeciui$graph$treegraph_$_iter__18268(s__18269){
return (new cljs.core.LazySeq(null,((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function (){
var s__18269__$1 = s__18269;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18269__$1);
if(temp__4425__auto__){
var s__18269__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18269__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18269__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18271 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18270 = (0);
while(true){
if((i__18270 < size__7226__auto__)){
var vec__18276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18270);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(1),null);
cljs.core.chunk_append(b__18271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$class,"link",cljs.core.cst$kw$d,d], null)], null));

var G__18284 = (i__18270 + (1));
i__18270 = G__18284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18271),scopeciui$graph$treegraph_$_iter__18268(cljs.core.chunk_rest(s__18269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18271),null);
}
} else {
var vec__18277 = cljs.core.first(s__18269__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$class,"link",cljs.core.cst$kw$d,d], null)], null),scopeciui$graph$treegraph_$_iter__18268(cljs.core.rest(s__18269__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
,null,null));
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
;
return iter__7227__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,links));
})(),(function (){var iter__7227__auto__ = ((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function scopeciui$graph$treegraph_$_iter__18278(s__18279){
return (new cljs.core.LazySeq(null,((function (vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function (){
var s__18279__$1 = s__18279;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18279__$1);
if(temp__4425__auto__){
var s__18279__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18279__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__18279__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__18281 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__18280 = (0);
while(true){
if((i__18280 < size__7226__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__18280);
cljs.core.chunk_append(b__18281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$class,"node",cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(", "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,radius], null)], null)], null));

var G__18285 = (i__18280 + (1));
i__18280 = G__18285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18281),scopeciui$graph$treegraph_$_iter__18278(cljs.core.chunk_rest(s__18279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18281),null);
}
} else {
var d = cljs.core.first(s__18279__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$class,"node",cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(", "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,radius], null)], null)], null),scopeciui$graph$treegraph_$_iter__18278(cljs.core.rest(s__18279__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
,null,null));
});})(vec__18264,js_node_list,js_data,node_list__$1,data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
;
return iter__7227__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,cljs.core.cst$kw$name),cljs.core.map.cljs$core$IFn$_invoke$arity$2(to_point,tree_nodes)));
})()], null)], null);
}
});
