import { CarouselDemo } from "./components/demo/Carouseldemo";
import { Button } from "./components/ui/button";
import { Carousel } from "./components/ui/carousel";

function App() {
  return (
    <>
      <div>
        <p className="underline text-3xl font-bold">Hello from tailwind</p>
      </div>
      <Button>hello from Shad</Button>
      <div className="flex justify-center">
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  );
}

export default App;
