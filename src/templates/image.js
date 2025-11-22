export const imageTemplates = [
  {
    name: "フルスクリーン画像",
    render: () => `
      <div class="slide-container flex-col justify-end p-lg" style="background: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80') center center/cover; color: white;">
        <div style="background: rgba(0,0,0,0.6); padding: 2rem; border-radius: 8px; backdrop-filter: blur(5px); max-width: 800px;">
          <h2 style="font-size: 3rem;">自然の美</h2>
          <p style="font-size: 1.5rem;">大自然を探検し、荒野の中で安らぎを見つける。</p>
        </div>
      </div>
    `
  },
  {
    name: "メイソンリーグリッド",
    render: () => `
      <div class="slide-container p-lg flex-col bg-white">
        <h2 class="text-main mb-md" style="font-size: 3rem;">ギャラリー</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 250px); gap: 1rem;">
          <div style="background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center center/cover; grid-row: span 2;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1501854140884-074bf6b243e7?auto=format&fit=crop&w=800&q=80') center center/cover;"></div>
          <div style="background: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80') center center/cover; grid-column: span 2;"></div>
        </div>
      </div>
    `
  },
  {
    name: "画像とキャプション（下）",
    render: () => `
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
    `
  },
  {
    name: "3枚の縦長画像",
    render: () => `
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
    `
  },
  {
    name: "円形画像",
    render: () => `
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
    `
  },
  {
    name: "ポラロイド風",
    render: () => `
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
    `
  },
  {
    name: "画像スライダー風",
    render: () => `
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
    `
  },
  {
    name: "モザイク",
    render: () => `
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
    `
  },
  {
    name: "ヒーローとカード",
    render: () => `
      <div class="slide-container flex-col justify-center p-lg" style="background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80') center center/cover;">
        <div class="card p-lg" style="max-width: 500px; margin-left: auto; margin-right: 4rem;">
          <h2 class="text-primary mb-md" style="font-size: 2.5rem;">オフィス文化</h2>
          <p class="text-secondary" style="font-size: 1.25rem; line-height: 1.6;">
            創造性とコラボレーションを刺激するワークスペースを作ることは、現代のビジネスにとって不可欠です。
          </p>
          <button class="btn btn-primary mt-md">続きを読む</button>
        </div>
      </div>
    `
  },
  {
    name: "デバイスモックアップ",
    render: () => `
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
    `
  }
];
