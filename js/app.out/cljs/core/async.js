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
var args14042 = [];
var len__7513__auto___14048 = arguments.length;
var i__7514__auto___14049 = (0);
while(true){
if((i__7514__auto___14049 < len__7513__auto___14048)){
args14042.push((arguments[i__7514__auto___14049]));

var G__14050 = (i__7514__auto___14049 + (1));
i__7514__auto___14049 = G__14050;
continue;
} else {
}
break;
}

var G__14044 = args14042.length;
switch (G__14044) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14042.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14045 = (function (f,blockable,meta14046){
this.f = f;
this.blockable = blockable;
this.meta14046 = meta14046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14047,meta14046__$1){
var self__ = this;
var _14047__$1 = this;
return (new cljs.core.async.t_cljs$core$async14045(self__.f,self__.blockable,meta14046__$1));
});

cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14047){
var self__ = this;
var _14047__$1 = this;
return self__.meta14046;
});

cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14046], null);
});

cljs.core.async.t_cljs$core$async14045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14045";

cljs.core.async.t_cljs$core$async14045.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14045");
});

cljs.core.async.__GT_t_cljs$core$async14045 = (function cljs$core$async$__GT_t_cljs$core$async14045(f__$1,blockable__$1,meta14046){
return (new cljs.core.async.t_cljs$core$async14045(f__$1,blockable__$1,meta14046));
});

}

return (new cljs.core.async.t_cljs$core$async14045(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args14054 = [];
var len__7513__auto___14057 = arguments.length;
var i__7514__auto___14058 = (0);
while(true){
if((i__7514__auto___14058 < len__7513__auto___14057)){
args14054.push((arguments[i__7514__auto___14058]));

var G__14059 = (i__7514__auto___14058 + (1));
i__7514__auto___14058 = G__14059;
continue;
} else {
}
break;
}

var G__14056 = args14054.length;
switch (G__14056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14054.length)].join('')));

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
var args14061 = [];
var len__7513__auto___14064 = arguments.length;
var i__7514__auto___14065 = (0);
while(true){
if((i__7514__auto___14065 < len__7513__auto___14064)){
args14061.push((arguments[i__7514__auto___14065]));

var G__14066 = (i__7514__auto___14065 + (1));
i__7514__auto___14065 = G__14066;
continue;
} else {
}
break;
}

var G__14063 = args14061.length;
switch (G__14063) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14061.length)].join('')));

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
var args14068 = [];
var len__7513__auto___14071 = arguments.length;
var i__7514__auto___14072 = (0);
while(true){
if((i__7514__auto___14072 < len__7513__auto___14071)){
args14068.push((arguments[i__7514__auto___14072]));

var G__14073 = (i__7514__auto___14072 + (1));
i__7514__auto___14072 = G__14073;
continue;
} else {
}
break;
}

var G__14070 = args14068.length;
switch (G__14070) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14068.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14075 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14075) : fn1.call(null,val_14075));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14075,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14075) : fn1.call(null,val_14075));
});})(val_14075,ret))
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
var args14076 = [];
var len__7513__auto___14079 = arguments.length;
var i__7514__auto___14080 = (0);
while(true){
if((i__7514__auto___14080 < len__7513__auto___14079)){
args14076.push((arguments[i__7514__auto___14080]));

var G__14081 = (i__7514__auto___14080 + (1));
i__7514__auto___14080 = G__14081;
continue;
} else {
}
break;
}

var G__14078 = args14076.length;
switch (G__14078) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14076.length)].join('')));

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
var n__7358__auto___14083 = n;
var x_14084 = (0);
while(true){
if((x_14084 < n__7358__auto___14083)){
(a[x_14084] = (0));

var G__14085 = (x_14084 + (1));
x_14084 = G__14085;
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

var G__14086 = (i + (1));
i = G__14086;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14090 = (function (alt_flag,flag,meta14091){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14091 = meta14091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14092,meta14091__$1){
var self__ = this;
var _14092__$1 = this;
return (new cljs.core.async.t_cljs$core$async14090(self__.alt_flag,self__.flag,meta14091__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14092){
var self__ = this;
var _14092__$1 = this;
return self__.meta14091;
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14091], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14090";

cljs.core.async.t_cljs$core$async14090.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14090");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14090 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14090(alt_flag__$1,flag__$1,meta14091){
return (new cljs.core.async.t_cljs$core$async14090(alt_flag__$1,flag__$1,meta14091));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14090(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14096 = (function (alt_handler,flag,cb,meta14097){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14097 = meta14097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14098,meta14097__$1){
var self__ = this;
var _14098__$1 = this;
return (new cljs.core.async.t_cljs$core$async14096(self__.alt_handler,self__.flag,self__.cb,meta14097__$1));
});

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14098){
var self__ = this;
var _14098__$1 = this;
return self__.meta14097;
});

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14097], null);
});

cljs.core.async.t_cljs$core$async14096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14096";

cljs.core.async.t_cljs$core$async14096.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async14096");
});

cljs.core.async.__GT_t_cljs$core$async14096 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14096(alt_handler__$1,flag__$1,cb__$1,meta14097){
return (new cljs.core.async.t_cljs$core$async14096(alt_handler__$1,flag__$1,cb__$1,meta14097));
});

}

