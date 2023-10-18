# Changelog

# 2.31 (2023-10-18)
- 支持日志图在 Grafana v10 的展示，日志图可以指定想展示的字段，ycol格式为`字段1,字段2`
- 流图支持多条线，ycol格式为`#:#指标1,指标2`
- 修改表格区域的名字为ycol，使多个表格在同一个图表时，可以区分。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/182537/1697599988480-6ddc340d-9b64-4531-abbf-748eff4c0df9.png#averageHue=%231e2126&clientId=ue09f9ab6-6409-4&from=paste&height=480&id=u63975600&originHeight=960&originWidth=1630&originalType=binary&ratio=2&rotation=0&showTitle=false&size=363161&status=done&style=none&taskId=u01fdf5fe-b863-44da-b5f8-a3ae4512280&title=&width=815)


![image.png](https://cdn.nlark.com/yuque/0/2023/png/182537/1697600032996-be73fb93-a181-4f56-a42d-9ebdba626227.png#averageHue=%23202327&clientId=ue09f9ab6-6409-4&from=paste&height=515&id=u8bdbba62&originHeight=1030&originWidth=2130&originalType=binary&ratio=2&rotation=0&showTitle=false&size=562357&status=done&style=none&taskId=uf3ac8398-be19-4a16-abc7-740eebef31c&title=&width=1065)

- Supports the display of log graphs in Grafana v10. Log graphs can specify the fields you want to display. The ycol format is `Field 1, Field 2`
- The flow graph supports multiple lines, and the ycol format is `#:#Indicator 1,Indicator 2`
- Modify the name of the table area to ycol so that multiple tables can be distinguished when they are in the same chart.

# 2.30 (2023-07-25)
- 优化SLS Grafana插件后端结构，现支持加入自定义Resource API功能。
- 引入gotoSLS功能，用户可以方便地跳转到SLS控制台进行查询，和体验SLS控制台更强大的功能，跳转附带当前Grafana的query、时间信息。在DataSource界面配置roleArn可实现STS跳转，若不配置，则按照正常直接访问逻辑跳转（需要登录控制台）。
   - **注意：若配置STS跳转，为权限安全考虑，需要满足以下两个条件**：
      - **配置DataSource的accessKey对应的用户，需要有**`**AliyunRAMReadOnlyAccess**`**权限**
      - **配置DataSource的roleArn，里面的权限策略，必须有且只有**`**AliyunLogReadOnlyAccess**`
   - 原理参考：[控制台内嵌及分享](https://help.aliyun.com/document_detail/74971.html)
- 优化`xcol`的表现形式，现以下拉框的形式规范推荐输入。兼顾兼容性与自定义输入。
- Variable 编辑页面，SLS DataSource同样引入Monaco Editor，且自动识别grafana版本切换新老显示。
- 修复`xcol`与`ycol`输入框末尾Tips 在Grafana 8.3.x及以下无法显示的问题。
- 修复部分适配问题。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/21832175/1690257487839-24ccca2d-4fad-4011-9f18-300ceb876a26.png#averageHue=%231d2023&clientId=ud2e482ee-2fd6-4&from=paste&height=523&id=uc82855a6&originHeight=523&originWidth=1723&originalType=binary&ratio=1&rotation=0&showTitle=false&size=531654&status=done&style=none&taskId=u6031a614-f570-4a7b-a959-f1fda0001c8&title=&width=1723)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21832175/1690257391475-dae60eef-2191-42ab-90e7-d79b5319dfcd.png#averageHue=%231c1f21&clientId=ud2e482ee-2fd6-4&from=paste&height=349&id=u2c395060&originHeight=349&originWidth=1719&originalType=binary&ratio=1&rotation=0&showTitle=false&size=366996&status=done&style=none&taskId=u22e237d7-d4ad-4a9f-aae2-8ce25dc0915&title=&width=1719)

- Optimize the back-end structure of the SLS Grafana plug-in, and now support the addition of custom Resource API functions.
- Introducing the gotoSLS function, users can easily jump to the SLS console to query and experience more powerful functions of the SLS console, and the jump includes the current Grafana query and time information. Configuring roleArn on the DataSource interface can realize STS jumping. If not configured, it will jump according to the normal direct access logic (login to the console is required).
   - **Note: If STS redirection is configured, the following two conditions need to be met for permission security considerations:**
      - **To configure the user corresponding to the accessKey of the DataSource, `AliyunRAMReadOnlyAccess` permission is required**
      - **Configure the roleArn of DataSource, the permission policy inside must have and only `AliyunLogReadOnlyAccess`**
   - Principle reference: [Console embedding and sharing](https://help.aliyun.com/document_detail/74971.html)
- Optimize the expression form of `xcol`, and now standardize the recommended input in the form of a drop-down box. Take into account compatibility and custom input.
- On the Variable editing page, SLS DataSource also introduces Monaco Editor, and automatically recognizes the grafana version to switch between the new and old displays.
- Fix the problem that Tips at the end of the `xcol` and `ycol` input boxes cannot be displayed in Grafana 8.3.x and below.
- Fix some adaptation problems.



# 2.29 (2023-06-29)
- 全新SLS Query编写体验，引入Monaco Editor，支持语法高亮显示，关键字、函数自动提示等功能。
- SLS Query 框支持多行自动换行和高度扩展。
- `xcol`与`ycol`的输入使用Grafana的Input组件，带来更一致的体验。
- `xcol`与`ycol`输入框末尾增加Tips，介绍常见写法，方便初学者上手。
- 修复一系列版本问题。

<br />

- Brand-new SLS Query writing experience, introduces Monaco Editor, supports syntax highlighting, keyword, function automatic prompting and other functions.
- The SLS Query box supports multi-line word wrapping and height expansion.
- The input of xcol and ycol uses Grafana's Input component to bring a more consistent experience.
- Tips are added at the end of the xcol and ycol input boxes to introduce common writing methods, which is convenient for beginners.
- Fix a series of version issues.

![image.png](https://cdn.nlark.com/yuque/0/2023/png/21832175/1687953008367-f863ccc6-dcf5-4998-bcbc-c18aec0ac059.png#averageHue=%231e2024&clientId=u72ccc8ce-757a-4&from=paste&height=347&id=u3586dcad&originHeight=347&originWidth=1216&originalType=binary&ratio=1&rotation=0&showTitle=false&size=294424&status=done&style=none&taskId=u73ee0591-f289-4f53-8886-1a93e4914e5&title=&width=1216)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21832175/1687953284855-86c636fb-caa6-4163-ab23-0478cfb55b73.png#averageHue=%2323252a&clientId=u72ccc8ce-757a-4&from=paste&height=270&id=u4ec3dd89&originHeight=270&originWidth=564&originalType=binary&ratio=1&rotation=0&showTitle=false&size=112573&status=done&style=none&taskId=uac6a4fe0-65ca-4df2-8a4e-5faa1ea911a&title=&width=564)

# 2.28
- 适配 Grafana 9.4 及以上版本的 Datasource 数据源结构。
<br />
- Adapt to the Datasource data source structure of Grafana 9.4 and above.

# 2.27
- 加了legacy_compatible设置，适配旧版本的返回结构（带response）
<br />
- Added legacy_compatible to adapt to the return structure of the old version (with response)


# 2.0.0 (released)

Initial release.

Support Grafana 8.0.
