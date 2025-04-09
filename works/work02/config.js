// works/new_work/config.js

// --- 1. 작품 정보 수정 ---
const workTitle = "토라도라! 야한책";
const workAuthor = "wagashi";
const imageCount = 26; // <<<--- 이미지 총 개수 (1부터 26까지면 26)
const imageExtension = 'png'; // <<<--- 이미지 확장자 (모두 png면 'png')

// --- 2. 이미지 배열 자동 생성 (수정 불필요) ---
const imageList = [];
for (let i = 1; i <= imageCount; i++) {
  imageList.push(`${i}.${imageExtension}`);
}

// --- 3. 최종 설정 객체 생성 (수정 불필요) ---
const workConfig = {
  title: workTitle,
  author: workAuthor,
  images: imageList
};

// (선택사항) 콘솔에서 생성된 목록 확인
// console.log(workConfig.images);
