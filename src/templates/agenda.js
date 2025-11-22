export const agendaTemplates = [
  {
    name: "シンプルリスト",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-primary mb-lg" style="font-size: 3rem;">本日のアジェンダ</h2>
        <div class="flex-col" style="gap: 2rem; font-size: 2rem;">
          <div class="flex-center justify-start">
            <span class="badge badge-primary" style="font-size: 1.5rem; padding: 0.5rem 1rem; margin-right: 2rem;">01</span>
            <span>市場分析</span>
          </div>
          <div class="flex-center justify-start">
            <span class="badge badge-primary" style="font-size: 1.5rem; padding: 0.5rem 1rem; margin-right: 2rem;">02</span>
            <span>製品ロードマップ</span>
          </div>
          <div class="flex-center justify-start">
            <span class="badge badge-primary" style="font-size: 1.5rem; padding: 0.5rem 1rem; margin-right: 2rem;">03</span>
            <span>財務予測</span>
          </div>
          <div class="flex-center justify-start">
            <span class="badge badge-primary" style="font-size: 1.5rem; padding: 0.5rem 1rem; margin-right: 2rem;">04</span>
            <span>質疑応答</span>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "タイムライン（横）",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-light">
        <h2 class="text-main mb-lg text-center" style="font-size: 3rem;">プロジェクトタイムライン</h2>
        <div class="flex-center justify-between" style="position: relative; padding: 0 4rem;">
          <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 4px; background: #cbd5e1; z-index: 0;"></div>
          
          <div class="flex-col flex-center" style="position: relative; z-index: 1;">
            <div style="width: 20px; height: 20px; background: var(--primary); border-radius: 50%; border: 4px solid white;"></div>
            <div class="mt-md text-center">
              <div class="font-bold text-primary">Q1</div>
              <div class="text-muted">調査・分析</div>
            </div>
          </div>
          
          <div class="flex-col flex-center" style="position: relative; z-index: 1;">
            <div style="width: 20px; height: 20px; background: var(--primary); border-radius: 50%; border: 4px solid white;"></div>
            <div class="mt-md text-center">
              <div class="font-bold text-primary">Q2</div>
              <div class="text-muted">開発フェーズ</div>
            </div>
          </div>

          <div class="flex-col flex-center" style="position: relative; z-index: 1;">
            <div style="width: 20px; height: 20px; background: var(--primary); border-radius: 50%; border: 4px solid white;"></div>
            <div class="mt-md text-center">
              <div class="font-bold text-primary">Q3</div>
              <div class="text-muted">テスト・検証</div>
            </div>
          </div>

          <div class="flex-col flex-center" style="position: relative; z-index: 1;">
            <div style="width: 20px; height: 20px; background: var(--secondary); border-radius: 50%; border: 4px solid white;"></div>
            <div class="mt-md text-center">
              <div class="font-bold text-secondary">Q4</div>
              <div class="text-muted">ローンチ</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "グリッドカード",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">主要トピック</h2>
        <div class="grid-3" style="height: auto; gap: 2rem;">
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">01</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">戦略</div>
          </div>
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">02</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">デザイン</div>
          </div>
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">03</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">開発</div>
          </div>
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">04</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">マーケティング</div>
          </div>
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">05</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">セールス</div>
          </div>
          <div class="card bg-light flex-col justify-center text-center" style="height: 250px;">
            <div class="text-primary font-bold" style="font-size: 4rem;">06</div>
            <div class="text-main font-bold" style="font-size: 1.5rem;">サポート</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "画像付きアジェンダ",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div style="background: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        <div class="p-lg flex-col justify-center">
          <h2 class="text-primary mb-lg" style="font-size: 3rem;">目次</h2>
          <div class="flex-col" style="gap: 1.5rem;">
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span class="text-primary font-bold mr-2">I.</span> はじめに
            </div>
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span class="text-primary font-bold mr-2">II.</span> 調査方法
            </div>
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span class="text-primary font-bold mr-2">III.</span> 結果報告
            </div>
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span class="text-primary font-bold mr-2">IV.</span> 考察
            </div>
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
              <span class="text-primary font-bold mr-2">V.</span> 結論
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "ヘキサゴンステップ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-dark text-white">
        <h2 class="mb-lg text-center" style="font-size: 3rem;">プロセス概要</h2>
        <div class="flex-center" style="gap: 2rem;">
          <div class="flex-col flex-center">
            <div class="flex-center" style="width: 150px; height: 170px; background: var(--primary); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); font-size: 3rem; font-weight: bold;">1</div>
            <div class="mt-md font-bold">計画</div>
          </div>
          <div style="font-size: 2rem; color: var(--text-muted);">→</div>
          <div class="flex-col flex-center">
            <div class="flex-center" style="width: 150px; height: 170px; background: var(--primary-light); color: var(--bg-dark); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); font-size: 3rem; font-weight: bold;">2</div>
            <div class="mt-md font-bold">構築</div>
          </div>
          <div style="font-size: 2rem; color: var(--text-muted);">→</div>
          <div class="flex-col flex-center">
            <div class="flex-center" style="width: 150px; height: 170px; background: var(--accent); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); font-size: 3rem; font-weight: bold;">3</div>
            <div class="mt-md font-bold">開始</div>
          </div>
        </div>
      </div>
    `
  }
];
