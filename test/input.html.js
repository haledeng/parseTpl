function (it, opt) {
    it = it || {};
    var _$out_= [];
    _$out_.push('<div id="', it.id, '" class="drop-search"> <input type="text"> <span class="icon-wrap icon-search"> <i class="icon i-preview"></i> </span> <span class="icon-wrap icon-arrow"> <i class="icon i-chevron-down"></i> </span></div>');
    return _$out_.join('');
}