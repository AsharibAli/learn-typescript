var mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//For function types to correctly type-check, the name of the parameters do not need to match. 
//Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other. 
//# sourceMappingURL=app.js.map