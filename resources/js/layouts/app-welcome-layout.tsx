import AppWelcomeLayoutTemplate from '@/layouts/app/app-sidebar-welcome-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppWelcomeLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppWelcomeLayoutTemplate>
);
