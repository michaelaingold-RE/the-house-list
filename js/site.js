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
    "lmnt-raspberry-salt": { say: "This packet is for heat and long days. It is salty on purpose. No sugar.", why: "Click through if you already want a zero-sugar electrolyte and need to check flavor and count.", asin: "" },
    "liquid-iv-lemon-lime": { say: "This is the packet people finish. It uses sugar so it drinks easier than LMNT.", why: "Click through if you want the travel sleeve and need to confirm the Lemon Lime count.", asin: "" },
    "magnesium-glycinate": { say: "This bottle is a glycinate capsule from a clinic-style brand. It is not a sleep promise.", why: "Click through only if you already chose this form and need to read the serving size.", asin: "" },
    "dude-wipes": { say: "Bulk unscented wipes. Loud box, simple job.", why: "Click through if you want the 288-count and not a perfume pack.", asin: "" },
    "cottonelle-wipes": { say: "Same job as Dude, quieter pack. Better when you need one in more than one bath.", why: "Click through to compare pack count and flip-top vs the big sleeve.", asin: "" },
    "boka-toothpaste": { say: "Fluoride-free paste with n-Ha. Only a fit if you already decided that is what you want.", why: "Click through to read the label with your dentist plan in mind.", asin: "" },
    "amazon-basics-aa": { say: "Junk-drawer AAs. Not exciting. Stops a store run.", why: "Click through if you need the 48-pack on the shelf this week.", asin: "" },
    "amazon-basics-aaa": { say: "Same idea, smaller cell. Remotes and small lights.", why: "Click through for the 36-count if the drawer is empty.", asin: "" },
    "miss-mouths": { say: "Spray the stain while it is wet. Keep the bottle in the kitchen.", why: "Click through if food and coffee stains are a weekly problem.", asin: "" },
    "duracell-2032": { say: "Coin cell for fobs and trackers. Leave them in the pack. Keep them from kids.", why: "Click through if a key fob just died and you need a 4-pack today.", asin: "" },
    "owala-freesip-24": { say: "Lockable lid, straw or gulp, fits a cup holder. That is why this size wins for errands.", why: "Click through to pick a color and confirm the 24 oz listing.", asin: "B0BZYCJK89" },
    "stanley-quencher-40": { say: "Handle and ice for a long sit. Measure the cup holder before you assume it fits.", why: "Click through if you want 40 oz and need to see height and color.", asin: "B0CRMZ7TFZ" },
    "terro-ant-bait": { say: "Bait the trail. Spraying the counter only resets the clock.", why: "Click through if ants are already on the kitchen line and you need the 12-pack.", asin: "" },
    "amazon-basics-sheets": { say: "Cheap microfiber you can wash hard. Guest room or first bed, not luxury linen.", why: "Click through to match size and pocket depth to the mattress.", asin: "" },
    "zevo-trap": { say: "Plug-in for fruit flies and gnats. Not for wasps. Put it next to the fruit.", why: "Click through if the kitchen has fruit flies and you want the base plus refill.", asin: "" },
    "velvet-hangers": { say: "Slim hangers that keep shirts on the rod. Replace a closet in one go.", why: "Click through if the closet is still on fat plastic hangers.", asin: "" },
    "shower-liner": { say: "Clear liner with a weighted hem. Replace it when it films over.", why: "Click through if you just moved or the old liner smells.", asin: "" },
    "mattress-protector": { say: "Waterproof layer before anyone sleeps there. Cheaper than a mattress.", why: "Click through to match Queen pocket depth to your mattress plus topper.", asin: "" },
    "zulay-frother": { say: "A $12 wand for coffee foam and protein powder. Rinse it immediately.", why: "Click through if you make a drink every morning and do not own one.", asin: "" },
    "beckham-pillows": { say: "Soft default pair. Not a medical pillow. Give them a day out of the bag.", why: "Click through if you need two pillows this week and want the standard/queen pair.", asin: "" }
  };
  var file = (location.pathname.split("/").pop() || "").replace(".html", "");
  var copy = lines[file];
  if (!copy) return;
  var btn = document.querySelector("a.btn");
  if (!btn) return;
  if (copy.asin) {
    var shot = document.createElement("p");
    shot.className = "shot";
    shot.innerHTML = '<img alt="Product" src="https://images-na.ssl-images-amazon.com/images/P/' + copy.asin + '._AC_UL400_.jpg">';
    btn.parentNode.insertBefore(shot, btn);
  }
  var box = document.createElement("div");
  box.className = "host";
  box.innerHTML = '<img class="nia" alt="Nia" src="../images/nia.jpg" onerror="this.style.display=\'none\'"><div><b>Nia \u00b7 site host</b><p class="say">' + copy.say + '</p><p class="why">' + copy.why + '</p></div>';
  btn.parentNode.insertBefore(box, btn);
})();
