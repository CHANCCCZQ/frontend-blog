---
title: JSON-SCHEMA 的 CRUD 页面配置
description: 基于json的形式去快速生成一个crud页面(vue + element-ui)
lang: zh-CN
---

<!-- [[toc]] -->

## 概述

**crud 包括增删该查等操作，重复性很高，所以考虑抽取出共性的东西，使用 json 的形式去渲染页面，同时考虑提供可视化配置达到无代码的目的**

::: tip
考虑到 template 比较笨重，本次使用 jsx + template 进行组件封装
:::

::: details vue 中 jsx 优缺点

优点:

1. 丰富的指令
2. 模版编译优化
3. 动态 class 和 style 和内置组件

缺点:

1. props 支持度低，部分属性必须通过{ ...{ props: xxx } } 去传递才有效
2. 使用 jsx 后热更新支持度貌似很差，经常需要重新刷新页面
3. 动态 class 和 style 就不支持多个了，只能写一个，不像 template 可以写多个，并且可以动态的
4. template 中好用的动态 component 在 jsx 中无法做到，需要用 render-function 实现
5. 代码复杂起来可读性也很差
6. 无法享受模版编译优化

:::

例子

```vue {15,16,17}
<template>
  <CRUDPage :header="header" :table="table" :dialog="dialog" ref="crud-page" />
</template>

<script>
import CRUDPage from "@/components/JsonTable";

export default {
  name: "CrudPage",
  components: {
    CRUDPage,
  },
  data() {
    return {
      header: {},
      table: {},
      dialog: {},
    };
  },
};
</script>
```

