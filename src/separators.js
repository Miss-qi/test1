'use strict';

function thousands_separators(num) {
	var ch = num.toString();
	var reg = /^([1-9]\d*|[1-9]\d*\.\d+)$/;
	if(reg.test(ch)){
		return ch.replace(/^[1-9]\d*/,function(ch){
			return s.split('').reverse().map(function(v,i){
			if (i % 3 === 0 && i) return v + ',';
			return v;
			}).reverse().join('');
		}).replace(/\.0+$/,'');
	}
}

module.exports = thousands_separators;
