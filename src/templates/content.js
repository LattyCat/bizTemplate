export const contentTemplates = [
  {
    name: "2カラムテキスト",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-primary mb-lg" style="font-size: 3rem;">市場機会</h2>
        <div class="grid-2">
          <div>
            <h3 class="mb-md">国内市場</h3>
            <p class="text-secondary" style="font-size: 1.5rem; line-height: 1.6;">
              国内市場は、世界的な経済の逆風にもかかわらず、回復力を示しています。テクノロジー分野における新製品の投入やデジタルサービスの普及により、個人消費は堅調に推移しています。
            </p>
          </div>
          <div>
            <h3 class="mb-md">海外展開</h3>
            <p class="text-secondary" style="font-size: 1.5rem; line-height: 1.6;">
              新興国市場は成長の大きな機会を提供しています。現地のニーズに合わせた製品開発と戦略的パートナーシップの構築により、これらの成長経済圏で大きなシェアを獲得することが可能です。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "3カラム特徴",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-light">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">主な特徴</h2>
        <div class="grid-3">
          <div class="card flex-col flex-center text-center p-md">
            <div class="text-primary mb-md" style="font-size: 3rem;">⚡</div>
            <h3 class="mb-sm">高速パフォーマンス</h3>
            <p class="text-secondary">あらゆるデバイスで速度と効率を最適化。</p>
          </div>
          <div class="card flex-col flex-center text-center p-md">
            <div class="text-primary mb-md" style="font-size: 3rem;">🔒</div>
            <h3 class="mb-sm">堅牢なセキュリティ</h3>
            <p class="text-secondary">エンタープライズグレードのセキュリティを標準装備。</p>
          </div>
          <div class="card flex-col flex-center text-center p-md">
            <div class="text-primary mb-md" style="font-size: 3rem;">∞</div>
            <h3 class="mb-sm">スケーラビリティ</h3>
            <p class="text-secondary">ビジネスの成長に合わせて拡張可能。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "ビッグ・クオート",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-primary text-white text-center">
        <div style="font-size: 8rem; line-height: 1; opacity: 0.3;">"</div>
        <h2 style="font-size: 3.5rem; font-weight: 300; font-style: italic; max-width: 900px; margin: -2rem auto 2rem;">
          イノベーションは、リーダーとフォロワーを区別する。
        </h2>
        <div class="flex-center flex-col">
          <div style="width: 50px; height: 2px; background: white; margin-bottom: 1rem;"></div>
          <p style="font-size: 1.5rem; font-weight: bold;">スティーブ・ジョブズ</p>
        </div>
      </div>
    `
  },
  {
    name: "サイドバー付きテキスト",
    render: () => `
      <div class="slide-container grid-sidebar bg-white">
        <div class="bg-light p-lg flex-col justify-center">
          <h2 class="text-primary" style="font-size: 3rem;">重要な<br>ポイント</h2>
          <div class="mt-lg" style="width: 50px; height: 5px; background: var(--accent);"></div>
        </div>
        <div class="p-lg flex-col justify-center">
          <ul style="list-style: none; font-size: 1.75rem; line-height: 2;">
            <li class="flex-center justify-start">
              <span class="text-success mr-2">✓</span> 売上が前年比25%増加
            </li>
            <li class="flex-center justify-start">
              <span class="text-success mr-2">✓</span> 顧客維持率98%を達成
            </li>
            <li class="flex-center justify-start">
              <span class="text-success mr-2">✓</span> 3つの新製品をリリース
            </li>
            <li class="flex-center justify-start">
              <span class="text-success mr-2">✓</span> 新たに2つの地域へ進出
            </li>
          </ul>
        </div>
      </div>
    `
  },
  {
    name: "アイコン付きリスト",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">選ばれる理由</h2>
        <div class="grid-2">
          <div class="flex-col" style="gap: 2rem;">
            <div class="flex-center justify-start">
              <div class="bg-primary-light p-sm rounded" style="border-radius: 8px; margin-right: 1rem;">🚀</div>
              <div>
                <h3 class="text-primary">迅速な導入</h3>
                <p class="text-secondary">数分でセットアップが完了します。</p>
              </div>
            </div>
            <div class="flex-center justify-start">
              <div class="bg-primary-light p-sm rounded" style="border-radius: 8px; margin-right: 1rem;">💡</div>
              <div>
                <h3 class="text-primary">高度な分析</h3>
                <p class="text-secondary">データから深い洞察を得られます。</p>
              </div>
            </div>
          </div>
          <div class="flex-col" style="gap: 2rem;">
            <div class="flex-center justify-start">
              <div class="bg-primary-light p-sm rounded" style="border-radius: 8px; margin-right: 1rem;">🛡️</div>
              <div>
                <h3 class="text-primary">最高水準のセキュリティ</h3>
                <p class="text-secondary">データは安全に保護されます。</p>
              </div>
            </div>
            <div class="flex-center justify-start">
              <div class="bg-primary-light p-sm rounded" style="border-radius: 8px; margin-right: 1rem;">🤝</div>
              <div>
                <h3 class="text-primary">24時間サポート</h3>
                <p class="text-secondary">いつでも必要な時にサポートします。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "比較表",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">プラン比較</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e2e8f0; border: 1px solid #e2e8f0;">
          <div class="bg-white p-md font-bold text-center">機能</div>
          <div class="bg-white p-md font-bold text-center text-primary">Pro</div>
          <div class="bg-white p-md font-bold text-center">Enterprise</div>
          
          <div class="bg-white p-md">ユーザー数</div>
          <div class="bg-white p-md text-center">50名まで</div>
          <div class="bg-white p-md text-center">無制限</div>
          
          <div class="bg-white p-md">ストレージ</div>
          <div class="bg-white p-md text-center">1TB</div>
          <div class="bg-white p-md text-center">無制限</div>
          
          <div class="bg-white p-md">サポート</div>
          <div class="bg-white p-md text-center">メール</div>
          <div class="bg-white p-md text-center">24時間電話</div>
          
          <div class="bg-white p-md">分析機能</div>
          <div class="bg-white p-md text-center">基本</div>
          <div class="bg-white p-md text-center">高度</div>
        </div>
      </div>
    `
  },
  {
    name: "課題と解決策",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div class="p-lg flex-col justify-center bg-light" style="border-right: 1px solid #e2e8f0;">
          <h2 class="text-danger mb-md" style="font-size: 2.5rem;">課題</h2>
          <ul class="text-secondary" style="font-size: 1.5rem; line-height: 1.8;">
            <li>非効率なワークフロー</li>
            <li>高い運用コスト</li>
            <li>可視性の欠如</li>
            <li>顧客満足度の低下</li>
          </ul>
        </div>
        <div class="p-lg flex-col justify-center">
          <h2 class="text-success mb-md" style="font-size: 2.5rem;">解決策</h2>
          <ul class="text-secondary" style="font-size: 1.5rem; line-height: 1.8;">
            <li>プロセスの自動化</li>
            <li>コストを30%削減</li>
            <li>リアルタイムダッシュボード</li>
            <li>NPSスコアの向上</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    name: "縦型プロセス",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">導入ステップ</h2>
        <div class="flex-col" style="gap: 1rem;">
          <div class="card flex-center justify-start p-md bg-light">
            <div class="badge badge-primary mr-2" style="font-size: 1.5rem; padding: 0.5rem 1rem;">1</div>
            <div style="font-size: 1.5rem;">初回コンサルティング・要件定義</div>
          </div>
          <div class="card flex-center justify-start p-md bg-light">
            <div class="badge badge-primary mr-2" style="font-size: 1.5rem; padding: 0.5rem 1rem;">2</div>
            <div style="font-size: 1.5rem;">システム設計・アーキテクチャ策定</div>
          </div>
          <div class="card flex-center justify-start p-md bg-light">
            <div class="badge badge-primary mr-2" style="font-size: 1.5rem; padding: 0.5rem 1rem;">3</div>
            <div style="font-size: 1.5rem;">開発・テストフェーズ</div>
          </div>
          <div class="card flex-center justify-start p-md bg-light">
            <div class="badge badge-primary mr-2" style="font-size: 1.5rem; padding: 0.5rem 1rem;">4</div>
            <div style="font-size: 1.5rem;">デプロイ・トレーニング</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "統計ハイライト",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div class="p-lg flex-col justify-center">
          <h2 class="text-main mb-md" style="font-size: 3rem;">ユーザー成長</h2>
          <p class="text-secondary" style="font-size: 1.5rem;">
            新しいマーケティングキャンペーンと製品の改善により、過去四半期でユーザーベースが指数関数的に増加しました。
          </p>
        </div>
        <div class="bg-primary p-lg flex-col flex-center text-white text-center">
          <div style="font-size: 8rem; font-weight: 900;">+150%</div>
          <div style="font-size: 2rem;">新規ユーザー</div>
        </div>
      </div>
    `
  },
  {
    name: "SWOT分析",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-center mb-md" style="font-size: 3rem;">SWOT分析</h2>
        <div class="grid-2" style="gap: 1rem;">
          <div class="card bg-light p-md">
            <h3 class="text-primary mb-sm">強み (Strengths)</h3>
            <ul class="text-secondary">
              <li>強力なブランド認知度</li>
              <li>革新的な技術力</li>
            </ul>
          </div>
          <div class="card bg-light p-md">
            <h3 class="text-danger mb-sm">弱み (Weaknesses)</h3>
            <ul class="text-secondary">
              <li>限定的なグローバル展開</li>
              <li>高い価格設定</li>
            </ul>
          </div>
          <div class="card bg-light p-md">
            <h3 class="text-success mb-sm">機会 (Opportunities)</h3>
            <ul class="text-secondary">
              <li>新興国市場への進出</li>
              <li>戦略的パートナーシップ</li>
            </ul>
          </div>
          <div class="card bg-light p-md">
            <h3 class="text-secondary mb-sm">脅威 (Threats)</h3>
            <ul class="text-secondary">
              <li>新規参入競合</li>
              <li>法規制の変更</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    name: "ミニマルテキスト（中央）",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center text-center bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3.5rem;">ミッション</h2>
        <p class="text-secondary" style="font-size: 2.5rem; line-height: 1.5; max-width: 1000px; margin: 0 auto;">
          地球上のすべての個人とすべての組織が、より多くのことを達成できるようにする。
        </p>
      </div>
    `
  },
  {
    name: "画像（左）テキスト（右）",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div style="background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        <div class="p-lg flex-col justify-center">
          <h2 class="text-main mb-md" style="font-size: 3rem;">チームコラボレーション</h2>
          <p class="text-secondary mb-md" style="font-size: 1.5rem;">
            効果的なコラボレーションが成功の鍵です。アイデアを自由に共有し、全員の声が届く環境を育んでいます。
          </p>
          <button class="btn btn-primary" style="width: fit-content;">詳細を見る</button>
        </div>
      </div>
    `
  },
  {
    name: "テキスト（左）画像（右）",
    render: () => `
      <div class="slide-container grid-2 bg-white">
        <div class="p-lg flex-col justify-center">
          <h2 class="text-main mb-md" style="font-size: 3rem;">持続可能な未来</h2>
          <p class="text-secondary mb-md" style="font-size: 1.5rem;">
            私たちは、二酸化炭素排出量を削減し、すべての事業活動において持続可能な慣行を推進することに取り組んでいます。
          </p>
          <ul class="text-secondary" style="font-size: 1.2rem;">
            <li>• 100% 再生可能エネルギー</li>
            <li>• 廃棄物ゼロポリシー</li>
          </ul>
        </div>
        <div style="background: url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
      </div>
    `
  },
  {
    name: "グラデーションカード",
    render: () => `
      <div class="slide-container p-lg flex-col justify-center bg-light">
        <div class="card p-lg text-white text-center" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); max-width: 900px; margin: 0 auto;">
          <h2 class="mb-md" style="font-size: 3rem;">特別なお知らせ</h2>
          <p style="font-size: 1.75rem;">
            業界の新たな基準を打ち立てる、当社の新しいフラッグシップ製品の発売を発表できることを嬉しく思います。
          </p>
        </div>
      </div>
    `
  },
  {
    name: "縦型タイムライン",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">沿革</h2>
        <div class="grid-3" style="gap: 2rem;">
          <div class="flex-col">
            <div class="text-primary font-bold" style="font-size: 2rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 1rem;">2010</div>
            <p class="text-secondary" style="font-size: 1.25rem;">世界を変えるというビジョンを掲げ、ガレージで創業。</p>
          </div>
          <div class="flex-col">
            <div class="text-primary font-bold" style="font-size: 2rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 1rem;">2015</div>
            <p class="text-secondary" style="font-size: 1.25rem;">ユーザー数100万人を突破し、ヨーロッパへ進出。</p>
          </div>
          <div class="flex-col">
            <div class="text-primary font-bold" style="font-size: 2rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 1rem;">2020</div>
            <p class="text-secondary" style="font-size: 1.25rem;">ニューヨーク証券取引所に上場。</p>
          </div>
        </div>
      </div>
    `
  }
];
