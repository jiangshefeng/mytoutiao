(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20083638"],{"685c":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=a("4020");function i(e){return Object(n["a"])({url:"/mp/v1_0/user/images",method:"post",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/mp/v1_0/user/images",params:e})}function r(e){return Object(n["a"])({url:"/mp/v1_0/user/images/".concat(e),method:"delete"})}function s(e,t){return Object(n["a"])({url:"/mp/v1_0/user/images/".concat(e),method:"PUT",data:{collect:t}})}},"8b5e":function(e,t,a){"use strict";a("c111")},a77c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"switch_radio"},[a("el-radio-group",{on:{change:e.collectChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio-button",{attrs:{label:!1}},[e._v("全部")]),a("el-radio-button",{attrs:{label:!0}},[e._v("收藏")])],1),e.isAddFun?a("el-button",{attrs:{type:"success"},nativeOn:{click:function(t){e.dialogVisible=!0}}},[e._v("添加素材")]):e._e()],1),a("el-divider"),a("el-row",{attrs:{gutter:20}},e._l(e.images,(function(t,n){return a("el-col",{key:t.id,attrs:{xs:12,sm:8,md:6,lg:4}},[a("div",{staticClass:"img_wrap",on:{click:function(t){e.select=n}}},[a("el-image",{staticStyle:{height:"180px"},attrs:{src:t.url,fit:"cover "}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"20px"}})])]),e.isShowTool?a("div",{staticClass:"img_tool"},[a("el-button",{attrs:{loading:t.isloading,type:"warning",icon:t.is_collected?"el-icon-star-on":"el-icon-star-off",circle:"",size:"mini"},on:{click:function(a){return e.collectImg(t)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(a){return e.deletImg(t.id)}}})],1):e._e(),e.isSelectTool&&e.select===n?a("div",{staticClass:"select_fun"}):e._e()],1)])})),1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total_count,"current-page":e.pNum,"page-size":20},on:{"current-change":e.onPageChange,"update:currentPage":function(t){e.pNum=t},"update:current-page":function(t){e.pNum=t}}}),a("el-dialog",{attrs:{title:"上传素材","append-to-body":!0,visible:e.dialogVisible,width:"50%",center:!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-upload",{attrs:{drag:"",action:"http://api-toutiao-web.itheima.net/mp/v1_0/user/images",multiple:"",name:"image",headers:e.uploadHeaders,"on-success":e.uploadSuccess}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},i=[],o=a("1da1"),r=(a("96cf"),a("159b"),a("685c")),s={name:"MaterialList",props:{isAddFun:{Boolean:Boolean,default:!0},isShowTool:{Boolean:Boolean,default:!0},isSelectTool:{Boolean:Boolean,default:!1}},data:function(){var e=JSON.parse(sessionStorage.getItem("user"))||"",t=e.token;return{radio:!1,images:[],dialogVisible:!1,uploadHeaders:{Authorization:"Bearer "+t},total_count:0,pNum:1,select:null,isActive:!0}},methods:{loadImage:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e&&(t.pNum=e),a.next=3,Object(r["c"])({page:t.pNum,collect:t.radio});case 3:n=a.sent,t.total_count=n.data.data.total_count,i=n.data.data.results,i.forEach((function(e){e.isloading=!1})),t.images=i;case 8:case"end":return a.stop()}}),a)})))()},uploadSuccess:function(){this.dialogVisible=!1,this.loadImage(this.pNum),this.$message({type:"success",message:"上传成功"})},onPageChange:function(){this.loadImage()},collectChange:function(){this.loadImage(1)},deletImg:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该图片, 是否继续?","删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=a.sent,"confirm"!==n){a.next=9;break}return a.next=6,Object(r["b"])(e);case 6:i=a.sent,204===i.status?t.$notify({title:"成功",message:"删除成功",type:"success"}):t.$notify({title:"错误",message:"删除失败",type:"error"}),t.loadImage();case 9:case"end":return a.stop()}}),a)})))()},collectImg:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isloading=!0,n=!e.is_collected,a.next=4,Object(r["a"])(e.id,n);case 4:t.loadImage(),n?t.$notify({title:"成功",message:"收藏成功",type:"success"}):t.$notify({title:"提示",message:"取消收藏",type:"info"}),e.isloading=!1;case 7:case"end":return a.stop()}}),a)})))()}},created:function(){this.loadImage()}},c=s,l=(a("8b5e"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"6aa67e52",null);t["a"]=u.exports},c111:function(e,t,a){},e9f7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-page-header",{attrs:{content:"素材管理"},on:{back:e.goBack}})],1),a("material-list")],1)],1)},i=[],o=a("a77c"),r={name:"material",components:{MaterialList:o["a"]},props:[],data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}},created:function(){}},s=r,c=a("2877"),l=Object(c["a"])(s,n,i,!1,null,"77e70fb2",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-20083638.86d95b2d.js.map