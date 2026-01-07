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
