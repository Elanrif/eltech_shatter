import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { BookOpen, Bot, Frame, PieChart, Settings2, SquareTerminal } from 'lucide-react';
import AppLogo from '../app-logo';
import { NavMain } from './nav-main';
import { NavWelcomeUser } from './nav-welcome-user';
import { ButtonPost } from './button-post';

const data = {
    navHome: [
        {
            title: 'Accueil',
            url: '/',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Populaires',
            url: '/famous',
            icon: SquareTerminal,
            isActive: true,
        },
    ],
    navMain: [
        {
            title: 'Thématique',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: '#',
                },
                {
                    title: 'Starred',
                    url: '#',
                },
                {
                    title: 'Settings',
                    url: '#',
                },
            ],
        },
        {
            title: 'Ressource',
            url: '#',
            icon: Bot,
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
        },
    ],
    navResource: [
        {
            title: 'Ressource',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            title: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
    ],
};

export function AppSidebarWelcome() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navHome} title="accueil" />
                <NavMain items={data.navMain} title="thématique" />
                <NavMain items={data.navResource} title="resource" />
            </SidebarContent>

            <SidebarFooter>
                <ButtonPost/>
                <NavWelcomeUser />
            </SidebarFooter>
        </Sidebar>
    );
}
