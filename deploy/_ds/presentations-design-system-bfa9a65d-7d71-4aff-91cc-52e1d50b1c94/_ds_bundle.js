/* @ds-bundle: {"format":4,"namespace":"PresentationsDesignSystem_bfa9a6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"Heatmap","sourcePath":"components/charts/Heatmap.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"CapabilityCard","sourcePath":"components/content/CapabilityCard.jsx"},{"name":"FeatureBand","sourcePath":"components/content/FeatureBand.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ResearchTable","sourcePath":"components/data/ResearchTable.jsx"},{"name":"ProcessDiagram","sourcePath":"components/diagrams/ProcessDiagram.jsx"},{"name":"Callout","sourcePath":"components/editorial/Callout.jsx"},{"name":"Figure","sourcePath":"components/editorial/Figure.jsx"},{"name":"Metric","sourcePath":"components/editorial/Metric.jsx"},{"name":"FormRow","sourcePath":"components/forms/FormCard.jsx"},{"name":"FormCard","sourcePath":"components/forms/FormCard.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"CategoryChip","sourcePath":"components/labels/CategoryChip.jsx"},{"name":"IntegrationBadge","sourcePath":"components/labels/IntegrationBadge.jsx"},{"name":"MonoLabel","sourcePath":"components/labels/MonoLabel.jsx"},{"name":"StatusChip","sourcePath":"components/labels/StatusChip.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"},{"name":"ConsoleCard","sourcePath":"components/media/ConsoleCard.jsx"},{"name":"LogoStrip","sourcePath":"components/media/LogoStrip.jsx"},{"name":"MediaCard","sourcePath":"components/media/MediaCard.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"1d368ee69b0c","components/charts/BarChart.jsx":"8e19aa999a7c","components/charts/Heatmap.jsx":"29eb9273d92e","components/charts/LineChart.jsx":"5c1b501946c6","components/content/CapabilityCard.jsx":"98f72b7c14b2","components/content/FeatureBand.jsx":"dc8ccbb96c1b","components/content/ProductCard.jsx":"d5e1d50e5403","components/data/DataTable.jsx":"6e1a8cdf01f6","components/data/ResearchTable.jsx":"5e8b60e4d4d5","components/diagrams/ProcessDiagram.jsx":"7b995e14b79c","components/editorial/Callout.jsx":"283d65d2e2fc","components/editorial/Figure.jsx":"a659a63feb3f","components/editorial/Metric.jsx":"8c371d48648b","components/forms/FormCard.jsx":"e636fcf630cd","components/forms/SearchField.jsx":"b5670b7afac3","components/forms/TextInput.jsx":"53187c596494","components/icons/Icon.jsx":"f81af39b91aa","components/labels/CategoryChip.jsx":"4ec957aa07fb","components/labels/IntegrationBadge.jsx":"85978012e1f2","components/labels/MonoLabel.jsx":"e10fbd15e7c9","components/labels/StatusChip.jsx":"66ee75f7c449","components/labels/Tag.jsx":"8e9d9e8e276e","components/media/ConsoleCard.jsx":"ab5bee2f20f8","components/media/LogoStrip.jsx":"98ffa7f4f49a","components/media/MediaCard.jsx":"f26c05ecc942","components/navigation/AnnouncementBar.jsx":"047fb5d77750","components/navigation/SiteFooter.jsx":"f7ece0023f13","components/navigation/SiteNav.jsx":"145f3aa107e9","ui_kits/website/app.jsx":"ba8812d8612b","ui_kits/website/contact-screen.jsx":"e4d5017b2ff3","ui_kits/website/home-screen.jsx":"9028bdb174c3","ui_kits/website/insights-screen.jsx":"bfa29f0181cd","ui_kits/website/paper-screen.jsx":"fec97d154cb9","ui_kits/website/research-screen.jsx":"4c887114d3b5","ui_kits/website/site-data.js":"3f59e221282d","ui_kits/website/site-shell.jsx":"d93c24199d62"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PresentationsDesignSystem_bfa9a6 = window.PresentationsDesignSystem_bfa9a6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/charts/BarChart.jsx
try { (() => {
function barNiceMax(v) {
  if (!(v > 0)) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / mag;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
}
function BarChart({
  categories = [],
  series = [],
  orientation = 'vertical',
  unit = '',
  max,
  height = 240,
  showValues = true,
  highlight,
  formatValue,
  legend = true,
  style
}) {
  const fmt = formatValue || (v => String(v).replace('-', '\u2212'));
  const top = max != null ? max : barNiceMax(Math.max(...series.flatMap(s => s.values)));
  const colorOf = (s, i) => s.color || 'var(--viz-' + (i % 6 + 1) + ')';
  const dim = ci => highlight == null || highlight === ci ? 1 : 0.35;
  const valueStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    lineHeight: 1,
    color: 'var(--body-muted)',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums'
  };
  const legendEl = legend && series.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 20px'
    }
  }, series.map((s, si) => /*#__PURE__*/React.createElement("span", {
    key: si,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-micro)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: colorOf(s, si)
    }
  }), s.name))) : null;
  if (orientation === 'horizontal') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minWidth: 0,
        ...style
      }
    }, categories.map((cat, ci) => /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(96px, 28%) minmax(0, 1fr)',
        gap: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--ink)'
      }
    }, cat), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, series.map((s, si) => /*#__PURE__*/React.createElement("div", {
      key: si,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: series.length > 1 ? 12 : 20,
        width: Math.max(0, s.values[ci]) / top * 88 + '%',
        minWidth: 2,
        borderRadius: 2,
        background: colorOf(s, si),
        opacity: dim(ci)
      }
    }), showValues ? /*#__PURE__*/React.createElement("span", {
      style: valueStyle
    }, fmt(s.values[ci]), unit) : null))))), legendEl);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      paddingTop: 24,
      borderBottom: '1px solid var(--viz-axis)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '24px 0 0 0'
    }
  }, [0.25, 0.5, 0.75, 1].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: (1 - f) * 100 + '%',
      borderTop: '1px solid var(--viz-grid)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      height: '100%',
      padding: '0 4px'
    }
  }, categories.map((cat, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 4
    }
  }, series.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      flex: 1,
      maxWidth: 56,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 6
    }
  }, showValues ? /*#__PURE__*/React.createElement("span", {
    style: valueStyle
  }, fmt(s.values[ci]), unit) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: Math.max(0, s.values[ci]) / top * 100 + '%',
      borderRadius: '2px 2px 0 0',
      background: colorOf(s, si),
      opacity: dim(ci)
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '0 4px'
    }
  }, categories.map((cat, ci) => /*#__PURE__*/React.createElement("span", {
    key: ci,
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--body-muted)'
    }
  }, cat))), legendEl);
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/Heatmap.jsx
try { (() => {
const heatSeq = [0, 1, 2, 3, 4, 5, 6].map(i => 'var(--viz-seq-' + i + ')');
const heatDiv = [1, 2, 3, 4, 5, 6, 7].map(i => 'var(--viz-div-' + i + ')');
function Heatmap({
  data = [],
  rowLabels = [],
  colLabels = [],
  min,
  max,
  scale = 'thermal',
  unit = '',
  showValues = false,
  cellHeight = 32,
  gap = 2,
  legend = true,
  format,
  style
}) {
  const flat = data.flat().filter(v => v != null);
  const lo = min != null ? min : Math.min(...flat);
  const hi = max != null ? max : Math.max(...flat);
  const stops = scale === 'diverging' ? heatDiv : heatSeq;
  const bin = v => Math.max(0, Math.min(stops.length - 1, Math.floor((v - lo) / (hi - lo || 1) * stops.length)));
  const darkBin = b => scale === 'diverging' ? b === 0 || b === 6 : b <= 3;
  const f = format || (v => String(v).replace('-', '\u2212'));
  const cols = Math.max(...data.map(r => r.length), colLabels.length, 1);
  const hasRows = rowLabels.length > 0;
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    lineHeight: 1,
    color: 'var(--slate)',
    fontVariantNumeric: 'tabular-nums'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: (hasRows ? 'auto ' : '') + 'repeat(' + cols + ', minmax(0, 1fr))',
      gap,
      alignItems: 'center'
    }
  }, colLabels.length ? /*#__PURE__*/React.createElement(React.Fragment, null, hasRows ? /*#__PURE__*/React.createElement("span", null) : null, colLabels.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: 'c' + i,
    style: {
      ...mono,
      textAlign: 'center',
      paddingBottom: 6
    }
  }, c))) : null, data.map((row, ri) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: ri
  }, hasRows ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      textAlign: 'right',
      paddingRight: 10,
      whiteSpace: 'nowrap'
    }
  }, rowLabels[ri]) : null, Array.from({
    length: cols
  }, (_, ci) => {
    const v = row[ci];
    if (v == null) return /*#__PURE__*/React.createElement("span", {
      key: ci,
      style: {
        height: cellHeight,
        borderRadius: 2,
        background: 'var(--card-border)'
      }
    });
    const b = bin(v);
    return /*#__PURE__*/React.createElement("span", {
      key: ci,
      title: f(v) + (unit ? ' ' + unit : ''),
      style: {
        height: cellHeight,
        borderRadius: 2,
        background: stops[b],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: darkBin(b) ? 'var(--on-dark)' : 'var(--ink)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, showValues ? f(v) : null);
  })))), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      maxWidth: 360,
      alignSelf: hasRows ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, f(lo)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 1
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 8,
      background: s,
      borderRadius: 1
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, f(hi), unit ? ' ' + unit : '')) : null);
}
Object.assign(__ds_scope, { Heatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Heatmap.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
function lineNiceStep(range, count) {
  const raw = range / Math.max(1, count);
  const mag = Math.pow(10, Math.floor(Math.log10(raw || 1)));
  const n = raw / mag;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag;
}
const lineFmt = (v, step) => {
  const d = step < 1 ? Math.min(4, Math.ceil(-Math.log10(step))) : 0;
  return v.toFixed(d).replace('-', '\u2212');
};
function LineChart({
  series = [],
  x = [],
  yDomain,
  yTicks = 5,
  xLabel,
  yLabel,
  unit = '',
  height = 280,
  width: widthProp,
  thresholds = [],
  markers = [],
  legend = true,
  tone = 'light',
  formatY,
  style
}) {
  const boxRef = React.useRef(null);
  const [measured, setMeasured] = React.useState(0);
  React.useEffect(() => {
    if (widthProp || !boxRef.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setMeasured(Math.round(e.contentRect.width)));
    ro.observe(boxRef.current);
    return () => ro.disconnect();
  }, [widthProp]);
  const width = widthProp || measured || 640;
  const dark = tone === 'dark';
  const c = {
    grid: dark ? 'rgba(255,255,255,0.12)' : 'var(--viz-grid)',
    axis: dark ? 'rgba(255,255,255,0.32)' : 'var(--viz-axis)',
    label: dark ? 'var(--text-on-dark-secondary)' : 'var(--viz-label)',
    ink: dark ? 'var(--on-dark)' : 'var(--viz-annotation)',
    halo: dark ? 'transparent' : 'var(--canvas)'
  };
  const haloStyle = {
    paintOrder: 'stroke',
    stroke: c.halo,
    strokeWidth: 4,
    strokeLinejoin: 'round'
  };
  const pad = {
    t: 20,
    r: 20,
    b: xLabel ? 52 : 32,
    l: 52
  };
  const iw = width - pad.l - pad.r,
    ih = height - pad.t - pad.b;
  const n = Math.max(x.length, ...series.map(s => s.data.length), 1);
  const vals = series.flatMap(s => s.data).filter(v => v != null).concat(thresholds.map(t => t.y));
  let lo, hi, step;
  if (yDomain) {
    [lo, hi] = yDomain;
    step = lineNiceStep(hi - lo, yTicks);
  } else {
    const a = Math.min(...vals),
      b = Math.max(...vals);
    step = lineNiceStep(b - a || 1, yTicks);
    lo = Math.floor(a / step) * step;
    hi = Math.ceil(b / step) * step;
    if (hi === lo) hi = lo + step;
  }
  const xs = i => pad.l + (n <= 1 ? iw / 2 : i / (n - 1) * iw);
  const ys = v => pad.t + ih - (v - lo) / (hi - lo) * ih;
  const ticks = [];
  for (let v = lo; v <= hi + step / 1e6; v += step) ticks.push(v);
  const every = Math.max(1, Math.ceil(n / 8));
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12
  };
  const colorOf = (s, i) => s.color || 'var(--viz-' + (i % 6 + 1) + ')';
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, yLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: c.label
    }
  }, yLabel, unit ? ' (' + unit + ')' : '') : null, /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + width + ' ' + height,
    width: "100%",
    height: widthProp ? undefined : height,
    style: {
      display: 'block',
      overflow: 'visible'
    },
    role: "img",
    "aria-label": yLabel || 'Line chart'
  }, ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: ys(t),
    y2: ys(t),
    style: {
      stroke: c.grid
    },
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.l - 10,
    y: ys(t),
    dy: "0.32em",
    textAnchor: "end",
    style: {
      ...mono,
      fill: c.label
    }
  }, formatY ? formatY(t) : lineFmt(t, step)))), /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: pad.t + ih,
    y2: pad.t + ih,
    style: {
      stroke: c.axis
    },
    strokeWidth: "1"
  }), Array.from({
    length: n
  }, (_, i) => i).filter(i => i % every === 0 || i === n - 1).map(i => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xs(i),
    y: pad.t + ih + 20,
    textAnchor: "middle",
    style: {
      ...mono,
      fill: c.label
    }
  }, x[i] != null ? x[i] : i)), xLabel ? /*#__PURE__*/React.createElement("text", {
    x: pad.l + iw / 2,
    y: height - 6,
    textAnchor: "middle",
    style: {
      ...mono,
      fill: c.label,
      textTransform: 'uppercase',
      letterSpacing: '0.02em'
    }
  }, xLabel) : null, thresholds.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: 't' + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: ys(t.y),
    y2: ys(t.y),
    style: {
      stroke: t.color || 'var(--coral)'
    },
    strokeWidth: "1",
    strokeDasharray: "4 4"
  }), t.label ? /*#__PURE__*/React.createElement("text", {
    x: t.align === 'end' ? width - pad.r - 4 : pad.l + 6,
    y: ys(t.y) - 6,
    textAnchor: t.align === 'end' ? 'end' : 'start',
    style: {
      ...mono,
      fontSize: 11,
      fill: c.ink,
      ...haloStyle
    }
  }, t.label) : null)), markers.map((m, i) => /*#__PURE__*/React.createElement("g", {
    key: 'm' + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: xs(m.x),
    x2: xs(m.x),
    y1: pad.t,
    y2: pad.t + ih,
    style: {
      stroke: c.ink
    },
    strokeWidth: "1",
    strokeDasharray: "2 3"
  }), m.label ? /*#__PURE__*/React.createElement("text", {
    x: xs(m.x) + 6,
    y: pad.t + ih - 8,
    style: {
      ...mono,
      fontSize: 11,
      fill: c.ink,
      ...haloStyle
    }
  }, m.label) : null)), series.map((s, si) => {
    const pts = s.data.map((v, i) => v == null ? null : [xs(i), ys(v)]);
    let d = '';
    let pen = false;
    pts.forEach(p => {
      if (!p) {
        pen = false;
        return;
      }
      d += (pen ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1);
      pen = true;
    });
    const last = [...pts].reverse().find(Boolean);
    const col = colorOf(s, si);
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, s.area && pts[0] && last ? /*#__PURE__*/React.createElement("path", {
      d: d + 'L' + last[0].toFixed(1) + ' ' + (pad.t + ih) + 'L' + pts[0][0].toFixed(1) + ' ' + (pad.t + ih) + 'Z',
      style: {
        fill: col
      },
      opacity: "0.08"
    }) : null, /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      style: {
        stroke: col
      },
      strokeWidth: s.width || 2,
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeDasharray: s.dashed ? '5 4' : undefined
    }), last ? /*#__PURE__*/React.createElement("circle", {
      cx: last[0],
      cy: last[1],
      r: "3",
      style: {
        fill: col
      }
    }) : null);
  })), legend && series.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 20px'
    }
  }, series.map((s, si) => /*#__PURE__*/React.createElement("span", {
    key: si,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-micro)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 0,
      borderTop: '2px ' + (s.dashed ? 'dashed ' : 'solid ') + colorOf(s, si)
    }
  }), s.name))) : null);
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  highlightRow,
  dense = false,
  size = 'screen',
  style
}) {
  const print = size === 'print';
  const pad = dense ? '8px 12px' : '12px 16px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      overflowY: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: print ? 16 : 14,
      lineHeight: 1.45,
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '1px solid var(--primary)',
      borderBottom: '1px solid var(--primary)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: print ? 16 : 12,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--slate)',
      verticalAlign: 'bottom'
    }
  }, c.label, c.unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'none',
      color: 'var(--muted)'
    }
  }, ' (' + c.unit + ')') : null)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i === rows.length - 1 ? '1px solid var(--primary)' : '1px solid var(--border-light)',
      background: i === highlightRow ? 'var(--pale-blue)' : 'transparent'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      whiteSpace: c.nowrap ? 'nowrap' : undefined,
      verticalAlign: 'top'
    }
  }, c.format ? c.format(r[c.key], r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextInput({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  onFocus,
  onBlur,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fid = id || autoId;
  const Field = multiline ? 'textarea' : 'input';
  const border = error ? 'var(--error)' : focus ? 'var(--form-focus)' : 'var(--border-input)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--type-caption)',
      color: 'var(--ink)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: fid,
    rows: multiline ? rows : undefined,
    "aria-invalid": error ? true : undefined,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      font: 'var(--type-body)',
      color: 'var(--ink)',
      background: 'var(--canvas)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-xs)',
      padding: '12px 16px',
      outline: 'none',
      boxShadow: error ? 'var(--error-ring)' : 'none',
      resize: multiline ? 'vertical' : undefined,
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...inputStyle
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--slate)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide icon subset (lucide-static v0.454.0, ISC license) copied programmatically.
// Inner SVG markup only; rendered on a 24×24 grid with currentColor stroke.
const ICON_PATHS = {
  "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"/>",
  "arrow-down": "<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\"/><path d=\"M19 12H5\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
  "arrow-up-right": "<path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/>",
  "atom": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z\"/><path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z\"/>",
  "battery-charging": "<path d=\"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2\"/><path d=\"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1\"/><path d=\"m11 7-3 5h4l-3 5\"/><line x1=\"22\" x2=\"22\" y1=\"11\" y2=\"13\"/>",
  "book-open": "<path d=\"M12 7v14\"/><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"/>",
  "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"/>",
  "bot": "<path d=\"M12 8V4H8\"/><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M15 13v2\"/><path d=\"M9 13v2\"/>",
  "box": "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"/><path d=\"m3.3 7 8.7 5 8.7-5\"/><path d=\"M12 22V12\"/>",
  "boxes": "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"/><path d=\"m7 16.5-4.74-2.85\"/><path d=\"m7 16.5 5-3\"/><path d=\"M7 16.5v5.17\"/><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"/><path d=\"m17 16.5-5-3\"/><path d=\"m17 16.5 4.74-2.85\"/><path d=\"M17 16.5v5.17\"/><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"/><path d=\"M12 8 7.26 5.15\"/><path d=\"m12 8 4.74-2.85\"/><path d=\"M12 13.5V8\"/>",
  "brain-circuit": "<path d=\"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"/><path d=\"M9 13a4.5 4.5 0 0 0 3-4\"/><path d=\"M6.003 5.125A3 3 0 0 0 6.401 6.5\"/><path d=\"M3.477 10.896a4 4 0 0 1 .585-.396\"/><path d=\"M6 18a4 4 0 0 1-1.967-.516\"/><path d=\"M12 13h4\"/><path d=\"M12 18h6a2 2 0 0 1 2 2v1\"/><path d=\"M12 8h8\"/><path d=\"M16 8V5a2 2 0 0 1 2-2\"/><circle cx=\"16\" cy=\"13\" r=\".5\"/><circle cx=\"18\" cy=\"3\" r=\".5\"/><circle cx=\"20\" cy=\"21\" r=\".5\"/><circle cx=\"20\" cy=\"8\" r=\".5\"/>",
  "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"/><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"/><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"/><path d=\"M10 6h4\"/><path d=\"M10 10h4\"/><path d=\"M10 14h4\"/><path d=\"M10 18h4\"/>",
  "cable": "<path d=\"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1\"/><path d=\"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9\"/><path d=\"M21 21v-2h-4\"/><path d=\"M3 5h4V3\"/><path d=\"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3\"/>",
  "calendar": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>",
  "chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M18 17V9\"/><path d=\"M13 17V5\"/><path d=\"M8 17v-3\"/>",
  "chart-line": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"m19 9-5 5-4-4-3 3\"/>",
  "chart-scatter": "<circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>",
  "cloud": "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"/>",
  "code-xml": "<path d=\"m18 16 4-4-4-4\"/><path d=\"m6 8-4 4 4 4\"/><path d=\"m14.5 4-5 16\"/>",
  "cog": "<path d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z\"/><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\"/><path d=\"M12 2v2\"/><path d=\"M12 22v-2\"/><path d=\"m17 20.66-1-1.73\"/><path d=\"M11 10.27 7 3.34\"/><path d=\"m20.66 17-1.73-1\"/><path d=\"m3.34 7 1.73 1\"/><path d=\"M14 12h8\"/><path d=\"M2 12h2\"/><path d=\"m20.66 7-1.73 1\"/><path d=\"m3.34 17 1.73-1\"/><path d=\"m17 3.34-1 1.73\"/><path d=\"m11 13.73-4 6.93\"/>",
  "cpu": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"/><path d=\"M15 2v2\"/><path d=\"M15 20v2\"/><path d=\"M2 15h2\"/><path d=\"M2 9h2\"/><path d=\"M20 15h2\"/><path d=\"M20 9h2\"/><path d=\"M9 2v2\"/><path d=\"M9 20v2\"/>",
  "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5V19A9 3 0 0 0 21 19V5\"/><path d=\"M3 12A9 3 0 0 0 21 12\"/>",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>",
  "droplets": "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"/><path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"/>",
  "external-link": "<path d=\"M15 3h6v6\"/><path d=\"M10 14 21 3\"/><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "factory": "<path d=\"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M17 18h1\"/><path d=\"M12 18h1\"/><path d=\"M7 18h1\"/>",
  "fan": "<path d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z\"/><path d=\"M12 12v.01\"/>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/>",
  "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/>",
  "flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/>",
  "flask-conical": "<path d=\"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2\"/><path d=\"M8.5 2h7\"/><path d=\"M7 16h10\"/>",
  "gauge": "<path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/>",
  "git-branch": "<line x1=\"6\" x2=\"6\" y1=\"3\" y2=\"15\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M18 9a9 9 0 0 1-9 9\"/>",
  "git-compare": "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"/><path d=\"M11 18H8a2 2 0 0 1-2-2V9\"/>",
  "grid-3x3": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/><path d=\"M9 3v18\"/><path d=\"M15 3v18\"/>",
  "hard-drive": "<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\"/><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/><line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\"/><line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/>",
  "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\"/><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\"/><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\"/>",
  "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
  "merge": "<path d=\"m8 6 4-4 4 4\"/><path d=\"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22\"/><path d=\"m20 22-5-5\"/>",
  "microscope": "<path d=\"M6 18h8\"/><path d=\"M3 22h18\"/><path d=\"M14 22a7 7 0 1 0 0-14h-1\"/><path d=\"M9 14h2\"/><path d=\"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z\"/><path d=\"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"/>",
  "minus": "<path d=\"M5 12h14\"/>",
  "network": "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>",
  "orbit": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><path d=\"M10.4 21.9a10 10 0 0 0 9.941-15.416\"/><path d=\"M13.5 2.1a10 10 0 0 0-9.841 15.416\"/>",
  "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/>",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\"/>",
  "plug": "<path d=\"M12 22v-5\"/><path d=\"M9 8V2\"/><path d=\"M15 8V2\"/><path d=\"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z\"/>",
  "plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>",
  "quote": "<path d=\"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/><path d=\"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/>",
  "radar": "<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"/><path d=\"M4 6h.01\"/><path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"/><path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"/><path d=\"M12 18h.01\"/><path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59 5.66-5.66\"/>",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/>",
  "repeat": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>",
  "ruler": "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\"/><path d=\"m14.5 12.5 2-2\"/><path d=\"m11.5 9.5 2-2\"/><path d=\"m8.5 6.5 2-2\"/><path d=\"m17.5 15.5 2-2\"/>",
  "satellite-dish": "<path d=\"M4 10a7.31 7.31 0 0 0 10 10Z\"/><path d=\"m9 15 3-3\"/><path d=\"M17 13a6 6 0 0 0-6-6\"/><path d=\"M21 13A10 10 0 0 0 11 3\"/>",
  "scan-line": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7 12h10\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"/><path d=\"m21.854 2.147-10.94 10.939\"/>",
  "server": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\"/><line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\"/>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "sigma": "<path d=\"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2\"/>",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\"/><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\"/><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\"/><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\"/><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\"/><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\"/><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\"/><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"/><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\"/>",
  "snowflake": "<line x1=\"2\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"/><path d=\"m20 16-4-4 4-4\"/><path d=\"m4 8 4 4-4 4\"/><path d=\"m16 4-4 4-4-4\"/><path d=\"m8 20 4-4 4 4\"/>",
  "split": "<path d=\"M16 3h5v5\"/><path d=\"M8 3H3v5\"/><path d=\"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3\"/><path d=\"m15 9 6-6\"/>",
  "square-function": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3\"/><path d=\"M9 11.2h5.7\"/>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "terminal": "<polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" x2=\"20\" y1=\"19\" y2=\"19\"/>",
  "thermometer": "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"/>",
  "thermometer-snowflake": "<path d=\"M2 12h10\"/><path d=\"M9 4v16\"/><path d=\"m3 9 3 3-3 3\"/><path d=\"M12 6 9 9 6 6\"/><path d=\"m6 18 3-3 1.5 1.5\"/><path d=\"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"/>",
  "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"/><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/>",
  "trending-down": "<polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\"/><polyline points=\"16 17 22 17 22 11\"/>",
  "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"/><polyline points=\"16 7 22 7 22 13\"/>",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "waves": "<path d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/>",
  "waypoints": "<circle cx=\"12\" cy=\"4.5\" r=\"2.5\"/><path d=\"m10.2 6.3-3.9 3.9\"/><circle cx=\"4.5\" cy=\"12\" r=\"2.5\"/><path d=\"M7 12h10\"/><circle cx=\"19.5\" cy=\"12\" r=\"2.5\"/><path d=\"m13.8 17.7 3.9-3.9\"/><circle cx=\"12\" cy=\"19.5\" r=\"2.5\"/>",
  "wind": "<path d=\"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2\"/><path d=\"M9.6 4.6A2 2 0 1 1 11 8H2\"/><path d=\"M12.6 19.4A2 2 0 1 0 14 16H2\"/>",
  "workflow": "<rect width=\"8\" height=\"8\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 11v4a2 2 0 0 0 2 2h4\"/><rect width=\"8\" height=\"8\" x=\"13\" y=\"13\" rx=\"2\"/>",
  "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>",
  "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const body = ICON_PATHS[name];
  if (!body) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  }, rest));
}
Icon.names = Object.keys(ICON_PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const buttonBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  fontFamily: 'var(--font-sans)',
  transition: 'background-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
};
function buttonLook(variant, dark, selected, hover) {
  if (variant === 'secondary') {
    return {
      background: 'transparent',
      color: dark ? 'var(--on-dark)' : hover ? 'var(--true-black)' : 'var(--ink)',
      font: 'var(--type-body)',
      padding: '8px 0',
      borderRadius: 'var(--radius-xs)',
      border: 'none',
      textDecoration: 'underline',
      textDecorationThickness: hover ? '2px' : '1px',
      textUnderlineOffset: 4
    };
  }
  if (variant === 'outline') {
    const on = selected;
    return {
      font: 'var(--type-button)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-xl)',
      background: on ? dark ? 'var(--canvas)' : 'var(--primary)' : hover ? dark ? 'var(--surface-dark-raised-2)' : 'var(--soft-stone)' : 'transparent',
      color: on ? dark ? 'var(--primary)' : 'var(--on-primary)' : dark ? 'var(--on-dark)' : 'var(--primary)',
      borderColor: on ? dark ? 'var(--canvas)' : 'var(--primary)' : dark ? 'var(--border-on-dark-strong)' : 'var(--primary)'
    };
  }
  return {
    font: 'var(--type-button)',
    padding: '12px 24px',
    borderRadius: 'var(--radius-pill)',
    background: dark ? hover ? 'var(--action-inverse-bg-hover)' : 'var(--action-inverse-bg)' : hover ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
    color: dark ? 'var(--action-inverse-fg)' : 'var(--action-primary-fg)'
  };
}
function Button({
  variant = 'primary',
  tone = 'light',
  selected = false,
  iconStart,
  iconEnd,
  href,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const look = buttonLook(variant, tone === 'dark', selected, hover && !disabled);
  const iconSize = variant === 'secondary' ? 18 : 16;
  const s = {
    ...buttonBase,
    ...look,
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconStart ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: iconSize
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconEnd ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: iconSize
  }) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      onClick: onClick,
      style: s
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "aria-pressed": variant === 'outline' ? selected : undefined,
    onClick: onClick,
    style: s
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CapabilityCard.jsx
try { (() => {
function CapabilityCard({
  icon,
  media,
  title,
  children,
  linkLabel,
  href = '#',
  onLink,
  variant = 'rule',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const frame = variant === 'boxed' ? {
    padding: 24,
    borderRadius: 'var(--radius-xs)',
    border: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--card-border)'),
    background: dark ? 'var(--surface-dark-raised)' : 'var(--canvas)'
  } : {
    paddingTop: 24,
    borderTop: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--hairline)')
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0,
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      ...frame,
      ...style
    }
  }, media || (icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    strokeWidth: 1.25
  }) : null), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-feature)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: dark ? 'var(--text-on-dark-secondary)' : 'var(--body-muted)'
    }
  }, children) : null, linkLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    tone: tone,
    href: href,
    onClick: onLink,
    iconEnd: "arrow-right",
    style: {
      alignSelf: 'flex-start',
      marginTop: 'auto'
    }
  }, linkLabel) : null);
}
Object.assign(__ds_scope, { CapabilityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormCard.jsx
try { (() => {
function FormRow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 16,
      ...style
    }
  }, children);
}
function FormCard({
  title,
  description,
  submitLabel = 'Submit',
  footnote,
  onSubmit,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(new FormData(e.currentTarget));
    },
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-card)',
      letterSpacing: 'var(--type-card-tracking)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--body-muted)'
    }
  }, description) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, submitLabel), footnote ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--slate)',
      maxWidth: 360
    }
  }, footnote) : null));
}
Object.assign(__ds_scope, { FormRow, FormCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  size = 'md',
  placeholder = 'Search',
  onSubmit,
  onFocus,
  onBlur,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(new FormData(e.currentTarget).get('q'));
    },
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: lg ? 20 : 16,
      color: 'var(--slate)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: lg ? 20 : 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    name: "q",
    type: "search",
    placeholder: placeholder,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      font: lg ? 'var(--type-body-lg)' : 'var(--type-body)',
      color: 'var(--ink)',
      background: 'var(--canvas)',
      border: '1px solid ' + (focus ? 'var(--form-focus)' : 'var(--border-input)'),
      borderRadius: 'var(--radius-xs)',
      padding: lg ? '16px 20px 16px 52px' : '12px 16px 12px 44px',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/labels/CategoryChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryChip({
  size = 'lg',
  active = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lg = size === 'lg';
  const s = lg ? {
    font: 'var(--type-card)',
    letterSpacing: 'var(--type-card-tracking)',
    padding: '8px 14px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--coral)',
    background: active ? 'var(--coral)' : hover && onClick ? 'var(--coral-soft)' : 'var(--coral-wash)',
    color: active ? 'var(--ink)' : 'var(--coral)'
  } : {
    font: 'var(--type-caption)',
    padding: '3px 10px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--coral-soft)',
    background: active ? 'var(--coral)' : 'transparent',
    color: 'var(--ink)'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'background-color var(--duration-base) var(--ease-standard)',
    ...s,
    ...style
  };
  if (onClick) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      "aria-pressed": active,
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: base
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/labels/IntegrationBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IntegrationBadge({
  icon,
  tone = 'dark',
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      padding: '4px 10px 4px 8px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.5,
      border: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--hairline)'),
      background: dark ? 'var(--surface-dark-raised)' : 'var(--canvas)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { IntegrationBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/IntegrationBadge.jsx", error: String((e && e.message) || e) }); }

// components/labels/MonoLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const monoTones = {
  default: 'var(--ink)',
  muted: 'var(--slate)',
  accent: 'var(--coral)',
  link: 'var(--action-blue)',
  'on-dark': 'var(--on-dark)',
  'on-dark-muted': 'var(--text-on-dark-secondary)'
};
function MonoLabel({
  tone = 'muted',
  index,
  size = 14,
  as = 'span',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: size,
      lineHeight: 1.4,
      letterSpacing: size * 0.02,
      textTransform: 'uppercase',
      color: monoTones[tone] || tone,
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, rest), index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.72
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/MonoLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureBand.jsx
try { (() => {
function FeatureBand({
  tone = 'green',
  eyebrow,
  title,
  description,
  actions,
  radius = 'lg',
  padding = 80,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'navy' ? 'var(--dark-navy)' : 'var(--deep-green)',
      color: 'var(--on-dark)',
      borderRadius: radius === 'none' ? 0 : 'var(--radius-lg)',
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
      ...style
    }
  }, eyebrow || title || description || actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 760
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "on-dark-muted"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-section)',
      letterSpacing: 'var(--type-section-tracking)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--text-on-dark-secondary)'
    }
  }, description) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, actions) : null) : null, children);
}
Object.assign(__ds_scope, { FeatureBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureBand.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function ProductCard({
  label,
  title,
  description,
  ctaLabel,
  onCta,
  features = [],
  footnote,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--soft-stone)',
      color: 'var(--ink)',
      borderRadius: 'var(--radius-sm)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, null, label) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-card)',
      letterSpacing: 'var(--type-card-tracking)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--body-muted)'
    }
  }, description) : null), ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: onCta,
    style: {
      alignSelf: 'flex-start'
    }
  }, ctaLabel) : null, features.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: '24px 0 0',
      borderTop: 'var(--rule)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--type-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingTop: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, f)))) : null, footnote ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-micro)',
      color: 'var(--slate)'
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Callout.jsx
try { (() => {
const calloutTones = {
  stone: ['var(--soft-stone)', 'var(--ink)', 'var(--body-muted)'],
  blue: ['var(--pale-blue)', 'var(--ink)', 'var(--body-muted)'],
  green: ['var(--pale-green)', 'var(--ink)', 'var(--body-muted)'],
  dark: ['var(--primary)', 'var(--on-dark)', 'var(--text-on-dark-secondary)']
};
function Callout({
  tone = 'stone',
  label,
  title,
  children,
  style
}) {
  const [bg, fg, sub] = calloutTones[tone] || calloutTones.stone;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-sm)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: tone === 'dark' ? 'on-dark-muted' : 'muted'
  }, label) : null, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-feature)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: sub
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Callout.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Figure.jsx
try { (() => {
const figureFrames = {
  bordered: {
    border: '1px solid var(--hairline)',
    borderRadius: 'var(--radius-sm)',
    padding: 24,
    background: 'var(--canvas)'
  },
  stone: {
    background: 'var(--soft-stone)',
    borderRadius: 'var(--radius-sm)',
    padding: 24
  },
  plain: {}
};
function Figure({
  label = 'Fig.',
  number,
  title,
  caption,
  source,
  frame = 'bordered',
  size = 'screen',
  children,
  style
}) {
  const print = size === 'print';
  const cap = print ? '400 16px/1.45 var(--font-sans)' : 'var(--type-caption)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...figureFrames[frame],
      overflow: 'hidden'
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, number != null ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "default",
    size: print ? 16 : 14
  }, label + ' ' + number) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: cap,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, title) : null), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: cap,
      color: 'var(--body-muted)'
    }
  }, caption) : null, source ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: print ? cap : 'var(--type-micro)',
      color: 'var(--slate)'
    }
  }, "Source: ", source) : null));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Figure.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Metric.jsx
