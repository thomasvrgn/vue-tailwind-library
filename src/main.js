// Manually injecting TailwindCSS into the DOM
import tailwind from 'tailwindcss/tailwind.css?inline';
import injectCSS from 'style-inject';
injectCSS(tailwind);

// Exporting components
export { default as Button } from './components/HelloWorld.vue';