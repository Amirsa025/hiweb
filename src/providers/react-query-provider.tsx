'use client'
import React from "react";
import {queryClient} from "@/lib/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export  function  QueryProvider({children}:React.PropsWithChildren) {
        return (
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        )
}