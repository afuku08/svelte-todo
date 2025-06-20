import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    csrf: {
    checkOrigin: false // 🔥 一時対応のみ、本番では非推奨
    } 
  }
};
