import React, { useState } from 'react';

import {
  Heart,
  Zap,
  Wind,
  Users,
  EyeOff,
  Mic,
  Rabbit,
  Anchor,
  MoveDiagonal,
  Sparkles,
  ChevronRight,
  RefreshCcw,
  Info,
  BarChart3,
  Globe
} from 'lucide-react';

// Translation data
const translations = {
  en: {
    appName: "VibeFinder",
    appSubtitle: "Cosmo-Inspired Guide",
    startTitle: "Find Your Perfect",
    startTitleHighlight: "Vibe",
    startDescription: "Not sure what you need? Answer 7 quick questions to discover the toy type that fits your body and desires perfectly.",
    startButton: "Start the Quiz",
    questionProgress: "Question {current} of {total}",
    yourTopRecommendation: "★ Your Top Recommendation",
    vibratorDetailView: "Vibrator Detail View",
    performanceStats: "Performance Stats",
    intensity: "Intensity",
    discretion: "Discretion (Quietness)",
    versatility: "Versatility",
    exploreAll: "Explore All 10 Types (Click for Details)",
    retakeQuiz: "Retake Quiz",
    shopProducts: "Shop Products",
    footer: "Educational & Entertainment purposes only. Inspired by Cosmopolitan's Guide to Vibrators.",
    vibeTypes: {
      bullet: {
        name: "Bullet Vibrator",
        description: "Small, discreet, and powerful. Perfect for pinpoint clitoral stimulation or foreplay.",
        tags: {
          external: "external",
          clitoral: "clitoral",
          beginner: "beginner",
          discreet: "discreet",
          solo: "solo"
        }
      },
      wand: {
        name: "Wand Vibrator",
        description: "The powerhouse of vibes. Known for deep, rumbly vibrations and intense external stimulation.",
        tags: {
          external: "external",
          clitoral: "clitoral",
          intense: "intense",
          solo: "solo",
          partner: "partner"
        }
      },
      rabbit: {
        name: "Rabbit Vibrator",
        description: "The dual-action icon. Stimulates internally (G-spot) and externally (clitoris) simultaneously.",
        tags: {
          dual: "dual",
          internal: "internal",
          external: "external",
          gspot: "g-spot",
          intense: "intense"
        }
      },
      suction: {
        name: "Suction / Air-Pulse",
        description: "Uses air waves to simulate oral sex sensations without direct touch. Often provides quick intensity.",
        tags: {
          external: "external",
          clitoral: "clitoral",
          suction: "suction",
          solo: "solo"
        }
      },
      gspot: {
        name: "G-Spot Vibrator",
        description: "Curved specifically to reach the internal G-spot. Usually features a distinct 'come hither' curve.",
        tags: {
          internal: "internal",
          gspot: "g-spot",
          solo: "solo"
        }
      },
      couples: {
        name: "Couples Vibrator",
        description: "Designed to be worn during sex. usually C-shaped to stimulate both partners at once.",
        tags: {
          couples: "couples",
          internal: "internal",
          external: "external",
          handsfree: "hands-free"
        }
      },
      wearable: {
        name: "Wearable / Panty Vibe",
        description: "Remote-controlled vibes that fit inside underwear. Great for public play or hands-free fun.",
        tags: {
          external: "external",
          public: "public",
          handsfree: "hands-free",
          kink: "kink"
        }
      },
      anal: {
        name: "Anal Vibrator / Plug",
        description: "Designed with a flared base for safety. Targets the prostate or anal nerves.",
        tags: {
          anal: "anal",
          internal: "internal",
          solo: "solo",
          partner: "partner"
        }
      },
      finger: {
        name: "Finger Vibrator",
        description: "Small vibes that slip onto a finger. Adds vibration to manual touch and foreplay.",
        tags: {
          external: "external",
          foreplay: "foreplay",
          versatile: "versatile",
          beginner: "beginner"
        }
      },
      lipstick: {
        name: "Lipstick / Discreet",
        description: "Disguised as everyday objects like lipstick. Ultra-covert for travel or keeping on your nightstand.",
        tags: {
          external: "external",
          discreet: "discreet",
          travel: "travel",
          beginner: "beginner"
        }
      }
    },
    questions: [
      {
        text: "What is your primary goal for this vibe?",
        options: [
          "Mind-blowing clitoral orgasms",
          "Internal G-spot exploration",
          "The best of both worlds (In & Out)",
          "Something spicey with a partner",
          "Exploring anal play"
        ]
      },
      {
        text: "How would you describe your experience level with toys?",
        options: [
          "Total Beginner - Keep it simple",
          "Intermediate - I know what I like",
          "Expert - I want intensity & complexity"
        ]
      },
      {
        text: "What kind of sensation do you prefer?",
        options: [
          "Deep, rumbly, power-tool vibes",
          "Pinpoint, buzzy vibration",
          "Oral-sex-like suction/air pulses",
          "Fullness and internal pressure"
        ]
      },
      {
        text: "Where do you plan to use it most?",
        options: [
          "Solo in the bedroom",
          "During sex with a partner",
          "Out on the town / Public dates",
          "Traveling / On the go"
        ]
      },
      {
        text: "How important is discretion (noise & size)?",
        options: [
          "Very - It needs to be silent and hideable",
          "Somewhat - Quiet is nice, but size is okay",
          "Not at all - Give me maximum POWER"
        ]
      },
      {
        text: "Do you want to use it 'hands-free'?",
        options: [
          "Yes, I want to wear it",
          "No, I like holding and controlling it",
          "Doesn't matter"
        ]
      },
      {
        text: "Finally, pick a vibe aesthetic:",
        options: [
          "Cute, floral, or friendly",
          "Sleek, medical, or ergonomic",
          "Anatomical or realistic",
          "High-tech / App controlled"
        ]
      }
    ]
  },
  zh: {
    appName: "振動棒選擇器",
    appSubtitle: "時尚靈感指南",
    startTitle: "找到您的完美",
    startTitleHighlight: "振動棒",
    startDescription: "不確定需要什麼？回答7個簡單問題，發現最適合您身體和慾望的玩具類型。",
    startButton: "開始測試",
    questionProgress: "第 {current} 題，共 {total} 題",
    yourTopRecommendation: "★ 您的最佳推薦",
    vibratorDetailView: "振動棒詳情視圖",
    performanceStats: "性能數據",
    intensity: "強度",
    discretion: "隱私性（靜音）",
    versatility: "多功能性",
    exploreAll: "探索所有10種類型（點擊查看詳情）",
    retakeQuiz: "重新測試",
    shopProducts: "購買產品",
    footer: "僅供教育和娛樂目的。靈感來自《Cosmopolitan》振動棒指南。",
    vibeTypes: {
      bullet: {
        name: "子彈振動棒",
        description: "小巧、隱蔽且強大。適合精準的陰蒂刺激或前戲。",
        tags: {
          external: "外部",
          clitoral: "陰蒂",
          beginner: "初學者",
          discreet: "隱蔽",
          solo: "獨用"
        }
      },
      wand: {
        name: "魔杖振動棒",
        description: "振動棒中的動力源。以深沉、轟鳴的振動和強烈的外部刺激而聞名。",
        tags: {
          external: "外部",
          clitoral: "陰蒂",
          intense: "強烈",
          solo: "獨用",
          partner: "伴侶"
        }
      },
      rabbit: {
        name: "兔子振動棒",
        description: "雙動作標誌。同時刺激內部（G點）和外部（陰蒂）。",
        tags: {
          dual: "雙重",
          internal: "內部",
          external: "外部",
          gspot: "G點",
          intense: "強烈"
        }
      },
      suction: {
        name: "吸吮/脈衝振動棒",
        description: "利用氣流模擬口交感覺，無需直接接觸。通常能快速達到強度。",
        tags: {
          external: "外部",
          clitoral: "陰蒂",
          suction: "吸吮",
          solo: "獨用"
        }
      },
      gspot: {
        name: "G點振動棒",
        description: "專為觸及內部G點而設計。通常具有獨特的'勾引'曲線。",
        tags: {
          internal: "內部",
          gspot: "G點",
          solo: "獨用"
        }
      },
      couples: {
        name: "情侶振動棒",
        description: "設計為性愛時佩戴。通常為C形，可同時刺激雙方。",
        tags: {
          couples: "情侶",
          internal: "內部",
          external: "外部",
          handsfree: "免提"
        }
      },
      wearable: {
        name: "可穿戴/內褲振動棒",
        description: "可放入內褲的遙控振動棒。適合公共場所遊戲或免提樂趣。",
        tags: {
          external: "外部",
          public: "公共場所",
          handsfree: "免提",
          kink: "情趣"
        }
      },
      anal: {
        name: "肛門振動棒/肛塞",
        description: "設計有喇叭形底座以確保安全。針對前列腺或肛門神經。",
        tags: {
          anal: "肛門",
          internal: "內部",
          solo: "獨用",
          partner: "伴侶"
        }
      },
      finger: {
        name: "手指振動棒",
        description: "可戴在手指上的小型振動棒。為手動觸摸和前戲增加振動。",
        tags: {
          external: "外部",
          foreplay: "前戲",
          versatile: "多功能",
          beginner: "初學者"
        }
      },
      lipstick: {
        name: "口紅/隱蔽式振動棒",
        description: "偽裝成日常物品如口紅。超隱蔽，適合旅行或放在床頭櫃上。",
        tags: {
          external: "外部",
          discreet: "隱蔽",
          travel: "旅行",
          beginner: "初學者"
        }
      }
    },
    questions: [
      {
        text: "您對振動棒的主要目標是什麼？",
        options: [
          "令人瘋狂的陰蒂高潮",
          "內部G點探索",
          "兩全其美（內外兼用）",
          "與伴侶的刺激體驗",
          "探索肛門遊戲"
        ]
      },
      {
        text: "您如何描述自己使用玩具的經驗水平？",
        options: [
          "完全初學者 - 保持簡單",
          "中級 - 我知道我喜歡什麼",
          "專家 - 我想要強度和複雜性"
        ]
      },
      {
        text: "您更喜歡哪種感覺？",
        options: [
          "深沉、轟鳴、強力的振動",
          "精准、嗡嗡的振動",
          "類似口交的吸吮/脈衝",
          "充實感和內部壓力"
        ]
      },
      {
        text: "您計劃在哪裡使用？",
        options: [
          "臥室獨用",
          "與伴侶性愛時",
          "外出約會/公共場所",
          "旅行/外出時"
        ]
      },
      {
        text: "隱私性（噪音和尺寸）對您有多重要？",
        options: [
          "非常重要 - 需要靜音且可隱藏",
          "有些重要 - 安靜很好，但尺寸可以接受",
          "完全不重要 - 給我最大力量"
        ]
      },
      {
        text: "您希望'免提'使用嗎？",
        options: [
          "是的，我想佩戴",
          "不，我喜歡握著和控制它",
          "無所謂"
        ]
      },
      {
        text: "最後，選擇振動棒的審美風格：",
        options: [
          "可愛、花卉或友好",
          "光滑、醫療或人體工程學",
          "解剖或逼真",
          "高科技/應用程式控制"
        ]
      }
    ]
  }
};

