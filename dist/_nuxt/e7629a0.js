(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{192:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/characters_index"}},[t._v("Characters")]),t._v(" "),n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/books_index"}},[t._v("Books")]),t._v(" "),n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/houses_index"}},[t._v("Houses")]),t._v(" "),n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/regions_index"}},[t._v("Regions")]),t._v(" "),n("NuxtLink",{staticClass:"two columns button button-primary",attrs:{to:"/battles_index"}},[t._v("Battles")])],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("form",{staticClass:"form-inline my-2 my-lg-0"})])}],!1,null,null,null);e.default=component.exports},193:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[n("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[t._v("\n    Copyright (c) 2021 - Eduard Arauz Rivera\n  ")])])}],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("books",r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{book:o});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(32),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("HeaderView"),t._v(" "),n("div",{staticClass:"container-fluid"},[n("form",[n("fieldset",{attrs:{disabled:"disabled"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"six columns"},[n("label",{attrs:{for:"exampleEmailInput"}},[t._v("Name:")]),t._v(" "),n("input",{staticClass:"u-full-width",attrs:{type:"text",placeholder:"",id:"exampleEmailInput"},domProps:{value:t.book.book_name}}),t._v(" "),n("label",{attrs:{for:"exampleEmailInput"}},[t._v("Description:")]),t._v(" "),n("textarea",{staticClass:"u-full-width",staticStyle:{height:"200px"},attrs:{type:"text",placeholder:"",id:"exampleEmailInput"},domProps:{value:t.book.description}})]),t._v(" "),n("div",{staticClass:"six columns"},[n("img",{staticClass:"u-max-full-width",attrs:{src:"/images/books/"+t.book.img,alt:"boook"}})])])])])]),t._v(" "),n("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:n(192).default,FooterView:n(193).default})}}]);