try { (() => {
const metricSizes = {
  lg: [72, -1.44, 27],
  md: [48, -0.96, 18],
  sm: [32, -0.64, 14]
};
function Metric({
  value,
  unit,
  label,
  detail,
  size = 'md',
  tone = 'light',
  align = 'left',
  style
}) {
  const [fs, ls, us] = metricSizes[size] || metricSizes.md;
  const dark = tone === 'dark';
  const sub = dark ? 'var(--text-on-dark-secondary)' : 'var(--body-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: dark ? 'on-dark-muted' : 'muted'
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      color: dark ? 'var(--on-dark)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: ls,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: us,
      lineHeight: 1,
      color: sub
    }
  }, unit) : null), detail ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-caption)',
      color: sub,
      maxWidth: 280
    }
  }, detail) : null);
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Metric.jsx", error: String((e && e.message) || e) }); }

// components/labels/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const statusMap = {
  ok: ['var(--status-ok-bg)', 'var(--status-ok-fg)', 'var(--status-ok-dot)', 'var(--status-ok-on-dark)'],
  running: ['var(--status-run-bg)', 'var(--status-run-fg)', 'var(--status-run-dot)', 'var(--status-run-on-dark)'],
  warn: ['var(--status-warn-bg)', 'var(--status-warn-fg)', 'var(--status-warn-dot)', 'var(--status-warn-on-dark)'],
  error: ['var(--status-error-bg)', 'var(--status-error-fg)', 'var(--status-error-dot)', 'var(--status-error-on-dark)'],
  idle: ['var(--status-idle-bg)', 'var(--status-idle-fg)', 'var(--status-idle-dot)', 'var(--status-idle-on-dark)']
};
function StatusChip({
  status = 'ok',
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const [bg, fg, dot, dotDark] = statusMap[status] || statusMap.idle;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      padding: '2px 8px 2px 7px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      background: dark ? 'var(--surface-dark-raised-2)' : bg,
      color: dark ? 'var(--on-dark)' : fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dark ? dotDark : dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/ProcessDiagram.jsx
try { (() => {
function useProcessWidth(ref) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return w;
}
function ProcessDiagram({
  steps = [],
  direction = 'auto',
  tone = 'light',
  loop = false,
  loopLabel,
  numbered = true,
  minNodeWidth = 150,
  style
}) {
  const ref = React.useRef(null);
  const w = useProcessWidth(ref);
  const horizontal = direction === 'horizontal' || direction === 'auto' && (w === 0 || w >= steps.length * minNodeWidth + (steps.length - 1) * 48);
  const dark = tone === 'dark';
  const line = dark ? 'rgba(255,255,255,0.4)' : 'var(--slate)';
  const monoSm = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    lineHeight: 1.3,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
  const subC = dark ? 'var(--text-on-dark-secondary)' : 'var(--slate)';
  const node = (s, i) => {
    const em = !!s.emphasis;
    const bg = em ? dark ? 'var(--canvas)' : 'var(--primary)' : dark ? 'var(--surface-dark-raised)' : 'var(--canvas)';
    const fg = em ? dark ? 'var(--primary)' : 'var(--on-dark)' : dark ? 'var(--on-dark)' : 'var(--ink)';
    const sub = em ? dark ? 'var(--body-muted)' : 'var(--text-on-dark-secondary)' : dark ? 'var(--text-on-dark-secondary)' : 'var(--body-muted)';
    return /*#__PURE__*/React.createElement("div", {
      key: 'n' + i,
      style: {
        flex: horizontal ? '1 1 0' : 'none',
        minWidth: 0,
        background: bg,
        color: fg,
        border: '1px solid ' + (em ? bg : dark ? 'var(--border-on-dark)' : 'var(--hairline)'),
        borderRadius: 'var(--radius-sm)',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        minHeight: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...monoSm,
        fontSize: 12,
        color: sub
      }
    }, s.label != null ? s.label : numbered ? String(i + 1).padStart(2, '0') : ''), s.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon,
      size: 18
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 16px/1.3 var(--font-sans)'
      }
    }, s.title), s.detail ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: sub
      }
    }, s.detail) : null, s.status ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
      status: s.status,
      tone: dark !== em ? 'dark' : 'light'
    }, s.statusLabel)) : null);
  };
  const connector = (label, i) => horizontal ? /*#__PURE__*/React.createElement("div", {
    key: 'c' + i,
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      minWidth: 48,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 6,
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...monoSm,
      color: subC,
      textAlign: 'center',
      minHeight: 14
    }
  }, label || ''), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 1,
      background: line,
      marginRight: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      top: -4,
      width: 0,
      height: 0,
      borderTop: '4.5px solid transparent',
      borderBottom: '4.5px solid transparent',
      borderLeft: '7px solid ' + line
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minHeight: 14
    }
  })) : /*#__PURE__*/React.createElement("div", {
    key: 'c' + i,
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 40,
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1,
      height: '100%',
      background: line
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -1,
      left: -4,
      width: 0,
      height: 0,
      borderLeft: '4.5px solid transparent',
      borderRight: '4.5px solid transparent',
      borderTop: '7px solid ' + line
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...monoSm,
      color: subC
    }
  }, label) : null);
  const items = [];
  steps.forEach((s, i) => {
    items.push(node(s, i));
    if (i < steps.length - 1) items.push(connector(s.edge, i));
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      alignItems: 'stretch'
    }
  }, items), loop && horizontal ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: 32,
      margin: '0 28px',
      border: '1px solid ' + line,
      borderTop: 'none',
      borderRadius: '0 0 8px 8px',
      marginBottom: loopLabel ? 22 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -5,
      top: -1,
      width: 0,
      height: 0,
      borderLeft: '4.5px solid transparent',
      borderRight: '4.5px solid transparent',
      borderBottom: '7px solid ' + line
    }
  }), loopLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...monoSm,
      position: 'absolute',
      left: '50%',
      bottom: -22,
      transform: 'translateX(-50%)',
      color: subC
    }
  }, loopLabel) : null) : null, loop && !horizontal && loopLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...monoSm,
      color: subC,
      paddingTop: 12,
      paddingLeft: 24
    }
  }, '\u21BA ' + loopLabel) : null);
}
Object.assign(__ds_scope, { ProcessDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/ProcessDiagram.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  size = 'md',
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const dims = size === 'sm' ? {
    padding: '2px 10px',
    fontSize: 12,
    lineHeight: 1.5
  } : {
    padding: '6px 12px',
    fontSize: 14,
    lineHeight: 1.71
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      borderRadius: 'var(--radius-xl)',
      border: '1px solid ' + (dark ? 'var(--border-on-dark-strong)' : 'var(--hairline)'),
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      background: 'transparent',
      ...dims,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ResearchTable.jsx
try { (() => {
function ResearchTable({
  rows = [],
  onRowClick,
  header = false,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const cols = {
    title: {
      flex: '1 1 360px',
      minWidth: 0
    },
    topics: {
      flex: '0 1 260px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    },
    date: {
      flex: '0 0 120px',
      marginLeft: 'auto',
      textAlign: 'right'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--rule)',
      ...style
    }
  }, header ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 24px',
      padding: '12px 0',
      borderBottom: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    style: cols.title
  }, "Title"), /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    style: cols.topics
  }, "Topics"), /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    style: {
      ...cols.date,
      justifyContent: 'flex-end'
    }
  }, "Date")) : null, rows.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: r.href || '#',
    onClick: onRowClick ? e => {
      e.preventDefault();
      onRowClick(r, i);
    } : undefined,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px 24px',
      padding: '28px 0',
      borderBottom: 'var(--rule)',
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cols.title,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-lg)',
      textDecoration: hover === i ? 'underline' : 'none',
      textDecorationThickness: 1,
      textUnderlineOffset: 4
    }
  }, r.title), r.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--slate)'
    }
  }, r.meta) : null), /*#__PURE__*/React.createElement("div", {
    style: cols.topics
  }, (r.topics || []).map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cols.date,
      font: 'var(--type-caption)',
      color: 'var(--slate)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.date))));
}
Object.assign(__ds_scope, { ResearchTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ResearchTable.jsx", error: String((e && e.message) || e) }); }

// components/media/ConsoleCard.jsx
try { (() => {
function ConsoleCard({
  eyebrow,
  title,
  status,
  statusLabel,
  rows = [],
  integrations = [],
  prompt,
  onPrompt,
  response,
  maxWidth = 560,
  children,
  style
}) {
  const [value, setValue] = React.useState('');
  const hairDark = '1px solid rgba(255,255,255,0.08)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth,
      background: 'var(--primary)',
      color: 'var(--on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontFamily: 'var(--font-sans)',
      textAlign: 'left',
      ...style
    }
  }, eyebrow || title || status ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "on-dark-muted",
    size: 12
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-lg)'
    }
  }, title) : null), status ? /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    status: status,
    tone: "dark"
  }, statusLabel) : null) : null, rows.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: hairDark,
      borderBottom: hairDark
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i ? hairDark : 'none'
    }
  }, r.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)'
    }
  }, r.name), r.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--muted)'
    }
  }, r.meta) : null), r.status ? /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    status: r.status,
    tone: "dark"
  }, r.statusLabel) : null))) : null, integrations.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, integrations.map(b => /*#__PURE__*/React.createElement(__ds_scope.IntegrationBadge, {
    key: b.label,
    icon: b.icon
  }, b.label))) : null, children, prompt != null ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (onPrompt && value.trim()) {
        onPrompt(value.trim());
        setValue('');
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 6px 6px 14px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: prompt,
    "aria-label": prompt,
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--on-dark)',
      font: 'var(--type-caption)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Send",
    style: {
      width: 32,
      height: 32,
      flex: 'none',
      borderRadius: '50%',
      border: 0,
      background: 'var(--canvas)',
      color: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))) : null, response ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark-raised)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, response.label ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "on-dark-muted",
    size: 12
  }, response.label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      lineHeight: 1.5
    }
  }, response.body)) : null);
}
Object.assign(__ds_scope, { ConsoleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ConsoleCard.jsx", error: String((e && e.message) || e) }); }

// components/media/LogoStrip.jsx
try { (() => {
function LogoStrip({
  caption,
  logos,
  count = 6,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const items = logos && logos.length ? logos : Array.from({
    length: count
  }, (_, i) => null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
      padding: '80px 0',
      ...style
    }
  }, caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      textAlign: 'center',
      font: 'var(--type-body)',
      color: dark ? 'var(--text-on-dark-secondary)' : 'var(--body-muted)'
    }
  }, caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px 64px'
    }
  }, items.map((name, i) => name ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: '500 20px/1 var(--font-display)',
      letterSpacing: '-0.4px',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      opacity: 0.8,
      whiteSpace: 'nowrap'
    }
  }, name) : /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      width: 112,
      height: 28,
      borderRadius: 'var(--radius-xs)',
      background: dark ? 'rgba(255,255,255,0.12)' : 'var(--border-light)'
    }
  }))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const mediaPresets = {
  dusk: {
    backgroundColor: 'var(--gradient-dusk-base)',
    backgroundImage: 'var(--gradient-dusk)'
  },
  lagoon: {
    backgroundColor: 'var(--gradient-lagoon-base)',
    backgroundImage: 'var(--gradient-lagoon)'
  },
  placeholder: {
    backgroundColor: 'var(--soft-stone)'
  }
};
function MediaCard({
  preset = 'dusk',
  minHeight = 440,
  radius = 'lg',
  drift = false,
  noise = false,
  inset = '50px 80px',
  label,
  className,
  children,
  style,
  ...rest
}) {
  const has = children != null && children !== false;
  const cls = ['rs-media', drift && preset !== 'placeholder' ? 'rs-media-drift' : '', noise ? 'rs-media-noise' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    "aria-hidden": has ? undefined : true,
    style: {
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      borderRadius: radius === 'sm' ? 'var(--radius-sm)' : 'var(--radius-lg)',
      minHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: has ? inset : 0,
      ...mediaPresets[preset],
      ...style
    }
  }, rest), !has && preset === 'placeholder' && label ? /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, null, label) : null, has ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function AnnouncementBar({
  children,
  linkLabel = 'Learn more',
  href = '#',
  onLinkClick,
  dismissible = true,
  onClose,
  style
}) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "region",
    "aria-label": "Announcement",
    style: {
      position: 'relative',
      height: 'var(--announcement-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 48px',
      background: 'var(--surface-announcement)',
      color: 'var(--on-dark)',
      font: 'var(--type-micro)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children), linkLabel ? /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onLinkClick,
    style: {
      color: 'inherit',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      flex: 'none'
    }
  }, linkLabel) : null), dismissible ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss announcement",
    onClick: () => {
      setOpen(false);
      onClose && onClose();
    },
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      padding: 6,
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  brand = 'Research Systems',
  newsletterLabel = 'Stay current',
  headline,
  legal,
  columns = [],
  onSubscribe,
  bottomNote,
  style
}) {
  const [done, setDone] = React.useState(false);
  const [hoverLink, setHoverLink] = React.useState(null);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--primary)',
      color: 'var(--on-dark)',
      padding: '80px var(--container-pad) 40px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "accent"
  }, newsletterLabel), headline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-card)',
      letterSpacing: 'var(--type-card-tracking)'
    }
  }, headline) : null, done ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--on-dark)',
      padding: '12px 0'
    }
  }, "Subscribed. The next issue arrives at the start of the month.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      const v = new FormData(e.currentTarget).get('email');
      setDone(true);
      onSubscribe && onSubscribe(v);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--border-on-dark-strong)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    placeholder: "Work email",
    "aria-label": "Work email",
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--on-dark)',
      font: 'var(--type-body)',
      padding: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Subscribe",
    style: {
      display: 'flex',
      padding: 8,
      background: 'none',
      border: 0,
      color: 'var(--on-dark)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20
  }))), legal ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-micro)',
      color: 'var(--muted)'
    }
  }, legal) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 32
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MonoLabel, {
    tone: "on-dark",
    size: 12
  }, c.title), c.links.map(l => {
    const k = c.title + l;
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: "#",
      onMouseEnter: () => setHoverLink(k),
      onMouseLeave: () => setHoverLink(null),
      style: {
        font: 'var(--type-caption)',
        color: hoverLink === k ? 'var(--on-dark)' : 'var(--muted)',
        textDecoration: 'none'
      }
    }, l);
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 80,
      paddingTop: 24,
      borderTop: 'var(--rule-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 20px/1 var(--font-display)',
      letterSpacing: '-0.4px'
    }
  }, brand), bottomNote ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--muted)'
    }
  }, bottomNote) : null));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
