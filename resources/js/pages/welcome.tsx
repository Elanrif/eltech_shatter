import CardPostUser from '@/components/welcome/card-post-user';
import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { type BreadcrumbItem } from '@/types';
import { Post } from '@/types/models/user';
import { Head, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

interface WelcomeProps {
    success: string | null;
    posts: Post[];
    [key: string]: unknown; // Inertia exige une signature d'index pour les props
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Etelch Shatter',
        href: '/',
    },
];

export default function Welcome() {
    const {props} = usePage<WelcomeProps>();
    console.log('props: ', props)
    const { success,posts } = props;

    console.log('posts: ', posts);
    useEffect(() => {
        if(success) {
            toast.success(`${success}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Bounce,
            });
        }
    }, [success])

    return (
        <>
            <AppWelcomeLayout breadcrumbs={breadcrumbs}>
                <Head title="eltech shatter" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    {posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <CardPostUser post={post} />
                        </React.Fragment>
                    ))}
                </div>
            </AppWelcomeLayout>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </>
    );
}
