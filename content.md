# content.md — words for the page
Every checkable fact below traces to `site/profile.md` (re-read fresh for this pass, after
its four project metrics were corrected). Nothing here names an employer, title, date,
metric, or technology that file does not state. Voice, motivation, and framing beyond that
are mine to write — the profile is a bullet list, the page is not.

---

## hero

**h1 (must contain the name on profile.md line 1):**
Muhammad Shehroz Mir

**p (the compressed entry point — no biography, per design.md):**
Generative AI Developer — building and deploying generative models across text and image domains.

---

## about
(≥ 40 words required. Employer/title/date are stated once, in prose, folded into a
sentence rather than a ledger — see report below for why no separate "Experience"
section exists. "Since June 2023" is used instead of restating "3+ years" as a bare
number, because the latter is a computed duration that goes stale the moment this page
sits unedited past next June — the same judgment call as the previous pass.)

I'm Muhammad Shehroz Mir, a Generative AI Developer at AirCod Technologies, where I've been
designing, training, and deploying generative models across text and image domains since
joining as an AI/ML Engineer in June 2023. Day to day that means working hands-on with
GPT-family LLMs, VAEs, and GANs — fine-tuning language models for new domains, and building
retrieval-augmented and agentic systems that go into production rather than stopping at a
notebook. A good part of that work comes down to a single question asked from different
angles: how much of a model can you take away — through LoRA, quantization, distillation —
before it stops doing its job. Underneath all of it is a deep-learning foundation in
PyTorch, Hugging Face, and TensorFlow, and a habit of tracking and rebuilding whatever the
field publishes next, so the tools I reach for stay current instead of freezing at
whatever I first learned.

*(~130 words.)*

---

