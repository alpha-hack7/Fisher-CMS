import { useEffect } from "react";
import { toast } from "react-toastify";
import { CarVideos } from "../components/car_videos";
import Loader from "../components/loader";
import Navigation_bar from "../components/navigation_bar";
import { useVideos } from "../hooks/useVideos";

const Cars = () => {
  const { data: car_vids, isLoading, error } = useVideos();
  useEffect(() => {
    if (error) {
      toast.error("Videos failed to load");
    }
  }, [error]);
  return (
    <>
      <Navigation_bar />
      <section className="flex flex-col gap-4">
        {isLoading && <Loader />}
        <CarVideos car_vids={car_vids} />
      </section>
    </>
  );
};

export default Cars;
