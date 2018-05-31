
/*
 * Created by Marc Mayol Orell @copyright Marc Mayol Orell
 * GNU Lesser General Public License v3.0
 * https://github.com/marcmayol/
 * https://twitter.com/DFreakReporter @DFreakReporter
 * 
 * Thanks for using
 */
var urlReader = new Object();
urlReader.url = window.location.href;
urlReader.spliter_url = urlReader.url.split("/").filter(Boolean);
urlReader.getParam = function (param) {
    if (this.url.indexOf("?") > -1) {
        var params_query_string = this.url.substr(this.url.indexOf("?") + 1).split("&");
        for (var i = 0; i < params_query_string.length; i++) {
            if (params_query_string[i].substr(0, (param + "=").length) === (param + "=")) {
                var param = params_query_string[i].split("=");
                return param[1];
            }
        }
    } else {
        if (!isNaN(parseInt(param))) {
            return this.spliter_url[parseInt(param)];
        } else {
            for (var i = 0; i < this.spliter_url.length; i++) {

                if (this.spliter_url[i] === param) {
                    return this.spliter_url[i + 1];
                }
            }
        }
    }
    return null;
};

urlReader.getUrl = function () {
    return this.url;
};
urlReader.getUrlValues = function (resful) {
    if (resful) {
        return urlReader.spliter_url;
    } else {
        var res = [];
        var params_query_string = this.url.substr(this.url.indexOf("?") + 1).split("&");
        for (var i = 0; i < params_query_string.length; i++) {
            res[i] = params_query_string[i].split("=")[1];
        }
        return res;
    }
};
urlReader.addParam = function (parramName, value, resful) {
    if (resful) {
        if (value !== '' && value !== null) {
            this.url += "/" + parramName + "/" + value;
        } else {
            this.url += "/" + parramName;
        }
        this.spliter_url = this.url.split("/").filter(Boolean);
    } else {
        this.url += "&" + parramName + "=" + value;
        this.spliter_url = this.url.split("/").filter(Boolean);
    }
};
urlReader.getParamIndex = function (paramName) {
    this.spliter_url.forEach(function (item, index) {
        if (item === paramName) {
            return index;
        }
    });
    for (var i = 0; i < this.spliter_url.length; i++) {
        if (this.spliter_url[i] === paramName) {
            return i;
        }
    }
    return "not found";
};
urlReader.removeParam = function (paramName, resful, more) {
    if (resful) {
        var rm = this.getParamIndex(paramName);
        this.spliter_url[rm] = false;
        if (more)
            this.spliter_url[rm + 1] = false;
        this.spliter_url = this.spliter_url.filter(Boolean);
        var url_new = window.location.protocol + "//" + window.location.host;
        this.spliter_url.forEach(function (item, index) {
            if (item !== window.location.host && item !== window.location.protocol)
                url_new += "/" + item;
        });
        this.url = url_new;
        this.spliter_url = this.url.split("/").filter(Boolean);
    } else {
        var query_string = this.url.substr(this.url.indexOf("?") + 1);
        var params_query_string = query_string.split("&");
        for (var i = 0; i < params_query_string.length; i++) {
            if (params_query_string[i].split("=")[0] === paramName) {
                params_query_string[i] = '';
                params_query_string = params_query_string.filter(Boolean);
                i = params_query_string.length;
            }
        }
        var url_new = window.location.href.split("?")[0];
        if (params_query_string.length > 1) {
            for (var i = 0; i < params_query_string.length; i++) {
                if (i < 1) {
                    if (params_query_string[i] !== '' && params_query_string[i] !== null)
                        url_new += "?" + params_query_string[i]
                } else {
                    if (params_query_string[i] !== '' && params_query_string[i] !== null)
                        url_new += "&" + params_query_string[i];
                }
            }
            this.url = url_new;
        }
    }
};
urlReader.clean=function(resful){
    (resful===true)?this.url=window.location.protocol + "//" + window.location.host:this.url=window.location.href.split("?")[0];   
};
urlReader.updateParam = function (paramName,value, resful, more) {
    if (resful) {
        var rm = this.getParamIndex(paramName);
        this.spliter_url[rm] = paramName;
        if (more)
            this.spliter_url[rm + 1] = value;
        this.spliter_url = this.spliter_url.filter(Boolean);
        var url_new = window.location.protocol + "//" + window.location.host;
        this.spliter_url.forEach(function (item, index) {
            if (item !== window.location.host && item !== window.location.protocol)
                url_new += "/" + item;
        });
        this.url = url_new;
        this.spliter_url = this.url.split("/").filter(Boolean);
    } else {
        var query_string = this.url.substr(this.url.indexOf("?") + 1);
        var params_query_string = query_string.split("&");
        for (var i = 0; i < params_query_string.length; i++) {
            if (params_query_string[i].split("=")[0] === paramName) {
                params_query_string[i] = paramName+"="+value;
                params_query_string = params_query_string.filter(Boolean);
                i = params_query_string.length;
            }
        }
        var url_new = window.location.href.split("?")[0];
        if (params_query_string.length > 1) {
            for (var i = 0; i < params_query_string.length; i++) {
                if (i < 1) {
                    if (params_query_string[i] !== '' && params_query_string[i] !== null)
                        url_new += "?" + params_query_string[i]
                } else {
                    if (params_query_string[i] !== '' && params_query_string[i] !== null)
                        url_new += "&" + params_query_string[i];
                }
            }
            this.url = url_new;
        }
    }
};
if (window.jQuery) {
    jQuery.extend(urlReader);
}


