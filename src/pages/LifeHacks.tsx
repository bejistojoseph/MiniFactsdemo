
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  ChefHat, 
  Home, 
  Smartphone, 
  Coins, 
  Luggage, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import RandomHackButton from '@/components/RandomHackButton';

// Life hacks data organized by categories
const lifehacksData = {
  kitchen: [
    {
      id: 'k1',
      title: 'Keep Brown Sugar Soft',
      description: 'Add a marshmallow or a slice of bread to the container to prevent hardening.',
      icon: '🍞'
    },
    {
      id: 'k2',
      title: 'Freeze Herbs in Olive Oil',
      description: 'Use ice cube trays to freeze herbs in olive oil for easy cooking portions.',
      icon: '🌿'
    },
    {
      id: 'k3',
      title: 'Pit Cherries with a Straw',
      description: 'Push a straw through the stem end to remove the pit cleanly.',
      icon: '🍒'
    },
    {
      id: 'k4',
      title: 'Revive Stale Chips',
      description: 'Microwave stale chips or crackers for 10 seconds with a damp paper towel.',
      icon: '🍪'
    },
    {
      id: 'k5',
      title: 'Easy Ginger Peeling',
      description: 'Peel ginger easily with a spoon—the skin scrapes right off!',
      icon: '🥄'
    },
    {
      id: 'k6',
      title: 'Stop Crying While Cutting Onions',
      description: 'Chew gum or refrigerate onions for 30 mins first.',
      icon: '🧅'
    },
    {
      id: 'k7',
      title: 'Quickly Chill Drinks',
      description: 'Wrap in a wet paper towel & freeze for 8 mins.',
      icon: '🧊'
    },
    {
      id: 'k8',
      title: 'Unclog Salt Shakers',
      description: 'Add a few grains of rice to absorb moisture.',
      icon: '🧂'
    },
    {
      id: 'k9',
      title: 'Peel Boiled Eggs Easily',
      description: 'Add 1 tsp baking soda to boiling water.',
      icon: '🥚'
    },
    {
      id: 'k10',
      title: 'Keep Cake Fresh',
      description: 'Store with a slice of bread (the cake absorbs its moisture).',
      icon: '🍰'
    },
    {
      id: 'k11',
      title: 'Revive Wilted Greens',
      description: 'Soak in ice water for 15 mins.',
      icon: '🥬'
    },
    {
      id: 'k12',
      title: 'Grate Butter Easily',
      description: 'Freeze for 10 mins first.',
      icon: '🧈'
    },
    {
      id: 'k13',
      title: 'Prevent Pasta Boil-overs',
      description: 'Lay a wooden spoon across the pot.',
      icon: '🍝'
    },
    {
      id: 'k14',
      title: 'Microwave Two Plates at Once',
      description: 'Place a mug upside down between them.',
      icon: '🍽️'
    },
    {
      id: 'k15',
      title: 'DIY Buttermilk',
      description: 'Mix 1 cup milk + 1 tbsp lemon juice/vinegar.',
      icon: '🥛'
    },
    {
      id: 'k16',
      title: 'Too Salty? Add a Potato',
      description: 'A raw potato can absorb excess salt from soups and stews.',
      icon: '🥔'
    }
  ],
  home: [
    {
      id: 'h1',
      title: 'Tension Rod for Spray Bottles',
      description: 'Use a tension rod under the sink to hang spray bottles and save space.',
      icon: '🧴'
    },
    {
      id: 'h2',
      title: 'Sheet Storage Hack',
      description: 'Store bed sheets inside their matching pillowcase to keep sets organized.',
      icon: '🛏️'
    },
    {
      id: 'h3',
      title: 'Bread Clip Cord Labels',
      description: 'Label cords with bread clips—write the device name on them and slide them onto wires.',
      icon: '🔌'
    },
    {
      id: 'h4',
      title: 'Upside-down Muffin Tin',
      description: 'Turn a muffin tin upside down to hold small items (nails, beads, etc.) while working.',
      icon: '🧁'
    },
    {
      id: 'h5',
      title: 'Coffee Filter Screen Cleaner',
      description: "Use a coffee filter to clean TV screens—it's lint-free and gentle.",
      icon: '📺'
    },
    {
      id: 'h6',
      title: 'Store Winter Clothes with Vacuum Bags',
      description: 'Saves 75% space.',
      icon: '👕'
    },
    {
      id: 'h7',
      title: 'Label Cords with Washi Tape',
      description: 'Write on it & wrap around wires.',
      icon: '📏'
    },
    {
      id: 'h8',
      title: 'Hang Brooms/Mops with Bike Hooks',
      description: 'Frees up floor space.',
      icon: '🧹'
    },
    {
      id: 'h9',
      title: 'Use a Pegboard for Tools',
      description: 'Customizable & visible storage.',
      icon: '🔨'
    },
    {
      id: 'h10',
      title: 'Fold Fitted Sheets',
      description: 'Tuck corners into each other (YouTube it!).',
      icon: '🧺'
    },
    {
      id: 'h11',
      title: 'Organize Jewelry in Ice Cube Trays',
      description: 'Perfect for small items.',
      icon: '💍'
    },
    {
      id: 'h12',
      title: 'Repurpose Soda Tabs',
      description: 'Hang multiple hangers in closets.',
      icon: '👚'
    },
    {
      id: 'h13',
      title: 'Store Batteries in Pill Organizers',
      description: 'Prevents contact & chaos.',
      icon: '🔋'
    },
    {
      id: 'h14',
      title: 'Use Tension Rods in Cabinets',
      description: 'Creates extra shelving.',
      icon: '🪑'
    },
    {
      id: 'h15',
      title: 'Keep Paint Info on Lids',
      description: 'Tape a sample swatch + color code.',
      icon: '🎨'
    }
  ],
  tech: [
    {
      id: 't1',
      title: 'Find Phone with Smartwatch',
      description: 'Ping your phone even when on silent via Find My Device on your smartwatch.',
      icon: '⌚'
    },
    {
      id: 't2',
      title: 'Binder Clip Cable Organizer',
      description: 'Use binder clips as cable organizers on your desk.',
      icon: '📎'
    },
    {
      id: 't3',
      title: 'Fast Phone Charging',
      description: 'Charge your phone faster by switching to airplane mode while charging.',
      icon: '✈️'
    },
    {
      id: 't4',
      title: 'DIY Phone Stand',
      description: 'Fold a paperclip into a "Z" shape and prop up your phone.',
      icon: '📱'
    },
    {
      id: 't5',
      title: 'Fix Phone Scratches',
      description: 'Use toothpaste to buff out small phone scratches (works on plastic screens).',
      icon: '🪥'
    }
  ],
  money: [
    {
      id: 'm1',
      title: 'Efficient Pasta Cooking',
      description: 'Boil pasta in less water—it cooks just as well and saves energy.',
      icon: '🍝'
    },
    {
      id: 'm2',
      title: 'Homemade Laundry Detergent',
      description: 'Make your own with baking soda, grated soap, and washing soda.',
      icon: '🧺'
    },
    {
      id: 'm3',
      title: 'Rubber Band Jar Opener',
      description: 'Use a rubber band to open stuck jars—wrap it around the lid for extra grip.',
      icon: '🫙'
    },
    {
      id: 'm4',
      title: 'Freeze Leftover Wine',
      description: 'Freeze leftover wine in ice cube trays for cooking later.',
      icon: '🍷'
    },
    {
      id: 'm5',
      title: 'Repurpose Old Socks',
      description: 'Use old socks as dusting mitts or pet toys.',
      icon: '🧦'
    },
    {
      id: 'm6',
      title: 'Library Perks',
      description: 'Free ebooks, movies, even museum passes!',
      icon: '📚'
    },
    {
      id: 'm7',
      title: 'Price-match Guarantees',
      description: "Many stores honor competitors' prices.",
      icon: '💰'
    },
    {
      id: 'm8',
      title: 'DIY Cleaning Wipes',
      description: 'Soap + water + paper towels in a jar.',
      icon: '🧽'
    },
    {
      id: 'm9',
      title: 'Grocery Shop After Eating',
      description: 'Reduces impulse buys by 30%.',
      icon: '🛒'
    },
    {
      id: 'm10',
      title: 'Use Cashback Apps',
      description: 'Rakuten, Honey, or Ibotta.',
      icon: '📱'
    },
    {
      id: 'm11',
      title: 'Repurpose Pickle Juice',
      description: 'Makes great marinades or salad dressings.',
      icon: '🥒'
    },
    {
      id: 'm12',
      title: 'Freeze Leftover Coffee',
      description: 'Use as iced coffee cubes later.',
      icon: '☕'
    },
    {
      id: 'm13',
      title: 'Buy Holiday Decor Post-Holiday',
      description: '70-90% discounts.',
      icon: '🎄'
    },
    {
      id: 'm14',
      title: 'Cancel Unused Subscriptions',
      description: 'Track with Truebill or Rocket Money.',
      icon: '📝'
    },
    {
      id: 'm15',
      title: 'Grow Green Onions in Water',
      description: 'Regrows 3-4 times!',
      icon: '🌱'
    }
  ],
  travel: [
    {
      id: 'tr1',
      title: 'Roll Clothes for Packing',
      description: 'Roll clothes instead of folding to save luggage space and prevent wrinkles.',
      icon: '👕'
    },
    {
      id: 'tr2',
      title: 'Shoe Cover Hack',
      description: 'Use a shower cap to cover shoes in your suitcase and keep clothes clean.',
      icon: '👟'
    },
    {
      id: 'tr3',
      title: 'Offline Google Maps',
      description: 'Bookmark Google Maps offline before traveling to avoid data charges.',
      icon: '🗺️'
    },
    {
      id: 'tr4',
      title: 'Two-Minute Rule',
      description: 'If a task takes less than 2 minutes, do it immediately rather than later.',
      icon: '⏱️'
    },
    {
      id: 'tr5',
      title: 'Natural Wake-Up Trick',
      description: 'Drink water before bed to naturally wake up earlier without an alarm.',
      icon: '💧'
    },
    {
      id: 'tr6',
      title: 'Roll Clothes + Packing Cubes',
      description: 'Fits 2x more in luggage.',
      icon: '🧳'
    },
    {
      id: 'tr7',
      title: 'Google Maps Offline with "OK Maps"',
      description: 'Type "OK maps" in search bar to save areas.',
      icon: '🌎'
    },
    {
      id: 'tr8',
      title: 'Hotels vs. Airbnb',
      description: 'Always compare total costs (hidden fees add up!).',
      icon: '🏨'
    },
    {
      id: 'tr9',
      title: 'TSA-approved Liquids Hack',
      description: 'Use contact lens cases for creams.',
      icon: '💧'
    },
    {
      id: 'tr10',
      title: 'Charge Devices Faster',
      description: 'Use a wall outlet, not USB ports.',
      icon: '🔌'
    },
    {
      id: 'tr11',
      title: 'The "5-minute Rule"',
      description: 'Overcome procrastination by starting tiny tasks.',
      icon: '⏰'
    },
    {
      id: 'tr12',
      title: 'Email Templates',
      description: 'Save common responses in Gmail "Canned Responses".',
      icon: '📧'
    },
    {
      id: 'tr13',
      title: 'Focus Hack',
      description: 'Wear headphones (even without music) to avoid interruptions.',
      icon: '🎧'
    },
    {
      id: 'tr14',
      title: 'Airplane Seat Sanitizing',
      description: 'Wipe tray tables, armrests, and vents.',
      icon: '✈️'
    },
    {
      id: 'tr15',
      title: 'Learn Keyboard Shortcuts',
      description: 'Saves ~8 workdays/year (try ShortcutWorld).',
      icon: '⌨️'
    }
  ]
};

