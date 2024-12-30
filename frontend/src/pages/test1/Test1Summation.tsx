const Test1Summation = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Test 1A:</h2>
      <p className="mb-4">
        이 테스트에서는{" "}
        <span className="font-bold text-blue-500">Tanstack Query</span>를
        사용하여 데이터 패칭을 수행했습니다. 설정된{" "}
        <span className="font-bold text-blue-500">staleTime</span> 동안
        컴포넌트가 <span className="font-bold text-blue-500">unmount</span>되고
        다시 <span className="font-bold text-blue-500">mount</span>되더라도( EX.
        Test1 B 갔다가 다시 Test1 A 오는 경우 ) 네트워크 요청 없이 캐시된
        데이터를 사용합니다. 이 방식은 불필요한 네트워크 요청을 줄이고 성능을
        최적화하는 데 유리합니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Test 2B:</h2>
      <p className="mb-4">
        이 테스트에서는 <span className="font-bold text-blue-500">Axios</span>와{" "}
        <span className="font-bold text-blue-500">useState</span>를 사용하여
        데이터 패칭과 상태 관리를 했습니다. 컴포넌트가{" "}
        <span className="font-bold text-blue-500">mount</span>될 때마다 네트워크
        요청을 수행하고, 받아온 데이터는{" "}
        <span className="font-bold text-blue-500">useState</span>를 통해 로컬
        상태에 저장됩니다. 이 방식은 상태와 네트워크 요청을 명시적으로 관리하는
        방식으로,{" "}
        <span className="font-bold text-blue-500">Tanstack Query</span>보다
        데이터 패칭이 더 자주 발생합니다.
      </p>
      <p className="mb-4">
        또한, <span className="font-bold text-blue-500">presets</span>를{" "}
        <span className="font-bold text-blue-500">3G</span>로 설정한 환경에서
        네트워크 요청이 진행되었을 때,{" "}
        <span className="font-bold text-blue-500">Test 1A</span>에서는 캐시된
        데이터를 사용하기 때문에 사용자는 즉시 UI를 볼 수 있습니다. 반면{" "}
        <span className="font-bold text-blue-500">Test 2B</span>에서는 네트워크
        요청에
        <span className="font-bold text-blue-500"> 2.04초 ~ 4.56초</span>가
        소요되었기에 이 시간동안 사용자는 스켈레톤 UI를 봐야만 합니다.
      </p>
      <p className="mb-4">
        <span className="font-bold text-blue-500">presets</span>를{" "}
        <span className="font-bold text-blue-500">Offline</span>으로 설정한
        경우, <span className="font-bold text-blue-500">Test 1A</span>에서는
        캐시된 데이터를 통해 UI가 정상적으로 표시되었지만,
        <span className="font-bold text-blue-500"> Test 2B</span>에서는 네트워크
        요청이 실패하면서 에러가 발생했습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">요약:</h2>
      <p>
        물론 <span className="font-bold text-blue-500">Test 2B</span> 방식에서도{" "}
        <span className="font-bold text-blue-500">localStorage</span>에 데이터를
        저장하여 캐싱을 구현할 수 있지만,{" "}
        <span className="font-bold text-blue-500">로딩 처리</span>,{" "}
        <span className="font-bold text-blue-500">에러 처리</span>,{" "}
        <span className="font-bold text-blue-500">캐싱 처리</span> 측면에서{" "}
        <span className="font-bold text-blue-500">Tanstack Query</span>가
        제공하는 더 간결한 로직이 장점입니다. 특히, 데이터 변동이 적은
        환경에서는{" "}
        <span className="font-bold text-blue-500">Tanstack Query</span>를
        도입하는 것이 더욱 유리합니다.
      </p>
    </>
  );
};

export default Test1Summation;