/**
 * VIBRATOR TYPES DATA
 * Updated with 'specs' for the comparison chart and 'imageGradient' for the image container.
 */
const VIBE_TYPES = [
  {
    id: 'bullet',
    name: 'Bullet Vibrator',
    description: 'Small, discreet, and powerful. Perfect for pinpoint clitoral stimulation or foreplay.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/6924087881f1f50014d7435e/original.png?1763969143=&owner_id=6864a3da63282a004c91f24c" alt="Bullet Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'clitoral', 'beginner', 'discreet', 'solo'],
    color: 'bg-rose-100 text-rose-600',
    imageGradient: 'from-rose-400 to-rose-600',
    specs: { intensity: 60, discretion: 95, versatility: 60 } // 0-100 scale
  },
  {
    id: 'wand',
    name: 'Wand Vibrator',
    description: 'The powerhouse of vibes. Known for deep, rumbly vibrations and intense external stimulation.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692407651aa464000a210fb8/original.png?1763968868=&owner_id=6864a3da63282a004c91f24c" alt="Wand Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'clitoral', 'intense', 'solo', 'partner'],
    color: 'bg-purple-100 text-purple-600',
    imageGradient: 'from-purple-500 to-indigo-600',
    specs: { intensity: 100, discretion: 30, versatility: 50 }
  },
  {
    id: 'rabbit',
    name: 'Rabbit Vibrator',
    description: 'The dual-action icon. Stimulates internally (G-spot) and externally (clitoris) simultaneously.',
    icon: <img src="https://shoplineimg.com/6864a3da63282a004c91f24c/687758a92329bc000c2b0364/800x.webp?source_format=png" alt="Rabbit Vibrator" className="w-full h-full object-contain" />,
    tags: ['dual', 'internal', 'external', 'g-spot', 'intense'],
    color: 'bg-pink-100 text-pink-600',
    imageGradient: 'from-pink-400 to-rose-500',
    specs: { intensity: 85, discretion: 50, versatility: 70 }
  },
  {
    id: 'suction',
    name: 'Suction / Air-Pulse',
    description: 'Uses air waves to simulate oral sex sensations without direct touch. Often provides quick intensity.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692406911b7528000a12cbad/original.png?1763968656=&owner_id=6864a3da63282a004c91f24c" alt="Suction Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'clitoral', 'suction', 'solo'],
    color: 'bg-cyan-100 text-cyan-600',
    imageGradient: 'from-cyan-400 to-blue-500',
    specs: { intensity: 90, discretion: 70, versatility: 40 }
  },
  {
    id: 'gspot',
    name: 'G-Spot Vibrator',
    description: 'Curved specifically to reach the internal G-spot. Usually features a distinct "come hither" curve.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/68775c1062cc81000e44d211/original.png?1752652815" alt="G-Spot Vibrator" className="w-full h-full object-contain" />,
    tags: ['internal', 'g-spot', 'solo'],
    color: 'bg-indigo-100 text-indigo-600',
    imageGradient: 'from-indigo-400 to-purple-500',
    specs: { intensity: 75, discretion: 80, versatility: 60 }
  },
  {
    id: 'couples',
    name: 'Couples Vibrator',
    description: 'Designed to be worn during sex. usually C-shaped to stimulate both partners at once.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692407a56d62cf0016ad07e3/original.png?1763968933=&owner_id=6864a3da63282a004c91f24c" alt="Couples Vibrator" className="w-full h-full object-contain" />,
    tags: ['couples', 'internal', 'external', 'hands-free'],
    color: 'bg-red-100 text-red-600',
    imageGradient: 'from-red-400 to-pink-600',
    specs: { intensity: 70, discretion: 85, versatility: 90 }
  },
  {
    id: 'wearable',
    name: 'Wearable / Panty Vibe',
    description: 'Remote-controlled vibes that fit inside underwear. Great for public play or hands-free fun.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692406918f4008000e7ee7ce/original.png?1763968656=&owner_id=6864a3da63282a004c91f24c" alt="Wearable Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'public', 'hands-free', 'kink'],
    color: 'bg-fuchsia-100 text-fuchsia-600',
    imageGradient: 'from-fuchsia-400 to-pink-500',
    specs: { intensity: 65, discretion: 90, versatility: 80 }
  },
  {
    id: 'anal',
    name: 'Anal Vibrator / Plug',
    description: 'Designed with a flared base for safety. Targets the prostate or anal nerves.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692406928edcb5000c9c9b3a/original.png?1763968657=&owner_id=6864a3da63282a004c91f24c" alt="Anal Vibrator" className="w-full h-full object-contain" />,
    tags: ['anal', 'internal', 'solo', 'partner'],
    color: 'bg-slate-100 text-slate-600',
    imageGradient: 'from-slate-500 to-gray-700',
    specs: { intensity: 70, discretion: 85, versatility: 50 }
  },
  {
    id: 'finger',
    name: 'Finger Vibrator',
    description: 'Small vibes that slip onto a finger. Adds vibration to manual touch and foreplay.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/6924069368582f001671d3d2/original.png?1763968658=&owner_id=6864a3da63282a004c91f24c" alt="Finger Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'foreplay', 'versatile', 'beginner'],
    color: 'bg-orange-100 text-orange-600',
    imageGradient: 'from-orange-400 to-amber-500',
    specs: { intensity: 50, discretion: 90, versatility: 85 }
  },
  {
    id: 'lipstick',
    name: 'Lipstick / Discreet',
    description: 'Disguised as everyday objects like lipstick. Ultra-covert for travel or keeping on your nightstand.',
    icon: <img src="https://img.shoplineapp.com/media/image_clips/692406937cfbda000ccf78fd/original.png?1763968658=&owner_id=6864a3da63282a004c91f24c" alt="Lipstick Vibrator" className="w-full h-full object-contain" />,
    tags: ['external', 'discreet', 'travel', 'beginner'],
    color: 'bg-emerald-100 text-emerald-600',
    imageGradient: 'from-emerald-400 to-teal-500',
    specs: { intensity: 55, discretion: 100, versatility: 50 }
  }
];