function useNarrow(ref, bp) {
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < bp));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [bp]);
  return narrow;
}
function SiteNav({
  brand = 'Research Systems',
  links = [],
  active,
  onNavigate,
  signInLabel = 'Sign in',
  ctaLabel = 'Request a briefing',
  onCta,
  tone = 'light',
  style
}) {
  const ref = React.useRef(null);
  const narrow = useNarrow(ref, 920);
  const [open, setOpen] = React.useState(false);
  const dark = tone === 'dark';
  const fg = dark ? 'var(--on-dark)' : 'var(--ink)';
  const go = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l.id || l.label);
    }
    setOpen(false);
  };
  const linkStyle = l => {
    const on = active != null && (l.id || l.label) === active;
    return {
      color: fg,
      font: 'var(--type-button)',
      fontWeight: 400,
      textDecoration: on ? 'underline' : 'none',
      textDecorationThickness: 1,
      textUnderlineOffset: 6
    };
  };
  return /*#__PURE__*/React.createElement("header", {
    ref: ref,
    style: {
      position: 'relative',
      color: fg,
      background: dark ? 'transparent' : 'var(--canvas)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr auto' : '1fr auto 1fr',
      alignItems: 'center',
      gap: 24,
      minHeight: 72,
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go({
      id: 'home'
    }),
    style: {
      color: fg,
      textDecoration: 'none',
      font: '500 20px/1 var(--font-display)',
      letterSpacing: '-0.4px',
      whiteSpace: 'nowrap'
    }
  }, brand), !narrow ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id || l.label,
    href: l.href || '#',
    onClick: go(l),
    style: linkStyle(l)
  }, l.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 20
    }
  }, !narrow && signInLabel ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: fg,
      font: 'var(--type-button)',
      fontWeight: 400,
      textDecoration: 'none'
    }
  }, signInLabel) : null, !narrow && ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: dark ? 'dark' : 'light',
    onClick: onCta
  }, ctaLabel) : null, narrow ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      padding: 8,
      background: 'none',
      border: 0,
      color: fg,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 24
  })) : null)), narrow && open ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '8px var(--container-pad) 24px',
      borderTop: dark ? 'var(--rule-on-dark)' : 'var(--rule)',
      background: dark ? 'var(--primary)' : 'var(--canvas)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id || l.label,
    href: l.href || '#',
    onClick: go(l),
    style: {
      ...linkStyle(l),
      font: 'var(--type-feature)',
      padding: '10px 0'
    }
  }, l.label)), ctaLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: dark ? 'dark' : 'light',
    onClick: onCta
  }, ctaLabel)) : null) : null);
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
(() => {
  function App() {
    const read = () => location.hash.slice(1) || 'home';
    const [page, setPage] = React.useState(read);
    React.useEffect(() => {
      const h = () => setPage(read());
      window.addEventListener('hashchange', h);
      return () => window.removeEventListener('hashchange', h);
    }, []);
    const go = p => {
      const target = p === 'platform' ? 'home' : p;
      if (location.hash.slice(1) !== target) location.hash = target;
      setPage(target);
      setTimeout(() => {
        const el = p === 'platform' ? document.getElementById('platform') : null;
        window.scrollTo(0, el ? el.getBoundingClientRect().top + window.scrollY - 24 : 0);
      }, 30);
    };
    const screens = {
      home: window.HomeScreen,
      research: window.ResearchScreen,
      paper: window.PaperScreen,
      insights: window.InsightsScreen,
      contact: window.ContactScreen
    };
    const Screen = screens[page] || window.HomeScreen;
    return /*#__PURE__*/React.createElement(window.SiteShell, {
      page: page,
      go: go,
      dark: page === 'contact'
    }, /*#__PURE__*/React.createElement(Screen, {
      go: go
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact-screen.jsx
try { (() => {
(() => {
  const {
    Button,
    MonoLabel,
    Icon,
    FormCard,
    FormRow,
    TextInput
  } = window.ResearchSystems_3407f2;
  function ContactScreen({
    go
  }) {
    const {
      Container
    } = window;
    const [sent, setSent] = React.useState(null);
    const [err, setErr] = React.useState(null);
    const submit = d => {
      const email = String(d.get('email') || '');
      if (!/.+@.+\..+/.test(email)) {
        setErr('Enter a work email address');
        return;
      }
      setErr(null);
      setSent({
        name: d.get('name') || 'there',
        org: d.get('org') || ''
      });
    };
    return /*#__PURE__*/React.createElement("main", {
      style: {
        background: 'var(--deep-green)',
        color: 'var(--on-dark)'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '80px var(--container-pad) 120px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, {
      tone: "on-dark-muted"
    }, "Contact"), /*#__PURE__*/React.createElement("h1", {
      className: "rs-section-heading"
    }, "Bring us a question about your facility."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: 'var(--text-on-dark-secondary)',
        maxWidth: 480
      }
    }, "Briefings are 45 minutes with two engineers. We will ask for a floor plan and a month of telemetry if you have it."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: '24px 0 0',
        borderTop: 'var(--rule-on-dark)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, ['Reply within two working days', 'NDA available before we see any data', 'Engineers on the call, not sales'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        font: 'var(--type-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }), t)))), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--canvas)',
        color: 'var(--ink)',
        borderRadius: 'var(--radius-lg)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, {
      tone: "default"
    }, "Request received"), /*#__PURE__*/React.createElement("p", {
      className: "rs-card-heading"
    }, "Thank you, ", sent.name, "."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--body-muted)'
      }
    }, "An engineer will reply within two working days", sent.org ? ' to arrange a briefing for ' + sent.org : '', "."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconEnd: "arrow-right",
      onClick: () => go('research')
    }, "Read the research while you wait")) : /*#__PURE__*/React.createElement(FormCard, {
      title: "Request a technical briefing",
      submitLabel: "Send request",
      footnote: "We use your details only to reply to this request.",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement(FormRow, null, /*#__PURE__*/React.createElement(TextInput, {
      label: "Name",
      name: "name"
    }), /*#__PURE__*/React.createElement(TextInput, {
      label: "Organisation",
      name: "org"
    })), /*#__PURE__*/React.createElement(FormRow, null, /*#__PURE__*/React.createElement(TextInput, {
      label: "Work email",
      name: "email",
      type: "email",
      placeholder: "name@organisation.org",
      error: err
    }), /*#__PURE__*/React.createElement(TextInput, {
      label: "Facility IT load (MW)",
      name: "load",
      inputMode: "decimal"
    })), /*#__PURE__*/React.createElement(TextInput, {
      label: "What are you modelling?",
      name: "brief",
      multiline: true,
      rows: 4,
      placeholder: "Site, scale and the question you want answered"
    })))));
  }
  window.ContactScreen = ContactScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-screen.jsx
