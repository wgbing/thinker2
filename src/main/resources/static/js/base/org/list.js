/**
 * 组织机构js
 */

$(function () {
    addNavTitle("系统管理","组织管理")
    initialPage();
	getGrid();
});
var TreeGrid = {
    id: "dataGrid",
    table: null,
    layerIndex: -1
};

function initialPage() {
	$(window).resize(function() {
		TreeGrid.table.resetHeight({height: $(window).height()-150});
	});
}

function getGrid() {
	var colunms = TreeGrid.initColumn();
    var table = new TreeTable(TreeGrid.id, '/sys/org/list?_' + $.now(), colunms);
    table.setExpandColumn(0);
    table.setIdField("id");
    table.setCodeField("id");
    table.setParentCodeField("parentId");
    table.setExpandAll(false);
    table.setHeight($(window).height()-150);
    table.init();
    TreeGrid.table = table;
}

/**
 * 初始化表格的列
 */
TreeGrid.initColumn = function () {
    var columns = [
        {title: '机构名称', field: 'orgName', align: 'center', valign: 'middle',width:'250px'},
        {title: '机构简称', field: 'shortName', align: 'center', valign: 'middle'},
        {title: '排序号', field: 'sortNo', align: 'center', valign: 'middle', width: '80px'},
        {title: '机构类型', field: 'type', align: 'center', valign: 'middle', width: '100px',
            formatter: function(item, index){
                return CODE_MAP.ORG.TYPE[item.type];
            }
        },
        {title: '更新时间', field: 'updateTime', align: 'center', valign: 'middle', width: '150px'},
        {title: '备注信息', field: 'remark', align: 'center', valign: 'middle'},
        {title: '状态', field: 'enable', align: 'center', valign: 'middle', width: '80px',
            formatter: function(item, index){
                if(item.enable){
                    return "<span class='label label-success'>正常</span>";
                }else{
                    return "<span class='label label-danger'>禁用</span>";
                }
            }
        },
        {title: '操作', align: 'center', valign: 'middle', width: '100px',
            formatter: function(item, index){
                var actions = [];
                actions.push('<a href="javascript:void(0);" onclick="edit('+item.id+')" class="btnList" title="编辑机构"><i class="fa fa-pencil animated bounce" style="color: #69aa46"></i></a>&nbsp;');
                if (item.enable){
                    actions.push('<a href="javascript:void(0);" onclick="disableOrg('+item.id+')" class="btnList" title="停用机构" data-confirm="确认要停用该机构吗？">' +
                        '<i class="glyphicon glyphicon-ban-circle animated bounce" style="color: #dd5a43"></i></a>&nbsp;');
                }else{
                    actions.push('<a href="javascript:void(0);" onclick="enableOrg('+item.id+')" class="btnList" title="启用机构" data-confirm="确认要启用该机构吗">' +
                        '<i class="glyphicon glyphicon-ok-circle animated bounce" style="color: green"></i></a>&nbsp;');
                }

                actions.push('<a href="javascript:void(0);" onclick="deleteOrg('+item.id+')" class="btnList" title="删除机构" data-confirm="确认要删除该机构及所有子机构吗？" data-deltreenode="'+item.id+'">' +
                    '<i class="fa fa-trash-o animated bounce" style="color: #dd5a43"></i></a>&nbsp;');
                actions.push('<a href="javascript:void(0);" onclick="addChildOrg('+item.id+')" class="btnList" title="新增下级机构">' +
                    '<i class="fa fa-plus-square animated bounce" style="color: #3c8dbc"></i></a>&nbsp;');
                return actions.join('');

            }
        }]
    return columns;
};

function edit(orgId){
    layer.open({
        type: 2,
        title: '编辑机构',
        shadeClose: true,
        shade: 0.1,
        maxmin: true, //开启最大化最小化按钮
        area: ['500px', '327px'],
        content: '/sys/org/edit?orgId='+orgId
    });
}

function disableOrg(orgId){
    bootboxConfirm("确定要禁用该机构吗？", function(result) {
        if (result) {
            $.ajax({
                url: "/sys/org/disable",
                data:{
                    orgId:orgId
                },
                type: "GET",
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        refreshTree();
                    } else {
                        toastr.error(data.message, "提示信息");
                    }
                },
                error: ajaxErrorHandler
            });
        }
    });
}

function enableOrg(orgId){
    bootboxConfirm("确定要启用该机构吗？", function(result) {
        if (result) {
            $.ajax({
                url: "/sys/org/enable",
                data:{
                    orgId:orgId
                },
                type: "GET",
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        refreshTree();
                    } else {
                        toastr.error(data.message, "提示信息");
                    }
                },
                error: ajaxErrorHandler
            });
        }
    });
}

function deleteOrg(orgId) {
    bootboxConfirm("确定要删除该机构吗？", function(result) {
        if (result) {
            $.ajax({
                url: "/sys/org/delete",
                data:{
                    orgId:orgId
                },
                type: "GET",
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        refreshTree();
                    } else {
                        toastr.error(data.message, "提示信息");
                    }
                },
                error: ajaxErrorHandler
            });
        }
    });
}

//新增下级机构
function addChildOrg(orgId) {
    layer.open({
        type: 2,
        title: '新增下级机构',
        shadeClose: true,
        shade: 0.1,
        maxmin: true, //开启最大化最小化按钮
        area: ['500px', '371px'],
        content: '/sys/org/add?orgId='+orgId
    });
}

//查询
function showSearch() {
    if($("#searchForm").is(':visible')){
        $("#searchForm").hide();
        $("#btn_search").html($("#btn_search").html().replace("隐藏","查询"));
    }else {
        $("#searchForm").show();
        $("#btn_search").html($("#btn_search").html().replace("查询","隐藏"));
    }
}
//刷新
function refreshTree() {
    TreeGrid.table.refresh();
}
//展开全部或者折叠全部
function expandOrCollapseAll() {
    var isAllExpanded = true;
    $('#dataGrid').treegrid('getAllNodes').each(function() {
        if ($(this).treegrid("isCollapsed")) {
            isAllExpanded = false;
        }
    });

    if(isAllExpanded){
        $('#dataGrid').treegrid('collapseAll');
        $("#btn_expandOrCollapseAll").html("<i class='fa fa-angle-double-down'></i> 展开");
    }else{
        $('#dataGrid').treegrid('expandAll');
        $("#btn_expandOrCollapseAll").html("<i class='fa fa-angle-double-up'></i> 折叠");
    }
}

//新增根机构
function addRootOrg() {
    layer.open({
        type: 2,
        title: '新增机构',
        shadeClose: true,
        shade: 0.1,
        maxmin: true, //开启最大化最小化按钮
        area: ['500px', '371px'],
        content: '/sys/org/add'
    });
}