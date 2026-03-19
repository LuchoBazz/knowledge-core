# How to Use the Cartoon Illustration Prompt

This prompt is designed to generate a **full-body cartoon illustration** of a real person, based on reference photos you provide. Here's how to use it effectively.

---

## What You'll Need

- **2–5 clear reference photos** of the person you want to cartoonize
- A **cartoon style reference image** (the prompt calls it `cartoon_reference.png`) — this is a sample image that shows the art style you want the AI to replicate
- Access to an AI image generator that accepts image inputs (like GPT-4o, Gemini, or a similar multimodal model)

---

## Step-by-Step Guide

### Step 1 — Prepare Your Reference Photos
Gather multiple photos of the person. For best results:
- Include at least **one full-body photo** so the AI can read the person's build and proportions
- Add a **front-facing photo** for facial features
- Include photos showing their **typical clothing**

### Step 2 — Prepare Your Style Reference
Find or create a sample cartoon image (`cartoon_reference.png`) that represents the exact art style you want — clean black outlines, cell-shaded colors, vibrant solid tones (think classic comic book or animated series style).

### Step 3 — Fill In the Placeholder
In the prompt, locate this part:

```
[REFERENCE_PHOTOS]
```

You can either:
- **Leave it as-is** if your tool automatically links uploaded images as inputs
- **Replace it** with a short note, for example: `[REFERENCE_PHOTOS of John Smith, full-body and face shots]`

### Step 4 — Upload Everything and Run the Prompt
In your AI tool of choice:
1. Upload all your reference photos
2. Upload your `cartoon_reference.png` style image
3. Paste the full prompt into the message/instructions field
4. Submit

### Step 5 — Review the Output
Check that the result:
- ✅ Matches the person's body type and proportions
- ✅ Uses the correct art style (clean lines, cel-shading)
- ✅ Shows a full-body, forward-facing pose
- ✅ Has a transparent or grid background
- ✅ Has no extra text, logos, or other characters

---

## Tips for Better Results

| Tip | Why It Helps |
|---|---|
| Use well-lit, high-resolution photos | The AI reads physical details more accurately |
| Include photos from different angles | Helps the AI build a fuller model of the person |
| Use a strong style reference image | The more specific the reference, the more consistent the style |
| Be explicit about body type in the placeholder | Adds a safety net if photos are ambiguous |

---

## What the Prompt Does Automatically

You don't need to specify these — they're already baked into the prompt:

- Full-body, front-facing pose
- Transparent/grid background
- No text or logos in the output
- Clothing folds and stylized textures
- Faithful replication of the person's build (stocky, thin, athletic, etc.)

--

## Prompt

```text title="prompt"
Generate a full-body, standalone cartoon illustration of a single person, based on the specific reference photos provided [REFERENCE_PHOTOS].

The artistic style must be a high-quality, clean-line comic-book illustration, identical to the style seen in cartoon_reference.png, with defined black outlines, cell-shaded coloring, and solid, vibrant tones.

The cartoon must faithfully replicate the specific body type, build, and physical proportions of the person in the reference photos, stylized for animation but recognizable. For example, if the person has a stocky build, ensure the cartoon figure is stocky; if they are thin, make the cartoon figure thin, with clothes fitting appropriately.

The pose should be a full-body stand, facing forward. The person should have a characteristic expression and wear attire (like their most common or distinctive clothes) seen in the reference photos. The clothing folds and texture should be stylized, following the detailed look of cartoon_reference.png.

The background must be completely transparent or a transparency grid pattern, identical to the background of cartoon_reference.png. Do not add any text, logos, or other figures.

### Instrucciones de uso para el usuario:

1.  **Sube tus fotos:** Pasa a Nano Banana múltiples fotos de la persona que quieres caricaturizar. Asegúrate de que haya fotos de cuerpo entero para que la IA pueda captar la complexión.
2.  **Completa el marcador:** Donde dice `[REFERENCE_PHOTOS]`, puedes escribir una breve nota opcional sobre las fotos, o simplemente dejarlo así si el sistema sabe que son las fotos de entrada. Por ejemplo: `[REFERENCE_PHOTOS de Juan Pérez]`.
3.  **Asegúrate de una pose de cuerpo entero:** El prompt especifica una pose de cuerpo entero, así que Nano Banana se centrará en eso.

He generado esta imagen para confirmar que entiendo el estilo y la complexión de cuerpo entero requerida:

* **Sujeto genérico:** Un hombre con una chaqueta de cuero y vaqueros.
* **Estilo:** Idéntico estilo de línea limpia y cel-shaded de cartoon_reference.png.
* **Pose:** Cuerpo entero, de pie, mirando hacia adelante.
* **Fondo:** Transparente con cuadrícula.

Esta imagen demuestra que puedo replicar el estilo y el formato sin usar figuras políticas.
```