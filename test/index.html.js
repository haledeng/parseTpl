function (it, opt) {
    it = it || {};
    var _$out_= [];
    _$out_.push('<ul class="xxl-list">');
       
	var item;
	for (var i = 0, l = data.length; i < l; ++i) { 
		item = data[i];
	
      _$out_.push('<li class="xxl-item border-bottom-1px"><a href="', it.item.targeturl, '" class="xxl-item__left" target="_blank"><img src="', it.pics[i], '" alt=""></a><div class="xxl-item__right"><p class="xxl-item__price"></p><p class="xxl-item__num"></p></div><div class="xxl-item__middle"><a href="', it.item.targeturl, '" class="xxl-item__title" target="_blank">', it.item.title, '</a><p>[', it.item.quxian, ']&nbsp;', it.item.company, '</p></div></li>');
       } 
      _$out_.push('</ul>');
    return _$out_.join('');
}