function validKeyPath(keyPath) {
    var keys = keyPath.split('.');
    keys.forEach(key => {
        if (!key)
            return false;
    })
    return true;
}

function getObj(obj, key) {
    console.assert(obj[key], 'Given param doesnt exist');
    console.assert(obj[key].constructor == Object, 'Can only unwind an Array inside an Object');
    return obj[key];
}

function getInnerObj(obj, keyPath) {
    var keys = keyPath.split('.');
    var tempObj = obj;
    keys.forEach(key => {
        tempObj = getObj(tempObj, key);
    })
    return tempObj;
}

module.exports = function(obj, keyPath) {
    console.assert(obj.constructor == Object, 'Only Objects are allowed to flattenize');
    var keys = keyPath.split('.');
    var flattened = Object.assign({}, obj);
    var inObj = getInnerObj(flattened, keyPath);
    if (keys.length > 1) {
        var inPreObj = getInnerObj(flattened, keys.slice(0, -1).join('.'));
        Object.assign(inPreObj, inObj);
        delete inPreObj[keys.slice(-1)[0]];
    } else {
        flattened = Object.assign(flattened, inObj);
        delete flattened[keyPath];
    }
    return flattened;
}
