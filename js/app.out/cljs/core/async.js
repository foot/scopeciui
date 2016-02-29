// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9517 = [];
var len__7513__auto___9523 = arguments.length;
var i__7514__auto___9524 = (0);
while(true){
if((i__7514__auto___9524 < len__7513__auto___9523)){
args9517.push((arguments[i__7514__auto___9524]));

var G__9525 = (i__7514__auto___9524 + (1));
i__7514__auto___9524 = G__9525;
continue;
} else {
}
break;
}

var G__9519 = args9517.length;
switch (G__9519) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9517.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9520 = (function (f,blockable,meta9521){
this.f = f;
this.blockable = blockable;
this.meta9521 = meta9521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9522,meta9521__$1){
var self__ = this;
var _9522__$1 = this;
return (new cljs.core.async.t_cljs$core$async9520(self__.f,self__.blockable,meta9521__$1));
});

cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9522){
var self__ = this;
var _9522__$1 = this;
return self__.meta9521;
});

cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9521","meta9521",-484959177,null)], null);
});

cljs.core.async.t_cljs$core$async9520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9520";

cljs.core.async.t_cljs$core$async9520.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9520");
});

cljs.core.async.__GT_t_cljs$core$async9520 = (function cljs$core$async$__GT_t_cljs$core$async9520(f__$1,blockable__$1,meta9521){
return (new cljs.core.async.t_cljs$core$async9520(f__$1,blockable__$1,meta9521));
});

}

return (new cljs.core.async.t_cljs$core$async9520(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args9529 = [];
var len__7513__auto___9532 = arguments.length;
var i__7514__auto___9533 = (0);
while(true){
if((i__7514__auto___9533 < len__7513__auto___9532)){
args9529.push((arguments[i__7514__auto___9533]));

var G__9534 = (i__7514__auto___9533 + (1));
i__7514__auto___9533 = G__9534;
continue;
} else {
}
break;
}

var G__9531 = args9529.length;
switch (G__9531) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9529.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args9536 = [];
var len__7513__auto___9539 = arguments.length;
var i__7514__auto___9540 = (0);
while(true){
if((i__7514__auto___9540 < len__7513__auto___9539)){
args9536.push((arguments[i__7514__auto___9540]));

var G__9541 = (i__7514__auto___9540 + (1));
i__7514__auto___9540 = G__9541;
continue;
} else {
}
break;
}

var G__9538 = args9536.length;
switch (G__9538) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9536.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args9543 = [];
var len__7513__auto___9546 = arguments.length;
var i__7514__auto___9547 = (0);
while(true){
if((i__7514__auto___9547 < len__7513__auto___9546)){
args9543.push((arguments[i__7514__auto___9547]));

var G__9548 = (i__7514__auto___9547 + (1));
i__7514__auto___9547 = G__9548;
continue;
} else {
}
break;
}

var G__9545 = args9543.length;
switch (G__9545) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9543.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9550 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9550);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9550,ret){
return (function (){
return fn1.call(null,val_9550);
});})(val_9550,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args9551 = [];
var len__7513__auto___9554 = arguments.length;
var i__7514__auto___9555 = (0);
while(true){
if((i__7514__auto___9555 < len__7513__auto___9554)){
args9551.push((arguments[i__7514__auto___9555]));

var G__9556 = (i__7514__auto___9555 + (1));
i__7514__auto___9555 = G__9556;
continue;
} else {
}
break;
}

var G__9553 = args9551.length;
switch (G__9553) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9551.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7358__auto___9558 = n;
var x_9559 = (0);
while(true){
if((x_9559 < n__7358__auto___9558)){
(a[x_9559] = (0));

var G__9560 = (x_9559 + (1));
x_9559 = G__9560;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9561 = (i + (1));
i = G__9561;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9565 = (function (alt_flag,flag,meta9566){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9566 = meta9566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9567,meta9566__$1){
var self__ = this;
var _9567__$1 = this;
return (new cljs.core.async.t_cljs$core$async9565(self__.alt_flag,self__.flag,meta9566__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9567){
var self__ = this;
var _9567__$1 = this;
return self__.meta9566;
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9566","meta9566",815569486,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9565";

cljs.core.async.t_cljs$core$async9565.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9565");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9565 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9565(alt_flag__$1,flag__$1,meta9566){
return (new cljs.core.async.t_cljs$core$async9565(alt_flag__$1,flag__$1,meta9566));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9565(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9571 = (function (alt_handler,flag,cb,meta9572){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9572 = meta9572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9573,meta9572__$1){
var self__ = this;
var _9573__$1 = this;
return (new cljs.core.async.t_cljs$core$async9571(self__.alt_handler,self__.flag,self__.cb,meta9572__$1));
});

cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9573){
var self__ = this;
var _9573__$1 = this;
return self__.meta9572;
});

cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9572","meta9572",-995386032,null)], null);
});

cljs.core.async.t_cljs$core$async9571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9571";

cljs.core.async.t_cljs$core$async9571.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9571");
});

cljs.core.async.__GT_t_cljs$core$async9571 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9571(alt_handler__$1,flag__$1,cb__$1,meta9572){
return (new cljs.core.async.t_cljs$core$async9571(alt_handler__$1,flag__$1,cb__$1,meta9572));
});

}

