function getID(id) {
    return document.getElementById(id);
}

function kiemTraKyTu(input, spanId, message, min, max) {
    if (input.length >= min && input.length <= max) {
        // Hop le
        getID(spanId).style.display = "none";
        getID(spanId).innerHTML = "";
        return true;
    }
    //K hop le
    getID(spanId).style.display = "block";
    getID(spanId).innerHTML = message;
    return false;
}

function kiemTraRong(input, spanId, message) {
    if (input === "") {
        getID(spanId).style.display = "block";
        getID(spanId).innerHTML = message;
        return false;
    }
    getID(spanId).style.display = "none";
    getID(spanId).innerHTML = "";
    return true;
};
getID("btnSinhNam").addEventListener("click", function() {
    var namSinh = getID("inputNamSinh").value
    kiemTraRong(namSinh, "ketQuaNamSinh", "Không được rỗng");
    kiemTraKyTu(namSinh, "ketQuaNamSinh", "Không được rỗng và đúng 4 số", 1, 2);
    var soCan = parseInt(namSinh[3]);

    var soChi = parseInt(namSinh[2] + soCan) % 12;

    var chi = "";
    var can = "";
    switch (soCan) {
        case 0:
            chi = "Canh";
            break;
        case 1:
            chi = "Tân";

            break;
        case 2:
            chi = "Nhâm";

            break;
        case 3:
            chi = "Quý";

            break;
        case 4:
            chi = "Giáp";

            break;
        case 5:
            chi = "Ất";

            break;
        case 6:
            chi = "Bính";

            break;
        case 7:
            chi = "Đinh";

            break;
        case 8:
            chi = "Mậu";

            break;
        case 9:
            chi = "Kỷ";

            break;

        default:
            break;
    }
    switch (soChi) {
        case 0:
            can = "Tý";
            document.getElementById("hinhAnh").src = "./img/ty.jpg";
            getID("loiGiai").innerHTML = "Trong số 12 con giáp, chuột được chọn và con vật tiên phong, dẫn đầu, bởi vậy những người thuộc tuổi này thường có tài năng lãnh đạo, quản lí rất tốt. Hơn nữa, những người tuổi Tý còn được mọi người ngưỡng mộ bởi sự thông minh, sáng tạo, nhanh nhẹn tháo vát của mình.";


            break;
        case 1:
            can = "Sửu";
            document.getElementById("hinhAnh").src = "./img/suu.jpg";
            getID("loiGiai").innerHTML = "Trong cuộc đua của 12 con giáp, trâu là con vật đạt vị trí số hai, đại diện cho sức mạnh về cả thể chất lẫn tinh thần. Bởi vậy những người tuổi Sửu đa số sống tự lập, trưởng thành sớm, có tính cách mạnh mẽ và kiên định. Người tuổi này có nhiều ước mơ, hoài bão, ý chí lớn, không ngại khó khăn, nguy hiểm. ";


            break;
        case 2:
            can = "Dần";
            document.getElementById("hinhAnh").src = "./img/dan.jpg";
            getID("loiGiai").innerHTML = "Tuổi Dần đại diện cho những người quyền lực, mạnh mẽ, năng động trong cuộc sống. Họ thích những công việc mạo hiểm, đem đến vinh quanh, thành công rực rỡ cho mình. Người tuổi này có tài lãnh đạo, luôn nhiệt tình giúp đỡ những người xung quanh và ra sức bảo vệ gia đình của mình.  ";

            break;
        case 3:
            can = "Mão";
            document.getElementById("hinhAnh").src = "./img/mao.jpg";
            getID("loiGiai").innerHTML = " Tuổi Mão đại diện cho những con người thông minh, mưu trí, nhanh nhẹn và có con mắt tinh tế, nhìn xa trông rộng. Người tuổi này rất tốt bụng, nhiệt tình và luôn sẵn sàng giúp đỡ những người gặp khó khăn. Họ có khả năng thích nghi với hoàn cảnh, chịu đựng những áp lực của công việc, cuộc sống. ";
            break;
        case 4:


            can = "Thìn";
            document.getElementById("hinhAnh").src = "./img/thin.jpg";

            getID("loiGiai").innerHTML = " Trong 12 con giáp, Rồng là con vật đại diện cho sức mạnh phi thường, thiêng liêng, được mọi người tôn kính. Những người tuổi Rồng vì thế mà thông minh sắc sảo, luôn đạt được nhiều thành công trong cuộc sống, có uy quyền, địa vị";
            break;
        case 5:

            can = "Tỵ";
            document.getElementById("hinhAnh").src = "./img/ty-1.jpg";

            getID("loiGiai").innerHTML = " Tuổi Tỵ là những người khôn ngoan, khéo léo và mạo hiểm. Họ giàu tình cảm, có đời sống nội tâm khá phong phú, lãng mạn và luôn khiến người khác bị thu hút bởi vẻ đẹp, sự uyển chuyển của mình. ";
            break;

            break;
        case 6:

            can = "Ngọ";
            document.getElementById("hinhAnh").src = "./img/ngon.jpg";
            getID("loiGiai").innerHTML = " Ngựa là con vật yêu thích cuộc sống tự do, hoang dã để được hòa mình vào thiên nhiên. Những người tuổi Ngọ vì thế mà rất năng động, nhiệt tình, thích những nơi đông người và đam mê khám phá những điều mới mẻ trong cuộc sống. ";
            break;

            break;
        case 7:


            can = "Mùi";
            document.getElementById("hinhAnh").src = "./img/mui.jpg";
            getID("loiGiai").innerHTML = "Tuổi Mùi đại diện cho những người sống giàu tình cảm, nhân hậu, tốt bụng, luôn sẵn sàng giúp đỡ mọi người xung quanh. Đặc biệt, người tuổi này thông minh sắc sảo, tài trí hơn người, có con mắt nhìn xa trông rộng và khả năng phân tích nhạy bén. năng động, nhiệt tình, thích những nơi đông người và đam mê khám phá những điều mới mẻ trong cuộc sống. ";
            break;
        case 8:
            can = "Thân";



            document.getElementById("hinhAnh").src = "./img/than.jpg";
            getID("loiGiai").innerHTML = " Có thể nói rằng, Khỉ là con vật thông minh, khôn khéo nhất trong 12 con giáp. Bởi vậy mà những người tuổi Thân không những tài giỏi, thông minh, nhanh nhẹn mà còn giàu lòng vị tha, luôn sẵn sàng giúp đỡ những người gặp khó khăn.";


            break;
        case 9:
            can = "Dậu";
            document.getElementById("hinhAnh").src = "./img/dau.jpg";
            document.getElementById("hinhAnh").src = "./img/than.jpg";
            getID("loiGiai").innerHTML = "Trong số 12 con giáp, gà là con vật đại diện cho sự năng động, nhiệt tình và kiêu hãnh. Vì thế mà những người tuổi Dậu luôn luôn sôi nổi, yêu đời, tràn đầy năng lượng sống. Họ được mọi người yêu quý bởi lòng tốt bụng, tinh thần trách nhiệm và tính tình ngay thẳng..";

            break;
        case 10:
            can = "Tuất";


            document.getElementById("hinhAnh").src = "./img/tuat.jpg";
            getID("loiGiai").innerHTML = "Tuổi Tuất là những người nhân hậu, tốt bụng, sẵn sàng giúp đỡ mọi người xung quanh. Họ có thể vì người khác mà quên đi lợi ích của bản thân mình. Những người này coi trọng danh dự và chữ tín, một khi đã hứa, tuổi Tuất nhất định sẽ thực hiện.";


            break;
        case 10:

            can = "Hợi";
            document.getElementById("hinhAnh").src = "./img/hoi.jpg";
            getID("loiGiai").innerHTML = "Tuổi Hợi là những người giàu lòng trắc ẩn, nhân ái và yêu thương mọi người. Họ sống tự do, thoải mái và phóng khoáng, bởi vậy tuổi Hợi được mọi người xung quanh quý mến, tôn trọng. Nhờ vào tài năng và sự chăm chỉ của mình, những người này sớm xây dựng được một sự nghiệp vững chắc, ổn định. ";

            break;

        default:
            break;
    }
    getID("ketQuaNamSinh").style.display = "block";
    getID("ketQuaNamSinh").innerHTML = "Bạn sinh năm âm lịch " + chi + " " + can;



});