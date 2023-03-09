/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp-deploy-project",

  // 아래의 주소들만 out폴더 만들어줘(getServerSideProps에 있는 페이지는 제외하기
  exportPathMap: () => {
    ({
      "/": { page: "/" },
      "/boards": { page: "/boards" },
      "/404": { page: "/404" },
    });
  },
};

module.exports = nextConfig;
