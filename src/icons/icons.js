
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var _mergeJSXProps = _interopDefault(
  require("babel-helper-vue-jsx-merge-props")
);

var ActivityIcon = {
  name: "ActivityIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-activity",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "22 12 18 12 15 21 9 3 6 12 2 12",
          },
        }),
      ]
    );
  },
};

var AirplayIcon = {
  name: "AirplayIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-airplay",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
          },
        }),
        h("polygon", {
          attrs: {
            points: "12 15 17 21 7 21 12 15",
          },
        }),
      ]
    );
  },
};

var AlertCircleIcon = {
  name: "AlertCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-alert-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var AlertOctagonIcon = {
  name: "AlertOctagonIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-alert-octagon",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points:
              "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var AlertTriangleIcon = {
  name: "AlertTriangleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-alert-triangle",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
          },
        }),
      ]
    );
  },
};

var AlignCenterIcon = {
  name: "AlignCenterIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-align-center",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "18",
            y1: "10",
            x2: "6",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "14",
            x2: "3",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "18",
            y1: "18",
            x2: "6",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var AlignJustifyIcon = {
  name: "AlignJustifyIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-align-justify",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "21",
            y1: "10",
            x2: "3",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "14",
            x2: "3",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "18",
            x2: "3",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var AlignLeftIcon = {
  name: "AlignLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-align-left",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "17",
            y1: "10",
            x2: "3",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "14",
            x2: "3",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "18",
            x2: "3",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var AlignRightIcon = {
  name: "AlignRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-align-right",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "21",
            y1: "10",
            x2: "7",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "6",
            x2: "3",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "14",
            x2: "3",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "18",
            x2: "7",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var AnchorIcon = {
  name: "AnchorIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-anchor",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "5",
            r: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "8",
          },
        }),
        h("path", {
          attrs: {
            d: "M5 12H2a10 10 0 0 0 20 0h-3",
          },
        }),
      ]
    );
  },
};

var ApertureIcon = {
  name: "ApertureIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-aperture",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.31",
            y1: "8",
            x2: "20.05",
            y2: "17.94",
          },
        }),
        h("line", {
          attrs: {
            x1: "9.69",
            y1: "8",
            x2: "21.17",
            y2: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "7.38",
            y1: "12",
            x2: "13.12",
            y2: "2.06",
          },
        }),
        h("line", {
          attrs: {
            x1: "9.69",
            y1: "16",
            x2: "3.95",
            y2: "6.06",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.31",
            y1: "16",
            x2: "2.83",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "16.62",
            y1: "12",
            x2: "10.88",
            y2: "21.94",
          },
        }),
      ]
    );
  },
};

var ArchiveIcon = {
  name: "ArchiveIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-archive",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "21 8 21 21 3 21 3 8",
          },
        }),
        h("rect", {
          attrs: {
            x: "1",
            y: "3",
            width: "22",
            height: "5",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "12",
            x2: "14",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var ArrowDownCircleIcon = {
  name: "ArrowDownCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-down-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8 12 12 16 16 12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var ArrowDownLeftIcon = {
  name: "ArrowDownLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-down-left",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "17",
            y1: "7",
            x2: "7",
            y2: "17",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 17 7 17 7 7",
          },
        }),
      ]
    );
  },
};

var ArrowDownRightIcon = {
  name: "ArrowDownRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-down-right",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "7",
            y1: "7",
            x2: "17",
            y2: "17",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 7 17 17 7 17",
          },
        }),
      ]
    );
  },
};

var ArrowDownIcon = {
  name: "ArrowDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-down",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
          },
        }),
        h("polyline", {
          attrs: {
            points: "19 12 12 19 5 12",
          },
        }),
      ]
    );
  },
};

var ArrowLeftCircleIcon = {
  name: "ArrowLeftCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-left-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 8 8 12 12 16",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "12",
            x2: "8",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var ArrowLeftIcon = {
  name: "ArrowLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-left",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "19",
            y1: "12",
            x2: "5",
            y2: "12",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 19 5 12 12 5",
          },
        }),
      ]
    );
  },
};

var ArrowRightCircleIcon = {
  name: "ArrowRightCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-right-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 16 16 12 12 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var ArrowRightIcon = {
  name: "ArrowRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-right",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 5 19 12 12 19",
          },
        }),
      ]
    );
  },
};

var ArrowUpCircleIcon = {
  name: "ArrowUpCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-up-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "16 12 12 8 8 12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "8",
          },
        }),
      ]
    );
  },
};

var ArrowUpLeftIcon = {
  name: "ArrowUpLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-up-left",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "17",
            y1: "17",
            x2: "7",
            y2: "7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 17 7 7 17 7",
          },
        }),
      ]
    );
  },
};

var ArrowUpRightIcon = {
  name: "ArrowUpRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-up-right",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "7",
            y1: "17",
            x2: "17",
            y2: "7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 7 17 7 17 17",
          },
        }),
      ]
    );
  },
};

var ArrowUpIcon = {
  name: "ArrowUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-arrow-up",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "5",
          },
        }),
        h("polyline", {
          attrs: {
            points: "5 12 12 5 19 12",
          },
        }),
      ]
    );
  },
};

var AtSignIcon = {
  name: "AtSignIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-at-sign",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "4",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
          },
        }),
      ]
    );
  },
};

var AwardIcon = {
  name: "AwardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-award",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "8",
            r: "7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
          },
        }),
      ]
    );
  },
};

var BarChart2Icon = {
  name: "BarChart2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bar-chart-2",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var BarChartIcon = {
  name: "BarChartIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bar-chart",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var BatteryChargingIcon = {
  name: "BatteryChargingIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-battery-charging",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "13",
            x2: "23",
            y2: "11",
          },
        }),
        h("polyline", {
          attrs: {
            points: "11 6 7 12 13 12 9 18",
          },
        }),
      ]
    );
  },
};

var BatteryIcon = {
  name: "BatteryIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-battery",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "1",
            y: "6",
            width: "18",
            height: "12",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "13",
            x2: "23",
            y2: "11",
          },
        }),
      ]
    );
  },
};

var BellOffIcon = {
  name: "BellOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bell-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
          },
        }),
        h("path", {
          attrs: {
            d: "M18.63 13A17.89 17.89 0 0 1 18 8",
          },
        }),
        h("path", {
          attrs: {
            d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",
          },
        }),
        h("path", {
          attrs: {
            d: "M18 8a6 6 0 0 0-9.33-5",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var BellIcon = {
  name: "BellIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bell",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
          },
        }),
        h("path", {
          attrs: {
            d: "M13.73 21a2 2 0 0 1-3.46 0",
          },
        }),
      ]
    );
  },
};

var BluetoothIcon = {
  name: "BluetoothIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bluetooth",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5",
          },
        }),
      ]
    );
  },
};

var BoldIcon = {
  name: "BoldIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bold",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
          },
        }),
        h("path", {
          attrs: {
            d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
          },
        }),
      ]
    );
  },
};

var BookOpenIcon = {
  name: "BookOpenIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-book-open",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
          },
        }),
      ]
    );
  },
};

var BookIcon = {
  name: "BookIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-book",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
          },
        }),
        h("path", {
          attrs: {
            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
          },
        }),
      ]
    );
  },
};

var BookmarkIcon = {
  name: "BookmarkIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-bookmark",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
          },
        }),
      ]
    );
  },
};

var BoxIcon = {
  name: "BoxIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-box",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "3.27 6.96 12 12.01 20.73 6.96",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var BriefcaseIcon = {
  name: "BriefcaseIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-briefcase",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "7",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
          },
        }),
      ]
    );
  },
};

var CalendarIcon = {
  name: "CalendarIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-calendar",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "10",
            x2: "21",
            y2: "10",
          },
        }),
      ]
    );
  },
};

var CameraOffIcon = {
  name: "CameraOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-camera-off",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56",
          },
        }),
      ]
    );
  },
};

var CameraIcon = {
  name: "CameraIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-camera",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "13",
            r: "4",
          },
        }),
      ]
    );
  },
};

var CastIcon = {
  name: "CastIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cast",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "20",
            x2: "2.01",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var CheckCircleIcon = {
  name: "CheckCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-check-circle",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
          },
        }),
        h("polyline", {
          attrs: {
            points: "22 4 12 14.01 9 11.01",
          },
        }),
      ]
    );
  },
};

var CheckSquareIcon = {
  name: "CheckSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-check-square",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "9 11 12 14 22 4",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
          },
        }),
      ]
    );
  },
};

var CheckIcon = {
  name: "CheckIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-check",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "20 6 9 17 4 12",
          },
        }),
      ]
    );
  },
};

var ChevronDownIcon = {
  name: "ChevronDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevron-down",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "6 9 12 15 18 9",
          },
        }),
      ]
    );
  },
};

var ChevronLeftIcon = {
  name: "ChevronLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevron-left",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "15 18 9 12 15 6",
          },
        }),
      ]
    );
  },
};

var ChevronRightIcon = {
  name: "ChevronRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevron-right",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "9 18 15 12 9 6",
          },
        }),
      ]
    );
  },
};

var ChevronUpIcon = {
  name: "ChevronUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevron-up",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "18 15 12 9 6 15",
          },
        }),
      ]
    );
  },
};

var ChevronsDownIcon = {
  name: "ChevronsDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevrons-down",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "7 13 12 18 17 13",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 6 12 11 17 6",
          },
        }),
      ]
    );
  },
};

var ChevronsLeftIcon = {
  name: "ChevronsLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevrons-left",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "11 17 6 12 11 7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "18 17 13 12 18 7",
          },
        }),
      ]
    );
  },
};

var ChevronsRightIcon = {
  name: "ChevronsRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevrons-right",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "13 17 18 12 13 7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "6 17 11 12 6 7",
          },
        }),
      ]
    );
  },
};

var ChevronsUpIcon = {
  name: "ChevronsUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chevrons-up",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "17 11 12 6 7 11",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 18 12 13 7 18",
          },
        }),
      ]
    );
  },
};

var ChromeIcon = {
  name: "ChromeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-chrome",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "21.17",
            y1: "8",
            x2: "12",
            y2: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "3.95",
            y1: "6.06",
            x2: "8.54",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "10.88",
            y1: "21.94",
            x2: "15.46",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var CircleIcon = {
  name: "CircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
      ]
    );
  },
};

var ClipboardIcon = {
  name: "ClipboardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-clipboard",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          },
        }),
        h("rect", {
          attrs: {
            x: "8",
            y: "2",
            width: "8",
            height: "4",
            rx: "1",
            ry: "1",
          },
        }),
      ]
    );
  },
};

var ClockIcon = {
  name: "ClockIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-clock",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 6 12 12 16 14",
          },
        }),
      ]
    );
  },
};

var CloudDrizzleIcon = {
  name: "CloudDrizzleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud-drizzle",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "8",
            y1: "19",
            x2: "8",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "13",
            x2: "8",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "19",
            x2: "16",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "13",
            x2: "16",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "21",
            x2: "12",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "17",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25",
          },
        }),
      ]
    );
  },
};

var CloudLightningIcon = {
  name: "CloudLightningIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud-lightning",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9",
          },
        }),
        h("polyline", {
          attrs: {
            points: "13 11 9 17 15 17 11 23",
          },
        }),
      ]
    );
  },
};

var CloudOffIcon = {
  name: "CloudOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var CloudRainIcon = {
  name: "CloudRainIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud-rain",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "16",
            y1: "13",
            x2: "16",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "13",
            x2: "8",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "23",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25",
          },
        }),
      ]
    );
  },
};

var CloudSnowIcon = {
  name: "CloudSnowIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud-snow",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "16",
            x2: "8.01",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "20",
            x2: "8.01",
            y2: "20",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22",
            x2: "12.01",
            y2: "22",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "16",
            x2: "16.01",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "20",
            x2: "16.01",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var CloudIcon = {
  name: "CloudIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cloud",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
          },
        }),
      ]
    );
  },
};

var CodeIcon = {
  name: "CodeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-code",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "16 18 22 12 16 6",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8 6 2 12 8 18",
          },
        }),
      ]
    );
  },
};

var CodepenIcon = {
  name: "CodepenIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-codepen",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "15.5",
          },
        }),
        h("polyline", {
          attrs: {
            points: "22 8.5 12 15.5 2 8.5",
          },
        }),
        h("polyline", {
          attrs: {
            points: "2 15.5 12 8.5 22 15.5",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "8.5",
          },
        }),
      ]
    );
  },
};

var CodesandboxIcon = {
  name: "CodesandboxIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-codesandbox",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7.5 4.21 12 6.81 16.5 4.21",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7.5 19.79 7.5 14.6 3 12",
          },
        }),
        h("polyline", {
          attrs: {
            points: "21 12 16.5 14.6 16.5 19.79",
          },
        }),
        h("polyline", {
          attrs: {
            points: "3.27 6.96 12 12.01 20.73 6.96",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var CoffeeIcon = {
  name: "CoffeeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-coffee",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 8h1a4 4 0 0 1 0 8h-1",
          },
        }),
        h("path", {
          attrs: {
            d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "1",
            x2: "6",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "1",
            x2: "10",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "14",
            y1: "1",
            x2: "14",
            y2: "4",
          },
        }),
      ]
    );
  },
};

var ColumnsIcon = {
  name: "ColumnsIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-columns",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18",
          },
        }),
      ]
    );
  },
};

var CommandIcon = {
  name: "CommandIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-command",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
          },
        }),
      ]
    );
  },
};

var CompassIcon = {
  name: "CompassIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-compass",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polygon", {
          attrs: {
            points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
          },
        }),
      ]
    );
  },
};

var CopyIcon = {
  name: "CopyIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-copy",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2",
          },
        }),
        h("path", {
          attrs: {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
          },
        }),
      ]
    );
  },
};

var CornerDownLeftIcon = {
  name: "CornerDownLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-down-left",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "9 10 4 15 9 20",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 4v7a4 4 0 0 1-4 4H4",
          },
        }),
      ]
    );
  },
};

var CornerDownRightIcon = {
  name: "CornerDownRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-down-right",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "15 10 20 15 15 20",
          },
        }),
        h("path", {
          attrs: {
            d: "M4 4v7a4 4 0 0 0 4 4h12",
          },
        }),
      ]
    );
  },
};

var CornerLeftDownIcon = {
  name: "CornerLeftDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-left-down",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "14 15 9 20 4 15",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 4h-7a4 4 0 0 0-4 4v12",
          },
        }),
      ]
    );
  },
};

var CornerLeftUpIcon = {
  name: "CornerLeftUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-left-up",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "14 9 9 4 4 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 20h-7a4 4 0 0 1-4-4V4",
          },
        }),
      ]
    );
  },
};

