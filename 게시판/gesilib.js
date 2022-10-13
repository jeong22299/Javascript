// 게시판 테이블명 잠시 전역으로
var v_tblName = "gesiTB";

// 개발자는 귀차니즘에 반복될 거 같은 예감에 일을 시작합니다(일반화/추상화)
var request = {}; // name-space용 빈 객체
// 사용자요청(request)을 담은 객체
request.getParameter=function (p_name){ // name을 넘기면 value를 리턴해주는
    if(location.href.indexOf("?") == -1) return null; // ?를 못찾았다면 뒤의 코드 수행할 필요없음
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            return decodeURIComponent(nv[1]).replaceAll("+"," ");
        }
    }
    return null; // 못찾았다면 null, 꼭 null일 필요는 없음
}

// 같은 name으로 여러개 값이 여러개 넘어오는 것 처럼 할 함수
request.getParameterValues =function (p_name){ // name을 넘기면 value를 리턴해주는
    if(location.href.indexOf("?") == -1) return null; 
    var v_queryString = location.href.split("?")[1];
    var v_values = []; //값을 담을 배열
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
        v_values.push(decodeURIComponent(nv[1]).replaceAll("+"," "));
        }
    }
    if(!v_values.length) return null; // 배열의 length가 0이면
    return v_values; // 배열의 length가 0이 아니라면
}
/*
인코딩함수              디코딩함수
escape                  unescape            아주 옛날거
encodeURI               decodeURI           조금 옛날거
encodeURIComponent      decodeURIComponent  최근꺼
짝맞춰 사용하는 것이 중요 (일부 글자 인코딩이 서로 다름)
*/
// alert(getParameter("nm_title"));
// alert(getParameter("nm_writer"));
// alert(getParameter("nm_content")); //주소표시줄에 공백이 들어가면 안되므로 공백은 +로 출력됨
// alert(getParameterValues("nm_cat"));
// var v_queryString = location.href.split("?")[1]; // 주소표시줄에 있는 값을 읽어옴
// alert(v_queryString.split("&")[1].split("=")[1]); // 글쓴이 확인가능
