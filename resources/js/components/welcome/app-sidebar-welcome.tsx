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
            url: 'home',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Populaires',
            url: 'home',
            icon: SquareTerminal,
            isActive: true,
        },
    ],
    navMain: [
        {
            title: 'Thématique',
            url: 'home',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: 'home',
                },
                {
                    title: 'Starred',
                    url: 'home',
                },
                {
                    title: 'Settings',
                    url: 'home',
                },
            ],
        },
        {
            title: 'Ressource',
            url: 'home',
            icon: Bot,
        },
        {
            title: 'Documentation',
            url: 'home',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: 'home',
                },
                {
                    title: 'Get Started',
                    url: 'home',
                },
                {
                    title: 'Tutorials',
                    url: 'home',
                },
                {
                    title: 'Changelog',
                    url: 'home',
                },
            ],
        },
        {
            title: 'Settings',
            url: 'home',
            icon: Settings2,
        },
    ],
    navResource: [
        {
            title: 'Ressource',
            url: 'home',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: 'home',
                },
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
            title: 'Design Engineering',
            url: 'home',
            icon: Frame,
        },
        {
            title: 'Sales & Marketing',
            url: 'home',
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
