interface HoneycombItem {
  id: string;
  imageUrl: string;
  type: "video" | "image";
}

interface HoneycombGridProps {
  items: HoneycombItem[];
}

export const HoneycombGrid = ({ items }: HoneycombGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {items.map((item) => (
        <div
          key={item.id}
          className="aspect-square relative overflow-hidden rounded-lg bg-hive-card group cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};