try { (() => {
(() => {
  const {
    Button,
    MonoLabel,
    MediaCard,
    ConsoleCard,
    LogoStrip,
    CapabilityCard,
    FeatureBand,
    ProcessDiagram,
    ProductCard,
    ResearchTable
  } = window.ResearchSystems_3407f2;
  function HomeScreen({
    go
  }) {
    const {
      Container,
      SectionHead
    } = window;
    const D = window.RS_SITE;
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '104px var(--container-pad) 64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, null, "Digital twins \xB7 Thermal \xB7 Energy"), /*#__PURE__*/React.createElement("h1", {
      className: "rs-hero-display",
      style: {
        maxWidth: 1040,
        textWrap: 'balance'
      }
    }, "Model the hall before you build it."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: 'var(--body-muted)',
        maxWidth: 620
      }
    }, "We build calibrated simulation models of data centres, plant rooms and energy systems, and publish the methods behind them."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 28,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('contact')
    }, "Request a briefing"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconEnd: "arrow-right",
      onClick: () => go('research')
    }, "Read the research"))), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      className: "kit-hero-pair"
    }, /*#__PURE__*/React.createElement(MediaCard, {
      preset: "dusk",
      minHeight: 600,
      noise: true,
      drift: true,
      className: "kit-dusk"
    }, /*#__PURE__*/React.createElement(ConsoleCard, {
      eyebrow: "Research agent",
      title: "Thermal twin \xB7 Hall B",
      status: "ok",
      statusLabel: "Live",
      rows: [{
        icon: 'wind',
        name: 'CFD solver',
        meta: 'k-ε turbulence · 4.2 M cells',
        status: 'ok',
        statusLabel: 'Converged'
      }, {
        icon: 'activity',
        name: 'Load forecaster',
        meta: '15-minute horizon',
        status: 'running',
        statusLabel: 'Running'
      }, {
        icon: 'radar',
        name: 'Sensor drift watch',
        meta: '1,240 inlet sensors',
        status: 'warn',
        statusLabel: '3 flagged'
      }],
      integrations: [{
        icon: 'thermometer',
        label: 'Rack sensors'
      }, {
        icon: 'database',
        label: 'DCIM'
      }, {
        icon: 'cpu',
        label: 'GPU cluster'
      }],
      prompt: "What happens if CRAH-3 trips?",
      onPrompt: () => {},
      response: {
        label: 'Simulated · 6-minute horizon',
        body: 'Rack B-14 inlet peaks at 27.4 °C after 6 min. Raising CRAH-2 fan speed to 85% keeps every inlet below 27 °C.'
      }
    })), /*#__PURE__*/React.createElement(MediaCard, {
      preset: "lagoon",
      minHeight: 600
    }))), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(LogoStrip, {
      caption: "Methods developed with operators, utilities and research institutes.",
      style: {
        padding: '96px 0'
      }
    })), /*#__PURE__*/React.createElement(Container, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 56,
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      label: "What we model",
      title: "Physical systems, calibrated against the real thing"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-grid-3"
    }, /*#__PURE__*/React.createElement(CapabilityCard, {
      icon: "thermometer",
      title: "Thermal digital twins",
      linkLabel: "Method",
      onLink: e => {
        e.preventDefault();
        go('paper');
      }
    }, "Airflow and heat transfer for whole halls, calibrated nightly against rack inlet sensors."), /*#__PURE__*/React.createElement(CapabilityCard, {
      icon: "zap",
      title: "Energy systems",
      linkLabel: "Method",
      onLink: e => {
        e.preventDefault();
        go('research');
      }
    }, "Grid supply, storage and on-site generation modelled as one dispatchable system."), /*#__PURE__*/React.createElement(CapabilityCard, {
      icon: "brain-circuit",
      title: "Surrogate models",
      linkLabel: "Method",
      onLink: e => {
        e.preventDefault();
        go('research');
      }
    }, "Neural surrogates trained on CFD runs answer what-if questions in under a second."))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement(FeatureBand, {
      eyebrow: "Method",
      title: "From sensor to decision in four steps",
      description: "Every twin is rebuilt from telemetry, not assumptions. The loop closes nightly.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        tone: "dark",
        onClick: () => go('paper')
      }, "Read the method paper"), /*#__PURE__*/React.createElement(Button, {
        tone: "dark",
        variant: "secondary",
        iconEnd: "arrow-up-right"
      }, "Download the dataset"))
    }, /*#__PURE__*/React.createElement(ProcessDiagram, {
      tone: "dark",
      loop: true,
      loopLabel: "Recalibrate nightly",
      steps: [{
        title: 'Sense',
        detail: '1,240 rack inlet sensors',
        icon: 'thermometer',
        edge: '1 Hz'
      }, {
        title: 'Model',
        detail: 'CFD + airflow network',
        icon: 'box',
        edge: 'state'
      }, {
        title: 'Simulate',
        detail: 'What-if in 40 s',
        icon: 'cpu',
        emphasis: true,
        edge: 'setpoints'
      }, {
        title: 'Act',
        detail: 'BMS write-back, operator approved',
        icon: 'sliders-horizontal'
      }]
    }))), /*#__PURE__*/React.createElement(Container, {
      id: "platform",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 56,
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      label: "Platform",
      title: "Three modules, one model of record"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-grid-3",
      style: {
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      label: "Module 01",
      title: "Twin",
      description: "A calibrated physical model of the facility.",
      ctaLabel: "See the method",
      onCta: () => go('paper'),
      features: ['CFD and airflow network models', 'Nightly calibration against telemetry', 'Exports to IFC and CSV']
    }), /*#__PURE__*/React.createElement(ProductCard, {
      label: "Module 02",
      title: "Simulate",
      description: "What-if analysis on the calibrated twin.",
      ctaLabel: "See an example",
      onCta: () => go('paper'),
      features: ['Failure and maintenance scenarios', 'Surrogate answers in under a second', 'Full CFD on request']
    }), /*#__PURE__*/React.createElement(ProductCard, {
      label: "Module 03",
      title: "Assure",
      description: "Evidence packs for every decision.",
      ctaLabel: "See a report",
      onCta: () => go('research'),
      features: ['Versioned inputs per run', 'Signed PDF and dataset', 'Reproducible from run ID']
    }))), /*#__PURE__*/React.createElement(Container, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      label: "Latest research",
      title: "Published this quarter",
      aside: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconEnd: "arrow-right",
        onClick: () => go('research')
      }, "All research")
    }), /*#__PURE__*/React.createElement(ResearchTable, {
      rows: D.papers.slice(0, 3).map(p => ({
        title: p.title,
        meta: p.type + (p.mins ? ' · ' + p.mins + ' min' : ''),
        topics: p.topics,
        date: p.date
      })),
      onRowClick: () => go('paper')
    })), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement(MediaCard, {
      preset: "lagoon",
      minHeight: 380,
      noise: true,
      inset: "56px 80px",
      className: "kit-cta-band"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 560,
        background: 'var(--primary)',
        color: 'var(--on-dark)',
        borderRadius: 'var(--radius-sm)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, {
      tone: "on-dark-muted"
    }, "Briefings"), /*#__PURE__*/React.createElement("p", {
      className: "rs-card-heading"
    }, "Bring a question about your facility."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-on-dark-secondary)'
      }
    }, "45 minutes with two engineers. Bring a floor plan and a month of telemetry if you have it."), /*#__PURE__*/React.createElement(Button, {
      tone: "dark",
      onClick: () => go('contact')
    }, "Request a briefing")))));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/insights-screen.jsx
