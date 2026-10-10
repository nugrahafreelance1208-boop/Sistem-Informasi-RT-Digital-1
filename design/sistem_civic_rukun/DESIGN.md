---
name: Sistem Civic Rukun
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#404942'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707971'
  outline-variant: '#c0c9c0'
  surface-tint: '#2d6a48'
  primary: '#003820'
  on-primary: '#ffffff'
  primary-container: '#0f5132'
  on-primary-container: '#84c39b'
  inverse-primary: '#95d4ac'
  secondary: '#006d41'
  on-secondary: '#ffffff'
  secondary-container: '#90f4b7'
  on-secondary-container: '#007144'
  tertiary: '#283044'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f465b'
  on-tertiary-container: '#adb4ce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f1c7'
  primary-fixed-dim: '#95d4ac'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#0f5132'
  secondary-fixed: '#93f7ba'
  secondary-fixed-dim: '#77da9f'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  code-num:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-trust, structured, and modern digital administration platform tailored for Indonesian community governance (Rukun Tetangga & Rukun Warga). The visual tone bridges institutional credibility with modern enterprise-grade operational efficiency. It moves away from bureaucratic, cumbersome government interfaces toward an accessible, swift, and transparent community workspace.

The system embodies three core brand pillars:
- **Amanah & Transparan (Integrity & Transparency):** Clarity of citizen data, dues auditing, and administrative workflows with explicit status indicators.
- **Guyub Modern (Community-First Modernity):** Clean, dignified, approachable interfaces accessible to multi-generational neighborhood leaders and residents.
- **Tertib & Presisi (Structure & Precision):** Compact data density, high-contrast legibility, and standardized information architectures built for routine community operations.

The aesthetic philosophy draws on **Corporate / Modern Civic Minimalism**: crisp card containers, subtle architectural borders, crisp tabular density, and purposeful semantic color coding that conveys immediate operational readiness.

## Colors

The palette balances traditional Indonesian civic identity with modern administrative software rigor.

### Palette Architecture
- **Primary Civic Green (`#0F5132`):** Grounded deep emerald representing authority, stability, and institutional reliability. Applied to high-priority global navigation headers, primary brand actions, and authoritative badges.
- **Secondary Emerald Accent (`#198754`):** Active interactive state, primary buttons, verified indicators, and successful financial transaction tallies.
- **Tertiary Slate Navy (`#0F172A`):** Deep architectural tone for administrative toolbars, core metric counts, high-emphasis headings, and sidebar anchor points.
- **Neutral Stack (`#0F172A` to `#F8FAFC`):**
  - Surface Background: `#F8FAFC` (Canvas tone preventing ocular fatigue during prolonged record management).
  - Surface Card: `#FFFFFF` (Pristine, crisp data layer).
  - Slate Neutral Body: `#334155` for high-density readable text.
  - Slate Muted: `#64748B` for metadata, timestamps, and secondary table labels.
  - Border Subdued: `#E2E8F0` for structural gridlines and card perimeters.

### Semantic Status Signaling
- **Lunas / Terverifikasi (Success):** Surface `#ECFDF5`, Border `#A7F3D0`, Foreground `#065F46`.
- **Menunggu Verifikasi (Warning):** Surface `#FFFBEB`, Border `#FDE68A`, Foreground `#92400E`.
- **Menunggak / Ditolak (Danger/Alert):** Surface `#FFF1F2`, Border `#FECDD3`, Foreground `#9F1239`.
- **Dalam Proses (Info/Process):** Surface `#F0F9FF`, Border `#BAE6FD`, Foreground `#0369A1`.

## Typography

The type system pairs **Plus Jakarta Sans** for structural identity, headers, and UI narratives with **Inter** for dense transactional labels, numerical readouts, and badge tags.

### Hierarchy & Usage
- **Headlines & Section Headers:** Plus Jakarta Sans delivers warm yet authoritative geometry. Tracking is slightly tightened on larger display tiers (`-0.02em`) to guarantee compact visual anchors on administrative dashboards.
- **Body & Tabular Contexts:** Regular and medium weights are optimized for scanning national identity numbers (NIK), household card indices (KK), and citizen addresses without typographic distortion.
- **Labels & Numbers (`code-num` / `label-sm`):** Inter provides tabular numerical alignment for Indonesian Rupiah amounts (`Rp 150.000`), percentage metric trends, and uppercase administrative pills (`TERVERIFIKASI`, `MENUNGGAK`).

## Layout & Spacing

The layout utilizes a structured **12-column responsive fluid grid** calibrated for data-dense desktop administration screens, collapsing gracefully into 8-column tablet layouts and single-column mobile views.

### Screen Adaptations
- **Desktop (1280px+):** Fixed 260px administrative sidebar paired with a 12-column fluid canvas. Gutters stay at `1.5rem` (`24px`), margins at `2rem` (`32px`). Multi-metric cards span 3 columns each (4-card row).
- **Tablet (768px - 1023px):** Sidebar condenses to an icon-only dock (72px) or off-canvas drawer. Gutters scale to `1.25rem` (`20px`). Metrics reflow into a 2x2 grid. Data tables enforce horizontal pinning for primary keys (Nama & NIK).
- **Mobile (320px - 767px):** Single-column stack. Outer margins clamp to `1rem` (`16px`). Table views switch to responsive modular list cards with sticky bottom-sheet filter triggers.

