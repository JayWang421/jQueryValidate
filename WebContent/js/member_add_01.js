$(function() {
	$(myform).validate({// 需要在此处配置上验证的相关项
/*		messages : {	// 个性化提示信息
			"name" : {
				required : "姓名不允许为空！"
			}
		} ,*/
		rules : {	// 编写所有的具体验证规则
			"name" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			}
		}
	}) ;	// 绑定验证
})