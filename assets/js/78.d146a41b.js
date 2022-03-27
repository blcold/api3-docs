(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{553:function(e,t,s){e.exports=s.p+"assets/img/concepts-authorizers.b95c66dc.png"},858:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Concepts and Definitions")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,5]}}),e._v(" "),a("p",[e._v("An Airnode can authorize requester contract access to its underlying API using\nauthorizers. As an alternative, an API provider could also use\n"),a("RouterLink",{attrs:{to:"/airnode/v0.4/concepts/relay-meta-auth.html"}},[e._v("Relayed Meta Data")]),e._v(" to authenticate requests. Authorizers\nrequire blockchain knowledge by the API provider, relayed meta data does not.")],1),e._v(" "),a("p",[e._v("Other docs related to authorizers and relayed meta data:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/apply-auth.html"}},[e._v("Using Authorizers")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-security.html"}},[e._v("API Security")])],1)]),e._v(" "),a("p",[e._v("When an Airnode receives a request, it can use on-chain authorizer contracts to\nverify if a response is warranted. Authorizers allow Airnodes to implement a\nwide variety of policies. Below are some examples:")]),e._v(" "),a("ul",[a("li",[e._v("Respond to requests from sponsors that have paid their monthly subscription\nfee in DAI.")]),e._v(" "),a("li",[e._v("Respond to individual requests for which a per-call fee has been paid in API3\ntokens.")]),e._v(" "),a("li",[e._v("Respond to requests made by requesters that were whitelisted by the API3 DAO.")]),e._v(" "),a("li",[e._v("Respond to requests made by sponsors who have been whitelisted by the Airnode\nowner's backend (for example, based on PayPal payments).")])]),e._v(" "),a("p",[e._v("A common use case for an authorizer is the\n"),a("a",{attrs:{href:"#requesterauthorizerwithairnode"}},[e._v("RequesterAuthorizerWithAirnode")]),e._v(" authorizer\ncontract developed for Airnode operators to use right out-of-the-box. It allows\nthe whitelisting of requester contracts (with or without expiration timestamps)\non a per endpoint basis. This is the most common use case and may in fact\nsatisfy the needs of many Airnodes.")]),e._v(" "),a("p",[e._v("The diagram below illustrates how Airnode utilizes authorizers.")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:s(553),alt:"concept-authorizer"}})]),e._v(" "),a("ol",[a("li",[a("p",{staticClass:"diagram-line"},[e._v("When Airnode starts it reads its list of authorizer contracts declared in config.json.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line"},[e._v("Airnode gathers requests from the event logs, during its run cycle.")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line"},[e._v("Airnode sends each request, along with the list of authorizer contracts, to "),a("code",[e._v("checkAuthorizationStatus()")]),e._v(".")])]),e._v(" "),a("li",[a("p",{staticClass:"diagram-line"},[a("code",[e._v("checkAuthorizationStatus()")]),e._v(" executes the "),a("code",[e._v("isAuthorized()")]),e._v(" function in each authorizer contract. If any one authorizer contract returns true, then true is returned to the Airnode which in turn proceeds to fulfill the request.")])])])]),e._v(" "),a("h3",{attrs:{id:"airnode-authorization-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airnode-authorization-policies"}},[e._v("#")]),e._v(" Airnode Authorization Policies")]),e._v(" "),a("p",[e._v("Airnode provides two authorizer contracts, one of which\n(RequesterAuthorizerWithAirnode) can be used by any API provider. The other\n(RequesterAuthorizerWithManager) is meant to be used by the API3 DAO. They are\ndetailed within this doc in sections below.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#requesterauthorizerwithairnode"}},[a("code",[e._v("RequesterAuthorizerWithAirnode")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#requesterauthorizerwithmanager"}},[a("code",[e._v("RequesterAuthorizerWithManager")])])])]),e._v(" "),a("p",[e._v("Both these authorizer contracts inherit and extend the "),a("code",[e._v("RequesterAuthorizer")]),e._v("\nabstract contract which also extends the "),a("code",[e._v("Whitelist")]),e._v(" contract. This means that\nboth authorizer contracts will need to whitelist requester contracts prior to\nmake them available to an Airnode (For "),a("code",[e._v("RequesterAuthorizerWithAirnode")]),e._v(" this can\nbe done using the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.4/reference/packages/admin-cli.html#requesterauthorizerwithairnode"}},[e._v("admin-cli")]),e._v(").")],1),e._v(" "),a("p",[e._v("The main difference between them is that "),a("code",[e._v("RequesterAuthorizerWithAirnode")]),e._v(" allows\nthe Airnode address to grant whitelisting roles for that specific Airnode. On\nthe other hand, "),a("code",[e._v("RequesterAuthorizerWithManager")]),e._v(" allows the manager address\n(read: the API3 DAO) to grant whitelisting roles for all Airnodes that use it.")]),e._v(" "),a("p",[e._v("Some common functions available are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("requesterIsWhitelisted")]),e._v(": Called to check if a requester is whitelisted to use\nthe Airnode–endpoint pair.")]),e._v(" "),a("li",[a("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("airnodeToEndpointIdToRequesterToWhitelistStatus")]),e._v(":\nCalled to get the detailed whitelist status of a requester for the\nAirnode–endpoint pair.")])]),e._v(" "),a("h3",{attrs:{id:"custom-authorizers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-authorizers"}},[e._v("#")]),e._v(" Custom Authorizers")]),e._v(" "),a("p",[e._v("Custom authorizer contracts can implement any arbitrary authorization logic. An\nexample might be where Airnode only responds to requests if the requester has\nmade less than a specific number of requests to the Airnode in the last month,\neffectively implementing an on-chain call quota.")]),e._v(" "),a("h3",{attrs:{id:"authorizer-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizer-list"}},[e._v("#")]),e._v(" Authorizer List")]),e._v(" "),a("p",[e._v("Airnode authorizers are listed in the config.json file at\n"),a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/configuring-airnode.html#chains"}},[a("code",[e._v("chains[n].authorizers")])]),e._v(".\nAn authorizer typically checks for a single condition (has the requester made\ntheir monthly payment, is the "),a("code",[e._v("requester")]),e._v(" whitelisted, etc.). Authorizers can be\ncombined to enforce more complex policies. If any of the authorizers in the list\ngives access, the request will considered to be authorized. From a logical\nstandpoint, the authorization outcomes get "),a("code",[e._v("OR")]),e._v("ed.")],1),e._v(" "),a("h3",{attrs:{id:"authorizer-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizer-interface"}},[e._v("#")]),e._v(" Authorizer Interface")]),e._v(" "),a("p",[e._v("Authorizer contracts that inherit from "),a("code",[e._v("IAuthorizer")]),e._v(" can be used to implement an\narbitrary authorization policy based on its input parameters.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("requestId")]),e._v(": bytes32")]),e._v(" "),a("li",[a("code",[e._v("airnode")]),e._v(": address")]),e._v(" "),a("li",[a("code",[e._v("endpointId")]),e._v(": bytes32")]),e._v(" "),a("li",[a("code",[e._v("sponsor")]),e._v(": address")]),e._v(" "),a("li",[a("code",[e._v("requester")]),e._v(": address")])]),e._v(" "),a("p",[e._v("Note that the authorizer does not have to use all of the arguments, and can even\ndecide on arbitrary on-chain criteria such as "),a("code",[e._v("block.number")]),e._v(" (e.g., do not\nrespond to anyone after block number N). An authorizer is a contract with the\nfollowing interface:")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IAuthorizer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isAuthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" requester\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("Below is an example of how to create the simplest form of an authorizer. This\nauthorizer allows any requester contract to call the endpointId (0xf2ee...).")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("contract")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("myAuthorizer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("is")]),e._v(" IAuthorizer\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isAuthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" requester\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" override "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" expected "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xf2ee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" endpointId "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h3",{attrs:{id:"why-is-an-authorization-scheme-needed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-an-authorization-scheme-needed"}},[e._v("#")]),e._v(" Why is an authorization scheme needed?")]),e._v(" "),a("p",[e._v("Airnodes need the ability to fulfill requests selectively. This is required for\ntwo main reasons:")]),e._v(" "),a("ol",[a("li",[e._v("The Airnode only fulfills requests made by requesters who have made payment\nto the Airnode owner, which allows them to monetize their services.")]),e._v(" "),a("li",[e._v("The services of the Airnode are sensitive and can only be accessed by certain\nrequesters, e.g., who have gone through KYC.")])]),e._v(" "),a("p",[e._v("A protocol that does not have the authorizer scheme or equivalent functionality\ncannot be considered as permissionless, and will not be able to achieve\nwide-spread adoption.")]),e._v(" "),a("h3",{attrs:{id:"are-authorizers-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#are-authorizers-required"}},[e._v("#")]),e._v(" Are authorizers required?")]),e._v(" "),a("p",[e._v("Authorizers are not required. An Airnode operator could use\n"),a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-security.html#relayed-meta-data-security-schemes"}},[e._v("Relayed Meta Data Security Schemes")]),e._v(".\nIt is possible to use both authorizers and relay security schemes together.")],1),e._v(" "),a("h3",{attrs:{id:"how-are-authorizers-implemented"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-authorizers-implemented"}},[e._v("#")]),e._v(" How are authorizers implemented?")]),e._v(" "),a("p",[e._v("There are two main points to consider about how authorization policies are\nimplemented:")]),e._v(" "),a("ol",[a("li",[e._v("If the policies are kept off-chain, the requester cannot see them or check if\nthey satisfy them. Furthermore, the Airnode owner updating the policies\n(e.g., increasing the service fees) requires off-chain coordination with the\nrequester.")]),e._v(" "),a("li",[e._v("Embedding the policies in the request–response loop results in a gas cost\noverhead.")])]),e._v(" "),a("p",[e._v("Based on these considerations, Airnode uses a hybrid method. An Airnode\nannounces its authorization policy through off-chain channels as the addresses\nof a list of authorizer contracts. Whenever the Airnode receives a request, it\nchecks if it should fulfill this request by making a static call that queries\nthis on-chain policy. Similarly, the requester can use this on-chain policy by\nmaking a static call to check if they are authorized. This scheme both allows\nthe Airnode to set transparent and flexible policies, and this to be done with\nno gas overhead.")]),e._v(" "),a("h3",{attrs:{id:"access-deny-allow-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-deny-allow-filter"}},[e._v("#")]),e._v(" Access (deny, allow, filter)")]),e._v(" "),a("p",[e._v("How authorizers impact access is based on the "),a("code",[e._v("chains")]),e._v(" field of "),a("code",[e._v("config.json")]),e._v("\nfor a given Airnode.")]),e._v(" "),a("h4",{attrs:{id:"deny-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deny-all"}},[e._v("#")]),e._v(" Deny All")]),e._v(" "),a("p",[e._v("If the Airnode wants to deny all access for a particular chain, it should not\noperate on it (i.e., it should not exist in the "),a("code",[e._v("chains")]),e._v(' list). The below\nexample would "deny all" to chains 1 and 3–n since they do not have entries in\nthe '),a("code",[e._v("chains")]),e._v(" field.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v(" chains"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    authorizers"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    ...\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"allow-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allow-all"}},[e._v("#")]),e._v(" Allow All")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("chains.authorizers")]),e._v(' list of [] means "let everyone through". In the example\nbelow chain 2 would allow access to any requester.')]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("  chains"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      authorizers"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    ...\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"filter-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-all"}},[e._v("#")]),e._v(" Filter All")]),e._v(" "),a("p",[e._v("If the Airnode wants to give access selectively, it should use one or more\nauthorizers that implement filtering logic. In the example below the Airnode\nwill accept requests on chain "),a("em",[e._v('"2"')]),e._v(" and the requester would be filtered by two\nauthorizers.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v(" chains"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n   id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   authorizers"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("'0xcd...cd8d'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("'0xff...d19c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   ...\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"requesterauthorizerwithairnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requesterauthorizerwithairnode"}},[e._v("#")]),e._v(" RequesterAuthorizerWithAirnode")]),e._v(" "),a("p",[e._v("This contract implements a requester-based RRP authorizer with three types of\nroles")]),e._v(" "),a("ol",[a("li",[e._v("Whitelist expiration extender: Is allowed to extend temporary whitelisting\nexpiration")]),e._v(" "),a("li",[e._v("Whitelist expiration setter: Is allowed to set the temporary whitelisting\nexpiration (i.e., they can also reduce the expiration time)")]),e._v(" "),a("li",[e._v("Indefinite whitelister: Is allowed to whitelist/unwhitelist indefinitely Each\nAirnode's address is treated as if they have all these three roles for the\nrespective Airnode, and they can also grant these roles to other accounts,\nwhich includes contracts that implement arbitrary business logic.")])]),e._v(" "),a("h4",{attrs:{id:"extendwhitelistexpiration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendwhitelistexpiration"}},[e._v("#")]),e._v(" extendWhitelistExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("extendWhitelistExpiration()")]),e._v(" function can be called by a whitelist\nexpiration extender or the Airnode address to extend the whitelist expiration of\na requester for the Airnode–endpoint pair.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("ExtendedWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event ExtendedWhitelistExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        uint256 expiration\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"setwhitelistexpiration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setwhitelistexpiration"}},[e._v("#")]),e._v(" setWhitelistExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("setWhitelistExpiration()")]),e._v(" function can be called by a whitelist expiration\nsetter or the Airnode address to set the whitelisting expiration of a requester\nfor the Airnode–endpoint pair. This can hasten expiration.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("SetWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event SetWhitelistExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        uint256 expiration\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"setwhiteliststatuspastexpiration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setwhiteliststatuspastexpiration"}},[e._v("#")]),e._v(" setWhitelistStatusPastExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("setWhitelistStatusPastExpiration()")]),e._v(" function can be called by an indefinite\nwhitelister or the Airnode address to set the whitelist status of a requester\npast expiration for the Airnode–endpoint pair. This is useful to allow access to\nan API even if the expiration date has passed. For example, keep authorizing\nrequests while a sum of API3 tokens is locked.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("ExtendedWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event SetWhitelistStatusPastExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        bool status\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"isauthorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isauthorized"}},[e._v("#")]),e._v(" isAuthorized")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("isAuthorized()")]),e._v(" function will be called by AirnodeRrp to verify the\nauthorization status of a request. This function will return true for all\nwhitelisted requester contracts, admins and Airnode operator address.")]),e._v(" "),a("h3",{attrs:{id:"requesterauthorizerwithmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requesterauthorizerwithmanager"}},[e._v("#")]),e._v(" RequesterAuthorizerWithManager")]),e._v(" "),a("p",[e._v("This contract implements a requester-based RRP authorizer and assigns the API3\nDAO as the manager or in other words, the highest ranking admin across all\nAirnodes.")]),e._v(" "),a("p",[e._v("The manager and the accounts that it has granted the whitelist expiration\nextender, whitelist expiration setter and the indefinite whitelister roles will\nuse "),a("code",[e._v("RequesterAuthorizerWithManager")]),e._v(" to whitelist requesters across all\nAirnodes.")]),e._v(" "),a("h4",{attrs:{id:"extendwhitelistexpiration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendwhitelistexpiration-2"}},[e._v("#")]),e._v(" extendWhitelistExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("extendWhitelistExpiration()")]),e._v(" function can be called by a whitelist\nexpiration extender or the manager to extend the whitelist expiration of a\nrequester for the Airnode–endpoint pair.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("ExtendedWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event ExtendedWhitelistExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        uint256 expiration\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"setwhitelistexpiration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setwhitelistexpiration-2"}},[e._v("#")]),e._v(" setWhitelistExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("setWhitelistExpiration()")]),e._v(" function can be called by a whitelist expiration\nsetter or the manager to set the whitelisting expiration of a requester for the\nAirnode–endpoint pair. This can hasten expiration.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("SetWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event SetWhitelistExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        uint256 expiration\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"setwhiteliststatuspastexpiration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setwhiteliststatuspastexpiration-2"}},[e._v("#")]),e._v(" setWhitelistStatusPastExpiration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("setWhitelistStatusPastExpiration()")]),e._v(" function can be called by an indefinite\nwhitelister or the manager to set the whitelist status of a requester past\nexpiration for the Airnode–endpoint pair. This is useful to allow access to an\nAPI even if the expiration date has passed. For example, keep authorizing\nrequests while a sum of API3 tokens is locked.")]),e._v(" "),a("p",[e._v("This function emits a "),a("code",[e._v("ExtendedWhitelistExpiration")]),e._v(" event with the following\nsignature:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    event SetWhitelistStatusPastExpiration(\n        address indexed airnode,\n        bytes32 endpointId,\n        address indexed requester,\n        address indexed sender,\n        bool status\n    );\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"isauthorized-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isauthorized-2"}},[e._v("#")]),e._v(" isAuthorized")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("isAuthorized()")]),e._v(" function will be called by AirnodeRrp to verify the\nauthorization status of a request. This function will return true for all\nwhitelisted requester contracts, admins and the meta-admin address.")]),e._v(" "),a("divider")],1)}),[],!1,null,null,null);t.default=n.exports}}]);