import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Post {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const Test1B = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          cancelToken: cancelTokenSource.token,
        });
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          setIsLoading(false);
          setIsError(true);
          console.error(error);
        }
      }
    };

    getPosts();

    return () => {
      cancelTokenSource.cancel(
        "TestB 컴포넌트가 unmount 됨에 따라 네트워크 요청 취소"
      );
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Using Axios + useState
        </h1>
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-64">
              <Skeleton height={192} />
              <Skeleton count={2} />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Using Axios + useState
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {posts?.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-lg w-64"
          >
            <div className="w-full h-48 overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-500">{product.price}원</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test1B;