/**
 * QUIZ QUESTIONS - With translation keys and points
 */
const QUESTIONS = [
  {
    id: 1,
    translationKey: "goal",
    options: [
      { translationKey: "clitoral", points: { bullet: 2, suction: 3, wand: 2, lipstick: 2 } },
      { translationKey: "gspot", points: { gspot: 3, rabbit: 2, anal: 1 } },
      { translationKey: "both", points: { rabbit: 3, couples: 1 } },
      { translationKey: "partner", points: { couples: 3, finger: 2, wearable: 2 } },
      { translationKey: "anal", points: { anal: 3 } }
    ]
  },
  {
    id: 2,
    translationKey: "experience",
    options: [
      { translationKey: "beginner", points: { bullet: 3, lipstick: 3, finger: 2 } },
      { translationKey: "intermediate", points: { suction: 2, gspot: 2, wand: 1 } },
      { translationKey: "expert", points: { rabbit: 2, wand: 2, anal: 2, couples: 2 } }
    ]
  },
  {
    id: 3,
    translationKey: "sensation",
    options: [
      { translationKey: "rumbly", points: { wand: 4 } },
      { translationKey: "buzzy", points: { bullet: 3, finger: 2, lipstick: 2 } },
      { translationKey: "suction", points: { suction: 4 } },
      { translationKey: "fullness", points: { gspot: 2, rabbit: 2, anal: 2 } }
    ]
  },
  {
    id: 4,
    translationKey: "location",
    options: [
      { translationKey: "solo", points: { wand: 2, rabbit: 2, suction: 2, gspot: 2 } },
      { translationKey: "withPartner", points: { couples: 4, finger: 3, wearable: 2 } },
      { translationKey: "public", points: { wearable: 4, lipstick: 1 } },
      { translationKey: "travel", points: { lipstick: 3, bullet: 2 } }
    ]
  },
  {
    id: 5,
    translationKey: "discretion",
    options: [
      { translationKey: "veryImportant", points: { lipstick: 4, bullet: 3, wearable: 2 } },
      { translationKey: "somewhatImportant", points: { suction: 1, gspot: 1 } },
      { translationKey: "notImportant", points: { wand: 3, rabbit: 1 } }
    ]
  },
  {
    id: 6,
    translationKey: "handsfree",
    options: [
      { translationKey: "yesWear", points: { wearable: 4, couples: 2 } },
      { translationKey: "noHold", points: { wand: 1, bullet: 1, suction: 1 } },
      { translationKey: "doesntMatter", points: {} }
    ]
  },
  {
    id: 7,
    translationKey: "aesthetic",
    options: [
      { translationKey: "cute", points: { suction: 2, lipstick: 2 } },
      { translationKey: "sleek", points: { gspot: 1, bullet: 1 } },
      { translationKey: "realistic", points: { rabbit: 1, anal: 1 } },
      { translationKey: "hightech", points: { wearable: 2, couples: 2 } }
    ]
  }
];

