Ext.data.JsonP.tm_display_BoundingRectRenderer({"tagname":"class","name":"tm.display.BoundingRectRenderer","extends":"tm.display.CanvasRenderer","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.display.BoundingRectRenderer","members":{"cfg":[],"property":[{"name":"","tagname":"property","owner":"tm.display.CanvasRenderer","meta":{"private":true},"id":"property-"},{"name":"canvas","tagname":"property","owner":"tm.display.CanvasRenderer","meta":{},"id":"property-canvas"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.display.BoundingRectRenderer","meta":{},"id":"method-constructor"},{"name":"_checkRenderable","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{"private":true},"id":"method-_checkRenderable"},{"name":"_setRenderFunction","tagname":"method","owner":"tm.display.BoundingRectRenderer","meta":{"private":true},"id":"method-_setRenderFunction"},{"name":"render","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{},"id":"method-render"},{"name":"renderObject","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{},"id":"method-renderObject"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":223,"files":[{"filename":"renderer.js","href":"renderer.html#tm-display-BoundingRectRenderer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["tm.display.CanvasRenderer"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='docClass'>tm.display.CanvasRenderer</a><div class='subclass '><strong>tm.display.BoundingRectRenderer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/renderer.html#tm-display-BoundingRectRenderer' target='_blank'>renderer.js</a></div></pre><div class='doc-contents'><p>バウンディング表示レンダー</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='defined-in docClass'>tm.display.CanvasRenderer</a><br/><a href='source/renderer.html#tm-display-CanvasRenderer-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-property-' class='name not-expandable'></a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>_context     コンテキスト</p>\n</div><div class='long'><p>_context     コンテキスト</p>\n</div></div></div><div id='property-canvas' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='defined-in docClass'>tm.display.CanvasRenderer</a><br/><a href='source/renderer.html#tm-display-CanvasRenderer-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-property-canvas' class='name not-expandable'>canvas</a><span> : Object</span></div><div class='description'><div class='short'><p>キャンバス</p>\n</div><div class='long'><p>キャンバス</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.BoundingRectRenderer'>tm.display.BoundingRectRenderer</span><br/><a href='source/renderer.html#tm-display-BoundingRectRenderer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.display.BoundingRectRenderer-method-constructor' class='name expandable'>tm.display.BoundingRectRenderer</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.display.BoundingRectRenderer\" rel=\"tm.display.BoundingRectRenderer\" class=\"docClass\">tm.display.BoundingRectRenderer</a></div><div class='description'><div class='short'>コンストラクタ ...</div><div class='long'><p>コンストラクタ</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.display.BoundingRectRenderer\" rel=\"tm.display.BoundingRectRenderer\" class=\"docClass\">tm.display.BoundingRectRenderer</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/tm.display.CanvasRenderer-method-constructor' rel='tm.display.CanvasRenderer-method-constructor' class='docClass'>tm.display.CanvasRenderer.constructor</a></p></div></div></div><div id='method-_checkRenderable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='defined-in docClass'>tm.display.CanvasRenderer</a><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-_checkRenderable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-_checkRenderable' class='name expandable'>_checkRenderable</a>( <span class='pre'>obj</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_setRenderFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.BoundingRectRenderer'>tm.display.BoundingRectRenderer</span><br/><a href='source/renderer.html#tm-display-BoundingRectRenderer-method-_setRenderFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.BoundingRectRenderer-method-_setRenderFunction' class='name expandable'>_setRenderFunction</a>( <span class='pre'>obj</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/tm.display.CanvasRenderer-method-_setRenderFunction' rel='tm.display.CanvasRenderer-method-_setRenderFunction' class='docClass'>tm.display.CanvasRenderer._setRenderFunction</a></p></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='defined-in docClass'>tm.display.CanvasRenderer</a><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-render' class='name expandable'>render</a>( <span class='pre'>root</span> )</div><div class='description'><div class='short'>描画 ...</div><div class='long'><p>描画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderObject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.display.CanvasRenderer' rel='tm.display.CanvasRenderer' class='defined-in docClass'>tm.display.CanvasRenderer</a><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-renderObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-renderObject' class='name expandable'>renderObject</a>( <span class='pre'>obj</span> )</div><div class='description'><div class='short'>オブジェクトを描画 ...</div><div class='long'><p>オブジェクトを描画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});