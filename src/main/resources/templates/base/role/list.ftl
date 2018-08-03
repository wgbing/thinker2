<!DOCTYPE html>
<html>
<head>
    <title>系统管理 | 角色管理</title>
    <#include "../../include/header_css.ftl">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="hidden-xs">
                <h4>
                    <i class="fa fa-street-view" style="font-size: 20px;"></i>
                    &nbsp; 角色管理
                </h4>
            </div>
        </div>
        <div class="col-md-6">
            <div class="btn-toolbar pull-right">
                <div class="btn-group">
                    <a href="#" class="btn btn-default" id="btn_search" title="查询" onclick="showSearch()"><i class="fa fa-filter"></i> 查询</a>
                    <a href="#" class="btn btn-default" id="btn_refreshTree" title="刷新" onclick="refreshTree()"><i class="fa fa-refresh"></i> 刷新</a>
                    <a href="#" class="btn btn-default" id="btn_expandTreeNode" title="展开" onclick="expandTreeNode()"><i class="fa fa-angle-double-down"></i> 展开</a>
                    <a href="#" class="btn btn-default" id="btn_collapseTreeNode" title="折叠全部" onclick="collapseTreeNode()"><i class="fa fa-angle-double-up"></i> 折叠</a>
                    <a href="#" class="btn btn-default" id="btn_addOrg" title="新增机构" onclick="addRootOrg()"><i class="fa fa-plus"></i> 新增</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- searchForm -->
        <form id="searchForm" name="searchForm" class="form-horizontal" hidden>
            <h5 class="page-header"></h5>
            <div class="col-xs-3">
                <div class="form-group">
                    <label class="control-label col-sm-4" title="">
                        <span class="required hide">*</span> 文本：<i class="fa icon-question hide"></i></label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                    </div>
                </div>
            </div>
            <div class="col-xs-3">
                <div class="form-group">
                    <label class="control-label col-sm-4" title="">
                        <span class="required hide">*</span> 文本：<i class="fa icon-question hide"></i></label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                    </div>
                </div>
            </div>
            <div class="col-xs-3">
                <div class="form-group">
                    <label class="control-label col-sm-4" title="">
                        <span class="required hide">*</span> 文本：<i class="fa icon-question hide"></i></label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                    </div>
                </div>
            </div>
            <div class="col-xs-3">
                <div class="form-group">
                    <label class="control-label col-sm-4" title="">
                        <span class="required hide">*</span> 文本：<i class="fa icon-question hide"></i></label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                    </div>
                </div>
            </div>
        </form>
        <!-- /.searchForm -->
    </div>
</div>

<#include "../../include/footer_js.ftl">
<script src="/js/base/role/list.js"></script>
</body>
</html>