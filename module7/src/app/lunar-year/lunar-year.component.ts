import { Component } from '@angular/core';

@Component({
  selector: 'app-lunar-year',
  templateUrl: './lunar-year.component.html',
  styleUrls: ['./lunar-year.component.css']
})
export class LunarYearComponent {
  public PI = Math.PI;
  public dd = 15;
  public mm= 5;
  public yy= 1986;
  public date="";
  public year="";
  public month="";
  public day="";
  public weekday="";

INT(d: number) {
    return Math.floor(d);
}

 jdFromDate(dd: number, mm: number, yy: number) {
    var a, y, m, jd;
    a = this.INT((14 - mm) / 12);
    y = yy+4800-a;
    m = mm+12*a-3;
    jd = dd + this.INT((153*m+2)/5) + 365*y + this.INT(y/4) - this.INT(y/100) + this.INT(y/400) - 32045;
    if (jd < 2299161) {
        jd = dd + this.INT((153*m+2)/5) + 365*y + this.INT(y/4) - 32083;
    }
    return jd;
}

/* Convert a Julian day number to day/month/year. Parameter jd is an integer */
 jdToDate(jd: number) {
    var a, b, c, d, e, m, day, month, year;
    if (jd > 2299160) { // After 5/10/1582, Gregorian calendar
        a = jd + 32044;
        b = this.INT((4*a+3)/146097);
        c = a - this.INT((b*146097)/4);
    } else {
        b = 0;
        c = jd + 32082;
    }
    d = this.INT((4*c+3)/1461);
    e = c - this.INT((1461*d)/4);
    m = this.INT((5*e+2)/153);
    day = e - this.INT((153*m+2)/5) + 1;
    month = m + 3 - 12*this.INT(m/10);
    year = b*100 + d - 4800 + this.INT(m/10);
    return new Array(day, month, year);
}

 NewMoon(k: number) {
    var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
    T = k/1236.85; // Time in Julian centuries from 1900 January 0.5
    T2 = T * T;
    T3 = T2 * T;
    dr = this.PI/180;
    Jd1 = 2415020.75933 + 29.53058868*k + 0.0001178*T2 - 0.000000155*T3;
    Jd1 = Jd1 + 0.00033*Math.sin((166.56 + 132.87*T - 0.009173*T2)*dr); // Mean new moon
    M = 359.2242 + 29.10535608*k - 0.0000333*T2 - 0.00000347*T3; // Sun's mean anomaly
    Mpr = 306.0253 + 385.81691806*k + 0.0107306*T2 + 0.00001236*T3; // Moon's mean anomaly
    F = 21.2964 + 390.67050646*k - 0.0016528*T2 - 0.00000239*T3; // Moon's argument of latitude
    C1=(0.1734 - 0.000393*T)*Math.sin(M*dr) + 0.0021*Math.sin(2*dr*M);
    C1 = C1 - 0.4068*Math.sin(Mpr*dr) + 0.0161*Math.sin(dr*2*Mpr);
    C1 = C1 - 0.0004*Math.sin(dr*3*Mpr);
    C1 = C1 + 0.0104*Math.sin(dr*2*F) - 0.0051*Math.sin(dr*(M+Mpr));
    C1 = C1 - 0.0074*Math.sin(dr*(M-Mpr)) + 0.0004*Math.sin(dr*(2*F+M));
    C1 = C1 - 0.0004*Math.sin(dr*(2*F-M)) - 0.0006*Math.sin(dr*(2*F+Mpr));
    C1 = C1 + 0.0010*Math.sin(dr*(2*F-Mpr)) + 0.0005*Math.sin(dr*(2*Mpr+M));
    if (T < -11) {
        deltat= 0.001 + 0.000839*T + 0.0002261*T2 - 0.00000845*T3 - 0.000000081*T*T3;
    } else {
        deltat= -0.000278 + 0.000265*T + 0.000262*T2;
    };
    JdNew = Jd1 + C1 - deltat;
    return JdNew;
}

 SunLongitude(jdn: number) {
    var T, T2, dr, M, L0, DL, L;
    T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T*T;
    dr = this.PI/180; // degree to radian
    M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
    DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
    DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
    L = L0 + DL; // true longitude, degree
    L = L*dr;
    L = L - this.PI*2*(this.INT(L/(this.PI*2))); // Normalize to (0, 2*PI)
    return L;
}

 getSunLongitude(dayNumber: number, timeZone: number) {
    return this.INT(this.SunLongitude(dayNumber - 0.5 - timeZone/24)/this.PI*6);
}

 getNewMoonDay(k: number, timeZone: number) {
    return this.INT(this.NewMoon(k) + 0.5 + timeZone/24);
}

