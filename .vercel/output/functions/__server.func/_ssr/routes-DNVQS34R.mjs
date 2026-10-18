import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Droplets, i as LayoutDashboard, r as LogOut, t as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNVQS34R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CFG = {
	localBase: "http://10.48.37.137",
	preferLocalControl: true,
	dataChannel: "3519558",
	dataReadKey: "ZSPP51V4CIZQBRNP",
	F: {
		moist1: 1,
		moist2: 2,
		flow: 3,
		pump: 4
	},
	ctlChannel: "3539805",
	ctlReadKey: "9BZMEKIL2NB4RY2S",
	ctlWriteKey: "WV9MHEM64UOSF6L6",
	ctlFields: {
		pump: 1,
		valve1: 2,
		valve2: 3
	},
	users: [
		{
			name: "Apelo27",
			user: "pauline_apelo",
			hash: "46688d1aee99e23ffa1c0083af2055120722b34e55f6b5bc322ba50d4a1d546e"
		},
		{
			name: "Jessa Mae",
			user: "jm_amongo",
			hash: "c506b48894006edf3b50b4119c5e63c50248553b7011f58341db68f652129c1a"
		},
		{
			name: "Joylaine",
			user: "ellaine_dalumpines",
			hash: "467bad80d9bd33e6b2f5021e9916738c1849666c0ded4afaf08edc40b91071ef"
		},
		{
			name: "Navarro03",
			user: "lea_navarro",
			hash: "4b7bfd400a45a717ed8002b780e2daa2ddfacb81a62937fa11610bc2c4827a7d"
		},
		{
			name: "rengksjohn",
			user: "rengks_john_clavaton",
			hash: "6d7ff6932fec5262f78c0c2868c385148343242db132e1a6d5736ac95a4d45f1"
		},
		{
			name: "Panels",
			user: "panel",
			hash: "296d38c14dccd7b4bfd7b49411aef244ee59a4bbe1993609e247027ab80bb725"
		}
	],
	idleMinutes: 5,
	threshold: 40,
	pollMs: 1e4
};
async function passwordHash(user, password) {
	const data = new TextEncoder().encode(`g5:${user.toLowerCase()}:${password}`);
	const buf = await crypto.subtle.digest("SHA-256", data);
	return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
var num = (v) => v === null || v === void 0 || v === "" || Number.isNaN(Number(v)) ? null : Number(v);
function Home() {
	const [phase, setPhase] = (0, import_react.useState)("splash");
	const [page, setPage] = (0, import_react.useState)("dashboard");
	const [user, setUser] = (0, import_react.useState)("");
	const [pass, setPass] = (0, import_react.useState)("");
	const [authMsg, setAuthMsg] = (0, import_react.useState)("");
	const [authErr, setAuthErr] = (0, import_react.useState)(false);
	const [account, setAccount] = (0, import_react.useState)(null);
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setPhase("login"), 2400);
		return () => window.clearTimeout(t);
	}, []);
	function signOut() {
		setAccount(null);
		setPage("dashboard");
		setPhase("login");
		setPass("");
		setAuthMsg("");
	}
	async function onLogin(e) {
		e.preventDefault();
		const u = user.trim().toLowerCase();
		const acc = CFG.users.find((x) => x.user === u);
		const hash = await passwordHash(u, pass);
		if (!acc || acc.hash !== hash) {
			setAuthErr(true);
			setAuthMsg("Wrong username or password.");
			return;
		}
		setAuthErr(false);
		setAuthMsg("");
		setPass("");
		setAccount(acc);
		setPhase("app");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-ink",
		children: [
			phase === "splash" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col items-center justify-center gap-5 bg-canvas px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.jpg",
					alt: "Aqua-Grow",
					className: "anim-logo w-full max-w-md rounded-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "anim-up text-sm font-bold tracking-[0.2em] text-muted",
					children: "IRRIGATION AND FERTIGATION"
				})]
			}),
			phase === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-screen items-center justify-center bg-canvas px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onLogin,
					className: "anim-up w-full max-w-sm rounded-card border border-line bg-surface p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "",
							className: "mx-auto mb-5 h-28 w-auto object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-extrabold tracking-tight",
							children: "Log in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Sign in to open the irrigation dashboard."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-5 block text-sm font-semibold text-muted",
							htmlFor: "user",
							children: "Username"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "user",
							autoCapitalize: "none",
							autoComplete: "username",
							value: user,
							onChange: (e) => setUser(e.target.value),
							className: "mt-1 w-full rounded-xl border border-line bg-sidebar px-3 py-3 text-ink outline-none focus:border-leaf"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-4 block text-sm font-semibold text-muted",
							htmlFor: "pass",
							children: "Password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "pass",
							type: "password",
							autoComplete: "current-password",
							value: pass,
							onChange: (e) => setPass(e.target.value),
							className: "mt-1 w-full rounded-xl border border-line bg-sidebar px-3 py-3 text-ink outline-none focus:border-leaf"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-5 w-full rounded-xl bg-leaf px-4 py-3 font-bold text-sidebar hover:bg-leaf-2",
							children: "Log in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-3 min-h-5 text-sm ${authErr ? "text-bad" : "text-muted"}`,
							children: authMsg
						})
					]
				})
			}),
			phase === "app" && account && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
				account,
				page,
				navOpen,
				onNav: (p) => {
					setPage(p);
					setNavOpen(false);
				},
				onToggle: () => setNavOpen((v) => !v),
				onLogout: signOut
			})
		]
	});
}
function Shell({ account, page, navOpen, onNav, onToggle, onLogout }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen",
		children: [
			navOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Close menu",
				className: "fixed inset-0 z-20 bg-black/50 lg:hidden",
				onClick: onToggle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-line bg-sidebar px-3 py-4 transition-transform lg:static lg:translate-x-0 ${navOpen ? "translate-x-0" : "-translate-x-full"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "",
							className: "h-12 w-12 rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold tracking-wide",
							children: "AQUA-GROW"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-faint",
							children: "Irrigation & fertigation"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: page === "dashboard",
							onClick: () => onNav("dashboard"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { size: 18 }),
							children: "Dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: page === "researchers",
							onClick: () => onNav("researchers"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 18 }),
							children: "Researchers"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-line pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-2 text-xs text-faint",
							children: account.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onLogout,
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-ink hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 18 }), " Log out"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-3 border-b border-line bg-sidebar px-4 py-3 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onToggle,
						className: "rounded-lg border border-line px-3 py-2 text-sm font-bold",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold",
						children: "AQUA-GROW"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 px-4 py-5 lg:px-8",
					children: page === "dashboard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { account }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Researchers, {})
				})]
			})
		]
	});
}
function NavBtn({ active, onClick, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${active ? "bg-leaf text-sidebar" : "text-ink hover:bg-surface"}`,
		children: [icon, children]
	});
}
function Researchers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-extrabold tracking-tight",
				children: "Researchers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Group 5 — Roxas City School for Philippine Craftsmen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/researchers.jpg",
				alt: "The researchers",
				className: "mt-5 w-full rounded-card border border-line"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-2 sm:grid-cols-2",
				children: CFG.users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold",
						children: u.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-faint",
						children: u.user
					})]
				}, u.user))
			})
		]
	});
}
function Dashboard({ account }) {
	const canvasRef = (0, import_react.useRef)(null);
	const hist = (0, import_react.useRef)([]);
	const rangeN = (0, import_react.useRef)(60);
	const lastKey = (0, import_react.useRef)("");
	const dry = (0, import_react.useRef)([null, null]);
	const prev = (0, import_react.useRef)([false, false]);
	const holdUntil = (0, import_react.useRef)(0);
	const idle = (0, import_react.useRef)(null);
	const [range, setRange] = (0, import_react.useState)(60);
	const [b1, setB1] = (0, import_react.useState)(null);
	const [b2, setB2] = (0, import_react.useState)(null);
	const [age, setAge] = (0, import_react.useState)("");
	const [flow, setFlow] = (0, import_react.useState)(0);
	const [pump, setPump] = (0, import_react.useState)(false);
	const [link, setLink] = (0, import_react.useState)("Connecting");
	const [linkKind, setLinkKind] = (0, import_react.useState)("warn");
	const [v1, setV1] = (0, import_react.useState)(false);
	const [v2, setV2] = (0, import_react.useState)(false);
	const [ctl, setCtl] = (0, import_react.useState)("Ready");
	const [events, setEvents] = (0, import_react.useState)([]);
	const log = (0, import_react.useCallback)((msg, kind = "") => {
		const t = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB");
		setEvents((xs) => [{
			t,
			msg,
			kind
		}, ...xs].slice(0, 50));
	}, []);
	const draw = (0, import_react.useCallback)(() => {
		const c = canvasRef.current;
		if (!c) return;
		const r = c.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;
		c.width = Math.max(1, r.width * dpr);
		c.height = Math.max(1, r.height * dpr);
		const g = c.getContext("2d");
		if (!g) return;
		g.setTransform(dpr, 0, 0, dpr, 0, 0);
		const W = r.width, H = r.height, L = 34, R = 8, T = 8, B = 22;
		const pw = W - L - R, ph = H - T - B;
		const data = hist.current.slice(-rangeN.current);
		const y = (v) => T + ph * (1 - v / 100);
		g.font = "11px Manrope, sans-serif";
		g.textBaseline = "middle";
		[
			0,
			25,
			50,
			75,
			100
		].forEach((v) => {
			g.strokeStyle = "rgba(231,244,241,.12)";
			g.beginPath();
			g.moveTo(L, y(v));
			g.lineTo(W - R, y(v));
			g.stroke();
			g.fillStyle = "rgba(142,175,180,.9)";
			g.textAlign = "right";
			g.fillText(String(v), 28, y(v));
		});
		g.setLineDash([5, 5]);
		g.strokeStyle = "rgba(224,177,90,.8)";
		g.beginPath();
		g.moveTo(L, y(CFG.threshold));
		g.lineTo(W - R, y(CFG.threshold));
		g.stroke();
		g.setLineDash([]);
		if (data.length < 2) {
			g.fillStyle = "rgba(142,175,180,.9)";
			g.textAlign = "center";
			g.fillText("Waiting for data...", W / 2, H / 2);
			return;
		}
		const x = (i) => L + pw * i / (data.length - 1);
		[["b1", "#3c9a62"], ["b2", "#1f7a96"]].forEach(([k, col]) => {
			g.beginPath();
			let pen = false;
			data.forEach((d, i) => {
				const val = d[k];
				if (val == null) {
					pen = false;
					return;
				}
				pen ? g.lineTo(x(i), y(val)) : g.moveTo(x(i), y(val));
				pen = true;
			});
			g.strokeStyle = col;
			g.lineWidth = 2.5;
			g.lineJoin = "round";
			g.stroke();
		});
		const tm = (d) => new Date(d.t).toLocaleTimeString("en-GB", {
			hour: "2-digit",
			minute: "2-digit"
		});
		g.fillStyle = "rgba(142,175,180,.9)";
		g.textBaseline = "top";
		g.textAlign = "left";
		g.fillText(tm(data[0]), L, H - B + 6);
		g.textAlign = "right";
		g.fillText(tm(data[data.length - 1]), W - R, H - B + 6);
	}, []);
	const applyBed = (0, import_react.useCallback)((i, pct) => {
		if (pct == null) return;
		if (i === 0) setB1(pct);
		else setB2(pct);
		const isDry = pct < CFG.threshold;
		if (dry.current[i] !== null && dry.current[i] !== isDry) log(`Bed ${i + 1} is now ${isDry ? "dry" : "moist"} (${pct}%)`, isDry ? "d" : "i");
		dry.current[i] = isDry;
	}, [log]);
	const loadLive = (0, import_react.useCallback)(async (full) => {
		const url = `https://api.thingspeak.com/channels/${CFG.dataChannel}/feeds.json?api_key=${CFG.dataReadKey}&results=${full ? 200 : 1}`;
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error("HTTP " + res.status);
			const feeds = (await res.json()).feeds || [];
			const F = CFG.F;
			if (full) hist.current = feeds.map((f) => ({
				t: new Date(f.created_at).getTime(),
				b1: num(f["field" + F.moist1]),
				b2: num(f["field" + F.moist2])
			}));
			const f = feeds[feeds.length - 1];
			if (!f) {
				log("No data in channel yet", "w");
				return;
			}
			const mb1 = num(f["field" + F.moist1]);
			const mb2 = num(f["field" + F.moist2]);
			applyBed(0, mb1);
			applyBed(1, mb2);
			const fl = num(f["field" + F.flow]);
			const pm = num(f["field" + F.pump]);
			if (fl != null) setFlow(fl);
			if (pm != null) setPump(pm > 0);
			else if (fl != null) setPump(fl > 0);
			const secs = Math.round((Date.now() - new Date(f.created_at).getTime()) / 1e3);
			setAge(secs < 90 ? `${secs}s ago` : `${Math.round(secs / 60)} min ago`);
			const stale = secs > 120;
			setLink(stale ? "Stale" : "Live");
			setLinkKind(stale ? "warn" : "ok");
			const key = String(f.entry_id);
			if (!full && key !== lastKey.current) {
				hist.current.push({
					t: new Date(f.created_at).getTime(),
					b1: mb1,
					b2: mb2
				});
				log(`Live update: Bed 1 ${mb1}% | Bed 2 ${mb2}%`, "i");
			}
			lastKey.current = key;
			draw();
		} catch (e) {
			setLink("Offline");
			setLinkKind("bad");
			log("Could not read ThingSpeak: " + (e instanceof Error ? e.message : "error"), "d");
		}
	}, [
		applyBed,
		draw,
		log
	]);
	const syncLocal = (0, import_react.useCallback)(async () => {
		try {
			const controller = new AbortController();
			const timer = window.setTimeout(() => controller.abort(), 1800);
			let res;
			try {
				res = await fetch(`${CFG.localBase}/status`, {
					cache: "no-store",
					signal: controller.signal
				});
			} finally {
				window.clearTimeout(timer);
			}
			if (!res.ok) throw new Error("HTTP " + res.status);
			const j = await res.json();
			if (j.bed1 >= 0) applyBed(0, num(j.bed1));
			if (j.bed2 >= 0) applyBed(1, num(j.bed2));
			if (j.flow != null) setFlow(Number(j.flow));
			setPump(Number(j.pump) === 1);
			if (Date.now() >= holdUntil.current) {
				const a = Number(j.v1) === 1;
				const b = Number(j.v2) === 1;
				setV1(a);
				setV2(b);
				prev.current = [a, b];
			}
			setLink("ESP32 Local");
			setLinkKind("ok");
			setCtl(j.fault ? "FLOW FAULT — pump stopped" : "Direct local control");
			return true;
		} catch {
			return false;
		}
	}, [applyBed]);
	(0, import_react.useEffect)(() => {
		log("ThingSpeak history on. Trying ESP32 at " + CFG.localBase, "i");
		log(`${account.name} logged in`, "i");
		loadLive(true);
		syncLocal();
		const id = window.setInterval(() => {
			loadLive(false);
			if (CFG.preferLocalControl) syncLocal();
		}, CFG.pollMs);
		const onResize = () => draw();
		window.addEventListener("resize", onResize);
		return () => {
			window.clearInterval(id);
			window.removeEventListener("resize", onResize);
		};
	}, [
		account.name,
		draw,
		loadLive,
		log,
		syncLocal
	]);
	(0, import_react.useEffect)(() => {
		draw();
	}, [
		range,
		draw,
		b1,
		b2
	]);
	function bumpIdle() {
		if (idle.current) window.clearTimeout(idle.current);
	}
	async function onValve(which, next) {
		let a = which === 1 ? next : v1;
		let b = which === 2 ? next : v2;
		if (which === 1 && next) b = false;
		if (which === 2 && next) a = false;
		setV1(a);
		setV2(b);
		prev.current = [a, b];
		holdUntil.current = Date.now() + 2500;
		setCtl("Sending command…");
		const pumpFlag = a || b ? 1 : 0;
		try {
			if (CFG.preferLocalControl) try {
				const controller = new AbortController();
				const timer = window.setTimeout(() => controller.abort(), 1800);
				let res;
				try {
					res = await fetch(`${CFG.localBase}/cmd?v1=${a ? 1 : 0}&v2=${b ? 1 : 0}`, {
						cache: "no-store",
						signal: controller.signal
					});
				} finally {
					window.clearTimeout(timer);
				}
				if (!res.ok) throw new Error("HTTP " + res.status);
				const reply = await res.json();
				if (!reply.ok) throw new Error(reply.reason || "ESP32 rejected the command");
				log(!a && !b ? "Local STOP sent. Physical Manual/Fertigation switches still have priority." : `Local command sent: Valve ${a ? "1" : "2"} ${a || b ? "ON" : "OFF"}.`, "i");
				setCtl("Sent to ESP32");
				await syncLocal();
				return;
			} catch (err) {
				log("Local IP unavailable: " + (err instanceof Error ? err.message : "error"), "w");
				log("Trying ThingSpeak fallback (~15 s).", "i");
			}
			const url = `https://api.thingspeak.com/update?api_key=${CFG.ctlWriteKey}&field${CFG.ctlFields.pump}=${pumpFlag}&field${CFG.ctlFields.valve1}=${a ? 1 : 0}&field${CFG.ctlFields.valve2}=${b ? 1 : 0}`;
			if ((await (await fetch(url)).text()).trim() === "0") {
				log("ThingSpeak rate limit (1 write / 15 s). Try again in a few seconds.", "w");
				setCtl("Rate limited – retry soon");
			} else {
				log(!a && !b ? "Remote STOP sent through ThingSpeak." : `ThingSpeak command queued: Valve ${a ? "1" : "2"} OPEN. ESP32 applies it on its next poll (~15 s).`, "i");
				setCtl("Queued via ThingSpeak");
			}
		} catch (e) {
			setV1(prev.current[0]);
			setV2(prev.current[1]);
			log("Valve command failed: " + (e instanceof Error ? e.message : "error"), "d");
			setCtl("Error");
		}
	}
	const linkColor = linkKind === "ok" ? "bg-ok" : linkKind === "bad" ? "bg-bad" : "bg-warn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl",
		onPointerDown: bumpIdle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-extrabold tracking-tight",
					children: "Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: ["Signed in as ", account.name]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 text-sm font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							dot: pump ? "bg-ok" : "bg-faint",
							label: "Pump",
							value: pump ? "On" : "Off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							dot: flow > 0 ? "bg-ok" : "bg-faint",
							label: "Flow",
							value: `${flow.toFixed(1)} L/min`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							dot: linkColor,
							label: "Link",
							value: link
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-sm font-bold text-muted",
				children: "Soil moisture"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedCard, {
					title: "Planter bed 1",
					pct: b1,
					age,
					accent: "bg-leaf"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedCard, {
					title: "Planter bed 2",
					pct: b2,
					age,
					accent: "bg-drop"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold text-muted",
					children: "History"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-full border border-line bg-sidebar p-1",
					children: [
						30,
						60,
						120
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							rangeN.current = n;
							setRange(n);
							loadLive(true);
						},
						className: `rounded-full px-3 py-1 text-sm font-bold ${range === n ? "bg-surface-2 text-ink" : "text-muted"}`,
						children: n
					}, n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex gap-4 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "inline-block h-2 w-2 rounded-sm bg-leaf" }), " Bed 1"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "inline-block h-2 w-2 rounded-sm bg-drop" }), " Bed 2"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "h-64 w-full",
					"aria-label": "Moisture history chart"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-card border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold",
									children: "Valves"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-faint",
									children: ctl
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Valve 1",
								sub: "Bed 1 line",
								on: v1,
								onChange: (on) => void onValve(1, on)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Valve 2",
								sub: "Bed 2 line",
								on: v2,
								onChange: (on) => void onValve(2, on)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-faint",
								children: "One valve at a time. Manual and fertigation switches on the panel override the website. The pump follows the open valve."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						title: "Water pump",
						big: pump ? "On" : "Off",
						sub: "Pump state",
						on: pump,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						title: "Flow meter",
						big: flow.toFixed(1),
						sub: "Liters per minute",
						on: flow > 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 mb-3 text-sm font-bold text-muted",
				children: "Event log"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-64 overflow-y-auto rounded-card border border-line bg-surface px-4 py-2",
				children: [events.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-sm text-faint",
					children: "No events yet"
				}), events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 border-b border-line py-2 text-sm last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
						className: "w-16 shrink-0 text-faint",
						children: e.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: e.kind === "d" ? "text-bad" : e.kind === "w" ? "text-warn" : e.kind === "i" ? "text-leaf" : "text-muted",
						children: e.msg
					})]
				}, i))]
			})
		]
	});
}
function Pill({ dot, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `h-2 w-2 rounded-full ${dot}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-faint",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })
		]
	});
}
function BedCard({ title, pct, age, accent }) {
	const dry = pct != null && pct < CFG.threshold;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-line bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm font-semibold text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: age })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-5xl font-extrabold tracking-tight",
				children: pct == null ? "--%" : `${pct}%`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `mt-3 inline-flex rounded-full px-3 py-1 text-sm font-bold ${dry ? "bg-bad/20 text-bad" : "bg-ok/20 text-ok"}`,
				children: pct == null ? "--" : dry ? "Dry" : "Moist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 h-2 overflow-hidden rounded-full bg-sidebar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-y-0 left-0 ${accent}`,
					style: { width: `${Math.min(100, Math.max(0, pct ?? 0))}%` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 w-0.5 bg-ink/70",
					style: { left: `${CFG.threshold}%` }
				})]
			})
		]
	});
}
function Toggle({ label, sub, on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between border-b border-line py-3 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-faint",
			children: sub
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "switch",
			"aria-checked": on,
			onClick: () => onChange(!on),
			className: `relative h-8 w-14 rounded-full ${on ? "bg-leaf" : "bg-sidebar border border-line"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1 h-6 w-6 rounded-full bg-ink transition-transform ${on ? "translate-x-7" : "translate-x-1"}` })
		})]
	});
}
function Stat({ title, big, sub, on, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-card border border-line bg-surface p-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex items-center justify-between text-sm font-semibold text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [icon, title]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `mx-auto mb-2 block h-4 w-4 rounded-full ${on ? "bg-ok" : "bg-faint"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-4xl font-extrabold",
				children: big
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-faint",
				children: sub
			})
		]
	});
}
//#endregion
export { Home as component };
