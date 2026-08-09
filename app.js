const STORAGE_KEY = "comiket-offline-helper-v2";
const LEGACY_STORAGE_KEY = "comiket-offline-helper-v1";
const LANG_STORAGE_KEY = "comiket-offline-helper-ui-lang";
const ASSET_VERSION = "map19";
const DEFAULT_LANGUAGE = "zh";
const LANGUAGE_OPTIONS = [
  { id: "zh", labelKey: "language.zh" },
  { id: "ja", labelKey: "language.ja" },
];
const MAP_ZOOM_MIN = 1;
const MAP_ZOOM_MAX = 3;
const MAP_ZOOM_STEP = 0.25;

const DAY_OPTIONS = [
  { id: "day1" },
  { id: "day2" },
];
const HALLS = ["東1", "東2", "東3", "東4", "東5", "東6", "東7", "西1", "西2", "南1", "南2", "企業ブース"];
const LEGACY_HALL_ALIASES = {
  "東8": "企業ブース",
  "西3": "企業ブース",
  "西4": "企業ブース",
  "南3": "企業ブース",
  "南4": "企業ブース",
};
const STATUS_LABELS = {
  plan: "待访",
  visited: "已到摊",
  bought: "已购入",
  skipped: "跳过",
};
const PRIORITY_LABELS = {
  A: "A 必去",
  B: "B 想去",
  C: "C 有空",
};
const STATUS_FILTER_OPTIONS = ["open", "all", "bought", "visited", "skipped"];
const STATUS_OPTIONS = ["plan", "visited", "bought", "skipped"];
const PRIORITY_OPTIONS = ["A", "B", "C"];
const PRIORITY_ORDER = { A: 0, B: 1, C: 2 };
const STATUS_ORDER = { plan: 0, visited: 1, bought: 2, skipped: 3 };
const MAP_PAGES = [
  { id: "overview", label: "位置图", src: "comike-map/overview.png", alt: "東京 Big Sight 场馆位置图", halls: HALLS },
  { id: "day1-east123", page: 1, label: "1日目 東123", src: "comike-map/page-1.jpg", alt: "1日目 東123 Comike WebCatalog 场馆地图", halls: ["東1", "東2", "東3"] },
  { id: "day1-east7", page: 2, label: "1日目 東7", src: "comike-map/page-2.jpg", alt: "1日目 東7 Comike WebCatalog 场馆地图", halls: ["東7"] },
  { id: "day1-west12", page: 3, label: "1日目 西12", src: "comike-map/page-3.jpg", alt: "1日目 西12 Comike WebCatalog 场馆地图", halls: ["西1", "西2"] },
  { id: "day1-south12", page: 4, label: "1日目 南12", src: "comike-map/page-4.jpg", alt: "1日目 南12 Comike WebCatalog 场馆地图", halls: ["南1", "南2"] },
  { id: "day2-east123", page: 5, label: "2日目 東123", src: "comike-map/page-5.jpg", alt: "2日目 東123 Comike WebCatalog 场馆地图", halls: ["東1", "東2", "東3"] },
  { id: "day2-east7", page: 6, label: "2日目 東7", src: "comike-map/page-6.jpg", alt: "2日目 東7 Comike WebCatalog 场馆地图", halls: ["東7"] },
  { id: "day2-west12", page: 7, label: "2日目 西12", src: "comike-map/page-7.jpg", alt: "2日目 西12 Comike WebCatalog 场馆地图", halls: ["西1", "西2"] },
  { id: "day2-south12", page: 8, label: "2日目 南12", src: "comike-map/page-8.jpg", alt: "2日目 南12 Comike WebCatalog 场馆地图", halls: ["南1", "南2"] },
  { id: "corporate", page: 9, label: "企業ブース", src: "comike-map/page-9.jpg", alt: "企業ブース Comike WebCatalog 场馆地图", halls: ["企業ブース"] },
];

