import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

export const Route = createFileRoute("/free-recipes")({
  head: () => ({
    meta: [
      { title: "Free Recipes — The Nourish System | nóurish." },
      { name: "description", content: "Six free, fully complete Nourish System recipes — one from each biological pillar. No email required." },
      { property: "og:title", content: "Free Recipes — The Nourish System | nóurish." },
      { property: "og:description", content: "Six free, fully complete Nourish System recipes — one from each biological pillar. No email required." },
      { property: "og:url", content: "https://thenourishsystem.com/free-recipes" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/free-recipes" }],
  }),
  component: FreeRecipesPage,
});

type Recipe = {
  pillarLabel: string;
  name: string;
  signal: string;
  cookTime: string;
  headnote: string;
  ingredients: string[];
  steps: string[];
};

const recipes: Recipe[] = [
  {
    pillarLabel: "Pillar 01 · GLP-1 Nutrition",
    name: "Soft-Scrambled Eggs with Smoked Salmon",
    signal: "Muscle Protection",
    cookTime: "8 minutes",
    headnote: "Gentle on a compressed digestive system and designed for injection days when appetite is minimal. High protein, low gastric load — the crème fraîche creates a silkier texture that is easier to eat when food feels unappealing. Smoked salmon adds DHA and omega-3s that the body needs to maintain lean muscle during periods of reduced food intake.",
    ingredients: [
      "3 large eggs",
      "60g smoked salmon",
      "1 tbsp crème fraîche",
      "Fresh dill",
      "Sea salt and white pepper",
    ],
    steps: [
      "Whisk eggs with crème fraîche until completely smooth.",
      "Cook on the lowest possible heat, folding slowly every 30 seconds. Remove from heat while still slightly wet — residual heat finishes the cook.",
      "Layer smoked salmon over eggs.",
      "Finish with fresh dill and a pinch of sea salt.",
    ],
  },
  {
    pillarLabel: "Pillar 02 · Gut Health",
    name: "Kefir & Berry Breakfast Bowl",
    signal: "Multi-Strain Probiotic",
    cookTime: "5 minutes",
    headnote: "Kefir contains 30–50 distinct bacterial strains — significantly broader diversity than standard yogurt. The fermentation process produces beneficial yeasts alongside bacteria that are more likely to colonise the gut long-term. Blueberry anthocyanins selectively feed Akkermansia muciniphila — the bacterial species most strongly associated with gut barrier integrity and metabolic health.",
    ingredients: [
      "200ml live kefir",
      "Handful blueberries",
      "Handful raspberries",
      "1 tbsp ground flaxseed",
      "1 tsp honey",
    ],
    steps: [
      "Pour kefir into a wide bowl.",
      "Add blueberries and raspberries.",
      "Scatter ground flaxseed across the surface.",
      "Drizzle honey. Eat immediately for maximum probiotic benefit.",
    ],
  },
  {
    pillarLabel: "Pillar 03 · Metabolic Health",
    name: "Fibre-First Green Salad with Grilled Chicken",
    signal: "Glucose Sequencing",
    cookTime: "15 minutes",
    headnote: "Eating the salad before the protein before the carbohydrate reduces the post-meal glucose response by up to 40% — not through restriction, but through sequencing. The fibre in the greens, fennel, and radish forms a physical barrier in the digestive tract that slows glucose absorption from everything eaten afterwards. Apple cider vinegar in the dressing provides acetic acid — which further blunts the glycaemic response.",
    ingredients: [
      "150g chicken breast",
      "Mixed greens, cucumber, fennel, radish",
      "1 tbsp apple cider vinegar",
      "2 tbsp extra virgin olive oil",
      "30g pumpkin seeds",
    ],
    steps: [
      "Grill chicken 6 minutes each side. Rest 3 minutes.",
      "Build salad with all vegetables — eat the greens first before adding chicken.",
      "Dress with apple cider vinegar and olive oil.",
      "Slice chicken over the top last.",
    ],
  },
  {
    pillarLabel: "Pillar 04 · Cognitive Performance",
    name: "Lion's Mane Mushroom Omelette",
    signal: "NGF Stimulation",
    cookTime: "12 minutes",
    headnote: "Lion's mane mushroom stimulates Nerve Growth Factor — the compound that promotes neuroplasticity and protects against cognitive decline. Sauté until deeply golden for maximum bioavailability — the Maillard reaction that creates the golden crust also concentrates the active hericenone compounds. Eggs provide choline, the direct precursor to acetylcholine — the primary neurotransmitter for memory formation.",
    ingredients: [
      "3 large eggs",
      "100g lion's mane mushroom, torn into pieces",
      "Fresh thyme",
      "1 tbsp olive oil",
      "Sea salt and cracked black pepper",
    ],
    steps: [
      "Sauté lion's mane in olive oil over medium-high heat 5–6 minutes until deeply golden. Do not rush this step.",
      "Add fresh thyme. Season well.",
      "Whisk eggs with salt and pepper. Pour over mushrooms.",
      "Fold and serve immediately.",
    ],
  },
  {
    pillarLabel: "Pillar 05 · Longevity & Healthspan",
    name: "Polyphenol Breakfast Bowl",
    signal: "SIRT1 Activation",
    cookTime: "8 minutes",
    headnote: "Five distinct polyphenol sources in one bowl — each activating different longevity pathways. Anthocyanins from dark berries activate SIRT1, the longevity gene pathway also activated by caloric restriction — without the restriction. Resveratrol from the berries mimics the cellular effects of fasting. Dark chocolate flavanols increase cerebral blood flow. Walnuts provide ALA omega-3 for neuronal membrane health. Live yogurt seeds the microbiome simultaneously.",
    ingredients: [
      "200g live Greek yogurt",
      "Mixed dark berries: blueberries, blackberries, raspberries",
      "2 tbsp pomegranate seeds",
      "10g dark chocolate shavings (70%+)",
      "30g walnuts",
    ],
    steps: [
      "Spoon yogurt into a wide bowl.",
      "Arrange berries and pomegranate seeds over yogurt.",
      "Scatter walnuts across the top.",
      "Finish with dark chocolate shavings.",
    ],
  },
  {
    pillarLabel: "Pillar 06 · Hormonal Health",
    name: "Beetroot & Arugula Nitric Oxide Salad",
    signal: "Nitric Oxide Boost",
    cookTime: "10 minutes",
    headnote: "The highest naturally occurring dietary nitrate combination available in food. Nitrates from beetroot and arugula convert to nitric oxide in the body — dilating blood vessels and supporting the vascular health that underlies hormonal vitality and sexual wellness in all bodies. Pomegranate adds a second vascular mechanism by inhibiting aromatase — the enzyme that converts testosterone to estrogen — supporting hormonal balance in both men and women.",
    ingredients: [
      "3 cooked beetroots, sliced",
      "Large bunch arugula",
      "3 tbsp pomegranate seeds",
      "80g goat's cheese, crumbled",
      "Balsamic vinegar and extra virgin olive oil",
    ],
    steps: [
      "Arrange arugula on a wide plate.",
      "Layer beetroot slices over the greens.",
      "Scatter pomegranate seeds and crumbled goat's cheese.",
      "Dress with balsamic vinegar and a generous pour of olive oil.",
    ],
  },
];

function FreeRecipesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section
        className="flex w-full items-center justify-center px-6"
        style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: 10, letterSpacing: "0.22em", color: SAGE }}
          >
            No Email Required
          </p>
          <h1
            className="mt-6 font-display font-bold leading-[1.1]"
            style={{ fontSize: 36, color: TEXT }}
          >
            <span className="md:text-[56px]">Try the</span>
            <br />
            <span
              className="italic md:text-[56px]"
              style={{ color: SAGE }}
            >
              system. Free.
            </span>
          </h1>
          <p
            className="mt-6 font-display italic"
            style={{ fontSize: 18, color: MUTED, maxWidth: 520 }}
          >
            Six recipes. One from each biological pillar. Each one engineered for a specific outcome — with the science explained.
          </p>
          <div
            style={{
              width: 40,
              height: 2,
              backgroundColor: GOLD,
              margin: "32px auto",
            }}
          />
          <p
            className="font-sans font-light"
            style={{
              fontSize: 15,
              color: "#3a3a3a",
              maxWidth: 560,
              lineHeight: 1.85,
            }}
          >
            These are not sample recipes. They are fully complete Nourish System meals — with the functional headnote that explains the biological purpose of every key ingredient, the complete ingredient list, and the full method. The same standard as every recipe in the paid protocols. No restriction. Just good food.
          </p>
        </div>
      </section>

      {/* SECTION 1 — THE SIX FREE RECIPES */}
      <section
        className="w-full px-6"
        style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              One Per Pillar
            </p>
            <h2
              className="mt-4 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Six recipes.
              <br />
              <span className="italic" style={{ color: SAGE }}>
                Six biological pillars.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {recipes.map((r) => (
              <article
                key={r.name}
                style={{
                  backgroundColor: BG,
                  borderRadius: 4,
                  padding: 32,
                  borderTop: `3px solid ${SAGE}`,
                  minHeight: 520,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    color: GOLD,
                    marginBottom: 12,
                  }}
                >
                  {r.pillarLabel}
                </p>
                <h3
                  className="font-display font-semibold"
                  style={{
                    fontSize: 22,
                    color: TEXT,
                    lineHeight: 1.25,
                    marginBottom: 6,
                  }}
                >
                  {r.name}
                </h3>
                <span
                  className="inline-block font-sans"
                  style={{
                    fontSize: 10,
                    padding: "3px 10px",
                    backgroundColor: "rgba(125,155,118,0.12)",
                    color: SAGE,
                    borderRadius: 20,
                    marginBottom: 14,
                  }}
                >
                  {r.signal}
                </span>
                <p
                  className="font-sans"
                  style={{ fontSize: 11, color: MUTED, marginBottom: 14 }}
                >
                  {r.cookTime}
                </p>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: 13,
                    color: "#4a4a4a",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  {r.headnote}
                </p>
                <div
                  style={{
                    height: 1,
                    backgroundColor: "rgba(28,28,28,0.09)",
                    margin: "16px 0",
                  }}
                />
                <p
                  className="font-sans font-medium uppercase"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: MUTED,
                    margin: "16px 0 10px",
                  }}
                >
                  Ingredients
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {r.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="font-sans font-light"
                      style={{
                        fontSize: 13,
                        color: "#4a4a4a",
                        lineHeight: 1.9,
                      }}
                    >
                      <span style={{ color: SAGE }}>— </span>
                      {ing}
                    </li>
                  ))}
                </ul>
                <p
                  className="font-sans font-medium uppercase"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: MUTED,
                    margin: "16px 0 10px",
                  }}
                >
                  Method
                </p>
                <ol
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    counterReset: "step",
                  }}
                >
                  {r.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="font-sans font-light"
                      style={{
                        fontSize: 13,
                        color: "#4a4a4a",
                        lineHeight: 1.75,
                        marginBottom: 8,
                        display: "flex",
                        gap: 8,
                      }}
                    >
                      <span
                        className="font-sans font-semibold"
                        style={{ color: SAGE, minWidth: 20 }}
                      >
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT THE SYSTEM DOES */}
      <section
        className="w-full px-6"
        style={{ backgroundColor: TEXT, paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
          >
            Beyond The Free Recipes
          </p>
          <h2
            className="mt-4 font-display font-bold"
            style={{ fontSize: 36, color: BG, lineHeight: 1.1 }}
          >
            Every pillar goes
            <br />
            <span className="italic" style={{ color: SAGE }}>
              much deeper.
            </span>
          </h2>
          <p
            className="mt-6 font-sans font-light"
            style={{
              fontSize: 15,
              color: MUTED,
              maxWidth: 560,
              lineHeight: 1.85,
            }}
          >
            These six recipes are the entry point. Each pillar contains 20 complete recipes, a full educational framework, a key ingredient guide, five protocol principles, and a complete biological methodology — all delivered as a standalone PDF protocol you keep permanently.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div
              style={{
                backgroundColor: "rgba(247,245,241,0.05)",
                border: "1px solid rgba(247,245,241,0.08)",
                borderRadius: 4,
                padding: 24,
                textAlign: "left",
              }}
            >
              <h3
                className="font-display font-semibold"
                style={{ fontSize: 17, color: BG }}
              >
                The Flagship
              </h3>
              <p
                className="mt-3 font-sans font-light"
                style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}
              >
                120 recipes across all six pillars. The complete methodology. The Symptoms to Solution Index. The daily protocols.
              </p>
              <p
                className="mt-4 font-sans font-light"
                style={{ fontSize: 20, color: GOLD , fontVariantNumeric: "lining-nums" }}
              >
                $47
              </p>
              <Link
                to="/system"
                className="mt-2 inline-block font-sans"
                style={{ fontSize: 12, color: SAGE }}
              >
                Get The Flagship →
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "rgba(247,245,241,0.05)",
                border: "1px solid rgba(247,245,241,0.08)",
                borderRadius: 4,
                padding: 24,
                textAlign: "left",
              }}
            >
              <h3
                className="font-display font-semibold"
                style={{ fontSize: 17, color: BG }}
              >
                Six Satellite Protocols
              </h3>
              <p
                className="mt-3 font-sans font-light"
                style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}
              >
                20 recipes per pillar. Full educational framework. Complete biological methodology. One focused protocol per biological system.
              </p>
              <p
                className="mt-4 font-sans font-light"
                style={{ fontSize: 20, color: GOLD , fontVariantNumeric: "lining-nums" }}
              >
                $27 each
              </p>
              <Link
                to="/bundle"
                className="mt-2 inline-block font-sans"
                style={{ fontSize: 12, color: SAGE }}
              >
                Explore Protocols →
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "rgba(247,245,241,0.05)",
                border: "1px solid rgba(247,245,241,0.08)",
                borderRadius: 4,
                padding: 24,
                textAlign: "left",
              }}
            >
              <h3
                className="font-display font-semibold"
                style={{ fontSize: 17, color: BG }}
              >
                The Complete Bundle
              </h3>
              <p
                className="mt-3 font-sans font-light"
                style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}
              >
                All seven books. The flagship plus all six satellites. The complete biological optimization library.
              </p>
              <p
                className="mt-4 font-sans font-light"
                style={{ fontSize: 20, color: GOLD , fontVariantNumeric: "lining-nums" }}
              >
                $147
              </p>
              <Link
                to="/bundle"
                className="mt-2 inline-block font-sans"
                style={{ fontSize: 12, color: SAGE }}
              >
                Get Everything →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SOFT CTA */}
      <section
        className="w-full px-6"
        style={{ backgroundColor: BG, paddingTop: 72, paddingBottom: 72 }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
          >
            Ready To Go Deeper?
          </p>
          <h2
            className="mt-4 font-display font-bold"
            style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
          >
            Start with the pillar
            <br />
            <span className="italic" style={{ color: SAGE }}>
              that matters most right now.
            </span>
          </h2>
          <p
            className="mt-6 font-sans font-light"
            style={{
              fontSize: 15,
              color: "#3a3a3a",
              maxWidth: 520,
              lineHeight: 1.85,
            }}
          >
            Every satellite protocol can be read and used independently. You do not need to start with the flagship. Start with the pillar that speaks most directly to what you are experiencing right now. The system grows from there.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/bundle"
              className="inline-block font-sans font-medium"
              style={{
                backgroundColor: TEXT,
                color: BG,
                padding: "14px 32px",
                fontSize: 14,
              }}
            >
              Explore All Protocols
            </Link>
            <Link
              to="/system"
              className="inline-block font-sans"
              style={{
                border: `1px solid ${TEXT}`,
                color: TEXT,
                padding: "14px 32px",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Start With The Flagship
            </Link>
          </div>
          <p
            className="mt-6 font-sans"
            style={{ fontSize: 11, color: MUTED }}
          >
            Real food. Real biology. No restriction. Eat Well. Every Single Day.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