try { (() => {
(() => {
  const {
    Button,
    MonoLabel,
    CategoryChip,
    MediaCard
  } = window.ResearchSystems_3407f2;
  function ArticleCard({
    a,
    onOpen
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onOpen();
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        color: 'var(--ink)',
        textDecoration: 'none',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(MediaCard, {
      preset: "placeholder",
      radius: "sm",
      minHeight: 220,
      label: a.image
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CategoryChip, {
      size: "sm"
    }, a.cat)), /*#__PURE__*/React.createElement("h3", {
      className: "rs-feature-heading",
      style: {
        textDecoration: hover ? 'underline' : 'none',
        textDecorationThickness: 1,
        textUnderlineOffset: 5
      }
    }, a.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--slate)'
      }
    }, a.date, " \xB7 ", a.mins, " min"));
  }
  function InsightsScreen({
    go
  }) {
    const {
      Container
    } = window;
    const D = window.RS_SITE;
    const [cat, setCat] = React.useState('All');
    const list = D.articles.filter(a => cat === 'All' || a.cat === cat);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '96px var(--container-pad) 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, null, "Insights"), /*#__PURE__*/React.createElement("h1", {
      className: "rs-product-display"
    }, "Notes from the lab.")), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 56
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12
      }
    }, D.categories.map(c => /*#__PURE__*/React.createElement(CategoryChip, {
      key: c,
      active: cat === c,
      onClick: () => setCat(c)
    }, c)))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 120
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-grid-3",
      style: {
        rowGap: 56
      }
    }, list.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
      key: a.title,
      a: a,
      onOpen: () => go('paper')
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--pale-blue)',
        padding: '96px 0'
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      className: "kit-split"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, null, "Newsletter"), /*#__PURE__*/React.createElement("h2", {
      className: "rs-section-heading"
    }, "Research notes, once a month."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: 'var(--body-muted)',
        maxWidth: 480
      }
    }, "New papers, datasets and field notes. No announcements, no events."), /*#__PURE__*/React.createElement(Button, {
      iconEnd: "arrow-right"
    }, "Subscribe")), /*#__PURE__*/React.createElement(MediaCard, {
      preset: "placeholder",
      minHeight: 320,
      label: "Abstract render \xB7 airflow",
      style: {
        background: 'var(--canvas)'
      }
    })))));
  }
  window.InsightsScreen = InsightsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/insights-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/paper-screen.jsx
