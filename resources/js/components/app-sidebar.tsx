import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { Bookmark, Bot, Fence, HelpCircle, LayoutGrid, Settings } from 'lucide-react';
import AppLogo from './app-logo';
import { NavMain } from './nav-main';

const data = {
    navHome: [
        {
            title: 'Dashboard',
            url: 'home',
            icon: LayoutGrid,
        },
        {
            title: 'Enregistré',
            url: 'home',
            icon: Bookmark,
            isActive: true,
        },
    ],
    navMain: [
        {
            title: 'Culture et Internet',
            url: 'home',
            icon: Fence,
            items: [
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
    ],
    navResource: [
        {
            title: 'eltech shatter',
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
                <NavMain items={data.navMain} title="Principale" />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
