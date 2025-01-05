// ul id = "task-list"에 할일이 추가됨
// button id = "add-button" 클릭시 스크립트창
// dom 요소 가져오기
const tasklist = document.querySelector("#task-list");
const addbutton = document.querySelector("#add-button");

//항목 추가 함수
function addItem() {
  const prompt = prompt("추가할 할일을 입력하세요:");
  // document.write(newItemtext);
  const newItemtext = prompt.value.trim(); //입력값 가져오기 
// newItemtext.value();

  // if (newItemtext === ""){
  //   alert("새로운 할일을 입력하세요!");
  //   return;
  // }
  
  //새로운 li요소 추가
  const li = document.createElement("li");
  li.innerHTML = `${newItemtext} <button class="delete">삭제</button>`;

  //리스트에 추가
  tasklist.appendChild(li);

  //입력 필드 초기화
  newItemtext.value = "";

  //새로 추가된 삭제 버튼에 이벤트 리스너 연결
  li.querySelector(".delete").addEventListener("click", deleteItem);
}

//항목 삭제하는 함수
function deleteItem(event){
  const listItem = event.target.parentElement; // 삭제 버튼의 부모요소인 li
  tasklist.removeChild(listItem); //ul의 자식 li 삭제
}

// 할일 추가 하고 확인 버튼 클릭시
// ul id = "task-list"에 추가
document.addEventListener("DOMContentLoaded", function(){

  addbutton.addEventListener("click", function(event){
    addItem();
  });
});

// botton id = "add-button" 할일 추가 버튼 클릭시
// 알림 창 띄우는 함수
// 텍스트 입력, 확인 , 취소 버튼 구현

// function newItemInput(){
//   const work = prompt("추가할 할일을 입력하세요:");
//   document.write(work);

// }
// addbutton.addEventListener("click", newItemInput);



// 취소 버튼 클릭시
// 추가 되지 않음

// ul id = "task-list"에 삭제 버튼 생성

// ul에 삭제버튼 클릭 시 "할일을 삭제하시겠습니다",
// 확인, 취소 버튼 생성

// 확인 버튼 클릭시 삭제

// 취소 버튼 클릭시 삭제되지 않음


// ul리스트에 체크박스 표시

// 체크 박스 체크시 색깔 적용


