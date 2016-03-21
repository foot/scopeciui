// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__17655(s__17656){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__17656__$1 = s__17656;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17656__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17665 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17665,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17665,(1),null);
var iterys__7223__auto__ = ((function (s__17656__$1,vec__17665,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__17655_$_iter__17657(s__17658){
return (new cljs.core.LazySeq(null,((function (s__17656__$1,vec__17665,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__17658__$1 = s__17658;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17658__$1);
if(temp__4425__auto____$1){
var s__17658__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17658__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17658__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17660 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17659 = (0);
while(true){
if((i__17659 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17659);
cljs.core.chunk_append(b__17660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__17734 = (i__17659 + (1));
i__17659 = G__17734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17660),tailrecursion$priority_map$iter__17655_$_iter__17657(cljs.core.chunk_rest(s__17658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17660),null);
}
} else {
var item = cljs.core.first(s__17658__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__17655_$_iter__17657(cljs.core.rest(s__17658__$2)));
}
} else {
return null;
}
break;
}
});})(s__17656__$1,vec__17665,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__17656__$1,vec__17665,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17655(cljs.core.rest(s__17656__$1)));
} else {
var G__17735 = cljs.core.rest(s__17656__$1);
s__17656__$1 = G__17735;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__7227__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__17668(s__17669){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__17669__$1 = s__17669;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17669__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17678 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678,(1),null);
var iterys__7223__auto__ = ((function (s__17669__$1,vec__17678,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__17668_$_iter__17670(s__17671){
return (new cljs.core.LazySeq(null,((function (s__17669__$1,vec__17678,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__17671__$1 = s__17671;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17671__$1);
if(temp__4425__auto____$1){
var s__17671__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17671__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17671__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17673 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17672 = (0);
while(true){
if((i__17672 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17672);
cljs.core.chunk_append(b__17673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__17736 = (i__17672 + (1));
i__17672 = G__17736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17673),tailrecursion$priority_map$iter__17668_$_iter__17670(cljs.core.chunk_rest(s__17671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17673),null);
}
} else {
var item = cljs.core.first(s__17671__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__17668_$_iter__17670(cljs.core.rest(s__17671__$2)));
}
} else {
return null;
}
break;
}
});})(s__17669__$1,vec__17678,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__17669__$1,vec__17678,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17668(cljs.core.rest(s__17669__$1)));
} else {
var G__17737 = cljs.core.rest(s__17669__$1);
s__17669__$1 = G__17737;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__7227__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap(this$__$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found) : self__.item__GT_priority.call(null,item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.array_seq([priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__17681(s__17682){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__17682__$1 = s__17682;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17682__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17691 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17691,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17691,(1),null);
var iterys__7223__auto__ = ((function (s__17682__$1,vec__17691,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__17681_$_iter__17683(s__17684){
return (new cljs.core.LazySeq(null,((function (s__17682__$1,vec__17691,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__17684__$1 = s__17684;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17684__$1);
if(temp__4425__auto____$1){
var s__17684__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17684__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17684__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17686 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17685 = (0);
while(true){
if((i__17685 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17685);
cljs.core.chunk_append(b__17686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__17738 = (i__17685 + (1));
i__17685 = G__17738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17686),tailrecursion$priority_map$iter__17681_$_iter__17683(cljs.core.chunk_rest(s__17684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17686),null);
}
} else {
var item = cljs.core.first(s__17684__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__17681_$_iter__17683(cljs.core.rest(s__17684__$2)));
}
} else {
return null;
}
break;
}
});})(s__17682__$1,vec__17691,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__17682__$1,vec__17691,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17681(cljs.core.rest(s__17682__$1)));
} else {
var G__17739 = cljs.core.rest(s__17682__$1);
s__17682__$1 = G__17739;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__17694(s__17695){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__17695__$1 = s__17695;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17695__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17704 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704,(1),null);
var iterys__7223__auto__ = ((function (s__17695__$1,vec__17704,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__17694_$_iter__17696(s__17697){
return (new cljs.core.LazySeq(null,((function (s__17695__$1,vec__17704,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__17697__$1 = s__17697;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17697__$1);
if(temp__4425__auto____$1){
var s__17697__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17697__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17697__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17699 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17698 = (0);
while(true){
if((i__17698 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17698);
cljs.core.chunk_append(b__17699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__17740 = (i__17698 + (1));
i__17698 = G__17740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17699),tailrecursion$priority_map$iter__17694_$_iter__17696(cljs.core.chunk_rest(s__17697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17699),null);
}
} else {
var item = cljs.core.first(s__17697__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__17694_$_iter__17696(cljs.core.rest(s__17697__$2)));
}
} else {
return null;
}
break;
}
});})(s__17695__$1,vec__17704,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__17695__$1,vec__17704,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17694(cljs.core.rest(s__17695__$1)));
} else {
var G__17741 = cljs.core.rest(s__17695__$1);
s__17695__$1 = G__17741;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__(self__.priority__GT_set_of_items);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__17742 = null;
var G__17742__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__17742__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__17742 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__17742__2.call(this,self__,item);
case 3:
return G__17742__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17742.cljs$core$IFn$_invoke$arity$2 = G__17742__2;
G__17742.cljs$core$IFn$_invoke$arity$3 = G__17742__3;
return G__17742;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args17654){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17654)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__17707(s__17708){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__17708__$1 = s__17708;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17708__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17717 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(1),null);
var iterys__7223__auto__ = ((function (s__17708__$1,vec__17717,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__17707_$_iter__17709(s__17710){
return (new cljs.core.LazySeq(null,((function (s__17708__$1,vec__17717,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__17710__$1 = s__17710;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17710__$1);
if(temp__4425__auto____$1){
var s__17710__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17710__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17710__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17712 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17711 = (0);
while(true){
if((i__17711 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17711);
cljs.core.chunk_append(b__17712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__17743 = (i__17711 + (1));
i__17711 = G__17743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17712),tailrecursion$priority_map$iter__17707_$_iter__17709(cljs.core.chunk_rest(s__17710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17712),null);
}
} else {
var item = cljs.core.first(s__17710__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__17707_$_iter__17709(cljs.core.rest(s__17710__$2)));
}
} else {
return null;
}
break;
}
});})(s__17708__$1,vec__17717,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__17708__$1,vec__17717,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17707(cljs.core.rest(s__17708__$1)));
} else {
var G__17744 = cljs.core.rest(s__17708__$1);
s__17708__$1 = G__17744;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__7227__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__7227__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__17720(s__17721){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__17721__$1 = s__17721;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17721__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__17730 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730,(1),null);
var iterys__7223__auto__ = ((function (s__17721__$1,vec__17730,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__17720_$_iter__17722(s__17723){
return (new cljs.core.LazySeq(null,((function (s__17721__$1,vec__17730,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__17723__$1 = s__17723;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17723__$1);
if(temp__4425__auto____$1){
var s__17723__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17723__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__17723__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__17725 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__17724 = (0);
while(true){
if((i__17724 < size__7226__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__17724);
cljs.core.chunk_append(b__17725,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__17745 = (i__17724 + (1));
i__17724 = G__17745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17725),tailrecursion$priority_map$iter__17720_$_iter__17722(cljs.core.chunk_rest(s__17723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17725),null);
}
} else {
var item = cljs.core.first(s__17723__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__17720_$_iter__17722(cljs.core.rest(s__17723__$2)));
}
} else {
return null;
}
break;
}
});})(s__17721__$1,vec__17730,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__17721__$1,vec__17730,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(item_set));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,tailrecursion$priority_map$iter__17720(cljs.core.rest(s__17721__$1)));
} else {
var G__17746 = cljs.core.rest(s__17721__$1);
s__17721__$1 = G__17746;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__7227__auto__(sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__17733 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__17733) : self__.keyfn.call(null,G__17733));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$priority_DASH__GT_set_DASH_of_DASH_items,cljs.core.cst$sym$item_DASH__GT_priority,cljs.core.cst$sym$meta,cljs.core.cst$sym$keyfn,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args17747 = [];
var len__7513__auto___17750 = arguments.length;
var i__7514__auto___17751 = (0);
while(true){
if((i__7514__auto___17751 < len__7513__auto___17750)){
args17747.push((arguments[i__7514__auto___17751]));

var G__17752 = (i__7514__auto___17751 + (1));
i__7514__auto___17751 = G__17752;
continue;
} else {
}
break;
}

var G__17749 = args17747.length;
switch (G__17749) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17747.length)].join('')));

}
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Priority map literal expects a map for its elements."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17755 = arguments.length;
var i__7514__auto___17756 = (0);
while(true){
if((i__7514__auto___17756 < len__7513__auto___17755)){
args__7520__auto__.push((arguments[i__7514__auto___17756]));

var G__17757 = (i__7514__auto___17756 + (1));
i__7514__auto___17756 = G__17757;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__17758 = cljs.core.nnext(in$);
var G__17759 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__17758;
out = G__17759;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq17754){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17754));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17762 = arguments.length;
var i__7514__auto___17763 = (0);
while(true){
if((i__7514__auto___17763 < len__7513__auto___17762)){
args__7520__auto__.push((arguments[i__7514__auto___17763]));

var G__17764 = (i__7514__auto___17763 + (1));
i__7514__auto___17763 = G__17764;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__17765 = cljs.core.nnext(in$);
var G__17766 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__17765;
out = G__17766;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq17760){
var G__17761 = cljs.core.first(seq17760);
var seq17760__$1 = cljs.core.next(seq17760);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__17761,seq17760__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17769 = arguments.length;
var i__7514__auto___17770 = (0);
while(true){
if((i__7514__auto___17770 < len__7513__auto___17769)){
args__7520__auto__.push((arguments[i__7514__auto___17770]));

var G__17771 = (i__7514__auto___17770 + (1));
i__7514__auto___17770 = G__17771;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__17772 = cljs.core.nnext(in$);
var G__17773 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__17772;
out = G__17773;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq17767){
var G__17768 = cljs.core.first(seq17767);
var seq17767__$1 = cljs.core.next(seq17767);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__17768,seq17767__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__7520__auto__ = [];
var len__7513__auto___17777 = arguments.length;
var i__7514__auto___17778 = (0);
while(true){
if((i__7514__auto___17778 < len__7513__auto___17777)){
args__7520__auto__.push((arguments[i__7514__auto___17778]));

var G__17779 = (i__7514__auto___17778 + (1));
i__7514__auto___17778 = G__17779;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((2) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((2)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__17780 = cljs.core.nnext(in$);
var G__17781 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__17780;
out = G__17781;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq17774){
var G__17775 = cljs.core.first(seq17774);
var seq17774__$1 = cljs.core.next(seq17774);
var G__17776 = cljs.core.first(seq17774__$1);
var seq17774__$2 = cljs.core.next(seq17774__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__17775,G__17776,seq17774__$2);
});
