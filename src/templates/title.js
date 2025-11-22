export const titleTemplates = [
  {
    name: "モダン・ミニマル",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <div class="mb-md">
          <span class="badge badge-primary">2024年 戦略</span>
        </div>
        <h1 class="text-primary" style="font-size: 5rem; margin-bottom: 1rem;">未来への展望</h1>
        <p class="text-secondary" style="font-size: 2rem;">第4四半期 事業成長戦略</p>
        <div class="mt-lg flex-center justify-start" style="gap: 1rem;">
          <div style="width: 50px; height: 5px; background: var(--accent);"></div>
          <p class="text-muted">発表者: 山田 太郎</p>
        </div>
      </div>
    `
  },
  {
    name: "ボールド・スプリット",
    render: () => `
      <div class="slide-container grid-2">
        <div class="bg-primary p-lg flex-col justify-center text-white">
          <h1 style="font-size: 4.5rem;">四半期<br>レビュー</h1>
          <p class="mt-md" style="font-size: 1.5rem; opacity: 0.9;">2024年11月</p>
        </div>
        <div class="p-lg flex-col justify-center bg-light">
          <h2 class="text-secondary">アジェンダ</h2>
          <ul style="list-style: none; margin-top: 2rem; font-size: 1.5rem; line-height: 2;">
            <li>01. 財務概要</li>
            <li>02. 市場分析</li>
            <li>03. 戦略目標</li>
            <li>04. 質疑応答</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    name: "ダーク・グラデーション",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white;">
        <div style="border-left: 8px solid var(--accent); padding-left: 2rem;">
          <h1 style="font-size: 6rem; line-height: 1;">プロジェクト<br>アルファ</h1>
        </div>
        <p class="mt-md text-muted" style="font-size: 1.5rem; margin-left: 2.5rem;">デジタルランドスケープの再定義</p>
      </div>
    `
  },
  {
    name: "センター・ヒーロー",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center text-center bg-light">
        <div class="flex-center mb-md">
          <div style="width: 80px; height: 80px; background: var(--primary); border-radius: 50%;"></div>
        </div>
        <h1 class="text-main" style="font-size: 5rem;">年次報告書</h1>
        <p class="text-secondary mt-sm" style="font-size: 2rem;">2024年度</p>
        <div class="mt-lg">
          <span class="badge" style="background: white; border: 1px solid #cbd5e1; padding: 0.5rem 1.5rem;">社外秘</span>
        </div>
      </div>
    `
  },
  {
    name: "画像オーバーレイ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-end" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80') no-repeat center center; background-size: cover; color: white;">
        <h1 style="font-size: 5rem; text-shadow: 0 4px 6px rgba(0,0,0,0.3);">グローバルサミット</h1>
        <p class="mt-sm" style="font-size: 2rem; font-weight: 300;">イノベーションで世界をつなぐ</p>
        <div style="width: 100%; height: 1px; background: rgba(255,255,255,0.3); margin-top: 2rem;"></div>
        <div class="flex-center justify-between mt-sm" style="font-size: 1.2rem; opacity: 0.8;">
          <span>東京, 日本</span>
          <span>2024年11月22日</span>
        </div>
      </div>
    `
  },
  {
    name: "テック・ジオメトリック",
    render: () => `
      <div class="slide-container bg-white" style="position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: #f1f5f9; clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);"></div>
        <div class="p-lg flex-col justify-center h-full" style="position: relative; z-index: 1;">
          <h1 class="text-primary" style="font-size: 5.5rem; font-weight: 800; letter-spacing: -2px;">TECH<br>VISION</h1>
          <p class="text-secondary mt-md" style="font-size: 1.75rem; max-width: 600px;">AIと機械学習の境界線を拡張する</p>
          <button class="btn btn-primary mt-lg" style="width: fit-content;">プレゼンテーション開始</button>
        </div>
      </div>
    `
  },
  {
    name: "エレガント・セリフ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white text-center">
        <div style="border: 2px solid var(--text-main); padding: 4rem; display: inline-block; margin: 0 auto;">
          <h1 style="font-family: serif; font-size: 4.5rem; font-weight: 400;">The Collection</h1>
          <p class="mt-sm" style="font-family: serif; font-style: italic; font-size: 2rem; color: var(--text-muted);">2024 秋冬コレクション</p>
        </div>
      </div>
    `
  },
  {
    name: "バイブラント・ダイアゴナル",
    render: () => `
      <div class="slide-container flex-col justify-center bg-primary" style="overflow: hidden;">
        <div style="position: absolute; top: -50%; left: -20%; width: 200%; height: 200%; background: white; transform: rotate(-15deg); transform-origin: center;"></div>
        <div class="p-lg" style="position: relative; z-index: 1; text-align: right;">
          <h1 class="text-primary" style="font-size: 6rem; font-weight: 900;">IMPACT</h1>
          <h2 class="text-secondary" style="font-size: 3rem;">REPORT</h2>
          <p class="text-muted mt-md" style="font-size: 1.5rem;">地域社会への貢献と変革</p>
        </div>
      </div>
    `
  },
  {
    name: "コーポレート・ブルー",
    render: () => `
      <div class="slide-container grid-sidebar bg-white">
        <div class="bg-primary p-md flex-col justify-between text-white">
          <div style="font-weight: bold; font-size: 1.5rem;">ACME Corp</div>
          <div style="font-size: 5rem; font-weight: 900; opacity: 0.2;">2024</div>
        </div>
        <div class="p-lg flex-col justify-center">
          <h1 class="text-main" style="font-size: 4rem;">第3四半期 業績報告</h1>
          <p class="text-secondary mt-sm" style="font-size: 1.5rem;">営業・マーケティング アップデート</p>
          <div class="mt-lg flex-center justify-start" style="gap: 1rem;">
             <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" style="width: 50px; height: 50px; border-radius: 50%;">
             <div>
               <div class="font-bold">山田 太郎</div>
               <div class="text-muted text-sm">営業本部長</div>
             </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "クリエイティブ・ブロブ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-light" style="position: relative; overflow: hidden;">
        <div style="position: absolute; top: -100px; right: -100px; width: 600px; height: 600px; background: #bfdbfe; border-radius: 50%; filter: blur(80px); opacity: 0.5;"></div>
        <div style="position: absolute; bottom: -100px; left: -100px; width: 500px; height: 500px; background: #fca5a5; border-radius: 50%; filter: blur(80px); opacity: 0.5;"></div>
        
        <div style="position: relative; z-index: 1;">
          <h1 class="text-main" style="font-size: 5.5rem; font-weight: 800;">Creative<br><span class="text-primary">Solutions</span></h1>
          <p class="text-secondary mt-md" style="font-size: 2rem; max-width: 700px;">既成概念にとらわれない発想で、最高の結果を。</p>
        </div>
      </div>
    `
  }
];
