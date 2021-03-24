(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48fe3f94"],{"1e63":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"publish_content"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-page-header",{attrs:{content:e.switcher+"文章"},on:{back:e.goBack}})],1),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"articleForm",attrs:{model:e.form,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-tiptap",{attrs:{height:"500",extensions:e.extensions,placeholder:"请输入文章内容"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),a("el-form-item",{attrs:{label:"封面",prop:"cover.type"}},[a("el-radio-group",{model:{value:e.form.cover.type,callback:function(t){e.$set(e.form.cover,"type",t)},expression:"form.cover.type"}},[a("el-radio",{attrs:{label:1}},[e._v("单图")]),a("el-radio",{attrs:{label:3}},[e._v("三图")]),a("el-radio",{attrs:{label:0}},[e._v("无图")]),a("el-radio",{attrs:{label:-1}},[e._v("自动")])],1),e.form.cover.type>0?[a("div",{staticClass:"cover_wrap"},e._l(e.form.cover.type,(function(t,r){return a("update-cover",{key:r,staticClass:"cover",attrs:{imageUrl:e.form.cover.images[r]},on:{updateCover:function(t){return e.onupdateCover(r,t)}}})})),1)]:e._e()],2),a("el-form-item",{attrs:{label:"频道",prop:"channel_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.channel_id,callback:function(t){e.$set(e.form,"channel_id",t)},expression:"form.channel_id"}},e._l(e.channels,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.onSubmit(!1)}}},[e._v(e._s(e.switcher))]),a("el-button",{on:{click:function(t){return e.onSubmit(!0)}}},[e._v("存入草稿")])],1)],1)],1)},n=[],i=a("1da1"),o=(a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cover-container",on:{click:e.showDialog}},[e.Url?a("img",{staticClass:"cover-img",attrs:{src:e.Url,alt:""}}):a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{title:"选择封面",visible:e.dialogVisible,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"素材库",name:"first"}},[a("material-list",{ref:"materList",attrs:{isAddFun:!1,isShowTool:!1,isSelectTool:!0}})],1),a("el-tab-pane",{attrs:{label:"上传图片",name:"second"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.uploadFile}},[e._v("点击上传")]),a("input",{ref:"file",attrs:{type:"file",id:"fileInput",hidden:""},on:{change:e.onFileChange}}),a("div",{staticClass:"image_wrap"},[a("img",{ref:"preview-image",attrs:{src:"",alt:""}})])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confrimUpdate}},[e._v("确 定")])],1)],1)],1)}),s=[],c=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("a77c")),l=a("685c"),u={name:"UpdateCover",props:["imageUrl"],components:{MaterialList:c["a"]},data:function(){return{dialogVisible:!1,activeName:"second",Url:this.imageUrl}},methods:{showDialog:function(){this.dialogVisible=!0},uploadFile:function(){this.$refs.file.click()},onFileChange:function(){var e=this.$refs.file.files[0],t=URL.createObjectURL(e);this.$refs["preview-image"].src=t},confrimUpdate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("second"!==e.activeName){t.next=15;break}if(a=e.$refs.file.files[0],a){t.next=5;break}return e.$message({type:"warning",message:"请选择文件"}),t.abrupt("return");case 5:return r=new FormData,r.append("image",a),t.next=9,Object(l["d"])(r);case 9:n=t.sent,e.dialogVisible=!1,e.Url=n.data.data.url,e.$emit("updateCover",n.data.data.url),t.next=23;break;case 15:if("first"!==e.activeName){t.next=23;break}if(i=e.$refs["materList"],null!==i.select){t.next=20;break}return e.$message({type:"warning",message:"请选择文件"}),t.abrupt("return");case 20:e.Url=i.images[i.select].url,e.$emit("updateCover",i.images[i.select].url),e.dialogVisible=!1;case 23:case"end":return t.stop()}}),t)})))()}},created:function(){}},d=u,m=(a("9d91"),a("2877")),f=Object(m["a"])(d,o,s,!1,null,"1f66bfd9",null),p=f.exports,g=(a("80cc"),a("2423")),b=a("4db9"),v={name:"publish",props:[],components:{"el-tiptap":b["d"],UpdateCover:p},data:function(){return{form:{title:"",content:"",cover:{images:[],type:0},channel_id:""},rules:{title:[{required:!0,message:"请输入标题名称",trigger:"blur"},{min:5,max:30,message:"至少大于5个字符",trigger:"blur"}],"cover.type":[{required:!0,message:"请选择封面类型",trigger:"change"}],channel_id:[{required:!0,message:"请选择频道类型",trigger:"change"}],content:[{validator:function(e,t,a){"<p></p>"===t?a(new Error("内容不能为空")):a()},trigger:"blur"},{required:!0,message:"内容不能为空",trigger:"blur"}]},channels:[],loading:!1,extensions:[new b["c"],new b["m"],new b["k"],new b["f"]({level:5}),new b["a"]({bubble:!0}),new b["n"]({bubble:!0,menubar:!1}),new b["h"],new b["l"],new b["i"],new b["b"],new b["j"],new b["g"]({uploadRequest:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("image",e),t.next=4,Object(l["d"])(a);case 4:return r=t.sent,t.abrupt("return",r.data.data.url);case 6:case"end":return t.stop()}}),t)})))()}})]}},methods:{goBack:function(){this.$router.go(-1)},onSubmit:function(e){var t=this;this.loading=!0,this.$refs["articleForm"].validate(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(r){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r){a.next=3;break}return t.loading=!1,a.abrupt("return",!1);case 3:if(n=t.$route.query.id,i=null,!n){a.next=11;break}return a.next=8,Object(g["a"])(n,t.form,e);case 8:i=a.sent,a.next=14;break;case 11:return a.next=13,Object(g["e"])(t.form,e);case 13:i=a.sent;case 14:201===i.status?(t.$message({message:"".concat(e?"存入草稿草稿":"发布或修改成功"," "),type:"".concat(e?"info":"success"," ")}),t.$refs["articleForm"].resetFields(),t.$router.push("/article")):t.$message({message:"操作失败",type:"error"}),t.loading=!1;case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},loadChannel:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["c"])();case 2:a=t.sent,e.channels=a.data.data.channels;case 4:case"end":return t.stop()}}),t)})))()},loadArticle:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$route.query.id,t.next=3,Object(g["b"])(a);case 3:r=t.sent,e.form=r.data.data;case 5:case"end":return t.stop()}}),t)})))()},onupdateCover:function(e,t){this.form.cover.images[e]=t}},created:function(){this.loadChannel(),this.$route.query.id&&this.loadArticle()},computed:{switcher:function(){return this.$route.query.id?"修改":"发布"}},beforeRouteUpdate:function(e,t,a){t.query.id?(this.$refs["articleForm"].resetFields(),a()):a()}},h=v,w=(a("9388"),Object(m["a"])(h,r,n,!1,null,"69f9b932",null));t["default"]=w.exports},2423:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"g",(function(){return u}));var r=a("4020");function n(e){return Object(r["a"])({url:"/mp/v1_0/articles",method:"get",params:e})}function i(){return Object(r["a"])({url:"/mp/v1_0/channels",method:"get"})}function o(e){return Object(r["a"])({url:"/mp/v1_0/articles/".concat(e),method:"DELETE"})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(r["a"])({url:"/mp/v1_0/articles",method:"post",params:{draft:t},data:e})}function c(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(r["a"])({url:"/mp/v1_0/articles/".concat(e),method:"put",params:{draft:a},data:t})}function l(e){return Object(r["a"])({url:"/mp/v1_0/articles/".concat(e),method:"get"})}function u(e,t){return Object(r["a"])({url:"/mp/v1_0/comments/status",method:"put",params:{article_id:e},data:{allow_comment:t}})}},"5c85":function(e,t,a){},"685c":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var r=a("4020");function n(e){return Object(r["a"])({url:"/mp/v1_0/user/images",method:"post",data:e})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/mp/v1_0/user/images",params:e})}function o(e){return Object(r["a"])({url:"/mp/v1_0/user/images/".concat(e),method:"delete"})}function s(e,t){return Object(r["a"])({url:"/mp/v1_0/user/images/".concat(e),method:"PUT",data:{collect:t}})}},"80cc":function(e,t,a){},"8b5e":function(e,t,a){"use strict";a("c111")},9388:function(e,t,a){"use strict";a("ccf2")},"9d91":function(e,t,a){"use strict";a("5c85")},a77c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"switch_radio"},[a("el-radio-group",{on:{change:e.collectChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio-button",{attrs:{label:!1}},[e._v("全部")]),a("el-radio-button",{attrs:{label:!0}},[e._v("收藏")])],1),e.isAddFun?a("el-button",{attrs:{type:"success"},nativeOn:{click:function(t){e.dialogVisible=!0}}},[e._v("添加素材")]):e._e()],1),a("el-divider"),a("el-row",{attrs:{gutter:20}},e._l(e.images,(function(t,r){return a("el-col",{key:t.id,attrs:{xs:12,sm:8,md:6,lg:4}},[a("div",{staticClass:"img_wrap",on:{click:function(t){e.select=r}}},[a("el-image",{staticStyle:{height:"180px"},attrs:{src:t.url,fit:"cover "}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"20px"}})])]),e.isShowTool?a("div",{staticClass:"img_tool"},[a("el-button",{attrs:{loading:t.isloading,type:"warning",icon:t.is_collected?"el-icon-star-on":"el-icon-star-off",circle:"",size:"mini"},on:{click:function(a){return e.collectImg(t)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(a){return e.deletImg(t.id)}}})],1):e._e(),e.isSelectTool&&e.select===r?a("div",{staticClass:"select_fun"}):e._e()],1)])})),1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total_count,"current-page":e.pNum,"page-size":20},on:{"current-change":e.onPageChange,"update:currentPage":function(t){e.pNum=t},"update:current-page":function(t){e.pNum=t}}}),a("el-dialog",{attrs:{title:"上传素材","append-to-body":!0,visible:e.dialogVisible,width:"50%",center:!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-upload",{attrs:{drag:"",action:"http://api-toutiao-web.itheima.net/mp/v1_0/user/images",multiple:"",name:"image",headers:e.uploadHeaders,"on-success":e.uploadSuccess}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},n=[],i=a("1da1"),o=(a("96cf"),a("159b"),a("685c")),s={name:"MaterialList",props:{isAddFun:{Boolean:Boolean,default:!0},isShowTool:{Boolean:Boolean,default:!0},isSelectTool:{Boolean:Boolean,default:!1}},data:function(){var e=JSON.parse(sessionStorage.getItem("user"))||"",t=e.token;return{radio:!1,images:[],dialogVisible:!1,uploadHeaders:{Authorization:"Bearer "+t},total_count:0,pNum:1,select:null,isActive:!0}},methods:{loadImage:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e&&(t.pNum=e),a.next=3,Object(o["c"])({page:t.pNum,collect:t.radio});case 3:r=a.sent,t.total_count=r.data.data.total_count,n=r.data.data.results,n.forEach((function(e){e.isloading=!1})),t.images=n;case 8:case"end":return a.stop()}}),a)})))()},uploadSuccess:function(){this.dialogVisible=!1,this.loadImage(this.pNum),this.$message({type:"success",message:"上传成功"})},onPageChange:function(){this.loadImage()},collectChange:function(){this.loadImage(1)},deletImg:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该图片, 是否继续?","删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=a.sent,"confirm"!==r){a.next=9;break}return a.next=6,Object(o["b"])(e);case 6:n=a.sent,204===n.status?t.$notify({title:"成功",message:"删除成功",type:"success"}):t.$notify({title:"错误",message:"删除失败",type:"error"}),t.loadImage();case 9:case"end":return a.stop()}}),a)})))()},collectImg:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isloading=!0,r=!e.is_collected,a.next=4,Object(o["a"])(e.id,r);case 4:t.loadImage(),r?t.$notify({title:"成功",message:"收藏成功",type:"success"}):t.$notify({title:"提示",message:"取消收藏",type:"info"}),e.isloading=!1;case 7:case"end":return a.stop()}}),a)})))()}},created:function(){this.loadImage()}},c=s,l=(a("8b5e"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,"6aa67e52",null);t["a"]=u.exports},c111:function(e,t,a){},ccf2:function(e,t,a){}}]);
//# sourceMappingURL=chunk-48fe3f94.9e89903a.js.map