// Reusable Stat Bar Component
const StatBar = ({ label, value, colorClass = "bg-pink-500" }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

export default function VibratorQuizApp() {
  const [step, setStep] = useState('start'); // start, quiz, result
  const [language, setLanguage] = useState('en'); // en or zh
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [bestMatch, setBestMatch] = useState(null);
  const [viewedMatch, setViewedMatch] = useState(null); // The match currently being viewed in detail

  // Get current language translations
  const t = translations[language];

  // Helper function to get translated vibe type data
  const getTranslatedVibeType = (type) => {
    const translatedType = t.vibeTypes[type.id];
    return {
      ...type,
      name: translatedType.name,
      description: translatedType.description,
      tags: type.tags.map(tag => translatedType.tags[tag])
    };
  };

  // Helper function to get translated question text
  const getTranslatedQuestion = (question) => {
    const questionTexts = {
      goal: language === 'en' ? "What is your primary goal for this vibe?" : "您對振動棒的主要目標是什麼？",
      experience: language === 'en' ? "How would you describe your experience level with toys?" : "您如何描述自己使用玩具的經驗水平？",
      sensation: language === 'en' ? "What kind of sensation do you prefer?" : "您更喜歡哪種感覺？",
      location: language === 'en' ? "Where do you plan to use it most?" : "您計劃在哪裡使用？",
      discretion: language === 'en' ? "How important is discretion (noise & size)?" : "隱私性（噪音和尺寸）對您有多重要？",
      handsfree: language === 'en' ? "Do you want to use it 'hands-free'?" : "您希望'免提'使用嗎？",
      aesthetic: language === 'en' ? "Finally, pick a vibe aesthetic:" : "最後，選擇振動棒的審美風格："
    };

    const optionTexts = {
      clitoral: language === 'en' ? "Mind-blowing clitoral orgasms" : "令人瘋狂的陰蒂高潮",
      gspot: language === 'en' ? "Internal G-spot exploration" : "內部G點探索",
      both: language === 'en' ? "The best of both worlds (In & Out)" : "兩全其美（內外兼用）",
      partner: language === 'en' ? "Something spicey with a partner" : "與伴侶的刺激體驗",
      anal: language === 'en' ? "Exploring anal play" : "探索肛門遊戲",
      beginner: language === 'en' ? "Total Beginner - Keep it simple" : "完全初學者 - 保持簡單",
      intermediate: language === 'en' ? "Intermediate - I know what I like" : "中級 - 我知道我喜歡什麼",
      expert: language === 'en' ? "Expert - I want intensity & complexity" : "專家 - 我想要強度和複雜性",
      rumbly: language === 'en' ? "Deep, rumbly, power-tool vibes" : "深沉、轟鳴、強力的振動",
      buzzy: language === 'en' ? "Pinpoint, buzzy vibration" : "精准、嗡嗡的振動",
      suction: language === 'en' ? "Oral-sex-like suction/air pulses" : "類似口交的吸吮/脈衝",
      fullness: language === 'en' ? "Fullness and internal pressure" : "充實感和內部壓力",
      solo: language === 'en' ? "Solo in the bedroom" : "臥室獨用",
      withPartner: language === 'en' ? "During sex with a partner" : "與伴侶性愛時",
      public: language === 'en' ? "Out on the town / Public dates" : "外出約會/公共場所",
      travel: language === 'en' ? "Traveling / On the go" : "旅行/外出時",
      veryImportant: language === 'en' ? "Very - It needs to be silent and hideable" : "非常重要 - 需要靜音且可隱藏",
      somewhatImportant: language === 'en' ? "Somewhat - Quiet is nice, but size is okay" : "有些重要 - 安靜很好，但尺寸可以接受",
      notImportant: language === 'en' ? "Not at all - Give me maximum POWER" : "完全不重要 - 給我最大力量",
      yesWear: language === 'en' ? "Yes, I want to wear it" : "是的，我想佩戴",
      noHold: language === 'en' ? "No, I like holding and controlling it" : "不，我喜歡握著和控制它",
      doesntMatter: language === 'en' ? "Doesn't matter" : "無所謂",
      cute: language === 'en' ? "Cute, floral, or friendly" : "可愛、花卉或友好",
      sleek: language === 'en' ? "Sleek, medical, or ergonomic" : "光滑、醫療或人體工程學",
      realistic: language === 'en' ? "Anatomical or realistic" : "解剖或逼真",
      hightech: language === 'en' ? "High-tech / App controlled" : "高科技/應用程式控制"
    };

    return {
      ...question,
      text: questionTexts[question.translationKey],
      options: question.options.map(option => ({
        ...option,
        text: optionTexts[option.translationKey]
      }))
    };
  };

  // Initialize scores
  React.useEffect(() => {
    const initialScores = {};
    VIBE_TYPES.forEach(type => initialScores[type.id] = 0);
    setScores(initialScores);
  }, []);

  const handleAnswer = (points) => {
    const newScores = { ...scores };
    Object.keys(points).forEach(key => {
      if (newScores[key] !== undefined) {
        newScores[key] += points[key];
      }
    });
    setScores(newScores);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    let maxScore = -1;
    let winnerId = null;

    Object.entries(finalScores).forEach(([id, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winnerId = id;
      }
    });

    const winner = VIBE_TYPES.find(t => t.id === winnerId);
    setBestMatch(winner);
    setViewedMatch(winner); // Default view is the best match
    setStep('result');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    const initialScores = {};
    VIBE_TYPES.forEach(type => initialScores[type.id] = 0);
    setScores(initialScores);
    setStep('start');
    setBestMatch(null);
    setViewedMatch(null);
  };

  // --- COMPONENTS ---

  const StartScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-pink-300 blur-3xl opacity-30 rounded-full"></div>
        <Sparkles className="w-24 h-24 text-pink-500 relative z-10" />
      </div>
      <div className="space-y-4 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          {t.startTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{t.startTitleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {t.startDescription}
        </p>
      </div>
      <button
        onClick={() => setStep('quiz')}
        className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative flex items-center gap-2">
          {t.startButton} <ChevronRight className="w-5 h-5" />
        </span>
      </button>
    </div>
  );

  const QuizScreen = () => {
    const question = getTranslatedQuestion(QUESTIONS[currentQuestion]);
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

    return (
      <div className="max-w-2xl mx-auto w-full animate-fade-in">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold text-gray-500 mb-2">
            <span>{t.questionProgress.replace('{current}', currentQuestion + 1).replace('{total}', QUESTIONS.length)}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h2>
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.points)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-pink-500 hover:bg-pink-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700 group-hover:text-pink-700">{option.text}</span>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-pink-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ResultScreen = () => {
    const translatedViewedMatch = getTranslatedVibeType(viewedMatch);

    return (
      <div className="max-w-5xl mx-auto w-full animate-fade-in space-y-10">

        {/* --- FEATURED PRODUCT CARD --- */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* IMAGE CONTAINER */}
            <div className={`relative h-64 md:h-auto overflow-hidden bg-gradient-to-br ${viewedMatch.imageGradient} flex items-center justify-center p-8 group`}>
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-white opacity-10 rounded-full scale-150 translate-x-10 translate-y-10"></div>

              {/* The "Product Image" Placeholder */}
              <div className="relative z-10 w-[95%] h-[95%] bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                 <div className="w-[90%] h-[90%] drop-shadow-lg">
                   {viewedMatch.icon}
                 </div>
              </div>
            </div>

            {/* DETAILS & INFOGRAPHIC */}
            <div className="p-8 md:p-10 flex flex-col justify-center">

              {/* Header */}
              <div className="mb-6">
                 <div className="flex items-center justify-between mb-2">
                   <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                     {bestMatch.id === viewedMatch.id ? t.yourTopRecommendation : t.vibratorDetailView}
                   </span>
                   <div className="p-2 bg-gray-50 rounded-full">
                     <Info className="w-4 h-4 text-gray-400" />
                   </div>
                 </div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-3">{translatedViewedMatch.name}</h2>
                 <p className="text-gray-600 leading-relaxed">{translatedViewedMatch.description}</p>
              </div>

              {/* Comparison Chart / Infographic */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold text-sm">
                  <BarChart3 className="w-4 h-4" />
                  <span>{t.performanceStats}</span>
                </div>
                <StatBar label={t.intensity} value={viewedMatch.specs.intensity} colorClass="bg-pink-500" />
                <StatBar label={t.discretion} value={viewedMatch.specs.discretion} colorClass="bg-purple-500" />
                <StatBar label={t.versatility} value={viewedMatch.specs.versatility} colorClass="bg-indigo-500" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {translatedViewedMatch.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- CLICKABLE GRID --- */}
        <div>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="font-medium text-sm uppercase tracking-wider">{t.exploreAll}</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VIBE_TYPES.map((type) => {
              const translatedType = getTranslatedVibeType(type);
              const isMatch = type.id === bestMatch.id;
              const isSelected = type.id === viewedMatch.id;

              return (
                <button
                  key={type.id}
                  onClick={() => setViewedMatch(type)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 relative group
                    ${isSelected
                      ? 'border-gray-800 ring-1 ring-gray-800 shadow-md bg-white scale-[1.02]'
                      : 'bg-white border-gray-100 hover:border-pink-300 hover:shadow-lg'
                    }`}
                >
                  <div className={`p-3 rounded-lg flex-shrink-0 transition-colors ${type.color} ${isSelected ? 'bg-gray-900' : ''} w-12 h-12 flex items-center justify-center overflow-hidden`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                      {translatedType.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {isMatch && <span className="text-[10px] bg-pink-600 text-white px-1.5 rounded-sm font-bold uppercase tracking-wider">
                        {language === 'en' ? 'Top Match' : '最佳匹配'}
                      </span>}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-8 pb-16">
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            {t.retakeQuiz}
          </button>
          <a
            href="https://www.sevencreations.shop/products"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {t.shopProducts}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800 font-sans">
      {/* Navigation / Header */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
            <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            {t.appName}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-xs font-medium text-gray-400 uppercase tracking-widest">
              {t.appSubtitle}
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full border border-gray-200 hover:border-pink-300 transition-colors"
              title={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">
                {language === 'en' ? '🇨🇳' : '🇺🇸'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-12">
        {step === 'start' && <StartScreen />}
        {step === 'quiz' && <QuizScreen />}
        {step === 'result' && <ResultScreen />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <p className="text-gray-400 text-sm">
             {t.footer}
           </p>
        </div>
      </footer>
    </div>
  );
}

