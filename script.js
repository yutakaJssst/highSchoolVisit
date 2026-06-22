const siteData = {
  schoolName: "青空未来高等学校",
  shortName: "青空未来高校",
  area: "地域とつながる学び",
  tagline: "好奇心を、地域とテクノロジーで未来につなげる学校。",
  theme: {
    brand: "#246bfe",
    accent: "#ff6b5f",
    mint: "#30c6a7",
    gold: "#f8c14a"
  },
  stats: [
    { value: "42", label: "探究テーマ" },
    { value: "18", label: "部活動" },
    { value: "92%", label: "学校満足度" }
  ],
  features: [
    {
      symbol: "01",
      title: "探究が授業の中心",
      body: "地域の課題、身近な疑問、テクノロジーを組み合わせて、考える力を育てます。"
    },
    {
      symbol: "02",
      title: "部活動が元気",
      body: "運動部、文化部、情報系の活動まで、生徒の挑戦を先生と仲間が支えます。"
    },
    {
      symbol: "03",
      title: "進路を一緒に設計",
      body: "大学、専門学校、就職など、一人ひとりの将来像から逆算して準備します。"
    }
  ],
  learning: {
    title: "AI時代の学びを、日常の授業から。",
    body: "情報、探究、地域連携を組み合わせ、アイデアを形にする経験を積み重ねます。",
    activities: ["Web制作", "地域課題", "プレゼン"]
  },
  voices: [
    {
      initial: "A",
      name: "2年 生徒",
      role: "探究プロジェクト",
      quote: "自分のアイデアが地域の人に届く経験ができて、勉強の見え方が変わりました。"
    },
    {
      initial: "B",
      name: "1年 生徒",
      role: "部活動",
      quote: "先輩が声をかけてくれるので、新しいことにも参加しやすい雰囲気です。"
    },
    {
      initial: "C",
      name: "3年 生徒",
      role: "進路活動",
      quote: "面談で考えを整理しながら、志望理由書や面接まで何度も練習できました。"
    }
  ],
  events: [
    {
      month: "4月",
      title: "新入生オリエンテーション",
      body: "学校生活のスタートを、クラスと学年全体であたたかく迎えます。"
    },
    {
      month: "9月",
      title: "文化祭",
      body: "展示、発表、模擬店、ステージで、学年を越えたチームワークが生まれます。"
    },
    {
      month: "2月",
      title: "探究発表会",
      body: "一年間の問いと成果を、地域の方や後輩に向けて発表します。"
    }
  ],
  game: {
    title: "Campus Dash",
    body: "アイデアを集めながら、未来へ走るミニゲームです。",
    playerLabel: "AI",
    collectibleLabel: "idea",
    obstacleLabel: "bug"
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
  const bestKey = "high-school-visit-best-score";

  const state = {
    running: false,
    gameOver: false,
    score: 0,
    best: Number(localStorage.getItem(bestKey) || 0),
    speed: 4.8,
    frame: 0,
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
    state.score = 0;
    state.speed = 4.8;
    state.frame = 0;
    state.obstacles = [];
    state.collectibles = [];
    state.player.y = state.ground - state.player.height;
    state.player.velocityY = 0;
    state.player.grounded = true;
    startButton.textContent = "リスタート";
    scoreElement.textContent = state.score;
  };

  const jump = () => {
    if (!state.running || state.gameOver) {
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
    game.speed = Math.min(11, game.speed + 0.0028);
    scoreElement.textContent = Math.floor(game.score / 6);

    game.player.velocityY += 0.74;
    game.player.y += game.player.velocityY;

    const floor = game.ground - game.player.height;
    if (game.player.y >= floor) {
      game.player.y = floor;
      game.player.velocityY = 0;
      game.player.grounded = true;
    }

    if (game.frame % 96 === 0) {
      game.obstacles.push({
        x: canvas.width + 28,
        y: game.ground - 42,
        width: 42,
        height: 42
      });
    }

    if (game.frame % 74 === 0) {
      game.collectibles.push({
        x: canvas.width + 34,
        y: game.ground - 118 - Math.random() * 88,
        radius: 16,
        collected: false
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
}

function drawGame(ctx, canvas, state) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, "#dff4ff");
  sky.addColorStop(1, "#f8fcff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(36, 107, 254, 0.11)";
  for (let i = 0; i < 5; i += 1) {
    const x = ((i * 220 - state.frame * 0.8) % 1120) - 120;
    roundRect(ctx, x, 96 + i * 10, 110, 34, 18);
    ctx.fill();
  }

  ctx.fillStyle = "#caefdc";
  ctx.fillRect(0, state.ground, canvas.width, canvas.height - state.ground);

  ctx.strokeStyle = "rgba(23, 32, 51, 0.2)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, state.ground);
  ctx.lineTo(canvas.width, state.ground);
  ctx.stroke();

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
    ctx.font = "700 12px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("+", item.x, item.y + 1);
  });

  state.obstacles.forEach((obstacle) => {
    ctx.fillStyle = siteData.theme.accent;
    roundRect(ctx, obstacle.x, obstacle.y, obstacle.width, obstacle.height, 8);
    ctx.fill();
    ctx.fillStyle = "rgba(23, 32, 51, 0.82)";
    ctx.font = "800 15px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("!", obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2 + 1);
  });

  drawPlayer(ctx, state.player);

  if (!state.running && !state.gameOver) {
    drawCenterLabel(ctx, canvas, "START");
  }

  if (state.gameOver) {
    drawCenterLabel(ctx, canvas, "RETRY");
  }
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
