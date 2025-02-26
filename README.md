### 프로젝트
- asterapp.ai

---

### 요구 사항

- Node.js (최소 버전: 18.x)
- npm (최소 버전: 8.x)

### 설치 및 실행

#### 로컬 환경에서 실행

1. 저장소를 클론합니다:
    ```bash
    git clone https://github.com/a15t/asterapp.ai.git
    cd asterapp.ai.git
    ```

2. 필요한 패키지를 설치합니다:
    ```bash
    npm install
    ```

3. 개발 서버를 실행합니다:
    ```bash
    ## 환경별 .env 파일을 사용하여 실행 ##
   
    npm run dev         # .env.loc
    npm run start:dev   # .env.dev
    npm run start:prod  # .env.prod
    ```

4. 웹 브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하여 웹 페이지를 확인합니다.

### 빌드 & 배포

1. 프로젝트를 빌드합니다:
    ```bash
    ## 환경별 .env 파일을 사용하여 빌드 ##
   
    npm run build:dev   # .env.dev
    npm run build:prod  # .env.prod
    ```

2. 빌드 결과는 `/out` 디렉토리에 생성됩니다.

3. 빌드 결과를 S3에 업로드합니다:
   - AWS CLI를 사용하여 S3에 업로드할 수 있습니다:
       ```bash
       aws s3 sync ./out s3://your-s3-bucket-name
       ```
