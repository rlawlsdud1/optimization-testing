const Test2Summation = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Test 2A:</h2>
      <p className="mb-4">
        이 테스트에서는{" "}
        <span className="font-bold text-blue-500">props drilling</span>을 통해
        부모 컴포넌트에서 최하위(10단계 아래) 컴포넌트까지 상태를 전달했습니다.
        부모 컴포넌트의 버튼을 클릭하면 상태 값이 1 증가하며, 상태가
        업데이트됨에 따라 모든 하위 컴포넌트가{" "}
        <span className="font-bold text-blue-500">리렌더링</span>되었습니다.
        실제로 상태를 사용하는 곳은 최하위 컴포넌트뿐이었지만, 그 사이의 모든
        컴포넌트도{" "}
        <span className="font-bold text-blue-500">불필요하게 리렌더링</span>
        되었습니다. 특히, 중간 컴포넌트들에는 무거운 연산을 수행하는 함수들이
        포함되어 있었으며, 이로 인해 성능 저하가 발생했습니다. Profiler로 렌더링
        속도를 측정한 결과, 약{" "}
        <span className="font-bold text-blue-500">280ms</span>가 소요되었습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Test 2B:</h2>
      <p className="mb-4">
        이 테스트에서는 <span className="font-bold text-blue-500">Zustand</span>
        를 사용하여 상태 관리를 구현했습니다. 상태를 사용하는{" "}
        <span className="font-bold text-blue-500">최하위 컴포넌트만</span> 해당{" "}
        <span className="font-bold text-blue-500">store</span>를 구독하도록
        구성했으며, 버튼 클릭 시 최하위 컴포넌트만{" "}
        <span className="font-bold text-blue-500">리렌더링</span>이
        발생했습니다. Profiler를 사용해 측정한 결과, 리렌더링 소요 시간은 약{" "}
        <span className="font-bold text-blue-500">30ms</span>로 줄어들었습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">요약:</h2>
      <p className="mb-4">
        초기 렌더링 속도는{" "}
        <span className="font-bold text-blue-500">Test 2A</span>와{" "}
        <span className="font-bold text-blue-500">Test 2B</span>가 동일했으나,
        상태 업데이트로 인한 리렌더링 시{" "}
        <span className="font-bold text-blue-500">Test 2B</span>의 렌더링 속도가
        약 <span className="font-bold text-blue-500">9배</span> 더 빨랐습니다.
        이 테스트를 통해 React 프로젝트를 진행할 때 상태 변경 시{" "}
        <span className="font-bold text-blue-500">
          필요한 컴포넌트만 리렌더링
        </span>
        하도록 최적화하는 것이 얼마나 중요한지 깨달았습니다.
      </p>
      <p className="mb-4">
        React로 프로젝트를 진행하며 이런 극단적인 예시를 마주해본적은 없지만,{" "}
        <span className="font-bold text-blue-500">불필요한 리렌더링</span>을
        줄이고 필요한 컴포넌트만 리렌더링을 트리거하는 것이 성능 최적화에 매우
        중요하다는 점을 알게 되었습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">알게 된 점:</h2>
      <p>
        <span className="font-bold text-blue-500">Zustand</span>로 상태 관리를
        할 때, 상태 객체 전체를 구독하는 방식으로 사용했던 경험이 있었습니다.
        이번 테스트에서도 동일하게 구현했는데, 상태가 변경될 때마다{" "}
        <span className="font-bold text-blue-500">상태 객체의 참조가 변경</span>
        되면서 최상위 컴포넌트를 포함한 모든 하위 컴포넌트가{" "}
        <span className="font-bold text-blue-500">리렌더링</span>되었습니다.
        이후 상태 구독 방식을 개선하여, 필요한 상태만 선택적으로 구독하도록
        수정한 결과{" "}
        <span className="font-bold text-blue-500">불필요한 리렌더링</span>을
        방지할 수 있었습니다. 이를 통해{" "}
        <span className="font-bold text-blue-500">Zustand</span>로 상태 관리를
        최적화하려면{" "}
        <span className="font-bold text-blue-500">필요한 상태만 구독</span>해야
        한다는 점을 명확히 이해하게 되었습니다.
      </p>
    </>
  );
};

export default Test2Summation;
