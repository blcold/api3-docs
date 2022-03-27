(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{998:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("TitleSpan",[t._v("Functions")]),t._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("VersionWarning"),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("Reading a Beacon value is simple and straight forward. For on-chain smart\ncontracts the "),a("code",[t._v("msg.sender")]),t._v(" argument received by the function\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L326-L361",target:"_blank",rel:"noopener noreferrer"}},[t._v("readBeacon()"),a("OutboundLink")],1),t._v("\nmust be whitelisted.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Get Whitelisted")]),t._v(" "),a("p",[t._v("Please contact the\n"),a("a",{attrs:{href:"https://api3dao.typeform.com/to/O1Uvxc8m",target:"_blank",rel:"noopener noreferrer"}},[t._v("API3 Business Development API Team"),a("OutboundLink")],1),t._v("\nabout Beacon whitelisting.")])]),t._v(" "),a("p",[t._v("Calling from off-chain code ("),a("em",[t._v("using a library such as "),a("code",[t._v("ether.js")])]),t._v(") is not\nsubject to whitelisting. Off-chain code is beyond the scope of this doc.")]),t._v(" "),a("h2",{attrs:{id:"example-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code"}},[t._v("#")]),t._v(" Example Code")]),t._v(" "),a("p",[t._v("There is an additional example of a contract that reads a Beacon in the\n"),a("a",{attrs:{href:"https://github.com/api3dao/beacon-reader-example/blob/main/contracts/BeaconReaderExample.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("beacon-reader-example"),a("OutboundLink")],1),t._v("\nGitHub repository.")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SPDX-License-Identifier: MIT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@api3/airnode-protocol/contracts/rrp/requesters/interfaces/IRrpBeaconServer.sol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mySmartContract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myGetBeaconValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _beaconContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" _beaconId\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int224")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calling the BeaconServer for a Beacon value.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RrpBeaconServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_beaconContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readBeacon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_beaconId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[a("code",[t._v("readBeacon(bytes32 _beaconId)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bytes32 beaconId")]),t._v(" - The ID of the Beacon to retrieve a value for.")])]),t._v(" "),a("h2",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("int224 value")]),t._v(" - The value of the Beacon.")]),t._v(" "),a("li",[a("code",[t._v("uint32 timestamp")]),t._v(" - The timestamp associated with the Beacon value.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Please note:")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("RrpBeaconServer.sol")]),t._v(" contract casts the reported data point to "),a("code",[t._v("int224")]),t._v(". If\nthis is a problem (because the reported data may not fit into 224 bits or it is\nof a completely different type such as "),a("code",[t._v("bytes32")]),t._v("), do not use this contract and\nimplement a customized version instead. The contract casts the timestamps to\n"),a("code",[t._v("uint32")]),t._v(", which means it will not work work past-2106 in the current form. If\nthis is an issue, consider casting the timestamps to a larger type.")])]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("timestamp")]),t._v(" of a Beacon is zero, this means that it was never written to.\nThis may be the case for new Beacons. Therefore a zero value in the "),a("code",[t._v("value")]),t._v("\nfield is not valid if the "),a("code",[t._v("timestamp")]),t._v(" is zero.")]),t._v(" "),a("p",[t._v("In general, make sure to check if the timestamp of the Beacon is fresh enough,\nand definitely disregard Beacons with zero "),a("code",[t._v("timestamp")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);