const TEXT = {
  zh: {
    "app.eyebrow": "Offline Summer Comiket Kit",
    "app.title": "夏コミ现场助手",
    "app.localSave": "本地保存",
    "language.zh": "中文",
    "language.ja": "日本語",
    "a11y.restoreDemo": "恢复示例数据",
    "a11y.dashboard": "今日概况",
    "a11y.daySwitch": "日程切换",
    "a11y.mainViews": "主要视图",
    "section.nextTarget": "下一个目标",
    "section.budget": "预算",
    "next.empty": "没有待访摊位",
    "budget.initialHint": "设定预算后会显示剩余额度。",
    "budget.cap": "总预算",
    "budget.unset": "/ 未设定",
    "budget.remaining": "剩余 {remaining}，未购预计 {pending}。",
    "budget.pending": "未购预计 {pending}。",
    "tab.route": "路线",
    "tab.map": "地图",
    "tab.notes": "备忘",
    "route.addCircle": "新增摊位",
    "route.addItem": "购买物",
    "route.dayTitle": "{day}路线",
    "route.empty": "当前筛选下没有摊位。可以切换筛选，或新增摊位。",
    "action.import": "导入",
    "action.delete": "删除",
    "action.save": "保存",
    "search.placeholder": "搜索摊位、作品、备注",
    "filter.hall": "馆区筛选",
    "filter.hall.all": "全部场馆（当日）",
    "filter.status": "状态筛选",
    "filter.status.open": "待访",
    "filter.status.all": "全部状态",
    "map.heading": "离线场馆导航",
    "map.pinModeIdle": "定位中",
    "map.pinMode": "定位：{target}",
    "map.clear": "清除",
    "map.cancel": "取消",
    "map.imageAlt": "Comike WebCatalog 场馆地图",
    "map.markerLayer": "路线定位点",
    "map.empty": "当前筛选下没有待访路线。",
    "map.zoomControls": "地图缩放",
    "map.zoomOut": "缩小地图",
    "map.zoomIn": "放大地图",
    "map.zoomReset": "恢复 100%",
    "notes.heading": "现场备忘",
    "notes.meeting": "集合地点",
    "notes.transit": "交通与入场",
    "notes.emergency": "紧急联络 / 失物",
    "notes.after": "结束后安排",
    "packing.heading": "携带物检查",
    "packing.placeholder": "新增物品",
    "packing.add": "新增物品",
    "dialog.close": "关闭",
    "form.day": "日程",
    "form.hall": "馆区",
    "form.space": "摊位号",
    "form.spacePlaceholder": "例：東A-12a",
    "form.circleName": "社团 / 作者",
    "form.circleNamePlaceholder": "社团名或作者名",
    "form.priority": "优先级",
    "form.status": "状态",
    "form.note": "备注",
    "form.circleNotePlaceholder": "排队策略、交换约定、注意事项",
    "form.itemCircle": "所属社团",
    "form.itemName": "购买物",
    "form.itemNamePlaceholder": "新刊、周边、签名等",
    "form.qty": "数量",
    "form.unitPrice": "单价",
    "form.bought": "已购入",
    "form.itemNotePlaceholder": "版本、特典、代购、交换约定",
    "circle.add": "新增社团",
    "circle.edit": "编辑社团",
    "circle.editTitle": "编辑社团",
    "circle.dragSort": "拖动排序",
    "circle.noItems": "这个社团还没有购买物。",
    "circle.noItemsSummary": "未添加购买物",
    "card.addItem": "购买物",
    "card.placePin": "定位",
    "card.visited": "到达",
    "card.bought": "全买到",
    "card.skipped": "跳过",
    "item.add": "新增购买物",
    "item.edit": "编辑购买物",
    "item.boughtTitle": "已购入",
    "item.unit": "个",
    "day.day1": "第一日",
    "day.day2": "第二日",
    "day.day1.short": "1日目",
    "day.day2.short": "2日目",
    "day.counts": "{pending}/{total} 待访",
    "status.plan": "待访",
    "status.visited": "已到摊",
    "status.bought": "已购入",
    "status.skipped": "跳过",
    "priority.A": "A 必去",
    "priority.B": "B 想去",
    "priority.C": "C 有空",
    "csv.day": "日程",
    "csv.hall": "馆区",
    "csv.space": "摊位号",
    "csv.circle": "社团/作者",
    "csv.item": "购买物",
    "csv.qty": "数量",
    "csv.unitPrice": "单价",
    "csv.subtotal": "小计",
    "csv.bought": "已购",
    "csv.priority": "优先级",
    "csv.status": "社团状态",
    "csv.circleNote": "社团备注",
    "csv.itemNote": "购买物备注",
    "csv.yes": "是",
    "csv.no": "否",
    "mapPage.overview.label": "位置图",
    "mapPage.overview.alt": "東京 Big Sight 场馆位置图",
    "mapPage.day1-east123.label": "1日目 東123",
    "mapPage.day1-east123.alt": "1日目 東123 Comike WebCatalog 场馆地图",
    "mapPage.day1-east7.label": "1日目 東7",
    "mapPage.day1-east7.alt": "1日目 東7 Comike WebCatalog 场馆地图",
    "mapPage.day1-west12.label": "1日目 西12",
    "mapPage.day1-west12.alt": "1日目 西12 Comike WebCatalog 场馆地图",
    "mapPage.day1-south12.label": "1日目 南12",
    "mapPage.day1-south12.alt": "1日目 南12 Comike WebCatalog 场馆地图",
    "mapPage.day2-east123.label": "2日目 東123",
    "mapPage.day2-east123.alt": "2日目 東123 Comike WebCatalog 场馆地图",
    "mapPage.day2-east7.label": "2日目 東7",
    "mapPage.day2-east7.alt": "2日目 東7 Comike WebCatalog 场馆地图",
    "mapPage.day2-west12.label": "2日目 西12",
    "mapPage.day2-west12.alt": "2日目 西12 Comike WebCatalog 场馆地图",
    "mapPage.day2-south12.label": "2日目 南12",
    "mapPage.day2-south12.alt": "2日目 南12 Comike WebCatalog 场馆地图",
    "mapPage.corporate.label": "企業ブース",
    "mapPage.corporate.alt": "企業ブース Comike WebCatalog 场馆地图",
    "toast.languageChanged": "已切换到中文",
    "toast.dayChanged": "已切换到{day}",
    "toast.orderUpdated": "顺序已更新",
    "toast.tapMap": "点地图标记位置",
    "toast.pinSaved": "定位已保存",
    "toast.pinCancelled": "已取消定位",
    "toast.pinCleared": "定位已清除",
    "toast.backToRoute": "已回到当日路线",
    "toast.needCircle": "先新增社团",
    "toast.circleSaved": "已保存社团",
    "toast.itemSaved": "已保存购买物",
    "toast.circleDeleted": "已删除社团",
    "toast.itemDeleted": "已删除购买物",
    "toast.itemBought": "已标记购入",
    "toast.itemUnbought": "已取消购入",
    "toast.demoRestored": "已恢复示例数据",
    "toast.packAdded": "已新增物品",
    "toast.packDeleted": "已删除物品",
    "toast.jsonExported": "JSON 已导出",
    "toast.csvExported": "CSV 已导出",
    "toast.imported": "导入完成",
    "toast.importFailed": "导入失败，请确认是本应用导出的 JSON",
    "legacy.item": "购买物",
  },
  ja: {
    "app.eyebrow": "Offline Summer Comiket Kit",
    "app.title": "夏コミ現地ヘルパー",
    "app.localSave": "端末に保存",
    "language.zh": "中文",
    "language.ja": "日本語",
    "a11y.restoreDemo": "サンプルデータを復元",
    "a11y.dashboard": "今日の概要",
    "a11y.daySwitch": "日程切替",
    "a11y.mainViews": "メイン表示",
    "section.nextTarget": "次の目標",
    "section.budget": "予算",
    "next.empty": "未訪問のスペースはありません",
    "budget.initialHint": "予算を入れると残額を表示します。",
    "budget.cap": "総予算",
    "budget.unset": "/ 未設定",
    "budget.remaining": "残り {remaining}、未購入見込み {pending}。",
    "budget.pending": "未購入見込み {pending}。",
    "tab.route": "ルート",
    "tab.map": "マップ",
    "tab.notes": "メモ",
    "route.addCircle": "サークル追加",
    "route.addItem": "購入物",
    "route.dayTitle": "{day}ルート",
    "route.empty": "この条件のサークルはありません。絞り込みを変えるか、サークルを追加してください。",
    "action.import": "読込",
    "action.delete": "削除",
    "action.save": "保存",
    "search.placeholder": "スペース、作品、メモを検索",
    "filter.hall": "ホール絞り込み",
    "filter.hall.all": "全ホール（当日）",
    "filter.status": "状態絞り込み",
    "filter.status.open": "未訪",
    "filter.status.all": "すべて",
    "map.heading": "オフライン会場マップ",
    "map.pinModeIdle": "位置指定中",
    "map.pinMode": "位置指定：{target}",
    "map.clear": "クリア",
    "map.cancel": "キャンセル",
    "map.imageAlt": "Comike WebCatalog 会場マップ",
    "map.markerLayer": "ルート位置マーカー",
    "map.empty": "この条件の未訪問ルートはありません。",
    "map.zoomControls": "マップ拡大縮小",
    "map.zoomOut": "マップを縮小",
    "map.zoomIn": "マップを拡大",
    "map.zoomReset": "100% に戻す",
    "notes.heading": "現地メモ",
    "notes.meeting": "集合場所",
    "notes.transit": "交通・入場",
    "notes.emergency": "緊急連絡 / 落とし物",
    "notes.after": "終了後の予定",
    "packing.heading": "持ち物チェック",
    "packing.placeholder": "持ち物を追加",
    "packing.add": "持ち物を追加",
    "dialog.close": "閉じる",
    "form.day": "日程",
    "form.hall": "ホール",
    "form.space": "スペース番号",
    "form.spacePlaceholder": "例：東A-12a",
    "form.circleName": "サークル / 作者",
    "form.circleNamePlaceholder": "サークル名または作者名",
    "form.priority": "優先度",
    "form.status": "状態",
    "form.note": "メモ",
    "form.circleNotePlaceholder": "並び方、交換予定、注意点",
    "form.itemCircle": "対象サークル",
    "form.itemName": "購入物",
    "form.itemNamePlaceholder": "新刊、グッズ、サインなど",
    "form.qty": "数量",
    "form.unitPrice": "単価",
    "form.bought": "購入済み",
    "form.itemNotePlaceholder": "版、特典、代理購入、交換予定",
    "circle.add": "サークル追加",
    "circle.edit": "サークル編集",
    "circle.editTitle": "サークルを編集",
    "circle.dragSort": "ドラッグして並べ替え",
    "circle.noItems": "このサークルには購入物がありません。",
    "circle.noItemsSummary": "購入物なし",
    "card.addItem": "購入物",
    "card.placePin": "位置指定",
    "card.visited": "到着",
    "card.bought": "全購入",
    "card.skipped": "スキップ",
    "item.add": "購入物追加",
    "item.edit": "購入物編集",
    "item.boughtTitle": "購入済み",
    "item.unit": "点",
    "day.day1": "1日目",
    "day.day2": "2日目",
    "day.day1.short": "1日目",
    "day.day2.short": "2日目",
    "day.counts": "{pending}/{total} 未訪",
    "status.plan": "未訪",
    "status.visited": "到着済み",
    "status.bought": "購入済み",
    "status.skipped": "スキップ",
    "priority.A": "A 必須",
    "priority.B": "B 行きたい",
    "priority.C": "C 余裕があれば",
    "csv.day": "日程",
    "csv.hall": "ホール",
    "csv.space": "スペース番号",
    "csv.circle": "サークル/作者",
    "csv.item": "購入物",
    "csv.qty": "数量",
    "csv.unitPrice": "単価",
    "csv.subtotal": "小計",
    "csv.bought": "購入済み",
    "csv.priority": "優先度",
    "csv.status": "サークル状態",
    "csv.circleNote": "サークルメモ",
    "csv.itemNote": "購入物メモ",
    "csv.yes": "はい",
    "csv.no": "いいえ",
    "mapPage.overview.label": "位置図",
    "mapPage.overview.alt": "東京ビッグサイト会場位置図",
    "mapPage.day1-east123.label": "1日目 東123",
    "mapPage.day1-east123.alt": "1日目 東123 Comike WebCatalog 会場マップ",
    "mapPage.day1-east7.label": "1日目 東7",
    "mapPage.day1-east7.alt": "1日目 東7 Comike WebCatalog 会場マップ",
    "mapPage.day1-west12.label": "1日目 西12",
    "mapPage.day1-west12.alt": "1日目 西12 Comike WebCatalog 会場マップ",
    "mapPage.day1-south12.label": "1日目 南12",
    "mapPage.day1-south12.alt": "1日目 南12 Comike WebCatalog 会場マップ",
    "mapPage.day2-east123.label": "2日目 東123",
    "mapPage.day2-east123.alt": "2日目 東123 Comike WebCatalog 会場マップ",
    "mapPage.day2-east7.label": "2日目 東7",
    "mapPage.day2-east7.alt": "2日目 東7 Comike WebCatalog 会場マップ",
    "mapPage.day2-west12.label": "2日目 西12",
    "mapPage.day2-west12.alt": "2日目 西12 Comike WebCatalog 会場マップ",
    "mapPage.day2-south12.label": "2日目 南12",
    "mapPage.day2-south12.alt": "2日目 南12 Comike WebCatalog 会場マップ",
    "mapPage.corporate.label": "企業ブース",
    "mapPage.corporate.alt": "企業ブース Comike WebCatalog 会場マップ",
    "toast.languageChanged": "日本語に切り替えました",
    "toast.dayChanged": "{day}に切り替えました",
    "toast.orderUpdated": "順番を更新しました",
    "toast.tapMap": "地図をタップして位置を指定",
    "toast.pinSaved": "位置を保存しました",
    "toast.pinCancelled": "位置指定をキャンセルしました",
    "toast.pinCleared": "位置をクリアしました",
    "toast.backToRoute": "当日のルートに戻りました",
    "toast.needCircle": "先にサークルを追加してください",
    "toast.circleSaved": "サークルを保存しました",
    "toast.itemSaved": "購入物を保存しました",
    "toast.circleDeleted": "サークルを削除しました",
    "toast.itemDeleted": "購入物を削除しました",
    "toast.itemBought": "購入済みにしました",
    "toast.itemUnbought": "未購入に戻しました",
    "toast.demoRestored": "サンプルデータを復元しました",
    "toast.packAdded": "持ち物を追加しました",
    "toast.packDeleted": "持ち物を削除しました",
    "toast.jsonExported": "JSON を書き出しました",
    "toast.csvExported": "CSV を書き出しました",
    "toast.imported": "読み込みました",
    "toast.importFailed": "読み込みに失敗しました。このアプリの JSON を確認してください",
    "legacy.item": "購入物",
  },
};

