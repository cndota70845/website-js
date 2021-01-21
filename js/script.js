Function.prototype.addMethod = function(name,fn){
    this.prototype[name] = fn;
    return this
}
var picNum = 3;
window.onload=function(){  
    var p = document.getElementsByTagName(".banner");
    console.log(p)
}

var BannerFunc = function(){};
BannerFunc.addMethod('cons',function(){

})

