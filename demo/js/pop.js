'use strict'

var pop = (function(global){
    var pop = {
        popBox: false,
        bgBox: $("<div/>").addClass('popBoxBg'),
        popBoxWrap: $("<div/>").addClass('popBoxWrapper'),
        popH1: $("<h1/>"),
        popH2: $("<h2/>"),
        body: function () {
            return $("body");
        },
        loading_img: $('<img/>').addClass('loading'),
        onBgCallback: null,
        unBgEvent: false,
        appBg: function(){
            this.body().append(this.bgBox);
        },
        appPop: function(t1, t2, btn, load){
            var popBoxWrap = this.popBoxWrap,
                h1 = this.popH1,
                h2 = this.popH2,
                getHtml = function (t) {
                    return /^\<\binput | textarea | select\b/.test(t) ? $(t) : t;
                };
            popBoxWrap.html('');
            popBoxWrap.append(h1.html(getHtml(t1)));
            popBoxWrap.append(h2.html(getHtml(t2)));
            popBoxWrap.append(btn);
            this.body().append(popBoxWrap);
            load && typeof load === 'function' && load(popBoxWrap);
        },
        addEvent: function(){
            if (this.unBgEvent) return false;
            var self = this,
                e = this.popBoxWrap;
            this.bgBox.on("click", function(event){
                event.preventDefault();
                if (self.onBgCallback) self.onBgCallback(e);
                self.close();
            });
        },
        show: function(id, fn, opts){
            if (this.popBox.selector == ("#" + id)) return;
            this.close();
            this.unBgEvent = opts && opts.unBgEvent || false;
            this.popBox = $("#" + id);
            this.popBox.slideDown(300);
            this.appBg();
            this.addEvent();
            fn && typeof fn === "function" && fn(this.popBox);
            console.log(this.unBgEvent);
        },
        close: function(){
            if(this.popBox){
                var e = this.popBoxWrap,
                    bgBox = this.bgBox;
                this.popBox.slideUp(150);
                e.html('').remove();
                this.loading_img.remove();
                bgBox.remove();
                this.popBox = false;
            }
        },
        alert: function(opts){
            var self = this,
                e = this.popBoxWrap,
                t1 = opts.t1 || '',
                t2 = typeof opts === 'string' ? opts : opts.t2 || '',
                load = opts.load || null,
                btnTxt = opts.btnTxt || '知道了',
                onBtnOk = opts.onBtnOk || function() {self.close()},
                onBgCallback = opts.onBgCallback || false,
                popBtnBox = $('<div/>').addClass('alert_btn'),
                popBtn = popBtnBox.append('<a scr="javascript:void(0)" class="ok">' + btnTxt + '</a>');
            this.onBgCallback = onBgCallback ? onBtnOk && typeof onBtnOk === "function" && onBtnOk : null;
            this.unBgEvent = opts.unBgEvent || false;
            this.show();
            e.off().on('click', '.ok', function() {
                onBtnOk && typeof onBtnOk === "function" && onBtnOk(e);
                self.close();
            });
            this.appPop(t1, t2, popBtnBox, load);
        },
        confirm: function(opts){
            var self = this,
                e = this.popBoxWrap,
                btnTxtOk = opts.btnTxtOk || '确定',
                btnTxtClose = opts.btnTxtClose || '取消',
                onBtnOk = opts.onBtnOk || function() {self.close()},
                onBtnClose = opts.onBtnClose || function() {self.close()},
                onBgCallback = opts.onBgCallback || false,
                t1 = opts.t1 || '',
                t2 = opts.t2 || '',
                load = opts.load || null,
                popBtnBox = $('<div/>').addClass('confirm_btn'),
                popBtnClose = popBtnBox.append('<a scr="javascript:void(0)" class="close">' + btnTxtClose + '</a>'),
                popBtnOk = popBtnBox.append('<a scr="javascript:void(0)" class="ok">' + btnTxtOk + '</a>');
            this.onBgCallback = onBgCallback ? onBtnOk && typeof onBtnOk === "function" && onBtnOk : null;
            this.unBgEvent = opts.unBgEvent || false;
            this.show();
            this.appPop(t1, t2, popBtnBox, load);
            e.off().on('click', '.ok', function() {
                onBtnOk && typeof onBtnOk === "function" && onBtnOk(e);
            }).on('click', '.close', function() {
                onBtnClose && typeof onBtnClose === "function" && onBtnClose(e);
            });
        },
        loading: function(opts) {
            var url = opts && opts.url || 'images/loading.gif',
                img = this.loading_img.attr('src', url);
            this.body().append(img);
            this.show();
        }
    };
    return pop;
}(this));