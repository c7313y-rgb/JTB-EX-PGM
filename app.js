const modeContent = {
  travel: {
    title: "① 修学旅行組込型",
    short: "修学旅行組込型",
    lead: "タビマエ2〜3コマ、東京での企業共創学習1日、タビアト1コマを基本に、修学旅行の中1日を探究学習へ転換します。",
    quoteLead: "企業、テーマ、行程、人数をその場で組み合わせ、修学旅行提案の一部として概算化できます。"
  },
  class: {
    title: "② 通常授業組込型",
    short: "通常授業組込型",
    lead: "企業とテーマ、実施可能コマ数、希望日を選ぶだけで概算化。通常授業や総合的な探究へ導入しやすいデモ構成です。",
    quoteLead: "校内実施を前提に、企業テーマ、コマ数、人数、希望日から授業提案を即時見積化できます。"
  }
};

const partnerLogos = [
  "JTB",
  "三越伊勢丹",
  "GAMZA BATT",
  "BATT JP",
  "ITOKI",
  "フレーベル館",
  "日本気象協会",
  "Co-Creation Learning",
  "Tokyo Inquiry Program"
];

const programs = [
  {
    id: "mi-local-value",
    mode: "travel",
    company: "三越伊勢丹",
    partnerType: "百貨店・小売・地域産品",
    wordmark: "MITSUKOSHI ISETAN",
    title: "LOCAL VALUE STUDIO | 高校生地域バイヤー体験 in 東京",
    tagline: "地域産品の価値を、東京の顧客体験へ翻訳する1日。",
    theme: "地域産品の価値発掘・売場企画・顧客提案",
    themeCategory: "地域価値創造",
    location: "銀座・日本橋エリアの百貨店関連施設を想定",
    season: "通年（繁忙期除く）",
    grades: ["中3", "高1", "高2"],
    capacityMin: 40,
    capacityMax: 160,
    minStudents: 80,
    defaultStudents: 120,
    before: 3,
    beforeOptions: [2, 3],
    after: 1,
    afterOptions: [1, 2],
    duringLabel: "タビナカ東京1日",
    basePerStudent: 7800,
    fixedFee: 360000,
    preKomaFee: 35000,
    duringFee: 180000,
    afterKomaFee: 25000,
    splitGroupFee: 120000,
    summary: "地方校の産品や観光資源を題材に、百貨店ならではの顧客視点、売場編集、提案力を学ぶ共創型アクティブラーニングです。",
    tags: ["地域探究", "商品企画", "売場編集", "キャリア教育"],
    images: [
      "assets/demo/mi-store-main.png",
      "assets/demo/mi-store-gallery.png"
    ],
    galleryLabels: ["売場観察と企画発表", "商品編集ワークショップ"],
    sellingPoints: [
      "学校ごとの地域資源を題材に置き換えやすく、提案が学校固有化しやすい構成です。",
      "百貨店視点の顧客理解、売場設計、価値編集が一体となり、総合型選抜にもつながる成果物が残せます。",
      "修学旅行の現地体験を単なる見学で終わらせず、発表まで含む探究活動へ再設計できます。"
    ],
    outcomes: [
      "地域資源を顧客価値へ翻訳する視点",
      "売場観察から仮説を立てるリサーチ力",
      "企画書・ピッチへまとめる表現力"
    ],
    flow: [
      {
        phase: "タビマエ",
        title: "地域価値の仮説づくり",
        detail: "自校の地域産品、観光資源、文化を調査し、誰にどんな価値が届くかを整理します。"
      },
      {
        phase: "タビナカ午前",
        title: "売場と顧客導線の観察",
        detail: "現地で売場観察と顧客理解の視点を学び、商品の見せ方と体験価値の関係を掴みます。"
      },
      {
        phase: "タビナカ午後",
        title: "地域バイヤー企画の共創",
        detail: "百貨店メンターとともに、地域商品の打ち出し方、催事企画、訴求ストーリーをチーム提案します。"
      },
      {
        phase: "タビアト",
        title: "学校での還元と振り返り",
        detail: "学内共有、地域還元提案、進路やキャリアと結びつく振り返りへ接続します。"
      }
    ],
    experienceScenes: [
      "上質な売場で顧客導線を読み解き、商品の見せ方を観察するシーン",
      "地域産品の魅力を再編集し、催事やポップアップの仮説を作るシーン",
      "百貨店メンターへ提案し、その場でフィードバックを受けるシーン"
    ],
    deliverables: [
      "地域産品販促企画シート",
      "チーム別のミニピッチ資料",
      "学校・地域へ戻して使える振り返りレポート"
    ],
    note: "商業施設見学に探究活動を重ねる提案として説明しやすく、地域探究やキャリア教育との接続も明確です。修学旅行提案書の中で『東京でしかできない学び』として差別化できます。"
  },
  {
    id: "itoki-workplace",
    mode: "travel",
    company: "イトーキ",
    partnerType: "オフィス・空間デザイン",
    wordmark: "ITOKI",
    title: "WORKPLACE FUTURE QUEST | 未来の学び場・働き方デザイン",
    tagline: "オフィスの知見から、未来の学校と地域拠点を再設計する。",
    theme: "働く空間・学習空間・ウェルビーイングの共創",
    themeCategory: "空間デザイン",
    location: "東京オフィス、ショールーム、共創施設を想定",
    season: "通年",
    grades: ["中2", "中3", "高1", "高2"],
    capacityMin: 30,
    capacityMax: 120,
    minStudents: 70,
    defaultStudents: 100,
    before: 2,
    beforeOptions: [2, 3],
    after: 1,
    afterOptions: [1, 2],
    duringLabel: "タビナカ東京1日",
    basePerStudent: 6800,
    fixedFee: 320000,
    preKomaFee: 30000,
    duringFee: 170000,
    afterKomaFee: 25000,
    splitGroupFee: 100000,
    summary: "最新オフィスや共創空間を体験しながら、学校の学習環境や地域の居場所を自分たちで再設計するプログラムです。",
    tags: ["学校改革", "空間観察", "プロトタイピング", "ウェルビーイング"],
    images: [
      "assets/demo/itoki-office-main.png",
      "assets/demo/itoki-office-gallery.png"
    ],
    galleryLabels: ["ショールーム共創セッション", "未来の教室プロトタイプ"],
    sellingPoints: [
      "教室や探究スペースの改善提案へ直結するため、学校課題と提案内容が結びつきやすいテーマです。",
      "見学、観察、設計、発表の流れが明快で、営業現場でもプログラム価値を説明しやすい構成です。",
      "空間と行動の関係を扱うため、キャリア探究、学校改革、ウェルビーイングの文脈で幅広く提案できます。"
    ],
    outcomes: [
      "空間課題を発見する観察力",
      "利用者視点で試作するプロトタイピング力",
      "学校改善提案としてまとめる構想力"
    ],
    flow: [
      {
        phase: "タビマエ",
        title: "自校の空間課題を持ち込む",
        detail: "教室、探究スペース、職員室、図書室などの課題を写真や観察メモで整理します。"
      },
      {
        phase: "タビナカ午前",
        title: "未来の働き方と場づくりを体験",
        detail: "オフィスやショールームを見学し、空間がコミュニケーションや集中に与える影響を学びます。"
      },
      {
        phase: "タビナカ午後",
        title: "未来の学校・地域拠点を設計",
        detail: "家具、動線、活動シーンを踏まえながら、新しい学び場のモデルをチームで設計します。"
      },
      {
        phase: "タビアト",
        title: "学校改善提案へ転換",
        detail: "学校へ戻ってポスターや1枚企画書にまとめ、施設改善や探究環境改善の提案に展開します。"
      }
    ],
    experienceScenes: [
      "最新オフィスで働き方の変化を体感し、観察ポイントをメモするシーン",
      "家具や動線を試しながら、集中と協働のバランスを考えるシーン",
      "学校の未来像を模型や図面に落とし込んで発表するシーン"
    ],
    deliverables: [
      "未来の教室・学校空間提案シート",
      "チーム別ゾーニング案",
      "学校内で共有できる改善ポスター"
    ],
    note: "学校現場の課題感と相性が良く、施設設備だけでなく学びの質の話へつなげやすいプログラムです。修学旅行中の『企業共創型学習』として、説明の納得感を出しやすい題材です。"
  },
  {
    id: "gamza-field-to-flagship",
    mode: "travel",
    company: "カムジャバト × 三越伊勢丹",
    partnerType: "食品ブランド・百貨店・Z世代マーケティング",
    wordmark: "GAMZA BATT",
    title: "FIELD TO FLAGSHIP STORE | 畑から百貨店へ。カムジャバト探究プログラム",
    tagline: "韓国発のじゃがいもパンを題材に、売場・SNS・地域価値を提案する。",
    theme: "商品企画・売場POP・SNS企画・地域価値創出",
    themeCategory: "ブランド企画",
    location: "東京・横浜エリアの三越伊勢丹関連売場、POP UP、周辺フィールドを想定",
    season: "通年・ポップアップ時期調整可",
    grades: ["中3", "高1", "高2"],
    capacityMin: 20,
    capacityMax: 120,
    minStudents: 40,
    defaultStudents: 60,
    before: 4,
    beforeOptions: [2, 4, 6],
    after: 2,
    afterOptions: [1, 2, 3],
    duringLabel: "タビナカ90〜150分",
    basePerStudent: 7600,
    fixedFee: 340000,
    preKomaFee: 28000,
    duringFee: 165000,
    afterKomaFee: 26000,
    splitGroupFee: 90000,
    summary: "韓国発じゃがいもパン『カムジャバト』と三越伊勢丹の売場を題材に、商品企画、POP、SNS、地域価値創出を探究する修学旅行向けプログラムです。企業負担と学校負担を抑えつつ、Z世代インサイトまで残せる設計に最適化しています。",
    tags: ["商品企画", "売場観察", "SNS企画", "日韓交流"],
    images: [
      "assets/demo/gamza-travel-main.png",
      "assets/demo/gamza-travel-gallery.png"
    ],
    galleryLabels: ["売場観察とブランド研究", "POP・SNS企画ワークショップ"],
    sellingPoints: [
      "旅前2コマから導入できる軽量版と、探究成果が出やすい標準版の両方を提案できるため、学校ごとの授業枠に合わせやすい構成です。",
      "企業側は標準動画、資料提供、集約レビュー中心で運用できるため、受入負担を抑えながら教育旅行の共創価値を打ち出せます。",
      "商品企画、売場観察、SNS企画、地域食材連携まで話を広げられるので、JTB営業として差別化しやすいテーマです。"
    ],
    outcomes: [
      "売れる理由を顧客視点で読み解くマーケティング思考",
      "売場体験を観察して改善案へ変えるフィールドワーク力",
      "ブランド提案を企画書・POP・SNS案へ落とし込む表現力"
    ],
    flow: [
      {
        phase: "タビマエ",
        title: "ブランド・顧客・地域価値の仮説づくり",
        detail: "カムジャバトのブランド背景、農業・食・売場・Z世代消費を学び、チームごとに企画仮説と質問リストを準備します。"
      },
      {
        phase: "タビナカ",
        title: "売場観察と顧客体験分析",
        detail: "三越伊勢丹関連売場やPOP UPを観察し、陳列、接客、導線、撮影したくなる仕掛けを立体的に読み解きます。"
      },
      {
        phase: "タビアト前半",
        title: "POP・SNS・商品企画のブラッシュアップ",
        detail: "現地で得た気づきをもとに、限定味、売場POP、SNS企画、地域連携案へ再編集します。"
      },
      {
        phase: "タビアト後半",
        title: "企業に届く提案へ仕上げる",
        detail: "優秀案はJTB側で整理し、企業レビューや表彰、実装検討へつながる形にまとめます。"
      }
    ],
    experienceScenes: [
      "百貨店の食品売場やポップアップで、顧客導線と商品の見せ方を観察するシーン",
      "韓国発ブランドを日本の若者へどう届けるかを、POPやSNS企画で考えるシーン",
      "地域食材や修学旅行先の文脈を掛け合わせ、新しい商品体験を提案するシーン"
    ],
    deliverables: [
      "商品企画シートと売場POP案",
      "SNS・ショート動画企画案",
      "Z世代インサイト付きの最終提案資料"
    ],
    note: "参照LPの核である『畑から百貨店へ』のストーリーを保ちつつ、JTB営業用には学校運用の軽さと企業負担の明確さを前面化しました。修学旅行の中1日を、見学で終わらないブランド共創学習として提案できます。"
  },
  {
    id: "froebel-ai-literacy",
    mode: "class",
    company: "フレーベル館",
    partnerType: "出版・児童教育・AI表現",
    wordmark: "FROEBEL-KAN",
    title: "AIリテラシー × AI絵本メーカー | 創ることで学ぶ生成AI",
    tagline: "物語づくりを通じて、生成AIの可能性と注意点を学ぶ。",
    theme: "生成AIの安全な使い方・著作権・物語表現",
    themeCategory: "AIリテラシー",
    location: "学校教室、オンライン、ハイブリッド実施を想定",
    season: "通年",
    grades: ["小5", "小6", "中1", "中2", "中3", "高1"],
    capacityMin: 20,
    capacityMax: 120,
    minStudents: 40,
    defaultStudents: 40,
    komaOptions: [1, 2, 3, 4],
    basePerStudent: 4200,
    fixedFee: 180000,
    komaUnitFee: 45000,
    supportFee: 70000,
    supportFeeLabel: "教材・AI体験環境セットアップ費",
    splitGroupFee: 80000,
    summary: "生成AIを使って絵本づくりを体験しながら、情報モラル、著作権、事実確認、人間が担う編集の価値を学ぶ授業プログラムです。",
    tags: ["情報モラル", "創作", "国語連携", "探究基礎"],
    images: [
      "assets/demo/froebel-class-main.png",
      "assets/demo/froebel-class-gallery.png"
    ],
    galleryLabels: ["AI絵本づくりの教室実施", "発表とAI倫理ディスカッション"],
    sellingPoints: [
      "情報、総合、国語、キャリア教育まで横断的に提案しやすいテーマです。",
      "生成AIに不安を持つ学校に対して、体験しながらルールを学ぶ安全設計として説明できます。",
      "作品が残るため保護者や学校内共有にも向き、営業時に成果イメージを伝えやすい構成です。"
    ],
    outcomes: [
      "生成AIの仕組みと限界の理解",
      "プロンプト設計と表現改善の体験",
      "著作権、個人情報、引用の基礎理解"
    ],
    flow: [
      {
        phase: "1コマ目",
        title: "AIの得意と苦手を知る",
        detail: "例を見ながら、生成AIの出力がなぜ揺れるのか、どこを人が確認すべきかを学びます。"
      },
      {
        phase: "2コマ目",
        title: "物語と絵本の企画づくり",
        detail: "登場人物や読者を意識しながら、AIを使って絵本の構成やイラスト案を試作します。"
      },
      {
        phase: "3コマ目",
        title: "編集とルールづくり",
        detail: "著作権、引用、誤情報、偏りを踏まえ、人間の編集視点で表現を見直します。"
      },
      {
        phase: "4コマ目",
        title: "発表と振り返り",
        detail: "作品の意図とAI利用ルールを発表し、クラスとしての活用指針へつなげます。"
      }
    ],
    experienceScenes: [
      "タブレットでストーリーボードとイラスト案を試行錯誤するシーン",
      "AIが出した表現を人が直し、理由を話し合うシーン",
      "作品発表とあわせて責任ある使い方を共有するシーン"
    ],
    deliverables: [
      "AI絵本または絵本構成案",
      "クラスのAI活用ルール",
      "振り返りワークシート"
    ],
    note: "AI活用への関心が高い学校に対し、単なるツール体験ではなく『安心して導入する学び』として提案しやすいプログラムです。短時間導入から複数コマ展開まで幅を持たせられます。"
  },
  {
    id: "gamza-brand-studio",
    mode: "class",
    company: "GAMZA BATT / BATT JP",
    partnerType: "食品ブランド・マーケティング・日韓共創",
    wordmark: "GAMZA BATT",
    title: "BRAND STUDIO | カムジャバトで学ぶ商品企画とZ世代マーケティング",
    tagline: "売れる理由を読み解き、教室でブランド提案までつくる。",
    theme: "商品企画・売場POP・SNS企画・顧客インサイト",
    themeCategory: "ブランド企画",
    location: "学校教室、オンライン、商業科実習室、校内発表会を想定",
    season: "通年",
    grades: ["中3", "高1", "高2"],
    capacityMin: 20,
    capacityMax: 120,
    minStudents: 30,
    defaultStudents: 40,
    komaOptions: [2, 3, 4, 6],
    basePerStudent: 4500,
    fixedFee: 195000,
    komaUnitFee: 43000,
    supportFee: 80000,
    supportFeeLabel: "ブランド教材・レビュー設計費",
    splitGroupFee: 70000,
    summary: "カムジャバトをケーススタディに、商品企画、売場POP、SNS、地域価値創出を学ぶ通常授業向けプログラムです。教室完結型でもリアルなブランド視点が得られるよう、標準動画、資料、発表テンプレートを前提に再構成しています。",
    tags: ["商品企画", "SNS", "国際理解", "商業・探究"],
    images: [
      "assets/demo/gamza-class-main.png",
      "assets/demo/gamza-class-gallery.png"
    ],
    galleryLabels: ["教室でのブランド企画ワーク", "POP・SNS提案プレゼン"],
    sellingPoints: [
      "総合的な探究、商業、国際理解、キャリア教育へ横断接続しやすく、通常授業に無理なく組み込めます。",
      "標準動画と配布資料を前提にしているため、企業講師が毎回入らなくても授業化でき、学校側の準備負担を抑えられます。",
      "食品ブランド、百貨店、SNS、地域資源の複数視点を扱えるため、教室内でも社会とつながる学びとして説明しやすい構成です。"
    ],
    outcomes: [
      "商品やブランドを顧客視点で捉えるマーケティング基礎力",
      "POPやSNS企画に落とし込む企画編集力",
      "地域資源や異文化の文脈をブランド提案へ接続する構想力"
    ],
    flow: [
      {
        phase: "1コマ目",
        title: "ブランド理解と顧客仮説",
        detail: "カムジャバトのブランド背景、日韓の食文化、ターゲット顧客、売れる理由の仮説を整理します。"
      },
      {
        phase: "2コマ目",
        title: "売場POP・SNS企画づくり",
        detail: "顧客導線、写真を撮りたくなる仕掛け、ショート動画、UGCの観点から魅力の伝え方を企画します。"
      },
      {
        phase: "3-4コマ目",
        title: "商品・地域連携アイデアの具体化",
        detail: "地域食材や修学旅行先との接点も視野に入れながら、新フレーバーや限定BOXなどの提案へ広げます。"
      },
      {
        phase: "最終コマ",
        title: "最終プレゼンとインサイト整理",
        detail: "企画案を発表し、学校内評価や企業レビューに接続できる形でインサイトをまとめます。"
      }
    ],
    experienceScenes: [
      "ターゲット像を想定しながら、ブランドの魅力を言語化するシーン",
      "売場POP、投稿企画、開封動画案などをチームで試作するシーン",
      "地域資源や学校らしさを掛け合わせて、独自のブランド提案を発表するシーン"
    ],
    deliverables: [
      "ブランド企画書または商品提案シート",
      "売場POP・SNSプロモーション案",
      "クラス共有用の顧客インサイトまとめ"
    ],
    note: "参照LPの修学旅行型プログラムを、そのまま校内授業で成立するよう再編集した版です。『企業の現場に行けなくても、リアルな商品企画を学べる』と説明しやすく、商業科や探究学習の提案に使いやすい構成です。"
  },
  {
    id: "jwa-weather",
    mode: "class",
    company: "日本気象協会",
    partnerType: "気象・防災・データサイエンス",
    wordmark: "JWA",
    title: "WEATHER DATA QUEST | 気象データで地域防災を考える",
    tagline: "天気予報を見る側から、地域の防災を提案する側へ。",
    theme: "気象データ・防災判断・地域課題解決",
    themeCategory: "防災・データ活用",
    location: "学校教室、オンライン、地域フィールドワーク併用を想定",
    season: "通年・防災月間推奨",
    grades: ["小6", "中1", "中2", "中3", "高1", "高2"],
    capacityMin: 25,
    capacityMax: 160,
    minStudents: 50,
    defaultStudents: 60,
    komaOptions: [2, 3, 4, 6],
    basePerStudent: 4600,
    fixedFee: 220000,
    komaUnitFee: 42000,
    supportFee: 90000,
    supportFeeLabel: "気象データ教材・防災マップ整備費",
    splitGroupFee: 70000,
    summary: "気象データを読み解きながら、自校や地域のリスクを可視化し、根拠ある防災提案をつくるデータ活用型プログラムです。",
    tags: ["防災教育", "データサイエンス", "理科・社会連携", "地域課題"],
    images: [
      "assets/demo/weather-lab-main.png",
      "assets/demo/weather-lab-gallery.png"
    ],
    galleryLabels: ["気象データ分析セッション", "地域防災フィールドワーク"],
    sellingPoints: [
      "理科、社会、総合、防災教育のどこからでも提案しやすく、学校全体テーマに乗せやすい構成です。",
      "地域ハザードマップやデータ活用の文脈が明快で、保護者や自治体にも説明しやすい成果物が残せます。",
      "校内実施でも体験感があり、必要に応じて地域フィールドワークを足せる柔軟性があります。"
    ],
    outcomes: [
      "気象データを読み解く基礎力",
      "地域リスクを可視化する調査力",
      "根拠ある防災行動提案を組み立てる力"
    ],
    flow: [
      {
        phase: "1-2コマ目",
        title: "気象情報と防災情報の違いを理解",
        detail: "天気予報、防災情報、警戒レベルの見方を整理し、判断の土台をつくります。"
      },
      {
        phase: "2-3コマ目",
        title: "地域データの読み解き",
        detail: "雨量、気温、浸水、土砂、風などのデータから、地域のリスクを読み解きます。"
      },
      {
        phase: "3-4コマ目",
        title: "学校・家庭・地域の防災提案づくり",
        detail: "通学路、避難行動、備えを見直し、根拠データつきで改善案をまとめます。"
      },
      {
        phase: "最終コマ",
        title: "発表と行動計画化",
        detail: "学年や学級単位で提案を共有し、防災行動計画へ落とし込みます。"
      }
    ],
    experienceScenes: [
      "気象データやハザードマップを見ながら地域課題を議論するシーン",
      "学校周辺や通学路のリスクをフィールドで確認するシーン",
      "データを根拠に防災提案を発表するシーン"
    ],
    deliverables: [
      "地域防災提案シート",
      "学級または学年の防災アクションプラン",
      "学校共有向けの防災マップ案"
    ],
    note: "防災教育の年間計画や探究テーマに自然につながるため、校内導入のイメージを持ってもらいやすいプログラムです。JTB営業としても、地域課題と社会的意義の両方を語れる提案になります。"
  }
];