const sampleState = {
  activeDay: "day1",
  budgetCap: 30000,
  mapPage: "overview",
  mapZoom: 1,
  filters: {
    query: "",
    hall: "all",
    status: "open",
  },
  notes: {
    meeting: "国際展示場駅改札外、8:15 集合。人多时改到有明客運站旁边。",
    transit: "先确认入场区分和待机列。不要把回程 Suica 余额留到最后。",
    emergency: "手机没电时去约定集合点。贵重物品贴身放。",
    after: "买完 A 优先级后再看企业区；18:30 前回酒店整理战利品。",
  },
  packing: [
    { id: "pack-cash", text: "现金与零钱", done: false },
    { id: "pack-ticket", text: "入场券 / 腕带", done: false },
    { id: "pack-battery", text: "充电宝与线", done: false },
    { id: "pack-towel", text: "毛巾 / 手帕", done: false },
    { id: "pack-bag", text: "硬板袋 / 购物袋", done: false },
    { id: "pack-sun", text: "雨具与防晒", done: false },
  ],
  circles: [
    {
      id: "circle-1",
      day: "day1",
      hall: "東1",
      space: "東A-12a",
      name: "サンプル社团 Alpha",
      order: 10,
      priority: "A",
      status: "plan",
      note: "开场后先去，可能会排队。",
      items: [
        { id: "item-1-1", name: "新刊セット", qty: 1, unitPrice: 2500, bought: false, note: "优先" },
        { id: "item-1-2", name: "会场限定纸袋", qty: 1, unitPrice: 500, bought: false, note: "" },
      ],
    },
    {
      id: "circle-2",
      day: "day1",
      hall: "東3",
      space: "東C-34b",
      name: "サンプル社团 Beta",
      order: 20,
      priority: "A",
      status: "plan",
      note: "如果队伍太长，12 点后再回来。",
      items: [
        { id: "item-2-1", name: "画集", qty: 1, unitPrice: 2000, bought: false, note: "" },
      ],
    },
    {
      id: "circle-3",
      day: "day2",
      hall: "西1",
      space: "西う-08a",
      name: "サンプル社团 Gamma",
      order: 30,
      priority: "B",
      status: "visited",
      note: "朋友也想看，集合后一起过去。",
      items: [
        { id: "item-3-1", name: "既刊补完", qty: 2, unitPrice: 800, bought: false, note: "看库存" },
      ],
    },
    {
      id: "circle-4",
      day: "day2",
      hall: "南2",
      space: "南め-21b",
      name: "サンプル社团 Delta",
      order: 40,
      priority: "C",
      status: "bought",
      note: "已买。",
      items: [
        { id: "item-4-1", name: "亚克力挂件", qty: 1, unitPrice: 1200, bought: true, note: "" },
        { id: "item-4-2", name: "贴纸", qty: 3, unitPrice: 300, bought: true, note: "" },
      ],
    },
  ],
};

let uiLang = loadLanguage();
let state = loadState();
let toastTimer = null;
let dragState = null;
let pinTargetId = null;

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  hydrateUi();
  hydrateControls();
  render();
  registerServiceWorker();
});

function cacheElements() {
  [
    "nextTargetTitle",
    "spentAmount",
    "budgetAmount",
    "budgetFill",
    "budgetHint",
    "daySwitch",
    "languageSwitch",
    "addCircleBtn",
    "addItemBtn",
    "resetDemoBtn",
    "searchInput",
    "hallFilter",
    "statusFilter",
    "routeTitle",
    "routeList",
    "catalogMapTabs",
    "catalogMapLayer",
    "catalogMapImage",
    "catalogMapMarkers",
    "mapRouteSteps",
    "mapZoomOutBtn",
    "mapZoomResetBtn",
    "mapZoomInBtn",
    "pinModeBar",
    "pinModeLabel",
    "clearPinModeBtn",
    "cancelPinModeBtn",
    "budgetCapInput",
    "packingForm",
    "packingInput",
    "packingList",
    "meetingMemo",
    "transitMemo",
    "emergencyMemo",
    "afterMemo",
    "circleDialog",
    "circleForm",
    "dialogTitle",
    "circleId",
    "circleDay",
    "circleHall",
    "circleSpace",
    "circleName",
    "circlePriority",
    "circleStatus",
    "circleNote",
    "deleteCircleBtn",
    "closeDialogBtn",
    "itemDialog",
    "itemForm",
    "itemDialogTitle",
    "itemCircleId",
    "itemId",
    "itemCircleSelect",
    "itemName",
    "itemQty",
    "itemUnitPrice",
    "itemBought",
    "itemNote",
    "deleteItemBtn",
    "closeItemDialogBtn",
    "toast",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });

  els.languageSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (button) setLanguage(button.dataset.language);
  });

  els.addCircleBtn.addEventListener("click", () => openCircleDialog());
  els.addItemBtn.addEventListener("click", () => openItemDialog());
  els.closeDialogBtn.addEventListener("click", closeCircleDialog);
  els.closeItemDialogBtn.addEventListener("click", closeItemDialog);
  els.circleForm.addEventListener("submit", saveCircleFromForm);
  els.itemForm.addEventListener("submit", saveItemFromForm);
  els.deleteCircleBtn.addEventListener("click", deleteCircleFromDialog);
  els.deleteItemBtn.addEventListener("click", deleteItemFromDialog);
  els.resetDemoBtn.addEventListener("click", resetDemoData);
  els.mapZoomOutBtn.addEventListener("click", () => adjustMapZoom(-MAP_ZOOM_STEP));
  els.mapZoomInBtn.addEventListener("click", () => adjustMapZoom(MAP_ZOOM_STEP));
  els.mapZoomResetBtn.addEventListener("click", () => setMapZoom(1));

  els.searchInput.addEventListener("input", () => {
    state.filters.query = els.searchInput.value.trim();
    saveAndRender();
  });
  els.hallFilter.addEventListener("change", () => {
    setHallFilter(els.hallFilter.value);
  });
  els.statusFilter.addEventListener("change", () => {
    state.filters.status = els.statusFilter.value;
    saveAndRender();
  });
  els.budgetCapInput.addEventListener("input", () => {
    state.budgetCap = toMoney(els.budgetCapInput.value);
    saveAndRender();
  });
  els.catalogMapLayer.addEventListener("click", placePinFromMap);
  els.cancelPinModeBtn.addEventListener("click", cancelPinMode);
  els.clearPinModeBtn.addEventListener("click", clearPinForTarget);

  els.packingForm.addEventListener("submit", addPackingItem);
  bindMemo(els.meetingMemo, "meeting");
  bindMemo(els.transitMemo, "transit");
  bindMemo(els.emergencyMemo, "emergency");
  bindMemo(els.afterMemo, "after");

  document.addEventListener("pointerdown", startReorderDrag);
  document.addEventListener("mousedown", startMouseReorderDrag);
  document.addEventListener("click", suppressDragHandleClick, true);
  document.addEventListener("click", handleActionClick);
}

