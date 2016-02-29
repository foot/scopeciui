// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14038 = [];
var len__7513__auto___14044 = arguments.length;
var i__7514__auto___14045 = (0);
while(true){
if((i__7514__auto___14045 < len__7513__auto___14044)){
args14038.push((arguments[i__7514__auto___14045]));

var G__14046 = (i__7514__auto___14045 + (1));
i__7514__auto___14045 = G__14046;
continue;
} else {
}
break;
}

var G__14040 = args14038.length;
switch (G__14040) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14038.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14041 = (function (f,blockable,meta14042){
this.f = f;
this.blockable = blockable;
this.meta14042 = meta14042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14043,meta14042__$1){
var self__ = this;
var _14043__$1 = this;
return (new cljs.core.async.t_cljs$core$async14041(self__.f,self__.blockable,meta14042__$1));
});

cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14043){
var self__ = this;
var _14043__$1 = this;
return self__.meta14042;
});

cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14042], null);
});

cljs.core.async.t_cljs$core$async14041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14041";

cljs.core.async.t_cljs$core$async14041.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14041");
});

cljs.core.async.__GT_t_cljs$core$async14041 = (function cljs$core$async$__GT_t_cljs$core$async14041(f__$1,blockable__$1,meta14042){
return (new cljs.core.async.t_cljs$core$async14041(f__$1,blockable__$1,meta14042));
});

}

return (new cljs.core.async.t_cljs$core$async14041(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14050 = [];
var len__7513__auto___14053 = arguments.length;
var i__7514__auto___14054 = (0);
while(true){
if((i__7514__auto___14054 < len__7513__auto___14053)){
args14050.push((arguments[i__7514__auto___14054]));

var G__14055 = (i__7514__auto___14054 + (1));
i__7514__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var G__14052 = args14050.length;
switch (G__14052) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14050.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14057 = [];
var len__7513__auto___14060 = arguments.length;
var i__7514__auto___14061 = (0);
while(true){
if((i__7514__auto___14061 < len__7513__auto___14060)){
args14057.push((arguments[i__7514__auto___14061]));

var G__14062 = (i__7514__auto___14061 + (1));
i__7514__auto___14061 = G__14062;
continue;
} else {
}
break;
}

var G__14059 = args14057.length;
switch (G__14059) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14057.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14064 = [];
var len__7513__auto___14067 = arguments.length;
var i__7514__auto___14068 = (0);
while(true){
if((i__7514__auto___14068 < len__7513__auto___14067)){
args14064.push((arguments[i__7514__auto___14068]));

var G__14069 = (i__7514__auto___14068 + (1));
i__7514__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var G__14066 = args14064.length;
switch (G__14066) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14064.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14071 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14071) : fn1.call(null,val_14071));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14071,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14071) : fn1.call(null,val_14071));
});})(val_14071,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14072 = [];
var len__7513__auto___14075 = arguments.length;
var i__7514__auto___14076 = (0);
while(true){
if((i__7514__auto___14076 < len__7513__auto___14075)){
args14072.push((arguments[i__7514__auto___14076]));

var G__14077 = (i__7514__auto___14076 + (1));
i__7514__auto___14076 = G__14077;
continue;
} else {
}
break;
}

var G__14074 = args14072.length;
switch (G__14074) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14072.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7358__auto___14079 = n;
var x_14080 = (0);
while(true){
if((x_14080 < n__7358__auto___14079)){
(a[x_14080] = (0));

var G__14081 = (x_14080 + (1));
x_14080 = G__14081;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14082 = (i + (1));
i = G__14082;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14086 = (function (alt_flag,flag,meta14087){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14087 = meta14087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14088,meta14087__$1){
var self__ = this;
var _14088__$1 = this;
return (new cljs.core.async.t_cljs$core$async14086(self__.alt_flag,self__.flag,meta14087__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14088){
var self__ = this;
var _14088__$1 = this;
return self__.meta14087;
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14087], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14086";

cljs.core.async.t_cljs$core$async14086.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14086");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14086 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14086(alt_flag__$1,flag__$1,meta14087){
return (new cljs.core.async.t_cljs$core$async14086(alt_flag__$1,flag__$1,meta14087));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14086(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14092 = (function (alt_handler,flag,cb,meta14093){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14093 = meta14093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14094,meta14093__$1){
var self__ = this;
var _14094__$1 = this;
return (new cljs.core.async.t_cljs$core$async14092(self__.alt_handler,self__.flag,self__.cb,meta14093__$1));
});

cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14094){
var self__ = this;
var _14094__$1 = this;
return self__.meta14093;
});

cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14093], null);
});

cljs.core.async.t_cljs$core$async14092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14092";

cljs.core.async.t_cljs$core$async14092.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14092");
});

cljs.core.async.__GT_t_cljs$core$async14092 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14092(alt_handler__$1,flag__$1,cb__$1,meta14093){
return (new cljs.core.async.t_cljs$core$async14092(alt_handler__$1,flag__$1,cb__$1,meta14093));
});

}

