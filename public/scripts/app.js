class App {
  constructor() {
    this.formCari = document.getElementById("form-cari");
    this.divFilteredCar = document.getElementById("filtered-car");
    this.btnSubmit = document.getElementById("btn-cari");
    this.driver = document.getElementById("driver");
    this.tanggal = document.getElementById("tanggal");
    this.waktu = document.getElementById("waktu");
    this.jumlah = document.getElementById("jumlah");
    this.objCars = [];
  }

  init() {
    this.formCari.addEventListener("submit", (e) => this.getCars(e));
    this.driver.addEventListener("change", () => this.#checkInput());
    this.tanggal.addEventListener("change", () => this.#checkInput());
    this.waktu.addEventListener("change", () => this.#checkInput());
  }

  async getCars(e) {
    e.preventDefault();
    if (this.objCars.length === 0) {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const cars = await response.json();

      cars.forEach((car) => {
        const objCars = new Car(car);
        this.objCars.push(objCars);
      });
    }

    this.#filterCar(e);
  }

  #filterCar(e) {
    const available = this.driver.value === "true" ? true : false;
    const capacity = this.jumlah.value ? this.jumlah.value : 0;

    const filteredCar = this.objCars.filter(
      (car) =>
        car.available === available &&
        new Date(car.availableAt).getTime() <=
          new Date(this.tanggal.value).getTime() &&
        car.capacity >= +capacity
    );

    this.#renderCars(filteredCar);
  }

  #renderCars(cars) {
    let html = "";
    cars.length === 0
      ? (html += "Mobil tidak ditemukan")
      : cars.map((car) => {
          html += car.render();
        });
    this.divFilteredCar.innerHTML = html;
  }

  #checkInput() {
    if (this.driver.value && this.tanggal.value && this.waktu.value) {
      this.btnSubmit.removeAttribute("disabled");
    }
  }
}

const app = new App();
app.init();
