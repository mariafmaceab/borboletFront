/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-973570666b3f4d6da48e4aafb394e236.r2.dev',
                port: '',
                pathname: '/**',
                search: '',
            },
        ]
    }
};

export default nextConfig;
