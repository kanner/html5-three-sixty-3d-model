/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Date.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Date',builder:function(){var _a=function(_b,_c,_d,_e,_f,_g,_h){var _i=new Date(+_b+(_b<100&&400),(+_c||1)-1,+_d||1,+_e||0,+_f||0,+_g||0,+_h||0);_b<100&&_i.setFullYear(_b);return _i;},_j;function _k(_l){return isNaN(_l)?'??':(_l<10?'0':'')+_l}function _m(_l){return(isNaN(_l)?'???':(_l<10?'00':_l<100?'0':'')+_l);}function _n(_l){return(isNaN(_l)?'????':(_l<10?'000':_l<100?'00':_l<1000?'0':'')+_l);}var _o={ms:1,seconds:1000,minutes:60000,hours:3600000,days:86400000,weeks:604800000,months:2629743840,years:31556926080};var _p=_a.convert=function(_q,_r,_s){return _q*_o[_r+'']/_o[_s+''];};var _t=_a.resolve=function(_i,_u){return(_i instanceof Date?_i:_i==null||_i===''?(_u!==_j?_u:new Date):typeof _i=='string'?_a.fromIso8601(_i)||new Date(_i):new Date(+_i));};_a.equal=function(_v,_w,_x){return _a.inRange(_v,_a.getRangeAround(_w,_x||'day'));};_a.toIso8601=function(_i){return(_n((_i=_t(_i)).getFullYear())+'-'+_k(_i.getMonth()+1)+'-'+_k(_i.getDate()));};_a.fromIso8601=function(_y){
var _z=_y.match(/(\d{2,})-(\d\d?)-(\d\d?)(?:\D|$)/);return(_z?_a(+_z[1]+(_z[1].length<3)*1900,_z[2],_z[3]):_j);};var _A={date:'Invalid Date',YYYY:'????',YY:'??',MM:'??',monthNo:'?',monthName:'?????????',shortMonthName:'???',DD:'??',dayNo:'?',dayNoSuffix:'??',dayName:'????????',shortDayName:'???',hh:'??',h12:'?',hh12:'??',mm:'??',minutes:'?',ss:'??',seconds:'?',zzz:'???',milliseconds:'?',ampm:'??'};_a.format=_a.toPretty=function(_i,_B){var _C=_A;if(!isNaN(_i=_t(_i))){var _D=_n(_i.getFullYear()),_E=_i.getMonth()+1,_d=_i.getDate(),_F=_d%10,_G=_i.getDay(),_H=_i.getHours(),_I=_H>11,_J=(_H-(_I&&12))||12,_f=_i.getMinutes(),_g=_i.getSeconds(),_h=_i.getMilliseconds();_C={date:_i,YYYY:_D,YY:_D.slice(-2),MM:_k(_E),monthNo:_E,monthName:_a.monthNames[_E-1],shortMonthName:_a.shortMonthNames[_E-1],DD:_k(_d),dayNo:_d,dayNoSuffix:_a.dayNoSuffixes[(_F<4&&Math.floor(_d/10)%10!=1)*_F],dayName:_a.dayNames[_G],shortDayName:_a.shortDayNames[_G],hh:_k(_H),h12:_J,hh12:_k(_J),mm:_k(_f),minutes:_f,ss:_k(_g),seconds:_g,zzz:_m(_h),
milliseconds:_h,ampm:_I?'pm':'am'};}return Uize.substituteInto(_B||'{dayName}, {dayNo}{dayNoSuffix} {monthName} {YYYY}',_C,'{KEY}');};_a.getRangeAround=function(_i,_K){var _L=new Date(_i=_t(_i)),_M=new Date(_L);function _N(_O,_P,_Q){_L[_O](_P);_M[_O](_Q);}function _R(_S,_T){var _U=Math.floor(_i['get'+_S]()/_T)*_T;_N('set'+_S,_U,_U+_T-1);}switch(_K||(_K='month')){case'millennium':case'century':case'decade':_R('FullYear',_K=='millennium'?1000:_K=='century'?100:10);case'year':case'quarter':_K=='quarter'?_R('Month',3):_N('setMonth',0,11);case'month':case'week':if(_K=='week'){var _V=_i.getDate()-_i.getDay();_N('setDate',_V,_V+6);}else{_N('setDate',1,_a.getDaysInMonth(_M.getMonth(),_M.getFullYear()));}case'day':case'am/pm':_K=='am/pm'?_R('Hours',12):_N('setHours',0,23);case'hour':_N('setMinutes',0,59);case'minute':_N('setSeconds',0,59);case'second':_N('setMilliseconds',0,999);}return{minValue:_L,maxValue:_M};};_a.inRange=function(_i,_W){if(typeof _i!='number')_i= +_t(_i);
return _i>=_t(_W.minValue,-Infinity)&&_i<=_t(_W.maxValue,Infinity);};_a.isLeapYear=function(_b){return _b%4==0&&(_b%100!=0||_b%400==0);};_a.getDaysInMonth=function(_c,_b){return 30+((2773>>_c)&1)-(_c==1&&(2-_a.isLeapYear(_b)));};_a.isRecent=function(_i,_X,_Y){return _a.inRange(_i,{minValue:_t(_Y)-_p(_X,'days','ms')});};_a.dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];_a.dayNoSuffixes=['th','st','nd','rd'];_a.monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];_a.shortDayNames=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];_a.shortMonthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return _a;}});