$(function() {
	$(myform).validate({// 需要在此处配置上验证的相关项
		highlight : function(element,errorClass) {
			id = $(element).attr("id") ;	// 产生错误的元素的id
			divObj = id + "Div" ;
			$("#" + divObj).attr("class","form-group has-error") ;
		} ,
		unhighlight : function(element,errorClass) {
			id = $(element).attr("id") ;	// 产生错误的元素的id
			divObj = id + "Div" ;
			$("#" + divObj).attr("class","form-group has-success") ;
		} ,
		errorPlacement : function(error,element) {
			id = $(element).attr("id") ; 
			spanObj = id + "Span" ;
			$("#" + spanObj).empty() ;	// 清空已有元素内容
			$("#" + spanObj).append(error) ; // 在指定元素中追加错误信息
		} ,
		success : function(msg,element) {
			id = $(element).attr("id") ;
			spanObj = id + "Span" ;
			$("#" + spanObj).empty() ;	// 清空已有元素内容
			$("#" + spanObj).append("<span class='text-success glyphicon glyphicon-ok'></span>") ; // 在指定元素中追加错误信息
		} ,
		rules : {	// 编写所有的具体验证规则
			"name" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			}
		}
	}) ;	// 绑定验证
})