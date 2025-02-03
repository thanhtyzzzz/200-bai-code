function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);

    if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    const diff = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));

    const element = document.getElementById("daysUntilChristmas");
    element.innerText = `Today is ${today.toDateString().split(' ').slice(1, 3).join(' ')}\nOnly ${diff} days until Christmas`;
}

daysUntilChristmas();