import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    // 💡 CloudFront/ALBなどを通すときに有効
    trustProxy: true
  }
};
