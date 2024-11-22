import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
} from 'unocss'
// ni -D @unocss/preset-icons @unocss/preset-uno @iconify/json @unocss/preset-attributify  @unocss/preset-web-fonts  @unocss/preset-rem-to-px
// pnpm add -D @unocss/preset-icons
// pnpm add -D @unocss/preset-uno
// pnpm add -D @iconify/json
// pnpm add -D @unocss/preset-attributify
// pnpm add -D @unocss/preset-typography //文字排版预设
// pnpm add -D @unocss/preset-web-fonts //字体预设
// pnpm add -D @unocss/preset-tagify  //将原子化CSS类作为标签<flex></flex> prefix:'un-' 只有un-开头才会被匹配
// pnpm add -D @unocss/preset-rem-to-px //将rem转换为px baseFontSize 16
// pnpm add -D @unocss/transformer-attributify-jsx
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'border-base': 'border-1 border-solid border-[#535bf2]',
    'div-radius': 'border-radius-2',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(),
  ],
  transformers: [
    transformerAttributifyJsx(), // <--
  ],

})
