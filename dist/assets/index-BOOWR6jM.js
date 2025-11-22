(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const x=[{name:"モダン・ミニマル",render:()=>`
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
    `},{name:"ボールド・スプリット",render:()=>`
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
    `},{name:"ダーク・グラデーション",render:()=>`
      <div class="slide-container p-lg flex-col justify-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white;">
        <div style="border-left: 8px solid var(--accent); padding-left: 2rem;">
          <h1 style="font-size: 6rem; line-height: 1;">プロジェクト<br>アルファ</h1>
        </div>
        <p class="mt-md text-muted" style="font-size: 1.5rem; margin-left: 2.5rem;">デジタルランドスケープの再定義</p>
      </div>
    `},{name:"センター・ヒーロー",render:()=>`
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
    `},{name:"画像オーバーレイ",render:()=>`
      <div class="slide-container p-lg flex-col justify-end" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80') no-repeat center center; background-size: cover; color: white;">
        <h1 style="font-size: 5rem; text-shadow: 0 4px 6px rgba(0,0,0,0.3);">グローバルサミット</h1>
        <p class="mt-sm" style="font-size: 2rem; font-weight: 300;">イノベーションで世界をつなぐ</p>
        <div style="width: 100%; height: 1px; background: rgba(255,255,255,0.3); margin-top: 2rem;"></div>
        <div class="flex-center justify-between mt-sm" style="font-size: 1.2rem; opacity: 0.8;">
          <span>東京, 日本</span>
          <span>2024年11月22日</span>
        </div>
      </div>
    `},{name:"テック・ジオメトリック",render:()=>`
      <div class="slide-container bg-white" style="position: relative;">
        <div style="position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: #f1f5f9; clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);"></div>
        <div class="p-lg flex-col justify-center h-full" style="position: relative; z-index: 1;">
          <h1 class="text-primary" style="font-size: 5.5rem; font-weight: 800; letter-spacing: -2px;">TECH<br>VISION</h1>
          <p class="text-secondary mt-md" style="font-size: 1.75rem; max-width: 600px;">AIと機械学習の境界線を拡張する</p>
          <button class="btn btn-primary mt-lg" style="width: fit-content;">プレゼンテーション開始</button>
        </div>
      </div>
    `},{name:"エレガント・セリフ",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-white text-center">
        <div style="border: 2px solid var(--text-main); padding: 4rem; display: inline-block; margin: 0 auto;">
          <h1 style="font-family: serif; font-size: 4.5rem; font-weight: 400;">The Collection</h1>
          <p class="mt-sm" style="font-family: serif; font-style: italic; font-size: 2rem; color: var(--text-muted);">2024 秋冬コレクション</p>
        </div>
      </div>
    `},{name:"バイブラント・ダイアゴナル",render:()=>`
      <div class="slide-container flex-col justify-center bg-primary" style="overflow: hidden;">
        <div style="position: absolute; top: -50%; left: -20%; width: 200%; height: 200%; background: white; transform: rotate(-15deg); transform-origin: center;"></div>
        <div class="p-lg" style="position: relative; z-index: 1; text-align: right;">
          <h1 class="text-primary" style="font-size: 6rem; font-weight: 900;">IMPACT</h1>
          <h2 class="text-secondary" style="font-size: 3rem;">REPORT</h2>
          <p class="text-muted mt-md" style="font-size: 1.5rem;">地域社会への貢献と変革</p>
        </div>
      </div>
    `},{name:"コーポレート・ブルー",render:()=>`
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
    `},{name:"クリエイティブ・ブロブ",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-light" style="position: relative; overflow: hidden;">
        <div style="position: absolute; top: -100px; right: -100px; width: 600px; height: 600px; background: #bfdbfe; border-radius: 50%; filter: blur(80px); opacity: 0.5;"></div>
        <div style="position: absolute; bottom: -100px; left: -100px; width: 500px; height: 500px; background: #fca5a5; border-radius: 50%; filter: blur(80px); opacity: 0.5;"></div>
        
        <div style="position: relative; z-index: 1;">
          <h1 class="text-main" style="font-size: 5.5rem; font-weight: 800;">Creative<br><span class="text-primary">Solutions</span></h1>
          <p class="text-secondary mt-md" style="font-size: 2rem; max-width: 700px;">既成概念にとらわれない発想で、最高の結果を。</p>
        </div>
      </div>
    `}],y=[{name:"シンプルリスト",render:()=>`
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
    `},{name:"タイムライン（横）",render:()=>`
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
    `},{name:"グリッドカード",render:()=>`
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
    `},{name:"画像付きアジェンダ",render:()=>`
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
    `},{name:"ヘキサゴンステップ",render:()=>`
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
    `}],b=[{name:"2カラムテキスト",render:()=>`
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
    `},{name:"3カラム特徴",render:()=>`
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
    `},{name:"ビッグ・クオート",render:()=>`
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
    `},{name:"サイドバー付きテキスト",render:()=>`
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
    `},{name:"アイコン付きリスト",render:()=>`
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
    `},{name:"比較表",render:()=>`
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
    `},{name:"課題と解決策",render:()=>`
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
    `},{name:"縦型プロセス",render:()=>`
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
    `},{name:"統計ハイライト",render:()=>`
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
    `},{name:"SWOT分析",render:()=>`
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
    `},{name:"ミニマルテキスト（中央）",render:()=>`
      <div class="slide-container p-lg flex-col justify-center text-center bg-white">
        <h2 class="text-main mb-lg" style="font-size: 3.5rem;">ミッション</h2>
        <p class="text-secondary" style="font-size: 2.5rem; line-height: 1.5; max-width: 1000px; margin: 0 auto;">
          地球上のすべての個人とすべての組織が、より多くのことを達成できるようにする。
        </p>
      </div>
    `},{name:"画像（左）テキスト（右）",render:()=>`
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
    `},{name:"テキスト（左）画像（右）",render:()=>`
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
    `},{name:"グラデーションカード",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-light">
        <div class="card p-lg text-white text-center" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); max-width: 900px; margin: 0 auto;">
          <h2 class="mb-md" style="font-size: 3rem;">特別なお知らせ</h2>
          <p style="font-size: 1.75rem;">
            業界の新たな基準を打ち立てる、当社の新しいフラッグシップ製品の発売を発表できることを嬉しく思います。
          </p>
        </div>
      </div>
    `},{name:"縦型タイムライン",render:()=>`
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
    `}],u=[{name:"フルスクリーン画像",render:()=>`
      <div class="slide-container flex-col justify-end p-lg" style="background: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80') center center/cover; color: white;">
        <div style="background: rgba(0,0,0,0.6); padding: 2rem; border-radius: 8px; backdrop-filter: blur(5px); max-width: 800px;">
          <h2 style="font-size: 3rem;">自然の美</h2>
          <p style="font-size: 1.5rem;">大自然を探検し、荒野の中で安らぎを見つける。</p>
        </div>
      </div>
    `},{name:"メイソンリーグリッド",render:()=>`
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-md" style="font-size: 3rem;">ギャラリー</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 250px); gap: 1rem;">
          <div style="background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center center/cover; grid-row: span 2;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1501854140884-074bf6b243e7?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80') center center/cover; grid-column: span 2;"></div>
        </div>
      </div>
    `},{name:"画像とキャプション（下）",render:()=>`
      <div class="slide-container flex-col bg-white">
        <div style="flex-grow: 1; background: url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80') center center/cover;"></div>
        <div class="p-lg bg-white flex-center justify-between">
          <div>
            <h2 class="text-main" style="font-size: 2rem;">山岳遠征</h2>
            <p class="text-secondary">2024年8月</p>
          </div>
          <div class="text-muted" style="font-size: 1.25rem; max-width: 600px; text-align: right;">
            "頂上は旅の始まりに過ぎない。"
          </div>
        </div>
      </div>
    `},{name:"3枚の縦長画像",render:()=>`
      <div class="slide-container grid-3 bg-white" style="gap: 0;">
        <div style="background: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80') center center/cover; position: relative;">
          <div class="flex-center h-full" style="background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s; color: white; font-size: 2rem; font-weight: bold;">冒険</div>
        </div>
        <div style="background: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80') center center/cover; position: relative;">
          <div class="flex-center h-full" style="background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s; color: white; font-size: 2rem; font-weight: bold;">発見</div>
        </div>
        <div style="background: url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80') center center/cover; position: relative;">
          <div class="flex-center h-full" style="background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s; color: white; font-size: 2rem; font-weight: bold;">自由</div>
        </div>
      </div>
    `},{name:"円形画像",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-light text-center">
        <h2 class="text-main mb-lg" style="font-size: 3rem;">チームリーダー</h2>
        <div class="flex-center" style="gap: 4rem;">
          <div class="flex-col flex-center">
            <div style="width: 250px; height: 250px; border-radius: 50%; background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80') center center/cover; border: 5px solid white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"></div>
            <h3 class="mt-md text-primary">田中 健一</h3>
            <p class="text-muted">CEO</p>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 250px; height: 250px; border-radius: 50%; background: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80') center center/cover; border: 5px solid white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"></div>
            <h3 class="mt-md text-primary">佐藤 美咲</h3>
            <p class="text-muted">CTO</p>
          </div>
          <div class="flex-col flex-center">
            <div style="width: 250px; height: 250px; border-radius: 50%; background: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80') center center/cover; border: 5px solid white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"></div>
            <h3 class="mt-md text-primary">鈴木 大輔</h3>
            <p class="text-muted">COO</p>
          </div>
        </div>
      </div>
    `},{name:"ポラロイド風",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-white" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px;">
        <h2 class="text-center mb-lg" style="font-size: 3rem; font-family: 'Courier New', monospace;">思い出</h2>
        <div class="flex-center" style="gap: 2rem;">
          <div style="background: white; padding: 1rem 1rem 4rem 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform: rotate(-5deg);">
            <div style="width: 300px; height: 300px; background: url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80') center center/cover;"></div>
            <div class="text-center mt-sm font-bold" style="font-family: 'Courier New', monospace;">チンクエ・テッレ</div>
          </div>
          <div style="background: white; padding: 1rem 1rem 4rem 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform: rotate(3deg); z-index: 1;">
            <div style="width: 300px; height: 300px; background: url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=400&q=80') center center/cover;"></div>
            <div class="text-center mt-sm font-bold" style="font-family: 'Courier New', monospace;">ヴェネツィア</div>
          </div>
          <div style="background: white; padding: 1rem 1rem 4rem 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform: rotate(-2deg);">
            <div style="width: 300px; height: 300px; background: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=400&q=80') center center/cover;"></div>
            <div class="text-center mt-sm font-bold" style="font-family: 'Courier New', monospace;">アルプス</div>
          </div>
        </div>
      </div>
    `},{name:"画像スライダー風",render:()=>`
      <div class="slide-container flex-col bg-dark text-white">
        <div class="grid-2 h-full">
          <div class="p-lg flex-col justify-center">
            <h2 style="font-size: 4rem;">建築の驚異</h2>
            <p class="mt-md text-muted" style="font-size: 1.5rem;">モダンデザインと機能性の融合。</p>
            <div class="flex-center justify-start mt-lg" style="gap: 1rem;">
              <div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div>
              <div style="width: 10px; height: 10px; background: rgba(255,255,255,0.3); border-radius: 50%;"></div>
              <div style="width: 10px; height: 10px; background: rgba(255,255,255,0.3); border-radius: 50%;"></div>
            </div>
          </div>
          <div style="background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        </div>
      </div>
    `},{name:"モザイク",render:()=>`
      <div class="slide-container bg-white" style="display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr; height: 100%;">
        <div style="background: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80') center center/cover; grid-row: span 2; padding: 2rem; display: flex; align-items: flex-end;">
          <h2 class="text-white" style="font-size: 3rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">データ分析</h2>
        </div>
        <div style="background: url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        <div style="background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
        <div style="background: var(--primary); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">
          採用情報
        </div>
        <div style="background: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
      </div>
    `},{name:"ヒーローとカード",render:()=>`
      <div class="slide-container flex-col justify-center p-lg" style="background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80') center center/cover;">
        <div class="card p-lg" style="max-width: 500px; margin-left: auto; margin-right: 4rem;">
          <h2 class="text-primary mb-md" style="font-size: 2.5rem;">オフィス文化</h2>
          <p class="text-secondary" style="font-size: 1.25rem; line-height: 1.6;">
            創造性とコラボレーションを刺激するワークスペースを作ることは、現代のビジネスにとって不可欠です。
          </p>
          <button class="btn btn-primary mt-md">続きを読む</button>
        </div>
      </div>
    `},{name:"デバイスモックアップ",render:()=>`
      <div class="slide-container grid-2 bg-light">
        <div class="p-lg flex-col justify-center">
          <h2 class="text-main mb-md" style="font-size: 3rem;">モバイルファースト</h2>
          <p class="text-secondary" style="font-size: 1.5rem;">
            レスポンシブデザインにより、すべてのデバイスでシームレスな統合を体験してください。
          </p>
        </div>
        <div class="flex-center">
          <div style="width: 300px; height: 600px; background: white; border: 10px solid #334155; border-radius: 30px; position: relative; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);">
            <div style="width: 100%; height: 100%; background: url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80') center center/cover;"></div>
          </div>
        </div>
      </div>
    `}],w=[{name:"ビッグナンバー",render:()=>`
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
    `},{name:"棒グラフ (CSS)",render:()=>`
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
    `},{name:"円グラフ (プレースホルダー)",render:()=>`
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
    `},{name:"プログレスバー",render:()=>`
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
    `},{name:"ファネルチャート",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">セールスファネル</h2>
        <div class="flex-col flex-center">
          <div style="width: 800px; height: 80px; background: var(--primary-dark); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">リード (10,000)</div>
          <div style="width: 700px; height: 80px; background: var(--primary); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">見込み客 (5,000)</div>
          <div style="width: 600px; height: 80px; background: var(--primary-light); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">商談化 (2,000)</div>
          <div style="width: 500px; height: 80px; background: var(--accent); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);">顧客 (500)</div>
        </div>
      </div>
    `},{name:"世界地図ポイント",render:()=>`
      <div class="slide-container p-lg flex-col bg-dark text-white">
        <h2 class="text-center mb-lg" style="font-size: 3rem;">グローバル展開</h2>
        <div style="position: relative; width: 100%; height: 100%; background: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg') no-repeat center center; background-size: contain; filter: invert(1) opacity(0.2);">
          <div style="position: absolute; top: 30%; left: 25%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 35%; left: 48%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 40%; left: 75%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
          <div style="position: absolute; top: 70%; left: 80%; width: 20px; height: 20px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 20px var(--accent);"></div>
        </div>
      </div>
    `},{name:"比較カード",render:()=>`
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
    `},{name:"円形プログレス",render:()=>`
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
    `},{name:"エリアチャート (コンセプト)",render:()=>`
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
    `},{name:"アイコングリッドデータ",render:()=>`
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
    `}],z=[{name:"チームグリッド",render:()=>`
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
    `},{name:"連絡先 (大)",render:()=>`
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
    `},{name:"サンキュー (ミニマル)",render:()=>`
      <div class="slide-container flex-col flex-center bg-white text-center">
        <h1 class="text-primary" style="font-size: 8rem; margin-bottom: 2rem;">Thank You</h1>
        <p class="text-secondary" style="font-size: 2rem;">ご清聴ありがとうございました</p>
        <div class="mt-lg flex-center" style="gap: 2rem;">
          <button class="btn btn-primary">資料ダウンロード</button>
          <button class="btn btn-outline">お問い合わせ</button>
        </div>
      </div>
    `},{name:"プロフィールスポットライト",render:()=>`
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
    `},{name:"ソーシャルメディア",render:()=>`
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
    `},{name:"引用 (終了)",render:()=>`
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
    `},{name:"パートナーロゴ",render:()=>`
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
    `},{name:"ネクストステップ",render:()=>`
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
    `},{name:"QRコード連絡先",render:()=>`
      <div class="slide-container p-lg flex-col justify-center bg-white text-center">
        <h2 class="text-main mb-md" style="font-size: 3rem;">スキャンして接続</h2>
        <p class="text-secondary mb-lg" style="font-size: 1.5rem;">完全なレポートと連絡先をダウンロードしてください。</p>
        <div style="width: 300px; height: 300px; background: #e2e8f0; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--text-muted);">
          [QR CODE]
        </div>
      </div>
    `},{name:"ブランド (終了)",render:()=>`
      <div class="slide-container flex-col flex-center bg-primary text-white">
        <div style="width: 150px; height: 150px; background: white; border-radius: 20px; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center;">
          <span style="color: var(--primary); font-size: 4rem; font-weight: bold;">B</span>
        </div>
        <h1 style="font-size: 5rem; font-weight: 900; letter-spacing: 5px;">BIZTEMPLATE</h1>
        <p class="mt-md" style="font-size: 1.5rem; letter-spacing: 2px;">PREMIUM SLIDE SOLUTIONS</p>
        <div style="position: absolute; bottom: 2rem; font-size: 1rem; opacity: 0.6;">© 2024 BizTemplate Inc. All rights reserved.</div>
      </div>
    `}],p={"Title & Cover":x,"Agenda & Structure":y,"Content & Text":b,"Visuals & Gallery":u,"Data & Infographics":w,"Team & Closing":z},m=document.getElementById("template-list"),v=document.getElementById("slide-viewport"),g=document.getElementById("prev-btn"),h=document.getElementById("next-btn"),n=document.getElementById("copy-btn");let a=0,l=[];function k(){j(),l.length>0&&o(0),g.addEventListener("click",()=>{a>0&&o(a-1)}),h.addEventListener("click",()=>{a<l.length-1&&o(a+1)}),n.addEventListener("click",()=>{const i=v.innerHTML;navigator.clipboard.writeText(i).then(()=>{const s=n.innerText;n.innerText="Copied!",setTimeout(()=>n.innerText=s,2e3)})}),window.addEventListener("resize",f),f()}function j(){m.innerHTML="",l=[],Object.keys(p).forEach(i=>{const s=document.createElement("div");s.className="category-header",s.innerText=i,m.appendChild(s),p[i].forEach((r,d)=>{const e=l.length;l.push({...r,category:i});const t=document.createElement("div");t.className="template-item",t.innerText=r.name,t.dataset.index=e,t.addEventListener("click",()=>o(e)),m.appendChild(t)})})}function o(i){var r;a=i;const s=l[i];document.querySelectorAll(".template-item").forEach(d=>d.classList.remove("active")),(r=document.querySelector(`.template-item[data-index="${i}"]`))==null||r.classList.add("active"),v.innerHTML=s.render(),g.disabled=i===0,h.disabled=i===l.length-1}function f(){const i=document.getElementById("main"),s=(i.clientWidth-40)/1280,r=(i.clientHeight-100)/720,d=Math.min(s,r,1);v.style.transform=`scale(${d})`}k();
