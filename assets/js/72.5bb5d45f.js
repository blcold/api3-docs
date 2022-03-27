(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{546:function(e,s,t){e.exports=t.p+"assets/img/security-schemes.635d0196.png"},812:function(e,s,t){"use strict";t.r(s);var a=t(9),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Build an Airnode")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("Airnode can pass along security information (schemes) when making calls to API\noperations. These come in two forms, "),a("em",[e._v("authentication security schemes")]),e._v(" such as\n"),a("code",[e._v("apiKey or http")]),e._v(" and "),a("em",[e._v("relay security schemes")]),e._v(" which is information extracted\nfrom the request.")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:t(546),alt:"api-integration-ois"}}),e._v(" "),a("br")]),e._v(" "),a("ol",[a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"blue"}},[e._v("The Airnode uses "),a("i",[a("b",[e._v("authentication security schemes")])]),e._v(" to authenticate itself to an API operation of which the values are know only to the Airnode.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line",staticStyle:{color:"green"}},[e._v("The Airnode can forward "),a("i",[a("b",[e._v("relay security scheme")])]),e._v(" information from a requester's request to the API operation.")])])])]),e._v(" "),a("h2",{attrs:{id:"supported-security-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-security-schemes"}},[e._v("#")]),e._v(" Supported Security Schemes")]),e._v(" "),a("p",[e._v("Each security scheme has a certain type specified by the required "),a("code",[e._v("type")]),e._v("\nproperty inside the security scheme definition. The following security scheme\ntypes are supported.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#apikey"}},[e._v("apiKey")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#http"}},[e._v("http")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#relayrequesteraddress"}},[e._v("relayRequesterAddress")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#relaychainid"}},[e._v("relayChainId")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#relaychaintype"}},[e._v("relayChainType")])],1)]),e._v(" "),a("p",[a("strong",[e._v("Authentication Security Schemes")])]),e._v(" "),a("p",[e._v("An Airnode can use the following security scheme types to authenticate itself.\nThis is different then "),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/apply-auth.html"}},[e._v("Authorization")]),e._v(" of requesters to access\nthe Airnode.")],1),e._v(" "),a("ul",[a("li",[e._v("apiKey")]),e._v(" "),a("li",[e._v("http (basic & bearer)")])]),e._v(" "),a("p",[a("strong",[e._v("Relay Security Schemes")])]),e._v(" "),a("p",[e._v('In addition to authenticating itself, Airnode can "relay" security information\nabout a request to an API operation. For relay security schemes you do not\nprovide any values as they are extracted from the request by Airnode.')]),e._v(" "),a("ul",[a("li",[e._v("relayRequesterAddress")]),e._v(" "),a("li",[e._v("relayChainId")]),e._v(" "),a("li",[e._v("relayChainType")])]),e._v(" "),a("h3",{attrs:{id:"apikey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apikey"}},[e._v("#")]),e._v(" apiKey")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("apiKey")]),e._v(" security schema type allows you to define an API key for your API.\nIt is an object which consists of the following fields")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type")]),e._v(" must be "),a("code",[e._v("apiKey")])]),e._v(" "),a("li",[a("code",[e._v("in")]),e._v(" can be one of the "),a("code",[e._v("query")]),e._v(", "),a("code",[e._v("header")]),e._v(" or "),a("code",[e._v("cookie")]),e._v(". This value specifies how\nshould the value be sent to your API.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v('Using the "query" option')]),e._v(" "),a("p",[e._v("When using the "),a("code",[e._v("query")]),e._v(" option, the API key will be sent in the request body for\nPOST requests and in query string for GET requests.")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(' is the name of the API key that should be sent to your API. For example\n"X-Api-Key".')])]),e._v(" "),a("p",[e._v("Schema definition example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-api-key"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("and "),a("code",[e._v("apiCredentials")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisTitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Ois Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${X_API_KEY}"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// interpolated from secrets.env")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" http")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("http")]),e._v(" security schema type allows you to define a "),a("code",[e._v("basic")]),e._v(" or "),a("code",[e._v("bearer")]),e._v("\nauthentication. It consists of the following fields")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type")]),e._v(" must be "),a("code",[e._v("http")])]),e._v(" "),a("li",[a("code",[e._v("scheme")]),e._v(" is either "),a("code",[e._v("basic")]),e._v(" or "),a("code",[e._v("bearer")])])]),e._v(" "),a("p",[e._v("Schema definition example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresBasicAuth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scheme"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"basic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("and "),a("code",[e._v("apiCredentials")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisTitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Ois Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"requiresBasicAuth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${BASE_64_ENCODED_BASIC_AUTH}"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// interpolated from secrets.env")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v('This security schema will always be sent in the headers. The security scheme\nvalue should be base64 encoded value "username:password" for '),a("code",[e._v("basic")]),e._v(" auth and\nthe encoded token for "),a("code",[e._v("bearer")]),e._v(" auth.")]),e._v(" "),a("h3",{attrs:{id:"relayrequesteraddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayrequesteraddress"}},[e._v("#")]),e._v(" relayRequesterAddress")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("relayRequesterAddress")]),e._v(" security schema type instructs Airnode to forward\nthe "),a("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/requester.html"}},[e._v("requester")]),e._v(" address to your API. The schema\ndefinition is similar to the "),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#apikey"}},[a("code",[e._v("apiKey")])]),e._v(", however the\n"),a("code",[e._v("type")]),e._v(" must be "),a("code",[e._v("relayRequesterAddress")]),e._v(".")],1),e._v(" "),a("p",[e._v("Schema definition example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"relayRequesterAddress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"requesterAddress"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("since this value will be relayed by Airnode, there is no "),a("code",[e._v("apiCredentials")]),e._v("\ndefinition.")]),e._v(" "),a("p",[e._v("Note that Airnode is just relaying (forwarding) the requester address to your\nAPI and does not perform any additional logic. If you intend to implement some\nlogic based on the requester, you need to do so in the implementation of your\nAPI.")]),e._v(" "),a("h3",{attrs:{id:"relaychainid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relaychainid"}},[e._v("#")]),e._v(" relayChainId")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("relayChainId")]),e._v(" security schema type instructs Airnode to forward the chain\nid to your API. The schema definition is similar to the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#apikey"}},[a("code",[e._v("apiKey")])]),e._v(", however the "),a("code",[e._v("type")]),e._v(" must be "),a("code",[e._v("relayChainId")]),e._v(".")],1),e._v(" "),a("p",[e._v("Schema definition example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"relayChainId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"chainId"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("since this value will be relayed by Airnode, there is no "),a("code",[e._v("apiCredentials")]),e._v("\ndefinition.")]),e._v(" "),a("h3",{attrs:{id:"relaychaintype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relaychaintype"}},[e._v("#")]),e._v(" relayChainType")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("relayChainType")]),e._v(" security schema type instructs Airnode to forward the chain\ntype to your API. The schema definition is similar to the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#apikey"}},[a("code",[e._v("apiKey")])]),e._v(", however the "),a("code",[e._v("type")]),e._v(" must be\n"),a("code",[e._v("relayChainType")]),e._v(".")],1),e._v(" "),a("p",[e._v("Schema definition example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"relayChainType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"chainType"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("since this value will be relayed by Airnode, there is no "),a("code",[e._v("apiCredentials")]),e._v("\ndefinition.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("OIS security is inspired by OAS security practices. This is implemented using\nthe security schemes and security field. All supported security schemes are\ndescribed in detail in the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#supported-security-schemes"}},[e._v("supported security schemes section")]),e._v(".\nWorking with security schemes can be described in three steps.")],1),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#step-1-define-the-security-schemes-for-an-ois"}},[e._v("Define the security schemes for an OIS")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#step-2-turn-on-the-defined-security-schemes"}},[e._v("Turn on the defined security schemes")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#step-3-specify-the-values-for-the-defined-security-schemes"}},[e._v("Specify the values for the defined security schemes")])],1)]),e._v(" "),a("p",[e._v("Following is an example of a partial "),a("code",[e._v("config.json")]),e._v(" which demonstrates the usage\nof security scheme and security field.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ois"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My OIS title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiSpecifications"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"components"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-api-key"')]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiCredentials"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisTitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My OIS title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemeValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${X_API_KEY}"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("h3",{attrs:{id:"step-1-define-the-security-schemes-for-an-ois"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-define-the-security-schemes-for-an-ois"}},[e._v("#")]),e._v(" Step #1: Define the security schemes for an OIS")]),e._v(" "),a("p",[e._v("You use "),a("code",[e._v("ois[n].apiSpecifications.components.securitySchemes")]),e._v(" to define the\nsecurity schemes your API will use. Consider the partial "),a("code",[e._v("config.json")]),e._v(' above\nthat declares a security scheme named "requiresXApiKey". This scheme declares\nthat the API requires an API key that must exist in the HTTP header named\n"X-api-key".')]),e._v(" "),a("h3",{attrs:{id:"step-2-turn-on-the-defined-security-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-turn-on-the-defined-security-schemes"}},[e._v("#")]),e._v(" Step #2: Turn on the defined security schemes")]),e._v(" "),a("p",[e._v("When the scheme is defined, it is not turned on by default. You need to\nexplicitly list the security schemes you intend to use in the "),a("code",[e._v("security")]),e._v(" field\nlocated in "),a("code",[e._v("ois[n].apiSpecifications.security")]),e._v(" object. The keys in this object\nare the names of security schemes to be used. Use empty array ("),a("code",[e._v("[]")]),e._v(") as values\nfor now.")]),e._v(" "),a("p",[a("em",[e._v("Be aware that this step seems like extra work since there is no reason to\ndefine a security schema that will not be used. However, Airnode may support\n"),a("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-requirement-object",target:"_blank",rel:"noopener noreferrer"}},[e._v("more complex authentication"),a("OutboundLink")],1),e._v("\nlogic in the future and using "),a("code",[e._v("[]")]),e._v(" allows its implementation without a breaking\nchange.")])]),e._v(" "),a("h3",{attrs:{id:"step-3-specify-the-values-for-the-defined-security-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-specify-the-values-for-the-defined-security-schemes"}},[e._v("#")]),e._v(" Step #3: Specify the values for the defined security schemes")]),e._v(" "),a("p",[e._v("After defining and turning on a security scheme, it may be unclear what provides\nthe value and how it is set.")]),e._v(" "),a("p",[e._v("The authentication schemes are intended to be common for the whole OIS and set\nby the API provider using "),a("code",[e._v("apiCredentials")]),e._v(" part of the "),a("code",[e._v("config.json")]),e._v(". The\n"),a("code",[e._v("apiCredentials")]),e._v(" is an array which specifies the values for all security schemes\nin all OIS definitions. Each element of this array contains the following fields")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("oisTitle")]),e._v(" is the title of the OIS for the particular security scheme")]),e._v(" "),a("li",[a("code",[e._v("securitySchemeName")]),e._v(" is the name of the security scheme")]),e._v(" "),a("li",[a("code",[e._v("securitySchemeValue")]),e._v(" is the actual value that should be used by Airnode when\nmaking the API request. This value is usually a secret and it is recommended\nto interpolate it from "),a("code",[e._v("secrets.env")]),e._v(".")])]),e._v(" "),a("p",[e._v("If you want to base your API authentication on dynamic data, for example\n"),a("RouterLink",{attrs:{to:"/airnode/v0.3/concepts/requester.html"}},[e._v("requester")]),e._v(' address, you can utilize the "relay"\nsecurity schemes '),a("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/api-security.html#relayrequesteraddress"}},[e._v("described above")]),e._v("\nwhich can forward this data to your API.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Relay security schemes do not require a scheme value")]),e._v(" "),a("p",[e._v('The "relay" security schemes do not require the value, because it will be\nprovided (relayed) by Airnode depending on the particular request.')])]),e._v(" "),a("h2",{attrs:{id:"using-different-security-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-different-security-schemes"}},[e._v("#")]),e._v(" Using Different Security Schemes")]),e._v(" "),a("p",[e._v("Currently, if you want different API operations to use different security\nschemes they must be grouped in different OIS objects based on their common\nsecurity schemes. For example, your API has four operations, three require an\nAPI key in the HTTP header, another (public "),a("code",[e._v("/ping")]),e._v(" endpoint) requires no\nsecurity.")]),e._v(" "),a("ul",[a("li",[e._v("The first three API operations might be in the "),a("code",[e._v("ois[0]")]),e._v(" object with a security\nscheme named "),a("em",[e._v("requiresXApiKey")]),e._v(" of type "),a("em",[e._v("apiKey")]),e._v(" as shown above.")]),e._v(" "),a("li",[e._v("The /ping API operation would be in "),a("code",[e._v("ois[1]")]),e._v(" which would not have any\n"),a("code",[e._v("component.securitySchemes")]),e._v(" and "),a("code",[e._v("security")]),e._v(" would be an empty array.")])]),e._v(" "),a("h2",{attrs:{id:"multiple-security-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-security-schemes"}},[e._v("#")]),e._v(" Multiple Security Schemes")]),e._v(" "),a("p",[e._v("You can use multiple security schemes (e.g., an API key goes in the header, and\nan additional secret goes in the query).")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// inside ois[n].apiSpecifications.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"components"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"securitySchemes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X-api-key"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"specificQuerySecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"secret"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requiresXApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"specificQuerySecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h2",{attrs:{id:"no-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-security"}},[e._v("#")]),e._v(" No Security")]),e._v(" "),a("p",[e._v("If the API you are integrating is publicly accessible, you can set both the\n"),a("code",[e._v("security schemes")]),e._v(" and "),a("code",[e._v("security")]),e._v(" fields to empty objects.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);