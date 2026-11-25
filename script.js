// ============================================================
//  ここ（siteData）を書きかえると、サイトとゲームの中身が変わります。
// ============================================================
const siteData = {
  schoolName: "川崎市立高津高等学校",
  shortName: "高津高校",
  area: "溝の口駅から徒歩7分。多摩川の流れる川崎市高津区の市立高校",
  tagline: "2028年、創立100周年。「生徒が主役の学校」で、学ぶ・自律する・実践する。",
  // 色は "#d94f7c" のような形でも、"orange" のような色の名前でもOK
  theme: {
    brand: "#d94f7c",
    accent: "#2f86c8",
    mint: "#3f9e63",
    gold: "#f7b801",
    sand: "#f6ece6"
  },
  stats: [
    { value: "100周年", label: "2028年に創立100年" },
    { value: "徒歩7分", label: "溝の口駅から" },
    { value: "積木祭", label: "体育の部と文化の部" }
  ],
  features: [
    {
      symbol: "01",
      title: "生徒が主役の学校",
      body: "教育の柱は「学ぶ力」「自律する力」「実践する力」。行事も部活動も委員会も、生徒が中心になって動かします。"
    },
    {
      symbol: "02",
      title: "メニュー約88種類の食堂「あさひ」",
      body: "約170席の食堂には、ラーメン・うどん・丼もの・揚げたてのホットスナックまで。昼休みは生徒でいっぱいです。"
    },
    {
      symbol: "03",
      title: "25の部活動と全国2位の放送",
      body: "運動部13・文化部12。視聴覚委員会（放送）は全国高校総合文化祭で文化庁長官賞（全国2位）を受賞しました。"
    }
  ],
  learning: {
    title: "100年目に向かう、高津高校の学び。",
    body: "1人1台のタブレットPCで、調べる・まとめる・ふり返る。学んだことは探究発表会や地域の活動で、社会の中で使ってみます。",
    activities: ["1人1台タブレット", "市立高校探究発表会", "地域のゴミ拾い TCP"]
  },
  voices: [
    {
      initial: "食",
      name: "公式サイトより",
      role: "食堂「あさひ」",
      quote: "麺類も丼ものも、揚げ物も出来立て。オリジナルバーガーまであって、高津高校生の昼食を支えています。"
    },
    {
      initial: "放",
      name: "公式サイトより",
      role: "視聴覚委員会（放送）",
      quote: "体育祭のアナウンスや文化祭の公開放送も担当。アナウンサーや声優を目指す人がたくさんいます。"
    },
    {
      initial: "T",
      name: "公式サイトより",
      role: "生徒会 TCP",
      quote: "毎月2回、放課後に学校のまわりのゴミ拾い。自分たちの街を、自分たちの手でよくしよう！"
    }
  ],
  events: [
    {
      month: "5月",
      title: "積木祭 体育の部（体育祭）",
      body: "桃・赤・橙・黄・緑・青・紫の7ブロック対抗。大縄跳び、台風の目、ムカデリレー、応援合戦で盛り上がります。"
    },
    {
      month: "9月",
      title: "積木祭 文化の部（文化祭）",
      body: "クラス展示、部活動のステージ発表、公開放送。一般公開で、校舎も体育館もにぎわう一日です。"
    },
    {
      month: "10月",
      title: "2年生 修学旅行",
      body: "2年生がいちばん楽しみにしている行事。今年の行き先と思い出は、2年生のみんなに教えてもらおう。"
    }
  ],
  game: {
    title: "溝の口ルートダッシュ",
    body: "溝の口駅から高津高校まで、3つの区間を走りぬけるミニゲーム。「3つの力」と「積木」を集めて、じゃまものをかわそう。",
    // 主人公。emoji に "🐱" などを入れると、その絵文字が走ります（空なら AI ロボット）
    player: { label: "AI", emoji: "" },
    startLabel: "溝の口駅",
    goalLabel: "高津高校",
    routeItems: ["学ぶ力", "自律", "実践", "積木"],
    // 2段ジャンプでしか届かない高い所のレアアイテム
    rareItem: { label: "限定オムライス", points: 100 },
    // 取るとライフが1つ回復するアイテム
    powerUp: { label: "お守り" },
    lives: 3,
    maxJumps: 2,
    // アイテムを続けて取ると「フィーバー」：しばらく無敵＆アイテムの得点2倍
    fever: {
      combo: 5,
      seconds: 5,
      label: "積木祭フィーバー！",
      colors: ["#e86aa0", "#e5484d", "#f08c2e", "#f7c600", "#3fa45b", "#2f86c8", "#8a5cd1"]
    },
    // 区間。seconds（秒）を足した長さがコース全体。
    // じゃまものの kind は low（ジャンプでこえる）/ tall（2段ジャンプ）/ air（空を飛ぶ。ジャンプしない）
    segments: [
      {
        name: "溝の口駅前",
        seconds: 15,
        speed: 5.2,
        obstacles: [
          { label: "信号", kind: "low" },
          { label: "人ごみ", kind: "tall" }
        ]
      },
      {
        name: "通学路",
        seconds: 15,
        speed: 6,
        obstacles: [
          { label: "自転車", kind: "low" },
          { label: "カラス", kind: "air" },
          { label: "人ごみ", kind: "tall" }
        ]
      },
      {
        name: "校門前",
        seconds: 15,
        speed: 6.8,
        obstacles: [
          { label: "忘れ物", kind: "low" },
          { label: "チャイム", kind: "air" },
          { label: "宿題の山", kind: "tall" }
        ]
      }
    ],
    // ゴールしたときの評価（スコアが min 以上ならその称号）
    ranks: [
      { min: 2000, grade: "S", title: "高津マスター" },
      { min: 1400, grade: "A", title: "積木祭の主役" },
      { min: 800, grade: "B", title: "通学路の達人" },
      { min: 0, grade: "C", title: "明日もがんばろう" }
    ],
    finishTitle: "高津高校に到着！",
    // 第2ステージ（食堂タイムアタック）。enabled を true にすると、ゴールのあとに始まる
    cafeteria: {
      enabled: false,
      body: "学校に着いたら食堂「あさひ」タイムアタック！トレイをドラッグして、メニューと友だちをできるだけ集めよう。",
      timeLimit: 12,
      menuItems: ["からあげ丼", "しょうゆラーメン", "カレーライス", "かつ丼", "たこ焼", "オリジナルバーガー"],
      friendLabel: "友だち"
    }
  }
};

