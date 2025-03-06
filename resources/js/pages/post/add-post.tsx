import { CardPostForm } from '@/components/card-post-form';
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
            <div className='px-7 py-4'>
                <Head title="eltech shatter" />
                <CardPostForm />
            </div>
        </AppWelcomeLayout>
    );
}
