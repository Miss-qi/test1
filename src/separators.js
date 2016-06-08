'use strict';

function thousands_separators(num) {
	var ch = num.toString();
	var reg = /^[1-9]\d*$/;
	var reg1 = /^[1-9]\d*\.0+$/;
	var reg2 = /^[1-9]\d*\.\d*[1-9]+$/;
	var start=ch.length%3;
	var temp = ch.substring(0, start);
	if((reg.test(ch))||(reg1.test(ch))){
		var i;
		var tempReg = parseInt(ch);
		ch = tempReg.toString();
		for(i=start;i<ch.length;i+3){
			if (i === 0) {
			temp = ch.substring(i, i + 3);
			}
			else {
			temp += "," + ch.substring(i, i + 3);
			}
		}
	}else if(reg2.test(ch)){
		var myArray=new Array()
		myArray=ch.split(".");
		ch=myArray[0];
		for(i=start;i<ch.length;i+3){
			if (i === 0) {
			temp = ch.substring(i, i + 3);
			}
			else {
			temp += "," + ch.substring(i, i + 3);
			}
		}
		temp=temp+"."+myArray[1];
	}
	return temp;
}

module.exports = thousands_separators;
