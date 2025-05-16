import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Computer, 
  Smartphone, 
  Globe, 
  Laptop,
  Shield,
  Share2,
  Sparkles
} from 'lucide-react';

// Tech tips data organized by categories
const techTipsData = {
  computerLaptop: [
    {
      id: 'cl1',
      title: 'Speed up a slow PC',
      description: 'Press Ctrl + Shift + Esc to open Task Manager and kill unnecessary processes.',
      icon: '💻'
    },
    {
      id: 'cl2',
      title: 'Take a screenshot of just one area',
      description: 'Windows + Shift + S (Windows) or Cmd + Shift + 4 (Mac).',
      icon: '🖼️'
    },
    {
      id: 'cl3',
      title: 'Quickly minimize all windows',
      description: 'Windows + D (Windows) or Cmd + Option + H + M (Mac).',
      icon: '🪟'
    },
    {
      id: 'cl4',
      title: 'Right-click without a mouse',
      description: 'Press Shift + F10 on your keyboard.',
      icon: '🖱️'
    },
    {
      id: 'cl5',
      title: 'Instantly lock your PC',
      description: 'Windows + L (great for privacy!).',
      icon: '🔒'
    },
    {
      id: 'cl6',
      title: 'Laptop as Second Monitor',
      description: 'Use Windows "Projection" or Duet Display.',
      icon: '🖥️'
    },
    {
      id: 'cl7',
      title: 'Quick Split-Screen',
      description: 'Windows: Windows + Left/Right Arrow | Mac: Drag to screen edges.',
      icon: '⬅️'
    }
  ],
  smartphone: [
    {
      id: 's1',
      title: 'Charge your phone faster',
      description: 'Enable Airplane Mode while charging.',
      icon: '⚡'
    },
    {
      id: 's2',
      title: 'Find your lost phone (even on silent)',
      description: 'Use Google\'s Find My Device (Android) or Find My iPhone (iOS).',
      icon: '🔍'
    },
    {
      id: 's3',
      title: 'Use your phone as a free document scanner',
      description: 'Google Drive (iOS/Android) has a built-in Scan tool.',
      icon: '📄'
    },
    {
      id: 's4',
      title: 'Extend battery life',
      description: 'Enable Dark Mode on OLED screens (saves power).',
      icon: '🔋'
    },
    {
      id: 's5',
      title: 'Quickly delete typos',
      description: 'Shake your iPhone to undo text (Android: swipe left on Gboard).',
      icon: '⌨️'
    },
    {
      id: 's6',
      title: 'Fix a Wet Phone',
      description: 'Bury in uncooked rice or use silica gel packs.',
      icon: '💦'
    },
    {
      id: 's7',
      title: 'Type Hands-Free on iPhone',
      description: 'Enable "Hey Siri, type this…"',
      icon: '🗣️'
    },
    {
      id: 's8',
      title: 'Android Secret Menu',
      description: 'Dial *#*#4636#*#* for testing tools.',
      icon: '🔧'
    },
    {
      id: 's9',
      title: 'Scan Documents with Notes app',
      description: 'iPhone: New Note → Camera icon → Scan.',
      icon: '📝'
    },
    {
      id: 's10',
      title: 'Fix a Wet Phone',
      description: 'Bury in uncooked rice or use silica gel packs.',
      icon: '💦'
    },
    {
      id: 's11',
      title: 'Type Hands-Free on iPhone',
      description: 'Enable "Hey Siri, type this…"',
      icon: '🗣️'
    },
    {
      id: 's12',
      title: 'Android Secret Menu',
      description: 'Dial *#*#4636#*#* for testing tools.',
      icon: '🔧'
    }
  ],
  browserInternet: [
    {
      id: 'bi1',
      title: 'Reopen a closed tab',
      description: 'Ctrl + Shift + T (Windows) or Cmd + Shift + T (Mac).',
      icon: '🔄'
    },
    {
      id: 'bi2',
      title: 'Search a website directly from Google',
      description: 'Type site:example.com search term.',
      icon: '🔎'
    },
    {
      id: 'bi3',
      title: 'Bypass paywalls',
      description: 'Add a . after the domain (e.g., example.com.). (Works on some sites!)',
      icon: '💰'
    },
    {
      id: 'bi4',
      title: 'Watch YouTube in the background',
      description: 'Open in Desktop Mode on mobile or use YouTube Premium.',
      icon: '▶️'
    },
    {
      id: 'bi5',
      title: 'Find free Wi-Fi anywhere',
      description: 'Use apps like WiFi Map or Google Maps (search "free wifi").',
      icon: '📶'
    },
    {
      id: 'bi6',
      title: 'Find Wi-Fi Password on PC',
      description: 'Open CMD → Type netsh wlan show profile name="NETWORK" key=clear',
      icon: '🔑'
    },
    {
      id: 'bi7',
      title: 'Disable YouTube Autoplay',
      description: 'Click profile → Settings → Autoplay OFF.',
      icon: '⏹️'
    },
    {
      id: 'bi8',
      title: 'Google Photos Hack',
      description: 'Search "receipts" or "license plates" to find old pics.',
      icon: '🖼️'
    }
  ],
  softwareShortcuts: [
    {
      id: 'ss1',
      title: 'Type symbols fast',
      description: 'Hold Alt + type numbers (e.g., Alt + 3 = ♥).',
      icon: '♥'
    },
    {
      id: 'ss2',
      title: 'Quickly mute Zoom/Meet',
      description: 'Spacebar (hold to unmute temporarily).',
      icon: '🔇'
    },
    {
      id: 'ss3',
      title: 'Paste without formatting',
      description: 'Ctrl + Shift + V (Windows) or Cmd + Shift + V (Mac).',
      icon: '📋'
    },
    {
      id: 'ss4',
      title: 'Rotate a video without software',
      description: 'Open in VLC Player > Tools > Effects > Rotate.',
      icon: '🔄'
    },
    {
      id: 'ss5',
      title: 'Free up storage',
      description: 'Use WinDirStat (Windows) or Disk Utility (Mac) to find large files.',
      icon: '💾'
    },
    {
      id: 'ss6',
      title: 'Spotify Sleep Timer',
      description: 'Play song → Tap ⏱️ (Android) or "…" → Sleep Timer (iOS).',
      icon: '🎵'
    },
    {
      id: 'ss7',
      title: 'Laptop as Second Monitor',
      description: 'Use Windows "Projection" or Duet Display.',
      icon: '🖥️'
    },
    {
      id: 'ss8',
      title: 'Find Wi-Fi Password on PC',
      description: 'Open CMD → Type netsh wlan show profile name="NETWORK" key=clear',
      icon: '🔑'
    },
    {
      id: 'ss9',
      title: 'Scan Documents with Notes app',
      description: 'iPhone: New Note → Camera icon → Scan.',
      icon: '📝'
    },
    {
      id: 'ss10',
      title: 'Disable YouTube Autoplay',
      description: 'Click profile → Settings → Autoplay OFF.',
      icon: '⏹️'
    },
    {
      id: 'ss11',
      title: 'Google Photos Hack',
      description: 'Search "receipts" or "license plates" to find old pics.',
      icon: '🖼️'
    },
    {
      id: 'ss12',
      title: 'Spotify Sleep Timer',
      description: 'Play song → Tap ⏱️ (Android) or "…" → Sleep Timer (iOS).',
      icon: '🎵'
    },
    {
      id: 'ss13',
      title: 'Quick Split-Screen',
      description: 'Windows: Windows + Left/Right Arrow | Mac: Drag to screen edges.',
      icon: '⬅️'
    }
  ],
  privacySecurity: [
    {
      id: 'ps1',
      title: 'Check if your passwords were leaked',
      description: 'Visit Have I Been Pwned?.',
      icon: '🔑'
    },
    {
      id: 'ps2',
      title: 'Send self-destructing messages',
      description: 'Use Telegram\'s "Secret Chat" or Signal.',
      icon: '💥'
    },
    {
      id: 'ps3',
      title: 'Avoid phishing scams',
      description: 'Hover over links to see the real URL before clicking.',
      icon: '🎣'
    },
    {
      id: 'ps4',
      title: 'Stop apps from tracking you',
      description: 'Disable ad tracking in iOS/Android settings.',
      icon: '👁️'
    },
    {
      id: 'ps5',
      title: 'Encrypt files for free',
      description: 'Use 7-Zip (Windows) or FileVault (Mac).',
      icon: '🔐'
    }
  ],
  techMyths: [
    {
      id: 'tm1',
      title: 'Do magnets damage phones?',
      description: 'Modern phones use flash memory that isn\'t affected by magnets. Only very powerful magnets can damage specialized components.',
      icon: '🧲'
    },
    {
      id: 'tm2',
      title: 'Closing apps saves battery?',
      description: 'Usually no! Modern phones optimize background apps. Force-closing can actually use more battery when reopening.',
      icon: '🔋'
    },
    {
      id: 'tm3',
      title: 'Private browsing = totally anonymous?',
      description: 'Not quite. Your ISP and network admin can still see your activity. Only hides local browsing history.',
      icon: '🕵️'
    },
    {
      id: 'tm4',
      title: 'More megapixels = better camera?',
      description: 'Not necessarily. Sensor size and lens quality are often more important for image quality.',
      icon: '📸'
    },
    {
      id: 'tm5',
      title: 'Full discharge extends battery life?',
      description: 'Modern lithium-ion batteries last longest when kept between 20-80% charge.',
      icon: '⚡'
    }
  ]
};