// ============================================================
//  ここから下は、siteData を画面に表示するしくみ
// ============================================================
const root = document.documentElement;
Object.entries(siteData.theme).forEach(([name, color]) => {
  root.style.setProperty(`--${name}`, color);
});

const textBindings = [
  ["[data-school-name]", siteData.schoolName],
  ["[data-school-name-short]", siteData.shortName],
  ["[data-school-name-short-footer]", siteData.shortName],
  ["[data-school-area]", siteData.area],
  ["[data-school-tagline]", siteData.tagline],
  ["[data-learning-title]", siteData.learning.title],
  ["[data-learning-body]", siteData.learning.body],
  ["[data-game-title]", siteData.game.title],
  ["[data-game-body]", siteData.game.body],
  ["[data-cafeteria-body]", siteData.game.cafeteria.enabled ? siteData.game.cafeteria.body : ""]
];

textBindings.forEach(([selector, value]) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
});

document.title = `${siteData.shortName} | AIと作る学校紹介サイト`;

document.querySelectorAll("[data-cafeteria-stat]").forEach((element) => {
  element.hidden = !siteData.game.cafeteria.enabled;
});
const jumpHint = siteData.game.maxJumps > 1 ? "タップ／スペースでジャンプ（空中でもう1回）" : "タップ／スペースでジャンプ";
document.querySelector("[data-game-hint]").textContent = siteData.game.cafeteria.enabled
  ? `通学路：${jumpHint}　食堂：ドラッグ・左右キーでトレイ移動`
  : jumpHint;

siteData.stats.forEach((stat, index) => {
  const value = document.querySelector(`[data-stat-value="${index}"]`);
  const label = document.querySelector(`[data-stat-label="${index}"]`);
  if (value) value.textContent = stat.value;
  if (label) label.textContent = stat.label;
});

siteData.learning.activities.forEach((activity, index) => {
  const element = document.querySelector(`[data-activity="${index}"]`);
  if (element) element.textContent = activity;
});

