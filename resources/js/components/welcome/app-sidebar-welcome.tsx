import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { BookOpenIcon, Fence, HelpCircle, HouseIcon } from 'lucide-react';
import AppLogo from '../app-logo';
import { NavMain } from '../nav-main';
import { NavUser } from '../nav-user';
import { ButtonPost } from './button-post';

const data = {
    navHome: [
        {
            title: 'Publications',
            url: 'home',
            icon: HouseIcon,
            isActive: true,
        },
    ],
    navMain: [
        {
            title: 'Thèmes',
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
    ],
    navResource: [
        {
            title: 'Aide',
            url: 'home',
            icon: HelpCircle,
        },
        {
            title: 'Blog',
            url: 'home',
            icon: BookOpenIcon,
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

            <SidebarContent className="bg-blue-50">
                <NavMain items={data.navHome} title="accueil" />
                <NavMain items={data.navMain} title="thématique" />
                <NavMain items={data.navResource} title="resource" />
            </SidebarContent>

            <SidebarFooter>
                <ButtonPost />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