const state = {
  mode: "travel",
  selectedId: programs[0].id,
  activeImageIndex: 0,
  quote: null,
  quoteSerial: createQuoteSerial(),
  filters: {
    search: "",
    company: "",
    theme: "",
    grade: ""
  },
  sendTimers: []
};

const el = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  bindEvents();
  renderLogos();
  setDefaultDate();
  renderAll(true);
}

function cacheElements() {
  [
    "heroStats",
    "heroModeTitle",
    "heroModeLead",
    "logoTrack",
    "modeLead",
    "quoteLead",
    "search",
    "companyFilter",
    "themeFilter",
    "gradeFilter",
    "resultCount",
    "clearFilters",
    "cards",
    "heroImage",
    "detailCompany",
    "detailMode",
    "detailTagline",
    "detailTitle",
    "detailTheme",
    "detailSummary",
    "detailMeta",
    "detailTags",
    "galleryThumbs",
    "sellingPoints",
    "outcomes",
    "flow",
    "experienceScenes",
    "deliverables",
    "note",
    "scheduleBreakdown",
    "quoteForm",
    "programSelect",
    "school",
    "gradeText",
    "date",
    "students",
    "beforeKoma",
    "afterKoma",
    "koma",
    "travelFields",
    "classFields",
    "formNotice",
    "quoteNo",
    "qImage",
    "qCompany",
    "qProgram",
    "qSummary",
    "qSchool",
    "qMeta",
    "qChips",
    "qRows",
    "qIncludes",
    "serverPayload",
    "sendLog",
    "printBtn",
    "sendBtn",
    "jsonBtn"
  ].forEach((id) => {
    el[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  document.querySelectorAll("[data-mode-card]").forEach((card) => {
    card.addEventListener("click", () => setMode(card.dataset.modeCard));
  });

  el.search.addEventListener("input", () => {
    state.filters.search = el.search.value;
    renderAll(false);
  });

  el.companyFilter.addEventListener("change", () => {
    state.filters.company = el.companyFilter.value;
    renderAll(false);
  });

  el.themeFilter.addEventListener("change", () => {
    state.filters.theme = el.themeFilter.value;
    renderAll(false);
  });

  el.gradeFilter.addEventListener("change", () => {
    state.filters.grade = el.gradeFilter.value;
    renderAll(false);
  });

  el.clearFilters.addEventListener("click", () => {
    state.filters = { search: "", company: "", theme: "", grade: "" };
    renderAll(false);
  });

  el.cards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-program-id]");
    if (!button) {
      return;
    }
    selectProgram(button.dataset.programId, false);
  });

  el.galleryThumbs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image-index]");
    if (!button) {
      return;
    }
    state.activeImageIndex = Number(button.dataset.imageIndex);
    renderDetail();
    updateQuote();
  });

  el.programSelect.addEventListener("change", () => {
    selectProgram(el.programSelect.value, false);
  });

  el.quoteForm.addEventListener("input", updateQuote);
  el.printBtn.addEventListener("click", () => window.print());
  el.sendBtn.addEventListener("click", simulateSend);
  el.jsonBtn.addEventListener("click", downloadJson);
}