// Get all hacks in a single array for random selection
const getAllHacks = () => {
  const allHacks = [];
  for (const category in lifehacksData) {
    allHacks.push(...lifehacksData[category]);
  }
  return allHacks;
};

const categories = [
  { 
    id: 'kitchen', 
    name: 'Kitchen Hacks', 
    icon: <ChefHat className="w-6 h-6" />, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
  { 
    id: 'home', 
    name: 'Home & Organization', 
    icon: <Home className="w-6 h-6" />, 
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100'
  },
  { 
    id: 'tech', 
    name: 'Tech & Gadgets', 
    icon: <Smartphone className="w-6 h-6" />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    id: 'money', 
    name: 'Money-Saving Tricks', 
    icon: <Coins className="w-6 h-6" />, 
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    id: 'travel', 
    name: 'Travel & Productivity', 
    icon: <Luggage className="w-6 h-6" />, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  }
];

const LifeHacks = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('kitchen');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    toast({
      title: `${categories.find(cat => cat.id === categoryId)?.name}`,
      description: "Showing life hacks for this category",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-teal-600 font-medium text-sm mb-6 shadow-sm">
                Tips & Tricks
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clever Life Hacks
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Smart shortcuts and creative solutions to make everyday life easier
              </p>
              
              <div className="flex justify-center">
                <RandomHackButton allHacks={getAllHacks()} />
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

        {/* Life Hacks Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifehacksData[activeCategory].map((hack) => (
                <div 
                  key={hack.id} 
                  className={`p-6 rounded-xl border ${categories.find(cat => cat.id === activeCategory).borderColor} ${categories.find(cat => cat.id === activeCategory).bgColor} hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{hack.icon}</div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${categories.find(cat => cat.id === activeCategory).color}`}>{hack.title}</h3>
                      <p className="text-gray-700">{hack.description}</p>
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

export default LifeHacks;
