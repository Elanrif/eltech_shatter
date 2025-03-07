import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { Bot, Clapperboard, Fence, FolderArchive, HelpCircle, LayoutDashboard, MessageSquareText, Settings } from 'lucide-react';
import AppLogo from './app-logo';
import { NavMain } from './nav-main';

const data = {
    navHome: [
        {
            title: 'Accueil',
            url: 'dashboard',
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: 'Mes Postes',
            url: 'home',
            icon: MessageSquareText,
            items: [
                {
                    title: 'Publication',
                    url: 'home',
                },
                {
                    title: 'commentaire',
                    url: 'home',
                },
            ],
        },
    ],
    navMain: [
        {
            title: 'Culture et Internet',
            url: 'home',
            icon: Fence,
            items: [
                {
                    title: 'Humour',
                    url: 'home',
                },
                {
                    title: 'Memes',
                    url: 'home',
                },
                {
                    title: 'Animaux de compagnie',
                    url: 'home',
                },
            ],
        },
        {
            title: 'Films et séries',
            url: 'home',
            icon: Clapperboard,
        },
    ],
    navResource: [
        {
            title: 'eltech shatter',
            url: 'home',
            icon: Bot,
            items: [
                {
                    title: 'Explorer',
                    url: 'home',
                },
                {
                    title: 'Quantum',
                    url: 'home',
                },
            ],
        },
        {
            title: 'Aide',
            url: 'home',
            icon: HelpCircle,
        },
        {
            title: 'Pramètre',
            url: 'home',
            icon: Settings,
        },
    ],
};

const footerNavItems = [
    {
        title: 'Documentation',
        url: 'home',
        icon: FolderArchive,
        items: [
            {
                title: 'Explorer',
                url: 'home',
            },
            {
                title: 'Quantum',
                url: 'home',
            },
        ],
    },
    {
        title: 'Paramètre',
        url: 'profile.edit',
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route('home')} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navHome} title="dashboard" />
                <NavMain items={data.navMain} title="Principale" />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} title="Autres" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