function renderCards() {
  const featureGrid = document.querySelector("[data-feature-grid]");
  const voiceGrid = document.querySelector("[data-voice-grid]");
  const eventList = document.querySelector("[data-event-list]");

  featureGrid.innerHTML = siteData.features
    .map(
      (feature) => `
        <article class="feature-card">
          <span class="feature-symbol">${escapeHtml(feature.symbol)}</span>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.body)}</p>
        </article>
      `
    )
    .join("");

  voiceGrid.innerHTML = siteData.voices
    .map(
      (voice) => `
        <article class="voice-card">
          <p>${escapeHtml(voice.quote)}</p>
          <div class="voice-meta">
            <span class="avatar">${escapeHtml(voice.initial)}</span>
            <div>
              <strong>${escapeHtml(voice.name)}</strong>
              <span>${escapeHtml(voice.role)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  eventList.innerHTML = siteData.events
    .map(
      (event) => `
        <article class="event-item">
          <span class="event-month">${escapeHtml(event.month)}</span>
          <div>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.body)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGameRules() {
  const game = siteData.game;
  const rules = [
    `ライフ ${game.lives}`,
    game.maxJumps > 1 ? `空中で${game.maxJumps}段ジャンプ` : "ジャンプ",
    `${game.fever.combo}コンボで${game.fever.label.replace(/！$/, "")}`,
    `${game.powerUp.label}でライフ回復`,
    `${game.rareItem.label}は高い所に`
  ];
  document.querySelector("[data-game-rules]").innerHTML = rules
    .map((rule) => `<li>${escapeHtml(rule)}</li>`)
    .join("");
}

// ============================================================
//  ミニゲーム
//  画面の速さ（60Hz・120Hz）に関係なく同じ速さで動くよう、
//  1/60秒ずつ区切って計算する。
// ============================================================
const STEP_MS = 1000 / 60;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const GROUND = 336;
const GAME_FONT = '"Zen Kaku Gothic New", "Hiragino Sans", system-ui, sans-serif';
const OBSTACLE_SIZES = {
  low: { width: 44, height: 44, lift: 0 },
  tall: { width: 40, height: 136, lift: 0 },
  air: { width: 54, height: 34, lift: 66 }
};

function initGame() {
  const canvas = document.querySelector("#gameCanvas");
  const ctx = canvas.getContext("2d");
  const startButton = document.querySelector("[data-start-game]");
  const jumpButton = document.querySelector("[data-jump]");
  const scoreElement = document.querySelector("[data-score]");
  const bestElement = document.querySelector("[data-best-score]");
  const menuCountElement = document.querySelector("[data-menu-count]");
  const friendCountElement = document.querySelector("[data-friend-count]");
  const bestKey = "high-school-visit-route-best-score-v2";
  const config = siteData.game;
  const course = buildCourse(config.segments);

  const state = {
    phase: "ready",
    best: Number(safeStorageGet(bestKey) || 0),
    course
  };
  resetState();
  bestElement.textContent = state.best;

  let gameVisible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        gameVisible = entries[0].isIntersecting;
      },
      { threshold: 0.35 }
    ).observe(canvas);
  } else {
    gameVisible = true;
  }

  function resetState() {
    Object.assign(state, {
      phase: "ready",
      step: 0,
      score: 0,
      distance: 0,
      speed: course.segments[0].speed,
      segmentIndex: 0,
      player: { x: 110, y: GROUND - 54, width: 54, height: 54, velocityY: 0, jumps: 0, grounded: true },
      lives: config.lives,
      invulnerable: 0,
      combo: 0,
      bestCombo: 0,
      fever: 0,
      obstacles: [],
      items: [],
      popups: [],
      banner: null,
      lockUntil: 0,
      nextObstacle: 90,
      nextItem: 40,
      itemCount: 0,
      powerUpSpawned: new Set(),
      stats: { items: 0, rare: 0, knocked: 0 },
      cafeteria: {
        transition: 0,
        totalTime: Math.round(config.cafeteria.timeLimit * 60),
        timeLeft: 0,
        spawnTimer: 0,
        itemsSpawned: 0,
        items: [],
        menuCount: 0,
        friendCount: 0,
        playerX: canvas.width / 2,
        targetX: canvas.width / 2
      }
    });
  }

  function start() {
    resetState();
    state.phase = "route";
    state.banner = { text: `${course.segments[0].name}からスタート！`, steps: 90 };
    startButton.textContent = "リスタート";
    jumpButton.hidden = false;
    updateScoreboard();
    // ボタンにフォーカスが残ると、次のスペースキーでリスタートしてしまうため
    canvas.focus({ preventScroll: true });
  }

  function jump() {
    if (state.phase !== "route") {
      // 結果を見る前に連打でリスタートしないよう、終了直後は少し待つ
      if (state.phase !== "cafeteria" && state.step >= state.lockUntil) start();
      return;
    }
    const player = state.player;
    if (player.grounded) {
      player.velocityY = -14.4;
      player.grounded = false;
      player.jumps = 1;
    } else if (player.jumps < config.maxJumps) {
      player.velocityY = -12.2;
      player.jumps += 1;
    }
  }

  function moveTrayTo(clientX) {
    if (state.phase !== "cafeteria") return;
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    state.cafeteria.targetX = clamp(x, 60, canvas.width - 60);
  }

  startButton.addEventListener("click", start);
  jumpButton.addEventListener("click", () => {
    jump();
    canvas.focus({ preventScroll: true });
  });
  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    canvas.focus({ preventScroll: true });
    if (state.phase === "cafeteria") {
      moveTrayTo(event.clientX);
    } else {
      jump();
    }
  });
  canvas.addEventListener("pointermove", (event) => {
    if (event.pointerType === "mouse" && event.buttons === 0) return;
    moveTrayTo(event.clientX);
  });
  window.addEventListener("keydown", (event) => {
    // ゲームが画面に見えているときだけ反応（ふだんのスペースキーのスクロールをじゃましない）
    if (!gameVisible) return;
    if (event.target instanceof Element && event.target.closest("button, a, input, textarea, select")) return;
    if (event.key === " " || event.key === "ArrowUp") {
      event.preventDefault();
      if (!event.repeat) jump();
    } else if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && state.phase === "cafeteria") {
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      state.cafeteria.targetX = clamp(state.cafeteria.targetX + direction * 46, 60, canvas.width - 60);
    }
  });

  let last = performance.now();
  let pending = 0;
  function frame(now) {
    pending += Math.min(now - last, 250);
    last = now;
    while (pending >= STEP_MS) {
      update();
      pending -= STEP_MS;
    }
    drawGame(ctx, canvas, state, config);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function update() {
    if (state.phase !== "route") state.step += 1;
    if (state.banner && --state.banner.steps <= 0) state.banner = null;
    state.popups.forEach((popup) => {
      popup.y -= 0.8;
      popup.steps -= 1;
    });
    state.popups = state.popups.filter((popup) => popup.steps > 0);

    if (state.phase === "route") updateRoute();
    else if (state.phase === "cafeteria") updateCafeteria();
  }

  function updateRoute() {
    state.step += 1;
    const segment = course.segments[state.segmentIndex];
    state.speed += (segment.speed - state.speed) * 0.02;
    state.distance += state.speed;
    addScore(state.speed / 40);

    if (state.distance >= course.finish) {
      arrive();
      return;
    }

    const nextIndex = course.segments.findIndex((s) => state.distance < s.end);
    if (nextIndex > state.segmentIndex) {
      state.segmentIndex = nextIndex;
      state.banner = { text: `区間${nextIndex + 1}：${course.segments[nextIndex].name}`, steps: 100 };
    }
    const currentSegment = course.segments[state.segmentIndex];

    if (state.invulnerable > 0) state.invulnerable -= 1;
    if (state.fever > 0) {
      state.fever -= 1;
      if (state.fever === 0) state.combo = 0;
    }

    // 主人公の動き
    const player = state.player;
    player.velocityY += 0.74;
    player.y += player.velocityY;
    if (player.y >= GROUND - player.height) {
      player.y = GROUND - player.height;
      player.velocityY = 0;
      player.grounded = true;
      player.jumps = 0;
    }

    spawnThings(currentSegment);

    // じゃまもの
    state.obstacles.forEach((obstacle) => {
      if (obstacle.knocked) {
        obstacle.x += 9;
        obstacle.y += obstacle.velocityY;
        obstacle.velocityY += 0.6;
        obstacle.spin += 0.3;
        return;
      }
      obstacle.x -= state.speed;
      if (!obstacle.hit && intersects(player, obstacle, 7)) hitObstacle(obstacle);
    });
    state.obstacles = state.obstacles.filter((o) => o.x > -100 && o.x < canvas.width + 200 && o.y < 600);
    // ここでゲームオーバーになったら、このフレームのアイテム取得はしない
    if (state.phase !== "route") return;

    // アイテム
    state.items.forEach((item) => {
      item.x -= state.speed;
      if (!item.taken && circleIntersectsRect(item, player)) takeItem(item);
      if (!item.taken && !item.missed && item.type === "normal" && item.x < player.x - 30) {
        item.missed = true;
        if (state.fever === 0) state.combo = 0;
      }
    });
    state.items = state.items.filter((item) => item.x > -60 && !item.taken);
  }

  function spawnThings(segment) {
    const progress = state.distance / course.finish;
    const segmentProgress = (state.distance - segment.start) / (segment.end - segment.start);

    state.nextObstacle -= 1;
    // obstacles が空なら、その区間はじゃまものなし（ボーナス区間）
    const obstacleList = (segment.obstacles || []).map((o) => (typeof o === "string" ? { label: o, kind: "low" } : o));
    if (state.nextObstacle <= 0 && progress < 0.95 && obstacleList.length > 0) {
      const definition = obstacleList[Math.floor(Math.random() * obstacleList.length)];
      const kind = OBSTACLE_SIZES[definition.kind] ? definition.kind : "low";
      const size = OBSTACLE_SIZES[kind];
      state.obstacles.push({
        x: canvas.width + 40,
        y: GROUND - size.lift - size.height,
        width: size.width,
        height: size.height,
        kind,
        label: definition.label,
        hit: false,
        knocked: false,
        velocityY: 0,
        spin: 0
      });
      state.nextObstacle = 72 + Math.random() * 40 + (kind === "tall" ? 12 : 0);
    }

    state.nextItem -= 1;
    if (state.nextItem <= 0 && progress < 0.96) {
      state.itemCount += 1;
      const isRare = state.itemCount % 9 === 0;
      state.items.push({
        x: canvas.width + 30,
        y: isRare ? (config.maxJumps >= 2 ? GROUND - 228 : GROUND - 175) : GROUND - 40 - Math.random() * 130,
        radius: isRare ? 20 : 16,
        type: isRare ? "rare" : "normal",
        label: isRare ? config.rareItem.label : pick(config.routeItems, state.itemCount - 1) || "",
        taken: false,
        missed: false
      });
      state.nextItem = 42 + Math.random() * 22;
    }

    if (segmentProgress > 0.5 && !state.powerUpSpawned.has(state.segmentIndex)) {
      state.powerUpSpawned.add(state.segmentIndex);
      state.items.push({
        x: canvas.width + 30,
        y: GROUND - 150,
        radius: 18,
        type: "power",
        label: config.powerUp.label,
        taken: false,
        missed: false
      });
    }
  }

  function takeItem(item) {
    item.taken = true;
    const multiplier = state.fever > 0 ? 2 : 1;
    if (item.type === "power") {
      if (state.lives < config.lives) {
        state.lives += 1;
        popup(item, "ライフ +1");
      } else {
        const bonus = 50 * (state.fever > 0 ? 2 : 1);
        addScore(bonus);
        popup(item, `+${bonus}`);
      }
      return;
    }
    const points = (item.type === "rare" ? config.rareItem.points : 20) * multiplier;
    addScore(points);
    if (item.type === "rare") state.stats.rare += 1;
    state.stats.items += 1;
    state.combo += 1;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    popup(item, `+${points}`);
    if (state.fever === 0 && state.combo >= config.fever.combo) {
      state.fever = Math.round(config.fever.seconds * 60);
      state.banner = { text: config.fever.label, steps: 90 };
    }
  }

  function hitObstacle(obstacle) {
    if (state.fever > 0) {
      obstacle.knocked = true;
      obstacle.velocityY = -9;
      state.stats.knocked += 1;
      addScore(30);
      popup(obstacle, "+30");
      return;
    }
    if (state.invulnerable > 0) return;
    obstacle.hit = true;
    state.lives -= 1;
    state.combo = 0;
    state.invulnerable = 72;
    popup(state.player, "いたっ！");
    if (state.lives <= 0) gameOver();
  }

  function popup(target, text) {
    state.popups.push({ x: target.x + (target.width || 0) / 2, y: target.y, text, steps: 45 });
  }

  function addScore(points) {
    state.score += points;
    updateScoreboard();
  }

  function updateScoreboard() {
    scoreElement.textContent = Math.floor(state.score);
    menuCountElement.textContent = state.cafeteria.menuCount;
    friendCountElement.textContent = state.cafeteria.friendCount;
  }

  function saveBest() {
    const finalScore = Math.floor(state.score);
    if (finalScore > state.best) {
      state.best = finalScore;
      safeStorageSet(bestKey, String(finalScore));
      bestElement.textContent = finalScore;
    }
  }

  function finishRun() {
    state.fever = 0;
    state.banner = null;
    state.lockUntil = state.step + 45;
  }

  function gameOver() {
    finishRun();
    state.phase = "over";
    jumpButton.hidden = true;
    saveBest();
  }

  function arrive() {
    finishRun();
    addScore(200 + state.lives * 100);
    if (config.cafeteria.enabled) {
      const cafe = state.cafeteria;
      state.phase = "cafeteria";
      cafe.transition = 60;
      cafe.timeLeft = cafe.totalTime;
      cafe.spawnTimer = 30;
      jumpButton.hidden = true;
      return;
    }
    state.phase = "results";
    jumpButton.hidden = true;
    saveBest();
  }

  function updateCafeteria() {
    const cafe = state.cafeteria;
    if (cafe.transition > 0) {
      cafe.transition -= 1;
      return;
    }
    cafe.timeLeft -= 1;
    if (cafe.timeLeft <= 0) {
      state.phase = "results";
      saveBest();
      return;
    }
    cafe.playerX += (cafe.targetX - cafe.playerX) * 0.22;

    cafe.spawnTimer -= 1;
    if (cafe.spawnTimer <= 0) {
      const isFriend = Math.random() < 0.4;
      cafe.items.push({
        x: 70 + Math.random() * (canvas.width - 140),
        y: -20,
        velocityY: 2.8 + Math.random() * 1.6,
        type: isFriend ? "friend" : "menu",
        label: isFriend ? config.cafeteria.friendLabel : pick(config.cafeteria.menuItems, cafe.itemsSpawned) || "",
        caught: false
      });
      cafe.itemsSpawned += 1;
      cafe.spawnTimer = 32 + Math.random() * 18;
    }

    const trayTop = GROUND - 40;
    cafe.items.forEach((item) => {
      item.y += item.velocityY;
      if (!item.caught && item.y >= trayTop && item.y <= GROUND && Math.abs(item.x - cafe.playerX) < 46) {
        item.caught = true;
        if (item.type === "friend") {
          cafe.friendCount += 1;
          addScore(60);
        } else {
          cafe.menuCount += 1;
          addScore(40);
        }
      }
    });
    cafe.items = cafe.items.filter((item) => !item.caught && item.y < GROUND + 40);
    updateScoreboard();
  }
}