| 字段   |   描述   | 数据类型 | 例子                        |
| ------ | :------: | -------: | --------------------------- |
| header | 查询区域 |   object | [header](./crudPage#header) |
| table  | 表格区域 |   object | [table](./crudPage#table)   |
| dialog | 编辑弹窗 |   object | [dialog](./crudPage#dialog) |

## header 配置

::: tip
查询条件，在 zcs 中最常用的是输入框，选择框，级联选择，日期选择
默认有查询和重置两个按钮，如需要额外操作列，需自行增加 extraActions，参考下方配置
:::

```js
  {
    labelWidth: '100px', // 单个查询条件的宽度，包括label + component
    query: [
      {
        label: '', // 查询条件展示在界面的名称
        prop: '', // 传给接口的字段名
        align: 'start', // 对齐方式 默认是start
        span: 8,  // 整个占据的宽度，采用栅格，一行最多24
        labelWidth: '', // 查询条件名称宽度
        component: '', // 加载的哪种组件，参考组件配置
      }
    ],
    autoRequest: true, // 默认是true 可不传
    beforeSearch: (form) => { // 查询前的回调，用于参数转换 最后需要返回转换后的参数
      return {
        ...form
      };
    }
    extraActions: [ // 可选 额外操作列，追加在查询/重置按钮的后面
      {
        label: '导出', // 按钮文字
        prop: 'export', // 唯一 export 为内置，不要改
        type: 'text', // 按钮的类型
        request: { // 必传
          path: '/coupon/downloadCouponLog', // 路径，不需要带域名，全部都走网关
          method: 'get', // 方法，默认走get
          extraParams: {} // 额外参数，会附加到查询条件一次给接口
        },
        action: ({ selectionRows }) => { // 点击的回调，会返回选中的行

        }
      },
    ],
  }
```

## table 配置

表格操作，因为表格操作可以十分复杂和灵活，所以此处考虑使用 jsx 去封装组件，尽量将 api 保持得跟 element 的一致

```js
{
  list: [ // 考虑到有可能会纯静态展示，所以此处如果传入了list，会用其作为表格的项
    { // 此处是表的行记录
      test: 123
    }
  ],
  pageOption: { // 分页器的选项
    show: true, // 是否显示分页器 默认是true
    simple: true, // 是否是简单分页器 // 默认是true
    pageSize: 10, // 默认页码大小
    total: 0, // 总数
  },
  columns: [ // 表头定义
    {
      prop: 'test', // 取行记录的哪一个字段
      label: 'test', // 表头名
      fixed: undefined, // 是否固定表头
      showOverflowTooltip: true, // 单元格文字是否溢出显示
      width: '', // 单元格宽度
      customHeader(h, props) { // 自定义渲染表头 参考render-function
        return h();
      },
      customContent(h, { row }) { // 自定义渲染单元格 参考render-function
        return h();
      },
    }
  ],
  request: {
    path: '', // 接口地址，不需要带域名，内部默认走网关，非网关域名需要先配置到网关
    method: 'get', // 请求方式 默认是get
    before(list) { // tableData在显示到界面前回调，可选
      return list;
    },
    dataPosition: 'data.rows',
    maxHeight: undefined, // 表格最大高度 数字类型，超出会滚动
    border: true, // 是否需要边框，默认是true
    selection: false, // 是否需要展示多选列 默认是false
    expand: [], // 扩展列，用于行记录过多展示不下的情况， 配置跟columns一样
    actions: [ // 操作列
      {
        label: '编辑',
        prop: 'edit', // edit delete是内置的，其它的prop不要与之冲突
        action(action) { // 点击的回调

        },
        id: 'id', // 删除时传给接口的字段名
      }
    ]
  }
}
```

## dialog 配置

::: warning
TODO 未完成编辑时数据回显
:::

dialog 是比较复杂的一个弹窗，因为它有如下的逻辑

1. 创建和修改，并且需要动态填充接口的字段
2. 动态表单
3. prop 重复性校验

```js
{
  title: '编辑', // 弹窗名称
  labelWidth: '100px', // 每一项的宽度
  formItems: [
    {
      prop: 'header',
      label: '头部动态表单', // 有title可以不要label
      title: '头部条件查询区域', // 如果是动态表单，可以加上title
      dynamic: false, // 是否是动态表单，如果是，那么字段会变成{ header: [{}] }, 否则是{ header: {} }，默认是true
      children: [
        { // 更详细配置查看组件配置
          label: '选项',
          prop: 'options',
          component: 'Input',
          tips: [
            'test',
            'test2'
          ], // tooltip提示 会根据数组一行一行渲染
          show(form) { // 是否显示，用于动态显示，该form是该对象下的，并不是最外层的
            return true
          }
        }
      ], // 如果是动态表单，增加children即可
    }
  ], // 表单项
  request: { // 确定后请求的接口
    path: '',
    method: 'get',
  },
  openInTab: false, // 是否在tab中打开
}
```

::: details 真实例子

```vue
<template>
  <CRUDPage :header="header" :table="table" :dialog="dialog" ref="crud-page" />
</template>

<script>
import CRUDPage from "@/components/JsonCrudPage";

export default {
  name: "CrudPageManage",
  components: {
    CRUDPage,
  },
  data() {
    return {
      header: {
        query: [],
      },
      table: {
        columns: [
          {
            label: "页面名称",
            prop: "name",
          },
        ],
        actions: [
          {
            label: "编辑",
            prop: "edit",
          },
          {
            label: "删除",
            prop: "delete",
            request: {
              url: `/cloud/knowledge-service/answers/pageQuery`,
              method: "post",
              id: "id",
            },
          },
        ],
        list: [
          {
            name: "测试",
          },
        ],
      },
      dialog: {
        formItems: [
          {
            prop: "header",
            label: "头部动态表单",
            title: "头部条件查询区域",
            children: [
              {
                label: "表单类型",
                prop: "component",
                component: "Select",
                clearable: false,
                options: [
                  {
                    label: "输入框",
                    value: "Input",
                  },
                  {
                    label: "选择框",
                    value: "Select",
                  },
                  {
                    label: "时间选择器",
                    value: "Picker",
                  },
                  {
                    label: "富文本编辑器",
                    value: "FullEditor",
                  },
                  {
                    label: "单选框",
                    value: "Radio",
                  },
                  {
                    label: "复选框",
                    value: "Checkbox",
                  },
                ],
              },
              {
                label: "选项值获取方式",
                prop: "optionsSource",
                component: "Radio",
                defaultValue: "static",
                options: [
                  {
                    label: "静态",
                    value: "static",
                  },
                  {
                    label: "动态获取",
                    value: "server",
                  },
                ],
                show(form) {
                  return ["Select", "Checkbox", "Radio"].includes(
                    form.component
                  );
                },
              },
              {
                label: "选项",
                prop: "options",
                min: 1,
                children: [
                  {
                    label: "选项Label",
                    prop: "label",
                    component: "Input",
                  },
                  {
                    label: "选项值",
                    prop: "value",
                    component: "Input",
                  },
                ],
                show(form) {
                  return (
                    ["Select", "Checkbox", "Radio"].includes(form.component) &&
                    form.optionsSource === "static"
                  );
                },
              },
              {
                label: "动态获取选项值",
                prop: "optionsRequest",
                dynamic: false,
                children: [
                  {
                    label: "请求路径",
                    prop: "path",
                    tips: ["以/开头的路径，必须把接口挂载到网关"],
                    component: "Input",
                  },
                  {
                    label: "请求方法",
                    prop: "method",
                    component: "Input",
                  },
                  {
                    label: "数据位置",
                    prop: "dataPosition",
                    component: "Input",
                  },
                  {
                    label: "请求额外参数",
                    prop: "params",
                    component: "Input",
                  },
                ],
                show(form) {
                  return (
                    ["Select", "Checkbox", "Radio"].includes(form.component) &&
                    form.optionsSource === "server"
                  );
                },
              },
              {
                label: "输入框类型",
                prop: "type",
                component: "Select",
                clearable: false,
                defaultValue: "text",
                show(form) {
                  return form.component === "Input";
                },
                options: [
                  {
                    label: "文本域",
                    value: "textarea",
                  },
                  {
                    label: "输入框",
                    value: "text",
                  },
                  {
                    label: "数字输入框",
                    value: "number",
                  },
                  {
                    label: "联想输入框",
                    value: "autoComplete",
                  },
                ],
              },
              {
                label: "文字占位符",
                prop: "placeholder",
                component: "Input",
                defaultValue: "请输入",
                show(form) {
                  return form.component === "Input" && form.type !== "number";
                },
              },
              {
                label: "表单描述",
                prop: "label",
                component: "Input",
              },
              {
                label: "表单描述宽度",
                prop: "labelWidth",
                component: "Input",
                defaultValue: "120px",
              },
              {
                label: "前置表单描述",
                prop: "prependRender",
                component: "Input",
                show(form) {
                  return form.component === "Input" && form.type === "text";
                },
              },
              {
                label: "后置表单描述",
                prop: "appendRender",
                component: "Input",
                show(form) {
                  return form.component === "Input" && form.type === "text";
                },
              },
              {
                label: "表单默认值",
                prop: "defaultValue",
                component: "Input",
              },
              {
                label: "字数限制提示",
                prop: "showWordLimit",
                component: "Select",
                clearable: false,
                defaultValue: 0,
                show(form) {
                  return (
                    form.component === "Input" &&
                    ["text", "textarea"].includes(form.type)
                  );
                },
                options: [
                  {
                    label: "是",
                    value: 1,
                  },
                  {
                    label: "否",
                    value: 0,
                  },
                ],
              },
              {
                label: "允许最大长度",
                prop: "maxLength",
                component: "Input",
                type: "number",
                defaultValue: 999,
                show(form) {
                  return (
                    form.component === "Input" &&
                    ["text", "textarea"].includes(form.type) &&
                    form.showWordLimit === 1
                  );
                },
              },
              {
                label: "默认行数",
                prop: "rows",
                item: "Input",
                type: "number",
                defaultValue: 4,
                show(form) {
                  return form.component === "Input" && form.type === "textarea";
                },
              },
              {
                label: "最小值",
                prop: "min",
                component: "Input",
                type: "number",
                defaultValue: 0,
                show(form) {
                  return form.component === "Input" && form.type === "number";
                },
              },
              {
                label: "最大值",
                prop: "max",
                item: "Input",
                type: "number",
                defaultValue: 999,
                show(form) {
                  return form.component === "Input" && form.type === "number";
                },
              },
              {
                label: "步长",
                prop: "step",
                component: "Input",
                type: "number",
                min: 1,
                defaultValue: 1,
                show(form) {
                  return form.component === "Input" && form.type === "number";
                },
              },
              {
                label: "请求方法",
                prop: "request",
                component: "Input",
                type: "textarea",
                rows: 6,
                tips: [
                  "url是一个完整路径，带域名, url与path不可重复存在，共存时url优先，并且url需要自己区分正式测试环境(也就是你需要配置两次)",
                  "path是相对路径，以/开头，例如: /cloud/xxx-servie/abc, 请求时域名会填充上网关（zcs-gateway-zzc.zuzuche.(net|com)),不需要区分环境",
                  "keyword是调远程模糊搜索接口时传给接口的值对应的字段名",
                  "dataPosition是接口下发回来是在哪个位置，有些接口是下发成{ data: [] }, 也可能是{ response: { data: [] } } 所以此处就可以填写dataPosition为data或者response.data, 默认是data",
                  "method，请求方法，默认是get 网关只只支持get和post",
                ],
                defaultValue: JSON.stringify(
                  {
                    path: "",
                    // url: '',
                    keyword: "keyword", // 搜索时传给接口的字段名。
                    method: "get",
                    dataPosition: "data",
                  },
                  null,
                  2
                ),
                show(form) {
                  return (
                    form.component === "Input" && form.type === "autoComplete"
                  );
                },
              },
              {
                label: "选择器类型",
                prop: "pickerType",
                component: "Select",
                clearable: false,
                options: [
                  {
                    label: "时间",
                    value: "time",
                  },
                  {
                    label: "时间范围选择",
                    value: "timeRange",
                  },
                  {
                    label: "日期",
                    value: "date",
                  },
                  {
                    label: "日期范围选择",
                    value: "dateRange",
                  },
                  {
                    label: "时间日期选择",
                    value: "dateTime",
                  },
                  {
                    label: "时间日期范围选择",
                    value: "dateTimeRange",
                  },
                ],
                show(form) {
                  return form.component === "Picker";
                },
              },
              {
                label: "日期类型类型",
                prop: "dateType",
                component: "Select",
                clearable: false,
                options: [
                  {
                    label: "年",
                    value: "year",
                  },
                  {
                    label: "月",
                    value: "month",
                  },
                  {
                    label: "日",
                    value: "date",
                  },
                ],
                show(form) {
                  return form.component === "Picker" && form.type === "date";
                },
              },
            ],
          },
        ],
        request: {
          path: "",
          method: "post",
        },
      },
    };
  },
};
</script>
```

:::