 getLunarMonth11(yy: number, timeZone: any) {
    var k, off, nm, sunLong;
    //off = jdFromDate(31, 12, yy) - 2415021.076998695;
    off = this.jdFromDate(31, 12, yy) - 2415021;
    k = this.INT(off / 29.530588853);
    nm = this.getNewMoonDay(k, timeZone);
    sunLong = this.getSunLongitude(nm, timeZone); // sun longitude at local midnight
    if (sunLong >= 9) {
        nm = this.getNewMoonDay(k-1, timeZone);
    }
    return nm;
}

 getLeapMonthOffset(a11: number, timeZone: any) {
    var k, last, arc, i;
    k = this.INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    last = 0;
    i = 1; // We start with the month following lunar month 11
    arc = this.getSunLongitude(this.getNewMoonDay(k+i, timeZone), timeZone);
    do {
        last = arc;
        i++;
        arc = this.getSunLongitude(this.getNewMoonDay(k+i, timeZone), timeZone);
    } while (arc != last && i < 14);
    return i-1;
}

 convertSolar2Lunar(dd: number, mm: number, yy: number, timeZone: number) {
    var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
    dayNumber = this.jdFromDate(dd, mm, yy);
    k = this.INT((dayNumber - 2415021.076998695) / 29.530588853);
    monthStart = this.getNewMoonDay(k+1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = this.getNewMoonDay(k, timeZone);
    }
    //alert(dayNumber+" -> "+monthStart);
    a11 = this.getLunarMonth11(yy, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = this.getLunarMonth11(yy-1, timeZone);
    } else {
        lunarYear = yy+1;
        b11 = this.getLunarMonth11(yy+1, timeZone);
    }
    lunarDay = dayNumber-monthStart+1;
    const diff = this.INT((monthStart - a11)/29);
    lunarLeap = 0;
    lunarMonth = diff+11;
    if (b11 - a11 > 365) {
        const leapMonthDiff = this.getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }
    return new Array(lunarDay, lunarMonth, lunarYear, lunarLeap);
}
Run(dd: number, mm: number, yy: number, timeZone: number){
  let temp=this.convertSolar2Lunar(dd,mm,yy,7);
  this.date=temp[0]+"/"+temp[1]+"/"+temp[2];
  this.year=this.Year2CanChi(dd,mm,yy);
  this.month= this.Month2CanChi(dd,mm,yy);
  this.day= this.Day2CanChi(dd,mm,yy);
  this.weekday = this.Date2WeekDay(dd,mm,yy);
}

Year2CanChi(dd: number, mm: number, yy: number){
  let lunar=this.convertSolar2Lunar(dd,mm,yy,7);
  let canTemp= lunar[2]%10; let chiTemp=(lunar[2]+8)%12;
  let can=""; let chi="";
  switch (canTemp) {
    case 0:
        can="Canh";
        break;
    case 1:
      can="Tân";
        break;
    case 2:
      can="Nhâm";
        break;
    case 3:
      can="Quý";
        break;
    case 4:
      can="Giáp";
        break;
    case 5:
      can="Ất";
        break;
    case 6:
      can="Bính";
        break;
    case 7:
      can="Đinh";
        break;
    case 8:
      can="Mậu";
        break;
    case 9:
      can="Kỷ";
        break;
}
switch (chiTemp) {
  case 0:
      chi="Tý";
      break;
  case 1:
    chi="Sửu";
      break;
  case 2:
    chi="Dần";
      break;
  case 3:
    chi="Mão";
      break;
  case 4:
    chi="Thìn";
      break;
  case 5:
    chi="Tỵ";
      break;
  case 6:
    chi="Ngọ";
      break;
  case 7:
    chi="Mùi";
      break;
  case 8:
    chi="Thân";
      break;
  case 9:
    chi="Dậu";
      break;
  case 10:
    chi="Tuất";
      break;
  case 11:
    chi="Hợi";
      break;
}
  return can+" "+chi;
}
Month2CanChi(dd: number, mm: number, yy: number){
  let lunar=this.convertSolar2Lunar(dd,mm,yy,7);
  let canTemp= (((lunar[2]%5)+4)*12+lunar[1])%10;
  let can=""; let chi="";
  switch (canTemp) {
    case 1:
        can="Canh";
        break;
    case 2:
      can="Tân";
        break;
    case 3:
      can="Nhâm";
        break;
    case 4:
      can="Quý";
        break;
    case 5:
      can="Giáp";
        break;
    case 6:
      can="Ất";
        break;
    case 7:
      can="Bính";
        break;
    case 8:
      can="Đinh";
        break;
    case 9:
      can="Mậu";
        break;
    case 0:
      can="Kỷ";
        break;
}
switch (lunar[1]) {
  case 11:
      chi="Tý";
      break;
  case 12:
    chi="Sửu";
      break;
  case 1:
    chi="Dần";
      break;
  case 2:
    chi="Mão";
      break;
  case 3:
    chi="Thìn";
      break;
  case 4:
    chi="Tỵ";
      break;
  case 5:
    chi="Ngọ";
      break;
  case 6:
    chi="Mùi";
      break;
  case 7:
    chi="Thân";
      break;
  case 8:
    chi="Dậu";
      break;
  case 9:
    chi="Tuất";
      break;
  case 10:
    chi="Hợi";
      break;
}
 return can+" "+chi;
}

Day2CanChi(dd: number, mm: number, yy: number){
  let cumDay = 0;
  if( yy%400==0 || yy%4==0 && yy%100!=0 ){
    switch(mm){
      case 1:
        cumDay=dd;
        break;
      case 2:
        cumDay=31+dd;
        break;
      case 3:
        cumDay=31+29+dd;
        break;
      case 4:
        cumDay=31+29+31+dd;
        break;
      case 5:
        cumDay=31+29+31+30+dd;
        break;
      case 6:
        cumDay=31+29+31+30+31+dd;
        break;
      case 7:
        cumDay=31+29+31+30+31+30+dd;
        break;
      case 8:
        cumDay=31+29+31+30+31+30+31+dd;
        break;
      case 9:
        cumDay=31+29+31+30+31+30+31+31+dd;
        break;
      case 10:
        cumDay=31+29+31+30+31+30+31+31+30+dd;
        break;
      case 11:
        cumDay=31+29+31+30+31+30+31+31+30+31+dd;
        break;
      case 12:
        cumDay=31+29+31+30+31+30+31+31+30+31+30+dd;
        break;
    }
  } else{
    switch(mm){
      case 1:
        cumDay=dd;
        break;
      case 2:
        cumDay=31+dd;
        break;
      case 3:
        cumDay=31+28+dd;
        break;
      case 4:
        cumDay=31+28+31+dd;
        break;
      case 5:
        cumDay=31+28+31+30+dd;
        break;
      case 6:
        cumDay=31+28+31+30+31+dd;
        break;
      case 7:
        cumDay=31+28+31+30+31+30+dd;
        break;
      case 8:
        cumDay=31+28+31+30+31+30+31+dd;
        break;
      case 9:
        cumDay=31+28+31+30+31+30+31+31+dd;
        break;
      case 10:
        cumDay=31+28+31+30+31+30+31+31+30+dd;
        break;
      case 11:
        cumDay=31+28+31+30+31+30+31+31+30+31+dd;
        break;
      case 12:
        cumDay=31+28+31+30+31+30+31+31+30+31+30+dd;
        break;
    }
  }

  let dayFromOrigin = (yy-1)*365 + (Math.floor((yy-1)/4)-Math.floor((yy-1)/100)+Math.floor((yy-1)/400)) +cumDay ;
  let canTemp = dayFromOrigin%10;
  let chiTemp=dayFromOrigin%12;
  let can=""; let chi="";
  switch (canTemp) {
    case 2:
        can="Canh";
        break;
    case 3:
      can="Tân";
        break;
    case 4:
      can="Nhâm";
        break;
    case 5:
      can="Quý";
        break;
    case 6:
      can="Giáp";
        break;
    case 7:
      can="Ất";
        break;
    case 8:
      can="Bính";
        break;
    case 9:
      can="Đinh";
        break;
    case 0:
      can="Mậu";
        break;
    case 1:
      can="Kỷ";
        break;
}
switch (chiTemp) {
  case 10:
      chi="Tý";
      break;
  case 11:
    chi="Sửu";
      break;
  case 12:
    chi="Dần";
      break;
  case 1:
    chi="Mão";
      break;
  case 2:
    chi="Thìn";
      break;
  case 3:
    chi="Tỵ";
      break;
  case 4:
    chi="Ngọ";
      break;
  case 5:
    chi="Mùi";
      break;
  case 6:
    chi="Thân";
      break;
  case 7:
    chi="Dậu";
      break;
  case 8:
    chi="Tuất";
      break;
  case 9:
    chi="Hợi";
      break;
}
  return can+" "+chi;

}

Date2WeekDay(dd: number, mm: number, yy: number){
  let date = new Date(yy,mm-1,dd);
  let weekdate= date.getDay();
  let tempWeekday="";
  switch(weekdate){
    case 0:
      tempWeekday="Chủ nhật";
      break;
    case 1:
      tempWeekday="Thứ Hai";
      break;
    case 2:
      tempWeekday="Thứ Ba";
      break;
    case 3:
      tempWeekday="Thứ Tư";
      break;
    case 4:
      tempWeekday="Thứ Năm";
      break;
    case 5:
      tempWeekday="Thứ Sáu";
      break;
    case 6:
      tempWeekday="Thứ Bảy";
      break;
  }
  return tempWeekday;
  }


}