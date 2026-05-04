# Presupuesto Don Hugo

Aplicación de presupuesto construida con **React + Vite**.

## 🚀 Demo en vivo

Una vez activado GitHub Pages (ver más abajo), la app estará disponible en:

**https://thinkfashz.github.io/Presupuesto-Don-hugo/**

## 👀 Previsualizar sin instalar nada

Puedes abrir y ejecutar el proyecto directamente en el navegador, sin instalar nada localmente:

- [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/thinkfashz/Presupuesto-Don-hugo)
- [![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/thinkfashz/Presupuesto-Don-hugo/main)
- [Abrir en github.dev](https://github.dev/thinkfashz/Presupuesto-Don-hugo) (o pulsa la tecla `.` sobre el repo)

## 🛠️ Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # ejecutar ESLint
```

## 🌐 Despliegue en GitHub Pages

El repositorio incluye un workflow en `.github/workflows/deploy.yml` que compila la app y la publica en GitHub Pages automáticamente con cada push a `main`.

### Activación (solo la primera vez)

1. Ve a **Settings → Pages** en el repositorio.
2. En **Source**, selecciona **"GitHub Actions"**.
3. Haz un push a `main` (o ejecuta el workflow manualmente desde la pestaña *Actions*).
4. Cuando termine el job, el link aparecerá en *Settings → Pages* y en el environment **github-pages**.

> El proyecto está configurado con `base: '/Presupuesto-Don-hugo/'` en `vite.config.js` para que los assets carguen correctamente bajo la ruta del repositorio en GitHub Pages.

