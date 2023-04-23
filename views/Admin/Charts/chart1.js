let ctx = document.getElementById("lineChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings in ₹",
        data: [
          205067, 190011, 21006, 28009, 18002, 200000, 250000, 26006, 24502, 19504, 23004,
          290044,
        ],
        backgroundColor: ["rgba(85,85,85, 1)"],
        borderColor: "rgb(41, 155, 99)",

        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
