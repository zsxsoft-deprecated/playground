// ==UserScript==
// @name         自动刷题 - Fuck 2015 SafeTree
// @namespace    http://2015sj.safetree.com.cn/
// @version      0.1
// @description  Fuck 2015 SafeTree
// @author       zsx
// @include      http://2015sj.safetree.com.cn/*
// @grant        none
// @updateURL   http://zsxsoft.github.io/playground/userscript/fuck.safetree.meta.js
// @downloadURL http://zsxsoft.github.io/playground/userscript/fuck.safetree.user.js
// ==/UserScript==

(function() {
    var login = function login(username, password, callback) {
        $.getJSON(RegisterUrl + "/SpecialLoginHandler.asmx/SpecialLogin?jsoncallback=?", {
            r: Math.random(),
            account: username,
            password: password
        }, function(json) {
            InsertFnishWorkOne(function() {
                SubmitTestInfo("1|1|1|0|0|3|2|3|3|2|7|2|1|3|5|5|1|1|4|5|2|0|0|0|0|0|0", 3, 100, function() {
                    SubmitFireCheck("1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1", function() {
                        delCookie("2_qm1");
                        delCookie("2_qm2");
                        delCookie("2_qm3");
                        delCookie("InsertID");
                        $.getJSON(Asmx + "/LoginOut?jsoncallback=?", {
                            r: Math.random()
                        }, function() {
                            alert("刷题完成：" + username);
                            callback();
                        });
                    });
                });
            });


        });

        //special.userExit();
    }
    if (!confirm("开启刷题？")) return false;


    var reLogin = function() {

        var userName = prompt("请输入用户名");
        if (userName == "" || userName == null) return;
        var userPassword = prompt("请输入密码");
        login(userName, userPassword, reLogin);

    }

    reLogin();
})();