// BEGIN 
//     INPUT C 
//     F = (9*C)/5 +32
//     DISPLAY F
// END
// BEGIN 
//     Y là số của máy random 
//     X là số người dùng nhập

//     INPUT X 
//     IF X = Y THEN
//         DISPLAY YES 
//     ELSE 
//         DISPLAY NO 
//     END IF
// END

// tính điểm trung bình
// BEGIN 
//     X là điểm toán
//     Y là điểm lý
//     Z là điểm hóa
//     R là kết quả 
    
//     INPUT X,Y,Z 
//     R = (X+Y+Z) / 3 
//     DISPLAY R
// END


// 
// tim so lon nhat trong 3 so

BEGIN
    X Y Z lần lượt là 3 số cần nhập.
    MAX là biến lưu giá trị Max cần tìm

    INPUT X Y Z
    MAX = X

    IF (Y>MAX) 
        MAX = Y
    END IF

    IF (Z>MAX)
        MAX = Z
    END IF

    DISPLAY MAX
END
