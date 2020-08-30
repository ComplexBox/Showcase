# SimpleBox Showcase

这是 SimpleBox Showcase 的源代码，里面包括了一套完整的用于开始的项目模板。你可以对其中的文件加以修改，制作属于自己的 Showcase。

## 使用方法

首先，你需要将这份源代码下载到你的电脑上。你可以直接点击上面的「Download」按钮并选择「Download ZIP」以下载压缩包，然后在本地解压。如果你希望使用源代码管理，你也可以 Fork 本仓库然后使用 `git clone` 命令。

在下载好的本地仓库文件夹内打开 `pages/index.vue` 即可进行修改。如果你不熟悉 Vue 的语法也没有关系，你完全可以像书写 HTML 那样书写 Vue 文件，记得将 CSS 样式放到 `<style></style>` 标签中。

在文件夹内打开终端并键入 `npm i && npm run dev` 即可在浏览器中实时查看更改。（你需要先安装一份 [Node.JS](https://nodejs.org/) 环境。）

外部资源（如图片等）可以置于 `assets` 文件夹中，并且像初始模板那样，使用 `@/assets/<文件名>` 进行引用。也支持其他 Vue 功能，请参考 [Nuxt.JS](https://zh.nuxtjs.org/) 文档。

项目仓库中加入了 ElementUI 的包，但是并没有默认启用。如果你需要使用 Element，从 `nuxt.config.js` 中取消注释 `css`、`plugins` 和 `transpile` 中含有 `element-ui` 的行。

修改完成之后，在终端中键入 `npm run build` 生成静态页面。完成之后，从 `dist` 文件夹中取出静态站并使用自己喜欢的方式部署。如果你不知应如何部署静态站点，请联系 SimpleBox 的管理寻求帮助。你也可以在使用的时候在 `dist` 文件夹内直接使用终端键入 `npx serve` 临时部署。

我们欢迎 Issues 和 PRs。如果有如何问题，你也可以联系 SimpleBox 的管理。

## 许可

MIT