// Get all tips in a single array for random selection
const getAllTips = () => {
  const allTips = [];
  for (const category in techTipsData) {
    allTips.push(...techTipsData[category]);
  }
  return allTips;
};

const categories = [
  { 
    id: 'computerLaptop', 
    name: 'Computer & Laptop Hacks', 
    icon: <Laptop className="w-6 h-6" />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    id: 'smartphone', 
    name: 'Smartphone Tricks', 
    icon: <Smartphone className="w-6 h-6" />, 
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    id: 'browserInternet', 
    name: 'Browser & Internet Hacks', 
    icon: <Globe className="w-6 h-6" />, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
  { 
    id: 'softwareShortcuts', 
    name: 'Software & Shortcuts', 
    icon: <Computer className="w-6 h-6" />, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  { 
    id: 'privacySecurity', 
    name: 'Privacy & Security Tips', 
    icon: <Shield className="w-6 h-6" />, 
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  { 
    id: 'techMyths', 
    name: 'Tech Myth Busters', 
    icon: <Sparkles className="w-6 h-6" />, 
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  }
];

const TechTips = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('computerLaptop');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    toast({
      title: `${categories.find(cat => cat.id === categoryId)?.name}`,
      description: "Showing tech tips for this category",
      duration: 3000,
    });
  };

  const showRandomTip = () => {
    const allTips = getAllTips();
    const randomIndex = Math.floor(Math.random() * allTips.length);
    const randomTip = allTips[randomIndex];

    toast({
      title: randomTip.title,
      description: (
        <div className="flex items-start gap-2">
          <span className="text-xl">{randomTip.icon}</span>
          <span>{randomTip.description}</span>
        </div>
      ),
      duration: 5000,
    });
  };

  const handleShare = (tip) => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Tech Tip: ' + tip.title,
          text: `${tip.title} - ${tip.description}`,
          url: window.location.href,
        })
        .then(() => {
          toast({
            title: "Shared successfully!",
            description: "The tech tip has been shared",
            duration: 3000,
          });
        })
        .catch((error) => {
          toast({
            title: "Sharing failed",
            description: error.message || "There was an error sharing the content",
            duration: 3000,
          });
        });
    } else {
      const shareText = `Tech Tip: ${tip.title} - ${tip.description} ${window.location.href}`;
      
      navigator.clipboard.writeText(shareText).then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "Share this tech tip with your friends",
          duration: 3000,
        });
      }).catch(() => {
        toast({
          title: "Unable to copy",
          description: "Please select and copy the text manually",
          duration: 3000,
        });
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-blue-600 font-medium text-sm mb-6 shadow-sm">
                Tech Shortcuts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tech Tips & Tricks
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Smart shortcuts and technical solutions to make your digital life easier
              </p>
              
              <div className="flex justify-center">
                <Button 
                  onClick={showRandomTip}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all group"
                  size="lg"
                >
                  Show Random Tech Tip
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    activeCategory === category.id 
                      ? `${category.color.replace('text-', 'bg-')} text-white` 
                      : `${category.borderColor} ${category.color}`
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Tips Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techTipsData[activeCategory].map((tip) => (
                <div 
                  key={tip.id} 
                  className={`p-6 rounded-xl border ${categories.find(cat => cat.id === activeCategory).borderColor} ${categories.find(cat => cat.id === activeCategory).bgColor} hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{tip.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className={`text-xl font-semibold mb-2 ${categories.find(cat => cat.id === activeCategory).color}`}>{tip.title}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleShare(tip)}
                          className="h-8 w-8 rounded-full hover:bg-gray-100"
                          title="Share this tip"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechTips;