return (new cljs.core.async.t_cljs$core$async14096(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14099_SHARP_){
var G__14103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14099_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14103) : fret.call(null,G__14103));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14100_SHARP_){
var G__14104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14100_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14104) : fret.call(null,G__14104));
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
var G__14105 = (i + (1));
i = G__14105;
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
var len__7513__auto___14111 = arguments.length;
var i__7514__auto___14112 = (0);
while(true){
if((i__7514__auto___14112 < len__7513__auto___14111)){
args__7520__auto__.push((arguments[i__7514__auto___14112]));

var G__14113 = (i__7514__auto___14112 + (1));
i__7514__auto___14112 = G__14113;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14108){
var map__14109 = p__14108;
var map__14109__$1 = ((((!((map__14109 == null)))?((((map__14109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14109):map__14109);
var opts = map__14109__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14106){
var G__14107 = cljs.core.first(seq14106);
var seq14106__$1 = cljs.core.next(seq14106);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14107,seq14106__$1);
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
var args14114 = [];
var len__7513__auto___14164 = arguments.length;
var i__7514__auto___14165 = (0);
while(true){
if((i__7514__auto___14165 < len__7513__auto___14164)){
args14114.push((arguments[i__7514__auto___14165]));

var G__14166 = (i__7514__auto___14165 + (1));
i__7514__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var G__14116 = args14114.length;
switch (G__14116) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14114.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13997__auto___14168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___14168){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___14168){
return (function (state_14140){
var state_val_14141 = (state_14140[(1)]);
if((state_val_14141 === (7))){
var inst_14136 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
var statearr_14142_14169 = state_14140__$1;
(statearr_14142_14169[(2)] = inst_14136);

(statearr_14142_14169[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (1))){
var state_14140__$1 = state_14140;
var statearr_14143_14170 = state_14140__$1;
(statearr_14143_14170[(2)] = null);

(statearr_14143_14170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (4))){
var inst_14119 = (state_14140[(7)]);
var inst_14119__$1 = (state_14140[(2)]);
var inst_14120 = (inst_14119__$1 == null);
var state_14140__$1 = (function (){var statearr_14144 = state_14140;
(statearr_14144[(7)] = inst_14119__$1);

return statearr_14144;
})();
if(cljs.core.truth_(inst_14120)){
var statearr_14145_14171 = state_14140__$1;
(statearr_14145_14171[(1)] = (5));

} else {
var statearr_14146_14172 = state_14140__$1;
(statearr_14146_14172[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (13))){
var state_14140__$1 = state_14140;
var statearr_14147_14173 = state_14140__$1;
(statearr_14147_14173[(2)] = null);

(statearr_14147_14173[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (6))){
var inst_14119 = (state_14140[(7)]);
var state_14140__$1 = state_14140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14140__$1,(11),to,inst_14119);
} else {
if((state_val_14141 === (3))){
var inst_14138 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14140__$1,inst_14138);
} else {
if((state_val_14141 === (12))){
var state_14140__$1 = state_14140;
var statearr_14148_14174 = state_14140__$1;
(statearr_14148_14174[(2)] = null);

(statearr_14148_14174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (2))){
var state_14140__$1 = state_14140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14140__$1,(4),from);
} else {
if((state_val_14141 === (11))){
var inst_14129 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
if(cljs.core.truth_(inst_14129)){
var statearr_14149_14175 = state_14140__$1;
(statearr_14149_14175[(1)] = (12));

} else {
var statearr_14150_14176 = state_14140__$1;
(statearr_14150_14176[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (9))){
var state_14140__$1 = state_14140;
var statearr_14151_14177 = state_14140__$1;
(statearr_14151_14177[(2)] = null);

(statearr_14151_14177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (5))){
var state_14140__$1 = state_14140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14152_14178 = state_14140__$1;
(statearr_14152_14178[(1)] = (8));

} else {
var statearr_14153_14179 = state_14140__$1;
(statearr_14153_14179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (14))){
var inst_14134 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
var statearr_14154_14180 = state_14140__$1;
(statearr_14154_14180[(2)] = inst_14134);

(statearr_14154_14180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (10))){
var inst_14126 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
var statearr_14155_14181 = state_14140__$1;
(statearr_14155_14181[(2)] = inst_14126);

(statearr_14155_14181[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14141 === (8))){
var inst_14123 = cljs.core.async.close_BANG_(to);
var state_14140__$1 = state_14140;
var statearr_14156_14182 = state_14140__$1;
(statearr_14156_14182[(2)] = inst_14123);

(statearr_14156_14182[(1)] = (10));


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
});})(c__13997__auto___14168))
;
return ((function (switch__13883__auto__,c__13997__auto___14168){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_14160 = [null,null,null,null,null,null,null,null];
(statearr_14160[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_14160[(1)] = (1));

return statearr_14160;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_14140){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14140);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14161){if((e14161 instanceof Object)){
var ex__13887__auto__ = e14161;
var statearr_14162_14183 = state_14140;
(statearr_14162_14183[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14140);

return cljs.core.cst$kw$recur;
} else {
throw e14161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14184 = state_14140;
state_14140 = G__14184;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_14140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_14140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___14168))
})();
var state__13999__auto__ = (function (){var statearr_14163 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14168);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___14168))
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
return (function (p__14368){
var vec__14369 = p__14368;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
var job = vec__14369;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13997__auto___14551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results){
return (function (state_14374){
var state_val_14375 = (state_14374[(1)]);
if((state_val_14375 === (1))){
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14374__$1,(2),res,v);
} else {
if((state_val_14375 === (2))){
var inst_14371 = (state_14374[(2)]);
var inst_14372 = cljs.core.async.close_BANG_(res);
var state_14374__$1 = (function (){var statearr_14376 = state_14374;
(statearr_14376[(7)] = inst_14371);

return statearr_14376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14374__$1,inst_14372);
} else {
return null;
}
}
});})(c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results))
;
return ((function (switch__13883__auto__,c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_14380 = [null,null,null,null,null,null,null,null];
(statearr_14380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__);

(statearr_14380[(1)] = (1));

return statearr_14380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1 = (function (state_14374){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14374);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14381){if((e14381 instanceof Object)){
var ex__13887__auto__ = e14381;
var statearr_14382_14552 = state_14374;
(statearr_14382_14552[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14374);

return cljs.core.cst$kw$recur;
} else {
throw e14381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14553 = state_14374;
state_14374 = G__14553;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = function(state_14374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1.call(this,state_14374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results))
})();
var state__13999__auto__ = (function (){var statearr_14383 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14551);

return statearr_14383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___14551,res,vec__14369,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14384){
var vec__14385 = p__14384;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(1),null);
var job = vec__14385;
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
var n__7358__auto___14554 = n;
var __14555 = (0);
while(true){
if((__14555 < n__7358__auto___14554)){
var G__14386_14556 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14386_14556) {
case "compute":
var c__13997__auto___14558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14555,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (__14555,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function (state_14399){
var state_val_14400 = (state_14399[(1)]);
if((state_val_14400 === (1))){
var state_14399__$1 = state_14399;
var statearr_14401_14559 = state_14399__$1;
(statearr_14401_14559[(2)] = null);

(statearr_14401_14559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14400 === (2))){
var state_14399__$1 = state_14399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14399__$1,(4),jobs);
} else {
if((state_val_14400 === (3))){
var inst_14397 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14399__$1,inst_14397);
} else {
if((state_val_14400 === (4))){
var inst_14389 = (state_14399[(2)]);
var inst_14390 = process(inst_14389);
var state_14399__$1 = state_14399;
if(cljs.core.truth_(inst_14390)){
var statearr_14402_14560 = state_14399__$1;
(statearr_14402_14560[(1)] = (5));

} else {
var statearr_14403_14561 = state_14399__$1;
(statearr_14403_14561[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14400 === (5))){
var state_14399__$1 = state_14399;
var statearr_14404_14562 = state_14399__$1;
(statearr_14404_14562[(2)] = null);

(statearr_14404_14562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14400 === (6))){
var state_14399__$1 = state_14399;
var statearr_14405_14563 = state_14399__$1;
(statearr_14405_14563[(2)] = null);

(statearr_14405_14563[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14400 === (7))){
var inst_14395 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14406_14564 = state_14399__$1;
(statearr_14406_14564[(2)] = inst_14395);

(statearr_14406_14564[(1)] = (3));


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
});})(__14555,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
;
return ((function (__14555,switch__13883__auto__,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_14410 = [null,null,null,null,null,null,null];
(statearr_14410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__);

(statearr_14410[(1)] = (1));

return statearr_14410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1 = (function (state_14399){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14399);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14411){if((e14411 instanceof Object)){
var ex__13887__auto__ = e14411;
var statearr_14412_14565 = state_14399;
(statearr_14412_14565[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14399);

return cljs.core.cst$kw$recur;
} else {
throw e14411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14566 = state_14399;
state_14399 = G__14566;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = function(state_14399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1.call(this,state_14399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__;
})()
;})(__14555,switch__13883__auto__,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
})();
var state__13999__auto__ = (function (){var statearr_14413 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14558);

return statearr_14413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(__14555,c__13997__auto___14558,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
);


break;
case "async":
var c__13997__auto___14567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14555,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (__14555,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function (state_14426){
var state_val_14427 = (state_14426[(1)]);
if((state_val_14427 === (1))){
var state_14426__$1 = state_14426;
var statearr_14428_14568 = state_14426__$1;
(statearr_14428_14568[(2)] = null);

(statearr_14428_14568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14427 === (2))){
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14426__$1,(4),jobs);
} else {
if((state_val_14427 === (3))){
var inst_14424 = (state_14426[(2)]);
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14426__$1,inst_14424);
} else {
if((state_val_14427 === (4))){
var inst_14416 = (state_14426[(2)]);
var inst_14417 = async(inst_14416);
var state_14426__$1 = state_14426;
if(cljs.core.truth_(inst_14417)){
var statearr_14429_14569 = state_14426__$1;
(statearr_14429_14569[(1)] = (5));

} else {
var statearr_14430_14570 = state_14426__$1;
(statearr_14430_14570[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14427 === (5))){
var state_14426__$1 = state_14426;
var statearr_14431_14571 = state_14426__$1;
(statearr_14431_14571[(2)] = null);

(statearr_14431_14571[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14427 === (6))){
var state_14426__$1 = state_14426;
var statearr_14432_14572 = state_14426__$1;
(statearr_14432_14572[(2)] = null);

(statearr_14432_14572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14427 === (7))){
var inst_14422 = (state_14426[(2)]);
var state_14426__$1 = state_14426;
var statearr_14433_14573 = state_14426__$1;
(statearr_14433_14573[(2)] = inst_14422);

(statearr_14433_14573[(1)] = (3));


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
});})(__14555,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
;
return ((function (__14555,switch__13883__auto__,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_14437 = [null,null,null,null,null,null,null];
(statearr_14437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__);

(statearr_14437[(1)] = (1));

return statearr_14437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1 = (function (state_14426){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14426);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14438){if((e14438 instanceof Object)){
var ex__13887__auto__ = e14438;
var statearr_14439_14574 = state_14426;
(statearr_14439_14574[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14426);

return cljs.core.cst$kw$recur;
} else {
throw e14438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14575 = state_14426;
state_14426 = G__14575;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = function(state_14426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1.call(this,state_14426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__;
})()
;})(__14555,switch__13883__auto__,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
})();
var state__13999__auto__ = (function (){var statearr_14440 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14567);

return statearr_14440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(__14555,c__13997__auto___14567,G__14386_14556,n__7358__auto___14554,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14576 = (__14555 + (1));
__14555 = G__14576;
continue;
} else {
}
break;
}

var c__13997__auto___14577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___14577,jobs,results,process,async){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___14577,jobs,results,process,async){
return (function (state_14462){
var state_val_14463 = (state_14462[(1)]);
if((state_val_14463 === (1))){
var state_14462__$1 = state_14462;
var statearr_14464_14578 = state_14462__$1;
(statearr_14464_14578[(2)] = null);

(statearr_14464_14578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14463 === (2))){
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14462__$1,(4),from);
} else {
if((state_val_14463 === (3))){
var inst_14460 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14462__$1,inst_14460);
} else {
if((state_val_14463 === (4))){
var inst_14443 = (state_14462[(7)]);
var inst_14443__$1 = (state_14462[(2)]);
var inst_14444 = (inst_14443__$1 == null);
var state_14462__$1 = (function (){var statearr_14465 = state_14462;
(statearr_14465[(7)] = inst_14443__$1);

return statearr_14465;
})();
if(cljs.core.truth_(inst_14444)){
var statearr_14466_14579 = state_14462__$1;
(statearr_14466_14579[(1)] = (5));

} else {
var statearr_14467_14580 = state_14462__$1;
(statearr_14467_14580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14463 === (5))){
var inst_14446 = cljs.core.async.close_BANG_(jobs);
var state_14462__$1 = state_14462;
var statearr_14468_14581 = state_14462__$1;
(statearr_14468_14581[(2)] = inst_14446);

(statearr_14468_14581[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14463 === (6))){
var inst_14448 = (state_14462[(8)]);
var inst_14443 = (state_14462[(7)]);
var inst_14448__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14450 = [inst_14443,inst_14448__$1];
var inst_14451 = (new cljs.core.PersistentVector(null,2,(5),inst_14449,inst_14450,null));
var state_14462__$1 = (function (){var statearr_14469 = state_14462;
(statearr_14469[(8)] = inst_14448__$1);

return statearr_14469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14462__$1,(8),jobs,inst_14451);
} else {
if((state_val_14463 === (7))){
var inst_14458 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
var statearr_14470_14582 = state_14462__$1;
(statearr_14470_14582[(2)] = inst_14458);

(statearr_14470_14582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14463 === (8))){
var inst_14448 = (state_14462[(8)]);
var inst_14453 = (state_14462[(2)]);
var state_14462__$1 = (function (){var statearr_14471 = state_14462;
(statearr_14471[(9)] = inst_14453);

return statearr_14471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14462__$1,(9),results,inst_14448);
} else {
if((state_val_14463 === (9))){
var inst_14455 = (state_14462[(2)]);
var state_14462__$1 = (function (){var statearr_14472 = state_14462;
(statearr_14472[(10)] = inst_14455);

return statearr_14472;
})();
var statearr_14473_14583 = state_14462__$1;
(statearr_14473_14583[(2)] = null);

(statearr_14473_14583[(1)] = (2));


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
});})(c__13997__auto___14577,jobs,results,process,async))
;
return ((function (switch__13883__auto__,c__13997__auto___14577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1 = (function (state_14462){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14462);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14478){if((e14478 instanceof Object)){
var ex__13887__auto__ = e14478;
var statearr_14479_14584 = state_14462;
(statearr_14479_14584[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14462);

return cljs.core.cst$kw$recur;
} else {
throw e14478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14585 = state_14462;
state_14462 = G__14585;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = function(state_14462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1.call(this,state_14462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___14577,jobs,results,process,async))
})();
var state__13999__auto__ = (function (){var statearr_14480 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14577);

return statearr_14480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___14577,jobs,results,process,async))
);


var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__,jobs,results,process,async){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__,jobs,results,process,async){
return (function (state_14518){
var state_val_14519 = (state_14518[(1)]);
if((state_val_14519 === (7))){
var inst_14514 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14520_14586 = state_14518__$1;
(statearr_14520_14586[(2)] = inst_14514);

(statearr_14520_14586[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (20))){
var state_14518__$1 = state_14518;
var statearr_14521_14587 = state_14518__$1;
(statearr_14521_14587[(2)] = null);

(statearr_14521_14587[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (1))){
var state_14518__$1 = state_14518;
var statearr_14522_14588 = state_14518__$1;
(statearr_14522_14588[(2)] = null);

(statearr_14522_14588[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (4))){
var inst_14483 = (state_14518[(7)]);
var inst_14483__$1 = (state_14518[(2)]);
var inst_14484 = (inst_14483__$1 == null);
var state_14518__$1 = (function (){var statearr_14523 = state_14518;
(statearr_14523[(7)] = inst_14483__$1);

return statearr_14523;
})();
if(cljs.core.truth_(inst_14484)){
var statearr_14524_14589 = state_14518__$1;
(statearr_14524_14589[(1)] = (5));

} else {
var statearr_14525_14590 = state_14518__$1;
(statearr_14525_14590[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (15))){
var inst_14496 = (state_14518[(8)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14518__$1,(18),to,inst_14496);
} else {
if((state_val_14519 === (21))){
var inst_14509 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14526_14591 = state_14518__$1;
(statearr_14526_14591[(2)] = inst_14509);

(statearr_14526_14591[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (13))){
var inst_14511 = (state_14518[(2)]);
var state_14518__$1 = (function (){var statearr_14527 = state_14518;
(statearr_14527[(9)] = inst_14511);

return statearr_14527;
})();
var statearr_14528_14592 = state_14518__$1;
(statearr_14528_14592[(2)] = null);

(statearr_14528_14592[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (6))){
var inst_14483 = (state_14518[(7)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14518__$1,(11),inst_14483);
} else {
if((state_val_14519 === (17))){
var inst_14504 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
if(cljs.core.truth_(inst_14504)){
var statearr_14529_14593 = state_14518__$1;
(statearr_14529_14593[(1)] = (19));

} else {
var statearr_14530_14594 = state_14518__$1;
(statearr_14530_14594[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (3))){
var inst_14516 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14518__$1,inst_14516);
} else {
if((state_val_14519 === (12))){
var inst_14493 = (state_14518[(10)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14518__$1,(14),inst_14493);
} else {
if((state_val_14519 === (2))){
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14518__$1,(4),results);
} else {
if((state_val_14519 === (19))){
var state_14518__$1 = state_14518;
var statearr_14531_14595 = state_14518__$1;
(statearr_14531_14595[(2)] = null);

(statearr_14531_14595[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (11))){
var inst_14493 = (state_14518[(2)]);
var state_14518__$1 = (function (){var statearr_14532 = state_14518;
(statearr_14532[(10)] = inst_14493);

return statearr_14532;
})();
var statearr_14533_14596 = state_14518__$1;
(statearr_14533_14596[(2)] = null);

(statearr_14533_14596[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (9))){
var state_14518__$1 = state_14518;
var statearr_14534_14597 = state_14518__$1;
(statearr_14534_14597[(2)] = null);

(statearr_14534_14597[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (5))){
var state_14518__$1 = state_14518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14535_14598 = state_14518__$1;
(statearr_14535_14598[(1)] = (8));

} else {
var statearr_14536_14599 = state_14518__$1;
(statearr_14536_14599[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (14))){
var inst_14496 = (state_14518[(8)]);
var inst_14498 = (state_14518[(11)]);
var inst_14496__$1 = (state_14518[(2)]);
var inst_14497 = (inst_14496__$1 == null);
var inst_14498__$1 = cljs.core.not(inst_14497);
var state_14518__$1 = (function (){var statearr_14537 = state_14518;
(statearr_14537[(8)] = inst_14496__$1);

(statearr_14537[(11)] = inst_14498__$1);

return statearr_14537;
})();
if(inst_14498__$1){
var statearr_14538_14600 = state_14518__$1;
(statearr_14538_14600[(1)] = (15));

} else {
var statearr_14539_14601 = state_14518__$1;
(statearr_14539_14601[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (16))){
var inst_14498 = (state_14518[(11)]);
var state_14518__$1 = state_14518;
var statearr_14540_14602 = state_14518__$1;
(statearr_14540_14602[(2)] = inst_14498);

(statearr_14540_14602[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (10))){
var inst_14490 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14541_14603 = state_14518__$1;
(statearr_14541_14603[(2)] = inst_14490);

(statearr_14541_14603[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (18))){
var inst_14501 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14542_14604 = state_14518__$1;
(statearr_14542_14604[(2)] = inst_14501);

(statearr_14542_14604[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14519 === (8))){
var inst_14487 = cljs.core.async.close_BANG_(to);
var state_14518__$1 = state_14518;
var statearr_14543_14605 = state_14518__$1;
(statearr_14543_14605[(2)] = inst_14487);

(statearr_14543_14605[(1)] = (10));


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
});})(c__13997__auto__,jobs,results,process,async))
;
return ((function (switch__13883__auto__,c__13997__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_14547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__);

(statearr_14547[(1)] = (1));

return statearr_14547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1 = (function (state_14518){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14518);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14548){if((e14548 instanceof Object)){
var ex__13887__auto__ = e14548;
var statearr_14549_14606 = state_14518;
(statearr_14549_14606[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14518);

return cljs.core.cst$kw$recur;
} else {
throw e14548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14607 = state_14518;
state_14518 = G__14607;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__ = function(state_14518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1.call(this,state_14518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__,jobs,results,process,async))
})();
var state__13999__auto__ = (function (){var statearr_14550 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_14550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__,jobs,results,process,async))
);

return c__13997__auto__;
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
var args14608 = [];
var len__7513__auto___14611 = arguments.length;
var i__7514__auto___14612 = (0);
while(true){
if((i__7514__auto___14612 < len__7513__auto___14611)){
args14608.push((arguments[i__7514__auto___14612]));

var G__14613 = (i__7514__auto___14612 + (1));
i__7514__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var G__14610 = args14608.length;
switch (G__14610) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14608.length)].join('')));

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
var args14615 = [];
var len__7513__auto___14618 = arguments.length;
var i__7514__auto___14619 = (0);
while(true){
if((i__7514__auto___14619 < len__7513__auto___14618)){
args14615.push((arguments[i__7514__auto___14619]));

var G__14620 = (i__7514__auto___14619 + (1));
i__7514__auto___14619 = G__14620;
continue;
} else {
}
break;
}

var G__14617 = args14615.length;
switch (G__14617) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14615.length)].join('')));

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
var args14622 = [];
var len__7513__auto___14675 = arguments.length;
var i__7514__auto___14676 = (0);
while(true){
if((i__7514__auto___14676 < len__7513__auto___14675)){
args14622.push((arguments[i__7514__auto___14676]));

var G__14677 = (i__7514__auto___14676 + (1));
i__7514__auto___14676 = G__14677;
continue;
} else {
}
break;
}

var G__14624 = args14622.length;
switch (G__14624) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14622.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13997__auto___14679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___14679,tc,fc){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___14679,tc,fc){
return (function (state_14650){
var state_val_14651 = (state_14650[(1)]);
if((state_val_14651 === (7))){
var inst_14646 = (state_14650[(2)]);
var state_14650__$1 = state_14650;
var statearr_14652_14680 = state_14650__$1;
(statearr_14652_14680[(2)] = inst_14646);

(statearr_14652_14680[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (1))){
var state_14650__$1 = state_14650;
var statearr_14653_14681 = state_14650__$1;
(statearr_14653_14681[(2)] = null);

(statearr_14653_14681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (4))){
var inst_14627 = (state_14650[(7)]);
var inst_14627__$1 = (state_14650[(2)]);
var inst_14628 = (inst_14627__$1 == null);
var state_14650__$1 = (function (){var statearr_14654 = state_14650;
(statearr_14654[(7)] = inst_14627__$1);

return statearr_14654;
})();
if(cljs.core.truth_(inst_14628)){
var statearr_14655_14682 = state_14650__$1;
(statearr_14655_14682[(1)] = (5));

} else {
var statearr_14656_14683 = state_14650__$1;
(statearr_14656_14683[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (13))){
var state_14650__$1 = state_14650;
var statearr_14657_14684 = state_14650__$1;
(statearr_14657_14684[(2)] = null);

(statearr_14657_14684[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (6))){
var inst_14627 = (state_14650[(7)]);
var inst_14633 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14627) : p.call(null,inst_14627));
var state_14650__$1 = state_14650;
if(cljs.core.truth_(inst_14633)){
var statearr_14658_14685 = state_14650__$1;
(statearr_14658_14685[(1)] = (9));

} else {
var statearr_14659_14686 = state_14650__$1;
(statearr_14659_14686[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (3))){
var inst_14648 = (state_14650[(2)]);
var state_14650__$1 = state_14650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14650__$1,inst_14648);
} else {
if((state_val_14651 === (12))){
var state_14650__$1 = state_14650;
var statearr_14660_14687 = state_14650__$1;
(statearr_14660_14687[(2)] = null);

(statearr_14660_14687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (2))){
var state_14650__$1 = state_14650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14650__$1,(4),ch);
} else {
if((state_val_14651 === (11))){
var inst_14627 = (state_14650[(7)]);
var inst_14637 = (state_14650[(2)]);
var state_14650__$1 = state_14650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14650__$1,(8),inst_14637,inst_14627);
} else {
if((state_val_14651 === (9))){
var state_14650__$1 = state_14650;
var statearr_14661_14688 = state_14650__$1;
(statearr_14661_14688[(2)] = tc);

(statearr_14661_14688[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (5))){
var inst_14630 = cljs.core.async.close_BANG_(tc);
var inst_14631 = cljs.core.async.close_BANG_(fc);
var state_14650__$1 = (function (){var statearr_14662 = state_14650;
(statearr_14662[(8)] = inst_14630);

return statearr_14662;
})();
var statearr_14663_14689 = state_14650__$1;
(statearr_14663_14689[(2)] = inst_14631);

(statearr_14663_14689[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (14))){
var inst_14644 = (state_14650[(2)]);
var state_14650__$1 = state_14650;
var statearr_14664_14690 = state_14650__$1;
(statearr_14664_14690[(2)] = inst_14644);

(statearr_14664_14690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (10))){
var state_14650__$1 = state_14650;
var statearr_14665_14691 = state_14650__$1;
(statearr_14665_14691[(2)] = fc);

(statearr_14665_14691[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14651 === (8))){
var inst_14639 = (state_14650[(2)]);
var state_14650__$1 = state_14650;
if(cljs.core.truth_(inst_14639)){
var statearr_14666_14692 = state_14650__$1;
(statearr_14666_14692[(1)] = (12));

} else {
var statearr_14667_14693 = state_14650__$1;
(statearr_14667_14693[(1)] = (13));

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
});})(c__13997__auto___14679,tc,fc))
;
return ((function (switch__13883__auto__,c__13997__auto___14679,tc,fc){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_14671 = [null,null,null,null,null,null,null,null,null];
(statearr_14671[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_14671[(1)] = (1));

return statearr_14671;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_14650){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14650);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14672){if((e14672 instanceof Object)){
var ex__13887__auto__ = e14672;
var statearr_14673_14694 = state_14650;
(statearr_14673_14694[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14650);

return cljs.core.cst$kw$recur;
} else {
throw e14672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14695 = state_14650;
state_14650 = G__14695;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_14650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_14650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___14679,tc,fc))
})();
var state__13999__auto__ = (function (){var statearr_14674 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___14679);

return statearr_14674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___14679,tc,fc))
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
var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_14759){
var state_val_14760 = (state_14759[(1)]);
if((state_val_14760 === (7))){
var inst_14755 = (state_14759[(2)]);
var state_14759__$1 = state_14759;
var statearr_14761_14782 = state_14759__$1;
(statearr_14761_14782[(2)] = inst_14755);

(statearr_14761_14782[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (1))){
var inst_14739 = init;
var state_14759__$1 = (function (){var statearr_14762 = state_14759;
(statearr_14762[(7)] = inst_14739);

return statearr_14762;
})();
var statearr_14763_14783 = state_14759__$1;
(statearr_14763_14783[(2)] = null);

(statearr_14763_14783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (4))){
var inst_14742 = (state_14759[(8)]);
var inst_14742__$1 = (state_14759[(2)]);
var inst_14743 = (inst_14742__$1 == null);
var state_14759__$1 = (function (){var statearr_14764 = state_14759;
(statearr_14764[(8)] = inst_14742__$1);

return statearr_14764;
})();
if(cljs.core.truth_(inst_14743)){
var statearr_14765_14784 = state_14759__$1;
(statearr_14765_14784[(1)] = (5));

} else {
var statearr_14766_14785 = state_14759__$1;
(statearr_14766_14785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (6))){
var inst_14746 = (state_14759[(9)]);
var inst_14742 = (state_14759[(8)]);
var inst_14739 = (state_14759[(7)]);
var inst_14746__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14739,inst_14742) : f.call(null,inst_14739,inst_14742));
var inst_14747 = cljs.core.reduced_QMARK_(inst_14746__$1);
var state_14759__$1 = (function (){var statearr_14767 = state_14759;
(statearr_14767[(9)] = inst_14746__$1);

return statearr_14767;
})();
if(inst_14747){
var statearr_14768_14786 = state_14759__$1;
(statearr_14768_14786[(1)] = (8));

} else {
var statearr_14769_14787 = state_14759__$1;
(statearr_14769_14787[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (3))){
var inst_14757 = (state_14759[(2)]);
var state_14759__$1 = state_14759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14759__$1,inst_14757);
} else {
if((state_val_14760 === (2))){
var state_14759__$1 = state_14759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14759__$1,(4),ch);
} else {
if((state_val_14760 === (9))){
var inst_14746 = (state_14759[(9)]);
var inst_14739 = inst_14746;
var state_14759__$1 = (function (){var statearr_14770 = state_14759;
(statearr_14770[(7)] = inst_14739);

return statearr_14770;
})();
var statearr_14771_14788 = state_14759__$1;
(statearr_14771_14788[(2)] = null);

(statearr_14771_14788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (5))){
var inst_14739 = (state_14759[(7)]);
var state_14759__$1 = state_14759;
var statearr_14772_14789 = state_14759__$1;
(statearr_14772_14789[(2)] = inst_14739);

(statearr_14772_14789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (10))){
var inst_14753 = (state_14759[(2)]);
var state_14759__$1 = state_14759;
var statearr_14773_14790 = state_14759__$1;
(statearr_14773_14790[(2)] = inst_14753);

(statearr_14773_14790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14760 === (8))){
var inst_14746 = (state_14759[(9)]);
var inst_14749 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14746) : cljs.core.deref.call(null,inst_14746));
var state_14759__$1 = state_14759;
var statearr_14774_14791 = state_14759__$1;
(statearr_14774_14791[(2)] = inst_14749);

(statearr_14774_14791[(1)] = (10));


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
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13884__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13884__auto____0 = (function (){
var statearr_14778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14778[(0)] = cljs$core$async$reduce_$_state_machine__13884__auto__);

(statearr_14778[(1)] = (1));

return statearr_14778;
});
var cljs$core$async$reduce_$_state_machine__13884__auto____1 = (function (state_14759){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14759);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14779){if((e14779 instanceof Object)){
var ex__13887__auto__ = e14779;
var statearr_14780_14792 = state_14759;
(statearr_14780_14792[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14759);

return cljs.core.cst$kw$recur;
} else {
throw e14779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14793 = state_14759;
state_14759 = G__14793;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13884__auto__ = function(state_14759){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13884__auto____1.call(this,state_14759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13884__auto____0;
cljs$core$async$reduce_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13884__auto____1;
return cljs$core$async$reduce_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_14781 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_14781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
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
var args14794 = [];
var len__7513__auto___14846 = arguments.length;
var i__7514__auto___14847 = (0);
while(true){
if((i__7514__auto___14847 < len__7513__auto___14846)){
args14794.push((arguments[i__7514__auto___14847]));

var G__14848 = (i__7514__auto___14847 + (1));
i__7514__auto___14847 = G__14848;
continue;
} else {
}
break;
}

var G__14796 = args14794.length;
switch (G__14796) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14794.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_14821){
var state_val_14822 = (state_14821[(1)]);
if((state_val_14822 === (7))){
var inst_14803 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
var statearr_14823_14850 = state_14821__$1;
(statearr_14823_14850[(2)] = inst_14803);

(statearr_14823_14850[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (1))){
var inst_14797 = cljs.core.seq(coll);
var inst_14798 = inst_14797;
var state_14821__$1 = (function (){var statearr_14824 = state_14821;
(statearr_14824[(7)] = inst_14798);

return statearr_14824;
})();
var statearr_14825_14851 = state_14821__$1;
(statearr_14825_14851[(2)] = null);

(statearr_14825_14851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (4))){
var inst_14798 = (state_14821[(7)]);
var inst_14801 = cljs.core.first(inst_14798);
var state_14821__$1 = state_14821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14821__$1,(7),ch,inst_14801);
} else {
if((state_val_14822 === (13))){
var inst_14815 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
var statearr_14826_14852 = state_14821__$1;
(statearr_14826_14852[(2)] = inst_14815);

(statearr_14826_14852[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (6))){
var inst_14806 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
if(cljs.core.truth_(inst_14806)){
var statearr_14827_14853 = state_14821__$1;
(statearr_14827_14853[(1)] = (8));

} else {
var statearr_14828_14854 = state_14821__$1;
(statearr_14828_14854[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (3))){
var inst_14819 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14821__$1,inst_14819);
} else {
if((state_val_14822 === (12))){
var state_14821__$1 = state_14821;
var statearr_14829_14855 = state_14821__$1;
(statearr_14829_14855[(2)] = null);

(statearr_14829_14855[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (2))){
var inst_14798 = (state_14821[(7)]);
var state_14821__$1 = state_14821;
if(cljs.core.truth_(inst_14798)){
var statearr_14830_14856 = state_14821__$1;
(statearr_14830_14856[(1)] = (4));

} else {
var statearr_14831_14857 = state_14821__$1;
(statearr_14831_14857[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (11))){
var inst_14812 = cljs.core.async.close_BANG_(ch);
var state_14821__$1 = state_14821;
var statearr_14832_14858 = state_14821__$1;
(statearr_14832_14858[(2)] = inst_14812);

(statearr_14832_14858[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (9))){
var state_14821__$1 = state_14821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14833_14859 = state_14821__$1;
(statearr_14833_14859[(1)] = (11));

} else {
var statearr_14834_14860 = state_14821__$1;
(statearr_14834_14860[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (5))){
var inst_14798 = (state_14821[(7)]);
var state_14821__$1 = state_14821;
var statearr_14835_14861 = state_14821__$1;
(statearr_14835_14861[(2)] = inst_14798);

(statearr_14835_14861[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (10))){
var inst_14817 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
var statearr_14836_14862 = state_14821__$1;
(statearr_14836_14862[(2)] = inst_14817);

(statearr_14836_14862[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14822 === (8))){
var inst_14798 = (state_14821[(7)]);
var inst_14808 = cljs.core.next(inst_14798);
var inst_14798__$1 = inst_14808;
var state_14821__$1 = (function (){var statearr_14837 = state_14821;
(statearr_14837[(7)] = inst_14798__$1);

return statearr_14837;
})();
var statearr_14838_14863 = state_14821__$1;
(statearr_14838_14863[(2)] = null);

(statearr_14838_14863[(1)] = (2));


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
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_14842 = [null,null,null,null,null,null,null,null];
(statearr_14842[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_14842[(1)] = (1));

return statearr_14842;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_14821){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_14821);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e14843){if((e14843 instanceof Object)){
var ex__13887__auto__ = e14843;
var statearr_14844_14864 = state_14821;
(statearr_14844_14864[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14821);

return cljs.core.cst$kw$recur;
} else {
throw e14843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__14865 = state_14821;
state_14821 = G__14865;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_14821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_14845 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_14845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_14845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
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
var cs = (function (){var G__15090 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15090) : cljs.core.atom.call(null,G__15090));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15091 = (function (mult,ch,cs,meta15092){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15092 = meta15092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15093,meta15092__$1){
var self__ = this;
var _15093__$1 = this;
return (new cljs.core.async.t_cljs$core$async15091(self__.mult,self__.ch,self__.cs,meta15092__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15093){
var self__ = this;
var _15093__$1 = this;
return self__.meta15092;
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15094_15314 = self__.cs;
var G__15095_15315 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15094_15314,G__15095_15315) : cljs.core.reset_BANG_.call(null,G__15094_15314,G__15095_15315));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15092], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15091";

cljs.core.async.t_cljs$core$async15091.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15091");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15091 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15091(mult__$1,ch__$1,cs__$1,meta15092){
return (new cljs.core.async.t_cljs$core$async15091(mult__$1,ch__$1,cs__$1,meta15092));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15091(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13997__auto___15316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___15316,cs,m,dchan,dctr,done){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___15316,cs,m,dchan,dctr,done){
return (function (state_15226){
var state_val_15227 = (state_15226[(1)]);
if((state_val_15227 === (7))){
var inst_15222 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15228_15317 = state_15226__$1;
(statearr_15228_15317[(2)] = inst_15222);

(statearr_15228_15317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (20))){
var inst_15127 = (state_15226[(7)]);
var inst_15137 = cljs.core.first(inst_15127);
var inst_15138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15137,(0),null);
var inst_15139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15137,(1),null);
var state_15226__$1 = (function (){var statearr_15229 = state_15226;
(statearr_15229[(8)] = inst_15138);

return statearr_15229;
})();
if(cljs.core.truth_(inst_15139)){
var statearr_15230_15318 = state_15226__$1;
(statearr_15230_15318[(1)] = (22));

} else {
var statearr_15231_15319 = state_15226__$1;
(statearr_15231_15319[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (27))){
var inst_15169 = (state_15226[(9)]);
var inst_15174 = (state_15226[(10)]);
var inst_15167 = (state_15226[(11)]);
var inst_15098 = (state_15226[(12)]);
var inst_15174__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15167,inst_15169);
var inst_15175 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15174__$1,inst_15098,done);
var state_15226__$1 = (function (){var statearr_15232 = state_15226;
(statearr_15232[(10)] = inst_15174__$1);

return statearr_15232;
})();
if(cljs.core.truth_(inst_15175)){
var statearr_15233_15320 = state_15226__$1;
(statearr_15233_15320[(1)] = (30));

} else {
var statearr_15234_15321 = state_15226__$1;
(statearr_15234_15321[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (1))){
var state_15226__$1 = state_15226;
var statearr_15235_15322 = state_15226__$1;
(statearr_15235_15322[(2)] = null);

(statearr_15235_15322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (24))){
var inst_15127 = (state_15226[(7)]);
var inst_15144 = (state_15226[(2)]);
var inst_15145 = cljs.core.next(inst_15127);
var inst_15107 = inst_15145;
var inst_15108 = null;
var inst_15109 = (0);
var inst_15110 = (0);
var state_15226__$1 = (function (){var statearr_15236 = state_15226;
(statearr_15236[(13)] = inst_15110);

(statearr_15236[(14)] = inst_15108);

(statearr_15236[(15)] = inst_15107);

(statearr_15236[(16)] = inst_15144);

(statearr_15236[(17)] = inst_15109);

return statearr_15236;
})();
var statearr_15237_15323 = state_15226__$1;
(statearr_15237_15323[(2)] = null);

(statearr_15237_15323[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (39))){
var state_15226__$1 = state_15226;
var statearr_15241_15324 = state_15226__$1;
(statearr_15241_15324[(2)] = null);

(statearr_15241_15324[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (4))){
var inst_15098 = (state_15226[(12)]);
var inst_15098__$1 = (state_15226[(2)]);
var inst_15099 = (inst_15098__$1 == null);
var state_15226__$1 = (function (){var statearr_15242 = state_15226;
(statearr_15242[(12)] = inst_15098__$1);

return statearr_15242;
})();
if(cljs.core.truth_(inst_15099)){
var statearr_15243_15325 = state_15226__$1;
(statearr_15243_15325[(1)] = (5));

} else {
var statearr_15244_15326 = state_15226__$1;
(statearr_15244_15326[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (15))){
var inst_15110 = (state_15226[(13)]);
var inst_15108 = (state_15226[(14)]);
var inst_15107 = (state_15226[(15)]);
var inst_15109 = (state_15226[(17)]);
var inst_15123 = (state_15226[(2)]);
var inst_15124 = (inst_15110 + (1));
var tmp15238 = inst_15108;
var tmp15239 = inst_15107;
var tmp15240 = inst_15109;
var inst_15107__$1 = tmp15239;
var inst_15108__$1 = tmp15238;
var inst_15109__$1 = tmp15240;
var inst_15110__$1 = inst_15124;
var state_15226__$1 = (function (){var statearr_15245 = state_15226;
(statearr_15245[(13)] = inst_15110__$1);

(statearr_15245[(14)] = inst_15108__$1);

(statearr_15245[(18)] = inst_15123);

(statearr_15245[(15)] = inst_15107__$1);

(statearr_15245[(17)] = inst_15109__$1);

return statearr_15245;
})();
var statearr_15246_15327 = state_15226__$1;
(statearr_15246_15327[(2)] = null);

(statearr_15246_15327[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (21))){
var inst_15148 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15250_15328 = state_15226__$1;
(statearr_15250_15328[(2)] = inst_15148);

(statearr_15250_15328[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (31))){
var inst_15174 = (state_15226[(10)]);
var inst_15178 = done(null);
var inst_15179 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15174);
var state_15226__$1 = (function (){var statearr_15251 = state_15226;
(statearr_15251[(19)] = inst_15178);

return statearr_15251;
})();
var statearr_15252_15329 = state_15226__$1;
(statearr_15252_15329[(2)] = inst_15179);

(statearr_15252_15329[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (32))){
var inst_15169 = (state_15226[(9)]);
var inst_15167 = (state_15226[(11)]);
var inst_15166 = (state_15226[(20)]);
var inst_15168 = (state_15226[(21)]);
var inst_15181 = (state_15226[(2)]);
var inst_15182 = (inst_15169 + (1));
var tmp15247 = inst_15167;
var tmp15248 = inst_15166;
var tmp15249 = inst_15168;
var inst_15166__$1 = tmp15248;
var inst_15167__$1 = tmp15247;
var inst_15168__$1 = tmp15249;
var inst_15169__$1 = inst_15182;
var state_15226__$1 = (function (){var statearr_15253 = state_15226;
(statearr_15253[(9)] = inst_15169__$1);

(statearr_15253[(22)] = inst_15181);

(statearr_15253[(11)] = inst_15167__$1);

(statearr_15253[(20)] = inst_15166__$1);

(statearr_15253[(21)] = inst_15168__$1);

return statearr_15253;
})();
var statearr_15254_15330 = state_15226__$1;
(statearr_15254_15330[(2)] = null);

(statearr_15254_15330[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (40))){
var inst_15194 = (state_15226[(23)]);
var inst_15198 = done(null);
var inst_15199 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15194);
var state_15226__$1 = (function (){var statearr_15255 = state_15226;
(statearr_15255[(24)] = inst_15198);

return statearr_15255;
})();
var statearr_15256_15331 = state_15226__$1;
(statearr_15256_15331[(2)] = inst_15199);

(statearr_15256_15331[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (33))){
var inst_15185 = (state_15226[(25)]);
var inst_15187 = cljs.core.chunked_seq_QMARK_(inst_15185);
var state_15226__$1 = state_15226;
if(inst_15187){
var statearr_15257_15332 = state_15226__$1;
(statearr_15257_15332[(1)] = (36));

} else {
var statearr_15258_15333 = state_15226__$1;
(statearr_15258_15333[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (13))){
var inst_15117 = (state_15226[(26)]);
var inst_15120 = cljs.core.async.close_BANG_(inst_15117);
var state_15226__$1 = state_15226;
var statearr_15259_15334 = state_15226__$1;
(statearr_15259_15334[(2)] = inst_15120);

(statearr_15259_15334[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (22))){
var inst_15138 = (state_15226[(8)]);
var inst_15141 = cljs.core.async.close_BANG_(inst_15138);
var state_15226__$1 = state_15226;
var statearr_15260_15335 = state_15226__$1;
(statearr_15260_15335[(2)] = inst_15141);

(statearr_15260_15335[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (36))){
var inst_15185 = (state_15226[(25)]);
var inst_15189 = cljs.core.chunk_first(inst_15185);
var inst_15190 = cljs.core.chunk_rest(inst_15185);
var inst_15191 = cljs.core.count(inst_15189);
var inst_15166 = inst_15190;
var inst_15167 = inst_15189;
var inst_15168 = inst_15191;
var inst_15169 = (0);
var state_15226__$1 = (function (){var statearr_15261 = state_15226;
(statearr_15261[(9)] = inst_15169);

(statearr_15261[(11)] = inst_15167);

(statearr_15261[(20)] = inst_15166);

(statearr_15261[(21)] = inst_15168);

return statearr_15261;
})();
var statearr_15262_15336 = state_15226__$1;
(statearr_15262_15336[(2)] = null);

(statearr_15262_15336[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (41))){
var inst_15185 = (state_15226[(25)]);
var inst_15201 = (state_15226[(2)]);
var inst_15202 = cljs.core.next(inst_15185);
var inst_15166 = inst_15202;
var inst_15167 = null;
var inst_15168 = (0);
var inst_15169 = (0);
var state_15226__$1 = (function (){var statearr_15263 = state_15226;
(statearr_15263[(9)] = inst_15169);

(statearr_15263[(11)] = inst_15167);

(statearr_15263[(20)] = inst_15166);

(statearr_15263[(27)] = inst_15201);

(statearr_15263[(21)] = inst_15168);

return statearr_15263;
})();
var statearr_15264_15337 = state_15226__$1;
(statearr_15264_15337[(2)] = null);

(statearr_15264_15337[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (43))){
var state_15226__$1 = state_15226;
var statearr_15265_15338 = state_15226__$1;
(statearr_15265_15338[(2)] = null);

(statearr_15265_15338[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (29))){
var inst_15210 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15266_15339 = state_15226__$1;
(statearr_15266_15339[(2)] = inst_15210);

(statearr_15266_15339[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (44))){
var inst_15219 = (state_15226[(2)]);
var state_15226__$1 = (function (){var statearr_15267 = state_15226;
(statearr_15267[(28)] = inst_15219);

return statearr_15267;
})();
var statearr_15268_15340 = state_15226__$1;
(statearr_15268_15340[(2)] = null);

(statearr_15268_15340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (6))){
var inst_15158 = (state_15226[(29)]);
var inst_15157 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15158__$1 = cljs.core.keys(inst_15157);
var inst_15159 = cljs.core.count(inst_15158__$1);
var inst_15160 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15159) : cljs.core.reset_BANG_.call(null,dctr,inst_15159));
var inst_15165 = cljs.core.seq(inst_15158__$1);
var inst_15166 = inst_15165;
var inst_15167 = null;
var inst_15168 = (0);
var inst_15169 = (0);
var state_15226__$1 = (function (){var statearr_15269 = state_15226;
(statearr_15269[(9)] = inst_15169);

(statearr_15269[(29)] = inst_15158__$1);

(statearr_15269[(30)] = inst_15160);

(statearr_15269[(11)] = inst_15167);

(statearr_15269[(20)] = inst_15166);

(statearr_15269[(21)] = inst_15168);

return statearr_15269;
})();
var statearr_15270_15341 = state_15226__$1;
(statearr_15270_15341[(2)] = null);

(statearr_15270_15341[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (28))){
var inst_15185 = (state_15226[(25)]);
var inst_15166 = (state_15226[(20)]);
var inst_15185__$1 = cljs.core.seq(inst_15166);
var state_15226__$1 = (function (){var statearr_15271 = state_15226;
(statearr_15271[(25)] = inst_15185__$1);

return statearr_15271;
})();
if(inst_15185__$1){
var statearr_15272_15342 = state_15226__$1;
(statearr_15272_15342[(1)] = (33));

} else {
var statearr_15273_15343 = state_15226__$1;
(statearr_15273_15343[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (25))){
var inst_15169 = (state_15226[(9)]);
var inst_15168 = (state_15226[(21)]);
var inst_15171 = (inst_15169 < inst_15168);
var inst_15172 = inst_15171;
var state_15226__$1 = state_15226;
if(cljs.core.truth_(inst_15172)){
var statearr_15274_15344 = state_15226__$1;
(statearr_15274_15344[(1)] = (27));

} else {
var statearr_15275_15345 = state_15226__$1;
(statearr_15275_15345[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (34))){
var state_15226__$1 = state_15226;
var statearr_15276_15346 = state_15226__$1;
(statearr_15276_15346[(2)] = null);

(statearr_15276_15346[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (17))){
var state_15226__$1 = state_15226;
var statearr_15277_15347 = state_15226__$1;
(statearr_15277_15347[(2)] = null);

(statearr_15277_15347[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (3))){
var inst_15224 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15226__$1,inst_15224);
} else {
if((state_val_15227 === (12))){
var inst_15153 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15278_15348 = state_15226__$1;
(statearr_15278_15348[(2)] = inst_15153);

(statearr_15278_15348[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (2))){
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15226__$1,(4),ch);
} else {
if((state_val_15227 === (23))){
var state_15226__$1 = state_15226;
var statearr_15279_15349 = state_15226__$1;
(statearr_15279_15349[(2)] = null);

(statearr_15279_15349[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (35))){
var inst_15208 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15280_15350 = state_15226__$1;
(statearr_15280_15350[(2)] = inst_15208);

(statearr_15280_15350[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (19))){
var inst_15127 = (state_15226[(7)]);
var inst_15131 = cljs.core.chunk_first(inst_15127);
var inst_15132 = cljs.core.chunk_rest(inst_15127);
var inst_15133 = cljs.core.count(inst_15131);
var inst_15107 = inst_15132;
var inst_15108 = inst_15131;
var inst_15109 = inst_15133;
var inst_15110 = (0);
var state_15226__$1 = (function (){var statearr_15281 = state_15226;
(statearr_15281[(13)] = inst_15110);

(statearr_15281[(14)] = inst_15108);

(statearr_15281[(15)] = inst_15107);

(statearr_15281[(17)] = inst_15109);

return statearr_15281;
})();
var statearr_15282_15351 = state_15226__$1;
(statearr_15282_15351[(2)] = null);

(statearr_15282_15351[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (11))){
var inst_15127 = (state_15226[(7)]);
var inst_15107 = (state_15226[(15)]);
var inst_15127__$1 = cljs.core.seq(inst_15107);
var state_15226__$1 = (function (){var statearr_15283 = state_15226;
(statearr_15283[(7)] = inst_15127__$1);

return statearr_15283;
})();
if(inst_15127__$1){
var statearr_15284_15352 = state_15226__$1;
(statearr_15284_15352[(1)] = (16));

} else {
var statearr_15285_15353 = state_15226__$1;
(statearr_15285_15353[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (9))){
var inst_15155 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15286_15354 = state_15226__$1;
(statearr_15286_15354[(2)] = inst_15155);

(statearr_15286_15354[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (5))){
var inst_15105 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15106 = cljs.core.seq(inst_15105);
var inst_15107 = inst_15106;
var inst_15108 = null;
var inst_15109 = (0);
var inst_15110 = (0);
var state_15226__$1 = (function (){var statearr_15287 = state_15226;
(statearr_15287[(13)] = inst_15110);

(statearr_15287[(14)] = inst_15108);

(statearr_15287[(15)] = inst_15107);

(statearr_15287[(17)] = inst_15109);

return statearr_15287;
})();
var statearr_15288_15355 = state_15226__$1;
(statearr_15288_15355[(2)] = null);

(statearr_15288_15355[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (14))){
var state_15226__$1 = state_15226;
var statearr_15289_15356 = state_15226__$1;
(statearr_15289_15356[(2)] = null);

(statearr_15289_15356[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (45))){
var inst_15216 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15290_15357 = state_15226__$1;
(statearr_15290_15357[(2)] = inst_15216);

(statearr_15290_15357[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (26))){
var inst_15158 = (state_15226[(29)]);
var inst_15212 = (state_15226[(2)]);
var inst_15213 = cljs.core.seq(inst_15158);
var state_15226__$1 = (function (){var statearr_15291 = state_15226;
(statearr_15291[(31)] = inst_15212);

return statearr_15291;
})();
if(inst_15213){
var statearr_15292_15358 = state_15226__$1;
(statearr_15292_15358[(1)] = (42));

} else {
var statearr_15293_15359 = state_15226__$1;
(statearr_15293_15359[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (16))){
var inst_15127 = (state_15226[(7)]);
var inst_15129 = cljs.core.chunked_seq_QMARK_(inst_15127);
var state_15226__$1 = state_15226;
if(inst_15129){
var statearr_15294_15360 = state_15226__$1;
(statearr_15294_15360[(1)] = (19));

} else {
var statearr_15295_15361 = state_15226__$1;
(statearr_15295_15361[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (38))){
var inst_15205 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15296_15362 = state_15226__$1;
(statearr_15296_15362[(2)] = inst_15205);

(statearr_15296_15362[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (30))){
var state_15226__$1 = state_15226;
var statearr_15297_15363 = state_15226__$1;
(statearr_15297_15363[(2)] = null);

(statearr_15297_15363[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (10))){
var inst_15110 = (state_15226[(13)]);
var inst_15108 = (state_15226[(14)]);
var inst_15116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15108,inst_15110);
var inst_15117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15116,(0),null);
var inst_15118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15116,(1),null);
var state_15226__$1 = (function (){var statearr_15298 = state_15226;
(statearr_15298[(26)] = inst_15117);

return statearr_15298;
})();
if(cljs.core.truth_(inst_15118)){
var statearr_15299_15364 = state_15226__$1;
(statearr_15299_15364[(1)] = (13));

} else {
var statearr_15300_15365 = state_15226__$1;
(statearr_15300_15365[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (18))){
var inst_15151 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15301_15366 = state_15226__$1;
(statearr_15301_15366[(2)] = inst_15151);

(statearr_15301_15366[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (42))){
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15226__$1,(45),dchan);
} else {
if((state_val_15227 === (37))){
var inst_15185 = (state_15226[(25)]);
var inst_15194 = (state_15226[(23)]);
var inst_15098 = (state_15226[(12)]);
var inst_15194__$1 = cljs.core.first(inst_15185);
var inst_15195 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15194__$1,inst_15098,done);
var state_15226__$1 = (function (){var statearr_15302 = state_15226;
(statearr_15302[(23)] = inst_15194__$1);

return statearr_15302;
})();
if(cljs.core.truth_(inst_15195)){
var statearr_15303_15367 = state_15226__$1;
(statearr_15303_15367[(1)] = (39));

} else {
var statearr_15304_15368 = state_15226__$1;
(statearr_15304_15368[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15227 === (8))){
var inst_15110 = (state_15226[(13)]);
var inst_15109 = (state_15226[(17)]);
var inst_15112 = (inst_15110 < inst_15109);
var inst_15113 = inst_15112;
var state_15226__$1 = state_15226;
if(cljs.core.truth_(inst_15113)){
var statearr_15305_15369 = state_15226__$1;
(statearr_15305_15369[(1)] = (10));

} else {
var statearr_15306_15370 = state_15226__$1;
(statearr_15306_15370[(1)] = (11));

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
});})(c__13997__auto___15316,cs,m,dchan,dctr,done))
;
return ((function (switch__13883__auto__,c__13997__auto___15316,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13884__auto__ = null;
var cljs$core$async$mult_$_state_machine__13884__auto____0 = (function (){
var statearr_15310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15310[(0)] = cljs$core$async$mult_$_state_machine__13884__auto__);

(statearr_15310[(1)] = (1));

return statearr_15310;
});
var cljs$core$async$mult_$_state_machine__13884__auto____1 = (function (state_15226){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_15226);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e15311){if((e15311 instanceof Object)){
var ex__13887__auto__ = e15311;
var statearr_15312_15371 = state_15226;
(statearr_15312_15371[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15226);

return cljs.core.cst$kw$recur;
} else {
throw e15311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__15372 = state_15226;
state_15226 = G__15372;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13884__auto__ = function(state_15226){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13884__auto____1.call(this,state_15226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13884__auto____0;
cljs$core$async$mult_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13884__auto____1;
return cljs$core$async$mult_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___15316,cs,m,dchan,dctr,done))
})();
var state__13999__auto__ = (function (){var statearr_15313 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_15313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___15316);

return statearr_15313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___15316,cs,m,dchan,dctr,done))
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
var args15373 = [];
var len__7513__auto___15376 = arguments.length;
var i__7514__auto___15377 = (0);
while(true){
if((i__7514__auto___15377 < len__7513__auto___15376)){
args15373.push((arguments[i__7514__auto___15377]));

var G__15378 = (i__7514__auto___15377 + (1));
i__7514__auto___15377 = G__15378;
continue;
} else {
}
break;
}

var G__15375 = args15373.length;
switch (G__15375) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15373.length)].join('')));

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
var len__7513__auto___15390 = arguments.length;
var i__7514__auto___15391 = (0);
while(true){
if((i__7514__auto___15391 < len__7513__auto___15390)){
args__7520__auto__.push((arguments[i__7514__auto___15391]));

var G__15392 = (i__7514__auto___15391 + (1));
i__7514__auto___15391 = G__15392;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15384){
var map__15385 = p__15384;
var map__15385__$1 = ((((!((map__15385 == null)))?((((map__15385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15385):map__15385);
var opts = map__15385__$1;
var statearr_15387_15393 = state;
(statearr_15387_15393[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__15385,map__15385__$1,opts){
return (function (val){
var statearr_15388_15394 = state;
(statearr_15388_15394[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15385,map__15385__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_15389_15395 = state;
(statearr_15389_15395[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15380){
var G__15381 = cljs.core.first(seq15380);
var seq15380__$1 = cljs.core.next(seq15380);
var G__15382 = cljs.core.first(seq15380__$1);
var seq15380__$2 = cljs.core.next(seq15380__$1);
var G__15383 = cljs.core.first(seq15380__$2);
var seq15380__$3 = cljs.core.next(seq15380__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15381,G__15382,G__15383,seq15380__$3);
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
var cs = (function (){var G__15562 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15562) : cljs.core.atom.call(null,G__15562));
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
if(typeof cljs.core.async.t_cljs$core$async15563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15563 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15564){
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
this.meta15564 = meta15564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15565,meta15564__$1){
var self__ = this;
var _15565__$1 = this;
return (new cljs.core.async.t_cljs$core$async15563(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15564__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15565){
var self__ = this;
var _15565__$1 = this;
return self__.meta15564;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15566_15728 = self__.cs;
var G__15567_15729 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15566_15728,G__15567_15729) : cljs.core.reset_BANG_.call(null,G__15566_15728,G__15567_15729));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15563.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15564], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15563";

cljs.core.async.t_cljs$core$async15563.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15563");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15563 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15564){
return (new cljs.core.async.t_cljs$core$async15563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15564));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15563(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13997__auto___15730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15665){
var state_val_15666 = (state_15665[(1)]);
if((state_val_15666 === (7))){
var inst_15583 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15667_15731 = state_15665__$1;
(statearr_15667_15731[(2)] = inst_15583);

(statearr_15667_15731[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (20))){
var inst_15595 = (state_15665[(7)]);
var state_15665__$1 = state_15665;
var statearr_15668_15732 = state_15665__$1;
(statearr_15668_15732[(2)] = inst_15595);

(statearr_15668_15732[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (27))){
var state_15665__$1 = state_15665;
var statearr_15669_15733 = state_15665__$1;
(statearr_15669_15733[(2)] = null);

(statearr_15669_15733[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (1))){
var inst_15571 = (state_15665[(8)]);
var inst_15571__$1 = calc_state();
var inst_15573 = (inst_15571__$1 == null);
var inst_15574 = cljs.core.not(inst_15573);
var state_15665__$1 = (function (){var statearr_15670 = state_15665;
(statearr_15670[(8)] = inst_15571__$1);

return statearr_15670;
})();
if(inst_15574){
var statearr_15671_15734 = state_15665__$1;
(statearr_15671_15734[(1)] = (2));

} else {
var statearr_15672_15735 = state_15665__$1;
(statearr_15672_15735[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (24))){
var inst_15618 = (state_15665[(9)]);
var inst_15625 = (state_15665[(10)]);
var inst_15639 = (state_15665[(11)]);
var inst_15639__$1 = (inst_15618.cljs$core$IFn$_invoke$arity$1 ? inst_15618.cljs$core$IFn$_invoke$arity$1(inst_15625) : inst_15618.call(null,inst_15625));
var state_15665__$1 = (function (){var statearr_15673 = state_15665;
(statearr_15673[(11)] = inst_15639__$1);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15639__$1)){
var statearr_15674_15736 = state_15665__$1;
(statearr_15674_15736[(1)] = (29));

} else {
var statearr_15675_15737 = state_15665__$1;
(statearr_15675_15737[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (4))){
var inst_15586 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15586)){
var statearr_15676_15738 = state_15665__$1;
(statearr_15676_15738[(1)] = (8));

} else {
var statearr_15677_15739 = state_15665__$1;
(statearr_15677_15739[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (15))){
var inst_15612 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15612)){
var statearr_15678_15740 = state_15665__$1;
(statearr_15678_15740[(1)] = (19));

} else {
var statearr_15679_15741 = state_15665__$1;
(statearr_15679_15741[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (21))){
var inst_15617 = (state_15665[(12)]);
var inst_15617__$1 = (state_15665[(2)]);
var inst_15618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15617__$1,cljs.core.cst$kw$solos);
var inst_15619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15617__$1,cljs.core.cst$kw$mutes);
var inst_15620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15617__$1,cljs.core.cst$kw$reads);
var state_15665__$1 = (function (){var statearr_15680 = state_15665;
(statearr_15680[(9)] = inst_15618);

(statearr_15680[(12)] = inst_15617__$1);

(statearr_15680[(13)] = inst_15619);

return statearr_15680;
})();
return cljs.core.async.ioc_alts_BANG_(state_15665__$1,(22),inst_15620);
} else {
if((state_val_15666 === (31))){
var inst_15647 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15647)){
var statearr_15681_15742 = state_15665__$1;
(statearr_15681_15742[(1)] = (32));

} else {
var statearr_15682_15743 = state_15665__$1;
(statearr_15682_15743[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (32))){
var inst_15624 = (state_15665[(14)]);
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15665__$1,(35),out,inst_15624);
} else {
if((state_val_15666 === (33))){
var inst_15617 = (state_15665[(12)]);
var inst_15595 = inst_15617;
var state_15665__$1 = (function (){var statearr_15683 = state_15665;
(statearr_15683[(7)] = inst_15595);

return statearr_15683;
})();
var statearr_15684_15744 = state_15665__$1;
(statearr_15684_15744[(2)] = null);

(statearr_15684_15744[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (13))){
var inst_15595 = (state_15665[(7)]);
var inst_15602 = inst_15595.cljs$lang$protocol_mask$partition0$;
var inst_15603 = (inst_15602 & (64));
var inst_15604 = inst_15595.cljs$core$ISeq$;
var inst_15605 = (inst_15603) || (inst_15604);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15605)){
var statearr_15685_15745 = state_15665__$1;
(statearr_15685_15745[(1)] = (16));

} else {
var statearr_15686_15746 = state_15665__$1;
(statearr_15686_15746[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (22))){
var inst_15625 = (state_15665[(10)]);
var inst_15624 = (state_15665[(14)]);
var inst_15623 = (state_15665[(2)]);
var inst_15624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15623,(0),null);
var inst_15625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15623,(1),null);
var inst_15626 = (inst_15624__$1 == null);
var inst_15627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15625__$1,change);
var inst_15628 = (inst_15626) || (inst_15627);
var state_15665__$1 = (function (){var statearr_15687 = state_15665;
(statearr_15687[(10)] = inst_15625__$1);

(statearr_15687[(14)] = inst_15624__$1);

return statearr_15687;
})();
if(cljs.core.truth_(inst_15628)){
var statearr_15688_15747 = state_15665__$1;
(statearr_15688_15747[(1)] = (23));

} else {
var statearr_15689_15748 = state_15665__$1;
(statearr_15689_15748[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (36))){
var inst_15617 = (state_15665[(12)]);
var inst_15595 = inst_15617;
var state_15665__$1 = (function (){var statearr_15690 = state_15665;
(statearr_15690[(7)] = inst_15595);

return statearr_15690;
})();
var statearr_15691_15749 = state_15665__$1;
(statearr_15691_15749[(2)] = null);

(statearr_15691_15749[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (29))){
var inst_15639 = (state_15665[(11)]);
var state_15665__$1 = state_15665;
var statearr_15692_15750 = state_15665__$1;
(statearr_15692_15750[(2)] = inst_15639);

(statearr_15692_15750[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (6))){
var state_15665__$1 = state_15665;
var statearr_15693_15751 = state_15665__$1;
(statearr_15693_15751[(2)] = false);

(statearr_15693_15751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (28))){
var inst_15635 = (state_15665[(2)]);
var inst_15636 = calc_state();
var inst_15595 = inst_15636;
var state_15665__$1 = (function (){var statearr_15694 = state_15665;
(statearr_15694[(7)] = inst_15595);

(statearr_15694[(15)] = inst_15635);

return statearr_15694;
})();
var statearr_15695_15752 = state_15665__$1;
(statearr_15695_15752[(2)] = null);

(statearr_15695_15752[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (25))){
var inst_15661 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15696_15753 = state_15665__$1;
(statearr_15696_15753[(2)] = inst_15661);

(statearr_15696_15753[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (34))){
var inst_15659 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15697_15754 = state_15665__$1;
(statearr_15697_15754[(2)] = inst_15659);

(statearr_15697_15754[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (17))){
var state_15665__$1 = state_15665;
var statearr_15698_15755 = state_15665__$1;
(statearr_15698_15755[(2)] = false);

(statearr_15698_15755[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (3))){
var state_15665__$1 = state_15665;
var statearr_15699_15756 = state_15665__$1;
(statearr_15699_15756[(2)] = false);

(statearr_15699_15756[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (12))){
var inst_15663 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15665__$1,inst_15663);
} else {
if((state_val_15666 === (2))){
var inst_15571 = (state_15665[(8)]);
var inst_15576 = inst_15571.cljs$lang$protocol_mask$partition0$;
var inst_15577 = (inst_15576 & (64));
var inst_15578 = inst_15571.cljs$core$ISeq$;
var inst_15579 = (inst_15577) || (inst_15578);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15579)){
var statearr_15700_15757 = state_15665__$1;
(statearr_15700_15757[(1)] = (5));

} else {
var statearr_15701_15758 = state_15665__$1;
(statearr_15701_15758[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (23))){
var inst_15624 = (state_15665[(14)]);
var inst_15630 = (inst_15624 == null);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15630)){
var statearr_15702_15759 = state_15665__$1;
(statearr_15702_15759[(1)] = (26));

} else {
var statearr_15703_15760 = state_15665__$1;
(statearr_15703_15760[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (35))){
var inst_15650 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
if(cljs.core.truth_(inst_15650)){
var statearr_15704_15761 = state_15665__$1;
(statearr_15704_15761[(1)] = (36));

} else {
var statearr_15705_15762 = state_15665__$1;
(statearr_15705_15762[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (19))){
var inst_15595 = (state_15665[(7)]);
var inst_15614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15595);
var state_15665__$1 = state_15665;
var statearr_15706_15763 = state_15665__$1;
(statearr_15706_15763[(2)] = inst_15614);

(statearr_15706_15763[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (11))){
var inst_15595 = (state_15665[(7)]);
var inst_15599 = (inst_15595 == null);
var inst_15600 = cljs.core.not(inst_15599);
var state_15665__$1 = state_15665;
if(inst_15600){
var statearr_15707_15764 = state_15665__$1;
(statearr_15707_15764[(1)] = (13));

} else {
var statearr_15708_15765 = state_15665__$1;
(statearr_15708_15765[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (9))){
var inst_15571 = (state_15665[(8)]);
var state_15665__$1 = state_15665;
var statearr_15709_15766 = state_15665__$1;
(statearr_15709_15766[(2)] = inst_15571);

(statearr_15709_15766[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (5))){
var state_15665__$1 = state_15665;
var statearr_15710_15767 = state_15665__$1;
(statearr_15710_15767[(2)] = true);

(statearr_15710_15767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (14))){
var state_15665__$1 = state_15665;
var statearr_15711_15768 = state_15665__$1;
(statearr_15711_15768[(2)] = false);

(statearr_15711_15768[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (26))){
var inst_15625 = (state_15665[(10)]);
var inst_15632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15625);
var state_15665__$1 = state_15665;
var statearr_15712_15769 = state_15665__$1;
(statearr_15712_15769[(2)] = inst_15632);

(statearr_15712_15769[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (16))){
var state_15665__$1 = state_15665;
var statearr_15713_15770 = state_15665__$1;
(statearr_15713_15770[(2)] = true);

(statearr_15713_15770[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (38))){
var inst_15655 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15714_15771 = state_15665__$1;
(statearr_15714_15771[(2)] = inst_15655);

(statearr_15714_15771[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (30))){
var inst_15618 = (state_15665[(9)]);
var inst_15625 = (state_15665[(10)]);
var inst_15619 = (state_15665[(13)]);
var inst_15642 = cljs.core.empty_QMARK_(inst_15618);
var inst_15643 = (inst_15619.cljs$core$IFn$_invoke$arity$1 ? inst_15619.cljs$core$IFn$_invoke$arity$1(inst_15625) : inst_15619.call(null,inst_15625));
var inst_15644 = cljs.core.not(inst_15643);
var inst_15645 = (inst_15642) && (inst_15644);
var state_15665__$1 = state_15665;
var statearr_15715_15772 = state_15665__$1;
(statearr_15715_15772[(2)] = inst_15645);

(statearr_15715_15772[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (10))){
var inst_15571 = (state_15665[(8)]);
var inst_15591 = (state_15665[(2)]);
var inst_15592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15591,cljs.core.cst$kw$solos);
var inst_15593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15591,cljs.core.cst$kw$mutes);
var inst_15594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15591,cljs.core.cst$kw$reads);
var inst_15595 = inst_15571;
var state_15665__$1 = (function (){var statearr_15716 = state_15665;
(statearr_15716[(16)] = inst_15594);

(statearr_15716[(17)] = inst_15593);

(statearr_15716[(7)] = inst_15595);

(statearr_15716[(18)] = inst_15592);

return statearr_15716;
})();
var statearr_15717_15773 = state_15665__$1;
(statearr_15717_15773[(2)] = null);

(statearr_15717_15773[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (18))){
var inst_15609 = (state_15665[(2)]);
var state_15665__$1 = state_15665;
var statearr_15718_15774 = state_15665__$1;
(statearr_15718_15774[(2)] = inst_15609);

(statearr_15718_15774[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (37))){
var state_15665__$1 = state_15665;
var statearr_15719_15775 = state_15665__$1;
(statearr_15719_15775[(2)] = null);

(statearr_15719_15775[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15666 === (8))){
var inst_15571 = (state_15665[(8)]);
var inst_15588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15571);
var state_15665__$1 = state_15665;
var statearr_15720_15776 = state_15665__$1;
(statearr_15720_15776[(2)] = inst_15588);

(statearr_15720_15776[(1)] = (10));


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
});})(c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13883__auto__,c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13884__auto__ = null;
var cljs$core$async$mix_$_state_machine__13884__auto____0 = (function (){
var statearr_15724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15724[(0)] = cljs$core$async$mix_$_state_machine__13884__auto__);

(statearr_15724[(1)] = (1));

return statearr_15724;
});
var cljs$core$async$mix_$_state_machine__13884__auto____1 = (function (state_15665){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_15665);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e15725){if((e15725 instanceof Object)){
var ex__13887__auto__ = e15725;
var statearr_15726_15777 = state_15665;
(statearr_15726_15777[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15665);

return cljs.core.cst$kw$recur;
} else {
throw e15725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__15778 = state_15665;
state_15665 = G__15778;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13884__auto__ = function(state_15665){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13884__auto____1.call(this,state_15665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13884__auto____0;
cljs$core$async$mix_$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13884__auto____1;
return cljs$core$async$mix_$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13999__auto__ = (function (){var statearr_15727 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_15727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___15730);

return statearr_15727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___15730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args15779 = [];
var len__7513__auto___15782 = arguments.length;
var i__7514__auto___15783 = (0);
while(true){
if((i__7514__auto___15783 < len__7513__auto___15782)){
args15779.push((arguments[i__7514__auto___15783]));

var G__15784 = (i__7514__auto___15783 + (1));
i__7514__auto___15783 = G__15784;
continue;
} else {
}
break;
}

var G__15781 = args15779.length;
switch (G__15781) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15779.length)].join('')));

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
var args15787 = [];
var len__7513__auto___15915 = arguments.length;
var i__7514__auto___15916 = (0);
while(true){
if((i__7514__auto___15916 < len__7513__auto___15915)){
args15787.push((arguments[i__7514__auto___15916]));

var G__15917 = (i__7514__auto___15916 + (1));
i__7514__auto___15916 = G__15917;
continue;
} else {
}
break;
}

var G__15789 = args15787.length;
switch (G__15789) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15787.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15790 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15790) : cljs.core.atom.call(null,G__15790));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6455__auto__,mults){
return (function (p1__15786_SHARP_){
if(cljs.core.truth_((p1__15786_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15786_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15786_SHARP_.call(null,topic)))){
return p1__15786_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15786_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15791 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15792){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15792 = meta15792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15793,meta15792__$1){
var self__ = this;
var _15793__$1 = this;
return (new cljs.core.async.t_cljs$core$async15791(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15792__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15793){
var self__ = this;
var _15793__$1 = this;
return self__.meta15792;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15794 = self__.mults;
var G__15795 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15794,G__15795) : cljs.core.reset_BANG_.call(null,G__15794,G__15795));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15792], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15791";

cljs.core.async.t_cljs$core$async15791.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async15791");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15791 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15792){
return (new cljs.core.async.t_cljs$core$async15791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15792));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15791(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13997__auto___15919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___15919,mults,ensure_mult,p){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___15919,mults,ensure_mult,p){
return (function (state_15867){
var state_val_15868 = (state_15867[(1)]);
if((state_val_15868 === (7))){
var inst_15863 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15869_15920 = state_15867__$1;
(statearr_15869_15920[(2)] = inst_15863);

(statearr_15869_15920[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (20))){
var state_15867__$1 = state_15867;
var statearr_15870_15921 = state_15867__$1;
(statearr_15870_15921[(2)] = null);

(statearr_15870_15921[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (1))){
var state_15867__$1 = state_15867;
var statearr_15871_15922 = state_15867__$1;
(statearr_15871_15922[(2)] = null);

(statearr_15871_15922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (24))){
var inst_15846 = (state_15867[(7)]);
var inst_15855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15846);
var state_15867__$1 = state_15867;
var statearr_15872_15923 = state_15867__$1;
(statearr_15872_15923[(2)] = inst_15855);

(statearr_15872_15923[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (4))){
var inst_15798 = (state_15867[(8)]);
var inst_15798__$1 = (state_15867[(2)]);
var inst_15799 = (inst_15798__$1 == null);
var state_15867__$1 = (function (){var statearr_15873 = state_15867;
(statearr_15873[(8)] = inst_15798__$1);

return statearr_15873;
})();
if(cljs.core.truth_(inst_15799)){
var statearr_15874_15924 = state_15867__$1;
(statearr_15874_15924[(1)] = (5));

} else {
var statearr_15875_15925 = state_15867__$1;
(statearr_15875_15925[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (15))){
var inst_15840 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15876_15926 = state_15867__$1;
(statearr_15876_15926[(2)] = inst_15840);

(statearr_15876_15926[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (21))){
var inst_15860 = (state_15867[(2)]);
var state_15867__$1 = (function (){var statearr_15877 = state_15867;
(statearr_15877[(9)] = inst_15860);

return statearr_15877;
})();
var statearr_15878_15927 = state_15867__$1;
(statearr_15878_15927[(2)] = null);

(statearr_15878_15927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (13))){
var inst_15822 = (state_15867[(10)]);
var inst_15824 = cljs.core.chunked_seq_QMARK_(inst_15822);
var state_15867__$1 = state_15867;
if(inst_15824){
var statearr_15879_15928 = state_15867__$1;
(statearr_15879_15928[(1)] = (16));

} else {
var statearr_15880_15929 = state_15867__$1;
(statearr_15880_15929[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (22))){
var inst_15852 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15852)){
var statearr_15881_15930 = state_15867__$1;
(statearr_15881_15930[(1)] = (23));

} else {
var statearr_15882_15931 = state_15867__$1;
(statearr_15882_15931[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (6))){
var inst_15848 = (state_15867[(11)]);
var inst_15846 = (state_15867[(7)]);
var inst_15798 = (state_15867[(8)]);
var inst_15846__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15798) : topic_fn.call(null,inst_15798));
var inst_15847 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15847,inst_15846__$1);
var state_15867__$1 = (function (){var statearr_15883 = state_15867;
(statearr_15883[(11)] = inst_15848__$1);

(statearr_15883[(7)] = inst_15846__$1);

return statearr_15883;
})();
if(cljs.core.truth_(inst_15848__$1)){
var statearr_15884_15932 = state_15867__$1;
(statearr_15884_15932[(1)] = (19));

} else {
var statearr_15885_15933 = state_15867__$1;
(statearr_15885_15933[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (25))){
var inst_15857 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15886_15934 = state_15867__$1;
(statearr_15886_15934[(2)] = inst_15857);

(statearr_15886_15934[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (17))){
var inst_15822 = (state_15867[(10)]);
var inst_15831 = cljs.core.first(inst_15822);
var inst_15832 = cljs.core.async.muxch_STAR_(inst_15831);
var inst_15833 = cljs.core.async.close_BANG_(inst_15832);
var inst_15834 = cljs.core.next(inst_15822);
var inst_15808 = inst_15834;
var inst_15809 = null;
var inst_15810 = (0);
var inst_15811 = (0);
var state_15867__$1 = (function (){var statearr_15887 = state_15867;
(statearr_15887[(12)] = inst_15833);

(statearr_15887[(13)] = inst_15809);

(statearr_15887[(14)] = inst_15810);

(statearr_15887[(15)] = inst_15811);

(statearr_15887[(16)] = inst_15808);

return statearr_15887;
})();
var statearr_15888_15935 = state_15867__$1;
(statearr_15888_15935[(2)] = null);

(statearr_15888_15935[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (3))){
var inst_15865 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15867__$1,inst_15865);
} else {
if((state_val_15868 === (12))){
var inst_15842 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15889_15936 = state_15867__$1;
(statearr_15889_15936[(2)] = inst_15842);

(statearr_15889_15936[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (2))){
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15867__$1,(4),ch);
} else {
if((state_val_15868 === (23))){
var state_15867__$1 = state_15867;
var statearr_15890_15937 = state_15867__$1;
(statearr_15890_15937[(2)] = null);

(statearr_15890_15937[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (19))){
var inst_15848 = (state_15867[(11)]);
var inst_15798 = (state_15867[(8)]);
var inst_15850 = cljs.core.async.muxch_STAR_(inst_15848);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15867__$1,(22),inst_15850,inst_15798);
} else {
if((state_val_15868 === (11))){
var inst_15822 = (state_15867[(10)]);
var inst_15808 = (state_15867[(16)]);
var inst_15822__$1 = cljs.core.seq(inst_15808);
var state_15867__$1 = (function (){var statearr_15891 = state_15867;
(statearr_15891[(10)] = inst_15822__$1);

return statearr_15891;
})();
if(inst_15822__$1){
var statearr_15892_15938 = state_15867__$1;
(statearr_15892_15938[(1)] = (13));

} else {
var statearr_15893_15939 = state_15867__$1;
(statearr_15893_15939[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (9))){
var inst_15844 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15894_15940 = state_15867__$1;
(statearr_15894_15940[(2)] = inst_15844);

(statearr_15894_15940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (5))){
var inst_15805 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15806 = cljs.core.vals(inst_15805);
var inst_15807 = cljs.core.seq(inst_15806);
var inst_15808 = inst_15807;
var inst_15809 = null;
var inst_15810 = (0);
var inst_15811 = (0);
var state_15867__$1 = (function (){var statearr_15895 = state_15867;
(statearr_15895[(13)] = inst_15809);

(statearr_15895[(14)] = inst_15810);

(statearr_15895[(15)] = inst_15811);

(statearr_15895[(16)] = inst_15808);

return statearr_15895;
})();
var statearr_15896_15941 = state_15867__$1;
(statearr_15896_15941[(2)] = null);

(statearr_15896_15941[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (14))){
var state_15867__$1 = state_15867;
var statearr_15900_15942 = state_15867__$1;
(statearr_15900_15942[(2)] = null);

(statearr_15900_15942[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (16))){
var inst_15822 = (state_15867[(10)]);
var inst_15826 = cljs.core.chunk_first(inst_15822);
var inst_15827 = cljs.core.chunk_rest(inst_15822);
var inst_15828 = cljs.core.count(inst_15826);
var inst_15808 = inst_15827;
var inst_15809 = inst_15826;
var inst_15810 = inst_15828;
var inst_15811 = (0);
var state_15867__$1 = (function (){var statearr_15901 = state_15867;
(statearr_15901[(13)] = inst_15809);

(statearr_15901[(14)] = inst_15810);

(statearr_15901[(15)] = inst_15811);

(statearr_15901[(16)] = inst_15808);

return statearr_15901;
})();
var statearr_15902_15943 = state_15867__$1;
(statearr_15902_15943[(2)] = null);

(statearr_15902_15943[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (10))){
var inst_15809 = (state_15867[(13)]);
var inst_15810 = (state_15867[(14)]);
var inst_15811 = (state_15867[(15)]);
var inst_15808 = (state_15867[(16)]);
var inst_15816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15809,inst_15811);
var inst_15817 = cljs.core.async.muxch_STAR_(inst_15816);
var inst_15818 = cljs.core.async.close_BANG_(inst_15817);
var inst_15819 = (inst_15811 + (1));
var tmp15897 = inst_15809;
var tmp15898 = inst_15810;
var tmp15899 = inst_15808;
var inst_15808__$1 = tmp15899;
var inst_15809__$1 = tmp15897;
var inst_15810__$1 = tmp15898;
var inst_15811__$1 = inst_15819;
var state_15867__$1 = (function (){var statearr_15903 = state_15867;
(statearr_15903[(17)] = inst_15818);

(statearr_15903[(13)] = inst_15809__$1);

(statearr_15903[(14)] = inst_15810__$1);

(statearr_15903[(15)] = inst_15811__$1);

(statearr_15903[(16)] = inst_15808__$1);

return statearr_15903;
})();
var statearr_15904_15944 = state_15867__$1;
(statearr_15904_15944[(2)] = null);

(statearr_15904_15944[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (18))){
var inst_15837 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15905_15945 = state_15867__$1;
(statearr_15905_15945[(2)] = inst_15837);

(statearr_15905_15945[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (8))){
var inst_15810 = (state_15867[(14)]);
var inst_15811 = (state_15867[(15)]);
var inst_15813 = (inst_15811 < inst_15810);
var inst_15814 = inst_15813;
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15814)){
var statearr_15906_15946 = state_15867__$1;
(statearr_15906_15946[(1)] = (10));

} else {
var statearr_15907_15947 = state_15867__$1;
(statearr_15907_15947[(1)] = (11));

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
});})(c__13997__auto___15919,mults,ensure_mult,p))
;
return ((function (switch__13883__auto__,c__13997__auto___15919,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_15911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15911[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_15911[(1)] = (1));

return statearr_15911;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_15867){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_15867);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e15912){if((e15912 instanceof Object)){
var ex__13887__auto__ = e15912;
var statearr_15913_15948 = state_15867;
(statearr_15913_15948[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15867);

return cljs.core.cst$kw$recur;
} else {
throw e15912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__15949 = state_15867;
state_15867 = G__15949;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_15867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_15867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___15919,mults,ensure_mult,p))
})();
var state__13999__auto__ = (function (){var statearr_15914 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_15914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___15919);

return statearr_15914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___15919,mults,ensure_mult,p))
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
var args15950 = [];
var len__7513__auto___15953 = arguments.length;
var i__7514__auto___15954 = (0);
while(true){
if((i__7514__auto___15954 < len__7513__auto___15953)){
args15950.push((arguments[i__7514__auto___15954]));

var G__15955 = (i__7514__auto___15954 + (1));
i__7514__auto___15954 = G__15955;
continue;
} else {
}
break;
}

var G__15952 = args15950.length;
switch (G__15952) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15950.length)].join('')));

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
var args15957 = [];
var len__7513__auto___15960 = arguments.length;
var i__7514__auto___15961 = (0);
while(true){
if((i__7514__auto___15961 < len__7513__auto___15960)){
args15957.push((arguments[i__7514__auto___15961]));

var G__15962 = (i__7514__auto___15961 + (1));
i__7514__auto___15961 = G__15962;
continue;
} else {
}
break;
}

var G__15959 = args15957.length;
switch (G__15959) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15957.length)].join('')));

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
var args15964 = [];
var len__7513__auto___16035 = arguments.length;
var i__7514__auto___16036 = (0);
while(true){
if((i__7514__auto___16036 < len__7513__auto___16035)){
args15964.push((arguments[i__7514__auto___16036]));

var G__16037 = (i__7514__auto___16036 + (1));
i__7514__auto___16036 = G__16037;
continue;
} else {
}
break;
}

var G__15966 = args15964.length;
switch (G__15966) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15964.length)].join('')));

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
var c__13997__auto___16039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16005){
var state_val_16006 = (state_16005[(1)]);
if((state_val_16006 === (7))){
var state_16005__$1 = state_16005;
var statearr_16007_16040 = state_16005__$1;
(statearr_16007_16040[(2)] = null);

(statearr_16007_16040[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (1))){
var state_16005__$1 = state_16005;
var statearr_16008_16041 = state_16005__$1;
(statearr_16008_16041[(2)] = null);

(statearr_16008_16041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (4))){
var inst_15969 = (state_16005[(7)]);
var inst_15971 = (inst_15969 < cnt);
var state_16005__$1 = state_16005;
if(cljs.core.truth_(inst_15971)){
var statearr_16009_16042 = state_16005__$1;
(statearr_16009_16042[(1)] = (6));

} else {
var statearr_16010_16043 = state_16005__$1;
(statearr_16010_16043[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (15))){
var inst_16001 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16011_16044 = state_16005__$1;
(statearr_16011_16044[(2)] = inst_16001);

(statearr_16011_16044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (13))){
var inst_15994 = cljs.core.async.close_BANG_(out);
var state_16005__$1 = state_16005;
var statearr_16012_16045 = state_16005__$1;
(statearr_16012_16045[(2)] = inst_15994);

(statearr_16012_16045[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (6))){
var state_16005__$1 = state_16005;
var statearr_16013_16046 = state_16005__$1;
(statearr_16013_16046[(2)] = null);

(statearr_16013_16046[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (3))){
var inst_16003 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16005__$1,inst_16003);
} else {
if((state_val_16006 === (12))){
var inst_15991 = (state_16005[(8)]);
var inst_15991__$1 = (state_16005[(2)]);
var inst_15992 = cljs.core.some(cljs.core.nil_QMARK_,inst_15991__$1);
var state_16005__$1 = (function (){var statearr_16014 = state_16005;
(statearr_16014[(8)] = inst_15991__$1);

return statearr_16014;
})();
if(cljs.core.truth_(inst_15992)){
var statearr_16015_16047 = state_16005__$1;
(statearr_16015_16047[(1)] = (13));

} else {
var statearr_16016_16048 = state_16005__$1;
(statearr_16016_16048[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (2))){
var inst_15968 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15969 = (0);
var state_16005__$1 = (function (){var statearr_16017 = state_16005;
(statearr_16017[(7)] = inst_15969);

(statearr_16017[(9)] = inst_15968);

return statearr_16017;
})();
var statearr_16018_16049 = state_16005__$1;
(statearr_16018_16049[(2)] = null);

(statearr_16018_16049[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (11))){
var inst_15969 = (state_16005[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16005,(10),Object,null,(9));
var inst_15978 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15969) : chs__$1.call(null,inst_15969));
var inst_15979 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15969) : done.call(null,inst_15969));
var inst_15980 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15978,inst_15979);
var state_16005__$1 = state_16005;
var statearr_16019_16050 = state_16005__$1;
(statearr_16019_16050[(2)] = inst_15980);


cljs.core.async.impl.ioc_helpers.process_exception(state_16005__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (9))){
var inst_15969 = (state_16005[(7)]);
var inst_15982 = (state_16005[(2)]);
var inst_15983 = (inst_15969 + (1));
var inst_15969__$1 = inst_15983;
var state_16005__$1 = (function (){var statearr_16020 = state_16005;
(statearr_16020[(7)] = inst_15969__$1);

(statearr_16020[(10)] = inst_15982);

return statearr_16020;
})();
var statearr_16021_16051 = state_16005__$1;
(statearr_16021_16051[(2)] = null);

(statearr_16021_16051[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (5))){
var inst_15989 = (state_16005[(2)]);
var state_16005__$1 = (function (){var statearr_16022 = state_16005;
(statearr_16022[(11)] = inst_15989);

return statearr_16022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16005__$1,(12),dchan);
} else {
if((state_val_16006 === (14))){
var inst_15991 = (state_16005[(8)]);
var inst_15996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15991);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16005__$1,(16),out,inst_15996);
} else {
if((state_val_16006 === (16))){
var inst_15998 = (state_16005[(2)]);
var state_16005__$1 = (function (){var statearr_16023 = state_16005;
(statearr_16023[(12)] = inst_15998);

return statearr_16023;
})();
var statearr_16024_16052 = state_16005__$1;
(statearr_16024_16052[(2)] = null);

(statearr_16024_16052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (10))){
var inst_15973 = (state_16005[(2)]);
var inst_15974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16005__$1 = (function (){var statearr_16025 = state_16005;
(statearr_16025[(13)] = inst_15973);

return statearr_16025;
})();
var statearr_16026_16053 = state_16005__$1;
(statearr_16026_16053[(2)] = inst_15974);


cljs.core.async.impl.ioc_helpers.process_exception(state_16005__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (8))){
var inst_15987 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16027_16054 = state_16005__$1;
(statearr_16027_16054[(2)] = inst_15987);

(statearr_16027_16054[(1)] = (5));


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
});})(c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13883__auto__,c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16031[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16031[(1)] = (1));

return statearr_16031;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16005){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16005);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16032){if((e16032 instanceof Object)){
var ex__13887__auto__ = e16032;
var statearr_16033_16055 = state_16005;
(statearr_16033_16055[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16005);

return cljs.core.cst$kw$recur;
} else {
throw e16032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16056 = state_16005;
state_16005 = G__16056;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13999__auto__ = (function (){var statearr_16034 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16039);

return statearr_16034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16039,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args16058 = [];
var len__7513__auto___16114 = arguments.length;
var i__7514__auto___16115 = (0);
while(true){
if((i__7514__auto___16115 < len__7513__auto___16114)){
args16058.push((arguments[i__7514__auto___16115]));

var G__16116 = (i__7514__auto___16115 + (1));
i__7514__auto___16115 = G__16116;
continue;
} else {
}
break;
}

var G__16060 = args16058.length;
switch (G__16060) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16058.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16118,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16118,out){
return (function (state_16090){
var state_val_16091 = (state_16090[(1)]);
if((state_val_16091 === (7))){
var inst_16070 = (state_16090[(7)]);
var inst_16069 = (state_16090[(8)]);
var inst_16069__$1 = (state_16090[(2)]);
var inst_16070__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16069__$1,(0),null);
var inst_16071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16069__$1,(1),null);
var inst_16072 = (inst_16070__$1 == null);
var state_16090__$1 = (function (){var statearr_16092 = state_16090;
(statearr_16092[(9)] = inst_16071);

(statearr_16092[(7)] = inst_16070__$1);

(statearr_16092[(8)] = inst_16069__$1);

return statearr_16092;
})();
if(cljs.core.truth_(inst_16072)){
var statearr_16093_16119 = state_16090__$1;
(statearr_16093_16119[(1)] = (8));

} else {
var statearr_16094_16120 = state_16090__$1;
(statearr_16094_16120[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (1))){
var inst_16061 = cljs.core.vec(chs);
var inst_16062 = inst_16061;
var state_16090__$1 = (function (){var statearr_16095 = state_16090;
(statearr_16095[(10)] = inst_16062);

return statearr_16095;
})();
var statearr_16096_16121 = state_16090__$1;
(statearr_16096_16121[(2)] = null);

(statearr_16096_16121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (4))){
var inst_16062 = (state_16090[(10)]);
var state_16090__$1 = state_16090;
return cljs.core.async.ioc_alts_BANG_(state_16090__$1,(7),inst_16062);
} else {
if((state_val_16091 === (6))){
var inst_16086 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
var statearr_16097_16122 = state_16090__$1;
(statearr_16097_16122[(2)] = inst_16086);

(statearr_16097_16122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (3))){
var inst_16088 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16090__$1,inst_16088);
} else {
if((state_val_16091 === (2))){
var inst_16062 = (state_16090[(10)]);
var inst_16064 = cljs.core.count(inst_16062);
var inst_16065 = (inst_16064 > (0));
var state_16090__$1 = state_16090;
if(cljs.core.truth_(inst_16065)){
var statearr_16099_16123 = state_16090__$1;
(statearr_16099_16123[(1)] = (4));

} else {
var statearr_16100_16124 = state_16090__$1;
(statearr_16100_16124[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (11))){
var inst_16062 = (state_16090[(10)]);
var inst_16079 = (state_16090[(2)]);
var tmp16098 = inst_16062;
var inst_16062__$1 = tmp16098;
var state_16090__$1 = (function (){var statearr_16101 = state_16090;
(statearr_16101[(10)] = inst_16062__$1);

(statearr_16101[(11)] = inst_16079);

return statearr_16101;
})();
var statearr_16102_16125 = state_16090__$1;
(statearr_16102_16125[(2)] = null);

(statearr_16102_16125[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (9))){
var inst_16070 = (state_16090[(7)]);
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16090__$1,(11),out,inst_16070);
} else {
if((state_val_16091 === (5))){
var inst_16084 = cljs.core.async.close_BANG_(out);
var state_16090__$1 = state_16090;
var statearr_16103_16126 = state_16090__$1;
(statearr_16103_16126[(2)] = inst_16084);

(statearr_16103_16126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (10))){
var inst_16082 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
var statearr_16104_16127 = state_16090__$1;
(statearr_16104_16127[(2)] = inst_16082);

(statearr_16104_16127[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (8))){
var inst_16062 = (state_16090[(10)]);
var inst_16071 = (state_16090[(9)]);
var inst_16070 = (state_16090[(7)]);
var inst_16069 = (state_16090[(8)]);
var inst_16074 = (function (){var cs = inst_16062;
var vec__16067 = inst_16069;
var v = inst_16070;
var c = inst_16071;
return ((function (cs,vec__16067,v,c,inst_16062,inst_16071,inst_16070,inst_16069,state_val_16091,c__13997__auto___16118,out){
return (function (p1__16057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16057_SHARP_);
});
;})(cs,vec__16067,v,c,inst_16062,inst_16071,inst_16070,inst_16069,state_val_16091,c__13997__auto___16118,out))
})();
var inst_16075 = cljs.core.filterv(inst_16074,inst_16062);
var inst_16062__$1 = inst_16075;
var state_16090__$1 = (function (){var statearr_16105 = state_16090;
(statearr_16105[(10)] = inst_16062__$1);

return statearr_16105;
})();
var statearr_16106_16128 = state_16090__$1;
(statearr_16106_16128[(2)] = null);

(statearr_16106_16128[(1)] = (2));


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
});})(c__13997__auto___16118,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16118,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16090){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16090);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16111){if((e16111 instanceof Object)){
var ex__13887__auto__ = e16111;
var statearr_16112_16129 = state_16090;
(statearr_16112_16129[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16090);

return cljs.core.cst$kw$recur;
} else {
throw e16111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16130 = state_16090;
state_16090 = G__16130;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16118,out))
})();
var state__13999__auto__ = (function (){var statearr_16113 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16118);

return statearr_16113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16118,out))
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
var args16131 = [];
var len__7513__auto___16180 = arguments.length;
var i__7514__auto___16181 = (0);
while(true){
if((i__7514__auto___16181 < len__7513__auto___16180)){
args16131.push((arguments[i__7514__auto___16181]));

var G__16182 = (i__7514__auto___16181 + (1));
i__7514__auto___16181 = G__16182;
continue;
} else {
}
break;
}

var G__16133 = args16131.length;
switch (G__16133) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16131.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16184,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16184,out){
return (function (state_16157){
var state_val_16158 = (state_16157[(1)]);
if((state_val_16158 === (7))){
var inst_16139 = (state_16157[(7)]);
var inst_16139__$1 = (state_16157[(2)]);
var inst_16140 = (inst_16139__$1 == null);
var inst_16141 = cljs.core.not(inst_16140);
var state_16157__$1 = (function (){var statearr_16159 = state_16157;
(statearr_16159[(7)] = inst_16139__$1);

return statearr_16159;
})();
if(inst_16141){
var statearr_16160_16185 = state_16157__$1;
(statearr_16160_16185[(1)] = (8));

} else {
var statearr_16161_16186 = state_16157__$1;
(statearr_16161_16186[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (1))){
var inst_16134 = (0);
var state_16157__$1 = (function (){var statearr_16162 = state_16157;
(statearr_16162[(8)] = inst_16134);

return statearr_16162;
})();
var statearr_16163_16187 = state_16157__$1;
(statearr_16163_16187[(2)] = null);

(statearr_16163_16187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (4))){
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(7),ch);
} else {
if((state_val_16158 === (6))){
var inst_16152 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16164_16188 = state_16157__$1;
(statearr_16164_16188[(2)] = inst_16152);

(statearr_16164_16188[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (3))){
var inst_16154 = (state_16157[(2)]);
var inst_16155 = cljs.core.async.close_BANG_(out);
var state_16157__$1 = (function (){var statearr_16165 = state_16157;
(statearr_16165[(9)] = inst_16154);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16157__$1,inst_16155);
} else {
if((state_val_16158 === (2))){
var inst_16134 = (state_16157[(8)]);
var inst_16136 = (inst_16134 < n);
var state_16157__$1 = state_16157;
if(cljs.core.truth_(inst_16136)){
var statearr_16166_16189 = state_16157__$1;
(statearr_16166_16189[(1)] = (4));

} else {
var statearr_16167_16190 = state_16157__$1;
(statearr_16167_16190[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (11))){
var inst_16134 = (state_16157[(8)]);
var inst_16144 = (state_16157[(2)]);
var inst_16145 = (inst_16134 + (1));
var inst_16134__$1 = inst_16145;
var state_16157__$1 = (function (){var statearr_16168 = state_16157;
(statearr_16168[(8)] = inst_16134__$1);

(statearr_16168[(10)] = inst_16144);

return statearr_16168;
})();
var statearr_16169_16191 = state_16157__$1;
(statearr_16169_16191[(2)] = null);

(statearr_16169_16191[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (9))){
var state_16157__$1 = state_16157;
var statearr_16170_16192 = state_16157__$1;
(statearr_16170_16192[(2)] = null);

(statearr_16170_16192[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (5))){
var state_16157__$1 = state_16157;
var statearr_16171_16193 = state_16157__$1;
(statearr_16171_16193[(2)] = null);

(statearr_16171_16193[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (10))){
var inst_16149 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16172_16194 = state_16157__$1;
(statearr_16172_16194[(2)] = inst_16149);

(statearr_16172_16194[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (8))){
var inst_16139 = (state_16157[(7)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16157__$1,(11),out,inst_16139);
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
});})(c__13997__auto___16184,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16184,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16176[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16176[(1)] = (1));

return statearr_16176;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16157){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16157);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16177){if((e16177 instanceof Object)){
var ex__13887__auto__ = e16177;
var statearr_16178_16195 = state_16157;
(statearr_16178_16195[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16157);

return cljs.core.cst$kw$recur;
} else {
throw e16177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16196 = state_16157;
state_16157 = G__16196;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16184,out))
})();
var state__13999__auto__ = (function (){var statearr_16179 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16184);

return statearr_16179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16184,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16206 = (function (map_LT_,f,ch,meta16207){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16207 = meta16207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16208,meta16207__$1){
var self__ = this;
var _16208__$1 = this;
return (new cljs.core.async.t_cljs$core$async16206(self__.map_LT_,self__.f,self__.ch,meta16207__$1));
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16208){
var self__ = this;
var _16208__$1 = this;
return self__.meta16207;
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16209 = (function (map_LT_,f,ch,meta16207,_,fn1,meta16210){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16207 = meta16207;
this._ = _;
this.fn1 = fn1;
this.meta16210 = meta16210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16211,meta16210__$1){
var self__ = this;
var _16211__$1 = this;
return (new cljs.core.async.t_cljs$core$async16209(self__.map_LT_,self__.f,self__.ch,self__.meta16207,self__._,self__.fn1,meta16210__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16211){
var self__ = this;
var _16211__$1 = this;
return self__.meta16210;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16197_SHARP_){
var G__16212 = (((p1__16197_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16197_SHARP_) : self__.f.call(null,p1__16197_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16212) : f1.call(null,G__16212));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16207,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16206], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16210], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16209";

cljs.core.async.t_cljs$core$async16209.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16209");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16209 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16209(map_LT___$1,f__$1,ch__$1,meta16207__$1,___$2,fn1__$1,meta16210){
return (new cljs.core.async.t_cljs$core$async16209(map_LT___$1,f__$1,ch__$1,meta16207__$1,___$2,fn1__$1,meta16210));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16209(self__.map_LT_,self__.f,self__.ch,self__.meta16207,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6443__auto__ = ret;
if(cljs.core.truth_(and__6443__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6443__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16213 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16213) : self__.f.call(null,G__16213));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16207], null);
});

cljs.core.async.t_cljs$core$async16206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16206";

cljs.core.async.t_cljs$core$async16206.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16206");
});

cljs.core.async.__GT_t_cljs$core$async16206 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16206(map_LT___$1,f__$1,ch__$1,meta16207){
return (new cljs.core.async.t_cljs$core$async16206(map_LT___$1,f__$1,ch__$1,meta16207));
});

}

return (new cljs.core.async.t_cljs$core$async16206(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16217 = (function (map_GT_,f,ch,meta16218){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16218 = meta16218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16219,meta16218__$1){
var self__ = this;
var _16219__$1 = this;
return (new cljs.core.async.t_cljs$core$async16217(self__.map_GT_,self__.f,self__.ch,meta16218__$1));
});

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16219){
var self__ = this;
var _16219__$1 = this;
return self__.meta16218;
});

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16218], null);
});

cljs.core.async.t_cljs$core$async16217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16217";

cljs.core.async.t_cljs$core$async16217.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16217");
});

cljs.core.async.__GT_t_cljs$core$async16217 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16217(map_GT___$1,f__$1,ch__$1,meta16218){
return (new cljs.core.async.t_cljs$core$async16217(map_GT___$1,f__$1,ch__$1,meta16218));
});

}

return (new cljs.core.async.t_cljs$core$async16217(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16223 = (function (filter_GT_,p,ch,meta16224){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16224 = meta16224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16225,meta16224__$1){
var self__ = this;
var _16225__$1 = this;
return (new cljs.core.async.t_cljs$core$async16223(self__.filter_GT_,self__.p,self__.ch,meta16224__$1));
});

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16225){
var self__ = this;
var _16225__$1 = this;
return self__.meta16224;
});

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16224], null);
});

cljs.core.async.t_cljs$core$async16223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16223";

cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write(writer__7054__auto__,"cljs.core.async/t_cljs$core$async16223");
});

cljs.core.async.__GT_t_cljs$core$async16223 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16223(filter_GT___$1,p__$1,ch__$1,meta16224){
return (new cljs.core.async.t_cljs$core$async16223(filter_GT___$1,p__$1,ch__$1,meta16224));
});

}

return (new cljs.core.async.t_cljs$core$async16223(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args16226 = [];
var len__7513__auto___16270 = arguments.length;
var i__7514__auto___16271 = (0);
while(true){
if((i__7514__auto___16271 < len__7513__auto___16270)){
args16226.push((arguments[i__7514__auto___16271]));

var G__16272 = (i__7514__auto___16271 + (1));
i__7514__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var G__16228 = args16226.length;
switch (G__16228) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16226.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16274,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16274,out){
return (function (state_16249){
var state_val_16250 = (state_16249[(1)]);
if((state_val_16250 === (7))){
var inst_16245 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16251_16275 = state_16249__$1;
(statearr_16251_16275[(2)] = inst_16245);

(statearr_16251_16275[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (1))){
var state_16249__$1 = state_16249;
var statearr_16252_16276 = state_16249__$1;
(statearr_16252_16276[(2)] = null);

(statearr_16252_16276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (4))){
var inst_16231 = (state_16249[(7)]);
var inst_16231__$1 = (state_16249[(2)]);
var inst_16232 = (inst_16231__$1 == null);
var state_16249__$1 = (function (){var statearr_16253 = state_16249;
(statearr_16253[(7)] = inst_16231__$1);

return statearr_16253;
})();
if(cljs.core.truth_(inst_16232)){
var statearr_16254_16277 = state_16249__$1;
(statearr_16254_16277[(1)] = (5));

} else {
var statearr_16255_16278 = state_16249__$1;
(statearr_16255_16278[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (6))){
var inst_16231 = (state_16249[(7)]);
var inst_16236 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16231) : p.call(null,inst_16231));
var state_16249__$1 = state_16249;
if(cljs.core.truth_(inst_16236)){
var statearr_16256_16279 = state_16249__$1;
(statearr_16256_16279[(1)] = (8));

} else {
var statearr_16257_16280 = state_16249__$1;
(statearr_16257_16280[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (3))){
var inst_16247 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16249__$1,inst_16247);
} else {
if((state_val_16250 === (2))){
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16249__$1,(4),ch);
} else {
if((state_val_16250 === (11))){
var inst_16239 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16258_16281 = state_16249__$1;
(statearr_16258_16281[(2)] = inst_16239);

(statearr_16258_16281[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (9))){
var state_16249__$1 = state_16249;
var statearr_16259_16282 = state_16249__$1;
(statearr_16259_16282[(2)] = null);

(statearr_16259_16282[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (5))){
var inst_16234 = cljs.core.async.close_BANG_(out);
var state_16249__$1 = state_16249;
var statearr_16260_16283 = state_16249__$1;
(statearr_16260_16283[(2)] = inst_16234);

(statearr_16260_16283[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (10))){
var inst_16242 = (state_16249[(2)]);
var state_16249__$1 = (function (){var statearr_16261 = state_16249;
(statearr_16261[(8)] = inst_16242);

return statearr_16261;
})();
var statearr_16262_16284 = state_16249__$1;
(statearr_16262_16284[(2)] = null);

(statearr_16262_16284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16250 === (8))){
var inst_16231 = (state_16249[(7)]);
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16249__$1,(11),out,inst_16231);
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
});})(c__13997__auto___16274,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16274,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16266 = [null,null,null,null,null,null,null,null,null];
(statearr_16266[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16266[(1)] = (1));

return statearr_16266;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16249){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16249);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object)){
var ex__13887__auto__ = e16267;
var statearr_16268_16285 = state_16249;
(statearr_16268_16285[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16249);

return cljs.core.cst$kw$recur;
} else {
throw e16267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16286 = state_16249;
state_16249 = G__16286;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16274,out))
})();
var state__13999__auto__ = (function (){var statearr_16269 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16274);

return statearr_16269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16274,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16287 = [];
var len__7513__auto___16290 = arguments.length;
var i__7514__auto___16291 = (0);
while(true){
if((i__7514__auto___16291 < len__7513__auto___16290)){
args16287.push((arguments[i__7514__auto___16291]));

var G__16292 = (i__7514__auto___16291 + (1));
i__7514__auto___16291 = G__16292;
continue;
} else {
}
break;
}

var G__16289 = args16287.length;
switch (G__16289) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16287.length)].join('')));

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
var c__13997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto__){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto__){
return (function (state_16459){
var state_val_16460 = (state_16459[(1)]);
if((state_val_16460 === (7))){
var inst_16455 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16461_16502 = state_16459__$1;
(statearr_16461_16502[(2)] = inst_16455);

(statearr_16461_16502[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (20))){
var inst_16425 = (state_16459[(7)]);
var inst_16436 = (state_16459[(2)]);
var inst_16437 = cljs.core.next(inst_16425);
var inst_16411 = inst_16437;
var inst_16412 = null;
var inst_16413 = (0);
var inst_16414 = (0);
var state_16459__$1 = (function (){var statearr_16462 = state_16459;
(statearr_16462[(8)] = inst_16412);

(statearr_16462[(9)] = inst_16414);

(statearr_16462[(10)] = inst_16436);

(statearr_16462[(11)] = inst_16413);

(statearr_16462[(12)] = inst_16411);

return statearr_16462;
})();
var statearr_16463_16503 = state_16459__$1;
(statearr_16463_16503[(2)] = null);

(statearr_16463_16503[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (1))){
var state_16459__$1 = state_16459;
var statearr_16464_16504 = state_16459__$1;
(statearr_16464_16504[(2)] = null);

(statearr_16464_16504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (4))){
var inst_16400 = (state_16459[(13)]);
var inst_16400__$1 = (state_16459[(2)]);
var inst_16401 = (inst_16400__$1 == null);
var state_16459__$1 = (function (){var statearr_16465 = state_16459;
(statearr_16465[(13)] = inst_16400__$1);

return statearr_16465;
})();
if(cljs.core.truth_(inst_16401)){
var statearr_16466_16505 = state_16459__$1;
(statearr_16466_16505[(1)] = (5));

} else {
var statearr_16467_16506 = state_16459__$1;
(statearr_16467_16506[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (15))){
var state_16459__$1 = state_16459;
var statearr_16471_16507 = state_16459__$1;
(statearr_16471_16507[(2)] = null);

(statearr_16471_16507[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (21))){
var state_16459__$1 = state_16459;
var statearr_16472_16508 = state_16459__$1;
(statearr_16472_16508[(2)] = null);

(statearr_16472_16508[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (13))){
var inst_16412 = (state_16459[(8)]);
var inst_16414 = (state_16459[(9)]);
var inst_16413 = (state_16459[(11)]);
var inst_16411 = (state_16459[(12)]);
var inst_16421 = (state_16459[(2)]);
var inst_16422 = (inst_16414 + (1));
var tmp16468 = inst_16412;
var tmp16469 = inst_16413;
var tmp16470 = inst_16411;
var inst_16411__$1 = tmp16470;
var inst_16412__$1 = tmp16468;
var inst_16413__$1 = tmp16469;
var inst_16414__$1 = inst_16422;
var state_16459__$1 = (function (){var statearr_16473 = state_16459;
(statearr_16473[(8)] = inst_16412__$1);

(statearr_16473[(9)] = inst_16414__$1);

(statearr_16473[(11)] = inst_16413__$1);

(statearr_16473[(12)] = inst_16411__$1);

(statearr_16473[(14)] = inst_16421);

return statearr_16473;
})();
var statearr_16474_16509 = state_16459__$1;
(statearr_16474_16509[(2)] = null);

(statearr_16474_16509[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (22))){
var state_16459__$1 = state_16459;
var statearr_16475_16510 = state_16459__$1;
(statearr_16475_16510[(2)] = null);

(statearr_16475_16510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (6))){
var inst_16400 = (state_16459[(13)]);
var inst_16409 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16400) : f.call(null,inst_16400));
var inst_16410 = cljs.core.seq(inst_16409);
var inst_16411 = inst_16410;
var inst_16412 = null;
var inst_16413 = (0);
var inst_16414 = (0);
var state_16459__$1 = (function (){var statearr_16476 = state_16459;
(statearr_16476[(8)] = inst_16412);

(statearr_16476[(9)] = inst_16414);

(statearr_16476[(11)] = inst_16413);

(statearr_16476[(12)] = inst_16411);

return statearr_16476;
})();
var statearr_16477_16511 = state_16459__$1;
(statearr_16477_16511[(2)] = null);

(statearr_16477_16511[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (17))){
var inst_16425 = (state_16459[(7)]);
var inst_16429 = cljs.core.chunk_first(inst_16425);
var inst_16430 = cljs.core.chunk_rest(inst_16425);
var inst_16431 = cljs.core.count(inst_16429);
var inst_16411 = inst_16430;
var inst_16412 = inst_16429;
var inst_16413 = inst_16431;
var inst_16414 = (0);
var state_16459__$1 = (function (){var statearr_16478 = state_16459;
(statearr_16478[(8)] = inst_16412);

(statearr_16478[(9)] = inst_16414);

(statearr_16478[(11)] = inst_16413);

(statearr_16478[(12)] = inst_16411);

return statearr_16478;
})();
var statearr_16479_16512 = state_16459__$1;
(statearr_16479_16512[(2)] = null);

(statearr_16479_16512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (3))){
var inst_16457 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16459__$1,inst_16457);
} else {
if((state_val_16460 === (12))){
var inst_16445 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16480_16513 = state_16459__$1;
(statearr_16480_16513[(2)] = inst_16445);

(statearr_16480_16513[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (2))){
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16459__$1,(4),in$);
} else {
if((state_val_16460 === (23))){
var inst_16453 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16481_16514 = state_16459__$1;
(statearr_16481_16514[(2)] = inst_16453);

(statearr_16481_16514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (19))){
var inst_16440 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16482_16515 = state_16459__$1;
(statearr_16482_16515[(2)] = inst_16440);

(statearr_16482_16515[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (11))){
var inst_16411 = (state_16459[(12)]);
var inst_16425 = (state_16459[(7)]);
var inst_16425__$1 = cljs.core.seq(inst_16411);
var state_16459__$1 = (function (){var statearr_16483 = state_16459;
(statearr_16483[(7)] = inst_16425__$1);

return statearr_16483;
})();
if(inst_16425__$1){
var statearr_16484_16516 = state_16459__$1;
(statearr_16484_16516[(1)] = (14));

} else {
var statearr_16485_16517 = state_16459__$1;
(statearr_16485_16517[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (9))){
var inst_16447 = (state_16459[(2)]);
var inst_16448 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16459__$1 = (function (){var statearr_16486 = state_16459;
(statearr_16486[(15)] = inst_16447);

return statearr_16486;
})();
if(cljs.core.truth_(inst_16448)){
var statearr_16487_16518 = state_16459__$1;
(statearr_16487_16518[(1)] = (21));

} else {
var statearr_16488_16519 = state_16459__$1;
(statearr_16488_16519[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (5))){
var inst_16403 = cljs.core.async.close_BANG_(out);
var state_16459__$1 = state_16459;
var statearr_16489_16520 = state_16459__$1;
(statearr_16489_16520[(2)] = inst_16403);

(statearr_16489_16520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (14))){
var inst_16425 = (state_16459[(7)]);
var inst_16427 = cljs.core.chunked_seq_QMARK_(inst_16425);
var state_16459__$1 = state_16459;
if(inst_16427){
var statearr_16490_16521 = state_16459__$1;
(statearr_16490_16521[(1)] = (17));

} else {
var statearr_16491_16522 = state_16459__$1;
(statearr_16491_16522[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (16))){
var inst_16443 = (state_16459[(2)]);
var state_16459__$1 = state_16459;
var statearr_16492_16523 = state_16459__$1;
(statearr_16492_16523[(2)] = inst_16443);

(statearr_16492_16523[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16460 === (10))){
var inst_16412 = (state_16459[(8)]);
var inst_16414 = (state_16459[(9)]);
var inst_16419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16412,inst_16414);
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16459__$1,(13),out,inst_16419);
} else {
if((state_val_16460 === (18))){
var inst_16425 = (state_16459[(7)]);
var inst_16434 = cljs.core.first(inst_16425);
var state_16459__$1 = state_16459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16459__$1,(20),out,inst_16434);
} else {
if((state_val_16460 === (8))){
var inst_16414 = (state_16459[(9)]);
var inst_16413 = (state_16459[(11)]);
var inst_16416 = (inst_16414 < inst_16413);
var inst_16417 = inst_16416;
var state_16459__$1 = state_16459;
if(cljs.core.truth_(inst_16417)){
var statearr_16493_16524 = state_16459__$1;
(statearr_16493_16524[(1)] = (10));

} else {
var statearr_16494_16525 = state_16459__$1;
(statearr_16494_16525[(1)] = (11));

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
});})(c__13997__auto__))
;
return ((function (switch__13883__auto__,c__13997__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____0 = (function (){
var statearr_16498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16498[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__);

(statearr_16498[(1)] = (1));

return statearr_16498;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____1 = (function (state_16459){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16459);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16499){if((e16499 instanceof Object)){
var ex__13887__auto__ = e16499;
var statearr_16500_16526 = state_16459;
(statearr_16500_16526[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16459);

return cljs.core.cst$kw$recur;
} else {
throw e16499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16527 = state_16459;
state_16459 = G__16527;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__ = function(state_16459){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____1.call(this,state_16459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13884__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto__))
})();
var state__13999__auto__ = (function (){var statearr_16501 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto__);

return statearr_16501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto__))
);

return c__13997__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16528 = [];
var len__7513__auto___16531 = arguments.length;
var i__7514__auto___16532 = (0);
while(true){
if((i__7514__auto___16532 < len__7513__auto___16531)){
args16528.push((arguments[i__7514__auto___16532]));

var G__16533 = (i__7514__auto___16532 + (1));
i__7514__auto___16532 = G__16533;
continue;
} else {
}
break;
}

var G__16530 = args16528.length;
switch (G__16530) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16528.length)].join('')));

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
var args16535 = [];
var len__7513__auto___16538 = arguments.length;
var i__7514__auto___16539 = (0);
while(true){
if((i__7514__auto___16539 < len__7513__auto___16538)){
args16535.push((arguments[i__7514__auto___16539]));

var G__16540 = (i__7514__auto___16539 + (1));
i__7514__auto___16539 = G__16540;
continue;
} else {
}
break;
}

var G__16537 = args16535.length;
switch (G__16537) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16535.length)].join('')));

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
var args16542 = [];
var len__7513__auto___16593 = arguments.length;
var i__7514__auto___16594 = (0);
while(true){
if((i__7514__auto___16594 < len__7513__auto___16593)){
args16542.push((arguments[i__7514__auto___16594]));

var G__16595 = (i__7514__auto___16594 + (1));
i__7514__auto___16594 = G__16595;
continue;
} else {
}
break;
}

var G__16544 = args16542.length;
switch (G__16544) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16542.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16597,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16597,out){
return (function (state_16568){
var state_val_16569 = (state_16568[(1)]);
if((state_val_16569 === (7))){
var inst_16563 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16570_16598 = state_16568__$1;
(statearr_16570_16598[(2)] = inst_16563);

(statearr_16570_16598[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (1))){
var inst_16545 = null;
var state_16568__$1 = (function (){var statearr_16571 = state_16568;
(statearr_16571[(7)] = inst_16545);

return statearr_16571;
})();
var statearr_16572_16599 = state_16568__$1;
(statearr_16572_16599[(2)] = null);

(statearr_16572_16599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (4))){
var inst_16548 = (state_16568[(8)]);
var inst_16548__$1 = (state_16568[(2)]);
var inst_16549 = (inst_16548__$1 == null);
var inst_16550 = cljs.core.not(inst_16549);
var state_16568__$1 = (function (){var statearr_16573 = state_16568;
(statearr_16573[(8)] = inst_16548__$1);

return statearr_16573;
})();
if(inst_16550){
var statearr_16574_16600 = state_16568__$1;
(statearr_16574_16600[(1)] = (5));

} else {
var statearr_16575_16601 = state_16568__$1;
(statearr_16575_16601[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (6))){
var state_16568__$1 = state_16568;
var statearr_16576_16602 = state_16568__$1;
(statearr_16576_16602[(2)] = null);

(statearr_16576_16602[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (3))){
var inst_16565 = (state_16568[(2)]);
var inst_16566 = cljs.core.async.close_BANG_(out);
var state_16568__$1 = (function (){var statearr_16577 = state_16568;
(statearr_16577[(9)] = inst_16565);

return statearr_16577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16568__$1,inst_16566);
} else {
if((state_val_16569 === (2))){
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16568__$1,(4),ch);
} else {
if((state_val_16569 === (11))){
var inst_16548 = (state_16568[(8)]);
var inst_16557 = (state_16568[(2)]);
var inst_16545 = inst_16548;
var state_16568__$1 = (function (){var statearr_16578 = state_16568;
(statearr_16578[(10)] = inst_16557);

(statearr_16578[(7)] = inst_16545);

return statearr_16578;
})();
var statearr_16579_16603 = state_16568__$1;
(statearr_16579_16603[(2)] = null);

(statearr_16579_16603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (9))){
var inst_16548 = (state_16568[(8)]);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16568__$1,(11),out,inst_16548);
} else {
if((state_val_16569 === (5))){
var inst_16548 = (state_16568[(8)]);
var inst_16545 = (state_16568[(7)]);
var inst_16552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16548,inst_16545);
var state_16568__$1 = state_16568;
if(inst_16552){
var statearr_16581_16604 = state_16568__$1;
(statearr_16581_16604[(1)] = (8));

} else {
var statearr_16582_16605 = state_16568__$1;
(statearr_16582_16605[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (10))){
var inst_16560 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16583_16606 = state_16568__$1;
(statearr_16583_16606[(2)] = inst_16560);

(statearr_16583_16606[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16569 === (8))){
var inst_16545 = (state_16568[(7)]);
var tmp16580 = inst_16545;
var inst_16545__$1 = tmp16580;
var state_16568__$1 = (function (){var statearr_16584 = state_16568;
(statearr_16584[(7)] = inst_16545__$1);

return statearr_16584;
})();
var statearr_16585_16607 = state_16568__$1;
(statearr_16585_16607[(2)] = null);

(statearr_16585_16607[(1)] = (2));


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
});})(c__13997__auto___16597,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16597,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16589[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16589[(1)] = (1));

return statearr_16589;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16568){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16568);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16590){if((e16590 instanceof Object)){
var ex__13887__auto__ = e16590;
var statearr_16591_16608 = state_16568;
(statearr_16591_16608[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16568);

return cljs.core.cst$kw$recur;
} else {
throw e16590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16609 = state_16568;
state_16568 = G__16609;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16597,out))
})();
var state__13999__auto__ = (function (){var statearr_16592 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16597);

return statearr_16592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16597,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16610 = [];
var len__7513__auto___16680 = arguments.length;
var i__7514__auto___16681 = (0);
while(true){
if((i__7514__auto___16681 < len__7513__auto___16680)){
args16610.push((arguments[i__7514__auto___16681]));

var G__16682 = (i__7514__auto___16681 + (1));
i__7514__auto___16681 = G__16682;
continue;
} else {
}
break;
}

var G__16612 = args16610.length;
switch (G__16612) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16610.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16684,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16684,out){
return (function (state_16650){
var state_val_16651 = (state_16650[(1)]);
if((state_val_16651 === (7))){
var inst_16646 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
var statearr_16652_16685 = state_16650__$1;
(statearr_16652_16685[(2)] = inst_16646);

(statearr_16652_16685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (1))){
var inst_16613 = (new Array(n));
var inst_16614 = inst_16613;
var inst_16615 = (0);
var state_16650__$1 = (function (){var statearr_16653 = state_16650;
(statearr_16653[(7)] = inst_16614);

(statearr_16653[(8)] = inst_16615);

return statearr_16653;
})();
var statearr_16654_16686 = state_16650__$1;
(statearr_16654_16686[(2)] = null);

(statearr_16654_16686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (4))){
var inst_16618 = (state_16650[(9)]);
var inst_16618__$1 = (state_16650[(2)]);
var inst_16619 = (inst_16618__$1 == null);
var inst_16620 = cljs.core.not(inst_16619);
var state_16650__$1 = (function (){var statearr_16655 = state_16650;
(statearr_16655[(9)] = inst_16618__$1);

return statearr_16655;
})();
if(inst_16620){
var statearr_16656_16687 = state_16650__$1;
(statearr_16656_16687[(1)] = (5));

} else {
var statearr_16657_16688 = state_16650__$1;
(statearr_16657_16688[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (15))){
var inst_16640 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
var statearr_16658_16689 = state_16650__$1;
(statearr_16658_16689[(2)] = inst_16640);

(statearr_16658_16689[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (13))){
var state_16650__$1 = state_16650;
var statearr_16659_16690 = state_16650__$1;
(statearr_16659_16690[(2)] = null);

(statearr_16659_16690[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (6))){
var inst_16615 = (state_16650[(8)]);
var inst_16636 = (inst_16615 > (0));
var state_16650__$1 = state_16650;
if(cljs.core.truth_(inst_16636)){
var statearr_16660_16691 = state_16650__$1;
(statearr_16660_16691[(1)] = (12));

} else {
var statearr_16661_16692 = state_16650__$1;
(statearr_16661_16692[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (3))){
var inst_16648 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16650__$1,inst_16648);
} else {
if((state_val_16651 === (12))){
var inst_16614 = (state_16650[(7)]);
var inst_16638 = cljs.core.vec(inst_16614);
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16650__$1,(15),out,inst_16638);
} else {
if((state_val_16651 === (2))){
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16650__$1,(4),ch);
} else {
if((state_val_16651 === (11))){
var inst_16630 = (state_16650[(2)]);
var inst_16631 = (new Array(n));
var inst_16614 = inst_16631;
var inst_16615 = (0);
var state_16650__$1 = (function (){var statearr_16662 = state_16650;
(statearr_16662[(7)] = inst_16614);

(statearr_16662[(8)] = inst_16615);

(statearr_16662[(10)] = inst_16630);

return statearr_16662;
})();
var statearr_16663_16693 = state_16650__$1;
(statearr_16663_16693[(2)] = null);

(statearr_16663_16693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (9))){
var inst_16614 = (state_16650[(7)]);
var inst_16628 = cljs.core.vec(inst_16614);
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16650__$1,(11),out,inst_16628);
} else {
if((state_val_16651 === (5))){
var inst_16614 = (state_16650[(7)]);
var inst_16623 = (state_16650[(11)]);
var inst_16618 = (state_16650[(9)]);
var inst_16615 = (state_16650[(8)]);
var inst_16622 = (inst_16614[inst_16615] = inst_16618);
var inst_16623__$1 = (inst_16615 + (1));
var inst_16624 = (inst_16623__$1 < n);
var state_16650__$1 = (function (){var statearr_16664 = state_16650;
(statearr_16664[(11)] = inst_16623__$1);

(statearr_16664[(12)] = inst_16622);

return statearr_16664;
})();
if(cljs.core.truth_(inst_16624)){
var statearr_16665_16694 = state_16650__$1;
(statearr_16665_16694[(1)] = (8));

} else {
var statearr_16666_16695 = state_16650__$1;
(statearr_16666_16695[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (14))){
var inst_16643 = (state_16650[(2)]);
var inst_16644 = cljs.core.async.close_BANG_(out);
var state_16650__$1 = (function (){var statearr_16668 = state_16650;
(statearr_16668[(13)] = inst_16643);

return statearr_16668;
})();
var statearr_16669_16696 = state_16650__$1;
(statearr_16669_16696[(2)] = inst_16644);

(statearr_16669_16696[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (10))){
var inst_16634 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
var statearr_16670_16697 = state_16650__$1;
(statearr_16670_16697[(2)] = inst_16634);

(statearr_16670_16697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16651 === (8))){
var inst_16614 = (state_16650[(7)]);
var inst_16623 = (state_16650[(11)]);
var tmp16667 = inst_16614;
var inst_16614__$1 = tmp16667;
var inst_16615 = inst_16623;
var state_16650__$1 = (function (){var statearr_16671 = state_16650;
(statearr_16671[(7)] = inst_16614__$1);

(statearr_16671[(8)] = inst_16615);

return statearr_16671;
})();
var statearr_16672_16698 = state_16650__$1;
(statearr_16672_16698[(2)] = null);

(statearr_16672_16698[(1)] = (2));


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
});})(c__13997__auto___16684,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16684,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16676[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16676[(1)] = (1));

return statearr_16676;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16650){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16650);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16677){if((e16677 instanceof Object)){
var ex__13887__auto__ = e16677;
var statearr_16678_16699 = state_16650;
(statearr_16678_16699[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16650);

return cljs.core.cst$kw$recur;
} else {
throw e16677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16700 = state_16650;
state_16650 = G__16700;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16684,out))
})();
var state__13999__auto__ = (function (){var statearr_16679 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16684);

return statearr_16679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16684,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16701 = [];
var len__7513__auto___16775 = arguments.length;
var i__7514__auto___16776 = (0);
while(true){
if((i__7514__auto___16776 < len__7513__auto___16775)){
args16701.push((arguments[i__7514__auto___16776]));

var G__16777 = (i__7514__auto___16776 + (1));
i__7514__auto___16776 = G__16777;
continue;
} else {
}
break;
}

var G__16703 = args16701.length;
switch (G__16703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16701.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13997__auto___16779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13997__auto___16779,out){
return (function (){
var f__13998__auto__ = (function (){var switch__13883__auto__ = ((function (c__13997__auto___16779,out){
return (function (state_16745){
var state_val_16746 = (state_16745[(1)]);
if((state_val_16746 === (7))){
var inst_16741 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16747_16780 = state_16745__$1;
(statearr_16747_16780[(2)] = inst_16741);

(statearr_16747_16780[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (1))){
var inst_16704 = [];
var inst_16705 = inst_16704;
var inst_16706 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16745__$1 = (function (){var statearr_16748 = state_16745;
(statearr_16748[(7)] = inst_16705);

(statearr_16748[(8)] = inst_16706);

return statearr_16748;
})();
var statearr_16749_16781 = state_16745__$1;
(statearr_16749_16781[(2)] = null);

(statearr_16749_16781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (4))){
var inst_16709 = (state_16745[(9)]);
var inst_16709__$1 = (state_16745[(2)]);
var inst_16710 = (inst_16709__$1 == null);
var inst_16711 = cljs.core.not(inst_16710);
var state_16745__$1 = (function (){var statearr_16750 = state_16745;
(statearr_16750[(9)] = inst_16709__$1);

return statearr_16750;
})();
if(inst_16711){
var statearr_16751_16782 = state_16745__$1;
(statearr_16751_16782[(1)] = (5));

} else {
var statearr_16752_16783 = state_16745__$1;
(statearr_16752_16783[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (15))){
var inst_16735 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16753_16784 = state_16745__$1;
(statearr_16753_16784[(2)] = inst_16735);

(statearr_16753_16784[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (13))){
var state_16745__$1 = state_16745;
var statearr_16754_16785 = state_16745__$1;
(statearr_16754_16785[(2)] = null);

(statearr_16754_16785[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (6))){
var inst_16705 = (state_16745[(7)]);
var inst_16730 = inst_16705.length;
var inst_16731 = (inst_16730 > (0));
var state_16745__$1 = state_16745;
if(cljs.core.truth_(inst_16731)){
var statearr_16755_16786 = state_16745__$1;
(statearr_16755_16786[(1)] = (12));

} else {
var statearr_16756_16787 = state_16745__$1;
(statearr_16756_16787[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (3))){
var inst_16743 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16745__$1,inst_16743);
} else {
if((state_val_16746 === (12))){
var inst_16705 = (state_16745[(7)]);
var inst_16733 = cljs.core.vec(inst_16705);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16745__$1,(15),out,inst_16733);
} else {
if((state_val_16746 === (2))){
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16745__$1,(4),ch);
} else {
if((state_val_16746 === (11))){
var inst_16709 = (state_16745[(9)]);
var inst_16713 = (state_16745[(10)]);
var inst_16723 = (state_16745[(2)]);
var inst_16724 = [];
var inst_16725 = inst_16724.push(inst_16709);
var inst_16705 = inst_16724;
var inst_16706 = inst_16713;
var state_16745__$1 = (function (){var statearr_16757 = state_16745;
(statearr_16757[(7)] = inst_16705);

(statearr_16757[(11)] = inst_16725);

(statearr_16757[(12)] = inst_16723);

(statearr_16757[(8)] = inst_16706);

return statearr_16757;
})();
var statearr_16758_16788 = state_16745__$1;
(statearr_16758_16788[(2)] = null);

(statearr_16758_16788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (9))){
var inst_16705 = (state_16745[(7)]);
var inst_16721 = cljs.core.vec(inst_16705);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16745__$1,(11),out,inst_16721);
} else {
if((state_val_16746 === (5))){
var inst_16709 = (state_16745[(9)]);
var inst_16713 = (state_16745[(10)]);
var inst_16706 = (state_16745[(8)]);
var inst_16713__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16709) : f.call(null,inst_16709));
var inst_16714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16713__$1,inst_16706);
var inst_16715 = cljs.core.keyword_identical_QMARK_(inst_16706,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16716 = (inst_16714) || (inst_16715);
var state_16745__$1 = (function (){var statearr_16759 = state_16745;
(statearr_16759[(10)] = inst_16713__$1);

return statearr_16759;
})();
if(cljs.core.truth_(inst_16716)){
var statearr_16760_16789 = state_16745__$1;
(statearr_16760_16789[(1)] = (8));

} else {
var statearr_16761_16790 = state_16745__$1;
(statearr_16761_16790[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (14))){
var inst_16738 = (state_16745[(2)]);
var inst_16739 = cljs.core.async.close_BANG_(out);
var state_16745__$1 = (function (){var statearr_16763 = state_16745;
(statearr_16763[(13)] = inst_16738);

return statearr_16763;
})();
var statearr_16764_16791 = state_16745__$1;
(statearr_16764_16791[(2)] = inst_16739);

(statearr_16764_16791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (10))){
var inst_16728 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16765_16792 = state_16745__$1;
(statearr_16765_16792[(2)] = inst_16728);

(statearr_16765_16792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (8))){
var inst_16709 = (state_16745[(9)]);
var inst_16705 = (state_16745[(7)]);
var inst_16713 = (state_16745[(10)]);
var inst_16718 = inst_16705.push(inst_16709);
var tmp16762 = inst_16705;
var inst_16705__$1 = tmp16762;
var inst_16706 = inst_16713;
var state_16745__$1 = (function (){var statearr_16766 = state_16745;
(statearr_16766[(7)] = inst_16705__$1);

(statearr_16766[(8)] = inst_16706);

(statearr_16766[(14)] = inst_16718);

return statearr_16766;
})();
var statearr_16767_16793 = state_16745__$1;
(statearr_16767_16793[(2)] = null);

(statearr_16767_16793[(1)] = (2));


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
});})(c__13997__auto___16779,out))
;
return ((function (switch__13883__auto__,c__13997__auto___16779,out){
return (function() {
var cljs$core$async$state_machine__13884__auto__ = null;
var cljs$core$async$state_machine__13884__auto____0 = (function (){
var statearr_16771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16771[(0)] = cljs$core$async$state_machine__13884__auto__);

(statearr_16771[(1)] = (1));

return statearr_16771;
});
var cljs$core$async$state_machine__13884__auto____1 = (function (state_16745){
while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__(state_16745);
if(cljs.core.keyword_identical_QMARK_(result__13886__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13886__auto__;
}
break;
}
}catch (e16772){if((e16772 instanceof Object)){
var ex__13887__auto__ = e16772;
var statearr_16773_16794 = state_16745;
(statearr_16773_16794[(5)] = ex__13887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16745);

return cljs.core.cst$kw$recur;
} else {
throw e16772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13885__auto__,cljs.core.cst$kw$recur)){
var G__16795 = state_16745;
state_16745 = G__16795;
continue;
} else {
return ret_value__13885__auto__;
}
break;
}
});
cljs$core$async$state_machine__13884__auto__ = function(state_16745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13884__auto____1.call(this,state_16745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13884__auto____0;
cljs$core$async$state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13884__auto____1;
return cljs$core$async$state_machine__13884__auto__;
})()
;})(switch__13883__auto__,c__13997__auto___16779,out))
})();
var state__13999__auto__ = (function (){var statearr_16774 = (f__13998__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13998__auto__.cljs$core$IFn$_invoke$arity$0() : f__13998__auto__.call(null));
(statearr_16774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13997__auto___16779);

return statearr_16774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13999__auto__);
});})(c__13997__auto___16779,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