var CornerRightDownIcon = {
  name: "CornerRightDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-right-down",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "10 15 15 20 20 15",
          },
        }),
        h("path", {
          attrs: {
            d: "M4 4h7a4 4 0 0 1 4 4v12",
          },
        }),
      ]
    );
  },
};

var CornerRightUpIcon = {
  name: "CornerRightUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-right-up",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "10 9 15 4 20 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M4 20h7a4 4 0 0 0 4-4V4",
          },
        }),
      ]
    );
  },
};

var CornerUpLeftIcon = {
  name: "CornerUpLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-up-left",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "9 14 4 9 9 4",
          },
        }),
        h("path", {
          attrs: {
            d: "M20 20v-7a4 4 0 0 0-4-4H4",
          },
        }),
      ]
    );
  },
};

var CornerUpRightIcon = {
  name: "CornerUpRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-corner-up-right",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "15 14 20 9 15 4",
          },
        }),
        h("path", {
          attrs: {
            d: "M4 20v-7a4 4 0 0 1 4-4h12",
          },
        }),
      ]
    );
  },
};

var CpuIcon = {
  name: "CpuIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cpu",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            ry: "2",
          },
        }),
        h("rect", {
          attrs: {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "1",
            x2: "9",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "1",
            x2: "15",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "20",
            x2: "9",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "20",
            x2: "15",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "9",
            x2: "23",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "14",
            x2: "23",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "9",
            x2: "4",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "14",
            x2: "4",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var CreditCardIcon = {
  name: "CreditCardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-credit-card",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "1",
            y: "4",
            width: "22",
            height: "16",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "10",
            x2: "23",
            y2: "10",
          },
        }),
      ]
    );
  },
};

var CropIcon = {
  name: "CropIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-crop",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M6.13 1L6 16a2 2 0 0 0 2 2h15",
          },
        }),
        h("path", {
          attrs: {
            d: "M1 6.13L16 6a2 2 0 0 1 2 2v15",
          },
        }),
      ]
    );
  },
};

var CrosshairIcon = {
  name: "CrosshairIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-crosshair",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "22",
            y1: "12",
            x2: "18",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "12",
            x2: "2",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "6",
            x2: "12",
            y2: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var DatabaseIcon = {
  name: "DatabaseIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-database",
        },
        ctx.data,
      ]),
      [
        h("ellipse", {
          attrs: {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
          },
        }),
        h("path", {
          attrs: {
            d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
          },
        }),
      ]
    );
  },
};

var DeleteIcon = {
  name: "DeleteIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-delete",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
          },
        }),
        h("line", {
          attrs: {
            x1: "18",
            y1: "9",
            x2: "12",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "9",
            x2: "18",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var DiscIcon = {
  name: "DiscIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-disc",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "3",
          },
        }),
      ]
    );
  },
};

var DivideCircleIcon = {
  name: "DivideCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-divide-circle",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
      ]
    );
  },
};

var DivideSquareIcon = {
  name: "DivideSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-divide-square",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "8",
          },
        }),
      ]
    );
  },
};

var DivideIcon = {
  name: "DivideIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-divide",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "6",
            r: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "18",
            r: "2",
          },
        }),
      ]
    );
  },
};

var DollarSignIcon = {
  name: "DollarSignIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-dollar-sign",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "1",
            x2: "12",
            y2: "23",
          },
        }),
        h("path", {
          attrs: {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
          },
        }),
      ]
    );
  },
};

var DownloadCloudIcon = {
  name: "DownloadCloudIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-download-cloud",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "8 17 12 21 16 17",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "12",
            x2: "12",
            y2: "21",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29",
          },
        }),
      ]
    );
  },
};

var DownloadIcon = {
  name: "DownloadIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-download",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 10 12 15 17 10",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "3",
          },
        }),
      ]
    );
  },
};

var DribbbleIcon = {
  name: "DribbbleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-dribbble",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("path", {
          attrs: {
            d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32",
          },
        }),
      ]
    );
  },
};

var DropletIcon = {
  name: "DropletIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-droplet",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
          },
        }),
      ]
    );
  },
};

var Edit2Icon = {
  name: "Edit2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-edit-2",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
          },
        }),
      ]
    );
  },
};

var Edit3Icon = {
  name: "Edit3Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-edit-3",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 20h9",
          },
        }),
        h("path", {
          attrs: {
            d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
          },
        }),
      ]
    );
  },
};

var EditIcon = {
  name: "EditIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-edit",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
          },
        }),
        h("path", {
          attrs: {
            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
          },
        }),
      ]
    );
  },
};

var ExternalLinkIcon = {
  name: "ExternalLinkIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-external-link",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          },
        }),
        h("polyline", {
          attrs: {
            points: "15 3 21 3 21 9",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3",
          },
        }),
      ]
    );
  },
};

var EyeOffIcon = {
  name: "EyeOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-eye-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var EyeIcon = {
  name: "EyeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-eye",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "3",
          },
        }),
      ]
    );
  },
};

var FacebookIcon = {
  name: "FacebookIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-facebook",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
          },
        }),
      ]
    );
  },
};

var FastForwardIcon = {
  name: "FastForwardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-fast-forward",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "13 19 22 12 13 5 13 19",
          },
        }),
        h("polygon", {
          attrs: {
            points: "2 19 11 12 2 5 2 19",
          },
        }),
      ]
    );
  },
};

var FeatherIcon = {
  name: "FeatherIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-feather",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "8",
            x2: "2",
            y2: "22",
          },
        }),
        h("line", {
          attrs: {
            x1: "17.5",
            y1: "15",
            x2: "9",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var FigmaIcon = {
  name: "FigmaIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-figma",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
          },
        }),
        h("path", {
          attrs: {
            d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
          },
        }),
        h("path", {
          attrs: {
            d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
          },
        }),
        h("path", {
          attrs: {
            d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
          },
        }),
      ]
    );
  },
};

var FileMinusIcon = {
  name: "FileMinusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-file-minus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "14 2 14 8 20 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var FilePlusIcon = {
  name: "FilePlusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-file-plus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "14 2 14 8 20 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "15",
            x2: "15",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var FileTextIcon = {
  name: "FileTextIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-file-text",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "14 2 14 8 20 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17",
          },
        }),
        h("polyline", {
          attrs: {
            points: "10 9 9 9 8 9",
          },
        }),
      ]
    );
  },
};

var FileIcon = {
  name: "FileIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-file",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "13 2 13 9 20 9",
          },
        }),
      ]
    );
  },
};

var FilmIcon = {
  name: "FilmIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-film",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "2.18",
            ry: "2.18",
          },
        }),
        h("line", {
          attrs: {
            x1: "7",
            y1: "2",
            x2: "7",
            y2: "22",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "2",
            x2: "17",
            y2: "22",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "7",
            x2: "7",
            y2: "7",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "17",
            x2: "7",
            y2: "17",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "17",
            x2: "22",
            y2: "17",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "7",
            x2: "22",
            y2: "7",
          },
        }),
      ]
    );
  },
};

var FilterIcon = {
  name: "FilterIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-filter",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
          },
        }),
      ]
    );
  },
};

var FlagIcon = {
  name: "FlagIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-flag",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "22",
            x2: "4",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var FolderMinusIcon = {
  name: "FolderMinusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-folder-minus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "14",
            x2: "15",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var FolderPlusIcon = {
  name: "FolderPlusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-folder-plus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "11",
            x2: "12",
            y2: "17",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "14",
            x2: "15",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var FolderIcon = {
  name: "FolderIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-folder",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
          },
        }),
      ]
    );
  },
};

var FramerIcon = {
  name: "FramerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-framer",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7",
          },
        }),
      ]
    );
  },
};

var FrownIcon = {
  name: "FrownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-frown",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var GiftIcon = {
  name: "GiftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-gift",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "20 12 20 22 4 22 4 12",
          },
        }),
        h("rect", {
          attrs: {
            x: "2",
            y: "7",
            width: "20",
            height: "5",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22",
            x2: "12",
            y2: "7",
          },
        }),
        h("path", {
          attrs: {
            d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
          },
        }),
        h("path", {
          attrs: {
            d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
          },
        }),
      ]
    );
  },
};

var GitBranchIcon = {
  name: "GitBranchIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-git-branch",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "6",
            y1: "3",
            x2: "6",
            y2: "15",
          },
        }),
        h("circle", {
          attrs: {
            cx: "18",
            cy: "6",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "18",
            r: "3",
          },
        }),
        h("path", {
          attrs: {
            d: "M18 9a9 9 0 0 1-9 9",
          },
        }),
      ]
    );
  },
};

var GitCommitIcon = {
  name: "GitCommitIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-git-commit",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "1.05",
            y1: "12",
            x2: "7",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "17.01",
            y1: "12",
            x2: "22.96",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var GitMergeIcon = {
  name: "GitMergeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-git-merge",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "18",
            cy: "18",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "6",
            r: "3",
          },
        }),
        h("path", {
          attrs: {
            d: "M6 21V9a9 9 0 0 0 9 9",
          },
        }),
      ]
    );
  },
};

var GitPullRequestIcon = {
  name: "GitPullRequestIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-git-pull-request",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "18",
            cy: "18",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "6",
            r: "3",
          },
        }),
        h("path", {
          attrs: {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "9",
            x2: "6",
            y2: "21",
          },
        }),
      ]
    );
  },
};

var GithubIcon = {
  name: "GithubIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-github",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
          },
        }),
      ]
    );
  },
};

var GitlabIcon = {
  name: "GitlabIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-gitlab",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z",
          },
        }),
      ]
    );
  },
};

var GlobeIcon = {
  name: "GlobeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-globe",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
          },
        }),
        h("path", {
          attrs: {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
          },
        }),
      ]
    );
  },
};

var GridIcon = {
  name: "GridIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-grid",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
          },
        }),
        h("rect", {
          attrs: {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
          },
        }),
        h("rect", {
          attrs: {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
          },
        }),
        h("rect", {
          attrs: {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
          },
        }),
      ]
    );
  },
};

var HardDriveIcon = {
  name: "HardDriveIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-hard-drive",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "22",
            y1: "12",
            x2: "2",
            y2: "12",
          },
        }),
        h("path", {
          attrs: {
            d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "16",
            x2: "6.01",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "16",
            x2: "10.01",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var HashIcon = {
  name: "HashIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-hash",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "4",
            y1: "9",
            x2: "20",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "15",
            x2: "20",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "3",
            x2: "8",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "3",
            x2: "14",
            y2: "21",
          },
        }),
      ]
    );
  },
};

var HeadphonesIcon = {
  name: "HeadphonesIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-headphones",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M3 18v-6a9 9 0 0 1 18 0v6",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
          },
        }),
      ]
    );
  },
};

var HeartIcon = {
  name: "HeartIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-heart",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
          },
        }),
      ]
    );
  },
};

var HelpCircleIcon = {
  name: "HelpCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-help-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("path", {
          attrs: {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17",
          },
        }),
      ]
    );
  },
};

var HexagonIcon = {
  name: "HexagonIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-hexagon",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          },
        }),
      ]
    );
  },
};

var HomeIcon = {
  name: "HomeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-home",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "9 22 9 12 15 12 15 22",
          },
        }),
      ]
    );
  },
};

var ImageIcon = {
  name: "ImageIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-image",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8.5",
            cy: "8.5",
            r: "1.5",
          },
        }),
        h("polyline", {
          attrs: {
            points: "21 15 16 10 5 21",
          },
        }),
      ]
    );
  },
};

var InboxIcon = {
  name: "InboxIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-inbox",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
          },
        }),
        h("path", {
          attrs: {
            d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          },
        }),
      ]
    );
  },
};

var InfoIcon = {
  name: "InfoIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-info",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8",
          },
        }),
      ]
    );
  },
};

var InstagramIcon = {
  name: "InstagramIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-instagram",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
          },
        }),
        h("line", {
          attrs: {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5",
          },
        }),
      ]
    );
  },
};

var ItalicIcon = {
  name: "ItalicIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-italic",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "19",
            y1: "4",
            x2: "10",
            y2: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "14",
            y1: "20",
            x2: "5",
            y2: "20",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "4",
            x2: "9",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var KeyIcon = {
  name: "KeyIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-key",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
          },
        }),
      ]
    );
  },
};

var LayersIcon = {
  name: "LayersIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-layers",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "12 2 2 7 12 12 22 7 12 2",
          },
        }),
        h("polyline", {
          attrs: {
            points: "2 17 12 22 22 17",
          },
        }),
        h("polyline", {
          attrs: {
            points: "2 12 12 17 22 12",
          },
        }),
      ]
    );
  },
};

var LayoutIcon = {
  name: "LayoutIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-layout",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "9",
            x2: "21",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "21",
            x2: "9",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var LifeBuoyIcon = {
  name: "LifeBuoyIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-life-buoy",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.93",
            y1: "4.93",
            x2: "9.17",
            y2: "9.17",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.83",
            y1: "14.83",
            x2: "19.07",
            y2: "19.07",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.83",
            y1: "9.17",
            x2: "19.07",
            y2: "4.93",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.83",
            y1: "9.17",
            x2: "18.36",
            y2: "5.64",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.93",
            y1: "19.07",
            x2: "9.17",
            y2: "14.83",
          },
        }),
      ]
    );
  },
};

var Link2Icon = {
  name: "Link2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-link-2",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var LinkIcon = {
  name: "LinkIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-link",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          },
        }),
        h("path", {
          attrs: {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          },
        }),
      ]
    );
  },
};

var LinkedinIcon = {
  name: "LinkedinIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-linkedin",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
          },
        }),
        h("rect", {
          attrs: {
            x: "2",
            y: "9",
            width: "4",
            height: "12",
          },
        }),
        h("circle", {
          attrs: {
            cx: "4",
            cy: "4",
            r: "2",
          },
        }),
      ]
    );
  },
};

var ListIcon = {
  name: "ListIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-list",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "8",
            y1: "6",
            x2: "21",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "21",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "18",
            x2: "21",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "6",
            x2: "3.01",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "12",
            x2: "3.01",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "18",
            x2: "3.01",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var LoaderIcon = {
  name: "LoaderIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-loader",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "18",
            x2: "12",
            y2: "22",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.93",
            y1: "4.93",
            x2: "7.76",
            y2: "7.76",
          },
        }),
        h("line", {
          attrs: {
            x1: "16.24",
            y1: "16.24",
            x2: "19.07",
            y2: "19.07",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "12",
            x2: "6",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "18",
            y1: "12",
            x2: "22",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.93",
            y1: "19.07",
            x2: "7.76",
            y2: "16.24",
          },
        }),
        h("line", {
          attrs: {
            x1: "16.24",
            y1: "7.76",
            x2: "19.07",
            y2: "4.93",
          },
        }),
      ]
    );
  },
};

