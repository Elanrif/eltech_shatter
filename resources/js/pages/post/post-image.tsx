import { CardPostImageForm } from '@/components/card-post-image-form';
import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Poster une image',
        href: 'post.image',
    },
];

export default function PostImage() {
    return (
        <AppWelcomeLayout breadcrumbs={breadcrumbs}>
            <div className="px-7 py-4">
                <Head title="Poster image" />
                <CardPostImageForm />
            </div>
        </AppWelcomeLayout>
    );
}
