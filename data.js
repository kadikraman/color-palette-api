// more here http://www.colourlovers.com/api/palettes/top?format=json

const SOLARIZED = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" }
];

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" }
];

const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" }
];

const GIANT_GOLDFISH = [
  { colorName: "Light Blue", hexCode: "#69D2E7" },
  { colorName: "Teal", hexCode: "#A7DBD8" },
  { colorName: "Light green", hexCode: "#E0E4CC" },
  { colorName: "Light orange", hexCode: "#F38630" },
  { colorName: "Dark orange", hexCode: "#FA6900" }
];

const THOUGHT_PROVOKING = [
  { colorName: "Yellow", hexCode: "#ECD078" },
  { colorName: "Orange", hexCode: "#D95B43" },
  { colorName: "Red", hexCode: "#C02942" },
  { colorName: "Crimson", hexCode: "#542437" },
  { colorName: "Clay", hexCode: "#53777A" }
];

const OCEAN_FIVE = [
  { colorName: "Blue", hexCode: "#00A0B0" },
  { colorName: "Brown", hexCode: "#6A4A3C" },
  { colorName: "Red", hexCode: "#CC333F" },
  { colorName: "Orange", hexCode: "#EB6841" },
  { colorName: "Yellow", hexCode: "#EDC951" }
];

const COMPATIBLE = [
  { colorName: "Teal", hexCode: "#3FB8AF" },
  { colorName: "Light teal", hexCode: "#7FC7AF" },
  { colorName: "Yellow", hexCode: "#DAD8A7" },
  { colorName: "Pink", hexCode: "#FF9E9D" },
  { colorName: "Dark Pink", hexCode: "#FF3D7F" }
];

const GOOD_FRIENDS = [
  { colorName: "Light brown", hexCode: "#D9CEB2" },
  { colorName: "Darker brown", hexCode: "#948C75" },
  { colorName: "Kinda white", hexCode: "#D5DED9" },
  { colorName: "Brown", hexCode: "#7A6A53" },
  { colorName: "Blueish", hexCode: "#99B2B7" }
];

const HEADACHE = [
  { colorName: "Brown", hexCode: "#655643" },
  { colorName: "Teal", hexCode: "#80BCA3" },
  { colorName: "Yellowish", hexCode: "#F6F7BD" },
  { colorName: "Yellow", hexCode: "#E6AC27" },
  { colorName: "Red", hexCode: "#BF4D28" }
];

const NEW_DAY = [
  { colorName: "Dark Blue", hexCode: "#00A8C6" },
  { colorName: "Blue", hexCode: "#40C0CB" },
  { colorName: "White", hexCode: "#F9F2E7" },
  { colorName: "green", hexCode: "#AEE239" },
  { colorName: "Dark green", hexCode: "#8FBE00" }
];

const COLOR_PALETTES = [
  { id: 0, paletteName: "Solarized", colors: SOLARIZED },
  { id: 1, paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
  { id: 2, paletteName: "Rainbow", colors: RAINBOW },
  { id: 3, paletteName: "Giant Goldfish", colors: GIANT_GOLDFISH },
  { id: 4, paletteName: "Thought Provoking", colors: THOUGHT_PROVOKING },
  { id: 5, paletteName: "Ocean Five", colors: OCEAN_FIVE },
  { id: 6, paletteName: "Compatible", colors: COMPATIBLE },
  { id: 7, paletteName: "Good Friends", colors: GOOD_FRIENDS },
  { id: 8, paletteName: "Headache", colors: HEADACHE }
];

module.exports.palettes = COLOR_PALETTES;