var LockIcon = {
  name: "LockIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-lock",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
          },
        }),
        h("path", {
          attrs: {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
          },
        }),
      ]
    );
  },
};

var LogInIcon = {
  name: "LogInIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-log-in",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
          },
        }),
        h("polyline", {
          attrs: {
            points: "10 17 15 12 10 7",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "12",
            x2: "3",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var LogOutIcon = {
  name: "LogOutIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-log-out",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
          },
        }),
        h("polyline", {
          attrs: {
            points: "16 17 21 12 16 7",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "12",
            x2: "9",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var MailIcon = {
  name: "MailIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-mail",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "22,6 12,13 2,6",
          },
        }),
      ]
    );
  },
};

var MapPinIcon = {
  name: "MapPinIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-map-pin",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "10",
            r: "3",
          },
        }),
      ]
    );
  },
};

var MapIcon = {
  name: "MapIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-map",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "6",
            x2: "16",
            y2: "22",
          },
        }),
      ]
    );
  },
};

var Maximize2Icon = {
  name: "Maximize2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-maximize-2",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "15 3 21 3 21 9",
          },
        }),
        h("polyline", {
          attrs: {
            points: "9 21 3 21 3 15",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "3",
            x2: "14",
            y2: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var MaximizeIcon = {
  name: "MaximizeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-maximize",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
          },
        }),
      ]
    );
  },
};

var MehIcon = {
  name: "MehIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-meh",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "15",
            x2: "16",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var MenuIcon = {
  name: "MenuIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-menu",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var MessageCircleIcon = {
  name: "MessageCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-message-circle",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
          },
        }),
      ]
    );
  },
};

var MessageSquareIcon = {
  name: "MessageSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-message-square",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
          },
        }),
      ]
    );
  },
};

var MicOffIcon = {
  name: "MicOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-mic-off",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
        h("path", {
          attrs: {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6",
          },
        }),
        h("path", {
          attrs: {
            d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var MicIcon = {
  name: "MicIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-mic",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
          },
        }),
        h("path", {
          attrs: {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var Minimize2Icon = {
  name: "Minimize2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-minimize-2",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "4 14 10 14 10 20",
          },
        }),
        h("polyline", {
          attrs: {
            points: "20 10 14 10 14 4",
          },
        }),
        h("line", {
          attrs: {
            x1: "14",
            y1: "10",
            x2: "21",
            y2: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "21",
            x2: "10",
            y2: "14",
          },
        }),
      ]
    );
  },
};

var MinimizeIcon = {
  name: "MinimizeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-minimize",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
          },
        }),
      ]
    );
  },
};

var MinusCircleIcon = {
  name: "MinusCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-minus-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var MinusSquareIcon = {
  name: "MinusSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-minus-square",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var MinusIcon = {
  name: "MinusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-minus",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var MonitorIcon = {
  name: "MonitorIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-monitor",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "3",
            width: "20",
            height: "14",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "21",
            x2: "16",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "17",
            x2: "12",
            y2: "21",
          },
        }),
      ]
    );
  },
};

var MoonIcon = {
  name: "MoonIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-moon",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
          },
        }),
      ]
    );
  },
};

var MoreHorizontalIcon = {
  name: "MoreHorizontalIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-more-horizontal",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "1",
          },
        }),
        h("circle", {
          attrs: {
            cx: "19",
            cy: "12",
            r: "1",
          },
        }),
        h("circle", {
          attrs: {
            cx: "5",
            cy: "12",
            r: "1",
          },
        }),
      ]
    );
  },
};

var MoreVerticalIcon = {
  name: "MoreVerticalIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-more-vertical",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "1",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "5",
            r: "1",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "19",
            r: "1",
          },
        }),
      ]
    );
  },
};

var MousePointerIcon = {
  name: "MousePointerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-mouse-pointer",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
          },
        }),
        h("path", {
          attrs: {
            d: "M13 13l6 6",
          },
        }),
      ]
    );
  },
};

var MoveIcon = {
  name: "MoveIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-move",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "5 9 2 12 5 15",
          },
        }),
        h("polyline", {
          attrs: {
            points: "9 5 12 2 15 5",
          },
        }),
        h("polyline", {
          attrs: {
            points: "15 19 12 22 9 19",
          },
        }),
        h("polyline", {
          attrs: {
            points: "19 9 22 12 19 15",
          },
        }),
        h("line", {
          attrs: {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22",
          },
        }),
      ]
    );
  },
};

var MusicIcon = {
  name: "MusicIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-music",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M9 18V5l12-2v13",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "18",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "18",
            cy: "16",
            r: "3",
          },
        }),
      ]
    );
  },
};

var Navigation2Icon = {
  name: "Navigation2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-navigation-2",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "12 2 19 21 12 17 5 21 12 2",
          },
        }),
      ]
    );
  },
};

var NavigationIcon = {
  name: "NavigationIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-navigation",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "3 11 22 2 13 21 11 13 3 11",
          },
        }),
      ]
    );
  },
};

var OctagonIcon = {
  name: "OctagonIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-octagon",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points:
              "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          },
        }),
      ]
    );
  },
};

var PackageIcon = {
  name: "PackageIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-package",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "16.5",
            y1: "9.4",
            x2: "7.5",
            y2: "4.21",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "3.27 6.96 12 12.01 20.73 6.96",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var PaperclipIcon = {
  name: "PaperclipIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-paperclip",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
          },
        }),
      ]
    );
  },
};

var PauseCircleIcon = {
  name: "PauseCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-pause-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "15",
            x2: "10",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "14",
            y1: "15",
            x2: "14",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var PauseIcon = {
  name: "PauseIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-pause",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
          },
        }),
        h("rect", {
          attrs: {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
          },
        }),
      ]
    );
  },
};

var PenToolIcon = {
  name: "PenToolIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-pen-tool",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 19l7-7 3 3-7 7-3-3z",
          },
        }),
        h("path", {
          attrs: {
            d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M2 2l7.586 7.586",
          },
        }),
        h("circle", {
          attrs: {
            cx: "11",
            cy: "11",
            r: "2",
          },
        }),
      ]
    );
  },
};

var PercentIcon = {
  name: "PercentIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-percent",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "19",
            y1: "5",
            x2: "5",
            y2: "19",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6.5",
            cy: "6.5",
            r: "2.5",
          },
        }),
        h("circle", {
          attrs: {
            cx: "17.5",
            cy: "17.5",
            r: "2.5",
          },
        }),
      ]
    );
  },
};

var PhoneCallIcon = {
  name: "PhoneCallIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-call",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PhoneForwardedIcon = {
  name: "PhoneForwardedIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-forwarded",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "19 1 23 5 19 9",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "5",
            x2: "23",
            y2: "5",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PhoneIncomingIcon = {
  name: "PhoneIncomingIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-incoming",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "16 2 16 8 22 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "1",
            x2: "16",
            y2: "8",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PhoneMissedIcon = {
  name: "PhoneMissedIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-missed",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "23",
            y1: "1",
            x2: "17",
            y2: "7",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "1",
            x2: "23",
            y2: "7",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PhoneOffIcon = {
  name: "PhoneOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "1",
            x2: "1",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var PhoneOutgoingIcon = {
  name: "PhoneOutgoingIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone-outgoing",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "23 7 23 1 17 1",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "8",
            x2: "23",
            y2: "1",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PhoneIcon = {
  name: "PhoneIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-phone",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          },
        }),
      ]
    );
  },
};

var PieChartIcon = {
  name: "PieChartIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-pie-chart",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
          },
        }),
        h("path", {
          attrs: {
            d: "M22 12A10 10 0 0 0 12 2v10z",
          },
        }),
      ]
    );
  },
};

var PlayCircleIcon = {
  name: "PlayCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-play-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("polygon", {
          attrs: {
            points: "10 8 16 12 10 16 10 8",
          },
        }),
      ]
    );
  },
};

var PlayIcon = {
  name: "PlayIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-play",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "5 3 19 12 5 21 5 3",
          },
        }),
      ]
    );
  },
};

var PlusCircleIcon = {
  name: "PlusCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-plus-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var PlusSquareIcon = {
  name: "PlusSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-plus-square",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var PlusIcon = {
  name: "PlusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-plus",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19",
          },
        }),
        h("line", {
          attrs: {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var PocketIcon = {
  name: "PocketIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-pocket",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8 10 12 14 16 10",
          },
        }),
      ]
    );
  },
};

var PowerIcon = {
  name: "PowerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-power",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M18.36 6.64a9 9 0 1 1-12.73 0",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var PrinterIcon = {
  name: "PrinterIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-printer",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "6 9 6 2 18 2 18 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
          },
        }),
        h("rect", {
          attrs: {
            x: "6",
            y: "14",
            width: "12",
            height: "8",
          },
        }),
      ]
    );
  },
};

var RadioIcon = {
  name: "RadioIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-radio",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "2",
          },
        }),
        h("path", {
          attrs: {
            d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14",
          },
        }),
      ]
    );
  },
};

var RefreshCcwIcon = {
  name: "RefreshCcwIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-refresh-ccw",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "1 4 1 10 7 10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "23 20 23 14 17 14",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15",
          },
        }),
      ]
    );
  },
};

var RefreshCwIcon = {
  name: "RefreshCwIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-refresh-cw",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "23 4 23 10 17 10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "1 20 1 14 7 14",
          },
        }),
        h("path", {
          attrs: {
            d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
          },
        }),
      ]
    );
  },
};

var RepeatIcon = {
  name: "RepeatIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-repeat",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "17 1 21 5 17 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M3 11V9a4 4 0 0 1 4-4h14",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 23 3 19 7 15",
          },
        }),
        h("path", {
          attrs: {
            d: "M21 13v2a4 4 0 0 1-4 4H3",
          },
        }),
      ]
    );
  },
};

var RewindIcon = {
  name: "RewindIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-rewind",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "11 19 2 12 11 5 11 19",
          },
        }),
        h("polygon", {
          attrs: {
            points: "22 19 13 12 22 5 22 19",
          },
        }),
      ]
    );
  },
};

var RotateCcwIcon = {
  name: "RotateCcwIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-rotate-ccw",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "1 4 1 10 7 10",
          },
        }),
        h("path", {
          attrs: {
            d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10",
          },
        }),
      ]
    );
  },
};

var RotateCwIcon = {
  name: "RotateCwIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-rotate-cw",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "23 4 23 10 17 10",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10",
          },
        }),
      ]
    );
  },
};

var RssIcon = {
  name: "RssIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-rss",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 11a9 9 0 0 1 9 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M4 4a16 16 0 0 1 16 16",
          },
        }),
        h("circle", {
          attrs: {
            cx: "5",
            cy: "19",
            r: "1",
          },
        }),
      ]
    );
  },
};

var SaveIcon = {
  name: "SaveIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-save",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 21 17 13 7 13 7 21",
          },
        }),
        h("polyline", {
          attrs: {
            points: "7 3 7 8 15 8",
          },
        }),
      ]
    );
  },
};

var ScissorsIcon = {
  name: "ScissorsIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-scissors",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "6",
            cy: "6",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "18",
            r: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "4",
            x2: "8.12",
            y2: "15.88",
          },
        }),
        h("line", {
          attrs: {
            x1: "14.47",
            y1: "14.48",
            x2: "20",
            y2: "20",
          },
        }),
        h("line", {
          attrs: {
            x1: "8.12",
            y1: "8.12",
            x2: "12",
            y2: "12",
          },
        }),
      ]
    );
  },
};

var SearchIcon = {
  name: "SearchIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-search",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "11",
            cy: "11",
            r: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
          },
        }),
      ]
    );
  },
};

var SendIcon = {
  name: "SendIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-send",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "22",
            y1: "2",
            x2: "11",
            y2: "13",
          },
        }),
        h("polygon", {
          attrs: {
            points: "22 2 15 22 11 13 2 9 22 2",
          },
        }),
      ]
    );
  },
};

var ServerIcon = {
  name: "ServerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-server",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "2",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
          },
        }),
        h("rect", {
          attrs: {
            x: "2",
            y: "14",
            width: "20",
            height: "8",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "6",
            x2: "6.01",
            y2: "6",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "18",
            x2: "6.01",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var SettingsIcon = {
  name: "SettingsIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-settings",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "3",
          },
        }),
        h("path", {
          attrs: {
            d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
          },
        }),
      ]
    );
  },
};

var Share2Icon = {
  name: "Share2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-share-2",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "18",
            cy: "5",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "6",
            cy: "12",
            r: "3",
          },
        }),
        h("circle", {
          attrs: {
            cx: "18",
            cy: "19",
            r: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49",
          },
        }),
        h("line", {
          attrs: {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49",
          },
        }),
      ]
    );
  },
};

var ShareIcon = {
  name: "ShareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-share",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
          },
        }),
        h("polyline", {
          attrs: {
            points: "16 6 12 2 8 6",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var ShieldOffIcon = {
  name: "ShieldOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-shield-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18",
          },
        }),
        h("path", {
          attrs: {
            d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var ShieldIcon = {
  name: "ShieldIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-shield",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
          },
        }),
      ]
    );
  },
};

var ShoppingBagIcon = {
  name: "ShoppingBagIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-shopping-bag",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
          },
        }),
        h("line", {
          attrs: {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 10a4 4 0 0 1-8 0",
          },
        }),
      ]
    );
  },
};

var ShoppingCartIcon = {
  name: "ShoppingCartIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-shopping-cart",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "9",
            cy: "21",
            r: "1",
          },
        }),
        h("circle", {
          attrs: {
            cx: "20",
            cy: "21",
            r: "1",
          },
        }),
        h("path", {
          attrs: {
            d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
          },
        }),
      ]
    );
  },
};

var ShuffleIcon = {
  name: "ShuffleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-shuffle",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "16 3 21 3 21 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "20",
            x2: "21",
            y2: "3",
          },
        }),
        h("polyline", {
          attrs: {
            points: "21 16 21 21 16 21",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "15",
            x2: "21",
            y2: "21",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "4",
            x2: "9",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var SidebarIcon = {
  name: "SidebarIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-sidebar",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "3",
            x2: "9",
            y2: "21",
          },
        }),
      ]
    );
  },
};

var SkipBackIcon = {
  name: "SkipBackIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-skip-back",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "19 20 9 12 19 4 19 20",
          },
        }),
        h("line", {
          attrs: {
            x1: "5",
            y1: "19",
            x2: "5",
            y2: "5",
          },
        }),
      ]
    );
  },
};

