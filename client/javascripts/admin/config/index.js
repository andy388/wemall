let id = 1;

function getId() {
	return '' + (id++);
}

var sidebarData = [
	{
		id    : getId(),
		title : '平台概况',
		children: [
			{
				id    : getId(),
				title : '系统首页',
				url   : '/'
			},
			{
				id    : getId(),
				title : '用户分析',
				url   : '/user/analyze'	
			},
			{
				id    : getId(),
				title : '订单分析',
				url   : '/admin/overview/order/analyze'	
			},
			{
				id    : getId(),
				title : '商品分析',
				url   : '/admin/overview/product/analyze'	
			}
		]
	},
	{
		id    : getId(),
		title : '系统设置',
		children: [
			{
				id    : getId(),
				title : '商城设置'	
			},
			{
				id    : getId(),
				title : '地址设置'	
			},
			{
				id    : getId(),
				title : '支付宝设置'	
			},
			{
				id    : getId(),
				title : '微信设置'	
			},
			{
				id    : getId(),
				title : '短信验证设置'	
			}
		]
	},
    {
        id    : getId(),
        title : '商城管理',
        children: [
            {
                id    : getId(),
                title : '商品分类管理',
                url   : '/admin/category/list' 
            },
            {
                id    : getId(),
                title : '商品管理',
                url   : '/admin/product/list' 
            },
            {
                id    : getId(),
                title : '评论管理'  
            }
        ]
    },
    {
        id    : getId(),
        title : '插件管理',
        children: [
        	{
                id    : getId(),
                title : '插件管理'  
            }	
        ]
    }
];

export default {
	sidebarData: sidebarData
};