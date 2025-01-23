import { Sidebar } from "@/components/sidebar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Details = () => {
    const images = [
        "/images/drones/drone1.jpg",
        "/images/drones/drone2.jpg",
        "/images/drones/drone3.jpg",
    ];

    return (
        <div>
            <Sidebar />
            <Card className="w-full h-screen">
                <CardHeader className="flex w-full items-center">
                    <Carousel className="flex w-full max-w-lg max-sm:max-w-sm">
                        <CarouselContent className="flex w-full items-center">
                            {images.map((src, index) => (
                                <CarouselItem
                                    className="flex-shrink-0 md:basis-1/2 lg:basis-1/3 w-full mx-2"
                                    key={index}>
                                    <img
                                        className="h-48 w-full object-contain"
                                        src={src}
                                        alt={`Drone ${index + 1}`}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardHeader>

                <CardContent>
                    <div>
                        <h1>Nome do produto</h1>
                        <span>Descrição do produto</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Details;
