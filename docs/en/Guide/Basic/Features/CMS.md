# CMS

Run local CMS to simplify content management

## Usage

When creating a project through the scaffolding, you will be asked whether to add CMS. Select `yes` and directly run `npm run cms` after initialization to use it.

To supplement the CMS function later, you need to first run `npm install @huyikai/local-cms -D` to install the dependencies. Then add the script command to the `scripts` in `package.json` as `"cms": "node node_modules/@huyikai/local-cms/cms.js docs"`, and then run `npm run cms`.

::: tip
The `docs` in the script command is the execution directory of the CMS, which needs to be consistent with the execution directory of VitePress. In most cases, this directory will use `docs`. You can customize and modify this directory, but you need to pay attention to synchronizing the script command and the initial parameters of `VitePress-Helper` in `config.js`.
:::

## Features

- UI based on Antdv.
- Run through scripts.
- Basic CRUD operations for directories and files.
- Real-time preview and save for Markdown files.

## Plan

- Improve the user experience of the Markdown editor.
- Move files and directories, including drag-and-drop functionality.
- Local file import and batch processing.
- Import content from links.
- Version control.
- Management of static resources (images).

## About CMS

The development of this `local CMS` is because during usage, it was found that even with tools such as navigation bars and sidebars, there are still some maintenance costs, such as managing content and directories in the development tool and editing content in a markdown editor. The aim is to further simplify the operation process, focusing more on content creation and management.

VitePress is a static site generator, commonly used by editing content and then pushing the code to a code repository, and automatically publishing the site through the Pages and workflows of the code repository. It can also be directly placed on a server or deployed through a container.

There are many mature CMS systems, but the reason for developing a simple local CMS instead of using an existing CMS system is as follows.

Most of the CMS systems currently known require servers and databases to be paired for content management and storage.
This usage is more mature, but for the current usage scenario, it is too heavy, adding additional development and usage costs. It also deviates from the user experience of VitePress, and the content obtained through the interfaces provided by the CMS is not SEO-friendly.
Most importantly, they often require additional subscription fees to use.

There is also a Git-based CMS management system, which is more suitable in comparison, but there are also usage and experience issues. Of course, this is not a problem with these CMS systems, it's just that the usage scenario does not fit.

So I believe that in the VitePress usage scenario, what is needed is a simple-to-use local CMS with few concepts and configurations, even as easy to use as a markdown editor.

The CMS in VitePress-Helper is actually a independently developed library, making VitePress more flexible, and also for convenience in other usage scenarios, so the CMS has been separated out.
