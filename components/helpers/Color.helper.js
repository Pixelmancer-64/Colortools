import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const options = [
  { value: "rgb", desc: "rgb(255, 255, 255)" },
  { value: "hex", desc: "#fffff" },
  { value: "rgba", desc: "rgba(255, 255, 255, 1)" },
  { value: "hsl", desc: "hsl(0, 0%, 100%)" },
];

function generatePalette(starter) {
  const { name, colors } = starter;
  let newPalette = {
    name,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of colors) {
    const scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css().replace(/,/g, ", "),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1)")
          .replace(/,/g, ", "),
        hsl: chroma(scale[i]).css("hsl").replace(/,/g, ", "),
      });
    }
  }
  return newPalette;
}

function getRange(hex) {
  return [chroma(hex).darken(1.4).hex(), hex, "#fff"];
}

function generateScale(hex, num) {
  return chroma.scale(getRange(hex)).mode("lab").colors(num);
}

export { generatePalette, options };
