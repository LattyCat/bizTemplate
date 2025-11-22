export const dataTemplates = [
  {
    name: "ビッグナンバー",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">主要指標</h2>
        <div class="grid-3 text-center">
          <div>
            <div class="text-primary font-bold" style="font-size: 6rem;">250万</div>
            <div class="text-secondary" style="font-size: 1.5rem;">アクティブユーザー</div>
          </div>
          <div>
            <div class="text-success font-bold" style="font-size: 6rem;">10億円</div>
            <div class="text-secondary" style="font-size: 1.5rem;">年間売上高</div>
          </div>
          <div>
            <div class="text-accent font-bold" style="font-size: 6rem;">99.9%</div>
            <div class="text-secondary" style="font-size: 1.5rem;">稼働率</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "棒グラフ (CSS)",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">売上成長</h2>
        <div class="flex-center items-end h-full" style="gap: 4rem; padding-bottom: 2rem; border-bottom: 2px solid #e2e8f0;">
          <div class="flex-col flex-center w-full">
            <div style="width: 100px; height: 200px; background: var(--primary-light); border-radius: 8px 8px 0 0; position: relative;">
              <span style="position: absolute; top: -30px; width: 100%; text-align: center; font-weight: bold;">200万</span>
            </div>
            <div class="mt-sm font-bold">Q1</div>
          </div>
          <div class="flex-col flex-center w-full">
            <div style="width: 100px; height: 300px; background: var(--primary-light); border-radius: 8px 8px 0 0; position: relative;">
               <span style="position: absolute; top: -30px; width: 100%; text-align: center; font-weight: bold;">350万</span>
            </div>
            <div class="mt-sm font-bold">Q2</div>
          </div>
          <div class="flex-col flex-center w-full">
            <div style="width: 100px; height: 400px; background: var(--primary); border-radius: 8px 8px 0 0; position: relative;">
               <span style="position: absolute; top: -30px; width: 100%; text-align: center; font-weight: bold;">500万</span>
            </div>
            <div class="mt-sm font-bold">Q3</div>
          </div>
          <div class="flex-col flex-center w-full">
            <div style="width: 100px; height: 500px; background: var(--primary-dark); border-radius: 8px 8px 0 0; position: relative;">
               <span style="position: absolute; top: -30px; width: 100%; text-align: center; font-weight: bold;">800万</span>
            </div>
            <div class="mt-sm font-bold">Q4</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "円グラフ (プレースホルダー)",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div class="p-lg flex-col justify-center">
          <h2 class="text-main mb-md" style="font-size: 3rem;">市場シェア</h2>
          <ul class="text-secondary" style="font-size: 1.5rem; list-style: none;">
            <li class="flex-center justify-start mb-sm"><span style="width: 20px; height: 20px; background: var(--primary); margin-right: 1rem;"></span> 製品 A (60%)</li>
            <li class="flex-center justify-start mb-sm"><span style="width: 20px; height: 20px; background: var(--accent); margin-right: 1rem;"></span> 製品 B (25%)</li>
            <li class="flex-center justify-start mb-sm"><span style="width: 20px; height: 20px; background: var(--secondary); margin-right: 1rem;"></span> その他 (15%)</li>
          </ul>
        </div>
        <div class="flex-center">
          <div style="width: 400px; height: 400px; border-radius: 50%; background: conic-gradient(var(--primary) 0% 60%, var(--accent) 60% 85%, var(--secondary) 85% 100%); position: relative;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold;">
              合計
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "プログレスバー",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">プロジェクト状況</h2>
        <div class="flex-col" style="gap: 3rem; max-width: 800px; margin: 0 auto; width: 100%;">
          <div>
            <div class="flex-center justify-between mb-sm">
              <span class="font-bold text-lg">デザインフェーズ</span>
              <span class="font-bold text-primary">100%</span>
            </div>
            <div style="width: 100%; height: 20px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
              <div style="width: 100%; height: 100%; background: var(--primary);"></div>
            </div>
          </div>
          <div>
            <div class="flex-center justify-between mb-sm">
              <span class="font-bold text-lg">開発</span>
              <span class="font-bold text-primary">75%</span>
            </div>
            <div style="width: 100%; height: 20px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
              <div style="width: 75%; height: 100%; background: var(--primary);"></div>
            </div>
          </div>
          <div>
            <div class="flex-center justify-between mb-sm">
              <span class="font-bold text-lg">テスト</span>
              <span class="font-bold text-primary">30%</span>
            </div>
            <div style="width: 100%; height: 20px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
              <div style="width: 30%; height: 100%; background: var(--primary);"></div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "ファネルチャート",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">セールスファネル</h2>
        <div class="flex-col flex-center">
          <div style="width: 800px; height: 80px; background: var(--primary-dark); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">リード (10,000)</div>
          <div style="width: 700px; height: 80px; background: var(--primary); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">見込み客 (5,000)</div>
          <div style="width: 600px; height: 80px; background: var(--primary-light); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">商談化 (2,000)</div>
          <div style="width: 500px; height: 80px; background: var(--accent); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">顧客 (500)</div>
        </div>
      </div>
    `
  },
  {
    name: "世界地図ポイント",
    render: () => `
      <div class="slide-container p-lg flex-col bg-dark text-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">グローバル展開</h2>
        <div style="position: relative; width: 100%; height: 100%; background: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg') no-repeat center center; background-size: contain; filter: invert(1) opacity(0.2);">
          <div style="position: absolute; top: 30%; left: 25%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 35%; left: 48%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 40%; left: 75%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 70%; left: 80%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
        </div>
      </div>
    `
  },
  {
    name: "比較カード",
    render: () => `
      <div class="slide-container p-lg flex-col bg-light">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">前年比</h2>
        <div class="flex-center" style="gap: 4rem;">
          <div class="card p-lg text-center" style="width: 300px;">
            <h3 class="text-secondary mb-md">2023</h3>
            <div class="text-muted" style="font-size: 4rem; font-weight: bold;">2.4億円</div>
            <p class="text-danger mt-sm">▼ 5%</p>
          </div>
          <div class="card p-lg text-center" style="width: 300px; transform: scale(1.1); border: 2px solid var(--primary);">
            <h3 class="text-primary mb-md">2024</h3>
            <div class="text-primary" style="font-size: 4rem; font-weight: bold;">4.8億円</div>
            <p class="text-success mt-sm">▲ 100%</p>
          </div>
          <div class="card p-lg text-center" style="width: 300px;">
            <h3 class="text-secondary mb-md">2025 (予測)</h3>
            <div class="text-muted" style="font-size: 4rem; font-weight: bold;">8.0億円</div>
            <p class="text-success mt-sm">▲ 66%</p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "円形プログレス",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">目標達成率</h2>
        <div class="flex-center" style="gap: 4rem;">
          <div class="flex-col flex-center">
            <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--primary) 75%, #e2e8f0 0); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 160px; height: 160px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold;">75%</div>
            </div>
            <h3 class="mt-md">売上</h3>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--success) 90%, #e2e8f0 0); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 160px; height: 160px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold;">90%</div>
            </div>
            <h3 class="mt-md">維持率</h3>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--accent) 50%, #e2e8f0 0); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 160px; height: 160px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold;">50%</div>
            </div>
            <h3 class="mt-md">採用</h3>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "エリアチャート (コンセプト)",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">トラフィック推移</h2>
        <div style="flex-grow: 1; position: relative; border-left: 2px solid #cbd5e1; border-bottom: 2px solid #cbd5e1;">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width: 100%; height: 100%; overflow: visible;">
            <path d="M0,50 L10,40 L20,45 L30,30 L40,35 L50,20 L60,25 L70,10 L80,15 L90,5 L100,0 L100,50 Z" fill="rgba(37, 99, 235, 0.2)" stroke="var(--primary)" stroke-width="0.5" />
          </svg>
          <div style="position: absolute; bottom: -30px; left: 0; width: 100%; display: flex; justify-content: space-between; font-size: 1.25rem; color: var(--text-muted);">
            <span>1月</span><span>2月</span><span>3月</span><span>4月</span><span>5月</span><span>6月</span>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "アイコングリッドデータ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-primary text-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">数字で見る当社</h2>
        <div class="grid-2" style="gap: 4rem;">
          <div class="flex-center justify-start">
            <div style="font-size: 4rem; margin-right: 2rem;">👥</div>
            <div>
              <div style="font-size: 3rem; font-weight: bold;">500+</div>
              <div style="font-size: 1.5rem; opacity: 0.8;">従業員数</div>
            </div>
          </div>
          <div class="flex-center justify-start">
            <div style="font-size: 4rem; margin-right: 2rem;">🌍</div>
            <div>
              <div style="font-size: 3rem; font-weight: bold;">30+</div>
              <div style="font-size: 1.5rem; opacity: 0.8;">展開国数</div>
            </div>
          </div>
          <div class="flex-center justify-start">
            <div style="font-size: 4rem; margin-right: 2rem;">⭐</div>
            <div>
              <div style="font-size: 3rem; font-weight: bold;">4.9</div>
              <div style="font-size: 1.5rem; opacity: 0.8;">アプリ評価</div>
            </div>
          </div>
          <div class="flex-center justify-start">
            <div style="font-size: 4rem; margin-right: 2rem;">💼</div>
            <div>
              <div style="font-size: 3rem; font-weight: bold;">10k+</div>
              <div style="font-size: 1.5rem; opacity: 0.8;">法人顧客</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
