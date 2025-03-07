import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { BookOpen, BookOpenIcon, Bot, Clapperboard, Fence, HelpCircle, HouseIcon, MessageCircleQuestionIcon } from 'lucide-react';
import AppLogo from '../app-logo';
import { ButtonPost } from './button-post';
import { NavMain } from '../nav-main';
import { NavUser } from '../nav-user';

const data = {
    navHome: [
        {
            title: 'Accueil',
            url: 'home',
            icon: HouseIcon,
            isActive: true,
        },
        {
            title: 'Populaires',
            url: 'home',
            icon: BookOpen,
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
            title: 'Question et réponses',
            url: 'home',
            icon: MessageCircleQuestionIcon,
            items: [
                {
                    title: 'Questions et réponses',
                    url: 'home',
                },
                {
                    title: 'Histoires et confessions',
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

            <SidebarContent>
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
