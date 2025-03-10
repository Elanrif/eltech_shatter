import { Skeleton } from '@/components/ui/skeleton';
import { ButtonPost } from './button-post';

export function SkeletonPost() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="flex justify-center space-x-4">
                <Skeleton className="h-[150px] w-[150px] rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[650px]" />
                    <Skeleton className="h-8 w-[250]" />
                    <Skeleton className="h-[325px] w-[650px] rounded-xl flex flex-col justify-center items-center">
                        Oups, il n'y a aucune publication 🙄
                    </Skeleton>
                    <ButtonPost/>
                </div>
            </div>
        </div>
    );
}