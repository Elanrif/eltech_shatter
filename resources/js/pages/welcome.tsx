import CardPostUser from '@/components/welcome/card-post-user';
import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { postData } from '@/lib/data/data.test';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Etelch Shatter',
        href: '/',
    },
];

export default function Welcome() {
    return (
        <>
            <AppWelcomeLayout breadcrumbs={breadcrumbs}>
                <Head title="eltech shatter" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    {postData.map((post, index) => (
                        <React.Fragment key={index}>
                            <CardPostUser post={post} />
                        </React.Fragment>
                    ))}
                </div>
            </AppWelcomeLayout>
        </>
    );
}