var SkipForwardIcon = {
  name: "SkipForwardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-skip-forward",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "5 4 15 12 5 20 5 4",
          },
        }),
        h("line", {
          attrs: {
            x1: "19",
            y1: "5",
            x2: "19",
            y2: "19",
          },
        }),
      ]
    );
  },
};

var SlackIcon = {
  name: "SlackIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-slack",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z",
          },
        }),
        h("path", {
          attrs: {
            d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z",
          },
        }),
        h("path", {
          attrs: {
            d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z",
          },
        }),
      ]
    );
  },
};

var SlashIcon = {
  name: "SlashIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-slash",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.93",
            y1: "4.93",
            x2: "19.07",
            y2: "19.07",
          },
        }),
      ]
    );
  },
};

var SlidersIcon = {
  name: "SlidersIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-sliders",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "4",
            y1: "21",
            x2: "4",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "10",
            x2: "4",
            y2: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "21",
            x2: "12",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "21",
            x2: "20",
            y2: "16",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "12",
            x2: "20",
            y2: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "14",
            x2: "7",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "8",
            x2: "15",
            y2: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "16",
            x2: "23",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var SmartphoneIcon = {
  name: "SmartphoneIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-smartphone",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var SmileIcon = {
  name: "SmileIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-smile",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("path", {
          attrs: {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "9.01",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "15.01",
            y2: "9",
          },
        }),
      ]
    );
  },
};

var SpeakerIcon = {
  name: "SpeakerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-speaker",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "14",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "6",
            x2: "12.01",
            y2: "6",
          },
        }),
      ]
    );
  },
};

var SquareIcon = {
  name: "SquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-square",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
      ]
    );
  },
};

var StarIcon = {
  name: "StarIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-star",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points:
              "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
          },
        }),
      ]
    );
  },
};

var StopCircleIcon = {
  name: "StopCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-stop-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("rect", {
          attrs: {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
          },
        }),
      ]
    );
  },
};

var SunIcon = {
  name: "SunIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-sun",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "5",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "1",
            x2: "12",
            y2: "3",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "21",
            x2: "12",
            y2: "23",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.22",
            y1: "4.22",
            x2: "5.64",
            y2: "5.64",
          },
        }),
        h("line", {
          attrs: {
            x1: "18.36",
            y1: "18.36",
            x2: "19.78",
            y2: "19.78",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "12",
            x2: "3",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "12",
            x2: "23",
            y2: "12",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.22",
            y1: "19.78",
            x2: "5.64",
            y2: "18.36",
          },
        }),
        h("line", {
          attrs: {
            x1: "18.36",
            y1: "5.64",
            x2: "19.78",
            y2: "4.22",
          },
        }),
      ]
    );
  },
};

var SunriseIcon = {
  name: "SunriseIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-sunrise",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M17 18a5 5 0 0 0-10 0",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "9",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.22",
            y1: "10.22",
            x2: "5.64",
            y2: "11.64",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "18",
            x2: "3",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "18",
            x2: "23",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "18.36",
            y1: "11.64",
            x2: "19.78",
            y2: "10.22",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "22",
            x2: "1",
            y2: "22",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8 6 12 2 16 6",
          },
        }),
      ]
    );
  },
};

var SunsetIcon = {
  name: "SunsetIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-sunset",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M17 18a5 5 0 0 0-10 0",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "4.22",
            y1: "10.22",
            x2: "5.64",
            y2: "11.64",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "18",
            x2: "3",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "18",
            x2: "23",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "18.36",
            y1: "11.64",
            x2: "19.78",
            y2: "10.22",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "22",
            x2: "1",
            y2: "22",
          },
        }),
        h("polyline", {
          attrs: {
            points: "16 5 12 9 8 5",
          },
        }),
      ]
    );
  },
};

var TabletIcon = {
  name: "TabletIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-tablet",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "4",
            y: "2",
            width: "16",
            height: "20",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var TagIcon = {
  name: "TagIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-tag",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
          },
        }),
        h("line", {
          attrs: {
            x1: "7",
            y1: "7",
            x2: "7.01",
            y2: "7",
          },
        }),
      ]
    );
  },
};

var TargetIcon = {
  name: "TargetIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-target",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "6",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "2",
          },
        }),
      ]
    );
  },
};

var TerminalIcon = {
  name: "TerminalIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-terminal",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "4 17 10 11 4 5",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "19",
            x2: "20",
            y2: "19",
          },
        }),
      ]
    );
  },
};

var ThermometerIcon = {
  name: "ThermometerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-thermometer",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
          },
        }),
      ]
    );
  },
};

var ThumbsDownIcon = {
  name: "ThumbsDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-thumbs-down",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17",
          },
        }),
      ]
    );
  },
};

var ThumbsUpIcon = {
  name: "ThumbsUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-thumbs-up",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
          },
        }),
      ]
    );
  },
};

var ToggleLeftIcon = {
  name: "ToggleLeftIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-toggle-left",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8",
            cy: "12",
            r: "3",
          },
        }),
      ]
    );
  },
};

var ToggleRightIcon = {
  name: "ToggleRightIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-toggle-right",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "1",
            y: "5",
            width: "22",
            height: "14",
            rx: "7",
            ry: "7",
          },
        }),
        h("circle", {
          attrs: {
            cx: "16",
            cy: "12",
            r: "3",
          },
        }),
      ]
    );
  },
};

var ToolIcon = {
  name: "ToolIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-tool",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
          },
        }),
      ]
    );
  },
};

var Trash2Icon = {
  name: "Trash2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-trash-2",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "3 6 5 6 21 6",
          },
        }),
        h("path", {
          attrs: {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
          },
        }),
        h("line", {
          attrs: {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17",
          },
        }),
        h("line", {
          attrs: {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17",
          },
        }),
      ]
    );
  },
};

var TrashIcon = {
  name: "TrashIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-trash",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "3 6 5 6 21 6",
          },
        }),
        h("path", {
          attrs: {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
          },
        }),
      ]
    );
  },
};

var TrelloIcon = {
  name: "TrelloIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-trello",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("rect", {
          attrs: {
            x: "7",
            y: "7",
            width: "3",
            height: "9",
          },
        }),
        h("rect", {
          attrs: {
            x: "14",
            y: "7",
            width: "3",
            height: "5",
          },
        }),
      ]
    );
  },
};

var TrendingDownIcon = {
  name: "TrendingDownIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-trending-down",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "23 18 13.5 8.5 8.5 13.5 1 6",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 18 23 18 23 12",
          },
        }),
      ]
    );
  },
};

var TrendingUpIcon = {
  name: "TrendingUpIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-trending-up",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "23 6 13.5 15.5 8.5 10.5 1 18",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 6 23 6 23 12",
          },
        }),
      ]
    );
  },
};

var TriangleIcon = {
  name: "TriangleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-triangle",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
          },
        }),
      ]
    );
  },
};

var TruckIcon = {
  name: "TruckIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-truck",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "1",
            y: "3",
            width: "15",
            height: "13",
          },
        }),
        h("polygon", {
          attrs: {
            points: "16 8 20 8 23 11 23 16 16 16 16 8",
          },
        }),
        h("circle", {
          attrs: {
            cx: "5.5",
            cy: "18.5",
            r: "2.5",
          },
        }),
        h("circle", {
          attrs: {
            cx: "18.5",
            cy: "18.5",
            r: "2.5",
          },
        }),
      ]
    );
  },
};

var TvIcon = {
  name: "TvIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-tv",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "2",
            y: "7",
            width: "20",
            height: "15",
            rx: "2",
            ry: "2",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 2 12 7 7 2",
          },
        }),
      ]
    );
  },
};

var TwitchIcon = {
  name: "TwitchIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-twitch",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
          },
        }),
      ]
    );
  },
};

var TwitterIcon = {
  name: "TwitterIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-twitter",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
          },
        }),
      ]
    );
  },
};

var TypeIcon = {
  name: "TypeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-type",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "4 7 4 4 20 4 20 7",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "20",
            x2: "15",
            y2: "20",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "4",
            x2: "12",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var UmbrellaIcon = {
  name: "UmbrellaIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-umbrella",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7",
          },
        }),
      ]
    );
  },
};

var UnderlineIcon = {
  name: "UnderlineIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-underline",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3",
          },
        }),
        h("line", {
          attrs: {
            x1: "4",
            y1: "21",
            x2: "20",
            y2: "21",
          },
        }),
      ]
    );
  },
};

var UnlockIcon = {
  name: "UnlockIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-unlock",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2",
          },
        }),
        h("path", {
          attrs: {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
          },
        }),
      ]
    );
  },
};

var UploadCloudIcon = {
  name: "UploadCloudIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-upload-cloud",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "16 16 12 12 8 16",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "12",
            x2: "12",
            y2: "21",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3",
          },
        }),
        h("polyline", {
          attrs: {
            points: "16 16 12 12 8 16",
          },
        }),
      ]
    );
  },
};

var UploadIcon = {
  name: "UploadIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-upload",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 8 12 3 7 8",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "3",
            x2: "12",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var UserCheckIcon = {
  name: "UserCheckIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-user-check",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8.5",
            cy: "7",
            r: "4",
          },
        }),
        h("polyline", {
          attrs: {
            points: "17 11 19 13 23 9",
          },
        }),
      ]
    );
  },
};

var UserMinusIcon = {
  name: "UserMinusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-user-minus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8.5",
            cy: "7",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "11",
            x2: "17",
            y2: "11",
          },
        }),
      ]
    );
  },
};

var UserPlusIcon = {
  name: "UserPlusIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-user-plus",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8.5",
            cy: "7",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "20",
            y1: "8",
            x2: "20",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "11",
            x2: "17",
            y2: "11",
          },
        }),
      ]
    );
  },
};

var UserXIcon = {
  name: "UserXIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-user-x",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "8.5",
            cy: "7",
            r: "4",
          },
        }),
        h("line", {
          attrs: {
            x1: "18",
            y1: "8",
            x2: "23",
            y2: "13",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "8",
            x2: "18",
            y2: "13",
          },
        }),
      ]
    );
  },
};

var UserIcon = {
  name: "UserIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-user",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "12",
            cy: "7",
            r: "4",
          },
        }),
      ]
    );
  },
};

var UsersIcon = {
  name: "UsersIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-users",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
          },
        }),
        h("circle", {
          attrs: {
            cx: "9",
            cy: "7",
            r: "4",
          },
        }),
        h("path", {
          attrs: {
            d: "M23 21v-2a4 4 0 0 0-3-3.87",
          },
        }),
        h("path", {
          attrs: {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
          },
        }),
      ]
    );
  },
};

var VideoOffIcon = {
  name: "VideoOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-video-off",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var VideoIcon = {
  name: "VideoIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-video",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "23 7 16 12 23 17 23 7",
          },
        }),
        h("rect", {
          attrs: {
            x: "1",
            y: "5",
            width: "15",
            height: "14",
            rx: "2",
            ry: "2",
          },
        }),
      ]
    );
  },
};

var VoicemailIcon = {
  name: "VoicemailIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-voicemail",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "5.5",
            cy: "11.5",
            r: "4.5",
          },
        }),
        h("circle", {
          attrs: {
            cx: "18.5",
            cy: "11.5",
            r: "4.5",
          },
        }),
        h("line", {
          attrs: {
            x1: "5.5",
            y1: "16",
            x2: "18.5",
            y2: "16",
          },
        }),
      ]
    );
  },
};

var Volume1Icon = {
  name: "Volume1Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-volume-1",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          },
        }),
        h("path", {
          attrs: {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07",
          },
        }),
      ]
    );
  },
};

var Volume2Icon = {
  name: "Volume2Icon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-volume-2",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          },
        }),
        h("path", {
          attrs: {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
          },
        }),
      ]
    );
  },
};

var VolumeXIcon = {
  name: "VolumeXIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-volume-x",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          },
        }),
        h("line", {
          attrs: {
            x1: "23",
            y1: "9",
            x2: "17",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "17",
            y1: "9",
            x2: "23",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var VolumeIcon = {
  name: "VolumeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-volume",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          },
        }),
      ]
    );
  },
};

var WatchIcon = {
  name: "WatchIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-watch",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "7",
          },
        }),
        h("polyline", {
          attrs: {
            points: "12 9 12 12 13.5 13.5",
          },
        }),
        h("path", {
          attrs: {
            d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83",
          },
        }),
      ]
    );
  },
};

var WifiOffIcon = {
  name: "WifiOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-wifi-off",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
        h("path", {
          attrs: {
            d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55",
          },
        }),
        h("path", {
          attrs: {
            d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39",
          },
        }),
        h("path", {
          attrs: {
            d: "M10.71 5.05A16 16 0 0 1 22.58 9",
          },
        }),
        h("path", {
          attrs: {
            d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88",
          },
        }),
        h("path", {
          attrs: {
            d: "M8.53 16.11a6 6 0 0 1 6.95 0",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var WifiIcon = {
  name: "WifiIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-wifi",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M5 12.55a11 11 0 0 1 14.08 0",
          },
        }),
        h("path", {
          attrs: {
            d: "M1.42 9a16 16 0 0 1 21.16 0",
          },
        }),
        h("path", {
          attrs: {
            d: "M8.53 16.11a6 6 0 0 1 6.95 0",
          },
        }),
        h("line", {
          attrs: {
            x1: "12",
            y1: "20",
            x2: "12.01",
            y2: "20",
          },
        }),
      ]
    );
  },
};

var WindIcon = {
  name: "WindIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-wind",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2",
          },
        }),
      ]
    );
  },
};

var XCircleIcon = {
  name: "XCircleIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-x-circle",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var XOctagonIcon = {
  name: "XOctagonIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-x-octagon",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points:
              "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var XSquareIcon = {
  name: "XSquareIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-x-square",
        },
        ctx.data,
      ]),
      [
        h("rect", {
          attrs: {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          },
        }),
        h("line", {
          attrs: {
            x1: "9",
            y1: "9",
            x2: "15",
            y2: "15",
          },
        }),
        h("line", {
          attrs: {
            x1: "15",
            y1: "9",
            x2: "9",
            y2: "15",
          },
        }),
      ]
    );
  },
};

var XIcon = {
  name: "XIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-x",
        },
        ctx.data,
      ]),
      [
        h("line", {
          attrs: {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18",
          },
        }),
        h("line", {
          attrs: {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18",
          },
        }),
      ]
    );
  },
};

var YoutubeIcon = {
  name: "YoutubeIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-youtube",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
          },
        }),
        h("polygon", {
          attrs: {
            points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
          },
        }),
      ]
    );
  },
};