function hydrateUi() {
  document.documentElement.lang = uiLang === "ja" ? "ja" : "zh-Hans";
  document.title = t("app.title");
  renderLanguageSwitch();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
}

function renderLanguageSwitch() {
  els.languageSwitch.innerHTML = LANGUAGE_OPTIONS.map((language) => {
    const active = uiLang === language.id;
    return `
      <button class="language-button${active ? " active" : ""}" type="button" data-language="${language.id}" aria-pressed="${active}">
        ${escapeHtml(t(language.labelKey))}
      </button>
    `;
  }).join("");
}

function hydrateControls() {
  const hallOptions = HALLS.map((hall) => `<option value="${escapeAttr(hall)}">${escapeHtml(hall)}</option>`);
  els.hallFilter.innerHTML = [
    `<option value="all">${escapeHtml(t("filter.hall.all"))}</option>`,
    ...hallOptions,
  ].join("");
  els.statusFilter.innerHTML = STATUS_FILTER_OPTIONS.map((status) => (
    `<option value="${escapeAttr(status)}">${escapeHtml(getStatusFilterLabel(status))}</option>`
  )).join("");
  els.circleDay.innerHTML = DAY_OPTIONS.map((day) => (
    `<option value="${escapeAttr(day.id)}">${escapeHtml(getDayLabel(day.id))}</option>`
  )).join("");
  els.circleHall.innerHTML = hallOptions.join("");
  els.circlePriority.innerHTML = PRIORITY_OPTIONS.map((priority) => (
    `<option value="${escapeAttr(priority)}">${escapeHtml(getPriorityLabel(priority))}</option>`
  )).join("");
  els.circleStatus.innerHTML = STATUS_OPTIONS.map((status) => (
    `<option value="${escapeAttr(status)}">${escapeHtml(getStatusLabel(status))}</option>`
  )).join("");
  els.searchInput.value = state.filters.query;
  els.hallFilter.value = state.filters.hall;
  els.statusFilter.value = state.filters.status;
  els.budgetCapInput.value = state.budgetCap || "";
  els.meetingMemo.value = state.notes.meeting || "";
  els.transitMemo.value = state.notes.transit || "";
  els.emergencyMemo.value = state.notes.emergency || "";
  els.afterMemo.value = state.notes.after || "";
}

function render() {
  renderDaySwitch();
  renderDashboard();
  renderRouteList();
  renderMapNavigation();
  renderPackingList();
}

function renderDaySwitch() {
  els.daySwitch.innerHTML = DAY_OPTIONS.map((day) => {
    const active = state.activeDay === day.id;
    return `
      <button class="day-button${active ? " active" : ""}" type="button" data-action="set-day" data-day="${day.id}" aria-pressed="${active}">
        <span>${escapeHtml(getDayLabel(day.id))}</span>
        <small>${getDayCounts(day.id)}</small>
      </button>
    `;
  }).join("");
}

function renderDashboard() {
  const totals = getBudgetTotals();
  const next = getNextTarget();
  const budgetCap = state.budgetCap || 0;
  const budgetRate = budgetCap > 0 ? Math.max(0, Math.min((totals.spent / budgetCap) * 100, 100)) : 0;

  els.spentAmount.textContent = formatYen(totals.spent);
  els.budgetAmount.textContent = budgetCap > 0 ? `/ ${formatYen(budgetCap)}` : t("budget.unset");
  els.budgetFill.style.width = `${budgetRate}%`;
  els.budgetHint.textContent =
    budgetCap > 0
      ? t("budget.remaining", {
        remaining: formatYen(Math.max(budgetCap - totals.spent, 0)),
        pending: formatYen(totals.remaining),
      })
      : t("budget.pending", { pending: formatYen(totals.remaining) });

  if (next) {
    els.nextTargetTitle.textContent = `${next.space} ${next.name}`;
  } else {
    els.nextTargetTitle.textContent = t("next.empty");
  }
}

function renderRouteList() {
  els.routeTitle.textContent = t("route.dayTitle", { day: getDayLabel(state.activeDay) });
  const circles = getVisibleCircles();
  if (!circles.length) {
    els.routeList.innerHTML = `<div class="empty-state">${escapeHtml(t("route.empty"))}</div>`;
    return;
  }

  els.routeList.innerHTML = circles.map((circle, index) => renderRouteCard(circle, index)).join("");
}

function renderMapNavigation() {
  renderCatalogMap();
  const visiblePending = getVisibleCircles({ pendingOnly: true });

  els.mapRouteSteps.innerHTML = visiblePending.length
    ? visiblePending.slice(0, 10).map((circle, index) => renderMapStep(circle, index)).join("")
    : `<div class="empty-state">${escapeHtml(t("map.empty"))}</div>`;
}

function renderCatalogMap() {
  const visiblePages = getVisibleMapPages();
  let selected = getMapPageByValue(state.mapPage);
  if (!visiblePages.some((page) => page.id === selected.id)) {
    selected = getMapPageByValue(getMapPageForDay(state.activeDay, selected.id));
  }
  if (!visiblePages.some((page) => page.id === selected.id)) {
    selected = visiblePages[0] || MAP_PAGES[0];
  }
  state.mapPage = selected.id;
  els.catalogMapTabs.innerHTML = visiblePages.map((page) => `
    <button class="map-page-button${page.id === selected.id ? " active" : ""}" type="button" data-action="select-map-page" data-page="${escapeAttr(page.id)}">
      ${escapeHtml(getMapPageLabel(page))}
    </button>
  `).join("");
  els.catalogMapImage.src = selected.src;
  els.catalogMapImage.alt = getMapPageAlt(selected);
  applyMapZoom();
  renderMapPinMode();
  renderMapMarkers(selected.id);
}

function renderMapPinMode() {
  const circle = pinTargetId ? state.circles.find((item) => item.id === pinTargetId) : null;
  els.pinModeBar.hidden = !circle;
  els.catalogMapLayer.classList.toggle("is-pinning", Boolean(circle));
  if (circle) {
    els.pinModeLabel.textContent = t("map.pinMode", { target: `${circle.space} ${circle.name}` });
    els.clearPinModeBtn.hidden = !circle.mapPin;
  }
}

function renderMapMarkers(pageId) {
  const markerItems = getVisibleCircles()
    .map((circle, index) => ({ circle, index }))
    .filter(({ circle }) => isValidMapPin(circle.mapPin) && circle.mapPin.pageId === pageId);

  els.catalogMapMarkers.innerHTML = markerItems.map(({ circle, index }) => `
    <button class="map-marker${circle.id === pinTargetId ? " is-target" : ""}" type="button" data-action="map-marker-open-circle" data-id="${circle.id}" data-marker-number="${index + 1}" style="left: ${circle.mapPin.x}%; top: ${circle.mapPin.y}%;" title="${escapeAttr(circle.space)} ${escapeAttr(circle.name)}" aria-label="${escapeAttr(circle.space)} ${escapeAttr(circle.name)}">
      ${index + 1}
    </button>
  `).join("");
}

function renderMapStep(circle, index) {
  return `
    <button class="map-step" type="button" data-action="map-open-circle" data-id="${circle.id}">
      <span class="map-step-index">${index + 1}</span>
      <span class="map-step-main">
        <strong>${escapeHtml(circle.space)} ${escapeHtml(circle.name)}</strong>
        <span>${escapeHtml(getDayLabel(circle.day))} · ${escapeHtml(circle.hall)} · ${escapeHtml(getCircleItemSummary(circle))}</span>
      </span>
    </button>
  `;
}

