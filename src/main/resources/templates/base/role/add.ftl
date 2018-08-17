<!DOCTYPE html>
<html>
<head>
    <title>角色管理 | 新增角色</title>
    <#include "../../include/header_css.ftl">
</head>
<body>
<div class="content-wrapper">
    <section class="container-fluid">
        <form method="post" id="addRoleForm">
            <#if _csrf?? && _csrf.parameterName??>
            <input type="hidden" name="${_csrf.parameterName?default('_csrf')}" value="${_csrf.token?default('')}"/>
            </#if>
            <table class="form">
                <tr>
                    <td class="formTitle"><span style="color:red">*&nbsp;</span>角色名称</td>
                    <td class="formValue">
                        <input name="name" type="text" class="form-control" placeholder="角色名称">
                    </td>
                </tr>
                <tr>
                    <td class="formTitle"><span style="color:red;">*&nbsp;</span>角色描述</td>
                    <td class="formValue">
                        <input name="description" type="text" class="form-control" placeholder="角色描述">
                    </td>
                </tr>
                <tr>
                    <td class="formTitle"><span style="color:red">*&nbsp;</span>所属机构</td>
                    <td class="formValue">
                        <input type="text" class="form-control pointer" placeholder="所属机构" onclick="orgTree()" readonly="readonly">
                    </td>
                </tr>
                <tr>
                    <td class="formTitle formTitle-top">备注</td>
                    <td class="formValue">
                        <textarea class="form-control" rows="4" placeholder="备注"></textarea>
                    </td>
                </tr>
            </table>
        </form>
    </section>

    <section class="content-footer">
        <button type="button" id="btn_cancel" class="btn btn-default pull-right">取消</button>
        <button type="button" id="btn_confirm" class="btn btn-info pull-right">确定</button>
        <script>document.getElementsByTagName("body")[0].setAttribute("style", "padding-bottom: 54px !important")</script>
    </section>
</div>

<#include "../../include/footer_js.ftl">
<script src="/js/base/role/add.js"></script>
</body>
</html>
