/* @ds-bundle: {"format":4,"namespace":"WebBeweOSDesignSystem_72cea7","components":[{"name":"AppTopNav","sourcePath":"ui_kits/beweos/AppTopNav.jsx"},{"name":"CRMTable","sourcePath":"ui_kits/beweos/CRMTable.jsx"},{"name":"Dashboard","sourcePath":"ui_kits/beweos/Dashboard.jsx"},{"name":"FeatureStrip","sourcePath":"ui_kits/website/FeatureStrip.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"LindaSuggestionSection","sourcePath":"ui_kits/website/LindaSuggestionSection.jsx"},{"name":"WhatsAppFab","sourcePath":"ui_kits/website/Overlays.jsx"},{"name":"TrialModal","sourcePath":"ui_kits/website/Overlays.jsx"},{"name":"WhatsAppDrawer","sourcePath":"ui_kits/website/Overlays.jsx"},{"name":"Overlays","sourcePath":"ui_kits/website/Overlays.jsx"},{"name":"TopNav","sourcePath":"ui_kits/website/TopNav.jsx"}],"sourceHashes":{"ui_kits/beweos/AppTopNav.jsx":"fb9c380acb63","ui_kits/beweos/CRMTable.jsx":"a026b5dd1264","ui_kits/beweos/Dashboard.jsx":"5ac02b9cbe61","ui_kits/website/FeatureStrip.jsx":"6752a9259363","ui_kits/website/Footer.jsx":"0bc10fe8f343","ui_kits/website/Hero.jsx":"635ccde61e01","ui_kits/website/LindaSuggestionSection.jsx":"42c6a432dd19","ui_kits/website/Overlays.jsx":"f8420408a0e2","ui_kits/website/TopNav.jsx":"1449eb450f69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WebBeweOSDesignSystem_72cea7 = window.WebBeweOSDesignSystem_72cea7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/beweos/AppTopNav.jsx
try { (() => {
// TopNav.jsx — horizontal app nav (replaces Sidebar)
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'chart'
}, {
  id: 'crm',
  label: 'CRM',
  icon: 'user-circle'
}, {
  id: 'campaigns',
  label: 'Campañas',
  icon: 'mail'
}, {
  id: 'linda',
  label: 'Luna',
  icon: 'sparkle',
  ai: true
}];
function AppTopNav({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(10,37,64,0.06)',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '12px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-0.5px',
      color: 'var(--ink-deep)'
    }
  }, "BeweOS"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      flex: 1
    }
  }, NAV.map(item => {
    const isActive = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onChange(item.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        borderRadius: 999,
        background: isActive ? item.ai ? 'transparent' : 'var(--primary-100)' : 'transparent',
        color: isActive ? item.ai ? 'var(--ink-deep)' : 'var(--primary-700)' : 'var(--fg-2)',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 13.5,
        fontWeight: isActive ? 600 : 500,
        position: 'relative',
        overflow: 'hidden'
      }
    }, item.ai && isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: 999,
        background: 'linear-gradient(90deg, rgba(250,209,158,0.35), rgba(96,165,250,0.35), rgba(52,211,153,0.35))',
        backgroundSize: '200% 100%',
        animation: 'gradient-shift 3s linear infinite'
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: `../../assets/icons/${item.icon}.svg`,
      width: "16",
      height: "16",
      style: {
        position: 'relative',
        opacity: isActive ? 1 : 0.7
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, item.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--bg-1)',
      padding: '7px 12px',
      borderRadius: 999,
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/search.svg",
    width: "15",
    height: "15",
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar\u2026",
    style: {
      border: 0,
      background: 'transparent',
      outline: 'none',
      fontSize: 13,
      flex: 1,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'relative',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/bell.svg",
    width: "20",
    height: "20",
    style: {
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent-ai)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '3px 10px 3px 3px',
      borderRadius: 999,
      border: '1px solid rgba(10,37,64,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #B0D2FC, #FAD19E)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "MA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink-deep)'
    }
  }, "Mar\xEDa A.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px',
      borderRadius: 999,
      background: 'var(--surface-aqua)',
      fontSize: 11,
      color: 'var(--ink-forest)',
      fontWeight: 600
    }
  }, "12 d\xEDas restantes"));
}
window.AppTopNav = AppTopNav;
Object.assign(__ds_scope, { AppTopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/beweos/AppTopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/beweos/CRMTable.jsx
try { (() => {
// CRMTable.jsx
const CONTACTS = [{
  name: 'Lucía Méndez',
  phone: '+52 55 1234 5678',
  last: 'WhatsApp · 2 min',
  score: 'alta',
  status: 'Activa'
}, {
  name: 'Ana Cárdenas',
  phone: '+52 55 8901 2345',
  last: 'Instagram · 1 h',
  score: 'media',
  status: 'Activa'
}, {
  name: 'Rocío Paredes',
  phone: '+52 55 2345 6789',
  last: 'WhatsApp · 2 h',
  score: 'alta',
  status: 'Nueva'
}, {
  name: 'Daniela Vega',
  phone: '+52 55 6789 0123',
  last: 'Web · 1 día',
  score: 'baja',
  status: 'Inactiva'
}, {
  name: 'Paola Martínez',
  phone: '+52 55 4567 8901',
  last: 'WhatsApp · 2 días',
  score: 'media',
  status: 'Activa'
}];
const SCORE_STYLE = {
  alta: {
    bg: '#FAD19E',
    fg: '#7A4A17',
    label: '✦ Alta'
  },
  media: {
    bg: '#DFEDFE',
    fg: '#355B8A',
    label: 'Media'
  },
  baja: {
    bg: '#F1F5F9',
    fg: '#64748B',
    label: 'Baja'
  }
};
const STATUS_STYLE = {
  'Activa': {
    bg: '#D6F6EB',
    fg: '#1D7454'
  },
  'Nueva': {
    bg: '#DFEDFE',
    fg: '#355B8A'
  },
  'Inactiva': {
    bg: '#F1F5F9',
    fg: '#64748B'
  }
};
function CRMTable() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 48px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "CRM"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, "412 clientas \xB7 enriquecidas por ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"))), /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    style: {
      padding: '10px 20px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/plus.svg",
    width: "14",
    height: "14",
    style: {
      filter: 'invert(1)'
    }
  }), "Nuevo contacto")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid rgba(10,37,64,0.06)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.6fr 1.6fr 1fr 1fr',
      padding: '12px 20px',
      background: 'var(--bg-1)',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Cliente"), /*#__PURE__*/React.createElement("span", null, "Tel\xE9fono"), /*#__PURE__*/React.createElement("span", null, "\xDAltimo contacto"), /*#__PURE__*/React.createElement("span", null, "Score IA"), /*#__PURE__*/React.createElement("span", null, "Estado")), CONTACTS.map((c, i) => {
    const s = SCORE_STYLE[c.score],
      st = STATUS_STYLE[c.status];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1.6fr 1.6fr 1fr 1fr',
        padding: '14px 20px',
        alignItems: 'center',
        borderTop: '1px solid rgba(10,37,64,0.04)',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #B0D2FC, #9AE9CC)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--ink-deep)'
      }
    }, c.name.split(' ').map(x => x[0]).join('')), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-deep)',
        fontWeight: 500
      }
    }, c.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-2)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, c.phone), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-2)'
      }
    }, c.last), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '3px 10px',
        borderRadius: 999,
        background: s.bg,
        color: s.fg,
        fontSize: 11,
        fontWeight: 600
      }
    }, s.label)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '3px 10px',
        borderRadius: 999,
        background: st.bg,
        color: st.fg,
        fontSize: 11,
        fontWeight: 600
      }
    }, c.status)));
  })));
}
window.CRMTable = CRMTable;
Object.assign(__ds_scope, { CRMTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/beweos/CRMTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/beweos/Dashboard.jsx
try { (() => {
// Dashboard.jsx + MetricCard.jsx + LindaProcessing.jsx
const MetricCard = ({
  label,
  value,
  delta,
  positive
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fff',
    borderRadius: 16,
    padding: 20,
    border: '1px solid rgba(10,37,64,0.06)',
    boxShadow: '0 1px 2px rgba(10,37,64,0.04)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--fg-3)',
    fontWeight: 500,
    marginBottom: 8
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 28,
    fontWeight: 700,
    color: 'var(--ink-deep)',
    lineHeight: 1.1
  }
}, value), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 600,
    color: positive ? 'var(--secondary-600)' : 'var(--error)'
  }
}, positive ? '↑' : '↓', " ", delta));
window.MetricCard = MetricCard;
const LindaProcessing = ({
  onDone
}) => {
  React.useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(254,243,199,0.6), rgba(255,255,255,0.9), rgba(214,246,235,0.6))',
      borderRadius: 16,
      padding: 28,
      textAlign: 'center',
      border: '1px solid rgba(250,209,158,0.5)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-lines",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      [i < 2 ? 'top' : 'bottom']: i === 0 || i === 2 ? '0' : 'auto',
      [i % 2 ? 'right' : 'left']: 0,
      width: i < 2 ? '100%' : '1px',
      height: i < 2 ? '1px' : '100%',
      background: 'linear-gradient(90deg, transparent, #60A5FA, transparent)',
      animation: 'linda-line-sweep 1.4s ease-in-out infinite',
      animationDelay: `${i * 0.15}s`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-deep)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/sparkle.svg",
    width: "18",
    height: "18",
    style: {
      animation: 'linda-breathe 1.4s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), " est\xE1 analizando tus conversaciones\u2026")));
};
window.LindaProcessing = LindaProcessing;
function Dashboard() {
  const [phase, setPhase] = React.useState('idle'); // idle | processing | done
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 48px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "Hola, Mar\xEDa"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, "Esto es lo que est\xE1 pasando en Sal\xF3n Aurora hoy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Mensajes atendidos",
    value: "248",
    delta: "+18% vs. ayer",
    positive: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Citas reservadas",
    value: "37",
    delta: "+4 esta semana",
    positive: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Clientas activas",
    value: "412",
    delta: "+12 nuevas",
    positive: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Tasa de respuesta",
    value: "94%",
    delta: "+2 pts",
    positive: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink-deep)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), " sugiere"), phase === 'idle' && /*#__PURE__*/React.createElement("div", {
    className: "linda-sug-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/sparkle.svg",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-forest)'
    }
  }, "Sugerencia"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, "hace 3 min")), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "12 clientas inactivas podr\xEDan reactivarse esta semana"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--fg-2)'
    }
  }, "Una campa\xF1a de WhatsApp con 10% en corte + color recuper\xF3 4/10 clientas el mes pasado. \xBFPreparo una similar?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    style: {
      padding: '8px 16px',
      fontSize: 13
    },
    onClick: () => setPhase('processing')
  }, "Preparar campa\xF1a"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost-pill",
    style: {
      padding: '8px 16px',
      fontSize: 12
    }
  }, "Ver detalles"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost-pill",
    style: {
      padding: '8px 16px',
      fontSize: 12,
      marginLeft: 'auto'
    },
    onClick: () => setPhase('idle')
  }, "Ignorar"))), phase === 'processing' && /*#__PURE__*/React.createElement(LindaProcessing, {
    onDone: () => setPhase('done')
  }), phase === 'done' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--secondary-100)',
      border: '1px solid var(--secondary-300)',
      borderRadius: 16,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/check-circle.svg",
    width: "24",
    height: "24",
    style: {
      color: 'var(--secondary-700)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--secondary-700)'
    }
  }, "\xA1Campa\xF1a preparada!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-2)',
      marginTop: 2
    }
  }, "Revisa el borrador antes de enviar a 12 clientas.")), /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    style: {
      padding: '8px 16px',
      fontSize: 13
    }
  }, "Revisar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink-deep)'
    }
  }, "Actividad reciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid rgba(10,37,64,0.06)',
      overflow: 'hidden'
    }
  }, [{
    icon: 'chat-round',
    text: 'Lucía preguntó por disponibilidad',
    time: '2 min'
  }, {
    icon: 'check-circle',
    text: 'Cita confirmada · Ana C.',
    time: '14 min'
  }, {
    icon: 'mail',
    text: 'Campaña "Julio" enviada',
    time: '1 h'
  }, {
    icon: 'user-circle',
    text: 'Nuevo contacto: Rocío P.',
    time: '2 h'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: i ? '1px solid rgba(10,37,64,0.04)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${a.icon}.svg`,
    width: "18",
    height: "18",
    style: {
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      color: 'var(--fg-1)'
    }
  }, a.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, a.time)))))));
}
window.Dashboard = Dashboard;
Object.assign(__ds_scope, { Dashboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/beweos/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeatureStrip.jsx
try { (() => {
// FeatureStrip.jsx — 3-up Atiende / Ordena / Propone
const FEATURES = [{
  icon: 'chat-round',
  title: 'Atiende',
  body: 'Responde en WhatsApp, Instagram y web con contexto de tu negocio. No con respuestas genéricas.'
}, {
  icon: 'bolt',
  title: 'Ordena',
  body: 'Cada conversación genera etiquetas que enriquecen el perfil del cliente en tu CRM.'
}, {
  icon: 'lightbulb',
  title: 'Propone',
  body: 'Detecta oportunidades y te sugiere campañas y posts listos para aprobar.'
}];
function FeatureStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1152,
      margin: '0 auto',
      padding: '0 48px 96px',
      position: 'relative',
      zIndex: 2,
      marginTop: -40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    className: "feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      marginBottom: 20,
      color: 'var(--ink-deep)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${f.icon}.svg`,
    width: "28",
    height: "28",
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--fg-2)'
    }
  }, f.body)))));
}
window.FeatureStrip = FeatureStrip;
Object.assign(__ds_scope, { FeatureStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeatureStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-deep)',
      color: '#fff',
      padding: '64px 48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.5px',
      marginBottom: 12
    }
  }, "BeweOS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.65)',
      maxWidth: 320
    }
  }, "El sistema operativo con IA para tu negocio. Atiende, ordena y propone \u2014 para que t\xFA dirijas.")), [['Producto', ['Funcionalidades', 'Luna AI', 'CRM', 'Campañas WhatsApp']], ['Industrias', ['Belleza', 'Wellness', 'Fitness', 'Salud', 'Retail', 'Educación']], ['Empresa', ['Sobre nosotros', 'Recursos', 'Blog', 'Contacto']]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 14,
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontSize: 13,
      lineHeight: 1.9,
      color: 'rgba(255,255,255,0.65)'
    }
  }, items.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, x))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 bewe.ia \xB7 Todos los derechos reservados"), /*#__PURE__*/React.createElement("span", null, "Hecho con ", /*#__PURE__*/React.createElement("span", {
    className: "linda",
    style: {
      color: 'var(--accent-ai)'
    }
  }, "cuidado"), " en LATAM \xB7 ES"))));
}
window.Footer = Footer;
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Luna gradient hero with "second brain" headline
function Hero({
  onLindaClick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 64px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "linda-wash"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      textAlign: 'center',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(40px, 6vw, 72px)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--ink-deep)',
      textWrap: 'balance'
    }
  }, "Conoce a ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), ", tu segundo ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "cerebro")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: 560,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--fg-2)'
    }
  }, "Atiende a tus clientes, ordena tu base de datos y propone tu marketing. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-deep)'
    }
  }, "T\xFA dejas de operar y empiezas a dirigir."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    onClick: onLindaClick
  }, "Ver todo lo que ", /*#__PURE__*/React.createElement("span", {
    className: "linda",
    style: {
      color: 'inherit'
    }
  }, "Luna"), " puede hacer", /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/arrow-right.svg",
    width: "16",
    height: "16",
    style: {
      filter: 'invert(1)'
    }
  }))));
}
window.Hero = Hero;
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LindaSuggestionSection.jsx
try { (() => {
// LindaSuggestionSection.jsx — full-width band showcasing a Luna proactive suggestion
function LindaSuggestionSection() {
  const [accepted, setAccepted] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: 'linear-gradient(120deg, #DFEDFE 0%, #FFFFFF 50%, #D6F6EB 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "linda-grain",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "linda-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "linda-tag-dot"
  }), " Luna sugiere"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px',
      fontSize: 'clamp(28px, 4vw, 44px)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      color: 'var(--ink-deep)'
    }
  }, "No esperes a preguntarle. ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), " ya detect\xF3 algo."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--fg-2)'
    }
  }, "Analiza tus conversaciones, tu calendario y tu CRM. Cuando ve una oportunidad, te la presenta como posibilidad \u2014 nunca como orden.")), /*#__PURE__*/React.createElement("div", {
    className: "linda-sug-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/sparkle.svg",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-forest)'
    }
  }, "Sugerencia"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, "\xB7 Sal\xF3n Aurora")), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "12 clientas inactivas podr\xEDan reactivarse esta semana"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--fg-2)'
    }
  }, "Una campa\xF1a de WhatsApp con 10% en corte + color recuper\xF3 4/10 clientas el mes pasado. \xBFLanzamos algo similar?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    style: {
      padding: '10px 20px',
      fontSize: 13
    },
    onClick: () => setAccepted(true)
  }, accepted ? '✓ Campaña preparada' : 'Preparar campaña'), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost-pill"
  }, "Ver detalles"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost-pill",
    style: {
      marginLeft: 'auto'
    }
  }, "Ignorar")))));
}
window.LindaSuggestionSection = LindaSuggestionSection;
Object.assign(__ds_scope, { LindaSuggestionSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LindaSuggestionSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Overlays.jsx
try { (() => {
// WhatsAppFab.jsx + TrialModal.jsx
function WhatsAppFab({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": "WhatsApp",
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 40,
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#25D366',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 12px 28px rgba(37,211,102,0.35)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1a14 14 0 0 1-4.8-2.9 5.8 5.8 0 0 1-1.9-3.3c0-.8.5-1.5.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4l.8 1.8c.1.2 0 .4-.1.6l-.3.4c-.1.1-.2.3-.1.5.2.3.7 1 1.4 1.7.9.8 1.7 1.1 2 1.3.2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.4.3.1.2 0 .8-.2 1.1Z"
  })));
}
window.WhatsAppFab = WhatsAppFab;
function TrialModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,37,64,0.50)',
      backdropFilter: 'blur(6px)',
      display: 'grid',
      placeItems: 'center',
      padding: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 36,
      width: 'min(460px, 100%)',
      boxShadow: '0 24px 60px rgba(10,37,64,0.20)'
    }
  }, step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "Empieza gratis"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, "14 d\xEDas de prueba. Sin tarjeta. Te acompa\xF1a ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), " desde el primer mensaje."), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 14
    }
  }, "Nombre del negocio", /*#__PURE__*/React.createElement("input", {
    placeholder: "Sal\xF3n Aurora",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 22
    }
  }, "Email", /*#__PURE__*/React.createElement("input", {
    placeholder: "t\xFA@ejemplo.com",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-linda-cta",
    style: {
      width: '100%'
    },
    onClick: () => setStep(1)
  }, "Crear cuenta")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--secondary-100)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/check-circle.svg",
    width: "28",
    height: "28",
    style: {
      color: 'var(--secondary-700)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, "\xA1Cuenta creada!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, "Revisa tu email \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "linda"
  }, "Luna"), " ya te est\xE1 preparando la bienvenida."), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost-pill",
    onClick: () => {
      setStep(0);
      onClose();
    }
  }, "Cerrar"))));
}
;
const inputStyle = {
  display: 'block',
  marginTop: 6,
  width: '100%',
  boxSizing: 'border-box',
  padding: '11px 14px',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  border: '1px solid rgba(10,37,64,0.14)',
  borderRadius: 12,
  background: '#fff',
  outline: 'none'
};
window.TrialModal = TrialModal;
function WhatsAppDrawer({
  open,
  onClose
}) {
  const [msgs, setMsgs] = React.useState([{
    from: 'linda',
    text: '¡Hola! Soy Luna. ¿Qué tipo de negocio tienes?'
  }]);
  const [input, setInput] = React.useState('');
  const send = () => {
    if (!input.trim()) return;
    setMsgs(m => [...m, {
      from: 'me',
      text: input
    }]);
    setInput('');
    setTimeout(() => {
      setMsgs(m => [...m, {
        from: 'linda',
        text: 'Perfecto. Puedo ayudarte a atender a tus clientes en WhatsApp, ordenar tu CRM y proponerte campañas. ¿Quieres ver una demo?'
      }]);
    }, 900);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 96,
      right: 24,
      zIndex: 50,
      width: 340,
      height: 460,
      background: '#fff',
      borderRadius: 20,
      boxShadow: '0 24px 60px rgba(10,37,64,0.18)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      background: '#25D366',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Luna \xB7 BeweOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .85
    }
  }, "Responde en segundos")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      color: '#fff',
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 14,
      overflowY: 'auto',
      background: '#F8FAFC',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
      background: m.from === 'me' ? 'var(--primary-400)' : '#fff',
      color: m.from === 'me' ? '#fff' : 'var(--ink-deep)',
      padding: '8px 12px',
      borderRadius: 14,
      maxWidth: '82%',
      fontSize: 13,
      lineHeight: 1.45,
      boxShadow: m.from === 'me' ? 'none' : '0 1px 2px rgba(10,37,64,0.08)'
    }
  }, m.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      borderTop: '1px solid rgba(10,37,64,0.06)',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Escribe un mensaje\u2026",
    style: {
      flex: 1,
      padding: '8px 12px',
      border: '1px solid rgba(10,37,64,0.08)',
      borderRadius: 999,
      fontSize: 13,
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      background: '#25D366',
      color: '#fff',
      border: 0,
      borderRadius: 999,
      padding: '8px 14px',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Enviar")));
}
;
window.WhatsAppDrawer = WhatsAppDrawer;
function Overlays() {
  const [wa, setWa] = React.useState(false);
  const [trial, setTrial] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WhatsAppFab, {
    onClick: () => setWa(o => !o)
  }), /*#__PURE__*/React.createElement(WhatsAppDrawer, {
    open: wa,
    onClose: () => setWa(false)
  }), /*#__PURE__*/React.createElement(TrialModal, {
    open: trial,
    onClose: () => setTrial(false)
  }));
}
window.Overlays = Overlays;
Object.assign(__ds_scope, { WhatsAppFab, TrialModal, WhatsAppDrawer, Overlays });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TopNav.jsx
try { (() => {
// TopNav.jsx — sticky blurred marketing nav
function TopNav({
  onPruebaClick
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.45)',
      backdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(10,37,64,0.06)' : '1px solid transparent',
      transition: 'all 250ms var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: '0 auto',
      padding: '14px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.5px',
      color: 'var(--ink-deep)',
      textDecoration: 'none'
    }
  }, "BeweOS"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 28,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, ['Funcionalidades', 'Recursos', 'Industrias'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, x, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: .6
    }
  }, "\u25BE")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Precios"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--fg-2)',
      textDecoration: 'none'
    }
  }, "Iniciar Sesi\xF3n"), /*#__PURE__*/React.createElement("button", {
    onClick: onPruebaClick,
    className: "btn-linda-nav"
  }, "Prueba Gratis"))));
}
window.TopNav = TopNav;
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppTopNav = __ds_scope.AppTopNav;

__ds_ns.CRMTable = __ds_scope.CRMTable;

__ds_ns.Dashboard = __ds_scope.Dashboard;

__ds_ns.FeatureStrip = __ds_scope.FeatureStrip;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LindaSuggestionSection = __ds_scope.LindaSuggestionSection;

__ds_ns.WhatsAppFab = __ds_scope.WhatsAppFab;

__ds_ns.TrialModal = __ds_scope.TrialModal;

__ds_ns.WhatsAppDrawer = __ds_scope.WhatsAppDrawer;

__ds_ns.Overlays = __ds_scope.Overlays;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
