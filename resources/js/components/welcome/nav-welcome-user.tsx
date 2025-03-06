import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { type SharedData } from '@/types';
import { User } from '@/types/models/user.model';
import { usePage } from '@inertiajs/react';
import { ChevronsUpDown } from 'lucide-react';

export function NavWelcomeUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const isMobile = useIsMobile();
    const auth__ = {
        user: {
            id: 1,
            name: 'Jhon Doe',
            email: 'jhon@gmail.com',
            email_verified_at: '2023-10-01T00:00:00.000000Z',
            created_at: '2023-10-01T00:00:00.000000Z',
            updated_at: '2023-10-01T00:00:00.000000Z',
        },
    };
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                {(auth?.user as User) ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg" className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">
                                <UserInfo user={auth.user} />
                                <ChevronsUpDown className="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                            align="end"
                            side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
                        >
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg" className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">
                                <UserInfo user={auth__.user} />
                                <ChevronsUpDown className="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                            align="end"
                            side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
                        >
                            <UserMenuContent user={auth__.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