var ZapOffIcon = {
  name: "ZapOffIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-zap-off",
        },
        ctx.data,
      ]),
      [
        h("polyline", {
          attrs: {
            points: "12.41 6.75 13 2 10.57 4.92",
          },
        }),
        h("polyline", {
          attrs: {
            points: "18.57 12.91 21 10 15.66 10",
          },
        }),
        h("polyline", {
          attrs: {
            points: "8 8 3 14 12 14 11 22 16 16",
          },
        }),
        h("line", {
          attrs: {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
          },
        }),
      ]
    );
  },
};

var ZapIcon = {
  name: "ZapIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-zap",
        },
        ctx.data,
      ]),
      [
        h("polygon", {
          attrs: {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
          },
        }),
      ]
    );
  },
};

var ZoomInIcon = {
  name: "ZoomInIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-zoom-in",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "11",
            cy: "11",
            r: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
          },
        }),
        h("line", {
          attrs: {
            x1: "11",
            y1: "8",
            x2: "11",
            y2: "14",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
          },
        }),
      ]
    );
  },
};

var ZoomOutIcon = {
  name: "ZoomOutIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-zoom-out",
        },
        ctx.data,
      ]),
      [
        h("circle", {
          attrs: {
            cx: "11",
            cy: "11",
            r: "8",
          },
        }),
        h("line", {
          attrs: {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
          },
        }),
        h("line", {
          attrs: {
            x1: "8",
            y1: "11",
            x2: "14",
            y2: "11",
          },
        }),
      ]
    );
  },
};
var MessengerIcon = {
  name: "MessengerIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            stroke: "currentColor",
            // "stroke-width": "2",
            // "stroke-linecap": "round",
            // "stroke-linejoin": "round",
          },
          class: "feather feather-messenger",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M0.789722 11.6362C0.789722 5.21623 5.98991 0 12.3938 0C18.7978 0 23.9979 5.21623 23.9979 11.6362C23.9979 18.0562 18.7978 23.2724 12.3938 23.2724C10.4197 23.2724 8.59 22.7749 6.96895 21.9242L1.92927 23.8984C0.821822 24.3317 -0.205375 23.3045 0.0353747 22.2292V22.2131L1.57617 15.8413C1.07862 14.5413 0.789722 13.1289 0.789722 11.6362ZM12.4259 1.0272C6.61585 1.0272 1.88112 5.77798 1.88112 11.6202C1.88112 13.0807 2.17002 14.445 2.69967 15.729L2.82807 16.0499L1.23912 22.6465L6.68005 20.5118L7.1134 20.7686C8.6863 21.6835 10.4839 22.2131 12.4259 22.2131C18.236 22.2131 22.9708 17.4623 22.9708 11.6202C22.9708 5.77798 18.236 1.0272 12.4259 1.0272Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M12.6024 14.5412L11.511 11.1225L7.88375 13.9152C7.5788 14.156 7.1294 14.1078 6.9047 13.7868C6.66395 13.4819 6.7121 13.0485 7.0331 12.8078L12.2654 8.76318L13.3407 12.1818L16.968 9.37308C17.273 9.13233 17.7224 9.19653 17.9631 9.50148C18.2039 9.80643 18.1397 10.2558 17.8347 10.4966L12.6024 14.5412Z",
            fill: "currentColor",
          },
        }),
      ]
    );
  },
};

var ComissionsIcon = {
  name: "ComissionsIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "24",
            viewBox: "0 0 20 24",
            fill: "none",
            stroke: "currentColor",
            // "stroke-width": "2",
            // "stroke-linecap": "round",
            // "stroke-linejoin": "round",
          },
          class: "feather feather-comissions",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M9.77502 23.9941C8.3912 23.9941 7.00739 23.9949 5.62357 23.9941C3.99475 23.9932 2.72921 23.2443 1.71965 22.0352C0.535212 20.6167 0.216714 18.9391 0.378075 17.1423C0.608711 14.5688 1.60729 12.2688 2.95816 10.1133C3.61459 9.06544 4.38337 8.08771 5.09809 7.0762C5.20961 6.91746 5.33802 6.85498 5.54247 6.85498C8.37262 6.86342 11.2028 6.8592 14.0338 6.86596C14.1504 6.86596 14.3083 6.91408 14.3768 6.99683C16.063 9.06966 17.4992 11.2911 18.4167 13.819C18.9439 15.2713 19.2387 16.7632 19.2066 18.3176C19.1551 20.7561 17.6336 22.975 15.4201 23.7416C14.9825 23.8936 14.4993 23.973 14.0355 23.9831C12.6145 24.0135 11.1943 23.9941 9.77502 23.9941ZM8.91584 10.2678C8.76378 10.2914 8.63367 10.3125 8.50273 10.3319C7.28534 10.5101 6.34843 11.6052 6.34505 12.8523C6.34167 14.096 7.27689 15.2316 8.49343 15.3701C9.19041 15.4494 9.90006 15.4157 10.6046 15.4283C11.1082 15.4376 11.4824 15.7922 11.4875 16.271C11.4925 16.7683 11.1217 17.1356 10.6046 17.1389C10.1138 17.1423 9.62211 17.1221 9.13211 17.1449C8.66577 17.1668 8.33292 17.0131 8.09214 16.5969C7.86151 16.1975 7.33096 16.1021 6.93896 16.3436C6.56133 16.5766 6.42615 17.0714 6.64327 17.4699C6.86039 17.8676 7.13495 18.2324 7.54554 18.4325C7.96964 18.6385 8.42669 18.7778 8.91584 18.9644C8.91584 19.1307 8.91331 19.3798 8.91669 19.628C8.9226 20.1709 9.28165 20.5652 9.7708 20.5686C10.2591 20.5711 10.6258 20.1768 10.6325 19.6365C10.6359 19.3798 10.6334 19.124 10.6334 18.8707C10.8057 18.8462 10.9468 18.8276 11.087 18.8057C12.2732 18.6258 13.2092 17.5054 13.2033 16.2743C13.1974 15.0391 12.2563 13.8984 11.0668 13.7717C10.3605 13.6966 9.64238 13.727 8.92935 13.7126C8.42922 13.7025 8.06089 13.3403 8.06173 12.8548C8.06258 12.3676 8.42838 12.0054 8.93105 12.002C9.43963 11.9987 9.94906 12.0172 10.4576 11.9961C10.9062 11.9775 11.2197 12.1405 11.4495 12.5323C11.686 12.9359 12.2022 13.0397 12.5984 12.8025C12.9904 12.5677 13.1256 12.0696 12.8975 11.6584C12.5393 11.0116 12.0113 10.5717 11.2889 10.3843C11.0777 10.3294 10.8589 10.2999 10.6334 10.2568C10.6334 9.99589 10.6367 9.74682 10.6325 9.49774C10.6249 8.9599 10.2523 8.56391 9.76404 8.57151C9.27996 8.57911 8.92429 8.96243 8.91669 9.4893C8.91247 9.74851 8.91584 10.0052 8.91584 10.2678Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M9.76236 5.14418C8.52217 5.14418 7.28197 5.13996 6.04093 5.14925C5.86098 5.15094 5.77565 5.09099 5.69792 4.93394C5.10909 3.73668 4.50842 2.54449 3.91451 1.34891C3.67881 0.874398 3.74133 0.476718 4.09109 0.190489C4.42226 -0.0805413 4.82945 -0.0611217 5.23835 0.245371C6.3797 1.09983 8.07525 1.0897 9.20477 0.221729C9.58156 -0.0678763 9.96174 -0.0737867 10.3318 0.203998C11.528 1.10406 13.1383 1.10743 14.359 0.206531C14.6708 -0.0231268 14.9935 -0.069565 15.3322 0.119565C15.6491 0.296875 15.8003 0.582259 15.7665 0.943633C15.7538 1.08126 15.6972 1.22057 15.6355 1.34553C15.0399 2.5504 14.4359 3.75104 13.8428 4.95674C13.7668 5.11125 13.6722 5.14925 13.5117 5.1484C12.2613 5.14165 11.0118 5.14418 9.76236 5.14418Z",
            fill: "currentColor",
          },
        }),
      ]
    );
  },
};

