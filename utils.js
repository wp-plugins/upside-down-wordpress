(function() {
	var rdx = {};
	rdx.loadJs = function(file, callback) {
		var parentNode = typeof document.getElementsByTagName('body')[0] != 'undefined' ? document.getElementsByTagName('body')[0] : document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = file;
		if(typeof callback == 'function') {
			script.onload = function() {
				callback();
			}
			script.onreadystatechange = function() {
				if(this.readyState == 'complete' || this.readyState == 'loaded') {
					callback();
				}	
			}
		}
		parentNode.appendChild(script);
		script = null;
	}
	rdx.fun = function() {
		var _4x = {a : '\u0250',b : 'q',c : '\u0254',d : 'p',e : '\u01DD',f : '\u025F',g : '\u0183',h : '\u0265',i : '\u0131',j : '\u027E',k : '\u029E',m : '\u026F',n : 'u',r : '\u0279',t : '\u0287',v : '\u028C',w : '\u028D',y : '\u028E','.' : '\u02D9','[' : ']','(' : ')','{' : '}','?' : '\u00BF','!' : '\u00A1',"\'" : ',','<' : '>','_' : '\u203E',';' : '\u061B','\u203F' : '\u2040','\u2045' : '\u2046','\u2234' : '\u2235','\r' : '\n'}
		var _w3 = function(){ 
			var _0xa944=[ "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x63\x6F\x75\x6E\x74", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x6C\x65\x6E\x67\x74\x68", "\x76\x61\x6C\x75\x65", "\x6F\x72\x69\x67", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x63\x68\x61\x6E\x67\x65\x64"];
			document[_0xa944[0x2]](_0xa944[0x1])[_0xa944[0x0]] = document[_0xa944[0x2]](_0xa944[0x5])[_0xa944[0x4]][_0xa944[0x3]];
			var result=_3043(document[_0xa944[0x2]](_0xa944[0x5])[_0xa944[0x4]][_0xa944[0x6]]());
			document[_0xa944[0x2]](_0xa944[0x7])[_0xa944[0x4]]=result; 
			return result;
		}
		var _3043 = function(_2123) {
			var _0x2baa=["\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x41\x74","","\x6A\x6F\x69\x6E"];
			var last=_2123[_0x2baa[0x0]]-0x1;
			var result= new Array(_2123[_0x2baa[0x0]]);
			for(var i=last;i>=0x0;--i){
				var c=_2123[_0x2baa[0x1]](i);
				var r=_4x[c];
				result[last-i]=r!=undefined?r:c;} ;
				return result[_0x2baa[0x3]](_0x2baa[0x2]);
		}
		for (i in _4x) {_4x[_4x[i]] = i};
		return {
			flip: function(text) {
				return _3043(text);
			}
		}
	}();
	rdx.magic = function() {
		jQuery('a, p, span, h1, h2, h3').each(function(i, el) {
                        for(var i = 0; i < this.childNodes.length; i++) {
                                if(this.childNodes[i].nodeType == 3) {
                                        this.childNodes[i].replaceData(0, this.childNodes[i].data.length, rdx.fun.flip(this.childNodes[i].data));
                                }
                        }
                });
	}
	if(window.jQuery) {
		rdx.magic();	
	}
	else {
		rdx.loadJs('http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js', function() {
			rdx.magic();
		});
	}
})();
