var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket; 
var ws = null;

var cards = {
    c1:"cardClubsA.png",
    c2:"cardClubsJ.png",
    c3:"cardClubsK.png",
    c4:"cardClubsQ.png",
    c5:"cardDiamonds10.png",
    c6:"cardDiamonds2.png",
    c7:"cardDiamonds3.png",
    c8:"cardDiamonds4.png",
    c9:"cardDiamonds5.png",
    c10:"cardDiamonds6.png",
    c11:"cardDiamonds7.png",
    c12:"cardDiamonds8.png",
    c13:"cardDiamonds9.png",
    c14:"cardDiamondsA.png",
    c15:"cardDiamondsJ.png",
    c16:"cardDiamondsK.png",
    c17:"cardDiamondsQ.png",
    c18:"cardHearts10.png",
    c19:"cardHearts2.png",
    c20:"cardHearts3.png",
    c21:"cardHearts4.png",
    c22:"cardHearts5.png",
    c23:"cardHearts6.png",
    c24:"cardHearts7.png",
    c25:"cardHearts8.png",
    c26:"cardHearts9.png",
    c27:"cardHeartsA.png",
    c28:"cardHeartsJ.png",
    c29:"cardHeartsK.png",
    c30:"cardHeartsQ.png",
    c31:"cardJoker.png",
    c32:"cardSpades10.png",
    c33:"cardSpades2.png",
    c34:"cardSpades3.png",
    c35:"cardSpades4.png",
    c36:"cardSpades5.png",
    c37:"cardSpades6.png",
    c38:"cardSpades7.png",
    c39:"cardSpades8.png",
    c40:"cardSpades9.png",
    c41:"cardSpadesA.png",
    c42:"cardSpadesJ.png",
    c43:"cardSpadesK.png",
    c44:"cardSpadesQ.png",
    c45:"cardClubs10.png",
    c46:"cardClubs2.png",
    c47:"cardClubs3.png",
    c48:"cardClubs4.png",
    c49:"cardClubs5.png",
    c50:"cardClubs6.png",
    c51:"cardClubs7.png",
    c52:"cardClubs8.png",
    c53:"cardClubs9.png",
};

Events  = {
    HANDSHAKE_COMPLETE_SUCCESS:1,
    LOGIN:2,
    LOGIN_DONE:3,
    NEW_USER_LOGIN_DONE:4,
    PLAY:5,
    PLAY_DONE:6,
};


var Encode = function(obj) {
       return JSON.stringify(obj);
   };
var Decode = function(obj) {
    return JSON.parse(obj);
};