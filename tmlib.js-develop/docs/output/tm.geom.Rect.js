Ext.data.JsonP.tm_geom_Rect({"tagname":"class","name":"tm.geom.Rect","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.geom.Rect","members":{"cfg":[],"property":[{"name":"bottom","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-bottom"},{"name":"centerX","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-centerX"},{"name":"centerY","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-centerY"},{"name":"height","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-height"},{"name":"left","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-left"},{"name":"right","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-right"},{"name":"top","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-top"},{"name":"width","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-width"},{"name":"x","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-x"},{"name":"y","tagname":"property","owner":"tm.geom.Rect","meta":{},"id":"property-y"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.geom.Rect","meta":{},"id":"method-constructor"},{"name":"clone","tagname":"method","owner":"tm.geom.Rect","meta":{},"id":"method-clone"},{"name":"move","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-move"},{"name":"moveBy","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-moveBy"},{"name":"padding","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-padding"},{"name":"resize","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-resize"},{"name":"resizeBy","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-resizeBy"},{"name":"set","tagname":"method","owner":"tm.geom.Rect","meta":{"chainable":true},"id":"method-set"},{"name":"toArray","tagname":"method","owner":"tm.geom.Rect","meta":{},"id":"method-toArray"},{"name":"toCircle","tagname":"method","owner":"tm.geom.Rect","meta":{},"id":"method-toCircle"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"rect.js","href":"rect.html#tm-geom-Rect"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/rect.html#tm-geom-Rect' target='_blank'>rect.js</a></div></pre><div class='doc-contents'><p>四角形クラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bottom' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-bottom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-bottom' class='name not-expandable'>bottom</a><span> : Object</span></div><div class='description'><div class='short'><p>bottom</p>\n</div><div class='long'><p>bottom</p>\n</div></div></div><div id='property-centerX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-centerX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-centerX' class='name not-expandable'>centerX</a><span> : Object</span></div><div class='description'><div class='short'><p>centerX</p>\n</div><div class='long'><p>centerX</p>\n</div></div></div><div id='property-centerY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-centerY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-centerY' class='name not-expandable'>centerY</a><span> : Object</span></div><div class='description'><div class='short'><p>centerY</p>\n</div><div class='long'><p>centerY</p>\n</div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-height' class='name expandable'>height</a><span> : Number</span></div><div class='description'><div class='short'>高さ ...</div><div class='long'><p>高さ</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-left' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-left' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-left' class='name not-expandable'>left</a><span> : Object</span></div><div class='description'><div class='short'><p>left</p>\n</div><div class='long'><p>left</p>\n</div></div></div><div id='property-right' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-right' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-right' class='name not-expandable'>right</a><span> : Object</span></div><div class='description'><div class='short'><p>right</p>\n</div><div class='long'><p>right</p>\n</div></div></div><div id='property-top' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-top' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-top' class='name not-expandable'>top</a><span> : Object</span></div><div class='description'><div class='short'><p>top</p>\n</div><div class='long'><p>top</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-width' class='name expandable'>width</a><span> : Number</span></div><div class='description'><div class='short'>幅 ...</div><div class='long'><p>幅</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-x' class='name expandable'>x</a><span> : Number</span></div><div class='description'><div class='short'>x ...</div><div class='long'><p>x</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-property-y' class='name expandable'>y</a><span> : Number</span></div><div class='description'><div class='short'>y ...</div><div class='long'><p>y</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.geom.Rect-method-constructor' class='name expandable'>tm.geom.Rect</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>クローン ...</div><div class='long'><p>クローン</p>\n</div></div></div><div id='method-move' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-move' class='name expandable'>move</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>移動 ...</div><div class='long'><p>移動</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-moveBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-moveBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-moveBy' class='name expandable'>moveBy</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>現在位置を基準に移動 ...</div><div class='long'><p>現在位置を基準に移動</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-padding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-padding' class='name expandable'>padding</a>( <span class='pre'>top, right, bottom, left</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>パディング. ...</div><div class='long'><p>パディング.\n縮めたりなど. 画面ハミ出しチェック時などに便利</p>\n\n<h2>example</h2>\n\n<pre><code>var circle = TM.$Circle(10, 10, 10);\nvar windowRect = TM.$Rect(0, 0, window.innerWidth, window.innerHiehgt);\nwindowRect.padding(circle.radius);\nif (circle.x &lt; windowRect.left) {\n    // 左にはみ出した時の処理\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>top</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>right</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>bottom</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>left</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-resize' class='name expandable'>resize</a>( <span class='pre'>w, h</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>リサイズ ...</div><div class='long'><p>リサイズ</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>w</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-resizeBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-resizeBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-resizeBy' class='name expandable'>resizeBy</a>( <span class='pre'>w, h</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>現在のサイズを基準にリサイズ ...</div><div class='long'><p>現在のサイズを基準にリサイズ</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>w</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-set' class='name expandable'>set</a>( <span class='pre'>x, y, width, height</span> ) : <a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>セッター ...</div><div class='long'><p>セッター</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.geom.Rect\" rel=\"tm.geom.Rect\" class=\"docClass\">tm.geom.Rect</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-toArray' class='name expandable'>toArray</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>配列に変換 ...</div><div class='long'><p>配列に変換</p>\n</div></div></div><div id='method-toCircle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.geom.Rect'>tm.geom.Rect</span><br/><a href='source/rect.html#tm-geom-Rect-method-toCircle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.geom.Rect-method-toCircle' class='name expandable'>toCircle</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>円に変換 ...</div><div class='long'><p>円に変換</p>\n</div></div></div></div></div></div></div>"});