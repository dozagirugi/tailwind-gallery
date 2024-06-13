import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]); //이미지 배열
  const [isLoading, setIsLoding] = useState(true); //로딩중 상태
  const [term, setTerm] = useState("flowers"); //검색어

  //처음 시작시 이미지들을 받아서 images에 저장
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=44340734-8439bad8cf8b1e54f588a54d3&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto my-7">
      <ImageSearch />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
