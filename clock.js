setInterval(() => {
    date = new Date(); // js funtion for the date
    htime = date.getHours();// gettind the hours
    mtime = date.getMinutes();// getting the mins
    stime = date.getSeconds(); // getting seconds
    // formulas for roation of the hands
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    // 1000 makes it change every second
}, 1000);