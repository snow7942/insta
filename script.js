/* 검색창 클릭 시 글자 삭제 */
var searchBar = document.querySelector("#search_bar");
searchBar.onclick = function() {
    this.value = "";
};

/* 하이라이트 슬라이더 제어 */
var highlightList = document.querySelector("#highlight_list");
var nextBtn = document.querySelector("#next_btn");
var prevBtn = document.querySelector("#prev_btn");

nextBtn.onclick = function() {
    highlightList.style.transform = "translateX(-25%)";
    nextBtn.style.display = "none";
    prevBtn.style.display = "flex";
};

prevBtn.onclick = function() {
    highlightList.style.transform = "translateX(0%)";
    prevBtn.style.display = "none";
    nextBtn.style.display = "flex";
};

/* 프로필 이미지 변경 */
var profilePic = document.querySelector("#profile_pic .circle_pic");
profilePic.onclick = function() {
    var url = prompt("이미지 url을 입력해 주세요!");
    if(url) this.setAttribute("src", url);
};

/* 아이디 변경 */
var configID = document.querySelector("#id i");
var idText = document.querySelector("#id span");
configID.onclick = function() {
    var newID = prompt("새로운 아이디를 입력하세요");
    if(newID) idText.textContent = newID;
};

/* 프로필 편집 토글 */
var profileEditButton = document.querySelector("#edit_button");
var userInfo = document.querySelector("#userInfo");
var summary = document.querySelector("#summary");
var profileDetail = document.querySelector("#profileDetail");
var changing = false;

profileEditButton.onclick = function(e) {
    if (changing) {
        // input 값을 텍스트로 전환
        var _userInfo = userInfo.querySelector("input").value;
        var _summary = summary.querySelector("input").value;
        var _profileDetail = profileDetail.querySelector("input").value;

        userInfo.innerHTML = _userInfo;
        summary.innerHTML = _summary;
        
        // 링크 처리
        if (_profileDetail.startsWith("http")) {
            profileDetail.innerHTML = "<a href='" + _profileDetail + "'>" + _profileDetail + "</a>";
        } else {
            profileDetail.innerHTML = _profileDetail;
        }

        e.target.textContent = "프로필 편집";
        changing = false;
    } else {
        // 텍스트를 input 창으로 전환
        var _userInfo = userInfo.textContent;
        var _summary = summary.textContent;
        var _profileDetail = profileDetail.textContent.trim();

        userInfo.innerHTML = "<input value='" + _userInfo + "' style='width:90%; font-size:14px;'>";
        summary.innerHTML = "<input value='" + _summary + "' style='width:90%; font-size:14px;'>";
        profileDetail.innerHTML = "<input value='" + _profileDetail + "' style='width:90%; font-size:14px;'>";
        
        e.target.textContent = "프로필 편집 완료";
        changing = true;
    }
};