











function validKeyPath(keyPath) {
    var keys = keyPath.split('.');
    keys.forEach( key => {
        if(!key)
            return false;   
    })
    return true;
}

function getObj(obj, key){
	console.assert(obj[key], 'Given param doesnt exist');
    console.assert(obj[key].constructor == Object, 'Can only unwind an Array inside an Object');
	return obj[key];
}

function getInnerObj(obj, keyPath){
	var keys = keyPath.split('.');
	var tempObj = obj;
	for(var i = 0; i < (keys.length); i++){
        tempObj = getObj(tempObj, keys[i]);
	}
	return tempObj;
}

module.exports = function(obj, keyPath){
   console.assert(obj.constructor == Object, 'Only Objects are allowed to flattenize');
//    console.assert(validKeyPath(keyPath), 'Wrong KeyPath');
   var keys = keyPath.split('.');
   var flattened = JSON.parse(JSON.stringify(obj));
   var inObj = getInnerObj(flattened, keyPath);
   var inPreObj = getInnerObj(flattened, keys.slice(0, -1).join('.'));
   Object.assign(inPreObj, inObj);
   delete inPreObj[keys.slice(-1)[0]];
   return flattened;
   
//    inPreObj[keys[-1]]
//    Object.assign(flattened, flattened[keyPath]);
//    delete flattened[keyPath];
//    return flattened;
}