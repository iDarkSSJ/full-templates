import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Lightning Fast Performance',
                description: 'Optimized for speed and performance'
            },
            {
                icon: Shield,
                title: 'SEO Optimized Structure',
                description: 'Built with SEO best practices in mind'
            },
            {
                icon: TabletSmartphone,
                title: 'Responsive by Default',
                description: 'Mobile-friendly out of the box'
            },
            {
                icon: Smile,
                title: 'Easy Customization',
                description: 'Customize the theme to your liking'
            },
            {
                icon: Type,
                title: 'Everything you need',
                description: 'Comes with all the essentials'
            },
            {
                icon: CodeXml,
                title: 'Web is almost Ready',
                description: 'Just add your content and go live'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