function renderRouteCard(circle, index) {
  const isDone = circle.status === "bought" || circle.status === "skipped";
  const bodyItems = circle.items.length
    ? circle.items.map((item) => renderItemRow(circle, item)).join("")
    : `<div class="empty-subitem">${escapeHtml(t("circle.noItems"))}</div>`;

  return `
    <article class="circle-card route-card${isDone ? " is-done" : ""}" data-circle-id="${circle.id}">
      <details>
        <summary class="circle-summary">
          <span class="drag-handle" data-drag-handle title="${escapeAttr(t("circle.dragSort"))}" aria-label="${escapeAttr(t("circle.dragSort"))}">
            <svg><use href="#i-grip" /></svg>
          </span>
          <span class="route-number">${index + 1}</span>
          <span class="circle-main">
            <span class="circle-title">${escapeHtml(circle.space)} ${escapeHtml(circle.name)}</span>
            <span class="meta-line">${escapeHtml(circle.hall)}</span>
            <span class="tag-row">
              ${renderDayTag(circle.day)}
              ${renderPriorityTag(circle.priority)}
              ${renderStatusTag(circle.status)}
            </span>
          </span>
        </summary>
        <div class="circle-body">
          ${circle.note ? `<div class="meta-line circle-note">${escapeHtml(circle.note)}</div>` : ""}
          <div class="item-list">${bodyItems}</div>
        </div>
      </details>
      <div class="card-actions route-card-actions">
        <button class="mini-button" type="button" data-action="add-item" data-id="${circle.id}">${escapeHtml(t("card.addItem"))}</button>
        <button class="mini-button map-pin-button${isValidMapPin(circle.mapPin) ? " has-pin" : ""}" type="button" data-action="place-pin" data-id="${circle.id}">${escapeHtml(t("card.placePin"))}</button>
        <button class="mini-button" type="button" data-action="visited" data-id="${circle.id}">${escapeHtml(t("card.visited"))}</button>
        <button class="mini-button" type="button" data-action="bought" data-id="${circle.id}">${escapeHtml(t("card.bought"))}</button>
        <button class="mini-button" type="button" data-action="skipped" data-id="${circle.id}">${escapeHtml(t("card.skipped"))}</button>
        <button class="icon-button" type="button" title="${escapeAttr(t("circle.editTitle"))}" aria-label="${escapeAttr(t("circle.editTitle"))}" data-action="edit" data-id="${circle.id}">
          <svg><use href="#i-edit" /></svg>
        </button>
      </div>
    </article>
  `;
}

function renderItemRow(circle, item) {
  const total = getItemTotal(item);
  return `
    <article class="purchase-subitem${item.bought ? " is-bought" : ""}">
      <label class="item-check" title="${escapeAttr(t("item.boughtTitle"))}">
        <input type="checkbox" ${item.bought ? "checked" : ""} data-action="toggle-item-bought" data-circle-id="${circle.id}" data-id="${item.id}" />
      </label>
      <div class="item-main">
        <div class="item-title">${escapeHtml(item.name)} <span>× ${item.qty}</span></div>
        <div class="meta-line">${formatYen(item.unitPrice)} / ${escapeHtml(t("item.unit"))}${item.note ? ` · ${escapeHtml(item.note)}` : ""}</div>
      </div>
      <div class="item-price">${formatYen(total)}</div>
      <button class="icon-button" type="button" title="${escapeAttr(t("item.edit"))}" aria-label="${escapeAttr(t("item.edit"))}" data-action="edit-item" data-circle-id="${circle.id}" data-id="${item.id}">
        <svg><use href="#i-edit" /></svg>
      </button>
    </article>
  `;
}

function renderPackingList() {
  els.packingList.innerHTML = state.packing.map((item) => `
    <label class="packing-item${item.done ? " done" : ""}">
      <input type="checkbox" ${item.done ? "checked" : ""} data-action="toggle-pack" data-id="${item.id}" />
      <span>${escapeHtml(item.text)}</span>
      <button class="icon-button" type="button" title="${escapeAttr(t("action.delete"))}" aria-label="${escapeAttr(t("action.delete"))}" data-action="delete-pack" data-id="${item.id}">
        <svg><use href="#i-trash" /></svg>
      </button>
    </label>
  `).join("");
}