### Spacing Principles
- Component inner paddings strictly respect an 8pt base grid: `space-xs` (4px) for badge pill margins, `space-sm` (8px) for input padding and compact table cells, `space-md` (16px) for card body internal padding, and `space-xl` (40px) for layout section divisions.

## Elevation & Depth

To maintain an uncluttered, institutional character, depth relies primarily on **low-contrast architectural outlines combined with ambient, slate-tinted surface elevations**. High-blur, glossy drops are explicitly omitted in favor of tactile clarity.

### Depth Layers
- **Level 0 (Base Canvas):** `#F8FAFC`. Completely flat; anchors persistent navigation rails and table backgrounds.
- **Level 1 (Cards, Metric Tiles, Table Headers):** `#FFFFFF` surface enclosed by a 1px solid `#E2E8F0` border, paired with an ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Hover States & Active Dropdowns):** `#FFFFFF` surface, 1px `#CBD5E1` border, elevated by `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modals, Citizen Detail Drawers, Sticky Toolbars):** `#FFFFFF` framed by `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- **Modals Overlay:** Solid backdrop tint of `#0F172A` with `45%` opacity, focusing operator attention without heavy aesthetic distortion.

## Shapes

The design system adopts a **Soft (Level 1)** geometric standard. This geometry balances modern software friendliness with the crisp geometric discipline required by civic enterprise applications.

### Geometry Rules
- **Base Components (`0.25rem` / 4px):** Form inputs, table checkbox frames, code pills, and nested data tags.
- **Standard Cards & Containers (`0.5rem` / 8px):** Metric panels, dashboard white cards, dropdown menus, and data grid wrappers.
- **Modals & Drawers (`0.75rem` / 12px):** Citizen registration dialogs, export configurations, and floating action sheets.
- **Pills (`9999px` Full Rounded):** Status indicators (`Lunas`, `Menunggak`, `Terverifikasi`) and circular citizen avatar placeholders.

## Components

### 1. Buttons
- **Primary Civic Button:** Solid `#0F5132` background, white label, 8px padding horizontal (`space-md`), 8px vertical (`space-sm`), radius `0.25rem`. Hover transitions to `#198754`. Focus ring: 2px offset with `#198754`.
- **Secondary / Action Button:** Outline 1px `#E2E8F0`, surface `#FFFFFF`, text `#0F172A`. Hover: background `#F1F5F9`.
- **Destructive Button:** Surface `#FFF1F2`, text `#9F1239`, border `#FECDD3`. Hover: background `#FFE4E6`.

### 2. Status Badges & Civic Pills
- Pill-shaped (`rounded-full`), padding 2px vertical, 10px horizontal. Font `label-sm` in all-caps or title case:
  - **Terverifikasi / Lunas:** Background `#ECFDF5`, text `#065F46`, left-aligned mini-dot indicator (`#10B981`).
  - **Menunggu Verifikasi:** Background `#FFFBEB`, text `#92400E`, left-aligned mini-dot indicator (`#F59E0B`).
  - **Menunggak / Ditolak:** Background `#FFF1F2`, text `#9F1239`, left-aligned mini-dot indicator (`#F43F5E`).
  - **Dalam Proses:** Background `#F0F9FF`, text `#0369A1`, left-aligned mini-dot indicator (`#0EA5E9`).

### 3. Metric KPI Cards with Trend Indicators
- Clean white card, `0.5rem` radius, 1px `#E2E8F0` border, `1.25rem` padding.
- Top row: Metric title in `body-sm` (`#64748B`) accompanied by a subtle slate icon container.
- Center row: Bold primary numerical counter in `headline-lg` (`#0F172A`).
- Footer row: Trend badge containing green up-arrow (`+12.4% bln ini`) or red down-arrow alongside contextual civic notes (`4 Kepala Keluarga belum bayar`).

### 4. Structured Civic Data Tables
- Header row with `#F8FAFC` background, 1px `#E2E8F0` bottom border, uppercase column labels using `label-sm` in `#64748B`.
- Row height: Fixed 52px for optimal data scanning density.
- Hover state: Full row subtle tint of `#F8FAFC`.
- Sticky action column on desktop with quick triggers: *Lihat Detail*, *Verifikasi*, *Kirim Tagihan*.

### 5. Multi-Role Header Navigation
- Top navigation bar in `#0F5132` (or white with a 2px `#0F5132` brand accent strip).
- Contains real-time RT/RW jurisdiction switcher (e.g., `RT 004 / RW 012 - Kel. Sukamaju`).
- Right-aligned role badge: `Ketua RT`, `Sekretaris`, `Bendahara`, or `Warga Mandiri` with distinct border tints.

### 6. Step Progress Indicators
- Used for Citizen Submission & Surat Pengantar workflows (Pengajuan -> Verifikasi RT -> Pengesahan RW -> Selesai).
- Connected by 2px structural lines (`#E2E8F0` for pending, `#198754` for completed).
- Step nodes feature numbered badges or checkmarks with state-dependent coloration.

### 7. Form Controls & Inputs
- Borders set to 1px `#CBD5E1`, internal padding 8px 12px, font size 14px.
- Focus: 1px border `#0F5132` with a `0 0 0 3px rgba(15, 81, 50, 0.15)` focus aura.
- Integrated currency prefix add-on (`Rp`) and NIK validation helpers with instantaneous visual verification icons.