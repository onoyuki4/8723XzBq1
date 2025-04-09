// works/new_work/config.js

// --- 1. 작품 정보 수정 ---
const workTitle = "토라도라!의 에로책 2";
const workAuthor = "wagashi";
const imageCount = 25; // <<<--- 이미지 총 개수 (1부터 26까지면 26)
const imageExtension = 'png'; // <<<--- 이미지 확장자 (모두 png면 'png')

// --- 2. 이미지 배열 자동 생성 (수정됨) ---
const imageList = [];
for (let i = 1; i <= imageCount; i++) {
  // 숫자를 문자열로 변환 후, 길이가 2가 되도록 앞에 '0'을 붙임
  const paddedIndex = i.toString().padStart(2, '0'); // <<<--- 수정된 부분
  imageList.push(`${paddedIndex}.${imageExtension}`);
}
// --- 3. 최종 설정 객체 생성 (수정 불필요) ---
const workConfig = {
  title: workTitle,
  author: workAuthor,
  images: imageList
};

// (선택사항) 콘솔에서 생성된 목록 확인
// console.log(workConfig.images);