function buildCourse(segments) {
  let start = 0;
  const list = segments && segments.length ? segments : [{ name: "通学路", seconds: 30, speed: 6, obstacles: [] }];
  const built = list.map((rawSegment) => {
    const segment = { ...rawSegment, seconds: Math.max(3, Number(rawSegment.seconds) || 15), speed: clamp(Number(rawSegment.speed) || 6, 2, 12) };
    const length = segment.seconds * 60 * segment.speed;
    const result = { ...segment, start, end: start + length };
    start += length;
    return result;
  });
  return { segments: built, finish: start };
}

function rankFor(score) {
  // ranks がどんな順番で書かれていても、高い順に見ていく
  const ranks = [...siteData.game.ranks].sort((a, b) => b.min - a.min);
  return ranks.find((rank) => score >= rank.min) || ranks[ranks.length - 1] || { grade: "-", title: "" };
}

// ------------------------------------------------------------
//  ゲームの絵をかく
// ------------------------------------------------------------
function drawGame(ctx, canvas, state, config) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (state.phase === "cafeteria" || (state.phase === "results" && config.cafeteria.enabled)) {
    drawSky(ctx, canvas, state, config);
    drawCafeteria(ctx, canvas, state, config);
  } else {
    drawSky(ctx, canvas, state, config);
    drawScenery(ctx, canvas, state);
    drawRoad(ctx, canvas, state);
    state.items.forEach((item) => drawItem(ctx, item, state.step));
    state.obstacles.forEach((obstacle) => drawObstacle(ctx, obstacle));
    drawPlayer(ctx, state, config);
    drawHud(ctx, canvas, state, config);
  }

  state.popups.forEach((popup) => {
    ctx.globalAlpha = Math.min(1, popup.steps / 20);
    label(ctx, popup.text, popup.x, popup.y - 10, `900 16px ${GAME_FONT}`, "#141a2b", "center");
    ctx.globalAlpha = 1;
  });

  if (state.banner) drawBanner(ctx, canvas, state.banner.text, state.fever > 0);

  if (state.phase === "ready") drawReady(ctx, canvas, config);
  if (state.phase === "over") drawPanel(ctx, canvas, "GAME OVER", [`スコア ${Math.floor(state.score)}`, "タップでもう一度"]);
  if (state.phase === "results") drawResults(ctx, canvas, state, config);
}

