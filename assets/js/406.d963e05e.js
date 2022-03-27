(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1050:function(s,e,t){"use strict";t.r(e);var a=t(9),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),t("TocHeader"),s._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),s._v(" "),t("p",[s._v("The docs are group into documents sets. Some of these sets are versioned such as\nAirnode ("),t("code",[s._v("airnode/v0.4/")]),s._v(");")]),s._v(" "),t("ul",[t("li",[s._v("Airnode (versioned)")]),s._v(" "),t("li",[s._v("API3")]),s._v(" "),t("li",[s._v("Beacon (versioned)")]),s._v(" "),t("li",[s._v("DAO Members")]),s._v(" "),t("li",[s._v("OIS (versioned)")])]),s._v(" "),t("p",[s._v("All versions of a particular document set are maintained in the api3-docs repo.\nVersioning of a document set is not implemented using traditional tags in a\nGitHub repo. This allows all document set versions to be available while using\nthe docs. It also allows older versions to be updated independently of any other\nversion.")]),s._v(" "),t("h2",{attrs:{id:"base-routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-routes"}},[s._v("#")]),s._v(" Base Routes")]),s._v(" "),t("p",[s._v("All sub-folders in "),t("em",[s._v("/docs")]),s._v(" are base routes except for "),t("code",[s._v("/.vuepress")]),s._v(". Each\nrepresents a logical group called a "),t("em",[s._v("document set")]),s._v(". The\n"),t("code",[s._v("/airnode, /beacon & /ois")]),s._v(" folders contain versions of their respective document\nset.")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docs/\n ├── airnode/\n    ├── pre-alpha/\n    ├── v0.2/\n    ├── v0.3/\n    ├── v0.4/\n    └── v0.5/\n ├── api3/\n ├── beacon\n    └── v0.1/\n ├── common/\n ├── dev/\n ├── dev-airnode/\n └── dao-members\n ├── ois\n    └── v1.0.0/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[s._v("#")]),s._v(" config.js")]),s._v(" "),t("p",[s._v("A versioned sub-route in the version folders for "),t("code",[s._v("/airnode, /beacon and /ois")]),s._v("\nbecomes their respective version. A corresponding versions array is declared in\n"),t("em",[s._v(".vuepress/config.json")]),s._v(" for each.")]),s._v(" "),t("ul",[t("li",[s._v("Update the "),t("code",[s._v("versions, versionBeacon, versionOis")]),s._v(" key in\n"),t("code",[s._v("/doc/.vuepress/config.json")]),s._v(". Provide the version name and url.\n"),t("ul",[t("li",[t("strong",[s._v("name:")]),s._v(" The name of the version to display in the pick-list. A url without\na file will load the root README.md file of the base route by default.")]),s._v(" "),t("li",[t("strong",[s._v("url:")]),s._v(" The entry path to the version, its current route in the navbar.")])])]),s._v(" "),t("li",[s._v("Set the "),t("code",[s._v("latestVersion, latestBeaconVersion & latestOisVersion")]),s._v(" to the start\npath of the latest versions for each.")]),s._v(" "),t("li",[s._v("Set "),t("code",[s._v("airnodeVersionNext")]),s._v(".")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Airnode doc set version pick list.")]),s._v("\n  versions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'pre-alpha'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/pre-alpha/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Next version of airnode, used by /next route.")]),s._v("\n  airnodeVersionNext"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Beacon doc set version pick list.")]),s._v("\n  versionsBeacon"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/beacon/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// OIS doc set version pick list.")]),s._v("\n  versionsOis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'v1."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/ois/v1."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("/' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Latest/current Airnode doc set version.")]),s._v("\n  latestVersion"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Latest/current Beacon doc set version.")]),s._v("\n  latestBeaconVersion"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/beacon/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Latest/current OIS doc set version.")]),s._v("\n  latestOisVersion"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '/ois/v1."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("Set the "),t("code",[s._v("themeConfig.startPath")]),s._v(" to the start path of the latest Airnode version.")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("themeConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   startPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Development Versions")]),s._v(" "),t("p",[s._v("Do not include versions (except for "),t("code",[s._v("airnodeVersionNext")]),s._v(") under development in\nthe config.js file.")])]),s._v(" "),t("h2",{attrs:{id:"create-a-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-version"}},[s._v("#")]),s._v(" Create a Version")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Make a copy of the current version and rename it as needed.")])]),s._v(" "),t("li",[t("p",[s._v("Markdown pages will probably contained hyperlinks to remote GitHub repos.\nMore than likely these links will need updating in the version just created.\nHowever these cannot be updated until the airnode monorepo contains a tag to\nuse for these links.")])]),s._v(" "),t("li",[t("p",[s._v("Adjust the list of sidebars as needed in "),t("code",[s._v("config.json")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("sidebar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      '/airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../airnode/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      ...\n      '/airnode/pre-alpha/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../airnode/pre-alpha/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/beacon/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../beacon/v0."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/ois/v1."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../ois/v1."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/chainapi/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../chainapi/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/dao-members/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../dao-members/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/api3/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../api3/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/dev/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../dev/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      '/dev-airnode/'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require(`../dev-airnode/sidebar.js`)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Change the version in "),t("code",[s._v("package.json")]),s._v(" to the new version. This version\nreflects a release of the docs and is not shown anywhere in the docs.")])]),s._v(" "),t("li",[t("p",[s._v("Update the zip files for the necessary tutorials. See\n"),t("RouterLink",{attrs:{to:"/dev/zip-files.html"}},[s._v("Zip Tutorial Files")]),s._v(".")],1)]),s._v(" "),t("li",[t("p",[s._v("Push branch changes to the repo, pull back to local main branch and run\n"),t("code",[s._v("sh deploy.sh")]),s._v(".")])])]),s._v(" "),t("h2",{attrs:{id:"update-older-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-older-versions"}},[s._v("#")]),s._v(" Update Older Versions")]),s._v(" "),t("p",[s._v("Older versions and non-version base routes can be updated at any time, even\nwhile work progresses on the "),t("strong",[s._v("/next")]),s._v(" base route. It should be noted that such\nupdates will not be reflected in any other base route, if needed they must be\nmanaged separately.")]),s._v(" "),t("h2",{attrs:{id:"dockerimageversion-component"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerimageversion-component"}},[s._v("#")]),s._v(" DockerImageVersion Component")]),s._v(" "),t("p",[s._v("Make sure this component is up-to-date with the deployment images listed on\n"),t("a",{attrs:{href:"https://hub.docker.com/u/api3",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),t("OutboundLink")],1),s._v(";")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);