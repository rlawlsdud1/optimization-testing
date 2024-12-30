const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        FE 최적화에 대한 고찰
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. 데이터 변화가 적은 곳에서 Tanstack-query를 통한 효율 측정
        </h2>
        <p className="text-gray-600">
          데이터가 자주 변경되지 않는 곳에서 `Tanstack-query`를 사용하여 서버
          요청을 최적화하고 캐시 관리의 이점을 활용하는 방법에 대해 다룹니다.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. props drilling, Zustand의 비교
        </h2>
        <p className="text-gray-600">
          `props drilling`을 사용한 상태 관리와 `Zustand`를 사용한 상태 관리의
          비교를 통해, 더욱 효율적인 상태 관리 방법을 모색합니다.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. memoization은 렌더링 시간에 얼마나 유의미한 영향을 끼칠까
        </h2>
        <p className="text-gray-600">
          `memoization`을 사용하여 렌더링 성능을 최적화하는 방법과, 렌더링
          시간에 미치는 영향을 분석합니다.
        </p>
      </div>

      <div className="text-center mt-8 text-lg text-gray-600">
        <p>
          이 프로젝트는 프론트엔드 최적화를 실험하고, 각 기술들이 실제로 렌더링
          성능에 미치는 영향을 분석하기 위한 과정입니다.
        </p>
        <p>사실 그냥 단순하게 궁금해서 해봤습니다.</p>
      </div>
    </div>
  );
};

export default Home;
