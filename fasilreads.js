// Fungsi untuk menghitung dan memperbarui countdown
function updateCountdown(endDate, elementId) {
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const countdownElement = document.getElementById(elementId);
    if (countdownElement) {
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "Countdown Selesai";
      }
    }
  }, 1000);
}

// Tanggal akhir untuk masing-masing countdown
const endDate1 = new Date("2025-01-01").getTime();
const endDate2 = new Date("2025-02-01").getTime();
const endDate3 = new Date("2025-03-01").getTime();
const endDate4 = new Date("2025-04-01").getTime();

// Memperbarui countdown untuk masing-masing tanggal akhir
updateCountdown(endDate1, "countdown1");
updateCountdown(endDate2, "countdown2");
updateCountdown(endDate3, "countdown3");
updateCountdown(endDate4, "countdown4");
