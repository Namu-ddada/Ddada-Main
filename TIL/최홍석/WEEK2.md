## 2024-09-02 ~ 2024-09-06

## 한 일

### 기획

- [x] 아이디어 기획 회의
- [x] User Flow 작성

### 프로젝트 개발

- [x] 배드민턴 점수판 기능 구현

## 학습 내용

- 클래스 인스턴스
  - 배드민턴 점수판을 구현하기 위해서는 배드민턴 게임을 구현했어야 함. 따라서 게임을 구현하기 위해 class를 만들고 new로 인스턴스를 불러와 사용하는 방식을 학습함
- React Context API
- Figma 디자인 상 배드민턴 경기 현황이 여러 컴포넌트에 뿌려줘야 함. 이에 따라 props로 넘겨줄 경우 Prop drilling으로 인해 데이터가 변경될 경우 수정에 큰 공수가 들어갈 수 있음. zustand로 전역 스토어에 관리하기에는 인스턴스를 다시 zustand에 저장해야 하는 불편함이 존재(localstroage <->zustand <-> 컴포넌트). 따라서 Provider를 정의 후 useContext()훅으로 간편히 값에 접근할 수 있는 Context API를 도입할 수 있도록 학습 진행

## WEEK3 예정 진행 사항

- [ ] Figma 디자인 기반 manager 페이지 제작
- [ ] 배드민턴 경기 데이터 수집
