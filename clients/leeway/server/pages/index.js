"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./components/LeewaySlider.jsx



function LeewaySlider() {
    //creating the ref
    const sliderParentRef = external_react_default().useRef();
    const sliderChildRef = external_react_default().useRef();
    const [legalResources, setLegalResources] = (0,external_react_.useState)([
        {
            name: "Brisbane Law",
            description: "100 George St"
        },
        {
            name: "Best Legal",
            description: "270 Adelaide St"
        },
        {
            name: "GoTo lawyers",
            description: "15/87 Elizabeth Tce"
        }
    ]);
    const postcodeInput = external_react_default().useRef("");
    const numberOne = external_react_default().useRef();
    const numberTwo = external_react_default().useRef();
    const numberThree = external_react_default().useRef();
    // setting slider configurations
    const [sliderParentSettings, setSliderParentSettings] = (0,external_react_.useState)({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false
    });
    const [sliderChildSettings, setSliderChildSettings] = (0,external_react_.useState)({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    const gotoNextParent = ()=>{
        sliderParentRef.current.slickNext();
    };
    const gotoPrevParent = ()=>{
        sliderParentRef.current.slickPrev();
    };
    const gotoNextChild = ()=>{
        sliderChildRef.current.slickNext();
    };
    const gotoPrevChild = ()=>{
        sliderChildRef.current.slickPrev();
    };
    const gotoStartParent = ()=>{
        sliderParentRef.current.slickGoTo(0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "component-leeway-slider",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
            ...sliderParentSettings,
            ref: sliderParentRef,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Leeway provides your pathway to justice"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Simply type in your problem and we find you solutions"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "button-next-circle",
                                            onClick: ()=>gotoNextParent(),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "11",
                                                height: "20",
                                                viewBox: "0 0 11 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    "fill-rule": "evenodd",
                                                    "clip-rule": "evenodd",
                                                    d: "M0.626389 19.0404C1.01691 19.431 1.65008 19.431 2.0406 19.0404L10.3739 10.7071C10.7645 10.3166 10.7645 9.68341 10.3739 9.29289L2.0406 0.959555C1.65008 0.569031 1.01691 0.569031 0.626389 0.959555C0.235865 1.35008 0.235865 1.98324 0.626389 2.37377L8.25261 9.99999L0.626389 17.6262C0.235865 18.0167 0.235865 18.6499 0.626389 19.0404Z",
                                                    fill: "black"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-steps",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Your Solution in Three Steps"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-steps",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "How does it work?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-step",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "number",
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Identify Your Problem"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Explain your problem as best you can and in your own words. Take your time."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-step",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "number",
                                                children: "2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Enter your Postcode"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "A postcode is all we need to find you the best advice near you."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-step",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "number",
                                                children: "3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Choose a Lawyer"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We provide 3 specialised lawyers who can help with your specific problem."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoNextParent(),
                                    children: "next"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-enter",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-index",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "container-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number active",
                                                    children: "1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number",
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number",
                                                    children: "3"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Tell us whats bothering you?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Tell us your problem as best you can. Take your time."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Try to describe the issue you are facing in one or two paragraphs."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-textarea",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    className: "textarea",
                                    ref: sliderParentRef,
                                    placeholder: "Describe your problem..."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoNextParent(),
                                    children: "next"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-notice",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "We can help you."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "I am sorry to hear about your employment issue with your boss. In Australia, an employer must not terminate an employee's employment unless there is a valid reason for termination, such as poor performance or misconduct. To get the best advice, it would be best to consult with a local employment lawyer."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoNextParent(),
                                    children: "next"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-postcode",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-index",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "container-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number",
                                                    children: "1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberTwo,
                                                    className: "number active",
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberThree,
                                                    className: "number",
                                                    children: "3"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Enter your Postcode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-postcode-form",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    ref: postcodeInput,
                                    placeholder: "Postcode"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoNextParent(),
                                    children: "search"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-postcode",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-index",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "container-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number",
                                                    children: "1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberTwo,
                                                    className: "number active",
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberThree,
                                                    className: "number",
                                                    children: "3"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Enter your Postcode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-postcode-form",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: postcodeInput,
                                        placeholder: "Postcode",
                                        value: "4000"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-postcode-suggestions",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "4000, Brisbane City, QLD"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "4000, Brisbane GPO, QLD"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "4000, Brisbane Adelaide St, QLD"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "4000, Petrie Terrace, QLD"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "4000, Spring Hill, QLD"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoNextParent(),
                                    children: "next"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slide-postcode",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-index",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "container-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "number",
                                                    children: "1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberTwo,
                                                    className: "number",
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    ref: numberThree,
                                                    className: "number active",
                                                    children: "3"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Enter your Postcode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-postcode-form",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: postcodeInput,
                                        placeholder: "Postcode",
                                        value: "4000, Brisbane City, QLD"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container-resources",
                                        children: legalResources?.map((resource, index)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "card-legal-resource",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "container-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: resource.name
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: resource.description
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "container-buttons",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "container-flex",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "Schedule Now"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "Call Now"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-button-next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    onClick: ()=>gotoStartParent(),
                                    children: "restart"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-slide",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "slide-feeback",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "container-content"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/index.jsx




//fetching the data from API
async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return {
        data
    };
}
function Home(props) {
    const [data, setData] = (0,external_react_.useState)(props.data);
    // function to reload the API after every call
    async function refresh() {
        const refreshedProps = await fetchData();
        setData(refreshedProps.data);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LeewaySlider, {})
    });
}
Home.getInitialProps = fetchData;


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(221));
module.exports = __webpack_exports__;

})();