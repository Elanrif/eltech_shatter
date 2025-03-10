import { CardPostImageForm } from '@/components/forms/card-post-image-form';
import AppWelcomeLayout from '@/layouts/app-welcome-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

interface PostImageProps {
    error: string | null;
    [key: string]: unknown; // Inertia exige une signature d'index pour les props
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Poster une image',
        href: 'posts',
    },
];

export default function PostImage() {
    const { props } = usePage<PostImageProps>();
    const { error } = props;

    useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
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
    }, [error]);
    return (
        <AppWelcomeLayout breadcrumbs={breadcrumbs}>
            <div className="px-7 py-4">
                <Head title="Poster image" />
                <CardPostImageForm />
            </div>
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
        </AppWelcomeLayout>
    );
}