function setMode(mode) {
  if (state.mode === mode) {
    return;
  }

  state.mode = mode;
  state.filters = { search: "", company: "", theme: "", grade: "" };
  state.activeImageIndex = 0;
  state.quoteSerial = createQuoteSerial();
  clearSendTimers();

  const firstProgram = getModePrograms()[0];
  state.selectedId = firstProgram.id;
  renderAll(true);
}

function selectProgram(id, resetForm) {
  if (state.selectedId !== id) {
    state.selectedId = id;
    state.activeImageIndex = 0;
    state.quoteSerial = createQuoteSerial();
    clearSendTimers();
  }
  renderAll(resetForm);
}

function renderAll(resetForm) {
  syncSelectionWithMode();
  syncSelectionWithFilters();
  renderModeState();
  renderHero();
  renderFilterOptions();
  renderProgramSelect();
  renderCards();
  renderDetail();
  hydrateForm(resetForm);
  updateQuote();
}

function renderModeState() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  document.querySelectorAll("[data-mode-card]").forEach((card) => {
    card.classList.toggle("active", card.dataset.modeCard === state.mode);
  });

  el.modeLead.textContent = modeContent[state.mode].lead;
  el.quoteLead.textContent = modeContent[state.mode].quoteLead;
}

function renderHero() {
  const modePrograms = getModePrograms();
  const minCapacity = Math.min(...modePrograms.map((program) => program.capacityMin));
  const maxCapacity = Math.max(...modePrograms.map((program) => program.capacityMax));
  const stats = [
    { value: `${modePrograms.length}件`, label: "登録プログラム" },
    { value: `${minCapacity}〜${maxCapacity}名`, label: "想定受講人数" },
    {
      value: state.mode === "travel" ? "検索 / 提案 / 送信" : "比較 / 概算 / PDF",
      label: "営業アクション"
    }
  ];

  el.heroModeTitle.textContent = modeContent[state.mode].title;
  el.heroModeLead.textContent = modeContent[state.mode].lead;
  el.heroStats.innerHTML = stats
    .map(
      (item) => `
        <div class="hero-stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderLogos() {
  const items = [...partnerLogos, ...partnerLogos];
  el.logoTrack.innerHTML = items
    .map((label) => `<span class="logo-pill">${label}</span>`)
    .join("");
}

function renderFilterOptions() {
  const modePrograms = getModePrograms();
  const companies = unique(modePrograms.map((program) => program.company));
  const themes = unique(modePrograms.map((program) => program.themeCategory));
  const grades = unique(modePrograms.flatMap((program) => program.grades));

  el.companyFilter.innerHTML = buildOptionMarkup("すべての企業", companies);
  el.themeFilter.innerHTML = buildOptionMarkup("すべてのテーマ", themes);
  el.gradeFilter.innerHTML = buildOptionMarkup("すべての学年", grades);

  el.search.value = state.filters.search;
  setSelectValue(el.companyFilter, state.filters.company);
  setSelectValue(el.themeFilter, state.filters.theme);
  setSelectValue(el.gradeFilter, state.filters.grade);
}

function renderProgramSelect() {
  const modePrograms = getModePrograms();
  const selected = getSelectedProgram();

  el.programSelect.innerHTML = modePrograms
    .map((program) => {
      return `<option value="${program.id}">${program.company} | ${program.title}</option>`;
    })
    .join("");

  setSelectValue(el.programSelect, selected.id);
}

function renderCards() {
  const list = getFilteredPrograms();
  el.resultCount.textContent = `${list.length}件の候補`;

  if (!list.length) {
    el.cards.innerHTML = `
      <div class="empty-state">
        <strong>条件に合うプログラムがありません。</strong>
        <p>キーワードや学年条件をゆるめて、別の提案パターンをお試しください。</p>
      </div>
    `;
    return;
  }

  el.cards.innerHTML = list
    .map((program) => {
      const isSelected = program.id === state.selectedId;
      return `
        <button class="program-card ${isSelected ? "selected" : ""}" data-program-id="${program.id}" type="button">
          <img src="${program.images[0]}" alt="${program.company}のプログラムイメージ">
          <div class="card-content">
            <div class="card-topline">
              <span>${program.company}</span>
              <small>${program.partnerType}</small>
            </div>
            <strong>${program.title}</strong>
            <p>${program.summary}</p>
            <div class="card-tags">
              ${program.tags.slice(0, 3).map((tag) => `<em>${tag}</em>`).join("")}
            </div>
            <div class="card-footer">
              <em>${program.capacityMin}〜${program.capacityMax}名</em>
              <em>${formatScheduleSummary(program)}</em>
            </div>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderDetail() {
  const program = getSelectedProgram();
  const mainImage = program.images[state.activeImageIndex] || program.images[0];
  const metaItems = [
    { label: "実施拠点", value: program.location },
    { label: "対象学年", value: program.grades.join(" / ") },
    { label: "受講人数", value: `${program.capacityMin}〜${program.capacityMax}名` },
    { label: "実施時期", value: program.season }
  ];

  el.heroImage.src = mainImage;
  el.detailCompany.textContent = `${program.company} | ${program.partnerType}`;
  el.detailMode.textContent = modeContent[program.mode].short;
  el.detailTagline.textContent = program.tagline;
  el.detailTitle.textContent = program.title;
  el.detailTheme.textContent = program.theme;
  el.detailSummary.textContent = program.summary;
  el.detailMeta.innerHTML = metaItems
    .map(
      (item) => `
        <div class="meta-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");
  el.detailTags.innerHTML = program.tags
    .map((tag) => `<span class="detail-chip">${tag}</span>`)
    .join("");

  el.sellingPoints.innerHTML = program.sellingPoints
    .map((point) => `<li>${point}</li>`)
    .join("");
  el.outcomes.innerHTML = program.outcomes
    .map((outcome) => `<li>${outcome}</li>`)
    .join("");
  el.flow.innerHTML = program.flow
    .map(
      (item, index) => `
        <li>
          <div class="timeline-index">${index + 1}</div>
          <div class="timeline-body">
            <p>${item.phase}</p>
            <strong>${item.title}</strong>
            <span>${item.detail}</span>
          </div>
        </li>
      `
    )
    .join("");
  el.experienceScenes.innerHTML = program.experienceScenes
    .map((scene) => `<li>${scene}</li>`)
    .join("");
  el.deliverables.innerHTML = program.deliverables
    .map((item) => `<li>${item}</li>`)
    .join("");
  el.note.textContent = program.note;
  el.scheduleBreakdown.innerHTML = buildScheduleBreakdown(program)
    .map(
      (item) => `
        <div class="schedule-item">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");

  renderGallery(program);
}

function renderGallery(program) {
  el.galleryThumbs.innerHTML = program.images
    .map((image, index) => {
      const label = program.galleryLabels[index] || `Scene ${index + 1}`;
      const activeClass = index === state.activeImageIndex ? "active" : "";
      return `
        <button class="thumb-card ${activeClass}" data-image-index="${index}" type="button">
          <img src="${image}" alt="${label}">
          <span>${label}</span>
        </button>
      `;
    })
    .join("");
}

function hydrateForm(resetForm) {
  const program = getSelectedProgram();
  const schoolDefault = program.mode === "travel" ? "デモ高等学校" : "デモ中学校";

  el.travelFields.hidden = program.mode !== "travel";
  el.classFields.hidden = program.mode !== "class";

  populateNumberSelect(el.beforeKoma, program.beforeOptions || [program.before]);
  populateNumberSelect(el.afterKoma, program.afterOptions || [program.after]);
  populateNumberSelect(el.koma, program.komaOptions || [1]);

  if (resetForm || !el.school.value) {
    el.school.value = schoolDefault;
  }
  if (resetForm || !el.gradeText.value) {
    el.gradeText.value = program.grades[0];
  }
  if (resetForm || !el.students.value) {
    el.students.value = String(program.defaultStudents);
  }

  setSelectValue(el.beforeKoma, validOrFallback(el.beforeKoma.value, program.beforeOptions || [program.before], program.before));
  setSelectValue(el.afterKoma, validOrFallback(el.afterKoma.value, program.afterOptions || [program.after], program.after));
  setSelectValue(el.koma, validOrFallback(el.koma.value, program.komaOptions || [1], program.komaOptions ? program.komaOptions[0] : 1));

  if (!el.date.value) {
    setDefaultDate();
  }
}

function updateQuote() {
  const program = getSelectedProgram();
  const school = el.school.value.trim();
  const grade = el.gradeText.value.trim() || program.grades[0];
  const date = el.date.value;
  const rawStudents = Number(el.students.value || 0);
  const students = rawStudents > 0 ? rawStudents : program.defaultStudents;
  const beforeKoma = Number(el.beforeKoma.value || program.before || 0);
  const afterKoma = Number(el.afterKoma.value || program.after || 0);
  const koma = Number(el.koma.value || (program.komaOptions ? program.komaOptions[0] : 1));

  const pricing = program.mode === "travel"
    ? buildTravelPricing(program, students, beforeKoma, afterKoma)
    : buildClassPricing(program, students, koma);

  const tax = Math.floor(pricing.subtotal * 0.1);
  const total = pricing.subtotal + tax;
  const createdAt = new Date().toLocaleString("ja-JP");

  state.quote = {
    quoteNo: state.quoteSerial,
    createdAt,
    mode: state.mode,
    school: school || schoolFallbackFor(program),
    date: date || null,
    grade,
    company: program.company,
    partnerType: program.partnerType,
    theme: program.theme,
    themeCategory: program.themeCategory,
    programId: program.id,
    title: program.title,
    students,
    selection: program.mode === "travel"
      ? {
          beforeKoma,
          during: program.duringLabel,
          afterKoma,
          groups: pricing.groups
        }
      : {
          koma,
          style: "校内実施",
          groups: pricing.groups
        },
    pricing: {
      chargeableStudents: pricing.chargeableStudents,
      groups: pricing.groups,
      lineItems: pricing.lines,
      subtotal: pricing.subtotal,
      tax,
      total
    },
    workflow: program.mode === "travel" ? buildScheduleBreakdown(program) : buildScheduleBreakdown(program),
    status: "営業デモ用概算",
    note: "正式見積と申込はJTB側の正式運用で対応"
  };

  renderQuote(program, pricing, grade, date, students, tax, total);
  el.serverPayload.textContent = JSON.stringify(state.quote, null, 2);
}

function renderQuote(program, pricing, grade, date, students, tax, total) {
  const metaLine = program.mode === "travel"
    ? `${grade} / ${students}名 / 希望日 ${date || "未設定"} / タビマエ${pricing.beforeKoma}コマ・東京1日・タビアト${pricing.afterKoma}コマ`
    : `${grade} / ${students}名 / 希望日 ${date || "未設定"} / ${pricing.koma}コマ実施`;
  const chipValues = [
    program.themeCategory,
    pricing.groupLabel,
    program.mode === "travel" ? "東京現地実施あり" : "校内実施"
  ];

  el.formNotice.textContent = pricing.notice || "";
  el.formNotice.classList.toggle("visible", Boolean(pricing.notice));

  el.quoteNo.textContent = state.quote.quoteNo;
  el.qImage.src = program.images[0];
  el.qCompany.textContent = `${program.company} | ${program.partnerType}`;
  el.qProgram.textContent = program.title;
  el.qSummary.textContent = program.summary;
  el.qSchool.textContent = state.quote.school;
  el.qMeta.textContent = metaLine;
  el.qChips.innerHTML = chipValues
    .map((value) => `<span>${value}</span>`)
    .join("");
  el.qRows.innerHTML = buildQuoteRows(pricing.lines, pricing.subtotal, tax, total);
  el.qIncludes.innerHTML = program.deliverables
    .slice(0, 3)
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function buildTravelPricing(program, students, beforeKoma, afterKoma) {
  const groups = Math.max(1, Math.ceil(students / program.capacityMax));
  const chargeableStudents = Math.max(students, program.minStudents);
  const baseTuition = chargeableStudents * program.basePerStudent;
  const designFee = program.fixedFee;
  const preFee = beforeKoma * program.preKomaFee;
  const duringFee = program.duringFee;
  const reflectionFee = afterKoma * program.afterKomaFee;
  const splitFee = Math.max(0, groups - 1) * program.splitGroupFee;
  const lines = [
    {
      label: "受講料目安",
      detail: `${students}名入力 / 最低${program.minStudents}名基準`,
      amount: baseTuition
    },
    {
      label: "企業共創プログラム設計費",
      detail: "テーマ設計、教材化、評価観点整理",
      amount: designFee
    },
    {
      label: "タビマエ教材・進行費",
      detail: `${beforeKoma}コマ分`,
      amount: preFee
    },
    {
      label: "タビナカ現地運営費",
      detail: program.duringLabel,
      amount: duringFee
    },
    {
      label: "タビアト振り返り支援費",
      detail: `${afterKoma}コマ分`,
      amount: reflectionFee
    }
  ];

  if (splitFee > 0) {
    lines.push({
      label: "分散実施調整費",
      detail: `${groups}グループ運営前提`,
      amount: splitFee
    });
  }

  return {
    beforeKoma,
    afterKoma,
    groups,
    groupLabel: groups > 1 ? `${groups}グループ想定` : "1グループ想定",
    chargeableStudents,
    lines,
    subtotal: sumAmounts(lines),
    notice: groups > 1 ? "受講人数が上限を超えるため、時間差または複数グループ運営を前提にした概算です。" : ""
  };
}

function buildClassPricing(program, students, koma) {
  const groups = Math.max(1, Math.ceil(students / program.capacityMax));
  const chargeableStudents = Math.max(students, program.minStudents);
  const baseTuition = chargeableStudents * program.basePerStudent;
  const designFee = program.fixedFee;
  const komaFee = koma * program.komaUnitFee;
  const supportFee = program.supportFee;
  const splitFee = Math.max(0, groups - 1) * program.splitGroupFee;
  const lines = [
    {
      label: "受講料目安",
      detail: `${students}名入力 / 最低${program.minStudents}名基準`,
      amount: baseTuition
    },
    {
      label: "教材・テーマ設計費",
      detail: "企業テーマ、授業資料、評価観点",
      amount: designFee
    },
    {
      label: "授業実施費",
      detail: `${koma}コマ分`,
      amount: komaFee
    },
    {
      label: program.supportFeeLabel,
      detail: "配布物、進行、運営セットアップ",
      amount: supportFee
    }
  ];

  if (splitFee > 0) {
    lines.push({
      label: "分散実施調整費",
      detail: `${groups}グループ運営前提`,
      amount: splitFee
    });
  }

  return {
    koma,
    groups,
    groupLabel: groups > 1 ? `${groups}グループ想定` : "1グループ想定",
    chargeableStudents,
    lines,
    subtotal: sumAmounts(lines),
    notice: groups > 1 ? "人数が多いため、複数グループに分けた進行を想定した概算です。" : ""
  };
}

function buildQuoteRows(lines, subtotal, tax, total) {
  const detailRows = lines
    .map((line) => {
      return `
        <tr>
          <td>${line.label}</td>
          <td>${line.detail}</td>
          <td>${yen(line.amount)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    ${detailRows}
    <tr>
      <th colspan="2">小計</th>
      <th>${yen(subtotal)}</th>
    </tr>
    <tr>
      <td colspan="2">消費税 10%</td>
      <td>${yen(tax)}</td>
    </tr>
    <tr class="total-row">
      <th colspan="2">概算合計</th>
      <th>${yen(total)}</th>
    </tr>
  `;
}

function simulateSend() {
  if (!state.quote) {
    return;
  }

  clearSendTimers();
  el.sendBtn.disabled = true;
  el.sendLog.classList.add("visible");
  el.sendLog.innerHTML = "";

  const steps = [
    "見積条件を検証しています。",
    "JTB営業デモサーバー向けにペイロードを整形しています。",
    "POST /api/demo/education-estimates 送信完了。正式見積処理はJTB側運用へ引き継ぐ想定です。"
  ];

  steps.forEach((step, index) => {
    const timerId = window.setTimeout(() => {
      el.sendLog.innerHTML += `
        <div class="send-step">
          <strong>${index + 1}.</strong>
          <span>${step}</span>
        </div>
      `;

      if (index === steps.length - 1) {
        el.sendLog.innerHTML += `
          <p class="send-complete">
            ${state.quote.quoteNo} / ${state.quote.school} / ${state.quote.createdAt}
          </p>
        `;
        el.sendBtn.disabled = false;
      }
    }, index * 360);

    state.sendTimers.push(timerId);
  });
}

function downloadJson() {
  if (!state.quote) {
    return;
  }

  const blob = new Blob([JSON.stringify(state.quote, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${state.quote.quoteNo}.json`;
  anchor.click();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}

function clearSendTimers() {
  state.sendTimers.forEach((timerId) => window.clearTimeout(timerId));
  state.sendTimers = [];
  el.sendBtn.disabled = false;
  el.sendLog.classList.remove("visible");
  el.sendLog.innerHTML = "";
}

function syncSelectionWithMode() {
  const modePrograms = getModePrograms();
  if (!modePrograms.some((program) => program.id === state.selectedId)) {
    state.selectedId = modePrograms[0].id;
    state.activeImageIndex = 0;
  }
}

function syncSelectionWithFilters() {
  const filtered = getFilteredPrograms();
  if (filtered.length && !filtered.some((program) => program.id === state.selectedId)) {
    state.selectedId = filtered[0].id;
    state.activeImageIndex = 0;
    state.quoteSerial = createQuoteSerial();
  }
}

function getModePrograms() {
  return programs.filter((program) => program.mode === state.mode);
}

function getSelectedProgram() {
  return programs.find((program) => program.id === state.selectedId) || getModePrograms()[0];
}

function getFilteredPrograms() {
  const keyword = state.filters.search.trim().toLowerCase();
  return getModePrograms()
    .filter((program) => {
      if (!keyword) {
        return true;
      }
      return [
        program.company,
        program.partnerType,
        program.title,
        program.theme,
        program.themeCategory,
        program.summary,
        ...program.tags
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .filter((program) => !state.filters.company || program.company === state.filters.company)
    .filter((program) => !state.filters.theme || program.themeCategory === state.filters.theme)
    .filter((program) => !state.filters.grade || program.grades.includes(state.filters.grade));
}

function buildScheduleBreakdown(program) {
  if (program.mode === "travel") {
    return [
      { label: "タビマエ", value: `${rangeLabel(program.beforeOptions)}コマ` },
      { label: "タビナカ", value: "東京での企業共創学習 1日" },
      { label: "タビアト", value: `${rangeLabel(program.afterOptions)}コマ` }
    ];
  }

  return [
    { label: "実施コマ数", value: `${rangeLabel(program.komaOptions)}コマ` },
    { label: "実施形態", value: "校内 / オンライン / ハイブリッド" },
    { label: "進行", value: "授業導入から成果発表まで可変" }
  ];
}

function formatScheduleSummary(program) {
  if (program.mode === "travel") {
    return `タビマエ${rangeLabel(program.beforeOptions)} / 東京1日 / タビアト${rangeLabel(program.afterOptions)}`;
  }
  return `${rangeLabel(program.komaOptions)}コマ / 校内実施`;
}

function setDefaultDate() {
  const date = new Date();
  date.setDate(date.getDate() + 45);
  el.date.value = date.toISOString().slice(0, 10);
}

function buildOptionMarkup(placeholder, values) {
  return [`<option value="">${placeholder}</option>`]
    .concat(values.map((value) => `<option value="${value}">${value}</option>`))
    .join("");
}

function populateNumberSelect(select, values) {
  select.innerHTML = values
    .map((value) => `<option value="${value}">${value}コマ</option>`)
    .join("");
}

function setSelectValue(select, value) {
  const stringValue = String(value);
  if ([...select.options].some((option) => option.value === stringValue)) {
    select.value = stringValue;
    return;
  }
  select.value = "";
}

function validOrFallback(currentValue, allowedValues, fallbackValue) {
  const allowed = allowedValues.map(String);
  return allowed.includes(String(currentValue)) ? String(currentValue) : String(fallbackValue);
}

function schoolFallbackFor(program) {
  return program.mode === "travel" ? "デモ高等学校" : "デモ中学校";
}

function rangeLabel(values) {
  if (!values || !values.length) {
    return "";
  }
  if (values.length === 1) {
    return String(values[0]);
  }
  return `${values[0]}〜${values[values.length - 1]}`;
}

function unique(values) {
  return [...new Set(values)];
}

function sumAmounts(lines) {
  return lines.reduce((total, line) => total + line.amount, 0);
}

function createQuoteSerial() {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const seed = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `JTB-DEMO-${yy}${mm}${dd}-${seed}`;
}

function yen(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value);
}