var UsersAmgIcon = {
  name: "UsersAmgIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "31",
            height: "25",
            viewBox: "0 0 31 25",
            fill: "none",
            stroke: "currentColor",
            // "stroke-width": "2",
            // "stroke-linecap": "round",
            // "stroke-linejoin": "round",
          },
          class: "feather feather-users-amg",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M15.5048 24.1584C12.4632 24.1335 9.50435 23.5922 6.63345 22.4778C6.03961 22.2475 5.71269 21.8015 5.70648 21.1207C5.69614 19.9314 5.68165 18.7411 5.73338 17.5541C5.80787 15.8508 6.66241 14.6219 7.87492 13.6641C9.14949 12.6587 10.5979 12.0777 12.1156 11.6919C12.2345 11.6613 12.3928 11.7067 12.5056 11.7725C14.5023 12.9435 16.4949 12.9424 18.4947 11.7793C18.6178 11.7078 18.7916 11.6624 18.9219 11.6976C20.51 12.1231 22.0298 12.7313 23.3416 13.84C24.6389 14.9351 25.3352 16.3626 25.3072 18.1873C25.2938 19.0928 25.3083 19.9995 25.3041 20.9051C25.3 21.8129 25.0331 22.2305 24.2644 22.5232C21.4297 23.6047 18.5071 24.1346 15.5048 24.1584Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M20.3044 6.02702C20.3044 8.94904 18.1308 11.332 15.4854 11.3082C12.8338 11.2844 10.7026 8.93202 10.7026 6.02929C10.7026 3.11067 12.8731 0.73107 15.5216 0.744687C18.1628 0.758304 20.3044 3.12429 20.3044 6.02702Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M6.66153 5.37897C8.42338 5.36762 9.8428 6.90409 9.85211 8.83319C9.86142 10.7646 8.45959 12.3396 6.71636 12.3589C4.97106 12.3771 3.51337 10.8156 3.50095 8.9149C3.4875 6.95516 4.88726 5.39032 6.66153 5.37897Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M24.3154 5.37897C26.072 5.36762 27.5008 6.91657 27.507 8.8366C27.5132 10.7623 26.1031 12.343 24.364 12.3589C22.6114 12.3748 21.1672 10.8213 21.1599 8.91036C21.1517 6.93814 22.5349 5.38918 24.3154 5.37897Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M26.5179 21.1612C26.5179 20.9036 26.521 20.6812 26.5179 20.4599C26.4992 19.3013 26.5323 18.1382 26.4454 16.9853C26.3554 15.7869 25.8578 14.7441 25.1626 13.817C25.1305 13.775 25.1046 13.7262 25.0953 13.7103C25.594 13.4788 26.0875 13.2462 26.5851 13.0249C26.6472 12.9977 26.7341 13.0147 26.8055 13.034C27.8783 13.3211 28.8994 13.741 29.7684 14.5126C30.5733 15.2275 31.0296 16.1342 30.9985 17.303C30.9799 18.0099 30.9923 18.718 30.9965 19.425C30.9985 19.7439 30.8775 19.9822 30.6095 20.0922C29.3039 20.6313 27.959 20.9864 26.5179 21.1612Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M5.92587 13.7101C5.14995 14.6906 4.64509 15.8322 4.53232 17.1303C4.45163 18.0563 4.49715 18.9959 4.48784 19.9298C4.48473 20.3224 4.4868 20.7162 4.4868 21.1985C3.74709 21.0453 3.05187 20.9318 2.37009 20.7525C1.74522 20.5891 1.13483 20.361 0.520301 20.1511C0.172689 20.0331 -0.0042203 19.7811 0.00612529 19.3613C0.0216437 18.7247 0.0350929 18.0858 0.00509073 17.4515C-0.061121 16.0523 0.52237 15.0378 1.5321 14.2707C2.33699 13.6602 3.23912 13.2914 4.18471 13.0395C4.26644 13.0179 4.36679 13.0032 4.44025 13.035C4.92752 13.2483 5.40963 13.4741 5.92587 13.7101Z",
            fill: "currentColor",
          },
        }),
      ]
    );
  },
};
var AmgIcon = {
  name: "AmgIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "44",
            height: "54",
            viewBox: "0 0 44 54",
            fill: "none",
            // "stroke-width": "2",
            // "stroke-linecap": "round",
            // "stroke-linejoin": "round",
          },
          class: "feather feather-amg",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M34.5961 45.3297C34.643 47.2444 33.7259 48.3671 31.857 48.5615C31.5062 48.5984 31.1208 48.3023 30.436 48.0376C31.8436 47.2724 33.536 47.2713 33.2522 45.1085C32.0927 46.7742 30.9141 46.0357 29.8652 45.3275C28.1906 44.1959 26.5988 42.9402 24.9823 41.7226C24.6159 41.4467 24.2931 41.1115 23.7412 40.6178C24.0149 42.9179 25.1968 44.4763 26.3653 46.019C27.4891 47.5036 28.6364 48.9782 29.8763 50.3656C30.6628 51.2459 30.0428 51.8335 29.5513 52.2938C29.0028 52.8065 28.3113 52.897 27.7583 52.0469C27.2053 51.199 26.5362 50.4204 25.8671 49.6563C25.0929 48.7704 24.4729 47.8756 24.7432 46.5943C24.7991 46.3273 24.6137 45.9006 24.3981 45.7017C22.528 43.9825 21.7137 41.8008 21.3562 39.3432C21.1149 37.682 20.6513 36.0533 20.0347 34.3911C19.8369 37.1078 19.6381 39.8246 19.4404 42.5414C17.663 37.5804 17.9401 32.5288 18.2786 27.3332C17.9792 27.6862 17.6552 28.0213 17.3849 28.3944C15.6199 30.8342 14.4659 33.5555 14.0794 36.5281C13.7107 39.3711 14.5988 41.9672 16.9894 43.5669C19.8213 45.4615 21.6232 48.2152 23.7758 50.6874C24.4405 51.4515 25.056 52.258 25.6939 53.0456C25.6503 53.1707 25.6079 53.2947 25.5643 53.4198C25.1052 53.2925 24.5299 53.298 24.2048 53.0154C22.5481 51.5743 21.0166 49.9847 19.3264 48.5861C17.052 46.7015 15.0591 44.6148 13.7521 41.9069C12.7802 43.4273 13.0695 47.708 14.7429 49.6507C16.7213 51.9463 19.2493 52.6389 22.3627 52.4144C18.7176 53.9024 15.1496 51.638 13.5622 49.2686C13.5152 49.1994 13.4918 49.1145 13.4482 49.0419C10.9593 44.9332 10.9638 44.9343 12.0976 39.4705C12.4149 37.9423 12.6942 36.4074 13.0036 34.8111C12.0898 34.4882 11.4084 34.5474 10.8532 35.4489C10.1986 36.5135 9.42328 37.5033 8.68264 38.55C7.29296 35.5741 9.49366 33.666 10.4376 31.262C8.99878 32.216 7.55883 33.1701 5.90664 34.2648C5.90664 33.5398 5.78711 32.9399 5.93121 32.4115C6.26411 31.1905 6.74558 30.0098 7.12093 28.7999C7.24046 28.4145 7.31977 27.9643 7.24046 27.5812C7.09635 26.8863 7.14997 26.3635 7.79789 25.9323C8.01349 25.7893 8.1509 25.3827 8.1576 25.0934C8.19111 23.5797 8.12632 22.0627 8.18218 20.5501C8.23692 19.061 9.84331 17.344 11.3067 16.9698C11.8943 16.8201 12.4093 16.4068 12.988 16.1968C14.2056 15.7533 15.421 15.2651 16.6789 14.9735C18.7958 14.4831 20.9239 14.377 23.0665 15.026C25.17 15.6639 26.5451 16.9754 27.4031 18.9739C27.6824 19.6252 28.1739 20.2753 28.738 20.6998C30.6963 22.1733 32.7518 23.516 34.7112 24.9873C35.0742 25.2598 35.3423 25.8955 35.3435 26.3635C35.3446 27.2438 35.8071 27.5745 36.4773 27.98C38.7897 29.3764 41.0854 30.8107 43.295 32.3613C43.7485 32.6796 44.0066 33.5644 43.9999 34.1844C43.9887 35.211 43.7497 36.2488 43.5006 37.2553C43.0247 39.1734 42.5745 41.1093 41.921 42.9704C41.368 44.5455 40.1202 45.3677 38.3797 45.332C37.1967 45.3107 36.0137 45.3297 34.5961 45.3297ZM41.6495 39.1309C41.8405 39.1454 42.0316 39.16 42.2226 39.1745C42.2952 38.1233 42.3678 37.0721 42.4449 35.9461C41.7087 36.0321 41.311 36.079 40.8273 36.1348C40.8809 35.7629 40.9178 35.5015 40.9681 35.1518C39.4779 35.4467 39.1215 34.5106 38.8355 33.4482C40.1626 33.7845 41.4194 34.1028 42.6839 34.4234C43.0571 33.666 43.1051 33.5957 42.2304 32.9958C39.5918 31.185 36.9119 29.4345 34.1794 27.6136C34.7212 26.6942 34.3727 26.0016 33.3684 25.3794C32.0413 24.5572 30.856 23.5015 29.5211 22.6938C28.6933 22.1923 27.727 21.7968 26.7764 21.6427C23.9814 21.188 23.1525 21.8583 22.9738 24.6633C22.9213 25.4799 23.1871 26.3211 23.3357 27.1455C23.529 28.219 23.7177 29.2948 23.9769 30.3527C24.0674 30.7214 24.2875 31.1269 24.5723 31.3693C26.1184 32.6875 27.6589 34.0191 29.291 35.2266C30.2673 35.9494 30.4215 36.8431 30.4193 37.9479C29.5434 37.8127 28.7648 37.6932 27.9337 37.5647C27.2165 41.0702 29.3748 43.1726 31.4124 45.5487C32.8445 43.7971 34.7458 43.8808 36.6672 44.0339C37.0046 44.0607 37.3453 44.0439 37.6838 44.0484C40.4084 44.083 41.6372 42.4219 40.719 39.4705C38.3786 40.1028 36.0215 40.7384 33.6253 41.3864C33.336 40.4815 33.6466 40.0883 34.5201 40.0201C35.4887 39.9442 36.4784 39.9196 37.4146 39.6928C38.8523 39.3454 40.6843 39.8179 41.4283 37.7424C41.5222 38.3311 41.5858 38.731 41.6495 39.1309ZM19.1845 24.6767C18.6394 23.907 18.1546 23.1664 17.6139 22.4682C15.8433 20.1837 14.095 19.7089 11.3804 20.74C9.25236 21.5477 8.66253 22.6369 9.26577 24.8487C9.9405 27.3242 11.5246 29.211 13.3521 30.9291C12.8919 29.4389 12.2373 28.0213 11.8619 26.5322C11.5592 25.3313 11.4933 24.0433 11.529 22.7989C11.5424 22.3375 12.2618 21.4572 12.4629 21.5108C13.9476 21.9018 15.383 22.4805 16.833 22.9999C16.7984 23.1195 16.7638 23.239 16.728 23.3585C15.8254 23.4099 14.9239 23.4624 13.5923 23.5384C14.0135 24.2611 14.1844 25.0185 14.5977 25.1906C17.806 26.5266 17.8206 26.492 19.1845 24.6767ZM25.8302 20.0731C24.9086 16.9575 23.7647 15.8248 21.3171 15.8851C18.8751 15.9443 16.4409 16.2973 14.0034 16.5218C14.0001 16.6503 13.9978 16.7788 13.9945 16.9072C17.9814 17.4915 22.0276 17.8523 25.8302 20.0731ZM26.4915 37.5178C26.5876 37.4296 26.6848 37.3402 26.7808 37.252C24.3277 33.9833 21.7438 30.7884 20.7328 26.5858C19.0415 29.3741 19.0773 30.8621 21.1752 32.9511C22.8263 34.5944 24.7109 36.0041 26.4915 37.5178ZM11.0062 18.3885C11.033 18.5002 11.0598 18.6108 11.0866 18.7225C14.9876 19.4442 18.8885 20.167 22.9447 20.9177C22.0365 19.3325 20.6334 18.7963 19.1075 18.6376C16.8018 18.3975 14.4815 18.2902 12.1658 18.1629C11.7848 18.1416 11.3939 18.3081 11.0062 18.3885ZM10.5069 30.1248C9.77517 29.7629 9.23337 29.4948 8.57987 29.1708C8.26596 29.9617 7.99115 30.6532 7.59235 31.6541C8.71168 31.0665 9.50818 30.6488 10.5069 30.1248ZM19.0449 22.2459C20.4558 23.2211 21.2635 23.1373 22.0019 21.8739C20.9786 22.0024 20.0436 22.1197 19.0449 22.2459ZM14.1185 28.2604C14.1185 29.0703 14.1185 29.6959 14.1185 30.584C14.6558 29.955 15.0155 29.535 15.4367 29.0424C14.9496 28.753 14.5765 28.5318 14.1185 28.2604Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M12.7724 52.3696C10.7672 51.1028 8.76308 49.836 6.75899 48.567C6.72436 48.5458 6.7009 48.5067 6.67409 48.4732C5.96138 47.6007 6.08761 42.8184 6.84613 41.9571C7.73423 40.9495 8.62009 39.9407 9.73719 39.0146C9.29817 41.7002 8.85803 44.3868 8.41901 47.0723C8.48492 47.0924 8.55083 47.1114 8.61674 47.1315C8.8558 46.7048 9.09598 46.2792 9.46239 45.6268C10.7147 47.8621 11.8832 49.9489 13.0516 52.0356C12.96 52.1473 12.8662 52.259 12.7724 52.3696Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M4.96269 32.4504C4.12151 34.3941 3.27922 36.3368 2.43804 38.2805C2.46261 38.3096 2.48719 38.3398 2.51177 38.3688C2.97648 37.7935 3.44008 37.2182 3.9048 36.6418C3.98746 36.663 4.07013 36.6853 4.15168 36.7065C3.92825 40.0344 3.70483 43.3623 3.48141 46.6901C3.36523 46.7415 3.24794 46.794 3.13176 46.8454C2.52629 45.9752 1.77559 45.1708 1.33992 44.2224C-0.49883 40.221 -0.49883 40.1852 1.67394 36.3502C2.49501 34.9002 3.51381 33.563 4.44324 32.1733C4.61751 32.2672 4.79066 32.3588 4.96269 32.4504Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M4.03436 25.9535C4.5918 25.9915 4.96156 26.0161 5.46091 26.0496C4.23097 28.1609 3.05801 30.1751 1.88506 32.1881C1.77111 32.1646 1.65717 32.1401 1.54322 32.1166C1.46279 30.0299 1.36448 27.9431 1.32092 25.8552C1.31533 25.5737 1.51083 25.2062 1.73201 25.0141C3.10605 23.8243 4.50355 22.6592 5.92115 21.522C6.14122 21.3455 6.50763 21.35 6.8059 21.2695C6.86287 21.5935 6.91314 21.9197 6.97905 22.2425C7.40243 24.3181 6.16692 25.147 4.45216 25.6262C4.3438 25.6575 4.26002 25.7726 4.03436 25.9535Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M4.82092 40.8324C4.9237 39.4226 4.78182 37.9156 5.21526 36.5974C5.51129 35.6948 6.60717 35.0536 7.51314 34.123C6.5368 36.555 5.67662 38.6998 4.82092 40.8324Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M29.4194 28.8603C30.2081 28.7776 30.9968 28.6939 31.7732 28.6123C32.287 29.0726 32.8098 29.5417 33.4868 30.1472C31.9821 29.8031 30.646 29.4982 29.3099 29.1932C29.3457 29.0826 29.3825 28.9709 29.4194 28.8603Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M31.5454 25.7725C32.0101 26.4092 32.391 26.9331 32.772 27.4559C32.219 27.6872 31.6649 27.9173 31.2594 28.0871C31.3521 27.3386 31.4258 26.7421 31.5454 25.7725Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M25.523 5.69143C26.3586 5.38758 26.8501 4.40341 26.6367 3.37456C26.4066 2.25969 25.437 1.51793 24.4707 1.71789C23.5055 1.91785 22.909 2.98357 23.1402 4.09844C23.2128 4.45033 23.3603 4.76535 23.5569 5.02564L21.5338 6.05896L18.9924 3.74543C19.4057 3.2863 19.6001 2.59147 19.4515 1.87428C19.2214 0.759414 18.2518 0.0176568 17.2855 0.217618C16.3203 0.41758 15.7237 1.4833 15.955 2.59817C16.0555 3.08411 16.2968 3.49967 16.6163 3.79682L14.267 6.3427L11.1313 4.95191C11.3157 4.54751 11.3771 4.06157 11.2743 3.56558C11.0442 2.45071 10.0745 1.70895 9.10825 1.90891C8.14308 2.10888 7.54654 3.17459 7.77778 4.28946C7.92524 5.00441 8.37879 5.5652 8.93845 5.82325L7.59346 9.04498L5.37154 9.15334C5.47208 8.8115 5.49442 8.42945 5.41399 8.0407C5.18387 6.92583 4.21422 6.18407 3.24793 6.38403C2.28275 6.584 1.68621 7.64971 1.91745 8.76458C2.14087 9.84482 3.05913 10.5732 3.99415 10.4347L6.70536 14.4808C6.70536 14.4808 14.7105 6.63427 25.0918 10.9228L25.523 5.69143ZM23.911 8.80703C22.7749 8.46632 14.5575 6.30919 6.66962 12.4309L6.78915 12.6231L5.22297 10.3509L8.28718 10.2023L10.0801 5.91038C10.1539 5.88804 10.2254 5.86235 10.2935 5.82995L14.5519 7.71786L17.7189 4.28388C17.7982 4.28835 17.8775 4.28723 17.9568 4.27941L21.4288 7.4397L24.4115 5.91597L23.911 8.80703Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M10.9682 15.3352C10.9515 15.3096 10.9436 15.2961 10.928 15.2693C11.2263 15.0593 11.2598 14.98 11.1682 14.8236C10.861 14.2952 10.7068 14.0316 10.3996 13.5032C10.3024 14.4215 10.2857 14.8772 10.3091 15.7687C10.2656 15.7988 10.2443 15.8134 10.2019 15.8435C9.37858 15.5296 8.94738 15.3978 8.05257 15.1934C8.4201 15.6324 8.60442 15.8513 8.97307 16.2904C9.12388 16.4702 9.23671 16.4568 9.56513 16.2222C9.58412 16.2468 9.59418 16.2591 9.61317 16.2825C9.25346 16.5652 9.07696 16.7138 8.73624 17.0254C8.71502 17.0031 8.70496 16.9908 8.68374 16.9685C8.95296 16.6892 8.98424 16.6266 8.85354 16.4758C8.47596 16.0379 8.28828 15.8189 7.9107 15.3822C7.80234 15.2559 7.70404 15.2772 7.39013 15.5397C7.36891 15.5173 7.35885 15.505 7.33875 15.4827C7.75878 15.0995 7.97549 14.9174 8.4201 14.5734C9.12611 14.7633 9.46795 14.875 10.127 15.1319C10.1382 14.4226 10.1617 14.0629 10.2488 13.3379C10.7258 13.0586 10.9693 12.929 11.4653 12.6899C11.4787 12.7179 11.4854 12.7313 11.4988 12.7592C11.1481 12.9458 11.1023 13.0329 11.2084 13.2384C11.4508 13.7065 11.5715 13.9411 11.8139 14.4092C11.9178 14.6091 11.9803 14.6438 12.3367 14.4952C12.3501 14.5231 12.3568 14.5365 12.3702 14.5644C11.7949 14.8426 11.5145 14.9968 10.9682 15.3352Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M12.5546 14.4776C12.5412 14.4496 12.5356 14.4362 12.5222 14.4083C12.8406 14.2363 12.9076 14.1715 12.8316 13.9961C12.6026 13.4644 12.4876 13.1985 12.2586 12.6667C12.1904 12.5081 12.0675 12.5092 11.7067 12.6612C11.6933 12.6332 11.6877 12.6198 11.6743 12.5919C12.3658 12.269 12.7199 12.1283 13.4393 11.8848C13.4494 11.9138 13.4539 11.9283 13.4639 11.9574C13.0886 12.0937 13.0003 12.1841 13.0606 12.345C13.2617 12.8879 13.3634 13.1594 13.5645 13.7023C13.6337 13.89 13.7309 13.8855 14.0806 13.7838C14.0906 13.8129 14.0951 13.8274 14.1051 13.8565C13.474 14.0698 13.1634 14.1938 12.5546 14.4776Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M16.1976 13.3133C16.192 13.2831 16.1886 13.2675 16.183 13.2373C16.488 13.1748 16.5416 13.1502 16.536 13.1111C16.5305 13.0776 16.4981 13.0519 16.3942 12.9938C16.0021 12.7782 15.7988 12.6765 15.3798 12.4877C15.3329 12.5302 15.3106 12.5514 15.2637 12.5939C15.3195 12.8284 15.3463 12.9469 15.4022 13.1815C15.4368 13.3278 15.515 13.3446 15.858 13.301C15.8647 13.3311 15.8669 13.3468 15.8736 13.3769C15.2469 13.5065 14.9375 13.5881 14.3275 13.7836C14.3186 13.7545 14.313 13.74 14.3041 13.7098C14.6347 13.5814 14.6861 13.5322 14.637 13.3635C14.475 12.805 14.3934 12.5257 14.2315 11.9672C14.1778 11.784 14.0739 11.7717 13.7154 11.8733C13.7064 11.8443 13.7008 11.8298 13.6919 11.7996C14.3879 11.5762 14.742 11.4835 15.4569 11.336C15.4636 11.3662 15.4659 11.3818 15.4726 11.412C15.0849 11.508 15.0257 11.584 15.0693 11.7661C15.1318 12.0331 15.1642 12.1671 15.2268 12.4341C15.5865 12.0766 15.7764 11.9035 16.1763 11.5684C16.3227 11.4466 16.3662 11.4064 16.3584 11.3583C16.3495 11.2969 16.2813 11.2824 16.0892 11.3047C16.0144 11.3137 15.9764 11.3181 15.9015 11.3282C15.8959 11.298 15.8937 11.2824 15.8881 11.2522C16.5036 11.1405 16.8153 11.0992 17.4387 11.0444C17.4409 11.0746 17.4431 11.0902 17.4454 11.1215C16.917 11.2053 16.688 11.2679 15.858 12.0476C16.5651 12.3861 16.9002 12.576 17.5269 12.9848C17.5884 13.0251 17.6476 13.0351 17.7671 13.0295C17.7693 13.0597 17.7704 13.0753 17.7727 13.1066C17.1393 13.1558 16.8231 13.1982 16.1976 13.3133Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M19.5689 13.0743C19.57 13.043 19.5711 13.0285 19.5722 12.9972C19.6337 12.9961 19.6649 12.9961 19.7264 12.995C19.8861 12.9939 19.9498 12.9738 19.9543 12.9067C19.9587 12.8397 19.9096 12.7269 19.7532 12.4755C19.3052 12.4521 19.0818 12.4487 18.635 12.4577C18.6104 12.5001 18.5981 12.5213 18.5724 12.5638C18.5154 12.661 18.4272 12.7928 18.4294 12.8665C18.4317 12.947 18.5389 12.9749 18.8226 12.9849C18.8226 13.0162 18.8226 13.0307 18.8238 13.062C18.4384 13.0654 18.2451 13.0732 17.8608 13.1011C17.8586 13.0698 17.8575 13.0553 17.8552 13.024C18.0731 12.9838 18.139 12.9246 18.3132 12.6275C18.7199 11.9393 18.9466 11.6008 19.4493 10.9429C19.5108 10.9451 19.5409 10.9451 19.6024 10.9485C20.0626 11.6098 20.2704 11.9483 20.639 12.6353C20.8513 13.033 20.9228 13.1112 21.1194 13.1402C21.1149 13.1704 21.1127 13.186 21.1082 13.2162C20.4927 13.1279 20.1844 13.0989 19.5689 13.0743ZM19.1879 11.5874C18.9857 11.8835 18.8897 12.0343 18.7065 12.3359C19.0963 12.3303 19.2918 12.3325 19.6828 12.3515C19.4951 12.0432 19.3957 11.8902 19.1879 11.5874Z",
            fill: "currentColor",
          },
        }),
        h("path", {
          attrs: {
            d: "M24.96 12.1461C24.7768 12.0936 24.6595 12.0891 24.5635 12.1304C24.0373 12.3527 23.7848 12.4745 23.3 12.7359C23.2408 12.947 23.2106 13.0521 23.1514 13.2632C23.0866 13.4944 23.138 13.5458 23.5033 13.6832C23.4944 13.7123 23.4899 13.7268 23.4799 13.7569C22.8308 13.5525 22.5024 13.4699 21.8422 13.3414C21.8478 13.3112 21.8511 13.2956 21.8567 13.2654C22.2577 13.3213 22.3192 13.2744 22.3706 13.0498C22.4074 12.8867 22.4264 12.8052 22.4633 12.641C22.193 12.1651 22.0455 11.9305 21.7282 11.468C21.6445 11.3474 21.4925 11.2524 21.3093 11.22C21.3138 11.1898 21.316 11.1742 21.3205 11.144C22.0477 11.2457 22.4108 11.315 23.1313 11.4959C23.1235 11.5261 23.1202 11.5406 23.1123 11.5708C23.0542 11.5585 23.0252 11.5529 22.966 11.5417C22.7504 11.4993 22.6722 11.4926 22.6577 11.5618C22.6521 11.5887 22.6979 11.6847 22.7448 11.7685C22.9336 12.1059 23.0218 12.2757 23.1883 12.6175C23.4653 12.4656 23.6072 12.393 23.8965 12.2533C24.0697 12.1684 24.1859 12.0802 24.2049 12.0221C24.2328 11.9372 24.1568 11.8824 23.7994 11.7607C23.8083 11.7316 23.8128 11.716 23.8217 11.687C24.2909 11.8255 24.5255 11.9037 24.988 12.0779C24.9757 12.1036 24.9701 12.1182 24.96 12.1461Z",
            fill: "currentColor",
          },
        }),
      ]
    );
  },
};
var DashboardIcon = {
  name: "DashboardIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-dashboard",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M15.6505 13.9937H3.4141L5.16647 12.2082C5.34775 12.2583 5.5391 12.2884 5.73045 12.2884C6.98934 12.2884 8.00652 11.2752 8.00652 10.0213C8.00652 9.50972 7.82524 9.03825 7.53318 8.65705L8.8827 5.8884C9.35604 5.87837 9.7891 5.7279 10.1416 5.47712L12.4579 6.7511C12.4579 6.79122 12.4479 6.82132 12.4479 6.86144C12.4479 8.11536 13.465 9.12853 14.7239 9.12853C15.9828 9.12853 17 8.11536 17 6.86144C17 5.60752 15.9828 4.59436 14.7239 4.59436C14.2405 4.59436 13.7974 4.74483 13.4348 4.99561L11.1084 3.7116C11.1084 3.6815 11.1185 3.65141 11.1185 3.62132C11.1185 2.3674 10.1013 1.35423 8.84242 1.35423C7.58353 1.35423 6.57642 2.37743 6.57642 3.62132C6.57642 4.15298 6.76777 4.63448 7.06991 5.01567L5.74052 7.76426C4.48164 7.76426 3.46446 8.77743 3.46446 10.0313C3.46446 10.3423 3.52488 10.6332 3.64573 10.9041L2.01422 12.5492V1.00313C2.01422 0.451411 1.56102 0 1.00711 0C0.453199 0 0 0.451411 0 1.00313V16H15.6505C16.2044 16 16.6576 15.5486 16.6576 14.9969C16.6576 14.4451 16.2145 13.9937 15.6505 13.9937ZM14.7239 6.02884C15.1872 6.02884 15.5598 6.4 15.5598 6.86144C15.5598 7.32288 15.1872 7.69404 14.7239 7.69404C14.2607 7.69404 13.888 7.32288 13.888 6.86144C13.888 6.4 14.2607 6.02884 14.7239 6.02884ZM4.89455 10.0313C4.89455 9.56991 5.26718 9.19875 5.73045 9.19875C6.19372 9.19875 6.57642 9.56991 6.57642 10.0313C6.57642 10.4928 6.20379 10.864 5.74052 10.864C5.27725 10.864 4.89455 10.4928 4.89455 10.0313ZM8.85249 2.78871C9.31576 2.78871 9.68839 3.15987 9.68839 3.62132C9.68839 4.08276 9.31576 4.46395 8.85249 4.46395C8.38922 4.46395 8.00652 4.08276 8.00652 3.62132C8.00652 3.15987 8.38922 2.78871 8.85249 2.78871Z",
            fill: "currentColor"
          },
        }),
      ]
    );
  },
};
var QuestionIcon = {
  name: "QuestionIcon",
  props: {
      size: {
          type: String,
          default: "18",
          validator: function validator(s) {
              return (
                  !isNaN(s) ||
                  (s.length >= 2 &&
                      !isNaN(s.slice(0, s.length - 1)) &&
                      s.slice(-1) === "x")
              );
          },
      },
  },
  functional: true,
  render: function render(h, ctx) {
      var size =
          ctx.props.size.slice(-1) === "x"
              ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
              : parseInt(ctx.props.size) + "px";
      var attrs = ctx.data.attrs || {};
      attrs.width = attrs.width || size;
      attrs.height = attrs.height || size;
      ctx.data.attrs = attrs;
      return h(
          "svg",
          _mergeJSXProps([
              {
                  attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 384 512",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                  },
                  class: "feather feather-question",
              },
              ctx.data,
          ]),
          [
              h("path", {
                  attrs: {
                      d: "M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z",
                      fill: "currentColor"
                  },
              }),
          ]
      );
  },
};
var PhoneSlashIcon = {
  name: "PhoneSlashIcon",
  props: {
      size: {
          type: String,
          default: "18",
          validator: function validator(s) {
              return (
                  !isNaN(s) ||
                  (s.length >= 2 &&
                      !isNaN(s.slice(0, s.length - 1)) &&
                      s.slice(-1) === "x")
              );
          },
      },
  },
  functional: true,
  render: function render(h, ctx) {
      var size =
          ctx.props.size.slice(-1) === "x"
              ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
              : parseInt(ctx.props.size) + "px";
      var attrs = ctx.data.attrs || {};
      attrs.width = attrs.width || size;
      attrs.height = attrs.height || size;
      ctx.data.attrs = attrs;
      return h(
          "svg",
          _mergeJSXProps([
              {
                  attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 640 512",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                  },
                  class: "feather feather-phone-slash",
              },
              ctx.data,
          ]),
          [
              h("path", {
                  attrs: {
                      d: "M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z",
                      fill: "currentColor"
                  },
              }),
          ]
      );
  },
};
var ThListIcon = {
  name: "ThListIcon",
  props: {
      size: {
          type: String,
          default: "18",
          validator: function validator(s) {
              return (
                  !isNaN(s) ||
                  (s.length >= 2 &&
                      !isNaN(s.slice(0, s.length - 1)) &&
                      s.slice(-1) === "x")
              );
          },
      },
  },
  functional: true,
  render: function render(h, ctx) {
      var size =
          ctx.props.size.slice(-1) === "x"
              ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
              : parseInt(ctx.props.size) + "px";
      var attrs = ctx.data.attrs || {};
      attrs.width = attrs.width || size;
      attrs.height = attrs.height || size;
      ctx.data.attrs = attrs;
      return h(
          "svg",
          _mergeJSXProps([
              {
                  attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 512 512",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                  },
                  class: "feather feather-th-list",
              },
              ctx.data,
          ]),
          [
              h("path", {
                  attrs: {
                      d: "M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z",
                      fill: "currentColor"
                  },
              }),
          ]
      );
  },
};
var Edit2SlashIcon = {
  name: "Edit2SlashIcon",
  props: {
      size: {
          type: String,
          default: "18",
          validator: function validator(s) {
              return (
                  !isNaN(s) ||
                  (s.length >= 2 &&
                      !isNaN(s.slice(0, s.length - 1)) &&
                      s.slice(-1) === "x")
              );
          },
      },
  },
  functional: true,
  render: function render(h, ctx) {
      var size =
          ctx.props.size.slice(-1) === "x"
              ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
              : parseInt(ctx.props.size) + "px";
      var attrs = ctx.data.attrs || {};
      attrs.width = attrs.width || size;
      attrs.height = attrs.height || size;
      ctx.data.attrs = attrs;
      return h(
          "svg",
          _mergeJSXProps([
              {
                  attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                  },
                  class: "feather feather-edit2-slash",
              },
              ctx.data,
          ]),
          [
              h("line", {
                  attrs: {
                      xl: "1",
                      yl: "1",
                      x2: "23",
                      y2: "23",
                  },
              }),
              h("path", {
                  attrs: {
                      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
                  },
              }),
          ]
      );
  },
};