return (new cljs.core.async.t_cljs$core$async14092(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14095_SHARP_){
var G__14099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14095_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14099) : fret.call(null,G__14099));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14096_SHARP_){
var G__14100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14096_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14100) : fret.call(null,G__14100));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6455__auto__ = wport;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14101 = (i + (1));
i = G__14101;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6455__auto__ = ret;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__6443__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___14107 = arguments.length;
var i__7514__auto___14108 = (0);
while(true){
if((i__7514__auto___14108 < len__7513__auto___14107)){
args__7520__auto__.push((arguments[i__7514__auto___14108]));

var G__14109 = (i__7514__auto___14108 + (1));
i__7514__auto___14108 = G__14109;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14104){
var map__14105 = p__14104;
var map__14105__$1 = ((((!((map__14105 == null)))?((((map__14105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14105):map__14105);
var opts = map__14105__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14102){
var G__14103 = cljs.core.first(seq14102);
var seq14102__$1 = cljs.core.next(seq14102);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14103,seq14102__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14110 = [];
var len__7513__auto___14160 = arguments.length;
var i__7514__auto___14161 = (0);
while(true){
if((i__7514__auto___14161 < len__7513__auto___14160)){
args14110.push((arguments[i__7514__auto___14161]));

var G__14162 = (i__7514__auto___14161 + (1));
i__7514__auto___14161 = G__14162;
continue;
} else {
}
break;
}

var G__14112 = args14110.length;
switch (G__14112) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14110.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13993__auto___14164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___14164){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___14164){
return (function (state_14136){
var state_val_14137 = (state_14136[(1)]);
if((state_val_14137 === (7))){
var inst_14132 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14138_14165 = state_14136__$1;
(statearr_14138_14165[(2)] = inst_14132);

(statearr_14138_14165[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (1))){
var state_14136__$1 = state_14136;
var statearr_14139_14166 = state_14136__$1;
(statearr_14139_14166[(2)] = null);

(statearr_14139_14166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (4))){
var inst_14115 = (state_14136[(7)]);
var inst_14115__$1 = (state_14136[(2)]);
var inst_14116 = (inst_14115__$1 == null);
var state_14136__$1 = (function (){var statearr_14140 = state_14136;
(statearr_14140[(7)] = inst_14115__$1);

return statearr_14140;
})();
if(cljs.core.truth_(inst_14116)){
var statearr_14141_14167 = state_14136__$1;
(statearr_14141_14167[(1)] = (5));

} else {
var statearr_14142_14168 = state_14136__$1;
(statearr_14142_14168[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (13))){
var state_14136__$1 = state_14136;
var statearr_14143_14169 = state_14136__$1;
(statearr_14143_14169[(2)] = null);

(statearr_14143_14169[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (6))){
var inst_14115 = (state_14136[(7)]);
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14136__$1,(11),to,inst_14115);
} else {
if((state_val_14137 === (3))){
var inst_14134 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14136__$1,inst_14134);
} else {
if((state_val_14137 === (12))){
var state_14136__$1 = state_14136;
var statearr_14144_14170 = state_14136__$1;
(statearr_14144_14170[(2)] = null);

(statearr_14144_14170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (2))){
var state_14136__$1 = state_14136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14136__$1,(4),from);
} else {
if((state_val_14137 === (11))){
var inst_14125 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
if(cljs.core.truth_(inst_14125)){
var statearr_14145_14171 = state_14136__$1;
(statearr_14145_14171[(1)] = (12));

} else {
var statearr_14146_14172 = state_14136__$1;
(statearr_14146_14172[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (9))){
var state_14136__$1 = state_14136;
var statearr_14147_14173 = state_14136__$1;
(statearr_14147_14173[(2)] = null);

(statearr_14147_14173[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (5))){
var state_14136__$1 = state_14136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14148_14174 = state_14136__$1;
(statearr_14148_14174[(1)] = (8));

} else {
var statearr_14149_14175 = state_14136__$1;
(statearr_14149_14175[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (14))){
var inst_14130 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14150_14176 = state_14136__$1;
(statearr_14150_14176[(2)] = inst_14130);

(statearr_14150_14176[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (10))){
var inst_14122 = (state_14136[(2)]);
var state_14136__$1 = state_14136;
var statearr_14151_14177 = state_14136__$1;
(statearr_14151_14177[(2)] = inst_14122);

(statearr_14151_14177[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14137 === (8))){
var inst_14119 = cljs.core.async.close_BANG_(to);
var state_14136__$1 = state_14136;
var statearr_14152_14178 = state_14136__$1;
(statearr_14152_14178[(2)] = inst_14119);

(statearr_14152_14178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___14164))
;
return ((function (switch__13879__auto__,c__13993__auto___14164){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_14156 = [null,null,null,null,null,null,null,null];
(statearr_14156[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_14156[(1)] = (1));

return statearr_14156;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_14136){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14136);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14157){if((e14157 instanceof Object)){
var ex__13883__auto__ = e14157;
var statearr_14158_14179 = state_14136;
(statearr_14158_14179[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14136);

return cljs.core.cst$kw$recur;
} else {
throw e14157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14180 = state_14136;
state_14136 = G__14180;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_14136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_14136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___14164))
})();
var state__13995__auto__ = (function (){var statearr_14159 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14164);

return statearr_14159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___14164))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14364){
var vec__14365 = p__14364;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(1),null);
var job = vec__14365;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13993__auto___14547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results){
return (function (state_14370){
var state_val_14371 = (state_14370[(1)]);
if((state_val_14371 === (1))){
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14370__$1,(2),res,v);
} else {
if((state_val_14371 === (2))){
var inst_14367 = (state_14370[(2)]);
var inst_14368 = cljs.core.async.close_BANG_(res);
var state_14370__$1 = (function (){var statearr_14372 = state_14370;
(statearr_14372[(7)] = inst_14367);

return statearr_14372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14370__$1,inst_14368);
} else {
return null;
}
}
});})(c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results))
;
return ((function (switch__13879__auto__,c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_14376 = [null,null,null,null,null,null,null,null];
(statearr_14376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__);

(statearr_14376[(1)] = (1));

return statearr_14376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1 = (function (state_14370){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14370);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14377){if((e14377 instanceof Object)){
var ex__13883__auto__ = e14377;
var statearr_14378_14548 = state_14370;
(statearr_14378_14548[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14370);

return cljs.core.cst$kw$recur;
} else {
throw e14377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14549 = state_14370;
state_14370 = G__14549;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = function(state_14370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1.call(this,state_14370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results))
})();
var state__13995__auto__ = (function (){var statearr_14379 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14547);

return statearr_14379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___14547,res,vec__14365,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14380){
var vec__14381 = p__14380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14381,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14381,(1),null);
var job = vec__14381;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7358__auto___14550 = n;
var __14551 = (0);
while(true){
if((__14551 < n__7358__auto___14550)){
var G__14382_14552 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14382_14552) {
case "compute":
var c__13993__auto___14554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14551,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (__14551,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function (state_14395){
var state_val_14396 = (state_14395[(1)]);
if((state_val_14396 === (1))){
var state_14395__$1 = state_14395;
var statearr_14397_14555 = state_14395__$1;
(statearr_14397_14555[(2)] = null);

(statearr_14397_14555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14396 === (2))){
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14395__$1,(4),jobs);
} else {
if((state_val_14396 === (3))){
var inst_14393 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14395__$1,inst_14393);
} else {
if((state_val_14396 === (4))){
var inst_14385 = (state_14395[(2)]);
var inst_14386 = process(inst_14385);
var state_14395__$1 = state_14395;
if(cljs.core.truth_(inst_14386)){
var statearr_14398_14556 = state_14395__$1;
(statearr_14398_14556[(1)] = (5));

} else {
var statearr_14399_14557 = state_14395__$1;
(statearr_14399_14557[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14396 === (5))){
var state_14395__$1 = state_14395;
var statearr_14400_14558 = state_14395__$1;
(statearr_14400_14558[(2)] = null);

(statearr_14400_14558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14396 === (6))){
var state_14395__$1 = state_14395;
var statearr_14401_14559 = state_14395__$1;
(statearr_14401_14559[(2)] = null);

(statearr_14401_14559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14396 === (7))){
var inst_14391 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
var statearr_14402_14560 = state_14395__$1;
(statearr_14402_14560[(2)] = inst_14391);

(statearr_14402_14560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14551,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
;
return ((function (__14551,switch__13879__auto__,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_14406 = [null,null,null,null,null,null,null];
(statearr_14406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__);

(statearr_14406[(1)] = (1));

return statearr_14406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1 = (function (state_14395){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14395);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14407){if((e14407 instanceof Object)){
var ex__13883__auto__ = e14407;
var statearr_14408_14561 = state_14395;
(statearr_14408_14561[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14395);

return cljs.core.cst$kw$recur;
} else {
throw e14407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14562 = state_14395;
state_14395 = G__14562;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = function(state_14395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1.call(this,state_14395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__;
})()
;})(__14551,switch__13879__auto__,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
})();
var state__13995__auto__ = (function (){var statearr_14409 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14554);

return statearr_14409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(__14551,c__13993__auto___14554,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
);


break;
case "async":
var c__13993__auto___14563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14551,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (__14551,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function (state_14422){
var state_val_14423 = (state_14422[(1)]);
if((state_val_14423 === (1))){
var state_14422__$1 = state_14422;
var statearr_14424_14564 = state_14422__$1;
(statearr_14424_14564[(2)] = null);

(statearr_14424_14564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14423 === (2))){
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14422__$1,(4),jobs);
} else {
if((state_val_14423 === (3))){
var inst_14420 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14422__$1,inst_14420);
} else {
if((state_val_14423 === (4))){
var inst_14412 = (state_14422[(2)]);
var inst_14413 = async(inst_14412);
var state_14422__$1 = state_14422;
if(cljs.core.truth_(inst_14413)){
var statearr_14425_14565 = state_14422__$1;
(statearr_14425_14565[(1)] = (5));

} else {
var statearr_14426_14566 = state_14422__$1;
(statearr_14426_14566[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14423 === (5))){
var state_14422__$1 = state_14422;
var statearr_14427_14567 = state_14422__$1;
(statearr_14427_14567[(2)] = null);

(statearr_14427_14567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14423 === (6))){
var state_14422__$1 = state_14422;
var statearr_14428_14568 = state_14422__$1;
(statearr_14428_14568[(2)] = null);

(statearr_14428_14568[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14423 === (7))){
var inst_14418 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
var statearr_14429_14569 = state_14422__$1;
(statearr_14429_14569[(2)] = inst_14418);

(statearr_14429_14569[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14551,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
;
return ((function (__14551,switch__13879__auto__,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_14433 = [null,null,null,null,null,null,null];
(statearr_14433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__);

(statearr_14433[(1)] = (1));

return statearr_14433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1 = (function (state_14422){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14422);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14434){if((e14434 instanceof Object)){
var ex__13883__auto__ = e14434;
var statearr_14435_14570 = state_14422;
(statearr_14435_14570[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14422);

return cljs.core.cst$kw$recur;
} else {
throw e14434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14571 = state_14422;
state_14422 = G__14571;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = function(state_14422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1.call(this,state_14422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__;
})()
;})(__14551,switch__13879__auto__,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
})();
var state__13995__auto__ = (function (){var statearr_14436 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14563);

return statearr_14436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(__14551,c__13993__auto___14563,G__14382_14552,n__7358__auto___14550,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14572 = (__14551 + (1));
__14551 = G__14572;
continue;
} else {
}
break;
}

var c__13993__auto___14573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___14573,jobs,results,process,async){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___14573,jobs,results,process,async){
return (function (state_14458){
var state_val_14459 = (state_14458[(1)]);
if((state_val_14459 === (1))){
var state_14458__$1 = state_14458;
var statearr_14460_14574 = state_14458__$1;
(statearr_14460_14574[(2)] = null);

(statearr_14460_14574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14459 === (2))){
var state_14458__$1 = state_14458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14458__$1,(4),from);
} else {
if((state_val_14459 === (3))){
var inst_14456 = (state_14458[(2)]);
var state_14458__$1 = state_14458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14458__$1,inst_14456);
} else {
if((state_val_14459 === (4))){
var inst_14439 = (state_14458[(7)]);
var inst_14439__$1 = (state_14458[(2)]);
var inst_14440 = (inst_14439__$1 == null);
var state_14458__$1 = (function (){var statearr_14461 = state_14458;
(statearr_14461[(7)] = inst_14439__$1);

return statearr_14461;
})();
if(cljs.core.truth_(inst_14440)){
var statearr_14462_14575 = state_14458__$1;
(statearr_14462_14575[(1)] = (5));

} else {
var statearr_14463_14576 = state_14458__$1;
(statearr_14463_14576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14459 === (5))){
var inst_14442 = cljs.core.async.close_BANG_(jobs);
var state_14458__$1 = state_14458;
var statearr_14464_14577 = state_14458__$1;
(statearr_14464_14577[(2)] = inst_14442);

(statearr_14464_14577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14459 === (6))){
var inst_14439 = (state_14458[(7)]);
var inst_14444 = (state_14458[(8)]);
var inst_14444__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14446 = [inst_14439,inst_14444__$1];
var inst_14447 = (new cljs.core.PersistentVector(null,2,(5),inst_14445,inst_14446,null));
var state_14458__$1 = (function (){var statearr_14465 = state_14458;
(statearr_14465[(8)] = inst_14444__$1);

return statearr_14465;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14458__$1,(8),jobs,inst_14447);
} else {
if((state_val_14459 === (7))){
var inst_14454 = (state_14458[(2)]);
var state_14458__$1 = state_14458;
var statearr_14466_14578 = state_14458__$1;
(statearr_14466_14578[(2)] = inst_14454);

(statearr_14466_14578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14459 === (8))){
var inst_14444 = (state_14458[(8)]);
var inst_14449 = (state_14458[(2)]);
var state_14458__$1 = (function (){var statearr_14467 = state_14458;
(statearr_14467[(9)] = inst_14449);

return statearr_14467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14458__$1,(9),results,inst_14444);
} else {
if((state_val_14459 === (9))){
var inst_14451 = (state_14458[(2)]);
var state_14458__$1 = (function (){var statearr_14468 = state_14458;
(statearr_14468[(10)] = inst_14451);

return statearr_14468;
})();
var statearr_14469_14579 = state_14458__$1;
(statearr_14469_14579[(2)] = null);

(statearr_14469_14579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___14573,jobs,results,process,async))
;
return ((function (switch__13879__auto__,c__13993__auto___14573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_14473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__);

(statearr_14473[(1)] = (1));

return statearr_14473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1 = (function (state_14458){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14458);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14474){if((e14474 instanceof Object)){
var ex__13883__auto__ = e14474;
var statearr_14475_14580 = state_14458;
(statearr_14475_14580[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14458);

return cljs.core.cst$kw$recur;
} else {
throw e14474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14581 = state_14458;
state_14458 = G__14581;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = function(state_14458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1.call(this,state_14458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___14573,jobs,results,process,async))
})();
var state__13995__auto__ = (function (){var statearr_14476 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14573);

return statearr_14476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___14573,jobs,results,process,async))
);


var c__13993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto__,jobs,results,process,async){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto__,jobs,results,process,async){
return (function (state_14514){
var state_val_14515 = (state_14514[(1)]);
if((state_val_14515 === (7))){
var inst_14510 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14516_14582 = state_14514__$1;
(statearr_14516_14582[(2)] = inst_14510);

(statearr_14516_14582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (20))){
var state_14514__$1 = state_14514;
var statearr_14517_14583 = state_14514__$1;
(statearr_14517_14583[(2)] = null);

(statearr_14517_14583[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (1))){
var state_14514__$1 = state_14514;
var statearr_14518_14584 = state_14514__$1;
(statearr_14518_14584[(2)] = null);

(statearr_14518_14584[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (4))){
var inst_14479 = (state_14514[(7)]);
var inst_14479__$1 = (state_14514[(2)]);
var inst_14480 = (inst_14479__$1 == null);
var state_14514__$1 = (function (){var statearr_14519 = state_14514;
(statearr_14519[(7)] = inst_14479__$1);

return statearr_14519;
})();
if(cljs.core.truth_(inst_14480)){
var statearr_14520_14585 = state_14514__$1;
(statearr_14520_14585[(1)] = (5));

} else {
var statearr_14521_14586 = state_14514__$1;
(statearr_14521_14586[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (15))){
var inst_14492 = (state_14514[(8)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14514__$1,(18),to,inst_14492);
} else {
if((state_val_14515 === (21))){
var inst_14505 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14522_14587 = state_14514__$1;
(statearr_14522_14587[(2)] = inst_14505);

(statearr_14522_14587[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (13))){
var inst_14507 = (state_14514[(2)]);
var state_14514__$1 = (function (){var statearr_14523 = state_14514;
(statearr_14523[(9)] = inst_14507);

return statearr_14523;
})();
var statearr_14524_14588 = state_14514__$1;
(statearr_14524_14588[(2)] = null);

(statearr_14524_14588[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (6))){
var inst_14479 = (state_14514[(7)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14514__$1,(11),inst_14479);
} else {
if((state_val_14515 === (17))){
var inst_14500 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
if(cljs.core.truth_(inst_14500)){
var statearr_14525_14589 = state_14514__$1;
(statearr_14525_14589[(1)] = (19));

} else {
var statearr_14526_14590 = state_14514__$1;
(statearr_14526_14590[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (3))){
var inst_14512 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14514__$1,inst_14512);
} else {
if((state_val_14515 === (12))){
var inst_14489 = (state_14514[(10)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14514__$1,(14),inst_14489);
} else {
if((state_val_14515 === (2))){
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14514__$1,(4),results);
} else {
if((state_val_14515 === (19))){
var state_14514__$1 = state_14514;
var statearr_14527_14591 = state_14514__$1;
(statearr_14527_14591[(2)] = null);

(statearr_14527_14591[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (11))){
var inst_14489 = (state_14514[(2)]);
var state_14514__$1 = (function (){var statearr_14528 = state_14514;
(statearr_14528[(10)] = inst_14489);

return statearr_14528;
})();
var statearr_14529_14592 = state_14514__$1;
(statearr_14529_14592[(2)] = null);

(statearr_14529_14592[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (9))){
var state_14514__$1 = state_14514;
var statearr_14530_14593 = state_14514__$1;
(statearr_14530_14593[(2)] = null);

(statearr_14530_14593[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (5))){
var state_14514__$1 = state_14514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14531_14594 = state_14514__$1;
(statearr_14531_14594[(1)] = (8));

} else {
var statearr_14532_14595 = state_14514__$1;
(statearr_14532_14595[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (14))){
var inst_14494 = (state_14514[(11)]);
var inst_14492 = (state_14514[(8)]);
var inst_14492__$1 = (state_14514[(2)]);
var inst_14493 = (inst_14492__$1 == null);
var inst_14494__$1 = cljs.core.not(inst_14493);
var state_14514__$1 = (function (){var statearr_14533 = state_14514;
(statearr_14533[(11)] = inst_14494__$1);

(statearr_14533[(8)] = inst_14492__$1);

return statearr_14533;
})();
if(inst_14494__$1){
var statearr_14534_14596 = state_14514__$1;
(statearr_14534_14596[(1)] = (15));

} else {
var statearr_14535_14597 = state_14514__$1;
(statearr_14535_14597[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (16))){
var inst_14494 = (state_14514[(11)]);
var state_14514__$1 = state_14514;
var statearr_14536_14598 = state_14514__$1;
(statearr_14536_14598[(2)] = inst_14494);

(statearr_14536_14598[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (10))){
var inst_14486 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14537_14599 = state_14514__$1;
(statearr_14537_14599[(2)] = inst_14486);

(statearr_14537_14599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (18))){
var inst_14497 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14538_14600 = state_14514__$1;
(statearr_14538_14600[(2)] = inst_14497);

(statearr_14538_14600[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14515 === (8))){
var inst_14483 = cljs.core.async.close_BANG_(to);
var state_14514__$1 = state_14514;
var statearr_14539_14601 = state_14514__$1;
(statearr_14539_14601[(2)] = inst_14483);

(statearr_14539_14601[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto__,jobs,results,process,async))
;
return ((function (switch__13879__auto__,c__13993__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_14543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__);

(statearr_14543[(1)] = (1));

return statearr_14543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1 = (function (state_14514){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14514);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14544){if((e14544 instanceof Object)){
var ex__13883__auto__ = e14544;
var statearr_14545_14602 = state_14514;
(statearr_14545_14602[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14514);

return cljs.core.cst$kw$recur;
} else {
throw e14544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14603 = state_14514;
state_14514 = G__14603;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__ = function(state_14514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1.call(this,state_14514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto__,jobs,results,process,async))
})();
var state__13995__auto__ = (function (){var statearr_14546 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto__);

return statearr_14546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto__,jobs,results,process,async))
);

return c__13993__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14604 = [];
var len__7513__auto___14607 = arguments.length;
var i__7514__auto___14608 = (0);
while(true){
if((i__7514__auto___14608 < len__7513__auto___14607)){
args14604.push((arguments[i__7514__auto___14608]));

var G__14609 = (i__7514__auto___14608 + (1));
i__7514__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var G__14606 = args14604.length;
switch (G__14606) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14604.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14611 = [];
var len__7513__auto___14614 = arguments.length;
var i__7514__auto___14615 = (0);
while(true){
if((i__7514__auto___14615 < len__7513__auto___14614)){
args14611.push((arguments[i__7514__auto___14615]));

var G__14616 = (i__7514__auto___14615 + (1));
i__7514__auto___14615 = G__14616;
continue;
} else {
}
break;
}

var G__14613 = args14611.length;
switch (G__14613) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14611.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14618 = [];
var len__7513__auto___14671 = arguments.length;
var i__7514__auto___14672 = (0);
while(true){
if((i__7514__auto___14672 < len__7513__auto___14671)){
args14618.push((arguments[i__7514__auto___14672]));

var G__14673 = (i__7514__auto___14672 + (1));
i__7514__auto___14672 = G__14673;
continue;
} else {
}
break;
}

var G__14620 = args14618.length;
switch (G__14620) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14618.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13993__auto___14675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___14675,tc,fc){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___14675,tc,fc){
return (function (state_14646){
var state_val_14647 = (state_14646[(1)]);
if((state_val_14647 === (7))){
var inst_14642 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14648_14676 = state_14646__$1;
(statearr_14648_14676[(2)] = inst_14642);

(statearr_14648_14676[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (1))){
var state_14646__$1 = state_14646;
var statearr_14649_14677 = state_14646__$1;
(statearr_14649_14677[(2)] = null);

(statearr_14649_14677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (4))){
var inst_14623 = (state_14646[(7)]);
var inst_14623__$1 = (state_14646[(2)]);
var inst_14624 = (inst_14623__$1 == null);
var state_14646__$1 = (function (){var statearr_14650 = state_14646;
(statearr_14650[(7)] = inst_14623__$1);

return statearr_14650;
})();
if(cljs.core.truth_(inst_14624)){
var statearr_14651_14678 = state_14646__$1;
(statearr_14651_14678[(1)] = (5));

} else {
var statearr_14652_14679 = state_14646__$1;
(statearr_14652_14679[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (13))){
var state_14646__$1 = state_14646;
var statearr_14653_14680 = state_14646__$1;
(statearr_14653_14680[(2)] = null);

(statearr_14653_14680[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (6))){
var inst_14623 = (state_14646[(7)]);
var inst_14629 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14623) : p.call(null,inst_14623));
var state_14646__$1 = state_14646;
if(cljs.core.truth_(inst_14629)){
var statearr_14654_14681 = state_14646__$1;
(statearr_14654_14681[(1)] = (9));

} else {
var statearr_14655_14682 = state_14646__$1;
(statearr_14655_14682[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (3))){
var inst_14644 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14646__$1,inst_14644);
} else {
if((state_val_14647 === (12))){
var state_14646__$1 = state_14646;
var statearr_14656_14683 = state_14646__$1;
(statearr_14656_14683[(2)] = null);

(statearr_14656_14683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (2))){
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14646__$1,(4),ch);
} else {
if((state_val_14647 === (11))){
var inst_14623 = (state_14646[(7)]);
var inst_14633 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14646__$1,(8),inst_14633,inst_14623);
} else {
if((state_val_14647 === (9))){
var state_14646__$1 = state_14646;
var statearr_14657_14684 = state_14646__$1;
(statearr_14657_14684[(2)] = tc);

(statearr_14657_14684[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (5))){
var inst_14626 = cljs.core.async.close_BANG_(tc);
var inst_14627 = cljs.core.async.close_BANG_(fc);
var state_14646__$1 = (function (){var statearr_14658 = state_14646;
(statearr_14658[(8)] = inst_14626);

return statearr_14658;
})();
var statearr_14659_14685 = state_14646__$1;
(statearr_14659_14685[(2)] = inst_14627);

(statearr_14659_14685[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (14))){
var inst_14640 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14660_14686 = state_14646__$1;
(statearr_14660_14686[(2)] = inst_14640);

(statearr_14660_14686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (10))){
var state_14646__$1 = state_14646;
var statearr_14661_14687 = state_14646__$1;
(statearr_14661_14687[(2)] = fc);

(statearr_14661_14687[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14647 === (8))){
var inst_14635 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
if(cljs.core.truth_(inst_14635)){
var statearr_14662_14688 = state_14646__$1;
(statearr_14662_14688[(1)] = (12));

} else {
var statearr_14663_14689 = state_14646__$1;
(statearr_14663_14689[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___14675,tc,fc))
;
return ((function (switch__13879__auto__,c__13993__auto___14675,tc,fc){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_14667 = [null,null,null,null,null,null,null,null,null];
(statearr_14667[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_14667[(1)] = (1));

return statearr_14667;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_14646){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14646);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14668){if((e14668 instanceof Object)){
var ex__13883__auto__ = e14668;
var statearr_14669_14690 = state_14646;
(statearr_14669_14690[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14646);

return cljs.core.cst$kw$recur;
} else {
throw e14668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14691 = state_14646;
state_14646 = G__14691;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_14646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_14646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___14675,tc,fc))
})();
var state__13995__auto__ = (function (){var statearr_14670 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___14675);

return statearr_14670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___14675,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto__){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto__){
return (function (state_14755){
var state_val_14756 = (state_14755[(1)]);
if((state_val_14756 === (7))){
var inst_14751 = (state_14755[(2)]);
var state_14755__$1 = state_14755;
var statearr_14757_14778 = state_14755__$1;
(statearr_14757_14778[(2)] = inst_14751);

(statearr_14757_14778[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (1))){
var inst_14735 = init;
var state_14755__$1 = (function (){var statearr_14758 = state_14755;
(statearr_14758[(7)] = inst_14735);

return statearr_14758;
})();
var statearr_14759_14779 = state_14755__$1;
(statearr_14759_14779[(2)] = null);

(statearr_14759_14779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (4))){
var inst_14738 = (state_14755[(8)]);
var inst_14738__$1 = (state_14755[(2)]);
var inst_14739 = (inst_14738__$1 == null);
var state_14755__$1 = (function (){var statearr_14760 = state_14755;
(statearr_14760[(8)] = inst_14738__$1);

return statearr_14760;
})();
if(cljs.core.truth_(inst_14739)){
var statearr_14761_14780 = state_14755__$1;
(statearr_14761_14780[(1)] = (5));

} else {
var statearr_14762_14781 = state_14755__$1;
(statearr_14762_14781[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (6))){
var inst_14742 = (state_14755[(9)]);
var inst_14738 = (state_14755[(8)]);
var inst_14735 = (state_14755[(7)]);
var inst_14742__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14735,inst_14738) : f.call(null,inst_14735,inst_14738));
var inst_14743 = cljs.core.reduced_QMARK_(inst_14742__$1);
var state_14755__$1 = (function (){var statearr_14763 = state_14755;
(statearr_14763[(9)] = inst_14742__$1);

return statearr_14763;
})();
if(inst_14743){
var statearr_14764_14782 = state_14755__$1;
(statearr_14764_14782[(1)] = (8));

} else {
var statearr_14765_14783 = state_14755__$1;
(statearr_14765_14783[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (3))){
var inst_14753 = (state_14755[(2)]);
var state_14755__$1 = state_14755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14755__$1,inst_14753);
} else {
if((state_val_14756 === (2))){
var state_14755__$1 = state_14755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14755__$1,(4),ch);
} else {
if((state_val_14756 === (9))){
var inst_14742 = (state_14755[(9)]);
var inst_14735 = inst_14742;
var state_14755__$1 = (function (){var statearr_14766 = state_14755;
(statearr_14766[(7)] = inst_14735);

return statearr_14766;
})();
var statearr_14767_14784 = state_14755__$1;
(statearr_14767_14784[(2)] = null);

(statearr_14767_14784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (5))){
var inst_14735 = (state_14755[(7)]);
var state_14755__$1 = state_14755;
var statearr_14768_14785 = state_14755__$1;
(statearr_14768_14785[(2)] = inst_14735);

(statearr_14768_14785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (10))){
var inst_14749 = (state_14755[(2)]);
var state_14755__$1 = state_14755;
var statearr_14769_14786 = state_14755__$1;
(statearr_14769_14786[(2)] = inst_14749);

(statearr_14769_14786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14756 === (8))){
var inst_14742 = (state_14755[(9)]);
var inst_14745 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14742) : cljs.core.deref.call(null,inst_14742));
var state_14755__$1 = state_14755;
var statearr_14770_14787 = state_14755__$1;
(statearr_14770_14787[(2)] = inst_14745);

(statearr_14770_14787[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto__))
;
return ((function (switch__13879__auto__,c__13993__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13880__auto____0 = (function (){
var statearr_14774 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14774[(0)] = cljs$core$async$reduce_$_state_machine__13880__auto__);

(statearr_14774[(1)] = (1));

return statearr_14774;
});
var cljs$core$async$reduce_$_state_machine__13880__auto____1 = (function (state_14755){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14755);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14775){if((e14775 instanceof Object)){
var ex__13883__auto__ = e14775;
var statearr_14776_14788 = state_14755;
(statearr_14776_14788[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14755);

return cljs.core.cst$kw$recur;
} else {
throw e14775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14789 = state_14755;
state_14755 = G__14789;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13880__auto__ = function(state_14755){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13880__auto____1.call(this,state_14755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13880__auto____0;
cljs$core$async$reduce_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13880__auto____1;
return cljs$core$async$reduce_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto__))
})();
var state__13995__auto__ = (function (){var statearr_14777 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto__);

return statearr_14777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto__))
);

return c__13993__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14790 = [];
var len__7513__auto___14842 = arguments.length;
var i__7514__auto___14843 = (0);
while(true){
if((i__7514__auto___14843 < len__7513__auto___14842)){
args14790.push((arguments[i__7514__auto___14843]));

var G__14844 = (i__7514__auto___14843 + (1));
i__7514__auto___14843 = G__14844;
continue;
} else {
}
break;
}

var G__14792 = args14790.length;
switch (G__14792) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14790.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto__){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto__){
return (function (state_14817){
var state_val_14818 = (state_14817[(1)]);
if((state_val_14818 === (7))){
var inst_14799 = (state_14817[(2)]);
var state_14817__$1 = state_14817;
var statearr_14819_14846 = state_14817__$1;
(statearr_14819_14846[(2)] = inst_14799);

(statearr_14819_14846[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (1))){
var inst_14793 = cljs.core.seq(coll);
var inst_14794 = inst_14793;
var state_14817__$1 = (function (){var statearr_14820 = state_14817;
(statearr_14820[(7)] = inst_14794);

return statearr_14820;
})();
var statearr_14821_14847 = state_14817__$1;
(statearr_14821_14847[(2)] = null);

(statearr_14821_14847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (4))){
var inst_14794 = (state_14817[(7)]);
var inst_14797 = cljs.core.first(inst_14794);
var state_14817__$1 = state_14817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14817__$1,(7),ch,inst_14797);
} else {
if((state_val_14818 === (13))){
var inst_14811 = (state_14817[(2)]);
var state_14817__$1 = state_14817;
var statearr_14822_14848 = state_14817__$1;
(statearr_14822_14848[(2)] = inst_14811);

(statearr_14822_14848[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (6))){
var inst_14802 = (state_14817[(2)]);
var state_14817__$1 = state_14817;
if(cljs.core.truth_(inst_14802)){
var statearr_14823_14849 = state_14817__$1;
(statearr_14823_14849[(1)] = (8));

} else {
var statearr_14824_14850 = state_14817__$1;
(statearr_14824_14850[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (3))){
var inst_14815 = (state_14817[(2)]);
var state_14817__$1 = state_14817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14817__$1,inst_14815);
} else {
if((state_val_14818 === (12))){
var state_14817__$1 = state_14817;
var statearr_14825_14851 = state_14817__$1;
(statearr_14825_14851[(2)] = null);

(statearr_14825_14851[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (2))){
var inst_14794 = (state_14817[(7)]);
var state_14817__$1 = state_14817;
if(cljs.core.truth_(inst_14794)){
var statearr_14826_14852 = state_14817__$1;
(statearr_14826_14852[(1)] = (4));

} else {
var statearr_14827_14853 = state_14817__$1;
(statearr_14827_14853[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (11))){
var inst_14808 = cljs.core.async.close_BANG_(ch);
var state_14817__$1 = state_14817;
var statearr_14828_14854 = state_14817__$1;
(statearr_14828_14854[(2)] = inst_14808);

(statearr_14828_14854[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (9))){
var state_14817__$1 = state_14817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14829_14855 = state_14817__$1;
(statearr_14829_14855[(1)] = (11));

} else {
var statearr_14830_14856 = state_14817__$1;
(statearr_14830_14856[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (5))){
var inst_14794 = (state_14817[(7)]);
var state_14817__$1 = state_14817;
var statearr_14831_14857 = state_14817__$1;
(statearr_14831_14857[(2)] = inst_14794);

(statearr_14831_14857[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (10))){
var inst_14813 = (state_14817[(2)]);
var state_14817__$1 = state_14817;
var statearr_14832_14858 = state_14817__$1;
(statearr_14832_14858[(2)] = inst_14813);

(statearr_14832_14858[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14818 === (8))){
var inst_14794 = (state_14817[(7)]);
var inst_14804 = cljs.core.next(inst_14794);
var inst_14794__$1 = inst_14804;
var state_14817__$1 = (function (){var statearr_14833 = state_14817;
(statearr_14833[(7)] = inst_14794__$1);

return statearr_14833;
})();
var statearr_14834_14859 = state_14817__$1;
(statearr_14834_14859[(2)] = null);

(statearr_14834_14859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto__))
;
return ((function (switch__13879__auto__,c__13993__auto__){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_14838 = [null,null,null,null,null,null,null,null];
(statearr_14838[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_14838[(1)] = (1));

return statearr_14838;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_14817){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_14817);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e14839){if((e14839 instanceof Object)){
var ex__13883__auto__ = e14839;
var statearr_14840_14860 = state_14817;
(statearr_14840_14860[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14817);

return cljs.core.cst$kw$recur;
} else {
throw e14839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__14861 = state_14817;
state_14817 = G__14861;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_14817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_14817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto__))
})();
var state__13995__auto__ = (function (){var statearr_14841 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_14841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto__);

return statearr_14841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto__))
);

return c__13993__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7110__auto__ = (((_ == null))?null:_);
var m__7111__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7111__auto__.call(null,_));
} else {
var m__7111__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7111__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7111__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7111__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7111__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto__.call(null,m,ch));
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7111__auto__.call(null,m));
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7111__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15086 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15086) : cljs.core.atom.call(null,G__15086));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15087 = (function (mult,ch,cs,meta15088){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15088 = meta15088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15089,meta15088__$1){
var self__ = this;
var _15089__$1 = this;
return (new cljs.core.async.t_cljs$core$async15087(self__.mult,self__.ch,self__.cs,meta15088__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15089){
var self__ = this;
var _15089__$1 = this;
return self__.meta15088;
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15090_15310 = self__.cs;
var G__15091_15311 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15090_15310,G__15091_15311) : cljs.core.reset_BANG_.call(null,G__15090_15310,G__15091_15311));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15088], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15087";

cljs.core.async.t_cljs$core$async15087.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15087");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15087 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15087(mult__$1,ch__$1,cs__$1,meta15088){
return (new cljs.core.async.t_cljs$core$async15087(mult__$1,ch__$1,cs__$1,meta15088));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15087(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13993__auto___15312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___15312,cs,m,dchan,dctr,done){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___15312,cs,m,dchan,dctr,done){
return (function (state_15222){
var state_val_15223 = (state_15222[(1)]);
if((state_val_15223 === (7))){
var inst_15218 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15224_15313 = state_15222__$1;
(statearr_15224_15313[(2)] = inst_15218);

(statearr_15224_15313[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (20))){
var inst_15123 = (state_15222[(7)]);
var inst_15133 = cljs.core.first(inst_15123);
var inst_15134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15133,(0),null);
var inst_15135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15133,(1),null);
var state_15222__$1 = (function (){var statearr_15225 = state_15222;
(statearr_15225[(8)] = inst_15134);

return statearr_15225;
})();
if(cljs.core.truth_(inst_15135)){
var statearr_15226_15314 = state_15222__$1;
(statearr_15226_15314[(1)] = (22));

} else {
var statearr_15227_15315 = state_15222__$1;
(statearr_15227_15315[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (27))){
var inst_15165 = (state_15222[(9)]);
var inst_15163 = (state_15222[(10)]);
var inst_15094 = (state_15222[(11)]);
var inst_15170 = (state_15222[(12)]);
var inst_15170__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15163,inst_15165);
var inst_15171 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15170__$1,inst_15094,done);
var state_15222__$1 = (function (){var statearr_15228 = state_15222;
(statearr_15228[(12)] = inst_15170__$1);

return statearr_15228;
})();
if(cljs.core.truth_(inst_15171)){
var statearr_15229_15316 = state_15222__$1;
(statearr_15229_15316[(1)] = (30));

} else {
var statearr_15230_15317 = state_15222__$1;
(statearr_15230_15317[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (1))){
var state_15222__$1 = state_15222;
var statearr_15231_15318 = state_15222__$1;
(statearr_15231_15318[(2)] = null);

(statearr_15231_15318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (24))){
var inst_15123 = (state_15222[(7)]);
var inst_15140 = (state_15222[(2)]);
var inst_15141 = cljs.core.next(inst_15123);
var inst_15103 = inst_15141;
var inst_15104 = null;
var inst_15105 = (0);
var inst_15106 = (0);
var state_15222__$1 = (function (){var statearr_15232 = state_15222;
(statearr_15232[(13)] = inst_15140);

(statearr_15232[(14)] = inst_15103);

(statearr_15232[(15)] = inst_15106);

(statearr_15232[(16)] = inst_15105);

(statearr_15232[(17)] = inst_15104);

return statearr_15232;
})();
var statearr_15233_15319 = state_15222__$1;
(statearr_15233_15319[(2)] = null);

(statearr_15233_15319[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (39))){
var state_15222__$1 = state_15222;
var statearr_15237_15320 = state_15222__$1;
(statearr_15237_15320[(2)] = null);

(statearr_15237_15320[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (4))){
var inst_15094 = (state_15222[(11)]);
var inst_15094__$1 = (state_15222[(2)]);
var inst_15095 = (inst_15094__$1 == null);
var state_15222__$1 = (function (){var statearr_15238 = state_15222;
(statearr_15238[(11)] = inst_15094__$1);

return statearr_15238;
})();
if(cljs.core.truth_(inst_15095)){
var statearr_15239_15321 = state_15222__$1;
(statearr_15239_15321[(1)] = (5));

} else {
var statearr_15240_15322 = state_15222__$1;
(statearr_15240_15322[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (15))){
var inst_15103 = (state_15222[(14)]);
var inst_15106 = (state_15222[(15)]);
var inst_15105 = (state_15222[(16)]);
var inst_15104 = (state_15222[(17)]);
var inst_15119 = (state_15222[(2)]);
var inst_15120 = (inst_15106 + (1));
var tmp15234 = inst_15103;
var tmp15235 = inst_15105;
var tmp15236 = inst_15104;
var inst_15103__$1 = tmp15234;
var inst_15104__$1 = tmp15236;
var inst_15105__$1 = tmp15235;
var inst_15106__$1 = inst_15120;
var state_15222__$1 = (function (){var statearr_15241 = state_15222;
(statearr_15241[(18)] = inst_15119);

(statearr_15241[(14)] = inst_15103__$1);

(statearr_15241[(15)] = inst_15106__$1);

(statearr_15241[(16)] = inst_15105__$1);

(statearr_15241[(17)] = inst_15104__$1);

return statearr_15241;
})();
var statearr_15242_15323 = state_15222__$1;
(statearr_15242_15323[(2)] = null);

(statearr_15242_15323[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (21))){
var inst_15144 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15246_15324 = state_15222__$1;
(statearr_15246_15324[(2)] = inst_15144);

(statearr_15246_15324[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (31))){
var inst_15170 = (state_15222[(12)]);
var inst_15174 = done(null);
var inst_15175 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15170);
var state_15222__$1 = (function (){var statearr_15247 = state_15222;
(statearr_15247[(19)] = inst_15174);

return statearr_15247;
})();
var statearr_15248_15325 = state_15222__$1;
(statearr_15248_15325[(2)] = inst_15175);

(statearr_15248_15325[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (32))){
var inst_15165 = (state_15222[(9)]);
var inst_15163 = (state_15222[(10)]);
var inst_15164 = (state_15222[(20)]);
var inst_15162 = (state_15222[(21)]);
var inst_15177 = (state_15222[(2)]);
var inst_15178 = (inst_15165 + (1));
var tmp15243 = inst_15163;
var tmp15244 = inst_15164;
var tmp15245 = inst_15162;
var inst_15162__$1 = tmp15245;
var inst_15163__$1 = tmp15243;
var inst_15164__$1 = tmp15244;
var inst_15165__$1 = inst_15178;
var state_15222__$1 = (function (){var statearr_15249 = state_15222;
(statearr_15249[(9)] = inst_15165__$1);

(statearr_15249[(10)] = inst_15163__$1);

(statearr_15249[(20)] = inst_15164__$1);

(statearr_15249[(21)] = inst_15162__$1);

(statearr_15249[(22)] = inst_15177);

return statearr_15249;
})();
var statearr_15250_15326 = state_15222__$1;
(statearr_15250_15326[(2)] = null);

(statearr_15250_15326[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (40))){
var inst_15190 = (state_15222[(23)]);
var inst_15194 = done(null);
var inst_15195 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15190);
var state_15222__$1 = (function (){var statearr_15251 = state_15222;
(statearr_15251[(24)] = inst_15194);

return statearr_15251;
})();
var statearr_15252_15327 = state_15222__$1;
(statearr_15252_15327[(2)] = inst_15195);

(statearr_15252_15327[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (33))){
var inst_15181 = (state_15222[(25)]);
var inst_15183 = cljs.core.chunked_seq_QMARK_(inst_15181);
var state_15222__$1 = state_15222;
if(inst_15183){
var statearr_15253_15328 = state_15222__$1;
(statearr_15253_15328[(1)] = (36));

} else {
var statearr_15254_15329 = state_15222__$1;
(statearr_15254_15329[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (13))){
var inst_15113 = (state_15222[(26)]);
var inst_15116 = cljs.core.async.close_BANG_(inst_15113);
var state_15222__$1 = state_15222;
var statearr_15255_15330 = state_15222__$1;
(statearr_15255_15330[(2)] = inst_15116);

(statearr_15255_15330[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (22))){
var inst_15134 = (state_15222[(8)]);
var inst_15137 = cljs.core.async.close_BANG_(inst_15134);
var state_15222__$1 = state_15222;
var statearr_15256_15331 = state_15222__$1;
(statearr_15256_15331[(2)] = inst_15137);

(statearr_15256_15331[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (36))){
var inst_15181 = (state_15222[(25)]);
var inst_15185 = cljs.core.chunk_first(inst_15181);
var inst_15186 = cljs.core.chunk_rest(inst_15181);
var inst_15187 = cljs.core.count(inst_15185);
var inst_15162 = inst_15186;
var inst_15163 = inst_15185;
var inst_15164 = inst_15187;
var inst_15165 = (0);
var state_15222__$1 = (function (){var statearr_15257 = state_15222;
(statearr_15257[(9)] = inst_15165);

(statearr_15257[(10)] = inst_15163);

(statearr_15257[(20)] = inst_15164);

(statearr_15257[(21)] = inst_15162);

return statearr_15257;
})();
var statearr_15258_15332 = state_15222__$1;
(statearr_15258_15332[(2)] = null);

(statearr_15258_15332[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (41))){
var inst_15181 = (state_15222[(25)]);
var inst_15197 = (state_15222[(2)]);
var inst_15198 = cljs.core.next(inst_15181);
var inst_15162 = inst_15198;
var inst_15163 = null;
var inst_15164 = (0);
var inst_15165 = (0);
var state_15222__$1 = (function (){var statearr_15259 = state_15222;
(statearr_15259[(9)] = inst_15165);

(statearr_15259[(10)] = inst_15163);

(statearr_15259[(20)] = inst_15164);

(statearr_15259[(21)] = inst_15162);

(statearr_15259[(27)] = inst_15197);

return statearr_15259;
})();
var statearr_15260_15333 = state_15222__$1;
(statearr_15260_15333[(2)] = null);

(statearr_15260_15333[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (43))){
var state_15222__$1 = state_15222;
var statearr_15261_15334 = state_15222__$1;
(statearr_15261_15334[(2)] = null);

(statearr_15261_15334[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (29))){
var inst_15206 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15262_15335 = state_15222__$1;
(statearr_15262_15335[(2)] = inst_15206);

(statearr_15262_15335[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (44))){
var inst_15215 = (state_15222[(2)]);
var state_15222__$1 = (function (){var statearr_15263 = state_15222;
(statearr_15263[(28)] = inst_15215);

return statearr_15263;
})();
var statearr_15264_15336 = state_15222__$1;
(statearr_15264_15336[(2)] = null);

(statearr_15264_15336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (6))){
var inst_15154 = (state_15222[(29)]);
var inst_15153 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15154__$1 = cljs.core.keys(inst_15153);
var inst_15155 = cljs.core.count(inst_15154__$1);
var inst_15156 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15155) : cljs.core.reset_BANG_.call(null,dctr,inst_15155));
var inst_15161 = cljs.core.seq(inst_15154__$1);
var inst_15162 = inst_15161;
var inst_15163 = null;
var inst_15164 = (0);
var inst_15165 = (0);
var state_15222__$1 = (function (){var statearr_15265 = state_15222;
(statearr_15265[(9)] = inst_15165);

(statearr_15265[(10)] = inst_15163);

(statearr_15265[(29)] = inst_15154__$1);

(statearr_15265[(20)] = inst_15164);

(statearr_15265[(30)] = inst_15156);

(statearr_15265[(21)] = inst_15162);

return statearr_15265;
})();
var statearr_15266_15337 = state_15222__$1;
(statearr_15266_15337[(2)] = null);

(statearr_15266_15337[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (28))){
var inst_15181 = (state_15222[(25)]);
var inst_15162 = (state_15222[(21)]);
var inst_15181__$1 = cljs.core.seq(inst_15162);
var state_15222__$1 = (function (){var statearr_15267 = state_15222;
(statearr_15267[(25)] = inst_15181__$1);

return statearr_15267;
})();
if(inst_15181__$1){
var statearr_15268_15338 = state_15222__$1;
(statearr_15268_15338[(1)] = (33));

} else {
var statearr_15269_15339 = state_15222__$1;
(statearr_15269_15339[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (25))){
var inst_15165 = (state_15222[(9)]);
var inst_15164 = (state_15222[(20)]);
var inst_15167 = (inst_15165 < inst_15164);
var inst_15168 = inst_15167;
var state_15222__$1 = state_15222;
if(cljs.core.truth_(inst_15168)){
var statearr_15270_15340 = state_15222__$1;
(statearr_15270_15340[(1)] = (27));

} else {
var statearr_15271_15341 = state_15222__$1;
(statearr_15271_15341[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (34))){
var state_15222__$1 = state_15222;
var statearr_15272_15342 = state_15222__$1;
(statearr_15272_15342[(2)] = null);

(statearr_15272_15342[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (17))){
var state_15222__$1 = state_15222;
var statearr_15273_15343 = state_15222__$1;
(statearr_15273_15343[(2)] = null);

(statearr_15273_15343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (3))){
var inst_15220 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15222__$1,inst_15220);
} else {
if((state_val_15223 === (12))){
var inst_15149 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15274_15344 = state_15222__$1;
(statearr_15274_15344[(2)] = inst_15149);

(statearr_15274_15344[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (2))){
var state_15222__$1 = state_15222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15222__$1,(4),ch);
} else {
if((state_val_15223 === (23))){
var state_15222__$1 = state_15222;
var statearr_15275_15345 = state_15222__$1;
(statearr_15275_15345[(2)] = null);

(statearr_15275_15345[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (35))){
var inst_15204 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15276_15346 = state_15222__$1;
(statearr_15276_15346[(2)] = inst_15204);

(statearr_15276_15346[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (19))){
var inst_15123 = (state_15222[(7)]);
var inst_15127 = cljs.core.chunk_first(inst_15123);
var inst_15128 = cljs.core.chunk_rest(inst_15123);
var inst_15129 = cljs.core.count(inst_15127);
var inst_15103 = inst_15128;
var inst_15104 = inst_15127;
var inst_15105 = inst_15129;
var inst_15106 = (0);
var state_15222__$1 = (function (){var statearr_15277 = state_15222;
(statearr_15277[(14)] = inst_15103);

(statearr_15277[(15)] = inst_15106);

(statearr_15277[(16)] = inst_15105);

(statearr_15277[(17)] = inst_15104);

return statearr_15277;
})();
var statearr_15278_15347 = state_15222__$1;
(statearr_15278_15347[(2)] = null);

(statearr_15278_15347[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (11))){
var inst_15103 = (state_15222[(14)]);
var inst_15123 = (state_15222[(7)]);
var inst_15123__$1 = cljs.core.seq(inst_15103);
var state_15222__$1 = (function (){var statearr_15279 = state_15222;
(statearr_15279[(7)] = inst_15123__$1);

return statearr_15279;
})();
if(inst_15123__$1){
var statearr_15280_15348 = state_15222__$1;
(statearr_15280_15348[(1)] = (16));

} else {
var statearr_15281_15349 = state_15222__$1;
(statearr_15281_15349[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (9))){
var inst_15151 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15282_15350 = state_15222__$1;
(statearr_15282_15350[(2)] = inst_15151);

(statearr_15282_15350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (5))){
var inst_15101 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15102 = cljs.core.seq(inst_15101);
var inst_15103 = inst_15102;
var inst_15104 = null;
var inst_15105 = (0);
var inst_15106 = (0);
var state_15222__$1 = (function (){var statearr_15283 = state_15222;
(statearr_15283[(14)] = inst_15103);

(statearr_15283[(15)] = inst_15106);

(statearr_15283[(16)] = inst_15105);

(statearr_15283[(17)] = inst_15104);

return statearr_15283;
})();
var statearr_15284_15351 = state_15222__$1;
(statearr_15284_15351[(2)] = null);

(statearr_15284_15351[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (14))){
var state_15222__$1 = state_15222;
var statearr_15285_15352 = state_15222__$1;
(statearr_15285_15352[(2)] = null);

(statearr_15285_15352[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (45))){
var inst_15212 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15286_15353 = state_15222__$1;
(statearr_15286_15353[(2)] = inst_15212);

(statearr_15286_15353[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (26))){
var inst_15154 = (state_15222[(29)]);
var inst_15208 = (state_15222[(2)]);
var inst_15209 = cljs.core.seq(inst_15154);
var state_15222__$1 = (function (){var statearr_15287 = state_15222;
(statearr_15287[(31)] = inst_15208);

return statearr_15287;
})();
if(inst_15209){
var statearr_15288_15354 = state_15222__$1;
(statearr_15288_15354[(1)] = (42));

} else {
var statearr_15289_15355 = state_15222__$1;
(statearr_15289_15355[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (16))){
var inst_15123 = (state_15222[(7)]);
var inst_15125 = cljs.core.chunked_seq_QMARK_(inst_15123);
var state_15222__$1 = state_15222;
if(inst_15125){
var statearr_15290_15356 = state_15222__$1;
(statearr_15290_15356[(1)] = (19));

} else {
var statearr_15291_15357 = state_15222__$1;
(statearr_15291_15357[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (38))){
var inst_15201 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15292_15358 = state_15222__$1;
(statearr_15292_15358[(2)] = inst_15201);

(statearr_15292_15358[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (30))){
var state_15222__$1 = state_15222;
var statearr_15293_15359 = state_15222__$1;
(statearr_15293_15359[(2)] = null);

(statearr_15293_15359[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (10))){
var inst_15106 = (state_15222[(15)]);
var inst_15104 = (state_15222[(17)]);
var inst_15112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15104,inst_15106);
var inst_15113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15112,(0),null);
var inst_15114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15112,(1),null);
var state_15222__$1 = (function (){var statearr_15294 = state_15222;
(statearr_15294[(26)] = inst_15113);

return statearr_15294;
})();
if(cljs.core.truth_(inst_15114)){
var statearr_15295_15360 = state_15222__$1;
(statearr_15295_15360[(1)] = (13));

} else {
var statearr_15296_15361 = state_15222__$1;
(statearr_15296_15361[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (18))){
var inst_15147 = (state_15222[(2)]);
var state_15222__$1 = state_15222;
var statearr_15297_15362 = state_15222__$1;
(statearr_15297_15362[(2)] = inst_15147);

(statearr_15297_15362[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (42))){
var state_15222__$1 = state_15222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15222__$1,(45),dchan);
} else {
if((state_val_15223 === (37))){
var inst_15181 = (state_15222[(25)]);
var inst_15190 = (state_15222[(23)]);
var inst_15094 = (state_15222[(11)]);
var inst_15190__$1 = cljs.core.first(inst_15181);
var inst_15191 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15190__$1,inst_15094,done);
var state_15222__$1 = (function (){var statearr_15298 = state_15222;
(statearr_15298[(23)] = inst_15190__$1);

return statearr_15298;
})();
if(cljs.core.truth_(inst_15191)){
var statearr_15299_15363 = state_15222__$1;
(statearr_15299_15363[(1)] = (39));

} else {
var statearr_15300_15364 = state_15222__$1;
(statearr_15300_15364[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15223 === (8))){
var inst_15106 = (state_15222[(15)]);
var inst_15105 = (state_15222[(16)]);
var inst_15108 = (inst_15106 < inst_15105);
var inst_15109 = inst_15108;
var state_15222__$1 = state_15222;
if(cljs.core.truth_(inst_15109)){
var statearr_15301_15365 = state_15222__$1;
(statearr_15301_15365[(1)] = (10));

} else {
var statearr_15302_15366 = state_15222__$1;
(statearr_15302_15366[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___15312,cs,m,dchan,dctr,done))
;
return ((function (switch__13879__auto__,c__13993__auto___15312,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13880__auto__ = null;
var cljs$core$async$mult_$_state_machine__13880__auto____0 = (function (){
var statearr_15306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15306[(0)] = cljs$core$async$mult_$_state_machine__13880__auto__);

(statearr_15306[(1)] = (1));

return statearr_15306;
});
var cljs$core$async$mult_$_state_machine__13880__auto____1 = (function (state_15222){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_15222);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e15307){if((e15307 instanceof Object)){
var ex__13883__auto__ = e15307;
var statearr_15308_15367 = state_15222;
(statearr_15308_15367[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15222);

return cljs.core.cst$kw$recur;
} else {
throw e15307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__15368 = state_15222;
state_15222 = G__15368;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13880__auto__ = function(state_15222){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13880__auto____1.call(this,state_15222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13880__auto____0;
cljs$core$async$mult_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13880__auto____1;
return cljs$core$async$mult_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___15312,cs,m,dchan,dctr,done))
})();
var state__13995__auto__ = (function (){var statearr_15309 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_15309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___15312);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___15312,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15369 = [];
var len__7513__auto___15372 = arguments.length;
var i__7514__auto___15373 = (0);
while(true){
if((i__7514__auto___15373 < len__7513__auto___15372)){
args15369.push((arguments[i__7514__auto___15373]));

var G__15374 = (i__7514__auto___15373 + (1));
i__7514__auto___15373 = G__15374;
continue;
} else {
}
break;
}

var G__15371 = args15369.length;
switch (G__15371) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15369.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto__.call(null,m,ch));
} else {
var m__7111__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto__.call(null,m,ch));
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7111__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7111__auto__.call(null,m));
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7111__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7111__auto__.call(null,m,state_map));
} else {
var m__7111__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7111__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7111__auto__.call(null,m,mode));
} else {
var m__7111__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7111__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___15386 = arguments.length;
var i__7514__auto___15387 = (0);
while(true){
if((i__7514__auto___15387 < len__7513__auto___15386)){
args__7520__auto__.push((arguments[i__7514__auto___15387]));

var G__15388 = (i__7514__auto___15387 + (1));
i__7514__auto___15387 = G__15388;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15380){
var map__15381 = p__15380;
var map__15381__$1 = ((((!((map__15381 == null)))?((((map__15381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15381):map__15381);
var opts = map__15381__$1;
var statearr_15383_15389 = state;
(statearr_15383_15389[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__15381,map__15381__$1,opts){
return (function (val){
var statearr_15384_15390 = state;
(statearr_15384_15390[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15381,map__15381__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_15385_15391 = state;
(statearr_15385_15391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15376){
var G__15377 = cljs.core.first(seq15376);
var seq15376__$1 = cljs.core.next(seq15376);
var G__15378 = cljs.core.first(seq15376__$1);
var seq15376__$2 = cljs.core.next(seq15376__$1);
var G__15379 = cljs.core.first(seq15376__$2);
var seq15376__$3 = cljs.core.next(seq15376__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15377,G__15378,G__15379,seq15376__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15558 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15558) : cljs.core.atom.call(null,G__15558));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15559 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15560){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15560 = meta15560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15561,meta15560__$1){
var self__ = this;
var _15561__$1 = this;
return (new cljs.core.async.t_cljs$core$async15559(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15560__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15561){
var self__ = this;
var _15561__$1 = this;
return self__.meta15560;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15562_15724 = self__.cs;
var G__15563_15725 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15562_15724,G__15563_15725) : cljs.core.reset_BANG_.call(null,G__15562_15724,G__15563_15725));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15560], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15559";

cljs.core.async.t_cljs$core$async15559.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15559");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15559 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15559(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15560){
return (new cljs.core.async.t_cljs$core$async15559(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15560));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15559(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13993__auto___15726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15661){
var state_val_15662 = (state_15661[(1)]);
if((state_val_15662 === (7))){
var inst_15579 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15663_15727 = state_15661__$1;
(statearr_15663_15727[(2)] = inst_15579);

(statearr_15663_15727[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (20))){
var inst_15591 = (state_15661[(7)]);
var state_15661__$1 = state_15661;
var statearr_15664_15728 = state_15661__$1;
(statearr_15664_15728[(2)] = inst_15591);

(statearr_15664_15728[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (27))){
var state_15661__$1 = state_15661;
var statearr_15665_15729 = state_15661__$1;
(statearr_15665_15729[(2)] = null);

(statearr_15665_15729[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (1))){
var inst_15567 = (state_15661[(8)]);
var inst_15567__$1 = calc_state();
var inst_15569 = (inst_15567__$1 == null);
var inst_15570 = cljs.core.not(inst_15569);
var state_15661__$1 = (function (){var statearr_15666 = state_15661;
(statearr_15666[(8)] = inst_15567__$1);

return statearr_15666;
})();
if(inst_15570){
var statearr_15667_15730 = state_15661__$1;
(statearr_15667_15730[(1)] = (2));

} else {
var statearr_15668_15731 = state_15661__$1;
(statearr_15668_15731[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (24))){
var inst_15621 = (state_15661[(9)]);
var inst_15614 = (state_15661[(10)]);
var inst_15635 = (state_15661[(11)]);
var inst_15635__$1 = (inst_15614.cljs$core$IFn$_invoke$arity$1 ? inst_15614.cljs$core$IFn$_invoke$arity$1(inst_15621) : inst_15614.call(null,inst_15621));
var state_15661__$1 = (function (){var statearr_15669 = state_15661;
(statearr_15669[(11)] = inst_15635__$1);

return statearr_15669;
})();
if(cljs.core.truth_(inst_15635__$1)){
var statearr_15670_15732 = state_15661__$1;
(statearr_15670_15732[(1)] = (29));

} else {
var statearr_15671_15733 = state_15661__$1;
(statearr_15671_15733[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (4))){
var inst_15582 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15582)){
var statearr_15672_15734 = state_15661__$1;
(statearr_15672_15734[(1)] = (8));

} else {
var statearr_15673_15735 = state_15661__$1;
(statearr_15673_15735[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (15))){
var inst_15608 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15608)){
var statearr_15674_15736 = state_15661__$1;
(statearr_15674_15736[(1)] = (19));

} else {
var statearr_15675_15737 = state_15661__$1;
(statearr_15675_15737[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (21))){
var inst_15613 = (state_15661[(12)]);
var inst_15613__$1 = (state_15661[(2)]);
var inst_15614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15613__$1,cljs.core.cst$kw$solos);
var inst_15615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15613__$1,cljs.core.cst$kw$mutes);
var inst_15616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15613__$1,cljs.core.cst$kw$reads);
var state_15661__$1 = (function (){var statearr_15676 = state_15661;
(statearr_15676[(12)] = inst_15613__$1);

(statearr_15676[(13)] = inst_15615);

(statearr_15676[(10)] = inst_15614);

return statearr_15676;
})();
return cljs.core.async.ioc_alts_BANG_(state_15661__$1,(22),inst_15616);
} else {
if((state_val_15662 === (31))){
var inst_15643 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15643)){
var statearr_15677_15738 = state_15661__$1;
(statearr_15677_15738[(1)] = (32));

} else {
var statearr_15678_15739 = state_15661__$1;
(statearr_15678_15739[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (32))){
var inst_15620 = (state_15661[(14)]);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15661__$1,(35),out,inst_15620);
} else {
if((state_val_15662 === (33))){
var inst_15613 = (state_15661[(12)]);
var inst_15591 = inst_15613;
var state_15661__$1 = (function (){var statearr_15679 = state_15661;
(statearr_15679[(7)] = inst_15591);

return statearr_15679;
})();
var statearr_15680_15740 = state_15661__$1;
(statearr_15680_15740[(2)] = null);

(statearr_15680_15740[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (13))){
var inst_15591 = (state_15661[(7)]);
var inst_15598 = inst_15591.cljs$lang$protocol_mask$partition0$;
var inst_15599 = (inst_15598 & (64));
var inst_15600 = inst_15591.cljs$core$ISeq$;
var inst_15601 = (inst_15599) || (inst_15600);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15601)){
var statearr_15681_15741 = state_15661__$1;
(statearr_15681_15741[(1)] = (16));

} else {
var statearr_15682_15742 = state_15661__$1;
(statearr_15682_15742[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (22))){
var inst_15621 = (state_15661[(9)]);
var inst_15620 = (state_15661[(14)]);
var inst_15619 = (state_15661[(2)]);
var inst_15620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15619,(0),null);
var inst_15621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15619,(1),null);
var inst_15622 = (inst_15620__$1 == null);
var inst_15623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15621__$1,change);
var inst_15624 = (inst_15622) || (inst_15623);
var state_15661__$1 = (function (){var statearr_15683 = state_15661;
(statearr_15683[(9)] = inst_15621__$1);

(statearr_15683[(14)] = inst_15620__$1);

return statearr_15683;
})();
if(cljs.core.truth_(inst_15624)){
var statearr_15684_15743 = state_15661__$1;
(statearr_15684_15743[(1)] = (23));

} else {
var statearr_15685_15744 = state_15661__$1;
(statearr_15685_15744[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (36))){
var inst_15613 = (state_15661[(12)]);
var inst_15591 = inst_15613;
var state_15661__$1 = (function (){var statearr_15686 = state_15661;
(statearr_15686[(7)] = inst_15591);

return statearr_15686;
})();
var statearr_15687_15745 = state_15661__$1;
(statearr_15687_15745[(2)] = null);

(statearr_15687_15745[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (29))){
var inst_15635 = (state_15661[(11)]);
var state_15661__$1 = state_15661;
var statearr_15688_15746 = state_15661__$1;
(statearr_15688_15746[(2)] = inst_15635);

(statearr_15688_15746[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (6))){
var state_15661__$1 = state_15661;
var statearr_15689_15747 = state_15661__$1;
(statearr_15689_15747[(2)] = false);

(statearr_15689_15747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (28))){
var inst_15631 = (state_15661[(2)]);
var inst_15632 = calc_state();
var inst_15591 = inst_15632;
var state_15661__$1 = (function (){var statearr_15690 = state_15661;
(statearr_15690[(15)] = inst_15631);

(statearr_15690[(7)] = inst_15591);

return statearr_15690;
})();
var statearr_15691_15748 = state_15661__$1;
(statearr_15691_15748[(2)] = null);

(statearr_15691_15748[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (25))){
var inst_15657 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15692_15749 = state_15661__$1;
(statearr_15692_15749[(2)] = inst_15657);

(statearr_15692_15749[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (34))){
var inst_15655 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15693_15750 = state_15661__$1;
(statearr_15693_15750[(2)] = inst_15655);

(statearr_15693_15750[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (17))){
var state_15661__$1 = state_15661;
var statearr_15694_15751 = state_15661__$1;
(statearr_15694_15751[(2)] = false);

(statearr_15694_15751[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (3))){
var state_15661__$1 = state_15661;
var statearr_15695_15752 = state_15661__$1;
(statearr_15695_15752[(2)] = false);

(statearr_15695_15752[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (12))){
var inst_15659 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15661__$1,inst_15659);
} else {
if((state_val_15662 === (2))){
var inst_15567 = (state_15661[(8)]);
var inst_15572 = inst_15567.cljs$lang$protocol_mask$partition0$;
var inst_15573 = (inst_15572 & (64));
var inst_15574 = inst_15567.cljs$core$ISeq$;
var inst_15575 = (inst_15573) || (inst_15574);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15575)){
var statearr_15696_15753 = state_15661__$1;
(statearr_15696_15753[(1)] = (5));

} else {
var statearr_15697_15754 = state_15661__$1;
(statearr_15697_15754[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (23))){
var inst_15620 = (state_15661[(14)]);
var inst_15626 = (inst_15620 == null);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15626)){
var statearr_15698_15755 = state_15661__$1;
(statearr_15698_15755[(1)] = (26));

} else {
var statearr_15699_15756 = state_15661__$1;
(statearr_15699_15756[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (35))){
var inst_15646 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15646)){
var statearr_15700_15757 = state_15661__$1;
(statearr_15700_15757[(1)] = (36));

} else {
var statearr_15701_15758 = state_15661__$1;
(statearr_15701_15758[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (19))){
var inst_15591 = (state_15661[(7)]);
var inst_15610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15591);
var state_15661__$1 = state_15661;
var statearr_15702_15759 = state_15661__$1;
(statearr_15702_15759[(2)] = inst_15610);

(statearr_15702_15759[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (11))){
var inst_15591 = (state_15661[(7)]);
var inst_15595 = (inst_15591 == null);
var inst_15596 = cljs.core.not(inst_15595);
var state_15661__$1 = state_15661;
if(inst_15596){
var statearr_15703_15760 = state_15661__$1;
(statearr_15703_15760[(1)] = (13));

} else {
var statearr_15704_15761 = state_15661__$1;
(statearr_15704_15761[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (9))){
var inst_15567 = (state_15661[(8)]);
var state_15661__$1 = state_15661;
var statearr_15705_15762 = state_15661__$1;
(statearr_15705_15762[(2)] = inst_15567);

(statearr_15705_15762[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (5))){
var state_15661__$1 = state_15661;
var statearr_15706_15763 = state_15661__$1;
(statearr_15706_15763[(2)] = true);

(statearr_15706_15763[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (14))){
var state_15661__$1 = state_15661;
var statearr_15707_15764 = state_15661__$1;
(statearr_15707_15764[(2)] = false);

(statearr_15707_15764[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (26))){
var inst_15621 = (state_15661[(9)]);
var inst_15628 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15621);
var state_15661__$1 = state_15661;
var statearr_15708_15765 = state_15661__$1;
(statearr_15708_15765[(2)] = inst_15628);

(statearr_15708_15765[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (16))){
var state_15661__$1 = state_15661;
var statearr_15709_15766 = state_15661__$1;
(statearr_15709_15766[(2)] = true);

(statearr_15709_15766[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (38))){
var inst_15651 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15710_15767 = state_15661__$1;
(statearr_15710_15767[(2)] = inst_15651);

(statearr_15710_15767[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (30))){
var inst_15621 = (state_15661[(9)]);
var inst_15615 = (state_15661[(13)]);
var inst_15614 = (state_15661[(10)]);
var inst_15638 = cljs.core.empty_QMARK_(inst_15614);
var inst_15639 = (inst_15615.cljs$core$IFn$_invoke$arity$1 ? inst_15615.cljs$core$IFn$_invoke$arity$1(inst_15621) : inst_15615.call(null,inst_15621));
var inst_15640 = cljs.core.not(inst_15639);
var inst_15641 = (inst_15638) && (inst_15640);
var state_15661__$1 = state_15661;
var statearr_15711_15768 = state_15661__$1;
(statearr_15711_15768[(2)] = inst_15641);

(statearr_15711_15768[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (10))){
var inst_15567 = (state_15661[(8)]);
var inst_15587 = (state_15661[(2)]);
var inst_15588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15587,cljs.core.cst$kw$solos);
var inst_15589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15587,cljs.core.cst$kw$mutes);
var inst_15590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15587,cljs.core.cst$kw$reads);
var inst_15591 = inst_15567;
var state_15661__$1 = (function (){var statearr_15712 = state_15661;
(statearr_15712[(16)] = inst_15588);

(statearr_15712[(7)] = inst_15591);

(statearr_15712[(17)] = inst_15590);

(statearr_15712[(18)] = inst_15589);

return statearr_15712;
})();
var statearr_15713_15769 = state_15661__$1;
(statearr_15713_15769[(2)] = null);

(statearr_15713_15769[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (18))){
var inst_15605 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15714_15770 = state_15661__$1;
(statearr_15714_15770[(2)] = inst_15605);

(statearr_15714_15770[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (37))){
var state_15661__$1 = state_15661;
var statearr_15715_15771 = state_15661__$1;
(statearr_15715_15771[(2)] = null);

(statearr_15715_15771[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15662 === (8))){
var inst_15567 = (state_15661[(8)]);
var inst_15584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15567);
var state_15661__$1 = state_15661;
var statearr_15716_15772 = state_15661__$1;
(statearr_15716_15772[(2)] = inst_15584);

(statearr_15716_15772[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13879__auto__,c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13880__auto__ = null;
var cljs$core$async$mix_$_state_machine__13880__auto____0 = (function (){
var statearr_15720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15720[(0)] = cljs$core$async$mix_$_state_machine__13880__auto__);

(statearr_15720[(1)] = (1));

return statearr_15720;
});
var cljs$core$async$mix_$_state_machine__13880__auto____1 = (function (state_15661){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_15661);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e15721){if((e15721 instanceof Object)){
var ex__13883__auto__ = e15721;
var statearr_15722_15773 = state_15661;
(statearr_15722_15773[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15661);

return cljs.core.cst$kw$recur;
} else {
throw e15721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__15774 = state_15661;
state_15661 = G__15774;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13880__auto__ = function(state_15661){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13880__auto____1.call(this,state_15661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13880__auto____0;
cljs$core$async$mix_$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13880__auto____1;
return cljs$core$async$mix_$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13995__auto__ = (function (){var statearr_15723 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_15723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___15726);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___15726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7111__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7111__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7111__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7111__auto__.call(null,p,v,ch));
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7111__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15775 = [];
var len__7513__auto___15778 = arguments.length;
var i__7514__auto___15779 = (0);
while(true){
if((i__7514__auto___15779 < len__7513__auto___15778)){
args15775.push((arguments[i__7514__auto___15779]));

var G__15780 = (i__7514__auto___15779 + (1));
i__7514__auto___15779 = G__15780;
continue;
} else {
}
break;
}

var G__15777 = args15775.length;
switch (G__15777) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15775.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7111__auto__.call(null,p));
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7111__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return (m__7111__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7111__auto__.call(null,p,v));
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return (m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7111__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7111__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15783 = [];
var len__7513__auto___15911 = arguments.length;
var i__7514__auto___15912 = (0);
while(true){
if((i__7514__auto___15912 < len__7513__auto___15911)){
args15783.push((arguments[i__7514__auto___15912]));

var G__15913 = (i__7514__auto___15912 + (1));
i__7514__auto___15912 = G__15913;
continue;
} else {
}
break;
}

var G__15785 = args15783.length;
switch (G__15785) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15783.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15786 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15786) : cljs.core.atom.call(null,G__15786));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6455__auto__,mults){
return (function (p1__15782_SHARP_){
if(cljs.core.truth_((p1__15782_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15782_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15782_SHARP_.call(null,topic)))){
return p1__15782_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15782_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15787 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15788){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15788 = meta15788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15789,meta15788__$1){
var self__ = this;
var _15789__$1 = this;
return (new cljs.core.async.t_cljs$core$async15787(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15788__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15789){
var self__ = this;
var _15789__$1 = this;
return self__.meta15788;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15790 = self__.mults;
var G__15791 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15790,G__15791) : cljs.core.reset_BANG_.call(null,G__15790,G__15791));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15788], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15787";

cljs.core.async.t_cljs$core$async15787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15787");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15787 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15788){
return (new cljs.core.async.t_cljs$core$async15787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15788));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15787(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13993__auto___15915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___15915,mults,ensure_mult,p){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___15915,mults,ensure_mult,p){
return (function (state_15863){
var state_val_15864 = (state_15863[(1)]);
if((state_val_15864 === (7))){
var inst_15859 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15865_15916 = state_15863__$1;
(statearr_15865_15916[(2)] = inst_15859);

(statearr_15865_15916[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (20))){
var state_15863__$1 = state_15863;
var statearr_15866_15917 = state_15863__$1;
(statearr_15866_15917[(2)] = null);

(statearr_15866_15917[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (1))){
var state_15863__$1 = state_15863;
var statearr_15867_15918 = state_15863__$1;
(statearr_15867_15918[(2)] = null);

(statearr_15867_15918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (24))){
var inst_15842 = (state_15863[(7)]);
var inst_15851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15842);
var state_15863__$1 = state_15863;
var statearr_15868_15919 = state_15863__$1;
(statearr_15868_15919[(2)] = inst_15851);

(statearr_15868_15919[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (4))){
var inst_15794 = (state_15863[(8)]);
var inst_15794__$1 = (state_15863[(2)]);
var inst_15795 = (inst_15794__$1 == null);
var state_15863__$1 = (function (){var statearr_15869 = state_15863;
(statearr_15869[(8)] = inst_15794__$1);

return statearr_15869;
})();
if(cljs.core.truth_(inst_15795)){
var statearr_15870_15920 = state_15863__$1;
(statearr_15870_15920[(1)] = (5));

} else {
var statearr_15871_15921 = state_15863__$1;
(statearr_15871_15921[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (15))){
var inst_15836 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15872_15922 = state_15863__$1;
(statearr_15872_15922[(2)] = inst_15836);

(statearr_15872_15922[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (21))){
var inst_15856 = (state_15863[(2)]);
var state_15863__$1 = (function (){var statearr_15873 = state_15863;
(statearr_15873[(9)] = inst_15856);

return statearr_15873;
})();
var statearr_15874_15923 = state_15863__$1;
(statearr_15874_15923[(2)] = null);

(statearr_15874_15923[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (13))){
var inst_15818 = (state_15863[(10)]);
var inst_15820 = cljs.core.chunked_seq_QMARK_(inst_15818);
var state_15863__$1 = state_15863;
if(inst_15820){
var statearr_15875_15924 = state_15863__$1;
(statearr_15875_15924[(1)] = (16));

} else {
var statearr_15876_15925 = state_15863__$1;
(statearr_15876_15925[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (22))){
var inst_15848 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15848)){
var statearr_15877_15926 = state_15863__$1;
(statearr_15877_15926[(1)] = (23));

} else {
var statearr_15878_15927 = state_15863__$1;
(statearr_15878_15927[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (6))){
var inst_15842 = (state_15863[(7)]);
var inst_15844 = (state_15863[(11)]);
var inst_15794 = (state_15863[(8)]);
var inst_15842__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15794) : topic_fn.call(null,inst_15794));
var inst_15843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15843,inst_15842__$1);
var state_15863__$1 = (function (){var statearr_15879 = state_15863;
(statearr_15879[(7)] = inst_15842__$1);

(statearr_15879[(11)] = inst_15844__$1);

return statearr_15879;
})();
if(cljs.core.truth_(inst_15844__$1)){
var statearr_15880_15928 = state_15863__$1;
(statearr_15880_15928[(1)] = (19));

} else {
var statearr_15881_15929 = state_15863__$1;
(statearr_15881_15929[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (25))){
var inst_15853 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15882_15930 = state_15863__$1;
(statearr_15882_15930[(2)] = inst_15853);

(statearr_15882_15930[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (17))){
var inst_15818 = (state_15863[(10)]);
var inst_15827 = cljs.core.first(inst_15818);
var inst_15828 = cljs.core.async.muxch_STAR_(inst_15827);
var inst_15829 = cljs.core.async.close_BANG_(inst_15828);
var inst_15830 = cljs.core.next(inst_15818);
var inst_15804 = inst_15830;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15863__$1 = (function (){var statearr_15883 = state_15863;
(statearr_15883[(12)] = inst_15806);

(statearr_15883[(13)] = inst_15804);

(statearr_15883[(14)] = inst_15807);

(statearr_15883[(15)] = inst_15829);

(statearr_15883[(16)] = inst_15805);

return statearr_15883;
})();
var statearr_15884_15931 = state_15863__$1;
(statearr_15884_15931[(2)] = null);

(statearr_15884_15931[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (3))){
var inst_15861 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15863__$1,inst_15861);
} else {
if((state_val_15864 === (12))){
var inst_15838 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15885_15932 = state_15863__$1;
(statearr_15885_15932[(2)] = inst_15838);

(statearr_15885_15932[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (2))){
var state_15863__$1 = state_15863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15863__$1,(4),ch);
} else {
if((state_val_15864 === (23))){
var state_15863__$1 = state_15863;
var statearr_15886_15933 = state_15863__$1;
(statearr_15886_15933[(2)] = null);

(statearr_15886_15933[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (19))){
var inst_15844 = (state_15863[(11)]);
var inst_15794 = (state_15863[(8)]);
var inst_15846 = cljs.core.async.muxch_STAR_(inst_15844);
var state_15863__$1 = state_15863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15863__$1,(22),inst_15846,inst_15794);
} else {
if((state_val_15864 === (11))){
var inst_15804 = (state_15863[(13)]);
var inst_15818 = (state_15863[(10)]);
var inst_15818__$1 = cljs.core.seq(inst_15804);
var state_15863__$1 = (function (){var statearr_15887 = state_15863;
(statearr_15887[(10)] = inst_15818__$1);

return statearr_15887;
})();
if(inst_15818__$1){
var statearr_15888_15934 = state_15863__$1;
(statearr_15888_15934[(1)] = (13));

} else {
var statearr_15889_15935 = state_15863__$1;
(statearr_15889_15935[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (9))){
var inst_15840 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15890_15936 = state_15863__$1;
(statearr_15890_15936[(2)] = inst_15840);

(statearr_15890_15936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (5))){
var inst_15801 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15802 = cljs.core.vals(inst_15801);
var inst_15803 = cljs.core.seq(inst_15802);
var inst_15804 = inst_15803;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15863__$1 = (function (){var statearr_15891 = state_15863;
(statearr_15891[(12)] = inst_15806);

(statearr_15891[(13)] = inst_15804);

(statearr_15891[(14)] = inst_15807);

(statearr_15891[(16)] = inst_15805);

return statearr_15891;
})();
var statearr_15892_15937 = state_15863__$1;
(statearr_15892_15937[(2)] = null);

(statearr_15892_15937[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (14))){
var state_15863__$1 = state_15863;
var statearr_15896_15938 = state_15863__$1;
(statearr_15896_15938[(2)] = null);

(statearr_15896_15938[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (16))){
var inst_15818 = (state_15863[(10)]);
var inst_15822 = cljs.core.chunk_first(inst_15818);
var inst_15823 = cljs.core.chunk_rest(inst_15818);
var inst_15824 = cljs.core.count(inst_15822);
var inst_15804 = inst_15823;
var inst_15805 = inst_15822;
var inst_15806 = inst_15824;
var inst_15807 = (0);
var state_15863__$1 = (function (){var statearr_15897 = state_15863;
(statearr_15897[(12)] = inst_15806);

(statearr_15897[(13)] = inst_15804);

(statearr_15897[(14)] = inst_15807);

(statearr_15897[(16)] = inst_15805);

return statearr_15897;
})();
var statearr_15898_15939 = state_15863__$1;
(statearr_15898_15939[(2)] = null);

(statearr_15898_15939[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (10))){
var inst_15806 = (state_15863[(12)]);
var inst_15804 = (state_15863[(13)]);
var inst_15807 = (state_15863[(14)]);
var inst_15805 = (state_15863[(16)]);
var inst_15812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15805,inst_15807);
var inst_15813 = cljs.core.async.muxch_STAR_(inst_15812);
var inst_15814 = cljs.core.async.close_BANG_(inst_15813);
var inst_15815 = (inst_15807 + (1));
var tmp15893 = inst_15806;
var tmp15894 = inst_15804;
var tmp15895 = inst_15805;
var inst_15804__$1 = tmp15894;
var inst_15805__$1 = tmp15895;
var inst_15806__$1 = tmp15893;
var inst_15807__$1 = inst_15815;
var state_15863__$1 = (function (){var statearr_15899 = state_15863;
(statearr_15899[(12)] = inst_15806__$1);

(statearr_15899[(13)] = inst_15804__$1);

(statearr_15899[(17)] = inst_15814);

(statearr_15899[(14)] = inst_15807__$1);

(statearr_15899[(16)] = inst_15805__$1);

return statearr_15899;
})();
var statearr_15900_15940 = state_15863__$1;
(statearr_15900_15940[(2)] = null);

(statearr_15900_15940[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (18))){
var inst_15833 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15901_15941 = state_15863__$1;
(statearr_15901_15941[(2)] = inst_15833);

(statearr_15901_15941[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15864 === (8))){
var inst_15806 = (state_15863[(12)]);
var inst_15807 = (state_15863[(14)]);
var inst_15809 = (inst_15807 < inst_15806);
var inst_15810 = inst_15809;
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15810)){
var statearr_15902_15942 = state_15863__$1;
(statearr_15902_15942[(1)] = (10));

} else {
var statearr_15903_15943 = state_15863__$1;
(statearr_15903_15943[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___15915,mults,ensure_mult,p))
;
return ((function (switch__13879__auto__,c__13993__auto___15915,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_15907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15907[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_15907[(1)] = (1));

return statearr_15907;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_15863){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_15863);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e15908){if((e15908 instanceof Object)){
var ex__13883__auto__ = e15908;
var statearr_15909_15944 = state_15863;
(statearr_15909_15944[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15863);

return cljs.core.cst$kw$recur;
} else {
throw e15908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__15945 = state_15863;
state_15863 = G__15945;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_15863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_15863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___15915,mults,ensure_mult,p))
})();
var state__13995__auto__ = (function (){var statearr_15910 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_15910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___15915);

return statearr_15910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___15915,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15946 = [];
var len__7513__auto___15949 = arguments.length;
var i__7514__auto___15950 = (0);
while(true){
if((i__7514__auto___15950 < len__7513__auto___15949)){
args15946.push((arguments[i__7514__auto___15950]));

var G__15951 = (i__7514__auto___15950 + (1));
i__7514__auto___15950 = G__15951;
continue;
} else {
}
break;
}

var G__15948 = args15946.length;
switch (G__15948) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15946.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15953 = [];
var len__7513__auto___15956 = arguments.length;
var i__7514__auto___15957 = (0);
while(true){
if((i__7514__auto___15957 < len__7513__auto___15956)){
args15953.push((arguments[i__7514__auto___15957]));

var G__15958 = (i__7514__auto___15957 + (1));
i__7514__auto___15957 = G__15958;
continue;
} else {
}
break;
}

var G__15955 = args15953.length;
switch (G__15955) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15953.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15960 = [];
var len__7513__auto___16031 = arguments.length;
var i__7514__auto___16032 = (0);
while(true){
if((i__7514__auto___16032 < len__7513__auto___16031)){
args15960.push((arguments[i__7514__auto___16032]));

var G__16033 = (i__7514__auto___16032 + (1));
i__7514__auto___16032 = G__16033;
continue;
} else {
}
break;
}

var G__15962 = args15960.length;
switch (G__15962) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15960.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13993__auto___16035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16001){
var state_val_16002 = (state_16001[(1)]);
if((state_val_16002 === (7))){
var state_16001__$1 = state_16001;
var statearr_16003_16036 = state_16001__$1;
(statearr_16003_16036[(2)] = null);

(statearr_16003_16036[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (1))){
var state_16001__$1 = state_16001;
var statearr_16004_16037 = state_16001__$1;
(statearr_16004_16037[(2)] = null);

(statearr_16004_16037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (4))){
var inst_15965 = (state_16001[(7)]);
var inst_15967 = (inst_15965 < cnt);
var state_16001__$1 = state_16001;
if(cljs.core.truth_(inst_15967)){
var statearr_16005_16038 = state_16001__$1;
(statearr_16005_16038[(1)] = (6));

} else {
var statearr_16006_16039 = state_16001__$1;
(statearr_16006_16039[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (15))){
var inst_15997 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16007_16040 = state_16001__$1;
(statearr_16007_16040[(2)] = inst_15997);

(statearr_16007_16040[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (13))){
var inst_15990 = cljs.core.async.close_BANG_(out);
var state_16001__$1 = state_16001;
var statearr_16008_16041 = state_16001__$1;
(statearr_16008_16041[(2)] = inst_15990);

(statearr_16008_16041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (6))){
var state_16001__$1 = state_16001;
var statearr_16009_16042 = state_16001__$1;
(statearr_16009_16042[(2)] = null);

(statearr_16009_16042[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (3))){
var inst_15999 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16001__$1,inst_15999);
} else {
if((state_val_16002 === (12))){
var inst_15987 = (state_16001[(8)]);
var inst_15987__$1 = (state_16001[(2)]);
var inst_15988 = cljs.core.some(cljs.core.nil_QMARK_,inst_15987__$1);
var state_16001__$1 = (function (){var statearr_16010 = state_16001;
(statearr_16010[(8)] = inst_15987__$1);

return statearr_16010;
})();
if(cljs.core.truth_(inst_15988)){
var statearr_16011_16043 = state_16001__$1;
(statearr_16011_16043[(1)] = (13));

} else {
var statearr_16012_16044 = state_16001__$1;
(statearr_16012_16044[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (2))){
var inst_15964 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15965 = (0);
var state_16001__$1 = (function (){var statearr_16013 = state_16001;
(statearr_16013[(9)] = inst_15964);

(statearr_16013[(7)] = inst_15965);

return statearr_16013;
})();
var statearr_16014_16045 = state_16001__$1;
(statearr_16014_16045[(2)] = null);

(statearr_16014_16045[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (11))){
var inst_15965 = (state_16001[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16001,(10),Object,null,(9));
var inst_15974 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15965) : chs__$1.call(null,inst_15965));
var inst_15975 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15965) : done.call(null,inst_15965));
var inst_15976 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15974,inst_15975);
var state_16001__$1 = state_16001;
var statearr_16015_16046 = state_16001__$1;
(statearr_16015_16046[(2)] = inst_15976);


cljs.core.async.impl.ioc_helpers.process_exception(state_16001__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (9))){
var inst_15965 = (state_16001[(7)]);
var inst_15978 = (state_16001[(2)]);
var inst_15979 = (inst_15965 + (1));
var inst_15965__$1 = inst_15979;
var state_16001__$1 = (function (){var statearr_16016 = state_16001;
(statearr_16016[(10)] = inst_15978);

(statearr_16016[(7)] = inst_15965__$1);

return statearr_16016;
})();
var statearr_16017_16047 = state_16001__$1;
(statearr_16017_16047[(2)] = null);

(statearr_16017_16047[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (5))){
var inst_15985 = (state_16001[(2)]);
var state_16001__$1 = (function (){var statearr_16018 = state_16001;
(statearr_16018[(11)] = inst_15985);

return statearr_16018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16001__$1,(12),dchan);
} else {
if((state_val_16002 === (14))){
var inst_15987 = (state_16001[(8)]);
var inst_15992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15987);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16001__$1,(16),out,inst_15992);
} else {
if((state_val_16002 === (16))){
var inst_15994 = (state_16001[(2)]);
var state_16001__$1 = (function (){var statearr_16019 = state_16001;
(statearr_16019[(12)] = inst_15994);

return statearr_16019;
})();
var statearr_16020_16048 = state_16001__$1;
(statearr_16020_16048[(2)] = null);

(statearr_16020_16048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (10))){
var inst_15969 = (state_16001[(2)]);
var inst_15970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16001__$1 = (function (){var statearr_16021 = state_16001;
(statearr_16021[(13)] = inst_15969);

return statearr_16021;
})();
var statearr_16022_16049 = state_16001__$1;
(statearr_16022_16049[(2)] = inst_15970);


cljs.core.async.impl.ioc_helpers.process_exception(state_16001__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16002 === (8))){
var inst_15983 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16023_16050 = state_16001__$1;
(statearr_16023_16050[(2)] = inst_15983);

(statearr_16023_16050[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13879__auto__,c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16027[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16027[(1)] = (1));

return statearr_16027;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16001){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16001);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16028){if((e16028 instanceof Object)){
var ex__13883__auto__ = e16028;
var statearr_16029_16051 = state_16001;
(statearr_16029_16051[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16001);

return cljs.core.cst$kw$recur;
} else {
throw e16028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16052 = state_16001;
state_16001 = G__16052;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13995__auto__ = (function (){var statearr_16030 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16035);

return statearr_16030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16035,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16054 = [];
var len__7513__auto___16110 = arguments.length;
var i__7514__auto___16111 = (0);
while(true){
if((i__7514__auto___16111 < len__7513__auto___16110)){
args16054.push((arguments[i__7514__auto___16111]));

var G__16112 = (i__7514__auto___16111 + (1));
i__7514__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var G__16056 = args16054.length;
switch (G__16056) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16054.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16114,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16114,out){
return (function (state_16086){
var state_val_16087 = (state_16086[(1)]);
if((state_val_16087 === (7))){
var inst_16066 = (state_16086[(7)]);
var inst_16065 = (state_16086[(8)]);
var inst_16065__$1 = (state_16086[(2)]);
var inst_16066__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16065__$1,(0),null);
var inst_16067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16065__$1,(1),null);
var inst_16068 = (inst_16066__$1 == null);
var state_16086__$1 = (function (){var statearr_16088 = state_16086;
(statearr_16088[(7)] = inst_16066__$1);

(statearr_16088[(8)] = inst_16065__$1);

(statearr_16088[(9)] = inst_16067);

return statearr_16088;
})();
if(cljs.core.truth_(inst_16068)){
var statearr_16089_16115 = state_16086__$1;
(statearr_16089_16115[(1)] = (8));

} else {
var statearr_16090_16116 = state_16086__$1;
(statearr_16090_16116[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (1))){
var inst_16057 = cljs.core.vec(chs);
var inst_16058 = inst_16057;
var state_16086__$1 = (function (){var statearr_16091 = state_16086;
(statearr_16091[(10)] = inst_16058);

return statearr_16091;
})();
var statearr_16092_16117 = state_16086__$1;
(statearr_16092_16117[(2)] = null);

(statearr_16092_16117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (4))){
var inst_16058 = (state_16086[(10)]);
var state_16086__$1 = state_16086;
return cljs.core.async.ioc_alts_BANG_(state_16086__$1,(7),inst_16058);
} else {
if((state_val_16087 === (6))){
var inst_16082 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16093_16118 = state_16086__$1;
(statearr_16093_16118[(2)] = inst_16082);

(statearr_16093_16118[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (3))){
var inst_16084 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16086__$1,inst_16084);
} else {
if((state_val_16087 === (2))){
var inst_16058 = (state_16086[(10)]);
var inst_16060 = cljs.core.count(inst_16058);
var inst_16061 = (inst_16060 > (0));
var state_16086__$1 = state_16086;
if(cljs.core.truth_(inst_16061)){
var statearr_16095_16119 = state_16086__$1;
(statearr_16095_16119[(1)] = (4));

} else {
var statearr_16096_16120 = state_16086__$1;
(statearr_16096_16120[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (11))){
var inst_16058 = (state_16086[(10)]);
var inst_16075 = (state_16086[(2)]);
var tmp16094 = inst_16058;
var inst_16058__$1 = tmp16094;
var state_16086__$1 = (function (){var statearr_16097 = state_16086;
(statearr_16097[(10)] = inst_16058__$1);

(statearr_16097[(11)] = inst_16075);

return statearr_16097;
})();
var statearr_16098_16121 = state_16086__$1;
(statearr_16098_16121[(2)] = null);

(statearr_16098_16121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (9))){
var inst_16066 = (state_16086[(7)]);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16086__$1,(11),out,inst_16066);
} else {
if((state_val_16087 === (5))){
var inst_16080 = cljs.core.async.close_BANG_(out);
var state_16086__$1 = state_16086;
var statearr_16099_16122 = state_16086__$1;
(statearr_16099_16122[(2)] = inst_16080);

(statearr_16099_16122[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (10))){
var inst_16078 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16100_16123 = state_16086__$1;
(statearr_16100_16123[(2)] = inst_16078);

(statearr_16100_16123[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16087 === (8))){
var inst_16058 = (state_16086[(10)]);
var inst_16066 = (state_16086[(7)]);
var inst_16065 = (state_16086[(8)]);
var inst_16067 = (state_16086[(9)]);
var inst_16070 = (function (){var cs = inst_16058;
var vec__16063 = inst_16065;
var v = inst_16066;
var c = inst_16067;
return ((function (cs,vec__16063,v,c,inst_16058,inst_16066,inst_16065,inst_16067,state_val_16087,c__13993__auto___16114,out){
return (function (p1__16053_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16053_SHARP_);
});
;})(cs,vec__16063,v,c,inst_16058,inst_16066,inst_16065,inst_16067,state_val_16087,c__13993__auto___16114,out))
})();
var inst_16071 = cljs.core.filterv(inst_16070,inst_16058);
var inst_16058__$1 = inst_16071;
var state_16086__$1 = (function (){var statearr_16101 = state_16086;
(statearr_16101[(10)] = inst_16058__$1);

return statearr_16101;
})();
var statearr_16102_16124 = state_16086__$1;
(statearr_16102_16124[(2)] = null);

(statearr_16102_16124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16114,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16114,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16106[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16106[(1)] = (1));

return statearr_16106;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16086){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16086);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16107){if((e16107 instanceof Object)){
var ex__13883__auto__ = e16107;
var statearr_16108_16125 = state_16086;
(statearr_16108_16125[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16086);

return cljs.core.cst$kw$recur;
} else {
throw e16107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16126 = state_16086;
state_16086 = G__16126;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16114,out))
})();
var state__13995__auto__ = (function (){var statearr_16109 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16114);

return statearr_16109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16114,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16127 = [];
var len__7513__auto___16176 = arguments.length;
var i__7514__auto___16177 = (0);
while(true){
if((i__7514__auto___16177 < len__7513__auto___16176)){
args16127.push((arguments[i__7514__auto___16177]));

var G__16178 = (i__7514__auto___16177 + (1));
i__7514__auto___16177 = G__16178;
continue;
} else {
}
break;
}

var G__16129 = args16127.length;
switch (G__16129) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16127.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16180,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16180,out){
return (function (state_16153){
var state_val_16154 = (state_16153[(1)]);
if((state_val_16154 === (7))){
var inst_16135 = (state_16153[(7)]);
var inst_16135__$1 = (state_16153[(2)]);
var inst_16136 = (inst_16135__$1 == null);
var inst_16137 = cljs.core.not(inst_16136);
var state_16153__$1 = (function (){var statearr_16155 = state_16153;
(statearr_16155[(7)] = inst_16135__$1);

return statearr_16155;
})();
if(inst_16137){
var statearr_16156_16181 = state_16153__$1;
(statearr_16156_16181[(1)] = (8));

} else {
var statearr_16157_16182 = state_16153__$1;
(statearr_16157_16182[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (1))){
var inst_16130 = (0);
var state_16153__$1 = (function (){var statearr_16158 = state_16153;
(statearr_16158[(8)] = inst_16130);

return statearr_16158;
})();
var statearr_16159_16183 = state_16153__$1;
(statearr_16159_16183[(2)] = null);

(statearr_16159_16183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (4))){
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16153__$1,(7),ch);
} else {
if((state_val_16154 === (6))){
var inst_16148 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16160_16184 = state_16153__$1;
(statearr_16160_16184[(2)] = inst_16148);

(statearr_16160_16184[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (3))){
var inst_16150 = (state_16153[(2)]);
var inst_16151 = cljs.core.async.close_BANG_(out);
var state_16153__$1 = (function (){var statearr_16161 = state_16153;
(statearr_16161[(9)] = inst_16150);

return statearr_16161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16153__$1,inst_16151);
} else {
if((state_val_16154 === (2))){
var inst_16130 = (state_16153[(8)]);
var inst_16132 = (inst_16130 < n);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16132)){
var statearr_16162_16185 = state_16153__$1;
(statearr_16162_16185[(1)] = (4));

} else {
var statearr_16163_16186 = state_16153__$1;
(statearr_16163_16186[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (11))){
var inst_16130 = (state_16153[(8)]);
var inst_16140 = (state_16153[(2)]);
var inst_16141 = (inst_16130 + (1));
var inst_16130__$1 = inst_16141;
var state_16153__$1 = (function (){var statearr_16164 = state_16153;
(statearr_16164[(8)] = inst_16130__$1);

(statearr_16164[(10)] = inst_16140);

return statearr_16164;
})();
var statearr_16165_16187 = state_16153__$1;
(statearr_16165_16187[(2)] = null);

(statearr_16165_16187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (9))){
var state_16153__$1 = state_16153;
var statearr_16166_16188 = state_16153__$1;
(statearr_16166_16188[(2)] = null);

(statearr_16166_16188[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (5))){
var state_16153__$1 = state_16153;
var statearr_16167_16189 = state_16153__$1;
(statearr_16167_16189[(2)] = null);

(statearr_16167_16189[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (10))){
var inst_16145 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16168_16190 = state_16153__$1;
(statearr_16168_16190[(2)] = inst_16145);

(statearr_16168_16190[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16154 === (8))){
var inst_16135 = (state_16153[(7)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16153__$1,(11),out,inst_16135);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16180,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16180,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16172[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16172[(1)] = (1));

return statearr_16172;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16153){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16153);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16173){if((e16173 instanceof Object)){
var ex__13883__auto__ = e16173;
var statearr_16174_16191 = state_16153;
(statearr_16174_16191[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16153);

return cljs.core.cst$kw$recur;
} else {
throw e16173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16192 = state_16153;
state_16153 = G__16192;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16180,out))
})();
var state__13995__auto__ = (function (){var statearr_16175 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16180);

return statearr_16175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16180,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16202 = (function (map_LT_,f,ch,meta16203){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16203 = meta16203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16204,meta16203__$1){
var self__ = this;
var _16204__$1 = this;
return (new cljs.core.async.t_cljs$core$async16202(self__.map_LT_,self__.f,self__.ch,meta16203__$1));
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16204){
var self__ = this;
var _16204__$1 = this;
return self__.meta16203;
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16205 = (function (map_LT_,f,ch,meta16203,_,fn1,meta16206){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16203 = meta16203;
this._ = _;
this.fn1 = fn1;
this.meta16206 = meta16206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16207,meta16206__$1){
var self__ = this;
var _16207__$1 = this;
return (new cljs.core.async.t_cljs$core$async16205(self__.map_LT_,self__.f,self__.ch,self__.meta16203,self__._,self__.fn1,meta16206__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16207){
var self__ = this;
var _16207__$1 = this;
return self__.meta16206;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16193_SHARP_){
var G__16208 = (((p1__16193_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16193_SHARP_) : self__.f.call(null,p1__16193_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16208) : f1.call(null,G__16208));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16203,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16202], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16206], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16205";

cljs.core.async.t_cljs$core$async16205.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16205");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16205 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16205(map_LT___$1,f__$1,ch__$1,meta16203__$1,___$2,fn1__$1,meta16206){
return (new cljs.core.async.t_cljs$core$async16205(map_LT___$1,f__$1,ch__$1,meta16203__$1,___$2,fn1__$1,meta16206));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16205(self__.map_LT_,self__.f,self__.ch,self__.meta16203,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6443__auto__ = ret;
if(cljs.core.truth_(and__6443__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6443__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16209 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16209) : self__.f.call(null,G__16209));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16203], null);
});

cljs.core.async.t_cljs$core$async16202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16202";

cljs.core.async.t_cljs$core$async16202.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16202");
});

cljs.core.async.__GT_t_cljs$core$async16202 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16202(map_LT___$1,f__$1,ch__$1,meta16203){
return (new cljs.core.async.t_cljs$core$async16202(map_LT___$1,f__$1,ch__$1,meta16203));
});

}

return (new cljs.core.async.t_cljs$core$async16202(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16213 = (function (map_GT_,f,ch,meta16214){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16214 = meta16214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16215,meta16214__$1){
var self__ = this;
var _16215__$1 = this;
return (new cljs.core.async.t_cljs$core$async16213(self__.map_GT_,self__.f,self__.ch,meta16214__$1));
});

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16215){
var self__ = this;
var _16215__$1 = this;
return self__.meta16214;
});

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16214], null);
});

cljs.core.async.t_cljs$core$async16213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16213";

cljs.core.async.t_cljs$core$async16213.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16213");
});

cljs.core.async.__GT_t_cljs$core$async16213 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16213(map_GT___$1,f__$1,ch__$1,meta16214){
return (new cljs.core.async.t_cljs$core$async16213(map_GT___$1,f__$1,ch__$1,meta16214));
});

}

return (new cljs.core.async.t_cljs$core$async16213(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16219 = (function (filter_GT_,p,ch,meta16220){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16220 = meta16220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16221,meta16220__$1){
var self__ = this;
var _16221__$1 = this;
return (new cljs.core.async.t_cljs$core$async16219(self__.filter_GT_,self__.p,self__.ch,meta16220__$1));
});

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16221){
var self__ = this;
var _16221__$1 = this;
return self__.meta16220;
});

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16220], null);
});

cljs.core.async.t_cljs$core$async16219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16219";

cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16219");
});

cljs.core.async.__GT_t_cljs$core$async16219 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16219(filter_GT___$1,p__$1,ch__$1,meta16220){
return (new cljs.core.async.t_cljs$core$async16219(filter_GT___$1,p__$1,ch__$1,meta16220));
});

}

return (new cljs.core.async.t_cljs$core$async16219(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16222 = [];
var len__7513__auto___16266 = arguments.length;
var i__7514__auto___16267 = (0);
while(true){
if((i__7514__auto___16267 < len__7513__auto___16266)){
args16222.push((arguments[i__7514__auto___16267]));

var G__16268 = (i__7514__auto___16267 + (1));
i__7514__auto___16267 = G__16268;
continue;
} else {
}
break;
}

var G__16224 = args16222.length;
switch (G__16224) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16222.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16270,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16270,out){
return (function (state_16245){
var state_val_16246 = (state_16245[(1)]);
if((state_val_16246 === (7))){
var inst_16241 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16247_16271 = state_16245__$1;
(statearr_16247_16271[(2)] = inst_16241);

(statearr_16247_16271[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (1))){
var state_16245__$1 = state_16245;
var statearr_16248_16272 = state_16245__$1;
(statearr_16248_16272[(2)] = null);

(statearr_16248_16272[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (4))){
var inst_16227 = (state_16245[(7)]);
var inst_16227__$1 = (state_16245[(2)]);
var inst_16228 = (inst_16227__$1 == null);
var state_16245__$1 = (function (){var statearr_16249 = state_16245;
(statearr_16249[(7)] = inst_16227__$1);

return statearr_16249;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16250_16273 = state_16245__$1;
(statearr_16250_16273[(1)] = (5));

} else {
var statearr_16251_16274 = state_16245__$1;
(statearr_16251_16274[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (6))){
var inst_16227 = (state_16245[(7)]);
var inst_16232 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16227) : p.call(null,inst_16227));
var state_16245__$1 = state_16245;
if(cljs.core.truth_(inst_16232)){
var statearr_16252_16275 = state_16245__$1;
(statearr_16252_16275[(1)] = (8));

} else {
var statearr_16253_16276 = state_16245__$1;
(statearr_16253_16276[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (3))){
var inst_16243 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16245__$1,inst_16243);
} else {
if((state_val_16246 === (2))){
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16245__$1,(4),ch);
} else {
if((state_val_16246 === (11))){
var inst_16235 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16254_16277 = state_16245__$1;
(statearr_16254_16277[(2)] = inst_16235);

(statearr_16254_16277[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (9))){
var state_16245__$1 = state_16245;
var statearr_16255_16278 = state_16245__$1;
(statearr_16255_16278[(2)] = null);

(statearr_16255_16278[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (5))){
var inst_16230 = cljs.core.async.close_BANG_(out);
var state_16245__$1 = state_16245;
var statearr_16256_16279 = state_16245__$1;
(statearr_16256_16279[(2)] = inst_16230);

(statearr_16256_16279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (10))){
var inst_16238 = (state_16245[(2)]);
var state_16245__$1 = (function (){var statearr_16257 = state_16245;
(statearr_16257[(8)] = inst_16238);

return statearr_16257;
})();
var statearr_16258_16280 = state_16245__$1;
(statearr_16258_16280[(2)] = null);

(statearr_16258_16280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16246 === (8))){
var inst_16227 = (state_16245[(7)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16245__$1,(11),out,inst_16227);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16270,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16270,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16262 = [null,null,null,null,null,null,null,null,null];
(statearr_16262[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16262[(1)] = (1));

return statearr_16262;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16245){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16245);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16263){if((e16263 instanceof Object)){
var ex__13883__auto__ = e16263;
var statearr_16264_16281 = state_16245;
(statearr_16264_16281[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16245);

return cljs.core.cst$kw$recur;
} else {
throw e16263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16282 = state_16245;
state_16245 = G__16282;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16270,out))
})();
var state__13995__auto__ = (function (){var statearr_16265 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16270);

return statearr_16265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16270,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16283 = [];
var len__7513__auto___16286 = arguments.length;
var i__7514__auto___16287 = (0);
while(true){
if((i__7514__auto___16287 < len__7513__auto___16286)){
args16283.push((arguments[i__7514__auto___16287]));

var G__16288 = (i__7514__auto___16287 + (1));
i__7514__auto___16287 = G__16288;
continue;
} else {
}
break;
}

var G__16285 = args16283.length;
switch (G__16285) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16283.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto__){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto__){
return (function (state_16455){
var state_val_16456 = (state_16455[(1)]);
if((state_val_16456 === (7))){
var inst_16451 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16457_16498 = state_16455__$1;
(statearr_16457_16498[(2)] = inst_16451);

(statearr_16457_16498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (20))){
var inst_16421 = (state_16455[(7)]);
var inst_16432 = (state_16455[(2)]);
var inst_16433 = cljs.core.next(inst_16421);
var inst_16407 = inst_16433;
var inst_16408 = null;
var inst_16409 = (0);
var inst_16410 = (0);
var state_16455__$1 = (function (){var statearr_16458 = state_16455;
(statearr_16458[(8)] = inst_16409);

(statearr_16458[(9)] = inst_16408);

(statearr_16458[(10)] = inst_16407);

(statearr_16458[(11)] = inst_16432);

(statearr_16458[(12)] = inst_16410);

return statearr_16458;
})();
var statearr_16459_16499 = state_16455__$1;
(statearr_16459_16499[(2)] = null);

(statearr_16459_16499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (1))){
var state_16455__$1 = state_16455;
var statearr_16460_16500 = state_16455__$1;
(statearr_16460_16500[(2)] = null);

(statearr_16460_16500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (4))){
var inst_16396 = (state_16455[(13)]);
var inst_16396__$1 = (state_16455[(2)]);
var inst_16397 = (inst_16396__$1 == null);
var state_16455__$1 = (function (){var statearr_16461 = state_16455;
(statearr_16461[(13)] = inst_16396__$1);

return statearr_16461;
})();
if(cljs.core.truth_(inst_16397)){
var statearr_16462_16501 = state_16455__$1;
(statearr_16462_16501[(1)] = (5));

} else {
var statearr_16463_16502 = state_16455__$1;
(statearr_16463_16502[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (15))){
var state_16455__$1 = state_16455;
var statearr_16467_16503 = state_16455__$1;
(statearr_16467_16503[(2)] = null);

(statearr_16467_16503[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (21))){
var state_16455__$1 = state_16455;
var statearr_16468_16504 = state_16455__$1;
(statearr_16468_16504[(2)] = null);

(statearr_16468_16504[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (13))){
var inst_16409 = (state_16455[(8)]);
var inst_16408 = (state_16455[(9)]);
var inst_16407 = (state_16455[(10)]);
var inst_16410 = (state_16455[(12)]);
var inst_16417 = (state_16455[(2)]);
var inst_16418 = (inst_16410 + (1));
var tmp16464 = inst_16409;
var tmp16465 = inst_16408;
var tmp16466 = inst_16407;
var inst_16407__$1 = tmp16466;
var inst_16408__$1 = tmp16465;
var inst_16409__$1 = tmp16464;
var inst_16410__$1 = inst_16418;
var state_16455__$1 = (function (){var statearr_16469 = state_16455;
(statearr_16469[(8)] = inst_16409__$1);

(statearr_16469[(9)] = inst_16408__$1);

(statearr_16469[(10)] = inst_16407__$1);

(statearr_16469[(14)] = inst_16417);

(statearr_16469[(12)] = inst_16410__$1);

return statearr_16469;
})();
var statearr_16470_16505 = state_16455__$1;
(statearr_16470_16505[(2)] = null);

(statearr_16470_16505[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (22))){
var state_16455__$1 = state_16455;
var statearr_16471_16506 = state_16455__$1;
(statearr_16471_16506[(2)] = null);

(statearr_16471_16506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (6))){
var inst_16396 = (state_16455[(13)]);
var inst_16405 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16396) : f.call(null,inst_16396));
var inst_16406 = cljs.core.seq(inst_16405);
var inst_16407 = inst_16406;
var inst_16408 = null;
var inst_16409 = (0);
var inst_16410 = (0);
var state_16455__$1 = (function (){var statearr_16472 = state_16455;
(statearr_16472[(8)] = inst_16409);

(statearr_16472[(9)] = inst_16408);

(statearr_16472[(10)] = inst_16407);

(statearr_16472[(12)] = inst_16410);

return statearr_16472;
})();
var statearr_16473_16507 = state_16455__$1;
(statearr_16473_16507[(2)] = null);

(statearr_16473_16507[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (17))){
var inst_16421 = (state_16455[(7)]);
var inst_16425 = cljs.core.chunk_first(inst_16421);
var inst_16426 = cljs.core.chunk_rest(inst_16421);
var inst_16427 = cljs.core.count(inst_16425);
var inst_16407 = inst_16426;
var inst_16408 = inst_16425;
var inst_16409 = inst_16427;
var inst_16410 = (0);
var state_16455__$1 = (function (){var statearr_16474 = state_16455;
(statearr_16474[(8)] = inst_16409);

(statearr_16474[(9)] = inst_16408);

(statearr_16474[(10)] = inst_16407);

(statearr_16474[(12)] = inst_16410);

return statearr_16474;
})();
var statearr_16475_16508 = state_16455__$1;
(statearr_16475_16508[(2)] = null);

(statearr_16475_16508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (3))){
var inst_16453 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16455__$1,inst_16453);
} else {
if((state_val_16456 === (12))){
var inst_16441 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16476_16509 = state_16455__$1;
(statearr_16476_16509[(2)] = inst_16441);

(statearr_16476_16509[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (2))){
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16455__$1,(4),in$);
} else {
if((state_val_16456 === (23))){
var inst_16449 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16477_16510 = state_16455__$1;
(statearr_16477_16510[(2)] = inst_16449);

(statearr_16477_16510[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (19))){
var inst_16436 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16478_16511 = state_16455__$1;
(statearr_16478_16511[(2)] = inst_16436);

(statearr_16478_16511[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (11))){
var inst_16407 = (state_16455[(10)]);
var inst_16421 = (state_16455[(7)]);
var inst_16421__$1 = cljs.core.seq(inst_16407);
var state_16455__$1 = (function (){var statearr_16479 = state_16455;
(statearr_16479[(7)] = inst_16421__$1);

return statearr_16479;
})();
if(inst_16421__$1){
var statearr_16480_16512 = state_16455__$1;
(statearr_16480_16512[(1)] = (14));

} else {
var statearr_16481_16513 = state_16455__$1;
(statearr_16481_16513[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (9))){
var inst_16443 = (state_16455[(2)]);
var inst_16444 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16455__$1 = (function (){var statearr_16482 = state_16455;
(statearr_16482[(15)] = inst_16443);

return statearr_16482;
})();
if(cljs.core.truth_(inst_16444)){
var statearr_16483_16514 = state_16455__$1;
(statearr_16483_16514[(1)] = (21));

} else {
var statearr_16484_16515 = state_16455__$1;
(statearr_16484_16515[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (5))){
var inst_16399 = cljs.core.async.close_BANG_(out);
var state_16455__$1 = state_16455;
var statearr_16485_16516 = state_16455__$1;
(statearr_16485_16516[(2)] = inst_16399);

(statearr_16485_16516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (14))){
var inst_16421 = (state_16455[(7)]);
var inst_16423 = cljs.core.chunked_seq_QMARK_(inst_16421);
var state_16455__$1 = state_16455;
if(inst_16423){
var statearr_16486_16517 = state_16455__$1;
(statearr_16486_16517[(1)] = (17));

} else {
var statearr_16487_16518 = state_16455__$1;
(statearr_16487_16518[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (16))){
var inst_16439 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16488_16519 = state_16455__$1;
(statearr_16488_16519[(2)] = inst_16439);

(statearr_16488_16519[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16456 === (10))){
var inst_16408 = (state_16455[(9)]);
var inst_16410 = (state_16455[(12)]);
var inst_16415 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16408,inst_16410);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16455__$1,(13),out,inst_16415);
} else {
if((state_val_16456 === (18))){
var inst_16421 = (state_16455[(7)]);
var inst_16430 = cljs.core.first(inst_16421);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16455__$1,(20),out,inst_16430);
} else {
if((state_val_16456 === (8))){
var inst_16409 = (state_16455[(8)]);
var inst_16410 = (state_16455[(12)]);
var inst_16412 = (inst_16410 < inst_16409);
var inst_16413 = inst_16412;
var state_16455__$1 = state_16455;
if(cljs.core.truth_(inst_16413)){
var statearr_16489_16520 = state_16455__$1;
(statearr_16489_16520[(1)] = (10));

} else {
var statearr_16490_16521 = state_16455__$1;
(statearr_16490_16521[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto__))
;
return ((function (switch__13879__auto__,c__13993__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____0 = (function (){
var statearr_16494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16494[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__);

(statearr_16494[(1)] = (1));

return statearr_16494;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____1 = (function (state_16455){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16455);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16495){if((e16495 instanceof Object)){
var ex__13883__auto__ = e16495;
var statearr_16496_16522 = state_16455;
(statearr_16496_16522[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16455);

return cljs.core.cst$kw$recur;
} else {
throw e16495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16523 = state_16455;
state_16455 = G__16523;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto__))
})();
var state__13995__auto__ = (function (){var statearr_16497 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto__);

return statearr_16497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto__))
);

return c__13993__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16524 = [];
var len__7513__auto___16527 = arguments.length;
var i__7514__auto___16528 = (0);
while(true){
if((i__7514__auto___16528 < len__7513__auto___16527)){
args16524.push((arguments[i__7514__auto___16528]));

var G__16529 = (i__7514__auto___16528 + (1));
i__7514__auto___16528 = G__16529;
continue;
} else {
}
break;
}

var G__16526 = args16524.length;
switch (G__16526) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16524.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16531 = [];
var len__7513__auto___16534 = arguments.length;
var i__7514__auto___16535 = (0);
while(true){
if((i__7514__auto___16535 < len__7513__auto___16534)){
args16531.push((arguments[i__7514__auto___16535]));

var G__16536 = (i__7514__auto___16535 + (1));
i__7514__auto___16535 = G__16536;
continue;
} else {
}
break;
}

var G__16533 = args16531.length;
switch (G__16533) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16531.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16538 = [];
var len__7513__auto___16589 = arguments.length;
var i__7514__auto___16590 = (0);
while(true){
if((i__7514__auto___16590 < len__7513__auto___16589)){
args16538.push((arguments[i__7514__auto___16590]));

var G__16591 = (i__7514__auto___16590 + (1));
i__7514__auto___16590 = G__16591;
continue;
} else {
}
break;
}

var G__16540 = args16538.length;
switch (G__16540) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16538.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16593,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16593,out){
return (function (state_16564){
var state_val_16565 = (state_16564[(1)]);
if((state_val_16565 === (7))){
var inst_16559 = (state_16564[(2)]);
var state_16564__$1 = state_16564;
var statearr_16566_16594 = state_16564__$1;
(statearr_16566_16594[(2)] = inst_16559);

(statearr_16566_16594[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (1))){
var inst_16541 = null;
var state_16564__$1 = (function (){var statearr_16567 = state_16564;
(statearr_16567[(7)] = inst_16541);

return statearr_16567;
})();
var statearr_16568_16595 = state_16564__$1;
(statearr_16568_16595[(2)] = null);

(statearr_16568_16595[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (4))){
var inst_16544 = (state_16564[(8)]);
var inst_16544__$1 = (state_16564[(2)]);
var inst_16545 = (inst_16544__$1 == null);
var inst_16546 = cljs.core.not(inst_16545);
var state_16564__$1 = (function (){var statearr_16569 = state_16564;
(statearr_16569[(8)] = inst_16544__$1);

return statearr_16569;
})();
if(inst_16546){
var statearr_16570_16596 = state_16564__$1;
(statearr_16570_16596[(1)] = (5));

} else {
var statearr_16571_16597 = state_16564__$1;
(statearr_16571_16597[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (6))){
var state_16564__$1 = state_16564;
var statearr_16572_16598 = state_16564__$1;
(statearr_16572_16598[(2)] = null);

(statearr_16572_16598[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (3))){
var inst_16561 = (state_16564[(2)]);
var inst_16562 = cljs.core.async.close_BANG_(out);
var state_16564__$1 = (function (){var statearr_16573 = state_16564;
(statearr_16573[(9)] = inst_16561);

return statearr_16573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16564__$1,inst_16562);
} else {
if((state_val_16565 === (2))){
var state_16564__$1 = state_16564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16564__$1,(4),ch);
} else {
if((state_val_16565 === (11))){
var inst_16544 = (state_16564[(8)]);
var inst_16553 = (state_16564[(2)]);
var inst_16541 = inst_16544;
var state_16564__$1 = (function (){var statearr_16574 = state_16564;
(statearr_16574[(10)] = inst_16553);

(statearr_16574[(7)] = inst_16541);

return statearr_16574;
})();
var statearr_16575_16599 = state_16564__$1;
(statearr_16575_16599[(2)] = null);

(statearr_16575_16599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (9))){
var inst_16544 = (state_16564[(8)]);
var state_16564__$1 = state_16564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16564__$1,(11),out,inst_16544);
} else {
if((state_val_16565 === (5))){
var inst_16544 = (state_16564[(8)]);
var inst_16541 = (state_16564[(7)]);
var inst_16548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16544,inst_16541);
var state_16564__$1 = state_16564;
if(inst_16548){
var statearr_16577_16600 = state_16564__$1;
(statearr_16577_16600[(1)] = (8));

} else {
var statearr_16578_16601 = state_16564__$1;
(statearr_16578_16601[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (10))){
var inst_16556 = (state_16564[(2)]);
var state_16564__$1 = state_16564;
var statearr_16579_16602 = state_16564__$1;
(statearr_16579_16602[(2)] = inst_16556);

(statearr_16579_16602[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16565 === (8))){
var inst_16541 = (state_16564[(7)]);
var tmp16576 = inst_16541;
var inst_16541__$1 = tmp16576;
var state_16564__$1 = (function (){var statearr_16580 = state_16564;
(statearr_16580[(7)] = inst_16541__$1);

return statearr_16580;
})();
var statearr_16581_16603 = state_16564__$1;
(statearr_16581_16603[(2)] = null);

(statearr_16581_16603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16593,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16593,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16585[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16585[(1)] = (1));

return statearr_16585;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16564){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16564);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16586){if((e16586 instanceof Object)){
var ex__13883__auto__ = e16586;
var statearr_16587_16604 = state_16564;
(statearr_16587_16604[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16564);

return cljs.core.cst$kw$recur;
} else {
throw e16586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16605 = state_16564;
state_16564 = G__16605;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16593,out))
})();
var state__13995__auto__ = (function (){var statearr_16588 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16593);

return statearr_16588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16593,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16606 = [];
var len__7513__auto___16676 = arguments.length;
var i__7514__auto___16677 = (0);
while(true){
if((i__7514__auto___16677 < len__7513__auto___16676)){
args16606.push((arguments[i__7514__auto___16677]));

var G__16678 = (i__7514__auto___16677 + (1));
i__7514__auto___16677 = G__16678;
continue;
} else {
}
break;
}

var G__16608 = args16606.length;
switch (G__16608) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16606.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16680,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16680,out){
return (function (state_16646){
var state_val_16647 = (state_16646[(1)]);
if((state_val_16647 === (7))){
var inst_16642 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16648_16681 = state_16646__$1;
(statearr_16648_16681[(2)] = inst_16642);

(statearr_16648_16681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (1))){
var inst_16609 = (new Array(n));
var inst_16610 = inst_16609;
var inst_16611 = (0);
var state_16646__$1 = (function (){var statearr_16649 = state_16646;
(statearr_16649[(7)] = inst_16610);

(statearr_16649[(8)] = inst_16611);

return statearr_16649;
})();
var statearr_16650_16682 = state_16646__$1;
(statearr_16650_16682[(2)] = null);

(statearr_16650_16682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (4))){
var inst_16614 = (state_16646[(9)]);
var inst_16614__$1 = (state_16646[(2)]);
var inst_16615 = (inst_16614__$1 == null);
var inst_16616 = cljs.core.not(inst_16615);
var state_16646__$1 = (function (){var statearr_16651 = state_16646;
(statearr_16651[(9)] = inst_16614__$1);

return statearr_16651;
})();
if(inst_16616){
var statearr_16652_16683 = state_16646__$1;
(statearr_16652_16683[(1)] = (5));

} else {
var statearr_16653_16684 = state_16646__$1;
(statearr_16653_16684[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (15))){
var inst_16636 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16654_16685 = state_16646__$1;
(statearr_16654_16685[(2)] = inst_16636);

(statearr_16654_16685[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (13))){
var state_16646__$1 = state_16646;
var statearr_16655_16686 = state_16646__$1;
(statearr_16655_16686[(2)] = null);

(statearr_16655_16686[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (6))){
var inst_16611 = (state_16646[(8)]);
var inst_16632 = (inst_16611 > (0));
var state_16646__$1 = state_16646;
if(cljs.core.truth_(inst_16632)){
var statearr_16656_16687 = state_16646__$1;
(statearr_16656_16687[(1)] = (12));

} else {
var statearr_16657_16688 = state_16646__$1;
(statearr_16657_16688[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (3))){
var inst_16644 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16646__$1,inst_16644);
} else {
if((state_val_16647 === (12))){
var inst_16610 = (state_16646[(7)]);
var inst_16634 = cljs.core.vec(inst_16610);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16646__$1,(15),out,inst_16634);
} else {
if((state_val_16647 === (2))){
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16646__$1,(4),ch);
} else {
if((state_val_16647 === (11))){
var inst_16626 = (state_16646[(2)]);
var inst_16627 = (new Array(n));
var inst_16610 = inst_16627;
var inst_16611 = (0);
var state_16646__$1 = (function (){var statearr_16658 = state_16646;
(statearr_16658[(7)] = inst_16610);

(statearr_16658[(8)] = inst_16611);

(statearr_16658[(10)] = inst_16626);

return statearr_16658;
})();
var statearr_16659_16689 = state_16646__$1;
(statearr_16659_16689[(2)] = null);

(statearr_16659_16689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (9))){
var inst_16610 = (state_16646[(7)]);
var inst_16624 = cljs.core.vec(inst_16610);
var state_16646__$1 = state_16646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16646__$1,(11),out,inst_16624);
} else {
if((state_val_16647 === (5))){
var inst_16614 = (state_16646[(9)]);
var inst_16610 = (state_16646[(7)]);
var inst_16619 = (state_16646[(11)]);
var inst_16611 = (state_16646[(8)]);
var inst_16618 = (inst_16610[inst_16611] = inst_16614);
var inst_16619__$1 = (inst_16611 + (1));
var inst_16620 = (inst_16619__$1 < n);
var state_16646__$1 = (function (){var statearr_16660 = state_16646;
(statearr_16660[(11)] = inst_16619__$1);

(statearr_16660[(12)] = inst_16618);

return statearr_16660;
})();
if(cljs.core.truth_(inst_16620)){
var statearr_16661_16690 = state_16646__$1;
(statearr_16661_16690[(1)] = (8));

} else {
var statearr_16662_16691 = state_16646__$1;
(statearr_16662_16691[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (14))){
var inst_16639 = (state_16646[(2)]);
var inst_16640 = cljs.core.async.close_BANG_(out);
var state_16646__$1 = (function (){var statearr_16664 = state_16646;
(statearr_16664[(13)] = inst_16639);

return statearr_16664;
})();
var statearr_16665_16692 = state_16646__$1;
(statearr_16665_16692[(2)] = inst_16640);

(statearr_16665_16692[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (10))){
var inst_16630 = (state_16646[(2)]);
var state_16646__$1 = state_16646;
var statearr_16666_16693 = state_16646__$1;
(statearr_16666_16693[(2)] = inst_16630);

(statearr_16666_16693[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16647 === (8))){
var inst_16610 = (state_16646[(7)]);
var inst_16619 = (state_16646[(11)]);
var tmp16663 = inst_16610;
var inst_16610__$1 = tmp16663;
var inst_16611 = inst_16619;
var state_16646__$1 = (function (){var statearr_16667 = state_16646;
(statearr_16667[(7)] = inst_16610__$1);

(statearr_16667[(8)] = inst_16611);

return statearr_16667;
})();
var statearr_16668_16694 = state_16646__$1;
(statearr_16668_16694[(2)] = null);

(statearr_16668_16694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16680,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16680,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16672[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16672[(1)] = (1));

return statearr_16672;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16646){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16646);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16673){if((e16673 instanceof Object)){
var ex__13883__auto__ = e16673;
var statearr_16674_16695 = state_16646;
(statearr_16674_16695[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16646);

return cljs.core.cst$kw$recur;
} else {
throw e16673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16696 = state_16646;
state_16646 = G__16696;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16680,out))
})();
var state__13995__auto__ = (function (){var statearr_16675 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16680);

return statearr_16675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16680,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16697 = [];
var len__7513__auto___16771 = arguments.length;
var i__7514__auto___16772 = (0);
while(true){
if((i__7514__auto___16772 < len__7513__auto___16771)){
args16697.push((arguments[i__7514__auto___16772]));

var G__16773 = (i__7514__auto___16772 + (1));
i__7514__auto___16772 = G__16773;
continue;
} else {
}
break;
}

var G__16699 = args16697.length;
switch (G__16699) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16697.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13993__auto___16775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13993__auto___16775,out){
return (function (){
var f__13994__auto__ = (function (){var switch__13879__auto__ = ((function (c__13993__auto___16775,out){
return (function (state_16741){
var state_val_16742 = (state_16741[(1)]);
if((state_val_16742 === (7))){
var inst_16737 = (state_16741[(2)]);
var state_16741__$1 = state_16741;
var statearr_16743_16776 = state_16741__$1;
(statearr_16743_16776[(2)] = inst_16737);

(statearr_16743_16776[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (1))){
var inst_16700 = [];
var inst_16701 = inst_16700;
var inst_16702 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16741__$1 = (function (){var statearr_16744 = state_16741;
(statearr_16744[(7)] = inst_16701);

(statearr_16744[(8)] = inst_16702);

return statearr_16744;
})();
var statearr_16745_16777 = state_16741__$1;
(statearr_16745_16777[(2)] = null);

(statearr_16745_16777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (4))){
var inst_16705 = (state_16741[(9)]);
var inst_16705__$1 = (state_16741[(2)]);
var inst_16706 = (inst_16705__$1 == null);
var inst_16707 = cljs.core.not(inst_16706);
var state_16741__$1 = (function (){var statearr_16746 = state_16741;
(statearr_16746[(9)] = inst_16705__$1);

return statearr_16746;
})();
if(inst_16707){
var statearr_16747_16778 = state_16741__$1;
(statearr_16747_16778[(1)] = (5));

} else {
var statearr_16748_16779 = state_16741__$1;
(statearr_16748_16779[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (15))){
var inst_16731 = (state_16741[(2)]);
var state_16741__$1 = state_16741;
var statearr_16749_16780 = state_16741__$1;
(statearr_16749_16780[(2)] = inst_16731);

(statearr_16749_16780[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (13))){
var state_16741__$1 = state_16741;
var statearr_16750_16781 = state_16741__$1;
(statearr_16750_16781[(2)] = null);

(statearr_16750_16781[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (6))){
var inst_16701 = (state_16741[(7)]);
var inst_16726 = inst_16701.length;
var inst_16727 = (inst_16726 > (0));
var state_16741__$1 = state_16741;
if(cljs.core.truth_(inst_16727)){
var statearr_16751_16782 = state_16741__$1;
(statearr_16751_16782[(1)] = (12));

} else {
var statearr_16752_16783 = state_16741__$1;
(statearr_16752_16783[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (3))){
var inst_16739 = (state_16741[(2)]);
var state_16741__$1 = state_16741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16741__$1,inst_16739);
} else {
if((state_val_16742 === (12))){
var inst_16701 = (state_16741[(7)]);
var inst_16729 = cljs.core.vec(inst_16701);
var state_16741__$1 = state_16741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16741__$1,(15),out,inst_16729);
} else {
if((state_val_16742 === (2))){
var state_16741__$1 = state_16741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16741__$1,(4),ch);
} else {
if((state_val_16742 === (11))){
var inst_16709 = (state_16741[(10)]);
var inst_16705 = (state_16741[(9)]);
var inst_16719 = (state_16741[(2)]);
var inst_16720 = [];
var inst_16721 = inst_16720.push(inst_16705);
var inst_16701 = inst_16720;
var inst_16702 = inst_16709;
var state_16741__$1 = (function (){var statearr_16753 = state_16741;
(statearr_16753[(11)] = inst_16721);

(statearr_16753[(7)] = inst_16701);

(statearr_16753[(12)] = inst_16719);

(statearr_16753[(8)] = inst_16702);

return statearr_16753;
})();
var statearr_16754_16784 = state_16741__$1;
(statearr_16754_16784[(2)] = null);

(statearr_16754_16784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (9))){
var inst_16701 = (state_16741[(7)]);
var inst_16717 = cljs.core.vec(inst_16701);
var state_16741__$1 = state_16741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16741__$1,(11),out,inst_16717);
} else {
if((state_val_16742 === (5))){
var inst_16709 = (state_16741[(10)]);
var inst_16705 = (state_16741[(9)]);
var inst_16702 = (state_16741[(8)]);
var inst_16709__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16705) : f.call(null,inst_16705));
var inst_16710 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16709__$1,inst_16702);
var inst_16711 = cljs.core.keyword_identical_QMARK_(inst_16702,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16712 = (inst_16710) || (inst_16711);
var state_16741__$1 = (function (){var statearr_16755 = state_16741;
(statearr_16755[(10)] = inst_16709__$1);

return statearr_16755;
})();
if(cljs.core.truth_(inst_16712)){
var statearr_16756_16785 = state_16741__$1;
(statearr_16756_16785[(1)] = (8));

} else {
var statearr_16757_16786 = state_16741__$1;
(statearr_16757_16786[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (14))){
var inst_16734 = (state_16741[(2)]);
var inst_16735 = cljs.core.async.close_BANG_(out);
var state_16741__$1 = (function (){var statearr_16759 = state_16741;
(statearr_16759[(13)] = inst_16734);

return statearr_16759;
})();
var statearr_16760_16787 = state_16741__$1;
(statearr_16760_16787[(2)] = inst_16735);

(statearr_16760_16787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (10))){
var inst_16724 = (state_16741[(2)]);
var state_16741__$1 = state_16741;
var statearr_16761_16788 = state_16741__$1;
(statearr_16761_16788[(2)] = inst_16724);

(statearr_16761_16788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16742 === (8))){
var inst_16709 = (state_16741[(10)]);
var inst_16701 = (state_16741[(7)]);
var inst_16705 = (state_16741[(9)]);
var inst_16714 = inst_16701.push(inst_16705);
var tmp16758 = inst_16701;
var inst_16701__$1 = tmp16758;
var inst_16702 = inst_16709;
var state_16741__$1 = (function (){var statearr_16762 = state_16741;
(statearr_16762[(7)] = inst_16701__$1);

(statearr_16762[(14)] = inst_16714);

(statearr_16762[(8)] = inst_16702);

return statearr_16762;
})();
var statearr_16763_16789 = state_16741__$1;
(statearr_16763_16789[(2)] = null);

(statearr_16763_16789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13993__auto___16775,out))
;
return ((function (switch__13879__auto__,c__13993__auto___16775,out){
return (function() {
var cljs$core$async$state_machine__13880__auto__ = null;
var cljs$core$async$state_machine__13880__auto____0 = (function (){
var statearr_16767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16767[(0)] = cljs$core$async$state_machine__13880__auto__);

(statearr_16767[(1)] = (1));

return statearr_16767;
});
var cljs$core$async$state_machine__13880__auto____1 = (function (state_16741){
while(true){
var ret_value__13881__auto__ = (function (){try{while(true){
var result__13882__auto__ = switch__13879__auto__(state_16741);
if(cljs.core.keyword_identical_QMARK_(result__13882__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13882__auto__;
}
break;
}
}catch (e16768){if((e16768 instanceof Object)){
var ex__13883__auto__ = e16768;
var statearr_16769_16790 = state_16741;
(statearr_16769_16790[(5)] = ex__13883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16741);

return cljs.core.cst$kw$recur;
} else {
throw e16768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13881__auto__,cljs.core.cst$kw$recur)){
var G__16791 = state_16741;
state_16741 = G__16791;
continue;
} else {
return ret_value__13881__auto__;
}
break;
}
});
cljs$core$async$state_machine__13880__auto__ = function(state_16741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13880__auto____1.call(this,state_16741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13880__auto____0;
cljs$core$async$state_machine__13880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13880__auto____1;
return cljs$core$async$state_machine__13880__auto__;
})()
;})(switch__13879__auto__,c__13993__auto___16775,out))
})();
var state__13995__auto__ = (function (){var statearr_16770 = (f__13994__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13994__auto__.cljs$core$IFn$_invoke$arity$0() : f__13994__auto__.call(null));
(statearr_16770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13993__auto___16775);

return statearr_16770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13995__auto__);
});})(c__13993__auto___16775,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
