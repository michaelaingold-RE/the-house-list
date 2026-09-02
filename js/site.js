(function () {
  var tag = "myamazon2006d-20";
  document.querySelectorAll('a[href*="amazon.com"]').forEach(function (a) {
    try {
      var u = new URL(a.href);
      u.searchParams.set("tag", tag);
      a.href = u.toString();
    } catch (e) {}
  });

  var lines = {
    "lmnt-raspberry-salt": { say: "This packet is for heat and long days. It is salty on purpose. No sugar.", why: "Click through if you already want a zero-sugar electrolyte and need to check flavor and count." },
    "liquid-iv-lemon-lime": { say: "This is the packet people finish. It uses sugar so it drinks easier than LMNT.", why: "Click through if you want the travel sleeve and need to confirm the Lemon Lime count." },
    "magnesium-glycinate": { say: "This bottle is a glycinate capsule from a clinic-style brand. It is not a sleep promise.", why: "Click through only if you already chose this form and need to read the serving size." },
    "dude-wipes": { say: "Bulk unscented wipes. Loud box, simple job.", why: "Click through if you want the 288-count and not a perfume pack." },
    "cottonelle-wipes": { say: "Same job as Dude, quieter pack. Better when you need one in more than one bath.", why: "Click through to compare pack count and flip-top vs the big sleeve." },
    "boka-toothpaste": { say: "Fluoride-free paste with n-Ha. Only a fit if you already decided that is what you want.", why: "Click through to read the label with your dentist plan in mind." },
    "amazon-basics-aa": { say: "Junk-drawer AAs. Not exciting. Stops a store run.", why: "Click through if you need the 48-pack on the shelf this week." },
    "amazon-basics-aaa": { say: "Same idea, smaller cell. Remotes and small lights.", why: "Click through for the 36-count if the drawer is empty." },
    "miss-mouths": { say: "Spray the stain while it is wet. Keep the bottle in the kitchen.", why: "Click through if food and coffee stains are a weekly problem." },
    "duracell-2032": { say: "Coin cell for fobs and trackers. Leave them in the pack. Keep them from kids.", why: "Click through if a key fob just died and you need a 4-pack today." },
    "owala-freesip-24": { say: "Lockable lid, straw or gulp, fits a cup holder. That is why this size wins for errands.", why: "Click through to pick a color and confirm the 24 oz listing." },
    "stanley-quencher-40": { say: "Handle and ice for a long sit. Measure the cup holder before you assume it fits.", why: "Click through if you want 40 oz and need to see height and color." },
    "terro-ant-bait": { say: "Bait the trail. Spraying the counter only resets the clock.", why: "Click through if ants are already on the kitchen line and you need the 12-pack." },
    "amazon-basics-sheets": { say: "Cheap microfiber you can wash hard. Guest room or first bed, not luxury linen.", why: "Click through to match size and pocket depth to the mattress." },
    "zevo-trap": { say: "Plug-in for fruit flies and gnats. Not for wasps. Put it next to the fruit.", why: "Click through if the kitchen has fruit flies and you want the base plus refill." },
    "velvet-hangers": { say: "Slim hangers that keep shirts on the rod. Replace a closet in one go.", why: "Click through if the closet is still on fat plastic hangers." },
    "shower-liner": { say: "Clear liner with a weighted hem. Replace it when it films over.", why: "Click through if you just moved or the old liner smells." },
    "mattress-protector": { say: "Waterproof layer before anyone sleeps there. Cheaper than a mattress.", why: "Click through to match Queen pocket depth to your mattress plus topper." },
    "zulay-frother": { say: "A $12 wand for coffee foam and protein powder. Rinse it immediately.", why: "Click through if you make a drink every morning and do not own one." },
    "beckham-pillows": { say: "Soft default pair. Not a medical pillow. Give them a day out of the bag.", why: "Click through if you need two pillows this week and want the standard/queen pair." }
  };

  var file = (location.pathname.split("/").pop() || "").replace(".html", "");
  var copy = lines[file];
  if (!copy) return;
  var btn = document.querySelector("a.btn");
  if (!btn) return;

  var svg = '<svg viewBox="0 0 120 120" aria-hidden="true"><defs><clipPath id="c"><circle cx="60" cy="60" r="58"/></clipPath></defs><circle cx="60" cy="60" r="58" fill="#f3e6d4"/><g clip-path="url(#c)"><path d="M8 78c8-28 28-48 52-48s44 20 52 48v50H8z" fill="#3a5c56"/><path d="M18 70c12-34 30-46 42-46 16 0 36 14 46 44 0 0-10-18-22-22-8-3-16 2-24 2s-16-5-24-2c-12 4-18 24-18 24z" fill="#2a4440"/><ellipse cx="60" cy="64" rx="28" ry="32" fill="#f0c8a6"/><path d="M32 58c8-6 16-8 28-8s20 2 28 8" fill="#2a4440"/><ellipse cx="48" cy="66" rx="5" ry="6.5" fill="#fff"/><ellipse cx="72" cy="66" rx="5" ry="6.5" fill="#fff"/><circle cx="49" cy="67" r="2.6" fill="#1c1917"/><circle cx="73" cy="67" r="2.6" fill="#1c1917"/><path d="M46 80c6 7 22 7 28 0" fill="none" stroke="#c45c2d" stroke-width="2.2" stroke-linecap="round"/><path d="M38 74c4 3 6 3 8 0" fill="none" stroke="#e8a07a" stroke-width="2" stroke-linecap="round"/><path d="M74 74c4 3 6 3 8 0" fill="none" stroke="#e8a07a" stroke-width="2" stroke-linecap="round"/><path d="M20 96c10 10 28 16 40 16s30-6 40-16v40H20z" fill="#9a3412"/></g></svg>';

  var box = document.createElement("div");
  box.className = "host";
  box.innerHTML = svg + "<div><b>Nia \u00b7 site host</b><p class=\"say\">" + copy.say + "</p><p class=\"why\">" + copy.why + "</p></div>";
  btn.parentNode.insertBefore(box, btn);
})();