## projects
Order matches the `###` headings under `## Projects` in `profile.md`. For each project:
a **collapsed line** (the one-sentence hook), a **metric tag** (the single accent-coloured
fact for the closed card, per design.md's "compress first, expand on interaction"), and the
**expanded paragraph** (≥ 25 words, shown on open) — J2: what the thing does, what he
specifically did, in words that could not be pasted onto a different project.

All four projects now carry a real, specific metric straight from `profile.md` — the
previous pass had two projects (Generative Image Modeling and LLM Fine-Tuning) with no
number at all, and Model Compression missing its distillation figure. That gap is closed;
see the report at the bottom for what each tag draws on.

### Generative Image Modeling — GANs & VAEs

**Collapsed line:** Two generative architectures built from scratch — then repurposed to catch fraud.

**Metric tag:** Fraud detection evaluated via ROC-AUC, precision/recall & cost-benefit analysis

**Expanded paragraph:**
Two different ways of teaching a network to model a distribution rather than just a
mapping. I implemented the generator and discriminator halves of a GAN from scratch in
both PyTorch and TensorFlow, training them to generate MNIST digits and CIFAR-10 images,
and separately built a Variational Autoencoder — reparameterization trick included — to
learn a compressed latent space that could reconstruct those same images. A VAE that
reconstructs the familiar well also reveals the unfamiliar: I extended that same
reconstruction-error signal to credit-card transaction data, scoring each transaction by
how badly it reconstructed and evaluating the resulting fraud-detection approach with
ROC-AUC, precision/recall, and cost-benefit analysis rather than accuracy alone.

### LLM Fine-Tuning & Cross-Domain Adaptation

**Collapsed line:** Adapting frozen LLM backbones to a new domain — and beating a published benchmark doing it.

**Metric tag:** 74.48% cross-domain macro F1 at 2.5M trainable params — +3.06 pts over the LLM4HAR (KDD 2025) benchmark

**Expanded paragraph:**
Fully fine-tuning a large language model for a new domain is expensive and usually
unnecessary, so I kept three different backbones frozen — GPT-2, Qwen2.5, and Llama-3.2 —
and instead trained a Conv1D encoder in front of each one, selectively unfreezing only the
layers that needed to adapt and aligning the frozen model to the new domain through a
two-stage alignment pre-training process. To separate what actually mattered from what
merely seemed plausible, I ran a four-level ablation across four datasets, checked against
256 evaluation pairs each time. The best configuration reached 74.48% cross-domain macro F1
using only 2.5M trainable parameters, beating the published LLM4HAR (KDD 2025) benchmark by
3.06 points.

### Model Compression & Optimization of Transformers

**Collapsed line:** Shrinking BERT-family models three different ways — and keeping the performance.

**Metric tag:** ~99.7% reduction in trainable parameters (LoRA)

**Expanded paragraph:**
BERT-family models carry far more trainable weight than most fine-tuning jobs actually need,
so I attacked that from three separate angles. LoRA fine-tuning cut the trainable-parameter
count by roughly 99.7% while leaving the rest of the model frozen; dynamic quantization
shrank the models by about 58% and made inference roughly 28% faster; and knowledge
distillation compressed a larger BERT-family teacher into a smaller student that still
reached 89.76% accuracy. Three techniques, one underlying question: how much of a
transformer can you remove before it stops doing its job?

### Generative NLP & Applied ML

**Collapsed line:** Three applied models, three shapes of data — text similarity, road signs, tabular records.

**Metric tag:** 98.19% accuracy · 99.78% ROC-AUC (tabular classification)

**Expanded paragraph:**
Three smaller, applied projects, each built around a different shape of data. I built a
content-based recommender system that compares items using TF-IDF vectors, embeddings, and
cosine similarity rather than relying on user history; trained a YOLOv8 object-detection
model on the TT100K traffic-sign dataset, reaching a mAP@0.5 of 0.796; and built a tabular
classification model over a 100,000-record dataset that reached 98.19% accuracy and a
99.78% ROC-AUC. None of the three shares an architecture with the others, which was the
point — applied machine learning is usually about picking the right small tool for the data
in front of you, not reusing the same big one everywhere.

---

## skills
Grouped exactly as `profile.md` groups them (design.md: "a set reads as a set"). Wording
copied verbatim from the source — nothing added, removed, or renamed.

**Generative AI:** LLMs (GPT, Claude, Gemini, Qwen, Llama, Mistral), VAEs, GANs

**Deep Learning:** PyTorch, TensorFlow, Keras, Hugging Face

**Model training:** CNNs, RNNs, Transformers, fine-tuning (LoRA/PEFT), quantization, knowledge distillation

**Experimentation:** Experiment design, ablation studies, model validation, benchmarking

**LLM Ecosystem:** LangChain, LangGraph, LlamaIndex, OpenAI/Anthropic libraries, MCP

**Vector databases:** Milvus, FAISS, ChromaDB

**Deployment:** AWS, Docker, FastAPI

**Languages:** Python, SQL, Bash

**Tools:** Git, Langfuse, LiteLLM

---

## contact

**Lead-in line:**
Reach out — happy to talk about generative models, compression tricks, or anything above.

**Links (verbatim from profile.md):**
- shehrosemir2000@gmail.com (mailto:)
- https://linkedin.com/in/shehrozmir
- +92-336-4229762

---
---

# Report to the pipeline (not page content)

**All four projects now carry a real metric tag, pulled straight from the corrected
`profile.md`:**

1. **Generative Image Modeling — GANs & VAEs** — `profile.md` still gives no numeric score
   here (no ROC-AUC value, no precision/recall figure), but it now explicitly names the
   *evaluation method* — "evaluated with ROC-AUC, precision/recall, and cost-benefit
   analysis" — where the prior version of the profile just said "evaluated" with nothing
   after it. I used that evaluation framing as the collapsed tag (methodology, not a bare
   number), since no numeric figure exists to draw from. This is the one project of the
   four where the "defining metric" is a method rather than a percentage — flagging that
   asymmetry now so it isn't mistaken for an oversight later. If a bare number becomes
   available, that would strengthen this card, but I did not invent one.

2. **LLM Fine-Tuning & Cross-Domain Adaptation** — now fully resolved. `profile.md` states
   "Best configuration reached 74.48% cross-domain macro F1 at only 2.5M trainable
   parameters, beating the LLM4HAR (KDD 2025) benchmark by 3.06 points," and I used that
   verbatim as the tag and again in the expanded paragraph, alongside the ablation detail
   (four-level, four datasets, 256 evaluation pairs) that was already present last pass.

3. **Model Compression & Optimization of Transformers** — now fully resolved. The
   distillation figure (89.76% accuracy) that was missing last pass is now stated in
   `profile.md` and appears in the expanded paragraph. Per the "compress" theme, I chose
   the ~99.7% trainable-parameter reduction (LoRA) as the single collapsed tag — it is the
   most extreme and most on-theme number of the three — and folded the quantization
   (~58%/~28%) and distillation (89.76%) figures into the expanded text rather than the tag,
   so the collapsed card doesn't get cluttered with three separate percentages.

4. **Generative NLP & Applied ML** — now fully resolved. `profile.md` supplies both a
   mAP@0.5 of 0.796 (YOLOv8) and 98.19% accuracy / 99.78% ROC-AUC (tabular classification).
   I chose the tabular pair as the collapsed tag — it's the stronger, more immediately
   legible figure of the two — and included the YOLOv8 mAP alongside it in the expanded
   paragraph so that project isn't left undocumented on the closed card.

**What's still thin in `profile.md`, unchanged from before:**

- **No separate "Experience" section on the page.** `profile.md`'s `## Experience` heading
  still holds one role and a date range. J6 names "roles-with-dates in a sidebar" as the
  clearest tell of a PDF-shaped page, and design.md doesn't ask for an Experience section,
  so I again folded employer/title/start-date into one sentence inside `about` rather than
  building a ledger. This is my judgment call, not something design.md dictates — flagging
  it in case Phase 3 or the reviewer expects the dates to live somewhere more literal.

- **Education and Certifications are still empty in `profile.md`.** No placeholder content
  was written for either; the page is simply shorter for it.

- **Skill-line granularity is still ambiguous.** `profile.md`'s "LLMs (GPT, Claude, Gemini,
  Qwen, Llama, Mistral), VAEs, GANs" line can be read as 3 skills or 8 depending on whether
  the parenthetical models count individually. M11 requires one `<li>` per skill "in
  `profile.md` — all of them," and that count depends on this decision. I've kept the
  wording verbatim without resolving it — that's a markup decision for Phase 3, not a
  wording one for me — but it's worth flagging again since it wasn't part of this
  correction round and is still live.

**What I deliberately did not do:** invent a numeric score for the GANs/VAEs project where
none exists, restate "3+ years" as a bare number, invent an Experience ledger, or write
About-section filler that would fit any developer. Everything past the 25/40-word minimums
is elaboration on stated facts (why, what it does, what it answers) — no new checkable
facts were added anywhere in this rewrite.