var OtherSourcesIcon = {
  name: "OtherSourcesIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-other-sources",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H12",
            
          },
        }),
        h("path", {
          attrs: {
            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
            
          },
        }),
        h("circle", {
          attrs: {
            cx: "16",
            cy: "14",
            r: "4.5",
          },
        }),
        h("line", {
          attrs: {
            x1: "27",
            y1: "24",
            x2: "20",
            y2:"16",
          },
        }),
      ]
    );
  },
};

var ValidationInformationIcon = {
  name: "ValidationInformationIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-validation-information",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
            
          },
        }),
        h("polyline", {
          attrs: {
            points:"14 2 14 8 20 8"
            
          },
        }),
        h("circle", {
          attrs: {
            cx: "16",
            cy: "16",
            r: "3.5",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "13",
            x2: "8",
            y2:"13",
          },
        }),
        h("line", {
          attrs: {
            x1: "16",
            y1: "17",
            x2: "8",
            y2:"17",
          },
        }),
        h("line", {
          attrs: {
            x1: "13",
            y1: "9",
            x2: "8",
            y2:"9",
          },
        }),
        h("line", {
          attrs: {
            x1: "22",
            y1: "22",
            x2: "18.5",
            y2:"18.5",
          },
        }),
      ]
    );
  },
};

