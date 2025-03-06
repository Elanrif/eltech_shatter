import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Postt',
        href: '/add-post',
    },
];

export default function AddPost() {
    return (
        <AppWelcomeLayout breadcrumbs={breadcrumbs}>
            <Head title="eltech shatter" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">bonjour</div>
        </AppWelcomeLayout>
    );
}