function setActiveTab(tab) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${tab}View`);
  });
  requestAnimationFrame(() => {
    document.getElementById(`${tab}View`)?.scrollIntoView({ block: "start" });
  });
}

function setLanguage(language) {
  const nextLanguage = normalizeLanguage(language);
  if (uiLang === nextLanguage) return;
  uiLang = nextLanguage;
  saveLanguage();
  hydrateUi();
  hydrateControls();
  render();
  showToast(t("toast.languageChanged"));
}

function setActiveDay(day) {
  const nextDay = normalizeDay(day);
  if (state.activeDay === nextDay) return;
  state.activeDay = nextDay;
  state.mapPage = getMapPageForDay(nextDay, state.mapPage);
  saveAndRender(t("toast.dayChanged", { day: getDayLabel(nextDay) }));
}

function getActiveDayCircles() {
  return state.circles.filter((circle) => normalizeDay(circle.day) === state.activeDay);
}

function getVisibleCircles(options = {}) {
  const query = normalizeText(state.filters.query);
  return getActiveDayCircles()
    .filter((circle) => {
      if (state.filters.hall !== "all" && circle.hall !== state.filters.hall) return false;
      if (options.pendingOnly && !isPendingStatus(circle.status)) return false;
      if (!options.statusAgnostic) {
        if (state.filters.status === "open" && !isPendingStatus(circle.status)) return false;
        if (state.filters.status !== "all" && state.filters.status !== "open" && circle.status !== state.filters.status) return false;
      }
      if (!query) return true;
      const itemText = circle.items.map((item) => `${item.name} ${item.note}`).join(" ");
      return normalizeText(`${circle.hall} ${circle.space} ${circle.name} ${circle.note} ${itemText}`).includes(query);
    })
    .sort(sortCircles);
}

function sortCircles(a, b) {
  return (
    getCircleOrder(a) - getCircleOrder(b) ||
    baseCircleSort(a, b)
  );
}

function baseCircleSort(a, b) {
  return (
    (PRIORITY_ORDER[a.priority] ?? 9) - (PRIORITY_ORDER[b.priority] ?? 9) ||
    HALLS.indexOf(a.hall) - HALLS.indexOf(b.hall) ||
    a.space.localeCompare(b.space, "ja") ||
    (STATUS_ORDER[a.status] ?? 9) - (STATUS_ORDER[b.status] ?? 9)
  );
}

function getNextTarget() {
  return getActiveDayCircles()
    .filter((circle) => isPendingStatus(circle.status))
    .sort(sortCircles)[0];
}

function getBudgetTotals() {
  return getActiveDayCircles().reduce(
    (totals, circle) => {
      circle.items.forEach((item) => {
        const total = getItemTotal(item);
        totals.planned += total;
        if (item.bought) {
          totals.spent += total;
        } else if (circle.status !== "skipped") {
          totals.remaining += total;
        }
      });
      return totals;
    },
    { planned: 0, spent: 0, remaining: 0 },
  );
}

function getCircleTotals(circle) {
  return circle.items.reduce(
    (totals, item) => {
      const total = getItemTotal(item);
      totals.planned += total;
      if (item.bought) totals.spent += total;
      else totals.remaining += total;
      return totals;
    },
    { planned: 0, spent: 0, remaining: 0 },
  );
}

function getCircleItemSummary(circle) {
  if (!circle.items.length) return t("circle.noItemsSummary");
  const pending = circle.items.filter((item) => !item.bought);
  const list = (pending.length ? pending : circle.items).slice(0, 2).map((item) => `${item.name}×${item.qty}`);
  const extra = (pending.length ? pending : circle.items).length - list.length;
  return extra > 0 ? `${list.join("、")} +${extra}` : list.join("、");
}

function getItemTotal(item) {
  return toMoney(item.unitPrice) * toQty(item.qty);
}

function getCircleOrder(circle) {
  return Number.isFinite(Number(circle.order)) ? Number(circle.order) : Number.MAX_SAFE_INTEGER;
}

function handleActionClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  const circleId = target.dataset.circleId;

  if (action === "edit") openCircleDialog(id);
  if (action === "visited") updateCircleStatus(id, "visited");
  if (action === "bought") updateCircleStatus(id, "bought");
  if (action === "skipped") updateCircleStatus(id, "skipped");
  if (action === "add-item") openItemDialog(id);
  if (action === "place-pin") startPinMode(id);
  if (action === "edit-item") openItemDialog(circleId, id);
  if (action === "map-open-circle") {
    openCircleInRoute(id);
  }
  if (action === "map-marker-open-circle") {
    openCircleInRoute(id);
  }
  if (action === "select-map-page") {
    state.mapPage = target.dataset.page || MAP_PAGES[0].id;
    saveAndRender();
  }
  if (action === "set-day") {
    setActiveDay(target.dataset.day);
  }
  if (action === "toggle-item-bought") {
    toggleItemBought(circleId, id, target.checked);
  }
  if (action === "toggle-pack") {
    togglePacking(id, target.checked);
  }
  if (action === "delete-pack") {
    deletePacking(id);
  }
}

function setHallFilter(hall, message) {
  state.filters.hall = normalizeHallFilter(hall);
  els.hallFilter.value = state.filters.hall;
  saveAndRender(message);
}

function adjustMapZoom(delta) {
  setMapZoom((state.mapZoom || 1) + delta);
}

function setMapZoom(value) {
  state.mapZoom = normalizeMapZoom(value);
  applyMapZoom();
  saveState();
}

function applyMapZoom() {
  if (!els.catalogMapLayer) return;
  state.mapZoom = normalizeMapZoom(state.mapZoom);
  const percent = Math.round(state.mapZoom * 100);
  els.catalogMapLayer.style.width = `${percent}%`;
  els.catalogMapLayer.style.minWidth = `${percent}%`;
  els.mapZoomResetBtn.textContent = `${percent}%`;
  els.mapZoomOutBtn.disabled = state.mapZoom <= MAP_ZOOM_MIN;
  els.mapZoomInBtn.disabled = state.mapZoom >= MAP_ZOOM_MAX;
}

function startPinMode(id) {
  const circle = state.circles.find((item) => item.id === id);
  if (!circle) return;
  const visiblePages = getVisibleMapPages(circle.day);
  const pinnedPage = isValidMapPin(circle.mapPin)
    ? visiblePages.find((page) => page.id === circle.mapPin.pageId)
    : null;
  state.activeDay = normalizeDay(circle.day);
  state.mapPage = (pinnedPage || getMapPageForCircle(circle)).id;
  pinTargetId = circle.id;
  saveState();
  render();
  setActiveTab("map");
  showToast(t("toast.tapMap"));
}

function placePinFromMap(event) {
  if (!pinTargetId) return;
  const circle = state.circles.find((item) => item.id === pinTargetId);
  if (!circle) {
    cancelPinMode();
    return;
  }

  const box = els.catalogMapImage.getBoundingClientRect();
  if (!box.width || !box.height) return;
  const x = clamp(((event.clientX - box.left) / box.width) * 100, 0, 100);
  const y = clamp(((event.clientY - box.top) / box.height) * 100, 0, 100);

  circle.mapPin = {
    pageId: state.mapPage,
    x: roundPinValue(x),
    y: roundPinValue(y),
  };
  pinTargetId = null;
  event.preventDefault();
  event.stopPropagation();
  saveAndRender(t("toast.pinSaved"));
}

function cancelPinMode() {
  pinTargetId = null;
  render();
  showToast(t("toast.pinCancelled"));
}

function clearPinForTarget() {
  const circle = state.circles.find((item) => item.id === pinTargetId);
  if (!circle) {
    cancelPinMode();
    return;
  }
  delete circle.mapPin;
  pinTargetId = null;
  saveAndRender(t("toast.pinCleared"));
}

function openCircleInRoute(id) {
  const circle = state.circles.find((item) => item.id === id);
  if (!circle) return;
  pinTargetId = null;
  state.activeDay = normalizeDay(circle.day);
  state.filters.hall = "all";
  state.filters.status = isPendingStatus(circle.status) ? "open" : "all";
  els.hallFilter.value = state.filters.hall;
  els.statusFilter.value = state.filters.status;
  saveAndRender(t("toast.backToRoute"));
  setActiveTab("route");
  window.setTimeout(() => scrollCircleIntoView(circle.id), 80);
}

function scrollCircleIntoView(id) {
  document.querySelector(`[data-circle-id="${escapeSelectorAttr(id)}"]`)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function suppressDragHandleClick(event) {
  if (!event.target.closest("[data-drag-handle]")) return;
  event.preventDefault();
  event.stopPropagation();
}

function startReorderDrag(event) {
  beginReorderDrag(event, event.pointerId, "pointermove", "pointerup", "pointercancel");
}

function startMouseReorderDrag(event) {
  if (dragState) return;
  beginReorderDrag(event, "mouse", "mousemove", "mouseup", null);
}

function beginReorderDrag(event, pointerId, moveEvent, upEvent, cancelEvent) {
  const handle = event.target.closest("[data-drag-handle]");
  if (!handle || event.button > 0) return;

  const item = handle.closest("[data-circle-id]");
  const container = item?.parentElement;
  if (!item || !container || container.id !== "routeList") return;

  event.preventDefault();
  event.stopPropagation();

  dragState = {
    container,
    item,
    selector: ".route-card[data-circle-id]",
    pointerId,
    moveEvent,
    upEvent,
    cancelEvent,
    moved: false,
  };

  item.classList.add("is-dragging");
  container.classList.add("is-reordering");
  if (typeof pointerId === "number" && typeof handle.setPointerCapture === "function") {
    handle.setPointerCapture(pointerId);
  }

  document.addEventListener(moveEvent, moveReorderDrag);
  document.addEventListener(upEvent, finishReorderDrag);
  if (cancelEvent) {
    document.addEventListener(cancelEvent, cancelReorderDrag);
  }
}

function moveReorderDrag(event) {
  if (!dragState || getDragEventId(event) !== dragState.pointerId) return;
  event.preventDefault();
  dragState.moved = true;
  scrollNearViewportEdge(event.clientY);

  const afterElement = getDragAfterElement(
    dragState.container,
    event.clientY,
    dragState.selector,
    dragState.item,
  );

  if (afterElement) {
    dragState.container.insertBefore(dragState.item, afterElement);
  } else {
    dragState.container.append(dragState.item);
  }
}

function scrollNearViewportEdge(clientY) {
  const edge = 76;
  if (clientY < edge) {
    window.scrollBy({ top: -18, behavior: "auto" });
  } else if (clientY > window.innerHeight - edge) {
    window.scrollBy({ top: 18, behavior: "auto" });
  }
}

function finishReorderDrag(event) {
  if (!dragState || getDragEventId(event) !== dragState.pointerId) return;
  const moved = dragState.moved;
  const container = dragState.container;
  const selector = dragState.selector;
  cleanupReorderDrag();

  if (!moved) return;
  applyVisibleCircleOrder([...container.querySelectorAll(selector)].map((item) => item.dataset.circleId));
  saveAndRender(t("toast.orderUpdated"));
}

function cancelReorderDrag(event) {
  if (dragState && getDragEventId(event) === dragState.pointerId) {
    cleanupReorderDrag();
    render();
  }
}

function cleanupReorderDrag() {
  if (!dragState) return;
  const { moveEvent, upEvent, cancelEvent } = dragState;
  dragState.item.classList.remove("is-dragging");
  dragState.container.classList.remove("is-reordering");
  document.removeEventListener(moveEvent, moveReorderDrag);
  document.removeEventListener(upEvent, finishReorderDrag);
  if (cancelEvent) {
    document.removeEventListener(cancelEvent, cancelReorderDrag);
  }
  dragState = null;
}

function getDragEventId(event) {
  return event.pointerId ?? "mouse";
}

function getDragAfterElement(container, y, selector, draggedItem) {
  const items = [...container.querySelectorAll(selector)].filter((item) => item !== draggedItem);
  return items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, element: null },
  ).element;
}

function applyVisibleCircleOrder(orderedIds) {
  const visibleIds = orderedIds.filter(Boolean);
  if (visibleIds.length < 2) return;

  const visibleSet = new Set(visibleIds);
  const slots = [...state.circles]
    .sort(sortCircles)
    .filter((circle) => visibleSet.has(circle.id))
    .map((circle) => getCircleOrder(circle));

  visibleIds.forEach((id, index) => {
    const circle = state.circles.find((item) => item.id === id);
    if (circle) {
      circle.order = slots[index] ?? (index + 1) * 10;
    }
  });
  spaceCircleOrders();
}

function openCircleDialog(id) {
  const circle = id ? state.circles.find((item) => item.id === id) : null;
  els.dialogTitle.textContent = circle ? t("circle.edit") : t("circle.add");
  els.circleId.value = circle?.id || "";
  els.circleDay.value = circle?.day || state.activeDay;
  els.circleHall.value = normalizeHall(circle?.hall);
  els.circleSpace.value = circle?.space || "";
  els.circleName.value = circle?.name || "";
  els.circlePriority.value = circle?.priority || "B";
  els.circleStatus.value = circle?.status || "plan";
  els.circleNote.value = circle?.note || "";
  els.deleteCircleBtn.hidden = !circle;
  els.circleDialog.showModal();
  setTimeout(() => els.circleSpace.focus(), 50);
}

function closeCircleDialog() {
  els.circleDialog.close();
}

function openItemDialog(circleId, itemId) {
  const selectableCircles = getActiveDayCircles().sort(sortCircles);
  if (!selectableCircles.length) {
    showToast(t("toast.needCircle"));
    return;
  }
  renderItemCircleOptions(selectableCircles);
  const circle = selectableCircles.find((item) => item.id === circleId) || selectableCircles[0];
  const purchase = itemId ? circle.items.find((item) => item.id === itemId) : null;
  els.itemDialogTitle.textContent = purchase ? t("item.edit") : t("item.add");
  els.itemCircleId.value = circle.id;
  els.itemId.value = purchase?.id || "";
  els.itemCircleSelect.value = circle.id;
  els.itemName.value = purchase?.name || "";
  els.itemQty.value = purchase?.qty || 1;
  els.itemUnitPrice.value = purchase?.unitPrice || "";
  els.itemBought.checked = Boolean(purchase?.bought);
  els.itemNote.value = purchase?.note || "";
  els.deleteItemBtn.hidden = !purchase;
  els.itemDialog.showModal();
  setTimeout(() => els.itemName.focus(), 50);
}

function closeItemDialog() {
  els.itemDialog.close();
}

function renderItemCircleOptions(circles = getActiveDayCircles().sort(sortCircles)) {
  els.itemCircleSelect.innerHTML = circles
    .map((circle) => `<option value="${escapeAttr(circle.id)}">${escapeHtml(circle.space)} ${escapeHtml(circle.name)}</option>`)
    .join("");
}

function saveCircleFromForm(event) {
  event.preventDefault();
  const id = els.circleId.value || createId("circle");
  const existing = state.circles.find((circle) => circle.id === id);
  const nextCircle = {
    id,
    day: normalizeDay(els.circleDay.value),
    hall: normalizeHall(els.circleHall.value),
    space: els.circleSpace.value.trim(),
    name: els.circleName.value.trim(),
    order: existing?.order ?? null,
    priority: els.circlePriority.value,
    status: els.circleStatus.value,
    note: els.circleNote.value.trim(),
    mapPin: normalizeMapPin(existing?.mapPin),
    items: existing?.items || [],
  };

  if (nextCircle.mapPin && !getVisibleMapPages(nextCircle.day).some((page) => page.id === nextCircle.mapPin.pageId)) {
    nextCircle.mapPin = null;
  }

  if (nextCircle.status === "bought") {
    nextCircle.items.forEach((item) => {
      item.bought = true;
    });
  }

  const index = state.circles.findIndex((circle) => circle.id === id);
  if (index >= 0) {
    state.circles.splice(index, 1, nextCircle);
  } else {
    state.circles.push(nextCircle);
  }
  closeCircleDialog();
  saveAndRender(t("toast.circleSaved"));
}

function saveItemFromForm(event) {
  event.preventDefault();
  const originalCircleId = els.itemCircleId.value;
  const targetCircleId = els.itemCircleSelect.value;
  const id = els.itemId.value || createId("item");
  const originalCircle = state.circles.find((circle) => circle.id === originalCircleId);
  const targetCircle = state.circles.find((circle) => circle.id === targetCircleId);
  if (!targetCircle) return;

  const nextItem = {
    id,
    name: els.itemName.value.trim(),
    qty: toQty(els.itemQty.value),
    unitPrice: toMoney(els.itemUnitPrice.value),
    bought: els.itemBought.checked,
    note: els.itemNote.value.trim(),
  };

  if (originalCircle) {
    originalCircle.items = originalCircle.items.filter((item) => item.id !== id);
    syncCircleStatusFromItems(originalCircle);
  }
  const existingIndex = targetCircle.items.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    targetCircle.items.splice(existingIndex, 1, nextItem);
  } else {
    targetCircle.items.push(nextItem);
  }
  syncCircleStatusFromItems(targetCircle);
  closeItemDialog();
  saveAndRender(t("toast.itemSaved"));
}

function deleteCircleFromDialog() {
  const id = els.circleId.value;
  if (!id) return;
  state.circles = state.circles.filter((circle) => circle.id !== id);
  closeCircleDialog();
  saveAndRender(t("toast.circleDeleted"));
}

function deleteItemFromDialog() {
  const circle = state.circles.find((item) => item.id === els.itemCircleId.value);
  const id = els.itemId.value;
  if (!circle || !id) return;
  circle.items = circle.items.filter((item) => item.id !== id);
  syncCircleStatusFromItems(circle);
  closeItemDialog();
  saveAndRender(t("toast.itemDeleted"));
}

function updateCircleStatus(id, status) {
  const circle = state.circles.find((item) => item.id === id);
  if (!circle) return;
  circle.status = status;
  if (status === "bought") {
    circle.items.forEach((item) => {
      item.bought = true;
    });
  }
  saveAndRender(getStatusLabel(status));
}

function toggleItemBought(circleId, itemId, bought) {
  const circle = state.circles.find((item) => item.id === circleId);
  const item = circle?.items.find((row) => row.id === itemId);
  if (!circle || !item) return;
  item.bought = bought;
  syncCircleStatusFromItems(circle);
  saveAndRender(bought ? t("toast.itemBought") : t("toast.itemUnbought"));
}

function syncCircleStatusFromItems(circle) {
  if (circle.status === "skipped") return;
  if (circle.items.length && circle.items.every((item) => item.bought)) {
    circle.status = "bought";
  } else if (circle.status === "bought") {
    circle.status = "visited";
  }
}

function resetDemoData() {
  state = cloneState(sampleState);
  saveState();
  hydrateControls();
  render();
  showToast(t("toast.demoRestored"));
}

function addPackingItem(event) {
  event.preventDefault();
  const text = els.packingInput.value.trim();
  if (!text) return;
  state.packing.push({ id: createId("pack"), text, done: false });
  els.packingInput.value = "";
  saveAndRender(t("toast.packAdded"));
}

function togglePacking(id, done) {
  const item = state.packing.find((pack) => pack.id === id);
  if (!item) return;
  item.done = done;
  saveAndRender();
}

function deletePacking(id) {
  state.packing = state.packing.filter((pack) => pack.id !== id);
  saveAndRender(t("toast.packDeleted"));
}

function bindMemo(element, key) {
  element.addEventListener("input", () => {
    state.notes[key] = element.value;
    saveState();
  });
}

function t(key, values = {}) {
  const dictionary = TEXT[uiLang] || TEXT[DEFAULT_LANGUAGE];
  const fallback = TEXT[DEFAULT_LANGUAGE] || {};
  const template = dictionary[key] ?? fallback[key] ?? key;
  return String(template).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function normalizeLanguage(language) {
  return LANGUAGE_OPTIONS.some((option) => option.id === language) ? language : DEFAULT_LANGUAGE;
}

function loadLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem(LANG_STORAGE_KEY));
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }
}

function saveLanguage() {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, uiLang);
  } catch (error) {
    // Local storage can be unavailable in some WebView privacy modes.
  }
}

function saveAndRender(message) {
  saveState();
  render();
  if (message) showToast(message);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return cloneState(sampleState);
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    return cloneState(sampleState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeState(input) {
  const incoming = input && typeof input === "object" ? input : {};
  const base = cloneState(sampleState);
  const output = {
    ...base,
    ...incoming,
    filters: { ...base.filters, ...(incoming.filters || {}) },
    notes: { ...base.notes, ...(incoming.notes || {}) },
    packing: Array.isArray(incoming.packing) ? incoming.packing : base.packing,
    circles: Array.isArray(incoming.circles) ? incoming.circles : base.circles,
  };
  output.activeDay = normalizeDay(output.activeDay);
  output.budgetCap = toMoney(output.budgetCap);
  output.mapPage = getMapPageByValue(output.mapPage).id;
  output.mapZoom = normalizeMapZoom(output.mapZoom);
  output.filters.hall = normalizeHallFilter(output.filters.hall);
  output.circles = output.circles.map(normalizeCircle);
  ensureCircleOrders(output.circles);
  output.packing = output.packing.map((item) => ({
    id: item.id || createId("pack"),
    text: String(item.text || "").trim(),
    done: Boolean(item.done),
  })).filter((item) => item.text);
  return output;
}

function getMapPageByValue(value) {
  const requested = String(value ?? "");
  return MAP_PAGES.find((page) => page.id === requested || String(page.page) === requested) || MAP_PAGES[0];
}

function getVisibleMapPages(day = state.activeDay) {
  const dayPrefix = `${normalizeDay(day)}-`;
  return MAP_PAGES.filter((page) => isCommonMapPage(page) || page.id.startsWith(dayPrefix));
}

function isCommonMapPage(page) {
  return page.id === "overview" || page.id === "corporate";
}

function getMapPageForCircle(circle) {
  const hall = normalizeHall(circle.hall);
  const visiblePages = getVisibleMapPages(circle.day);
  if (hall === "企業ブース") {
    return visiblePages.find((page) => page.id === "corporate") || visiblePages[0] || MAP_PAGES[0];
  }
  return (
    visiblePages.find((page) => !isCommonMapPage(page) && page.halls.includes(hall)) ||
    visiblePages.find((page) => page.id === "overview") ||
    visiblePages[0] ||
    MAP_PAGES[0]
  );
}

function getMapPageForDay(day, currentPage) {
  const selected = getMapPageByValue(currentPage);
  if (isCommonMapPage(selected)) return selected.id;
  const suffix = selected.id.match(/^day[12]-(.+)$/)?.[1];
  if (!suffix) return selected.id;
  return getMapPageByValue(`${normalizeDay(day)}-${suffix}`).id;
}

function normalizeDay(day) {
  return DAY_OPTIONS.some((option) => option.id === day) ? day : "day1";
}

function normalizeHall(hall) {
  const value = String(hall || "").trim();
  if (HALLS.includes(value)) return value;
  return LEGACY_HALL_ALIASES[value] || HALLS[0];
}

function normalizeHallFilter(hall) {
  const value = String(hall || "").trim();
  if (value === "all") return "all";
  if (HALLS.includes(value) || LEGACY_HALL_ALIASES[value]) return normalizeHall(value);
  return "all";
}

function getDayLabel(day) {
  const normalizedDay = normalizeDay(day);
  return t(`day.${normalizedDay}`);
}

function getDayShortLabel(day) {
  const normalizedDay = normalizeDay(day);
  return t(`day.${normalizedDay}.short`);
}

function getDayCounts(day) {
  const normalizedDay = normalizeDay(day);
  const circles = state.circles.filter((circle) => normalizeDay(circle.day) === normalizedDay);
  const pending = circles.filter((circle) => isPendingStatus(circle.status)).length;
  return t("day.counts", { pending, total: circles.length });
}

function getStatusLabel(status) {
  return t(`status.${status}`);
}

function getStatusFilterLabel(status) {
  if (status === "open") return t("filter.status.open");
  if (status === "all") return t("filter.status.all");
  return getStatusLabel(status);
}

function getPriorityLabel(priority) {
  return t(`priority.${priority}`);
}

function getMapPageLabel(page) {
  return t(`mapPage.${page.id}.label`);
}

function getMapPageAlt(page) {
  return t(`mapPage.${page.id}.alt`);
}

function normalizeCircle(circle) {
  const legacyItemName = String(circle.item || "").trim();
  const legacyPrice = toMoney(circle.spent || circle.budget);
  const legacyBought = circle.status === "bought" || toMoney(circle.spent) > 0;
  let items = Array.isArray(circle.items) ? circle.items : [];

  if (!items.length && (legacyItemName || legacyPrice > 0)) {
    items = [{
      id: createId("item"),
      name: legacyItemName || t("legacy.item"),
      qty: 1,
      unitPrice: legacyPrice,
      bought: legacyBought,
      note: "",
    }];
  }

  const normalized = {
    id: circle.id || createId("circle"),
    day: normalizeDay(circle.day),
    hall: normalizeHall(circle.hall),
    space: String(circle.space || "").trim(),
    name: String(circle.name || "").trim(),
    order: toOrder(circle.order),
    priority: ["A", "B", "C"].includes(circle.priority) ? circle.priority : "B",
    status: Object.keys(STATUS_LABELS).includes(circle.status) ? circle.status : "plan",
    note: String(circle.note || "").trim(),
    mapPin: normalizeMapPin(circle.mapPin),
    items: items.map(normalizeItem).filter((item) => item.name),
  };

  if (normalized.mapPin && !getVisibleMapPages(normalized.day).some((page) => page.id === normalized.mapPin.pageId)) {
    normalized.mapPin = null;
  }

  if (normalized.status === "bought") {
    normalized.items.forEach((item) => {
      item.bought = true;
    });
  }

  return normalized;
}

function ensureCircleOrders(circles) {
  const sorted = [...circles].sort((a, b) => {
    const orderDiff = getCircleOrder(a) - getCircleOrder(b);
    return orderDiff || baseCircleSort(a, b);
  });
  sorted.forEach((circle, index) => {
    circle.order = Number.isFinite(Number(circle.order)) ? Number(circle.order) : (index + 1) * 10;
  });
  spaceCircleOrders(circles);
}

function spaceCircleOrders(circles = state.circles) {
  [...circles].sort(sortCircles).forEach((circle, index) => {
    circle.order = (index + 1) * 10;
  });
}

function normalizeItem(item) {
  const qty = item.qty ?? item.quantity ?? 1;
  const unitPrice = item.unitPrice ?? item.price ?? item.budget ?? item.spent ?? 0;
  return {
    id: item.id || createId("item"),
    name: String(item.name || item.item || "").trim(),
    qty: toQty(qty),
    unitPrice: toMoney(unitPrice),
    bought: Boolean(item.bought),
    note: String(item.note || "").trim(),
  };
}

function normalizeMapPin(pin) {
  if (!pin || typeof pin !== "object") return null;
  const page = getMapPageByValue(pin.pageId);
  const x = Number(pin.x);
  const y = Number(pin.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return {
    pageId: page.id,
    x: roundPinValue(clamp(x, 0, 100)),
    y: roundPinValue(clamp(y, 0, 100)),
  };
}

function normalizeMapZoom(value) {
  const zoom = Number(value);
  if (!Number.isFinite(zoom)) return 1;
  return Math.round(clamp(zoom, MAP_ZOOM_MIN, MAP_ZOOM_MAX) * 100) / 100;
}

function isValidMapPin(pin) {
  return Boolean(normalizeMapPin(pin));
}

function renderPriorityTag(priority) {
  return `<span class="tag priority-${priority.toLowerCase()}">${escapeHtml(getPriorityLabel(priority))}</span>`;
}

function renderDayTag(day) {
  return `<span class="tag day-tag">${escapeHtml(getDayShortLabel(day))}</span>`;
}

function renderStatusTag(status) {
  return `<span class="tag status-${status}">${escapeHtml(getStatusLabel(status))}</span>`;
}

function isPendingStatus(status) {
  return status === "plan";
}

function toMoney(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function toQty(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.max(1, Math.round(number)) : 1;
}

function toOrder(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function roundPinValue(value) {
  return Math.round(value * 100) / 100;
}

function formatYen(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(toMoney(value));
}

function normalizeText(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function escapeSelectorAttr(value) {
  return String(value ?? "").replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId(prefix) {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
