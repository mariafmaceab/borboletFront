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
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**/**',
                search: '?t=st=1738790667~exp=1738794267~hmac=8588ebeab0c93beff1901e1b7320a0f1ae461639e3d83de0874771d1df0831bf&w=2000',
            },
        ]
    }
};

export default nextConfig;
