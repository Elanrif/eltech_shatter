import { CardPostQuestionForm } from '@/components/card-post-question-form';
import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Poster une question?',
        href: 'post.question',
    },
];

export default function PostQuestion() {
    return (
        <AppWelcomeLayout breadcrumbs={breadcrumbs}>
            <div className="px-7 py-4">
                <Head title="Poster question" />
                <CardPostQuestionForm />
            </div>
        </AppWelcomeLayout>
    );
}
