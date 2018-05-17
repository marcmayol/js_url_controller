
/*
 * Created by Marc Mayol Orell @copyright Marc Mayol Orell
 * GNU Lesser General Public License v3.0
 * https://github.com/marcmayol/
 * https://twitter.com/DFreakReporter @DFreakReporter
 * 
 * Thanks for using
*/
jQuery.extend({
    getParam: function (paramName, resful) {
        var res = "";
        var url =window.location.href;
        var spliter = url.split("/").filter(Boolean);
        var find = false;
        if(paramName != null && paramName != ''){
            // non resful url search
        var searched_value = paramName + "=";
        if (url.indexOf("?") > -1) {
            var query_string = url.substr(url.indexOf("?") + 1);
            var params_query_string = query_string.split("&");
            for (var i = 0; i < params_query_string.length; i++) {
                if (params_query_string[i].substr(0, searched_value.length) == searched_value) {
                    var param = params_query_string[i].split("=");
                    res = param[1];
                    find = true;
                    break;
                }
            }
        }
        if (!find) {
            //resful url seacrh
            
            if (resful != null && resful != '') {
                spliter.forEach(function (item, index) {
                    if (item == paramName) {
                        find = true;
                        res = spliter[index + 1];
                    } else if (spliter[index + resful] == paramName) {
                        
                    }
                });
            }
        }
    }else if((resful != null && resful != '')){
        // return the result of the position if de param name is null and exist a position
        find = true;
        res=spliter[resful];
    }
        if (!find) {
            return null;
        } else {
            return res;
        }
    
    }
});


