// app/loading.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-8 w-48 rounded-lg" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="text-center space-y-4">
                        <Skeleton className="h-20 w-48 mx-auto rounded-lg" />
                        <Skeleton className="h-8 w-32 mx-auto rounded-full" />
                    </div>


                    <div className="grid grid-cols-2 gap-3">
                        <Skeleton className="h-12 rounded-lg" />
                        <Skeleton className="h-12 rounded-lg" />
                    </div>


                    <div className="space-y-4">
                        <Skeleton className="h-px w-full" />
                        <div className="space-y-3">
                            <Skeleton className="h-5 w-24" />
                            <div className="space-y-2">
                                <Skeleton className="h-10 w-full rounded-lg" />
                                <Skeleton className="h-10 w-full rounded-lg" />
                                <Skeleton className="h-10 w-11/12 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}