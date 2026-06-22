const siteData = {
  schoolName: "千葉県立千葉西高等学校",
  shortName: "千葉西高校",
  area: "海に近い、検見川浜のそばの全日制普通科",
  tagline: "生徒が教えてくれた魅力は「海が近い」。自立と挑戦の力を育てる学校。",
  theme: {
    brand: "#246bfe",
    accent: "#ff6b5f",
    mint: "#30c6a7",
    gold: "#f8c14a"
  },
  stats: [
    { value: "飛翔", label: "校訓" },
    { value: "普通科", label: "全日制の課程" },
    { value: "徒歩15分", label: "検見川浜駅から" }
  ],
  features: [
    {
      symbol: "01",
      title: "生徒が教えてくれた「海が近い」",
      body: "千葉市美浜区磯辺、検見川浜の近く。海を身近に感じられる環境が、千葉西高校らしい魅力の一つです。"
    },
    {
      symbol: "02",
      title: "校訓は「飛翔」",
      body: "教育目標は自立した生徒の育成。自ら学び、考え、失敗を恐れず挑戦する姿勢を大切にしています。"
    },
    {
      symbol: "03",
      title: "高大連携と進路学習",
      body: "千葉大学や神田外語大学との連携、キャリア教育を通して、将来を考えるきっかけを広げます。"
    }
  ],
  learning: {
    title: "自立と挑戦を育てる、千葉西の学び。",
    body: "朝の読書活動、大学との連携、地域との交流を通して、自分で考え行動する力を育てます。",
    activities: ["朝読書", "高大連携", "地域交流"]
  },
  voices: [
    {
      initial: "海",
      name: "生徒が教えてくれたよさ",
      role: "海が近い",
      quote: "千葉西高校のよさとして、生徒から「海が近い」という声がありました。"
    },
    {
      initial: "B",
      name: "学校生活",
      role: "部活動",
      quote: "運動部・文化部の活動を通して、自主性や責任感、仲間との連帯感を育てます。"
    },
    {
      initial: "C",
      name: "進路学習",
      role: "進路学習",
      quote: "高大連携や進路講演会を通して、大学や将来の学びを具体的に考えられます。"
    }
  ],
  events: [
    {
      month: "4月",
      title: "入学式・新年度の始まり",
      body: "新しい学年が始まり、千葉西での学校生活が動き出します。"
    },
    {
      month: "5月",
      title: "校外学習",
      body: "学年ごとに校外へ出かけ、仲間との関係を深めながら学校外で学びます。"
    },
    {
      month: "夏",
      title: "学校説明会・部活動見学",
      body: "中学生に向けて学校説明会が行われ、さまざまな部活動の見学機会があります。"
    }
  ],
  game: {
    title: "通学路ダッシュ",
    body: "検見川浜駅から千葉西高校まで、徒歩15分の道のりをイメージしたミニゲームです。",
    playerLabel: "AI",
    startLabel: "検見川浜駅",
    goalLabel: "千葉西高校",
    routeNote: "JR京葉線 検見川浜駅から徒歩15分",
    routeItems: ["海近く", "飛翔", "高大連携", "部活動"],
    obstacles: ["信号", "向かい風", "寄り道"]
  }
};

const root = document.documentElement;
root.style.setProperty("--brand", siteData.theme.brand);
root.style.setProperty("--brand-dark", shadeColor(siteData.theme.brand, -28));
root.style.setProperty("--accent", siteData.theme.accent);
root.style.setProperty("--mint", siteData.theme.mint);
root.style.setProperty("--gold", siteData.theme.gold);

const textBindings = [
  ["[data-school-name]", siteData.schoolName],
  ["[data-school-name-short]", siteData.shortName],
  ["[data-school-name-short-footer]", siteData.shortName],
  ["[data-school-area]", siteData.area],
  ["[data-school-tagline]", siteData.tagline],
  ["[data-learning-title]", siteData.learning.title],
  ["[data-learning-body]", siteData.learning.body],
  ["[data-game-title]", siteData.game.title],
  ["[data-game-body]", siteData.game.body]
];