try { (() => {
(() => {
  const {
    Button,
    MonoLabel,
    Tag,
    Metric,
    Figure,
    Callout,
    ProcessDiagram,
    LineChart,
    Heatmap,
    DataTable,
    BarChart
  } = window.ResearchSystems_3407f2;
  const paperRows = ['A', 'B', 'C', 'D'];
  const paperCols = Array.from({
    length: 12
  }, (_, i) => String(i + 1).padStart(2, '0'));
  const paperGrid = paperRows.map((r, ri) => paperCols.map((c, ci) => Math.round((20.4 + ci * 0.32 + (ri === 1 || ri === 2 ? 1.1 + 3.4 * Math.exp(-((ci - 8) ** 2) / 3) : 0)) * 10) / 10));
  const toc = ['Abstract', '1 Introduction', '2 Method', '3 Results', '4 Limitations', 'References'];
  function PaperSection({
    id,
    n,
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
      }
    }, n ? /*#__PURE__*/React.createElement("span", {
      className: "rs-card-heading",
      style: {
        color: 'var(--slate)'
      }
    }, n) : null, /*#__PURE__*/React.createElement("h2", {
      className: "rs-card-heading"
    }, title)), children);
  }
  const P = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink)',
      maxWidth: 720
    }
  }, children);
  function PaperScreen({
    go
  }) {
    const {
      Container
    } = window;
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '56px var(--container-pad) 56px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconStart: "arrow-left",
      onClick: () => go('research')
    }, "Research")), /*#__PURE__*/React.createElement(MonoLabel, null, "Technical paper \xB7 RS-TP-2026-014"), /*#__PURE__*/React.createElement("h1", {
      className: "rs-product-display",
      style: {
        maxWidth: 1100
      }
    }, "Calibrating thermal digital twins against live rack telemetry"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--slate)'
      }
    }, "Thermal Systems Group \xB7 14 Mar 2026 \xB7 18 min read"), /*#__PURE__*/React.createElement(Tag, {
      size: "sm"
    }, "Thermal"), /*#__PURE__*/React.createElement(Tag, {
      size: "sm"
    }, "Digital twins")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Cite"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconEnd: "arrow-up-right"
    }, "Dataset"), /*#__PURE__*/React.createElement(Button, {
      iconStart: "download"
    }, "Download PDF"))), /*#__PURE__*/React.createElement("div", {
      className: "kit-grid-3",
      style: {
        borderTop: 'var(--rule)',
        paddingTop: 32,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Metric, {
      label: "Cooling energy",
      value: "\u221212",
      unit: "%",
      detail: "vs. fixed-setpoint baseline, 12 months"
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Forecast error",
      value: "0.4",
      unit: "\xB0C RMSE",
      detail: "Rack inlet, 6-minute horizon"
    }), /*#__PURE__*/React.createElement(Metric, {
      label: "Calibrated parameters",
      value: "38",
      detail: "Updated nightly from 1,240 sensors"
    }))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 140
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-paper-grid"
    }, /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Contents",
      className: "kit-toc",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        borderTop: 'var(--rule)',
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, {
      style: {
        marginBottom: 6
      }
    }, "Contents"), toc.map(t => /*#__PURE__*/React.createElement("a", {
      key: t,
      href: "#",
      onClick: e => {
        e.preventDefault();
        const el = document.getElementById('p-' + t.split(' ').pop().toLowerCase());
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 24);
      },
      style: {
        font: 'var(--type-caption)',
        color: 'var(--body-muted)',
        textDecoration: 'none'
      }
    }, t))), /*#__PURE__*/React.createElement("article", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 56,
        minWidth: 0,
        borderTop: 'var(--rule)',
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-abstract",
      title: "Abstract"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        maxWidth: 720
      }
    }, "We describe a nightly calibration loop that keeps a CFD-based digital twin of a 6 MW data hall within 0.4 \xB0C of measured rack inlet temperatures. Over 12 months, setpoints recommended by the calibrated twin reduced cooling energy by 11\u201314% relative to fixed setpoints without any inlet exceeding the ASHRAE A1 recommended limit.")), /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-introduction",
      n: "1",
      title: "Introduction"
    }, /*#__PURE__*/React.createElement(P, null, "Uncalibrated thermal models drift. Rack moves, blanking panels and fan degradation change the airflow faster than facilities teams can rebuild geometry, so most twins are trusted for design and ignored in operation."), /*#__PURE__*/React.createElement(P, null, "We close the loop instead: the twin is corrected every night against telemetry it already receives, and only a calibrated twin is allowed to recommend setpoints (Fig. 1)."), /*#__PURE__*/React.createElement(Figure, {
      label: "Fig.",
      number: 1,
      title: "Calibration loop",
      caption: "Four stages run nightly; only the Forecast stage writes recommendations, which an operator approves."
    }, /*#__PURE__*/React.createElement(ProcessDiagram, {
      loop: true,
      loopLabel: "Nightly",
      steps: [{
        title: 'Sense',
        detail: '1,240 inlet sensors',
        icon: 'thermometer',
        edge: '1 Hz'
      }, {
        title: 'Model',
        detail: 'CFD + airflow network',
        icon: 'box',
        edge: 'state'
      }, {
        title: 'Calibrate',
        detail: '38 parameters',
        icon: 'target',
        edge: 'posterior'
      }, {
        title: 'Forecast',
        detail: 'Setpoints + limits',
        icon: 'chart-line',
        emphasis: true
      }]
    }))), /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-method",
      n: "2",
      title: "Method"
    }, /*#__PURE__*/React.createElement(P, null, "Parameters with the largest sensitivity (tile open area, CRAH fan curves, rack leakage) are updated by Bayesian inference against the previous 24 hours of inlet data. The posterior mean seeds the next day's forecasts."), /*#__PURE__*/React.createElement(Callout, {
      tone: "blue",
      label: "Assumption"
    }, "IT load follows the measured hourly profile; no step changes above 15% were present in the study period.")), /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-results",
      n: "3",
      title: "Results"
    }, /*#__PURE__*/React.createElement(P, null, "After a CRAH-3 trip the twin forecast rack B-14 inlet within 0.3 \xB0C over the first 16 minutes (Fig. 2). Hot spots concentrate at positions 07\u201310 of rows B and C (Fig. 3)."), /*#__PURE__*/React.createElement(Figure, {
      number: 2,
      title: "Rack B-14 inlet after CRAH-3 trip",
      caption: "Measured (solid) vs. twin forecast (dashed). Dashed coral line: ASHRAE A1 recommended limit.",
      source: "Twin run 0412"
    }, /*#__PURE__*/React.createElement(LineChart, {
      yLabel: "Inlet",
      unit: "\xB0C",
      xLabel: "Minutes after trip",
      x: [0, 2, 4, 6, 8, 10, 12, 14, 16],
      yDomain: [20, 28],
      height: 260,
      series: [{
        name: 'Measured',
        data: [22.1, 23.0, 24.6, 25.9, 26.7, 27.1, 27.3, 27.4, 27.4]
      }, {
        name: 'Twin forecast',
        data: [22.0, 23.2, 24.9, 26.2, 26.9, 27.3, 27.5, 27.5, 27.6],
        dashed: true
      }],
      thresholds: [{
        y: 27,
        label: 'ASHRAE A1 · 27 °C'
      }],
      markers: [{
        x: 0.5,
        label: 'Trip'
      }]
    })), /*#__PURE__*/React.createElement(Figure, {
      number: 3,
      title: "Inlet temperature, Hall B",
      caption: "Steady state at 40% IT load with CRAH-3 offline, binned at ~1.4 \xB0C.",
      source: "Twin run 0412, calibrated 14 Mar 2026"
    }, /*#__PURE__*/React.createElement(Heatmap, {
      rowLabels: paperRows,
      colLabels: paperCols,
      data: paperGrid,
      min: 19,
      max: 29,
      unit: "\xB0C"
    })), /*#__PURE__*/React.createElement(Figure, {
      label: "Table",
      number: 1,
      title: "Control strategies, 12 months",
      caption: "Supply-air setpoint, annualised PUE, highest recorded rack inlet and cooling energy."
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'case',
        label: 'Case'
      }, {
        key: 'sat',
        label: 'Supply air',
        unit: '°C',
        align: 'right'
      }, {
        key: 'pue',
        label: 'PUE',
        align: 'right'
      }, {
        key: 'inlet',
        label: 'Peak inlet',
        unit: '°C',
        align: 'right'
      }, {
        key: 'mwh',
        label: 'Cooling',
        unit: 'MWh',
        align: 'right'
      }],
      rows: [{
        case: 'Fixed setpoint',
        sat: '18.0',
        pue: '1.31',
        inlet: '24.1',
        mwh: '8,420'
      }, {
        case: 'Rule-based',
        sat: '20.0',
        pue: '1.24',
        inlet: '25.3',
        mwh: '7,860'
      }, {
        case: 'Twin-optimised',
        sat: '22.5',
        pue: '1.18',
        inlet: '26.8',
        mwh: '7,400'
      }],
      highlightRow: 2
    })), /*#__PURE__*/React.createElement(Figure, {
      number: 4,
      title: "Cooling energy by strategy",
      caption: "Index, fixed setpoint = 100."
    }, /*#__PURE__*/React.createElement(BarChart, {
      orientation: "horizontal",
      categories: ['Fixed setpoint', 'Rule-based', 'Twin-optimised'],
      series: [{
        name: 'Cooling energy',
        values: [100, 93.4, 87.9]
      }],
      highlight: 2
    })), /*#__PURE__*/React.createElement(Callout, {
      label: "Key finding",
      title: "Calibrated twins cut cooling energy by 11\u201314% without breaching ASHRAE A1."
    }, "Savings came from raised supply-air setpoints, not fan changes.")), /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-limitations",
      n: "4",
      title: "Limitations"
    }, /*#__PURE__*/React.createElement(P, null, "One hall, one climate and one year. Sensor drift above 0.8 \xB0C is flagged but not yet corrected automatically.")), /*#__PURE__*/React.createElement(PaperSection, {
      id: "p-references",
      title: "References"
    }, /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: 0,
        paddingLeft: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxWidth: 720
      }
    }, ['ASHRAE TC 9.9. Thermal Guidelines for Data Processing Environments, 5th ed., 2021.', 'Research Systems. Bayesian calibration of airflow network models. RS-TP-2025-013.', 'Research Systems. Hall B inlet temperature dataset, 1 Hz, 2025. RS-DS-2025-004.'].map((r, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        font: 'var(--type-caption)',
        color: 'var(--body-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--slate)'
      }
    }, "[", i + 1, "]"), /*#__PURE__*/React.createElement("span", null, r)))))))));
  }
  window.PaperScreen = PaperScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/paper-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/research-screen.jsx
