# Next.js Conf 2024 — Interactive 3D "NEXT" Experience

An interactive 3D web experience celebrating Next.js Conf 2024: the word
**"NEXT" rendered as voxel-style 3D lettering** built from dozens of
translucent, glass-like blue cubes, floating in a reflective 360° environment —
all rendered in real time with react-three-fiber. Drag to rotate, scroll to
zoom, and watch it auto-spin.

## What it does

- **3D "NEXT" letters**: each letter (N, E, X, T) is procedurally assembled from
  individual cubes using 5×5 pixel-art grids (`BoxLetter`), with physical glass
  materials (transmission, clearcoat) and outlined edges.
- **Interactive camera**: orbit controls with auto-rotate, plus manual
  zoom / pan / rotate via mouse or touch.
- **Immersive environment**: equirectangular HDR-style environment map (hosted on
  Vercel Blob Storage) used as the scene background and reflections, with a
  different, lighter map on mobile devices.
- **Responsive**: detects mobile devices and adjusts the environment for
  performance.

> Note: this repository was originally scaffolded by [v0.app](https://v0.app)
> (project "my-v0-project").

## Features

- Real-time 3D scene with `@react-three/fiber` + `@react-three/drei`
- Procedural pixel-font letter builder (extensible to any letter via the
  `getLetterShape` grid map)
- Mesh-physical glass materials (roughness / metalness / transmission)
- Auto-rotating camera with full orbit controls
- Device-aware environment loading (mobile vs desktop)
- Dark presentation canvas, fullscreen layout
- Next.js 15 (patched to 15.2.8), React 19, TypeScript 5

## Tech stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 15.2.8 (App Router, React 19)        |
| 3D         | three.js, @react-three/fiber, @react-three/drei |
| Styling    | Tailwind CSS 3.4                             |
| Components | shadcn/ui + Radix UI (scaffold)              |
| Language   | TypeScript 5                                 |

## Quick start

Requirements: Node.js 18+ and pnpm (or npm).

```bash
pnpm install        # or: npm install --legacy-peer-deps
pnpm dev            # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — drag to rotate,
scroll to zoom.

```bash
pnpm build          # static export to out/
pnpm start
```

## Project structure

```
app/
├── page.tsx            # Entry: renders the 3D component fullscreen
├── layout.tsx          # Root layout
└── globals.css         # Global styles
next-blocks.tsx         # The 3D scene: BoxWithEdges, BoxLetter, Scene, Component
components/
└── theme-provider.tsx  # Theme wrapper (scaffold)
lib/utils.ts            # cn() helper
public/                 # Static assets
next.config.mjs         # Next config (static export + basePath for GitHub Pages)
tailwind.config.ts      # Tailwind theme
components.json         # shadcn/ui config
```

## Environment variables

None required. The scene streams its environment maps from public Vercel Blob
Storage URLs at runtime (internet access needed for the background/reflections).

## Deployment

- **GitHub Pages (this repo):** statically exported (`output: 'export'`) with
  `basePath: '/next-js-conf-2024'` for the project subpath.
  Live at https://girishlade111.github.io/next-js-conf-2024/
  > For domain-root deploys (e.g. Vercel), **remove `basePath`** from
  > `next.config.mjs`.
- **Vercel:** import the repo and deploy as-is.
- Build output goes to `out/` (git-ignored).

## License

Free to use. Built by Girish Lade — https://ladestack.in
