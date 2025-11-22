export const endTemplates = [
  {
    name: "チームグリッド",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">チーム紹介</h2>
        <div class="grid-3" style="gap: 2rem;">
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">佐藤 健</h3>
            <p class="text-muted">プロダクトマネージャー</p>
          </div>
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">鈴木 一郎</h3>
            <p class="text-muted">リードエンジニア</p>
          </div>
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">高橋 愛</h3>
            <p class="text-muted">UXデザイナー</p>
          </div>
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">田中 誠</h3>
            <p class="text-muted">マーケティング</p>
          </div>
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">伊藤 花子</h3>
            <p class="text-muted">セールス</p>
          </div>
          <div class="card flex-col flex-center text-center p-md bg-light">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: #cbd5e1; margin-bottom: 1rem;"></div>
            <h3 class="text-primary">渡辺 徹</h3>
            <p class="text-muted">サポート</p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "連絡先 (大)",
    render: () => `
      <div class="slide-container grid-2 bg-primary text-white">
        <div class="p-lg flex-col justify-center">
          <h2 style="font-size: 4rem;">お問い合わせ</h2>
          <p class="mt-md" style="font-size: 1.5rem; opacity: 0.9;">
            ご質問やコラボレーションのご相談など、お気軽にお問い合わせください。
          </p>
        </div>
        <div class="p-lg flex-col justify-center bg-white text-main" style="border-radius: 30px 0 0 30px;">
          <div class="flex-col" style="gap: 2rem;">
            <div class="flex-center justify-start">
              <div style="font-size: 2rem; margin-right: 1rem;">📧</div>
              <div style="font-size: 1.5rem;">hello@company.com</div>
            </div>
            <div class="flex-center justify-start">
              <div style="font-size: 2rem; margin-right: 1rem;">📞</div>
              <div style="font-size: 1.5rem;">03-1234-5678</div>
            </div>
            <div class="flex-center justify-start">
              <div style="font-size: 2rem; margin-right: 1rem;">📍</div>
              <div style="font-size: 1.5rem;">東京都渋谷区テックシティ 1-2-3</div>
            </div>
            <div class="flex-center justify-start">
              <div style="font-size: 2rem; margin-right: 1rem;">🌐</div>
              <div style="font-size: 1.5rem;">www.company.com</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "サンキュー (ミニマル)",
    render: () => `
      <div class="slide-container flex-col flex-center bg-white text-center">
        <h1 class="text-primary" style="font-size: 8rem; margin-bottom: 2rem;">Thank You</h1>
        <p class="text-secondary" style="font-size: 2rem;">ご清聴ありがとうございました</p>
        <div class="mt-lg flex-center" style="gap: 2rem;">
          <button class="btn btn-primary">資料ダウンロード</button>
          <button class="btn btn-outline">お問い合わせ</button>
        </div>
      </div>
    `
  },
  {
    name: "プロフィールスポットライト",
    render: () => `
      <div class="slide-container grid-sidebar bg-white">
        <div style="background: url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        <div class="p-lg flex-col justify-center">
          <h2 class="text-primary mb-sm" style="font-size: 4rem;">山田 太郎</h2>
          <h3 class="text-secondary mb-lg" style="font-size: 2rem;">代表取締役 CEO</h3>
          <p class="text-muted mb-lg" style="font-size: 1.5rem; line-height: 1.6;">
            "リーダーシップとは、指揮することではなく、任された人々をケアすることである。"
          </p>
          <div class="flex-center justify-start" style="gap: 1rem;">
            <div class="badge badge-primary">ビジョナリー</div>
            <div class="badge badge-primary">戦略家</div>
            <div class="badge badge-primary">リーダー</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "ソーシャルメディア",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-dark text-white text-center">
        <h2 class="mb-lg" style="font-size: 3rem;">フォローしてください</h2>
        <div class="flex-center" style="gap: 4rem;">
          <div class="flex-col flex-center">
            <div style="width: 100px; height: 100px; background: #1DA1F2; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🐦</div>
            <div class="mt-md font-bold">@company_jp</div>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 100px; height: 100px; background: #0077B5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem;">in</div>
            <div class="mt-md font-bold">/company-jp</div>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 100px; height: 100px; background: #E1306C; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem;">📷</div>
            <div class="mt-md font-bold">@company_life</div>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 100px; height: 100px; background: #FF0000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem;">▶️</div>
            <div class="mt-md font-bold">CompanyTV</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "引用 (終了)",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-light text-center">
        <div style="font-size: 4rem; color: var(--primary); margin-bottom: 2rem;">★ ★ ★ ★ ★</div>
        <h2 class="text-main" style="font-size: 3rem; font-style: italic; max-width: 900px; margin: 0 auto;">
          "この製品は私たちの働き方を完全に変えました。強くお勧めします！"
        </h2>
        <div class="mt-lg flex-center">
          <div style="width: 60px; height: 60px; background: #cbd5e1; border-radius: 50%; margin-right: 1rem;"></div>
          <div class="text-left">
            <div class="font-bold text-lg">ジェーン・クーパー</div>
            <div class="text-muted">CEO, BigCorp</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "パートナーロゴ",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white text-center">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">導入企業</h2>
        <div class="grid-3" style="gap: 4rem; opacity: 0.6;">
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 1</div>
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 2</div>
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 3</div>
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 4</div>
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 5</div>
          <div class="flex-center" style="font-size: 2rem; font-weight: bold; color: var(--secondary);">LOGO 6</div>
        </div>
      </div>
    `
  },
  {
    name: "ネクストステップ",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div class="bg-primary p-lg flex-col justify-center text-white">
          <h2 style="font-size: 4rem;">次のステップ</h2>
        </div>
        <div class="p-lg flex-col justify-center">
          <div class="flex-col" style="gap: 2rem;">
            <div class="flex-center justify-start">
              <div class="badge badge-primary mr-2" style="font-size: 1.5rem;">1</div>
              <div style="font-size: 1.5rem;">契約締結</div>
            </div>
            <div class="flex-center justify-start">
              <div class="badge badge-primary mr-2" style="font-size: 1.5rem;">2</div>
              <div style="font-size: 1.5rem;">キックオフミーティング</div>
            </div>
            <div class="flex-center justify-start">
              <div class="badge badge-primary mr-2" style="font-size: 1.5rem;">3</div>
              <div style="font-size: 1.5rem;">プロジェクト開始</div>
            </div>
          </div>
          <button class="btn btn-primary mt-lg">始めましょう</button>
        </div>
      </div>
    `
  },
  {
    name: "QRコード連絡先",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-white text-center">
        <h2 class="text-main mb-md" style="font-size: 3rem;">スキャンして接続</h2>
        <p class="text-secondary mb-lg" style="font-size: 1.5rem;">完全なレポートと連絡先をダウンロードしてください。</p>
        <div style="width: 300px; height: 300px; background: #e2e8f0; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--text-muted);">
          [QR CODE]
        </div>
      </div>
    `
  },
  {
    name: "ブランド (終了)",
    render: () => `
      <div class="slide-container flex-col flex-center bg-primary text-white">
        <div style="width: 150px; height: 150px; background: white; border-radius: 20px; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center;">
          <span style="color: var(--primary); font-size: 4rem; font-weight: bold;">B</span>
        </div>
        <h1 style="font-size: 5rem; font-weight: 900; letter-spacing: 5px;">BIZTEMPLATE</h1>
        <p class="mt-md" style="font-size: 1.5rem; letter-spacing: 2px;">PREMIUM SLIDE SOLUTIONS</p>
        <div style="position: absolute; bottom: 2rem; font-size: 1rem; opacity: 0.6;">© 2024 BizTemplate Inc. All rights reserved.</div>
      </div>
    `
  }
];
