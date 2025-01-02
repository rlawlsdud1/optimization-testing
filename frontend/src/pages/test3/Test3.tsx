const Test3 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-2xl font-semibold mb-4">
        Lazy Loading을 통한 최적화:
      </h2>
      <p className="mb-4">
        Test2 컴포넌트는 무거운 연산으로 인해 초기 로드 시간이{" "}
        <span className="font-bold text-blue-500">3060ms</span>로
        측정되었습니다. 이는 사용자 경험에 부정적인 영향을 미칠 가능성이 높다고
        판단되었습니다. 하지만 Test2는 초기 화면에서 반드시 로드될 필요가
        없으므로, <span className="font-bold text-blue-500">Lazy Loading</span>
        을 적용하여 초기 번들 크기를 줄이는 방식을 도입했습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Suspense로 사용자 경험 개선:
      </h2>
      <p className="mb-4">
        Lazy Loading 도입 시, 데이터나 컴포넌트를 로드하는 동안 발생할 수 있는
        빈 화면 문제를 해결하기 위해{" "}
        <span className="font-bold text-blue-500">React Suspense</span>를
        사용했습니다. Suspense의{" "}
        <span className="font-bold text-blue-500">fallback</span> 속성을 통해
        로딩 중에 표시할 컴포넌트를 정의함으로써, 사용자에게 시각적 피드백을
        제공합니다. 이를 통해 로딩 중에도 자연스러운 사용자 경험을 유지할 수
        있었습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">측정 결과:</h2>
      <p className="mb-4">
        Lazy Loading 적용 후, 초기 화면 로드 시간이{" "}
        <span className="font-bold text-blue-500">1070ms</span>로 감소하며 약{" "}
        <span className="font-bold text-blue-500">3배</span>의 성능 개선을
        달성했습니다. 이로써 초기 번들 크기 최적화와 사용자 경험 향상이라는 두
        가지 목표를 동시에 만족시킬 수 있었습니다.
      </p>

      <h2 className="text-2xl font-semibold mb-4">요약:</h2>
      <p>
        Lazy Loading과 Suspense는 초기 로드 성능과 사용자 경험을 향상시키는 데
        효과적인 방법입니다. 특히 초기 화면에 불필요한 리소스를 제외함으로써
        로드 시간을 단축하고, 사용자가 로딩 과정을 인지할 수 있도록 하여 더 나은
        사용자 경험을 제공합니다.
      </p>
    </div>
  );
};

export default Test3;
