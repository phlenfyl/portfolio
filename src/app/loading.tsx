"use client"

import Router from "next/router";
import { useState, useEffect } from "react"
import Preloader from "@/components/preloader";

// interface LoadingProps {
//   children: React.ReactNode;
// }


export default function Loading() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleStop = () => setIsLoading(false);
      
        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleStop);
        Router.events.on('routeChangeError', handleStop);
      
        return () => {
          Router.events.off('routeChangeStart', handleStart);
          Router.events.off('routeChangeComplete', handleStop);
          Router.events.off('routeChangeError', handleStop);
        };
      }, []);

    
    return (
      <div>
        {isLoading && <Preloader /> }
      </div>
    );
      

}


