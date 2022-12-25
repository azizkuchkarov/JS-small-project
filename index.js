let numberOfSeries;
function startApp() {
  numberOfSeries = +prompt("Nechta serial Kurdingiz", "");
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial Kurdingiz", "");
  }
}
startApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

function remembermySeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi kurgan serialingiz", ""),
      b = +prompt("Nechchi baxo berasiz", "");
    if (a != null && b != null && a != "" && b != "") {
      seriesDB.series[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
remembermySeries();

function seriesCount() {
  if (seriesDB.count < 5) {
    console.log("siz serial kam kuribsiz");
  } else if (seriesDB.count > 5 && seriesDB.count < 10) {
    console.log("siz urtacha serial kuribsiz");
  } else if (seriesDB.count > 10) {
    console.log("Normal serial kuribsiz");
  }
}
seriesCount();

function showDB() {
  if (seriesDB.private === false) {
    console.log(seriesDB);
  }
}
showDB();

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    const ask = prompt(`Yaxshi kurgan janringiz ${i + 1}`, "");
    seriesDB.genres[i] = ask;
  }
}
writeGenres();