try { (() => {
(() => {
  const {
    Button,
    MonoLabel,
    SearchField,
    ResearchTable
  } = window.ResearchSystems_3407f2;
  function ResearchScreen({
    go
  }) {
    const {
      Container
    } = window;
    const D = window.RS_SITE;
    const [topic, setTopic] = React.useState('All');
    const [q, setQ] = React.useState('');
    const rows = D.papers.filter(p => (topic === 'All' || p.topics.includes(topic)) && (!q || p.title.toLowerCase().includes(q.toLowerCase())));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '96px var(--container-pad) 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, null, "Research"), /*#__PURE__*/React.createElement("h1", {
      className: "rs-product-display",
      style: {
        maxWidth: 900
      }
    }, "Papers, datasets and methods."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: 'var(--body-muted)',
        maxWidth: 620
      }
    }, "Everything we publish, with the data and code needed to reproduce it.")), /*#__PURE__*/React.createElement(Container, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingBottom: 32
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      size: "lg",
      placeholder: "Search titles",
      onChange: e => setQ(e.target.value),
      onSubmit: setQ
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, D.topics.map(t => /*#__PURE__*/React.createElement(Button, {
      key: t,
      variant: "outline",
      selected: topic === t,
      onClick: () => setTopic(t)
    }, t)))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 140
      }
    }, rows.length ? /*#__PURE__*/React.createElement(ResearchTable, {
      header: true,
      rows: rows.map(p => ({
        title: p.title,
        meta: p.type + (p.mins ? ' · ' + p.mins + ' min' : ''),
        topics: p.topics,
        date: p.date
      })),
      onRowClick: () => go('paper')
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: 'var(--rule)',
        borderBottom: 'var(--rule)',
        padding: '56px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-feature)'
      }
    }, "No results for \"", q, "\" in ", topic, "."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setTopic('All');
        setQ('');
      }
    }, "Clear filters"))));
  }
  window.ResearchScreen = ResearchScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/research-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-data.js
