self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B={a_v:function a_v(d,e,f){this.c=d
this.d=e
this.a=f}},C,D,E={a4w:function a4w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},F,G,H={
bHb(d){var w,v,u,t=d.length,s=new Float32Array(t*2)
for(w=0;w<t;++w){v=2*w
u=d[w]
s[v]=u.a
s[v+1]=u.b}return s},
brB(d,e,f,g,h){var w,v,u=null,t=e.length
if(f.length!==t)throw H.e(P.c9('"positions" and "colors" lengths must match.',u))
t=$.bnb()[d.a]
w=H.bHb(e)
v=H.bkK(f)
t=new H.HE(t,w,u,v,u)
t.zX(u)
return t},
byx(d){var w,v=d.length,u=new Int32Array(v)
for(w=0;w<v;++w)u[w]=d[w].a
return u},
bGg(d){var w,v,u,t=d.length,s=new Float32Array(t*2)
for(w=0,v=0;w<t;++w,v+=2){u=d[w]
s[v]=u.a
s[v+1]=u.b}return s},
HE:function HE(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a70:function a70(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},J,K={
byT(){return new K.rH(null)},
rH:function rH(d){this.a=d},
Tj:function Tj(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.y=_.x=_.r=null
_.V$=g
_.a=null
_.b=h
_.c=null},
aZL:function aZL(d,e){this.a=d
this.b=e},
aZM:function aZM(d){this.a=d},
aZS:function aZS(d){this.a=d},
aZR:function aZR(d){this.a=d},
aZQ:function aZQ(d){this.a=d},
aZP:function aZP(d){this.a=d},
aZO:function aZO(d,e){this.a=d
this.b=e},
aZN:function aZN(d,e,f){this.a=d
this.b=e
this.c=f},
a8J:function a8J(d,e){this.b=d
this.a=e},
aIh:function aIh(d,e){this.a=d
this.b=e},
Vc:function Vc(){}},L,M,N,O={
b7y(d,e,f,g,h){var w=new O.Wr(e,g,f,H.c([],x.n),h,H.c([],x.Z))
w.aq3(d,e,f,g,h)
return w},
Wr:function Wr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ama:function ama(d){this.a=d},
am9:function am9(d){this.a=d},
am8:function am8(d){this.a=d},
aIg:function aIg(d){this.a=d
this.c=this.b=null},
aV3:function aV3(d,e){this.a=d
this.b=e},
h5:function h5(d,e,f){this.a=d
this.b=e
this.c=f},
a8K:function a8K(){}},P={
bz6(d,e,f){var w,v=H.ak()
if(v)return H.brB(d,e,f,null,null)
v=H.byx(f)
w=H.bGg(e)
if($.Gx==null)$.Gx=new H.aiF()
return new H.a70(d,w,v,null)}},Q,R,S,T={
atp(d,e,f){var w,v,u=f.a,t=e.a,s=Math.pow(u[0]-t[0],2)+Math.pow(u[1]-t[1],2)
if(s===0)return e
w=d.aC(0,e)
v=f.aC(0,e)
return e.a_(0,v.zO(C.f.O(w.EQ(v)/s,0,1)))},
bw0(d,e){var w,v,u,t,s,r,q,p=e.a,o=d.aC(0,p),n=e.b,m=n.aC(0,p),l=e.d,k=l.aC(0,p),j=o.EQ(m),i=m.EQ(m),h=o.EQ(k),g=k.EQ(k)
if(0<=j&&j<=i&&0<=h&&h<=g)return d
w=e.c
v=[T.atp(d,p,n),T.atp(d,n,w),T.atp(d,w,l),T.atp(d,l,p)]
u=H.c5("closestOverall")
for(p=d.a,t=1/0,s=0;s<4;++s){r=v[s]
n=r.a
q=Math.sqrt(Math.pow(p[0]-n[0],2)+Math.pow(p[1]-n[1],2))
if(q<t){u.b=r
t=q}}return u.r3()},
byS(){var w=new E.bw(new Float64Array(16))
w.tZ()
return new T.a7t(w,P.Z(0,null,!1,x.Y))},
bji(d,e){var w,v,u,t,s,r,q
d.toString
w=new E.bw(new Float64Array(16))
w.qS(d)
w.zk(w)
v=e.a
u=e.b
t=new E.cn(new Float64Array(3))
t.uh(v,u,0)
t=w.zK(t)
s=e.c
r=new E.cn(new Float64Array(3))
r.uh(s,u,0)
r=w.zK(r)
u=e.d
q=new E.cn(new Float64Array(3))
q.uh(s,u,0)
q=w.zK(q)
s=new E.cn(new Float64Array(3))
s.uh(v,u,0)
s=w.zK(s)
v=new E.cn(new Float64Array(3))
v.qS(t)
u=new E.cn(new Float64Array(3))
u.qS(r)
t=new E.cn(new Float64Array(3))
t.qS(q)
r=new E.cn(new Float64Array(3))
r.qS(s)
return new E.a4w(v,u,t,r)},
biF(d,e){var w,v,u,t,s,r,q=[e.a,e.b,e.c,e.d]
for(w=C.o,v=0;v<4;++v){u=q[v]
t=T.bw0(u,d).a
s=u.a
r=t[0]-s[0]
s=t[1]-s[1]
if(Math.abs(r)>Math.abs(w.a))w=new P.m(r,w.b)
if(Math.abs(s)>Math.abs(w.b))w=new P.m(w.a,s)}return T.baV(w)},
baV(d){return new P.m(P.akx(J.bH(d.a,9)),P.akx(J.bH(d.b,9)))},
bC6(d,e){if(J.i(d,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.y:C.q},
Jz:function Jz(d,e,f,g,h,i,j){var _=this
_.e=d
_.r=e
_.z=f
_.ch=g
_.cy=h
_.dx=i
_.a=j},
Qp:function Qp(d,e,f,g){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.x=$
_.Q=_.z=_.y=null
_.cx=_.ch=0
_.cy=null
_.V$=f
_.a=null
_.b=g
_.c=null},
aRa:function aRa(){},
acI:function acI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a7t:function a7t(d,e){var _=this
_.a=d
_.a4$=0
_.ae$=e
_.ok$=_.aF$=0
_.av$=!1},
Q0:function Q0(d){this.b=d},
UA:function UA(){}},U={XF:function XF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},anv:function anv(d){this.a=d},anu:function anu(d,e){this.a=d
this.b=e},yE:function yE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},aJX:function aJX(d){this.a=d}},V,W,X,Y,Z
a.setFunctionNamesIfNecessary([B,E,H,K,O,P,T,U])
A=c[0]
B=a.updateHolder(c[1],B)
C=c[2]
D=c[3]
E=a.updateHolder(c[4],E)
F=c[5]
G=c[6]
H=a.updateHolder(c[7],H)
J=c[8]
K=a.updateHolder(c[9],K)
L=c[10]
M=c[11]
N=c[12]
O=a.updateHolder(c[13],O)
P=a.updateHolder(c[14],P)
Q=c[15]
R=c[16]
S=c[17]
T=a.updateHolder(c[18],T)
U=a.updateHolder(c[19],U)
V=c[20]
W=c[21]
X=c[22]
Y=c[23]
Z=c[24]
H.HE.prototype={
yz(){var w=this
return J.bnO($.aq.t9(),w.b,w.c,w.d,w.e,w.f)},
AR(){return this.yz()},
vi(d){var w=this.a
if(w!=null)J.iI(w)}}
H.a70.prototype={}
T.Jz.prototype={
K(){var w=x.z
return new T.Qp(new N.ab(null,w),new N.ab(null,w),null,C.j)}}
T.Qp.prototype={
gA2(){var w=this.x
return w===$?H.h(H.q("_controller")):w},
gN6(){var w=$.P.G$.Q.h(0,this.e).gC()
w.toString
w=x.x.a(w).rx
w.toString
return this.a.e.L_(new P.F(0,0,0+w.a,0+w.b))},
gPb(){var w=$.P.G$.Q.h(0,this.f).gC()
w.toString
w=x.x.a(w).rx
return new P.F(0,0,0+w.a,0+w.b)},
Oe(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.q(0,C.o)){a1.toString
w=new E.bw(new Float64Array(16))
w.qS(a1)
return w}a0.a.toString
a1.toString
v=new E.bw(new Float64Array(16))
v.qS(a1)
v.or(0,a2.a,a2.b)
u=T.bji(v,a0.gPb())
w=a0.gN6()
if(w.a>=1/0||w.b>=1/0||w.c>=1/0||w.d>=1/0)return v
w=a0.gN6()
t=a0.cx
s=new E.bw(new Float64Array(16))
s.tZ()
r=w.c
q=w.a
p=r-q
o=w.d
w=w.b
n=o-w
s.or(0,p/2,n/2)
s.RD(t)
s.or(0,-p/2,-n/2)
t=new E.cn(new Float64Array(3))
t.uh(q,w,0)
t=s.zK(t)
p=new E.cn(new Float64Array(3))
p.uh(r,w,0)
p=s.zK(p)
w=new E.cn(new Float64Array(3))
w.uh(r,o,0)
w=s.zK(w)
r=new E.cn(new Float64Array(3))
r.uh(q,o,0)
r=s.zK(r)
q=new Float64Array(3)
new E.cn(q).qS(t)
t=new Float64Array(3)
new E.cn(t).qS(p)
p=new Float64Array(3)
new E.cn(p).qS(w)
w=new Float64Array(3)
new E.cn(w).qS(r)
r=q[0]
o=t[0]
n=p[0]
m=w[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
w=w[1]
k=Math.min(q,Math.min(t,Math.min(p,w)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,w)))
w=new E.cn(new Float64Array(3))
w.uh(l,k,0)
t=new E.cn(new Float64Array(3))
t.uh(j,k,0)
r=new E.cn(new Float64Array(3))
r.uh(j,i,0)
q=new E.cn(new Float64Array(3))
q.uh(l,i,0)
p=new E.cn(new Float64Array(3))
p.qS(w)
w=new E.cn(new Float64Array(3))
w.qS(t)
t=new E.cn(new Float64Array(3))
t.qS(r)
r=new E.cn(new Float64Array(3))
r.qS(q)
h=new E.a4w(p,w,t,r)
g=T.biF(h,u)
if(g.q(0,C.o))return v
w=v.S8().a
t=w[0]
w=w[1]
f=a1.M7()
t-=g.a*f
w-=g.b*f
e=new E.bw(new Float64Array(16))
e.qS(a1)
r=new E.cn(new Float64Array(3))
r.uh(t,w,0)
e.a1S(r)
d=T.biF(h,T.bji(e,a0.gPb()))
if(d.q(0,C.o))return e
r=d.a===0
if(!r&&d.b!==0){w=new E.bw(new Float64Array(16))
w.qS(a1)
return w}t=r?t:0
w=d.b===0?w:0
r=new E.bw(new Float64Array(16))
r.qS(a1)
q=new E.cn(new Float64Array(3))
q.uh(t,w,0)
r.a1S(q)
return r},
a7x(d,e){var w,v,u,t,s,r,q=this
if(e===1){d.toString
w=new E.bw(new Float64Array(16))
w.qS(d)
return w}v=q.d.a.M7()
w=q.gPb()
u=q.gN6()
t=q.gPb()
s=q.gN6()
r=C.f.O(Math.max(v*e,Math.max((w.c-w.a)/(u.c-u.a),(t.d-t.b)/(s.d-s.b))),q.a.ch,2.5)
d.toString
w=new E.bw(new Float64Array(16))
w.qS(d)
w.rt(0,r/v)
return w},
aEn(d,e,f){var w,v,u,t
if(e===0){d.toString
w=new E.bw(new Float64Array(16))
w.qS(d)
return w}v=this.d.zJ(f)
d.toString
w=new E.bw(new Float64Array(16))
w.qS(d)
u=v.a
t=v.b
w.or(0,u,t)
w.RD(-e)
w.or(0,-u,-t)
return w},
UV(d){switch(d){case C.ON:return!1
case C.nv:this.a.toString
return!1
case C.jC:case null:this.a.toString
return!0
default:throw H.e(H.l(y.b))}},
a5W(d){this.a.toString
if(Math.abs(0)>Math.abs(0))return C.nv
else return C.jC},
aDG(d){var w,v=this
v.a.cy.$1(d)
w=v.gA2().r
if(w!=null&&w.a!=null){v.gA2().th(0)
w=v.gA2()
w.sl(0,w.a)
w=v.r
if(w!=null)w.a.W(0,v.gOp())
v.r=null}v.y=v.cy=null
v.Q=v.d.a.M7()
v.z=v.d.zJ(d.b)
v.ch=v.cx},
aFw(d){var w,v,u,t,s,r,q=this,p=q.d.a.M7(),o=d.c,n=q.d.zJ(o),m=q.cy
if(m===C.jC)m=q.cy=q.a5W(d)
else if(m==null){m=q.a5W(d)
q.cy=m}if(!q.UV(m)){q.a.toString
return}m=q.cy
m.toString
switch(m){case C.nv:m=q.Q
m.toString
w=q.d
w.sl(0,q.a7x(w.a,m*d.d/p))
v=q.d.zJ(o)
m=q.d
w=m.a
u=q.z
u.toString
m.sl(0,q.Oe(w,v.aC(0,u)))
t=q.d.zJ(o)
o=q.z
o.toString
if(!T.baV(o).q(0,T.baV(t)))q.z=t
break
case C.ON:m=d.r
if(m===0){q.a.toString
return}w=q.ch
w.toString
s=w+m
m=q.d
m.sl(0,q.aEn(m.a,q.cx-s,o))
q.cx=s
break
case C.jC:if(d.d!==1){q.a.toString
return}if(q.y==null){m=q.z
m.toString
q.y=T.bC6(m,n)}m=q.z
m.toString
r=n.aC(0,m)
m=q.d
m.sl(0,q.Oe(m.a,r))
q.z=q.d.zJ(o)
break
default:throw H.e(H.l(y.b))}q.a.toString},
aFs(d){var w,v,u,t,s,r,q,p=this
p.a.toString
p.z=p.ch=p.Q=null
w=p.r
if(w!=null)w.a.W(0,p.gOp())
w=p.gA2()
w.sl(0,w.a)
if(!p.UV(p.cy)){p.y=null
return}if(p.cy!==C.jC||d.a.a.guj()<50){p.y=null
return}w=p.d.a.S8().a
v=w[0]
w=w[1]
u=d.a.a
t=Math.log(0.0000135)
s=Math.log(0.0000135)
r=Math.log(10/u.guj())
q=Math.log(135e-9)
t=new D.AA(0.0000135,t,v,u.a,C.d2).gKP()
u=new D.AA(0.0000135,s,w,u.b,C.d2).gKP()
s=x.L
p.r=new R.J(S.aM(C.eK,p.gA2(),null),new R.a4(new P.m(v,w),new P.m(t,u),s),s.i("J<W.T>"))
p.gA2().e=P.dS(0,0,C.f.aB(r/q*1000),0,0)
p.r.a.am(0,p.gOp())
p.gA2().oX(0)},
aDI(d){var w,v,u,t,s,r,q=this
if(x.C.b(d)){if(d.gIe().b===0)return
w=q.a.cy
v=d.grZ(d)
u=d.gvo()
w.$1(new B.rl(v,u==null?v:u,0))
t=Math.exp(-d.gIe().b/200)
if(!q.UV(C.nv)){q.a.toString
return}w=q.d
w.toString
s=w.zJ(d.gvo())
w=q.d
w.sl(0,q.a7x(w.a,t))
w=q.d
w.toString
r=w.zJ(d.gvo())
w=q.d
w.sl(0,q.Oe(w.a,r.aC(0,s)))
q.a.toString}},
aEZ(){var w,v,u,t,s=this,r=s.gA2().r
if(!(r!=null&&r.a!=null)){s.y=null
r=s.r
if(r!=null)r.a.W(0,s.gOp())
s.r=null
r=s.gA2()
r.sl(0,r.a)
return}r=s.d.a.S8().a
w=r[0]
r=r[1]
v=s.d.zJ(new P.m(w,r))
r=s.d
r.toString
w=s.r
u=w.b
w=w.a
t=r.zJ(u.Z(0,w.gl(w))).aC(0,v)
w=s.d
w.sl(0,s.Oe(w.a,t))},
aFK(){this.B(new T.aRa())},
a9(){var w,v=this,u=null
v.ag()
w=v.a.dx
v.d=w
w.am(0,v.gW2())
v.x=G.aV(C.x,u,u,0,u,1,u,v)},
aj(d){var w,v,u=this
u.aD(d)
d.toString
w=u.a
if(w.dx!==d.dx){w=u.gW2()
u.d.W(0,w)
v=u.a.dx
u.d=v
v.am(0,w)}},
k(d){var w=this
w.gA2().k(0)
w.d.W(0,w.gW2())
w.a.toString
w.aoV(0)},
m(d,e){var w,v,u=this,t=null,s=u.a
s.toString
w=u.d
v=new T.acI(s.r,u.e,C.v,!0,w.a,t)
return T.K3(C.ee,D.cl(C.b0,v,C.D,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gaFr(),u.gaDF(),u.gaFv(),t,t,t,t,t,t,t),u.f,t,t,u.gaDH(),t)}}
T.acI.prototype={
m(d,e){var w=this,v=T.oN(null,new T.hd(w.c,w.d),w.r,!0),u=w.e
return u!==C.h?T.jn(v,u,null):v}}
T.a7t.prototype={
zJ(d){var w,v,u=this.a,t=new E.bw(new Float64Array(16))
if(t.zk(u)===0)H.h(P.fh(u,"other","Matrix cannot be inverted"))
u=d.a
w=d.b
v=new E.cn(new Float64Array(3))
v.uh(u,w,0)
v=t.zK(v).a
return new P.m(v[0],v[1])}}
T.Q0.prototype={
j(d){return this.b}}
T.UA.prototype={
k(d){this.a6(0)},
U(){var w,v=this.c
v.toString
w=!U.bp(v)
v=this.V$
if(v!=null)for(v=P.c_(v,v.r);v.v();)v.d.sqJ(0,w)
this.ah()}}
K.rH.prototype={
K(){var w=null
return new K.Tj(new N.ab(w,x.H),O.b7y(w,8,1,16,w),T.byS(),w,C.j)}}
K.Tj.prototype={
aF_(){var w=this,v=w.r,u=v.b
v=v.a
w.f.sl(0,u.Z(0,v.gl(v)))
v=w.x.r
if(!(v!=null&&v.a!=null)){v=w.r
if(v!=null)v.a.W(0,w.gW_())
w.r=null
v=w.x
v.sl(0,v.a)}},
aFu(d){var w,v=this
if(v.x.gt_()===C.af){v.x.th(0)
w=v.r
if(w!=null)w.a.W(0,v.gW_())
v.r=null
w=v.x
w.sl(0,w.a)}},
aFH(d){var w=this,v=w.f.zJ(d.a.aC(0,T.eX(x.T.a($.P.G$.Q.h(0,w.d).gC()).ty(0,null),C.o)))
w.B(new K.aZL(w,w.e.aTM(v)))},
a9(){var w=null
this.ag()
this.x=G.aV(C.x,w,w,0,w,1,w,this)},
m(d,e){var w=null,v=K.v(e).n
return M.bR(E.cq(w,w,!1,w,w,w,1,w,w,w,!1,w,w,w,w,w,!0,w,w,w,w,L.p(L.j(e,C.b,x.s).gbi(),w,w,w,w,w,w,w,w),w,w,w,1,w),v.a,M.R(w,new A.cO(new K.aZM(this),w),C.h,C.v3,w,w,w,w,w,w,w,w,w,w),w,w,!1,w,w,w,H.c([this.gaUt(),this.gaPn()],x.t),w)},
gaUt(){var w=this.c
w.toString
return B.c1(K.v(w).n.e,!0,C.a4U,24,null,new K.aZS(this),C.P,null,"Reset")},
gaPn(){var w=this.c
w.toString
return B.c1(K.v(w).n.e,!0,C.pJ,24,null,new K.aZQ(this),C.P,null,"Edit")},
k(d){this.x.k(0)
this.apN(0)}}
K.a8J.prototype={
oh(d,e){this.b.aa(0,new K.aIh(this,d))},
uo(d){return d.b!==this.b}}
K.Vc.prototype={
k(d){this.a6(0)},
U(){var w,v=this.c
v.toString
w=!U.bp(v)
v=this.V$
if(v!=null)for(v=P.c_(v,v.r);v.v();)v.d.sqJ(0,w)
this.ah()}}
O.Wr.prototype={
aq3(d,e,f,g,h){var w,v,u,t,s,r=this,q=r.b,p=-q,o=q-r.c,n=Math.sqrt(3)/2*o
q=0+n
w=p+0.5*o
v=p+1.5*o
u=p+2*o
t=0-n
C.c.a3(r.d,H.c([new P.m(0,p),new P.m(q,w),new P.m(q,v),new P.m(q,v),new P.m(0,u),new P.m(0,u),new P.m(t,v),new P.m(t,v),new P.m(t,w)],x.n))
if(d!=null)C.c.a3(r.f,d)
else{s=r.a60(null)
for(q=r.f;s!=null;){q.push(s)
s=r.a60(s)}}},
gal(d){return new O.aIg(this.f)},
a65(d){var w=this.a,v=-w
if(d<=0)v-=d
else w-=d
return new O.aV3(v,w)},
a60(d){var w,v,u,t=this
if(d==null)return new O.h5(-t.a,0,C.i6)
w=d.a
v=t.a65(w)
if(w>=t.a&&d.b>=v.b)return null
u=d.b
if(u>=v.b){++w
return new O.h5(w,t.a65(w).a,C.i6)}return new O.h5(w,u+1,C.i6)},
gva(d){var w=this.b,v=this.a
return new P.K((v*2+1)*(Math.sqrt(3)/2*w)*2,2*(w+v*1.5*w))},
aTM(d){var w=this,v=w.gva(w),u=d.b-w.gva(w).b/2,t=w.b,s=new O.h5(C.f.aB((Math.sqrt(3)/3*(d.a-v.a/2)-0.3333333333333333*u)/t),C.f.aB(0.6666666666666666*u/t),C.i6)
v=C.Qb.gad8().a
u=s.gad8().a
if(C.f.ra(Math.abs(v[0]-u[0])+Math.abs(v[1]-u[1])+Math.abs(v[2]-u[2]),2)>w.a)return null
return C.c.EZ(w.f,new O.ama(s))},
aim(d,e){var w=this,v=w.b,u=d.b,t=w.d,s=H.aD(t).i("aZ<1,m*>"),r=P.aX(new H.aZ(t,new O.am9(new P.ir(Math.sqrt(3)*v*d.a+Math.sqrt(3)/2*v*u+w.gva(w).a/2,1.5*v*u+w.gva(w).b/2,x.e)),s),!0,s.i("bO.E"))
return P.bz6(C.tc,r,P.Z(r.length,e,!1,x.G))},
aOr(d){var w=this
if(J.i(w.e,d))return w
return O.b7y(w.f,w.a,w.c,w.b,d)},
aOq(d,e){var w,v,u=this,t=new O.h5(d.a,d.b,e),s=u.f,r=C.c.ZH(s,new O.am8(d))
if(J.i(u.rd(0,r),d)&&J.i(d.c,e))return u
w=P.cD(s,!0,x.y)
w[r]=t
v=u.e
if(d.q(0,v))v=t
return O.b7y(w,u.a,u.c,u.b,v)},
$iH:1}
O.aIg.prototype={
v(){var w,v=this,u=v.b
u=u==null?v.b=0:v.b=u+1
w=v.a
if(u>=w.length){v.c=null
return!1}v.c=w[u]
return!0},
gL(d){return this.c}}
O.aV3.prototype={}
O.h5.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+H.b(this.c)+")"},
q(d,e){if(e==null)return!1
if(J.ae(e)!==H.a2(this))return!1
return e instanceof O.h5&&e.a===this.a&&e.b===this.b},
gN(d){return P.az(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gad8(){var w=this.a,v=this.b,u=new E.cn(new Float64Array(3))
u.uh(w,v,-w-v)
return u}}
O.a8K.prototype={}
U.XF.prototype={
m(d,e){var w=this.c,v=H.T(w).i("kS<dW.E,yE*>")
return T.aA(P.aX(new H.kS(w,new U.anv(this),v),!0,v.i("H.E")),C.m,null,C.bd,C.k,null)}}
U.yE.prototype={
m(d,e){var w=null,v=!this.d?w:C.a4a
return M.R(w,Z.b9A(!1,v,C.h,C.R_,0,2,!0,this.c,w,4,w,w,8,w,4,w,w,new U.aJX(this),C.dS,w,w),C.h,w,w,w,w,60,w,w,C.a1J,w,w,60)}}
B.a_v.prototype={
m(d,e){var w=null,v=P.eb([C.p,C.kq,C.oF,C.vb,C.v3],x.G),u=this.c
return T.a7(H.c([L.p(""+u.a+", "+u.b,w,w,w,w,C.rT,C.f9,w,w),new U.XF(v,u.c,this.d,w)],x.t),C.aV,w,C.i,C.k,C.n)}}
E.a4w.prototype={}
var z=a.updateTypes(["~()","N*(h5*)","~(rl)","~(Mn)","~(Cd)","~(ki)","~(rl*)","~(j6*)","~(h5*)","yE*(k*)"])
T.aRa.prototype={
$0(){},
$S:0}
K.aZL.prototype={
$0(){var w=this.a
w.e=w.e.aOr(this.b)},
$S:1}
K.aZM.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=this.a
if(q.y==null){w=new E.bw(new Float64Array(16))
w.tZ()
v=q.e
v=v.gva(v)
u=q.e
w.or(0,s/2-v.a/2,r/2-u.gva(u).b/2)
q.y=w
q.f.sl(0,w)}w=q.e
w=w.gva(w)
return T.jn(D.cl(C.b0,new T.Jz(new V.a0(s,r,s,r),T.b9L(T.h7(t,t,t,new K.a8J(q.e,t),w)),!1,0.01,q.gaFt(),q.f,q.d),C.D,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,q.gaFG(),t,t,t),C.v,t)},
$S:762}
K.aZS.prototype={
$0(){var w=this.a
w.B(new K.aZR(w))},
$S:1}
K.aZR.prototype={
$0(){var w,v,u=this.a,t=u.x
t.sl(0,t.a)
t=u.f.a
w=u.y
v=u.x
u.r=new R.J(v,new G.nY(t,w),x.d.i("J<W.T>"))
v.e=C.vU
v.am(0,u.gW_())
u.x.oX(0)},
$S:1}
K.aZQ.prototype={
$0(){var w,v=this.a
if(v.e.e==null)return
w=v.c
w.toString
E.bbs(new K.aZP(v),w,x.M)},
$S:1}
K.aZP.prototype={
$1(d){var w=null,v=this.a
return M.R(w,new B.a_v(v.e.e,new K.aZO(v,d),w),C.h,w,w,w,w,150,w,w,C.ik,w,w,1/0)},
$S:763}
K.aZO.prototype={
$1(d){var w=this.a
w.B(new K.aZN(w,d,this.b))},
$S:764}
K.aZN.prototype={
$0(){var w=this.a,v=w.e
w.e=v.aOq(v.e,this.b)
K.bx(this.c,!1).tf(0,null)},
$S:1}
K.aIh.prototype={
$1(d){var w,v=d.c,u=this.a.b,t=J.i(u.e,d)?0.7:1
v.toString
w=u.aim(d,P.X(C.f.aB(255*t),v.gl(v)>>>16&255,v.gl(v)>>>8&255,v.gl(v)&255))
v=H.ak()
v=v?H.aL():new H.aF(new H.aJ())
this.b.zp(0,w,C.fh,v)},
$S:z+8}
O.ama.prototype={
$1(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
O.am9.prototype={
$1(d){var w=this.a
return new P.m(d.a+w.a,d.b+w.b)},
$S:240}
O.am8.prototype={
$1(d){var w=this.a
return d.a===w.a&&d.b===w.b},
$S:z+1}
U.anv.prototype={
$1(d){var w=this.a
return new U.yE(d,J.i(d,w.d),new U.anu(w,d),null)},
$S:z+9}
U.anu.prototype={
$0(){this.a.e.$1(this.b)},
$S:1}
U.aJX.prototype={
$0(){this.a.e.$0()},
$S:1};(function aliases(){var w=T.UA.prototype
w.aoV=w.k
w=K.Vc.prototype
w.apN=w.k})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u
var u
w(u=T.Qp.prototype,"gaDF","aDG",2)
w(u,"gaFv","aFw",3)
w(u,"gaFr","aFs",4)
w(u,"gaDH","aDI",5)
v(u,"gOp","aEZ",0)
v(u,"gW2","aFK",0)
v(u=K.Tj.prototype,"gW_","aF_",0)
w(u,"gaFt","aFu",6)
w(u,"gaFG","aFH",7)})();(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(H.HE,H.he)
u(P.V,[H.a70,T.Q0,O.a8K,O.aV3,O.h5,E.a4w])
u(N.B,[T.Jz,K.rH])
u(N.G,[T.UA,K.Vc])
v(T.Qp,T.UA)
u(H.hR,[T.aRa,K.aZL,K.aZS,K.aZR,K.aZQ,K.aZN,U.anu,U.aJX])
u(N.t,[T.acI,U.XF,U.yE,B.a_v])
v(T.a7t,B.cc)
v(K.Tj,K.Vc)
v(K.aZM,H.iN)
u(H.dM,[K.aZP,K.aZO,K.aIh,O.ama,O.am9,O.am8,U.anv])
v(K.a8J,V.nz)
v(O.Wr,O.a8K)
v(O.aIg,P.JE)
w(T.UA,U.cu)
w(K.Vc,U.cu)
w(O.a8K,P.iX)})()
H.b5(b.typeUniverse,JSON.parse('{"HE":{"he":["xY"],"fc":["xY"]},"Jz":{"B":[],"d":[]},"Qp":{"G":["Jz"]},"acI":{"t":[],"d":[]},"a7t":{"cc":["bw"],"al":[]},"rH":{"B":[],"d":[]},"Tj":{"G":["rH*"]},"a8J":{"al":[]},"Wr":{"iX":["h5*"],"H":["h5*"],"iX.E":"h5*"},"yE":{"t":[],"d":[]},"XF":{"t":[],"d":[]},"a_v":{"t":[],"d":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x=(function rtii(){var w=H.S
return{s:w("A"),Z:w("u<h5*>"),n:w("u<m*>"),t:w("u<d*>"),z:w("ab<G<B>>"),H:w("ab<G<B*>*>"),d:w("nY"),e:w("ir<D*>"),C:w("r8"),x:w("z"),L:w("a4<m>"),y:w("h5*"),G:w("k*"),T:w("z*"),M:w("d*"),Y:w("~()?")}})();(function constants(){C.i6=new P.k(4291677645)
C.Qb=new O.h5(0,0,C.i6)
C.v3=new P.k(4280756007)
C.a1J=new V.a0(2,0,2,0)
C.a2Q=new X.au(57686,"MaterialIcons",null,!1)
C.a4a=new L.b3(C.a2Q,null,C.p,null,null)
C.a3s=new X.au(58659,"MaterialIcons",null,!1)
C.a4U=new L.b3(C.a3s,null,null,null,null)
C.jC=new T.Q0("_GestureType.pan")
C.nv=new T.Q0("_GestureType.scale")
C.ON=new T.Q0("_GestureType.rotate")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bLv","bnb",function(){return H.c([J.bpv(J.b7l($.aq.pe())),J.bpw(J.b7l($.aq.pe())),J.bpu(J.b7l($.aq.pe()))],H.S("u<CS>"))})})()}
$__dart_deferred_initializers__["2L5uJ6tsASZhd+e0dQGjRxRT8nk="] = $__dart_deferred_initializers__.current
