
# BookFinder — 학습용 React + TypeScript + Vite 샘플

간단한 설명: 이 저장소는 Vite + React(TypeScript) 기반의 책 검색 UI 예제입니다. AI 보조로 생성된 코드 및 학습용 주석을 포함합니다.

## 빠른 시작

필수: Node.js(>=16)와 npm이 필요합니다.

설치 및 실행:

```bash
npm install
npm run dev    # 개발 서버 (http://localhost:5173)
npm run build  # 프로덕션 빌드
```

## 환경 변수

- 개발 중 카카오 책 검색 API를 사용하려면 프로젝트 루트에 `.env` 파일을 만들고 다음 값을 설정하세요:

```env
VITE_KAKAO_REST_API_KEY=여기에_키를_넣으세요
```

- `.env`는 기본적으로 `.gitignore`에 추가되어 있으므로 비밀 키가 커밋되지 않습니다. 팀과 공유할 때는 `env.example` 파일을 만들어 키 이름만 전달하세요.

## 주요 파일(빠른 링크)

- `src/components/BookFinder.tsx` — 전체 페이지 및 상태 관리
- `src/components/SearchArea.tsx` — 검색창, 리스트, 페이지네이션 조합
- `src/components/SearchBar.tsx` — 검색 입력 폼
- `src/components/BookList.tsx` — 검색 결과 리스트
- `src/components/BookDetail.tsx` — 선택한 책 상세
- `src/types/book.ts` — API 응답 타입 정의
- `src/data/mockResponse.ts` — 개발용 목업 데이터
- `src/hooks/useSearch.ts` — 검색 상태와 API 호출 로직
- `src/contexts/SearchContext.tsx` — 검색 상태를 하위 컴포넌트에 제공하는 Context

## 현재 프로젝트 구조

```text
BookFinder/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # 이미지 리소스
│   ├── components/           # 화면 컴포넌트
│   ├── contexts/             # Context API
│   ├── css/                  # 컴포넌트별 스타일
│   ├── data/                 # 목업 데이터
│   ├── hooks/                # Custom Hook
│   ├── types/                # 타입/인터페이스
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig*.json
└── README.md
```

## 핵심 개념 요약

- Props: 부모가 자식에게 전달하는 읽기 전용 입력(인터페이스로 타입 선언). 예: `BookListProps`.
- State: 컴포넌트 내부에서 변경 가능한 값. UI의 동적 상태를 표현.
- `useEffect`: 데이터 패칭, 타이머, 구독 같은 부수효과를 처리. 의존성 배열에 따라 실행 타이밍이 결정됩니다.
- 타입 모델링: `interface`로 API/컴포넌트 계약을 정의하면 자동완성, 리팩터링 안전성, 타입 검사 혜택을 얻습니다.

## Context API와 Custom Hooks

**Custom Hook (`useSearch`)**
- 위치: `src/hooks/useSearch.ts`
- 역할: 검색 상태(query, page, books, selectedBook 등) 및 API 호출 로직을 한곳에 모아 재사용 가능하게 합니다.
- 이점: 복잡한 상태와 부수효과를 컴포넌트에서 분리해 로직을 깔끔하게 유지할 수 있습니다.
- 예시:
  ```typescript
  const { query, page, books, selectedBook, setSelectedBook, handleSearch } = useSearch()
  ```

**Context API (`SearchContext`)**
- 위치: `src/contexts/SearchContext.tsx`
- 역할: `SearchProvider`로 감싸진 하위 컴포넌트들이 전역 검색 상태에 접근할 수 있습니다.
- 이점: 여러 단계의 컴포넌트를 거치지 않고 깊은 자식 컴포넌트에서 직접 상태를 사용할 수 있습니다(Prop Drilling 방지).
- 구조 개선 포인트: `SearchArea`는 더 이상 로컬 상태를 복사하지 않고 Context 값을 직접 사용합니다. 검색 상태의 단일 출처를 유지해 구조가 단순해졌습니다.
- 사용 방법:
  ```typescript
  const context = useSearchContext()  // SearchProvider 하위에서만 사용 가능
  ```

**프로젝트 구조**
```
BookFinder (SearchProvider 감싸기)
├── SearchArea (useSearchContext 사용)
│   ├── SearchBar (props로 받음)
│   ├── BookList (props로 받음)
│   └── Pagination (props로 받음)
└── BookDetail (useSearchContext 사용)
```

이렇게 하면 `BookFinder`, `SearchArea`, `BookDetail`이 모두 같은 검색 상태에 접근하면서도 props를 체인처럼 전달할 필요가 없습니다.

**언제 Context를 쓸까?**
- 많은 컴포넌트에서 공유해야 하는 전역 상태(테마, 인증, 언어 설정, 검색 상태 등)
- Prop Drilling이 복잡해질 때
- 자주 바뀌는 상태가 아닐 때(Context는 값이 바뀔 때마다 리렌더링을 유발)

## 데이터 흐름 및 개발 전략

- 검색어, 현재 페이지, 검색 결과, 선택된 책 상태는 `src/hooks/useSearch.ts`에서 관리되고, `src/contexts/SearchContext.tsx`를 통해 하위 컴포넌트에 전달됩니다.
- API 키가 없을 때는 `src/data/mockResponse.ts`의 목업을 사용하도록 분기되어 있어 로컬에서 바로 동작을 확인할 수 있습니다.