textBindings.forEach(([selector, value]) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
});

document.title = `${siteData.shortName} | AIと作る高校紹介サイト`;

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

renderCards();
initCampusCanvas();
initGame();

function renderCards() {
  const featureGrid = document.querySelector("[data-feature-grid]");
  const voiceGrid = document.querySelector("[data-voice-grid]");
  const eventList = document.querySelector("[data-event-list]");

  featureGrid.innerHTML = siteData.features
    .map(
      (feature) => `
        <article class="feature-card">
          <span class="feature-symbol">${escapeHtml(feature.symbol)}</span>
          <div>
            <h3>${escapeHtml(feature.title)}</h3>
            <p>${escapeHtml(feature.body)}</p>
          </div>
        </article>
      `
    )
    .join("");

  voiceGrid.innerHTML = siteData.voices
    .map(
      (voice) => `
        <article class="voice-card">
          <div class="voice-meta">
            <span class="avatar">${escapeHtml(voice.initial)}</span>
            <div>
              <strong>${escapeHtml(voice.name)}</strong>
              <span>${escapeHtml(voice.role)}</span>
            </div>
          </div>
          <p>${escapeHtml(voice.quote)}</p>
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

function initCampusCanvas() {
  const canvas = document.querySelector("#campusCanvas");
  const context = canvas.getContext("2d");
  const pointer = { x: 0.5, y: 0.5 };
  let width = 0;
  let height = 0;
  let deviceRatio = 1;
  let startTime = performance.now();

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * deviceRatio);
    canvas.height = Math.floor(height * deviceRatio);
    context.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
  };

  const draw = (now) => {
    const t = (now - startTime) / 1000;
    context.clearRect(0, 0, width, height);

    drawSky(context, width, height);
    drawSun(context, width, height, t);
    drawClouds(context, width, height, t, pointer.x);
    drawGround(context, width, height);
    drawCampus(context, width, height, pointer);
    drawStudents(context, width, height, t);

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / Math.max(window.innerWidth, 1);
    pointer.y = event.clientY / Math.max(window.innerHeight, 1);
  });

  resize();
  requestAnimationFrame(draw);
}

function drawSky(ctx, width, height) {
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#bce8ff");
  sky.addColorStop(0.62, "#e9f9ff");
  sky.addColorStop(1, "#ffffff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);
}

function drawSun(ctx, width, height, t) {
  const x = width * 0.78;
  const y = height * 0.16 + Math.sin(t * 0.5) * 5;
  const radius = Math.max(48, Math.min(width, height) * 0.095);
  const halo = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 2.2);
  halo.addColorStop(0, "rgba(248, 193, 74, 0.75)");
  halo.addColorStop(1, "rgba(248, 193, 74, 0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = siteData.theme.gold;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawClouds(ctx, width, height, t, pointerX) {
  const clouds = [
    { x: 0.58, y: 0.18, s: 1.1, speed: 12 },
    { x: 0.84, y: 0.32, s: 0.82, speed: 9 },
    { x: 0.42, y: 0.27, s: 0.72, speed: 7 }
  ];

  clouds.forEach((cloud, index) => {
    const travel = ((t * cloud.speed + pointerX * 20 + index * 140) % (width + 280)) - 140;
    const x = cloud.x * width + travel - width * 0.45;
    const y = cloud.y * height;
    const size = 54 * cloud.s;
    ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
    blob(ctx, x, y, size, [
      [-0.7, 0.12, 0.68],
      [-0.26, -0.12, 0.86],
      [0.28, -0.04, 0.72],
      [0.72, 0.16, 0.54]
    ]);
  });
}

function drawGround(ctx, width, height) {
  const groundY = height * 0.72;
  ctx.fillStyle = "#dff8ed";
  ctx.fillRect(0, groundY, width, height - groundY);

  ctx.fillStyle = "#9bd9bb";
  for (let x = -40; x < width + 80; x += 78) {
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.quadraticCurveTo(x + 36, groundY + 34, x + 88, height);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = "rgba(36, 107, 254, 0.12)";
  ctx.fillRect(0, groundY + 18, width, 4);
}

function drawCampus(ctx, width, height, pointer) {
  const baseY = height * 0.72;
  const buildingW = Math.min(width * 0.5, 720);
  const buildingH = Math.min(height * 0.32, 280);
  const x = width * 0.53 + (pointer.x - 0.5) * 18;
  const y = baseY - buildingH;
  const left = x - buildingW / 2;

  ctx.fillStyle = "#ffffff";
  roundRect(ctx, left, y, buildingW, buildingH, 8);
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 32, 51, 0.18)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = siteData.theme.brand;
  roundRect(ctx, left + buildingW * 0.38, y - buildingH * 0.18, buildingW * 0.24, buildingH * 0.2, 8);
  ctx.fill();

  ctx.fillStyle = "#f4f8ff";
  ctx.fillRect(left + buildingW * 0.42, y - buildingH * 0.13, buildingW * 0.16, buildingH * 0.08);

  const rows = 3;
  const columns = 7;
  const gapX = buildingW * 0.055;
  const gapY = buildingH * 0.12;
  const windowW = buildingW * 0.075;
  const windowH = buildingH * 0.12;
  const startX = left + buildingW * 0.08;
  const startY = y + buildingH * 0.18;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const wx = startX + col * (windowW + gapX);
      const wy = startY + row * (windowH + gapY);
      ctx.fillStyle = (row + col) % 3 === 0 ? "#ffe8a8" : "#ccecff";
      roundRect(ctx, wx, wy, windowW, windowH, 4);
      ctx.fill();
    }
  }

  ctx.fillStyle = siteData.theme.accent;
  roundRect(ctx, left + buildingW * 0.45, baseY - buildingH * 0.21, buildingW * 0.1, buildingH * 0.21, 6);
  ctx.fill();

  drawTree(ctx, left - 70, baseY + 4, 1.2);
  drawTree(ctx, left + buildingW + 62, baseY + 8, 1.05);
}

function drawStudents(ctx, width, height, t) {
  const baseY = height * 0.78;
  const students = [
    { x: 0.62, color: siteData.theme.brand, phase: 0 },
    { x: 0.7, color: siteData.theme.accent, phase: 1.8 },
    { x: 0.78, color: siteData.theme.mint, phase: 3.2 }
  ];

  students.forEach((student) => {
    const x = width * student.x + Math.sin(t * 1.5 + student.phase) * 14;
    const y = baseY + Math.sin(t * 3 + student.phase) * 2;
    ctx.fillStyle = "#24304a";
    ctx.beginPath();
    ctx.arc(x, y - 38, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = student.color;
    roundRect(ctx, x - 11, y - 28, 22, 30, 6);
    ctx.fill();
    ctx.strokeStyle = "#24304a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x - 6, y + 2);
    ctx.lineTo(x - 14, y + 24);
    ctx.moveTo(x + 6, y + 2);
    ctx.lineTo(x + 16, y + 24);
    ctx.stroke();
  });
}

function drawTree(ctx, x, baseY, scale) {
  ctx.fillStyle = "#7b5b45";
  roundRect(ctx, x - 8 * scale, baseY - 74 * scale, 16 * scale, 74 * scale, 5 * scale);
  ctx.fill();
  ctx.fillStyle = siteData.theme.mint;
  blob(ctx, x, baseY - 88 * scale, 42 * scale, [
    [-0.55, 0.08, 0.78],
    [0, -0.3, 0.92],
    [0.52, 0.08, 0.76],
    [0.05, 0.35, 0.7]
  ]);
}

function initGame() {
  const canvas = document.querySelector("#gameCanvas");
  const ctx = canvas.getContext("2d");
  const startButton = document.querySelector("[data-start-game]");
  const jumpButton = document.querySelector("[data-jump]");
  const scoreElement = document.querySelector("[data-score]");
  const bestElement = document.querySelector("[data-best-score]");
  const bestKey = "high-school-visit-route-best-score";

  const state = {
    running: false,
    gameOver: false,
    arrived: false,
    score: 0,
    best: Number(localStorage.getItem(bestKey) || 0),
    speed: 4.8,
    frame: 0,
    distance: 0,
    finishDistance: 2600,
    ground: 330,
    player: {
      x: 104,
      y: 282,
      width: 54,
      height: 54,
      velocityY: 0,
      grounded: true
    },
    obstacles: [],
    collectibles: []
  };

  bestElement.textContent = state.best;

  const reset = () => {
    state.running = true;
    state.gameOver = false;
    state.arrived = false;
    state.score = 0;
    state.speed = 4.8;
    state.frame = 0;
    state.distance = 0;
    state.obstacles = [];
    state.collectibles = [];
    state.player.y = state.ground - state.player.height;
    state.player.velocityY = 0;
    state.player.grounded = true;
    startButton.textContent = "リスタート";
    scoreElement.textContent = state.score;
  };

  const jump = () => {
    if (!state.running || state.gameOver || state.arrived) {
      reset();
      return;
    }

    if (state.player.grounded) {
      state.player.velocityY = -14.4;
      state.player.grounded = false;
    }
  };

  startButton.addEventListener("click", reset);
  jumpButton.addEventListener("click", jump);
  canvas.addEventListener("pointerdown", jump);
  window.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "ArrowUp") {
      event.preventDefault();
      jump();
    }
  });

  const loop = () => {
    updateGame(state);
    drawGame(ctx, canvas, state);
    requestAnimationFrame(loop);
  };

  drawGame(ctx, canvas, state);
  requestAnimationFrame(loop);

  function updateGame(game) {
    if (!game.running || game.gameOver) return;

    game.frame += 1;
    game.score += 1;
    game.distance += game.speed;
    game.speed = Math.min(11, game.speed + 0.0028);
    scoreElement.textContent = Math.floor(game.score / 6);

    if (game.distance >= game.finishDistance) {
      arriveGame(game);
      return;
    }

    game.player.velocityY += 0.74;
    game.player.y += game.player.velocityY;

    const floor = game.ground - game.player.height;
    if (game.player.y >= floor) {
      game.player.y = floor;
      game.player.velocityY = 0;
      game.player.grounded = true;
    }

    if (game.frame % 96 === 0 && routeProgress(game) < 0.92) {
      game.obstacles.push({
        x: canvas.width + 28,
        y: game.ground - 42,
        width: 42,
        height: 42,
        label: pick(siteData.game.obstacles, game.frame / 96)
      });
    }

    if (game.frame % 74 === 0 && routeProgress(game) < 0.95) {
      game.collectibles.push({
        x: canvas.width + 34,
        y: game.ground - 118 - Math.random() * 88,
        radius: 16,
        collected: false,
        label: pick(siteData.game.routeItems, game.frame / 74)
      });
    }

    game.obstacles.forEach((obstacle) => {
      obstacle.x -= game.speed;
      if (intersects(game.player, obstacle, 8)) {
        endGame(game);
      }
    });

    game.collectibles.forEach((item) => {
      item.x -= game.speed;
      if (!item.collected && circleIntersectsRect(item, game.player)) {
        item.collected = true;
        game.score += 84;
      }
    });

    game.obstacles = game.obstacles.filter((obstacle) => obstacle.x > -80);
    game.collectibles = game.collectibles.filter((item) => item.x > -80 && !item.collected);
  }

  function endGame(game) {
    game.gameOver = true;
    game.running = false;
    const finalScore = Math.floor(game.score / 6);
    if (finalScore > game.best) {
      game.best = finalScore;
      localStorage.setItem(bestKey, String(game.best));
      bestElement.textContent = game.best;
    }
  }

  function arriveGame(game) {
    game.arrived = true;
    game.running = false;
    game.score += 240;
    const finalScore = Math.floor(game.score / 6);
    scoreElement.textContent = finalScore;
    if (finalScore > game.best) {
      game.best = finalScore;
      localStorage.setItem(bestKey, String(game.best));
      bestElement.textContent = game.best;
    }
  }
}

function drawGame(ctx, canvas, state) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, "#dff4ff");
  sky.addColorStop(0.58, "#f8fcff");
  sky.addColorStop(1, "#ffffff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawRouteBackground(ctx, canvas, state);
  drawRouteProgress(ctx, canvas, state);

  ctx.fillStyle = "#caefdc";
  ctx.fillRect(0, state.ground, canvas.width, canvas.height - state.ground);

  ctx.strokeStyle = "rgba(23, 32, 51, 0.2)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, state.ground);
  ctx.lineTo(canvas.width, state.ground);
  ctx.stroke();

  ctx.fillStyle = "rgba(36, 107, 254, 0.08)";
  ctx.fillRect(0, state.ground + 70, canvas.width, 24);
  for (let x = -60; x < canvas.width + 80; x += 46) {
    const waveX = x - ((state.frame * 0.55) % 46);
    ctx.beginPath();
    ctx.arc(waveX, state.ground + 82, 18, 0, Math.PI);
    ctx.strokeStyle = "rgba(36, 107, 254, 0.22)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  for (let x = -80; x < canvas.width + 120; x += 90) {
    const laneX = x - ((state.frame * state.speed) % 90);
    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    roundRect(ctx, laneX, state.ground + 36, 42, 6, 3);
    ctx.fill();
  }

  state.collectibles.forEach((item) => {
    ctx.fillStyle = siteData.theme.gold;
    ctx.beginPath();
    ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#172033";
    ctx.font = "900 11px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("+", item.x, item.y + 1);
    ctx.font = "800 11px system-ui, sans-serif";
    ctx.fillText(item.label, item.x, item.y - 25);
  });

  state.obstacles.forEach((obstacle) => {
    ctx.fillStyle = siteData.theme.accent;
    roundRect(ctx, obstacle.x, obstacle.y, obstacle.width, obstacle.height, 8);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "900 12px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("!", obstacle.x + obstacle.width / 2, obstacle.y + 14);
    ctx.font = "800 10px system-ui, sans-serif";
    ctx.fillText(obstacle.label, obstacle.x + obstacle.width / 2, obstacle.y + 30);
  });

  drawPlayer(ctx, state.player);

  if (!state.running && !state.gameOver) {
    drawCenterLabel(ctx, canvas, state.arrived ? "ARRIVED" : "START");
  }

  if (state.gameOver) {
    drawCenterLabel(ctx, canvas, "RETRY");
  }
}

function drawRouteBackground(ctx, canvas, state) {
  ctx.fillStyle = "rgba(36, 107, 254, 0.12)";
  for (let i = 0; i < 5; i += 1) {
    const x = ((i * 220 - state.frame * 0.8) % 1120) - 120;
    roundRect(ctx, x, 82 + i * 11, 110, 34, 18);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(48, 198, 167, 0.22)";
  roundRect(ctx, 36, 204, 120, 56, 8);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.68)";
  roundRect(ctx, 54, 220, 84, 8, 4);
  ctx.fill();

  ctx.fillStyle = "rgba(248, 193, 74, 0.28)";
  roundRect(ctx, canvas.width - 174, 196, 128, 74, 8);
  ctx.fill();
  ctx.fillStyle = "rgba(23, 32, 51, 0.12)";
  for (let i = 0; i < 4; i += 1) {
    roundRect(ctx, canvas.width - 154 + i * 28, 215, 16, 16, 4);
    ctx.fill();
  }
}

function drawRouteProgress(ctx, canvas, state) {
  const x = 58;
  const y = 28;
  const width = canvas.width - 116;
  const height = 96;
  const progress = routeProgress(state);

  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  roundRect(ctx, x, y, width, height, 8);
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 32, 51, 0.14)";
  ctx.lineWidth = 2;
  ctx.stroke();

  const routeY = y + 52;
  const startX = x + 66;
  const goalX = x + width - 72;
  const currentX = startX + (goalX - startX) * progress;

  ctx.strokeStyle = "rgba(23, 32, 51, 0.2)";
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(startX, routeY);
  ctx.bezierCurveTo(x + width * 0.34, routeY - 28, x + width * 0.56, routeY + 28, goalX, routeY);
  ctx.stroke();

  ctx.strokeStyle = siteData.theme.brand;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(startX, routeY);
  ctx.lineTo(currentX, routeY);
  ctx.stroke();

  drawMapPin(ctx, startX, routeY, siteData.theme.brand, siteData.game.startLabel);
  drawMapPin(ctx, goalX, routeY, siteData.theme.accent, siteData.game.goalLabel);

  ctx.fillStyle = siteData.theme.gold;
  ctx.beginPath();
  ctx.arc(currentX, routeY, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#172033";
  ctx.font = "900 11px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("GO", currentX, routeY + 1);

  ctx.fillStyle = "#5e6878";
  ctx.font = "800 13px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(siteData.game.routeNote, x + width / 2, y + height - 15);

  ctx.fillStyle = "#172033";
  ctx.font = "900 16px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${Math.round(progress * 100)}%`, x + width - 16, y + 24);
}

