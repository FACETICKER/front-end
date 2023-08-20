import {createSlice} from '@reduxjs/toolkit';

const Basic_questionSlice = createSlice({
    name:'basic_question',
    initialState: [' [첫사랑]이란 뭘까?', ' 내가 좋아하는 사람 vs 나를 좋아하는 사람', ' 넌 좋아하는 사람 생기면 먼저 고백하는 타입이야?', ' 너만의 플러팅 기술이 있다면?', ' 이상형을 소개해줘', ' 길에서 이상형을 만난다면?', ' 장거리 연애, 가능 vs 불가능 (*가능하다면 어디부터 어디까지 가능?)', ' 좋아하는 사람과, 전화 vs 문자', ' 좋아하는 사람이 너에게 관심이 없어 보이면 어떨 것 같아?', '연애 상대로, 연하 vs 동갑 vs 연상', '결혼 상대로, 연하 vs 동갑 vs 연상', '가장 오래 연애한 기간', '가장 짧게 연애한 기간', '이상형과의 첫 데이트 코스를 짠다면?', '이상형이 아닌 사람이 접근했을 때 너의 반응은?', '넌 상대를 볼 때 어떤 게 가장 중요해?', '애인의 남사친/여사친을 이해할 수 있니?', '‘환승연애’ 참가자로 출연 제의가 온다면?', '몇 살에 결혼하고 싶어?', '결혼하고 통장 관리는 누가 했으면 좋겠어?', '만약 이혼을 하게 된다면 뭐 때문일 것 같아?', '여행 중 절친한 친구와 싸우게 된 당신 어떤 상황인가?', '여행 중 애인과 싸우게 된 당신 어떤 상황인가?', '둘만 보기로 한 날, 친구가 굳이 너의 애인도 함께 보자고 한다면?', '둘만 보기로 한 날, 애인이 굳이 너의 친구도 함께 보자고 한다면?', '너 몇 시에 태어났어?', '취미가 뭐야?', '네 퍼스널 컬러는 뭐니?', '넌 물감이 된다면 무슨 색을 맡고 싶어? 그 이유도 말해줘', '스스로 생각하기에 네 성격은 어떤 것 같아?', '말버릇 있어?', '너랑 친해지려면 어떻게 하는 게 좋을까?', '남에게 들었을 때 기분이 좋아지는 말 있어?', '너의 정신연령은 몇 살인 것 같니?', '평생 한 순간에 멈춘다면?', '지금 이 순간 비는 소원이 무조건 이루어진다면?', '알라딘의 요술 램프를 줍게 된다면?', '가장 최근에 꾼 꿈이 뭐니?', '살면서 가장 무서웠던 꿈은?', '네가 직접 이야기를 구성할 수 있다면 꾸고 싶은 꿈은? ', '좋아하는 계절은?', '좋아하는 날씨는?', '최근 가장 기분 좋았던 일은?', '요즘 즐겨 듣는 곡은?', '좋아하는 노래 가사는?', '최근 인상 깊게 본 영화는?', '인생 드라마 딱 하나만 꼽자면?', '좋아하는 애니메이션은?', '여행을 가게 된다면?', '너만의 낭만은 뭐야?', '1년 전의 너에게 하고 싶은 말은?', '과거로 갈 수 있다면 간다vs안 간다 (단, 지금으로 돌아올 수 없음)', '미래로 갈 수 있다면 간다vs안 간다 (단, 건너간 시간은 경험할 수 없음)', '우리는 살아가는 걸까, 죽어가는 걸까?', '삶이란 뭘까?', '죽음이란 뭘까?', '네 인생의 첫 장면은 뭐야?', '인생의 마지막 장면은 어땠으면 좋겠어?', '몇 살까지 살고 싶어?', '사후세계가 있을까?'],
    reducers:{
        del:(state, action)=>{
            const elementToRemove = action.payload;
            return state.filter((item) => item !== elementToRemove);
        },
        add:(state, action)=>{
            state.push(action.payload);
        }  
    }
});
export default Basic_questionSlice;