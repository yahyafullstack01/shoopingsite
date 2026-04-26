/** Підбір кольору для swatch за текстовою назвою (будь-яка мова). */

function norm(s) {
  if (!s || typeof s !== "string") return "";
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

const RULES = [
  [/chocol|шоколад|шокол|chocolat|какао|cocoa|коричн|brown|marron|brun/, "#3d2314"],
  [/black|noir|черн|чорн|negro|nero|чорний|черный/, "#1a1a1a"],
  [/white|blanc|біл|бел|белый|білий|milk|lait|молоч|ivoire|ivory|слонов|ecru|écru/, "#f5f5f4"],
  [/red|rouge|червон|красн|бордо|burgundy|бордов|wine|винн/, "#991b1b"],
  [/blue|bleu|син|голуб|navy|джинс|denim|лазур|azure/, "#1e40af"],
  [/green|vert|зелен|olive|хакі|khaki|sage|м\'ята|mint/, "#166534"],
  [/pink|rose|рожев|розов|фукс|fuchsia|малин|magenta/, "#db2777"],
  [/yellow|jaune|жовт|золот|gold|mustard|гірч|медов|honey/, "#ca8a04"],
  [/orange|оранж|персик|peach|terracotta|теракот/, "#ea580c"],
  [/purple|violet|фіолет|лілов|lilac|лаванд|lavender|plum/, "#6d28d9"],
  [/gray|grey|gris|сірий|серый|серебр|silver|графіт|graphite|anthracite|антрацит/, "#9ca3af"],
  [/beige|беж|пісоч|sand|camel|кемел|taupe|nude|тілес|пудр|powder/, "#d6c8b8"],
  [/cream|крем|ваніль|vanilla|off[\s-]?white/, "#faf8f3"],
  [/mint|мята|menthe|aqua|бірюз|turquoise|teal/, "#0d9488"],
  [/coral|корал/, "#f97316"],
  [/lemon|лимон|лайм|lime/, "#84cc16"],
  [/tan|коньяк|cognac|карамел|caramel/, "#a16207"],
];

export function approximateColorFromLabel(label) {
  const s = norm(label);
  if (!s) return "#d1d5db";
  for (const [re, hex] of RULES) {
    if (re.test(s)) return hex;
  }
  return "#d1d5db";
}
