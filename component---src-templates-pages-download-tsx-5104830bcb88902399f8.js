(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[248],{7541:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var l=n(2784),a=n(876),r=n(357),o=n(315),c=n(653),i=n(8447),s=function(e){var t=(0,a.Z)(),n=((0,r.D)(t),(0,i.withPrefix)(c.Lz)),s=void 0;c.hN&&(s=c.ih),c.Pg&&(s=c.ZM);var p=(0,o.i)(e.lang);return l.createElement("div",{className:"main-content-block"},l.createElement("h2",{style:{textAlign:"center"}},e.title),l.createElement("div",{className:"columns"},l.createElement("div",{className:"item raised"},l.createElement("h4",null,"Get Started"),l.createElement("ul",null,l.createElement("li",null,l.createElement(p,{to:"/docs/bootstrap"},"Bootstrap a TS project")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes.html"},"JS to TS")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/typescript-from-scratch.html"},"New to Programming")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes-oop.html"},"OOP to JS")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes-func.html"},"Functional to JS")),l.createElement("li",null,l.createElement(p,{to:"/download"},"Installation")))),l.createElement("div",{className:"item raised"},l.createElement("h4",null,"Handbook"),l.createElement("ul",null,l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/basic-types.html"},"Basic Types")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/advanced-types.html"},"Advanced Types")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/interfaces.html"},"Interfaces")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/variable-declarations.html"},"Variable Declarations")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/functions.html"},"Functions")))),l.createElement("div",{className:"item raised"},l.createElement("h4",null,"Tools"),l.createElement("ul",null,l.createElement("li",null,l.createElement(p,{to:"/play/"},"Playground")),l.createElement("li",null,l.createElement(p,{to:"/tsconfig/"},"TSConfig Reference"))),l.createElement("h4",{style:{marginTop:"28px"}},"Release Notes"),l.createElement("ul",null,s?l.createElement("li",null,l.createElement("a",{href:s},"What's upcoming in ",c.pJ.SC,"?")):null,l.createElement("li",null,l.createElement(p,{to:n},"What's new in ",c.pJ.FA)))),l.createElement("div",{className:"item raised"},l.createElement("h4",null,"Tutorials"),l.createElement("ul",null,l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/asp-net-core.html"},"ASP.NET")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/migrating-from-javascript.html"},"Migrating from JS")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/dom-manipulation.html"},"Working with the DOM")),l.createElement("li",null,l.createElement(p,{to:"/docs/handbook/react-&-webpack.html"},"React & Webpack"))))))}},1367:function(e,t,n){"use strict";n.r(t);var l=n(2784),a=n(4345),r=n(315),o=n(7480),c=n(7541),i=n(653),s=function(e){return document.getElementById("code-example").textContent=e},p=function(e){return document.getElementById("code-run").textContent=e},m=function(e){var t=(0,r.i)(e.pageContext.lang);return l.createElement(o.A,{title:"How to set up TypeScript",description:"Add TypeScript to your project, or install TypeScript globally",lang:e.pageContext.lang},l.createElement("div",{className:"raised main-content-block"},l.createElement("h1",null,"Download TypeScript"),l.createElement("p",null,"TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension."),l.createElement("p",null,"If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.")),l.createElement("div",{className:"raised main-content-block"},l.createElement("h2",null,"TypeScript in Your Project"),l.createElement("p",null,"Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently."),l.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"via npm"),l.createElement("p",null,"TypeScript is available as a ",l.createElement("a",{href:"https://www.npmjs.com/package/typescript"},"package on the npm registry")," available as ",l.createElement("code",null,'"typescript"'),"."),l.createElement("p",null,"You will need a copy of ",l.createElement("a",{title:"Link to the node.js project",href:"https://nodejs.org/en/"},"Node.js")," as an environment to run the package. Then you use a dependency manager like ",l.createElement("a",{title:"Link to the npm package manager",href:"https://www.npmjs.com/"},"npm"),", ",l.createElement("a",{title:"Link to the yarn package manager",href:"https://yarnpkg.com/"},"yarn")," or ",l.createElement("a",{title:"Link to the pnpm package manager",href:"https://pnpm.js.org/"},"pnpm")," to download TypeScript into your project."),l.createElement("div",null,l.createElement("code",{id:"code-example"},"npm install typescript --save-dev"),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{onClick:function(){return s("npm install typescript --save-dev")}},"npm")," ",l.createElement("button",{onClick:function(){return s("yarn add typescript --dev")}},"yarn")," ",l.createElement("button",{onClick:function(){return s("pnpm add typescript -D")}},"pnpm")),l.createElement("p",null,"All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:"),l.createElement("div",null,l.createElement("code",{id:"code-run"},"npx tsc"),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{onClick:function(){return p("npx tsc")}},"npm")," ",l.createElement("button",{onClick:function(){return p("yarn tsc")}},"yarn")," ",l.createElement("button",{onClick:function(){return p("pnpm tsc")}},"pnpm"))),l.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"with Visual Studio"),l.createElement("p",null,"For most project types, you can get TypeScript as a package in Nuget for your MSBuild projects, for example an ASP.NET Core app."),l.createElement("p",null,"When using Nuget, you can ",l.createElement("a",{href:"https://docs.microsoft.com/visualstudio/javascript/tutorial-aspnet-with-typescript"},"install TypeScript through Visual Studio")," using:"),l.createElement("ul",null,l.createElement("li",null,"The Manage NuGet Packages window (which you can get to by right-clicking on a project node)"),l.createElement("li",{style:{marginTop:"20px"}},"The Nuget Package Manager Console (found in Tools > NuGet Package Manager > Package Manager Console) and then running:",l.createElement("br",null),l.createElement("code",{style:{fontSize:"14px"}},"Install-Package Microsoft.TypeScript.MSBuild"))),l.createElement("p",null,"For project types which don't support Nuget, you can use the ",l.createElement("a",{href:i.vs.V.Y}," TypeScript Visual Studio extension"),". You can ",l.createElement("a",{href:"https://docs.microsoft.com/visualstudio/ide/finding-and-using-visual-studio-extensions?view=vs-2019"},"install the extension")," using ",l.createElement("code",null,"Extensions > Manage Extensions")," in Visual Studio.")))),l.createElement("div",{className:"main-content-block",style:{textAlign:"center"}},l.createElement("p",null,"The examples below are for more advanced use cases.")),l.createElement("div",{className:"raised main-content-block"},l.createElement("h2",null,"Globally Installing TypeScript"),l.createElement("p",null,"It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines."),l.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"via npm"),l.createElement("p",null,"You can use npm to install TypeScript globally, this means that you can use the ",l.createElement("code",null,"tsc")," command anywhere in your terminal."),l.createElement("p",null,"To do this, run ",l.createElement("code",null,"npm install -g typescript"),". This will install the latest version (currently ",i.pJ.FA,")."),l.createElement("p",null,"An alternative is to use ",l.createElement("a",{title:"Link to the npx package on npm",href:"https://www.npmjs.com/package/npx"},"npx")," when you have to run ",l.createElement("code",null,"tsc")," for one-off occasions.")),l.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"via Visual Studio Marketplace"),l.createElement("p",null,"You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio."),l.createElement("p",null,"The latest version is available ",l.createElement("a",{href:i.vs.V.Y,title:"Link to the Visual Studio Marketplace for the TypeScript MSBuild extension"},"in the Visual Studio Marketplace"),".")))),l.createElement("div",{className:"raised main-content-block"},l.createElement("h2",null,"Working with TypeScript-compatible transpilers"),l.createElement("p",null,"There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling."),l.createElement("p",null,"Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So it's likely that you will still need to keep the above TypeScript dependency around, and you will want to enable ",l.createElement(t,{to:"/tsconfig#isolatedModules"},l.createElement("code",null,"isolatedModules")),"."),l.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"Babel"),l.createElement("p",null,l.createElement("a",{href:"https://babeljs.io/"},"Babel")," is a very popular JavaScript transpiler which supports TypeScript files via the plugin ",l.createElement("a",{href:"https://babeljs.io/docs/en/babel-preset-typescript#docsNav"},"@babel/plugin-transform-typescript"),".")),l.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"swc"),l.createElement("p",null,l.createElement("a",{href:"https://swc-project.github.io/docs/installation/"},"swc")," is a fast transpiler created in Rust which supports many of Babel's features including TypeScript.")),l.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},l.createElement("h3",null,"Sucrase"),l.createElement("p",null,l.createElement("a",{href:"https://github.com/alangpierce/sucrase#sucrase/"},"Sucrase")," is a Babel fork focused on speed for using in development mode. Sucrase supports TypeScript natively.")))),l.createElement(c.h,{title:"Next Steps",lang:e.pageContext.lang}))};t.default=function(e){return l.createElement(a.R,{locale:e.pageContext.lang},l.createElement(m,e))}},653:function(e){"use strict";e.exports=JSON.parse('{"pJ":{"FA":"4.6","SC":"4.7","ZL":"4.6"},"Pg":false,"hN":true,"Lz":"/docs/handbook/release-notes/typescript-4-6.html","ih":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/","ZM":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-rc/","vs":{"V":{"Y":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-464"}}}')}}]);
//# sourceMappingURL=component---src-templates-pages-download-tsx-5104830bcb88902399f8.js.map