var CRInvalidIcon = {
  name: "CRInvalidIcon",
  props: {
    size: {
      type: String,
      default: "18",
      validator: function validator(s) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === "x")
        );
      },
    },
  },
  functional: true,
  render: function render(h, ctx) {
    var size =
      ctx.props.size.slice(-1) === "x"
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + "em"
        : parseInt(ctx.props.size) + "px";
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h(
      "svg",
      _mergeJSXProps([
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#0277BD",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          class: "feather feather-cr-invalid",
        },
        ctx.data,
      ]),
      [
        h("path", {
          attrs: {
            d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
            
          },
        }),
        h("line", {
          attrs: {
            x1: "11",
            y1: "19",
            x2: "12.5",
            y2:"11",
          },
        }),
        h("polyline", {
          attrs: {
            points:"13 2 13 9 20 9"
          },
        }),
        h("polyline", {
          attrs: {
            points:"9,17 6,15 9,13"
          },
        }),
        h("polyline", {
          attrs: {
            points:"14,17 17,14 15,13"
          },
        }),
      ]
    );
  },
};
exports.ActivityIcon = ActivityIcon;
exports.AirplayIcon = AirplayIcon;
exports.AlertCircleIcon = AlertCircleIcon;
exports.AlertOctagonIcon = AlertOctagonIcon;
exports.AlertTriangleIcon = AlertTriangleIcon;
exports.AlignCenterIcon = AlignCenterIcon;
exports.AlignJustifyIcon = AlignJustifyIcon;
exports.AlignLeftIcon = AlignLeftIcon;
exports.AlignRightIcon = AlignRightIcon;
exports.AnchorIcon = AnchorIcon;
exports.ApertureIcon = ApertureIcon;
exports.ArchiveIcon = ArchiveIcon;
exports.ArrowDownCircleIcon = ArrowDownCircleIcon;
exports.ArrowDownLeftIcon = ArrowDownLeftIcon;
exports.ArrowDownRightIcon = ArrowDownRightIcon;
exports.ArrowDownIcon = ArrowDownIcon;
exports.ArrowLeftCircleIcon = ArrowLeftCircleIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.ArrowRightCircleIcon = ArrowRightCircleIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.ArrowUpCircleIcon = ArrowUpCircleIcon;
exports.ArrowUpLeftIcon = ArrowUpLeftIcon;
exports.ArrowUpRightIcon = ArrowUpRightIcon;
exports.ArrowUpIcon = ArrowUpIcon;
exports.AtSignIcon = AtSignIcon;
exports.AwardIcon = AwardIcon;
exports.BarChart2Icon = BarChart2Icon;
exports.BarChartIcon = BarChartIcon;
exports.BatteryChargingIcon = BatteryChargingIcon;
exports.BatteryIcon = BatteryIcon;
exports.BellOffIcon = BellOffIcon;
exports.BellIcon = BellIcon;
exports.BluetoothIcon = BluetoothIcon;
exports.BoldIcon = BoldIcon;
exports.BookOpenIcon = BookOpenIcon;
exports.BookIcon = BookIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.BoxIcon = BoxIcon;
exports.BriefcaseIcon = BriefcaseIcon;
exports.CalendarIcon = CalendarIcon;
exports.CameraOffIcon = CameraOffIcon;
exports.CameraIcon = CameraIcon;
exports.CastIcon = CastIcon;
exports.CheckCircleIcon = CheckCircleIcon;
exports.CheckSquareIcon = CheckSquareIcon;
exports.CheckIcon = CheckIcon;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ChevronUpIcon = ChevronUpIcon;
exports.ChevronsDownIcon = ChevronsDownIcon;
exports.ChevronsLeftIcon = ChevronsLeftIcon;
exports.ChevronsRightIcon = ChevronsRightIcon;
exports.ChevronsUpIcon = ChevronsUpIcon;
exports.ChromeIcon = ChromeIcon;
exports.CircleIcon = CircleIcon;
exports.ClipboardIcon = ClipboardIcon;
exports.ClockIcon = ClockIcon;
exports.CloudDrizzleIcon = CloudDrizzleIcon;
exports.CloudLightningIcon = CloudLightningIcon;
exports.CloudOffIcon = CloudOffIcon;
exports.CloudRainIcon = CloudRainIcon;
exports.CloudSnowIcon = CloudSnowIcon;
exports.CloudIcon = CloudIcon;
exports.CodeIcon = CodeIcon;
exports.CodepenIcon = CodepenIcon;
exports.CodesandboxIcon = CodesandboxIcon;
exports.CoffeeIcon = CoffeeIcon;
exports.ColumnsIcon = ColumnsIcon;
exports.CommandIcon = CommandIcon;
exports.CompassIcon = CompassIcon;
exports.CopyIcon = CopyIcon;
exports.CornerDownLeftIcon = CornerDownLeftIcon;
exports.CornerDownRightIcon = CornerDownRightIcon;
exports.CornerLeftDownIcon = CornerLeftDownIcon;
exports.CornerLeftUpIcon = CornerLeftUpIcon;
exports.CornerRightDownIcon = CornerRightDownIcon;
exports.CornerRightUpIcon = CornerRightUpIcon;
exports.CornerUpLeftIcon = CornerUpLeftIcon;
exports.CornerUpRightIcon = CornerUpRightIcon;
exports.CpuIcon = CpuIcon;
exports.CreditCardIcon = CreditCardIcon;
exports.CropIcon = CropIcon;
exports.CrosshairIcon = CrosshairIcon;
exports.DatabaseIcon = DatabaseIcon;
exports.DeleteIcon = DeleteIcon;
exports.DiscIcon = DiscIcon;
exports.DivideCircleIcon = DivideCircleIcon;
exports.DivideSquareIcon = DivideSquareIcon;
exports.DivideIcon = DivideIcon;
exports.DollarSignIcon = DollarSignIcon;
exports.DownloadCloudIcon = DownloadCloudIcon;
exports.DownloadIcon = DownloadIcon;
exports.DribbbleIcon = DribbbleIcon;
exports.DropletIcon = DropletIcon;
exports.Edit2Icon = Edit2Icon;
exports.Edit3Icon = Edit3Icon;
exports.EditIcon = EditIcon;
exports.ExternalLinkIcon = ExternalLinkIcon;
exports.EyeOffIcon = EyeOffIcon;
exports.EyeIcon = EyeIcon;
exports.FacebookIcon = FacebookIcon;
exports.FastForwardIcon = FastForwardIcon;
exports.FeatherIcon = FeatherIcon;
exports.FigmaIcon = FigmaIcon;
exports.FileMinusIcon = FileMinusIcon;
exports.FilePlusIcon = FilePlusIcon;
exports.FileTextIcon = FileTextIcon;
exports.FileIcon = FileIcon;
exports.FilmIcon = FilmIcon;
exports.FilterIcon = FilterIcon;
exports.FlagIcon = FlagIcon;
exports.FolderMinusIcon = FolderMinusIcon;
exports.FolderPlusIcon = FolderPlusIcon;
exports.FolderIcon = FolderIcon;
exports.FramerIcon = FramerIcon;
exports.FrownIcon = FrownIcon;
exports.GiftIcon = GiftIcon;
exports.GitBranchIcon = GitBranchIcon;
exports.GitCommitIcon = GitCommitIcon;
exports.GitMergeIcon = GitMergeIcon;
exports.GitPullRequestIcon = GitPullRequestIcon;
exports.GithubIcon = GithubIcon;
exports.GitlabIcon = GitlabIcon;
exports.GlobeIcon = GlobeIcon;
exports.GridIcon = GridIcon;
exports.HardDriveIcon = HardDriveIcon;
exports.HashIcon = HashIcon;
exports.HeadphonesIcon = HeadphonesIcon;
exports.HeartIcon = HeartIcon;
exports.HelpCircleIcon = HelpCircleIcon;
exports.HexagonIcon = HexagonIcon;
exports.HomeIcon = HomeIcon;
exports.ImageIcon = ImageIcon;
exports.InboxIcon = InboxIcon;
exports.InfoIcon = InfoIcon;
exports.InstagramIcon = InstagramIcon;
exports.ItalicIcon = ItalicIcon;
exports.KeyIcon = KeyIcon;
exports.LayersIcon = LayersIcon;
exports.LayoutIcon = LayoutIcon;
exports.LifeBuoyIcon = LifeBuoyIcon;
exports.Link2Icon = Link2Icon;
exports.LinkIcon = LinkIcon;
exports.LinkedinIcon = LinkedinIcon;
exports.ListIcon = ListIcon;
exports.LoaderIcon = LoaderIcon;
exports.LockIcon = LockIcon;
exports.LogInIcon = LogInIcon;
exports.LogOutIcon = LogOutIcon;
exports.MailIcon = MailIcon;
exports.MapPinIcon = MapPinIcon;
exports.MapIcon = MapIcon;
exports.Maximize2Icon = Maximize2Icon;
exports.MaximizeIcon = MaximizeIcon;
exports.MehIcon = MehIcon;
exports.MenuIcon = MenuIcon;
exports.MessageCircleIcon = MessageCircleIcon;
exports.MessageSquareIcon = MessageSquareIcon;
exports.MicOffIcon = MicOffIcon;
exports.MicIcon = MicIcon;
exports.Minimize2Icon = Minimize2Icon;
exports.MinimizeIcon = MinimizeIcon;
exports.MinusCircleIcon = MinusCircleIcon;
exports.MinusSquareIcon = MinusSquareIcon;
exports.MinusIcon = MinusIcon;
exports.MonitorIcon = MonitorIcon;
exports.MoonIcon = MoonIcon;
exports.MoreHorizontalIcon = MoreHorizontalIcon;
exports.MoreVerticalIcon = MoreVerticalIcon;
exports.MousePointerIcon = MousePointerIcon;
exports.MoveIcon = MoveIcon;
exports.MusicIcon = MusicIcon;
exports.Navigation2Icon = Navigation2Icon;
exports.NavigationIcon = NavigationIcon;
exports.OctagonIcon = OctagonIcon;
exports.PackageIcon = PackageIcon;
exports.PaperclipIcon = PaperclipIcon;
exports.PauseCircleIcon = PauseCircleIcon;
exports.PauseIcon = PauseIcon;
exports.PenToolIcon = PenToolIcon;
exports.PercentIcon = PercentIcon;
exports.PhoneCallIcon = PhoneCallIcon;
exports.PhoneForwardedIcon = PhoneForwardedIcon;
exports.PhoneIncomingIcon = PhoneIncomingIcon;
exports.PhoneMissedIcon = PhoneMissedIcon;
exports.PhoneOffIcon = PhoneOffIcon;
exports.PhoneOutgoingIcon = PhoneOutgoingIcon;
exports.PhoneIcon = PhoneIcon;
exports.PieChartIcon = PieChartIcon;
exports.PlayCircleIcon = PlayCircleIcon;
exports.PlayIcon = PlayIcon;
exports.PlusCircleIcon = PlusCircleIcon;
exports.PlusSquareIcon = PlusSquareIcon;
exports.PlusIcon = PlusIcon;
exports.PocketIcon = PocketIcon;
exports.PowerIcon = PowerIcon;
exports.PrinterIcon = PrinterIcon;
exports.RadioIcon = RadioIcon;
exports.RefreshCcwIcon = RefreshCcwIcon;
exports.RefreshCwIcon = RefreshCwIcon;
exports.RepeatIcon = RepeatIcon;
exports.RewindIcon = RewindIcon;
exports.RotateCcwIcon = RotateCcwIcon;
exports.RotateCwIcon = RotateCwIcon;
exports.RssIcon = RssIcon;
exports.SaveIcon = SaveIcon;
exports.ScissorsIcon = ScissorsIcon;
exports.SearchIcon = SearchIcon;
exports.SendIcon = SendIcon;
exports.ServerIcon = ServerIcon;
exports.SettingsIcon = SettingsIcon;
exports.Share2Icon = Share2Icon;
exports.ShareIcon = ShareIcon;
exports.ShieldOffIcon = ShieldOffIcon;
exports.ShieldIcon = ShieldIcon;
exports.ShoppingBagIcon = ShoppingBagIcon;
exports.ShoppingCartIcon = ShoppingCartIcon;
exports.ShuffleIcon = ShuffleIcon;
exports.SidebarIcon = SidebarIcon;
exports.SkipBackIcon = SkipBackIcon;
exports.SkipForwardIcon = SkipForwardIcon;
exports.SlackIcon = SlackIcon;
exports.SlashIcon = SlashIcon;
exports.SlidersIcon = SlidersIcon;
exports.SmartphoneIcon = SmartphoneIcon;
exports.SmileIcon = SmileIcon;
exports.SpeakerIcon = SpeakerIcon;
exports.SquareIcon = SquareIcon;
exports.StarIcon = StarIcon;
exports.StopCircleIcon = StopCircleIcon;
exports.SunIcon = SunIcon;
exports.SunriseIcon = SunriseIcon;
exports.SunsetIcon = SunsetIcon;
exports.TabletIcon = TabletIcon;
exports.TagIcon = TagIcon;
exports.TargetIcon = TargetIcon;
exports.TerminalIcon = TerminalIcon;
exports.ThermometerIcon = ThermometerIcon;
exports.ThumbsDownIcon = ThumbsDownIcon;
exports.ThumbsUpIcon = ThumbsUpIcon;
exports.ToggleLeftIcon = ToggleLeftIcon;
exports.ToggleRightIcon = ToggleRightIcon;
exports.ToolIcon = ToolIcon;
exports.Trash2Icon = Trash2Icon;
exports.TrashIcon = TrashIcon;
exports.TrelloIcon = TrelloIcon;
exports.TrendingDownIcon = TrendingDownIcon;
exports.TrendingUpIcon = TrendingUpIcon;
exports.TriangleIcon = TriangleIcon;
exports.TruckIcon = TruckIcon;
exports.TvIcon = TvIcon;
exports.TwitchIcon = TwitchIcon;
exports.TwitterIcon = TwitterIcon;
exports.TypeIcon = TypeIcon;
exports.UmbrellaIcon = UmbrellaIcon;
exports.UnderlineIcon = UnderlineIcon;
exports.UnlockIcon = UnlockIcon;
exports.UploadCloudIcon = UploadCloudIcon;
exports.UploadIcon = UploadIcon;
exports.UserCheckIcon = UserCheckIcon;
exports.UserMinusIcon = UserMinusIcon;
exports.UserPlusIcon = UserPlusIcon;
exports.UserXIcon = UserXIcon;
exports.UserIcon = UserIcon;
exports.UsersIcon = UsersIcon;
exports.VideoOffIcon = VideoOffIcon;
exports.VideoIcon = VideoIcon;
exports.VoicemailIcon = VoicemailIcon;
exports.Volume1Icon = Volume1Icon;
exports.Volume2Icon = Volume2Icon;
exports.VolumeXIcon = VolumeXIcon;
exports.VolumeIcon = VolumeIcon;
exports.WatchIcon = WatchIcon;
exports.WifiOffIcon = WifiOffIcon;
exports.WifiIcon = WifiIcon;
exports.WindIcon = WindIcon;
exports.XCircleIcon = XCircleIcon;
exports.XOctagonIcon = XOctagonIcon;
exports.XSquareIcon = XSquareIcon;
exports.XIcon = XIcon;
exports.YoutubeIcon = YoutubeIcon;
exports.ZapOffIcon = ZapOffIcon;
exports.ZapIcon = ZapIcon;
exports.ZoomInIcon = ZoomInIcon;
exports.ZoomOutIcon = ZoomOutIcon;
exports.MessengerIcon = MessengerIcon;
exports.ComissionsIcon = ComissionsIcon;
exports.UsersAmgIcon = UsersAmgIcon;
exports.AmgIcon = AmgIcon;
exports.DashboardIcon = DashboardIcon;
exports.QuestionIcon = QuestionIcon;
exports.PhoneSlashIcon = PhoneSlashIcon;
exports.ThListIcon = ThListIcon;
exports.Edit2SlashIcon = Edit2SlashIcon;
exports.OtherSourcesIcon = OtherSourcesIcon;
exports.ValidationInformationIcon = ValidationInformationIcon;
exports.CRInvalidIcon =  CRInvalidIcon;