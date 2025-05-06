'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';
import GoogleButton from './components/google-button';
import { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    console.log('Googleログイン');
    setIsLoading(false);
  };

  return (
    <div className="grid h-screen w-full place-items-center">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <div className="mb-2 flex items-center justify-center">
            <Package className="h-10 w-10" />
          </div>
          <CardTitle className="text-center text-2xl font-bold">Team Stock</CardTitle>
          <CardDescription className="text-center">Googleアカウントでログイン</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <GoogleButton isLoading={isLoading} onClick={handleGoogleLogin} />
        </CardContent>
      </Card>
    </div>
  );
}
