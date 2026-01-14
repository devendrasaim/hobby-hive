<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hobby Hive</h1>
      <p className="text-xl mb-8 text-muted-foreground">The Social Hobby Hive. Connect with people through hobbies.</p>
      <div className="flex gap-4">
        <Button variant="default" onClick={() => navigate('/discover')}>Get Started</Button>
        <Button variant="outline" onClick={() => navigate('/discover')}>Learn More</Button>
      </div>
    </div>
  );
};

export default Index;
=======
import { AppLayout } from "@/layout/AppLayout";
import { HiveFeed } from "@/features/hive/HiveFeed";

const Index = () => {
  return (
    <AppLayout hideNav={false}>
      <HiveFeed />
    </AppLayout>
  );
};

export default Index;
>>>>>>> 341cf735da52260ed6e4908981d32b93d46e8c29
