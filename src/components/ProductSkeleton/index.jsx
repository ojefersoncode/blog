import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => (
    <div className="flex w-full flex-col space-y-3">
        <Skeleton className="h-[200px] w-[250px] max-md:w-[200px] rounded-xl" />
        <div className="space-y-3">
            <div className="flex gap-4">
                <Skeleton className="h-3 w-[180px] max-md:w-[150px]" />
                <Skeleton className="h-3 w-[50px] max-md:w-[30px]" />
            </div>
            <Skeleton className="h-3 w-[200px] max-md:w-[160px] " />
            <Skeleton className="h-3 w-[140px] max-md:w-[120px] " />
        </div>
    </div>
);

export default ProductSkeleton;