function drawSky(ctx, canvas, state, config) {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, "#cfeeff");
  sky.addColorStop(0.6, "#f4fbff");
  sky.addColorStop(1, "#fff3dc");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (state.fever > 0) {
    const colors = feverColors(config);
    // 点滅は1秒に2.5回まで（光の点滅が苦手な人への配慮）。動きを減らす設定なら色を固定
    const index = REDUCED_MOTION ? 0 : Math.floor(state.step / 24) % colors.length;
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = colors[index];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    for (let i = 0; i < 18; i += 1) {
      const x = (i * 97 + state.step * 3) % canvas.width;
      const y = (i * 53 + state.step * 2) % (GROUND - 60);
      ctx.fillStyle = colors[i % colors.length];
      roundRect(ctx, x, y, 12, 12, 3);
      ctx.fill();
    }
  }
}

function drawScenery(ctx, canvas, state) {
  const palette = ["--accent", "--mint", "--brand"].map((name) => cssVar(name));
  const color = palette[state.segmentIndex % palette.length];

  // 雲（左に流れて、右からまた出てくる）
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  for (let i = 0; i < 5; i += 1) {
    const x = wrap(i * 230 - state.step * 0.6, canvas.width + 160) - 120;
    roundRect(ctx, x, 86 + (i % 3) * 22, 110, 30, 15);
    ctx.fill();
  }

  // 遠くの街なみ（区間ごとに色が変わる）
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = color;
  for (let i = 0; i < 12; i += 1) {
    const width = 60 + ((i * 37) % 50);
    const height = 50 + ((i * 53) % 90);
    const x = wrap(i * 90 - state.distance * 0.25, canvas.width + 200) - 100;
    roundRect(ctx, x, GROUND - height, width, height, 6);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // 区間の看板
  state.course.segments.forEach((segment, index) => {
    const x = 520 + (segment.start - state.distance);
    if (x < -120 || x > canvas.width + 20) return;
    ctx.fillStyle = "#6b4f3a";
    ctx.fillRect(x + 4, GROUND - 70, 6, 70);
    ctx.fillStyle = "#fff";
    roundRect(ctx, x - 40, GROUND - 104, 96, 38, 8);
    ctx.fill();
    ctx.strokeStyle = palette[index % palette.length];
    ctx.lineWidth = 3;
    ctx.stroke();
    label(ctx, segment.name, x + 8, GROUND - 80, `900 13px ${GAME_FONT}`, "#141a2b", "center");
  });
}

function drawRoad(ctx, canvas, state) {
  ctx.fillStyle = cssVar("--sand");
  ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);
  ctx.fillStyle = "rgba(20, 26, 43, 0.14)";
  ctx.fillRect(0, GROUND, canvas.width, 3);
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  for (let x = 0; x < canvas.width + 120; x += 90) {
    roundRect(ctx, wrap(x - state.distance, canvas.width + 120) - 60, GROUND + 38, 44, 6, 3);
    ctx.fill();
  }
}

