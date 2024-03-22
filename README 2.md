# Firebase 연동

- FB 계정에 프로젝트 생성
- https://firebase.google.com/?hl=ko
- console 화면으로 이동
- 프로젝트 추가
  : health-center
  : GA 설정 하지 않는다.
- 완료 후 설정 확인하기
  : 프로젝트 개요 > 프로젝트 설정 > 웹 앱 선택 > 웹 앱에 Firebase 추가
  : '보건소 위치 서비스' > 앱 등록

## 1. Firebase 데이터베이스 사용 신청

: Firestore Database 항목 선택
: Cloud Firestore 서비스 신청
: asia-northeast3 (Seoul)
: 테스트 모드에서 시작
: 완료

## 2. Firebase Config 파일 만들기

- 설정 정보 확인하기
  : 프로젝트 개요 > 프로젝트 설정
  : SDK 설정 및 구성 정보 확인
- FB npm/yarn 설치
  : npm install firebase
  : yarn add firebase
  : package.json 확인

- 설정 정보 보관하기
  : .env 파일이 변경되면 다시 서버를 실행해야 적용이 됩니다.
  : .env 파일에서 보관

```txt
NEXT_PUBLIC_NCP_CLIENT_ID=
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
```

## 3. Firebase Config 코드 하기

- /src/fb 폴더 생성
- /src/fb/fbconfig.ts 파일생성
- FB 사이트에서 샘플 코드 복사

```ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};
// 초기화
const app = initializeApp(firebaseConfig);
// FB 데이터 베이스 사용을 위한 변수저장
const appFireStore = getFirestore(app);
// 외부에서 활용
export { app, appFireStore };
```

## 4. Firebase Hook 만들기

- 코드 재활용을 위해서 만듦