function drawMapPin(ctx, x, y, color, label) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#172033";
  ctx.font = "900 12px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(label, x, y - 22);
}

function drawPlayer(ctx, player) {
  const x = player.x;
  const y = player.y;

  ctx.fillStyle = "rgba(23, 32, 51, 0.18)";
  ctx.beginPath();
  ctx.ellipse(x + 28, 334, 30, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = siteData.theme.brand;
  roundRect(ctx, x, y, player.width, player.height, 10);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  roundRect(ctx, x + 10, y + 13, 34, 20, 6);
  ctx.fill();

  ctx.fillStyle = "#172033";
  ctx.beginPath();
  ctx.arc(x + 21, y + 23, 3, 0, Math.PI * 2);
  ctx.arc(x + 34, y + 23, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#172033";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + 19, y + 37);
  ctx.lineTo(x + 15, y + 48);
  ctx.moveTo(x + 35, y + 37);
  ctx.lineTo(x + 39, y + 48);
  ctx.stroke();
}

function drawCenterLabel(ctx, canvas, label) {
  ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
  roundRect(ctx, canvas.width / 2 - 86, canvas.height / 2 - 34, 172, 68, 8);
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 32, 51, 0.16)";
  ctx.stroke();
  ctx.fillStyle = "#172033";
  ctx.font = "900 28px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, canvas.width / 2, canvas.height / 2 + 1);
}

function shadeColor(hex, percent) {
  const clean = hex.replace("#", "");
  const number = Number.parseInt(clean, 16);
  const amount = Math.round(2.55 * percent);
  const r = clamp((number >> 16) + amount, 0, 255);
  const g = clamp(((number >> 8) & 0x00ff) + amount, 0, 255);
  const b = clamp((number & 0x0000ff) + amount, 0, 255);
  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function routeProgress(state) {
  return clamp(state.distance / state.finishDistance, 0, 1);
}

function pick(items, index) {
  return items[Math.floor(index) % items.length];
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function blob(ctx, x, y, size, points) {
  ctx.beginPath();
  points.forEach(([px, py, scale], index) => {
    const cx = x + px * size;
    const cy = y + py * size;
    const radius = size * scale;
    if (index === 0) {
      ctx.moveTo(cx + radius, cy);
    }
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  });
  ctx.fill();
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
  const distanceX = circle.x - closestX;
  const distanceY = circle.y - closestY;
  return distanceX * distanceX + distanceY * distanceY < circle.radius * circle.radius;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