try { (() => {
window.RS_SITE = {
  links: [{
    id: 'research',
    label: 'Research'
  }, {
    id: 'platform',
    label: 'Platform'
  }, {
    id: 'insights',
    label: 'Insights'
  }, {
    id: 'contact',
    label: 'Contact'
  }],
  topics: ['All', 'Thermal', 'Energy', 'Simulation', 'AI', 'Digital twins', 'Datasets'],
  papers: [{
    title: 'Calibrating thermal digital twins against live rack telemetry',
    type: 'Technical paper',
    mins: 18,
    topics: ['Thermal', 'Digital twins'],
    date: '14 Mar 2026'
  }, {
    title: 'Surrogate CFD for sub-second what-if analysis in data halls',
    type: 'Preprint',
    mins: 11,
    topics: ['Simulation', 'AI'],
    date: '02 Feb 2026'
  }, {
    title: 'Liquid-to-air heat rejection: a 12-month field study',
    type: 'Technical report',
    mins: 24,
    topics: ['Thermal', 'Energy'],
    date: '18 Dec 2025'
  }, {
    title: 'Hall B inlet temperature dataset, 1 Hz, 2025',
    type: 'Dataset',
    topics: ['Thermal', 'Datasets'],
    date: '30 Nov 2025'
  }, {
    title: 'Bayesian calibration of airflow network models',
    type: 'Technical paper',
    mins: 21,
    topics: ['Simulation', 'Digital twins'],
    date: '07 Oct 2025'
  }, {
    title: 'Forecasting GPU cluster load for cooling pre-emption',
    type: 'Method note',
    mins: 9,
    topics: ['AI', 'Energy'],
    date: '19 Aug 2025'
  }, {
    title: 'Grid-interactive UPS dispatch under frequency events',
    type: 'Technical report',
    mins: 16,
    topics: ['Energy'],
    date: '02 Jul 2025'
  }],
  categories: ['All', 'Engineering', 'Methods', 'Field notes', 'Energy'],
  articles: [{
    cat: 'Engineering',
    title: 'What a thermal twin gets wrong in its first week',
    date: '21 Mar 2026',
    mins: 7,
    image: 'Photograph · cold-aisle containment'
  }, {
    cat: 'Methods',
    title: 'Why we bin heat maps into seven bands',
    date: '09 Mar 2026',
    mins: 5,
    image: 'Figure · binned heat map'
  }, {
    cat: 'Field notes',
    title: 'Commissioning sensors in a live hall without downtime',
    date: '24 Feb 2026',
    mins: 9,
    image: 'Photograph · sensor on rack door'
  }, {
    cat: 'Energy',
    title: 'Reading PUE honestly: seasonal baselines and what they hide',
    date: '10 Feb 2026',
    mins: 8,
    image: 'Chart · monthly PUE'
  }, {
    cat: 'Methods',
    title: 'Surrogates are only as good as the CFD they learn from',
    date: '27 Jan 2026',
    mins: 6,
    image: 'Render · CFD velocity field'
  }, {
    cat: 'Field notes',
    title: 'Twelve months of liquid cooling in a 1990s building',
    date: '12 Jan 2026',
    mins: 11,
    image: 'Photograph · plant room'
  }],
  footer: [{
    title: 'Research',
    links: ['Papers', 'Datasets', 'Methods']
  }, {
    title: 'Platform',
    links: ['Twin', 'Simulate', 'Assure']
  }, {
    title: 'Company',
    links: ['About', 'Careers', 'Contact']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/site-shell.jsx
try { (() => {
(() => {
  const {
    AnnouncementBar,
    SiteNav,
    SiteFooter,
    MonoLabel
  } = window.ResearchSystems_3407f2;
  function Container({
    children,
    style,
    id
  }) {
    return /*#__PURE__*/React.createElement("div", {
      id: id,
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)',
        ...style
      }
    }, children);
  }
  function SectionHead({
    label,
    title,
    lead,
    aside,
    tone = 'light'
  }) {
    const dark = tone === 'dark';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 760
      }
    }, label ? /*#__PURE__*/React.createElement(MonoLabel, {
      tone: dark ? 'on-dark-muted' : 'muted'
    }, label) : null, /*#__PURE__*/React.createElement("h2", {
      className: "rs-section-heading",
      style: {
        color: dark ? 'var(--on-dark)' : 'var(--ink)'
      }
    }, title), lead ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-lg)',
        color: dark ? 'var(--text-on-dark-secondary)' : 'var(--body-muted)'
      }
    }, lead) : null), aside);
  }
  function SiteShell({
    page,
    go,
    dark,
    children
  }) {
    const D = window.RS_SITE;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnnouncementBar, {
      onLinkClick: e => {
        e.preventDefault();
        go('paper');
      }
    }, "New paper: calibrating thermal twins against live rack telemetry."), /*#__PURE__*/React.createElement(SiteNav, {
      links: D.links,
      active: page === 'paper' ? 'research' : page,
      onNavigate: go,
      onCta: () => go('contact'),
      tone: dark ? 'dark' : 'light',
      style: dark ? {
        background: 'var(--deep-green)'
      } : undefined
    }), children, /*#__PURE__*/React.createElement(SiteFooter, {
      headline: "Research notes, once a month.",
      legal: "One email a month with new papers, datasets and field notes. Unsubscribe at any time.",
      columns: D.footer,
      bottomNote: "\xA9 2026 Research Systems \xB7 Privacy \xB7 Terms"
    }));
  }
  Object.assign(window, {
    Container,
    SectionHead,
    SiteShell
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Heatmap = __ds_scope.Heatmap;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.FeatureBand = __ds_scope.FeatureBand;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ResearchTable = __ds_scope.ResearchTable;

__ds_ns.ProcessDiagram = __ds_scope.ProcessDiagram;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.FormRow = __ds_scope.FormRow;

__ds_ns.FormCard = __ds_scope.FormCard;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.IntegrationBadge = __ds_scope.IntegrationBadge;

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ConsoleCard = __ds_scope.ConsoleCard;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
