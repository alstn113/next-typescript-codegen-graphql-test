\*nextjs-typescript-nextWithApollo-codegen
https://youtu.be/4yDrtFUbUzo

npx create-next-app 이름
npm i next-with-apollo graphql @apollo/client lodash
npm i -D @types/lodash

lib -> withApollo.tsx 만들고 ssr페이지에 사용함

codegen 사용법

npm i -D @graphql-codegen/add @graphql-codegen/cli @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo

codegen.yml 파일 만들기
package.json에 "codegen" : "graphql-codegen --config codegen.yml" 스크립트 추가하기
npm run codegen하면 graphql/queries에 만든 것들에 대한 tpye들이 generated파일에 생김

next에서 image를 사용할려면 next.config.js에 경로 지정해줘야함
images: {
domains: ["rickandmortyapi.com"],
},

typescript 빨간 불 들어와서 짜증나네
codegen 버전 업데이트되면서 예제랑 너무 다른듯
