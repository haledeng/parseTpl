function (it, opt) {
    it = it || {};
    var _$out_= [];
    _$out_.push('<!DOCTYPE html><html><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta charset="text/html;charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"> <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"> <meta http-equiv="Pragma" content="no-cache"> <meta http-equiv="Expires" content="0"> <script>document.charset=\'utf-8\'</script> <style> ', it.css, ' </style></head><body oncontextmenu=self.event.returnValue=false> ', it.html, '</body></html>');
    return _$out_.join('');
}