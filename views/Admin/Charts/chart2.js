let ctx2 = document.getElementById("doughnut").getContext("2d");
let myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Semester", "Messs", "Fine or Due"],

    datasets: [
      {
        label: "Fees Type",
        data: [42000, 12340, 8000],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(41, 155, 99, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(41, 155, 99, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
