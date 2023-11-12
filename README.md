# NestJS 연습

## Description

간단한 예제로 해보기

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 느낀점

1. 돌아가게는 코드를 구성해봤는데 아직 잘 모르겠음.
   - Apollo Server를 GraphQL 서버로 사용했는데, 다른 것(yoga?, ...)에 비해 뭐가 좋은진 모르겠음
   - GraphQL 스키마 정의하고, HTTP 서버 기능 제공하고, GraphQL 요청 받아서 해석하고, 처리하는듯
2. 포스트맨과의 사용성이 매우 .. 좋다
   - REST API가 아니니 Swagger를 사용하지 않을 것 같은데(확신 x), `http://localhost:3001/graphql`로 바로 playground에서 테스트 가능(<- 이것도 [apollo server](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/)가 제공하는 것 같기도?)
   - 포스트맨은 바로 주소만 요청하면 해당 Schema를 다 불러옴, 너무 편한듯
3. endpoint에 대한 고민을 하는 대신 함수명에 대한 고민을 하면 될 듯
4. 근데... 이렇게 되면 사실상 엔드포인트는 하나에 클라이언트는 필요한 데이터를 하나의 요청으로 가져온다 ... 뭐 이런 개념이긴 한데. 그럼 나는 이거 데이터 별로 다 만들어야 하는 건가?
5. [GraphQL Code Generator](https://the-guild.dev/)로 이 사이트를 방금 추천 받음
  - 아무래도 스키마 기반으로 타입 정의 등을 자동 생성하는 듯
  - 근데 뭐에 편한지 잘 모르겠다. 아직 사이트를 제대로 읽어보진 못함