return (new cljs.core.async.t_cljs$core$async9571(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9574_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9575_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6455__auto__ = wport;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9576 = (i + (1));
i = G__9576;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__6443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__7513__auto___9582 = arguments.length;
var i__7514__auto___9583 = (0);
while(true){
if((i__7514__auto___9583 < len__7513__auto___9582)){
args__7520__auto__.push((arguments[i__7514__auto___9583]));

var G__9584 = (i__7514__auto___9583 + (1));
i__7514__auto___9583 = G__9584;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9579){
var map__9580 = p__9579;
var map__9580__$1 = ((((!((map__9580 == null)))?((((map__9580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9580):map__9580);
var opts = map__9580__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9577){
var G__9578 = cljs.core.first.call(null,seq9577);
var seq9577__$1 = cljs.core.next.call(null,seq9577);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9578,seq9577__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args9585 = [];
var len__7513__auto___9635 = arguments.length;
var i__7514__auto___9636 = (0);
while(true){
if((i__7514__auto___9636 < len__7513__auto___9635)){
args9585.push((arguments[i__7514__auto___9636]));

var G__9637 = (i__7514__auto___9636 + (1));
i__7514__auto___9636 = G__9637;
continue;
} else {
}
break;
}

var G__9587 = args9585.length;
switch (G__9587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9585.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9472__auto___9639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___9639){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___9639){
return (function (state_9611){
var state_val_9612 = (state_9611[(1)]);
if((state_val_9612 === (7))){
var inst_9607 = (state_9611[(2)]);
var state_9611__$1 = state_9611;
var statearr_9613_9640 = state_9611__$1;
(statearr_9613_9640[(2)] = inst_9607);

(statearr_9613_9640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (1))){
var state_9611__$1 = state_9611;
var statearr_9614_9641 = state_9611__$1;
(statearr_9614_9641[(2)] = null);

(statearr_9614_9641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (4))){
var inst_9590 = (state_9611[(7)]);
var inst_9590__$1 = (state_9611[(2)]);
var inst_9591 = (inst_9590__$1 == null);
var state_9611__$1 = (function (){var statearr_9615 = state_9611;
(statearr_9615[(7)] = inst_9590__$1);

return statearr_9615;
})();
if(cljs.core.truth_(inst_9591)){
var statearr_9616_9642 = state_9611__$1;
(statearr_9616_9642[(1)] = (5));

} else {
var statearr_9617_9643 = state_9611__$1;
(statearr_9617_9643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (13))){
var state_9611__$1 = state_9611;
var statearr_9618_9644 = state_9611__$1;
(statearr_9618_9644[(2)] = null);

(statearr_9618_9644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (6))){
var inst_9590 = (state_9611[(7)]);
var state_9611__$1 = state_9611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9611__$1,(11),to,inst_9590);
} else {
if((state_val_9612 === (3))){
var inst_9609 = (state_9611[(2)]);
var state_9611__$1 = state_9611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9611__$1,inst_9609);
} else {
if((state_val_9612 === (12))){
var state_9611__$1 = state_9611;
var statearr_9619_9645 = state_9611__$1;
(statearr_9619_9645[(2)] = null);

(statearr_9619_9645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (2))){
var state_9611__$1 = state_9611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9611__$1,(4),from);
} else {
if((state_val_9612 === (11))){
var inst_9600 = (state_9611[(2)]);
var state_9611__$1 = state_9611;
if(cljs.core.truth_(inst_9600)){
var statearr_9620_9646 = state_9611__$1;
(statearr_9620_9646[(1)] = (12));

} else {
var statearr_9621_9647 = state_9611__$1;
(statearr_9621_9647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (9))){
var state_9611__$1 = state_9611;
var statearr_9622_9648 = state_9611__$1;
(statearr_9622_9648[(2)] = null);

(statearr_9622_9648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (5))){
var state_9611__$1 = state_9611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9623_9649 = state_9611__$1;
(statearr_9623_9649[(1)] = (8));

} else {
var statearr_9624_9650 = state_9611__$1;
(statearr_9624_9650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (14))){
var inst_9605 = (state_9611[(2)]);
var state_9611__$1 = state_9611;
var statearr_9625_9651 = state_9611__$1;
(statearr_9625_9651[(2)] = inst_9605);

(statearr_9625_9651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (10))){
var inst_9597 = (state_9611[(2)]);
var state_9611__$1 = state_9611;
var statearr_9626_9652 = state_9611__$1;
(statearr_9626_9652[(2)] = inst_9597);

(statearr_9626_9652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9612 === (8))){
var inst_9594 = cljs.core.async.close_BANG_.call(null,to);
var state_9611__$1 = state_9611;
var statearr_9627_9653 = state_9611__$1;
(statearr_9627_9653[(2)] = inst_9594);

(statearr_9627_9653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___9639))
;
return ((function (switch__9360__auto__,c__9472__auto___9639){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_9631 = [null,null,null,null,null,null,null,null];
(statearr_9631[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_9631[(1)] = (1));

return statearr_9631;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_9611){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e9632){if((e9632 instanceof Object)){
var ex__9364__auto__ = e9632;
var statearr_9633_9654 = state_9611;
(statearr_9633_9654[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9655 = state_9611;
state_9611 = G__9655;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_9611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_9611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___9639))
})();
var state__9474__auto__ = (function (){var statearr_9634 = f__9473__auto__.call(null);
(statearr_9634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___9639);

return statearr_9634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___9639))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9839){
var vec__9840 = p__9839;
var v = cljs.core.nth.call(null,vec__9840,(0),null);
var p = cljs.core.nth.call(null,vec__9840,(1),null);
var job = vec__9840;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9472__auto___10022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results){
return (function (state_9845){
var state_val_9846 = (state_9845[(1)]);
if((state_val_9846 === (1))){
var state_9845__$1 = state_9845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9845__$1,(2),res,v);
} else {
if((state_val_9846 === (2))){
var inst_9842 = (state_9845[(2)]);
var inst_9843 = cljs.core.async.close_BANG_.call(null,res);
var state_9845__$1 = (function (){var statearr_9847 = state_9845;
(statearr_9847[(7)] = inst_9842);

return statearr_9847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9845__$1,inst_9843);
} else {
return null;
}
}
});})(c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results))
;
return ((function (switch__9360__auto__,c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_9851 = [null,null,null,null,null,null,null,null];
(statearr_9851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__);

(statearr_9851[(1)] = (1));

return statearr_9851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1 = (function (state_9845){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e9852){if((e9852 instanceof Object)){
var ex__9364__auto__ = e9852;
var statearr_9853_10023 = state_9845;
(statearr_9853_10023[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10024 = state_9845;
state_9845 = G__10024;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = function(state_9845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1.call(this,state_9845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results))
})();
var state__9474__auto__ = (function (){var statearr_9854 = f__9473__auto__.call(null);
(statearr_9854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10022);

return statearr_9854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___10022,res,vec__9840,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9855){
var vec__9856 = p__9855;
var v = cljs.core.nth.call(null,vec__9856,(0),null);
var p = cljs.core.nth.call(null,vec__9856,(1),null);
var job = vec__9856;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7358__auto___10025 = n;
var __10026 = (0);
while(true){
if((__10026 < n__7358__auto___10025)){
var G__9857_10027 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9857_10027) {
case "compute":
var c__9472__auto___10029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10026,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (__10026,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function (state_9870){
var state_val_9871 = (state_9870[(1)]);
if((state_val_9871 === (1))){
var state_9870__$1 = state_9870;
var statearr_9872_10030 = state_9870__$1;
(statearr_9872_10030[(2)] = null);

(statearr_9872_10030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9871 === (2))){
var state_9870__$1 = state_9870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9870__$1,(4),jobs);
} else {
if((state_val_9871 === (3))){
var inst_9868 = (state_9870[(2)]);
var state_9870__$1 = state_9870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9870__$1,inst_9868);
} else {
if((state_val_9871 === (4))){
var inst_9860 = (state_9870[(2)]);
var inst_9861 = process.call(null,inst_9860);
var state_9870__$1 = state_9870;
if(cljs.core.truth_(inst_9861)){
var statearr_9873_10031 = state_9870__$1;
(statearr_9873_10031[(1)] = (5));

} else {
var statearr_9874_10032 = state_9870__$1;
(statearr_9874_10032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9871 === (5))){
var state_9870__$1 = state_9870;
var statearr_9875_10033 = state_9870__$1;
(statearr_9875_10033[(2)] = null);

(statearr_9875_10033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9871 === (6))){
var state_9870__$1 = state_9870;
var statearr_9876_10034 = state_9870__$1;
(statearr_9876_10034[(2)] = null);

(statearr_9876_10034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9871 === (7))){
var inst_9866 = (state_9870[(2)]);
var state_9870__$1 = state_9870;
var statearr_9877_10035 = state_9870__$1;
(statearr_9877_10035[(2)] = inst_9866);

(statearr_9877_10035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10026,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
;
return ((function (__10026,switch__9360__auto__,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_9881 = [null,null,null,null,null,null,null];
(statearr_9881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__);

(statearr_9881[(1)] = (1));

return statearr_9881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1 = (function (state_9870){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e9882){if((e9882 instanceof Object)){
var ex__9364__auto__ = e9882;
var statearr_9883_10036 = state_9870;
(statearr_9883_10036[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10037 = state_9870;
state_9870 = G__10037;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = function(state_9870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1.call(this,state_9870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__;
})()
;})(__10026,switch__9360__auto__,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
})();
var state__9474__auto__ = (function (){var statearr_9884 = f__9473__auto__.call(null);
(statearr_9884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10029);

return statearr_9884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(__10026,c__9472__auto___10029,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
);


break;
case "async":
var c__9472__auto___10038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10026,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (__10026,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function (state_9897){
var state_val_9898 = (state_9897[(1)]);
if((state_val_9898 === (1))){
var state_9897__$1 = state_9897;
var statearr_9899_10039 = state_9897__$1;
(statearr_9899_10039[(2)] = null);

(statearr_9899_10039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9898 === (2))){
var state_9897__$1 = state_9897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9897__$1,(4),jobs);
} else {
if((state_val_9898 === (3))){
var inst_9895 = (state_9897[(2)]);
var state_9897__$1 = state_9897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9897__$1,inst_9895);
} else {
if((state_val_9898 === (4))){
var inst_9887 = (state_9897[(2)]);
var inst_9888 = async.call(null,inst_9887);
var state_9897__$1 = state_9897;
if(cljs.core.truth_(inst_9888)){
var statearr_9900_10040 = state_9897__$1;
(statearr_9900_10040[(1)] = (5));

} else {
var statearr_9901_10041 = state_9897__$1;
(statearr_9901_10041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9898 === (5))){
var state_9897__$1 = state_9897;
var statearr_9902_10042 = state_9897__$1;
(statearr_9902_10042[(2)] = null);

(statearr_9902_10042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9898 === (6))){
var state_9897__$1 = state_9897;
var statearr_9903_10043 = state_9897__$1;
(statearr_9903_10043[(2)] = null);

(statearr_9903_10043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9898 === (7))){
var inst_9893 = (state_9897[(2)]);
var state_9897__$1 = state_9897;
var statearr_9904_10044 = state_9897__$1;
(statearr_9904_10044[(2)] = inst_9893);

(statearr_9904_10044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10026,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
;
return ((function (__10026,switch__9360__auto__,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_9908 = [null,null,null,null,null,null,null];
(statearr_9908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__);

(statearr_9908[(1)] = (1));

return statearr_9908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1 = (function (state_9897){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e9909){if((e9909 instanceof Object)){
var ex__9364__auto__ = e9909;
var statearr_9910_10045 = state_9897;
(statearr_9910_10045[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10046 = state_9897;
state_9897 = G__10046;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = function(state_9897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1.call(this,state_9897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__;
})()
;})(__10026,switch__9360__auto__,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
})();
var state__9474__auto__ = (function (){var statearr_9911 = f__9473__auto__.call(null);
(statearr_9911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10038);

return statearr_9911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(__10026,c__9472__auto___10038,G__9857_10027,n__7358__auto___10025,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10047 = (__10026 + (1));
__10026 = G__10047;
continue;
} else {
}
break;
}

var c__9472__auto___10048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___10048,jobs,results,process,async){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___10048,jobs,results,process,async){
return (function (state_9933){
var state_val_9934 = (state_9933[(1)]);
if((state_val_9934 === (1))){
var state_9933__$1 = state_9933;
var statearr_9935_10049 = state_9933__$1;
(statearr_9935_10049[(2)] = null);

(statearr_9935_10049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (2))){
var state_9933__$1 = state_9933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9933__$1,(4),from);
} else {
if((state_val_9934 === (3))){
var inst_9931 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9933__$1,inst_9931);
} else {
if((state_val_9934 === (4))){
var inst_9914 = (state_9933[(7)]);
var inst_9914__$1 = (state_9933[(2)]);
var inst_9915 = (inst_9914__$1 == null);
var state_9933__$1 = (function (){var statearr_9936 = state_9933;
(statearr_9936[(7)] = inst_9914__$1);

return statearr_9936;
})();
if(cljs.core.truth_(inst_9915)){
var statearr_9937_10050 = state_9933__$1;
(statearr_9937_10050[(1)] = (5));

} else {
var statearr_9938_10051 = state_9933__$1;
(statearr_9938_10051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (5))){
var inst_9917 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9933__$1 = state_9933;
var statearr_9939_10052 = state_9933__$1;
(statearr_9939_10052[(2)] = inst_9917);

(statearr_9939_10052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (6))){
var inst_9914 = (state_9933[(7)]);
var inst_9919 = (state_9933[(8)]);
var inst_9919__$1 = cljs.core.async.chan.call(null,(1));
var inst_9920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9921 = [inst_9914,inst_9919__$1];
var inst_9922 = (new cljs.core.PersistentVector(null,2,(5),inst_9920,inst_9921,null));
var state_9933__$1 = (function (){var statearr_9940 = state_9933;
(statearr_9940[(8)] = inst_9919__$1);

return statearr_9940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9933__$1,(8),jobs,inst_9922);
} else {
if((state_val_9934 === (7))){
var inst_9929 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9941_10053 = state_9933__$1;
(statearr_9941_10053[(2)] = inst_9929);

(statearr_9941_10053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (8))){
var inst_9919 = (state_9933[(8)]);
var inst_9924 = (state_9933[(2)]);
var state_9933__$1 = (function (){var statearr_9942 = state_9933;
(statearr_9942[(9)] = inst_9924);

return statearr_9942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9933__$1,(9),results,inst_9919);
} else {
if((state_val_9934 === (9))){
var inst_9926 = (state_9933[(2)]);
var state_9933__$1 = (function (){var statearr_9943 = state_9933;
(statearr_9943[(10)] = inst_9926);

return statearr_9943;
})();
var statearr_9944_10054 = state_9933__$1;
(statearr_9944_10054[(2)] = null);

(statearr_9944_10054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___10048,jobs,results,process,async))
;
return ((function (switch__9360__auto__,c__9472__auto___10048,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_9948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__);

(statearr_9948[(1)] = (1));

return statearr_9948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1 = (function (state_9933){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e9949){if((e9949 instanceof Object)){
var ex__9364__auto__ = e9949;
var statearr_9950_10055 = state_9933;
(statearr_9950_10055[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10056 = state_9933;
state_9933 = G__10056;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = function(state_9933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1.call(this,state_9933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___10048,jobs,results,process,async))
})();
var state__9474__auto__ = (function (){var statearr_9951 = f__9473__auto__.call(null);
(statearr_9951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10048);

return statearr_9951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___10048,jobs,results,process,async))
);


var c__9472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto__,jobs,results,process,async){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto__,jobs,results,process,async){
return (function (state_9989){
var state_val_9990 = (state_9989[(1)]);
if((state_val_9990 === (7))){
var inst_9985 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
var statearr_9991_10057 = state_9989__$1;
(statearr_9991_10057[(2)] = inst_9985);

(statearr_9991_10057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (20))){
var state_9989__$1 = state_9989;
var statearr_9992_10058 = state_9989__$1;
(statearr_9992_10058[(2)] = null);

(statearr_9992_10058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (1))){
var state_9989__$1 = state_9989;
var statearr_9993_10059 = state_9989__$1;
(statearr_9993_10059[(2)] = null);

(statearr_9993_10059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (4))){
var inst_9954 = (state_9989[(7)]);
var inst_9954__$1 = (state_9989[(2)]);
var inst_9955 = (inst_9954__$1 == null);
var state_9989__$1 = (function (){var statearr_9994 = state_9989;
(statearr_9994[(7)] = inst_9954__$1);

return statearr_9994;
})();
if(cljs.core.truth_(inst_9955)){
var statearr_9995_10060 = state_9989__$1;
(statearr_9995_10060[(1)] = (5));

} else {
var statearr_9996_10061 = state_9989__$1;
(statearr_9996_10061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (15))){
var inst_9967 = (state_9989[(8)]);
var state_9989__$1 = state_9989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9989__$1,(18),to,inst_9967);
} else {
if((state_val_9990 === (21))){
var inst_9980 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
var statearr_9997_10062 = state_9989__$1;
(statearr_9997_10062[(2)] = inst_9980);

(statearr_9997_10062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (13))){
var inst_9982 = (state_9989[(2)]);
var state_9989__$1 = (function (){var statearr_9998 = state_9989;
(statearr_9998[(9)] = inst_9982);

return statearr_9998;
})();
var statearr_9999_10063 = state_9989__$1;
(statearr_9999_10063[(2)] = null);

(statearr_9999_10063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (6))){
var inst_9954 = (state_9989[(7)]);
var state_9989__$1 = state_9989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9989__$1,(11),inst_9954);
} else {
if((state_val_9990 === (17))){
var inst_9975 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
if(cljs.core.truth_(inst_9975)){
var statearr_10000_10064 = state_9989__$1;
(statearr_10000_10064[(1)] = (19));

} else {
var statearr_10001_10065 = state_9989__$1;
(statearr_10001_10065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (3))){
var inst_9987 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9989__$1,inst_9987);
} else {
if((state_val_9990 === (12))){
var inst_9964 = (state_9989[(10)]);
var state_9989__$1 = state_9989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9989__$1,(14),inst_9964);
} else {
if((state_val_9990 === (2))){
var state_9989__$1 = state_9989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9989__$1,(4),results);
} else {
if((state_val_9990 === (19))){
var state_9989__$1 = state_9989;
var statearr_10002_10066 = state_9989__$1;
(statearr_10002_10066[(2)] = null);

(statearr_10002_10066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (11))){
var inst_9964 = (state_9989[(2)]);
var state_9989__$1 = (function (){var statearr_10003 = state_9989;
(statearr_10003[(10)] = inst_9964);

return statearr_10003;
})();
var statearr_10004_10067 = state_9989__$1;
(statearr_10004_10067[(2)] = null);

(statearr_10004_10067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (9))){
var state_9989__$1 = state_9989;
var statearr_10005_10068 = state_9989__$1;
(statearr_10005_10068[(2)] = null);

(statearr_10005_10068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (5))){
var state_9989__$1 = state_9989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10006_10069 = state_9989__$1;
(statearr_10006_10069[(1)] = (8));

} else {
var statearr_10007_10070 = state_9989__$1;
(statearr_10007_10070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (14))){
var inst_9969 = (state_9989[(11)]);
var inst_9967 = (state_9989[(8)]);
var inst_9967__$1 = (state_9989[(2)]);
var inst_9968 = (inst_9967__$1 == null);
var inst_9969__$1 = cljs.core.not.call(null,inst_9968);
var state_9989__$1 = (function (){var statearr_10008 = state_9989;
(statearr_10008[(11)] = inst_9969__$1);

(statearr_10008[(8)] = inst_9967__$1);

return statearr_10008;
})();
if(inst_9969__$1){
var statearr_10009_10071 = state_9989__$1;
(statearr_10009_10071[(1)] = (15));

} else {
var statearr_10010_10072 = state_9989__$1;
(statearr_10010_10072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (16))){
var inst_9969 = (state_9989[(11)]);
var state_9989__$1 = state_9989;
var statearr_10011_10073 = state_9989__$1;
(statearr_10011_10073[(2)] = inst_9969);

(statearr_10011_10073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (10))){
var inst_9961 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
var statearr_10012_10074 = state_9989__$1;
(statearr_10012_10074[(2)] = inst_9961);

(statearr_10012_10074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (18))){
var inst_9972 = (state_9989[(2)]);
var state_9989__$1 = state_9989;
var statearr_10013_10075 = state_9989__$1;
(statearr_10013_10075[(2)] = inst_9972);

(statearr_10013_10075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9990 === (8))){
var inst_9958 = cljs.core.async.close_BANG_.call(null,to);
var state_9989__$1 = state_9989;
var statearr_10014_10076 = state_9989__$1;
(statearr_10014_10076[(2)] = inst_9958);

(statearr_10014_10076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto__,jobs,results,process,async))
;
return ((function (switch__9360__auto__,c__9472__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_10018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__);

(statearr_10018[(1)] = (1));

return statearr_10018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1 = (function (state_9989){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_9989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e10019){if((e10019 instanceof Object)){
var ex__9364__auto__ = e10019;
var statearr_10020_10077 = state_9989;
(statearr_10020_10077[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10078 = state_9989;
state_9989 = G__10078;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__ = function(state_9989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1.call(this,state_9989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto__,jobs,results,process,async))
})();
var state__9474__auto__ = (function (){var statearr_10021 = f__9473__auto__.call(null);
(statearr_10021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto__);

return statearr_10021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto__,jobs,results,process,async))
);

return c__9472__auto__;
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
var args10079 = [];
var len__7513__auto___10082 = arguments.length;
var i__7514__auto___10083 = (0);
while(true){
if((i__7514__auto___10083 < len__7513__auto___10082)){
args10079.push((arguments[i__7514__auto___10083]));

var G__10084 = (i__7514__auto___10083 + (1));
i__7514__auto___10083 = G__10084;
continue;
} else {
}
break;
}

var G__10081 = args10079.length;
switch (G__10081) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10079.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args10086 = [];
var len__7513__auto___10089 = arguments.length;
var i__7514__auto___10090 = (0);
while(true){
if((i__7514__auto___10090 < len__7513__auto___10089)){
args10086.push((arguments[i__7514__auto___10090]));

var G__10091 = (i__7514__auto___10090 + (1));
i__7514__auto___10090 = G__10091;
continue;
} else {
}
break;
}

var G__10088 = args10086.length;
switch (G__10088) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10086.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args10093 = [];
var len__7513__auto___10146 = arguments.length;
var i__7514__auto___10147 = (0);
while(true){
if((i__7514__auto___10147 < len__7513__auto___10146)){
args10093.push((arguments[i__7514__auto___10147]));

var G__10148 = (i__7514__auto___10147 + (1));
i__7514__auto___10147 = G__10148;
continue;
} else {
}
break;
}

var G__10095 = args10093.length;
switch (G__10095) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10093.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9472__auto___10150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___10150,tc,fc){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___10150,tc,fc){
return (function (state_10121){
var state_val_10122 = (state_10121[(1)]);
if((state_val_10122 === (7))){
var inst_10117 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
var statearr_10123_10151 = state_10121__$1;
(statearr_10123_10151[(2)] = inst_10117);

(statearr_10123_10151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (1))){
var state_10121__$1 = state_10121;
var statearr_10124_10152 = state_10121__$1;
(statearr_10124_10152[(2)] = null);

(statearr_10124_10152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (4))){
var inst_10098 = (state_10121[(7)]);
var inst_10098__$1 = (state_10121[(2)]);
var inst_10099 = (inst_10098__$1 == null);
var state_10121__$1 = (function (){var statearr_10125 = state_10121;
(statearr_10125[(7)] = inst_10098__$1);

return statearr_10125;
})();
if(cljs.core.truth_(inst_10099)){
var statearr_10126_10153 = state_10121__$1;
(statearr_10126_10153[(1)] = (5));

} else {
var statearr_10127_10154 = state_10121__$1;
(statearr_10127_10154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (13))){
var state_10121__$1 = state_10121;
var statearr_10128_10155 = state_10121__$1;
(statearr_10128_10155[(2)] = null);

(statearr_10128_10155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (6))){
var inst_10098 = (state_10121[(7)]);
var inst_10104 = p.call(null,inst_10098);
var state_10121__$1 = state_10121;
if(cljs.core.truth_(inst_10104)){
var statearr_10129_10156 = state_10121__$1;
(statearr_10129_10156[(1)] = (9));

} else {
var statearr_10130_10157 = state_10121__$1;
(statearr_10130_10157[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (3))){
var inst_10119 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10121__$1,inst_10119);
} else {
if((state_val_10122 === (12))){
var state_10121__$1 = state_10121;
var statearr_10131_10158 = state_10121__$1;
(statearr_10131_10158[(2)] = null);

(statearr_10131_10158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (2))){
var state_10121__$1 = state_10121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10121__$1,(4),ch);
} else {
if((state_val_10122 === (11))){
var inst_10098 = (state_10121[(7)]);
var inst_10108 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10121__$1,(8),inst_10108,inst_10098);
} else {
if((state_val_10122 === (9))){
var state_10121__$1 = state_10121;
var statearr_10132_10159 = state_10121__$1;
(statearr_10132_10159[(2)] = tc);

(statearr_10132_10159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (5))){
var inst_10101 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10102 = cljs.core.async.close_BANG_.call(null,fc);
var state_10121__$1 = (function (){var statearr_10133 = state_10121;
(statearr_10133[(8)] = inst_10101);

return statearr_10133;
})();
var statearr_10134_10160 = state_10121__$1;
(statearr_10134_10160[(2)] = inst_10102);

(statearr_10134_10160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (14))){
var inst_10115 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
var statearr_10135_10161 = state_10121__$1;
(statearr_10135_10161[(2)] = inst_10115);

(statearr_10135_10161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (10))){
var state_10121__$1 = state_10121;
var statearr_10136_10162 = state_10121__$1;
(statearr_10136_10162[(2)] = fc);

(statearr_10136_10162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (8))){
var inst_10110 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
if(cljs.core.truth_(inst_10110)){
var statearr_10137_10163 = state_10121__$1;
(statearr_10137_10163[(1)] = (12));

} else {
var statearr_10138_10164 = state_10121__$1;
(statearr_10138_10164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___10150,tc,fc))
;
return ((function (switch__9360__auto__,c__9472__auto___10150,tc,fc){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_10142 = [null,null,null,null,null,null,null,null,null];
(statearr_10142[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_10142[(1)] = (1));

return statearr_10142;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_10121){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_10121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e10143){if((e10143 instanceof Object)){
var ex__9364__auto__ = e10143;
var statearr_10144_10165 = state_10121;
(statearr_10144_10165[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10166 = state_10121;
state_10121 = G__10166;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_10121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_10121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___10150,tc,fc))
})();
var state__9474__auto__ = (function (){var statearr_10145 = f__9473__auto__.call(null);
(statearr_10145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10150);

return statearr_10145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___10150,tc,fc))
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
var c__9472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto__){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto__){
return (function (state_10230){
var state_val_10231 = (state_10230[(1)]);
if((state_val_10231 === (7))){
var inst_10226 = (state_10230[(2)]);
var state_10230__$1 = state_10230;
var statearr_10232_10253 = state_10230__$1;
(statearr_10232_10253[(2)] = inst_10226);

(statearr_10232_10253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (1))){
var inst_10210 = init;
var state_10230__$1 = (function (){var statearr_10233 = state_10230;
(statearr_10233[(7)] = inst_10210);

return statearr_10233;
})();
var statearr_10234_10254 = state_10230__$1;
(statearr_10234_10254[(2)] = null);

(statearr_10234_10254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (4))){
var inst_10213 = (state_10230[(8)]);
var inst_10213__$1 = (state_10230[(2)]);
var inst_10214 = (inst_10213__$1 == null);
var state_10230__$1 = (function (){var statearr_10235 = state_10230;
(statearr_10235[(8)] = inst_10213__$1);

return statearr_10235;
})();
if(cljs.core.truth_(inst_10214)){
var statearr_10236_10255 = state_10230__$1;
(statearr_10236_10255[(1)] = (5));

} else {
var statearr_10237_10256 = state_10230__$1;
(statearr_10237_10256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (6))){
var inst_10210 = (state_10230[(7)]);
var inst_10217 = (state_10230[(9)]);
var inst_10213 = (state_10230[(8)]);
var inst_10217__$1 = f.call(null,inst_10210,inst_10213);
var inst_10218 = cljs.core.reduced_QMARK_.call(null,inst_10217__$1);
var state_10230__$1 = (function (){var statearr_10238 = state_10230;
(statearr_10238[(9)] = inst_10217__$1);

return statearr_10238;
})();
if(inst_10218){
var statearr_10239_10257 = state_10230__$1;
(statearr_10239_10257[(1)] = (8));

} else {
var statearr_10240_10258 = state_10230__$1;
(statearr_10240_10258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (3))){
var inst_10228 = (state_10230[(2)]);
var state_10230__$1 = state_10230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10230__$1,inst_10228);
} else {
if((state_val_10231 === (2))){
var state_10230__$1 = state_10230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10230__$1,(4),ch);
} else {
if((state_val_10231 === (9))){
var inst_10217 = (state_10230[(9)]);
var inst_10210 = inst_10217;
var state_10230__$1 = (function (){var statearr_10241 = state_10230;
(statearr_10241[(7)] = inst_10210);

return statearr_10241;
})();
var statearr_10242_10259 = state_10230__$1;
(statearr_10242_10259[(2)] = null);

(statearr_10242_10259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (5))){
var inst_10210 = (state_10230[(7)]);
var state_10230__$1 = state_10230;
var statearr_10243_10260 = state_10230__$1;
(statearr_10243_10260[(2)] = inst_10210);

(statearr_10243_10260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (10))){
var inst_10224 = (state_10230[(2)]);
var state_10230__$1 = state_10230;
var statearr_10244_10261 = state_10230__$1;
(statearr_10244_10261[(2)] = inst_10224);

(statearr_10244_10261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10231 === (8))){
var inst_10217 = (state_10230[(9)]);
var inst_10220 = cljs.core.deref.call(null,inst_10217);
var state_10230__$1 = state_10230;
var statearr_10245_10262 = state_10230__$1;
(statearr_10245_10262[(2)] = inst_10220);

(statearr_10245_10262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto__))
;
return ((function (switch__9360__auto__,c__9472__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9361__auto____0 = (function (){
var statearr_10249 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10249[(0)] = cljs$core$async$reduce_$_state_machine__9361__auto__);

(statearr_10249[(1)] = (1));

return statearr_10249;
});
var cljs$core$async$reduce_$_state_machine__9361__auto____1 = (function (state_10230){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_10230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e10250){if((e10250 instanceof Object)){
var ex__9364__auto__ = e10250;
var statearr_10251_10263 = state_10230;
(statearr_10251_10263[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10264 = state_10230;
state_10230 = G__10264;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9361__auto__ = function(state_10230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9361__auto____1.call(this,state_10230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9361__auto____0;
cljs$core$async$reduce_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9361__auto____1;
return cljs$core$async$reduce_$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto__))
})();
var state__9474__auto__ = (function (){var statearr_10252 = f__9473__auto__.call(null);
(statearr_10252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto__);

return statearr_10252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto__))
);

return c__9472__auto__;
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
var args10265 = [];
var len__7513__auto___10317 = arguments.length;
var i__7514__auto___10318 = (0);
while(true){
if((i__7514__auto___10318 < len__7513__auto___10317)){
args10265.push((arguments[i__7514__auto___10318]));

var G__10319 = (i__7514__auto___10318 + (1));
i__7514__auto___10318 = G__10319;
continue;
} else {
}
break;
}

var G__10267 = args10265.length;
switch (G__10267) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10265.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto__){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto__){
return (function (state_10292){
var state_val_10293 = (state_10292[(1)]);
if((state_val_10293 === (7))){
var inst_10274 = (state_10292[(2)]);
var state_10292__$1 = state_10292;
var statearr_10294_10321 = state_10292__$1;
(statearr_10294_10321[(2)] = inst_10274);

(statearr_10294_10321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (1))){
var inst_10268 = cljs.core.seq.call(null,coll);
var inst_10269 = inst_10268;
var state_10292__$1 = (function (){var statearr_10295 = state_10292;
(statearr_10295[(7)] = inst_10269);

return statearr_10295;
})();
var statearr_10296_10322 = state_10292__$1;
(statearr_10296_10322[(2)] = null);

(statearr_10296_10322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (4))){
var inst_10269 = (state_10292[(7)]);
var inst_10272 = cljs.core.first.call(null,inst_10269);
var state_10292__$1 = state_10292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10292__$1,(7),ch,inst_10272);
} else {
if((state_val_10293 === (13))){
var inst_10286 = (state_10292[(2)]);
var state_10292__$1 = state_10292;
var statearr_10297_10323 = state_10292__$1;
(statearr_10297_10323[(2)] = inst_10286);

(statearr_10297_10323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (6))){
var inst_10277 = (state_10292[(2)]);
var state_10292__$1 = state_10292;
if(cljs.core.truth_(inst_10277)){
var statearr_10298_10324 = state_10292__$1;
(statearr_10298_10324[(1)] = (8));

} else {
var statearr_10299_10325 = state_10292__$1;
(statearr_10299_10325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (3))){
var inst_10290 = (state_10292[(2)]);
var state_10292__$1 = state_10292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10292__$1,inst_10290);
} else {
if((state_val_10293 === (12))){
var state_10292__$1 = state_10292;
var statearr_10300_10326 = state_10292__$1;
(statearr_10300_10326[(2)] = null);

(statearr_10300_10326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (2))){
var inst_10269 = (state_10292[(7)]);
var state_10292__$1 = state_10292;
if(cljs.core.truth_(inst_10269)){
var statearr_10301_10327 = state_10292__$1;
(statearr_10301_10327[(1)] = (4));

} else {
var statearr_10302_10328 = state_10292__$1;
(statearr_10302_10328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (11))){
var inst_10283 = cljs.core.async.close_BANG_.call(null,ch);
var state_10292__$1 = state_10292;
var statearr_10303_10329 = state_10292__$1;
(statearr_10303_10329[(2)] = inst_10283);

(statearr_10303_10329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (9))){
var state_10292__$1 = state_10292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10304_10330 = state_10292__$1;
(statearr_10304_10330[(1)] = (11));

} else {
var statearr_10305_10331 = state_10292__$1;
(statearr_10305_10331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (5))){
var inst_10269 = (state_10292[(7)]);
var state_10292__$1 = state_10292;
var statearr_10306_10332 = state_10292__$1;
(statearr_10306_10332[(2)] = inst_10269);

(statearr_10306_10332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (10))){
var inst_10288 = (state_10292[(2)]);
var state_10292__$1 = state_10292;
var statearr_10307_10333 = state_10292__$1;
(statearr_10307_10333[(2)] = inst_10288);

(statearr_10307_10333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10293 === (8))){
var inst_10269 = (state_10292[(7)]);
var inst_10279 = cljs.core.next.call(null,inst_10269);
var inst_10269__$1 = inst_10279;
var state_10292__$1 = (function (){var statearr_10308 = state_10292;
(statearr_10308[(7)] = inst_10269__$1);

return statearr_10308;
})();
var statearr_10309_10334 = state_10292__$1;
(statearr_10309_10334[(2)] = null);

(statearr_10309_10334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto__))
;
return ((function (switch__9360__auto__,c__9472__auto__){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_10313 = [null,null,null,null,null,null,null,null];
(statearr_10313[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_10313[(1)] = (1));

return statearr_10313;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_10292){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_10292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e10314){if((e10314 instanceof Object)){
var ex__9364__auto__ = e10314;
var statearr_10315_10335 = state_10292;
(statearr_10315_10335[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10336 = state_10292;
state_10292 = G__10336;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_10292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_10292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto__))
})();
var state__9474__auto__ = (function (){var statearr_10316 = f__9473__auto__.call(null);
(statearr_10316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto__);

return statearr_10316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto__))
);

return c__9472__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__7111__auto__.call(null,_);
} else {
var m__7111__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__7111__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7111__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__7111__auto__.call(null,m);
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10558 = (function (mult,ch,cs,meta10559){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10559 = meta10559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10560,meta10559__$1){
var self__ = this;
var _10560__$1 = this;
return (new cljs.core.async.t_cljs$core$async10558(self__.mult,self__.ch,self__.cs,meta10559__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10560){
var self__ = this;
var _10560__$1 = this;
return self__.meta10559;
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10559","meta10559",1604585645,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10558";

cljs.core.async.t_cljs$core$async10558.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async10558");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10558 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10558(mult__$1,ch__$1,cs__$1,meta10559){
return (new cljs.core.async.t_cljs$core$async10558(mult__$1,ch__$1,cs__$1,meta10559));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10558(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9472__auto___10779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___10779,cs,m,dchan,dctr,done){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___10779,cs,m,dchan,dctr,done){
return (function (state_10691){
var state_val_10692 = (state_10691[(1)]);
if((state_val_10692 === (7))){
var inst_10687 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10693_10780 = state_10691__$1;
(statearr_10693_10780[(2)] = inst_10687);

(statearr_10693_10780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (20))){
var inst_10592 = (state_10691[(7)]);
var inst_10602 = cljs.core.first.call(null,inst_10592);
var inst_10603 = cljs.core.nth.call(null,inst_10602,(0),null);
var inst_10604 = cljs.core.nth.call(null,inst_10602,(1),null);
var state_10691__$1 = (function (){var statearr_10694 = state_10691;
(statearr_10694[(8)] = inst_10603);

return statearr_10694;
})();
if(cljs.core.truth_(inst_10604)){
var statearr_10695_10781 = state_10691__$1;
(statearr_10695_10781[(1)] = (22));

} else {
var statearr_10696_10782 = state_10691__$1;
(statearr_10696_10782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (27))){
var inst_10632 = (state_10691[(9)]);
var inst_10634 = (state_10691[(10)]);
var inst_10563 = (state_10691[(11)]);
var inst_10639 = (state_10691[(12)]);
var inst_10639__$1 = cljs.core._nth.call(null,inst_10632,inst_10634);
var inst_10640 = cljs.core.async.put_BANG_.call(null,inst_10639__$1,inst_10563,done);
var state_10691__$1 = (function (){var statearr_10697 = state_10691;
(statearr_10697[(12)] = inst_10639__$1);

return statearr_10697;
})();
if(cljs.core.truth_(inst_10640)){
var statearr_10698_10783 = state_10691__$1;
(statearr_10698_10783[(1)] = (30));

} else {
var statearr_10699_10784 = state_10691__$1;
(statearr_10699_10784[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (1))){
var state_10691__$1 = state_10691;
var statearr_10700_10785 = state_10691__$1;
(statearr_10700_10785[(2)] = null);

(statearr_10700_10785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (24))){
var inst_10592 = (state_10691[(7)]);
var inst_10609 = (state_10691[(2)]);
var inst_10610 = cljs.core.next.call(null,inst_10592);
var inst_10572 = inst_10610;
var inst_10573 = null;
var inst_10574 = (0);
var inst_10575 = (0);
var state_10691__$1 = (function (){var statearr_10701 = state_10691;
(statearr_10701[(13)] = inst_10573);

(statearr_10701[(14)] = inst_10574);

(statearr_10701[(15)] = inst_10609);

(statearr_10701[(16)] = inst_10572);

(statearr_10701[(17)] = inst_10575);

return statearr_10701;
})();
var statearr_10702_10786 = state_10691__$1;
(statearr_10702_10786[(2)] = null);

(statearr_10702_10786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (39))){
var state_10691__$1 = state_10691;
var statearr_10706_10787 = state_10691__$1;
(statearr_10706_10787[(2)] = null);

(statearr_10706_10787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (4))){
var inst_10563 = (state_10691[(11)]);
var inst_10563__$1 = (state_10691[(2)]);
var inst_10564 = (inst_10563__$1 == null);
var state_10691__$1 = (function (){var statearr_10707 = state_10691;
(statearr_10707[(11)] = inst_10563__$1);

return statearr_10707;
})();
if(cljs.core.truth_(inst_10564)){
var statearr_10708_10788 = state_10691__$1;
(statearr_10708_10788[(1)] = (5));

} else {
var statearr_10709_10789 = state_10691__$1;
(statearr_10709_10789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (15))){
var inst_10573 = (state_10691[(13)]);
var inst_10574 = (state_10691[(14)]);
var inst_10572 = (state_10691[(16)]);
var inst_10575 = (state_10691[(17)]);
var inst_10588 = (state_10691[(2)]);
var inst_10589 = (inst_10575 + (1));
var tmp10703 = inst_10573;
var tmp10704 = inst_10574;
var tmp10705 = inst_10572;
var inst_10572__$1 = tmp10705;
var inst_10573__$1 = tmp10703;
var inst_10574__$1 = tmp10704;
var inst_10575__$1 = inst_10589;
var state_10691__$1 = (function (){var statearr_10710 = state_10691;
(statearr_10710[(13)] = inst_10573__$1);

(statearr_10710[(14)] = inst_10574__$1);

(statearr_10710[(16)] = inst_10572__$1);

(statearr_10710[(18)] = inst_10588);

(statearr_10710[(17)] = inst_10575__$1);

return statearr_10710;
})();
var statearr_10711_10790 = state_10691__$1;
(statearr_10711_10790[(2)] = null);

(statearr_10711_10790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (21))){
var inst_10613 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10715_10791 = state_10691__$1;
(statearr_10715_10791[(2)] = inst_10613);

(statearr_10715_10791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (31))){
var inst_10639 = (state_10691[(12)]);
var inst_10643 = done.call(null,null);
var inst_10644 = cljs.core.async.untap_STAR_.call(null,m,inst_10639);
var state_10691__$1 = (function (){var statearr_10716 = state_10691;
(statearr_10716[(19)] = inst_10643);

return statearr_10716;
})();
var statearr_10717_10792 = state_10691__$1;
(statearr_10717_10792[(2)] = inst_10644);

(statearr_10717_10792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (32))){
var inst_10632 = (state_10691[(9)]);
var inst_10634 = (state_10691[(10)]);
var inst_10631 = (state_10691[(20)]);
var inst_10633 = (state_10691[(21)]);
var inst_10646 = (state_10691[(2)]);
var inst_10647 = (inst_10634 + (1));
var tmp10712 = inst_10632;
var tmp10713 = inst_10631;
var tmp10714 = inst_10633;
var inst_10631__$1 = tmp10713;
var inst_10632__$1 = tmp10712;
var inst_10633__$1 = tmp10714;
var inst_10634__$1 = inst_10647;
var state_10691__$1 = (function (){var statearr_10718 = state_10691;
(statearr_10718[(9)] = inst_10632__$1);

(statearr_10718[(10)] = inst_10634__$1);

(statearr_10718[(22)] = inst_10646);

(statearr_10718[(20)] = inst_10631__$1);

(statearr_10718[(21)] = inst_10633__$1);

return statearr_10718;
})();
var statearr_10719_10793 = state_10691__$1;
(statearr_10719_10793[(2)] = null);

(statearr_10719_10793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (40))){
var inst_10659 = (state_10691[(23)]);
var inst_10663 = done.call(null,null);
var inst_10664 = cljs.core.async.untap_STAR_.call(null,m,inst_10659);
var state_10691__$1 = (function (){var statearr_10720 = state_10691;
(statearr_10720[(24)] = inst_10663);

return statearr_10720;
})();
var statearr_10721_10794 = state_10691__$1;
(statearr_10721_10794[(2)] = inst_10664);

(statearr_10721_10794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (33))){
var inst_10650 = (state_10691[(25)]);
var inst_10652 = cljs.core.chunked_seq_QMARK_.call(null,inst_10650);
var state_10691__$1 = state_10691;
if(inst_10652){
var statearr_10722_10795 = state_10691__$1;
(statearr_10722_10795[(1)] = (36));

} else {
var statearr_10723_10796 = state_10691__$1;
(statearr_10723_10796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (13))){
var inst_10582 = (state_10691[(26)]);
var inst_10585 = cljs.core.async.close_BANG_.call(null,inst_10582);
var state_10691__$1 = state_10691;
var statearr_10724_10797 = state_10691__$1;
(statearr_10724_10797[(2)] = inst_10585);

(statearr_10724_10797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (22))){
var inst_10603 = (state_10691[(8)]);
var inst_10606 = cljs.core.async.close_BANG_.call(null,inst_10603);
var state_10691__$1 = state_10691;
var statearr_10725_10798 = state_10691__$1;
(statearr_10725_10798[(2)] = inst_10606);

(statearr_10725_10798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (36))){
var inst_10650 = (state_10691[(25)]);
var inst_10654 = cljs.core.chunk_first.call(null,inst_10650);
var inst_10655 = cljs.core.chunk_rest.call(null,inst_10650);
var inst_10656 = cljs.core.count.call(null,inst_10654);
var inst_10631 = inst_10655;
var inst_10632 = inst_10654;
var inst_10633 = inst_10656;
var inst_10634 = (0);
var state_10691__$1 = (function (){var statearr_10726 = state_10691;
(statearr_10726[(9)] = inst_10632);

(statearr_10726[(10)] = inst_10634);

(statearr_10726[(20)] = inst_10631);

(statearr_10726[(21)] = inst_10633);

return statearr_10726;
})();
var statearr_10727_10799 = state_10691__$1;
(statearr_10727_10799[(2)] = null);

(statearr_10727_10799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (41))){
var inst_10650 = (state_10691[(25)]);
var inst_10666 = (state_10691[(2)]);
var inst_10667 = cljs.core.next.call(null,inst_10650);
var inst_10631 = inst_10667;
var inst_10632 = null;
var inst_10633 = (0);
var inst_10634 = (0);
var state_10691__$1 = (function (){var statearr_10728 = state_10691;
(statearr_10728[(9)] = inst_10632);

(statearr_10728[(10)] = inst_10634);

(statearr_10728[(20)] = inst_10631);

(statearr_10728[(27)] = inst_10666);

(statearr_10728[(21)] = inst_10633);

return statearr_10728;
})();
var statearr_10729_10800 = state_10691__$1;
(statearr_10729_10800[(2)] = null);

(statearr_10729_10800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (43))){
var state_10691__$1 = state_10691;
var statearr_10730_10801 = state_10691__$1;
(statearr_10730_10801[(2)] = null);

(statearr_10730_10801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (29))){
var inst_10675 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10731_10802 = state_10691__$1;
(statearr_10731_10802[(2)] = inst_10675);

(statearr_10731_10802[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (44))){
var inst_10684 = (state_10691[(2)]);
var state_10691__$1 = (function (){var statearr_10732 = state_10691;
(statearr_10732[(28)] = inst_10684);

return statearr_10732;
})();
var statearr_10733_10803 = state_10691__$1;
(statearr_10733_10803[(2)] = null);

(statearr_10733_10803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (6))){
var inst_10623 = (state_10691[(29)]);
var inst_10622 = cljs.core.deref.call(null,cs);
var inst_10623__$1 = cljs.core.keys.call(null,inst_10622);
var inst_10624 = cljs.core.count.call(null,inst_10623__$1);
var inst_10625 = cljs.core.reset_BANG_.call(null,dctr,inst_10624);
var inst_10630 = cljs.core.seq.call(null,inst_10623__$1);
var inst_10631 = inst_10630;
var inst_10632 = null;
var inst_10633 = (0);
var inst_10634 = (0);
var state_10691__$1 = (function (){var statearr_10734 = state_10691;
(statearr_10734[(9)] = inst_10632);

(statearr_10734[(10)] = inst_10634);

(statearr_10734[(20)] = inst_10631);

(statearr_10734[(30)] = inst_10625);

(statearr_10734[(29)] = inst_10623__$1);

(statearr_10734[(21)] = inst_10633);

return statearr_10734;
})();
var statearr_10735_10804 = state_10691__$1;
(statearr_10735_10804[(2)] = null);

(statearr_10735_10804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (28))){
var inst_10631 = (state_10691[(20)]);
var inst_10650 = (state_10691[(25)]);
var inst_10650__$1 = cljs.core.seq.call(null,inst_10631);
var state_10691__$1 = (function (){var statearr_10736 = state_10691;
(statearr_10736[(25)] = inst_10650__$1);

return statearr_10736;
})();
if(inst_10650__$1){
var statearr_10737_10805 = state_10691__$1;
(statearr_10737_10805[(1)] = (33));

} else {
var statearr_10738_10806 = state_10691__$1;
(statearr_10738_10806[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (25))){
var inst_10634 = (state_10691[(10)]);
var inst_10633 = (state_10691[(21)]);
var inst_10636 = (inst_10634 < inst_10633);
var inst_10637 = inst_10636;
var state_10691__$1 = state_10691;
if(cljs.core.truth_(inst_10637)){
var statearr_10739_10807 = state_10691__$1;
(statearr_10739_10807[(1)] = (27));

} else {
var statearr_10740_10808 = state_10691__$1;
(statearr_10740_10808[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (34))){
var state_10691__$1 = state_10691;
var statearr_10741_10809 = state_10691__$1;
(statearr_10741_10809[(2)] = null);

(statearr_10741_10809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (17))){
var state_10691__$1 = state_10691;
var statearr_10742_10810 = state_10691__$1;
(statearr_10742_10810[(2)] = null);

(statearr_10742_10810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (3))){
var inst_10689 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10691__$1,inst_10689);
} else {
if((state_val_10692 === (12))){
var inst_10618 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10743_10811 = state_10691__$1;
(statearr_10743_10811[(2)] = inst_10618);

(statearr_10743_10811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (2))){
var state_10691__$1 = state_10691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10691__$1,(4),ch);
} else {
if((state_val_10692 === (23))){
var state_10691__$1 = state_10691;
var statearr_10744_10812 = state_10691__$1;
(statearr_10744_10812[(2)] = null);

(statearr_10744_10812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (35))){
var inst_10673 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10745_10813 = state_10691__$1;
(statearr_10745_10813[(2)] = inst_10673);

(statearr_10745_10813[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (19))){
var inst_10592 = (state_10691[(7)]);
var inst_10596 = cljs.core.chunk_first.call(null,inst_10592);
var inst_10597 = cljs.core.chunk_rest.call(null,inst_10592);
var inst_10598 = cljs.core.count.call(null,inst_10596);
var inst_10572 = inst_10597;
var inst_10573 = inst_10596;
var inst_10574 = inst_10598;
var inst_10575 = (0);
var state_10691__$1 = (function (){var statearr_10746 = state_10691;
(statearr_10746[(13)] = inst_10573);

(statearr_10746[(14)] = inst_10574);

(statearr_10746[(16)] = inst_10572);

(statearr_10746[(17)] = inst_10575);

return statearr_10746;
})();
var statearr_10747_10814 = state_10691__$1;
(statearr_10747_10814[(2)] = null);

(statearr_10747_10814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (11))){
var inst_10592 = (state_10691[(7)]);
var inst_10572 = (state_10691[(16)]);
var inst_10592__$1 = cljs.core.seq.call(null,inst_10572);
var state_10691__$1 = (function (){var statearr_10748 = state_10691;
(statearr_10748[(7)] = inst_10592__$1);

return statearr_10748;
})();
if(inst_10592__$1){
var statearr_10749_10815 = state_10691__$1;
(statearr_10749_10815[(1)] = (16));

} else {
var statearr_10750_10816 = state_10691__$1;
(statearr_10750_10816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (9))){
var inst_10620 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10751_10817 = state_10691__$1;
(statearr_10751_10817[(2)] = inst_10620);

(statearr_10751_10817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (5))){
var inst_10570 = cljs.core.deref.call(null,cs);
var inst_10571 = cljs.core.seq.call(null,inst_10570);
var inst_10572 = inst_10571;
var inst_10573 = null;
var inst_10574 = (0);
var inst_10575 = (0);
var state_10691__$1 = (function (){var statearr_10752 = state_10691;
(statearr_10752[(13)] = inst_10573);

(statearr_10752[(14)] = inst_10574);

(statearr_10752[(16)] = inst_10572);

(statearr_10752[(17)] = inst_10575);

return statearr_10752;
})();
var statearr_10753_10818 = state_10691__$1;
(statearr_10753_10818[(2)] = null);

(statearr_10753_10818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (14))){
var state_10691__$1 = state_10691;
var statearr_10754_10819 = state_10691__$1;
(statearr_10754_10819[(2)] = null);

(statearr_10754_10819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (45))){
var inst_10681 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10755_10820 = state_10691__$1;
(statearr_10755_10820[(2)] = inst_10681);

(statearr_10755_10820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (26))){
var inst_10623 = (state_10691[(29)]);
var inst_10677 = (state_10691[(2)]);
var inst_10678 = cljs.core.seq.call(null,inst_10623);
var state_10691__$1 = (function (){var statearr_10756 = state_10691;
(statearr_10756[(31)] = inst_10677);

return statearr_10756;
})();
if(inst_10678){
var statearr_10757_10821 = state_10691__$1;
(statearr_10757_10821[(1)] = (42));

} else {
var statearr_10758_10822 = state_10691__$1;
(statearr_10758_10822[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (16))){
var inst_10592 = (state_10691[(7)]);
var inst_10594 = cljs.core.chunked_seq_QMARK_.call(null,inst_10592);
var state_10691__$1 = state_10691;
if(inst_10594){
var statearr_10759_10823 = state_10691__$1;
(statearr_10759_10823[(1)] = (19));

} else {
var statearr_10760_10824 = state_10691__$1;
(statearr_10760_10824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (38))){
var inst_10670 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10761_10825 = state_10691__$1;
(statearr_10761_10825[(2)] = inst_10670);

(statearr_10761_10825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (30))){
var state_10691__$1 = state_10691;
var statearr_10762_10826 = state_10691__$1;
(statearr_10762_10826[(2)] = null);

(statearr_10762_10826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (10))){
var inst_10573 = (state_10691[(13)]);
var inst_10575 = (state_10691[(17)]);
var inst_10581 = cljs.core._nth.call(null,inst_10573,inst_10575);
var inst_10582 = cljs.core.nth.call(null,inst_10581,(0),null);
var inst_10583 = cljs.core.nth.call(null,inst_10581,(1),null);
var state_10691__$1 = (function (){var statearr_10763 = state_10691;
(statearr_10763[(26)] = inst_10582);

return statearr_10763;
})();
if(cljs.core.truth_(inst_10583)){
var statearr_10764_10827 = state_10691__$1;
(statearr_10764_10827[(1)] = (13));

} else {
var statearr_10765_10828 = state_10691__$1;
(statearr_10765_10828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (18))){
var inst_10616 = (state_10691[(2)]);
var state_10691__$1 = state_10691;
var statearr_10766_10829 = state_10691__$1;
(statearr_10766_10829[(2)] = inst_10616);

(statearr_10766_10829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (42))){
var state_10691__$1 = state_10691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10691__$1,(45),dchan);
} else {
if((state_val_10692 === (37))){
var inst_10563 = (state_10691[(11)]);
var inst_10650 = (state_10691[(25)]);
var inst_10659 = (state_10691[(23)]);
var inst_10659__$1 = cljs.core.first.call(null,inst_10650);
var inst_10660 = cljs.core.async.put_BANG_.call(null,inst_10659__$1,inst_10563,done);
var state_10691__$1 = (function (){var statearr_10767 = state_10691;
(statearr_10767[(23)] = inst_10659__$1);

return statearr_10767;
})();
if(cljs.core.truth_(inst_10660)){
var statearr_10768_10830 = state_10691__$1;
(statearr_10768_10830[(1)] = (39));

} else {
var statearr_10769_10831 = state_10691__$1;
(statearr_10769_10831[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10692 === (8))){
var inst_10574 = (state_10691[(14)]);
var inst_10575 = (state_10691[(17)]);
var inst_10577 = (inst_10575 < inst_10574);
var inst_10578 = inst_10577;
var state_10691__$1 = state_10691;
if(cljs.core.truth_(inst_10578)){
var statearr_10770_10832 = state_10691__$1;
(statearr_10770_10832[(1)] = (10));

} else {
var statearr_10771_10833 = state_10691__$1;
(statearr_10771_10833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___10779,cs,m,dchan,dctr,done))
;
return ((function (switch__9360__auto__,c__9472__auto___10779,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9361__auto__ = null;
var cljs$core$async$mult_$_state_machine__9361__auto____0 = (function (){
var statearr_10775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10775[(0)] = cljs$core$async$mult_$_state_machine__9361__auto__);

(statearr_10775[(1)] = (1));

return statearr_10775;
});
var cljs$core$async$mult_$_state_machine__9361__auto____1 = (function (state_10691){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_10691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e10776){if((e10776 instanceof Object)){
var ex__9364__auto__ = e10776;
var statearr_10777_10834 = state_10691;
(statearr_10777_10834[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10835 = state_10691;
state_10691 = G__10835;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9361__auto__ = function(state_10691){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9361__auto____1.call(this,state_10691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9361__auto____0;
cljs$core$async$mult_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9361__auto____1;
return cljs$core$async$mult_$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___10779,cs,m,dchan,dctr,done))
})();
var state__9474__auto__ = (function (){var statearr_10778 = f__9473__auto__.call(null);
(statearr_10778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___10779);

return statearr_10778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___10779,cs,m,dchan,dctr,done))
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
var args10836 = [];
var len__7513__auto___10839 = arguments.length;
var i__7514__auto___10840 = (0);
while(true){
if((i__7514__auto___10840 < len__7513__auto___10839)){
args10836.push((arguments[i__7514__auto___10840]));

var G__10841 = (i__7514__auto___10840 + (1));
i__7514__auto___10840 = G__10841;
continue;
} else {
}
break;
}

var G__10838 = args10836.length;
switch (G__10838) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10836.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__7111__auto__.call(null,m);
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__7111__auto__.call(null,m,state_map);
} else {
var m__7111__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__7111__auto__.call(null,m,mode);
} else {
var m__7111__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10853 = arguments.length;
var i__7514__auto___10854 = (0);
while(true){
if((i__7514__auto___10854 < len__7513__auto___10853)){
args__7520__auto__.push((arguments[i__7514__auto___10854]));

var G__10855 = (i__7514__auto___10854 + (1));
i__7514__auto___10854 = G__10855;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10847){
var map__10848 = p__10847;
var map__10848__$1 = ((((!((map__10848 == null)))?((((map__10848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10848):map__10848);
var opts = map__10848__$1;
var statearr_10850_10856 = state;
(statearr_10850_10856[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10848,map__10848__$1,opts){
return (function (val){
var statearr_10851_10857 = state;
(statearr_10851_10857[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10848,map__10848__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10852_10858 = state;
(statearr_10852_10858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10843){
var G__10844 = cljs.core.first.call(null,seq10843);
var seq10843__$1 = cljs.core.next.call(null,seq10843);
var G__10845 = cljs.core.first.call(null,seq10843__$1);
var seq10843__$2 = cljs.core.next.call(null,seq10843__$1);
var G__10846 = cljs.core.first.call(null,seq10843__$2);
var seq10843__$3 = cljs.core.next.call(null,seq10843__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10844,G__10845,G__10846,seq10843__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11022 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11023){
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
this.meta11023 = meta11023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11024,meta11023__$1){
var self__ = this;
var _11024__$1 = this;
return (new cljs.core.async.t_cljs$core$async11022(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11023__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11024){
var self__ = this;
var _11024__$1 = this;
return self__.meta11023;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11023","meta11023",-1810346848,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11022";

cljs.core.async.t_cljs$core$async11022.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11022");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11022 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11022(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11023){
return (new cljs.core.async.t_cljs$core$async11022(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11023));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11022(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9472__auto___11185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11122){
var state_val_11123 = (state_11122[(1)]);
if((state_val_11123 === (7))){
var inst_11040 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11124_11186 = state_11122__$1;
(statearr_11124_11186[(2)] = inst_11040);

(statearr_11124_11186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (20))){
var inst_11052 = (state_11122[(7)]);
var state_11122__$1 = state_11122;
var statearr_11125_11187 = state_11122__$1;
(statearr_11125_11187[(2)] = inst_11052);

(statearr_11125_11187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (27))){
var state_11122__$1 = state_11122;
var statearr_11126_11188 = state_11122__$1;
(statearr_11126_11188[(2)] = null);

(statearr_11126_11188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (1))){
var inst_11028 = (state_11122[(8)]);
var inst_11028__$1 = calc_state.call(null);
var inst_11030 = (inst_11028__$1 == null);
var inst_11031 = cljs.core.not.call(null,inst_11030);
var state_11122__$1 = (function (){var statearr_11127 = state_11122;
(statearr_11127[(8)] = inst_11028__$1);

return statearr_11127;
})();
if(inst_11031){
var statearr_11128_11189 = state_11122__$1;
(statearr_11128_11189[(1)] = (2));

} else {
var statearr_11129_11190 = state_11122__$1;
(statearr_11129_11190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (24))){
var inst_11075 = (state_11122[(9)]);
var inst_11096 = (state_11122[(10)]);
var inst_11082 = (state_11122[(11)]);
var inst_11096__$1 = inst_11075.call(null,inst_11082);
var state_11122__$1 = (function (){var statearr_11130 = state_11122;
(statearr_11130[(10)] = inst_11096__$1);

return statearr_11130;
})();
if(cljs.core.truth_(inst_11096__$1)){
var statearr_11131_11191 = state_11122__$1;
(statearr_11131_11191[(1)] = (29));

} else {
var statearr_11132_11192 = state_11122__$1;
(statearr_11132_11192[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (4))){
var inst_11043 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11043)){
var statearr_11133_11193 = state_11122__$1;
(statearr_11133_11193[(1)] = (8));

} else {
var statearr_11134_11194 = state_11122__$1;
(statearr_11134_11194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (15))){
var inst_11069 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11069)){
var statearr_11135_11195 = state_11122__$1;
(statearr_11135_11195[(1)] = (19));

} else {
var statearr_11136_11196 = state_11122__$1;
(statearr_11136_11196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (21))){
var inst_11074 = (state_11122[(12)]);
var inst_11074__$1 = (state_11122[(2)]);
var inst_11075 = cljs.core.get.call(null,inst_11074__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11076 = cljs.core.get.call(null,inst_11074__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11077 = cljs.core.get.call(null,inst_11074__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11122__$1 = (function (){var statearr_11137 = state_11122;
(statearr_11137[(9)] = inst_11075);

(statearr_11137[(13)] = inst_11076);

(statearr_11137[(12)] = inst_11074__$1);

return statearr_11137;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11122__$1,(22),inst_11077);
} else {
if((state_val_11123 === (31))){
var inst_11104 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11104)){
var statearr_11138_11197 = state_11122__$1;
(statearr_11138_11197[(1)] = (32));

} else {
var statearr_11139_11198 = state_11122__$1;
(statearr_11139_11198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (32))){
var inst_11081 = (state_11122[(14)]);
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11122__$1,(35),out,inst_11081);
} else {
if((state_val_11123 === (33))){
var inst_11074 = (state_11122[(12)]);
var inst_11052 = inst_11074;
var state_11122__$1 = (function (){var statearr_11140 = state_11122;
(statearr_11140[(7)] = inst_11052);

return statearr_11140;
})();
var statearr_11141_11199 = state_11122__$1;
(statearr_11141_11199[(2)] = null);

(statearr_11141_11199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (13))){
var inst_11052 = (state_11122[(7)]);
var inst_11059 = inst_11052.cljs$lang$protocol_mask$partition0$;
var inst_11060 = (inst_11059 & (64));
var inst_11061 = inst_11052.cljs$core$ISeq$;
var inst_11062 = (inst_11060) || (inst_11061);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11062)){
var statearr_11142_11200 = state_11122__$1;
(statearr_11142_11200[(1)] = (16));

} else {
var statearr_11143_11201 = state_11122__$1;
(statearr_11143_11201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (22))){
var inst_11082 = (state_11122[(11)]);
var inst_11081 = (state_11122[(14)]);
var inst_11080 = (state_11122[(2)]);
var inst_11081__$1 = cljs.core.nth.call(null,inst_11080,(0),null);
var inst_11082__$1 = cljs.core.nth.call(null,inst_11080,(1),null);
var inst_11083 = (inst_11081__$1 == null);
var inst_11084 = cljs.core._EQ_.call(null,inst_11082__$1,change);
var inst_11085 = (inst_11083) || (inst_11084);
var state_11122__$1 = (function (){var statearr_11144 = state_11122;
(statearr_11144[(11)] = inst_11082__$1);

(statearr_11144[(14)] = inst_11081__$1);

return statearr_11144;
})();
if(cljs.core.truth_(inst_11085)){
var statearr_11145_11202 = state_11122__$1;
(statearr_11145_11202[(1)] = (23));

} else {
var statearr_11146_11203 = state_11122__$1;
(statearr_11146_11203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (36))){
var inst_11074 = (state_11122[(12)]);
var inst_11052 = inst_11074;
var state_11122__$1 = (function (){var statearr_11147 = state_11122;
(statearr_11147[(7)] = inst_11052);

return statearr_11147;
})();
var statearr_11148_11204 = state_11122__$1;
(statearr_11148_11204[(2)] = null);

(statearr_11148_11204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (29))){
var inst_11096 = (state_11122[(10)]);
var state_11122__$1 = state_11122;
var statearr_11149_11205 = state_11122__$1;
(statearr_11149_11205[(2)] = inst_11096);

(statearr_11149_11205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (6))){
var state_11122__$1 = state_11122;
var statearr_11150_11206 = state_11122__$1;
(statearr_11150_11206[(2)] = false);

(statearr_11150_11206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (28))){
var inst_11092 = (state_11122[(2)]);
var inst_11093 = calc_state.call(null);
var inst_11052 = inst_11093;
var state_11122__$1 = (function (){var statearr_11151 = state_11122;
(statearr_11151[(7)] = inst_11052);

(statearr_11151[(15)] = inst_11092);

return statearr_11151;
})();
var statearr_11152_11207 = state_11122__$1;
(statearr_11152_11207[(2)] = null);

(statearr_11152_11207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (25))){
var inst_11118 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11153_11208 = state_11122__$1;
(statearr_11153_11208[(2)] = inst_11118);

(statearr_11153_11208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (34))){
var inst_11116 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11154_11209 = state_11122__$1;
(statearr_11154_11209[(2)] = inst_11116);

(statearr_11154_11209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (17))){
var state_11122__$1 = state_11122;
var statearr_11155_11210 = state_11122__$1;
(statearr_11155_11210[(2)] = false);

(statearr_11155_11210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (3))){
var state_11122__$1 = state_11122;
var statearr_11156_11211 = state_11122__$1;
(statearr_11156_11211[(2)] = false);

(statearr_11156_11211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (12))){
var inst_11120 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11122__$1,inst_11120);
} else {
if((state_val_11123 === (2))){
var inst_11028 = (state_11122[(8)]);
var inst_11033 = inst_11028.cljs$lang$protocol_mask$partition0$;
var inst_11034 = (inst_11033 & (64));
var inst_11035 = inst_11028.cljs$core$ISeq$;
var inst_11036 = (inst_11034) || (inst_11035);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11036)){
var statearr_11157_11212 = state_11122__$1;
(statearr_11157_11212[(1)] = (5));

} else {
var statearr_11158_11213 = state_11122__$1;
(statearr_11158_11213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (23))){
var inst_11081 = (state_11122[(14)]);
var inst_11087 = (inst_11081 == null);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11087)){
var statearr_11159_11214 = state_11122__$1;
(statearr_11159_11214[(1)] = (26));

} else {
var statearr_11160_11215 = state_11122__$1;
(statearr_11160_11215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (35))){
var inst_11107 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
if(cljs.core.truth_(inst_11107)){
var statearr_11161_11216 = state_11122__$1;
(statearr_11161_11216[(1)] = (36));

} else {
var statearr_11162_11217 = state_11122__$1;
(statearr_11162_11217[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (19))){
var inst_11052 = (state_11122[(7)]);
var inst_11071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11052);
var state_11122__$1 = state_11122;
var statearr_11163_11218 = state_11122__$1;
(statearr_11163_11218[(2)] = inst_11071);

(statearr_11163_11218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (11))){
var inst_11052 = (state_11122[(7)]);
var inst_11056 = (inst_11052 == null);
var inst_11057 = cljs.core.not.call(null,inst_11056);
var state_11122__$1 = state_11122;
if(inst_11057){
var statearr_11164_11219 = state_11122__$1;
(statearr_11164_11219[(1)] = (13));

} else {
var statearr_11165_11220 = state_11122__$1;
(statearr_11165_11220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (9))){
var inst_11028 = (state_11122[(8)]);
var state_11122__$1 = state_11122;
var statearr_11166_11221 = state_11122__$1;
(statearr_11166_11221[(2)] = inst_11028);

(statearr_11166_11221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (5))){
var state_11122__$1 = state_11122;
var statearr_11167_11222 = state_11122__$1;
(statearr_11167_11222[(2)] = true);

(statearr_11167_11222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (14))){
var state_11122__$1 = state_11122;
var statearr_11168_11223 = state_11122__$1;
(statearr_11168_11223[(2)] = false);

(statearr_11168_11223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (26))){
var inst_11082 = (state_11122[(11)]);
var inst_11089 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11082);
var state_11122__$1 = state_11122;
var statearr_11169_11224 = state_11122__$1;
(statearr_11169_11224[(2)] = inst_11089);

(statearr_11169_11224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (16))){
var state_11122__$1 = state_11122;
var statearr_11170_11225 = state_11122__$1;
(statearr_11170_11225[(2)] = true);

(statearr_11170_11225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (38))){
var inst_11112 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11171_11226 = state_11122__$1;
(statearr_11171_11226[(2)] = inst_11112);

(statearr_11171_11226[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (30))){
var inst_11075 = (state_11122[(9)]);
var inst_11076 = (state_11122[(13)]);
var inst_11082 = (state_11122[(11)]);
var inst_11099 = cljs.core.empty_QMARK_.call(null,inst_11075);
var inst_11100 = inst_11076.call(null,inst_11082);
var inst_11101 = cljs.core.not.call(null,inst_11100);
var inst_11102 = (inst_11099) && (inst_11101);
var state_11122__$1 = state_11122;
var statearr_11172_11227 = state_11122__$1;
(statearr_11172_11227[(2)] = inst_11102);

(statearr_11172_11227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (10))){
var inst_11028 = (state_11122[(8)]);
var inst_11048 = (state_11122[(2)]);
var inst_11049 = cljs.core.get.call(null,inst_11048,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11050 = cljs.core.get.call(null,inst_11048,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11051 = cljs.core.get.call(null,inst_11048,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11052 = inst_11028;
var state_11122__$1 = (function (){var statearr_11173 = state_11122;
(statearr_11173[(7)] = inst_11052);

(statearr_11173[(16)] = inst_11049);

(statearr_11173[(17)] = inst_11051);

(statearr_11173[(18)] = inst_11050);

return statearr_11173;
})();
var statearr_11174_11228 = state_11122__$1;
(statearr_11174_11228[(2)] = null);

(statearr_11174_11228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (18))){
var inst_11066 = (state_11122[(2)]);
var state_11122__$1 = state_11122;
var statearr_11175_11229 = state_11122__$1;
(statearr_11175_11229[(2)] = inst_11066);

(statearr_11175_11229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (37))){
var state_11122__$1 = state_11122;
var statearr_11176_11230 = state_11122__$1;
(statearr_11176_11230[(2)] = null);

(statearr_11176_11230[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11123 === (8))){
var inst_11028 = (state_11122[(8)]);
var inst_11045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11028);
var state_11122__$1 = state_11122;
var statearr_11177_11231 = state_11122__$1;
(statearr_11177_11231[(2)] = inst_11045);

(statearr_11177_11231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9360__auto__,c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9361__auto__ = null;
var cljs$core$async$mix_$_state_machine__9361__auto____0 = (function (){
var statearr_11181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11181[(0)] = cljs$core$async$mix_$_state_machine__9361__auto__);

(statearr_11181[(1)] = (1));

return statearr_11181;
});
var cljs$core$async$mix_$_state_machine__9361__auto____1 = (function (state_11122){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11182){if((e11182 instanceof Object)){
var ex__9364__auto__ = e11182;
var statearr_11183_11232 = state_11122;
(statearr_11183_11232[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11233 = state_11122;
state_11122 = G__11233;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9361__auto__ = function(state_11122){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9361__auto____1.call(this,state_11122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9361__auto____0;
cljs$core$async$mix_$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9361__auto____1;
return cljs$core$async$mix_$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9474__auto__ = (function (){var statearr_11184 = f__9473__auto__.call(null);
(statearr_11184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11185);

return statearr_11184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__7111__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7111__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__7111__auto__.call(null,p,v,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11234 = [];
var len__7513__auto___11237 = arguments.length;
var i__7514__auto___11238 = (0);
while(true){
if((i__7514__auto___11238 < len__7513__auto___11237)){
args11234.push((arguments[i__7514__auto___11238]));

var G__11239 = (i__7514__auto___11238 + (1));
i__7514__auto___11238 = G__11239;
continue;
} else {
}
break;
}

var G__11236 = args11234.length;
switch (G__11236) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11234.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,p);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__7111__auto__.call(null,p,v);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args11242 = [];
var len__7513__auto___11367 = arguments.length;
var i__7514__auto___11368 = (0);
while(true){
if((i__7514__auto___11368 < len__7513__auto___11367)){
args11242.push((arguments[i__7514__auto___11368]));

var G__11369 = (i__7514__auto___11368 + (1));
i__7514__auto___11368 = G__11369;
continue;
} else {
}
break;
}

var G__11244 = args11242.length;
switch (G__11244) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11242.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6455__auto__,mults){
return (function (p1__11241_SHARP_){
if(cljs.core.truth_(p1__11241_SHARP_.call(null,topic))){
return p1__11241_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11246 = meta11246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11247,meta11246__$1){
var self__ = this;
var _11247__$1 = this;
return (new cljs.core.async.t_cljs$core$async11245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11246__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11247){
var self__ = this;
var _11247__$1 = this;
return self__.meta11246;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11246","meta11246",384176761,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11245";

cljs.core.async.t_cljs$core$async11245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11245");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11245 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11246){
return (new cljs.core.async.t_cljs$core$async11245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11246));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9472__auto___11371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11371,mults,ensure_mult,p){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11371,mults,ensure_mult,p){
return (function (state_11319){
var state_val_11320 = (state_11319[(1)]);
if((state_val_11320 === (7))){
var inst_11315 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11321_11372 = state_11319__$1;
(statearr_11321_11372[(2)] = inst_11315);

(statearr_11321_11372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (20))){
var state_11319__$1 = state_11319;
var statearr_11322_11373 = state_11319__$1;
(statearr_11322_11373[(2)] = null);

(statearr_11322_11373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (1))){
var state_11319__$1 = state_11319;
var statearr_11323_11374 = state_11319__$1;
(statearr_11323_11374[(2)] = null);

(statearr_11323_11374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (24))){
var inst_11298 = (state_11319[(7)]);
var inst_11307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11298);
var state_11319__$1 = state_11319;
var statearr_11324_11375 = state_11319__$1;
(statearr_11324_11375[(2)] = inst_11307);

(statearr_11324_11375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (4))){
var inst_11250 = (state_11319[(8)]);
var inst_11250__$1 = (state_11319[(2)]);
var inst_11251 = (inst_11250__$1 == null);
var state_11319__$1 = (function (){var statearr_11325 = state_11319;
(statearr_11325[(8)] = inst_11250__$1);

return statearr_11325;
})();
if(cljs.core.truth_(inst_11251)){
var statearr_11326_11376 = state_11319__$1;
(statearr_11326_11376[(1)] = (5));

} else {
var statearr_11327_11377 = state_11319__$1;
(statearr_11327_11377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (15))){
var inst_11292 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11328_11378 = state_11319__$1;
(statearr_11328_11378[(2)] = inst_11292);

(statearr_11328_11378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (21))){
var inst_11312 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11329 = state_11319;
(statearr_11329[(9)] = inst_11312);

return statearr_11329;
})();
var statearr_11330_11379 = state_11319__$1;
(statearr_11330_11379[(2)] = null);

(statearr_11330_11379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (13))){
var inst_11274 = (state_11319[(10)]);
var inst_11276 = cljs.core.chunked_seq_QMARK_.call(null,inst_11274);
var state_11319__$1 = state_11319;
if(inst_11276){
var statearr_11331_11380 = state_11319__$1;
(statearr_11331_11380[(1)] = (16));

} else {
var statearr_11332_11381 = state_11319__$1;
(statearr_11332_11381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (22))){
var inst_11304 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
if(cljs.core.truth_(inst_11304)){
var statearr_11333_11382 = state_11319__$1;
(statearr_11333_11382[(1)] = (23));

} else {
var statearr_11334_11383 = state_11319__$1;
(statearr_11334_11383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (6))){
var inst_11298 = (state_11319[(7)]);
var inst_11300 = (state_11319[(11)]);
var inst_11250 = (state_11319[(8)]);
var inst_11298__$1 = topic_fn.call(null,inst_11250);
var inst_11299 = cljs.core.deref.call(null,mults);
var inst_11300__$1 = cljs.core.get.call(null,inst_11299,inst_11298__$1);
var state_11319__$1 = (function (){var statearr_11335 = state_11319;
(statearr_11335[(7)] = inst_11298__$1);

(statearr_11335[(11)] = inst_11300__$1);

return statearr_11335;
})();
if(cljs.core.truth_(inst_11300__$1)){
var statearr_11336_11384 = state_11319__$1;
(statearr_11336_11384[(1)] = (19));

} else {
var statearr_11337_11385 = state_11319__$1;
(statearr_11337_11385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (25))){
var inst_11309 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11338_11386 = state_11319__$1;
(statearr_11338_11386[(2)] = inst_11309);

(statearr_11338_11386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (17))){
var inst_11274 = (state_11319[(10)]);
var inst_11283 = cljs.core.first.call(null,inst_11274);
var inst_11284 = cljs.core.async.muxch_STAR_.call(null,inst_11283);
var inst_11285 = cljs.core.async.close_BANG_.call(null,inst_11284);
var inst_11286 = cljs.core.next.call(null,inst_11274);
var inst_11260 = inst_11286;
var inst_11261 = null;
var inst_11262 = (0);
var inst_11263 = (0);
var state_11319__$1 = (function (){var statearr_11339 = state_11319;
(statearr_11339[(12)] = inst_11263);

(statearr_11339[(13)] = inst_11262);

(statearr_11339[(14)] = inst_11261);

(statearr_11339[(15)] = inst_11285);

(statearr_11339[(16)] = inst_11260);

return statearr_11339;
})();
var statearr_11340_11387 = state_11319__$1;
(statearr_11340_11387[(2)] = null);

(statearr_11340_11387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (3))){
var inst_11317 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11319__$1,inst_11317);
} else {
if((state_val_11320 === (12))){
var inst_11294 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11341_11388 = state_11319__$1;
(statearr_11341_11388[(2)] = inst_11294);

(statearr_11341_11388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (2))){
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(4),ch);
} else {
if((state_val_11320 === (23))){
var state_11319__$1 = state_11319;
var statearr_11342_11389 = state_11319__$1;
(statearr_11342_11389[(2)] = null);

(statearr_11342_11389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (19))){
var inst_11300 = (state_11319[(11)]);
var inst_11250 = (state_11319[(8)]);
var inst_11302 = cljs.core.async.muxch_STAR_.call(null,inst_11300);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11319__$1,(22),inst_11302,inst_11250);
} else {
if((state_val_11320 === (11))){
var inst_11274 = (state_11319[(10)]);
var inst_11260 = (state_11319[(16)]);
var inst_11274__$1 = cljs.core.seq.call(null,inst_11260);
var state_11319__$1 = (function (){var statearr_11343 = state_11319;
(statearr_11343[(10)] = inst_11274__$1);

return statearr_11343;
})();
if(inst_11274__$1){
var statearr_11344_11390 = state_11319__$1;
(statearr_11344_11390[(1)] = (13));

} else {
var statearr_11345_11391 = state_11319__$1;
(statearr_11345_11391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (9))){
var inst_11296 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11346_11392 = state_11319__$1;
(statearr_11346_11392[(2)] = inst_11296);

(statearr_11346_11392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (5))){
var inst_11257 = cljs.core.deref.call(null,mults);
var inst_11258 = cljs.core.vals.call(null,inst_11257);
var inst_11259 = cljs.core.seq.call(null,inst_11258);
var inst_11260 = inst_11259;
var inst_11261 = null;
var inst_11262 = (0);
var inst_11263 = (0);
var state_11319__$1 = (function (){var statearr_11347 = state_11319;
(statearr_11347[(12)] = inst_11263);

(statearr_11347[(13)] = inst_11262);

(statearr_11347[(14)] = inst_11261);

(statearr_11347[(16)] = inst_11260);

return statearr_11347;
})();
var statearr_11348_11393 = state_11319__$1;
(statearr_11348_11393[(2)] = null);

(statearr_11348_11393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (14))){
var state_11319__$1 = state_11319;
var statearr_11352_11394 = state_11319__$1;
(statearr_11352_11394[(2)] = null);

(statearr_11352_11394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (16))){
var inst_11274 = (state_11319[(10)]);
var inst_11278 = cljs.core.chunk_first.call(null,inst_11274);
var inst_11279 = cljs.core.chunk_rest.call(null,inst_11274);
var inst_11280 = cljs.core.count.call(null,inst_11278);
var inst_11260 = inst_11279;
var inst_11261 = inst_11278;
var inst_11262 = inst_11280;
var inst_11263 = (0);
var state_11319__$1 = (function (){var statearr_11353 = state_11319;
(statearr_11353[(12)] = inst_11263);

(statearr_11353[(13)] = inst_11262);

(statearr_11353[(14)] = inst_11261);

(statearr_11353[(16)] = inst_11260);

return statearr_11353;
})();
var statearr_11354_11395 = state_11319__$1;
(statearr_11354_11395[(2)] = null);

(statearr_11354_11395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (10))){
var inst_11263 = (state_11319[(12)]);
var inst_11262 = (state_11319[(13)]);
var inst_11261 = (state_11319[(14)]);
var inst_11260 = (state_11319[(16)]);
var inst_11268 = cljs.core._nth.call(null,inst_11261,inst_11263);
var inst_11269 = cljs.core.async.muxch_STAR_.call(null,inst_11268);
var inst_11270 = cljs.core.async.close_BANG_.call(null,inst_11269);
var inst_11271 = (inst_11263 + (1));
var tmp11349 = inst_11262;
var tmp11350 = inst_11261;
var tmp11351 = inst_11260;
var inst_11260__$1 = tmp11351;
var inst_11261__$1 = tmp11350;
var inst_11262__$1 = tmp11349;
var inst_11263__$1 = inst_11271;
var state_11319__$1 = (function (){var statearr_11355 = state_11319;
(statearr_11355[(12)] = inst_11263__$1);

(statearr_11355[(13)] = inst_11262__$1);

(statearr_11355[(14)] = inst_11261__$1);

(statearr_11355[(17)] = inst_11270);

(statearr_11355[(16)] = inst_11260__$1);

return statearr_11355;
})();
var statearr_11356_11396 = state_11319__$1;
(statearr_11356_11396[(2)] = null);

(statearr_11356_11396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (18))){
var inst_11289 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11357_11397 = state_11319__$1;
(statearr_11357_11397[(2)] = inst_11289);

(statearr_11357_11397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (8))){
var inst_11263 = (state_11319[(12)]);
var inst_11262 = (state_11319[(13)]);
var inst_11265 = (inst_11263 < inst_11262);
var inst_11266 = inst_11265;
var state_11319__$1 = state_11319;
if(cljs.core.truth_(inst_11266)){
var statearr_11358_11398 = state_11319__$1;
(statearr_11358_11398[(1)] = (10));

} else {
var statearr_11359_11399 = state_11319__$1;
(statearr_11359_11399[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___11371,mults,ensure_mult,p))
;
return ((function (switch__9360__auto__,c__9472__auto___11371,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_11363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11363[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_11363[(1)] = (1));

return statearr_11363;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_11319){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11364){if((e11364 instanceof Object)){
var ex__9364__auto__ = e11364;
var statearr_11365_11400 = state_11319;
(statearr_11365_11400[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11401 = state_11319;
state_11319 = G__11401;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_11319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_11319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11371,mults,ensure_mult,p))
})();
var state__9474__auto__ = (function (){var statearr_11366 = f__9473__auto__.call(null);
(statearr_11366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11371);

return statearr_11366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11371,mults,ensure_mult,p))
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
var args11402 = [];
var len__7513__auto___11405 = arguments.length;
var i__7514__auto___11406 = (0);
while(true){
if((i__7514__auto___11406 < len__7513__auto___11405)){
args11402.push((arguments[i__7514__auto___11406]));

var G__11407 = (i__7514__auto___11406 + (1));
i__7514__auto___11406 = G__11407;
continue;
} else {
}
break;
}

var G__11404 = args11402.length;
switch (G__11404) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11402.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11409 = [];
var len__7513__auto___11412 = arguments.length;
var i__7514__auto___11413 = (0);
while(true){
if((i__7514__auto___11413 < len__7513__auto___11412)){
args11409.push((arguments[i__7514__auto___11413]));

var G__11414 = (i__7514__auto___11413 + (1));
i__7514__auto___11413 = G__11414;
continue;
} else {
}
break;
}

var G__11411 = args11409.length;
switch (G__11411) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11409.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args11416 = [];
var len__7513__auto___11487 = arguments.length;
var i__7514__auto___11488 = (0);
while(true){
if((i__7514__auto___11488 < len__7513__auto___11487)){
args11416.push((arguments[i__7514__auto___11488]));

var G__11489 = (i__7514__auto___11488 + (1));
i__7514__auto___11488 = G__11489;
continue;
} else {
}
break;
}

var G__11418 = args11416.length;
switch (G__11418) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11416.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9472__auto___11491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11457){
var state_val_11458 = (state_11457[(1)]);
if((state_val_11458 === (7))){
var state_11457__$1 = state_11457;
var statearr_11459_11492 = state_11457__$1;
(statearr_11459_11492[(2)] = null);

(statearr_11459_11492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (1))){
var state_11457__$1 = state_11457;
var statearr_11460_11493 = state_11457__$1;
(statearr_11460_11493[(2)] = null);

(statearr_11460_11493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (4))){
var inst_11421 = (state_11457[(7)]);
var inst_11423 = (inst_11421 < cnt);
var state_11457__$1 = state_11457;
if(cljs.core.truth_(inst_11423)){
var statearr_11461_11494 = state_11457__$1;
(statearr_11461_11494[(1)] = (6));

} else {
var statearr_11462_11495 = state_11457__$1;
(statearr_11462_11495[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (15))){
var inst_11453 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11463_11496 = state_11457__$1;
(statearr_11463_11496[(2)] = inst_11453);

(statearr_11463_11496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (13))){
var inst_11446 = cljs.core.async.close_BANG_.call(null,out);
var state_11457__$1 = state_11457;
var statearr_11464_11497 = state_11457__$1;
(statearr_11464_11497[(2)] = inst_11446);

(statearr_11464_11497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (6))){
var state_11457__$1 = state_11457;
var statearr_11465_11498 = state_11457__$1;
(statearr_11465_11498[(2)] = null);

(statearr_11465_11498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (3))){
var inst_11455 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11457__$1,inst_11455);
} else {
if((state_val_11458 === (12))){
var inst_11443 = (state_11457[(8)]);
var inst_11443__$1 = (state_11457[(2)]);
var inst_11444 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11443__$1);
var state_11457__$1 = (function (){var statearr_11466 = state_11457;
(statearr_11466[(8)] = inst_11443__$1);

return statearr_11466;
})();
if(cljs.core.truth_(inst_11444)){
var statearr_11467_11499 = state_11457__$1;
(statearr_11467_11499[(1)] = (13));

} else {
var statearr_11468_11500 = state_11457__$1;
(statearr_11468_11500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (2))){
var inst_11420 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11421 = (0);
var state_11457__$1 = (function (){var statearr_11469 = state_11457;
(statearr_11469[(9)] = inst_11420);

(statearr_11469[(7)] = inst_11421);

return statearr_11469;
})();
var statearr_11470_11501 = state_11457__$1;
(statearr_11470_11501[(2)] = null);

(statearr_11470_11501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (11))){
var inst_11421 = (state_11457[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11457,(10),Object,null,(9));
var inst_11430 = chs__$1.call(null,inst_11421);
var inst_11431 = done.call(null,inst_11421);
var inst_11432 = cljs.core.async.take_BANG_.call(null,inst_11430,inst_11431);
var state_11457__$1 = state_11457;
var statearr_11471_11502 = state_11457__$1;
(statearr_11471_11502[(2)] = inst_11432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (9))){
var inst_11421 = (state_11457[(7)]);
var inst_11434 = (state_11457[(2)]);
var inst_11435 = (inst_11421 + (1));
var inst_11421__$1 = inst_11435;
var state_11457__$1 = (function (){var statearr_11472 = state_11457;
(statearr_11472[(10)] = inst_11434);

(statearr_11472[(7)] = inst_11421__$1);

return statearr_11472;
})();
var statearr_11473_11503 = state_11457__$1;
(statearr_11473_11503[(2)] = null);

(statearr_11473_11503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (5))){
var inst_11441 = (state_11457[(2)]);
var state_11457__$1 = (function (){var statearr_11474 = state_11457;
(statearr_11474[(11)] = inst_11441);

return statearr_11474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11457__$1,(12),dchan);
} else {
if((state_val_11458 === (14))){
var inst_11443 = (state_11457[(8)]);
var inst_11448 = cljs.core.apply.call(null,f,inst_11443);
var state_11457__$1 = state_11457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11457__$1,(16),out,inst_11448);
} else {
if((state_val_11458 === (16))){
var inst_11450 = (state_11457[(2)]);
var state_11457__$1 = (function (){var statearr_11475 = state_11457;
(statearr_11475[(12)] = inst_11450);

return statearr_11475;
})();
var statearr_11476_11504 = state_11457__$1;
(statearr_11476_11504[(2)] = null);

(statearr_11476_11504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (10))){
var inst_11425 = (state_11457[(2)]);
var inst_11426 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11457__$1 = (function (){var statearr_11477 = state_11457;
(statearr_11477[(13)] = inst_11425);

return statearr_11477;
})();
var statearr_11478_11505 = state_11457__$1;
(statearr_11478_11505[(2)] = inst_11426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11458 === (8))){
var inst_11439 = (state_11457[(2)]);
var state_11457__$1 = state_11457;
var statearr_11479_11506 = state_11457__$1;
(statearr_11479_11506[(2)] = inst_11439);

(statearr_11479_11506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9360__auto__,c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_11483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11483[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_11483[(1)] = (1));

return statearr_11483;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_11457){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11484){if((e11484 instanceof Object)){
var ex__9364__auto__ = e11484;
var statearr_11485_11507 = state_11457;
(statearr_11485_11507[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11508 = state_11457;
state_11457 = G__11508;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_11457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_11457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9474__auto__ = (function (){var statearr_11486 = f__9473__auto__.call(null);
(statearr_11486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11491);

return statearr_11486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11491,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11510 = [];
var len__7513__auto___11566 = arguments.length;
var i__7514__auto___11567 = (0);
while(true){
if((i__7514__auto___11567 < len__7513__auto___11566)){
args11510.push((arguments[i__7514__auto___11567]));

var G__11568 = (i__7514__auto___11567 + (1));
i__7514__auto___11567 = G__11568;
continue;
} else {
}
break;
}

var G__11512 = args11510.length;
switch (G__11512) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11510.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___11570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11570,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11570,out){
return (function (state_11542){
var state_val_11543 = (state_11542[(1)]);
if((state_val_11543 === (7))){
var inst_11521 = (state_11542[(7)]);
var inst_11522 = (state_11542[(8)]);
var inst_11521__$1 = (state_11542[(2)]);
var inst_11522__$1 = cljs.core.nth.call(null,inst_11521__$1,(0),null);
var inst_11523 = cljs.core.nth.call(null,inst_11521__$1,(1),null);
var inst_11524 = (inst_11522__$1 == null);
var state_11542__$1 = (function (){var statearr_11544 = state_11542;
(statearr_11544[(7)] = inst_11521__$1);

(statearr_11544[(9)] = inst_11523);

(statearr_11544[(8)] = inst_11522__$1);

return statearr_11544;
})();
if(cljs.core.truth_(inst_11524)){
var statearr_11545_11571 = state_11542__$1;
(statearr_11545_11571[(1)] = (8));

} else {
var statearr_11546_11572 = state_11542__$1;
(statearr_11546_11572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (1))){
var inst_11513 = cljs.core.vec.call(null,chs);
var inst_11514 = inst_11513;
var state_11542__$1 = (function (){var statearr_11547 = state_11542;
(statearr_11547[(10)] = inst_11514);

return statearr_11547;
})();
var statearr_11548_11573 = state_11542__$1;
(statearr_11548_11573[(2)] = null);

(statearr_11548_11573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (4))){
var inst_11514 = (state_11542[(10)]);
var state_11542__$1 = state_11542;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11542__$1,(7),inst_11514);
} else {
if((state_val_11543 === (6))){
var inst_11538 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
var statearr_11549_11574 = state_11542__$1;
(statearr_11549_11574[(2)] = inst_11538);

(statearr_11549_11574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (3))){
var inst_11540 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11542__$1,inst_11540);
} else {
if((state_val_11543 === (2))){
var inst_11514 = (state_11542[(10)]);
var inst_11516 = cljs.core.count.call(null,inst_11514);
var inst_11517 = (inst_11516 > (0));
var state_11542__$1 = state_11542;
if(cljs.core.truth_(inst_11517)){
var statearr_11551_11575 = state_11542__$1;
(statearr_11551_11575[(1)] = (4));

} else {
var statearr_11552_11576 = state_11542__$1;
(statearr_11552_11576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (11))){
var inst_11514 = (state_11542[(10)]);
var inst_11531 = (state_11542[(2)]);
var tmp11550 = inst_11514;
var inst_11514__$1 = tmp11550;
var state_11542__$1 = (function (){var statearr_11553 = state_11542;
(statearr_11553[(11)] = inst_11531);

(statearr_11553[(10)] = inst_11514__$1);

return statearr_11553;
})();
var statearr_11554_11577 = state_11542__$1;
(statearr_11554_11577[(2)] = null);

(statearr_11554_11577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (9))){
var inst_11522 = (state_11542[(8)]);
var state_11542__$1 = state_11542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11542__$1,(11),out,inst_11522);
} else {
if((state_val_11543 === (5))){
var inst_11536 = cljs.core.async.close_BANG_.call(null,out);
var state_11542__$1 = state_11542;
var statearr_11555_11578 = state_11542__$1;
(statearr_11555_11578[(2)] = inst_11536);

(statearr_11555_11578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (10))){
var inst_11534 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
var statearr_11556_11579 = state_11542__$1;
(statearr_11556_11579[(2)] = inst_11534);

(statearr_11556_11579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (8))){
var inst_11521 = (state_11542[(7)]);
var inst_11523 = (state_11542[(9)]);
var inst_11514 = (state_11542[(10)]);
var inst_11522 = (state_11542[(8)]);
var inst_11526 = (function (){var cs = inst_11514;
var vec__11519 = inst_11521;
var v = inst_11522;
var c = inst_11523;
return ((function (cs,vec__11519,v,c,inst_11521,inst_11523,inst_11514,inst_11522,state_val_11543,c__9472__auto___11570,out){
return (function (p1__11509_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11509_SHARP_);
});
;})(cs,vec__11519,v,c,inst_11521,inst_11523,inst_11514,inst_11522,state_val_11543,c__9472__auto___11570,out))
})();
var inst_11527 = cljs.core.filterv.call(null,inst_11526,inst_11514);
var inst_11514__$1 = inst_11527;
var state_11542__$1 = (function (){var statearr_11557 = state_11542;
(statearr_11557[(10)] = inst_11514__$1);

return statearr_11557;
})();
var statearr_11558_11580 = state_11542__$1;
(statearr_11558_11580[(2)] = null);

(statearr_11558_11580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___11570,out))
;
return ((function (switch__9360__auto__,c__9472__auto___11570,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_11562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11562[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_11562[(1)] = (1));

return statearr_11562;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_11542){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11563){if((e11563 instanceof Object)){
var ex__9364__auto__ = e11563;
var statearr_11564_11581 = state_11542;
(statearr_11564_11581[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11582 = state_11542;
state_11542 = G__11582;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_11542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_11542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11570,out))
})();
var state__9474__auto__ = (function (){var statearr_11565 = f__9473__auto__.call(null);
(statearr_11565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11570);

return statearr_11565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11570,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11583 = [];
var len__7513__auto___11632 = arguments.length;
var i__7514__auto___11633 = (0);
while(true){
if((i__7514__auto___11633 < len__7513__auto___11632)){
args11583.push((arguments[i__7514__auto___11633]));

var G__11634 = (i__7514__auto___11633 + (1));
i__7514__auto___11633 = G__11634;
continue;
} else {
}
break;
}

var G__11585 = args11583.length;
switch (G__11585) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11583.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___11636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11636,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11636,out){
return (function (state_11609){
var state_val_11610 = (state_11609[(1)]);
if((state_val_11610 === (7))){
var inst_11591 = (state_11609[(7)]);
var inst_11591__$1 = (state_11609[(2)]);
var inst_11592 = (inst_11591__$1 == null);
var inst_11593 = cljs.core.not.call(null,inst_11592);
var state_11609__$1 = (function (){var statearr_11611 = state_11609;
(statearr_11611[(7)] = inst_11591__$1);

return statearr_11611;
})();
if(inst_11593){
var statearr_11612_11637 = state_11609__$1;
(statearr_11612_11637[(1)] = (8));

} else {
var statearr_11613_11638 = state_11609__$1;
(statearr_11613_11638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (1))){
var inst_11586 = (0);
var state_11609__$1 = (function (){var statearr_11614 = state_11609;
(statearr_11614[(8)] = inst_11586);

return statearr_11614;
})();
var statearr_11615_11639 = state_11609__$1;
(statearr_11615_11639[(2)] = null);

(statearr_11615_11639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (4))){
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11609__$1,(7),ch);
} else {
if((state_val_11610 === (6))){
var inst_11604 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11616_11640 = state_11609__$1;
(statearr_11616_11640[(2)] = inst_11604);

(statearr_11616_11640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (3))){
var inst_11606 = (state_11609[(2)]);
var inst_11607 = cljs.core.async.close_BANG_.call(null,out);
var state_11609__$1 = (function (){var statearr_11617 = state_11609;
(statearr_11617[(9)] = inst_11606);

return statearr_11617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11609__$1,inst_11607);
} else {
if((state_val_11610 === (2))){
var inst_11586 = (state_11609[(8)]);
var inst_11588 = (inst_11586 < n);
var state_11609__$1 = state_11609;
if(cljs.core.truth_(inst_11588)){
var statearr_11618_11641 = state_11609__$1;
(statearr_11618_11641[(1)] = (4));

} else {
var statearr_11619_11642 = state_11609__$1;
(statearr_11619_11642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (11))){
var inst_11586 = (state_11609[(8)]);
var inst_11596 = (state_11609[(2)]);
var inst_11597 = (inst_11586 + (1));
var inst_11586__$1 = inst_11597;
var state_11609__$1 = (function (){var statearr_11620 = state_11609;
(statearr_11620[(8)] = inst_11586__$1);

(statearr_11620[(10)] = inst_11596);

return statearr_11620;
})();
var statearr_11621_11643 = state_11609__$1;
(statearr_11621_11643[(2)] = null);

(statearr_11621_11643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (9))){
var state_11609__$1 = state_11609;
var statearr_11622_11644 = state_11609__$1;
(statearr_11622_11644[(2)] = null);

(statearr_11622_11644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (5))){
var state_11609__$1 = state_11609;
var statearr_11623_11645 = state_11609__$1;
(statearr_11623_11645[(2)] = null);

(statearr_11623_11645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (10))){
var inst_11601 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11624_11646 = state_11609__$1;
(statearr_11624_11646[(2)] = inst_11601);

(statearr_11624_11646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (8))){
var inst_11591 = (state_11609[(7)]);
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11609__$1,(11),out,inst_11591);
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
});})(c__9472__auto___11636,out))
;
return ((function (switch__9360__auto__,c__9472__auto___11636,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_11628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11628[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_11628[(1)] = (1));

return statearr_11628;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_11609){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11629){if((e11629 instanceof Object)){
var ex__9364__auto__ = e11629;
var statearr_11630_11647 = state_11609;
(statearr_11630_11647[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11648 = state_11609;
state_11609 = G__11648;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_11609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_11609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11636,out))
})();
var state__9474__auto__ = (function (){var statearr_11631 = f__9473__auto__.call(null);
(statearr_11631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11636);

return statearr_11631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11636,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11656 = (function (map_LT_,f,ch,meta11657){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11657 = meta11657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11658,meta11657__$1){
var self__ = this;
var _11658__$1 = this;
return (new cljs.core.async.t_cljs$core$async11656(self__.map_LT_,self__.f,self__.ch,meta11657__$1));
});

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11658){
var self__ = this;
var _11658__$1 = this;
return self__.meta11657;
});

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11659 = (function (map_LT_,f,ch,meta11657,_,fn1,meta11660){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11657 = meta11657;
this._ = _;
this.fn1 = fn1;
this.meta11660 = meta11660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11661,meta11660__$1){
var self__ = this;
var _11661__$1 = this;
return (new cljs.core.async.t_cljs$core$async11659(self__.map_LT_,self__.f,self__.ch,self__.meta11657,self__._,self__.fn1,meta11660__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11661){
var self__ = this;
var _11661__$1 = this;
return self__.meta11660;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11649_SHARP_){
return f1.call(null,(((p1__11649_SHARP_ == null))?null:self__.f.call(null,p1__11649_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11657","meta11657",-1155984830,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11656","cljs.core.async/t_cljs$core$async11656",1679894620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11660","meta11660",58974908,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11659";

cljs.core.async.t_cljs$core$async11659.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11659");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11659 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11659(map_LT___$1,f__$1,ch__$1,meta11657__$1,___$2,fn1__$1,meta11660){
return (new cljs.core.async.t_cljs$core$async11659(map_LT___$1,f__$1,ch__$1,meta11657__$1,___$2,fn1__$1,meta11660));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11659(self__.map_LT_,self__.f,self__.ch,self__.meta11657,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6443__auto__ = ret;
if(cljs.core.truth_(and__6443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11657","meta11657",-1155984830,null)], null);
});

cljs.core.async.t_cljs$core$async11656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11656";

cljs.core.async.t_cljs$core$async11656.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11656");
});

cljs.core.async.__GT_t_cljs$core$async11656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11656(map_LT___$1,f__$1,ch__$1,meta11657){
return (new cljs.core.async.t_cljs$core$async11656(map_LT___$1,f__$1,ch__$1,meta11657));
});

}

return (new cljs.core.async.t_cljs$core$async11656(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11665 = (function (map_GT_,f,ch,meta11666){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11666 = meta11666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11667,meta11666__$1){
var self__ = this;
var _11667__$1 = this;
return (new cljs.core.async.t_cljs$core$async11665(self__.map_GT_,self__.f,self__.ch,meta11666__$1));
});

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11667){
var self__ = this;
var _11667__$1 = this;
return self__.meta11666;
});

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11666","meta11666",201809471,null)], null);
});

cljs.core.async.t_cljs$core$async11665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11665";

cljs.core.async.t_cljs$core$async11665.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11665");
});

cljs.core.async.__GT_t_cljs$core$async11665 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11665(map_GT___$1,f__$1,ch__$1,meta11666){
return (new cljs.core.async.t_cljs$core$async11665(map_GT___$1,f__$1,ch__$1,meta11666));
});

}

return (new cljs.core.async.t_cljs$core$async11665(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11671 = (function (filter_GT_,p,ch,meta11672){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11672 = meta11672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11673,meta11672__$1){
var self__ = this;
var _11673__$1 = this;
return (new cljs.core.async.t_cljs$core$async11671(self__.filter_GT_,self__.p,self__.ch,meta11672__$1));
});

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11673){
var self__ = this;
var _11673__$1 = this;
return self__.meta11672;
});

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11672","meta11672",826919618,null)], null);
});

cljs.core.async.t_cljs$core$async11671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11671";

cljs.core.async.t_cljs$core$async11671.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11671");
});

cljs.core.async.__GT_t_cljs$core$async11671 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11671(filter_GT___$1,p__$1,ch__$1,meta11672){
return (new cljs.core.async.t_cljs$core$async11671(filter_GT___$1,p__$1,ch__$1,meta11672));
});

}

return (new cljs.core.async.t_cljs$core$async11671(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11674 = [];
var len__7513__auto___11718 = arguments.length;
var i__7514__auto___11719 = (0);
while(true){
if((i__7514__auto___11719 < len__7513__auto___11718)){
args11674.push((arguments[i__7514__auto___11719]));

var G__11720 = (i__7514__auto___11719 + (1));
i__7514__auto___11719 = G__11720;
continue;
} else {
}
break;
}

var G__11676 = args11674.length;
switch (G__11676) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11674.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___11722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___11722,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___11722,out){
return (function (state_11697){
var state_val_11698 = (state_11697[(1)]);
if((state_val_11698 === (7))){
var inst_11693 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11699_11723 = state_11697__$1;
(statearr_11699_11723[(2)] = inst_11693);

(statearr_11699_11723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (1))){
var state_11697__$1 = state_11697;
var statearr_11700_11724 = state_11697__$1;
(statearr_11700_11724[(2)] = null);

(statearr_11700_11724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (4))){
var inst_11679 = (state_11697[(7)]);
var inst_11679__$1 = (state_11697[(2)]);
var inst_11680 = (inst_11679__$1 == null);
var state_11697__$1 = (function (){var statearr_11701 = state_11697;
(statearr_11701[(7)] = inst_11679__$1);

return statearr_11701;
})();
if(cljs.core.truth_(inst_11680)){
var statearr_11702_11725 = state_11697__$1;
(statearr_11702_11725[(1)] = (5));

} else {
var statearr_11703_11726 = state_11697__$1;
(statearr_11703_11726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (6))){
var inst_11679 = (state_11697[(7)]);
var inst_11684 = p.call(null,inst_11679);
var state_11697__$1 = state_11697;
if(cljs.core.truth_(inst_11684)){
var statearr_11704_11727 = state_11697__$1;
(statearr_11704_11727[(1)] = (8));

} else {
var statearr_11705_11728 = state_11697__$1;
(statearr_11705_11728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (3))){
var inst_11695 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else {
if((state_val_11698 === (2))){
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11697__$1,(4),ch);
} else {
if((state_val_11698 === (11))){
var inst_11687 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11706_11729 = state_11697__$1;
(statearr_11706_11729[(2)] = inst_11687);

(statearr_11706_11729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (9))){
var state_11697__$1 = state_11697;
var statearr_11707_11730 = state_11697__$1;
(statearr_11707_11730[(2)] = null);

(statearr_11707_11730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (5))){
var inst_11682 = cljs.core.async.close_BANG_.call(null,out);
var state_11697__$1 = state_11697;
var statearr_11708_11731 = state_11697__$1;
(statearr_11708_11731[(2)] = inst_11682);

(statearr_11708_11731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (10))){
var inst_11690 = (state_11697[(2)]);
var state_11697__$1 = (function (){var statearr_11709 = state_11697;
(statearr_11709[(8)] = inst_11690);

return statearr_11709;
})();
var statearr_11710_11732 = state_11697__$1;
(statearr_11710_11732[(2)] = null);

(statearr_11710_11732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (8))){
var inst_11679 = (state_11697[(7)]);
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11697__$1,(11),out,inst_11679);
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
});})(c__9472__auto___11722,out))
;
return ((function (switch__9360__auto__,c__9472__auto___11722,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_11714 = [null,null,null,null,null,null,null,null,null];
(statearr_11714[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_11714[(1)] = (1));

return statearr_11714;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_11697){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11715){if((e11715 instanceof Object)){
var ex__9364__auto__ = e11715;
var statearr_11716_11733 = state_11697;
(statearr_11716_11733[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11734 = state_11697;
state_11697 = G__11734;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___11722,out))
})();
var state__9474__auto__ = (function (){var statearr_11717 = f__9473__auto__.call(null);
(statearr_11717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___11722);

return statearr_11717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___11722,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11735 = [];
var len__7513__auto___11738 = arguments.length;
var i__7514__auto___11739 = (0);
while(true){
if((i__7514__auto___11739 < len__7513__auto___11738)){
args11735.push((arguments[i__7514__auto___11739]));

var G__11740 = (i__7514__auto___11739 + (1));
i__7514__auto___11739 = G__11740;
continue;
} else {
}
break;
}

var G__11737 = args11735.length;
switch (G__11737) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11735.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto__){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto__){
return (function (state_11907){
var state_val_11908 = (state_11907[(1)]);
if((state_val_11908 === (7))){
var inst_11903 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11909_11950 = state_11907__$1;
(statearr_11909_11950[(2)] = inst_11903);

(statearr_11909_11950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (20))){
var inst_11873 = (state_11907[(7)]);
var inst_11884 = (state_11907[(2)]);
var inst_11885 = cljs.core.next.call(null,inst_11873);
var inst_11859 = inst_11885;
var inst_11860 = null;
var inst_11861 = (0);
var inst_11862 = (0);
var state_11907__$1 = (function (){var statearr_11910 = state_11907;
(statearr_11910[(8)] = inst_11884);

(statearr_11910[(9)] = inst_11860);

(statearr_11910[(10)] = inst_11861);

(statearr_11910[(11)] = inst_11862);

(statearr_11910[(12)] = inst_11859);

return statearr_11910;
})();
var statearr_11911_11951 = state_11907__$1;
(statearr_11911_11951[(2)] = null);

(statearr_11911_11951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (1))){
var state_11907__$1 = state_11907;
var statearr_11912_11952 = state_11907__$1;
(statearr_11912_11952[(2)] = null);

(statearr_11912_11952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (4))){
var inst_11848 = (state_11907[(13)]);
var inst_11848__$1 = (state_11907[(2)]);
var inst_11849 = (inst_11848__$1 == null);
var state_11907__$1 = (function (){var statearr_11913 = state_11907;
(statearr_11913[(13)] = inst_11848__$1);

return statearr_11913;
})();
if(cljs.core.truth_(inst_11849)){
var statearr_11914_11953 = state_11907__$1;
(statearr_11914_11953[(1)] = (5));

} else {
var statearr_11915_11954 = state_11907__$1;
(statearr_11915_11954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (15))){
var state_11907__$1 = state_11907;
var statearr_11919_11955 = state_11907__$1;
(statearr_11919_11955[(2)] = null);

(statearr_11919_11955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (21))){
var state_11907__$1 = state_11907;
var statearr_11920_11956 = state_11907__$1;
(statearr_11920_11956[(2)] = null);

(statearr_11920_11956[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (13))){
var inst_11860 = (state_11907[(9)]);
var inst_11861 = (state_11907[(10)]);
var inst_11862 = (state_11907[(11)]);
var inst_11859 = (state_11907[(12)]);
var inst_11869 = (state_11907[(2)]);
var inst_11870 = (inst_11862 + (1));
var tmp11916 = inst_11860;
var tmp11917 = inst_11861;
var tmp11918 = inst_11859;
var inst_11859__$1 = tmp11918;
var inst_11860__$1 = tmp11916;
var inst_11861__$1 = tmp11917;
var inst_11862__$1 = inst_11870;
var state_11907__$1 = (function (){var statearr_11921 = state_11907;
(statearr_11921[(9)] = inst_11860__$1);

(statearr_11921[(10)] = inst_11861__$1);

(statearr_11921[(14)] = inst_11869);

(statearr_11921[(11)] = inst_11862__$1);

(statearr_11921[(12)] = inst_11859__$1);

return statearr_11921;
})();
var statearr_11922_11957 = state_11907__$1;
(statearr_11922_11957[(2)] = null);

(statearr_11922_11957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (22))){
var state_11907__$1 = state_11907;
var statearr_11923_11958 = state_11907__$1;
(statearr_11923_11958[(2)] = null);

(statearr_11923_11958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (6))){
var inst_11848 = (state_11907[(13)]);
var inst_11857 = f.call(null,inst_11848);
var inst_11858 = cljs.core.seq.call(null,inst_11857);
var inst_11859 = inst_11858;
var inst_11860 = null;
var inst_11861 = (0);
var inst_11862 = (0);
var state_11907__$1 = (function (){var statearr_11924 = state_11907;
(statearr_11924[(9)] = inst_11860);

(statearr_11924[(10)] = inst_11861);

(statearr_11924[(11)] = inst_11862);

(statearr_11924[(12)] = inst_11859);

return statearr_11924;
})();
var statearr_11925_11959 = state_11907__$1;
(statearr_11925_11959[(2)] = null);

(statearr_11925_11959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (17))){
var inst_11873 = (state_11907[(7)]);
var inst_11877 = cljs.core.chunk_first.call(null,inst_11873);
var inst_11878 = cljs.core.chunk_rest.call(null,inst_11873);
var inst_11879 = cljs.core.count.call(null,inst_11877);
var inst_11859 = inst_11878;
var inst_11860 = inst_11877;
var inst_11861 = inst_11879;
var inst_11862 = (0);
var state_11907__$1 = (function (){var statearr_11926 = state_11907;
(statearr_11926[(9)] = inst_11860);

(statearr_11926[(10)] = inst_11861);

(statearr_11926[(11)] = inst_11862);

(statearr_11926[(12)] = inst_11859);

return statearr_11926;
})();
var statearr_11927_11960 = state_11907__$1;
(statearr_11927_11960[(2)] = null);

(statearr_11927_11960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (3))){
var inst_11905 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11907__$1,inst_11905);
} else {
if((state_val_11908 === (12))){
var inst_11893 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11928_11961 = state_11907__$1;
(statearr_11928_11961[(2)] = inst_11893);

(statearr_11928_11961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (2))){
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11907__$1,(4),in$);
} else {
if((state_val_11908 === (23))){
var inst_11901 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11929_11962 = state_11907__$1;
(statearr_11929_11962[(2)] = inst_11901);

(statearr_11929_11962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (19))){
var inst_11888 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11930_11963 = state_11907__$1;
(statearr_11930_11963[(2)] = inst_11888);

(statearr_11930_11963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (11))){
var inst_11873 = (state_11907[(7)]);
var inst_11859 = (state_11907[(12)]);
var inst_11873__$1 = cljs.core.seq.call(null,inst_11859);
var state_11907__$1 = (function (){var statearr_11931 = state_11907;
(statearr_11931[(7)] = inst_11873__$1);

return statearr_11931;
})();
if(inst_11873__$1){
var statearr_11932_11964 = state_11907__$1;
(statearr_11932_11964[(1)] = (14));

} else {
var statearr_11933_11965 = state_11907__$1;
(statearr_11933_11965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (9))){
var inst_11895 = (state_11907[(2)]);
var inst_11896 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11907__$1 = (function (){var statearr_11934 = state_11907;
(statearr_11934[(15)] = inst_11895);

return statearr_11934;
})();
if(cljs.core.truth_(inst_11896)){
var statearr_11935_11966 = state_11907__$1;
(statearr_11935_11966[(1)] = (21));

} else {
var statearr_11936_11967 = state_11907__$1;
(statearr_11936_11967[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (5))){
var inst_11851 = cljs.core.async.close_BANG_.call(null,out);
var state_11907__$1 = state_11907;
var statearr_11937_11968 = state_11907__$1;
(statearr_11937_11968[(2)] = inst_11851);

(statearr_11937_11968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (14))){
var inst_11873 = (state_11907[(7)]);
var inst_11875 = cljs.core.chunked_seq_QMARK_.call(null,inst_11873);
var state_11907__$1 = state_11907;
if(inst_11875){
var statearr_11938_11969 = state_11907__$1;
(statearr_11938_11969[(1)] = (17));

} else {
var statearr_11939_11970 = state_11907__$1;
(statearr_11939_11970[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (16))){
var inst_11891 = (state_11907[(2)]);
var state_11907__$1 = state_11907;
var statearr_11940_11971 = state_11907__$1;
(statearr_11940_11971[(2)] = inst_11891);

(statearr_11940_11971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11908 === (10))){
var inst_11860 = (state_11907[(9)]);
var inst_11862 = (state_11907[(11)]);
var inst_11867 = cljs.core._nth.call(null,inst_11860,inst_11862);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11907__$1,(13),out,inst_11867);
} else {
if((state_val_11908 === (18))){
var inst_11873 = (state_11907[(7)]);
var inst_11882 = cljs.core.first.call(null,inst_11873);
var state_11907__$1 = state_11907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11907__$1,(20),out,inst_11882);
} else {
if((state_val_11908 === (8))){
var inst_11861 = (state_11907[(10)]);
var inst_11862 = (state_11907[(11)]);
var inst_11864 = (inst_11862 < inst_11861);
var inst_11865 = inst_11864;
var state_11907__$1 = state_11907;
if(cljs.core.truth_(inst_11865)){
var statearr_11941_11972 = state_11907__$1;
(statearr_11941_11972[(1)] = (10));

} else {
var statearr_11942_11973 = state_11907__$1;
(statearr_11942_11973[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto__))
;
return ((function (switch__9360__auto__,c__9472__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____0 = (function (){
var statearr_11946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__);

(statearr_11946[(1)] = (1));

return statearr_11946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____1 = (function (state_11907){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_11907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e11947){if((e11947 instanceof Object)){
var ex__9364__auto__ = e11947;
var statearr_11948_11974 = state_11907;
(statearr_11948_11974[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11975 = state_11907;
state_11907 = G__11975;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__ = function(state_11907){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____1.call(this,state_11907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto__))
})();
var state__9474__auto__ = (function (){var statearr_11949 = f__9473__auto__.call(null);
(statearr_11949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto__);

return statearr_11949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto__))
);

return c__9472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11976 = [];
var len__7513__auto___11979 = arguments.length;
var i__7514__auto___11980 = (0);
while(true){
if((i__7514__auto___11980 < len__7513__auto___11979)){
args11976.push((arguments[i__7514__auto___11980]));

var G__11981 = (i__7514__auto___11980 + (1));
i__7514__auto___11980 = G__11981;
continue;
} else {
}
break;
}

var G__11978 = args11976.length;
switch (G__11978) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11976.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11983 = [];
var len__7513__auto___11986 = arguments.length;
var i__7514__auto___11987 = (0);
while(true){
if((i__7514__auto___11987 < len__7513__auto___11986)){
args11983.push((arguments[i__7514__auto___11987]));

var G__11988 = (i__7514__auto___11987 + (1));
i__7514__auto___11987 = G__11988;
continue;
} else {
}
break;
}

var G__11985 = args11983.length;
switch (G__11985) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11983.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11990 = [];
var len__7513__auto___12041 = arguments.length;
var i__7514__auto___12042 = (0);
while(true){
if((i__7514__auto___12042 < len__7513__auto___12041)){
args11990.push((arguments[i__7514__auto___12042]));

var G__12043 = (i__7514__auto___12042 + (1));
i__7514__auto___12042 = G__12043;
continue;
} else {
}
break;
}

var G__11992 = args11990.length;
switch (G__11992) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11990.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___12045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___12045,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___12045,out){
return (function (state_12016){
var state_val_12017 = (state_12016[(1)]);
if((state_val_12017 === (7))){
var inst_12011 = (state_12016[(2)]);
var state_12016__$1 = state_12016;
var statearr_12018_12046 = state_12016__$1;
(statearr_12018_12046[(2)] = inst_12011);

(statearr_12018_12046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (1))){
var inst_11993 = null;
var state_12016__$1 = (function (){var statearr_12019 = state_12016;
(statearr_12019[(7)] = inst_11993);

return statearr_12019;
})();
var statearr_12020_12047 = state_12016__$1;
(statearr_12020_12047[(2)] = null);

(statearr_12020_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (4))){
var inst_11996 = (state_12016[(8)]);
var inst_11996__$1 = (state_12016[(2)]);
var inst_11997 = (inst_11996__$1 == null);
var inst_11998 = cljs.core.not.call(null,inst_11997);
var state_12016__$1 = (function (){var statearr_12021 = state_12016;
(statearr_12021[(8)] = inst_11996__$1);

return statearr_12021;
})();
if(inst_11998){
var statearr_12022_12048 = state_12016__$1;
(statearr_12022_12048[(1)] = (5));

} else {
var statearr_12023_12049 = state_12016__$1;
(statearr_12023_12049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (6))){
var state_12016__$1 = state_12016;
var statearr_12024_12050 = state_12016__$1;
(statearr_12024_12050[(2)] = null);

(statearr_12024_12050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (3))){
var inst_12013 = (state_12016[(2)]);
var inst_12014 = cljs.core.async.close_BANG_.call(null,out);
var state_12016__$1 = (function (){var statearr_12025 = state_12016;
(statearr_12025[(9)] = inst_12013);

return statearr_12025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12016__$1,inst_12014);
} else {
if((state_val_12017 === (2))){
var state_12016__$1 = state_12016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12016__$1,(4),ch);
} else {
if((state_val_12017 === (11))){
var inst_11996 = (state_12016[(8)]);
var inst_12005 = (state_12016[(2)]);
var inst_11993 = inst_11996;
var state_12016__$1 = (function (){var statearr_12026 = state_12016;
(statearr_12026[(10)] = inst_12005);

(statearr_12026[(7)] = inst_11993);

return statearr_12026;
})();
var statearr_12027_12051 = state_12016__$1;
(statearr_12027_12051[(2)] = null);

(statearr_12027_12051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (9))){
var inst_11996 = (state_12016[(8)]);
var state_12016__$1 = state_12016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12016__$1,(11),out,inst_11996);
} else {
if((state_val_12017 === (5))){
var inst_11996 = (state_12016[(8)]);
var inst_11993 = (state_12016[(7)]);
var inst_12000 = cljs.core._EQ_.call(null,inst_11996,inst_11993);
var state_12016__$1 = state_12016;
if(inst_12000){
var statearr_12029_12052 = state_12016__$1;
(statearr_12029_12052[(1)] = (8));

} else {
var statearr_12030_12053 = state_12016__$1;
(statearr_12030_12053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (10))){
var inst_12008 = (state_12016[(2)]);
var state_12016__$1 = state_12016;
var statearr_12031_12054 = state_12016__$1;
(statearr_12031_12054[(2)] = inst_12008);

(statearr_12031_12054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (8))){
var inst_11993 = (state_12016[(7)]);
var tmp12028 = inst_11993;
var inst_11993__$1 = tmp12028;
var state_12016__$1 = (function (){var statearr_12032 = state_12016;
(statearr_12032[(7)] = inst_11993__$1);

return statearr_12032;
})();
var statearr_12033_12055 = state_12016__$1;
(statearr_12033_12055[(2)] = null);

(statearr_12033_12055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___12045,out))
;
return ((function (switch__9360__auto__,c__9472__auto___12045,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_12037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12037[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_12037[(1)] = (1));

return statearr_12037;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_12016){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_12016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object)){
var ex__9364__auto__ = e12038;
var statearr_12039_12056 = state_12016;
(statearr_12039_12056[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12057 = state_12016;
state_12016 = G__12057;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_12016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_12016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___12045,out))
})();
var state__9474__auto__ = (function (){var statearr_12040 = f__9473__auto__.call(null);
(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___12045);

return statearr_12040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___12045,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12058 = [];
var len__7513__auto___12128 = arguments.length;
var i__7514__auto___12129 = (0);
while(true){
if((i__7514__auto___12129 < len__7513__auto___12128)){
args12058.push((arguments[i__7514__auto___12129]));

var G__12130 = (i__7514__auto___12129 + (1));
i__7514__auto___12129 = G__12130;
continue;
} else {
}
break;
}

var G__12060 = args12058.length;
switch (G__12060) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12058.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___12132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___12132,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___12132,out){
return (function (state_12098){
var state_val_12099 = (state_12098[(1)]);
if((state_val_12099 === (7))){
var inst_12094 = (state_12098[(2)]);
var state_12098__$1 = state_12098;
var statearr_12100_12133 = state_12098__$1;
(statearr_12100_12133[(2)] = inst_12094);

(statearr_12100_12133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (1))){
var inst_12061 = (new Array(n));
var inst_12062 = inst_12061;
var inst_12063 = (0);
var state_12098__$1 = (function (){var statearr_12101 = state_12098;
(statearr_12101[(7)] = inst_12062);

(statearr_12101[(8)] = inst_12063);

return statearr_12101;
})();
var statearr_12102_12134 = state_12098__$1;
(statearr_12102_12134[(2)] = null);

(statearr_12102_12134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (4))){
var inst_12066 = (state_12098[(9)]);
var inst_12066__$1 = (state_12098[(2)]);
var inst_12067 = (inst_12066__$1 == null);
var inst_12068 = cljs.core.not.call(null,inst_12067);
var state_12098__$1 = (function (){var statearr_12103 = state_12098;
(statearr_12103[(9)] = inst_12066__$1);

return statearr_12103;
})();
if(inst_12068){
var statearr_12104_12135 = state_12098__$1;
(statearr_12104_12135[(1)] = (5));

} else {
var statearr_12105_12136 = state_12098__$1;
(statearr_12105_12136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (15))){
var inst_12088 = (state_12098[(2)]);
var state_12098__$1 = state_12098;
var statearr_12106_12137 = state_12098__$1;
(statearr_12106_12137[(2)] = inst_12088);

(statearr_12106_12137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (13))){
var state_12098__$1 = state_12098;
var statearr_12107_12138 = state_12098__$1;
(statearr_12107_12138[(2)] = null);

(statearr_12107_12138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (6))){
var inst_12063 = (state_12098[(8)]);
var inst_12084 = (inst_12063 > (0));
var state_12098__$1 = state_12098;
if(cljs.core.truth_(inst_12084)){
var statearr_12108_12139 = state_12098__$1;
(statearr_12108_12139[(1)] = (12));

} else {
var statearr_12109_12140 = state_12098__$1;
(statearr_12109_12140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (3))){
var inst_12096 = (state_12098[(2)]);
var state_12098__$1 = state_12098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12098__$1,inst_12096);
} else {
if((state_val_12099 === (12))){
var inst_12062 = (state_12098[(7)]);
var inst_12086 = cljs.core.vec.call(null,inst_12062);
var state_12098__$1 = state_12098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12098__$1,(15),out,inst_12086);
} else {
if((state_val_12099 === (2))){
var state_12098__$1 = state_12098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12098__$1,(4),ch);
} else {
if((state_val_12099 === (11))){
var inst_12078 = (state_12098[(2)]);
var inst_12079 = (new Array(n));
var inst_12062 = inst_12079;
var inst_12063 = (0);
var state_12098__$1 = (function (){var statearr_12110 = state_12098;
(statearr_12110[(7)] = inst_12062);

(statearr_12110[(8)] = inst_12063);

(statearr_12110[(10)] = inst_12078);

return statearr_12110;
})();
var statearr_12111_12141 = state_12098__$1;
(statearr_12111_12141[(2)] = null);

(statearr_12111_12141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (9))){
var inst_12062 = (state_12098[(7)]);
var inst_12076 = cljs.core.vec.call(null,inst_12062);
var state_12098__$1 = state_12098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12098__$1,(11),out,inst_12076);
} else {
if((state_val_12099 === (5))){
var inst_12062 = (state_12098[(7)]);
var inst_12063 = (state_12098[(8)]);
var inst_12066 = (state_12098[(9)]);
var inst_12071 = (state_12098[(11)]);
var inst_12070 = (inst_12062[inst_12063] = inst_12066);
var inst_12071__$1 = (inst_12063 + (1));
var inst_12072 = (inst_12071__$1 < n);
var state_12098__$1 = (function (){var statearr_12112 = state_12098;
(statearr_12112[(12)] = inst_12070);

(statearr_12112[(11)] = inst_12071__$1);

return statearr_12112;
})();
if(cljs.core.truth_(inst_12072)){
var statearr_12113_12142 = state_12098__$1;
(statearr_12113_12142[(1)] = (8));

} else {
var statearr_12114_12143 = state_12098__$1;
(statearr_12114_12143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (14))){
var inst_12091 = (state_12098[(2)]);
var inst_12092 = cljs.core.async.close_BANG_.call(null,out);
var state_12098__$1 = (function (){var statearr_12116 = state_12098;
(statearr_12116[(13)] = inst_12091);

return statearr_12116;
})();
var statearr_12117_12144 = state_12098__$1;
(statearr_12117_12144[(2)] = inst_12092);

(statearr_12117_12144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (10))){
var inst_12082 = (state_12098[(2)]);
var state_12098__$1 = state_12098;
var statearr_12118_12145 = state_12098__$1;
(statearr_12118_12145[(2)] = inst_12082);

(statearr_12118_12145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12099 === (8))){
var inst_12062 = (state_12098[(7)]);
var inst_12071 = (state_12098[(11)]);
var tmp12115 = inst_12062;
var inst_12062__$1 = tmp12115;
var inst_12063 = inst_12071;
var state_12098__$1 = (function (){var statearr_12119 = state_12098;
(statearr_12119[(7)] = inst_12062__$1);

(statearr_12119[(8)] = inst_12063);

return statearr_12119;
})();
var statearr_12120_12146 = state_12098__$1;
(statearr_12120_12146[(2)] = null);

(statearr_12120_12146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___12132,out))
;
return ((function (switch__9360__auto__,c__9472__auto___12132,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_12124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12124[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_12124[(1)] = (1));

return statearr_12124;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_12098){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_12098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e12125){if((e12125 instanceof Object)){
var ex__9364__auto__ = e12125;
var statearr_12126_12147 = state_12098;
(statearr_12126_12147[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12148 = state_12098;
state_12098 = G__12148;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_12098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_12098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___12132,out))
})();
var state__9474__auto__ = (function (){var statearr_12127 = f__9473__auto__.call(null);
(statearr_12127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___12132);

return statearr_12127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___12132,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12149 = [];
var len__7513__auto___12223 = arguments.length;
var i__7514__auto___12224 = (0);
while(true){
if((i__7514__auto___12224 < len__7513__auto___12223)){
args12149.push((arguments[i__7514__auto___12224]));

var G__12225 = (i__7514__auto___12224 + (1));
i__7514__auto___12224 = G__12225;
continue;
} else {
}
break;
}

var G__12151 = args12149.length;
switch (G__12151) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12149.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9472__auto___12227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9472__auto___12227,out){
return (function (){
var f__9473__auto__ = (function (){var switch__9360__auto__ = ((function (c__9472__auto___12227,out){
return (function (state_12193){
var state_val_12194 = (state_12193[(1)]);
if((state_val_12194 === (7))){
var inst_12189 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12195_12228 = state_12193__$1;
(statearr_12195_12228[(2)] = inst_12189);

(statearr_12195_12228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (1))){
var inst_12152 = [];
var inst_12153 = inst_12152;
var inst_12154 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12193__$1 = (function (){var statearr_12196 = state_12193;
(statearr_12196[(7)] = inst_12154);

(statearr_12196[(8)] = inst_12153);

return statearr_12196;
})();
var statearr_12197_12229 = state_12193__$1;
(statearr_12197_12229[(2)] = null);

(statearr_12197_12229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (4))){
var inst_12157 = (state_12193[(9)]);
var inst_12157__$1 = (state_12193[(2)]);
var inst_12158 = (inst_12157__$1 == null);
var inst_12159 = cljs.core.not.call(null,inst_12158);
var state_12193__$1 = (function (){var statearr_12198 = state_12193;
(statearr_12198[(9)] = inst_12157__$1);

return statearr_12198;
})();
if(inst_12159){
var statearr_12199_12230 = state_12193__$1;
(statearr_12199_12230[(1)] = (5));

} else {
var statearr_12200_12231 = state_12193__$1;
(statearr_12200_12231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (15))){
var inst_12183 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12201_12232 = state_12193__$1;
(statearr_12201_12232[(2)] = inst_12183);

(statearr_12201_12232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (13))){
var state_12193__$1 = state_12193;
var statearr_12202_12233 = state_12193__$1;
(statearr_12202_12233[(2)] = null);

(statearr_12202_12233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (6))){
var inst_12153 = (state_12193[(8)]);
var inst_12178 = inst_12153.length;
var inst_12179 = (inst_12178 > (0));
var state_12193__$1 = state_12193;
if(cljs.core.truth_(inst_12179)){
var statearr_12203_12234 = state_12193__$1;
(statearr_12203_12234[(1)] = (12));

} else {
var statearr_12204_12235 = state_12193__$1;
(statearr_12204_12235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (3))){
var inst_12191 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12193__$1,inst_12191);
} else {
if((state_val_12194 === (12))){
var inst_12153 = (state_12193[(8)]);
var inst_12181 = cljs.core.vec.call(null,inst_12153);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12193__$1,(15),out,inst_12181);
} else {
if((state_val_12194 === (2))){
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12193__$1,(4),ch);
} else {
if((state_val_12194 === (11))){
var inst_12157 = (state_12193[(9)]);
var inst_12161 = (state_12193[(10)]);
var inst_12171 = (state_12193[(2)]);
var inst_12172 = [];
var inst_12173 = inst_12172.push(inst_12157);
var inst_12153 = inst_12172;
var inst_12154 = inst_12161;
var state_12193__$1 = (function (){var statearr_12205 = state_12193;
(statearr_12205[(11)] = inst_12173);

(statearr_12205[(7)] = inst_12154);

(statearr_12205[(8)] = inst_12153);

(statearr_12205[(12)] = inst_12171);

return statearr_12205;
})();
var statearr_12206_12236 = state_12193__$1;
(statearr_12206_12236[(2)] = null);

(statearr_12206_12236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (9))){
var inst_12153 = (state_12193[(8)]);
var inst_12169 = cljs.core.vec.call(null,inst_12153);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12193__$1,(11),out,inst_12169);
} else {
if((state_val_12194 === (5))){
var inst_12154 = (state_12193[(7)]);
var inst_12157 = (state_12193[(9)]);
var inst_12161 = (state_12193[(10)]);
var inst_12161__$1 = f.call(null,inst_12157);
var inst_12162 = cljs.core._EQ_.call(null,inst_12161__$1,inst_12154);
var inst_12163 = cljs.core.keyword_identical_QMARK_.call(null,inst_12154,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12164 = (inst_12162) || (inst_12163);
var state_12193__$1 = (function (){var statearr_12207 = state_12193;
(statearr_12207[(10)] = inst_12161__$1);

return statearr_12207;
})();
if(cljs.core.truth_(inst_12164)){
var statearr_12208_12237 = state_12193__$1;
(statearr_12208_12237[(1)] = (8));

} else {
var statearr_12209_12238 = state_12193__$1;
(statearr_12209_12238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (14))){
var inst_12186 = (state_12193[(2)]);
var inst_12187 = cljs.core.async.close_BANG_.call(null,out);
var state_12193__$1 = (function (){var statearr_12211 = state_12193;
(statearr_12211[(13)] = inst_12186);

return statearr_12211;
})();
var statearr_12212_12239 = state_12193__$1;
(statearr_12212_12239[(2)] = inst_12187);

(statearr_12212_12239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (10))){
var inst_12176 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12213_12240 = state_12193__$1;
(statearr_12213_12240[(2)] = inst_12176);

(statearr_12213_12240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (8))){
var inst_12157 = (state_12193[(9)]);
var inst_12153 = (state_12193[(8)]);
var inst_12161 = (state_12193[(10)]);
var inst_12166 = inst_12153.push(inst_12157);
var tmp12210 = inst_12153;
var inst_12153__$1 = tmp12210;
var inst_12154 = inst_12161;
var state_12193__$1 = (function (){var statearr_12214 = state_12193;
(statearr_12214[(7)] = inst_12154);

(statearr_12214[(8)] = inst_12153__$1);

(statearr_12214[(14)] = inst_12166);

return statearr_12214;
})();
var statearr_12215_12241 = state_12193__$1;
(statearr_12215_12241[(2)] = null);

(statearr_12215_12241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9472__auto___12227,out))
;
return ((function (switch__9360__auto__,c__9472__auto___12227,out){
return (function() {
var cljs$core$async$state_machine__9361__auto__ = null;
var cljs$core$async$state_machine__9361__auto____0 = (function (){
var statearr_12219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12219[(0)] = cljs$core$async$state_machine__9361__auto__);

(statearr_12219[(1)] = (1));

return statearr_12219;
});
var cljs$core$async$state_machine__9361__auto____1 = (function (state_12193){
while(true){
var ret_value__9362__auto__ = (function (){try{while(true){
var result__9363__auto__ = switch__9360__auto__.call(null,state_12193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9363__auto__;
}
break;
}
}catch (e12220){if((e12220 instanceof Object)){
var ex__9364__auto__ = e12220;
var statearr_12221_12242 = state_12193;
(statearr_12221_12242[(5)] = ex__9364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12243 = state_12193;
state_12193 = G__12243;
continue;
} else {
return ret_value__9362__auto__;
}
break;
}
});
cljs$core$async$state_machine__9361__auto__ = function(state_12193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9361__auto____1.call(this,state_12193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9361__auto____0;
cljs$core$async$state_machine__9361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9361__auto____1;
return cljs$core$async$state_machine__9361__auto__;
})()
;})(switch__9360__auto__,c__9472__auto___12227,out))
})();
var state__9474__auto__ = (function (){var statearr_12222 = f__9473__auto__.call(null);
(statearr_12222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9472__auto___12227);

return statearr_12222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9474__auto__);
});})(c__9472__auto___12227,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map