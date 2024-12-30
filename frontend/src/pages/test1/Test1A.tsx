import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Post {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const Test1A = () => {
  // staleTime의 기본값은 0ms, gcTime의 기본값은 5분
  // 둘다 명시하지 않을 경우 기본값을 사용하게 된다.
  // 따라서 gcTime의 기본값이 5분이어도 이는 의미가 없다.
  // staleTime의 기본값이 0ms이기에, 신선하지 않은 상태로 간주하고 데이터 패칭을 시도한다.

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Array<Post>> => {
      const response = await fetch("http://localhost:5000/api/products");
      return await response.json();
    },
    staleTime: 1000 * 60,
  });

  if (isLoading) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Using TanStack Query.
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

  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Using TanStack Query
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {data?.map((product) => (
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

export default Test1A;
