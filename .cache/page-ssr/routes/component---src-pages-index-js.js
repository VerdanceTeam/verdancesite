exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/homepage/homepage.module.scss":
/*!******************************************************!*\
  !*** ./src/components/homepage/homepage.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepageContent": () => (/* binding */ homepageContent),
/* harmony export */   "homepageTitle": () => (/* binding */ homepageTitle),
/* harmony export */   "homepageSection": () => (/* binding */ homepageSection),
/* harmony export */   "homepageSectionGreen": () => (/* binding */ homepageSectionGreen),
/* harmony export */   "homepageSectionYellow": () => (/* binding */ homepageSectionYellow),
/* harmony export */   "homepageSectionContent": () => (/* binding */ homepageSectionContent)
/* harmony export */ });
// Exports
var homepageContent = "homepage-module--homepageContent--3oGZo";
var homepageTitle = "homepage-module--homepageTitle--1qy-X";
var homepageSection = "homepage-module--homepageSection--2Yp-9";
var homepageSectionGreen = "homepage-module--homepageSectionGreen--fv9uL";
var homepageSectionYellow = "homepage-module--homepageSectionYellow--2r77x";
var homepageSectionContent = "homepage-module--homepageSectionContent--3i-xX";


/***/ }),

/***/ "./src/components/homepage/homepage.js":
/*!*********************************************!*\
  !*** ./src/components/homepage/homepage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.module.scss */ "./src/components/homepage/homepage.module.scss");






const Homepage = () => {
  // const dataProductImageCarousel = useStaticQuery(graphql`
  //   {
  //     allContentfulFeaturettes(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         icon {
  //           file {
  //             url
  //           }
  //         }
  //         subtitle {
  //           subtitle
  //         }
  //         title
  //       }
  //     }
  //     allContentfulProductImageCarousel(sort: { order: ASC, fields: order }) {
  //       edges {
  //         node {
  //           id
  //           children {
  //             id
  //           }
  //           img {
  //             file {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //     allContentfulTeamMember(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         photo {
  //           file {
  //             url
  //           }
  //         }
  //         name
  //         order
  //         title
  //         bio {
  //           bio
  //         }
  //       }
  //     }
  //     allContentfulPartner(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         img {
  //           file {
  //             url
  //           }
  //         }
  //         order
  //       }
  //     }
  //   }
  // `);
  // const homepageData = dataProductImageCarousel;
  // const homepageProductImageCarousel =
  //   homepageData.allContentfulProductImageCarousel.edges;
  // const homepageFeaturettes = homepageData.allContentfulFeaturettes.nodes;
  // const homepageTeamMembers = homepageData.allContentfulTeamMember.nodes;
  // const homepagePartners = homepageData.allContentfulPartner.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, "Verdance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "title",
    content: "Verdance"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: "We partner with government to build resilient and respectful digital services."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:url",
    content: "https://www.verdance.co/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: "Verdance"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: "We partner with government to build resilient and respectful digital services."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:image",
    content: "https://images.ctfassets.net/5ywyur77omkg/350kVpMKxm8FpSUgXbWtg/fdd44c522593d946ea250148bea99bf3/lunchbox-meta.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "twitter:card",
    content: "We partner with government to build resilient and respectful digital services."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "twitter:url",
    content: "https://www.verdance.co/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "twitter:title",
    content: "Verdance"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "twitter:description",
    content: "We partner with government to build resilient and respectful digital services."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "twitter:image",
    content: "https://images.ctfassets.net/5ywyur77omkg/350kVpMKxm8FpSUgXbWtg/fdd44c522593d946ea250148bea99bf3/lunchbox-meta.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("link", {
    rel: "apple-touch-icon",
    href: "../../images/android-chrome-512x512.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: `${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent} ${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageTitle}`
  }, "Verdance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: `${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection} ${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionGreen}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: `${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection} ${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionYellow} ${_homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionFullWidth}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _homepage_module_scss__WEBPACK_IMPORTED_MODULE_3__.homepageSectionContent
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_homepage_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/homepage/homepage */ "./src/components/homepage/homepage.js");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout.scss */ "./src/styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_2__);


 // markup

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_homepage_homepage__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/styles/layout.scss":
/*!********************************!*\
  !*** ./src/styles/layout.scss ***!
  \********************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map