function drawItem(ctx, item, step) {
  const bob = Math.sin(step / 10 + item.x / 50) * 3;
  const y = item.y + bob;
  if (item.type === "power") {
    // お守り
    ctx.fillStyle = "#e5484d";
    roundRect(ctx, item.x - 14, y - 18, 28, 36, 6);
    ctx.fill();
    ctx.fillStyle = "#f7c600";
    ctx.fillRect(item.x - 14, y - 6, 28, 4);
    ctx.strokeStyle = "#f7c600";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(item.x, y - 22, 5, 0, Math.PI * 2);
    ctx.stroke();
  } else if (item.type === "rare") {
    ctx.fillStyle = cssVar("--brand");
    star(ctx, item.x, y, item.radius + 4, item.radius * 0.5, 5);
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
  } else {
    ctx.fillStyle = cssVar("--gold");
    ctx.beginPath();
    ctx.arc(item.x, y, item.radius, 0, Math.PI * 2);
    ctx.fill();
    label(ctx, "+", item.x, y + 1, `900 14px ${GAME_FONT}`, "#141a2b", "center");
  }
  label(ctx, item.label, item.x, y - item.radius - 10, `900 13px ${GAME_FONT}`, "#141a2b", "center");
}

function drawObstacle(ctx, obstacle) {
  const cx = obstacle.x + obstacle.width / 2;
  const cy = obstacle.y + obstacle.height / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(obstacle.spin);
  ctx.globalAlpha = obstacle.hit ? 0.45 : 1;
  ctx.fillStyle = obstacle.kind === "air" ? "#5b5f73" : cssVar("--accent");

  if (obstacle.kind === "air") {
    ctx.beginPath();
    ctx.ellipse(0, 0, obstacle.width / 2, obstacle.height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    const flap = Math.sin(obstacle.x / 8) * 8;
    ctx.beginPath();
    ctx.moveTo(-6, -6);
    ctx.lineTo(-22, -20 + flap);
    ctx.lineTo(6, -8);
    ctx.fill();
  } else {
    roundRect(ctx, -obstacle.width / 2, -obstacle.height / 2, obstacle.width, obstacle.height, 12);
    ctx.fill();
  }

  // 顔
  const faceY = obstacle.kind === "tall" ? -obstacle.height / 2 + 22 : -2;
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(-7, faceY, 5, 0, Math.PI * 2);
  ctx.arc(7, faceY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#141a2b";
  ctx.beginPath();
  ctx.arc(-7, faceY + 1, 2.4, 0, Math.PI * 2);
  ctx.arc(7, faceY + 1, 2.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (!obstacle.knocked) {
    label(ctx, obstacle.label, cx, obstacle.y - 10, `900 13px ${GAME_FONT}`, "#141a2b", "center");
  }
}

function drawPlayer(ctx, state, config) {
  const player = state.player;
  const { x, y, width, height } = player;
  if (state.invulnerable > 0 && Math.floor(state.invulnerable / 5) % 2 === 0) return;

  ctx.fillStyle = "rgba(20, 26, 43, 0.16)";
  ctx.beginPath();
  ctx.ellipse(x + width / 2, GROUND + 4, 26, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  if (state.fever > 0) {
    const colors = feverColors(config);
    ctx.fillStyle = colors[REDUCED_MOTION ? 0 : Math.floor(state.step / 24) % colors.length];
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.arc(x + width / 2, y + height / 2, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  if (config.player.emoji) {
    label(ctx, config.player.emoji, x + width / 2, y + height / 2 + 2, `48px ${GAME_FONT}`, "#141a2b", "center");
  } else {
    ctx.fillStyle = cssVar("--brand");
    roundRect(ctx, x, y, width, height, 14);
    ctx.fill();
    ctx.fillStyle = "#fff";
    roundRect(ctx, x + 10, y + 12, 34, 20, 8);
    ctx.fill();
    ctx.fillStyle = "#141a2b";
    ctx.beginPath();
    ctx.arc(x + 21, y + 22, 3, 0, Math.PI * 2);
    ctx.arc(x + 34, y + 22, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // 主人公の名前
  if (config.player.label) {
    ctx.font = `900 12px ${GAME_FONT}`;
    const textWidth = ctx.measureText(config.player.label).width + 16;
    ctx.fillStyle = "#141a2b";
    roundRect(ctx, x + width / 2 - textWidth / 2, y - 26, textWidth, 20, 10);
    ctx.fill();
    label(ctx, config.player.label, x + width / 2, y - 16, `900 12px ${GAME_FONT}`, "#fff", "center");
  }
}

function drawHud(ctx, canvas, state, config) {
  // ライフ
  const heartGap = Math.min(28, 96 / Math.max(1, config.lives));
  for (let i = 0; i < config.lives; i += 1) {
    ctx.fillStyle = i < state.lives ? "#e5484d" : "rgba(20, 26, 43, 0.15)";
    heart(ctx, 30 + i * heartGap, 30, Math.min(11, heartGap * 0.42));
    ctx.fill();
  }

  // 進み具合と区間
  const barX = 150;
  const barWidth = canvas.width - 330;
  const progress = clamp(state.distance / state.course.finish, 0, 1);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  roundRect(ctx, barX - 12, 12, barWidth + 24, 48, 24);
  ctx.fill();
  ctx.fillStyle = "rgba(20, 26, 43, 0.12)";
  roundRect(ctx, barX, 22, barWidth, 8, 4);
  ctx.fill();
  ctx.fillStyle = cssVar("--brand");
  roundRect(ctx, barX, 22, Math.max(8, barWidth * progress), 8, 4);
  ctx.fill();
  state.course.segments.forEach((segment, index) => {
    const x = barX + (segment.start / state.course.finish) * barWidth;
    const color = index === state.segmentIndex ? "#141a2b" : "#7a8192";
    label(ctx, segment.name, x + 2, 48, `900 13px ${GAME_FONT}`, color, "left");
  });
  label(ctx, `🏁 ${siteData.game.goalLabel}`, barX + barWidth, 48, `900 13px ${GAME_FONT}`, "#141a2b", "right");

  // コンボ・フィーバー
  const rightX = canvas.width - 24;
  if (state.fever > 0) {
    label(ctx, "FEVER", rightX, 28, `900 18px ${GAME_FONT}`, cssVar("--brand"), "right");
    const ratio = state.fever / (config.fever.seconds * 60);
    ctx.fillStyle = "rgba(20, 26, 43, 0.12)";
    roundRect(ctx, rightX - 110, 40, 110, 8, 4);
    ctx.fill();
    ctx.fillStyle = cssVar("--brand");
    roundRect(ctx, rightX - 110, 40, 110 * ratio, 8, 4);
    ctx.fill();
  } else {
    label(ctx, `COMBO ${state.combo}`, rightX, 28, `900 18px ${GAME_FONT}`, "#141a2b", "right");
    label(ctx, `あと${Math.max(0, config.fever.combo - state.combo)}でフィーバー`, rightX, 48, `700 12px ${GAME_FONT}`, "#5d6475", "right");
  }
}

function drawBanner(ctx, canvas, text, fever) {
  ctx.font = `900 22px ${GAME_FONT}`;
  const width = ctx.measureText(text).width + 48;
  ctx.fillStyle = fever ? cssVar("--brand") : "#141a2b";
  roundRect(ctx, canvas.width / 2 - width / 2, 84, width, 44, 22);
  ctx.fill();
  label(ctx, text, canvas.width / 2, 107, `900 22px ${GAME_FONT}`, "#fff", "center");
}

function drawReady(ctx, canvas, config) {
  drawPanel(ctx, canvas, "START", [
    `${config.startLabel} → ${config.goalLabel}`,
    config.maxJumps > 1 ? "タップ／スペースでジャンプ（空中でもう1回）" : "タップ／スペースでジャンプ"
  ]);
}

function drawResults(ctx, canvas, state, config) {
  const rank = rankFor(Math.floor(state.score));
  const lines = [`スコア ${Math.floor(state.score)}　最大コンボ ${state.bestCombo}`];
  if (config.cafeteria.enabled) {
    lines.push(`メニュー ${state.cafeteria.menuCount}種類　友だち ${state.cafeteria.friendCount}人`);
  } else {
    lines.push(`アイテム ${state.stats.items}個　${config.rareItem.label} ${state.stats.rare}個`);
  }
  lines.push("タップでもう一度");

  const width = 460;
  const height = 230;
  const x = canvas.width / 2 - width / 2;
  const y = canvas.height / 2 - height / 2 + 10;
  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  roundRect(ctx, x, y, width, height, 24);
  ctx.fill();
  ctx.fillStyle = cssVar("--brand");
  ctx.beginPath();
  ctx.arc(x + 76, y + 92, 48, 0, Math.PI * 2);
  ctx.fill();
  label(ctx, rank.grade, x + 76, y + 94, `900 52px ${GAME_FONT}`, "#fff", "center");
  label(ctx, config.finishTitle, x + 146, y + 58, `900 22px ${GAME_FONT}`, "#141a2b", "left");
  label(ctx, `称号「${rank.title}」`, x + 146, y + 94, `900 18px ${GAME_FONT}`, cssVar("--brand"), "left");
  lines.forEach((line, index) => {
    const isLast = index === lines.length - 1;
    label(
      ctx,
      line,
      isLast ? canvas.width / 2 : x + 146,
      y + 130 + index * 30 + (isLast ? 12 : 0),
      `${isLast ? 700 : 900} ${isLast ? 12 : 14}px ${GAME_FONT}`,
      isLast ? "#5d6475" : "#141a2b",
      isLast ? "center" : "left"
    );
  });
}

function drawPanel(ctx, canvas, title, lines) {
  const width = 420;
  const height = 96 + lines.length * 26;
  const x = canvas.width / 2 - width / 2;
  const y = canvas.height / 2 - height / 2 + 20;
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  roundRect(ctx, x, y, width, height, 24);
  ctx.fill();
  label(ctx, title, canvas.width / 2, y + 46, `900 32px ${GAME_FONT}`, "#141a2b", "center");
  lines.forEach((line, index) => {
    label(ctx, line, canvas.width / 2, y + 84 + index * 26, `700 14px ${GAME_FONT}`, "#5d6475", "center");
  });
}

function drawCafeteria(ctx, canvas, state, config) {
  const cafe = state.cafeteria;
  ctx.fillStyle = "rgba(247, 184, 1, 0.16)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = cssVar("--sand");
  ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);

  cafe.items.forEach((item) => {
    ctx.fillStyle = item.type === "friend" ? cssVar("--mint") : cssVar("--gold");
    ctx.beginPath();
    ctx.arc(item.x, item.y, 20, 0, Math.PI * 2);
    ctx.fill();
    label(ctx, item.type === "friend" ? "友" : "食", item.x, item.y + 1, `900 13px ${GAME_FONT}`, "#141a2b", "center");
    label(ctx, item.label, item.x, item.y - 28, `900 11px ${GAME_FONT}`, "#141a2b", "center");
  });

  ctx.fillStyle = cssVar("--brand");
  roundRect(ctx, cafe.playerX - 34, GROUND - 40, 68, 40, 12);
  ctx.fill();
  label(ctx, "TRAY", cafe.playerX, GROUND - 19, `900 12px ${GAME_FONT}`, "#fff", "center");

  const barX = 58;
  const barWidth = canvas.width - 116;
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  roundRect(ctx, barX, 24, barWidth, 20, 10);
  ctx.fill();
  ctx.fillStyle = cssVar("--accent");
  roundRect(ctx, barX, 24, barWidth * clamp(cafe.timeLeft / cafe.totalTime, 0, 1), 20, 10);
  ctx.fill();
  label(ctx, `のこり ${Math.ceil(Math.max(cafe.timeLeft, 0) / 60)}秒`, canvas.width / 2, 35, `900 12px ${GAME_FONT}`, "#141a2b", "center");

  if (cafe.transition > 0) drawBanner(ctx, canvas, "食堂に到着！", false);
}

// ------------------------------------------------------------
//  小さな道具
// ------------------------------------------------------------
function feverColors(config) {
  const colors = config.fever.colors;
  return colors && colors.length ? colors : [cssVar("--brand"), cssVar("--gold"), cssVar("--accent")];
}

function label(ctx, text, x, y, font, color, align) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

const cssVarCache = new Map();
function cssVar(name) {
  if (!cssVarCache.has(name)) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    cssVarCache.set(name, value || "#888");
  }
  return cssVarCache.get(name);
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // 保存できない環境でも、ゲームはそのまま遊べる
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function wrap(value, size) {
  return ((value % size) + size) % size;
}

function pick(items, index) {
  if (!items || items.length === 0) return undefined;
  return items[Math.floor(index) % items.length];
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function star(ctx, cx, cy, outer, inner, points) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
  }
  ctx.closePath();
}

function heart(ctx, cx, cy, size) {
  ctx.beginPath();
  ctx.moveTo(cx, cy + size * 0.9);
  ctx.bezierCurveTo(cx - size * 1.4, cy, cx - size * 0.8, cy - size, cx, cy - size * 0.35);
  ctx.bezierCurveTo(cx + size * 0.8, cy - size, cx + size * 1.4, cy, cx, cy + size * 0.9);
  ctx.closePath();
}

function intersects(a, b, padding = 0) {
  return (
    a.x + padding < b.x + b.width &&
    a.x + a.width - padding > b.x &&
    a.y + padding < b.y + b.height &&
    a.y + a.height - padding > b.y
  );
}

function circleIntersectsRect(circle, rect) {
  const closestX = clamp(circle.x, rect.x, rect.x + rect.width);
  const closestY = clamp(circle.y, rect.y, rect.y + rect.height);
  const dx = circle.x - closestX;
  const dy = circle.y - closestY;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ページを組み立てて、ゲームを始める準備をする（定数や関数の定義がすべて終わってから）
renderCards();
renderGameRules();
initGame();
